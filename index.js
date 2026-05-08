const { Client, RemoteAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const QRCode = require('qrcode');
const express = require('express');
const mongoose = require('mongoose');
const { MongoStore } = require('wwebjs-mongo');
const axios = require('axios');

const GROQ_API_KEY = process.env.GROQ_API_KEY;
let latestQR = null;


/* =========================================================
   CONFIGURAÇÃO DO BANCO DE DATA (MongoDB Atlas)
   ========================================================= */
// Cole aqui a string que você copiou do Screenshot 2026-05-04 at 09.47.10.png
const MONGO_URI = process.env.MONGO_URI;
const app = express();
const port = process.env.PORT || 7860;
app.get('/', (req, res) => res.send('Gigi Online 🚤'));
app.get('/qr', async (req, res) => {
  if (!latestQR) {
    return res.send('<html><body style="display:flex;align-items:center;justify-content:center;height:100vh;background:#111;color:#fff;font-family:sans-serif"><h2>⏳ QR Code ainda não gerado. Aguarde e recarregue a página.</h2></body></html>');
  }
  try {
    const img = await QRCode.toDataURL(latestQR, { width: 400 });
    res.send(`<!DOCTYPE html><html><head><title>Gigi QR</title><meta http-equiv="refresh" content="30"></head><body style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background:#111;color:#fff;font-family:sans-serif"><h2>📱 Escaneie com o WhatsApp</h2><img src="${img}" style="border:8px solid white;border-radius:12px"/><p style="color:#aaa;margin-top:16px">Página atualiza automaticamente a cada 30s</p></body></html>`);
  } catch(e) {
    res.send('<h2>Erro ao gerar QR. Tente novamente.</h2>');
  }
});



app.listen(port, () => {
  console.log(`Servidor monitorando a porta ${port}`);
});

/* =========================================================
   HANDLERS GLOBAIS DE PROCESSO (evita zumbi e crash silencioso)
   ========================================================= */
process.on('uncaughtException', err => {
  if (err.code === 'ENOENT') {
    console.log('⚠️ Arquivo de sessão não encontrado — ignorando.');
    return;
  }
  console.error('💥 uncaughtException:', err);
  process.exit(1);
});
process.on('unhandledRejection', (reason) => {
  console.error('⚠️ unhandledRejection (não fatal):', reason);
});

/* =========================================================
   INICIALIZAÇÃO DO BOT COM REMOTE AUTH
   ========================================================= */
let client;

mongoose.connect(MONGO_URI).then(() => {
    console.log('✅ Banco de Dados conectado!');
    
    // MUDANÇA AQUI: Usamos o objeto 'mongoose' direto, sem o .useDb()
    const store = new MongoStore({ mongoose: mongoose }); 
    
 client = new Client({
        authStrategy: new RemoteAuth({
            // 1. NOVO ID: Mudamos para 'gigi-rio-v1' para ignorar qualquer erro do banco antigo
            clientId: 'gigi-rio-v1', 
            store: store,
            backupSyncIntervalMs: 60000, // 1 minuto — garante backup antes do HF reiniciar
            // 2. Pasta oculta: O sistema do HF costuma aceitar melhor pastas com '.'
            dataPath: './.wwebjs_auth' 
        }),
        authTimeoutMs: 600000, 
        puppeteer: {
            headless: true,
            timeout: 600000,
            executablePath: '/usr/bin/google-chrome-stable',
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-gpu',
                '--no-zygote',
                '--disable-extensions',
                '--disable-background-timer-throttling',
                '--disable-backgrounding-occluded-windows',
                '--disable-renderer-backgrounding',
                '--user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'
            ]
        }
    });
    setupBotEvents(client); 
    client.initialize().catch(err => {
        console.error('❌ Erro no initialize():', err.message);
        process.exit(1);
    });
}).catch(err => {
    console.error('❌ ERRO NA CONEXÃO:', err.message);
});


/* =========================================================
   FUNÇÃO DE EVENTOS (O CÉREBRO DA GIGI)
   ========================================================= */

// Flag global para ignorar respostas automáticas do bot no modo humano
let botSending = false;

// Envia resposta sem ativar modo humano
async function botReply(msg, text) {
    botSending = true;
    try {
        await msg.reply(text);
    } finally {
        setTimeout(() => { botSending = false; }, 500);
    }
}

function setupBotEvents(client) {
    
    client.on('qr', qr => {
        latestQR = qr;
        qrcode.generate(qr, { small: true });
        console.log('📱 QR Code gerado! Acesse /qr no navegador para escanear.');
    });

    client.on('ready', () => {
        latestQR = null;
        console.log('✅ Gigi Online e Sessão Protegida no Banco de Dados!');
    });

    client.on('auth_failure', msg => {
        console.error('❌ Falha de autenticação:', msg);
        process.exit(1);
    });

    client.on('disconnected', reason => {
        console.warn('⚠️ Desconectado:', reason);
        process.exit(1); // HF Spaces reinicia o container automaticamente
    });

    // MODO HUMANO — rastreia quais contatos estão sendo atendidos por humano
    const humanSessions = {};
    const HUMAN_TIMEOUT_MINUTES = 30;

    // Detecta quando o DONO do celular responde manualmente
    // Usa setTimeout para ignorar respostas automáticas do próprio bot
    client.on('message_create', async msg => {
        try {
            if (!msg.fromMe || msg.isGroupMsg) return;
            // Se o bot está enviando uma mensagem programaticamente, ignora
            if (botSending) return;
            const contactId = msg.to;
            humanSessions[contactId] = Date.now();
            console.log(`👤 Modo humano ativado para ${contactId}`);
        } catch(e) {}
    });

    client.on('message', async msg => {
        try {
            if (msg.isGroupMsg) return;
            const textOrig = msg.body || '';
            const low = textOrig.toLowerCase().trim();

            // MODO HUMANO — se humano está atendendo, Gigi fica quieta
            const HUMAN_TIMEOUT_MS = HUMAN_TIMEOUT_MINUTES * 60 * 1000;
            if (humanSessions[msg.from]) {
                const elapsed = Date.now() - humanSessions[msg.from];
                if (elapsed < HUMAN_TIMEOUT_MS) {
                    console.log(`🤫 Modo humano ativo para ${msg.from} — Gigi silenciada`);
                    return;
                } else {
                    delete humanSessions[msg.from];
                    console.log(`🤖 Modo humano expirado para ${msg.from} — Gigi voltou`);
                }
            }

            // EASTER EGGS EXCLUSIVOS 🎵
            if (low === "qual foi o maior site de funk do brasil?") return botReply(msg, "Logico que foi o FunkRio! By Ximilis e Cunha.");
            if (low === "quem e tio lima?") return botReply(msg, "Lima é tio meu!");
            if (low === "quem comeu a azeitona?") return botReply(msg, "Tu ainda pergunta?! Fala com o dono do projeto que ele deve saber melhor.");
            if (low === "quem comprou a pracinha?") return botReply(msg, "Djair comprou pra eu!");

            // LOGICA DE SESSÃO E RESPOSTA
            const text = normalizeText(textOrig);
            const session = getSession(msg.from);
            const greeting = getGreeting();

            // SAUDAÇÕES
            if (isGenericGreeting(text)) {
                resetSession(session);
                const reply = `${greeting}! 😊 Sou a Gigi, sua guia da Ilha da Gigóia. Como posso te ajudar?`;
                session.lastBotReply = reply;
                return botReply(msg, reply);
            }

            // MENU EXPLÍCITO
            const menuOptions = `\n\n🗺️ *Montar roteiro*\n🍽️ *Onde comer*\n🛌 *Onde dormir*\n🚤 *Reservar passeio*\n📍 *Como chegar*\n🌅 *Onde ver o pôr do sol*`;
            if (['menu', 'ajuda', 'opcoes', 'opções'].includes(text)) {
                resetSession(session);
                return botReply(msg, `Aqui estão algumas coisas legais que você pode me pedir:${menuOptions}`);
            }

            // DETECÇÃO DE URL/LINK — vai direto pro Groq sem passar pela KB
            const hasUrl = /https?:\/\/[^\s]+/i.test(textOrig) || textOrig.includes('instagram.com') || textOrig.includes('wa.me');
            if (hasUrl) {
                const textSemUrl = textOrig.replace(/https?:\/\/[^\s]+/gi, '').trim();
                const query = textSemUrl || 'O usuário enviou um link';
                const aiReply = await askGroq(query, session, true);
                session.lastBotReply = aiReply;
                return botReply(msg, aiReply);
            }

            // FLUXO DE RESERVA
            if (await handleReservationFlow(msg, session, textOrig)) return;

            // EVENTOS TEMPORÁRIOS — prioridade máxima, responde antes da KB
            const eventReply = getActiveEventReply(textOrig);
            if (eventReply) {
                session.lastBotReply = eventReply;
                session.lastTopic = 'eventos';
                return botReply(msg, eventReply);
            }

            // DETECÇÃO DE NEGAÇÃO — vai direto pro Groq quando usuário está recusando algo
            const negacoes = ['nao quero', 'nao preciso', 'sem ', 'dispenso', 'nao vou'];
            const temNegacao = negacoes.some(n => text.startsWith(n) || text.includes(' ' + n + ' '));
            if (temNegacao && session.lastBotReply) {
                const aiReply = await askGroq(textOrig, session);
                session.lastBotReply = aiReply;
                return botReply(msg, aiReply);
            }

            // MENSAGENS CURTAS/AMBÍGUAS — usa contexto da sessão em vez de tratar como nova conversa
            const palavrasAmbiguas = ['sim', 'nao', 'ok', 'certo', 'pode', 'quero', 'vamos', 'bora', 'blz', 'ta', 'tá', 'ótimo', 'otimo', 'top', 'perfeito', 'show', 'legal', 'entendi', 'obrigado', 'obrigada', 'valeu', 'entendido'];
            const isMensagemCurta = text.split(' ').filter(w => w.length > 0).length <= 3;
            if (isMensagemCurta && palavrasAmbiguas.includes(text) && session.lastBotReply) {
                const aiReply = await askGroq(textOrig, session);
                session.lastBotReply = aiReply;
                return botReply(msg, aiReply);
            }

            // BUSCA LOCAL (Knowledge Base da Ilha)
            const matches = findBestAnswers(text, session);
            if (matches.length > 0) {
                const reply = buildKnowledgeReply(matches, session);
                session.lastBotReply = reply;
                return botReply(msg, reply);
            }

            // IA GLOBAL (Groq) — fallback quando KB não encontra resposta
            const aiReply = await askGroq(textOrig, session);
            session.lastBotReply = aiReply;
            return botReply(msg, aiReply);

        } catch (e) { 
            console.error('Erro na mensagem:', e); 
        }
    });
  }


const CONFIG = {
  SESSION_TIMEOUT_MINUTES: 30,
  MAX_MULTI_ANSWERS: 2,
  MIN_SCORE_TO_REPLY: 6,
  TIMEZONE: 'America/Sao_Paulo',
  BOT_NAME: 'Gigi',
  PORTAL_NAME: 'Portal Ilha da Gigóia',
};

/* =========================
   EVENTOS TEMPORÁRIOS
   - start/end: new Date(ano, mês-1, dia) — mês começa em 0 (jan=0, dez=11)
   - end é INCLUSIVO — coloque o dia seguinte ao último dia do evento
   ========================= */
const TEMPORARY_EVENTS = [

  // ── MAIO ──────────────────────────────────────────────────
  {
    id: 'comida_di_buteco_2026',
    keywords: ['comida di buteco', 'comida de buteco', 'buteco', 'concurso buteco', 'festival buteco'],
    answer: '🍺 O *Comida di Buteco 2026* está acontecendo agora na ilha! É um concurso onde o público prova os pratos exclusivos dos botecos participantes e vota no favorito. Experimente os pratos do *Bar Caiçaras*, *Bar do Elson* e *Boteco da Capivara*. Quer saber mais?',
    start: new Date(2026, 3, 15),
    end:   new Date(2026, 4, 16),
  },
  {
    id: 'dia_das_maes_2026',
    keywords: ['dia das maes', 'dia das maes', 'presente mae', 'programacao maes', 'passeio maes', 'hamburguer', 'burger day'],
    answer: '💐 Dia das Mães na Ilha da Gigóia é inesquecível! Almoço especial no *Ocyá*, *Maracujá* ou *Laguna*, passeio de barco pelo Pantanal Carioca ou pôr do sol no *Akbar*. Quer que a equipe monte um roteiro especial?',
    start: new Date(2026, 4, 8),
    end:   new Date(2026, 4, 12),
  },
  {
    id: 'dia_hamburguer_2026',
    keywords: ['dia do hamburguer', 'hamburguer day', 'burger day', 'dia nacional do hamburguer'],
    answer: '🍔 Hoje é o Dia do Hambúrguer! O *Parada Burger* na ilha faz hambúrgueres artesanais incríveis. Aproveite o dia para visitar a ilha e comemorar com um burger na mão!',
    start: new Date(2026, 4, 28),
    end:   new Date(2026, 4, 29),
  },

  // ── JUNHO ─────────────────────────────────────────────────
  {
    id: 'festival_inverno_2026',
    keywords: ['festival de inverno', 'festival inverno', 'inverno cultural'],
    answer: '❄️ O *Festival de Inverno* está acontecendo na ilha de 1 a 14 de junho! São shows, gastronomia especial e muita cultura. Venha aproveitar o clima fresquinho com a melhor programação da ilha!',
    start: new Date(2026, 5, 1),
    end:   new Date(2026, 5, 15),
  },
  {
    id: 'corpus_christi_2026',
    keywords: ['corpus christi', 'feriado junho', 'feriado religioso'],
    answer: '⛪ Corpus Christi é feriado na quinta-feira (04/06)! Ótima oportunidade para um passeio de barco ou almoço especial na ilha. Quer sugestões de roteiro para o feriado?',
    start: new Date(2026, 5, 3),
    end:   new Date(2026, 5, 6),
  },
  {
    id: 'namorados_2026',
    keywords: ['dia dos namorados', 'namorados', 'romantico', 'surpresa namorada', 'surpresa namorado', 'jantar romantico'],
    answer: '❤️ Dia dos Namorados (12/06) na Ilha da Gigóia é puro romance! Jantar ao pôr do sol no *Maracujá* ou *Venne*, passeio de barco privativo ou drinks no *Akbar*. Quer que a equipe monte algo especial para vocês dois?',
    start: new Date(2026, 5, 10),
    end:   new Date(2026, 5, 14),
  },
  {
    id: 'festa_junina_2026',
    keywords: ['festa junina', 'arraial', 'quadrilha', 'sao joao', 'sao pedro', 'forró', 'forro'],
    answer: '🎉 Festa Junina na ilha é uma animação só! Arraial com forró, comidas típicas e muita alegria. Fique de olho na nossa agenda para não perder as festas de São João e São Pedro aqui na Gigóia!',
    start: new Date(2026, 5, 1),
    end:   new Date(2026, 6, 1),
  },
  // ── COPA DO MUNDO 2026 — jogos do Brasil ─────────────
  {
    id: 'copa_brasil_jogo1',
    keywords: ['copa do mundo', 'copa 2026', 'mundial', 'selecao', 'brasil na copa', 'jogo do brasil', 'brasil x marrocos', 'marrocos'],
    answer: '⚽ Jogo do Brasil na Copa do Mundo 2026!\n\n🗓️ *13/Jun (Sáb)* — Brasil x Marrocos\n🗓️ *19/Jun (Sex)* — Brasil x Haiti\n🗓️ *24/Jun (Qua)* — Escócia x Brasil\n\nA Ilha da Gigóia tem ótimos bares para assistir aos jogos com cerveja gelada e boa companhia. Quer sugestões de onde curtir os jogos por aqui?',
    start: new Date(2026, 5, 11),
    end:   new Date(2026, 6, 20),
  },

  // ── JULHO ─────────────────────────────────────────────────
  {
    id: 'ferias_julho_2026',
    keywords: ['ferias', 'ferias escolares', 'ferias de julho', 'criancas', 'familia nas ferias'],
    answer: '🏖️ Férias escolares de julho (1ª e 2ª semana)! A ilha é perfeita para família: passeio pelo Pantanal Carioca para ver jacarés, barquinho, natureza e ótimos restaurantes. Quer um roteiro especial para as crianças?',
    start: new Date(2026, 6, 1),
    end:   new Date(2026, 6, 15),
  },
  {
    id: 'dia_pizza_2026',
    keywords: ['dia da pizza', 'pizza day', 'dia mundial da pizza'],
    answer: '🍕 Hoje é o Dia da Pizza! O *Alla Pergola* na ilha faz as melhores pizzas e massas italianas, perfeito para um jantar especial. Quer reservar uma mesa?',
    start: new Date(2026, 6, 10),
    end:   new Date(2026, 6, 11),
  },

  // ── AGOSTO ────────────────────────────────────────────────
  {
    id: 'dia_dos_pais_2026',
    keywords: ['dia dos pais', 'presente pai', 'programacao pais', 'passeio com pai'],
    answer: '👨 Dia dos Pais (09/08) na Ilha da Gigóia! Um almoço no *Cais Bar* ou *Laguna*, passeio de barco ou uma tarde no *Boteco da Capivara* são ótimas pedidas. Quer a equipe monte um roteiro especial para o seu pai?',
    start: new Date(2026, 7, 7),
    end:   new Date(2026, 7, 11),
  },

  // ── SETEMBRO ──────────────────────────────────────────────
  {
    id: 'independencia_2026',
    keywords: ['independencia', 'sete de setembro', '7 de setembro', 'feriado setembro'],
    answer: '🇧🇷 Feriado de 7 de Setembro! Que tal celebrar a independência do Brasil em um dos lugares mais bonitos do Rio? A ilha está esperando por você com bons restaurantes e passeios incríveis!',
    start: new Date(2026, 8, 6),
    end:   new Date(2026, 8, 9),
  },
  {
    id: 'cachaca_day_2026',
    keywords: ['dia da cachaca', 'cachaca day', 'dia nacional da cachaca'],
    answer: '🥃 Dia Nacional da Cachaça (13/09)! Os bares da ilha fazem caipirinha artesanal de respeito. O *Bar Caiçaras*, *Akbar* e *Capivara* são parada obrigatória hoje!',
    start: new Date(2026, 8, 13),
    end:   new Date(2026, 8, 14),
  },

  // ── OUTUBRO ───────────────────────────────────────────────
  {
    id: 'aparecida_criancas_2026',
    keywords: ['nossa senhora aparecida', 'dia das criancas', 'criancas', 'feriado outubro', '12 de outubro'],
    answer: '👧 Feriado de 12/10 — Nossa Senhora Aparecida e Dia das Crianças! A ilha é um parque natural para as crianças: jacarés no Pantanal Carioca, barquinho e muito espaço para correr. Quer um roteiro kids?',
    start: new Date(2026, 9, 10),
    end:   new Date(2026, 9, 14),
  },
  {
    id: 'macarrao_day_2026',
    keywords: ['dia do macarrao', 'dia mundial do macarrao', 'macarrao day', 'pasta day'],
    answer: '🍝 Dia Mundial do Macarrão (25/10)! O *Alla Pergola* e o *Venne* na ilha têm massas artesanais de dar água na boca. Ótima desculpa para uma visita!',
    start: new Date(2026, 9, 25),
    end:   new Date(2026, 9, 26),
  },

  // ── NOVEMBRO ──────────────────────────────────────────────
  {
    id: 'finados_2026',
    keywords: ['finados', 'dia dos mortos', 'feriado novembro', '2 de novembro'],
    answer: '🕯️ Feriado de Finados (02/11). A ilha é um refúgio tranquilo para quem quer um dia de paz e natureza. Os restaurantes e bares estão abertos para receber você!',
    start: new Date(2026, 10, 1),
    end:   new Date(2026, 10, 4),
  },
  {
    id: 'republica_2026',
    keywords: ['proclamacao da republica', '15 de novembro', 'feriado 15 novembro'],
    answer: '🇧🇷 Feriado de 15/11 — Proclamação da República! Um ótimo fim de semana prolongado para visitar a ilha. Quer sugestões de roteiro?',
    start: new Date(2026, 10, 14),
    end:   new Date(2026, 10, 17),
  },
  {
    id: 'consciencia_negra_2026',
    keywords: ['consciencia negra', 'dia da consciencia negra', '20 de novembro', 'feriado consciencia'],
    answer: '✊ Dia da Consciência Negra (20/11)! A Ilha da Gigóia celebra a diversidade cultural carioca. Aproveite o feriado para um passeio cheio de história e gastronomia!',
    start: new Date(2026, 10, 19),
    end:   new Date(2026, 10, 22),
  },

  // ── DEZEMBRO ──────────────────────────────────────────────
  {
    id: 'natal_2026',
    keywords: ['natal', 'ceia de natal', 'programacao natal', 'passeio natal', '25 de dezembro'],
    answer: '🎄 Natal na Ilha da Gigóia é mágico! Ceia especial nos melhores restaurantes com vista para a lagoa ou uma tarde em família no *Kauai*. Quer que a equipe reserve algo especial para o dia 25?',
    start: new Date(2026, 11, 23),
    end:   new Date(2026, 11, 27),
  },
  {
    id: 'reveillon_2026',
    keywords: ['reveillon', 'ano novo', 'virada', 'festas de fim de ano', '31 de dezembro', 'vespera de ano novo'],
    answer: '🎆 Réveillon na Ilha da Gigóia é inesquecível! Ver os fogos do Rio de Janeiro da beira da lagoa é uma experiência única. Os restaurantes e bares têm programação especial na virada. Quer reservar agora?',
    start: new Date(2026, 11, 29),
    end:   new Date(2027, 0, 2),
  },
];

function getActiveEventReply(text) {
  const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }));
  const normalized = normalizeText(text);
  for (const event of TEMPORARY_EVENTS) {
    if (now < event.start || now > event.end) continue;
    const matched = event.keywords.some(kw => normalized.includes(normalizeText(kw)));
    if (matched) return event.answer;
  }
  return null;
}

/* =========================
   FUNÇÕES UTILITÁRIAS
   ========================= */
function normalizeText(value = '') {
  return String(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9\s$.,:/-]/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getWords(text) {
  return normalizeText(text)
    .split(' ')
    .filter(word => word.length >= 3);
}

function containsPhrase(text, phrase) {
  const normalizedPhrase = normalizeText(phrase);
  if (!normalizedPhrase) return false;
  // A expressão regular usa \b (limite de palavra) e s? (plural opcional)
  const pattern = new RegExp(`\\b${escapeRegExp(normalizedPhrase)}s?\\b`, 'i');
  return pattern.test(text);
}

function getGreeting() {
  const hour = new Date(new Date().toLocaleString('en-US', { timeZone: CONFIG.TIMEZONE })).getHours();
  if (hour >= 5 && hour < 12) return 'Bom dia';
  if (hour >= 12 && hour < 18) return 'Boa tarde';
  return 'Boa noite';
}

function isGenericGreeting(text) {
  const greetings = ['oi', 'ola', 'olá', 'bom dia', 'boa tarde', 'boa noite', 'tudo bem', 'opa', 'alo', 'alô', 'hey'];
  const clean = normalizeText(text);
  return greetings.some(g => containsPhrase(clean, g)) && clean.length <= 25;
}

function resetSession(session) {
  session.step = 'free';
  session.reservation = {};
  session.lastTopic = null;
  session.lastBotReply = null;
}

/* =========================
   BASE DE CONHECIMENTO COMPLETA E EXAUSTIVA
   ========================= */
const KNOWLEDGE_BASE = [
  
  // 1. ATENDIMENTO HUMANO E RESERVAS
  {
    id: 'human_handoff',
    category: 'atendimento',
    intent: 'human',
    priority: 10,
    keywords: ['falar com atendente', 'falar com humano', 'atendimento humano', 'telefone do portal', 'contato do portal', 'equipe humana', 'atendente'],
    answer: 'Claro! Vou pedir para alguém da equipe humana assumir a conversa por aqui. 😊\n\nEnquanto isso, se quiser adiantar, me diga seu nome e o que você precisa.'
  },
  {
    id: 'reservation_general',
    category: 'reservas',
    intent: 'booking',
    priority: 8,
    keywords: ['reservar', 'reserva', 'agendar', 'agendamento', 'marcar', 'orçamento', 'orcamento', 'comprar', 'cotar', 'valor exato'],
    answer: 'Oba! Adoro ajudar com reservas e orçamentos. 🚤\n\nPara eu te ajudar, me envie: *data desejada*, *quantas pessoas*, *qual atração* e *seu nome*.'
  },

  // 2. ROTEIRO
  {
    id: 'roteiro',
    category: 'roteiro',
    intent: 'planning',
    priority: 9,
    keywords: ['roteiro', 'dicas do que fazer', 'o que sugere', 'sugestao de roteiro', 'planejar visita', 'montar roteiro'],
    answer: 'Eu adoraria montar um roteiro personalizado para você! 🗺️ Temos passeios de barco, muita natureza, ótimos restaurantes e barzinhos.\n\nMe conta: que dia você vem, quantas pessoas são e o que vocês mais gostam de fazer?'
  },

  // 3. FALSOS POSITIVOS E CONTEXTOS
  {
    id: 'sushi_negative',
    category: 'restaurantes',
    intent: 'negative_sushi',
    priority: 10,
    keywords: ['sushi', 'japonês', 'japones', 'japa', 'sashimi', 'temaki', 'yakisoba', 'rodízio de sushi', 'rodizio de sushi'],
    answer: 'Atualmente não temos restaurantes focados em sushi aqui na ilha. 🍣 Mas se você gosta de peixes frescos, vai amar a alta gastronomia de frutos do mar do *Ocyá*, *Laguna* ou *Maracujá*!'
  },
  {
    id: 'baleia_negative',
    category: 'passeios',
    intent: 'negative_animals',
    priority: 10,
    keywords: ['baleia', 'tubarao', 'tubarão', 'golfinho', 'pinguim', 'leao marinho', 'whale', 'shark', 'dolphin'],
    answer: 'Hahaha! Na nossa lagoa não tem baleia nem tubarão! 🐋 A água é abrigada. As grandes estrelas da nossa fauna são os jacarés-de-papo-amarelo, capivaras e garças.'
  },
  {
    id: 'nadar_lagoa_negative',
    category: 'passeios',
    intent: 'negative_swim',
    priority: 10,
    keywords: ['nadar', 'banho', 'mergulhar', 'agua limpa', 'swim', 'bathe', 'dive', 'pode nadar'],
    answer: 'Antigamente a lagoa era límpida para banho, mas hoje NÃO recomendamos mergulhar nela por conta da urbanização. 🚫 Se você quer dar aquele mergulho em águas cristalinas, a dica é agendar nosso passeio para as *Ilhas Tijucas*!'
  },
  {
    id: 'praia_negative',
    category: 'passeios',
    intent: 'negative_beach',
    priority: 8,
    keywords: ['praia de areia', 'praia na ilha', 'tem praia', 'beach', 'sandy beach', 'praia'],
    answer: 'A Ilha da Gigóia é cercada pela lagoa, então não temos praia com ondas por aqui. 🌴 Mas o barquinho pode te deixar num deck a apenas 5 minutinhos de caminhada da Praia da Barra!'
  },

  // 4. COMO CHEGAR E EMBARQUE
  {
    id: 'pontos_embarque',
    category: 'como_chegar',
    intent: 'boarding_points',
    priority: 9,
    keywords: ['onde embarcar', 'onde pegar o barco', 'ponto de embarque', 'deck', 'de onde sai', 'pegar a balsa'],
    answer: 'Temos vários pontos de embarque espalhados pela Barra! 🚤 Os principais são: *Beco da Unimed* (perto do metrô), *Barra Point*, *Downtown*, *Condado dos Cascais*, *Marina Barra Clube* e *Ilha dos Pescadores*. Qual fica mais perto de você?'
  },
  {
    id: 'embarque_shoppings',
    category: 'como_chegar',
    intent: 'boarding_shopping',
    priority: 9,
    keywords: ['barra point', 'downtown', 'condado dos cascais', 'shopping'],
    answer: 'Sim! Você pode embarcar tranquilamente por aí. Existem decks atrás do Shopping Barra Point, no Downtown e no Condado dos Cascais. É só se aproximar do deck e fazer sinal para um barco-táxi! 🚤'
  },
  {
    id: 'embarque_marina',
    category: 'como_chegar',
    intent: 'boarding_marina',
    priority: 9,
    keywords: ['marina barra clube', 'ilha dos pescadores', 'marina'],
    answer: 'Com certeza! A Marina Barra Clube e a Ilha dos Pescadores também são pontos de acesso. Os barcos costumam pegar passageiros por lá. Só confirme com o barqueiro o seu destino aqui na Gigóia!'
  },
  {
    id: 'como_chegar_metro',
    category: 'como_chegar',
    intent: 'directions_metro',
    priority: 10,
    keywords: ['unimed', 'metro', 'metrô', 'jardim oceanico', 'jardim oceânico', 'posto de gasolina', 'beco da unimed', 'como chegar', 'onde fica', 'localizacao', 'endereco', 'chegar', 'como ir'],
    answer: 'O jeito mais fácil de chegar é de metrô! Salte na *estação Jardim Oceânico (Saída Lagoa)*. O acesso principal fica num beco entre o Posto de Gasolina e o prédio da Unimed (Av. Armando Lombardi, 350). O deck de embarque fica a menos de 5 minutos de caminhada de lá. 📍'
  },
  {
    id: 'estacionamento',
    category: 'como_chegar',
    intent: 'parking',
    priority: 9,
    keywords: ['carro', 'estacionamento', 'estacionar', 'vaga', 'parar o carro', 'dirigir', 'uber'],
    answer: 'A ilha não tem carros e não tem ruas asfaltadas! 🚫🚗 O clima aqui é de vila. Se vier de carro, coloque no GPS *Av. Armando Lombardi, 350*. Existem estacionamentos particulares no entorno dos principais decks para você deixar o carro antes de pegar o barco.'
  },
  {
    id: 'barco_travessia',
    category: 'como_chegar',
    intent: 'boat_crossing',
    priority: 10,
    keywords: ['balsa', 'travessia', 'barquinho', 'valor do barco', 'preco do barco', 'preço do barco', 'horario do barco', 'quanto custa a travessia', 'como funciona a travessia'],
    answer: 'A travessia é a melhor parte! As chalanas e barcos-táxi funcionam *24 horas por dia*. O valor varia entre *R$ 2,00 e R$ 5,00 por pessoa*. Dica: tenha dinheiro trocado e diga ao barqueiro qual restaurante ou pousada você vai. 🚤'
  },
  {
    id: 'precos_gerais',
    category: 'precos',
    intent: 'prices_general',
    priority: 8,
    keywords: ['preco do passeio', 'valor do passeio', 'custa quanto o passeio', 'quanto custa na ilha', 'preco da ilha', 'quanto custa o barco', 'valor da travessia'],
    answer: 'Os valores dependem do que você quer fazer!\n\n• Travessia de barco: R$ 2 a R$ 5.\n• Pantanal Carioca: média de R$ 50.\n• Ilhas Tijucas: média de R$ 150.\n\nPara restaurantes e pousadas, os valores variam. O que você gostaria de cotar agora?'
  },

  // 5. PASSEIOS DE BARCO E ESPORTES
  {
    id: 'passeios_geral',
    category: 'passeios',
    intent: 'tours_general',
    priority: 6,
    keywords: ['passeio de barco', 'passeios de barco', 'passear de barco', 'passeio na ilha', 'tour na ilha', 'fazer o que na ilha', 'o que fazer na ilha', 'atividade na ilha', 'turismo na ilha', 'passeio', 'passeios', 'tour'],
    answer: 'Os passeios de barco são a alma da ilha! 🚤 Eu recomendo muito o tour pelo *Pantanal Carioca* (natureza e jacarés) ou as *Ilhas Tijucas* (mar aberto e banho). Temos também aluguel de jet ski! Qual seu estilo?'
  },
  {
    id: 'pantanal_carioca',
    category: 'passeios',
    intent: 'tour_pantanal',
    priority: 10,
    keywords: ['pantanal', 'pantanal carioca', 'jacare', 'jacaré', 'capivara', 'aves', 'passaros', 'natureza', 'safari'],
    answer: 'O *Pantanal Carioca* é um passeio lindo de uns 45 minutos pelos manguezais. É comum ver jacarés-de-papo-amarelo, capivaras e garças. O valor médio é R$ 50 por pessoa. Quer agendar uma saída com a nossa equipe?'
  },
  {
    id: 'ilhas_tijucas',
    category: 'passeios',
    intent: 'tour_tijucas',
    priority: 10,
    keywords: ['tijucas', 'ilhas tijucas', 'ilha tijucas', 'mar', 'mergulho', 'tartaruga', 'caribe carioca', 'mar aberto', 'ilhas', 'ir nas ilhas'],
    answer: 'As *Ilhas Tijucas* são o nosso "Caribe Carioca"! 🤿 É um passeio de umas 4 horas para o mar aberto, ótimo para banho e ver tartarugas (depende das condições do mar). Custa em média R$ 150 por pessoa. Vamos verificar as saídas?'
  },
  {
    id: 'praia_reserva',
    category: 'passeios',
    intent: 'tour_reserva',
    priority: 9,
    keywords: ['reserva', 'praia da reserva', 'marapendi', 'canal'],
    answer: 'Temos um passeio maravilhoso de barco até a *Praia da Reserva*! 🏝️ São cerca de 2 horas navegando relaxadamente pelos canais com parada para banho de mar.'
  },
  {
    id: 'jet_ski',
    category: 'passeios',
    intent: 'tour_jetski',
    priority: 10,
    keywords: ['jet ski', 'jetski', 'jet-ski', 'adrenalina', 'pilotar', 'moto aquatica'],
    answer: 'Curte adrenalina? 🚀 O aluguel de Jet Ski é perfeito para explorar a lagoa com liberdade! Valores médios: R$ 200 (15 min), R$ 300 (30 min) e R$ 600 (1 hora). Tem até orientação para iniciantes. Quer reservar um horário?'
  },
  {
    id: 'caiaque_sup',
    category: 'passeios',
    intent: 'tour_sports',
    priority: 9,
    keywords: ['caiaque', 'stand up', 'sup', 'esportes', 'remo', 'kayak', 'paddle'],
    answer: 'A lagoa é um paraíso para esportes aquáticos! 🚣‍♂️ O aluguel de Caiaque e Stand-Up Paddle (SUP) é super comum por aqui para explorar os canais num ritmo bem tranquilo.'
  },

  // 6. RESTAURANTES E CAFÉS
  {
    id: 'restaurantes_geral',
    category: 'restaurantes',
    intent: 'food_general',
    priority: 6,
    keywords: ['comer', 'restaurante', 'restaurantes', 'fome', 'almoco', 'almoço', 'jantar', 'comida', 'onde comer', 'gastronomia', 'alimentacao'],
    answer: 'A Gigóia é um paraíso gastronômico! 🍤 Temos opções para todos os estilos: *Maracujá* e *Ocyá* (alta gastronomia); *Cais Bar* e *Laguna* (tradição familiar); *Deck Bar* e *Salomé* (petiscos); ou *Venne* e *Camarão da Barra*. Qual seu clima hoje?'
  },
  {
    id: 'frutos_do_mar',
    category: 'restaurantes',
    intent: 'food_seafood',
    priority: 8,
    keywords: ['frutos do mar', 'peixe', 'camarao', 'camarão', 'moqueca', 'lagosta', 'ceviche'],
    answer: 'Frutos do mar frescos são o forte daqui! Experimente a alta gastronomia do *Ocyá*, a vista do *Maracujá da Ilha*, o tradicional *Laguna* ou a famosa moqueca do *Cais Bar*!'
  },
  {
    id: 'ocya',
    category: 'restaurantes',
    intent: 'food_ocya',
    priority: 10,
    keywords: ['ocya', 'ocyá', 'michelin', 'geronimo', 'alta gastronomia'],
    answer: 'O *Ocyá* é sensacional! É reconhecido pelo Guia Michelin e comandado pelo chef Gerônimo Athiê. Eles usam técnicas de maturação de peixes, é pura alta gastronomia. 🐟'
  },
  {
    id: 'maracuja',
    category: 'restaurantes',
    intent: 'food_maracuja',
    priority: 10,
    keywords: ['maracuja', 'maracujá', 'maracuja da ilha'],
    answer: 'O *Maracujá da Ilha* fica na Ilha Primeira! Eles têm especialidade em frutos do mar e uma vista deslumbrante que é perfeita para ver o pôr do sol. 🌅'
  },
  {
    id: 'laguna',
    category: 'restaurantes',
    intent: 'food_laguna',
    priority: 10,
    keywords: ['laguna', 'pedra da gavea', 'primeiro restaurante', 'antigo', 'pioneiro'],
    answer: 'O *Restaurante Laguna* é a nossa tradição! É considerado o pioneiro da ilha, com um clima rústico chic, comida artesanal e uma vista linda para a Pedra da Gávea.'
  },
  {
    id: 'cais_bar',
    category: 'restaurantes',
    intent: 'food_cais',
    priority: 10,
    keywords: ['cais bar', 'cais', 'melhor moqueca', 'rodizio de petiscos'],
    answer: 'O *Cais Bar* tem pratos super fartos e um clima familiar delicioso. A moqueca tradicional deles é famosíssima na região! 🍲'
  },
  {
    id: 'deck_bar',
    category: 'restaurantes',
    intent: 'food_deck',
    priority: 10,
    keywords: ['deck', 'guarda chuva', 'guarda-chuva', 'deck bar', 'camarao no abacaxi'],
    answer: 'O *Deck Bar* tem um ambiente bem vibrante e música ao vivo! É famoso pelo teto cheio de guarda-chuvas coloridos e pelo prato "Camarão no Abacaxi". 🍍'
  },
  {
    id: 'camarao_da_barra',
    category: 'restaurantes',
    intent: 'food_camarao',
    priority: 10,
    keywords: ['camarao da barra', 'camarão da barra', 'especializado em camarao'],
    answer: 'O *Camarão da Barra* tem uma cozinha contemporânea bem moderna, especializada em vários preparos diferentes e criativos de camarão. 🍤'
  },
  {
    id: 'salome',
    category: 'restaurantes',
    intent: 'food_salome',
    priority: 10,
    keywords: ['salome', 'salomé', 'salome al mare', 'tabua de frutos do mar'],
    answer: 'O *Salomé al Mare* fica na charmosa Ilha Primeira! Eles são muito conhecidos pelo pastel de camarão e pelas tábuas completas de mariscos. 🐚'
  },
  {
    id: 'venne',
    category: 'restaurantes',
    intent: 'food_venne',
    priority: 10,
    keywords: ['venne', 'mediterranea', 'mediterraneo', 'elegante'],
    answer: 'O *Venne Gastronomia* oferece uma culinária mediterrânea bem refinada e pratos autorais. O ambiente é super elegante, ideal para ocasiões especiais. 🍷'
  },
  {
    id: 'cafes_geral',
    category: 'cafes',
    intent: 'cafe_general',
    priority: 9,
    keywords: ['cafe', 'café', 'cafeteria', 'cafe da manha', 'café da manhã', 'bolo', 'tapioca', 'pausa'],
    answer: 'Para um café da manhã gostoso ou uma pausa à tarde, temos o *Café da Poesia* (com pegada artística) e o charmoso *Cantinho do Café* (com cardápio super variado). ☕'
  },
  {
    id: 'cafe_poesia',
    category: 'cafes',
    intent: 'cafe_poesia',
    priority: 10,
    keywords: ['cafe da poesia', 'poesia'],
    answer: 'O *Café da Poesia* é lindo! Eles misturam cafeteria com arte e poesia, um ambiente bem acolhedor para começar o dia com um café especial. ☕'
  },
  {
    id: 'cantinho_cafe',
    category: 'cafes',
    intent: 'cafe_cantinho',
    priority: 10,
    keywords: ['cantinho do cafe', 'cantinho'],
    answer: 'O *Cantinho do Café* é uma cafeteria super charmosa na ilha, com cardápio variado, ideal para um café da manhã relaxante ou um lanchinho à tarde. 🍰'
  },
  {
    id: 'burger',
    category: 'lanches',
    intent: 'food_burger',
    priority: 10,
    keywords: ['burger', 'hamburguer', 'hambúrguer', 'sanduiche', 'lanche', 'parada burger', 'fome de lanche'],
    answer: 'Bateu a fome de lanche? O *Parada Burger* prepara hambúrgueres artesanais na hora, num ambiente bem descontraído. Ótimo para o início da noite! 🍔'
  },
  {
    id: 'pizza',
    category: 'lanches',
    intent: 'food_pizza',
    priority: 10,
    keywords: ['pizza', 'pizzaria', 'massa', 'ilha gourmet', 'pasta'],
    answer: 'Para lanches rápidos, pizzas ou massas, o *Ilha Gourmet* é uma opção super versátil e prática no meio do passeio. 🍕'
  },

  // 7. BARES E VIDA NOTURNA
  {
    id: 'bares_geral',
    category: 'bares',
    intent: 'bars_general',
    priority: 6,
    keywords: ['bar', 'bares', 'beber', 'cerveja', 'chopp', 'caipirinha', 'drinks', 'bebida', 'vida noturna', 'musica ao vivo', 'show ao vivo', 'banda ao vivo'],
    answer: 'Nada supera o fim de tarde na Gigóia! 🍻 Temos o *Akbar* (drinks), *Briza* (descontraído), *Caiçaras* (boêmio/música ao vivo), *Capivara* (cerveja trincando), *Elson* e *Joana* (botecos raiz), além do *Kai* e *Kauai*. Qual vibe você prefere?'
  },
  {
    id: 'por_do_sol',
    category: 'bares',
    intent: 'bars_sunset',
    priority: 9,
    keywords: ['por do sol', 'pôr do sol', 'fim de tarde', 'visual', 'pordosol', 'sunset'],
    answer: 'Quer curtir um pôr do sol inesquecível? 🌅 Eu recomendo a vista do *Boteco da Capivara*, do *Bar Caiçaras*, do clássico *Akbar*, do *Maracujá da Ilha* ou do animado *Kauai*.'
  },
  {
    id: 'akbar',
    category: 'bares',
    intent: 'bar_akbar',
    priority: 10,
    keywords: ['ak bar', 'akbar'],
    answer: 'O *Akbar* foca em drinks autorais e tem uma das vistas mais disputadas para o canal! É excelente para curtir o fim de tarde. 🍹'
  },
  {
    id: 'briza',
    category: 'bares',
    intent: 'bar_briza',
    priority: 10,
    keywords: ['briza', 'bar briza'],
    answer: 'O *Briza* tem um ambiente super descontraído, com música boa e petiscos que são a cara do Rio. Clima maravilhoso! 🎵'
  },
  {
    id: 'caicara',
    category: 'bares',
    intent: 'bar_caicara',
    priority: 10,
    keywords: ['caicara', 'caiçara', 'caicaras', 'caiçaras', 'bar caicara', 'arte', 'boemio', 'palco cultural'],
    answer: 'O *Bar Caiçara* é super autêntico! 🎸 Eles misturam gastronomia, chopp gelado, e um palco cultural com música ao vivo, teatro e arte, de frente pro pôr do sol.'
  },
  {
    id: 'capivara',
    category: 'bares',
    intent: 'bar_capivara',
    priority: 10,
    keywords: ['capivara', 'boteco da capivara', 'cerveja gelada', 'cerveja trincando'],
    answer: 'O *Boteco da Capivara* é um clássico imperdível da ilha. Muita simplicidade, vista para a lagoa e cerveja literalmente trincando. 🍻'
  },
  {
    id: 'elson',
    category: 'bares',
    intent: 'bar_elson',
    priority: 10,
    keywords: ['elson', 'bar do elson', 'barato', 'simples', 'frango assado', 'assistir futebol na ilha'],
    answer: 'O *Bar do Elson* é o boteco mais acolhedor! Conhecido pelos petiscos, o famoso frango assado e é o melhor lugar da ilha para tomar cerveja assistindo jogo de futebol. ⚽🍗'
  },
  {
    id: 'joana',
    category: 'bares',
    intent: 'bar_joana',
    priority: 10,
    keywords: ['joana', 'bar da joana', 'comida caseira', 'pastel', 'caldinho'],
    answer: 'O *Bar da Joana* tem uma comida caseira de boteco sensacional. É aquele clima gostoso de vila que a gente ama, com ótimos pastéis! 🍳'
  },
  {
    id: 'kai',
    category: 'bares',
    intent: 'bar_kai',
    priority: 10,
    keywords: ['kai', 'bar kai', 'modernidade', 'jovem', 'saideira', 'madrugada'],
    answer: 'O *Bar Kai* traz modernidade! É um ponto de encontro com vibe bem jovem, drinks coloridos à beira d\'água, ideal para esticar a noite. 🌙'
  },
  {
    id: 'kauai',
    category: 'bares',
    intent: 'bar_kauai',
    priority: 10,
    keywords: ['kauai', 'bar kauai', 'crianca', 'criança', 'kids', 'filhos', 'familia', 'família', 'ilha do ipe', 'estilo tropical'],
    answer: 'O *Kauai* fica na Ilha do Ipê e tem um estilo bem tropical. É ideal para famílias, porque além do fim de tarde relaxante, eles têm uma Área Kids enorme para as crianças brincarem! 🌴'
  },

  // 8. HOSPEDAGEM E AIRBNB
  {
    id: 'hospedagem_geral',
    category: 'hospedagem',
    intent: 'hotel_general',
    priority: 6,
    keywords: ['dormir', 'pousada', 'hotel', 'hospedagem', 'ficar', 'pernoite', 'onde dormir', 'onde ficar'],
    answer: 'Dormir acordando com o som da lagoa é um luxo! 🛏️ Temos pousadas clássicas (*Veneza Carioca*, *Pousada Barra*, *Marísis*, *Casanova*) e também locação de temporada pelo Airbnb (*Casa Venti*, *Lux 48*, *Casa Goia*, *Casa da Estátua*). Prefere hotel ou casa inteira?'
  },
  {
    id: 'veneza_carioca',
    category: 'hospedagem',
    intent: 'hotel_veneza',
    priority: 10,
    keywords: ['veneza carioca', 'boutique', 'intimista'],
    answer: 'O *Veneza Carioca* é um Hotel Boutique super romântico e com decoração exclusiva! Fica na charmosíssima Ilha Primeira, sendo ideal para casais que buscam sossego. ✨'
  },
  {
    id: 'pousada_barra',
    category: 'hospedagem',
    intent: 'hotel_barra',
    priority: 10,
    keywords: ['pousada barra da tijuca', 'pousada barra', 'mais perto do metro', 'melhor localizacao'],
    answer: 'A *Pousada Barra da Tijuca* é uma das mais conhecidas da ilha! Tem uma localização excelente e estratégica: é a mais próxima da travessia para o metrô e a praia. 🌴'
  },
  {
    id: 'marisis',
    category: 'hospedagem',
    intent: 'hotel_marisis',
    priority: 10,
    keywords: ['marisis', 'limpeza', 'silencio', 'tranquila'],
    answer: 'A *Pousada Marísis* é pequena, familiar e muito elogiada por ser um refúgio seguro na natureza. Perfeita para quem busca silêncio e limpeza impecável. 🌺'
  },
  {
    id: 'casanova',
    category: 'hospedagem',
    intent: 'hotel_casanova',
    priority: 10,
    keywords: ['casanova', 'luxuoso', 'arquitetura', 'retiro', 'sofisticada'],
    answer: 'A *Casanova Residence* é uma das nossas pousadas mais sofisticadas! É de frente para a lagoa, com vista para a Pedra da Gávea e suítes super românticas. ✨'
  },
  {
    id: 'airbnb_geral',
    category: 'hospedagem',
    intent: 'airbnb_general',
    priority: 8,
    keywords: ['airbnb', 'casa inteira', 'temporada', 'alugar casa'],
    answer: 'Se você quer viver como um morador local, nossos Airbnbs são perfeitos: Temos a *Casa Venti*, o *Lux 48*, a *Casa Goia* ou a enorme *Casa da Estátua*! Posso te falar sobre alguma delas?'
  },
  {
    id: 'casa_venti',
    category: 'hospedagem',
    intent: 'airbnb_venti',
    priority: 10,
    keywords: ['casa venti', 'venti'],
    answer: 'A *Casa Venti* é um duplex completo dentro de um condomínio tranquilo. Ela tem jardim, churrasqueira, acomoda até 7 hóspedes e aceita pets! 🏡🐾'
  },
  {
    id: 'lux_48',
    category: 'hospedagem',
    intent: 'airbnb_lux',
    priority: 10,
    keywords: ['lux 48', 'lux', 'casal moderno', 'estudio'],
    answer: 'O *Lux 48* é um apartamento estúdio moderno com design legal pertinho do metrô. Acomoda até 4 hóspedes, sendo excelente para casais. 🖤'
  },
  {
    id: 'casa_goia',
    category: 'hospedagem',
    intent: 'airbnb_goia',
    priority: 10,
    keywords: ['casa goia', 'goia', 'duplex'],
    answer: 'A *Casa Goiá* é um duplex amplo, moderno e muito bem localizado nos últimos andares de um prédio. Tem capacidade para receber até 8 hóspedes com conforto! 🏡'
  },
  {
    id: 'casa_estatua',
    category: 'hospedagem',
    intent: 'airbnb_estatua',
    priority: 10,
    keywords: ['casa da estatua', 'estatua', 'piscina', 'grupo grande', '16 pessoas'],
    answer: 'A *Casa da Estátua* é maravilhosa para grupos grandes ou famílias! Tem piscina, churrasqueira e acomoda confortavelmente até 16 hóspedes. 🏊‍♂️'
  },

  // 9. EVENTOS E ESPAÇOS
  {
    id: 'eventos_geral',
    category: 'eventos',
    intent: 'events_general',
    priority: 7,
    keywords: ['casamento', 'festa', 'evento', 'confraternizacao', 'confraternização', '15 anos', 'alugar espaco', 'celebrar'],
    answer: 'A Gigóia é o cenário perfeito para celebrar! 🎉 Temos o *Solar das Palmeiras* (casamentos grandes), a *Gaivota* (intimista), o *Oásis Gastrolounge* (lounge) e até opções no *Maracujá* e *Ocyá*. Qual o estilo da sua festa?'
  },
  {
    id: 'solar_palmeiras',
    category: 'eventos',
    intent: 'events_solar',
    priority: 10,
    keywords: ['solar das palmeiras', 'casarao', 'colonial', 'casar na ilha'],
    answer: 'O *Solar das Palmeiras Rio* tem arquitetura colonial belíssima com amplos jardins! É um dos locais mais procurados do Rio para casamentos ao ar livre. 🏛️'
  },
  {
    id: 'gaivota',
    category: 'eventos',
    intent: 'events_gaivota',
    priority: 10,
    keywords: ['gaivota', 'espaco gaivota'],
    answer: 'O Espaço e Pousada *Gaivota* fica super integrado à natureza na Ilha Primeira. Com atmosfera elegante, é indicado para casamentos intimistas e eventos exclusivos. 🥂'
  },
  {
    id: 'oasis',
    category: 'eventos',
    intent: 'events_oasis',
    priority: 10,
    keywords: ['oasis', 'oásis', 'lounge', 'descontraido', 'vibrante', 'festas privadas'],
    answer: 'O *Oásis Gastrolounge* une restaurante e lounge! É muito procurado para festas privadas, aniversários e confraternizações charmosas com música e bons drinks. 🍸'
  },

  // 10. AGENDA CULTURAL E FESTIVAIS
  {
    id: 'agenda_geral',
    category: 'agenda',
    intent: 'agenda_general',
    priority: 7,
    keywords: ['agenda da ilha', 'programacao da ilha', 'evento na ilha', 'o que ta rolando na ilha', 'show na ilha', 'ingresso', 'festival na ilha', 'cultura na ilha'],
    answer: 'Nossa ilha respira eventos! 🎶 Em diferentes épocas sediamos o concurso *Comida di Buteco*, *Festivais Gastronômicos*, e tardes de *Jazz & Sunset*. Quer que eu chame a equipe para confirmar a programação de hoje?'
  },
  {
    id: 'comida_di_buteco',
    category: 'agenda',
    intent: 'agenda_comida',
    priority: 10,
    keywords: ['comida di buteco', 'comida de buteco', 'concurso'],
    answer: 'O *Comida di Buteco* por aqui é sucesso! Funciona como concurso, onde o público prova os pratos, vota e elege os melhores botecos do Brasil (geralmente entre Abril e Maio). 😋'
  },
  {
    id: 'festival_gastronomico',
    category: 'agenda',
    intent: 'agenda_festival',
    priority: 10,
    keywords: ['festival gastronomico', 'festival gastronômico'],
    answer: 'O nosso *Festival Gastronômico da Ilha* geralmente traz pratos exclusivos de frutos do mar nos melhores restaurantes, música ao vivo itinerante e muita alegria. 🦐'
  },
  {
    id: 'jazz_sunset',
    category: 'agenda',
    intent: 'agenda_jazz',
    priority: 10,
    keywords: ['jazz', 'sunset'],
    answer: 'O *Jazz & Sunset na Lagoa* é um evento especial que combina fim de tarde, jazz instrumental, drinks artesanais e aquela vista relaxante da Pedra da Gávea. 🎷🌅'
  },
  {
    id: 'carnaval',
    category: 'agenda',
    intent: 'agenda_carnaval',
    priority: 10,
    keywords: ['carnaval', 'ressaca de carnaval', 'bloquinho'],
    answer: 'No Carnaval a ilha também tem sua dose de alegria com os nossos bloquinhos locais e eventos de Ressaca de Carnaval embalados a muito Samba e Pagode! 🎉'
  },

  // 11. INFORMAÇÕES GERAIS, HISTÓRIA E BOAS PRÁTICAS
  {
    id: 'historia',
    category: 'informacao',
    intent: 'info_historia',
    priority: 8,
    keywords: ['historia', 'história', 'origem', 'formacao', 'formação', 'geologia', 'criacao', '17 mil anos', 'pedra branca', 'veneza carioca', 'pescadores'],
    answer: 'Geólogos apontam que há 17 mil anos o mar batia nas montanhas. A ilha começou de forma singela com pescadores de camarão em águas limpas. Hoje, sem carros e cercados por canais, ganhamos o apelido de "Veneza Carioca"! 🚤'
  },
  {
    id: 'rua_colibris',
    category: 'informacao',
    intent: 'info_colibris',
    priority: 9,
    keywords: ['rua dos colibris', 'guaimun', 'coroneis', '3 ilhas', 'tres ilhas', 'colibris'],
    answer: 'Fato curioso: A Gigóia na verdade eram 3 ilhas! 🏝️ Ilha da Gigóia, Coronéis e Guaimun. O canal que as dividia foi secando e hoje é a nossa charmosa Rua dos Colibris.'
  },
  {
    id: 'ponte_madeira',
    category: 'informacao',
    intent: 'info_ponte',
    priority: 9,
    keywords: ['ponte de madeira', 'ponte', 'avenida das americas', 'ligacao continente'],
    answer: 'No passado a ilha tinha uma ponte de madeira ligada direto à Av. das Américas! 🌉 Ela foi demolida e hoje nosso maior charme é ser um refúgio acessível apenas por barcos.'
  },
  {
    id: 'populacao',
    category: 'informacao',
    intent: 'info_pop',
    priority: 8,
    keywords: ['populacao', 'população', 'habitantes', 'quantas pessoas', 'moradores'],
    answer: 'Com a descoberta do paraíso, a Ilha da Gigóia cresceu e hoje abriga cerca de 7 mil moradores! Todo o complexo lagunar junto soma quase 12 mil pessoas. 🏘️'
  },
  {
    id: 'iptu',
    category: 'informacao',
    intent: 'info_iptu',
    priority: 9,
    keywords: ['iptu', 'uniao', 'prefeitura', 'ilegal', 'non edificando', 'decreto', 'comprar casa', 'terreno', 'legalizado', 'legal'],
    answer: 'Uma curiosidade fundiária: Todos os terrenos aqui pertencem à União. Como um decreto de 1981 transformou a área em "non edificandi", a maioria das construções mais antigas não possui inscrição formal de IPTU. 🏢'
  },
  {
    id: 'poluicao',
    category: 'informacao',
    intent: 'info_poluicao',
    priority: 9,
    keywords: ['poluicao', 'poluição', 'esgoto', 'saneamento', 'assoreamento', 'agua suja'],
    answer: 'A urbanização desordenada trouxe desafios no passado, e a falta de tratamento de esgoto gerou poluição e assoreamento. 🌿 Apesar do desgaste, a natureza daqui resiste e lutamos todos os dias para preservá-la.'
  },
  {
    id: 'clima',
    category: 'informacao',
    intent: 'info_clima',
    priority: 9,
    keywords: ['clima da ilha', 'como e o clima', 'qual o clima', 'verao na ilha', 'inverno na ilha', 'outono', 'primavera na ilha', 'temperatura'],
    answer: 'A Gigóia é um destino para o ano inteiro! ☀️ Verão é agitado; Outono é calmo; no Inverno a temperatura amena é ótima pros restaurantes; e a Primavera deixa a natureza linda pra fotografar.'
  },
  {
    id: 'boas_praticas',
    category: 'informacao',
    intent: 'info_praticas',
    priority: 10,
    keywords: ['lixo', 'barulho', 'regras', 'boas praticas', 'boas práticas', 'som alto', 'turismo consciente', 'preservacao'],
    answer: 'A ilha é um ecossistema vivo! 🌿 Nossas boas práticas: não jogue lixo nas águas, respeite os moradores evitando barulho nas áreas residenciais, valorize os pequenos negócios e aguarde sua vez nos decks. A natureza agradece! ♻️'
  },
  {
    id: 'pet_friendly',
    category: 'informacao',
    intent: 'info_pet',
    priority: 10,
    keywords: ['pet', 'cachorro', 'gato', 'animal', 'pets', 'pet friendly', 'caozinho', 'cachorrinho', 'dog', 'cat'],
    answer: 'Sim! O Rio é Pet Friendly e nós também! 🐾 Diversas casas de temporada (como a Casa Venti) e a maioria dos barzinhos da ilha aceitam seu companheiro de quatro patas.'
  },
  {
    id: 'dinheiro',
    category: 'informacao',
    intent: 'info_dinheiro',
    priority: 10,
    keywords: ['dinheiro', 'cartao', 'cartão', 'pix', 'caixa eletronico', 'banco', 'pagamento', 'pagar'],
    answer: 'A grande maioria dos estabelecimentos aceita PIX e Cartão! 💳 Mas dica de ouro: não temos caixa eletrônico dentro da ilha, então traga dinheiro em notas pequenas para pagar a travessia dos barcos, ok?'
  },
  {
    id: 'repelente',
    category: 'informacao',
    intent: 'info_repelente',
    priority: 10,
    keywords: ['mosquito', 'repelente', 'borrachudo', 'inseto', 'pernilongo', 'bicho'],
    answer: 'Dica valiosa: Como a Gigóia faz parte do Pantanal Carioca, especialmente no final da tarde, é super recomendável aplicar um repelente! 🦟 Assim você curte o pôr do sol à beira da lagoa tranquilamente.'
  },
  {
    id: 'acessibilidade',
    category: 'informacao',
    intent: 'info_acessibilidade',
    priority: 10,
    keywords: ['acessibilidade', 'cadeirante', 'idoso', 'cadeira de rodas', 'dificuldade', 'locomocao'],
    answer: 'Nossa ilha tem um charme rústico, ruelas estreitas e de terra. Para pessoas com dificuldade de locomoção, recomendamos pedir pro barco te deixar direto nos decks de lugares com boa estrutura, como o Laguna ou o Kauai. ♿'
  },
  {
    id: 'farmacia_medico',
    category: 'informacao',
    intent: 'info_medico',
    priority: 10,
    keywords: ['farmacia', 'farmácia', 'remedio', 'hospital', 'posto de saude', 'emergencia', 'medico'],
    answer: 'Temos umas 2 farmácias pequenas pelas ruas de terra. Para emergências maiores, você cruza de barco em 5 minutos até a Av. Armando Lombardi, onde há hospitais e grandes drogarias 24h. 🏥'
  },
  {
    id: 'infraestrutura',
    category: 'informacao',
    intent: 'info_infra',
    priority: 8,
    keywords: ['infraestrutura', 'comercio', 'mercado', 'padaria', 'lojas', 'supermercado'],
    answer: 'A ilha hoje é autossuficiente! 🛒 Nas nossas ruazinhas de terra você vai encontrar mercadinhos locais, farmácias, hortifrúti e lojinhas, a maioria administrada pelos próprios moradores.'
  },
  {
    id: 'vale_a_pena',
    category: 'informacao',
    intent: 'info_vale',
    priority: 8,
    keywords: ['vale a pena', 'vale a pena visitar', 'o que acha', 'é bom', 'e bom'],
    answer: 'Lógico que vale a pena! 😍 A Gigóia é simplesmente mágica. É uma mistura de paz de interior, alta gastronomia e natureza, escondida a 5 minutos da metrópole!'
  },
  {
    id: 'complexo_ilhas',
    category: 'informacao',
    intent: 'info_ilhas',
    priority: 8,
    keywords: ['ilha primeira', 'ilha de sao jorge', 'arquipelago', 'outras ilhas', 'ilha do ipe', 'ilha das garcas', 'ilha da coroa', 'ilha da pesquisa', 'quantas ilhas'],
    answer: 'A Gigóia é a maior de um arquipélago com 10 ilhotas na Lagoa da Tijuca! 🏝️ O complexo inclui a Ilha Primeira (Salomé, Maracujá e Gaivota), Ilha do Ipê, Ilha das Garças, Ilha da Coroa (esportes náuticos), Ilha da Pesquisa (Porto de Luz) e São Jorge.'
  },

  // 12. COMPLEMENTOS IMPORTANTES PARA CONVERSÃO E DÚVIDAS FREQUENTES
  {
    id: 'chuva_mau_tempo',
    category: 'informacao',
    intent: 'weather_rain',
    priority: 10,
    keywords: ['chuva', 'chovendo', 'tempo ruim', 'mau tempo', 'passear com chuva', 'passeio com chuva', 'tempo fechado', 'nublado', 'chove na ilha', 'visitar com chuva'],
    answer: 'Dá para visitar a Gigóia mesmo com tempo nublado, principalmente para restaurantes e bares cobertos. ☁️ Mas passeios de barco, Ilhas Tijucas, jet ski e atividades ao ar livre podem depender das condições do tempo e vento. Me diga o dia que você quer vir que a equipe verifica a melhor opção!'
  },
  {
    id: 'cancelamento_remarcacao',
    category: 'reservas',
    intent: 'cancel_reschedule',
    priority: 10,
    keywords: ['cancelar', 'cancelamento', 'remarcar', 'remarcacao', 'desmarcar', 'adiar', 'mudar data', 'mudar horario'],
    answer: 'Sem problema! Para remarcar ou cancelar, me envie seu nome, data da reserva, passeio escolhido e o motivo da mudança. 😊 Se for passeio sujeito a condições do mar ou chuva, a equipe confirma a melhor alternativa com segurança.'
  },
  {
    id: 'criancas_familia',
    category: 'roteiro',
    intent: 'family_kids',
    priority: 10,
    keywords: ['crianca', 'criancas', 'filho', 'filha', 'bebe', 'familia', 'passeio com crianca', 'carrinho de bebe'],
    answer: 'A Gigóia é ótima para passeio em família! 👨‍👩‍👧‍👦 Para crianças, recomendo travessia de barquinho, almoço com vista e o passeio pelo Pantanal Carioca para ver jacarés e capivaras. Para bebês com carrinho, avise antes para escolher um deck com acesso mais fácil — as ruelas são de terra.'
  },
  {
    id: 'seguranca_noite',
    category: 'informacao',
    intent: 'safety_night',
    priority: 10,
    keywords: ['seguro', 'seguranca', 'perigoso', 'assalto', 'noite', 'voltar tarde', 'madrugada', 'sozinho', 'sozinha'],
    answer: 'A ilha tem clima de vila e muitos visitantes vão para jantar e curtir os bares. 🌙 Como em qualquer passeio no Rio, recomendamos atenção aos pertences, combinar o ponto de embarque e pedir ao barqueiro para deixar você no deck mais próximo do destino. O transporte náutico funciona 24h.'
  },
  {
    id: 'o_que_levar',
    category: 'informacao',
    intent: 'what_to_bring',
    priority: 10,
    keywords: ['o que levar', 'levar o que', 'roupa', 'chinelo', 'toalha', 'protetor', 'protetor solar', 'mochila', 'mascara de mergulho', 'o que usar'],
    answer: 'Boa pergunta! 🎒 Leve roupa leve, calçado confortável (as ruelas são de terra), repelente, protetor solar, dinheiro trocado para o barco e celular carregado. Para as Ilhas Tijucas, inclua roupa de banho, toalha e, se tiver, máscara de mergulho.'
  },
  {
    id: 'horarios_variaveis',
    category: 'informacao',
    intent: 'opening_hours',
    priority: 9,
    keywords: ['horario de funcionamento', 'abre que horas', 'fecha que horas', 'funciona hoje', 'aberto em feriado', 'aberto agora', 'horario do restaurante', 'horario do bar'],
    answer: 'Os horários variam bastante entre restaurantes, bares, pousadas e passeios, principalmente em feriados e dias de chuva. ⏰ Me diga qual lugar ou passeio você quer e a data da visita que a equipe confirma o horário certinho para você!'
  },
  {
    id: 'restricoes_alimentares',
    category: 'restaurantes',
    intent: 'food_restrictions',
    priority: 9,
    keywords: ['vegetariano', 'vegano', 'sem gluten', 'intolerante', 'lactose', 'alergia', 'alergico', 'restricao alimentar'],
    answer: 'Temos várias opções gastronômicas na ilha, mas restrições alimentares precisam ser confirmadas com cada casa. 🥗 Me diga se você procura opção vegetariana, vegana, sem glúten, sem lactose ou alguma alergia específica que eu direciono melhor.'
  },
  {
    id: 'privacidade_dados',
    category: 'atendimento',
    intent: 'privacy_data',
    priority: 10,
    keywords: ['meus dados', 'privacidade', 'lgpd', 'telefone seguro', 'por que telefone', 'dados pessoais', 'numero', 'contato'],
    answer: 'Pedimos seu nome e telefone apenas para retornar pelo WhatsApp com informações do roteiro, preços ou reserva. 🔒 Seus dados não serão usados para outro fim. Se preferir, pode falar diretamente com um atendente humano.'
  },
  {
    id: 'idiomas_bot',
    category: 'atendimento',
    intent: 'language_support',
    priority: 8,
    keywords: ['english', 'espanol', 'espanhol', 'ingles', 'hablas espanol', 'do you speak english', 'language', 'idioma'],
    answer: 'Yes! I can help in Portuguese, English or Spanish. 🌎 Just write in your preferred language and I will do my best to assist you!'
  },
  {
    id: 'banheiro_wifi_estrutura',
    category: 'informacao',
    intent: 'basic_structure',
    priority: 8,
    keywords: ['banheiro', 'wifi', 'wi-fi', 'internet', 'tomada', 'carregar celular', 'estrutura', 'bebedouro'],
    answer: 'A ilha tem estrutura de comércio local, mas banheiro público, Wi-Fi e tomadas dependem de cada estabelecimento. 📱 Os restaurantes e bares maiores geralmente oferecem essas comodidades. Me diga onde pretende ir que eu tento te orientar melhor!'
  },
  {
    id: 'jacare_seguro',
    category: 'passeios',
    intent: 'animal_safety',
    priority: 10,
    keywords: ['jacare ataca', 'jacare perigoso', 'chegar perto do jacare', 'alimentar jacare', 'animal selvagem', 'tocar jacare'],
    answer: 'Os jacarés fazem parte da fauna local e devem ser observados com respeito e distância. 🐊 Nunca tente tocar, alimentar ou se aproximar demais. Nos passeios, siga sempre a orientação do barqueiro ou guia para aproveitar com total segurança.'
  },

  // 13. NOVOS ATRATIVOS E INFORMAÇÕES DO SITE E PESQUISA
  {
    id: 'feira_gigoiando',
    category: 'eventos',
    intent: 'event_fair',
    priority: 10,
    keywords: ['feira', 'gigoiando', 'feira gigoiando', 'quintal', 'artesanato', 'expositores', 'compras', 'loja', 'feira de artesanato'],
    answer: 'A *Feira Gigoiando* acontece todo final de semana no Quintal da Gigoiando (Rua Dr. Sebastião de Aquino, 180, ao lado do Venne). 🛍️ São mais de 20 expositores com artesanato, comidas e produtos locais. Funciona das 10h às 19h. Para mais info: @feiragigoiando no Instagram!'
  },
  {
    id: 'beco_das_artes',
    category: 'pontos_turisticos',
    intent: 'art_street',
    priority: 9,
    keywords: ['beco das artes', 'arte de rua', 'mural', 'grafite', 'arte urbana', 'pintura na parede', 'mural colorido'],
    answer: 'O *Beco das Artes* é um dos pontos mais fotogênicos da ilha! 📸 Paredes cheias de murais e pinturas coloridas que contam a história e cultura local. Ótimo para fotos e para entender a alma da Gigóia. Fica no caminho natural de qualquer caminhada pela ilha.'
  },
  {
    id: 'alameda_mangueiras',
    category: 'pontos_turisticos',
    intent: 'main_street',
    priority: 8,
    keywords: ['alameda das mangueiras', 'rua principal', 'alameda dalton barreto', 'rua da ilha', 'centro da ilha', 'por onde andar'],
    answer: 'A *Alameda das Mangueiras* (e a Alameda Dalton Barreto) é a rua principal da ilha, onde se concentra boa parte dos restaurantes e comércios locais. 🌿 É por lá que você passeia sem pressa, descobre cantinhos e sente o ritmo de vila da Gigóia.'
  },
  {
    id: 'porto_de_luz',
    category: 'bem_estar',
    intent: 'wellness',
    priority: 9,
    keywords: ['porto de luz', 'meditacao', 'yoga', 'reiki', 'massagem', 'terapia', 'bem estar', 'espiritualidade', 'autoconhecimento', 'workshop'],
    answer: 'O *Porto de Luz* fica na Ilha da Pesquisa (bem ao lado da Gigóia) e é um espaço incrível de bem-estar! 🧘 Oferece meditação, yoga, reiki, massagem e workshops de autoconhecimento. Chega-se da mesma forma, de barco. Perfeito para quem quer uma experiência de relaxamento mais profunda.'
  },

  {
    id: 'melhor_epoca',
    category: 'informacao',
    intent: 'best_time',
    priority: 9,
    keywords: ['melhor epoca', 'quando ir', 'melhor dia', 'fim de semana', 'semana', 'lotado', 'cheio', 'quando visitar', 'temporada'],
    answer: 'A ilha é boa o ano todo, mas tem algumas dicas: ☀️ *Dias de semana* são mais tranquilos e intimistas — ideal para quem quer paz e atenção nos restaurantes. *Fins de semana e feriados* ficam mais movimentados e cheios de energia. O verão é a alta temporada, mas o pôr do sol é lindo em qualquer época!'
  },
  {
    id: 'flyboard_bike_aquatica',
    category: 'passeios',
    intent: 'extreme_sports',
    priority: 9,
    keywords: ['flyboard', 'bike aquatica', 'wakeboard', 'esporte radical', 'esporte aquatico', 'ilha da coroa', 'jet barra', '360 sports', 'day use'],
    answer: 'Para quem quer adrenalina total! 🚀 Na Ilha da Coroa e no Jet Barra (Ilha do Ipê, pertinho da Gigóia) você encontra flyboard, wakeboard, bike aquática, jet ski e muito mais. O acesso é pelo mesmo barco. Quer que eu ajude a reservar?'
  },

  {
    id: 'atravessar_ilha',
    category: 'informacao',
    intent: 'island_walk',
    priority: 8,
    keywords: ['quanto tempo a pe', 'atravessar a ilha', 'caminhar', 'tamanho da ilha', 'grande', 'pequena', 'caminhada', 'percorrer'],
    answer: 'A ilha é pequena e charmosa! 🚶 Você consegue atravessá-la de ponta a ponta em aproximadamente 20 minutos caminhando sem pressa. As ruelas são de terra batida, então calçado confortável é essencial. O passeio a pé é uma das melhores coisas que você pode fazer por lá!'
  },
  {
    id: 'alla_pergola',
    category: 'restaurantes',
    intent: 'food_italiana',
    priority: 10,
    keywords: ['alla pergola', 'italiano', 'pizza', 'massa', 'romantico', 'jantar romantico', 'italia'],
    answer: 'O *Alla Pergola* é o restaurante italiano da ilha — ideal para um jantar romântico! 🍕 Serve as melhores pizzas e massas, além de outros pratos típicos italianos. Ambiente perfeito para quem quer uma noite especial com vista.'
  },
  {
    id: 'preservacao',
    category: 'informacao',
    intent: 'environment',
    priority: 8,
    keywords: ['lixo', 'preservacao', 'meio ambiente', 'sustentabilidade', 'natureza', 'ecologia', 'pantanal', 'manguezal', 'conservacao'],
    answer: 'A Gigóia faz parte do Pantanal Carioca, uma área de preservação ambiental importantíssima. 🌿 Os moradores trabalham muito para proteger o manguezal e a fauna local. Leve seu lixo embora, não alimente os animais e respeite a natureza — assim garantimos que esse paraíso continue existindo para as próximas gerações!'
  }
];

/* =========================
   MOTOR DE BUSCA POR PONTUAÇÃO (O "CÉREBRO")
   ========================= */
function scoreEntry(entry, normalizedText, session = {}) {
  let score = 0;
  const matched = [];

  const words = getWords(normalizedText);
  const uniqueWords = new Set(words);

  for (const keyword of entry.keywords || []) {
    const cleanKeyword = normalizeText(keyword);
    if (!cleanKeyword) continue;

    if (containsPhrase(normalizedText, cleanKeyword)) {
      const keywordWords = getWords(cleanKeyword);
      const phraseWeight = keywordWords.length >= 2 ? 8 : 4;
      score += phraseWeight;
      matched.push(keyword);
      continue;
    }

    const keywordWords = getWords(cleanKeyword);
    const hits = keywordWords.filter(word => uniqueWords.has(word));
    if (keywordWords.length >= 2 && hits.length >= Math.ceil(keywordWords.length * 0.7)) {
      score += 3 + hits.length;
      matched.push(keyword);
    }
  }

  score += entry.priority || 0;

  if (session.lastTopic && session.lastTopic === entry.category) {
    score += 2;
  }

  const genericIntents = ['food_general', 'bars_general', 'tours_general', 'hotel_general'];
  if (genericIntents.includes(entry.intent) && words.length <= 3) {
    score -= 2;
  }

  return { entry, score, matched };
}

function findBestAnswers(userText, session = {}) {
  const normalizedText = normalizeText(userText);
  const results = KNOWLEDGE_BASE
    .map(entry => scoreEntry(entry, normalizedText, session))
    .filter(result => result.score >= CONFIG.MIN_SCORE_TO_REPLY && result.matched.length > 0)
    .sort((a, b) => b.score - a.score);

  if (!results.length) return [];

  const selected = [];
  const usedCategories = new Set();
  const topScore = results[0].score;

  for (const result of results) {
    if (usedCategories.has(result.entry.category)) continue;
    if (selected.length > 0 && result.score < topScore - 5) continue;

    selected.push(result);
    usedCategories.add(result.entry.category);

    if (selected.length >= CONFIG.MAX_MULTI_ANSWERS) break;
  }

  return selected;
}

function buildKnowledgeReply(matches, session) {
  if (!matches.length) return null;

  const replies = matches.map(match => match.entry.answer);
  const bestCategory = matches[0].entry.category;
  session.lastTopic = bestCategory; // Guarda sobre o que a pessoa estava falando

  if (replies.length === 1) return replies[0];

  return replies
    .map((reply, index) => `*${index + 1}.* ${reply}`)
    .join('\n\n');
}

async function askGroq(userText, session, isLink = false) {
  if (!GROQ_API_KEY) {
    return `Não tenho essa resposta no momento. Pergunte sobre *Como Chegar*, *Onde comer*, *Passeios* ou *Pousadas*. Ou digite *Menu*!`;
  }

  // Monta contexto da conversa para o Groq não tratar tudo como início
  let contexto = '';
  if (session.lastTopic) contexto += `\nAssunto anterior na conversa: ${session.lastTopic}.`;
  if (session.lastBotReply) contexto += `\nSua última resposta foi: "${session.lastBotReply.substring(0, 250)}"`;

  const systemPrompt = `Você é a Gigi, assistente simpática da Ilha da Gigóia (Rio de Janeiro) e assistente geral inteligente.

COMPORTAMENTO GERAL:
- Responda perguntas gerais normalmente: tempo, câmbio, notícias, esportes, curiosidades, etc.
- Para qualquer pergunta, seja breve: máximo 2 frases
- Se não souber uma resposta geral, diga honestamente sem inventar
- NUNCA faça mais de 1 pergunta por resposta
- Use no máximo 1 emoji por resposta

REGRAS PARA PERGUNTAS SOBRE A ILHA:
- Use APENAS os serviços reais listados abaixo — NUNCA invente atrações, campos, trilhas ou serviços fora da lista
- Se o usuário negar algo ("não quero X", "sem X") — respeite e mude de assunto, não insista
- Se receber "Sim/Ok/Pode" — continue o contexto anterior naturalmente
- Se receber um nome solto — é resposta ao que foi pedido antes
- Se receber link externo — diga que não tem acesso ao conteúdo
- NUNCA se reapresente se já há contexto de conversa

SERVIÇOS REAIS DA ILHA (não invente nada fora desta lista):
Passeios: Pantanal Carioca (~R$50/p), Ilhas Tijucas (~R$150/p), Jet Ski (~R$200-600), Caiaque/SUP, passeio até Praia da Reserva
Restaurantes: Ocyá (Michelin), Maracujá, Laguna, Cais Bar, Deck Bar, Camarão da Barra, Salomé, Venne, Alla Pergola, Café da Poesia, Cantinho do Café, Ilha Gourmet, Parada Burger
Bares: Akbar, Briza, Caiçaras, Capivara, Bar do Elson, Bar da Joana, Kai, Kauai
Hospedagem: Veneza Carioca, Pousada Barra da Tijuca, Marísis, Casanova Residence, Casa Venti (7p, pets), Lux 48, Casa Goiá (8p), Casa da Estátua (16p, piscina)
Eventos: Feira Gigoiando (fins de semana), Comida di Buteco, Jazz & Sunset, Festival Gastronômico, Carnaval
Bem-estar: Porto de Luz (yoga/reiki/meditação, Ilha da Pesquisa)
Esportes radicais: Flyboard, Wakeboard, Bike Aquática (Ilha da Coroa/Jet Barra)
${contexto}`;

  try {
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: isLink ? `[Usuário enviou um link] ${userText}` : userText }
        ],
        max_tokens: 150,
        temperature: 0.5
      },
      {
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        },
        timeout: 15000
      }
    );
    return response.data.choices[0].message.content.trim();
  } catch (err) {
    console.error('❌ Erro na API Groq:', err.message);
    return `Não consegui buscar essa informação agora. Pergunte sobre *Como Chegar*, *Onde comer*, *Passeios* ou *Pousadas*!`;
  }
}

/* =========================
   FLUXO DE RESERVA INTELIGENTE
   Passeios, Restaurantes e Hospedagem
   ========================= */
async function handleReservationFlow(msg, session, textOriginal) {
  const text = normalizeText(textOriginal);

  const triggerReserva = [
    'reservar', 'quero reservar', 'fazer reserva', 'quero agendar',
    'agendar', 'reservar passeio', 'reservar mesa', 'reservar restaurante',
    'reservar pousada', 'reservar hospedagem', 'reservar casa', 'reservar airbnb',
    'quero me hospedar', 'quero ficar na ilha'
  ].some(p => text.includes(p));

  const contextReserva = ['sim', 'quero', 'vamos', 'bora', 'pode ser', 'eu quero'].includes(text)
    && ['passeios', 'restaurantes', 'hospedagem', 'reservas'].includes(session.lastTopic);

  if (session.step !== 'free' && ['cancelar', 'sair', 'parar', 'desistir'].includes(text)) {
    resetSession(session);
    await botReply(msg, 'Tudo bem, cancelei e voltamos ao bate-papo normal! Como posso te ajudar?');
    return true;
  }

  // INÍCIO — MENU GERAL
  if (session.step === 'free' && (triggerReserva || contextReserva)) {
    session.step = 'res_categoria';
    session.reservation = {};
    await botReply(msg, 'Ótimo! O que você gostaria de reservar? 😊\n\n🚤 *1. Passeio de barco*\n🍽️ *2. Mesa em restaurante*\n🛌 *3. Hospedagem*');
    return true;
  }

  // ETAPA 1: CATEGORIA
  if (session.step === 'res_categoria') {
    const t = text;
    if (t.includes('1') || t.includes('passeio') || t.includes('barco')) {
      session.reservation.tipo = 'passeio';
      session.step = 'res_opcao';
      await botReply(msg, '🚤 Qual passeio você tem interesse?\n\n1. Pantanal Carioca (~R$50/p)\n2. Ilhas Tijucas (~R$150/p)\n3. Jet Ski (~R$200-600)\n4. Caiaque / SUP\n5. Outro\n\n_(Digite "cancelar" a qualquer momento)_');
    } else if (t.includes('2') || t.includes('restaurante') || t.includes('mesa') || t.includes('comer') || t.includes('jantar') || t.includes('almoco')) {
      session.reservation.tipo = 'restaurante';
      session.step = 'res_opcao';
      await botReply(msg, '🍽️ Em qual restaurante gostaria de reservar?\n\n1. Ocyá\n2. Maracujá da Ilha\n3. Laguna\n4. Cais Bar\n5. Deck Bar\n6. Camarão da Barra\n7. Salomé\n8. Venne\n9. Alla Pergola\n10. Outro\n\n_(Digite "cancelar" a qualquer momento)_');
    } else if (t.includes('3') || t.includes('hospedagem') || t.includes('pousada') || t.includes('dormir') || t.includes('casa') || t.includes('airbnb')) {
      session.reservation.tipo = 'hospedagem';
      session.step = 'res_opcao';
      await botReply(msg, '🛌 Qual tipo de hospedagem prefere?\n\n1. Pousada (Casanova, Marísis, Veneza Carioca, Pousada Barra)\n2. Casa / Airbnb (Casa Venti, Casa Goiá, Lux 48, Casa da Estátua)\n\n_(Digite "cancelar" a qualquer momento)_');
    } else {
      await botReply(msg, 'Por favor escolha uma opção:\n\n🚤 *1. Passeio de barco*\n🍽️ *2. Mesa em restaurante*\n🛌 *3. Hospedagem*');
    }
    return true;
  }

  // ETAPA 2: OPÇÃO ESPECÍFICA
  if (session.step === 'res_opcao') {
    session.reservation.opcao = textOriginal;
    session.step = 'res_data';
    const perguntaData = session.reservation.tipo === 'hospedagem'
      ? '📅 Qual a data de *check-in*? (Ex: 15/06, sábado que vem...)'
      : '📅 Para qual data e horário? (Ex: sábado 15/06 às 13h)';
    await botReply(msg, perguntaData);
    return true;
  }

  // ETAPA 3: DATA
  if (session.step === 'res_data') {
    session.reservation.data = textOriginal;
    session.step = 'res_pessoas';
    let perguntaPessoas;
    if (session.reservation.tipo === 'hospedagem') {
      perguntaPessoas = '👥 Quantas pessoas e quantas noites? (Ex: 4 pessoas, 2 noites)';
    } else if (session.reservation.tipo === 'restaurante') {
      perguntaPessoas = '👥 Quantas pessoas na mesa? (Informe se há crianças ou necessidades especiais)';
    } else {
      perguntaPessoas = '👥 Quantas pessoas vão participar? (Informe se há crianças)';
    }
    await botReply(msg, perguntaPessoas);
    return true;
  }

  // ETAPA 4: PESSOAS
  if (session.step === 'res_pessoas') {
    session.reservation.pessoas = textOriginal;
    session.step = 'res_nome';
    await botReply(msg, '📝 Qual é o seu nome completo para a reserva?');
    return true;
  }

  // ETAPA 5: NOME
  if (session.step === 'res_nome') {
    session.reservation.nome = textOriginal;
    session.step = 'res_contato';
    await botReply(msg, '📞 Qual o melhor telefone para contato?');
    return true;
  }

  // ETAPA 6: CONTATO → RESUMO
  if (session.step === 'res_contato') {
    session.reservation.contato = textOriginal;
    const r = session.reservation;
    const emojis = { passeio: '🚤', restaurante: '🍽️', hospedagem: '🛌' };
    const labels = { passeio: 'Passeio', restaurante: 'Restaurante', hospedagem: 'Hospedagem' };
    const emoji = emojis[r.tipo] || '📋';
    const label = labels[r.tipo] || 'Reserva';
    const resumo = emoji + ' *Resumo da sua solicitação:*\n\n' +
      '*Categoria:* ' + label + '\n' +
      '*Opção:* ' + r.opcao + '\n' +
      '*Data:* ' + r.data + '\n' +
      '*Pessoas:* ' + r.pessoas + '\n' +
      '*Nome:* ' + r.nome + '\n' +
      '*Contato:* ' + r.contato + '\n\n' +
      'Está tudo certo? _(Responda *Sim* para confirmar ou *Cancelar* para refazer)_';
    session.step = 'res_confirmar';
    await botReply(msg, resumo);
    return true;
  }

  // ETAPA 7: CONFIRMAÇÃO FINAL
  if (session.step === 'res_confirmar') {
    if (['sim', 'confirmar', 'confirmo', 'ok', 'pode', 'certo'].includes(text)) {
      const r = session.reservation;
      resetSession(session);
      await botReply(msg, '✅ Perfeito, ' + r.nome + '! Solicitação registrada.\n\nNossa equipe entrará em contato pelo *' + r.contato + '* para confirmar disponibilidade, valores e pagamento. Em breve! 😊');
    } else {
      resetSession(session);
      await botReply(msg, 'Tudo bem! Cancelei essa solicitação. Quando quiser tentar novamente é só me dizer! 😊');
    }
    return true;
  }

  return false;
}

/* =========================
   CLIENTE WHATSAPP WEB
   ========================= */

/* ================================================+=========
   GESTÃO DE SESSÃO (MANTIDO NO ESCOPO GLOBAL)
   ========================================================= */
const sessions = {};

function getSession(contactId) {
  const now = Date.now();
  if (!sessions[contactId]) {
    sessions[contactId] = { step: 'free', reservation: {}, lastInteraction: now, lastTopic: null, lastBotReply: null };
    return sessions[contactId];
  }

  const minutesIdle = (now - sessions[contactId].lastInteraction) / 1000 / 60;
  if (minutesIdle > CONFIG.SESSION_TIMEOUT_MINUTES) resetSession(sessions[contactId]);

  sessions[contactId].lastInteraction = now;
  return sessions[contactId];
}
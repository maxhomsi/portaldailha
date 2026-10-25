/* =========================================================
   EVENTOS — alimentados por uma planilha do Google
   =========================================================
   COMO LIGAR (leva 2 minutos, uma vez só):

   1. Crie uma planilha no Google Sheets com estas colunas na primeira linha,
      exatamente nesta ordem:

        Data | Hora | Titulo | Local | Descricao          (obrigatórias: Data e Titulo)
        Categoria | Link                                  (opcionais)
        Fim | Imagem | Atracao | Organizador | Preco      (opcionais, melhoram o Google)

      - Data      → 2026-09-20  (ano-mês-dia; é o único formato aceito)
      - Hora      → 20h  ou  A partir das 12h   (texto livre)
      - Titulo    → Samba no Briza
      - Local     → Briza da Gigóia
      - Categoria → Música   (opcional; vira uma etiqueta no card)
      - Descricao → texto livre, aparece ao clicar no evento
      - Link      → opcional; se preencher, vira um botão no card
      - Fim       → 23h  (hora de término; usada só no dado estruturado do Google)
      - Imagem    → https://... (endereço de uma foto do evento)
      - Atracao   → nome da banda / DJ / artista
      - Organizador → quem promove, se não for a própria casa
      - Preco     → 40  ou  R$ 40  ou  gratis  (sem valor, o campo não é enviado)

   2. No menu da planilha: Arquivo → Compartilhar → Publicar na web.
      Escolha a aba, formato "Valores separados por vírgula (.csv)",
      e clique em Publicar.

   3. Copie o endereço que ele gerar e cole na linha abaixo, entre as aspas.

   Enquanto a linha estiver vazia, a página continua mostrando os eventos
   escritos direto no HTML. Nada quebra.
   ========================================================= */

const EVENTOS_SHEET_CSV = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRZXTGISljlRSHwmPEGl_lXWMFxUlHfZ917YQ28DVuUaxx6VGV5myLaifpDunX0eIdefhH3LBhDc2DD/pub?output=csv";

/* ───────────────────────────────────────────────────────── */

// data de hoje em AAAA-MM-DD, no fuso do visitante
function hojeISO() {
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
}

const EV_LANG = (typeof currentLang !== 'undefined' ? currentLang : 'pt');

const EV_I18N = {
  pt: { meses: ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],
        dias: ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"],
        hoje: "Hoje", amanha: "Amanhã", mais: "Ver mais", menos: "Ver menos",
        reservar: "Reservar com a Gigi", saiba: "Saiba mais" },
  en: { meses: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        dias: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        hoje: "Today", amanha: "Tomorrow", mais: "Read more", menos: "Read less",
        reservar: "Book with Gigi", saiba: "Learn more" },
  es: { meses: ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],
        dias: ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],
        hoje: "Hoy", amanha: "Mañana", mais: "Ver más", menos: "Ver menos",
        reservar: "Reservar con Gigi", saiba: "Saber más" },
  zh: { meses: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
        dias: ["周日","周一","周二","周三","周四","周五","周六"],
        hoje: "今天", amanha: "明天", mais: "展开", menos: "收起",
        reservar: "找 Gigi 预订", saiba: "了解更多" },
  fr: { meses: ["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],
        dias: ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],
        hoje: "Aujourd'hui", amanha: "Demain", mais: "Voir plus", menos: "Voir moins",
        reservar: "Réserver avec Gigi", saiba: "En savoir plus" }
};
const EV_T = EV_I18N[EV_LANG] || EV_I18N.pt;
const EV_MESES = EV_T.meses;
const EV_DIAS  = EV_T.dias;

const EV_ICO_LOCAL = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>';
const EV_ICO_HORA  = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><polyline points="12 7 12 12 15 14"></polyline></svg>';

// CSV com suporte a campos entre aspas e vírgulas dentro do texto
function evParseCSV(texto) {
  const linhas = [];
  let campo = '', linha = [], aspas = false;
  for (let i = 0; i < texto.length; i++) {
    const c = texto[i];
    if (aspas) {
      if (c === '"') { texto[i+1] === '"' ? (campo += '"', i++) : (aspas = false); }
      else campo += c;
    } else if (c === '"') aspas = true;
    else if (c === ',') { linha.push(campo); campo = ''; }
    else if (c === '\n') { linha.push(campo); linhas.push(linha); linha = []; campo = ''; }
    else if (c !== '\r') campo += c;
  }
  if (campo || linha.length) { linha.push(campo); linhas.push(linha); }
  return linhas.filter(l => l.some(c => c.trim()));
}

function evEscapar(s) {
  return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function evMontarCard(ev) {
  const d = new Date(ev.data + 'T12:00:00');
  if (isNaN(d)) return '';

  // etiqueta "Hoje" / "Amanhã" quando for o caso
  const hoje = new Date(); hoje.setHours(0,0,0,0);
  const dias = Math.round((new Date(ev.data + 'T00:00:00') - hoje) / 86400000);
  const selo = dias === 0 ? EV_T.hoje : (dias === 1 ? EV_T.amanha : '');

  const meta = [
    ev.local ? `<span>${EV_ICO_LOCAL}${evEscapar(ev.local)}</span>` : '',
    ev.hora  ? `<span>${EV_ICO_HORA}${evEscapar(ev.hora)}</span>`   : ''
  ].join('');

  const desc = ev.descricao ? `<p class="ev-desc">${evEscapar(ev.descricao)}</p>` : '';
  const verMais = (ev.descricao && ev.descricao.length > 150)
    ? `<button type="button" class="ev-more" data-mais="${evEscapar(EV_T.mais)}" data-menos="${evEscapar(EV_T.menos)}">${evEscapar(EV_T.mais)}</button>` : '';

  // O botao "Reservar com a Gigi" saiu de dentro do card: o chat da Gigi ja' fica
  // flutuando na tela o tempo todo, entao repetir o botao em cada evento so'
  // engordava o cartao. O rodape agora so' aparece quando o evento tem link.
  const acoes = ev.link
    ? `<a class="ev-link" href="${evEscapar(ev.link)}" target="_blank" rel="noopener">${evEscapar(EV_T.saiba)}</a>`
    : '';

  return `
        <article class="ev-card" data-date="${evEscapar(ev.data)}">
          <div class="ev-card__head">
            <div class="ev-date">
              <span class="ev-date__d">${d.getDate()}</span>
              <span class="ev-date__m">${EV_MESES[d.getMonth()]}</span>
            </div>
            <div class="ev-head">
              <div class="ev-tags">
                ${selo ? `<span class="ev-soon">${selo}</span>` : ''}
                ${ev.categoria ? `<span class="ev-cat">${evEscapar(ev.categoria)}</span>` : ''}
              </div>
              <h3 class="ev-title">${evEscapar(ev.titulo)}</h3>
              <div class="ev-meta"><span>${EV_DIAS[d.getDay()]}</span>${meta}</div>
            </div>
          </div>
          ${desc}
          ${verMais}
          ${acoes ? `<div class="ev-foot">${acoes}</div>` : ''}
        </article>`;
}

// Schema de evento: é o que faz o Google mostrar data e local direto na busca.
// Campos opcionais (image, endDate, performer, organizer, offers) entram quando
// a planilha tiver as colunas correspondentes — sem inventar informação.
function evSchema(eventos) {
  if (!eventos.length) return;
  const base = 'https://www.ilhadagigoia.com.br';
  // Google pede pelo menos 1200px de largura e as proporcoes 16x9, 4x3 e 1x1
  const imagemPadrao = [
    base + '/assets/evento-16x9.jpg',
    base + '/assets/evento-4x3.jpg',
    base + '/assets/evento-1x1.jpg'
  ];

  // "20h", "20:00", "A partir das 19h" → "20:00"
  function horaISO(txt) {
    const m = String(txt || '').match(/(\d{1,2})\s*(?:h|:)\s*(\d{2})?/i);
    if (!m) return '';
    const h = String(Math.min(23, parseInt(m[1], 10))).padStart(2, '0');
    return h + ':' + (m[2] || '00') + ':00';
  }

  const dados = eventos.slice(0, 30).map(ev => {
    const ini = horaISO(ev.hora);
    const fim = horaISO(ev.fim);
    const d = {
      "@type": "Event",
      "name": ev.titulo,
      "startDate": ini ? ev.data + 'T' + ini + '-03:00' : ev.data,
      "endDate": fim ? ev.data + 'T' + fim + '-03:00' : ev.data,
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "image": ev.imagem ? [ev.imagem] : imagemPadrao,
      "location": {
        "@type": "Place",
        "name": ev.local || "Ilha da Gigóia",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": ev.local ? ev.local + ", Ilha da Gigóia" : "Ilha da Gigóia",
          "addressLocality": "Rio de Janeiro",
          "addressRegion": "RJ",
          "postalCode": "22630-010",
          "addressCountry": "BR"
        }
      },
      "organizer": {
        "@type": "Organization",
        "name": ev.organizador || ev.local || "Portal Ilha da Gigóia",
        "url": ev.link || base + "/agenda-cultural.html"
      },
      "description": ev.descricao || undefined,
      "url": ev.link || base + "/agenda-cultural.html"
    };

    if (ev.atracao) d.performer = { "@type": "PerformingGroup", "name": ev.atracao };

    // preço: aceita "40", "R$ 40", "40,00" ou "gratis"/"free"/"0"
    const bruto = String(ev.preco || '').trim();
    if (bruto) {
      const gratis = /gr[aá]tis|gratuito|free|entrada franca/i.test(bruto);
      const num = bruto.replace(/[^\d,.]/g, '').replace(/\./g, '').replace(',', '.');
      const valor = gratis ? '0' : (num || '');
      if (valor) {
        d.offers = {
          "@type": "Offer",
          "price": valor,
          "priceCurrency": "BRL",
          "availability": "https://schema.org/InStock",
          "validFrom": ev.data,
          "url": ev.link || base + "/agenda-cultural.html"
        };
      }
    }
    return d;
  });

  const s = document.createElement('script');
  s.type = 'application/ld+json';
  s.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": dados });
  document.head.appendChild(s);
}

/* EVENTO QUE SE REPETE (23/10/2026). Coluna "Repete" na planilha: vazia = um dia so';
   "semanal" ou "quinzenal". A Data da linha e' a PRIMEIRA vez — dela sai o dia da
   semana e o compasso da quinzena. "fim de semana" (ou "fim de semana quinzenal")
   = sabado E domingo numa linha so', a partir do fim de semana da Data. Texto que nao
   for nenhum desses nao vira repeticao: o evento fica so' na data dele.
   A Gigi do WhatsApp (pasta gigi-bot, eventosDaPlanilha) tem a mesma regra, escrita
   de novo porque os projetos nao compartilham codigo. Mudou aqui, muda la'. */
const EV_REPETE_DIAS = 30;   // ate' quantos dias pra frente uma repeticao aparece

function evSomaDias(iso, n) {
  const d = new Date(iso + 'T12:00:00Z');
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}
function evDiasEntre(a, b) {
  return Math.round((Date.parse(b + 'T12:00:00Z') - Date.parse(a + 'T12:00:00Z')) / 86400000);
}
const EV_REPETE_FDS = /fim de semana|fins de semana|\bfds\b|sabado e domingo/;
function evSemAcento(v) {
  return String(v || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ').trim();
}
function evPassoRepeticao(v) {
  const t = evSemAcento(v);
  if (!t) return 0;
  if (/quinzen|15 dias|14 dias|cada 2 semanas|cada duas semanas/.test(t)) return 14;
  if (/semanal|toda semana|todas as semanas/.test(t) || EV_REPETE_FDS.test(t)) return 7;
  return null;
}
function evRepeteNoFimDeSemana(v) { return EV_REPETE_FDS.test(evSemAcento(v)); }
function evDatasDaRepeticao(inicio, passo, hoje, dias, fimDeSemana) {
  const fim = evSomaDias(hoje, dias);
  let base = inicio;
  if (fimDeSemana) {
    const dow = new Date(inicio + 'T12:00:00Z').getUTCDay();
    base = evSomaDias(inicio, dow === 0 ? -1 : 6 - dow);
  }
  const extras = fimDeSemana ? [0, 1] : [0];
  let k = base < hoje ? Math.floor(evDiasEntre(base, hoje) / passo) : 0;
  const datas = [];
  for (;; k++) {
    const b = evSomaDias(base, k * passo);
    if (b > fim) break;
    extras.forEach(n => {
      const d = evSomaDias(b, n);
      if (d >= inicio && d >= hoje && d <= fim) datas.push(d);
    });
  }
  return datas;
}
// Espalha as linhas que se repetem. Linha de um dia so' com o mesmo titulo e data de
// uma repeticao ganha dela ("este sabado o samba e' as 17h").
function evExpandirRepeticoes(eventos, hoje) {
  const saida = [];
  eventos.forEach(e => {
    const passo = evPassoRepeticao(e.repete);
    if (passo === null) console.warn('Agenda: "' + e.titulo + '" — nao entendi Repete ("' + e.repete + '"), fica so em ' + e.data);
    if (!passo) { saida.push({ ...e, repete: 0 }); return; }
    evDatasDaRepeticao(e.data, passo, hoje, EV_REPETE_DIAS, evRepeteNoFimDeSemana(e.repete))
      .forEach(d => saida.push({ ...e, data: d, repete: passo }));
  });
  const chave = e => e.data + '|' + e.titulo.toLowerCase();
  const avulsos = new Set(saida.filter(e => !e.repete).map(chave));
  return saida.filter(e => !e.repete || !avulsos.has(chave(e)));
}

// Aceita AAAA-MM-DD (formato oficial) e tambem DD/MM/AAAA, que e' o que o
// Google Sheets costuma gravar quando a celula esta formatada como data.
function evNormalizaData(v) {
  v = (v || '').trim();
  let m = v.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (m) return v;
  m = v.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (m) return m[3] + '-' + m[2].padStart(2, '0') + '-' + m[1].padStart(2, '0');
  return '';
}

async function evLerPlanilha() {
  if (!EVENTOS_SHEET_CSV) throw new Error('planilha não configurada');
  {
    const r = await fetch(EVENTOS_SHEET_CSV, { cache: 'no-store' });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    const linhas = evParseCSV(await r.text());
    if (linhas.length < 2) throw new Error('planilha vazia');

    const cab = linhas[0].map(c => c.trim().toLowerCase());
    const col = nome => cab.findIndex(c => c.startsWith(nome));
    const iData = col('data'), iHora = col('hora'), iTit = col('titulo') > -1 ? col('titulo') : col('título');
    const iLocal = col('local'), iCat = col('categoria'), iDesc = col('descricao') > -1 ? col('descricao') : col('descrição'), iLink = col('link');
    // colunas opcionais — se não existirem, o campo simplesmente não é usado
    const iFim = col('fim'), iImg = col('imagem'), iAtr = col('atracao') > -1 ? col('atracao') : col('atração'),
          iOrg = col('organizador'), iPreco = col('preco') > -1 ? col('preco') : col('preço'),
          iRep = col('repete');
    if (cab.length === 1 && cab[0].includes('|'))
      throw new Error('os títulos estão todos na célula A1. Separe em 7 colunas: Dados → Dividir texto em colunas');
    if (iData < 0 || iTit < 0) throw new Error('faltam as colunas Data e Titulo');

    const eventos = linhas.slice(1).map(l => ({
      data: (l[iData] || '').trim(),
      hora: iHora > -1 ? (l[iHora] || '').trim() : '',
      titulo: (l[iTit] || '').trim(),
      local: iLocal > -1 ? (l[iLocal] || '').trim() : '',
      categoria: iCat > -1 ? (l[iCat] || '').trim() : '',
      descricao: iDesc > -1 ? (l[iDesc] || '').trim() : '',
      link: iLink > -1 ? (l[iLink] || '').trim() : '',
      fim: iFim > -1 ? (l[iFim] || '').trim() : '',
      imagem: iImg > -1 ? (l[iImg] || '').trim() : '',
      atracao: iAtr > -1 ? (l[iAtr] || '').trim() : '',
      organizador: iOrg > -1 ? (l[iOrg] || '').trim() : '',
      preco: iPreco > -1 ? (l[iPreco] || '').trim() : '',
      repete: iRep > -1 ? (l[iRep] || '').trim() : ''
    }))
    .map(e => ({ ...e, data: evNormalizaData(e.data) }))
    .filter(e => e.titulo && e.data);

    return evExpandirRepeticoes(eventos, hojeISO())
    .filter(e => e.data >= hojeISO())        // evento que já passou não entra
    .sort((a, b) => a.data.localeCompare(b.data));
  }
}

// Usada pelo chat da Gigi: devolve os proximos eventos ja filtrados, ou [] em caso de erro.
window.evProximosEventos = async function (limite) {
  try {
    const evs = await evLerPlanilha();
    return limite ? evs.slice(0, limite) : evs;
  } catch (e) {
    console.warn('Gigi/agenda:', e.message);
    return [];
  }
};

async function carregarEventos() {
  const lista = document.getElementById('eventList');
  if (!lista || !EVENTOS_SHEET_CSV) return;   // sem planilha: mantém o que está no HTML
  try {
    const eventos = await evLerPlanilha();
    if (!eventos.length) throw new Error('nenhuma linha válida');
    lista.innerHTML = eventos.map(evMontarCard).join('');
    evSchema(eventos);
  } catch (err) {
    console.warn('Agenda: não consegui ler a planilha —', err.message, '— mantendo os eventos do HTML.');
  }
}

// Carrega a planilha e só então liga os filtros e o acordeão da página
document.addEventListener('DOMContentLoaded', async () => {
  await carregarEventos();
  if (typeof window.initAgenda === 'function') window.initAgenda();
});

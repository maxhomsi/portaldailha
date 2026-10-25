/* =========================================================
   DEPOIMENTOS — alimentados pela MESMA planilha dos eventos
   =========================================================
   Aba "Depoimentos" da planilha Eventos. Nao precisa publicar nada de novo:
   a planilha ja' esta' publicada na web e a aba sai pelo mesmo endereco,
   trocando so' o gid. Ja' testado, responde 200.

   COMO PUBLICAR UM DEPOIMENTO (leva 10 segundos):
     1. Abra a planilha Eventos -> aba Depoimentos.
     2. Preencha Data, Nome (so' o primeiro), Passeio e Depoimento.
     3. Escreva "sim" na coluna Publicar.
     4. Pronto. Em poucos minutos ele esta' no site, nos 5 idiomas.

   ENQUANTO NAO TIVER NENHUM com "sim", a secao some sozinha da pagina —
   nao fica caixa vazia nem "em breve". Isso e' de proposito.

   REGRA QUE NAO SE QUEBRA: depoimento e' de cliente de verdade, com
   autorizacao. Texto inventado aqui destroi a confianca que o resto do
   site leva meses pra construir — e e' o tipo de coisa que o cliente
   percebe.

   NAO colocamos dado estruturado (Review/AggregateRating) nestes
   depoimentos de proposito: o Google proibe marcar com schema avaliacao
   que a propria empresa publica sobre si mesma, e isso rende punicao.
   As notas dos restaurantes, que vem do Google Maps, sao outra coisa.
   ========================================================= */

const DEPOIMENTOS_SHEET_CSV =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRZXTGISljlRSHwmPEGl_lXWMFxUlHfZ917YQ28DVuUaxx6VGV5myLaifpDunX0eIdefhH3LBhDc2DD/pub?gid=1670596087&single=true&output=csv";

/* Link da NOSSA ficha no Google (aparece no Maps como "Ilha da Gigoia",
   categoria "Agencia de turismo", Armando Lombardi 370, telefone da Gigi).

   Este endereco NAO abre o mapa: abre direto a janela de escrever a avaliacao,
   com as 5 estrelas e o campo de texto ja' na tela. Um clique a menos e' menos
   gente desistindo no caminho — e no mapa o botao de avaliar fica escondido.

   De onde saiu: a ficha tem CID 2237684313100247256 e feature id
   0xac26e17ae8fea23f:0x1f0dda06e9cde0d8, que viram o Place ID abaixo.
   Testado em 17/10/2026: abre a caixa de avaliacao, sem mapa atras. */
const GOOGLE_FICHA_URL =
  "https://search.google.com/local/writereview?placeid=ChIJP6L-6HrhJqwR2ODN6QbaDR8";

/* Endereco do Apps Script que recebe o formulario (termina em /exec).
   Veja o passo a passo em google-apps-script-depoimentos.gs.txt, na pasta do bot.
   ENQUANTO ESTA LINHA ESTIVER VAZIA, o botao de deixar depoimento nem aparece —
   melhor nao existir do que existir quebrado. */
const ENVIO_URL = "https://script.google.com/macros/s/AKfycbyj0I1LThDXS3hiUYw-tc5kpBxZ59Bqgl8RZ-a3e94EBAHEd9lZMRLd7LEo5CbOewjM/exec";

const DEP_LANG = (typeof currentLang !== 'undefined' ? currentLang : 'pt');

const DEP_I18N = {
  pt: { titulo: 'Quem já foi, conta',      sub: 'Depoimentos de quem fez o passeio com a gente',
        gChamada: 'Fez o passeio com a gente?',
        f: {"abrir": "Deixar meu depoimento", "nome": "Seu primeiro nome", "passeio": "O que você fez?", "nota": "Sua nota", "texto": "Conte como foi", "autoriza": "Autorizo publicar meu primeiro nome e meu depoimento no site", "enviar": "Enviar", "enviando": "Enviando...", "obrigado": "Obrigado! Recebemos seu depoimento. Ele passa por uma conferência antes de aparecer no site.", "erro": "Não consegui enviar agora. Tente de novo em instantes.", "curto": "Escreva um pouquinho mais, por favor.", "semAut": "Marque a autorização para publicarmos.", "semLink": "Por favor, escreva sem links.", "escolha": "Escolha"}, gBotao: 'Avaliar no Google' },
  en: { titulo: 'What our guests say',     sub: 'From people who took the tour with us',
        gChamada: 'Took the tour with us?',
        f: {"abrir": "Leave your review", "nome": "Your first name", "passeio": "What did you do?", "nota": "Your rating", "texto": "Tell us how it went", "autoriza": "I allow my first name and review to be published on the site", "enviar": "Send", "enviando": "Sending...", "obrigado": "Thank you! We got your review. It is checked before going on the site.", "erro": "Could not send right now. Please try again shortly.", "curto": "Please write a little more.", "semAut": "Please tick the permission box.", "semLink": "Please write without links.", "escolha": "Choose"}, gBotao: 'Review us on Google' },
  es: { titulo: 'Lo que dicen los visitantes', sub: 'De quienes hicieron el paseo con nosotros',
        gChamada: '¿Hiciste el paseo con nosotros?',
        f: {"abrir": "Dejar mi opinión", "nome": "Tu primer nombre", "passeio": "¿Qué hiciste?", "nota": "Tu puntuación", "texto": "Cuéntanos cómo fue", "autoriza": "Autorizo publicar mi primer nombre y mi opinión en el sitio", "enviar": "Enviar", "enviando": "Enviando...", "obrigado": "¡Gracias! Recibimos tu opinión. Se revisa antes de aparecer en el sitio.", "erro": "No pude enviar ahora. Inténtalo de nuevo en un momento.", "curto": "Escribe un poco más, por favor.", "semAut": "Marca la autorización para publicar.", "semLink": "Por favor, escribe sin enlaces.", "escolha": "Elige"}, gBotao: 'Danos tu opinión en Google' },
  fr: { titulo: 'Ce que disent nos clients',   sub: 'De ceux qui ont fait la balade avec nous',
        gChamada: 'Vous avez fait la balade avec nous ?',
        f: {"abrir": "Laisser mon avis", "nome": "Votre prénom", "passeio": "Qu’avez-vous fait ?", "nota": "Votre note", "texto": "Racontez-nous", "autoriza": "J’autorise la publication de mon prénom et de mon avis sur le site", "enviar": "Envoyer", "enviando": "Envoi...", "obrigado": "Merci ! Nous avons reçu votre avis. Il est vérifié avant publication.", "erro": "Envoi impossible pour le moment. Réessayez dans un instant.", "curto": "Écrivez un peu plus, s’il vous plaît.", "semAut": "Cochez l’autorisation de publication.", "semLink": "Merci d’écrire sans liens.", "escolha": "Choisir"}, gBotao: 'Donner votre avis sur Google' },
  zh: { titulo: '客人怎么说',                sub: '来自与我们同行过的客人',
        gChamada: '和我们一起玩过吗？',
        f: {"abrir": "留下您的评价", "nome": "您的名字", "passeio": "您体验了什么？", "nota": "您的评分", "texto": "说说您的感受", "autoriza": "我同意在网站上公开我的名字和评价", "enviar": "提交", "enviando": "提交中...", "obrigado": "谢谢！我们已收到您的评价，审核后会显示在网站上。", "erro": "暂时无法提交，请稍后再试。", "curto": "请再多写几句。", "semAut": "请勾选公开授权。", "semLink": "请不要包含链接。", "escolha": "请选择"}, gBotao: '在 Google 上评价我们' }
};
const DEP_T = DEP_I18N[DEP_LANG] || DEP_I18N.pt;

/* Mesmo leitor de CSV dos eventos: as frases dos clientes tem virgula,
   aspas e quebra de linha. Um split(',') estraçalharia tudo. */
function depParseCSV(texto) {
  const linhas = [];
  let campo = '', linha = [], aspas = false;
  for (let i = 0; i < texto.length; i++) {
    const c = texto[i];
    if (aspas) {
      if (c === '"') { texto[i + 1] === '"' ? (campo += '"', i++) : (aspas = false); }
      else campo += c;
    } else if (c === '"') aspas = true;
    else if (c === ',') { linha.push(campo); campo = ''; }
    else if (c === '\n') { linha.push(campo); linhas.push(linha); linha = []; campo = ''; }
    else if (c !== '\r') campo += c;
  }
  if (campo || linha.length) { linha.push(campo); linhas.push(linha); }
  return linhas.filter(l => l.some(c => c.trim()));
}

/* O texto vem de cliente, entao TUDO passa por aqui antes de virar HTML. */
function depEscapar(s) {
  return String(s || '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function depChave(s) {
  return String(s || '').toLowerCase().normalize('NFD')
    .replace(/[̀-ͯ]/g, '').trim();
}

function depEstrelas(nota) {
  const n = Math.round(Number(String(nota).replace(',', '.')));
  if (!n || n < 1 || n > 5) return '';
  return '<span class="depEstrelas" aria-label="' + n + ' de 5">' +
         '★★★★★'.slice(0, n) + '<span class="depEstrelasOff">' +
         '★★★★★'.slice(0, 5 - n) + '</span></span>';
}

function depMontarCard(d) {
  const inicial = (d.nome || '?').trim().charAt(0).toUpperCase();
  return '<figure class="depCard">' +
    (d.nota ? depEstrelas(d.nota) : '') +
    '<blockquote class="depTexto">' + depEscapar(d.texto) + '</blockquote>' +
    '<figcaption class="depAutor">' +
      '<span class="depAvatar" aria-hidden="true">' + depEscapar(inicial) + '</span>' +
      '<span><strong>' + depEscapar(d.nome) + '</strong>' +
      (d.passeio ? '<em>' + depEscapar(d.passeio) + '</em>' : '') + '</span>' +
    '</figcaption></figure>';
}

/* Le as colunas pelo NOME, nunca pela posicao: a aba tem uma coluna de
   instrucoes no fim e linhas que so' tem texto de ajuda. Por posicao,
   "COMO PREENCHER ESTA ABA" viraria depoimento no site. */
async function depLerPlanilha() {
  if (!DEPOIMENTOS_SHEET_CSV) return [];
  let linhas;
  try {
    const r = await fetch(DEPOIMENTOS_SHEET_CSV, { cache: 'no-store' });
    if (!r.ok) return [];
    linhas = depParseCSV(await r.text());
  } catch (e) { return []; }           // planilha fora do ar nao derruba a pagina
  if (linhas.length < 2) return [];

  const cab = linhas[0].map(depChave);
  const col = n => cab.indexOf(n);
  const iData = col('data'), iNome = col('nome'), iPasseio = col('passeio'),
        iTexto = col('depoimento'), iNota = col('nota'), iPub = col('publicar');
  if (iTexto === -1 || iPub === -1 || iNome === -1) return [];

  return linhas.slice(1).map(l => ({
      data:    (l[iData]    || '').trim(),
      nome:    (l[iNome]    || '').trim(),
      passeio: (l[iPasseio] || '').trim(),
      texto:   (l[iTexto]   || '').trim(),
      nota:    (l[iNota]    || '').trim(),
      pub:     depChave(l[iPub] || '')
    }))
    // so' sai o que foi AUTORIZADO. Sem "sim", nao existe.
    .filter(d => (d.pub === 'sim' || d.pub === 'yes' || d.pub === 'x') && d.texto && d.nome)
    .sort((a, b) => (b.data || '').localeCompare(a.data || ''));
}

async function carregarDepoimentos() {
  const secao = document.getElementById('depoimentos');
  if (!secao) return;
  const lista = secao.querySelector('#depoimentosList');
  const depos = await depLerPlanilha();
  if (!depos.length) { secao.remove(); return; }   // nada aprovado: secao some
  const h = secao.querySelector('.depTitulo');
  const s = secao.querySelector('.depSub');
  if (h) h.textContent = DEP_T.titulo;
  if (s) s.textContent = DEP_T.sub;
  lista.innerHTML = depos.map(depMontarCard).join('');
  secao.hidden = false;
}

/* O convite pra avaliar fica SEMPRE visivel — inclusive quando ainda nao ha'
   nenhum depoimento. E' justamente nessa fase que ele mais importa. */
function montarConviteGoogle() {
  const bloco = document.getElementById('depGoogle');
  if (!bloco) return;
  const txt = bloco.querySelector('.depGoogleTxt');
  const btn = bloco.querySelector('.depGoogleBtn');
  if (txt) txt.textContent = DEP_T.gChamada;
  if (btn) { btn.textContent = DEP_T.gBotao; btn.href = GOOGLE_FICHA_URL; }
}

/* Formulario do visitante. O que entra por aqui vai pra planilha com a coluna
   Publicar VAZIA — ninguem publica no site sozinho. A conferencia e' humana,
   de proposito: formulario aberto sem moderacao vira mural de spam. */
function montarFormulario() {
  const caixa = document.getElementById('depFormBox');
  if (!caixa) return;
  if (!ENVIO_URL) { caixa.remove(); return; }   // sem endpoint, o botao nem aparece
  const F = DEP_T.f;

  /* Tres campos, nada mais: nome, nota e o que a pessoa quer contar.
     A nota e' estrela pra clicar, nao lista pra abrir — menos toque no
     celular e a pessoa ve a nota que escolheu sem precisar abrir nada.
     O passeio saiu do formulario de proposito: era mais uma escolha pra
     fazer antes de escrever, e quem recebe ja' sabe qual passeio foi.
     Se quiser mostrar o passeio no card do site, basta escrever na coluna
     Passeio da planilha antes de liberar o depoimento. */
  caixa.innerHTML =
    '<button type="button" class="depGoogleBtn depAbrir">' + depEscapar(F.abrir) + '</button>' +
    '<form class="depForm" hidden novalidate>' +
      '<label>' + depEscapar(F.nome) +
        '<input name="nome" type="text" maxlength="40" autocomplete="given-name" required></label>' +
      '<div class="depNotaCampo">' +
        '<span class="depNotaRotulo">' + depEscapar(F.nota) + '</span>' +
        '<div class="depEstrelasEscolha" role="radiogroup" aria-label="' + depEscapar(F.nota) + '">' +
          [1,2,3,4,5].map(n =>
            '<button type="button" class="depEstrelaBtn" role="radio" aria-checked="false"' +
            ' data-nota="' + n + '" aria-label="' + n + '">\u2605</button>').join('') +
        '</div>' +
        '<input type="hidden" name="nota" value="">' +
      '</div>' +
      '<label>' + depEscapar(F.texto) +
        '<textarea name="texto" rows="4" maxlength="600" required></textarea></label>' +
      '<label class="depCheck"><input name="autoriza" type="checkbox"> ' +
        '<span>' + depEscapar(F.autoriza) + '</span></label>' +
      // campo-isca: invisivel pra gente, irresistivel pra robo
      '<input name="sobrenome" class="depIsca" tabindex="-1" autocomplete="off" aria-hidden="true">' +
      '<button type="submit" class="depGoogleBtn">' + depEscapar(F.enviar) + '</button>' +
      '<p class="depAviso" role="status"></p>' +
    '</form>';

  const btn = caixa.querySelector('.depAbrir');
  const form = caixa.querySelector('.depForm');
  const aviso = caixa.querySelector('.depAviso');
  btn.addEventListener('click', () => {
    form.hidden = !form.hidden;
    if (!form.hidden) form.querySelector('[name=nome]').focus();
  });

  /* Estrelas: clicou na terceira, acendem as tres primeiras. Quem usa leitor
     de tela ou so' o teclado continua navegando normal, botao por botao. */
  const estrelas = Array.from(caixa.querySelectorAll('.depEstrelaBtn'));
  const campoNota = form.elements.nota;
  estrelas.forEach(e => e.addEventListener('click', () => {
    const n = Number(e.dataset.nota);
    campoNota.value = String(n);
    estrelas.forEach(outra => {
      const acesa = Number(outra.dataset.nota) <= n;
      outra.classList.toggle('ativa', acesa);
      outra.setAttribute('aria-checked', Number(outra.dataset.nota) === n ? 'true' : 'false');
    });
  }));

  form.addEventListener('submit', async ev => {
    ev.preventDefault();
    const v = n => (form.elements[n] || {}).value || '';
    const texto = v('texto').trim(), nome = v('nome').trim();
    if (nome.length < 2 || texto.length < 15) { aviso.textContent = F.curto; return; }
    if (/https?:\/\/|www\./i.test(texto))   { aviso.textContent = F.semLink; return; }
    if (!form.elements.autoriza.checked)     { aviso.textContent = F.semAut; return; }

    const enviar = form.querySelector('[type=submit]');
    enviar.disabled = true; aviso.textContent = F.enviando;
    const corpo = JSON.stringify({
      nome: nome, texto: texto, nota: v('nota'),
      autoriza: true, sobrenome: v('sobrenome')
    });
    try {
      // text/plain evita o pedido de permissao previo (preflight), que o
      // Apps Script nao responde bem.
      await fetch(ENVIO_URL, {
        method: 'POST', body: corpo,
        headers: { 'Content-Type': 'text/plain;charset=utf-8' }
      });
      form.innerHTML = '<p class="depObrigado">' + depEscapar(F.obrigado) + '</p>';
      btn.hidden = true;
      depMedir('depoimento_enviado', { origem: 'direto' });
    } catch (e) {
      try {   // plano B: manda sem ler a resposta. Chega do mesmo jeito.
        await fetch(ENVIO_URL, { method: 'POST', mode: 'no-cors', body: corpo });
        form.innerHTML = '<p class="depObrigado">' + depEscapar(F.obrigado) + '</p>';
        btn.hidden = true;
        // Plano B tambem e' envio que deu certo: contar so' o caminho normal
        // subnotificaria o funil justamente em quem tem rede ruim.
        depMedir('depoimento_enviado', { origem: 'sem_cors' });
      } catch (e2) {
        aviso.textContent = F.erro; enviar.disabled = false;
      }
    }
  });
}

/* MEDICAO DO DEPOIMENTO.
   O funil inteiro era cego: nao se sabia quanta gente abria o formulario, quanta
   enviava, nem quanta ia avaliar no Google. Sao tres numeros que dizem se a prova
   social esta' funcionando — e e' ela que convence quem chega pela busca.
   Usa o mesmo `window.medir` do app.js; se ele nao existir (pagina sem o app.js,
   bloqueador de anuncio), nao mede e nao quebra nada. 19/10/2026. */
function depMedir(evento, dados) {
  try {
    if (typeof window.medir === 'function') window.medir(evento, dados || {});
  } catch (e) { /* medicao nunca pode atrapalhar o depoimento */ }
}

document.addEventListener('click', ev => {
  const alvo = ev.target.closest('.depGoogleBtn');
  if (!alvo) return;
  if (alvo.classList.contains('depAbrir')) {
    depMedir('depoimento_abriu', { origem: 'botao_escrever' });
  } else if (alvo.tagName === 'A') {
    // Link de verdade: esse e' o que sai do site pra ficha do Google.
    depMedir('avaliar_google', { origem: 'convite' });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  montarConviteGoogle();
  montarFormulario();
  carregarDepoimentos();
});

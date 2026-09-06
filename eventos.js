/* =========================================================
   EVENTOS — alimentados por uma planilha do Google
   =========================================================
   COMO LIGAR (leva 2 minutos, uma vez só):

   1. Crie uma planilha no Google Sheets com estas colunas na primeira linha,
      exatamente nesta ordem:

        Data | Hora | Titulo | Local | Descricao          (obrigatórias: Data e Titulo)
        Categoria | Link                                  (opcionais, podem nem existir)

      - Data      → 2026-09-20  (ano-mês-dia; é o único formato aceito)
      - Hora      → 20h  ou  A partir das 12h   (texto livre)
      - Titulo    → Samba no Briza
      - Local     → Briza da Gigóia
      - Categoria → Música   (opcional; vira uma etiqueta no card)
      - Descricao → texto livre, aparece ao clicar no evento
      - Link      → opcional; se preencher, vira um botão no card

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
        reservar: "找 Gigi 预订", saiba: "了解更多" }
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

  const acoes = [
    ev.link ? `<a class="ev-link" href="${evEscapar(ev.link)}" target="_blank" rel="noopener">${evEscapar(EV_T.saiba)}</a>` : '',
    `<button type="button" class="ev-cta" onclick="openGigiChat()">${evEscapar(EV_T.reservar)}</button>`
  ].join('');

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
          <div class="ev-foot">${acoes}</div>
        </article>`;
}

// Schema de evento: é o que faz o Google mostrar data e local direto na busca
function evSchema(eventos) {
  if (!eventos.length) return;
  const base = 'https://www.ilhadagigoia.com.br';
  const dados = eventos.slice(0, 30).map(ev => ({
    "@type": "Event",
    "name": ev.titulo,
    "startDate": ev.data,
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": { "@type": "Place", "name": ev.local || "Ilha da Gigóia",
      "address": { "@type": "PostalAddress", "addressLocality": "Rio de Janeiro",
        "addressRegion": "RJ", "addressCountry": "BR" } },
    "description": ev.descricao || undefined,
    "url": ev.link || base + "/agenda-cultural.html"
  }));
  const s = document.createElement('script');
  s.type = 'application/ld+json';
  s.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": dados });
  document.head.appendChild(s);
}

async function carregarEventos() {
  const lista = document.getElementById('eventList');
  if (!lista || !EVENTOS_SHEET_CSV) return;   // sem planilha: mantém o que está no HTML

  try {
    const r = await fetch(EVENTOS_SHEET_CSV, { cache: 'no-store' });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    const linhas = evParseCSV(await r.text());
    if (linhas.length < 2) throw new Error('planilha vazia');

    const cab = linhas[0].map(c => c.trim().toLowerCase());
    const col = nome => cab.findIndex(c => c.startsWith(nome));
    const iData = col('data'), iHora = col('hora'), iTit = col('titulo') > -1 ? col('titulo') : col('título');
    const iLocal = col('local'), iCat = col('categoria'), iDesc = col('descricao') > -1 ? col('descricao') : col('descrição'), iLink = col('link');
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
      link: iLink > -1 ? (l[iLink] || '').trim() : ''
    }))
    .filter(e => e.titulo && /^\d{4}-\d{2}-\d{2}$/.test(e.data))
    .filter(e => e.data >= hojeISO())        // evento que já passou não entra
    .sort((a, b) => a.data.localeCompare(b.data));

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

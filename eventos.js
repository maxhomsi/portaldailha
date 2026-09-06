/* =========================================================
   EVENTOS — alimentados por uma planilha do Google
   =========================================================
   COMO LIGAR (leva 2 minutos, uma vez só):

   1. Crie uma planilha no Google Sheets com estas colunas na primeira linha,
      exatamente nesta ordem:

        Data | Hora | Titulo | Local | Categoria | Descricao | Link

      - Data      → 2026-09-20  (ano-mês-dia; é o único formato aceito)
      - Hora      → 20h  ou  A partir das 12h   (texto livre)
      - Titulo    → Samba no Briza
      - Local     → Briza da Gigóia
      - Categoria → Música   (aparece como etiqueta)
      - Descricao → texto livre, aparece ao clicar no evento
      - Link      → opcional; se preencher, vira um botão

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

const EV_MESES = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
const EV_DIAS  = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];

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
  const link = ev.link
    ? `<p style="margin-top:16px"><a class="btn btn--green" href="${evEscapar(ev.link)}" target="_blank" rel="noopener">Saiba mais</a></p>`
    : '';
  return `
        <article class="event-item" data-date="${evEscapar(ev.data)}">
          <div class="event-summary">
            <div class="event-date">
              <span class="day">${d.getDate()}</span>
              <span class="month">${EV_MESES[d.getMonth()]}</span>
              <span class="weekday">${EV_DIAS[d.getDay()]}</span>
            </div>
            <div class="event-info">
              ${ev.categoria ? `<span class="event-cat">${evEscapar(ev.categoria)}</span>` : ''}
              <h3 class="event-title">${evEscapar(ev.titulo)}</h3>
              <div class="event-details">
                ${ev.local ? `<span>📍 ${evEscapar(ev.local)}</span>` : ''}
                ${ev.hora ? `<span>⏰ ${evEscapar(ev.hora)}</span>` : ''}
              </div>
            </div>
            <div class="event-chevron">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
          </div>
          <div class="event-expanded-content">
            <div class="expanded-inner">
              <button class="close-event" aria-label="Fechar" title="Fechar">&times;</button>
              <p>${evEscapar(ev.descricao) || 'Sem descrição.'}</p>
              ${link}
            </div>
          </div>
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

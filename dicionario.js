/* =========================================================
   SISTEMA DE TRADUCAO — NUCLEO
   =========================================================
   O texto em si vive em dicionario-<idioma>.js, e cada pagina
   carrega apenas o do seu idioma. Antes este arquivo trazia os
   cinco juntos (356 KB) para todo visitante, inclusive quem
   nunca troca de lingua.
   ========================================================= */

// O idioma vem do prefixo da URL (/en/, /es/, /zh/, /fr/). O localStorage
// e' so' fallback para quem chega na raiz, e a escolha vira navegacao real.
const LANGS = ['en','es','zh','fr'];
const currentLang = (function(){
  var seg = location.pathname.split('/')[1];
  if (LANGS.indexOf(seg) !== -1) return seg;
  return 'pt';
})();

// `const` no topo do arquivo NAO cria window.currentLang. O app.js le
// window.currentLang para escolher o idioma do chat da Gigi.
window.currentLang = currentLang;

function changeLanguage(lang) {
  localStorage.setItem('ilha_lang', lang);
  var parts = location.pathname.split('/').filter(Boolean);
  if (LANGS.indexOf(parts[0]) !== -1) parts.shift();
  var page = parts.join('/');
  // location.search ja' vinha junto; o location.hash nao. Quem estava lendo a
  // secao de depoimentos e trocava pra ingles voltava pro topo da pagina e
  // tinha que rolar tudo de novo. As ancoras sao as mesmas nos 5 idiomas.
  location.href = (lang === 'pt' ? '/' : '/' + lang + '/') + page + location.search + location.hash;
}

/* =========================================================================
   PRECOS DOS PASSEIOS LIDOS DA PLANILHA  (11/11/2026, pedido do Max)

   A Gigi do WhatsApp ja' lia os precos da aba "Preços Passeios". O site tinha
   o mesmo numero escrito a mao em dezenas de lugares: trocou o preco na planilha,
   o site seguia falando o antigo. Agora os textos carregam um marcador
   ({{p:pantanal_almoco}} nas respostas da Gigi e no dicionario; <span data-preco>
   nas paginas) e o numero vem daqui.

   - GIGI_PRECOS nasce com os valores de hoje: se a planilha nao responder, o site
     mostra esses. Nunca fica sem preco e nunca mostra marcador cru.
   - A planilha e' lida uma vez a cada 20 minutos por visitante (fica guardada na
     aba do navegador) e so' troca um valor quando a linha tem numero valido.
   - Linha com "Vale de / Vale ate'" fora da data de hoje e' ignorada; linha com
     data valendo ganha da linha sem data (promocao com prazo).
   - Os nomes das linhas sao os mesmos apelidos da Gigi do WhatsApp (PRECO_ITENS
     no index.js do gigi-bot). Mudou la', muda aqui e no gigi-proxy.php.
   Fora daqui continuam fixos: hospedagem, travessia, os dados estruturados pro
   Google (JSON-LD) e as descricoes das paginas.
   ========================================================================= */
window.GIGI_PRECOS = { pantanal: 50, pantanal_almoco: 100, tijucas: 150, tijucas_almoco: 200,
                       reserva: 120, jet10: 150, jet20: 250, jet30: 450, jet60: 750 };
window.GIGI_PRECOS_NOMES = {
  pantanal_almoco: ['passeio almoco no pantanal carioca', 'pantanal carioca almoco', 'passeio almoco'],
  pantanal:        ['pantanal carioca'],
  tijucas_almoco:  ['ilhas tijucas almoco'],
  tijucas:         ['ilhas tijucas'],
  reserva:         ['praia da reserva'],
  jet10:           ['jet ski 10 minutos', 'jet ski 10 min', 'jet ski 10min'],
  jet20:           ['jet ski 20 minutos', 'jet ski 20 min', 'jet ski 20min'],
  jet30:           ['jet ski 30 minutos', 'jet ski 30 min', 'jet ski 30min'],
  jet60:           ['jet ski 1 hora', 'jet ski 60 minutos', 'jet ski 1h']
};
window.gigiPrecoTexto = function (n) {
  n = Number(n);
  return Math.round(n) === n ? String(n) : n.toFixed(2).replace('.', ',');
};
// Troca os marcadores {{p:chave}} pelo valor de agora. Marcador desconhecido sai do texto.
window.gigiPrecos = function (txt) {
  if (typeof txt !== 'string' || txt.indexOf('{{p:') === -1) return txt;
  return txt.replace(/\{\{p:(\w+)\}\}/g, function (m, k) {
    return Object.prototype.hasOwnProperty.call(window.GIGI_PRECOS, k) ? window.gigiPrecoTexto(window.GIGI_PRECOS[k]) : '';
  });
};
// "R$ 1.500,00" / "100" / "49,90" -> numero; qualquer outra coisa -> null
window.gigiPrecoNumero = function (v) {
  var s = String(v == null ? '' : v).replace(/[^\d.,]/g, '');
  if (!s) return null;
  if (s.indexOf(',') > -1) s = s.replace(/\./g, '').replace(',', '.');
  else if (/^\d{1,3}(\.\d{3})+$/.test(s)) s = s.replace(/\./g, '');
  var n = Number(s);
  return (isFinite(n) && n >= 1 && n < 100000) ? n : null;
};
window.gigiPrecoCsv = function (texto) {
  var linhas = [], linha = [], campo = '', aspas = false;
  texto = String(texto || '').replace(/\r\n?/g, '\n');
  for (var i = 0; i < texto.length; i++) {
    var c = texto[i];
    if (aspas) {
      if (c === '"') { if (texto[i + 1] === '"') { campo += '"'; i++; } else aspas = false; }
      else campo += c;
    } else if (c === '"') aspas = true;
    else if (c === ',') { linha.push(campo); campo = ''; }
    else if (c === '\n') { linha.push(campo); linhas.push(linha); linha = []; campo = ''; }
    else campo += c;
  }
  if (campo !== '' || linha.length) { linha.push(campo); linhas.push(linha); }
  return linhas;
};
// Pura, pra dar pra testar: recebe o CSV da aba e o dia de hoje (AAAA-MM-DD),
// devolve so' as chaves que a planilha tem com valor valido.
window.gigiPrecosDoCsv = function (csv, hojeISO) {
  var norm = function (s) {
    return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/g, ' ').trim();
  };
  var dataISO = function (s) {
    s = String(s || '').trim(); var m;
    if ((m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/))) return m[1] + '-' + ('0' + m[2]).slice(-2) + '-' + ('0' + m[3]).slice(-2);
    if ((m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/))) return m[3] + '-' + ('0' + m[2]).slice(-2) + '-' + ('0' + m[1]).slice(-2);
    return '';
  };
  var linhas = window.gigiPrecoCsv(csv), ini = -1;
  for (var i = 0; i < linhas.length; i++) {
    if (norm(linhas[i][0]) === 'passeio' && norm(linhas[i][1]).indexOf('valor') === 0) { ini = i + 1; break; }
  }
  if (ini < 0) return {};
  var itens = [];
  for (var j = ini; j < linhas.length; j++) {
    var l = linhas[j], valor = window.gigiPrecoNumero(l[1]);
    if (!norm(l[0]) || valor === null) continue;
    var de = dataISO(l[4]), ate = dataISO(l[5]);
    if ((de && hojeISO < de) || (ate && hojeISO > ate)) continue;      // fora do prazo
    itens.push({ nome: norm(l[0]), valor: valor, comData: !!(de || ate) });
  }
  var out = {};
  Object.keys(window.GIGI_PRECOS_NOMES).forEach(function (chave) {
    var apelidos = window.GIGI_PRECOS_NOMES[chave];
    for (var a = 0; a < apelidos.length; a++) {
      var achados = itens.filter(function (x) { return x.nome === apelidos[a]; });
      if (!achados.length) continue;
      var comData = achados.filter(function (x) { return x.comData; });
      out[chave] = (comData[0] || achados[0]).valor;
      return;
    }
  });
  return out;
};
// Poe os valores de agora na pagina: os <span data-preco> e os textos do
// dicionario que tem marcador (o resto da pagina nao e' tocado).
window.gigiPrecosNaPagina = function () {
  try {
    document.querySelectorAll('[data-preco]').forEach(function (el) {
      var k = el.getAttribute('data-preco');
      if (!Object.prototype.hasOwnProperty.call(window.GIGI_PRECOS, k)) return;
      var v = window.gigiPrecoTexto(window.GIGI_PRECOS[k]);
      if (el.textContent !== v) el.textContent = v;
    });
    if (typeof DICT !== 'undefined') {
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var bruto = DICT[el.getAttribute('data-i18n')];
        if (typeof bruto === 'string' && bruto.indexOf('{{p:') > -1) el.innerHTML = window.gigiPrecos(bruto);
      });
    }
  } catch (e) {}
};
(function () {
  var URL_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRZXTGISljlRSHwmPEGl_lXWMFxUlHfZ917YQ28DVuUaxx6VGV5myLaifpDunX0eIdefhH3LBhDc2DD/pub?gid=230079925&single=true&output=csv';
  var CHAVE = 'gigoia_precos_v1', VALIDADE = 20 * 60 * 1000;
  var aplicar = function (obj) {
    if (!obj || typeof obj !== 'object') return;
    Object.keys(window.GIGI_PRECOS).forEach(function (k) {
      var n = Number(obj[k]);
      if (isFinite(n) && n >= 1 && n < 100000) window.GIGI_PRECOS[k] = n;
    });
  };
  var fresco = false;
  try {
    var g = JSON.parse(sessionStorage.getItem(CHAVE) || 'null');
    if (g && g.v) { aplicar(g.v); fresco = (Date.now() - g.t) < VALIDADE; }
  } catch (e) {}
  var naPagina = function () { window.gigiPrecosNaPagina(); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { setTimeout(naPagina, 0); });
  else setTimeout(naPagina, 0);
  if (fresco || typeof fetch !== 'function') return;
  var hoje = new Date();
  var hojeISO = hoje.getFullYear() + '-' + ('0' + (hoje.getMonth() + 1)).slice(-2) + '-' + ('0' + hoje.getDate()).slice(-2);
  fetch(URL_CSV, { cache: 'no-store' })
    .then(function (r) { return r.ok ? r.text() : Promise.reject(new Error('http ' + r.status)); })
    .then(function (csv) {
      var v = window.gigiPrecosDoCsv(csv, hojeISO);
      if (!Object.keys(v).length) return;          // planilha vazia ou fora do ar: fica como esta'
      aplicar(v);
      try { sessionStorage.setItem(CHAVE, JSON.stringify({ t: Date.now(), v: v })); } catch (e) {}
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { setTimeout(naPagina, 0); });
      else naPagina();
    })
    .catch(function () {});
})();

// Cada valor do DICT ja' vem no idioma certo, entao nao ha' mais escolha
// a fazer aqui. Chave inexistente devolve a propria chave, como antes.
// Texto com marcador de preco sai ja' com o valor de agora (ver acima).
const t = (key) => (typeof DICT !== 'undefined' && DICT[key] !== undefined) ? window.gigiPrecos(DICT[key]) : key;

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

// Cada valor do DICT ja' vem no idioma certo, entao nao ha' mais escolha
// a fazer aqui. Chave inexistente devolve a propria chave, como antes.
const t = (key) => (typeof DICT !== 'undefined' && DICT[key] !== undefined) ? DICT[key] : key;

/* =========================================================
   SERVICE WORKER — Portal Ilha da Gigóia
   Estratégia: Cache-First para assets estáticos,
               Network-First para HTML e API.
   ========================================================= */

// Versao do cache: MUDE ESTE NUMERO sempre que publicar imagens/CSS/JS novos,
// senao quem ja visitou continua vendo os arquivos antigos.
const CACHE_NAME = 'ilha-gigoia-v18';
const CACHE_STATIC = 'ilha-static-v18';

// Assets que serão pré-cacheados na instalação
const PRE_CACHE = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/dicionario.js',
  '/dicionario-pt.js',
  '/dicas-capi.js',
  '/assets/hero.jpg',
  '/assets/logo.png',
  '/assets/capi.png',
  '/assets/card-passeios.jpg',
  '/assets/card-comer.jpg',
  '/offline.html',
  // As quatro traducoes tambem: sem elas no cache, um visitante em ingles que fica
  // sem rede recebe a pagina em portugues — era o caso ate' 13/10/2026.
  '/en/offline.html',
  '/es/offline.html',
  '/fr/offline.html',
  '/zh/offline.html'
];

// Descobre o idioma pelo comeco do caminho da pagina que falhou, pra servir a pagina
// de offline certa. '/en/passeios-rotas.html' -> '/en/offline.html'.
const IDIOMAS_OFFLINE = ['en', 'es', 'fr', 'zh'];
function paginaOfflineDe(url) {
  try {
    const partes = new URL(url).pathname.split('/').filter(Boolean);
    if (partes.length && IDIOMAS_OFFLINE.indexOf(partes[0]) > -1) {
      return '/' + partes[0] + '/offline.html';
    }
  } catch (e) { /* url estranha: cai no portugues */ }
  return '/offline.html';
}

// ── INSTALL: pré-cacheia os assets críticos ──────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_STATIC).then(cache => {
      // addAll ignora falhas individuais para não bloquear instalação
      return Promise.allSettled(
        PRE_CACHE.map(url =>
          fetch(new Request(url, { cache: "reload" }))
            .then(res => res.ok ? cache.put(url, res) : null)
            .catch(() => null)
        )
      );
    })
  );
  self.skipWaiting();
});

// ── ACTIVATE: limpa caches antigos ──────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_NAME && k !== CACHE_STATIC)
          .map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// ── FETCH: estratégia híbrida ────────────────────────────
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignora requisições de terceiros (Google Fonts, Analytics, etc.)
  if (url.origin !== location.origin) return;

  // Ignora requisições POST / PUT / DELETE
  if (request.method !== 'GET') return;

  // HTML → Network-First (sempre tenta pegar versão mais recente)
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(networkFirstHTML(request));
    return;
  }

  // Codigo (.js/.css) → Network-First: uma publicacao nova vale na hora.
  // O cache continua existindo, mas so' entra em acao quando falta conexao.
  if (/\.(js|css)$/i.test(url.pathname)) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Imagens e fontes → Cache-First (e' o que realmente compensa guardar)
  if (isStaticAsset(url.pathname)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Todo o resto → Network com fallback para cache
  event.respondWith(networkFirst(request));
});

// ── Helpers ──────────────────────────────────────────────

function isStaticAsset(pathname) {
  return /\.(png|jpg|jpeg|webp|avif|svg|ico|woff2|woff|ttf)$/i.test(pathname);
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_STATIC);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response('Asset não disponível offline.', { status: 503 });
  }
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    return cached || new Response('Sem conexão.', { status: 503 });
  }
}

async function networkFirstHTML(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;

    // Fallback: pagina offline no idioma de quem estava navegando. Se a traduzida
    // nao estiver no cache por algum motivo, cai na portuguesa em vez de nada.
    const offline = (await caches.match(paginaOfflineDe(request.url)))
                 || (await caches.match('/offline.html'));
    return offline || new Response('<h1>Você está offline 🏝️</h1><p>Verifique sua conexão e tente novamente.</p>', {
      status: 503,
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  }
}

/* =========================================================
   SERVICE WORKER — Portal Ilha da Gigóia
   Estratégia: Cache-First para assets estáticos,
               Network-First para HTML e API.
   ========================================================= */

const CACHE_NAME = 'ilha-gigoia-v1';
const CACHE_STATIC = 'ilha-static-v1';

// Assets que serão pré-cacheados na instalação
const PRE_CACHE = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/dicionario.js',
  '/dicas-capi.js',
  '/assets/hero.jpg',
  '/assets/logo.png',
  '/assets/capi.png',
  '/assets/gigi.png',
  '/assets/card-passeios.jpg',
  '/assets/card-comer.jpg',
  '/offline.html'
];

// ── INSTALL: pré-cacheia os assets críticos ──────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_STATIC).then(cache => {
      // addAll ignora falhas individuais para não bloquear instalação
      return Promise.allSettled(
        PRE_CACHE.map(url => cache.add(url).catch(() => null))
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

  // Assets estáticos (.js, .css, imagens) → Cache-First
  if (isStaticAsset(url.pathname)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Todo o resto → Network com fallback para cache
  event.respondWith(networkFirst(request));
});

// ── Helpers ──────────────────────────────────────────────

function isStaticAsset(pathname) {
  return /\.(js|css|png|jpg|jpeg|webp|avif|svg|ico|woff2|woff|ttf)$/i.test(pathname);
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

    // Fallback: página offline customizada (se existir)
    const offline = await caches.match('/offline.html');
    return offline || new Response('<h1>Você está offline 🏝️</h1><p>Verifique sua conexão e tente novamente.</p>', {
      status: 503,
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  }
}

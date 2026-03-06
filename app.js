/* =========================================================
   CONFIG / CONSTANTES
   ========================================================= */
const WHATSAPP_NUMBER = "5521965666913"; /* +55 21 96566-6913 */

/* =========================================================
   HELPERS
   ========================================================= */
function qs(sel, root = document) { return root.querySelector(sel); }
function qsa(sel, root = document) { return [...root.querySelectorAll(sel)]; }

function openWhatsApp(messageText) {
  /* Abre WhatsApp com mensagem pronta (sem API) */
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageText)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

/* =========================================================
   HEADER (INJETADO EM TODAS AS PÁGINAS)
   ========================================================= */
function mountHeader() {
  if (qs(".header")) return; /* já existe */

  const header = document.createElement("header");
  header.className = "header";
  header.innerHTML = `
    <!-- =====================================================
         HEADER / NAV
         ===================================================== -->
    <div class="container header__inner">
      <!-- Brand -->
      <a class="brand" href="index.html" aria-label="Portal Ilha da Gigóia - Início">
        <img class="brand__logo" src="assets/logo.png" alt="Logo Portal Ilha da Gigóia">
        <div class="brand__text">
          <small>PORTAL</small>
          <strong><span>Ilha da</span> Gigóia</strong>
        </div>
      </a>

      <!-- Menu desktop -->
      <div class="navWrap" aria-label="Menu principal">
        <nav class="nav" aria-label="Navegação">
          <a data-navlink href="a-ilha.html">A Ilha</a>
          <a data-navlink href="passeios-rotas.html">Passeios &amp; Rotas</a>
          <a data-navlink href="comer-beber.html">Comer &amp; Beber</a>
          <a data-navlink href="hospedagem.html">Hospedagem</a>
          <a data-navlink href="o-que-fazer.html">O que fazer</a>
          <a data-navlink href="planeje.html">Planeje sua Viagem</a>
        </nav>
      </div>

      <!-- Ações -->
      <div class="header__actions">
        <a class="btn btn--green" href="planeje.html" aria-label="Planeje sua Viagem">
          Planeje sua Viagem
        </a>

        <button class="burger" id="burgerBtn" aria-label="Abrir menu">
          ☰
        </button>
      </div>
    </div>

    <!-- Menu mobile -->
    <div class="container mobileNav" id="mobileNav" style="display:none;">
      <div class="mobileNav__inner">
        <a href="a-ilha.html">A Ilha</a>
        <a href="passeios-rotas.html">Passeios &amp; Rotas</a>
        <a href="comer-beber.html">Comer &amp; Beber</a>
        <a href="hospedagem.html">Hospedagem</a>
        <a href="o-que-fazer.html">O que fazer</a>
        <a href="planeje.html">Planeje sua Viagem</a>
      </div>
    </div>
  `;

  document.body.prepend(header);

  /* Mobile toggle */
  const burger = qs("#burgerBtn");
  const mobileNav = qs("#mobileNav");
  if (burger && mobileNav) {
    burger.addEventListener("click", () => {
      const isOpen = mobileNav.style.display !== "none";
      mobileNav.style.display = isOpen ? "none" : "block";
    });
  }
}

/* =========================================================
   NAV: marca página atual
   ========================================================= */
function setActiveNav() {
  const path = location.pathname.split("/").pop() || "index.html";
  qsa("[data-navlink]").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path) {
      a.setAttribute("aria-current", "page");
    } else {
      a.removeAttribute("aria-current");
    }
  });
}

/* =========================================================
   SCROLL: sombra no header + progress bar
   ========================================================= */
function setupScrollUI() {
  /* progress bar */
  let bar = qs(".progress");
  if (!bar) {
    bar = document.createElement("div");
    bar.className = "progress";
    document.body.appendChild(bar);
  }

  const header = qs(".header");

  const onScroll = () => {
    const y = window.scrollY || 0;
    if (header) header.classList.toggle("is-scrolled", y > 6);

    const doc = document.documentElement;
    const max = (doc.scrollHeight - doc.clientHeight) || 1;
    const p = Math.min(1, y / max);
    bar.style.width = `${(p * 100).toFixed(2)}%`;
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* =========================================================
   REVEAL ON SCROLL (animação dos blocos)
   ========================================================= */
function setupReveal() {
  const items = qsa(".reveal");
  if (!items.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("is-in");
    });
  }, { threshold: 0.12 });

  items.forEach(el => io.observe(el));
}

/* =========================================================
   WIDGET "FALE COM A GIGI" (em todas as páginas)
   - mantém histórico em localStorage
   ========================================================= */
const GIGI_STORAGE_KEY = "gigi_chat_history_v1";

function loadGigiHistory() {
  try {
    return JSON.parse(localStorage.getItem(GIGI_STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}
function saveGigiHistory(items) {
  localStorage.setItem(GIGI_STORAGE_KEY, JSON.stringify(items));
}

/* Renderiza mensagens (simples, estilo formulário + logs) */
function renderGigiHistory(listEl, history) {
  if (!listEl) return;
  listEl.innerHTML = "";

  if (!history.length) {
    const empty = document.createElement("div");
    empty.className = "gigiMsg";
    empty.textContent = "Me conte sua dúvida 🙂 (o envio abre o WhatsApp com a mensagem pronta).";
    listEl.appendChild(empty);
    return;
  }

  history.slice(-8).forEach(item => {
    const div = document.createElement("div");
    div.className = "gigiMsg";
    div.textContent = item;
    listEl.appendChild(div);
  });
}

function mountGigiWidget() {
  if (qs(".gigiFab")) return; /* já montado */

  const fab = document.createElement("div");
  fab.className = "gigiFab";
  fab.innerHTML = `
    <!-- =====================================================
         BOTÃO FLUTUANTE
         ===================================================== -->
    <button class="gigiFab__btn" id="gigiFabBtn" aria-label="Fale com a Gigi">
      <span class="gigiIcon">💬</span>
      <span>Fale com a Gigi</span>
    </button>
  `;
  document.body.appendChild(fab);

  const box = document.createElement("div");
  box.className = "gigiBox";
  box.id = "gigiBox";
  box.style.display = "none";
  box.innerHTML = `
    <!-- =====================================================
         JANELA / BOX
         ===================================================== -->
    <div class="gigiBox__top">
      <!-- TÍTULO (SUBSTITUI O “Gigi” QUE VOCÊ NÃO ENCONTRAVA NO HTML) -->
      <div class="gigiBox__title">
        <strong>Olá, me chamo Gigi!</strong>
      </div>

      <button class="gigiBox__close" id="gigiClose" aria-label="Fechar">×</button>
    </div>

    <div class="gigiBox__body">
      <!-- Card com placeholder da imagem -->
      <div class="gigiCard">
        <div class="gigiCard__img" aria-label="Imagem da Gigi (placeholder)">56×56px</div>
        <div class="gigiCard__text">
          <strong>Olá, me chamo Gigi!</strong>
          <small>Me envie uma mensagem e eu te respondo direto no WhatsApp!</small>
        </div>
      </div>

      <!-- Histórico -->
      <div id="gigiHistory"></div>

      <!-- Form -->
      <form class="gigiForm" id="gigiForm">
        <div>
          <label for="gigiName">Seu nome *</label>
          <input id="gigiName" name="name" type="text" placeholder="Ex: Maria" required>
        </div>

        <div>
          <label for="gigiPhone">Seu telefone *</label>
          <input id="gigiPhone" name="phone" type="tel" placeholder="Ex: (21) 99999-9999" required>
        </div>

        <div>
          <label for="gigiMsg">Mensagem *</label>
          <textarea id="gigiMsg" name="message" placeholder="Ex: Quero saber o melhor horário para passeio de barco..." required></textarea>
        </div>

        <div id="gigiFeedback"></div>

        <button class="gigiSend" type="submit">Enviar</button>

        <div style="font-weight:900; color: rgba(0,0,0,.55); line-height:1.35;">
          Ao enviar, abriremos o WhatsApp com sua mensagem pronta.
        </div>
      </form>
    </div>
  `;
  document.body.appendChild(box);

  /* Eventos abrir/fechar */
  const btn = qs("#gigiFabBtn");
  const close = qs("#gigiClose");
  btn.addEventListener("click", () => { box.style.display = "block"; });
  close.addEventListener("click", () => { box.style.display = "none"; });

  /* Histórico */
  const historyEl = qs("#gigiHistory");
  const history = loadGigiHistory();
  renderGigiHistory(historyEl, history);

  /* Submit */
  const form = qs("#gigiForm");
  const feedback = qs("#gigiFeedback");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    feedback.innerHTML = "";

    const name = qs("#gigiName").value.trim();
    const phone = qs("#gigiPhone").value.trim();
    const message = qs("#gigiMsg").value.trim();

    if (!name || !phone || !message) {
      const err = document.createElement("div");
      err.className = "gigiMsg gigiMsg--error";
      err.textContent = "Todos os campos são obrigatórios.";
      feedback.appendChild(err);
      return;
    }

    /* salva no histórico */
    const record = `👤 ${name} (${phone}): ${message}`;
    history.push(record);
    saveGigiHistory(history);
    renderGigiHistory(historyEl, history);

    /* feedback ok */
    const ok = document.createElement("div");
    ok.className = "gigiMsg gigiMsg--ok";
    ok.textContent = "Mensagem enviada com sucesso! Já iremos entrar em contato com você.";
    feedback.appendChild(ok);

    /* monta msg para WhatsApp */
    const text = `Olá! Me chamo ${name}.\nTelefone: ${phone}\n\nMensagem:\n${message}\n\n(Enviado pelo site Portal Ilha da Gigóia)`;
    openWhatsApp(text);

    /* limpa campos */
    qs("#gigiMsg").value = "";
  });
}

/* =========================================================
   FLUTUAÇÃO ELÁSTICA (sempre canto inferior direito)
   ========================================================= */
function setupGigiFloat() {
  const fab = document.querySelector(".gigiFab");
  const box = document.getElementById("gigiBox");
  if (!fab) return;

  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let lastY = window.scrollY || 0;
  let offset = 0;
  let velocity = 0;

  const MAX = 18;
  const DAMP = 0.82;
  const SPRING = 0.14;
  let raf = null;

  function clamp(v, min, max){ return Math.max(min, Math.min(max, v)); }

  function apply() {
    raf = null;

    velocity += (0 - offset) * SPRING;
    velocity *= DAMP;
    offset += velocity;
    offset = clamp(offset, -MAX, MAX);

    const t = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
    fab.style.transform = t;

    if (box && box.style.display !== "none") box.style.transform = t;

    if (Math.abs(offset) > 0.10 || Math.abs(velocity) > 0.10) {
      raf = requestAnimationFrame(apply);
    } else {
      offset = 0; velocity = 0;
      fab.style.transform = "translate3d(0,0,0)";
      if (box && box.style.display !== "none") box.style.transform = "translate3d(0,0,0)";
    }
  }

  function kick(dy) {
    velocity += clamp(-dy * 0.20, -6, 6);
    if (!raf) raf = requestAnimationFrame(apply);
  }

  function onScroll() {
    const y = window.scrollY || 0;
    const dy = y - lastY;
    lastY = y;
    kick(dy);
  }

  fab.style.transform = "translate3d(0,0,0)";
  window.addEventListener("scroll", onScroll, { passive: true });

  window.addEventListener("resize", () => {
    lastY = window.scrollY || 0;
    offset = 0; velocity = 0;
    fab.style.transform = "translate3d(0,0,0)";
    if (box && box.style.display !== "none") box.style.transform = "translate3d(0,0,0)";
  }, { passive: true });
}

/* =========================================================
   INIT
   ========================================================= */
function init() {
  mountHeader();
  setActiveNav();
  setupScrollUI();
  setupReveal();

  mountGigiWidget();
  setupGigiFloat();

  /* marca body ready (evita issues com fixed) */
  requestAnimationFrame(() => document.body.classList.add("is-ready"));
}

document.addEventListener("DOMContentLoaded", init);
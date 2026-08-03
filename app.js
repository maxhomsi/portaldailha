/* =========================================================
   SISTEMA BASE E LÓGICA DO PORTAL ILHA DA GIGÓIA
   ========================================================= */

// Verifica se os arquivos dependentes (Dicionário e Capi) foram carregados corretamente
if (typeof DICT === 'undefined' || typeof capiTips === 'undefined') {
  console.warn("Aviso: 'dicionario.js' ou 'dicas-capi.js' não foram carregados. O site pode apresentar textos faltantes.");
}

// SOLUÇÃO: Se a função t() não existir no momento do carregamento, cria uma versão segura temporária
if (typeof window.t !== 'function') {
  window.t = function(key) { return key; };
}

/* =========================================================
   DADOS DOS CARDS E PÁGINAS (Com Tradução Ativa)
   ========================================================= */
const SITE = {
  brand: {
    logo: "assets/logo.png",
    nameSmall: "PORTAL",
    nameMainA: "Ilha da",
    nameMainB: "Gigóia",
  },
  nav: [
    { href: "a-ilha.html", label: t("nav_ilha") },
    { href: "passeios-rotas.html", label: t("nav_passeios") },
    { href: "comer-beber.html", label: t("nav_comer") },
    { href: "hospedagem.html", label: t("nav_hospedagem") },
    { href: "fale-conosco.html", label: t("nav_fale") }
  ],
  ctas: { header: { href: "passeios-rotas.html", label: t("btn_passeios") } },
  hero: {
    bg: "assets/hero.jpg", pill: t("hero_pill"), titleA: t("hero_title_a"),
    titleB: t("hero_title_b"), subtitle: t("hero_sub")
  },
  tip: { capiImg: "assets/capi.png", capiTag: t("capi_tag"), title: t("tip_title") },
  homeCards: [
    { title:t("hm_c1_t"), desc:t("hm_c1_d"), linkLabel:t("hm_c1_l"), href:"passeios-rotas.html", img:"assets/card-passeios.jpg", icon:"boat", badge: t("badge_procurado") },
    { title:t("hm_c2_t"), desc:t("hm_c2_d"), linkLabel:t("hm_c2_l"), href:"comer-beber.html", img:"assets/card-comer.jpg", icon:"fork", badge: t("badge_gastronomia") },
    { title:t("hm_c4_t"), desc:t("hm_c4_d"), linkLabel:t("hm_c4_l"), href:"hospedagem.html", img:"assets/pousadas/casanova1.webp", icon:"bed", badge: t("badge_relaxar") }
  ],
  pages: {
    "a-ilha": [
      { title: t("page_ilha_c1_t"), desc: t("page_ilha_c1_d"), linkLabel: t("btn_ver_detalhes"), href:"como-chegar.html", img:"assets/comochegar.jpg", icon:"boat" },
      { title: t("page_ilha_c2_t"), desc: t("page_ilha_c2_d"), linkLabel: t("btn_ler_mais"), href:"historia-cultura.html", img:"assets/historia.jpg", icon:"leaf" },
      { title: t("page_ilha_c3_t"), desc: t("page_ilha_c3_d"), linkLabel: t("btn_conferir"), href:"boas-praticas.html", img:"assets/boaspraticas.jpg", icon:"bed" },
      { title: t("page_ilha_c4_t"), desc: t("page_ilha_c4_d"), linkLabel: t("btn_ver_detalhes"), href:"melhor-epoca.html", img:"assets/melhorepoca.jpg", icon:"fork" }
    ],
    "passeios-rotas": [
      { title: t("page_pass_c1_t"), desc: t("page_pass_c1_d"), linkLabel: t("btn_ver_roteiro"), href:"ilhas-tijucas.html", img:"assets/passeios/tijucas1.jpg", icon:"boat", badge: t("badge_mergulho") },
      { title: t("page_pass_c2_t"), desc: t("page_pass_c2_d"), linkLabel: t("btn_ver_roteiro"), href:"pantanal-carioca.html", img:"assets/passeios/pantanal1.jpg", icon:"leaf", badge: t("badge_safari") },
      { title: t("page_pass_c3_t"), desc: t("page_pass_c3_d"), linkLabel: t("btn_ver_roteiro"), href:"reserva.html", img:"assets/passeios/reserva1.jpg", icon:"boat", badge: t("badge_praia") },
      { title: t("page_pass_c4_t"), desc: t("page_pass_c4_d"), linkLabel: t("btn_ver_opcoes"), href:"jet-ski.html", img:"assets/passeios/jet1.jpg", icon:"boat", badge: t("badge_adrenalina") },
      { title: t("page_pass_c5_t"), desc: t("page_pass_c5_d"), linkLabel: t("btn_ver_pacotes"), href:"pacotes-especiais.html", img:"assets/experiencia.jpg", icon:"fork", badge: t("badge_ofertas") }
    ],
    "comer-beber": [
      { title: t("page_comer_c1_t"), desc: t("page_comer_c1_d"), linkLabel: t("btn_ver_detalhes"), href:"restaurantes.html", img:"assets/card-comer.jpg", icon:"fork", badge: t("badge_gastronomia") },
      { title: t("page_comer_c2_t"), desc: t("page_comer_c2_d"), linkLabel: t("btn_ver_detalhes"), href:"bares-drinks.html", img:"assets/bar&DRINK.jpg", icon:"boat", badge: t("badge_relax") },
      { title: t("page_comer_c3_t"), desc: t("page_comer_c3_d"), linkLabel: t("btn_ver_opcoes"), href:"cafe-lanches.html", img:"assets/aleatoria/cantinho1.webp", icon:"leaf", badge: t("badge_bom_dia") },
      { title: t("page_comer_c4_t"), desc: t("page_comer_c4_d"), linkLabel: t("btn_conferir"), href:"eventos-experiencias.html", img:"assets/aleatoria/solar1.jpg", icon:"fork", badge: t("badge_ao_vivo") }
    ],
    "hospedagem": [
      { title: t("page_hosp_c1_t"), desc: t("page_hosp_c1_d"), linkLabel: t("btn_ver_detalhes"), href:"hoteis-pousadas.html", img:"assets/pousadas/veneza1.jpg", icon:"bed" },
      { title: t("page_hosp_c2_t"), desc: t("page_hosp_c2_d"), linkLabel: t("btn_ver_opcoes"), href:"airbnb-temporada.html", img:"assets/airbnb/venti1.avif", icon:"bed" },
      { title: t("page_hosp_c3_t"), desc: t("page_hosp_c3_d"), linkLabel: t("btn_conferir"), href:"espacos-eventos.html", img:"assets/eventos.jpg", icon:"fork", badge: t("badge_celebre") },
    ]
  }
};

/* =========================================================
   LÓGICA VISUAL, SVGs E GIGI CHAT
   ========================================================= */
const GIGI = { whatsappNumber: "5521993802618" };

window.openGigiChat = function() {
  const box = document.getElementById("gigiBox");
  if(box) { box.style.display = "flex"; }
};

const svgInsta = `<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`;
const svgFb = `<svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>`;
const svgTiktok = `<svg viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>`;
const svgYoutube = `<svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`;

const socialHtml = `
  <div class="social-links">
    <a href="https://www.instagram.com/ilha.da.gigoia" target="_blank" class="social-icon">${svgInsta}</a>
    <a href="https://www.facebook.com/portaldailhadagigoia" target="_blank" class="social-icon">${svgFb}</a>
    <a href="https://www.tiktok.com/@ilha.da.gigoia" target="_blank" class="social-icon">${svgTiktok}</a>
    <a href="https://www.youtube.com/@ilha.da.gigoia" target="_blank" class="social-icon">${svgYoutube}</a>
  </div>
`;

function iconSvg(name) {
  const common = `viewBox="0 0 24 24" aria-hidden="true" focusable="false"`;
  if (name === "boat") return `<svg ${common}><path d="M12 3c.6 0 1 .4 1 1v2h4c.4 0 .8.3 1 .7l2 6.1c.1.4 0 .8-.3 1.1-1.2 1.2-2.9 2.1-4.7 2.1-1.1 0-2.2-.3-3-.8-.8.5-1.9.8-3 .8s-2.2-.3-3-.8c-.8.5-1.9.8-3 .8-1.8 0-3.5-.9-4.7-2.1-.3-.3-.4-.7-.3-1.1l2-6.1c.1-.4.5-.7 1-.7h4V4c0-.6.4-1 1-1h6Zm-5 6H3.7L2.2 13.7c.8.7 1.8 1.2 2.8 1.2.9 0 1.7-.3 2.4-.8l.6-.4.6.4c.7.5 1.5.8 2.4.8.9 0 1.7-.3 2.4-.8l.6-.4.6.4c.7.5 1.5.8 2.4.8 1 0 2-.5 2.8-1.2L20.3 9H17v2c0 .6-.4 1-1 1H8c-.6 0-1-.4-1-1V9Zm2 0v1h6V9H9Z"/></svg>`;
  if (name === "fork") return `<svg ${common}><path d="M8 2c.6 0 1 .4 1 1v7c0 1.7-1.3 3-3 3v8c0 .6-.4 1-1 1s-1-.4-1-1v-8c-1.7 0-3-1.3-3-3V3c0-.6.4-1 1-1s1 .4 1 1v4h1V3c0-.6.4-1 1-1s1 .4 1 1v4h1V3c0-.6.4-1 1-1s1 .4 1 1v4h1V3c0-.6.4-1 1-1s1 .4 1 1v4h1V3c0-.6.4-1 1-1Zm12 0c.6 0 1 .4 1 1v9c0 1.9-1.3 3.4-3 3.9V21c0 .6-.4 1-1 1s-1-.4-1-1V3c0-.6.4-1 1-1 2.2 0 4 1.8 4 4v6c0 .6-.4 1-1 1s-1-.4-1-1V6c0-.8-.4-1.5-1-1.9V14h.2c.9-.3 1.8-1.1 1.8-2.2V3c0-.6.4-1 1-1Z"/></svg>`;
  if (name === "leaf") return `<svg ${common}><path d="M20.9 4.6c.2.5.1 1.1-.3 1.5l-8.5 8.5c-1.4 1.4-3.2 2.2-5.2 2.3h-.7l-1.9 1.9c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l1.9-1.9v-.7c.1-2 .9-3.8 2.3-5.2l8.5-8.5c.4-.4 1-.5 1.5-.3 1.6.6 2.9 1.9 3.5 3.5ZM7 14c1.5-.1 2.8-.7 3.9-1.7l7.8-7.8c-.4-.7-1-1.3-1.7-1.7l-7.8 7.8C8 11.7 7.3 13 7.2 14.5V14H7Z"/></svg>`;
  return `<svg ${common}><path d="M4 10c0-1.7 1.3-3 3-3h10c1.7 0 3 1.3 3 3v8c0 .6-.4 1-1 1s-1-.4-1-1v-1H6v1c0 .6-.4 1-1 1s-1-.4-1-1v-8Zm2 5h12v-2c0-.6-.4-1-1-1H7c-.6 0-1 .4-1 1v2Zm2-6h3c.6 0 1 .4 1 1s-.4 1-1 1H8c-.6 0-1-.4-1-1s.4-1 1-1Z"/></svg>`;
}

function cardHtml(c, idx=0) {
  const badgeHtml = c.badge ? `<div class="card__badge">${c.badge}</div>` : '';
  return `
    <article class="card reveal" style="transition-delay:${Math.min(idx*60, 240)}ms">
      <div class="card__img">
        ${badgeHtml}
        <img src="${c.img}" alt="" loading="lazy" />
        <div class="card__icon">${iconSvg(c.icon)}</div>
      </div>
      <div class="card__body">
        <h3 class="card__title">${c.title}</h3>
        <p class="card__desc">${c.desc}</p>
        <a class="card__link" href="${c.href}">${c.linkLabel || t("btn_ver_detalhes")} <span>→</span></a>
      </div>
    </article>
  `;
}

function mountHeaderFooter() {
  const header = document.getElementById("siteHeader");
  const footer = document.getElementById("siteFooter");
  
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'pt';
  
  if (header) {
    header.innerHTML = `
      <div class="container header__inner">
        <a class="brand" href="/">
          <img class="brand__logo" src="${SITE.brand.logo}" alt="Logo" />
          <div class="brand__text"><small>${SITE.brand.nameSmall}</small><strong><span>${SITE.brand.nameMainA}</span> ${SITE.brand.nameMainB}</strong></div>
        </a>
        <div class="navWrap"><nav class="nav">${SITE.nav.map(i => `<a data-navlink href="${i.href}">${i.label}</a>`).join("")}</nav></div>
        <div class="header__actions">
          ${socialHtml}
          
          <select class="lang-switcher" onchange="changeLanguage(this.value)">
            <option value="pt" ${lang === 'pt' ? 'selected' : ''}>🇧🇷 PT</option>
            <option value="en" ${lang === 'en' ? 'selected' : ''}>🇺🇸 EN</option>
            <option value="es" ${lang === 'es' ? 'selected' : ''}>🇪🇸 ES</option>
            <option value="zh" ${lang === 'zh' ? 'selected' : ''}>🇨🇳 中文</option>
          </select>

          <a class="btn btn--green" href="${SITE.ctas.header.href}">${SITE.ctas.header.label}</a>
          <button class="burger" id="burger">☰</button>
        </div>
      </div>
      <div class="mobileNav" id="mobileNav" style="display:none">
        <div class="container mobileNav__inner">
          ${SITE.nav.map(i => `<a data-navlink href="${i.href}">${i.label}</a>`).join("")}
          
          <select class="lang-switcher" onchange="changeLanguage(this.value)" style="margin: 10px 0; width: 100%;">
            <option value="pt" ${lang === 'pt' ? 'selected' : ''}>🇧🇷 PT</option>
            <option value="en" ${lang === 'en' ? 'selected' : ''}>🇺🇸 EN</option>
            <option value="es" ${lang === 'es' ? 'selected' : ''}>🇪🇸 ES</option>
            <option value="zh" ${lang === 'zh' ? 'selected' : ''}>🇨🇳 中文</option>
          </select>
          
          <a class="btn btn--green" style="justify-content:center" href="${SITE.ctas.header.href}">${SITE.ctas.header.label}</a>
        </div>
      </div>
    `;
  }

  if (footer) {
    const anoAtual = new Date().getFullYear();
    footer.innerHTML = `
      <div class="footer__wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
      
      <div class="footer__content container">
        <div class="footer__col">
          <h2 class="footer__logo">Portal Ilha da Gigóia</h2>
          <p>${t("footer_text")}</p>
          <div class="footer__socials_wrapper">
            ${socialHtml}
          </div>
        </div>
        
        <div class="footer__col">
          <h3 data-i18n="footer_nav_t">Navegue</h3>
          <ul>
            <li><a href="/" data-i18n="nav_inicio">Início</a></li>
            <li><a href="a-ilha.html">${t("nav_ilha")}</a></li>
            <li><a href="passeios-rotas.html">${t("nav_passeios")}</a></li>
            <li><a href="comer-beber.html">${t("nav_comer")}</a></li>
            <li><a href="hospedagem.html">${t("nav_hospedagem")}</a></li>
          </ul>
        </div>
        
        <div class="footer__col">
          <h3 data-i18n="footer_serv_t">Atendimento</h3>
          <ul>
            <li><a href="https://wa.me/${GIGI.whatsappNumber}" target="_blank">${t("gigi_fab")}</a></li>
            <li><a href="fale-conosco.html">${t("nav_fale")}</a></li>
          </ul>
        </div>
      </div>
      
      <div class="footer__bottom">
        <p>&copy; ${anoAtual} Portal Ilha da Gigóia. ${t("footer_rights")}</p>
      </div>
    `;
  }

  document.getElementById("burger")?.addEventListener("click", () => {
    const panel = document.getElementById("mobileNav");
    if (!panel) return;
    panel.style.display = panel.style.display === "none" ? "block" : "none";
  });

  setActiveNav();
}

function setActiveNav() {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-navlink]").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path) { a.setAttribute("aria-current", "page"); } 
    else { a.removeAttribute("aria-current"); }
  });
}

function mountHome() {
  const heroBg = document.getElementById("heroBg");
  if (heroBg) heroBg.style.backgroundImage = `url('${SITE.hero.bg}')`;

  const pill = document.getElementById("heroPill");
  if (pill) pill.querySelector("span:last-child").textContent = SITE.hero.pill;

  const title = document.getElementById("heroTitle");
  if (title) title.innerHTML = `${SITE.hero.titleA}<br><span class="accent">${SITE.hero.titleB}</span>`;

  const subtitle = document.getElementById("heroSubtitle");
  if (subtitle) subtitle.textContent = SITE.hero.subtitle;
  
  const checkText = document.querySelector(".hero__foot span:last-child");
  if (checkText) checkText.textContent = t("hero_check");
  
  const secTitle = document.querySelector(".section__title.reveal");
  if (secTitle) secTitle.textContent = t("sect_espera_title");
  
  const secSub = document.querySelector(".section__subtitle.reveal");
  if (secSub) secSub.textContent = t("sect_espera_sub");

  const capiImg = document.getElementById("capiImg");
  if (capiImg) capiImg.src = SITE.tip.capiImg;

  const tipTitle = document.getElementById("tipTitle");
  if (tipTitle) tipTitle.textContent = SITE.tip.title;

  const homeCards = document.getElementById("homeCards");
  if (homeCards) homeCards.innerHTML = SITE.homeCards.map((c,i)=>cardHtml(c,i)).join("");
}

function mountPageCards(pageKey) {
  const list = SITE.pages[pageKey] || [];
  const box = document.getElementById("pageCards");
  if (box) box.innerHTML = list.map((c,i)=>cardHtml(c,i)).join("");
}


// =======================================================
// GIGI CHATBOT - AUTOMAÇÃO E WIDGET (COM FAKE AI)
// =======================================================
function mountGigiWidget() {
  const root = document.getElementById("gigiWidgetRoot");
  if (!root) return;
  const isOpen = false; // Chat sempre começa fechado, só abre ao clicar

  // Identifica a linguagem para os botões iniciais
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'pt';
  const btn1 = lang === 'en' ? "📍 How to get there?" : lang === 'es' ? "📍 ¿Cómo llegar?" : lang === 'zh' ? "📍 如何到达小岛？" : "📍 Como chegar na Ilha?";
  const btn2 = lang === 'en' ? "🚤 Tour Prices" : lang === 'es' ? "🚤 Precios de Paseos" : lang === 'zh' ? "🚤 游览价格" : "🚤 Preços de Passeios";
  const btn3 = lang === 'en' ? "💬 Talk on WhatsApp" : lang === 'es' ? "💬 Hablar en WhatsApp" : lang === 'zh' ? "💬 通过WhatsApp联系" : "💬 Quero falar no WhatsApp";
  const btn_comer   = lang === 'en' ? "🍽️ Restaurants & Bars" : lang === 'es' ? "🍽️ Restaurantes y Bares" : lang === 'zh' ? "🍽️ 餐厅与酒吧" : "🍽️ Onde Comer & Beber";
  const btn_hosped  = lang === 'en' ? "🛌 Where to Stay" : lang === 'es' ? "🛌 Dónde Dormir" : lang === 'zh' ? "🛌 住宿" : "🛌 Hospedagem";
  const btn_eventos = lang === 'en' ? "🎉 Events & Agenda" : lang === 'es' ? "🎉 Eventos y Agenda" : lang === 'zh' ? "🎉 活动日程" : "🎉 Eventos do Momento";
  const placeholderInput = lang === 'en' ? "Ask something..." : lang === 'es' ? "Pregunta algo..." : lang === 'zh' ? "请提问..." : "Pergunte algo...";

  root.innerHTML = `
    <div class="gigiFab">
      <button class="gigiFab__btn" id="gigiFabBtn" type="button" onclick="openGigiChat()">
        <span class="gigiIcon">💬</span> <span>${t("gigi_fab")}</span>
      </button>
    </div>
    <div class="gigiBox" id="gigiBox" style="display:${isOpen ? "flex" : "none"}; max-height: 85vh; overflow: hidden;">
      <div class="gigiBox__top">
        <div class="gigiBox__title"><strong>Gigi</strong><small>Assistente Virtual</small></div>
        <button class="gigiBox__close" onclick="document.getElementById('gigiBox').style.display='none'">✕</button>
      </div>
      
      <div class="gigiBox__body" id="gigiChatBody" style="background:#f6fbf6; display:flex; flex-direction:column; overflow-y:auto; height: 380px; padding:20px;">
        
        <div id="gigiChatFlow" style="display:flex; flex-direction:column; gap:15px;">
          
          <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px; padding: 10px 0;">
            <div style="width: 120px; flex-shrink: 0;">
              <img src="assets/gigi.png" alt="Gigi" style="width: 100%; height: auto; object-fit: contain; filter: drop-shadow(0 10px 15px rgba(0,0,0,0.1));">
            </div>
            <div style="flex: 1;">
              <strong style="font-size: 22px; color: var(--text); display: block; margin-bottom: 6px; line-height: 1.2;">Olá, me chamo Gigi!</strong>
              <p style="font-size: 15px; color: var(--muted); font-weight: 600; line-height: 1.4; margin: 0;">
                Você pode digitar sua dúvida abaixo ou escolher uma opção rápida:
              </p>
            </div>
          </div>

        </div>

        <div class="gigi-quick-replies" id="gigiOptions" style="margin-top:15px; display:flex; flex-direction:column; gap:8px;">
          <button class="gigi-quick-btn" onclick="gigiAsk('onde_comer')">${btn_comer}</button>
          <button class="gigi-quick-btn" onclick="gigiAsk('hospedagem')">${btn_hosped}</button>
          <button class="gigi-quick-btn" onclick="gigiAsk('passeios')">${btn2}</button>
          <button class="gigi-quick-btn" onclick="gigiAsk('eventos')">${btn_eventos}</button>
          <button class="gigi-quick-btn" onclick="gigiAsk('como_chegar')">${btn1}</button>
          <button class="gigi-quick-btn" onclick="gigiAsk('whatsapp')">${btn3}</button>
        </div>

        <div id="gigiFormContainer" style="display:none; margin-top:15px;">
          <form class="gigiForm" id="gigiForm" style="background:#fff; padding:15px; border-radius:16px; box-shadow:0 4px 15px rgba(0,0,0,0.05);">
            <div style="margin-bottom:12px; font-size:13px; color:var(--green); font-weight:800; text-align:center;">Preencha seus dados para iniciar o WhatsApp</div>
            <div><input id="gigiName" type="text" placeholder="Seu nome" required style="margin-bottom:8px;"/></div>
            <div><input id="gigiPhone" type="tel" placeholder="(21) 99999-9999" required style="margin-bottom:8px;"/></div>
            <div><textarea id="gigiMessage" placeholder="Sua mensagem..." required></textarea></div>
            <button class="gigiSend" type="submit" style="width:100%; margin-top:10px;">${t("gigi_btn")}</button>
          </form>
        </div>
      </div>

      <div style="padding: 12px 15px; background: #fff; border-top: 1px solid rgba(0,0,0,0.08); display: flex; gap: 8px; align-items: center;">
        <input type="text" id="gigiFreeInput" placeholder="${placeholderInput}" style="flex: 1; padding: 12px 15px; border-radius: 20px; border: 1px solid #ddd; outline: none; font-family: inherit; font-size: 13px;" onkeypress="if(event.key === 'Enter') sendGigiFreeMsg()">
        <button onclick="sendGigiFreeMsg()" style="background: var(--green); color: #fff; border: none; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: transform 0.2s;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        </button>
      </div>

    </div>
  `;

  // Função do formulário WhatsApp
  const form = document.getElementById("gigiForm");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("gigiName")?.value || "";
    const phone = document.getElementById("gigiPhone")?.value || "";
    const msg = document.getElementById("gigiMessage")?.value || "";
    const text = `Olá! Quero falar com a equipe do Portal Ilha da Gigóia.\n\n*Nome:* ${name}\n*Telefone:* ${phone}\n*Mensagem:*\n${msg}`;
    window.open(`https://wa.me/${GIGI.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
    form.reset();
    gigiAsk('encerrar');
  });
}

// =======================================================
// LÓGICA DE DIGITAÇÃO LIVRE E INTEGRAÇÃO COM CEREBRO-GIGI
// =======================================================

window.sendGigiFreeMsg = function() {
  const input = document.getElementById('gigiFreeInput');
  const text = input.value.trim();
  if(!text) return;

  const body = document.getElementById('gigiChatBody');
  const flow = document.getElementById('gigiChatFlow');
  const optionsDiv = document.getElementById('gigiOptions');
  
  if(optionsDiv) optionsDiv.style.display = 'none';

  // Imprime a pergunta do usuário na tela
  flow.insertAdjacentHTML('beforeend', `<div class="gigi-msg gigi-msg--user"><div class="gigi-bubble">${text}</div></div>`);
  input.value = "";
  body.scrollTop = body.scrollHeight;

  // Limpa acentos e converte para minúsculo
  const normalized = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
  // Pega o idioma atual (se não existir, usa 'pt')
  const lang = (typeof window.currentLang !== 'undefined') ? window.currentLang : 'pt';

  // Respostas padrão traduzidas caso não encontre
  let botReply = lang === 'en' ? "Hmm, good question! 🤔 My system is still learning about this. You can choose an option below or call our team on WhatsApp:" :
                 lang === 'es' ? "¡Hmm, buena pregunta! 🤔 Mi sistema todavía está aprendiendo sobre esto. Puedes elegir una opción abajo o llamar a nuestro equipo en WhatsApp:" :
                 lang === 'zh' ? "嗯，好问题！🤔 我的系统还在学习这个。您可以在下方选择一个选项，或通过WhatsApp联系我们的团队：" :
                 "Hmm, boa pergunta! 🤔 Meu sistema ainda está aprendendo sobre isso. Você pode escolher uma das opções abaixo ou chamar nossa equipe no WhatsApp:";

  let showOptions = true;

  // Busca Inteligente no Cérebro (keywords rápidas)
  let matchedByKeyword = false;
  if (typeof GIGI_BRAIN !== 'undefined') {
    for (let rule of GIGI_BRAIN) {
      if (rule.keywords.some(kw => new RegExp("\\b" + kw + "s?\\b", "gi").test(normalized))) {
        botReply = rule.reply[lang] || rule.reply['pt'];
        showOptions = rule.showWhatsapp === true;
        matchedByKeyword = true;
        break;
      }
    }
  }

  // Função para renderizar resposta no chat
  function renderGigiReply(text, showBtn) {
    flow.insertAdjacentHTML('beforeend', `<div class="gigi-msg gigi-msg--bot"><div class="gigi-avatar"><img src="assets/gigi.png" alt="Gigi"></div><div class="gigi-bubble">${text}</div></div>`);
    if (showBtn) {
      const btnText = lang === 'en' ? "💬 Talk to Team on WhatsApp" :
                      lang === 'es' ? "💬 Hablar con Equipo en WhatsApp" :
                      lang === 'zh' ? "💬 通过WhatsApp联系团队" :
                      "💬 Falar com Equipe no WhatsApp";
      flow.insertAdjacentHTML('beforeend', `
        <div class="gigi-quick-replies" style="margin-top:5px;">
          <button class="gigi-quick-btn" onclick="gigiAsk('whatsapp')">${btnText}</button>
        </div>
      `);
    }
    body.scrollTop = body.scrollHeight;
  }

  if (matchedByKeyword && botReply !== '__WEATHER__' && botReply !== '__MENU__') {
    // Resposta rápida via keyword
    setTimeout(() => { renderGigiReply(botReply, showOptions); }, 600);
  } else if (matchedByKeyword && botReply === '__MENU__') {
    // Mostrar menu inicial novamente
    setTimeout(() => {
      const b1 = lang === 'en' ? "📍 How to get there?" : lang === 'es' ? "📍 ¿Cómo llegar?" : lang === 'zh' ? "📍 如何到达小岛？" : "📍 Como chegar na Ilha?";
      const b2 = lang === 'en' ? "🚤 Tour Prices" : lang === 'es' ? "🚤 Precios de Paseos" : lang === 'zh' ? "🚤 游览价格" : "🚤 Preços de Passeios";
      const b3 = lang === 'en' ? "💬 Talk on WhatsApp" : lang === 'es' ? "💬 Hablar en WhatsApp" : lang === 'zh' ? "💬 通过WhatsApp联系" : "💬 Quero falar no WhatsApp";
      const menuLabel = lang === 'en' ? "Here are the quick options:" : lang === 'es' ? "Aquí están las opciones rápidas:" : lang === 'zh' ? "以下是快捷选项：" : "Aqui estão as opções rápidas:";
      flow.insertAdjacentHTML('beforeend', `
        <div class="gigi-msg gigi-msg--bot">
          <div class="gigi-avatar"><img src="assets/gigi.png" alt="Gigi"></div>
          <div class="gigi-bubble">${menuLabel}</div>
        </div>
        <div class="gigi-quick-replies">
          <button class="gigi-quick-btn" onclick="gigiAsk('como_chegar')">${b1}</button>
          <button class="gigi-quick-btn" onclick="gigiAsk('passeios')">${b2}</button>
          <button class="gigi-quick-btn" onclick="gigiAsk('whatsapp')">${b3}</button>
        </div>
      `);
      body.scrollTop = body.scrollHeight;
    }, 400);
  } else if (typeof askGigiAI === 'function') {
    // Fallback: chamar IA real (gigi-proxy.php)
    const thinkingId = 'thinking_' + Date.now();
    const thinkingMsg = lang === 'en' ? "✨ Let me think..." : lang === 'es' ? "✨ Déjame pensar..." : lang === 'zh' ? "✨ 让我想想..." : "✨ Deixa eu pensar...";
    setTimeout(() => {
      flow.insertAdjacentHTML('beforeend', `<div class="gigi-msg gigi-msg--bot" id="${thinkingId}"><div class="gigi-avatar"><img src="assets/gigi.png" alt="Gigi"></div><div class="gigi-bubble" style="opacity:0.6;font-style:italic;">${thinkingMsg}</div></div>`);
      body.scrollTop = body.scrollHeight;

      askGigiAI(text, lang).then(aiReply => {
        const el = document.getElementById(thinkingId);
        if (el) el.remove();
        if (aiReply) {
          renderGigiReply(aiReply, false);
        } else {
          // Proxy indisponível — mostra fallback padrão
          renderGigiReply(botReply === '__WEATHER__' || botReply === '__MENU__' || botReply === '⏳' ? (lang === 'en' ? 'Hmm, good question! 🤔 Choose an option below or contact our team on WhatsApp:' : lang === 'es' ? '¡Hmm, buena pregunta! 🤔 Elige una opción abajo o contacta nuestro equipo en WhatsApp:' : lang === 'zh' ? '嗯，好问题！🤔 请在下方选择选项或通过WhatsApp联系我们的团队：' : 'Hmm, boa pergunta! 🤔 Você pode escolher uma das opções abaixo ou chamar nossa equipe no WhatsApp:') : botReply, true);
        }
      });
    }, 400);
  } else {
    // Sem IA disponível — fallback padrão
    setTimeout(() => { renderGigiReply(botReply === '__WEATHER__' || botReply === '__MENU__' || botReply === '⏳' ? (lang === 'en' ? 'Hmm, good question! 🤔 Choose an option below or contact our team on WhatsApp:' : lang === 'es' ? '¡Hmm, buena pregunta! 🤔 Elige una opción abajo o contacta nuestro equipo en WhatsApp:' : lang === 'zh' ? '嗯，好问题！🤔 请在下方选择选项或通过WhatsApp联系我们的团队：' : 'Hmm, boa pergunta! 🤔 Você pode escolher uma das opções abaixo ou chamar nossa equipe no WhatsApp:') : botReply, true); }, 800);
  }
};
// =======================================================
// LÓGICA DOS BOTÕES RÁPIDOS DA GIGI
// =======================================================
window.gigiAsk = function(questionId) {
  const body = document.getElementById('gigiChatBody');
  const flow = document.getElementById('gigiChatFlow');
  const optionsDiv = document.getElementById('gigiOptions');
  const formDiv = document.getElementById('gigiFormContainer');

  // Esconde os botões quando o usuário clica
  if(optionsDiv) optionsDiv.style.display = 'none';
  if(formDiv) formDiv.style.display = 'none';

  const lang = (typeof window.currentLang !== 'undefined') ? window.currentLang : 'pt';
  
  let userText = "";
  let botReply = "";
  let showForm = false;

  // Respostas configuradas dos botões com suporte multi-idioma
  if (questionId === 'como_chegar') {
    userText = lang === 'en' ? "How to get there?" : lang === 'es' ? "¿Cómo llegar?" : "Como chegar na Ilha?";
    botReply = lang === 'en' ? "It's super easy! Get off at Jardim Oceânico subway station (Lagoa Exit) and walk 5 mins to the decks. Boats run 24/7 and cost around R$ 5.00." : 
               lang === 'es' ? "¡Es súper fácil! Bájate en la estación de metro Jardim Oceânico (Salida Lagoa) y camina 5 min hasta los muelles. Los botes funcionan las 24 hrs y cuestan aprox R$ 5,00." : 
               "É super fácil! Salte na estação de metrô Jardim Oceânico (Saída Lagoa) e caminhe 5 minutos até os decks. As chalanas funcionam 24h e a travessia custa em média R$ 5,00. Posso te ajudar com mais alguma coisa?";
  } 
  else if (questionId === 'onde_comer') {
    userText = lang === 'en' ? "Restaurants & Bars" : lang === 'es' ? "¿Dónde comer?" : lang === 'zh' ? "餐厅与酒吧" : "Onde comer e beber?";
    botReply = lang === 'en'
      ? "🍽️ <b>Restaurants:</b> Ocyá (Michelin ⭐), Laguna (pioneer since 2002), Deck Bar (pineapple shrimp 🍍), Cais Bar (open-bar snacks), Salomé al Mare, Maracujá da Ilha, Venne Gastronomia, Camarão da Barra, Alla Pergola (Italian 🍕).<br><br>🍺 <b>Bars:</b> AK Bar (best sunset 🌅), Briza da Gigóia (live samba), Bar Caiçara (cultural), Dona Capivara (lagoon view), Bar do Elson (best roasted chicken 🍗), Kauai Gastrolounge (kids area).<br><br>☕ <b>Cafés:</b> Cantinho do Café, Café Poesia."
      : lang === 'es'
      ? "🍽️ <b>Restaurantes:</b> Ocyá (Michelin ⭐), Laguna (pionero desde 2002), Deck Bar (camarón en piña 🍍), Cais Bar (rodízio con barra libre), Salomé al Mare, Maracujá da Ilha, Venne Gastronomia, Camarão da Barra, Alla Pergola (italiana 🍕).<br><br>🍺 <b>Bares:</b> AK Bar (mejor atardecer 🌅), Briza da Gigóia (samba en vivo), Bar Caiçara (cultural), Dona Capivara (vista laguna), Bar do Elson (mejor pollo 🍗), Kauai Gastrolounge (área kids)."
      : lang === 'zh'
      ? "🍽️ <b>餐厅：</b>欧希亚（米其林⭐）、拉古纳（2002年起）、甲板酒吧（菠萝虾🍍）、码头酒吧（含无限饮品）、萨洛梅、岛上百香果、文内、巴拉虾、阿拉佩尔戈拉（意大利料理🍕）。<br><br>🍺 <b>酒吧：</b>AK酒吧（最佳日落🌅）、吉戈亚微风（现场桑巴）、海滨酒吧（文化）、多娜水豚（泻湖景观）、埃尔森酒吧（最佳烤鸡🍗）、考艾美食休闲吧（儿童区）。"
      : "🍽️ <b>Restaurantes:</b> Ocyá (Michelin ⭐), Laguna (desde 2002), Deck Bar (camarão no abacaxi 🍍), Cais Bar (rodízio com bebida livre), Salomé al Mare, Maracujá da Ilha, Venne Gastronomia, Camarão da Barra, Alla Pergola (italiana 🍕).<br><br>🍺 <b>Bares:</b> AK Bar (pôr do sol 🌅), Briza da Gigóia (samba ao vivo 🎶), Bar Caiçara (cultural), Dona Capivara (vista lagoa), Bar do Elson (melhor frango 🍗), Bar da Joana (comida caseira), Kauai Gastrolounge (área kids).<br><br>☕ <b>Cafés:</b> Cantinho do Café, Café Poesia.";
  }
  else if (questionId === 'hospedagem') {
    userText = lang === 'en' ? "Where to stay?" : lang === 'es' ? "¿Dónde dormir?" : lang === 'zh' ? "住宿选择" : "Onde me hospedar?";
    botReply = lang === 'en'
      ? "🛌 <b>Inns:</b> Pousada Barra da Tijuca (R$220+/night), Pousada Marísis (R$200+/night, very quiet), Veneza Carioca Hotel Boutique (R$250+/night, romantic ❤️).<br><br>🏡 <b>Airbnb/Houses:</b> Casa Venti (7 people, R$450, pets 🐾), Casa Goiá (8 people, R$500), Casa da Estátua (16 people + pool 🏊, R$1.500), Lux 48 (couples, R$250), Casanova (luxury, unique design ✨)."
      : lang === 'es'
      ? "🛌 <b>Posadas:</b> Pousada Barra da Tijuca (R$220+/noche), Pousada Marísis (R$200+/noche, muy silenciosa), Veneza Carioca Hotel Boutique (R$250+/noche, romántico ❤️).<br><br>🏡 <b>Airbnb/Casas:</b> Casa Venti (7 personas, R$450, mascotas 🐾), Casa Goiá (8 personas, R$500), Casa da Estátua (16 personas + piscina 🏊, R$1.500), Lux 48 (parejas, R$250), Casanova (lujo ✨)."
      : lang === 'zh'
      ? "🛌 <b>旅馆：</b>巴拉旅馆（R$220+/晚）、玛丽西斯旅馆（R$200+/晚，非常安静）、里约威尼斯精品酒店（R$250+/晚，浪漫❤️）。<br><br>🏡 <b>Airbnb/整栋房屋：</b>文蒂之家（7人，R$450，允许宠物🐾）、戈亚之家（8人，R$500）、雕像之家（16人+泳池🏊，R$1500）、豪华48号（情侣，R$250）、卡萨诺瓦（豪华✨）。"
      : "🛌 <b>Pousadas:</b> Pousada Barra da Tijuca (R$220+/noite), Pousada Marísis (R$200+/noite, super silenciosa), Veneza Carioca Hotel Boutique (R$250+/noite, romântico ❤️).<br><br>🏡 <b>Airbnb/Casas:</b> Casa Venti (7 pessoas, R$450, aceita pets 🐾), Casa Goiá (8 pessoas, R$500), Casa da Estátua (16 pessoas + piscina 🏊, R$1.500), Lux 48 (casais, R$250), Casanova (luxo, design único ✨).";
  }
  else if (questionId === 'eventos') {
    userText = lang === 'en' ? "Events & Agenda" : lang === 'es' ? "Eventos del Momento" : lang === 'zh' ? "活动日程" : "Eventos do Momento";
    const now = new Date();
    const month = now.getMonth(); // 0=jan, 4=mai, 5=jun
    let eventsText = '';
    if (lang === 'en') {
      eventsText = "🎉 <b>Regular events:</b> Feira Gigoiando (handicrafts & gastronomy, weekends), Jazz & Sunset (monthly), Gastronomy Festival (annual).<br><br>"
        + "📅 <b>Upcoming:</b> Comida di Buteco (until mid-May 🍺), Festa Junina (June 🎉), Copa do Brasil (Jun 13, 19, 24 ⚽).<br><br>"
        + "🌅 <b>Best sunset spots:</b> AK Bar, Dona Capivara and Maracujá da Ilha. Want to schedule something special?";
    } else if (lang === 'es') {
      eventsText = "🎉 <b>Eventos regulares:</b> Feira Gigoiando (artesanía y gastronomía, fines de semana), Jazz & Sunset (mensual), Festival Gastronómico (anual).<br><br>"
        + "📅 <b>Próximos:</b> Comida di Buteco (hasta mediados de mayo 🍺), Fiesta Junina (junio 🎉), Copa do Brasil (13, 19 y 24/Jun ⚽).<br><br>"
        + "🌅 <b>Mejores puntos de atardecer:</b> AK Bar, Dona Capivara y Maracujá da Ilha.";
    } else if (lang === 'zh') {
      eventsText = "🎉 <b>常规活动：</b>吉戈亚集市（手工艺品和美食，周末）、爵士与日落（每月）、美食节（每年）。<br><br>"
        + "📅 <b>近期活动：</b>小馆美食赛（5月中旬前🍺）、六月节（6月🎉）、巴西世界杯（6月13、19、24日⚽）。<br><br>"
        + "🌅 <b>最佳日落地点：</b>AK酒吧、多娜水豚和岛上百香果。";
    } else {
      eventsText = "🎉 <b>Eventos fixos:</b> Feira Gigoiando (artesanato e gastronomia, fins de semana), Jazz & Sunset (mensal), Festival Gastronômico (anual).<br><br>"
        + "📅 <b>Em destaque agora:</b> Comida di Buteco 2026 — prove os pratos exclusivos do Bar Caiçaras, Bar do Elson e Dona Capivara e vote no favorito! (até meados de maio 🍺)<br><br>"
        + "⚽ <b>Copa do Mundo 2026:</b> 13/Jun (Brasil x Marrocos), 19/Jun (Brasil x Haiti), 24/Jun (Escócia x Brasil). Curta os jogos com cerveja gelada nos bares da ilha!<br><br>"
        + "🎉 <b>Festa Junina:</b> Arraial com forró, comidas típicas e muita alegria em junho!<br><br>"
        + "🌅 <b>Melhores pontos de pôr do sol:</b> AK Bar, Dona Capivara e Maracujá da Ilha. Quer montar um roteiro especial?";
    }
    botReply = eventsText;
  }
  else if (questionId === 'passeios') {
    userText = lang === 'en' ? "Tour Prices" : lang === 'es' ? "Precios de Paseos" : "Como funcionam os passeios?";
    botReply = lang === 'en' ? "We have several options! The Pantanal Carioca tour is ~R$ 50. The Tijucas Islands tour takes 4h and costs ~R$ 150. Want to schedule on WhatsApp?" : 
               lang === 'es' ? "¡Tenemos varias opciones! El tour Pantanal Carioca cuesta ~R$ 50. El de Islas Tijucas dura 4h y cuesta ~R$ 150. ¿Quieres programar en WhatsApp?" : 
               "Temos várias opções! O passeio do Pantanal Carioca dura 45 min e custa cerca de R$ 50. Já o roteiro Ilhas Tijucas leva umas 4h e custa R$ 150. Quer ir pro WhatsApp agendar um horário com um barqueiro?";
  } 
  else if (questionId === 'whatsapp') {
    userText = lang === 'en' ? "Talk to Team (WhatsApp)" : lang === 'es' ? "Hablar con Equipo (WhatsApp)" : "Falar com a equipe (WhatsApp)";
    botReply = lang === 'en' ? "Perfect! Fill in your details below so I can open your WhatsApp with the message organized:" : 
               lang === 'es' ? "¡Perfecto! Rellena tus datos abajo para abrir tu WhatsApp con el mensaje organizado:" : 
               "Perfeito! Preencha seus dados aqui embaixo rapidinho para eu abrir o seu WhatsApp já com a mensagem organizada:";
    showForm = true;
  }
  else if (questionId === 'encerrar') {
    userText = lang === 'en' ? "Message Sent!" : lang === 'es' ? "¡Mensaje Enviado!" : "Mensagem Enviada!";
    botReply = lang === 'en' ? "All set! WhatsApp is open. I'll be here if you need anything else." : 
               lang === 'es' ? "¡Listo! WhatsApp está abierto. Estaré aquí si necesitas algo más." : 
               "Prontinho, o WhatsApp foi aberto! Se precisar de mais alguma coisa, estarei por aqui.";
  }

  // Imprime a pergunta do usuário na tela
  flow.insertAdjacentHTML('beforeend', `
    <div class="gigi-msg gigi-msg--user">
      <div class="gigi-bubble">${userText}</div>
    </div>
  `);

  body.scrollTop = body.scrollHeight;

  // Imprime a resposta da Gigi (com delay)
  setTimeout(() => {
    flow.insertAdjacentHTML('beforeend', `
      <div class="gigi-msg gigi-msg--bot">
        <div class="gigi-avatar"><img src="assets/gigi.png" alt="Gigi"></div>
        <div class="gigi-bubble">${botReply}</div>
      </div>
    `);

    // Mostra o formulário do Whatsapp OU o botão de voltar
    if (showForm) {
      formDiv.style.display = 'block';
    } else if (questionId !== 'encerrar') {
      const btnSchedule = lang === 'en' ? "💬 Schedule on WhatsApp" : lang === 'es' ? "💬 Agendar en WhatsApp" : "💬 Agendar/Falar no WhatsApp";
      const btnBack = lang === 'en' ? "🔄 Back to options" : lang === 'es' ? "🔄 Volver a opciones" : "🔄 Voltar às opções";

      flow.insertAdjacentHTML('beforeend', `
        <div class="gigi-quick-replies" style="margin-top:10px;">
          <button class="gigi-quick-btn" onclick="gigiAsk('whatsapp')">${btnSchedule}</button>
          <button class="gigi-quick-btn" onclick="document.getElementById('gigiOptions').style.display='flex'; this.parentElement.style.display='none';">${btnBack}</button>
        </div>
      `);
    }
    
    body.scrollTop = body.scrollHeight;
  }, 600);
};

// =======================================================
// FIM DA LÓGICA DA GIGI
// =======================================================

function setupCadastroModal() {
  const currentUrl = location.href;
  const showButton = ['restaurantes', 'bares-drinks', 'cafe-lanches', 'eventos-experiencias'].some(page => currentUrl.includes(page));
  
  if (!showButton) return;

  const html = `
    <div class="side-badge" onclick="openCadastroModal()">
      ${t("side_badge_espaco")}
    </div>

    <div class="modal-overlay" id="cadastroModal" onclick="closeCadastroModal(event)">
      <div class="modal-content" onclick="event.stopPropagation()">
        <button class="modal-close" onclick="closeCadastroModal()">×</button>
        <h2 style="margin-top:0; color:var(--green-dark); font-weight:900;">${t("modal_fale_title")}</h2>
        <p style="color:var(--muted); margin-bottom:24px; font-weight:600;">${t("modal_cad_espaco_sub")}</p>
        
        <form id="ajaxCadastroForm" class="gigiForm">
          <div>
            <label>${t("lbl_nome_espaco")}</label>
            <input type="text" placeholder="Ex: Boteco da Ilha" required />
          </div>
          <div>
            <label>${t("lbl_seu_nome")}</label>
            <input type="text" placeholder="Maria da Silva" required />
          </div>
          <div>
            <label>${t("gigi_lbl_phone")}</label>
            <input type="tel" placeholder="(21) 99999-9999" required />
          </div>
          <div>
            <label>${t("gigi_lbl_msg")}</label>
            <textarea rows="3" placeholder="..." required></textarea>
          </div>
          <button type="submit" class="btn btn--green" style="width:100%; margin-top:10px; padding:15px; font-size:16px; height:auto;" id="ajaxSubmitBtn">${t("btn_enviar_solic")}</button>
        </form>

        <div id="ajaxSuccess" style="display:none; text-align:center; padding:40px 20px;">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="var(--green)" style="margin-bottom:20px; display:inline-block;">
            <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm-1.2 17.3l-4.8-4.8 1.4-1.4 3.4 3.4 7.6-7.6 1.4 1.4-9 9z"/>
          </svg>
          <h3 style="margin:0 0 10px; color:var(--text); font-weight:900; font-size:22px;">${t("modal_sucesso_title")}</h3>
          <p style="color:var(--muted); font-size:16px; font-weight:600;">${t("modal_sucesso_sub")}</p>
          <button class="btn" style="margin-top:20px; background:#eee; color:#333; width:100%;" onclick="closeCadastroModal()">${t("btn_fechar")}</button>
        </div>

      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', html);

  const form = document.getElementById('ajaxCadastroForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.getElementById('ajaxSubmitBtn');
    btn.innerText = t("btn_enviando");
    btn.style.opacity = "0.7";
    btn.style.pointerEvents = "none";
    
    setTimeout(() => {
      form.style.display = 'none';
      document.getElementById('ajaxSuccess').style.display = 'block';
    }, 1500);
  });
}

window.openCadastroModal = function() {
  const m = document.getElementById('cadastroModal');
  if(!m) return;
  m.style.display = 'flex';
  void m.offsetWidth;
  m.classList.add('is-active');
};

window.closeCadastroModal = function(e) {
  const m = document.getElementById('cadastroModal');
  if(!m) return;
  m.classList.remove('is-active');
  setTimeout(() => { m.style.display = 'none'; }, 300);
};

function setupLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImage');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  
  let galleryImages = [];
  let currentIndex = 0;

  if (lightbox) {
      galleryImages = document.querySelectorAll('.gallery img');
      
      if (galleryImages.length > 0) {
          const updateLightboxImage = () => {
              if (galleryImages[currentIndex]) {
                  lightboxImg.src = galleryImages[currentIndex].src;
                  lightboxImg.alt = galleryImages[currentIndex].alt;
              }
          };

          const openLightbox = (index) => {
              currentIndex = index;
              updateLightboxImage();
              lightbox.classList.add('is-active');
          };

          const closeLightbox = () => {
              lightbox.classList.remove('is-active');
          };

          const prevImage = (e) => {
              if (e) e.stopPropagation();
              currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
              updateLightboxImage();
          };

          const nextImage = (e) => {
              if (e) e.stopPropagation();
              currentIndex = (currentIndex + 1) % galleryImages.length;
              updateLightboxImage();
          };

          galleryImages.forEach((img, index) => {
              img.addEventListener('click', () => openLightbox(index));
          });

          if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
          if (lightboxPrev) lightboxPrev.addEventListener('click', prevImage);
          if (lightboxNext) lightboxNext.addEventListener('click', nextImage);

          lightbox.addEventListener('click', (e) => {
              if (e.target === lightbox) {
                  closeLightbox();
              }
          });

          document.addEventListener('keydown', (e) => {
              if (lightbox.classList.contains('is-active')) {
                  if (e.key === 'Escape') closeLightbox();
                  if (e.key === 'ArrowLeft') prevImage();
                  if (e.key === 'ArrowRight') nextImage();
              }
          });
      }
  }
}

function setupClickableCards() {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    const foto = card.querySelector('.card__img');
    const link = card.querySelector('a.btn, a.btn--green, a.card__link');
    
    if (foto && link) {
      foto.style.cursor = 'pointer';
      
      foto.addEventListener('click', () => {
        window.location.href = link.href;
      });
    }
  });
}

function setupReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || els.length === 0) { 
    els.forEach(el => el.classList.add("is-in")); 
    return; 
  }
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(e => { 
      if (e.isIntersecting) { 
        e.target.classList.add("is-in"); 
        observer.unobserve(e.target); 
      } 
    });
  }, { threshold: 0.05, rootMargin: "50px" });
  els.forEach(el => io.observe(el));
  setTimeout(() => { els.forEach(el => el.classList.add("is-in")); }, 150);
}

function setupHeaderScroll() {
  const header = document.querySelector(".header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 6);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive:true });
}

function setupProgress() {
  const bar = document.getElementById("progress");
  if (!bar) return;
  const onScroll = () => {
    const doc = document.documentElement;
    const max = (doc.scrollHeight - doc.clientHeight) || 1;
    bar.style.width = Math.min(100, Math.max(0, (window.scrollY / max) * 100)).toFixed(2) + "%";
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive:true });
}

function setupCookieBanner() {
  // Verifica se o usuário já aceitou antes
  if (localStorage.getItem("ilg_cookie_consent") === "1") return;

  const html = `
    <div id="cookieBanner" style="position: fixed; bottom: 0; left: 0; width: 100%; background: #ffffff; padding: 16px 24px; box-shadow: 0 -10px 25px rgba(0,0,0,0.1); z-index: 10000; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 15px; border-top: 1px solid var(--line);">
      <p style="margin: 0; font-size: 14px; color: var(--text); flex: 1 1 300px; line-height: 1.5; font-weight: 600;">
        Nós usamos cookies para melhorar sua experiência e garantir a segurança dos seus dados, em conformidade com a <strong>LGPD</strong>. Ao continuar navegando, você concorda com a nossa <a href="politica-privacidade.html" style="color: var(--green); text-decoration: underline;">Política de Privacidade</a>.
      </p>
      <button onclick="acceptCookies()" class="btn btn--green" style="padding: 12px 24px; font-size: 14px; flex-shrink: 0; height: auto;">
        Entendi e Aceito
      </button>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', html);
}

window.acceptCookies = function() {
  localStorage.setItem("ilg_cookie_consent", "1");
  const banner = document.getElementById("cookieBanner");
  if (banner) banner.style.display = "none";
};

// =========================================================
//   SEO: OPEN GRAPH, CANONICAL E JSON-LD RICO POR PÁGINA
//   Injeta automaticamente em todas as páginas via app.js
// =========================================================

const SEO_BASE = {
  siteName: "Portal Ilha da Gigóia",
  baseUrl:  "https://www.ilhadagigoia.com.br",
  image:    "https://www.ilhadagigoia.com.br/assets/hero.jpg",
  logo:     "https://www.ilhadagigoia.com.br/assets/logo.png",
  whatsapp: "https://wa.me/5521993802618",
  geo: { lat: -23.0089, lng: -43.3328 },
  address: {
    street: "Ilha da Gigóia", city: "Rio de Janeiro",
    state: "RJ", country: "BR", postal: "22793-030"
  }
};

// Metadados específicos por página (data-page ou slug do filename)
const SEO_PAGES = {
  "home": {
    title: "Portal Ilha da Gigóia | Guia Completo do Pantanal Carioca RJ",
    desc:  "Descubra a Ilha da Gigóia na Barra da Tijuca, Rio de Janeiro. Passeios de barco, restaurantes, pousadas e dicas para conhecer o Pantanal Carioca.",
    type:  "website",
    schemas: ["TouristDestination", "WebSite", "FAQ"]
  },
  "a-ilha": {
    title: "A Ilha da Gigóia | História, Natureza e Como Chegar — RJ",
    desc:  "Tudo sobre a Ilha da Gigóia: história, fauna, flora, melhores épocas para visitar e como chegar de barco saindo da Barra da Tijuca.",
    type:  "article",
    schemas: ["TouristAttraction", "BreadcrumbList"]
  },
  "passeios-rotas": {
    title: "Passeios de Barco na Ilha da Gigóia | Roteiros e Preços — RJ",
    desc:  "Passeios de barco, Pantanal Carioca, jet ski, mergulho e roteiros completos saindo da Barra da Tijuca para a Ilha da Gigóia.",
    type:  "article",
    schemas: ["TouristAttraction", "BreadcrumbList"]
  },
  "comer-beber": {
    title: "Restaurantes e Bares na Ilha da Gigóia | Onde Comer — RJ",
    desc:  "Os melhores restaurantes, bares e cafés da Ilha da Gigóia. Frutos do mar, drinks à beira d'água e experiências gastronômicas únicas no Rio.",
    type:  "article",
    schemas: ["FoodEstablishment", "BreadcrumbList"]
  },
  "hospedagem": {
    title: "Hospedagem na Ilha da Gigóia | Pousadas e Airbnb — RJ",
    desc:  "Pousadas, hotéis e Airbnb na Ilha da Gigóia. Onde se hospedar para acordar com vista para a lagoa e o Pantanal Carioca.",
    type:  "article",
    schemas: ["LodgingBusiness", "BreadcrumbList"]
  },
  "como-chegar": {
    title: "Como Chegar na Ilha da Gigóia | Barco, Carro e Dicas — RJ",
    desc:  "Como chegar na Ilha da Gigóia de barco ou carro. Saída pela Barra da Tijuca, pontos de embarque, horários e dicas práticas.",
    type:  "article",
    schemas: ["TouristAttraction", "BreadcrumbList"]
  },
  "pantanal-carioca": {
    title: "Pantanal Carioca na Ilha da Gigóia | Natureza e Ecoturismo RJ",
    desc:  "Explore o Pantanal Carioca na Ilha da Gigóia: capivaras, aves exóticas, manguezais e a natureza preservada da Barra da Tijuca.",
    type:  "article",
    schemas: ["TouristAttraction", "BreadcrumbList"]
  }
};

// FAQ para rich result na home
const SEO_FAQ = [
  {
    q: "Como chegar na Ilha da Gigóia?",
    a: "A Ilha da Gigóia fica na Barra da Tijuca, Rio de Janeiro. O acesso é feito de barco, com embarque a partir da Marina da Glória, da Orla Conde ou de pontos na própria Barra da Tijuca. A travessia dura entre 5 e 15 minutos."
  },
  {
    q: "Qual a melhor época para visitar a Ilha da Gigóia?",
    a: "A ilha pode ser visitada o ano todo. O verão (dezembro a março) tem mais movimento e festas. O outono e a primavera (abril a junho e setembro a novembro) oferecem clima agradável e menor lotação, sendo ideais para ecoturismo."
  },
  {
    q: "O que fazer na Ilha da Gigóia?",
    a: "Na Ilha da Gigóia você pode fazer passeios de barco, observar capivaras e aves no Pantanal Carioca, praticar stand-up paddle e jet ski, visitar restaurantes à beira d'água, se hospedar em pousadas charmosas e aproveitar eventos culturais."
  },
  {
    q: "Tem restaurante na Ilha da Gigóia?",
    a: "Sim! A Ilha da Gigóia tem diversos restaurantes, bares e cafés, muitos com vista para a lagoa. Os carros-chefe são os frutos do mar frescos e os drinks tropicais."
  },
  {
    q: "Posso me hospedar na Ilha da Gigóia?",
    a: "Sim, há pousadas, pequenos hotéis e opções de Airbnb na ilha. É possível passar dias completos desfrutando de tudo que o Pantanal Carioca tem a oferecer."
  }
];

function setupSEO() {
  const head   = document.head;
  const page   = document.body.getAttribute("data-page") || "";
  const slug   = location.pathname.split("/").pop().replace(".html", "") || "home";
  const meta   = SEO_PAGES[page] || SEO_PAGES[slug] || {};
  const url    = SEO_BASE.baseUrl + location.pathname;

  const title  = meta.title || document.title || SEO_BASE.siteName;
  const desc   = meta.desc  || document.querySelector('meta[name="description"]')?.content || "";
  const ogType = meta.type  || "website";
  const image  = SEO_BASE.image;

  // ── Canonical dinâmico ───────────────────────────────
  if (!document.querySelector('link[rel="canonical"]')) {
    const el = document.createElement('link');
    el.rel = 'canonical'; el.href = url;
    head.appendChild(el);
  }

  // ── Open Graph ───────────────────────────────────────
  const og = {
    "og:type":        ogType,
    "og:url":         url,
    "og:site_name":   SEO_BASE.siteName,
    "og:title":       title,
    "og:description": desc,
    "og:image":       image,
    "og:image:width": "1280",
    "og:image:height":"720",
    "og:image:alt":   "Ilha da Gigóia — Pantanal Carioca, Rio de Janeiro",
    "og:locale":      "pt_BR"
  };
  Object.entries(og).forEach(([prop, content]) => {
    if (!document.querySelector(`meta[property="${prop}"]`)) {
      const el = document.createElement('meta');
      el.setAttribute('property', prop);
      el.content = content;
      head.appendChild(el);
    }
  });

  // ── Twitter Card ─────────────────────────────────────
  const tw = {
    "twitter:card":        "summary_large_image",
    "twitter:title":       title,
    "twitter:description": desc,
    "twitter:image":       image,
    "twitter:site":        "@ilhadagigoia"
  };
  Object.entries(tw).forEach(([name, content]) => {
    if (!document.querySelector(`meta[name="${name}"]`)) {
      const el = document.createElement('meta');
      el.name = name; el.content = content;
      head.appendChild(el);
    }
  });

  // ── JSON-LD Schemas ───────────────────────────────────
  const schemas = meta.schemas || ["TouristDestination"];
  const graphs  = [];

  // WebSite (sempre na home)
  if (schemas.includes("WebSite")) {
    graphs.push({
      "@type": "WebSite",
      "@id":   SEO_BASE.baseUrl + "/#website",
      "name":  SEO_BASE.siteName,
      "url":   SEO_BASE.baseUrl,
      "description": desc,
      "inLanguage": ["pt-BR", "en", "es", "zh"],
      "potentialAction": {
        "@type": "SearchAction",
        "target": SEO_BASE.baseUrl + "/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    });
  }

  // TouristDestination / TouristAttraction
  if (schemas.includes("TouristDestination") || schemas.includes("TouristAttraction")) {
    const type = schemas.includes("TouristDestination") ? "TouristDestination" : "TouristAttraction";
    graphs.push({
      "@type": type,
      "@id":   SEO_BASE.baseUrl + "/#ilha",
      "name":  "Ilha da Gigóia",
      "alternateName": ["Pantanal Carioca", "Ilha da Gigoia"],
      "description": "A Ilha da Gigóia é um paraíso tropical localizado na Barra da Tijuca, Rio de Janeiro. Conhecida como o Pantanal Carioca, oferece ecoturismo, passeios de barco, restaurantes à beira d'água e hospedagem charmosa.",
      "url":   SEO_BASE.baseUrl,
      "image": image,
      "touristType": ["Ecoturismo", "Turismo Gastronômico", "Turismo de Aventura", "Turismo de Lazer"],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude":  SEO_BASE.geo.lat,
        "longitude": SEO_BASE.geo.lng
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress":   SEO_BASE.address.street,
        "addressLocality": SEO_BASE.address.city,
        "addressRegion":   SEO_BASE.address.state,
        "postalCode":      SEO_BASE.address.postal,
        "addressCountry":  SEO_BASE.address.country
      },
      "containedInPlace": {
        "@type": "City",
        "name": "Rio de Janeiro",
        "addressCountry": "BR"
      },
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Passeios de Barco", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Restaurantes",      "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Hospedagem",        "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Ecoturismo",        "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Praia",             "value": true }
      ],
      "sameAs": [
        "https://www.instagram.com/ilha.da.gigoia",
        "https://www.facebook.com/portaldailhadagigoia",
        "https://www.tiktok.com/@ilha.da.gigoia",
        "https://www.youtube.com/@ilha.da.gigoia"
      ]
    });
  }

  // LocalBusiness / FoodEstablishment / LodgingBusiness
  const bizType = schemas.includes("FoodEstablishment") ? "FoodEstablishment"
                : schemas.includes("LodgingBusiness")   ? "LodgingBusiness"
                : null;
  if (bizType) {
    graphs.push({
      "@type": bizType,
      "@id":   url + "#business",
      "name":  SEO_BASE.siteName,
      "url":   url,
      "image": image,
      "telephone": "+5521993802618",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude":  SEO_BASE.geo.lat,
        "longitude": SEO_BASE.geo.lng
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress":   SEO_BASE.address.street,
        "addressLocality": SEO_BASE.address.city,
        "addressRegion":   SEO_BASE.address.state,
        "addressCountry":  SEO_BASE.address.country
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "telephone": "+5521993802618",
        "availableLanguage": ["Portuguese", "English", "Spanish"]
      }
    });
  }

  // BreadcrumbList (todas as páginas internas)
  if (schemas.includes("BreadcrumbList") && page && page !== "home") {
    const pageTitle = document.querySelector('h1')?.textContent?.trim()
                   || document.title.split('|')[0].trim()
                   || page;
    graphs.push({
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Início",  "item": SEO_BASE.baseUrl + "/" },
        { "@type": "ListItem", "position": 2, "name": pageTitle, "item": url }
      ]
    });
  }

  // FAQPage (home)
  if (schemas.includes("FAQ")) {
    graphs.push({
      "@type": "FAQPage",
      "mainEntity": SEO_FAQ.map(f => ({
        "@type": "Question",
        "name":  f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    });
  }

  // Injeta o JSON-LD no <head> (remove o antigo se existir)
  const old = document.querySelector('script[type="application/ld+json"]');
  if (old) old.remove();

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graphs
  }, null, 0);
  head.appendChild(script);
}

// =========================================================
//   PWA: MANIFEST, META TAGS, SERVICE WORKER E MOBILE CSS
//   Injeta automaticamente em todas as páginas via app.js
// =========================================================
function setupPWA() {
  const head = document.head;

  // Manifest
  if (!document.querySelector('link[rel="manifest"]')) {
    const el = document.createElement('link');
    el.rel = 'manifest'; el.href = '/manifest.json';
    head.appendChild(el);
  }

  // Theme color (barra do navegador Android/iOS)
  if (!document.querySelector('meta[name="theme-color"]')) {
    const el = document.createElement('meta');
    el.name = 'theme-color'; el.content = '#47b05a';
    head.appendChild(el);
  }

  // Apple touch icon (ícone na tela inicial do iOS)
  if (!document.querySelector('link[rel="apple-touch-icon"]')) {
    const el = document.createElement('link');
    el.rel = 'apple-touch-icon'; el.href = '/assets/icon-192.png';
    head.appendChild(el);
  }

  // Mobile fixes CSS (injeta após o styles.css)
  if (!document.querySelector('link[href*="mobile-fixes"]')) {
    const el = document.createElement('link');
    el.rel = 'stylesheet'; el.href = '/mobile-fixes.css';
    head.appendChild(el);
  }

  // Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
  }
}

// INICIALIZAÇÃO PRINCIPAL DO SITE
(function init(){
  setupSEO();
  setupPWA();
  setupProgress();
  mountHeaderFooter();
  setupCookieBanner();
  const page = document.body.getAttribute("data-page");

  if (page === "home") {
    mountHome();
  }
  
  if (page && SITE.pages[page]) {
    mountPageCards(page);
  }

  // O Capi sempre inicializa para garantir tradução
  if (typeof initCapiTip === 'function') {
    initCapiTip();
  }

  mountGigiWidget();
  setupCadastroModal(); 
  setupLightbox(); 
  
  setTimeout(setupClickableCards, 100); 
  
  requestAnimationFrame(() => document.body.classList.add("is-ready"));
  setupHeaderScroll();
  setupReveal();

  // O CÉREBRO DA TRADUÇÃO DINÂMICA
  document.querySelectorAll('[data-i18n]').forEach(elemento => {
    const chave = elemento.getAttribute('data-i18n');
    // SOLUÇÃO: Verifica se o DICT existe antes de buscar a chave nele
    if (typeof DICT !== 'undefined' && DICT[chave]) {
      elemento.innerHTML = t(chave);
    }
  });
})();
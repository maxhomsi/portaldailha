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
// Prefixa links internos com o idioma atual (/en/..., /es/...).
function L(href){
  if (!href || currentLang === 'pt') return href;
  if (/^(https?:|mailto:|tel:|#)/.test(href)) return href;
  if (href === '/') return '/' + currentLang + '/';
  return '/' + currentLang + '/' + href.replace(/^\//,'');
}

const SITE = {
  brand: {
    logo: "/assets/logo-100.png",
    nameSmall: "PORTAL",
    nameMainA: "Ilha da",
    nameMainB: "Gigóia",
  },
  nav: [
    { href:"/a-ilha.html", label: t("nav_ilha") },
    { href:"/passeios-rotas.html", label: t("nav_passeios") },
    { href:"/comer-beber.html", label: t("nav_comer") },
    { href:"/hospedagem.html", label: t("nav_hospedagem") },
    { href:"/agenda-cultural.html", label: t("nav_eventos") },
    { href:"/fale-conosco.html", label: t("nav_fale") }
  ],
  ctas: { header: { href:"/passeios-rotas.html", label: t("btn_passeios") } },
  hero: {
    bg: "/assets/hero-fundo.webp", pill: t("hero_pill"), titleA: t("hero_title_a"),
    titleB: t("hero_title_b"), subtitle: t("hero_sub")
  },
  tip: { capiImg: "/assets/capi.png", capiTag: t("capi_tag"), title: t("tip_title") },
  homeCards: [
    { title:t("hm_c1_t"), desc:t("hm_c1_d"), linkLabel:t("hm_c1_l"), href:"/passeios-rotas.html", img: "/assets/card-passeios.jpg", icon:"boat", badge: t("badge_procurado") },
    { title:t("hm_c2_t"), desc:t("hm_c2_d"), linkLabel:t("hm_c2_l"), href:"/comer-beber.html", img: "/assets/card-comer.jpg", icon:"fork", badge: t("badge_gastronomia") },
    { title:t("hm_c4_t"), desc:t("hm_c4_d"), linkLabel:t("hm_c4_l"), href:"/hospedagem.html", img: "/assets/pousadas/casanova1.webp", icon:"bed", badge: t("badge_relaxar") }
  ],
  pages: {
    "a-ilha": [
      { title: t("page_ilha_c1_t"), desc: t("page_ilha_c1_d"), linkLabel: t("btn_ver_detalhes"), href:"/como-chegar.html", img: "/assets/comochegar.jpg", icon:"boat" },
      { title: t("page_ilha_c2_t"), desc: t("page_ilha_c2_d"), linkLabel: t("btn_ler_mais"), href:"/historia-cultura.html", img: "/assets/historia.jpg", icon:"leaf" },
      { title: t("page_ilha_c3_t"), desc: t("page_ilha_c3_d"), linkLabel: t("btn_conferir"), href:"/boas-praticas.html", img: "/assets/boaspraticas.jpg", icon:"bed" },
      { title: t("page_ilha_c4_t"), desc: t("page_ilha_c4_d"), linkLabel: t("btn_ver_detalhes"), href:"/melhor-epoca.html", img: "/assets/melhorepoca.jpg", icon:"fork" }
    ],
    "passeios-rotas": [
      { title: t("page_pass_c1_t"), desc: t("page_pass_c1_d"), linkLabel: t("btn_ver_roteiro"), href:"/ilhas-tijucas.html", img: "/assets/passeios/tijucas1.jpg", icon:"boat", badge: t("badge_mergulho") },
      { title: t("page_pass_c2_t"), desc: t("page_pass_c2_d"), linkLabel: t("btn_ver_roteiro"), href:"/pantanal-carioca.html", img: "/assets/passeios/pantanal1.jpg", icon:"leaf", badge: t("badge_safari") },
      { title: t("page_pass_c3_t"), desc: t("page_pass_c3_d"), linkLabel: t("btn_ver_roteiro"), href:"/reserva.html", img: "/assets/passeios/reserva1.jpg", icon:"boat", badge: t("badge_praia") },
      { title: t("page_pass_c4_t"), desc: t("page_pass_c4_d"), linkLabel: t("btn_ver_opcoes"), href:"/jet-ski.html", img: "/assets/passeios/jet1.jpg", icon:"boat", badge: t("badge_adrenalina") },
      { title: t("page_pass_c5_t"), desc: t("page_pass_c5_d"), linkLabel: t("btn_ver_pacotes"), href:"/pacotes-especiais.html", img: "/assets/experiencia.jpg", icon:"fork", badge: t("badge_ofertas") }
    ],
    "comer-beber": [
      { title: t("page_comer_c1_t"), desc: t("page_comer_c1_d"), linkLabel: t("btn_ver_detalhes"), href:"/restaurantes.html", img: "/assets/card-comer.jpg", icon:"fork", badge: t("badge_gastronomia") },
      { title: t("page_comer_c2_t"), desc: t("page_comer_c2_d"), linkLabel: t("btn_ver_detalhes"), href:"/bares-drinks.html", img: "/assets/bar&DRINK.jpg", icon:"boat", badge: t("badge_relax") },
      { title: t("page_comer_c3_t"), desc: t("page_comer_c3_d"), linkLabel: t("btn_ver_opcoes"), href:"/cafe-lanches.html", img: "/assets/aleatoria/cantinho1.webp", icon:"leaf", badge: t("badge_bom_dia") },
      { title: t("page_comer_c4_t"), desc: t("page_comer_c4_d"), linkLabel: t("btn_conferir"), href:"/eventos-experiencias.html", img: "/assets/aleatoria/solar1.jpg", icon:"fork", badge: t("badge_ao_vivo") }
    ],
    "hospedagem": [
      { title: t("page_hosp_c1_t"), desc: t("page_hosp_c1_d"), linkLabel: t("btn_ver_detalhes"), href:"/hoteis-pousadas.html", img: "/assets/pousadas/veneza1.jpg", icon:"bed" },
      { title: t("page_hosp_c2_t"), desc: t("page_hosp_c2_d"), linkLabel: t("btn_ver_opcoes"), href:"/airbnb-temporada.html", img: "/assets/airbnb/venti1.avif", icon:"bed" },
      { title: t("page_hosp_c3_t"), desc: t("page_hosp_c3_d"), linkLabel: t("btn_conferir"), href:"/espacos-eventos.html", img: "/assets/eventos.jpg", icon:"fork", badge: t("badge_celebre") },
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
    <a href="https://www.tiktok.com/@portaldagigoia" target="_blank" class="social-icon">${svgTiktok}</a>
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
        <a class="card__link" href="${L(c.href)}">${c.linkLabel || t("btn_ver_detalhes")} <span>→</span></a>
      </div>
    </article>
  `;
}

function mountHeaderFooter() {
  const header = document.getElementById("siteHeader");
  const footer = document.getElementById("siteFooter");
  
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'pt';
  
  if (header && header.children.length === 0) {
    header.innerHTML = `
      <div class="container header__inner">
        <a class="brand" href="${L('/')}">
          <img class="brand__logo" src="${SITE.brand.logo}" alt="Logo" />
          <div class="brand__text"><small>${SITE.brand.nameSmall}</small><strong><span>${SITE.brand.nameMainA}</span> ${SITE.brand.nameMainB}</strong></div>
        </a>
        <div class="navWrap"><nav class="nav">${SITE.nav.map(i => `<a data-navlink href="${L(i.href)}">${i.label}</a>`).join("")}</nav></div>
        <div class="header__actions">
          ${socialHtml}
          
          <select class="lang-switcher" onchange="changeLanguage(this.value)">
            <option value="pt" ${lang === 'pt' ? 'selected' : ''}>🇧🇷 PT</option>
            <option value="en" ${lang === 'en' ? 'selected' : ''}>🇺🇸 EN</option>
            <option value="es" ${lang === 'es' ? 'selected' : ''}>🇪🇸 ES</option>
<option value="zh" ${lang === 'zh' ? 'selected' : ''}>🇨🇳 中文</option>
            <option value="fr" ${lang === 'fr' ? 'selected' : ''}>🇫🇷 FR</option>
          </select>

          <a class="btn btn--green" href="${L(SITE.ctas.header.href)}">${SITE.ctas.header.label}</a>
          <button class="burger" id="burger">☰</button>
        </div>
      </div>
      <div class="mobileNav" id="mobileNav" style="display:none">
        <div class="container mobileNav__inner">
          ${SITE.nav.map(i => `<a data-navlink href="${L(i.href)}">${i.label}</a>`).join("")}
          
          <select class="lang-switcher" onchange="changeLanguage(this.value)" style="margin: 10px 0; width: 100%;">
            <option value="pt" ${lang === 'pt' ? 'selected' : ''}>🇧🇷 PT</option>
            <option value="en" ${lang === 'en' ? 'selected' : ''}>🇺🇸 EN</option>
            <option value="es" ${lang === 'es' ? 'selected' : ''}>🇪🇸 ES</option>
<option value="zh" ${lang === 'zh' ? 'selected' : ''}>🇨🇳 中文</option>
            <option value="fr" ${lang === 'fr' ? 'selected' : ''}>🇫🇷 FR</option>
          </select>
          
          <a class="btn btn--green" style="justify-content:center" href="${L(SITE.ctas.header.href)}">${SITE.ctas.header.label}</a>
        </div>
      </div>
    `;
  }

  if (footer && footer.children.length === 0) {
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
            <li><a href="${L('/')}" data-i18n="nav_inicio">Início</a></li>
            <li><a href="${L('/a-ilha.html')}">${t("nav_ilha")}</a></li>
            <li><a href="${L('/passeios-rotas.html')}">${t("nav_passeios")}</a></li>
            <li><a href="${L('/comer-beber.html')}">${t("nav_comer")}</a></li>
            <li><a href="${L('/hospedagem.html')}">${t("nav_hospedagem")}</a></li>
            <li><a href="${L('/casamento.html')}">${t("nav_casamento")}</a></li>
            <li><a href="${L('/espacos-eventos.html')}">${t("nav_espacos_eventos")}</a></li>
          </ul>
        </div>
        
        <div class="footer__col">
          <h3 data-i18n="footer_serv_t">Atendimento</h3>
          <ul>
            <li><a href="https://wa.me/${GIGI.whatsappNumber}" target="_blank">${t("gigi_fab")}</a></li>
            <li><a href="${L('/fale-conosco.html')}">${t("nav_fale")}</a></li>
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
  const path = "/" + (location.pathname.split("/").pop() || "index.html");
  document.querySelectorAll("[data-navlink]").forEach(a => {
    const href = a.getAttribute("href");
    if (href && href.replace(/^\/(en|es|zh|fr)/,'') === path) { a.setAttribute("aria-current", "page"); } 
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
  if (homeCards && homeCards.children.length === 0) homeCards.innerHTML = SITE.homeCards.map((c,i)=>cardHtml(c,i)).join("");
}

function mountPageCards(pageKey) {
  const list = SITE.pages[pageKey] || [];
  const box = document.getElementById("pageCards");
  if (box && box.children.length === 0) box.innerHTML = list.map((c,i)=>cardHtml(c,i)).join("");
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
  // Telefone do proprio visitante: o formato (21) so serve para quem esta no Brasil.
  const phonePlaceholder = lang === 'en' ? "+1 555 000 0000" : lang === 'es' ? "+34 600 000 000" : lang === 'zh' ? "+86 138 0000 0000" : lang === 'fr' ? "+33 6 12 34 56 78" : "(21) 99999-9999";
  const btn1 = lang === 'en' ? "📍 How to get there?" : lang === 'es' ? "📍 ¿Cómo llegar?" : lang === 'zh' ? "📍 如何到达小岛？" : lang === 'fr' ? "📍 Comment venir sur l'île ?" : "📍 Como chegar na Ilha?";
  const btn2 = lang === 'en' ? "🚤 Tour Prices" : lang === 'es' ? "🚤 Precios de Paseos" : lang === 'zh' ? "🚤 游览价格" : lang === 'fr' ? "🚤 Prix des excursions" : "🚤 Preços de Passeios";
  const btn3 = lang === 'en' ? "💬 Talk on WhatsApp" : lang === 'es' ? "💬 Hablar en WhatsApp" : lang === 'zh' ? "💬 通过WhatsApp联系" : lang === 'fr' ? "💬 Je veux écrire sur WhatsApp" : "💬 Quero falar no WhatsApp";
  const btn_comer   = lang === 'en' ? "🍽️ Restaurants & Bars" : lang === 'es' ? "🍽️ Restaurantes y Bares" : lang === 'zh' ? "🍽️ 餐厅与酒吧" : lang === 'fr' ? "🍽️ Où manger & boire" : "🍽️ Onde Comer & Beber";
  const btn_hosped  = lang === 'en' ? "🛌 Where to Stay" : lang === 'es' ? "🛌 Dónde Dormir" : lang === 'zh' ? "🛌 住宿" : lang === 'fr' ? "🛌 Hébergement" : "🛌 Hospedagem";
  const btn_eventos = lang === 'en' ? "🎉 Events & Agenda" : lang === 'es' ? "🎉 Eventos y Agenda" : lang === 'zh' ? "🎉 活动日程" : lang === 'fr' ? "🎉 Événements du moment" : "🎉 Eventos do Momento";
  const placeholderInput = lang === 'en' ? "Ask something..." : lang === 'es' ? "Pregunta algo..." : lang === 'zh' ? "请提问..." : lang === 'fr' ? "Posez une question..." : "Pergunte algo...";

  // Textos fixos do topo do widget e do formulário do WhatsApp — antes ficavam
  // hardcoded em PT, então o widget abria em português mesmo com o site em
  // outro idioma. Agora seguem o mesmo idioma detectado (currentLang) do resto
  // do widget.
  const assistantLabel = lang === 'en' ? "Virtual Assistant" : lang === 'es' ? "Asistente Virtual" : lang === 'zh' ? "虚拟助手" : lang === 'fr' ? "Assistante virtuelle" : "Assistente Virtual";
  const helloTitle = lang === 'en' ? "Hello, I'm Gigi!" : lang === 'es' ? "¡Hola, soy Gigi!" : lang === 'zh' ? "你好，我叫吉吉！" : lang === 'fr' ? "Bonjour, je m'appelle Gigi !" : "Olá, me chamo Gigi!";
  const helloSub = lang === 'en' ? "Type your question below or pick a quick option:" : lang === 'es' ? "Escribe tu pregunta abajo o elige una opción rápida:" : lang === 'zh' ? "在下方输入您的问题，或选择一个快捷选项：" : lang === 'fr' ? "Vous pouvez écrire votre question ci-dessous ou choisir une option rapide :" : "Você pode digitar sua dúvida abaixo ou escolher uma opção rápida:";
  const formIntro = lang === 'en' ? "Fill in your details to start on WhatsApp" : lang === 'es' ? "Completa tus datos para iniciar en WhatsApp" : lang === 'zh' ? "填写您的信息以开始WhatsApp对话" : lang === 'fr' ? "Remplissez vos coordonnées pour ouvrir WhatsApp" : "Preencha seus dados para iniciar o WhatsApp";
  const namePlaceholder = lang === 'en' ? "Your name" : lang === 'es' ? "Tu nombre" : lang === 'zh' ? "您的姓名" : lang === 'fr' ? "Votre nom" : "Seu nome";
  const messagePlaceholder = lang === 'en' ? "Your message..." : lang === 'es' ? "Tu mensaje..." : lang === 'zh' ? "您的留言..." : lang === 'fr' ? "Votre message..." : "Sua mensagem...";

  root.innerHTML = `
    <div class="gigiFab">
      <button class="gigiFab__btn" id="gigiFabBtn" type="button" onclick="openGigiChat()">
        <span class="gigiIcon">💬</span> <span>${t("gigi_fab")}</span>
      </button>
    </div>
    <div class="gigiBox" id="gigiBox" style="display:${isOpen ? "flex" : "none"}; max-height: 85vh; overflow: hidden;">
      <div class="gigiBox__top">
        <div class="gigiBox__title"><strong>Gigi</strong><small>${assistantLabel}</small></div>
        <button class="gigiBox__close" onclick="document.getElementById('gigiBox').style.display='none'">✕</button>
      </div>
      
      <div class="gigiBox__body" id="gigiChatBody" style="background:#f6fbf6; display:flex; flex-direction:column; overflow-y:auto; height: 380px; padding:20px;">
        
        <div id="gigiChatFlow" style="display:flex; flex-direction:column; gap:15px;">
          
          <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px; padding: 10px 0;">
            <div style="width: 120px; flex-shrink: 0;">
              <img src="/assets/gigi.png" alt="Gigi" style="width: 100%; height: auto; object-fit: contain; filter: drop-shadow(0 10px 15px rgba(0,0,0,0.1));">
            </div>
            <div style="flex: 1;">
              <strong style="font-size: 22px; color: var(--text); display: block; margin-bottom: 6px; line-height: 1.2;">${helloTitle}</strong>
              <p style="font-size: 15px; color: var(--muted); font-weight: 600; line-height: 1.4; margin: 0;">
                ${helloSub}
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
            <div style="margin-bottom:12px; font-size:13px; color:var(--green); font-weight:800; text-align:center;">${formIntro}</div>
            <div><input id="gigiName" type="text" placeholder="${namePlaceholder}" required style="margin-bottom:8px;"/></div>
            <div><input id="gigiPhone" type="tel" placeholder="${phonePlaceholder}" required style="margin-bottom:8px;"/></div>
            <div><textarea id="gigiMessage" placeholder="${messagePlaceholder}" required></textarea></div>
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

  /* DE QUAL PAGINA ELE ESTAVA FALANDO.
     Teste do Max em 20/10/2026: ele abriu o chat na pagina do Cais Bar, clicou em
     "Falar com a equipe" e a mensagem chegou na Gigi como "Ola! Quero falar com a
     equipe do Portal Ilha da Gigoia" — sem origem nenhuma. A conversa comeca do zero
     com alguem que ja' estava lendo sobre um restaurante especifico.

     O nome sai do proprio link de WhatsApp do rodape, que existe em toda pagina e ja'
     vem traduzido: fonte unica, nada pra manter em dois lugares. Se faltar, cai no
     titulo da pagina ate' a primeira virgula ou barra. */
  function gigiPaginaAtual() {
    try {
      const links = document.querySelectorAll('a[href*="wa.me"]');
      for (const l of links) {
        const href = l.getAttribute('href') || '';
        if (href.indexOf('text=') === -1) continue;
        const t = decodeURIComponent(href.split('text=')[1] || '').replace(/\+/g, ' ');
        // O "from the" aparece duas vezes na frase em ingles ("came from the website,
        // from the X page"): sem ancorar na primeira, o nome da pagina sai com o resto
        // da frase grudado.
        const m = t.match(/pela p[\u00e1a]gina (.+?)[.!?]/i) ||
                  t.match(/came from the website,\s*from the (.+?) page[.!?]/i) ||
                  t.match(/de la p[\u00e1a]gina (.+?)[.!?\u00bf]/i) ||
                  t.match(/de la page (.+?)[.!?]/i) ||
                  t.match(/\u300c(.+?)\u300d/);
        if (m && m[1] && m[1].trim()) return m[1].trim();
      }
    } catch (e) { /* origem e' um extra: nunca pode impedir o envio */ }
    return (document.title || '').split(/[|,:]/)[0].trim();
  }

  // Função do formulário WhatsApp
  const form = document.getElementById("gigiForm");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("gigiName")?.value || "";
    const phone = document.getElementById("gigiPhone")?.value || "";
    const msg = document.getElementById("gigiMessage")?.value || "";
    // A mensagem enviada pelo WhatsApp segue o idioma em que o visitante
    // navegava. Antes era fixa em portugues, mesmo com o site em outra lingua.
    const wa = {
      pt: { ola: "Olá! Quero falar com a equipe do Portal Ilha da Gigóia.", nome: "Nome:", tel: "Telefone:", msg: "Mensagem:" , sobre: "Sobre:", pagina: "Página:", data: "Data:", pess: "Pessoas:" },
      en: { ola: "Hello! I'd like to talk to the Portal Ilha da Gigóia team.", nome: "Name:", tel: "Phone:", msg: "Message:" , sobre: "About:", pagina: "Page:", data: "Date:", pess: "People:" },
      es: { ola: "¡Hola! Quiero hablar con el equipo del Portal Ilha da Gigóia.", nome: "Nombre:", tel: "Teléfono:", msg: "Mensaje:" , sobre: "Sobre:", pagina: "Página:", data: "Fecha:", pess: "Personas:" },
      zh: { ola: "您好！我想联系 Portal Ilha da Gigóia 团队。", nome: "姓名：", tel: "电话：", msg: "留言：" , sobre: "关于：", pagina: "页面：", data: "日期：", pess: "人数：" },
      fr: { ola: "Bonjour ! Je souhaite contacter l'équipe du Portal Ilha da Gigóia.", nome: "Nom :", tel: "Téléphone :", msg: "Message :" , sobre: "Objet :", pagina: "Page :", data: "Date :", pess: "Personnes :" }
    }[['en','es','zh','fr'].includes(lang) ? lang : 'pt'];
    // Antes a equipe recebia um "oi" em branco: o visitante lia tudo no chat
    // e tinha que digitar de novo. Agora vai junto o que ele estava vendo.
    let contexto = "";
    // A pagina vem primeiro: e' a unica coisa que SEMPRE existe. O assunto escolhido
    // dentro do chat (passeio, hospedagem) so' aparece quando ele escolheu.
    const paginaAtual = gigiPaginaAtual();
    if (paginaAtual) contexto += "\n*" + (wa.pagina || "Página:") + "* " + paginaAtual;
    const P = window.__gigiPedido || {};
    const A = window.__gigiAssunto;
    if (A && typeof GIGI_NOME !== 'undefined' && GIGI_NOME[A]) {
      contexto += "\n*" + (wa.sobre || "Sobre:") + "* " + (GIGI_NOME[A][lang] || GIGI_NOME[A].pt);
      if (P.data)    contexto += "\n*" + (wa.data || "Data:")    + "* " + P.data;
      if (P.pessoas) contexto += "\n*" + (wa.pess || "Pessoas:") + "* " + P.pessoas;
    }
    const text = `${wa.ola}\n\n*${wa.nome}* ${name}\n*${wa.tel}* ${phone}${contexto}\n*${wa.msg}*\n${msg}`;
    // Este caminho abre o WhatsApp por window.open, nao por clique em link,
    // entao nao era contado pelo ouvinte de cliques la' de cima. Era a
    // conversao mais qualificada do site e estava invisivel.
    window.medir('clique_whatsapp', { origem: 'formulario_gigi' });
    window.open(`https://wa.me/${GIGI.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
    form.reset();
    gigiAsk('encerrar');
  });
}

// =======================================================
// LÓGICA DE DIGITAÇÃO LIVRE E INTEGRAÇÃO COM CEREBRO-GIGI
// =======================================================

// O \b do JavaScript marca fronteira entre letras latinas. Em chines nao ha
// espaco entre as palavras e nenhum \b acontece, entao NENHUMA palavra-chave
// chinesa casaria — o chat simplesmente nunca reconhecia a pergunta. Para
// esses termos a busca passa a ser por conteudo; nos demais nada muda.

/* =========================================================
   IDIOMA DA CONVERSA NO CHAT DO SITE

   O idioma do site vem da URL (/en/, /es/...), o que e' confiavel — menos num
   caso: o visitante estrangeiro que cai na pagina em portugues. E ele cai, porque
   a raiz e' a pagina mais bem ranqueada no Google. A faixa que sugere o idioma
   SUGERE, nao obriga.

   Resultado, ate' agora: ele digitava em ingles e recebia os botoes, a mensagem
   de "nao entendi" e tudo mais em portugues. Mesmo estrago que deu no WhatsApp em
   13/10/2026, por causa diferente.

   Agora o chat olha o que a pessoa ESCREVEU. Detectou outro idioma, a conversa
   inteira passa pra ele — resposta da IA, textos do chat, tudo — e o site oferece
   UMA vez trocar de idioma de vez, que arruma tambem os menus e as outras paginas.

   Proposito do desenho: na duvida, fica no idioma da pagina. Um falso positivo
   (brasileiro recebendo ingles) e' pior que nao detectar.
   ========================================================= */
/* Oferece UMA vez, dentro do proprio chat, trocar o site inteiro pro idioma da
   pessoa. Consertar so' a resposta do chat deixa menus, botoes e as outras
   paginas em portugues — meia solucao. Aqui ela resolve de vez, num clique.
   Uma vez por visita: insistir e' pior que nao oferecer. */
/* Qual idioma usar nos textos PRONTOS do chat (GIGI_TXT, GIGI_RESP, avisos).
   O site tem texto em 5 idiomas, mas a conversa agora pode estar em alemao,
   italiano, russo... Cair no portugues nesses casos e' o pior dos mundos: um
   alemao tem muito mais chance de ler ingles do que portugues. Entao o fallback
   e' o ingles, e o portugues fica so' pra quem esta' falando portugues. */
window.gigiIdiomaTexto = function (lang, tabela) {
  if (tabela && tabela[lang]) return lang;
  if (!lang || lang === 'pt') return 'pt';
  return (tabela && tabela.en) ? 'en' : 'pt';
};

/* O extrator de data normaliza tudo pra token em portugues ('amanha', 'sabado').
   Esses tokens entravam crus no {d} dos templates traduzidos e saia
   "Great, I've noted amanha!" — visto no site de verdade em 13/10/2026. */
window.gigiDataNoIdioma = function (token, lang) {
  if (!token || !lang || lang === 'pt') return token;
  var T = {
    hoje:    { en: 'today',    es: 'hoy',     fr: "aujourd'hui", zh: '今天', it: 'oggi',    de: 'heute' },
    amanha:  { en: 'tomorrow', es: 'mañana',  fr: 'demain',      zh: '明天', it: 'domani',  de: 'morgen' },
    sabado:  { en: 'Saturday', es: 'sábado',  fr: 'samedi',      zh: '周六', it: 'sabato',  de: 'Samstag' },
    domingo: { en: 'Sunday',   es: 'domingo', fr: 'dimanche',    zh: '周日', it: 'domenica', de: 'Sonntag' },
    sexta:   { en: 'Friday',   es: 'viernes', fr: 'vendredi',    zh: '周五', it: 'venerdì', de: 'Freitag' }
  };
  if (T[token] && T[token][lang]) return T[token][lang];
  // "dia 15" -> "day 15" / "el 15" / "le 15" / "15日"
  var m = String(token).match(/^dia\s+(\d{1,2})$/);
  if (m) {
    var D = { en: 'day ' + m[1], es: 'el ' + m[1], fr: 'le ' + m[1], zh: m[1] + '日',
              it: 'il ' + m[1], de: 'den ' + m[1] };
    if (D[lang]) return D[lang];
  }
  return token;   // data numerica (15/10) e' universal
};

window.gigiOferecerTrocaDeIdioma = function (lang) {
  if (window.__gigiTrocaOferecida) return;
  var SITE = ['en', 'es', 'fr', 'zh'];           // idiomas que o site tem de fato
  if (SITE.indexOf(lang) === -1) return;         // it/de/ru...: chat atende, site nao tem pagina
  var flow = document.getElementById('gigiChatFlow') || document.querySelector('.gigi-chat-flow');
  if (!flow) return;
  window.__gigiTrocaOferecida = true;

  var TXT = {
    en: { msg: 'I can also show the whole site in English — menus, tours and all pages.', btn: 'Switch to English' },
    es: { msg: 'También puedo mostrar todo el sitio en español — menús, paseos y todas las páginas.', btn: 'Cambiar a español' },
    fr: { msg: "Je peux aussi afficher tout le site en français — menus, balades et toutes les pages.", btn: 'Passer au français' },
    zh: { msg: '我也可以把整个网站切换成中文——菜单、行程和所有页面。', btn: '切换到中文' }
  }[lang];

  var caixa = document.createElement('div');
  caixa.className = 'gigi-msg gigi-msg--bot';
  caixa.innerHTML =
    '<div class="gigi-bubble" style="background:#eef7ee; border:1px solid #cfe6cf;">' +
      '<div style="margin-bottom:8px;">🌍 ' + TXT.msg + '</div>' +
      '<button type="button" id="gigiTrocarIdioma" style="background:var(--green,#47b05a); color:#fff; ' +
      'border:none; border-radius:10px; padding:8px 14px; font:inherit; font-weight:700; cursor:pointer;">' +
      TXT.btn + '</button>' +
    '</div>';
  flow.appendChild(caixa);

  var btn = document.getElementById('gigiTrocarIdioma');
  if (btn) btn.addEventListener('click', function () {
    // Reaproveita o changeLanguage do dicionario.js: ele guarda a escolha e navega
    // pra MESMA pagina no outro idioma, em vez de jogar a pessoa na home.
    if (typeof changeLanguage === 'function') changeLanguage(lang);
    else location.href = '/' + lang + '/';
  });
};

window.gigiDetectarIdioma = function (texto) {
  var raw = String(texto || '').trim();
  if (!raw) return null;

  // Escrita: um caractere ja' basta, nao ha' risco de falso positivo.
  if (/[぀-ゟ゠-ヿ]/.test(raw)) return 'ja';
  if (/[가-힯]/.test(raw)) return 'ko';
  if (/[一-鿿㐀-䶿]/.test(raw)) return 'zh';
  if (/[Ѐ-ӿ]/.test(raw)) return 'ru';
  if (/[؀-ۿ]/.test(raw)) return 'ar';
  if (/[¿¡]/.test(raw) || /ñ/i.test(raw)) return 'es';
  if (/ß/.test(raw)) return 'de';

  var t = ' ' + raw.toLowerCase().replace(/\s+/g, ' ') + ' ';

  // Pedido explicito tem prioridade sobre tudo: quem pede, nao esta' em duvida.
  if (raw.length <= 60) {
    if (/(english|ingl[eê]s|anglais)/i.test(raw)) return 'en';
    if (/(espa[nñ]ol|spanish|espagnol)/i.test(raw)) return 'es';
    if (/(fran[cç]ais|french|franc[eé]s)/i.test(raw)) return 'fr';
    if (/(中文|chinese|chin[eê]s)/i.test(raw)) return 'zh';
    if (/(deutsch|german|alem[aã]o)/i.test(raw)) return 'de';
    if (/(italiano|italian)/i.test(raw)) return 'it';
  }

  var saudacoes = { en: ['hello', 'hi', 'hey'], fr: ['bonjour', 'bonsoir', 'salut'],
                    es: ['hola'], it: ['ciao'], de: ['hallo'] };
  // Pontuacao vira espaco em TODO o texto, nao so' no fim: "hallo, wie viel" e
  // "ciao, quanto costa" nao casavam com a saudacao por causa da virgula colada,
  // e caiam na pontuacao por marcador — onde "quanto" (igual em italiano e
  // portugues) empatava e o italiano virava portugues.
  var limpo = raw.toLowerCase().replace(/[!?.,;:]+/g, ' ').replace(/\s+/g, ' ').trim();
  for (var sl in saudacoes) {
    for (var si = 0; si < saudacoes[sl].length; si++) {
      var g = saudacoes[sl][si];
      if (limpo === g || limpo.indexOf(g + ' ') === 0) return sl;
    }
  }

  // Pontua portugues TAMBEM, nao so' os estrangeiros: "I want to book a tour" nao
  // tem uma palavra de portugues, e isso sozinho ja' decide. Palavras iguais em
  // espanhol (mesa, valor, domingo, sabado...) ficam fora das duas listas: nao
  // distinguem nada e so' roubam ponto do idioma certo.
  var MARC = {
    pt: [' que ', ' nao ', ' não ', ' voce ', ' você ', ' eu ', ' meu ', ' minha ', ' quero ',
         ' queria ', ' gostaria ', ' preciso ', ' pode ', ' tem ', ' tenho ', ' obrigado',
         ' bom dia', ' boa tarde', ' boa noite', ' oi ', ' quanto ', ' quantas ', ' onde ',
         ' quando ', ' qual ', ' passeio', ' pousada', ' hospedagem', ' almoco', ' almoço',
         ' pessoas', ' crianca', ' criança', ' amanha', ' amanhã', ' hoje ', ' preco', ' preço',
         ' muito ', ' tambem', ' também', ' fazer ', ' ficar ', ' sem ', ' uma ', ' pra ', ' pro '],
    en: [' the ', ' is ', ' are ', ' and ', ' you ', ' your ', ' my ', ' we ', ' this ', ' that ',
         ' what ', ' when ', ' where ', ' how ', ' want ', ' need ', ' would ', ' could ', ' can ',
         ' have ', ' with ', ' from ', ' book ', ' booking', ' trip ', ' price', ' cost',
         ' people ', ' today', ' tomorrow', ' morning', ' afternoon', ' evening', ' please',
         ' thanks', ' hello', ' hi ', ' available', ' only ', ' just ', ' very ', ' good ',
         ' yes ', ' adults', ' children', ' kids ', ' name ', ' date ', ' do you'],
    es: [' hola', ' gracias', ' cuanto', ' cuánto', ' donde', ' dónde', ' cómo', ' usted',
         ' puedo', ' hay ', ' muy ', ' pero ', ' tambien', ' también', ' mañana', ' niños',
         ' playa', ' precio', ' los ', ' las ', ' aquí', ' qué ', ' quién', ' tengo ', ' quiero ',
         ' buenas', ' buenos', ' personas ', ' quisiera', ' una ', ' con ', ' del ', ' necesito'],
    fr: [' bonjour', ' merci', ' svp', ' vous ', ' nous ', ' je ', " j'ai", " c'est", ' combien',
         ' où ', ' comment ', ' avec ', ' les ', ' des ', ' une ', ' le ', ' la ', ' du ',
         ' voudrais', ' demain', ' bateau', ' plage', ' prix ', ' personnes ', ' enfants',
         ' oui ', ' très', ' aussi ', ' beaucoup', ' pouvez', ' avez '],
    it: [' ciao', ' grazie', ' vorrei', ' sono ', ' siamo ', ' posso ', ' dove ', ' perché',
         ' anche ', ' molto ', ' domani', ' oggi ', ' persone ', ' bambini', ' prezzo'],
    de: [' ich ', ' wir ', ' und ', ' nicht ', ' ist ', ' sind ', ' haben ', ' möchte', ' bitte',
         ' danke', ' wann ', ' morgen ', ' heute ', ' preis', ' personen', ' kinder']
  };
  var melhor = null, pontos = 0, placar = {};
  for (var l in MARC) {
    placar[l] = 0;
    for (var i = 0; i < MARC[l].length; i++) if (t.indexOf(MARC[l][i]) !== -1) placar[l]++;
    if (placar[l] > pontos) { pontos = placar[l]; melhor = l; }
  }
  // Empate com o portugues fica no portugues: brasileiro e' a maioria, e responder
  // em espanhol pra quem escreveu em portugues e' pior do que o contrario.
  if (melhor && melhor !== 'pt' && placar.pt >= pontos) return 'pt';
  return melhor;   // null = sem sinal: quem chama mantem o idioma que ja' valia
};

// =======================================================
//  PONTE COM A IA (gigi-proxy.php)
//  ------------------------------------------------------
//  Esta funcao existia so' no papel: o codigo mais abaixo
//  chamava askGigiAI() dentro de um "typeof === 'function'",
//  mas ela nunca tinha sido escrita. Resultado: a Gigi do
//  site nunca chegava a usar o proxy, mesmo com ele no ar.
//  Devolve o texto da resposta, ou null — e no null o fluxo
//  antigo (opcoes + botao do WhatsApp) continua valendo.
// =======================================================
window.askGigiAI = async function(mensagem, idioma) {
  const texto = String(mensagem || '').trim();
  if (!texto || texto.length > 600) return null;

  // Sem isso, uma API lenta deixaria o "Deixa eu pensar..."
  // girando para sempre na tela do visitante.
  const corta = new AbortController();
  const relogio = setTimeout(() => corta.abort(), 15000);

  try {
    const r = await fetch('/gigi-proxy.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: texto, lang: idioma || 'pt' }),
      signal: corta.signal
    });
    if (!r.ok) return null;
    const dados = await r.json();
    return (dados && typeof dados.reply === 'string' && dados.reply.trim()) ? dados.reply : null;
  } catch (e) {
    return null;          // offline, timeout, proxy fora: cai no fallback
  } finally {
    clearTimeout(relogio);
  }
};

function gigiCasaPalavra(kw, texto) {
  if (/[\u3400-\u9fff\u3040-\u30ff\uac00-\ud7af]/.test(kw)) {
    return texto.indexOf(kw) !== -1;
  }
  return gigiRegexPlural(kw).test(texto);
}

// O texto chega aqui sem acento e em minusculas.
// Antes a busca so' aceitava o plural com "s" (casa/casas), entao os plurais
// em -es nunca casavam: quem digitava "valores" nao achava a regra de "valor",
// "hoteis" nao achava "hotel" e "opcoes" nao achava "opcao".
const __gigiRegexCache = {};
function gigiRegexPlural(kw) {
  if (__gigiRegexCache[kw]) { __gigiRegexCache[kw].lastIndex = 0; return __gigiRegexCache[kw]; }
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const formas = [kw, kw + "s"];
  if (/[rzns]$/.test(kw)) formas.push(kw + "es");          // valor -> valores
  if (/l$/.test(kw))      formas.push(kw.slice(0, -1) + "is");  // hotel -> hoteis
  if (/ao$/.test(kw))     formas.push(kw.slice(0, -2) + "oes"); // opcao -> opcoes
  if (/m$/.test(kw))      formas.push(kw.slice(0, -1) + "ns");  // viagem -> viagens
  const alt = formas.filter((v, i, a) => a.indexOf(v) === i).map(esc).join("|");
  const re = new RegExp("\\b(?:" + alt + ")\\b", "i");
  __gigiRegexCache[kw] = re;
  return re;
}

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
  
  // IDIOMA DA CONVERSA — a pagina e' o ponto de partida, o que a pessoa ESCREVE
  // manda. Um estrangeiro que cai na pagina em portugues passa a ser atendido no
  // idioma dele, em vez de receber tudo em portugues so' porque errou de pagina.
  // Fica "fixo" (sticky): mensagem curta sem sinal ("3", "ok") nao joga a conversa
  // de volta pro idioma da pagina.
  const langPagina = (typeof window.currentLang !== 'undefined') ? window.currentLang : 'pt';
  var langDetectado = null;
  try { langDetectado = window.gigiDetectarIdioma ? window.gigiDetectarIdioma(text) : null; }
  catch (e) { langDetectado = null; }
  if (langDetectado && langDetectado !== langPagina) window.__gigiLangConversa = langDetectado;
  const lang = window.__gigiLangConversa || langPagina;
  if (lang !== langPagina && typeof window.gigiOferecerTrocaDeIdioma === 'function') {
    try { window.gigiOferecerTrocaDeIdioma(lang); } catch (e) {}
  }

  // Respostas padrão traduzidas caso não encontre
  let botReply = lang === 'en' ? "Hmm, good question! 🤔 My system is still learning about this. You can choose an option below or call our team on WhatsApp:" :
                 lang === 'es' ? "¡Hmm, buena pregunta! 🤔 Mi sistema todavía está aprendiendo sobre esto. Puedes elegir una opción abajo o llamar a nuestro equipo en WhatsApp:" :
                 lang === 'zh' ? "嗯，好问题！🤔 我的系统还在学习这个。您可以在下方选择一个选项，或通过WhatsApp联系我们的团队：" :
                 "Hmm, boa pergunta! 🤔 Meu sistema ainda está aprendendo sobre isso. Você pode escolher uma das opções abaixo ou chamar nossa equipe no WhatsApp:";

  let showOptions = true;

  // Busca Inteligente no Cérebro (keywords rápidas)
  let matchedByKeyword = false;
  if (typeof GIGI_BRAIN !== 'undefined') {
    // Antes vencia a PRIMEIRA regra que casasse. Isso fazia a regra de preco
    // (que vem cedo) engolir qualquer pergunta com dinheiro dentro:
    // "qual o valor da pousada" respondia preco de passeio. E qualquer frase
    // comecada por "oi" caia na saudacao em vez da pergunta de verdade.
    // Agora vence a palavra-chave MAIS ESPECIFICA (a mais longa que casou);
    // empate continua decidindo pela ordem das regras, como antes.
    let escolhida = null, tamanho = -Infinity;
    for (let r = 0; r < GIGI_BRAIN.length; r++) {
      for (const kw of (GIGI_BRAIN[r].keywords || [])) {
        // regra "fraca" (a saudacao) so' vence quando nada mais casa: senao
        // "oi tudo bem? queria saber dos passeios" respondia bom dia.
        const peso = GIGI_BRAIN[r].fraca ? kw.length - 100 : kw.length;
        if (peso > tamanho && gigiCasaPalavra(kw, normalized)) {
          escolhida = GIGI_BRAIN[r]; tamanho = peso;
        }
      }
    }
    for (let rule of (escolhida ? [escolhida] : [])) {
      if (true) {
        // cada pagina carrega o cerebro do seu idioma, entao a resposta
        // ja' vem pronta (antes o arquivo trazia os 5 idiomas juntos).
        botReply = rule.reply;
        showOptions = rule.showWhatsapp === true;
        matchedByKeyword = true;
        break;
      }
    }
  }

  // Função para renderizar resposta no chat
  // A IA responde em texto puro, com quebras de linha e **negrito** do Markdown.
  // Dentro do HTML isso virava um paragrafo unico e os asteriscos apareciam na
  // tela. Aqui a gente converte antes de mostrar: linha em branco vira espaco
  // entre paragrafos, quebra simples vira <br> e **x** vira negrito de verdade.
  function gigiFormatar(txt) {
    if (/<br|<b>|<a /i.test(txt)) return txt;   // ja' vem em HTML (cerebro/atalhos)
    return String(txt)
      .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
      .replace(/\r\n/g, '\n')
      .replace(/\n{2,}/g, '<br><br>')
      .replace(/\n/g, '<br>');
  }

  function renderGigiReply(text, showBtn) {
    flow.insertAdjacentHTML('beforeend', `<div class="gigi-msg gigi-msg--bot"><div class="gigi-avatar"><img src="/assets/gigi.png" alt="Gigi"></div><div class="gigi-bubble">${gigiFormatar(text)}</div></div>`);
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

  // A Gigi pede "data e quantas pessoas" no fim de quase toda resposta.
  // Aqui ela recebe: entende, soma e abre o WhatsApp com o pedido escrito.
  const fecho = gigiMontarFechamento(normalized, lang);
  if (fecho) {
    window.medir('pergunta_gigi', { pergunta: window.limpaTextoParaMedicao(text), achou_regra: 'fechamento' });
    setTimeout(() => {
      flow.insertAdjacentHTML('beforeend', `<div class="gigi-msg gigi-msg--bot"><div class="gigi-avatar"><img src="/assets/gigi.png" alt="Gigi"></div><div class="gigi-bubble">${fecho.texto}</div></div>`);
      if (fecho.whats) {
        flow.insertAdjacentHTML('beforeend', `<div class="gigi-quick-replies" style="margin-top:5px;"><a class="gigi-quick-btn gigi-btn-fechar" href="${fecho.whats}" target="_blank" rel="noopener" style="display:block;text-align:center;text-decoration:none;">${fecho.botao}</a></div>`);
      }
      body.scrollTop = body.scrollHeight;
    }, 500);
    return;
  }

  // O que o visitante digita e a Gigi NAO sabe responder por regra propria
  // e' a melhor lista de pautas que existe: veio de quem ja esta interessado.
  // Guardo a pergunta limpa de dado pessoal, junto com o resultado da busca.
  window.medir('pergunta_gigi', {
    pergunta: window.limpaTextoParaMedicao(text),
    achou_regra: matchedByKeyword ? 'sim' : 'nao'
  });

  if (matchedByKeyword && botReply !== '__WEATHER__' && botReply !== '__MENU__') {
    // Resposta rápida via keyword
    window.__gigiAssunto = gigiAssuntoDoTexto(botReply) || window.__gigiAssunto;
    setTimeout(() => { renderGigiReply(botReply, showOptions); }, 600);
  } else if (matchedByKeyword && botReply === '__MENU__') {
    // Mostrar menu inicial novamente
    setTimeout(() => {
      const b1 = lang === 'en' ? "📍 How to get there?" : lang === 'es' ? "📍 ¿Cómo llegar?" : lang === 'zh' ? "📍 如何到达小岛？" : lang === 'fr' ? "📍 Comment venir sur l'île ?" : "📍 Como chegar na Ilha?";
      const b2 = lang === 'en' ? "🚤 Tour Prices" : lang === 'es' ? "🚤 Precios de Paseos" : lang === 'zh' ? "🚤 游览价格" : lang === 'fr' ? "🚤 Prix des excursions" : "🚤 Preços de Passeios";
      const b3 = lang === 'en' ? "💬 Talk on WhatsApp" : lang === 'es' ? "💬 Hablar en WhatsApp" : lang === 'zh' ? "💬 通过WhatsApp联系" : lang === 'fr' ? "💬 Je veux écrire sur WhatsApp" : "💬 Quero falar no WhatsApp";
      const menuLabel = lang === 'en' ? "Here are the quick options:" : lang === 'es' ? "Aquí están las opciones rápidas:" : lang === 'zh' ? "以下是快捷选项：" : lang === 'fr' ? "Voici les options rapides :" : "Aqui estão as opções rápidas:";
      flow.insertAdjacentHTML('beforeend', `
        <div class="gigi-msg gigi-msg--bot">
          <div class="gigi-avatar"><img src="/assets/gigi.png" alt="Gigi"></div>
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
    const thinkingMsg = lang === 'en' ? "✨ Let me think..." : lang === 'es' ? "✨ Déjame pensar..." : lang === 'zh' ? "✨ 让我想想..." : lang === 'fr' ? "✨ Laissez-moi réfléchir..." : "✨ Deixa eu pensar...";
    setTimeout(() => {
      flow.insertAdjacentHTML('beforeend', `<div class="gigi-msg gigi-msg--bot" id="${thinkingId}"><div class="gigi-avatar"><img src="/assets/gigi.png" alt="Gigi"></div><div class="gigi-bubble" style="opacity:0.6;font-style:italic;">${thinkingMsg}</div></div>`);
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
// AGENDA REAL DENTRO DO CHAT DA GIGI
// Le a mesma planilha da pagina Agenda Cultural (window.evProximosEventos).
// =======================================================
window.gigiPreencherAgenda = async function (lang) {
  const alvo = document.getElementById('gigiAgenda');
  if (!alvo) return;
  const L = ['en', 'es', 'zh', 'fr', 'pt'].includes(lang) ? lang : 'pt';

  const txt = {
    en: { titulo: '📅 <b>Coming up:</b>', vazio: 'Nothing scheduled for the next few days — the agenda is updated as the venues confirm.', ver: 'See full agenda', erro: 'I could not reach the agenda right now.' },
    es: { titulo: '📅 <b>Próximos:</b>', vazio: 'Nada agendado para los próximos días — la agenda se actualiza cuando los locales confirman.', ver: 'Ver la agenda completa', erro: 'No pude consultar la agenda ahora.' },
    zh: { titulo: '📅 <b>近期活动：</b>', vazio: '近几天暂无安排 — 场地确认后日程会更新。', ver: '查看完整日程', erro: '暂时无法读取日程。' },
    fr: { titulo: '📅 <b>À venir :</b>', vazio: "Rien de prévu dans les prochains jours — l'agenda est mis à jour au fur et à mesure des confirmations.", ver: "Voir l'agenda complet", erro: "Je n'ai pas pu consulter l'agenda pour le moment." },
    pt: { titulo: '📅 <b>Em destaque agora:</b>', vazio: 'Nada marcado para os próximos dias — a agenda é atualizada conforme as casas confirmam.', ver: 'Ver a agenda completa', erro: 'Não consegui consultar a agenda agora.' }
  }[L];

  const prefixo = (L === 'pt') ? '' : '/' + L;
  const linkAgenda = prefixo + '/agenda-cultural.html';

  // eventos.js so' e' carregado na pagina da Agenda. Nas outras, busca sob demanda.
  if (typeof window.evProximosEventos !== 'function') {
    try {
      await (window.__evLoader = window.__evLoader || new Promise((ok, falha) => {
        const sc = document.createElement('script');
        sc.src = '/eventos.js';
        sc.onload = ok;
        sc.onerror = () => falha(new Error('nao carregou eventos.js'));
        document.head.appendChild(sc);
      }));
    } catch (e) { /* segue para o fallback abaixo */ }
  }
  if (typeof window.evProximosEventos !== 'function') {
    alvo.innerHTML = txt.titulo + '<br><a href="' + linkAgenda + '">' + txt.ver + ' →</a>';
    return;
  }

  let evs = [];
  try { evs = await window.evProximosEventos(4); } catch (e) { evs = null; }

  if (evs === null) {
    alvo.innerHTML = txt.erro + ' <a href="' + linkAgenda + '">' + txt.ver + ' →</a>';
    return;
  }
  if (!evs.length) {
    alvo.innerHTML = txt.titulo + '<br>' + txt.vazio + '<br><a href="' + linkAgenda + '">' + txt.ver + ' →</a>';
    return;
  }

  const locais = { en: 'en-GB', es: 'es-ES', zh: 'zh-CN', fr: 'fr-FR', pt: 'pt-BR' }[L];
  const linhas = evs.map(e => {
    const d = new Date(e.data + 'T12:00:00');
    const quando = d.toLocaleDateString(locais, { day: '2-digit', month: 'short' });
    const hora = e.hora ? ' · ' + e.hora : '';
    const onde = e.local ? ' — ' + e.local : '';
    return '• <b>' + quando + hora + '</b>' + onde + ': ' + e.titulo;
  }).join('<br>');

  alvo.innerHTML = txt.titulo + '<br>' + linhas + '<br><a href="' + linkAgenda + '">' + txt.ver + ' →</a>';
};

// =======================================================
// LÓGICA DOS BOTÕES RÁPIDOS DA GIGI
// =======================================================
// Respostas dos botoes rapidos da Gigi (5 idiomas).
// Texto, imagens e links ficam todos aqui — nao mexa na funcao abaixo.
const GIGI_RESP = {"passeios": {"pt": "🚤 <b>Nossos passeios de barco</b><br><img src=\"/assets/pantanalcarioca.jpg\" alt=\"Passeio de barco pelo Pantanal Carioca\" style=\"width:100%;max-width:320px;border-radius:12px;margin:10px 0 6px;display:block\">⭐ <b>Pantanal Carioca + almoço — R$100 por pessoa</b><br>O barco entra nos manguezais e você vê jacarés e capivaras de pertinho. Almoço executivo no Restaurante Maracujá da Ilha: carne, peixe ou frango. Saídas todos os dias de meia em meia hora, das 8h às 16h30. Esse passeio não tem parada para banho. Dura em média 35 a 40 min, barco de grupo, mínimo 2 pessoas. Bebida não inclusa.<br>Só o passeio: R$50 · <a href=\"pantanal-carioca.html\">ver fotos e detalhes</a><br><img src=\"/assets/ilhastijucas.jpg\" alt=\"Passeio de barco pelas Ilhas Tijucas\" style=\"width:100%;max-width:320px;border-radius:12px;margin:10px 0 6px;display:block\">🏝️ <b>Ilhas Tijucas + almoço — R$200 por pessoa</b><br>De 3 a 4 horas, água cristalina e <b>parada para banho</b> — o barco deixa vocês na ilha. Almoço incluso.<br>Só o passeio: R$150 · <a href=\"ilhas-tijucas.html\">ver fotos e detalhes</a><br><br>🚩 <b>Jet ski</b> — 10min R$150 · 20min R$250 · 30min R$450 · 1h R$750 (por jet ski, até 2 pessoas). <a href=\"jet-ski.html\">ver mais</a><br>🏖️ <b>Praia da Reserva</b> — a partir de R$120 por pessoa. <a href=\"reserva.html\">ver mais</a><br><br>💳 Dinheiro, Pix ou cartão, com 50% de sinal para garantir a reserva.<br><br>Me diz a <b>data</b> e <b>quantas pessoas</b> que eu confirmo a disponibilidade 😊<br>🗺️ <a href=\"passeios-rotas.html\">Ver todos os passeios e rotas</a><br>📄 <a href=\"/assets/flyer-passeios.jpg\" target=\"_blank\">Baixar o flyer com todos os passeios</a>","en": "🚤 <b>Our boat tours</b><br><img src=\"/assets/pantanalcarioca.jpg\" alt=\"Passeio de barco pelo Pantanal Carioca\" style=\"width:100%;max-width:320px;border-radius:12px;margin:10px 0 6px;display:block\">⭐ <b>Carioca Pantanal + lunch — R$100 per person</b><br>The boat goes deep into the mangroves and you see caimans and capybaras up close. Set lunch at Restaurante Maracujá da Ilha: beef, fish or chicken. Departures every half hour, from 8am to 4:30pm. This one has no swimming stop. 35 to 40 min on average, group boat, minimum 2 people. Drinks not included.<br>Tour only: R$50 · <a href=\"pantanal-carioca.html\">photos and details</a><br><img src=\"/assets/ilhastijucas.jpg\" alt=\"Passeio de barco pelas Ilhas Tijucas\" style=\"width:100%;max-width:320px;border-radius:12px;margin:10px 0 6px;display:block\">🏝️ <b>Tijucas Islands + lunch — R$200 per person</b><br>3 to 4 hours, crystal-clear water and a <b>swimming stop</b> — the boat drops you on the island. Lunch included.<br>Tour only: R$150 · <a href=\"ilhas-tijucas.html\">photos and details</a><br><br>🚩 <b>Jet ski</b> — 10min R$150 · 20min R$250 · 30min R$450 · 1h R$750 (per jet ski, up to 2 people). <a href=\"jet-ski.html\">see more</a><br>🏖️ <b>Reserva Beach</b> — from R$120 per person. <a href=\"reserva.html\">see more</a><br><br>💳 Cash, Pix or card, with a 50% deposit to secure the booking.<br><br>Tell me the <b>date</b> and <b>how many people</b> and I'll confirm availability 😊<br>🗺️ <a href=\"passeios-rotas.html\">See all tours and routes</a><br>📄 <a href=\"/assets/flyer-passeios.jpg\" target=\"_blank\">Download the tour flyer</a>","es": "🚤 <b>Nuestros paseos en barco</b><br><img src=\"/assets/pantanalcarioca.jpg\" alt=\"Passeio de barco pelo Pantanal Carioca\" style=\"width:100%;max-width:320px;border-radius:12px;margin:10px 0 6px;display:block\">⭐ <b>Pantanal Carioca + almuerzo — R$100 por persona</b><br>El barco entra en los manglares y ves caimanes y capibaras de cerca. Almuerzo ejecutivo en el Restaurante Maracujá da Ilha: carne, pescado o pollo. Salidas cada media hora, de 8h a 16h30. Este paseo no tiene parada para bañarse. Dura en promedio 35 a 40 min, barco de grupo, mínimo 2 personas. Bebida no incluida.<br>Solo el paseo: R$50 · <a href=\"pantanal-carioca.html\">fotos y detalles</a><br><img src=\"/assets/ilhastijucas.jpg\" alt=\"Passeio de barco pelas Ilhas Tijucas\" style=\"width:100%;max-width:320px;border-radius:12px;margin:10px 0 6px;display:block\">🏝️ <b>Islas Tijucas + almuerzo — R$200 por persona</b><br>De 3 a 4 horas, agua cristalina y <b>parada para bañarse</b> — el barco te deja en la isla. Almuerzo incluido.<br>Solo el paseo: R$150 · <a href=\"ilhas-tijucas.html\">fotos y detalles</a><br><br>🚩 <b>Jet ski</b> — 10min R$150 · 20min R$250 · 30min R$450 · 1h R$750 (por jet ski, hasta 2 personas). <a href=\"jet-ski.html\">ver más</a><br>🏖️ <b>Praia da Reserva</b> — desde R$120 por persona. <a href=\"reserva.html\">ver más</a><br><br>💳 Efectivo, Pix o tarjeta, con 50% de seña para garantizar la reserva.<br><br>¡Dime la <b>fecha</b> y <b>cuántas personas</b> y confirmo la disponibilidad! 😊<br>🗺️ <a href=\"passeios-rotas.html\">Ver todos los paseos y rutas</a><br>📄 <a href=\"/assets/flyer-passeios.jpg\" target=\"_blank\">Descargar el flyer de los paseos</a>","fr": "🚤 <b>Nos sorties en bateau</b><br><img src=\"/assets/pantanalcarioca.jpg\" alt=\"Passeio de barco pelo Pantanal Carioca\" style=\"width:100%;max-width:320px;border-radius:12px;margin:10px 0 6px;display:block\">⭐ <b>Pantanal Carioca + déjeuner — R$100 par personne</b><br>Le bateau s'enfonce dans la mangrove et vous voyez caïmans et capybaras de tout près. Déjeuner au Restaurante Maracujá da Ilha : viande, poisson ou poulet. Départs toutes les demi-heures, de 8h à 16h30. Cette sortie n'a pas d'arrêt baignade. 35 à 40 min en moyenne, bateau collectif, minimum 2 personnes. Boissons non incluses.<br>La balade seule : R$50 · <a href=\"pantanal-carioca.html\">photos et détails</a><br><img src=\"/assets/ilhastijucas.jpg\" alt=\"Passeio de barco pelas Ilhas Tijucas\" style=\"width:100%;max-width:320px;border-radius:12px;margin:10px 0 6px;display:block\">🏝️ <b>Ilhas Tijucas + déjeuner — R$200 par personne</b><br>3 à 4 heures, eau cristalline et <b>arrêt baignade</b> — le bateau vous dépose sur l'île. Déjeuner inclus.<br>La balade seule : R$150 · <a href=\"ilhas-tijucas.html\">photos et détails</a><br><br>🚩 <b>Jet-ski</b> — 10min R$150 · 20min R$250 · 30min R$450 · 1h R$750 (par jet-ski, jusqu'à 2 personnes). <a href=\"jet-ski.html\">voir plus</a><br>🏖️ <b>Praia da Reserva</b> — à partir de R$120 par personne. <a href=\"reserva.html\">voir plus</a><br><br>💳 Espèces, Pix ou carte, avec un acompte de 50% pour garantir la réservation.<br><br>Dites-moi la <b>date</b> et le <b>nombre de personnes</b> et je confirme les disponibilités 😊<br>🗺️ <a href=\"passeios-rotas.html\">Voir toutes les sorties et itinéraires</a><br>📄 <a href=\"/assets/flyer-passeios.jpg\" target=\"_blank\">Télécharger le flyer des excursions</a>","zh": "🚤 <b>我们的游船行程</b><br><img src=\"/assets/pantanalcarioca.jpg\" alt=\"Passeio de barco pelo Pantanal Carioca\" style=\"width:100%;max-width:320px;border-radius:12px;margin:10px 0 6px;display:block\">⭐ <b>卡里奥卡潘塔纳尔 + 午餐 — 每人 R$100</b><br>船会驶入红树林深处，近距离观赏鳄鱼和水豚。在 Restaurante Maracujá da Ilha 用午餐：牛肉、鱼或鸡肉。每天 8 点至 16 点 30 分，每半小时出发一班。此行程没有游泳停靠。 平均 35 至 40 分钟，拼船，最少 2 人。饮料不含。<br>仅游船：每人 R$50 · <a href=\"pantanal-carioca.html\">查看照片和详情</a><br><img src=\"/assets/ilhastijucas.jpg\" alt=\"Passeio de barco pelas Ilhas Tijucas\" style=\"width:100%;max-width:320px;border-radius:12px;margin:10px 0 6px;display:block\">🏝️ <b>蒂茹卡群岛 + 午餐 — 每人 R$200</b><br>约 3 至 4 小时，海水清澈，<b>有游泳停靠</b> — 船会把您送上岛。含午餐。<br>仅游船：每人 R$150 · <a href=\"ilhas-tijucas.html\">查看照片和详情</a><br><br>🚩 <b>摩托艇</b> — 10分钟 R$150 · 20分钟 R$250 · 30分钟 R$450 · 1小时 R$750（按每台计算，最多 2 人）。<a href=\"jet-ski.html\">了解更多</a><br>🏖️ <b>里塞尔瓦海滩</b> — 每人 R$120 起。<a href=\"reserva.html\">了解更多</a><br><br>💳 可用现金、Pix 或刷卡，预付 50% 定金锁定预订。<br><br>告诉我<b>日期</b>和<b>人数</b>，我马上帮您确认 😊<br>🗺️ <a href=\"passeios-rotas.html\">查看全部行程和路线</a><br>📄 <a href=\"/assets/flyer-passeios.jpg\" target=\"_blank\">下载行程宣传页</a>"},"hospedagem": {"pt": "🏡 <b>Hospedagem na Ilha da Gigóia</b><br><br>⭐ <b>Nossa indicação</b><br><b><a href=\"pousada-ilha-fantasia.html\">Pousada Ilha da Fantasia</a></b> — à beira da lagoa, piscina e deck sobre a água. <b>Café da manhã e passeio de barco pelo Pantanal Carioca inclusos na diária.</b> Valor conforme a data.<br><br>🛌 <b>Pousadas</b><br><a href=\"veneza-carioca.html\">Veneza Carioca Hotel Boutique</a> — a partir de R$650 a diária<br><a href=\"casanova.html\">Casanova Residence</a> — a partir de R$650 a diária<br><br>🏖️ <b>Casas de temporada (a casa inteira)</b><br><a href=\"lux-48.html\">Lux 48</a> — a partir de R$250 a noite, até 4 hóspedes<br><a href=\"casa-venti.html\">Casa Venti</a> — a partir de R$450 a noite, até 7 hóspedes (aceita pets 🐾)<br><a href=\"casa-goia.html\">Casa Goiá</a> — a partir de R$500 a noite, até 8 hóspedes<br><a href=\"casa-estatua.html\">Casa da Estátua</a> — a partir de R$1.500 a noite, até 16 hóspedes com piscina 🏊<br><br>Os valores mudam conforme a data e a temporada.<br><br>Me diz a <b>data</b> e <b>quantas pessoas</b> que eu confirmo o valor exato e a disponibilidade 😊","en": "🏡 <b>Places to stay on Ilha da Gigóia</b><br><br>⭐ <b>Our pick</b><br><b><a href=\"pousada-ilha-fantasia.html\">Pousada Ilha da Fantasia</a></b> — right on the lagoon, pool and deck over the water. <b>Breakfast and a Carioca Pantanal boat tour included in the rate.</b> Price depends on the date.<br><br>🛌 <b>Inns</b><br><a href=\"veneza-carioca.html\">Veneza Carioca Hotel Boutique</a> — from R$650 per night<br><a href=\"casanova.html\">Casanova Residence</a> — from R$650 per night<br><br>🏖️ <b>Vacation homes (the whole house)</b><br><a href=\"lux-48.html\">Lux 48</a> — from R$250 per night, up to 4 guests<br><a href=\"casa-venti.html\">Casa Venti</a> — from R$450 per night, up to 7 guests (pets welcome 🐾)<br><a href=\"casa-goia.html\">Casa Goiá</a> — from R$500 per night, up to 8 guests<br><a href=\"casa-estatua.html\">Casa da Estátua</a> — from R$1.500 per night, up to 16 guests with a pool 🏊<br><br>Rates change with the date and the season.<br><br>Tell me the <b>date</b> and <b>how many people</b> and I'll confirm the exact price and availability 😊","es": "🏡 <b>Alojamiento en Ilha da Gigóia</b><br><br>⭐ <b>Nuestra recomendación</b><br><b><a href=\"pousada-ilha-fantasia.html\">Pousada Ilha da Fantasia</a></b> — junto a la laguna, piscina y deck sobre el agua. <b>Desayuno y paseo en barco por el Pantanal Carioca incluidos en la tarifa.</b> El valor depende de la fecha.<br><br>🛌 <b>Posadas</b><br><a href=\"veneza-carioca.html\">Veneza Carioca Hotel Boutique</a> — desde R$650 la noche<br><a href=\"casanova.html\">Casanova Residence</a> — desde R$650 la noche<br><br>🏖️ <b>Casas de alquiler (la casa entera)</b><br><a href=\"lux-48.html\">Lux 48</a> — desde R$250 la noche, hasta 4 huéspedes<br><a href=\"casa-venti.html\">Casa Venti</a> — desde R$450 la noche, hasta 7 huéspedes (acepta mascotas 🐾)<br><a href=\"casa-goia.html\">Casa Goiá</a> — desde R$500 la noche, hasta 8 huéspedes<br><a href=\"casa-estatua.html\">Casa da Estátua</a> — desde R$1.500 la noche, hasta 16 huéspedes con piscina 🏊<br><br>Las tarifas cambian según la fecha y la temporada.<br><br>Dime la <b>fecha</b> y <b>cuántas personas</b> y confirmo el valor exacto y la disponibilidad 😊","fr": "🏡 <b>Hébergement à Ilha da Gigóia</b><br><br>⭐ <b>Notre recommandation</b><br><b><a href=\"pousada-ilha-fantasia.html\">Pousada Ilha da Fantasia</a></b> — au bord de la lagune, piscine et ponton sur l'eau. <b>Petit-déjeuner et balade en bateau dans le Pantanal Carioca inclus dans le tarif.</b> Le prix dépend de la date.<br><br>🛌 <b>Auberges</b><br><a href=\"veneza-carioca.html\">Veneza Carioca Hôtel Boutique</a> — à partir de R$650 la nuit<br><a href=\"casanova.html\">Casanova Residence</a> — à partir de R$650 la nuit<br><br>🏖️ <b>Maisons de vacances (la maison entière)</b><br><a href=\"lux-48.html\">Lux 48</a> — à partir de R$250 la nuit, jusqu'à 4 personnes<br><a href=\"casa-venti.html\">Casa Venti</a> — à partir de R$450 la nuit, jusqu'à 7 personnes (animaux acceptés 🐾)<br><a href=\"casa-goia.html\">Casa Goiá</a> — à partir de R$500 la nuit, jusqu'à 8 personnes<br><a href=\"casa-estatua.html\">Casa da Estátua</a> — à partir de R$1.500 la nuit, jusqu'à 16 personnes avec piscine 🏊<br><br>Les tarifs changent selon la date et la saison.<br><br>Dites-moi la <b>date</b> et le <b>nombre de personnes</b> et je confirme le prix exact et les disponibilités 😊","zh": "🏡 <b>吉戈亚岛住宿</b><br><br>⭐ <b>我们的推荐</b><br><b><a href=\"pousada-ilha-fantasia.html\">幻想岛旅馆</a></b> — 就在泻湖边，有泳池和临水平台。<b>房价已含早餐与卡里奥卡潘塔纳尔游船。</b>价格视日期而定。<br><br>🛌 <b>旅馆</b><br><a href=\"veneza-carioca.html\">里约威尼斯精品酒店</a> — 起价 R$650 每晚<br><a href=\"casanova.html\">卡萨诺瓦公寓</a> — 起价 R$650 每晚<br><br>🏖️ <b>整栋短租房</b><br><a href=\"lux-48.html\">Lux 48</a> — 起价 R$250 每晚, 最多 4 人<br><a href=\"casa-venti.html\">Casa Venti</a> — 起价 R$450 每晚, 最多 7 人（允许宠物 🐾）<br><a href=\"casa-goia.html\">Casa Goiá</a> — 起价 R$500 每晚, 最多 8 人<br><a href=\"casa-estatua.html\">Casa da Estátua</a> — 起价 R$1.500 每晚, 最多 16 人 带泳池 🏊<br><br>房价因日期和季节而变。<br><br>告诉我<b>日期</b>和<b>人数</b>，我帮您确认确切价格和空房 😊"},"como_chegar": {"pt": "Chegar é fácil — a ilha fica na Barra da Tijuca. 📍<br><br>🚇 <b>De metrô</b><br>Desça na estação <b>Jardim Oceânico</b> (Saída Lagoa) e caminhe 5 minutos até os decks.<br><br>🚍 <b>De BRT ou ônibus</b><br>O <b>Terminal Jardim Oceânico</b> é o mesmo ponto do metrô, então é a mesma caminhada de 5 minutos.<br><br>🚗 <b>De carro</b><br>Coloque no GPS <b>Av. Armando Lombardi, 370</b>. Na ilha não há carros nem ruas: você deixa o carro no continente e atravessa de barco.<br><br>🅿️ <b>Estacionamento</b><br>Há estacionamentos particulares no entorno dos decks da Av. Armando Lombardi. Em fim de semana e noite de movimento, chegue mais cedo.<br><br>⛴️ <b>A travessia</b><br>As chalanas funcionam <b>24h</b> e custam entre <b>R$2 e R$5</b>. É só dizer ao barqueiro o nome do lugar que ele te deixa no deck certo.<br><br>📍 <a href=\"como-chegar.html\">Ver o passo a passo completo com mapa</a>","en": "Getting here is easy — the island is in Barra da Tijuca. 📍<br><br>🚇 <b>By subway</b><br>Get off at <b>Jardim Oceânico</b> station (Lagoa exit) and walk 5 minutes to the decks.<br><br>🚍 <b>By BRT or bus</b><br><b>Jardim Oceânico Terminal</b> is the same spot as the subway station, so it's the same 5-minute walk.<br><br>🚗 <b>By car</b><br>Set your GPS to <b>Av. Armando Lombardi, 370</b>. There are no cars or streets on the island: you leave the car on the mainland and cross by boat.<br><br>🅿️ <b>Parking</b><br>There are private car parks around the decks on Av. Armando Lombardi. On weekends and busy nights, come early.<br><br>⛴️ <b>The crossing</b><br>The little boats run <b>24/7</b> and cost between <b>R$2 and R$5</b>. Just tell the boatman the name of the place and he'll drop you at the right deck.<br><br>📍 <a href=\"como-chegar.html\">See the full step-by-step with a map</a>","es": "Llegar es fácil — la isla está en Barra da Tijuca. 📍<br><br>🚇 <b>En metro</b><br>Bájate en la estación <b>Jardim Oceânico</b> (Salida Lagoa) y camina 5 minutos hasta los muelles.<br><br>🚍 <b>En BRT o autobús</b><br>La <b>Terminal Jardim Oceânico</b> es el mismo punto del metro, así que es la misma caminata de 5 minutos.<br><br>🚗 <b>En coche</b><br>Pon en el GPS <b>Av. Armando Lombardi, 370</b>. En la isla no hay coches ni calles: dejas el coche en el continente y cruzas en barco.<br><br>🅿️ <b>Estacionamiento</b><br>Hay aparcamientos privados alrededor de los muelles de la Av. Armando Lombardi. En fin de semana y noches con movimiento, llega más temprano.<br><br>⛴️ <b>La travesía</b><br>Los botes funcionan <b>24h</b> y cuestan entre <b>R$2 y R$5</b>. Solo dile al barquero el nombre del lugar y te deja en el muelle correcto.<br><br>📍 <a href=\"como-chegar.html\">Ver el paso a paso completo con mapa</a>","fr": "Venir est facile — l'île se trouve à Barra da Tijuca. 📍<br><br>🚇 <b>En métro</b><br>Descendez à la station <b>Jardim Oceânico</b> (sortie Lagoa) et marchez 5 minutes jusqu'aux pontons.<br><br>🚍 <b>En BRT ou en bus</b><br>Le <b>Terminal Jardim Oceânico</b> est au même endroit que le métro, donc c'est la même marche de 5 minutes.<br><br>🚗 <b>En voiture</b><br>Mettez dans le GPS <b>Av. Armando Lombardi, 370</b>. Il n'y a ni voitures ni rues sur l'île : vous laissez la voiture sur le continent et traversez en bateau.<br><br>🅿️ <b>Stationnement</b><br>Il y a des parkings privés autour des pontons de l'Av. Armando Lombardi. Le week-end et les soirs d'affluence, arrivez plus tôt.<br><br>⛴️ <b>La traversée</b><br>Les barques circulent <b>24h/24</b> et coûtent entre <b>R$2 et R$5</b>. Dites simplement le nom du lieu au passeur, il vous dépose au bon ponton.<br><br>📍 <a href=\"como-chegar.html\">Voir le pas à pas complet avec la carte</a>","zh": "来岛很方便 — 岛屿位于巴拉蒂茯卡。📍<br><br>🚇 <b>地铁</b><br>在 <b>Jardim Oceânico</b> 站下车（Lagoa 出口），步行 5 分钟即到码头。<br><br>🚍 <b>BRT 或公交</b><br><b>Jardim Oceânico 总站</b>与地铁站在同一位置，同样步行 5 分钟。<br><br>🚗 <b>自驾</b><br>导航设为 <b>Av. Armando Lombardi, 370</b>。岛上没有汽车也没有马路：把车停在对岸，再乘船过来。<br><br>🅿️ <b>停车</b><br>Av. Armando Lombardi 码头周边有私人停车场。周末和夜间高峰请提前到达。<br><br>⛴️ <b>渡船</b><br>渡船 <b>24 小时</b>运营，船资 <b>R$2 至 R$5</b>。只需告诉船夫目的地名称，他会把您送到对应码头。<br><br>📍 <a href=\"como-chegar.html\">查看带地图的完整指南</a>"}};

// =======================================================
// FECHAMENTO — a Gigi pede "data e quantas pessoas" no fim de quase toda
// resposta. Antes ela nao sabia RECEBER: "dia 15, 4 pessoas" caia na IA,
// que nao reserva nada. Aqui ela entende, soma, mostra o resumo e abre o
// WhatsApp com o pedido ja' escrito, para a equipe nao recomecar do zero.
// =======================================================
window.__gigiAssunto = null;                 // pantanal | tijucas | hospedagem
window.__gigiPedido  = { data: null, pessoas: null };
const GIGI_PRECO = { pantanal: 100, tijucas: 200 };

function gigiAssuntoDoTexto(t) {
  // Uma resposta que cita OS DOIS passeios (a de preco, a de "o que fazer")
  // nao define assunto nenhum: se definisse, a Gigi fecharia no passeio
  // errado e mandaria um total errado para a equipe. Melhor ela perguntar.
  const temP = /Pantanal|潘塔纳尔/i.test(t);
  const temT = /Tijuc|蒂茹卡/i.test(t);
  if (temP && temT) return null;
  if (temT) return 'tijucas';
  if (temP) return 'pantanal';
  if (/pousada|hospedag|where to stay|aloja|auberge|h.bergement|旅馆|住宿/i.test(t)) return 'hospedagem';
  return null;
}
// o texto chega sem acento e em minusculas
function gigiLerPessoas(t) {
  let m = t.match(/(\d{1,3})\s*(?:pessoas?|pax|adultos?|people|persons?|personas?|personnes?|人|位)/);
  if (m) return parseInt(m[1], 10);
  m = t.match(/\b(?:somos|seremos|para|pra|for|nous sommes|seriamos)\s+(\d{1,3})\b/);
  if (m) return parseInt(m[1], 10);
  return null;
}
function gigiLerData(t) {
  let m = t.match(/\b(\d{1,2})[\/\-\.](\d{1,2})(?:[\/\-\.](\d{2,4}))?\b/);
  if (m) return m[3] ? m[1] + '/' + m[2] + '/' + m[3] : m[1] + '/' + m[2];
  const MES = 'janeiro|fevereiro|marco|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro'
            + '|january|february|march|april|june|july|august|september|october|november|december'
            + '|enero|febrero|marzo|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre'
            + '|janvier|fevrier|mars|avril|mai|juin|juillet|aout|septembre|octobre|novembre|decembre'
            + '|jan|fev|feb|mar|abr|apr|mai|may|jun|jul|ago|aug|set|sep|out|oct|nov|dez|dic|dec';
  m = t.match(new RegExp('\\b(\\d{1,2})\\s*(?:de\\s+|of\\s+)?(' + MES + ')\\b'));
  if (m) return m[1] + ' de ' + m[2];
  // em ingles a ordem e' invertida: "oct 15", "december 20"
  m = t.match(new RegExp('\\b(' + MES + ')\\s+(\\d{1,2})\\b'));
  if (m) return m[1] + ' ' + m[2];
  m = t.match(/\bdia\s+(\d{1,2})\b/);
  if (m) return 'dia ' + m[1];
  if (/\b(hoje|today|hoy|aujourd hui|今天)\b/.test(t)) return 'hoje';
  if (/\b(amanha|tomorrow|manana|demain|明天)\b/.test(t)) return 'amanha';
  if (/\b(sabado|saturday|samedi|周六)\b/.test(t)) return 'sabado';
  if (/\b(domingo|sunday|dimanche|周日)\b/.test(t)) return 'domingo';
  if (/\b(sexta|friday|viernes|vendredi|周五)\b/.test(t)) return 'sexta';
  return null;
}
function gigiQuerFechar(t) {
  return /\b(quero fechar|queria fechar|fechar a reserva|pode fechar|pode reservar|quero garantir|vou querer|ta fechado|fechado|confirmar|confirma|book it|i want to book|confirm|quiero reservar|reservar ahora|je veux reserver|je reserve|我要预订|确认预订)\b/.test(t);
}

const GIGI_TXT = {
 pt: { qual:"Perfeito, anotei {d}! 📝<br><br>Qual dos dois você quer?<br>• <b>Pantanal Carioca + almoço</b> — R$100 por pessoa<br>• <b>Ilhas Tijucas + almoço</b> — R$200 por pessoa<br><br>Só me dizer o nome do passeio.",
   falta_td:"Boa! 📝 Me diz a <b>data</b> e <b>quantas pessoas</b> que eu já fecho o pedido.",
   falta_p:"Anotei {d}! 📝 E são quantas pessoas?",
   falta_d:"Anotei {p}! 📝 Para qual data?",
   resumo:"Fechado, deixa comigo! 🚀<br><br><b>{nome}</b><br>📅 {d}<br>👥 {p}<br>💰 <b>Total {total}</b> — sinal de {sinal} para garantir<br><br>É só tocar no botão abaixo que eu já mando esse pedido pronto para a nossa equipe. <b>Assim que receber, a gente já retorna.</b>",
   resumo_h:"Anotei! 🚀<br><br><b>Hospedagem na Ilha da Gigóia</b><br>📅 {d}<br>👥 {p}<br><br>Toca no botão abaixo que eu mando esse pedido pronto para a equipe ver valor e disponibilidade. <b>Assim que receber, a gente já retorna.</b>",
   botao:"💬 Enviar meu pedido no WhatsApp", pess:"{n} pessoa(s)",
   wa_ola:"Olá! Vim pelo site do Portal Ilha da Gigóia.", wa_quero:"Quero:", wa_data:"Data:", wa_pess:"Pessoas:", wa_total:"Total:", wa_sinal:"sinal de" },
 en: { qual:"Great, I've noted {d}! 📝<br><br>Which one would you like?<br>• <b>Carioca Pantanal + lunch</b> — R$100 per person<br>• <b>Tijucas Islands + lunch</b> — R$200 per person<br><br>Just tell me the name of the tour.",
   falta_td:"Great! 📝 Tell me the <b>date</b> and <b>how many people</b> and I'll put the request together.",
   falta_p:"Noted: {d}! 📝 How many people?",
   falta_d:"Noted: {p}! 📝 What date?",
   resumo:"All set, leave it with me! 🚀<br><br><b>{nome}</b><br>📅 {d}<br>👥 {p}<br>💰 <b>Total {total}</b> — {sinal} deposit to confirm<br><br>Tap the button below and I'll send this request ready to our team. <b>We'll get back to you as soon as we receive it.</b>",
   resumo_h:"Noted! 🚀<br><br><b>Where to stay on Ilha da Gigóia</b><br>📅 {d}<br>👥 {p}<br><br>Tap below and I'll send this to the team to check rates and availability. <b>We'll get back to you as soon as we receive it.</b>",
   botao:"💬 Send my request on WhatsApp", pess:"{n} people",
   wa_ola:"Hello! I came from the Portal Ilha da Gigóia website.", wa_quero:"I want:", wa_data:"Date:", wa_pess:"People:", wa_total:"Total:", wa_sinal:"deposit" },
 es: { qual:"¡Perfecto, anoté {d}! 📝<br><br>¿Cuál de los dos quieres?<br>• <b>Pantanal Carioca + almuerzo</b> — R$100 por persona<br>• <b>Islas Tijucas + almuerzo</b> — R$200 por persona<br><br>Solo dime el nombre del paseo.",
   falta_td:"¡Genial! 📝 Dime la <b>fecha</b> y <b>cuántas personas</b> y armo el pedido.",
   falta_p:"¡Anoté {d}! 📝 ¿Cuántas personas son?",
   falta_d:"¡Anoté {p}! 📝 ¿Para qué fecha?",
   resumo:"¡Listo, déjamelo a mí! 🚀<br><br><b>{nome}</b><br>📅 {d}<br>👥 {p}<br>💰 <b>Total {total}</b> — seña de {sinal} para garantizar<br><br>Toca el botón de abajo y envío este pedido listo a nuestro equipo. <b>En cuanto lo recibamos te respondemos.</b>",
   resumo_h:"¡Anotado! 🚀<br><br><b>Alojamiento en Ilha da Gigóia</b><br>📅 {d}<br>👥 {p}<br><br>Toca abajo y mando esto al equipo para ver precio y disponibilidad. <b>En cuanto lo recibamos te respondemos.</b>",
   botao:"💬 Enviar mi pedido por WhatsApp", pess:"{n} persona(s)",
   wa_ola:"¡Hola! Vengo del sitio Portal Ilha da Gigóia.", wa_quero:"Quiero:", wa_data:"Fecha:", wa_pess:"Personas:", wa_total:"Total:", wa_sinal:"seña de" },
 fr: { qual:"Parfait, j'ai noté {d} ! 📝<br><br>Laquelle souhaitez-vous ?<br>• <b>Pantanal Carioca + déjeuner</b> — R$100 par personne<br>• <b>Ilhas Tijucas + déjeuner</b> — R$200 par personne<br><br>Dites-moi simplement le nom de la sortie.",
   falta_td:"Parfait ! 📝 Dites-moi la <b>date</b> et le <b>nombre de personnes</b> et je prépare la demande.",
   falta_p:"J'ai noté {d} ! 📝 Vous êtes combien ?",
   falta_d:"J'ai noté {p} ! 📝 Pour quelle date ?",
   resumo:"C'est noté, je m'en occupe ! 🚀<br><br><b>{nome}</b><br>📅 {d}<br>👥 {p}<br>💰 <b>Total {total}</b> — acompte de {sinal} pour garantir<br><br>Touchez le bouton ci-dessous et j'envoie cette demande déjà prête à notre équipe. <b>Dès réception, nous revenons vers vous.</b>",
   resumo_h:"C'est noté ! 🚀<br><br><b>Hébergement à Ilha da Gigóia</b><br>📅 {d}<br>👥 {p}<br><br>Touchez ci-dessous et j'envoie à l'équipe pour les tarifs et disponibilités. <b>Dès réception, nous revenons vers vous.</b>",
   botao:"💬 Envoyer ma demande sur WhatsApp", pess:"{n} personne(s)",
   wa_ola:"Bonjour ! Je viens du site Portal Ilha da Gigóia.", wa_quero:"Je souhaite :", wa_data:"Date :", wa_pess:"Personnes :", wa_total:"Total :", wa_sinal:"acompte de" },
 zh: { qual:"好的，已记下 {d}！📝<br><br>您想选哪个？<br>• <b>卡里奥卡潘塔纳尔 + 午餐</b> — 每人 R$100<br>• <b>蒂茹卡群岛 + 午餐</b> — 每人 R$200<br><br>告诉我行程名称即可。",
   falta_td:"好的！📝 告诉我<b>日期</b>和<b>人数</b>，我马上帮您整理预订。",
   falta_p:"已记下 {d}！📝 请问几位？",
   falta_d:"已记下 {p}！📝 请问哪一天？",
   resumo:"好的，交给我！🚀<br><br><b>{nome}</b><br>📅 {d}<br>👥 {p}<br>💰 <b>合计 {total}</b> — 定金 {sinal}<br><br>点击下方按钮，我把这份预订直接发给我们的团队。<b>收到后我们会马上回复。</b>",
   resumo_h:"已记下！🚀<br><br><b>吉戈亚岛住宿</b><br>📅 {d}<br>👥 {p}<br><br>点击下方，我把这份请求发给团队查价格和空房。<b>收到后我们会马上回复。</b>",
   botao:"💬 通过 WhatsApp 发送我的预订", pess:"{n} 位",
   wa_ola:"您好！我来自 Portal Ilha da Gigóia 网站。", wa_quero:"我想预订：", wa_data:"日期：", wa_pess:"人数：", wa_total:"合计：", wa_sinal:"定金" },
};
const GIGI_NOME = {
 pantanal: { pt:"Pantanal Carioca + almoço (R$100 por pessoa)", en:"Carioca Pantanal + lunch (R$100 per person)",
   es:"Pantanal Carioca + almuerzo (R$100 por persona)", fr:"Pantanal Carioca + déjeuner (R$100 par personne)",
   zh:"卡里奥卡潘塔纳尔 + 午餐（每人 R$100）" },
 tijucas: { pt:"Ilhas Tijucas + almoço (R$200 por pessoa)", en:"Tijucas Islands + lunch (R$200 per person)",
   es:"Islas Tijucas + almuerzo (R$200 por persona)", fr:"Ilhas Tijucas + déjeuner (R$200 par personne)",
   zh:"蒂茹卡群岛 + 午餐（每人 R$200）" },
 hospedagem: { pt:"Hospedagem na Ilha da Gigóia", en:"A place to stay on Ilha da Gigóia",
   es:"Alojamiento en Ilha da Gigóia", fr:"Hébergement à Ilha da Gigóia", zh:"吉戈亚岛住宿" },
};

function gigiMontarFechamento(t, lang) {
  const L = window.gigiIdiomaTexto ? window.gigiIdiomaTexto(lang, GIGI_TXT) : (GIGI_TXT[lang] ? lang : 'pt');
  const T = GIGI_TXT[L];
  const pessoas = gigiLerPessoas(t);
  const data = gigiLerData(t);
  const fechar = gigiQuerFechar(t);
  // o visitante pode nomear o passeio agora
  if (/pantanal/.test(t) && !/tijuc/.test(t)) window.__gigiAssunto = 'pantanal';
  else if (/tijuc/.test(t)) window.__gigiAssunto = 'tijucas';
  if (pessoas) window.__gigiPedido.pessoas = pessoas;
  if (data) window.__gigiPedido.data = data;

  const P = window.__gigiPedido, P0 = P;
  // A data vem normalizada em token portugues ('amanha'). Traduz antes de entrar no
  // {d}, senao sai "Great, I've noted amanha!" na cara do cliente estrangeiro.
  // Precisa vir DEPOIS do const P: ja' errei isso aqui e vira ReferenceError.
  const dataTxt = (window.gigiDataNoIdioma ? window.gigiDataNoIdioma(P.data, lang) : P.data);
  const assunto = window.__gigiAssunto;
  // so' entra no fechamento com algo concreto na mao
  const jaTem = !!(P0.data || P0.pessoas);
  const nomeou = /pantanal|tijuc/.test(t);
  if (!pessoas && !data && !(fechar && assunto) && !(nomeou && jaTem)) return null;
  if (!assunto) return { texto: T.qual.replace('{d}', dataTxt || (P.pessoas + '')), whats: null };

  const txtP = P.pessoas ? T.pess.replace('{n}', P.pessoas) : null;
  if (!P.data && !P.pessoas) return { texto: T.falta_td, whats: null };
  if (!P.data)    return { texto: T.falta_d.replace('{p}', txtP), whats: null };
  if (!P.pessoas) return { texto: T.falta_p.replace('{d}', dataTxt), whats: null };

  const nome = GIGI_NOME[assunto][L];
  const linhas = [T.wa_ola, '', T.wa_quero + ' ' + nome, T.wa_data + ' ' + P.data, T.wa_pess + ' ' + P.pessoas];
  let texto;
  if (assunto === 'hospedagem') {
    texto = T.resumo_h.replace('{d}', dataTxt).replace('{p}', txtP);
  } else {
    const total = GIGI_PRECO[assunto] * P.pessoas;
    const sinal = total / 2;
    linhas.push(T.wa_total + ' R$' + total + ' (' + T.wa_sinal + ' R$' + sinal + ')');
    texto = T.resumo.replace('{nome}', nome).replace('{d}', dataTxt)
                    .replace('{p}', txtP).replace('{total}', 'R$' + total).replace('{sinal}', 'R$' + sinal);
  }
  const whats = 'https://wa.me/' + GIGI.whatsappNumber + '?text=' + encodeURIComponent(linhas.join('\n'));
  return { texto: texto, whats: whats, botao: T.botao };
}

window.gigiAsk = function(questionId) {
  window.medir('botao_gigi', { botao: String(questionId).slice(0, 40) });
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

  // guarda o assunto para o fechamento saber do que a conversa trata
  // o botao Passeios mostra os dois passeios, entao nao assume nenhum
  if (questionId === 'hospedagem') window.__gigiAssunto = 'hospedagem';

  // Respostas configuradas dos botões com suporte multi-idioma
  if (questionId === 'como_chegar') {
    userText = lang === 'en' ? "How to get there?" : lang === 'es' ? "¿Cómo llegar?" : lang === 'zh' ? "如何到达小岛？" : lang === 'fr' ? "Comment venir sur l'île ?" : "Como chegar na Ilha?";
    botReply = GIGI_RESP['como_chegar'][window.gigiIdiomaTexto ? window.gigiIdiomaTexto(lang, GIGI_RESP['como_chegar']) : lang] || GIGI_RESP['como_chegar'].pt;
  } 
  else if (questionId === 'onde_comer') {
    userText = lang === 'en' ? "Restaurants & Bars" : lang === 'es' ? "¿Dónde comer?" : lang === 'zh' ? "餐厅与酒吧" : lang === 'fr' ? "Où manger et boire ?" : "Onde comer e beber?";
    botReply = lang === 'en'
      ? "🍽️ <b>Restaurants:</b> Ocyá (Michelin ⭐), Laguna (pioneer since 2002), Deck Bar (pineapple shrimp 🍍), Cais Bar (open-bar snacks), Salomé al Mare, Maracujá da Ilha, Venne Gastronomia, Camarão da Barra.<br><br>🍺 <b>Bars:</b> AK Bar (best sunset 🌅), Briza da Gigóia (live samba), Bar Caiçara (cultural), Dona Capivara (lagoon view), Bar do Elson (best roasted chicken 🍗), Kauai Gastrolounge (kids area).<br><br>☕ <b>Cafés:</b> Cantinho do Café, Café Poesia."
      : lang === 'es'
      ? "🍽️ <b>Restaurantes:</b> Ocyá (Michelin ⭐), Laguna (pionero desde 2002), Deck Bar (camarón en piña 🍍), Cais Bar (rodízio con barra libre), Salomé al Mare, Maracujá da Ilha, Venne Gastronomia, Camarão da Barra.<br><br>🍺 <b>Bares:</b> AK Bar (mejor atardecer 🌅), Briza da Gigóia (samba en vivo), Bar Caiçara (cultural), Dona Capivara (vista laguna), Bar do Elson (mejor pollo 🍗), Kauai Gastrolounge (área kids)."
      : lang === 'zh'
      ? "🍽️ <b>餐厅：</b>欧希亚（米其林⭐）、拉古纳（2002年起）、甲板酒吧（菠萝虾🍍）、码头酒吧（含无限饮品）、萨洛梅、岛上百香果、文内、巴拉虾。<br><br>🍺 <b>酒吧：</b>AK酒吧（最佳日落🌅）、吉戈亚微风（现场桑巴）、海滨酒吧（文化）、多娜水豚（泻湖景观）、埃尔森酒吧（最佳烤鸡🍗）、考艾美食休闲吧（儿童区）。"
      : lang === 'fr'
      ? "🍽️ <b>Restaurants :</b> Ocyá (Michelin ⭐), Laguna (pionnier depuis 2002), Deck Bar (crevette à l'ananas 🍍), Cais Bar (buffet de snacks à volonté), Salomé al Mare, Maracujá da Ilha, Venne Gastronomia, Camarão da Barra.<br><br>🍺 <b>Bars :</b> AK Bar (meilleur coucher de soleil 🌅), Briza da Gigóia (samba en direct), Bar Caiçara (culturel), Dona Capivara (vue sur le lagon), Bar do Elson (meilleur poulet rôti 🍗), Kauai Gastrolounge (espace enfants).<br><br>☕ <b>Cafés :</b> Cantinho do Café, Café Poesia."
      : "🍽️ <b>Restaurantes:</b> Ocyá (Michelin ⭐), Laguna (desde 2002), Deck Bar (camarão no abacaxi 🍍), Cais Bar (rodízio com bebida livre), Salomé al Mare, Maracujá da Ilha, Venne Gastronomia, Camarão da Barra.<br><br>🍺 <b>Bares:</b> AK Bar (pôr do sol 🌅), Briza da Gigóia (samba ao vivo 🎶), Bar Caiçara (cultural), Dona Capivara (vista lagoa), Bar do Elson (melhor frango 🍗), Bar da Joana (comida caseira), Kauai Gastrolounge (área kids).<br><br>☕ <b>Cafés:</b> Cantinho do Café, Café Poesia.";
  }
  else if (questionId === 'hospedagem') {
    userText = lang === 'en' ? "Where to stay?" : lang === 'es' ? "¿Dónde dormir?" : lang === 'zh' ? "住宿选择" : lang === 'fr' ? "Où me loger ?" : "Onde me hospedar?";
    botReply = GIGI_RESP['hospedagem'][window.gigiIdiomaTexto ? window.gigiIdiomaTexto(lang, GIGI_RESP['hospedagem']) : lang] || GIGI_RESP['hospedagem'].pt;
  }
  else if (questionId === 'eventos') {
    userText = lang === 'en' ? "Events & Agenda" : lang === 'es' ? "Eventos del Momento" : lang === 'zh' ? "活动日程" : lang === 'fr' ? "Événements du moment" : "Eventos do Momento";
    // Eventos fixos (sempre verdadeiros) + agenda real, buscada da planilha logo apos renderizar.
    const fixos = {
      en: "🎉 <b>Regular events:</b> Feira Gigoiando (handicrafts &amp; food, weekends), Jazz &amp; Sunset (monthly), Gastronomy Festival (annual).",
      es: "🎉 <b>Eventos regulares:</b> Feira Gigoiando (artesanía y gastronomía, fines de semana), Jazz &amp; Sunset (mensual), Festival Gastronómico (anual).",
      zh: "🎉 <b>常规活动：</b>吉戈亚集市（手工艺品和美食，周末）、爵士与日落（每月）、美食节（每年）。",
      fr: "🎉 <b>Événements réguliers :</b> Feira Gigoiando (artisanat et gastronomie, le week-end), Jazz &amp; Sunset (mensuel), Festival gastronomique (annuel).",
      pt: "🎉 <b>Eventos fixos:</b> Feira Gigoiando (artesanato e gastronomia, fins de semana), Jazz &amp; Sunset (mensal), Festival Gastronômico (anual)."
    };
    const carregando = { en: "Checking the agenda…", es: "Consultando la agenda…", zh: "正在查询日程…", fr: "Je consulte l'agenda…", pt: "Consultando a agenda…" };
    const sunset = {
      en: "🌅 <b>Best sunset spots:</b> AK Bar, Boteco da Capivara and Maracujá da Ilha.",
      es: "🌅 <b>Mejores puntos de atardecer:</b> AK Bar, Boteco da Capivara y Maracujá da Ilha.",
      zh: "🌅 <b>最佳日落地点：</b>AK酒吧、Boteco da Capivara 和 Maracujá da Ilha。",
      fr: "🌅 <b>Meilleurs spots pour le coucher de soleil :</b> AK Bar, Boteco da Capivara et Maracujá da Ilha.",
      pt: "🌅 <b>Melhores pontos de pôr do sol:</b> AK Bar, Boteco da Capivara e Maracujá da Ilha."
    };
    const L = fixos[lang] ? lang : 'pt';
    botReply = fixos[L] + "<br><br><div id=\"gigiAgenda\">⏳ " + carregando[L] + "</div><br>" + sunset[L];
    window.__gigiPreencherAgenda = true;
  }
  else if (questionId === 'passeios') {
    userText = lang === 'en' ? "Tour Prices" : lang === 'es' ? "Precios de Paseos" : lang === 'zh' ? "游览价格" : lang === 'fr' ? "Comment fonctionnent les excursions ?" : "Como funcionam os passeios?";
    botReply = GIGI_RESP['passeios'][window.gigiIdiomaTexto ? window.gigiIdiomaTexto(lang, GIGI_RESP['passeios']) : lang] || GIGI_RESP['passeios'].pt;
  } 
  else if (questionId === 'whatsapp') {
    userText = lang === 'en' ? "Talk to Team (WhatsApp)" : lang === 'es' ? "Hablar con Equipo (WhatsApp)" : lang === 'zh' ? "通过 WhatsApp 联系团队" : lang === 'fr' ? "Parler à l'équipe (WhatsApp)" : "Falar com a equipe (WhatsApp)";
    botReply = lang === 'en' ? "Perfect! Fill in your details below so I can open your WhatsApp with the message organized:" : 
               lang === 'es' ? "¡Perfecto! Rellena tus datos abajo para abrir tu WhatsApp con el mensaje organizado:" : 
               lang === 'zh' ? "好的！请在下方填写您的信息，我会帮您打开 WhatsApp，并把留言整理好：" :
               lang === 'fr' ? "Parfait ! Remplissez vos coordonnées juste en dessous pour que j'ouvre WhatsApp avec votre message déjà prêt :" : "Perfeito! Preencha seus dados aqui embaixo rapidinho para eu abrir o seu WhatsApp já com a mensagem organizada:";
    showForm = true;
  }
  else if (questionId === 'encerrar') {
    userText = lang === 'en' ? "Message Sent!" : lang === 'es' ? "¡Mensaje Enviado!" : lang === 'zh' ? "消息已发送！" : lang === 'fr' ? "Message envoyé !" : "Mensagem Enviada!";
    botReply = lang === 'en' ? "All set! WhatsApp is open. I'll be here if you need anything else." : 
               lang === 'es' ? "¡Listo! WhatsApp está abierto. Estaré aquí si necesitas algo más." : 
               lang === 'zh' ? "搞定，WhatsApp 已经打开！如果还需要什么，我随时在这里。" :
               lang === 'fr' ? "Voilà, WhatsApp est ouvert ! Si vous avez besoin d'autre chose, je reste par ici." : "Prontinho, o WhatsApp foi aberto! Se precisar de mais alguma coisa, estarei por aqui.";
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
        <div class="gigi-avatar"><img src="/assets/gigi.png" alt="Gigi"></div>
        <div class="gigi-bubble">${botReply}</div>
      </div>
    `);

    if (window.__gigiPreencherAgenda) {
      window.__gigiPreencherAgenda = false;
      window.gigiPreencherAgenda(lang);
    }

    // Mostra o formulário do Whatsapp OU o botão de voltar
    if (showForm) {
      formDiv.style.display = 'block';
    } else if (questionId !== 'encerrar') {
      const btnSchedule = lang === 'en' ? "💬 Schedule on WhatsApp" : lang === 'es' ? "💬 Agendar en WhatsApp" : lang === 'zh' ? "💬 通过 WhatsApp 预约" : lang === 'fr' ? "💬 Réserver / écrire sur WhatsApp" : "💬 Agendar/Falar no WhatsApp";
      const btnBack = lang === 'en' ? "🔄 Back to options" : lang === 'es' ? "🔄 Volver a opciones" : lang === 'zh' ? "🔄 返回选项" : lang === 'fr' ? "🔄 Revenir aux options" : "🔄 Voltar às opções";

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
  // Rede de seguranca: se o observer nao disparar por qualquer motivo,
  // tudo aparece em 2,5s em vez de ficar invisivel.
  setTimeout(() => els.forEach(el => el.classList.add("is-in")), 2500);
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
    <div id="cookieBanner" role="region" aria-label="Cookies">
      <p>${t("cookie_txt")} <a href="${L('/politica-privacidade.html')}">${t("cookie_link")}</a></p>
      <button onclick="acceptCookies()" class="cookieBanner__ok">${t("cookie_btn")}</button>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', html);
}

window.acceptCookies = function() {
  localStorage.setItem("ilg_cookie_consent", "1");
  const banner = document.getElementById("cookieBanner");
  if (banner) banner.style.display = "none";
  // liberou a base da tela: agora cabe a sugestao de idioma
  setTimeout(function(){ try { window.sugerirIdioma(); } catch(e) {} }, 400);
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
    schemas: ["CollectionPage", "BreadcrumbList"]
  },
  "hospedagem": {
    title: "Hospedagem na Ilha da Gigóia | Pousadas e Casas — RJ",
    desc:  "Pousadas, hotéis e casas de temporada na Ilha da Gigóia. Onde se hospedar para acordar com vista para a lagoa e o Pantanal Carioca.",
    type:  "article",
    schemas: ["CollectionPage", "BreadcrumbList"]
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
    a: "Sim, há pousadas, pequenos hotéis e casas de temporada na ilha. É possível passar dias completos desfrutando de tudo que o Pantanal Carioca tem a oferecer."
  }
];

function setupSEO() {
  const head   = document.head;
  // Paginas de negocio ja trazem o schema certo escrito no HTML (data-negocio),
  // com o nome, o tipo e a trilha daquele estabelecimento. O schema generico
  // por secao que este bloco monta so' duplicaria - e com dados menos precisos.
  const temSchemaProprio = !!document.querySelector('script[type="application/ld+json"]:not(#seo-jsonld)');
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
  const schemas = (meta.schemas || ["TouristDestination"])
    .filter(s => !(temSchemaProprio && ["FoodEstablishment","LodgingBusiness","LocalBusiness",
        "CollectionPage","BreadcrumbList","WebSite","WebPage","TouristDestination",
        "TouristAttraction","Organization"].includes(s)));
  // Agora todas as paginas trazem o schema escrito no HTML. Este bloco so' continua
  // responsavel pelo FAQPage, montado a partir do FAQ visivel da propria pagina.
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
        "https://www.tiktok.com/@portaldagigoia",
        "https://www.youtube.com/@ilha.da.gigoia"
      ]
    });
  }

  // CollectionPage: a pagina reune varios estabelecimentos, ela propria nao e' um
  if (schemas.includes("CollectionPage")) {
    const itens = [...document.querySelectorAll('#pageCards .card, #homeCards .card')].map((c, n) => {
      const t = c.querySelector('.card__title'), l = c.querySelector('.card__link');
      if (!t || !l) return null;
      return { "@type": "ListItem", "position": n + 1, "name": t.textContent.trim(),
               "url": new URL(l.getAttribute('href'), location.origin).href };
    }).filter(Boolean);
    graphs.push(Object.assign({
      "@type": "CollectionPage", "@id": url + "#pagina",
      "name": title, "description": desc, "url": url,
      "isPartOf": { "@id": SEO_BASE.baseUrl + "/#website" },
      "about": { "@id": SEO_BASE.baseUrl + "/#ilha" }
    }, itens.length ? { "mainEntity": { "@type": "ItemList", "itemListElement": itens } } : {}));
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

  // FAQPage (home) — so' declara o que esta VISIVEL na pagina.
  // O Google exige que a pergunta e a resposta do schema apareçam para o
  // visitante; a lista fixa SEO_FAQ nao aparecia em lugar nenhum e ainda
  // ficava em portugues nas paginas /en /es /zh /fr. Agora o bloco e' montado
  // a partir do proprio HTML (#sobreIlha) e, sem ele, simplesmente nao existe.
  if (schemas.includes("FAQ")) {
    const cxs = document.querySelectorAll('#sobreIlha h3');
    const perguntas = [];
    cxs.forEach(h => {
      const resp = h.parentElement && h.parentElement.querySelector('p');
      const q = (h.textContent || '').trim();
      const a = resp ? (resp.textContent || '').trim() : '';
      if (q && a) perguntas.push({
        "@type": "Question",
        "name": q,
        "acceptedAnswer": { "@type": "Answer", "text": a }
      });
    });
    if (perguntas.length) graphs.push({ "@type": "FAQPage", "mainEntity": perguntas });
  }

  // Injeta o JSON-LD no <head> (remove o antigo se existir)
  const old = document.getElementById('seo-jsonld');
  if (old) old.remove();

  if (!graphs.length) return;   // nada a declarar: a pagina ja tem o schema dela
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'seo-jsonld';
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
  // manifest, theme-color, apple-touch-icon e mobile-fixes.css agora vem no HTML
  // de cada pagina; aqui fica so o registro do service worker.

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

// =========================================================
//   ANALYTICS — cole aqui o ID do GA4 (formato G-XXXXXXXXXX)
//   Enquanto estiver vazio, nada e' carregado.
// =========================================================
const GA4_ID = "G-XCW0LJGF7S";
// Confirma na tela que a marca de equipe pegou (ou saiu). Some sozinho em 5 segundos.
function avisoEquipe(ligado) {
  const mostra = function () {
    const d = document.createElement('div');
    d.textContent = ligado
      ? 'Este aparelho foi marcado como da equipe: suas visitas nao contam no Analytics.'
      : 'Marca de equipe removida: este aparelho volta a contar no Analytics.';
    d.setAttribute('role', 'status');
    d.style.cssText = 'position:fixed;left:16px;right:16px;bottom:16px;z-index:99999;' +
      'background:#1f2a24;color:#fff;padding:12px 16px;border-radius:10px;font:14px/1.4 sans-serif;' +
      'box-shadow:0 4px 16px rgba(0,0,0,.25);text-align:center';
    document.body.appendChild(d);
    setTimeout(function () { d.remove(); }, 5000);
  };
  if (document.body) mostra(); else document.addEventListener('DOMContentLoaded', mostra);
}
function setupAnalytics() {
  if (!GA4_ID) return;
  const s = document.createElement('script');
  s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){ dataLayer.push(arguments); };
  gtag('js', new Date());
  /* APARELHO DA EQUIPE NAO CONTA. Na analise do flyer de 23/10/2026 as visitas do Max,
     do Vinicius e do Claude conferindo o site se misturaram com as de quem leu o QR.
     Filtrar por IP nao serve: celular troca de IP o tempo todo. Entao a marca e' do
     APARELHO: abrir o site uma vez com ?equipe=1 grava a marca neste navegador, e
     ?equipe=0 tira. Com ela, todo evento sai com traffic_type=internal, que o filtro
     "Internal Traffic" do GA4 exclui dos relatorios. 25/10/2026. */
  let daEquipe = false;
  try {
    const q = new URLSearchParams(location.search).get('equipe');
    if (q === '1') localStorage.setItem('ilg_equipe', '1');
    if (q === '0') localStorage.removeItem('ilg_equipe');
    daEquipe = localStorage.getItem('ilg_equipe') === '1';
    if (q === '1' || q === '0') avisoEquipe(daEquipe);
  } catch (e) { /* sem localStorage (aba anonima): conta como visitante, que e' o seguro */ }
  // `set` antes do `config`: vale para o page_view e para todo evento que vier depois.
  if (daEquipe) gtag('set', { traffic_type: 'internal' });
  gtag('config', GA4_ID, daEquipe ? { traffic_type: 'internal' } : {});
  // Mede os cliques que viram conversa no WhatsApp, agora dizendo DE ONDE
  // vieram: sem isso nao da' para saber qual das 60 paginas gera reserva.
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href*="wa.me"]');
    if (a) window.medir('clique_whatsapp', { origem: 'link', link_url: a.href });
    /* LIGACAO. O telefone esta' no rodape das 315 paginas e nao era medido: o GA4 so'
       conta sozinho clique que sai para outro site (Instagram, mapa), e tel: nao sai.
       Quem liga e' conversa do mesmo jeito que quem chama no WhatsApp. 25/10/2026. */
    const t = e.target.closest('a[href^="tel:"]');
    if (t) window.medir('clique_telefone', { origem: 'link', link_url: t.getAttribute('href') });
  });

  /* TROCA DE IDIOMA.
     O site existe em cinco idiomas e nao havia um unico dado sobre isso: nem quais
     sao usados, nem quem troca, nem a partir de que pagina. Sem medir, a decisao de
     manter (ou nao) uma traducao vira palpite.
     So' `idioma_novo` vai aqui: o parametro base `idioma` viaja em todo evento e, neste
     instante, ainda e' o idioma ANTIGO — entao o par "de/para" sai de graca. Gringo que
     cai no portugues e troca pro ingles e' sinal de que a deteccao de idioma nao pegou.
     19/10/2026. */
  document.addEventListener('change', e => {
    const sel = e.target.closest('.lang-switcher');
    if (!sel) return;
    window.medir('troca_idioma', { idioma_novo: String(sel.value || '').slice(0, 8) });
  });
}

// =======================================================
// MEDICAO
// =======================================================
// Um so' lugar para mandar evento ao Analytics. Se o gtag nao existir
// (ID vazio, bloqueador de anuncio, rede fora), nao quebra nada: apenas
// nao mede. Toda chamada ja vai com a pagina e o idioma.
window.medir = function (evento, dados) {
  try {
    if (typeof gtag !== 'function') return;
    var base = {
      pagina: (location.pathname || '/').slice(0, 100),
      titulo_pagina: (document.title || '').slice(0, 100),
      idioma: window.currentLang || 'pt'
    };
    var d = dados || {};
    for (var k in d) if (Object.prototype.hasOwnProperty.call(d, k)) base[k] = d[k];
    gtag('event', evento, base);
  } catch (e) { /* medicao nunca pode atrapalhar o site */ }
};

// Texto livre do visitante pode conter telefone ou e-mail, e o Analytics
// nao aceita dado pessoal. Aqui tiro isso antes de enviar, e corto em 100
// caracteres, que e' o limite de um parametro do GA4.
window.limpaTextoParaMedicao = function (txt) {
  return String(txt || '')
    .replace(/\S+@\S+\.\S+/g, '[email]')
    // So' vira [numero] o que tem 9 digitos ou mais: telefone tem, uma data
    // como 26/09/2026 nao tem, e a data e' informacao util na pergunta.
    .replace(/[+(]?\d[\d\s().-]{6,}\d/g, function (trecho) {
      return trecho.replace(/\D/g, '').length >= 9 ? '[numero]' : trecho;
    })
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 100);
};

// INICIALIZAÇÃO PRINCIPAL DO SITE

// =======================================================
// SUGESTAO DE IDIOMA (nunca redirecionamento automatico)
// =======================================================
// O Google rastreia o site a partir dos EUA. Se a pagina redirecionasse
// sozinha pelo idioma do navegador ou pelo IP, o robo veria so' a versao
// em ingles e as outras quatro poderiam nunca ser indexadas. Por isso aqui
// e' apenas um convite: o visitante continua na pagina em que caiu, e so'
// muda de idioma se ele quiser. A escolha fica salva e a faixa nao volta.
window.sugerirIdioma = function () {
  var SUPORTADOS = ['pt', 'en', 'es', 'zh', 'fr'];
  var TXT = {
    en: { msg: 'This site is also available in English.', ver: 'View in English', fechar: 'Dismiss' },
    es: { msg: 'Este sitio también está disponible en español.', ver: 'Ver en español', fechar: 'Cerrar' },
    zh: { msg: '本网站也提供中文版本。', ver: '查看中文版', fechar: '关闭' },
    fr: { msg: 'Ce site est aussi disponible en français.', ver: 'Voir en français', fechar: 'Fermer' },
    pt: { msg: 'Este site também está disponível em português.', ver: 'Ver em português', fechar: 'Fechar' }
  };

  function guarda(chave, valor) { try { localStorage.setItem(chave, valor); } catch (e) {} }
  function le(chave) { try { return localStorage.getItem(chave); } catch (e) { return null; } }

  // Ja escolheu um idioma alguma vez, ou ja dispensou a faixa: nao insiste.
  if (le('ilha_lang') || le('ilha_lang_sugestao')) return;

  // O aviso de cookies ocupa a base da tela inteira, com z-index maior.
  // Duas faixas ao mesmo tempo se sobrepoem e a de baixo fica sem clique,
  // entao esta so' aparece depois que aquela sair (ver acceptCookies).
  var ck = document.getElementById('cookieBanner');
  if (ck && ck.style.display !== 'none') return;

  var tags = (navigator.languages && navigator.languages.length)
    ? navigator.languages : [navigator.language || ''];
  var alvo = '';
  for (var i = 0; i < tags.length; i++) {
    var base = String(tags[i]).toLowerCase().split('-')[0];
    if (SUPORTADOS.indexOf(base) !== -1) { alvo = base; break; }
  }
  var atual = window.currentLang || 'pt';
  if (!alvo || alvo === atual) return;

  var txt = TXT[alvo];
  var caixa = document.createElement('div');
  caixa.id = 'sugestaoIdioma';
  caixa.setAttribute('role', 'region');
  caixa.setAttribute('aria-label', txt.msg);
  caixa.style.cssText = [
    'position:fixed', 'left:16px', 'bottom:16px', 'z-index:9000',
    'max-width:min(330px, calc(100vw - 120px))',
    'background:#fff', 'border-radius:16px', 'padding:14px 16px',
    'box-shadow:0 10px 30px rgba(0,0,0,.18)',
    'font-family:inherit', 'font-size:14px', 'line-height:1.5', 'color:#333',
    'opacity:0', 'transform:translateY(10px)', 'transition:opacity .25s, transform .25s'
  ].join(';');
  caixa.innerHTML =
    '<div style="margin-bottom:10px;">' + txt.msg + '</div>' +
    '<div style="display:flex; gap:8px; align-items:center;">' +
      '<button type="button" id="sugIdiomaVer" style="flex:1; background:var(--green,#47b05a); color:#fff; border:none; border-radius:10px; padding:9px 12px; font-weight:800; font-size:13.5px; cursor:pointer; font-family:inherit;">' + txt.ver + '</button>' +
      '<button type="button" id="sugIdiomaNao" aria-label="' + txt.fechar + '" style="background:none; border:none; color:#888; font-size:20px; line-height:1; padding:4px 8px; cursor:pointer;">&times;</button>' +
    '</div>';
  document.body.appendChild(caixa);
  requestAnimationFrame(function () {
    caixa.style.opacity = '1';
    caixa.style.transform = 'translateY(0)';
  });

  function some() {
    caixa.style.opacity = '0';
    caixa.style.transform = 'translateY(10px)';
    setTimeout(function () { if (caixa.parentNode) caixa.parentNode.removeChild(caixa); }, 250);
  }
  document.getElementById('sugIdiomaNao').addEventListener('click', function () {
    guarda('ilha_lang_sugestao', 'dispensado');
    some();
  });
  document.getElementById('sugIdiomaVer').addEventListener('click', function () {
    guarda('ilha_lang_sugestao', 'aceito');
    if (typeof changeLanguage === 'function') changeLanguage(alvo);
  });
};

(function init(){
  setupSEO();
  setupPWA();
  setupAnalytics();
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
  setTimeout(function(){ try { window.sugerirIdioma(); } catch(e) {} }, 1200);
  setupCadastroModal(); 
  setupLightbox(); 
  
  setTimeout(setupClickableCards, 100); 
  
  requestAnimationFrame(() => document.body.classList.add("is-ready"));
  setupHeaderScroll();
  setupReveal();

  // O CÉREBRO DA TRADUÇÃO DINÂMICA
  document.querySelectorAll('[data-i18n]').forEach(elemento => {
    const chave = elemento.getAttribute('data-i18n');
    // O DICT agora guarda o texto direto (nao mais um objeto por idioma),
    // entao o teste certo e' pela existencia da chave, nao pelo valor.
    if (typeof DICT !== 'undefined' && chave in DICT) {
      elemento.innerHTML = t(chave);
    }
  });
})();
/* ── PREVISÃO DO TEMPO NA ILHA ──────────────────────────────────
   Fonte: Open-Meteo (gratuita, sem chave de API).
   Coordenada da Ilha da Gigóia: -23.0032 / -43.3106.
   Se a requisição falhar, o bloco #tempoIlha some e a página segue igual.
   Cache de 1 hora no navegador para não bater na API a cada visita. */
window.initPrevisao = function () {
  var el = document.getElementById('tempoIlha');
  if (!el) return;

  var LAT = -23.0032, LON = -43.3106;
  var CHAVE = 'gigoia_tempo_v1';
  var VALIDADE = 60 * 60 * 1000;
  var URL = 'https://api.open-meteo.com/v1/forecast?latitude=' + LAT + '&longitude=' + LON +
            '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max' +
            '&timezone=America%2FSao_Paulo&forecast_days=4';

  var LOCALES = { pt: 'pt-BR', en: 'en-US', es: 'es-ES', zh: 'zh-CN', fr: 'fr-FR' };

  var ICO = {
    sol: '<svg viewBox="0 0 24 24" fill="none" stroke="#f2a900" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.2" fill="#ffd45e" stroke="#f2a900"/><path d="M12 2.6v2M12 19.4v2M2.6 12h2M19.4 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4"/></svg>',
    solnuvem: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><circle cx="8.5" cy="8" r="3.2" fill="#ffd45e" stroke="#f2a900"/><path d="M8.5 1.8v1.6M2.7 8h1.6M4.4 3.9l1.1 1.1M12.6 3.9l-1.1 1.1" stroke="#f2a900"/><path d="M8.6 20.5h9a3.4 3.4 0 0 0 .3-6.8 4.6 4.6 0 0 0-8.8-1 3.4 3.4 0 0 0-.5 7.8z" fill="#e8eef3" stroke="#9fb3c2"/></svg>',
    nuvem: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M7.2 19.5h10a3.7 3.7 0 0 0 .3-7.4 5 5 0 0 0-9.6-1.1 3.7 3.7 0 0 0-.7 8.5z" fill="#e8eef3" stroke="#9fb3c2"/></svg>',
    garoa: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M7.2 15.5h10a3.7 3.7 0 0 0 .3-7.4 5 5 0 0 0-9.6-1.1 3.7 3.7 0 0 0-.7 8.5z" fill="#eef2f5" stroke="#a8bac7"/><path d="M10 18.4l-.6 1.6M14.4 18.4l-.6 1.6" stroke="#7aa8ca"/></svg>',
    chuva: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M7.2 15.5h10a3.7 3.7 0 0 0 .3-7.4 5 5 0 0 0-9.6-1.1 3.7 3.7 0 0 0-.7 8.5z" fill="#e8eef3" stroke="#9fb3c2"/><path d="M9 18.2l-1 2.6M13 18.2l-1 2.6M17 18.2l-1 2.6" stroke="#4a86b8"/></svg>',
    tempestade: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.2 14.8h10a3.7 3.7 0 0 0 .3-7.4 5 5 0 0 0-9.6-1.1 3.7 3.7 0 0 0-.7 8.5z" fill="#dfe6ec" stroke="#8fa3b3"/><path d="M13.2 16.4l-3.1 4.2h2.5l-.9 3.2" stroke="#f2a900" fill="none"/></svg>'
  };
  var GOTA = '<svg viewBox="0 0 24 24" fill="#4a86b8"><path d="M12 2.7s6 7.2 6 11a6 6 0 1 1-12 0c0-3.8 6-11 6-11z"/></svg>';

  function tipo(c) {
    if (c === 0) return ['sol', 'tempo_sol', 'Sol'];
    if (c === 1 || c === 2) return ['solnuvem', 'tempo_sol_nuvem', 'Sol entre nuvens'];
    if (c === 3 || c === 45 || c === 48) return ['nuvem', 'tempo_nublado', 'Nublado'];
    if (c >= 95) return ['tempestade', 'tempo_tempestade', 'Tempestade'];
    if (c >= 80) return ['chuva', 'tempo_chuva', 'Pancadas de chuva'];
    if (c >= 61) return ['chuva', 'tempo_chuva', 'Chuva'];
    if (c >= 51) return ['garoa', 'tempo_garoa', 'Garoa'];
    return ['nuvem', 'tempo_nublado', 'Nublado'];
  }

  function trad(chave, padrao) {
    try { if (typeof t === 'function') { var v = t(chave); if (v && v !== chave) return v; } } catch (e) {}
    return padrao;
  }

  function desenha(d) {
    var loc = LOCALES[window.currentLang || 'pt'] || 'pt-BR';
    var html = '';
    for (var i = 0; i < d.time.length && i < 4; i++) {
      var data = new Date(d.time[i] + 'T12:00:00');
      var dow;
      if (i === 0) {
        dow = trad('tempo_hoje', 'Hoje');
      } else {
        try { dow = new Intl.DateTimeFormat(loc, { weekday: 'short' }).format(data).replace('.', ''); }
        catch (e) { dow = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'][data.getDay()]; }
      }
      var tp = tipo(d.weather_code[i]);
      var chuva = d.precipitation_probability_max ? d.precipitation_probability_max[i] : null;
      var cond = trad(tp[1], tp[2]);
      var max = Math.round(d.temperature_2m_max[i]), min = Math.round(d.temperature_2m_min[i]);
      var rotulo = dow + ', ' + cond + ', ' + max + ' a ' + min + ' graus' +
                   (chuva !== null ? ', ' + chuva + '% de chance de chuva' : '');
      html += '<div class="tempo__dia' + (i === 0 ? ' tempo__dia--hoje' : '') + '"' +
                ' title="' + cond + '" aria-label="' + rotulo + '">' +
                '<div class="tempo__dow">' + dow + '</div>' +
                '<div class="tempo__linha">' + ICO[tp[0]] +
                  '<span class="tempo__temps">' + max + '&deg;' +
                  ' <span>' + min + '&deg;</span></span></div>' +
                (chuva !== null && chuva >= 20
                  ? '<span class="tempo__chuva">' + GOTA + chuva + '%</span>' : '') +
              '</div>';
    }
    el.querySelector('.tempo__dias').innerHTML = html;
    el.style.display = '';
  }

  function cai() { el.style.display = 'none'; }

  try {
    var bruto = localStorage.getItem(CHAVE);
    if (bruto) {
      var g = JSON.parse(bruto);
      if (g && g.t && (Date.now() - g.t) < VALIDADE && g.d) { desenha(g.d); return; }
    }
  } catch (e) {}

  fetch(URL)
    .then(function (r) { if (!r.ok) throw new Error('http ' + r.status); return r.json(); })
    .then(function (j) {
      if (!j || !j.daily || !j.daily.time || !j.daily.time.length) throw new Error('sem dados');
      desenha(j.daily);
      try { localStorage.setItem(CHAVE, JSON.stringify({ t: Date.now(), d: j.daily })); } catch (e) {}
    })
    .catch(cai);
};

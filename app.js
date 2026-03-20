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
      { title: t("page_comer_c1_t"), desc: t("page_comer_c1_d"), linkLabel: t("btn_ver_detalhes"), href:"restaurantes.html", img:"assets/lanches/card-comer.jpg", icon:"fork", badge: t("badge_gastronomia") },
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
  if(box) { box.style.display = "flex"; localStorage.setItem("ilg_gigi_open_v1", "1"); }
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
  if (name === "fork") return `<svg ${common}><path d="M8 2c.6 0 1 .4 1 1v7c0 1.7-1.3 3-3 3v8c0 .6-.4 1-1 1s-1-.4-1-1v-8c-1.7 0-3-1.3-3-3V3c0-.6.4-1 1-1s1 .4 1 1v4h1V3c0-.6.4-1 1-1s1 .4 1 1v4h1V3c0-.6.4-1 1-1s1 .4 1 1v4h1V3c0-.6.4-1 1-1Zm12 0c.6 0 1 .4 1 1v9c0 1.9-1.3 3.4-3 3.9V21c0 .6-.4 1-1 1s-1-.4-1-1V3c0-.6.4-1 1-1 2.2 0 4 1.8 4 4v6c0 .6-.4 1-1 1s-1-.4-1-1V6c0-.8-.4-1.5-1-1.9V14h.2c.9-.3 1.8-1.1 1.8-2.2V3c0-.6.4-1 1-1Z"/></svg>`;
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
  
  // SOLUÇÃO: Garante que a variável exista para não quebrar o script no HTML abaixo
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'pt';
  
  if (header) {
    header.innerHTML = `
      <div class="container header__inner">
        <a class="brand" href="index.html">
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
            <li><a href="index.html" data-i18n="nav_inicio">Início</a></li>
            <li><a href="a-ilha.html">${t("nav_ilha")}</a></li>
            <li><a href="passeios-rotas.html">${t("nav_passeios")}</a></li>
            <li><a href="comer-beber.html">${t("nav_comer")}</a></li>
            <li><a href="hospedagem.html">${t("nav_hospedagem")}</a></li>
          </ul>
        </div>
        
        <div class="footer__col">
          <h3 data-i18n="footer_serv_t">Atendimento</h3>
          <ul>
            <li><a href="#" onclick="openGigiChat(); return false;">${t("gigi_fab")}</a></li>
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

function mountGigiWidget() {
  const root = document.getElementById("gigiWidgetRoot");
  if (!root) return;
  const isOpen = localStorage.getItem("ilg_gigi_open_v1") === "1";

  root.innerHTML = `
    <div class="gigiFab">
      <button class="gigiFab__btn" id="gigiFabBtn" type="button" onclick="openGigiChat()">
        <span class="gigiIcon">💬</span> <span>${t("gigi_fab")}</span>
      </button>
    </div>
    <div class="gigiBox" id="gigiBox" style="display:${isOpen ? "flex" : "none"}">
      <div class="gigiBox__top">
        <div class="gigiBox__title"><strong>Gigi</strong><small>Portal Ilha da Gigóia</small></div>
        <button class="gigiBox__close" onclick="document.getElementById('gigiBox').style.display='none'; localStorage.setItem('ilg_gigi_open_v1','0')">✕</button>
      </div>
      <div class="gigiBox__body">
        <div class="gigiCard">
          <div class="gigiCard__img" id="gigiImgBox"><img src="assets/gigi.png" alt="Gigi" style="width:100%;height:100%;object-fit:cover;border-radius:18px"/></div>
          <div class="gigiCard__text"><strong>${t("gigi_hello")}</strong><small>${t("gigi_sub")}</small></div>
        </div>
        <form class="gigiForm" id="gigiForm">
          <div><label>${t("gigi_lbl_name")}</label><input id="gigiName" type="text" placeholder="Maria" required /></div>
          <div><label>${t("gigi_lbl_phone")}</label><input id="gigiPhone" type="tel" placeholder="+55 21 99999-9999" required /></div>
          <div><label>${t("gigi_lbl_msg")}</label><textarea id="gigiMessage" placeholder="..." required></textarea></div>
          <button class="gigiSend" type="submit">${t("gigi_btn")}</button>
          <small style="color:rgba(0,0,0,.55);font-weight:800">${t("gigi_note")}</small>
        </form>
      </div>
    </div>
  `;

  const form = document.getElementById("gigiForm");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("gigiName")?.value || "";
    const phone = document.getElementById("gigiPhone")?.value || "";
    const message = document.getElementById("gigiMessage")?.value || "";
    if (!name || !phone || !message) return;
    const text = `Olá! Quero falar com a Gigi (Portal Ilha da Gigóia).\n\nNome: ${name}\nTelefone: ${phone}\nMensagem:\n${message}`;
    window.open(`https://wa.me/${GIGI.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
    form.reset();
  });
}

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

// INICIALIZAÇÃO PRINCIPAL DO SITE
(function init(){
  setupProgress();
  mountHeaderFooter();
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
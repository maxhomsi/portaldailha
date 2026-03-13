/* =========================================================
   SISTEMA BASE E TEXTOS (Apenas PT-BR no momento)
   WhatsApp: 5521993802618 | E-mail: Ilhadagigoiaoficial@gmail.com
   ========================================================= */
const currentLang = localStorage.getItem('ilha_lang') || 'pt';

function changeLanguage(lang) {
  localStorage.setItem('ilha_lang', lang);
  location.reload();
}

/* DICIONÁRIO ENXUTO - Apenas Português e Placeholder do Capi */
const DICT = {
  nav_ilha: { pt: "A Ilha" },
  nav_passeios: { pt: "Passeios & Rotas" },
  nav_comer: { pt: "Comer & Beber" },
  nav_hospedagem: { pt: "Hospedagem" },
  nav_fale: { pt: "Fale Conosco" },
  btn_passeios: { pt: "Ver Passeios" },
  btn_conheca: { pt: "Conheça a Ilha" },
  footer_text: { pt: "Portal Ilha da Gigóia — Termos • Privacidade" },

  hero_pill: { pt: "Portal Oficial de Turismo" },
  hero_title_a: { pt: "Descubra o Paraíso Tropical" },
  hero_title_b: { pt: "da Ilha da Gigóia" },
  hero_sub: { pt: "Explore praias, passeios de barco, natureza exuberante e experiências autênticas a apenas minutos do Rio de Janeiro" },
  hero_check: { pt: "Informações oficiais e atualizadas" },
  sect_espera_title: { pt: "O Que Te Espera na Ilha" },
  sect_espera_sub: { pt: "Da natureza exuberante aos passeios de barco, cada momento é uma nova descoberta" },

  capi_tag: { pt: "Capi, seu guia" },
  tip_title: { pt: "Dica do Capi:" },
  tip_placeholder: { pt: "[PLACEHOLDER] As dicas do Capi voltarão no final do projeto..." },
  
  hm_c1_t: { pt: "Passeios de Barco" },
  hm_c1_d: { pt: "Navegue pelas águas calmas e descubra paisagens deslumbrantes" },
  hm_c1_l: { pt: "Ver roteiros" },
  hm_c2_t: { pt: "Comer & Beber" },
  hm_c2_d: { pt: "Saboreie frutos do mar frescos e pratos da culinária carioca" },
  hm_c2_l: { pt: "Explorar restaurantes" },
  hm_c3_t: { pt: "Natureza & Fauna" },
  hm_c3_d: { pt: "Explore trilhas, observe aves e conecte-se com a natureza" },
  hm_c3_l: { pt: "Descobrir mais" },
  hm_c4_t: { pt: "Hospedagem" },
  hm_c4_d: { pt: "Encontre o lugar perfeito para relaxar e aproveitar a ilha" },
  hm_c4_l: { pt: "Ver opções" },

  gigi_fab: { pt: "Fale com a Gigi" },
  gigi_hello: { pt: "Olá, me chamo Gigi!" },
  gigi_sub: { pt: "Me envie uma mensagem e eu te respondo direto no WhatsApp!" },
  gigi_lbl_name: { pt: "Seu nome *" },
  gigi_lbl_phone: { pt: "Seu telefone *" },
  gigi_lbl_msg: { pt: "Mensagem *" },
  gigi_btn: { pt: "Enviar" },
  gigi_note: { pt: "Ao enviar, abriremos o WhatsApp com sua mensagem pronta." }
};

const t = (key) => DICT[key] ? (DICT[key][currentLang] || DICT[key].pt) : key;

/* =========================================================
   DADOS DOS CARDS E PÁGINAS
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
    { title:t("hm_c1_t"), desc:t("hm_c1_d"), linkLabel:t("hm_c1_l"), href:"passeios-rotas.html", img:"assets/card-passeios.jpg", icon:"boat", badge:"⭐ Mais Procurado" },
    { title:t("hm_c2_t"), desc:t("hm_c2_d"), linkLabel:t("hm_c2_l"), href:"comer-beber.html", img:"assets/card-comer.jpg", icon:"fork", badge:"🍤 Gastronomia" },
    { title:t("hm_c3_t"), desc:t("hm_c3_d"), linkLabel:t("hm_c3_l"), href:"a-ilha.html", img:"assets/card-natureza.jpg", icon:"leaf", badge:"🔭 Observação" },
    { title:t("hm_c4_t"), desc:t("hm_c4_d"), linkLabel:t("hm_c4_l"), href:"hospedagem.html", img:"assets/card-hospedagem.jpg", icon:"bed", badge:"🌅 Para Relaxar" }
  ],
  pages: {
    "a-ilha": [
      { title:"Como chegar", desc:"Acesso rápido a partir do Rio. Dicas de transporte e horários.", linkLabel:"Ver detalhes", href:"como-chegar.html", img:"assets/comochegar.jpg", icon:"boat" },
      { title:"História & Cultura", desc:"Tradições locais, ambiente tranquilo e charme natural.", linkLabel:"Ler mais", href:"historia-cultura.html", img:"assets/historia.jpg", icon:"leaf" },
      { title:"Boas práticas", desc:"Recomendações para curtir com respeito à natureza e aos moradores.", linkLabel:"Conferir", href:"boas-praticas.html", img:"assets/boaspraticas.jpg", icon:"bed" },
      { title:"Melhor época", desc:"Clima, horários e dicas para aproveitar o dia inteiro.", linkLabel:"Ver detalhes", href:"melhor-epoca.html", img:"assets/melhorepoca.jpg", icon:"fork" }
    ],
    "passeios-rotas": [
      { title:"Ilhas Tijucas", desc:"Passeio de barco até o arquipélago. Águas cristalinas e fotos incríveis.", linkLabel:"Ver roteiro", href:"ilhas-tijucas.html", img:"assets/ilhastijucas.jpg", icon:"boat", badge:"🌊 Mergulho" },
      { title:"Pantanal Carioca", desc:"Explore a rica biodiversidade da lagoa e o safári urbano.", linkLabel:"Ver roteiro", href:"pantanal-carioca.html", img:"assets/pantanalcarioca.jpg", icon:"leaf", badge:"🐊 Safári" },
      { title:"Reserva", desc:"Navegue pelos canais até chegar à bela e preservada Praia da Reserva.", linkLabel:"Ver roteiro", href:"reserva.html", img:"assets/reserva.jpg", icon:"boat", badge:"🏖️ Praia" },
      { title:"Jet-Ski", desc:"Aventura e adrenalina explorando as lagoas no seu próprio ritmo.", linkLabel:"Ver opções", href:"jet-ski.html", img:"assets/jetski.jpg", icon:"boat", badge:"⚡ Adrenalina" },
      { title:"Pacotes Especiais", desc:"Monte seu roteiro ideal combinando passeio de barco, almoço e mais.", linkLabel:"Ver pacotes", href:"pacotes-especiais.html", img:"assets/experiencia.jpg", icon:"fork", badge:"🎁 Ofertas" }
    ],
    "comer-beber": [
      { title:"Restaurantes da Ilha", desc:"Pratos de frutos do mar, carnes e culinária variada à beira da lagoa.", linkLabel:"Ver detalhes", href:"restaurantes.html", img:"assets/card-comer.jpg", icon:"fork", badge:"🍤 Gastronomia" },
      { title:"Bares e Drinks", desc:"Cerveja gelada, caipirinhas e o pôr do sol mais bonito da região.", linkLabel:"Ver detalhes", href:"bares-drinks.html", img:"assets/bar&DRINK.jpg", icon:"boat", badge:"🍹 Relax" },
      { title:"Café da Manhã e Lanches", desc:"Comece o dia com tranquilidade ou faça uma pausa para recarregar.", linkLabel:"Ver opções", href:"cafe-lanches.html", img:"assets/cafedamanha.png", icon:"leaf", badge:"☕ Bom dia" },
      { title:"Eventos e Experiências", desc:"Feirinhas, música ao vivo e espaços para celebrações inesquecíveis.", linkLabel:"Conferir", href:"eventos-experiencias.html", img:"assets/drinks.jpg", icon:"fork", badge:"🎵 Ao Vivo" }
    ],
    "hospedagem": [
      { title:"Hotéis e Pousadas", desc:"Conforto e descanso com vista para a lagoa.", linkLabel:"Ver detalhes", href:"hoteis-pousadas.html", img:"assets/card-hospedagem.jpg", icon:"bed" },
      { title:"Airbnb e Temporada", desc:"Privacidade e liberdade para grupos e famílias.", linkLabel:"Ver opções", href:"airbnb-temporada.html", img:"assets/airbnb.jpg", icon:"bed" },
      { title:"Espaços para Eventos", desc:"Cenários memoráveis para sua celebração.", linkLabel:"Conferir", href:"espacos-eventos.html", img:"assets/eventos.jpg", icon:"fork", badge:"🎉 Celebre" },
      { title:"Experiência Completa", desc:"Passeio, gastronomia e natureza em um único dia.", linkLabel:"Agendar", href:"experiencia-completa.html", img:"assets/experiencia.jpg", icon:"boat", badge:"🌅 Roteiro" }
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
        <a class="card__link" href="${c.href}">${c.linkLabel || 'Ver detalhes'} <span>→</span></a>
      </div>
    </article>
  `;
}

function mountHeaderFooter() {
  const header = document.getElementById("siteHeader");
  const footer = document.getElementById("siteFooter");
  
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
          <a class="btn btn--green" href="${SITE.ctas.header.href}">${SITE.ctas.header.label}</a>
          <button class="burger" id="burger">☰</button>
        </div>
      </div>
      <div class="mobileNav" id="mobileNav" style="display:none">
        <div class="container mobileNav__inner">
          ${SITE.nav.map(i => `<a data-navlink href="${i.href}">${i.label}</a>`).join("")}
          <a class="btn btn--green" style="justify-content:center" href="${SITE.ctas.header.href}">${SITE.ctas.header.label}</a>
        </div>
      </div>
    `;
  }

  if (footer) {
    footer.innerHTML = `
      <div class="container footer-content">
        <div class="footer-links">${t("footer_text")}</div>
        ${socialHtml}
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

  const tipText = document.getElementById("tipText");
  if (tipText) tipText.innerHTML = " " + t("tip_placeholder");

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

/* =========================================================
   NOVO: WIDGET DE CADASTRO DE RESTAURANTES (AJAX MODAL)
   ========================================================= */
function setupCadastroModal() {
  const currentUrl = location.href;
  // O botão só vai aparecer nestas 4 páginas específicas
  const showButton = ['restaurantes', 'bares-drinks', 'cafe-lanches', 'eventos-experiencias'].some(page => currentUrl.includes(page));
  
  if (!showButton) return;

  const html = `
    <div class="side-badge" onclick="openCadastroModal()">
      Cadastre seu<br>Restaurante<br>aqui!
    </div>

    <div class="modal-overlay" id="cadastroModal" onclick="closeCadastroModal(event)">
      <div class="modal-content" onclick="event.stopPropagation()">
        <button class="modal-close" onclick="closeCadastroModal()">×</button>
        <h2 style="margin-top:0; color:var(--green-dark); font-weight:900;">Fale Conosco</h2>
        <p style="color:var(--muted); margin-bottom:24px; font-weight:600;">Preencha os dados abaixo para solicitar um orçamento e cadastrar o seu estabelecimento no Portal.</p>
        
        <form id="ajaxCadastroForm" class="gigiForm">
          <div>
            <label>Nome do Estabelecimento</label>
            <input type="text" placeholder="Ex: Boteco da Ilha" required />
          </div>
          <div>
            <label>Nome do Responsável</label>
            <input type="text" placeholder="Seu nome completo" required />
          </div>
          <div>
            <label>Telefone / WhatsApp</label>
            <input type="tel" placeholder="(21) 99999-9999" required />
          </div>
          <div>
            <label>Mensagem</label>
            <textarea rows="3" placeholder="Gostaria de saber os valores para..." required></textarea>
          </div>
          <button type="submit" class="btn btn--green" style="width:100%; margin-top:10px; padding:15px; font-size:16px;" id="ajaxSubmitBtn">Enviar Solicitação</button>
        </form>

        <div id="ajaxSuccess" style="display:none; text-align:center; padding:40px 20px;">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="var(--green)" style="margin-bottom:20px; display:inline-block;">
            <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm-1.2 17.3l-4.8-4.8 1.4-1.4 3.4 3.4 7.6-7.6 1.4 1.4-9 9z"/>
          </svg>
          <h3 style="margin:0 0 10px; color:var(--text); font-weight:900; font-size:22px;">Mensagem Enviada!</h3>
          <p style="color:var(--muted); font-size:16px; font-weight:600;">Nossa equipe entrará em contato em breve com todas as informações.</p>
          <button class="btn" style="margin-top:20px; background:#eee; color:#333; width:100%;" onclick="closeCadastroModal()">Fechar</button>
        </div>

      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', html);

  // Lógica do AJAX (Simulado)
  const form = document.getElementById('ajaxCadastroForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.getElementById('ajaxSubmitBtn');
    btn.innerText = "Enviando aguarde...";
    btn.style.opacity = "0.7";
    btn.style.pointerEvents = "none";
    
    // Simula o tempo de envio de um servidor (1.5 segundos) e mostra o sucesso
    setTimeout(() => {
      form.style.display = 'none';
      document.getElementById('ajaxSuccess').style.display = 'block';
    }, 1500);
  });
}

window.openCadastroModal = function() {
  const m = document.getElementById('cadastroModal');
  m.style.display = 'flex';
  void m.offsetWidth; // Força o navegador a entender o display:flex antes de animar a opacidade
  m.classList.add('is-active');
};

window.closeCadastroModal = function(e) {
  const m = document.getElementById('cadastroModal');
  m.classList.remove('is-active');
  setTimeout(() => { m.style.display = 'none'; }, 300); // Espera a animação terminar para sumir com o HTML
};

/* =========================================================
   FUNÇÕES GERAIS DE SCROLL E INICIALIZAÇÃO
   ========================================================= */
function setupReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || els.length === 0) { els.forEach(el => el.classList.add("is-in")); return; }
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-in"); observer.unobserve(e.target); } });
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

(function init(){
  setupProgress();
  mountHeaderFooter();
  const page = document.body.getAttribute("data-page");

  if (page === "home") mountHome();
  if (page && SITE.pages[page]) mountPageCards(page);

  mountGigiWidget();
  setupCadastroModal(); // Inicia o botão lateral de cadastro
  
  requestAnimationFrame(() => document.body.classList.add("is-ready"));
  setupHeaderScroll();
  setupReveal();
})();
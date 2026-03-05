/* =========================================================
   DADOS CENTRALIZADOS DO SITE
   - Edite aqui textos, links e imagens
   ========================================================= */
const SITE = {
  brand: {
    logo: "assets/logo.png",
    nameSmall: "PORTAL",
    nameMainA: "Ilha da",
    nameMainB: "Gigóia",
  },

  /* Links do menu */
  nav: [
    { href: "a-ilha.html", label: "A Ilha" },
    { href: "passeios-rotas.html", label: "Passeios & Rotas" },
    { href: "comer-beber.html", label: "Comer & Beber" },
    { href: "hospedagem.html", label: "Hospedagem" },
    { href: "o-que-fazer.html", label: "O que fazer" },
  ],

  /* Botões do site */
  ctas: {
    header: { href: "planeje.html", label: "Planeje sua Viagem" },
    heroPrimary: { href: "planeje.html", label: "Planejar Minha Viagem" },
    heroSecondary: { href: "a-ilha.html", label: "Conheça a Ilha" },
  },

  /* Conteúdo do Hero */
  hero: {
    bg: "assets/hero.jpg",
    pill: "Portal Oficial de Turismo",
    titleA: "Descubra o Paraíso Tropical",
    titleB: "da Ilha da Gigóia",
    subtitle: "",
  },

  /* Conteúdo do bloco “Capi” */
  tip: {
    capiImg: "assets/capi.png",
    capiTag: "Capi, seu guia",
    title: "Dica da Capi:",
    text:
      "Comece pelo passeio de barco pela manhã quando as águas estão mais calmas e a vida selvagem está ativa!",
  },

  /* Cards da Home */
  homeCards: [
    { title:"Passeios de Barco", desc:"Navegue pelas águas calmas e descubra paisagens deslumbrantes", linkLabel:"Ver roteiros", href:"passeios-rotas.html", img:"assets/card-passeios.jpg", icon:"boat" },
    { title:"Comer & Beber", desc:"Saboreie frutos do mar frescos e pratos da culinária carioca", linkLabel:"Explorar restaurantes", href:"comer-beber.html", img:"assets/card-comer.jpg", icon:"fork" },
    { title:"Natureza & Fauna", desc:"Explore trilhas, observe aves e conecte-se com a natureza", linkLabel:"Descobrir mais", href:"o-que-fazer.html#natureza", img:"assets/card-natureza.jpg", icon:"leaf" },
    { title:"Hospedagem", desc:"Encontre o lugar perfeito para relaxar e aproveitar a ilha", linkLabel:"Ver opções", href:"hospedagem.html", img:"assets/card-hospedagem.jpg", icon:"bed" },
  ],

  /* Cards das páginas internas */
  pages: {
    "a-ilha": [
      { title:"Como chegar", desc:"Acesso rápido a partir do Rio. Dicas de transporte e horários.", linkLabel:"Ver detalhes", href:"planeje.html", img:"assets/card-passeios.jpg", icon:"boat" },
      { title:"História & Cultura", desc:"Tradições locais, ambiente tranquilo e charme natural.", linkLabel:"Ler mais", href:"o-que-fazer.html", img:"assets/card-natureza.jpg", icon:"leaf" },
      { title:"Boas práticas", desc:"Recomendações para curtir com respeito à natureza e aos moradores.", linkLabel:"Conferir", href:"o-que-fazer.html", img:"assets/card-hospedagem.jpg", icon:"bed" },
      { title:"Melhor época", desc:"Clima, horários e dicas para aproveitar o dia inteiro.", linkLabel:"Planejar", href:"planeje.html", img:"assets/card-comer.jpg", icon:"fork" },
    ],
    "passeios-rotas": [
      { title:"Roteiro clássico de barco", desc:"Passeio leve, paisagens e paradas para fotos.", linkLabel:"Ver roteiro", href:"planeje.html", img:"assets/card-passeios.jpg", icon:"boat" },
      { title:"Manhã perfeita", desc:"Água mais calma e mais chance de ver animais.", linkLabel:"Dicas", href:"index.html", img:"assets/card-natureza.jpg", icon:"leaf" },
      { title:"Pontos instagramáveis", desc:"Lugares com luz bonita e ângulos incríveis.", linkLabel:"Descobrir", href:"o-que-fazer.html", img:"assets/card-comer.jpg", icon:"fork" },
      { title:"O que levar", desc:"Protetor, água, chapéu e itens essenciais.", linkLabel:"Checklist", href:"planeje.html", img:"assets/card-hospedagem.jpg", icon:"bed" },
    ],
    "comer-beber": [
      { title:"Frutos do mar", desc:"Os clássicos que você precisa experimentar.", linkLabel:"Ver opções", href:"planeje.html", img:"assets/card-comer.jpg", icon:"fork" },
      { title:"Bares & pôr do sol", desc:"Clima perfeito pra relaxar no fim do dia.", linkLabel:"Sugestões", href:"o-que-fazer.html", img:"assets/card-passeios.jpg", icon:"boat" },
      { title:"Café e lanches", desc:"Paradas rápidas durante o passeio.", linkLabel:"Dicas", href:"planeje.html", img:"assets/card-natureza.jpg", icon:"leaf" },
      { title:"Para famílias", desc:"Locais tranquilos e com boas opções.", linkLabel:"Ver", href:"planeje.html", img:"assets/card-hospedagem.jpg", icon:"bed" },
    ],
    "hospedagem": [
      { title:"Pousadas aconchegantes", desc:"Opções para descansar e aproveitar a ilha.", linkLabel:"Ver opções", href:"planeje.html", img:"assets/card-hospedagem.jpg", icon:"bed" },
      { title:"Melhor localização", desc:"Dicas para ficar perto do que você quer fazer.", linkLabel:"Guia", href:"o-que-fazer.html", img:"assets/card-natureza.jpg", icon:"leaf" },
      { title:"Viagem romântica", desc:"Sugestões para casal e momentos especiais.", linkLabel:"Roteiro", href:"planeje.html", img:"assets/card-comer.jpg", icon:"fork" },
      { title:"Custo-benefício", desc:"Como equilibrar conforto e preço.", linkLabel:"Planejar", href:"planeje.html", img:"assets/card-passeios.jpg", icon:"boat" },
    ],
    "o-que-fazer": [
      { title:"Passeios de barco", desc:"O clássico imperdível para primeiro dia.", linkLabel:"Ver rotas", href:"passeios-rotas.html", img:"assets/card-passeios.jpg", icon:"boat" },
      { title:"Comer bem", desc:"Experiências gastronômicas locais.", linkLabel:"Ver opções", href:"comer-beber.html", img:"assets/card-comer.jpg", icon:"fork" },
      { title:"Contato com a natureza", desc:"Trilhas e observação de fauna.", linkLabel:"Ver seção", href:"o-que-fazer.html#natureza", img:"assets/card-natureza.jpg", icon:"leaf" },
      { title:"Onde ficar", desc:"Dicas rápidas de hospedagem.", linkLabel:"Ver", href:"hospedagem.html", img:"assets/card-hospedagem.jpg", icon:"bed" },
    ],
  },

  /* Cards extras do #natureza */
  naturezaCards: [
    { title:"Trilhas leves", desc:"Caminhadas curtas e paisagens lindas.", linkLabel:"Ver dicas", href:"planeje.html", img:"assets/card-natureza.jpg", icon:"leaf" },
    { title:"Observação de aves", desc:"Melhor horário e onde procurar.", linkLabel:"Descobrir", href:"planeje.html", img:"assets/card-passeios.jpg", icon:"boat" },
  ],

  /* =========================================================
     PLANEJADOR (MONTE SEU ROTEIRO)
     - Agora com TODAS as opções (passeios + o que fazer)
     - Você pode adicionar/remover itens aqui
     ========================================================= */
  plannerOptions: [
    /* Passeios */
    { id:"boat-classic", title:"Passeio de barco (clássico)", desc:"Rota leve com paisagens e paradas para fotos.", chips:["2h–3h","Barco"] },
    { id:"boat-sunrise", title:"Passeio de barco (manhã cedo)", desc:"Águas mais calmas e clima perfeito.", chips:["Manhã","Barco"] },
    { id:"boat-sunset", title:"Passeio de barco no pôr do sol", desc:"Luz linda + vibe relax.", chips:["Fim de tarde","Barco"] },

    /* Natureza / atividades */
    { id:"wildlife", title:"Natureza & fauna", desc:"Observação de aves e paisagens verdes.", chips:["1h–2h","Natureza"] },
    { id:"trail", title:"Trilha leve", desc:"Caminhada curta para explorar a natureza.", chips:["Leve","Natureza"] },
    { id:"kayak", title:"Caiaque / remo (se disponível)", desc:"Atividade na água (opcional).", chips:["1h","Atividade"] },

    /* Gastronomia */
    { id:"food-sea", title:"Almoço frutos do mar", desc:"Experiência gastronômica local.", chips:["1h–2h","Gastronomia"] },
    { id:"coffee", title:"Café e lanches", desc:"Parada rápida para recarregar.", chips:["Rápido","Gastronomia"] },
    { id:"bars", title:"Bares & drinks", desc:"Perfeito para curtir a noite.", chips:["Noite","Gastronomia"] },

    /* Fotos / relax */
    { id:"photos", title:"Pontos instagramáveis", desc:"Paradas para fotos com ângulos e luz boa.", chips:["1h","Fotos"] },
    { id:"relax", title:"Relax / descanso", desc:"Tempo livre para explorar sem pressa.", chips:["Livre","Relax"] },

    /* Família */
    { id:"family", title:"Passeio família", desc:"Opções tranquilas, bom para crianças.", chips:["2h","Família"] },
  ],
};

/* =========================================================
   CONFIG DO WHATSAPP (NÚMERO DESTINO)
   ========================================================= */
const WHATSAPP = {
  /* Número solicitado: +55(21)973607755 -> wa.me usa só dígitos */
  toNumber: "5521973607755",
};

/* =========================================================
   CONFIG DO WIDGET "FALE COM A GIGI"
   ========================================================= */
const GIGI = {
  whatsappNumber: "5521973607755",
  fabText: "Fale com a Gigi",
  /*title: "Gigi",*/
  subtitle: "",
  gigiImage: "", /* quando tiver: "assets/gigi.png" */
  openKey: "ilg_gigi_open_v1",
};

/* =========================================================
   ÍCONES (SVG inline)
   ========================================================= */
function iconSvg(name) {
  const common = `viewBox="0 0 24 24" aria-hidden="true" focusable="false"`;
  if (name === "boat") return `<svg ${common}><path d="M12 3c.6 0 1 .4 1 1v2h4c.4 0 .8.3 1 .7l2 6.1c.1.4 0 .8-.3 1.1-1.2 1.2-2.9 2.1-4.7 2.1-1.1 0-2.2-.3-3-.8-.8.5-1.9.8-3 .8s-2.2-.3-3-.8c-.8.5-1.9.8-3 .8-1.8 0-3.5-.9-4.7-2.1-.3-.3-.4-.7-.3-1.1l2-6.1c.1-.4.5-.7 1-.7h4V4c0-.6.4-1 1-1h6Zm-5 6H3.7L2.2 13.7c.8.7 1.8 1.2 2.8 1.2.9 0 1.7-.3 2.4-.8l.6-.4.6.4c.7.5 1.5.8 2.4.8.9 0 1.7-.3 2.4-.8l.6-.4.6.4c.7.5 1.5.8 2.4.8 1 0 2-.5 2.8-1.2L20.3 9H17v2c0 .6-.4 1-1 1H8c-.6 0-1-.4-1-1V9Zm2 0v1h6V9H9Z"/></svg>`;
  if (name === "fork") return `<svg ${common}><path d="M8 2c.6 0 1 .4 1 1v7c0 1.7-1.3 3-3 3v8c0 .6-.4 1-1 1s-1-.4-1-1v-8c-1.7 0-3-1.3-3-3V3c0-.6.4-1 1-1s1 .4 1 1v4h1V3c0-.6.4-1 1-1s1 .4 1 1v4h1V3c0-.6.4-1 1-1Zm12 0c.6 0 1 .4 1 1v9c0 1.9-1.3 3.4-3 3.9V21c0 .6-.4 1-1 1s-1-.4-1-1V3c0-.6.4-1 1-1 2.2 0 4 1.8 4 4v6c0 .6-.4 1-1 1s-1-.4-1-1V6c0-.8-.4-1.5-1-1.9V14h.2c.9-.3 1.8-1.1 1.8-2.2V3c0-.6.4-1 1-1Z"/></svg>`;
  if (name === "leaf") return `<svg ${common}><path d="M20.9 4.6c.2.5.1 1.1-.3 1.5l-8.5 8.5c-1.4 1.4-3.2 2.2-5.2 2.3h-.7l-1.9 1.9c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l1.9-1.9v-.7c.1-2 .9-3.8 2.3-5.2l8.5-8.5c.4-.4 1-.5 1.5-.3 1.6.6 2.9 1.9 3.5 3.5ZM7 14c1.5-.1 2.8-.7 3.9-1.7l7.8-7.8c-.4-.7-1-1.3-1.7-1.7l-7.8 7.8C8 11.7 7.3 13 7.2 14.5V14H7Z"/></svg>`;
  return `<svg ${common}><path d="M4 10c0-1.7 1.3-3 3-3h10c1.7 0 3 1.3 3 3v8c0 .6-.4 1-1 1s-1-.4-1-1v-1H6v1c0 .6-.4 1-1 1s-1-.4-1-1v-8Zm2 5h12v-2c0-.6-.4-1-1-1H7c-.6 0-1 .4-1 1v2Zm2-6h3c.6 0 1 .4 1 1s-.4 1-1 1H8c-.6 0-1-.4-1-1s.4-1 1-1Z"/></svg>`;
}

/* =========================================================
   CARD TEMPLATE
   ========================================================= */
function cardHtml(c, idx=0) {
  return `
    <article class="card reveal" style="transition-delay:${Math.min(idx*60, 240)}ms">
      <div class="card__img">
        <img src="${c.img}" alt="" loading="lazy" />
        <div class="card__icon">${iconSvg(c.icon)}</div>
      </div>
      <div class="card__body">
        <h3 class="card__title">${c.title}</h3>
        <p class="card__desc">${c.desc}</p>
        <a class="card__link" href="${c.href}">
          ${c.linkLabel} <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  `;
}

/* =========================================================
   HEADER + FOOTER
   ========================================================= */
function mountHeaderFooter() {
  const header = document.getElementById("siteHeader");
  const footer = document.getElementById("siteFooter");
  if (!header || !footer) return;

  /* Header montado via JS para reaproveitar em todas as páginas */
  header.innerHTML = `
    <div class="container header__inner">
      <a class="brand" href="index.html" aria-label="Página inicial">
        <img class="brand__logo" src="${SITE.brand.logo}" alt="Logo" />
        <div class="brand__text">
          <small>${SITE.brand.nameSmall}</small>
          <strong><span>${SITE.brand.nameMainA}</span> ${SITE.brand.nameMainB}</strong>
        </div>
      </a>

      <!-- NAV: sem quebra de linha (CSS força 1 linha) -->
      <div class="navWrap" aria-label="Menu principal"><nav class="nav" aria-label="Navegação">
        ${SITE.nav.map(i => `<a data-navlink href="${i.href}">${i.label}</a>`).join("")}
      </nav></div>

      <div class="header__actions">
        <a class="btn btn--green" href="${SITE.ctas.header.href}">${SITE.ctas.header.label}</a>
        <button class="burger" id="burger" aria-label="Abrir menu">☰</button>
      </div>
    </div>

    <!-- Menu mobile -->
    <div class="mobileNav" id="mobileNav" style="display:none">
      <div class="container mobileNav__inner">
        ${SITE.nav.map(i => `<a data-navlink href="${i.href}">${i.label}</a>`).join("")}
        <a class="btn btn--green" style="justify-content:center" href="${SITE.ctas.header.href}">
          ${SITE.ctas.header.label}
        </a>
      </div>
    </div>
  `;

  footer.innerHTML = `
    <div class="container">
      © <span id="year"></span> Portal Ilha da Gigóia — Termos • Privacidade • Contato
    </div>
  `;

  document.getElementById("year").textContent = String(new Date().getFullYear());

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
    if (href === path) {
      a.style.background = "rgba(71,176,90,.12)";
      a.setAttribute("aria-current", "page");
    } else {
      a.removeAttribute("aria-current");
    }
  });
}

/* =========================================================
   HOME
   ========================================================= */
function mountHome() {
  const heroBg = document.getElementById("heroBg");
  if (heroBg) heroBg.style.backgroundImage = `url('${SITE.hero.bg}')`;

  const pill = document.getElementById("heroPill");
  if (pill) pill.querySelector("span:last-child").textContent = SITE.hero.pill;

  const title = document.getElementById("heroTitle");
  if (title) title.innerHTML = `${SITE.hero.titleA}<br><span class="accent">${SITE.hero.titleB}</span>`;

  const subtitle = document.getElementById("heroSubtitle");
  if (subtitle) subtitle.textContent = SITE.hero.subtitle;

  const capiImg = document.getElementById("capiImg");
  if (capiImg) capiImg.src = SITE.tip.capiImg;

  const capiTag = document.getElementById("capiTag");
  if (capiTag) capiTag.textContent = SITE.tip.capiTag;

  const tipTitle = document.getElementById("tipTitle");
  if (tipTitle) tipTitle.textContent = SITE.tip.title;

  const tipText = document.getElementById("tipText");
  if (tipText) tipText.textContent = " " + SITE.tip.text;

  const homeCards = document.getElementById("homeCards");
  if (homeCards) homeCards.innerHTML = SITE.homeCards.map((c,i)=>cardHtml(c,i)).join("");
}

/* =========================================================
   PÁGINAS INTERNAS
   ========================================================= */
function mountPageCards(pageKey) {
  const list = SITE.pages[pageKey] || [];
  const box = document.getElementById("pageCards");
  if (box) box.innerHTML = list.map((c,i)=>cardHtml(c,i)).join("");
}

function mountNatureCards() {
  const box = document.getElementById("natureCards");
  if (box) box.innerHTML = SITE.naturezaCards.map((c,i)=>cardHtml(c,i)).join("");
}

/* =========================================================
   PLANEJADOR (MONTE SEU ROTEIRO)
   - Mostra opções
   - Ao clicar em enviar: pede telefone obrigatório (modal)
   - Envia via WhatsApp com seleção + telefone
   ========================================================= */
function mountPlanner() {
  const form = document.getElementById("plannerForm");
  const optionsBox = document.getElementById("plannerOptions");
  const feedback = document.getElementById("planFeedback");
  const clearBtn = document.getElementById("clearPlan");

  if (!form || !optionsBox || !feedback) return;

  const options = SITE.plannerOptions || [];

  /* Renderiza opções */
  optionsBox.innerHTML = options.map((opt) => {
    return `
      <!-- Opção do planejador -->
      <label class="plannerOpt" data-opt="${opt.id}">
        <input type="checkbox" name="opt" value="${opt.id}" />
        <div class="plannerOpt__body">
          <p class="plannerOpt__title">${opt.title}</p>
          <p class="plannerOpt__desc">${opt.desc}</p>
          <div class="plannerOpt__meta">
            ${(opt.chips || []).map(ch => `<span class="plannerOpt__chip">${ch}</span>`).join("")}
          </div>
        </div>
      </label>
    `;
  }).join("");

  function syncCheckedStyles() {
    optionsBox.querySelectorAll(".plannerOpt").forEach(label => {
      const input = label.querySelector("input[type='checkbox']");
      label.classList.toggle("is-checked", !!input?.checked);
    });
  }

  optionsBox.addEventListener("change", syncCheckedStyles);

  /* Limpar seleção */
  clearBtn?.addEventListener("click", () => {
    optionsBox.querySelectorAll("input[type='checkbox']").forEach(i => i.checked = false);
    syncCheckedStyles();
    feedback.innerHTML = `
      <!-- Feedback neutro -->
      <div class="planMsg">Selecione suas opções e clique em <strong>Enviar roteiro</strong>.</div>
    `;
  });

  /* Submit: abre modal pedindo telefone */
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const selectedIds = Array.from(optionsBox.querySelectorAll("input[type='checkbox']:checked"))
      .map(i => i.value);

    if (!selectedIds.length) {
      feedback.innerHTML = `
        <!-- Feedback erro -->
        <div class="planMsg planMsg--error">⚠️ Selecione pelo menos uma opção para montar seu roteiro.</div>
      `;
      return;
    }

    const selected = options.filter(o => selectedIds.includes(o.id));
    openPhoneModal(selected);
  });

  /* Feedback inicial */
  feedback.innerHTML = `
    <!-- Feedback inicial -->
    <div class="planMsg">Selecione suas opções e clique em <strong>Enviar roteiro</strong>.</div>
  `;

  syncCheckedStyles();
}

/* =========================================================
   MODAL: pede telefone obrigatório
   ========================================================= */
function openPhoneModal(selectedOptions) {
  /* Cria overlay + modal */
  const overlay = document.createElement("div");
  overlay.className = "planModalOverlay";

  overlay.innerHTML = `
    <!-- Modal de telefone -->
    <div class="planModal" role="dialog" aria-modal="true" aria-label="Informe seu número">
      <div class="planModal__top">
        <strong>Enviar roteiro</strong>
        <button class="planModal__close" type="button" aria-label="Fechar">✕</button>
      </div>

      <div class="planModal__body">
        <!-- Texto solicitado -->
        <p>Informe seu numero e iremos enviar o roteiro completo com os preços e opções!</p>

        <!-- Input obrigatório -->
        <input id="planPhone" type="tel" placeholder="Ex: (21) 99999-9999" />

        <!-- Erro -->
        <div id="planPhoneError" style="display:none" class="planModal__error">
          ⚠️ O telefone é obrigatório.
        </div>

        <!-- Botão enviar -->
        <button class="btn btn--green" id="planPhoneSend" type="button">
          Enviar
        </button>

        <small style="color:rgba(0,0,0,.55);font-weight:800">
          <!-- Nota -->
          Ao enviar, abriremos o WhatsApp com sua mensagem pronta.
        </small>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const closeBtn = overlay.querySelector(".planModal__close");
  const phoneInput = overlay.querySelector("#planPhone");
  const errBox = overlay.querySelector("#planPhoneError");
  const sendBtn = overlay.querySelector("#planPhoneSend");

  function close() {
    overlay.remove();
  }

  closeBtn?.addEventListener("click", close);

  /* Fecha clicando fora (overlay) */
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });

  /* Enviar */
  sendBtn?.addEventListener("click", () => {
    const phone = String(phoneInput?.value || "").trim();

    if (!phone) {
      if (errBox) errBox.style.display = "block";
      phoneInput?.focus();
      return;
    }

    /* Monta mensagem para WhatsApp */
    const list = selectedOptions.map(o => `• ${o.title}`).join("\n");

    const msg =
      `Olá! Recebemos um pedido de roteiro (Portal Ilha da Gigóia).\n\n` +
      `Telefone do visitante: ${phone}\n\n` +
      `Opções selecionadas:\n${list}\n\n` +
      `Por favor, enviar roteiro completo com preços e opções.`;

    openWhatsApp(msg);

    /* Mensagem amigável na página */
    const feedback = document.getElementById("planFeedback");
    if (feedback) {
      feedback.innerHTML = `
        <!-- Feedback sucesso -->
        <div class="planMsg planMsg--ok">
          ✅ Recebemos o seu roteiro! Já já enviaremos as opções para você 😊
        </div>
      `;
    }

    close();
  });

  /* Foco inicial */
  setTimeout(() => phoneInput?.focus(), 80);
}

/* =========================================================
   ENVIO: abre WhatsApp com mensagem pronta
   ========================================================= */
function openWhatsApp(text) {
  const url = `https://wa.me/${WHATSAPP.toNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

/* =========================================================
   WIDGET "FALE COM A GIGI" (fixo em todas as páginas)
   ========================================================= */
function mountGigiWidget() {
  const root = document.getElementById("gigiWidgetRoot");
  if (!root) return;

  const isOpen = localStorage.getItem(GIGI.openKey) === "1";

  root.innerHTML = `
    <!-- Botão flutuante -->
    <div class="gigiFab">
      <button class="gigiFab__btn" id="gigiFabBtn" type="button" aria-label="Fale com a Gigi">
        <span class="gigiIcon">🦩</span> <span>${GIGI.fabText}</span>
      </button>
    </div>

    <!-- Box do formulário (abre/fecha) -->
    <div class="gigiBox" id="gigiBox" style="display:${isOpen ? "block" : "none"}">
      <div class="gigiBox__top">
        <div class="gigiBox__title">
          <strong>${GIGI.title}</strong>
          
        </div>
        <button class="gigiBox__close" id="gigiClose" type="button" aria-label="Fechar">✕</button>
      </div>

      <div class="gigiBox__body">
        <!-- Card da Gigi com placeholder -->
        <div class="gigiCard">
          <div class="gigiCard__img" id="gigiImgBox">56×56px</div>
          <div class="gigiCard__text">
            <strong>Olá, me chamo Gigi!</strong>
            <small>Me envie uma mensagem e eu te respondo direto no WhatsApp!</small>
          </div>
        </div>

        <!-- Mensagens de feedback -->
        <div id="gigiFeedback"></div>

        <!-- Formulário -->
        <form class="gigiForm" id="gigiForm">
          <div>
            <label for="gigiName">Seu nome *</label>
            <input id="gigiName" name="name" type="text" placeholder="Ex: Maria" />
          </div>

          <div>
            <label for="gigiPhone">Seu telefone *</label>
            <input id="gigiPhone" name="phone" type="tel" placeholder="Ex: (21) 99999-9999" />
          </div>

          <div>
            <label for="gigiMessage">Mensagem *</label>
            <textarea id="gigiMessage" name="message" placeholder="Ex: Quero saber o melhor horário para passeio de barco..."></textarea>
          </div>

          <button class="gigiSend" type="submit">Enviar</button>

          <small style="color:rgba(0,0,0,.55);font-weight:800">
            <!-- Sem API: abrimos WhatsApp com texto pronto -->
            Ao enviar, abriremos o WhatsApp com sua mensagem pronta.
          </small>
        </form>
      </div>
    </div>
  `;

  /* Se houver imagem real da Gigi, substitui o placeholder */
  if (GIGI.gigiImage) {
    const box = document.getElementById("gigiImgBox");
    if (box) {
      box.innerHTML = `<img src="${GIGI.gigiImage}" alt="Gigi" style="width:100%;height:100%;object-fit:cover;border-radius:16px" />`;
      box.style.border = "none";
      box.style.background = "transparent";
    }
  }

  const fabBtn = document.getElementById("gigiFabBtn");
  const gigiBox = document.getElementById("gigiBox");
  const closeBtn = document.getElementById("gigiClose");
  const form = document.getElementById("gigiForm");
  const feedback = document.getElementById("gigiFeedback");

  /* Abrir */
  fabBtn?.addEventListener("click", () => {
    if (!gigiBox) return;
    gigiBox.style.display = "block";
    localStorage.setItem(GIGI.openKey, "1");
    document.getElementById("gigiName")?.focus();
  });

  /* Fechar */
  closeBtn?.addEventListener("click", () => {
    if (!gigiBox) return;
    gigiBox.style.display = "none";
    localStorage.setItem(GIGI.openKey, "0");
  });

  /* Enviar formulário da Gigi */
  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = (document.getElementById("gigiName")?.value || "").trim();
    const phone = (document.getElementById("gigiPhone")?.value || "").trim();
    const message = (document.getElementById("gigiMessage")?.value || "").trim();

    if (!name || !phone || !message) {
      if (feedback) {
        feedback.innerHTML = `
          <div class="gigiMsg gigiMsg--error">
            ⚠️ Todos os campos são obrigatórios. Por favor, preencha nome, telefone e mensagem.
          </div>
        `;
      }
      return;
    }

    if (feedback) {
      feedback.innerHTML = `
        <div class="gigiMsg gigiMsg--ok">
          ✅ Mensagem enviada com sucesso! Já iremos entrar em contato com você.
        </div>
      `;
    }

    const text =
      `Olá! Quero falar com a Gigi (Portal Ilha da Gigóia).\n\n` +
      `Nome: ${name}\n` +
      `Telefone: ${phone}\n\n` +
      `Mensagem:\n${message}`;

    const url = `https://wa.me/${GIGI.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");

    form.reset();
  });
}

/* =========================================================
   EFEITOS MODERNOS
   ========================================================= */
function setupReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || els.length === 0) {
    els.forEach(el => el.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("is-in"); });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
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
    const pct = Math.min(100, Math.max(0, (window.scrollY / max) * 100));
    bar.style.width = pct.toFixed(2) + "%";
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive:true });
}

function setupHeroParallax() {
  const heroBg = document.getElementById("heroBg");
  if (!heroBg) return;
  const onScroll = () => {
    const y = window.scrollY;
    heroBg.style.transform = `scale(1.05) translateY(${Math.min(y * 0.08, 30)}px)`;
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive:true });
}


/* =========================================================
   EFEITO "FLUTUANDO" NO BOTÃO DA GIGI
   - O botão acompanha a rolagem com um movimento suave (float/parallax)
   - Mantém o canto inferior, mas com uma "dança" divertida
   ========================================================= */
function setupGigiFloat() {
  const fab = document.querySelector(".gigiFab");
  const box = document.getElementById("gigiBox");

  /* Se o widget não existir ainda, não faz nada */
  if (!fab) return;

  /* Respeita preferências de movimento reduzido */
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  /* =========================================================
     FLUTUAÇÃO ELÁSTICA (sempre no canto inferior direito)
     - O FAB é position:fixed (fica no canto da TELA)
     - O JS aplica APENAS pequenos offsets elásticos via translateY
     - O offset SEMPRE volta para 0 (para nunca "parar no meio")
     ========================================================= */
  let lastY = window.scrollY || 0;

  /* Estado do "spring" */
  let offset = 0;     /* px */
  let velocity = 0;   /* px/frame */

  const MAX = 18;     /* limite do deslocamento (visível, mas sem sair do canto) */
  const DAMP = 0.82;  /* amortecimento */
  const SPRING = 0.14;/* força de retorno para 0 */
  let raf = null;

  function clamp(v, min, max){ return Math.max(min, Math.min(max, v)); }

  function apply() {
    raf = null;

    /* força de retorno (sempre puxa pro 0) */
    velocity += (0 - offset) * SPRING;

    /* amortecimento */
    velocity *= DAMP;

    /* integra */
    offset += velocity;

    /* clamp para não "andar demais" */
    offset = clamp(offset, -MAX, MAX);

    /* aplica transform (translate3d melhora performance) */
    const t = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
    fab.style.transform = t;

    if (box && box.style.display !== "none") {
      box.style.transform = t;
    }

    /* continua até estabilizar */
    if (Math.abs(offset) > 0.10 || Math.abs(velocity) > 0.10) {
      raf = requestAnimationFrame(apply);
    } else {
      /* garante repouso perfeito (nunca fica no meio) */
      offset = 0;
      velocity = 0;
      fab.style.transform = "translate3d(0,0,0)";
      if (box && box.style.display !== "none") box.style.transform = "translate3d(0,0,0)";
    }
  }

  function kick(dy) {
    /* dy positivo (scroll down) => botão dá um "pulo" pra cima (negativo) */
    velocity += clamp(-dy * 0.20, -6, 6);
    if (!raf) raf = requestAnimationFrame(apply);
  }

  function onScroll() {
    const y = window.scrollY || 0;
    const dy = y - lastY;
    lastY = y;

    /* aplica impulso elástico */
    kick(dy);
  }

  /* Start clean */
  fab.style.transform = "translate3d(0,0,0)";
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Se mudar tamanho/orientação, reseta pra não "desalinha" */
  window.addEventListener("resize", () => {
    lastY = window.scrollY || 0;
    offset = 0;
    velocity = 0;
    fab.style.transform = "translate3d(0,0,0)";
    if (box && box.style.display !== "none") box.style.transform = "translate3d(0,0,0)";
  }, { passive: true });
}


/* =========================================================
   INIT
   ========================================================= */
(function init(){
  setupProgress();
  mountHeaderFooter();

  const page = document.body.getAttribute("data-page");

  if (page === "home") mountHome();
  if (page && SITE.pages[page]) mountPageCards(page);
  if (page === "o-que-fazer") mountNatureCards();
  if (page === "planeje") mountPlanner();

  /* Widget em todas as páginas */
  mountGigiWidget();

  /* Botão da Gigi com efeito flutuando no scroll */
  setupGigiFloat();

  requestAnimationFrame(()=>document.body.classList.add("is-ready"));

  setupHeaderScroll();
  setupHeroParallax();
  setupReveal();
})();

/* =========================================================
   SISTEMA DE IDIOMAS (i18n)
   ========================================================= */
const currentLang = localStorage.getItem('ilha_lang') || 'pt';

function changeLanguage(lang) {
  localStorage.setItem('ilha_lang', lang);
  location.reload();
}

const DICT = {
  nav_ilha: { pt: "A Ilha", en: "The Island", es: "La Isla" },
  nav_passeios: { pt: "Passeios & Rotas", en: "Tours & Routes", es: "Paseos y Rutas" },
  nav_comer: { pt: "Comer & Beber", en: "Food & Drink", es: "Comer y Beber" },
  nav_hospedagem: { pt: "Hospedagem", en: "Accommodation", es: "Alojamiento" },
  nav_fale: { pt: "Fale Conosco", en: "Contact Us", es: "Contáctenos" },
  btn_passeios: { pt: "Ver Passeios", en: "View Tours", es: "Ver Paseos" },
  btn_conheca: { pt: "Conheça a Ilha", en: "Discover the Island", es: "Conoce la Isla" },
  btn_enviar: { pt: "Enviar roteiro", en: "Send itinerary", es: "Enviar itinerario" },
  btn_limpar: { pt: "Limpar", en: "Clear", es: "Limpiar" },
  
  /* ATUALIZAÇÃO DO FOOTER: O "Contato" agora é um link clicável */
  footer_text: { 
    pt: "Portal Ilha da Gigóia — Termos • Privacidade • <a href='fale-conosco.html' style='text-decoration:underline; font-weight:900;'>Contato</a>", 
    en: "Gigóia Island Portal — Terms • Privacy • <a href='fale-conosco.html' style='text-decoration:underline; font-weight:900;'>Contact</a>", 
    es: "Portal Isla Gigóia — Términos • Privacidad • <a href='fale-conosco.html' style='text-decoration:underline; font-weight:900;'>Contacto</a>" 
  },

  hero_pill: { pt: "Portal Oficial de Turismo", en: "Official Tourism Portal", es: "Portal Oficial de Turismo" },
  hero_title_a: { pt: "Descubra o Paraíso Tropical", en: "Discover the Tropical Paradise", es: "Descubre el Paraíso Tropical" },
  hero_title_b: { pt: "da Ilha da Gigóia", en: "of Gigóia Island", es: "de la Isla Gigóia" },
  hero_sub: { pt: "Explore praias, passeios de barco, natureza exuberante e experiências autênticas a apenas minutos do Rio de Janeiro", en: "Explore beaches, boat tours, lush nature, and authentic experiences just minutes from Rio de Janeiro", es: "Explora playas, paseos en barco, naturaleza exuberante y experiencias auténticas a solo minutos de Río de Janeiro" },
  hero_check: { pt: "Informações oficiais e atualizadas", en: "Official and updated information", es: "Información oficial y actualizada" },
  sect_espera_title: { pt: "O Que Te Espera na Ilha", en: "What Awaits You on the Island", es: "Lo Que Te Espera en la Isla" },
  sect_espera_sub: { pt: "Da natureza exuberante aos passeios de barco, cada momento é uma nova descoberta", en: "From lush nature to boat tours, every moment is a new discovery", es: "Desde la exuberante naturaleza hasta los paseos en barco, cada momento es un nuevo descobrimento" },

  capi_tag: { pt: "Capi, seu guia", en: "Capi, your guide", es: "Capi, tu guía" },
  tip_title: { pt: "Dica do Capi:", en: "Capi's Tip:", es: "Consejo de Capi:" },
  
  tip_passeios: { 
    pt: "<a href='#' onclick='document.getElementById(\"gigiFabBtn\").click(); return false;' style='color:#2f9c49; text-decoration:underline'>Fale com a Gigi</a> para checar a tábua de marés e as melhores condições para o seu passeio!", 
    en: "<a href='#' onclick='document.getElementById(\"gigiFabBtn\").click(); return false;' style='color:#2f9c49; text-decoration:underline'>Talk to Gigi</a> to check the tide table and the best conditions for your tour!", 
    es: "¡<a href='#' onclick='document.getElementById(\"gigiFabBtn\").click(); return false;' style='color:#2f9c49; text-decoration:underline'>Habla con Gigi</a> para consultar la tabla de mareas y las mejores condiciones para tu paseo!" 
  },
  tip_comer: { 
    pt: "<a href='#' onclick='document.getElementById(\"gigiFabBtn\").click(); return false;' style='color:#2f9c49; text-decoration:underline'>Fale com a Gigi</a> para fazer a sua reserva e garantir a melhor mesa na beira da lagoa!", 
    en: "<a href='#' onclick='document.getElementById(\"gigiFabBtn\").click(); return false;' style='color:#2f9c49; text-decoration:underline'>Talk to Gigi</a> to make your reservation and secure the best table by the lagoon!", 
    es: "¡<a href='#' onclick='document.getElementById(\"gigiFabBtn\").click(); return false;' style='color:#2f9c49; text-decoration:underline'>Habla con Gigi</a> para hacer tu reserva y asegurar la mejor mesa junto a la laguna!" 
  },
  
  tip_text_0: { pt: "Comece pelo passeio de barco pela manhã quando as águas estão mais calmas e a vida selvagem está ativa!", en: "Start with the morning boat tour when the waters are calmer and the wildlife is active!", es: "¡Empieza con el paseo en barco por la mañana cuando las aguas están más tranquilas y la vida silvestre está activa!" },
  tip_text_1: { pt: "Não deixe de provar o pastel de camarão em um dos restaurantes à beira da lagoa, é imperdível!", en: "Be sure to try the shrimp pastel at one of the lakeside restaurants, it's a must!", es: "No dejes de probar el pastel de camarones en uno de los restaurantes junto a la laguna, ¡es imperdible!" },
  tip_text_2: { pt: "O pôr do sol visto da parte oeste da ilha rende as melhores fotos para o seu Instagram.", en: "The sunset viewed from the west side of the island makes for the best Instagram photos.", es: "El atardecer visto desde el lado oeste de la isla rinde las mejores fotos para tu Instagram." },
  tip_text_3: { pt: "Use sapatos confortáveis! A ilha não tem carros e as ruelas de pedra são um charme para explorar a pé.", en: "Wear comfortable shoes! The island has no cars and the stone streets are charming to explore on foot.", es: "¡Usa zapatos cómodos! La isla no tiene autos y las calles de piedra son un encanto para explorar a pie." },
  tip_text_4: { pt: "Fique de olho nas árvores! É muito comum avistar micos, garças e até jacarés no passeio de barco.", en: "Keep an eye on the trees! It's very common to spot marmosets, herons, and even alligators on the boat tour.", es: "¡Mantente atento a los árboles! Es muy común avistar titíes, garzas y hasta caimanes en el paseo en barco." },
  tip_text_5: { pt: "A balsa principal funciona 24 horas por dia, então não se preocupe com o horário de volta!", en: "The main ferry operates 24 hours a day, so don't worry about the time you return!", es: "El ferry principal funciona las 24 horas del día, ¡así que no te preocupes por la hora de regreso!" },
  tip_text_6: { pt: "Traga dinheiro em espécie; embora a maioria dos lugares aceite cartão, as balsas pequenas geralmente cobram em dinheiro.", en: "Bring some cash; although most places accept cards, small ferries usually charge in cash.", es: "Lleva dinero en efectivo; aunque la mayoría acepta tarjetas, los ferris pequeños suelen cobrar en efectivo." },
  tip_text_7: { pt: "Explore os becos sem saída! Eles muitas vezes escondem pequenos ateliês de arte e cafés charmosos.", en: "Explore the dead-end alleys! They often hide small art studios and charming cafes.", es: "¡Explora los callejones sin salida! A menudo esconden pequeños estudios de arte y cafés encantadores." },
  tip_text_8: { pt: "O passeio até a Praia da Barra saindo de barco da ilha é uma experiência rápida e super relaxante.", en: "Taking a boat from the island to Barra Beach is a quick and super relaxing experience.", es: "Tomar un barco desde la isla hasta la Playa de Barra es una experiencia rápida y súper relajante." },
  tip_text_9: { pt: "Experimente a moqueca de frutos do mar, um dos pratos mais tradicionais dos restaurantes locais.", en: "Try the seafood moqueca, one of the most traditional dishes in local restaurants.", es: "Prueba la moqueca de mariscos, uno de los platos más tradicionales de los restaurantes locales." },
  tip_text_10: { pt: "Alugue uma prancha de Stand Up Paddle (SUP) no início da manhã para explorar os canais com tranquilidade.", en: "Rent a Stand Up Paddleboard (SUP) early in the morning to explore the canals peacefully.", es: "Alquila una tabla de Stand Up Paddle (SUP) temprano en la mañana para explorar los canales tranquilamente." },
  tip_text_11: { pt: "Não esqueça o repelente! Por ser cercada de natureza e água, os mosquitos costumam aparecer no fim do dia.", en: "Don't forget mosquito repellent! Surrounded by nature and water, mosquitoes appear in the late afternoon.", es: "¡No olvides el repelente! Al estar rodeada de naturaleza y agua, los mosquitos aparecen al atardecer." },
  tip_text_12: { pt: "A ilha é 'pet friendly'! A maioria dos restaurantes e pousadas adora receber cachorros.", en: "The island is 'pet-friendly'! Most restaurants and inns love welcoming dogs.", es: "¡La isla es 'pet-friendly'! A la mayoría de los restaurantes y posadas les encanta recibir perros." },
  tip_text_13: { pt: "Quer um passeio romântico? Contrate um barco privado no fim de tarde e leve um bom vinho para brindar na lagoa.", en: "Want a romantic outing? Hire a private boat in the late afternoon and bring a good wine to toast on the lagoon.", es: "¿Quieres un paseo romántico? Contrata un barco privado al atardecer y lleva un buen vino para brindar en la laguna." },
  tip_text_14: { pt: "Evite saltos altos. Como não há asfalto, o ideal é usar chinelo ou tênis para andar por aqui.", en: "Avoid high heels. Since there's no asphalt, flip-flops or sneakers are ideal for walking around here.", es: "Evita los tacones altos. Como no hay asfalto, lo ideal son chanclas o zapatillas para caminar por aquí." },
  tip_text_15: { pt: "Bater papo com os barqueiros rende as melhores histórias e lendas urbanas sobre a fundação da ilha.", en: "Chatting with the boatmen yields the best urban legends and stories about the island's foundation.", es: "Charlar con los barqueros rinde las mejores leyendas urbanas e historias sobre la fundación de la isla." },
  tip_text_16: { pt: "Aos finais de semana, chegue mais cedo para garantir as melhores mesas na beira da água para o almoço.", en: "On weekends, arrive early to secure the best waterside tables for lunch.", es: "Los fines de semana, llega temprano para asegurar las mejores mesas junto al agua para el almuerzo." },
  tip_text_17: { pt: "Leve uma câmera ou deixe o celular com bateria cheia; há belos murais de grafite escondidos pelas ruelas.", en: "Bring a camera or ensure your phone is fully charged; there are beautiful graffiti murals hidden in the alleys.", es: "Lleva una cámara o asegúrate de tener batería en el celular; hay hermosos murales de graffiti escondidos en las callejuelas." },
  tip_text_18: { pt: "Respeite o sossego dos moradores. A Ilha da Gigóia é conhecida e amada por sua paz e tranquilidade.", en: "Respect the residents' peace. Gigóia Island is known and loved for its peace and tranquility.", es: "Respeta la paz de los residentes. La Isla de Gigóia es conocida y amada por su paz y tranquilidad." },
  tip_text_19: { pt: "Se for fazer as trilhas ecológicas, não esqueça o protetor solar, um boné e uma garrafa de água gelada!", en: "If you're taking the ecological trails, don't forget sunscreen, a cap, and a bottle of cold water!", es: "Si vas a hacer los senderos ecológicos, ¡no olvides protector solar, una gorra y una botella de agua fría!" },

  pg_cc_h1: { pt: "Como Chegar", en: "How to get there", es: "Cómo llegar" },
  pg_cc_p: { pt: "O acesso principal é feito por pequenas embarcações que funcionam 24 horas por dia.", en: "Main access is via small boats that operate 24 hours a day.", es: "El acceso principal es mediante pequeñas embarcaciones que funcionas as 24 horas del día." },
  pg_hc_h1: { pt: "História & Cultura", en: "History & Culture", es: "Historia y Cultura" },
  pg_hc_p: { pt: "Conheça as raízes da Ilha da Gigóia e seu charme boêmio.", en: "Discover the roots of Gigóia Island and its bohemian charm.", es: "Descubre las raíces de la Isla Gigóia y su encanto bohemio." },
  pg_bp_h1: { pt: "Boas Práticas", en: "Best Practices", es: "Buenas Prácticas" },
  pg_bp_p: { pt: "Ajude a preservar este paraíso ecológico e respeite a comunidade local.", en: "Help preserve this ecological paradise and respect the local community.", es: "Ayuda a preservar este paraíso ecológico y respeta a la comunidad local." },
  pg_me_h1: { pt: "Melhor Época", en: "Best Time to Visit", es: "Mejor Época" },
  pg_me_p: { pt: "Descubra qual estação do ano combina mais com o seu roteiro.", en: "Discover which season best suits your itinerary.", es: "Descubre qué estación se adapta mejor a tu itinerario." },

  pg_it_h1: { pt: "Ilhas Tijucas", en: "Tijucas Islands", es: "Islas Tijucas" },
  pg_it_p: { pt: "Águas cristalinas e vida marinha a poucos minutos da costa.", en: "Crystal clear waters and marine life just minutes from the coast.", es: "Aguas cristalinas y vida marina a pocos minutos de la costa." },
  pg_pc_h1: { pt: "Pantanal Carioca", en: "Pantanal Carioca", es: "Pantanal Carioca" },
  pg_pc_p: { pt: "Um safári urbano inesquecível pelo complexo de lagoas da Barra.", en: "An unforgettable urban safari through the Barra lagoon complex.", es: "Un safari urbano inolvidable por el complejo de lagunas de Barra." },
  pg_res_h1: { pt: "Praia da Reserva", en: "Reserva Beach", es: "Playa Reserva" },
  pg_res_p: { pt: "Navegue pelos canais até uma das praias mais limpas e preservadas do Rio.", en: "Sail through the canals to one of the cleanest and most preserved beaches in Rio.", es: "Navega por los canales hasta una de las playas más limpias y preservadas de Río." },
  pg_js_h1: { pt: "Passeio de Jet-Ski", en: "Jet-Ski Tour", es: "Paseo en Moto de Agua" },
  pg_js_p: { pt: "Aventura e adrenalina explorando as lagoas no seu próprio ritmo.", en: "Adventure and adrenaline exploring the lagoons at your own pace.", es: "Aventura y adrenalina explorando las lagunas a tu propio ritmo." },

  pg_fale_h1: { pt: "Fale Conosco", en: "Contact Us", es: "Contáctenos" },
  pg_fale_p: { pt: "Dúvidas, anúncios ou parcerias? Envie uma mensagem para nós.", en: "Questions, ads, or partnerships? Send us a message.", es: "¿Preguntas, anuncios o asociaciones? Envíanos un mensaje." },
  fc_intro: { pt: "Estamos aqui para ajudar! Se você tem alguma dúvida sobre a ilha, deseja anunciar seu negócio no Portal Ilha da Gigóia ou propor uma parceria comercial, basta preencher o formulário abaixo que retornaremos em breve.", en: "We are here to help! If you have any questions about the island, want to advertise your business on the Gigóia Island Portal, or propose a commercial partnership, just fill out the form below and we will get back to you shortly.", es: "¡Estamos aquí para ayudar! Si tienes alguna duda sobre la isla, deseas anunciar tu negocio en el Portal Isla Gigóia o proponer una alianza comercial, solo completa el formulario a continuación y nos pondremos en contacto pronto." },
  fc_lbl_name: { pt: "Seu nome", en: "Your name", es: "Tu nombre" },
  fc_lbl_email: { pt: "Seu e-mail", en: "Your email", es: "Tu correo electrónico" },
  fc_lbl_phone: { pt: "Telefone para contato", en: "Contact phone", es: "Teléfono de contacto" },
  fc_lbl_msg: { pt: "Corpo da mensagem", en: "Message body", es: "Cuerpo del mensaje" },
  fc_btn_send: { pt: "Enviar mensagem", en: "Send message", es: "Enviar mensaje" },

  gigi_fab: { pt: "Fale com a Gigi", en: "Talk to Gigi", es: "Habla con Gigi" },
  gigi_hello: { pt: "Olá, me chamo Gigi!", en: "Hi, I'm Gigi!", es: "¡Hola, soy Gigi!" },
  gigi_sub: { pt: "Me envie uma mensagem e eu te respondo direto no WhatsApp!", en: "Send me a message and I'll reply directly on WhatsApp!", es: "¡Envíame un mensaje y te responderé directamente por WhatsApp!" },
  gigi_lbl_name: { pt: "Seu nome *", en: "Your name *", es: "Tu nombre *" },
  gigi_lbl_phone: { pt: "Seu telefone *", en: "Your phone *", es: "Tu teléfono *" },
  gigi_lbl_msg: { pt: "Mensagem *", en: "Message *", es: "Mensaje *" },
  gigi_btn: { pt: "Enviar", en: "Send", es: "Enviar" },
  gigi_note: { pt: "Ao enviar, abriremos o WhatsApp com sua mensagem pronta.", en: "When sending, we will open WhatsApp with your message ready.", es: "Al enviar, abriremos WhatsApp con tu mensaje listo." },
};

const t = (key) => DICT[key] ? (DICT[key][currentLang] || DICT[key].pt) : key;

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
  ctas: {
    header: { href: "passeios-rotas.html", label: t("btn_passeios") },
    heroPrimary: { href: "passeios-rotas.html", label: t("btn_passeios") },
    heroSecondary: { href: "a-ilha.html", label: t("btn_conheca") },
  }
};

const WHATSAPP = { toNumber: "5521993802618" };

const GIGI = {
  whatsappNumber: "5521993802618",
  fabText: t("gigi_fab"),
  title: "Gigi",
  subtitle: "",
  gigiImage: "assets/gigi.png", 
  openKey: "ilg_gigi_open_v1",
};

/* =========================================================
   GERAÇÃO DO HEADER E FOOTER 
   ========================================================= */
function mountHeaderFooter() {
  const header = document.getElementById("siteHeader");
  const footer = document.getElementById("siteFooter");
  if (!header || !footer) return;

  header.innerHTML = `
    <div class="container header__inner">
      <a class="brand" href="index.html" aria-label="Página inicial">
        <img class="brand__logo" src="${SITE.brand.logo}" alt="Logo" />
        <div class="brand__text">
          <small>${SITE.brand.nameSmall}</small>
          <strong><span>${SITE.brand.nameMainA}</span> ${SITE.brand.nameMainB}</strong>
        </div>
      </a>
      <div class="navWrap" aria-label="Menu principal"><nav class="nav" aria-label="Navegação">
        ${SITE.nav.map(i => `<a data-navlink href="${i.href}">${i.label}</a>`).join("")}
      </nav></div>
      <div class="header__actions">
        <select class="lang-switcher" id="langSwitcher" aria-label="Selecione o idioma">
          <option value="pt" ${currentLang === 'pt' ? 'selected' : ''}>🇧🇷 PT</option>
          <option value="en" ${currentLang === 'en' ? 'selected' : ''}>🇺🇸 EN</option>
          <option value="es" ${currentLang === 'es' ? 'selected' : ''}>🇪🇸 ES</option>
        </select>
        <a class="btn btn--green" href="${SITE.ctas.header.href}">${SITE.ctas.header.label}</a>
        <button class="burger" id="burger" aria-label="Abrir menu">☰</button>
      </div>
    </div>
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
    <div class="container" data-i18n="footer_text">
      © <span id="year"></span> ${t("footer_text")}
    </div>
  `;
  document.getElementById("year").textContent = String(new Date().getFullYear());

  document.getElementById("burger")?.addEventListener("click", () => {
    const panel = document.getElementById("mobileNav");
    if (!panel) return;
    panel.style.display = panel.style.display === "none" ? "block" : "none";
  });

  document.getElementById("langSwitcher")?.addEventListener("change", (e) => {
    changeLanguage(e.target.value);
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

function mountGigiWidget() {
  const root = document.getElementById("gigiWidgetRoot");
  if (!root) return;
  const isOpen = localStorage.getItem(GIGI.openKey) === "1";

  root.innerHTML = `
    <div class="gigiFab">
      <button class="gigiFab__btn" id="gigiFabBtn" type="button" aria-label="${t("gigi_fab")}">
        <span class="gigiIcon">💬</span> <span>${GIGI.fabText}</span>
      </button>
    </div>
    <div class="gigiBox" id="gigiBox" style="display:${isOpen ? "block" : "none"}">
      <div class="gigiBox__top">
        <div class="gigiBox__title"><strong>${GIGI.title}</strong></div>
        <button class="gigiBox__close" id="gigiClose" type="button">✕</button>
      </div>
      <div class="gigiBox__body">
        <div class="gigiCard">
          <div class="gigiCard__img" id="gigiImgBox"></div>
          <div class="gigiCard__text">
            <strong>${t("gigi_hello")}</strong>
            <small>${t("gigi_sub")}</small>
          </div>
        </div>
        <div id="gigiFeedback"></div>
        <form class="gigiForm" id="gigiForm">
          <div>
            <label for="gigiName">${t("gigi_lbl_name")}</label>
            <input id="gigiName" name="name" type="text" placeholder="Maria" />
          </div>
          <div>
            <label for="gigiPhone">${t("gigi_lbl_phone")}</label>
            <input id="gigiPhone" name="phone" type="tel" placeholder="+55 21 99999-9999" />
          </div>
          <div>
            <label for="gigiMessage">${t("gigi_lbl_msg")}</label>
            <textarea id="gigiMessage" name="message" placeholder="..."></textarea>
          </div>
          <button class="gigiSend" type="submit">${t("gigi_btn")}</button>
          <small style="color:rgba(0,0,0,.55);font-weight:800">${t("gigi_note")}</small>
        </form>
      </div>
    </div>
  `;

  if (GIGI.gigiImage) {
    const box = document.getElementById("gigiImgBox");
    if (box) {
      box.innerHTML = `<img src="${GIGI.gigiImage}" alt="Gigi" style="width:100%;height:100%;object-fit:cover;border-radius:18px" />`;
      box.style.border = "none";
      box.style.background = "transparent";
    }
  }

  const fabBtn = document.getElementById("gigiFabBtn");
  const gigiBox = document.getElementById("gigiBox");
  const closeBtn = document.getElementById("gigiClose");
  const form = document.getElementById("gigiForm");

  fabBtn?.addEventListener("click", () => {
    if (!gigiBox) return;
    gigiBox.style.display = "flex";
    localStorage.setItem(GIGI.openKey, "1");
  });

  closeBtn?.addEventListener("click", () => {
    if (!gigiBox) return;
    gigiBox.style.display = "none";
    localStorage.setItem(GIGI.openKey, "0");
  });

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = (document.getElementById("gigiName")?.value || "").trim();
    const phone = (document.getElementById("gigiPhone")?.value || "").trim();
    const message = (document.getElementById("gigiMessage")?.value || "").trim();

    if (!name || !phone || !message) return;
    const text = `Olá! Quero falar com a Gigi (Portal Ilha da Gigóia).\n\nNome: ${name}\nTelefone: ${phone}\nMensagem:\n${message}`;
    const url = `https://wa.me/${GIGI.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    form.reset();
  });
}

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

function setupGigiFloat() {
  const fab = document.querySelector(".gigiFab");
  const box = document.getElementById("gigiBox");
  if (!fab) return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let lastY = window.scrollY || 0;
  let offset = 0, velocity = 0;
  const MAX = 18, DAMP = 0.82, SPRING = 0.14;
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
    if (Math.abs(offset) > 0.10 || Math.abs(velocity) > 0.10) { raf = requestAnimationFrame(apply); } 
    else { offset = 0; velocity = 0; fab.style.transform = "translate3d(0,0,0)"; if (box && box.style.display !== "none") box.style.transform = "translate3d(0,0,0)"; }
  }
  function kick(dy) { velocity += clamp(-dy * 0.20, -6, 6); if (!raf) raf = requestAnimationFrame(apply); }
  function onScroll() { const y = window.scrollY || 0; const dy = y - lastY; lastY = y; kick(dy); }

  fab.style.transform = "translate3d(0,0,0)";
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", () => { lastY = window.scrollY || 0; offset = 0; velocity = 0; fab.style.transform = "translate3d(0,0,0)"; if (box && box.style.display !== "none") box.style.transform = "translate3d(0,0,0)"; }, { passive: true });
}

function translateHtmlElements() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (DICT[key]) {
      el.innerHTML = DICT[key][currentLang] || DICT[key].pt;
    }
  });
}

(function init(){
  setupProgress();
  mountHeaderFooter();

  mountGigiWidget();
  setupGigiFloat();
  translateHtmlElements(); 
  
  requestAnimationFrame(()=>document.body.classList.add("is-ready"));
  setupHeaderScroll();
  setupReveal();
})();
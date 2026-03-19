/* =========================================================
   SISTEMA DE TRADUÇÃO E DICIONÁRIO
   ========================================================= */

const currentLang = localStorage.getItem('ilha_lang') || 'pt';

function changeLanguage(lang) {
  localStorage.setItem('ilha_lang', lang);
  location.reload(); 
}

const DICT = {
  // === MENU E RODAPÉ ===
  nav_ilha: { pt: "A Ilha", en: "The Island", es: "La Isla" },
  nav_passeios: { pt: "Passeios & Rotas", en: "Tours & Routes", es: "Paseos y Rutas" },
  nav_comer: { pt: "Comer & Beber", en: "Eat & Drink", es: "Comer y Beber" },
  nav_hospedagem: { pt: "Hospedagem", en: "Accommodation", es: "Alojamiento" },
  nav_fale: { pt: "Fale Conosco", en: "Contact Us", es: "Contáctenos" },
  btn_passeios: { pt: "Ver Passeios", en: "See Tours", es: "Ver Paseos" },
  btn_conheca: { pt: "Conheça a Ilha", en: "Discover the Island", es: "Conoce la Isla" },
  footer_text: { pt: "Portal Ilha da Gigóia — Termos • Privacidade", en: "Gigóia Island Portal — Terms • Privacy", es: "Portal Isla Gigóia — Términos • Privacidad" },

  // === HOME: HERO ===
  hero_pill: { pt: "Portal Oficial de Turismo", en: "Official Tourism Portal", es: "Portal Oficial de Turismo" },
  hero_title_a: { pt: "Descubra o Paraíso Tropical", en: "Discover the Tropical Paradise", es: "Descubre el Paraíso Tropical" },
  hero_title_b: { pt: "da Ilha da Gigóia", en: "of Gigóia Island", es: "de la Isla Gigóia" },
  hero_sub: { pt: "Explore praias, passeios de barco, natureza exuberante e experiências autênticas a apenas minutos do Rio de Janeiro", en: "Explore beaches, boat tours, lush nature, and authentic experiences just minutes from Rio de Janeiro", es: "Explora playas, paseos en barco, naturaleza exuberante y experiencias auténticas a solo minutos de Río de Janeiro" },
  hero_check: { pt: "Informações oficiais e atualizadas", en: "Official and updated information", es: "Información oficial y actualizada" },
  
  // === HOME: SEÇÕES ===
  sect_espera_title: { pt: "O Que Te Espera na Ilha", en: "What Awaits You on the Island", es: "Lo Que Te Espera en la Isla" },
  sect_espera_sub: { pt: "Da natureza exuberante aos passeios de barco, cada momento é uma nova descoberta", en: "From lush nature to boat tours, every moment is a new discovery", es: "Desde la naturaleza exuberante hasta paseos en barco, cada momento es un nuevo descubrimiento" },

  capi_tag: { pt: "Capi, seu guia", en: "Capi, your guide", es: "Capi, tu guía" },
  tip_title: { pt: "Dica do Capi:", en: "Capi's Tip:", es: "Consejo de Capi:" },
  
  hm_c1_t: { pt: "Passeios de Barco", en: "Boat Tours", es: "Paseos en Barco" },
  hm_c1_d: { pt: "Navegue pelas águas calmas e descubra paisagens deslumbrantes", en: "Sail through calm waters and discover stunning landscapes", es: "Navega por aguas tranquilas y descubre paisajes impresionantes" },
  hm_c1_l: { pt: "Ver roteiros", en: "See routes", es: "Ver rutas" },
  
  hm_c2_t: { pt: "Comer & Beber", en: "Eat & Drink", es: "Comer y Beber" },
  hm_c2_d: { pt: "Saboreie frutos do mar frescos e pratos da culinária carioca", en: "Savor fresh seafood and local carioca cuisine", es: "Saborea mariscos frescos y platos de la cocina carioca" },
  hm_c2_l: { pt: "Explorar restaurantes", en: "Explore restaurants", es: "Explorar restaurantes" },
  
  hm_c4_t: { pt: "Hospedagem", en: "Accommodation", es: "Alojamiento" },
  hm_c4_d: { pt: "Encontre o lugar perfeito para relaxar e aproveitar a ilha", en: "Find the perfect place to relax and enjoy the island", es: "Encuentra el lugar perfecto para relajarte y disfrutar de la isla" },
  hm_c4_l: { pt: "Ver opções", en: "See options", es: "Ver opciones" },

  // === WIDGET GIGI ===
  gigi_fab: { pt: "Fale com a Gigi", en: "Chat with Gigi", es: "Habla con Gigi" },
  gigi_hello: { pt: "Olá, me chamo Gigi!", en: "Hello, I'm Gigi!", es: "¡Hola, soy Gigi!" },
  gigi_sub: { pt: "Me envie uma mensagem e eu te respondo direto no WhatsApp!", en: "Send me a message and I'll reply directly on WhatsApp!", es: "¡Envíame un mensaje y te responderé directamente en WhatsApp!" },
  gigi_lbl_name: { pt: "Seu nome *", en: "Your name *", es: "Tu nombre *" },
  gigi_lbl_phone: { pt: "Seu telefone *", en: "Your phone *", es: "Tu teléfono *" },
  gigi_lbl_msg: { pt: "Mensagem *", en: "Message *", es: "Mensaje *" },
  gigi_btn: { pt: "Enviar", en: "Send", es: "Enviar" },
  gigi_note: { pt: "Ao enviar, abriremos o WhatsApp com sua mensagem pronta.", en: "Upon sending, we will open WhatsApp with your message ready.", es: "Al enviar, abriremos WhatsApp con tu mensaje listo." },

  // === TERMOS GERAIS DAS PÁGINAS INTERNAS (NOVOS) ===
  lbl_duracao: { pt: "Duração", en: "Duration", es: "Duración" },
  lbl_valor_medio: { pt: "Valor Médio", en: "Average Price", es: "Precio Medio" },
  btn_voltar_passeios: { pt: "← Voltar para Passeios e Rotas", en: "← Back to Tours & Routes", es: "← Volver a Paseos y Rutas" },
  btn_agendar_gigi: { pt: "💬 Agendar com a Gigi", en: "💬 Book with Gigi", es: "💬 Reservar con Gigi" }
};

const t = (key) => DICT[key] ? (DICT[key][currentLang] || DICT[key].pt) : key;
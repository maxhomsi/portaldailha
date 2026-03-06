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
  nav_fazer: { pt: "O que fazer", en: "What to do", es: "Qué hacer" },
  btn_planeje: { pt: "Planeje sua Viagem", en: "Plan Your Trip", es: "Planifica tu Viaje" },
  btn_conheca: { pt: "Conheça a Ilha", en: "Discover the Island", es: "Conoce la Isla" },
  btn_enviar: { pt: "Enviar roteiro", en: "Send itinerary", es: "Enviar itinerario" },
  btn_limpar: { pt: "Limpar", en: "Clear", es: "Limpiar" },
  footer_text: { pt: "Portal Ilha da Gigóia — Termos • Privacidade • Contato", en: "Gigóia Island Portal — Terms • Privacy • Contact", es: "Portal Isla Gigóia — Términos • Privacidad • Contacto" },

  hero_pill: { pt: "Portal Oficial de Turismo", en: "Official Tourism Portal", es: "Portal Oficial de Turismo" },
  hero_title_a: { pt: "Descubra o Paraíso Tropical", en: "Discover the Tropical Paradise", es: "Descubre el Paraíso Tropical" },
  hero_title_b: { pt: "da Ilha da Gigóia", en: "of Gigóia Island", es: "de la Isla Gigóia" },
  hero_sub: { pt: "Explore praias, passeios de barco, natureza exuberante e experiências autênticas a apenas minutos do Rio de Janeiro", en: "Explore beaches, boat tours, lush nature, and authentic experiences just minutes from Rio de Janeiro", es: "Explora playas, paseos en barco, naturaleza exuberante y experiencias auténticas a solo minutos de Río de Janeiro" },
  hero_check: { pt: "Informações oficiais e atualizadas", en: "Official and updated information", es: "Información oficial y actualizada" },
  sect_espera_title: { pt: "O Que Te Espera na Ilha", en: "What Awaits You on the Island", es: "Lo Que Te Espera en la Isla" },
  sect_espera_sub: { pt: "Da natureza exuberante aos passeios de barco, cada momento é uma nova descoberta", en: "From lush nature to boat tours, every moment is a new discovery", es: "Desde la exuberante naturaleza hasta los paseos en barco, cada momento es un nuevo descobrimento" },

  capi_tag: { pt: "Capi, seu guia", en: "Capi, your guide", es: "Capi, tu guía" },
  tip_title: { pt: "Dica da Capi:", en: "Capi's Tip:", es: "Consejo de Capi:" },
  tip_text: { pt: "Comece pelo passeio de barco pela manhã quando as águas estão mais calmas e a vida selvagem está ativa!", en: "Start with the morning boat tour when the waters are calmer and the wildlife is active!", es: "¡Empieza con el paseo en barco por la mañana cuando las aguas están más tranquilas y la vida silvestre está activa!" },

  hm_c1_t: { pt: "Passeios de Barco", en: "Boat Tours", es: "Paseos en Barco" },
  hm_c1_d: { pt: "Navegue pelas águas calmas e descubra paisagens deslumbrantes", en: "Sail the calm waters and discover breathtaking landscapes", es: "Navega por las aguas tranquilas y descubre paisajes impresionantes" },
  hm_c1_l: { pt: "Ver roteiros", en: "View routes", es: "Ver rutas" },
  hm_c2_t: { pt: "Comer & Beber", en: "Food & Drink", es: "Comer y Beber" },
  hm_c2_d: { pt: "Saboreie frutos do mar frescos e pratos da culinária carioca", en: "Savor fresh seafood and local Carioca dishes", es: "Saborea mariscos frescos y platos de la cocina carioca" },
  hm_c2_l: { pt: "Explorar restaurantes", en: "Explore restaurants", es: "Explorar restaurantes" },
  hm_c3_t: { pt: "Natureza & Fauna", en: "Nature & Wildlife", es: "Naturaleza y Fauna" },
  hm_c3_d: { pt: "Explore trilhas, observe aves e conecte-se com a natureza", en: "Explore trails, watch birds and connect with nature", es: "Explora senderos, observa aves y conéctate con la naturaleza" },
  hm_c3_l: { pt: "Descobrir mais", en: "Discover more", es: "Descubrir más" },
  hm_c4_t: { pt: "Hospedagem", en: "Accommodation", es: "Alojamiento" },
  hm_c4_d: { pt: "Encontre o lugar perfeito para relaxar e aproveitar a ilha", en: "Find the perfect place to relax and enjoy the island", es: "Encuentra el lugar perfeito para relajarte y disfrutar la isla" },
  hm_c4_l: { pt: "Ver opções", en: "View options", es: "Ver opciones" },

  ilha_c1_t: { pt: "Como chegar", en: "How to get there", es: "Cómo llegar" },
  ilha_c1_d: { pt: "Acesso rápido a partir do Rio. Dicas de transporte e horários.", en: "Quick access from Rio. Transport tips and schedules.", es: "Acceso rápido desde Río. Consejos de transporte y horarios." },
  ilha_c1_l: { pt: "Ver detalhes", en: "View details", es: "Ver detalles" },
  ilha_c2_t: { pt: "História & Cultura", en: "History & Culture", es: "Historia y Cultura" },
  ilha_c2_d: { pt: "Tradições locais, ambiente tranquilo e charme natural.", en: "Local traditions, peaceful environment, and natural charm.", es: "Tradiciones locales, ambiente tranquilo y encanto natural." },
  ilha_c2_l: { pt: "Ler mais", en: "Read more", es: "Leer más" },
  ilha_c3_t: { pt: "Boas práticas", en: "Best practices", es: "Buenas prácticas" },
  ilha_c3_d: { pt: "Recomendações para curtir com respeito à natureza e aos moradores.", en: "Recommendations for enjoying with respect to nature and residents.", es: "Recomendaciones para disfrutar respetando la naturaleza y a los residentes." },
  ilha_c3_l: { pt: "Conferir", en: "Check it out", es: "Conferir" },
  ilha_c4_t: { pt: "Melhor época", en: "Best time to visit", es: "Mejor época" },
  ilha_c4_d: { pt: "Clima, horários e dicas para aproveitar o dia inteiro.", en: "Climate, schedules, and tips to enjoy the whole day.", es: "Clima, horarios y consejos para disfrutar todo el día." },
  ilha_c4_l: { pt: "Planejar", en: "Plan", es: "Planificar" },

  pass_c1_t: { pt: "Roteiro clássico de barco", en: "Classic boat tour", es: "Ruta clásica en barco" },
  pass_c1_d: { pt: "Passeio leve, paisagens e paradas para fotos.", en: "Light tour, landscapes, and photo stops.", es: "Paseo ligero, paisajes y paradas para fotos." },
  pass_c1_l: { pt: "Ver roteiro", en: "View route", es: "Ver ruta" },
  pass_c2_t: { pt: "Manhã perfeita", en: "Perfect morning", es: "Mañana perfecta" },
  pass_c2_d: { pt: "Água mais calma e mais chance de ver animais.", en: "Calmer water and better chances of seeing animals.", es: "Agua más tranquila y más posibilidades de ver animales." },
  pass_c2_l: { pt: "Dicas", en: "Tips", es: "Consejos" },
  pass_c3_t: { pt: "Pontos instagramáveis", en: "Instagrammable spots", es: "Lugares instagrameables" },
  pass_c3_d: { pt: "Lugares com luz bonita e ângulos incríveis.", en: "Places with beautiful light and incredible angles.", es: "Lugares con luz hermosa y ángulos increíbles." },
  pass_c3_l: { pt: "Descobrir", en: "Discover", es: "Descubrir" },
  pass_c4_t: { pt: "O que levar", en: "What to bring", es: "Qué llevar" },
  pass_c4_d: { pt: "Protetor, água, chapéu e itens essenciais.", en: "Sunscreen, water, hat, and essential items.", es: "Protector, agua, sombrero y artículos esenciales." },
  pass_c4_l: { pt: "Checklist", en: "Checklist", es: "Checklist" },

  com_c1_t: { pt: "Frutos do mar", en: "Seafood", es: "Mariscos" },
  com_c1_d: { pt: "Os clássicos que você precisa experimentar.", en: "The classics you must try.", es: "Los clásicos que debes probar." },
  com_c1_l: { pt: "Ver opções", en: "View options", es: "Ver opciones" },
  com_c2_t: { pt: "Bares & pôr do sol", en: "Bars & sunsets", es: "Bares y atardeceres" },
  com_c2_d: { pt: "Clima perfeito pra relaxar no fim do dia.", en: "Perfect vibe to relax at the end of the day.", es: "Ambiente perfecto para relajarse al final del día." },
  com_c2_l: { pt: "Sugestões", en: "Suggestions", es: "Sugerencias" },
  com_c3_t: { pt: "Café e lanches", en: "Coffee and snacks", es: "Café y bocadillos" },
  com_c3_d: { pt: "Paradas rápidas durante o passeio.", en: "Quick stops during the tour.", es: "Paradas rápidas durante el paseo." },
  com_c3_l: { pt: "Dicas", en: "Tips", es: "Consejos" },
  com_c4_t: { pt: "Para famílias", en: "For families", es: "For families" },
  com_c4_d: { pt: "Locais tranquilos e com boas opções.", en: "Quiet places with good options.", es: "Lugares tranquilos con buenas opciones." },
  com_c4_l: { pt: "Ver", en: "View", es: "Ver" },

  hosp_c1_t: { pt: "Pousadas aconchegantes", en: "Cozy inns", es: "Posadas acogedoras" },
  hosp_c1_d: { pt: "Opções para descansar e aproveitar a ilha.", en: "Options to rest and enjoy the island.", es: "Opciones para descansar y disfrutar de la isla." },
  hosp_c1_l: { pt: "Ver opções", en: "View options", es: "Ver opções" },
  hosp_c2_t: { pt: "Melhor localização", en: "Best location", es: "Mejor ubicación" },
  hosp_c2_d: { pt: "Dicas para ficar perto do que você quer fazer.", en: "Tips to stay close to what you want to do.", es: "Consejos para estar cerca de lo que quieres hacer." },
  hosp_c2_l: { pt: "Guia", en: "Guide", es: "Guía" },
  hosp_c3_t: { pt: "Viagem romântica", en: "Romantic trip", es: "Viaje romántico" },
  hosp_c3_d: { pt: "Sugestões para casal e momentos especiais.", en: "Suggestions for couples and special moments.", es: "Sugerencias para parejas y momentos especiales." },
  hosp_c3_l: { pt: "Roteiro", en: "Itinerary", es: "Itinerario" },
  hosp_c4_t: { pt: "Custo-benefício", en: "Cost-benefit", es: "Costo-beneficio" },
  hosp_c4_d: { pt: "Como equilibrar conforto e preço.", en: "How to balance comfort and price.", es: "Cómo equilibrar comodidad y precio." },
  hosp_c4_l: { pt: "Planejar", en: "Plan", es: "Planificar" },

  faz_c1_t: { pt: "Passeios de barco", en: "Boat tours", es: "Paseos en barco" },
  faz_c1_d: { pt: "O clássico imperdível para primeiro dia.", en: "The unmissable classic for the first day.", es: "El clásico imperdible para el primer día." },
  faz_c1_l: { pt: "Ver rotas", en: "View routes", es: "Ver rutas" },
  faz_c2_t: { pt: "Comer bem", en: "Eat well", es: "Comer bien" },
  faz_c2_d: { pt: "Experiências gastronômicas locais.", en: "Local gastronomic experiences.", es: "Experiencias gastronómicas locales." },
  faz_c2_l: { pt: "Ver opções", en: "View options", es: "Ver opciones" },
  faz_c3_t: { pt: "Contato com a natureza", en: "Contact with nature", es: "Contacto con la natureza" },
  faz_c3_d: { pt: "Trilhas e observação de fauna.", en: "Trails and wildlife observation.", es: "Senderos y observación de fauna." },
  faz_c3_l: { pt: "Ver seção", en: "View section", es: "Ver sección" },
  faz_c4_t: { pt: "Onde ficar", en: "Where to stay", es: "Dónde alojarse" },
  faz_c4_d: { pt: "Dicas rápidas de hospedagem.", en: "Quick accommodation tips.", es: "Consejos rápidos de alojamiento." },
  faz_c4_l: { pt: "Ver", en: "View", es: "Ver" },

  nat_c1_t: { pt: "Trilhas leves", en: "Light trails", es: "Senderos ligeros" },
  nat_c1_d: { pt: "Caminhadas curtas e paisagens lindas.", en: "Short walks and beautiful landscapes.", es: "Caminatas cortas y paisajes hermosos." },
  nat_c1_l: { pt: "Ver dicas", en: "View tips", es: "Ver consejos" },
  nat_c2_t: { pt: "Observação de aves", en: "Bird watching", es: "Observación de aves" },
  nat_c2_d: { pt: "Melhor horário e onde procurar.", en: "Best times and where to look.", es: "Mejores horarios y dónde buscar." },
  nat_c2_l: { pt: "Descobrir", en: "Discover", es: "Descubrir" },

  plan_o1_t: { pt: "Passeio de barco (clássico)", en: "Boat tour (classic)", es: "Paseo en barco (clásico)" },
  plan_o1_d: { pt: "Rota leve com paisagens e paradas para fotos.", en: "Light route with landscapes and photo stops.", es: "Ruta ligera con paisajes y paradas para fotos." },
  plan_o1_c1: { pt: "2h–3h", en: "2h–3h", es: "2h–3h" },
  plan_o1_c2: { pt: "Barco", en: "Boat", es: "Barco" },
  plan_o2_t: { pt: "Passeio de barco (manhã cedo)", en: "Boat tour (early morning)", es: "Paseo en barco (temprano)" },
  plan_o2_d: { pt: "Águas mais calmas e clima perfeito.", en: "Calmer waters and perfect weather.", es: "Aguas más tranquilas y clima perfecto." },
  plan_o2_c1: { pt: "Manhã", en: "Morning", es: "Mañana" },
  plan_o3_t: { pt: "Passeio de barco no pôr do sol", en: "Sunset boat tour", es: "Paseo en barco al atardecer" },
  plan_o3_d: { pt: "Luz linda + vibe relax.", en: "Beautiful light + relaxed vibe.", es: "Luz hermosa + ambiente relajado." },
  plan_o3_c1: { pt: "Fim de tarde", en: "Late afternoon", es: "Atardecer" },
  plan_o4_t: { pt: "Natureza & fauna", en: "Nature & wildlife", es: "Naturaleza y fauna" },
  plan_o4_d: { pt: "Observação de aves e paisagens verdes.", en: "Bird watching and green landscapes.", es: "Observación de aves y paisajes verdes." },
  plan_o4_c1: { pt: "1h–2h", en: "1h–2h", es: "1h–2h" },
  plan_o4_c2: { pt: "Natureza", en: "Nature", es: "Naturaleza" },
  plan_o5_t: { pt: "Trilha leve", en: "Light trail", es: "Sendero ligero" },
  plan_o5_d: { pt: "Caminhada curta para explorar a natureza.", en: "Short walk to explore nature.", es: "Caminata corta para explorar la naturaleza." },
  plan_o5_c1: { pt: "Leve", en: "Light", es: "Ligero" },
  plan_o6_t: { pt: "Caiaque / remo (se disponível)", en: "Kayak / rowing (if available)", es: "Kayak / remo (si está disponible)" },
  plan_o6_d: { pt: "Atividade na água (opcional).", en: "Water activity (optional).", es: "Actividad acuática (opcional)." },
  plan_o6_c1: { pt: "1h", en: "1h", es: "1h" },
  plan_o6_c2: { pt: "Atividade", en: "Activity", es: "Actividad" },
  plan_o7_t: { pt: "Almoço frutos do mar", en: "Seafood lunch", es: "Almuerzo de mariscos" },
  plan_o7_d: { pt: "Experiência gastronômica local.", en: "Local gastronomic experience.", es: "Experiencia gastronómica local." },
  plan_o7_c2: { pt: "Gastronomia", en: "Gastronomy", es: "Gastronomía" },
  plan_o8_t: { pt: "Café e lanches", en: "Coffee and snacks", es: "Café y bocadillos" },
  plan_o8_d: { pt: "Parada rápida para recarregar.", en: "Quick stop to recharge.", es: "Parada rápida para recargar." },
  plan_o8_c1: { pt: "Rápido", en: "Quick", es: "Rápido" },
  plan_o9_t: { pt: "Bares & drinks", en: "Bars & drinks", es: "Bares y bebidas" },
  plan_o9_d: { pt: "Perfeito para curtir a noite.", en: "Perfect for enjoying the night.", es: "Perfecto para disfrutar la noche." },
  plan_o9_c1: { pt: "Noite", en: "Night", es: "Noche" },
  plan_o10_t: { pt: "Pontos instagramáveis", en: "Instagrammable spots", es: "Lugares instagrameables" },
  plan_o10_d: { pt: "Paradas para fotos com ângulos e luz boa.", en: "Photo stops with good angles and light.", es: "Paradas para fotos con buenos ángulos y luz." },
  plan_o10_c1: { pt: "Fotos", en: "Photos", es: "Fotos" },
  plan_o11_t: { pt: "Relax / descanso", en: "Relax / rest", es: "Relax / descanso" },
  plan_o11_d: { pt: "Tempo livre para explorar sem pressa.", en: "Free time to explore without rushing.", es: "Tiempo libre para explorar sin prisas." },
  plan_o11_c1: { pt: "Livre", en: "Free", es: "Libre" },
  plan_o11_c2: { pt: "Relax", en: "Relax", es: "Relax" },
  plan_o12_t: { pt: "Passeio família", en: "Family tour", es: "Paseo familiar" },
  plan_o12_d: { pt: "Opções tranquilas, bom para crianças.", en: "Quiet options, good for children.", es: "Opciones tranquilas, buenas para niños." },
  plan_o12_c1: { pt: "2h", en: "2h", es: "2h" },
  plan_o12_c2: { pt: "Família", en: "Family", es: "Familia" },

  gigi_fab: { pt: "Fale com a Gigi", en: "Talk to Gigi", es: "Habla con Gigi" },
  gigi_hello: { pt: "Olá, me chamo Gigi!", en: "Hi, I'm Gigi!", es: "¡Hola, soy Gigi!" },
  gigi_sub: { pt: "Me envie uma mensagem e eu te respondo direto no WhatsApp!", en: "Send me a message and I'll reply directly on WhatsApp!", es: "¡Envíame un mensaje y te responderé directamente por WhatsApp!" },
  gigi_lbl_name: { pt: "Seu nome *", en: "Your name *", es: "Tu nombre *" },
  gigi_lbl_phone: { pt: "Seu telefone *", en: "Your phone *", es: "Tu teléfono *" },
  gigi_lbl_msg: { pt: "Mensagem *", en: "Message *", es: "Mensaje *" },
  gigi_btn: { pt: "Enviar", en: "Send", es: "Enviar" },
  gigi_note: { pt: "Ao enviar, abriremos o WhatsApp com sua mensagem pronta.", en: "When sending, we will open WhatsApp with your message ready.", es: "Al enviar, abriremos WhatsApp con tu mensaje listo." },

  pg_ilha_h1: { pt: "A Ilha", en: "The Island", es: "La Isla" },
  pg_ilha_p: { pt: "Um refúgio tropical com natureza exuberante, clima tranquilo e experiências únicas pertinho do Rio.", en: "A tropical refuge with lush nature, a peaceful climate, and unique experiences close to Rio.", es: "Un refugio tropical con naturaleza exuberante, clima tranquilo y experiencias únicas cerca de Río." },
  pg_passeios_h1: { pt: "Passeios & Rotas", en: "Tours & Routes", es: "Paseos y Rutas" },
  pg_passeios_p: { pt: "Roteiros de barco, paradas para fotos, horários ideais e dicas do que levar para aproveitar melhor.", en: "Boat itineraries, photo stops, ideal times, and tips on what to bring to make the most of it.", es: "Itinerarios en barco, paradas para fotos, horarios ideales y consejos sobre qué llevar." },
  pg_comer_h1: { pt: "Comer & Beber", en: "Food & Drink", es: "Comer y Beber" },
  pg_comer_p: { pt: "Explore sabores locais: frutos do mar frescos, bares charmosos e aquele pôr do sol perfeito.", en: "Explore local flavors: fresh seafood, charming bars, and that perfect sunset.", es: "Explora sabores locales: mariscos frescos, bares encantadores y ese atardecer perfecto." },
  pg_hospeda_h1: { pt: "Hospedagem", en: "Accommodation", es: "Accommodation" },
  pg_hospeda_p: { pt: "Encontre o lugar perfeito para descansar: opções aconchegantes, boas localizações e dicas de custo-benefício.", en: "Find the perfect place to rest: cozy options, good locations, and cost-benefit tips.", es: "Encuentra el lugar perfeito para descansar: opciones acogedoras, buenas ubicaciones y consejos." },
  pg_fazer_h1: { pt: "O que fazer", en: "What to do", es: "Qué hacer" },
  pg_fazer_p: { pt: "Um mix perfeito entre natureza, gastronomia e passeios. Escolha seu estilo e monte seu roteiro.", en: "A perfect mix of nature, gastronomy, and tours. Choose your style and build your itinerary.", es: "Una mezcla perfecta de naturaleza, gastronomía y paseos. Elige tu estilo y arma tu itinerario." },
  pg_fazer_h2: { pt: "Natureza & Fauna", en: "Nature & Wildlife", es: "Naturaleza y Fauna" },
  pg_fazer_p2: { pt: "Trilhas leves, observação de aves e paisagens para fotos incríveis.", en: "Light trails, bird watching, and landscapes for incredible photos.", es: "Senderos ligeros, observación de aves y paisajes para fotos incríveis." },
  pg_plan_h1: { pt: "Monte seu roteiro", en: "Build your itinerary", es: "Arma tu itinerario" },
  pg_plan_p: { pt: "Selecione as opções que você quer fazer. Ao enviar, pediremos seu número para te mandar o roteiro completo com preços e opções.", en: "Select the options you want to do. Upon sending, we will ask for your number to send you the complete itinerary.", es: "Selecciona las opciones que deseas hacer. Al enviar, te pediremos tu número para enviarte el itinerario completo." },
  pg_plan_h2: { pt: "Escolha suas opções", en: "Choose your options", es: "Elige tus opciones" },
  pg_plan_p2: { pt: "Marque o que você quer fazer e clique em Enviar roteiro.", en: "Check what you want to do and click Send itinerary.", es: "Marca lo que quieres hacer y haz clic en Enviar itinerario." },
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
    { href: "o-que-fazer.html", label: t("nav_fazer") },
  ],
  ctas: {
    header: { href: "planeje.html", label: t("btn_planeje") },
    heroPrimary: { href: "planeje.html", label: t("btn_planeje") },
    heroSecondary: { href: "a-ilha.html", label: t("btn_conheca") },
  },
  hero: {
    bg: "assets/hero.jpg",
    pill: t("hero_pill"),
    titleA: t("hero_title_a"),
    titleB: t("hero_title_b"),
    subtitle: t("hero_sub"),
  },
  tip: {
    capiImg: "assets/capi.png",
    capiTag: t("capi_tag"),
    title: t("tip_title"),
    text: t("tip_text"),
  },
  homeCards: [
    { title:t("hm_c1_t"), desc:t("hm_c1_d"), linkLabel:t("hm_c1_l"), href:"passeios-rotas.html", img:"assets/card-passeios.jpg", icon:"boat" },
    { title:t("hm_c2_t"), desc:t("hm_c2_d"), linkLabel:t("hm_c2_l"), href:"comer-beber.html", img:"assets/card-comer.jpg", icon:"fork" },
    { title:t("hm_c3_t"), desc:t("hm_c3_d"), linkLabel:t("hm_c3_l"), href:"o-que-fazer.html#natureza", img:"assets/card-natureza.jpg", icon:"leaf" },
    { title:t("hm_c4_t"), desc:t("hm_c4_d"), linkLabel:t("hm_c4_l"), href:"hospedagem.html", img:"assets/card-hospedagem.jpg", icon:"bed" },
  ],
  pages: {
    "a-ilha": [
      { title:t("ilha_c1_t"), desc:t("ilha_c1_d"), linkLabel:t("ilha_c1_l"), href:"planeje.html", img:"assets/card-passeios.jpg", icon:"boat" },
      { title:t("ilha_c2_t"), desc:t("ilha_c2_d"), linkLabel:t("ilha_c2_l"), href:"o-que-fazer.html", img:"assets/card-natureza.jpg", icon:"leaf" },
      { title:t("ilha_c3_t"), desc:t("ilha_c3_d"), linkLabel:t("ilha_c3_l"), href:"o-que-fazer.html", img:"assets/card-hospedagem.jpg", icon:"bed" },
      { title:t("ilha_c4_t"), desc:t("ilha_c4_d"), linkLabel:t("ilha_c4_l"), href:"planeje.html", img:"assets/card-comer.jpg", icon:"fork" },
    ],
    "passeios-rotas": [
      { title:t("pass_c1_t"), desc:t("pass_c1_d"), linkLabel:t("pass_c1_l"), href:"planeje.html", img:"assets/card-passeios.jpg", icon:"boat" },
      { title:t("pass_c2_t"), desc:t("pass_c2_d"), linkLabel:t("pass_c2_l"), href:"index.html", img:"assets/card-natureza.jpg", icon:"leaf" },
      { title:t("pass_c3_t"), desc:t("pass_c3_d"), linkLabel:t("pass_c3_l"), href:"o-que-fazer.html", img:"assets/card-comer.jpg", icon:"fork" },
      { title:t("pass_c4_t"), desc:t("pass_c4_d"), linkLabel:t("pass_c4_l"), href:"planeje.html", img:"assets/card-hospedagem.jpg", icon:"bed" },
    ],
    "comer-beber": [
      { title:t("com_c1_t"), desc:t("com_c1_d"), linkLabel:t("com_c1_l"), href:"planeje.html", img:"assets/card-comer.jpg", icon:"fork" },
      { title:t("com_c2_t"), desc:t("com_c2_d"), linkLabel:t("com_c2_l"), href:"o-que-fazer.html", img:"assets/card-passeios.jpg", icon:"boat" },
      { title:t("com_c3_t"), desc:t("com_c3_d"), linkLabel:t("com_c3_l"), href:"planeje.html", img:"assets/card-natureza.jpg", icon:"leaf" },
      { title:t("com_c4_t"), desc:t("com_c4_d"), linkLabel:t("com_c4_l"), href:"planeje.html", img:"assets/card-hospedagem.jpg", icon:"bed" },
    ],
    "hospedagem": [
      { title:t("hosp_c1_t"), desc:t("hosp_c1_d"), linkLabel:t("hosp_c1_l"), href:"planeje.html", img:"assets/card-hospedagem.jpg", icon:"bed" },
      { title:t("hosp_c2_t"), desc:t("hosp_c2_d"), linkLabel:t("hosp_c2_l"), href:"o-que-fazer.html", img:"assets/card-natureza.jpg", icon:"leaf" },
      { title:t("hosp_c3_t"), desc:t("hosp_c3_d"), linkLabel:t("hosp_c3_l"), href:"planeje.html", img:"assets/card-comer.jpg", icon:"fork" },
      { title:t("hosp_c4_t"), desc:t("hosp_c4_d"), linkLabel:t("hosp_c4_l"), href:"planeje.html", img:"assets/card-passeios.jpg", icon:"boat" },
    ],
    "o-que-fazer": [
      { title:t("faz_c1_t"), desc:t("faz_c1_d"), linkLabel:t("faz_c1_l"), href:"passeios-rotas.html", img:"assets/card-passeios.jpg", icon:"boat" },
      { title:t("faz_c2_t"), desc:t("faz_c2_d"), linkLabel:t("faz_c2_l"), href:"comer-beber.html", img:"assets/card-comer.jpg", icon:"fork" },
      { title:t("faz_c3_t"), desc:t("faz_c3_d"), linkLabel:t("faz_c3_l"), href:"o-que-fazer.html#natureza", img:"assets/card-natureza.jpg", icon:"leaf" },
      { title:t("faz_c4_t"), desc:t("faz_c4_d"), linkLabel:t("faz_c4_l"), href:"hospedagem.html", img:"assets/card-hospedagem.jpg", icon:"bed" },
    ],
  },
  naturezaCards: [
    { title:t("nat_c1_t"), desc:t("nat_c1_d"), linkLabel:t("nat_c1_l"), href:"planeje.html", img:"assets/card-natureza.jpg", icon:"leaf" },
    { title:t("nat_c2_t"), desc:t("nat_c2_d"), linkLabel:t("nat_c2_l"), href:"planeje.html", img:"assets/card-passeios.jpg", icon:"boat" },
  ],
  plannerOptions: [
    { id:"boat-classic", title:t("plan_o1_t"), desc:t("plan_o1_d"), chips:[t("plan_o1_c1"), t("plan_o1_c2")] },
    { id:"boat-sunrise", title:t("plan_o2_t"), desc:t("plan_o2_d"), chips:[t("plan_o2_c1"), t("plan_o1_c2")] },
    { id:"boat-sunset", title:t("plan_o3_t"), desc:t("plan_o3_d"), chips:[t("plan_o3_c1"), t("plan_o1_c2")] },
    { id:"wildlife", title:t("plan_o4_t"), desc:t("plan_o4_d"), chips:[t("plan_o4_c1"), t("plan_o4_c2")] },
    { id:"trail", title:t("plan_o5_t"), desc:t("plan_o5_d"), chips:[t("plan_o5_c1"), t("plan_o4_c2")] },
    { id:"kayak", title:t("plan_o6_t"), desc:t("plan_o6_d"), chips:[t("plan_o6_c1"), t("plan_o6_c2")] },
    { id:"food-sea", title:t("plan_o7_t"), desc:t("plan_o7_d"), chips:[t("plan_o4_c1"), t("plan_o7_c2")] },
    { id:"coffee", title:t("plan_o8_t"), desc:t("plan_o8_d"), chips:[t("plan_o8_c1"), t("plan_o7_c2")] },
    { id:"bars", title:t("plan_o9_t"), desc:t("plan_o9_d"), chips:[t("plan_o9_c1"), t("plan_o7_c2")] },
    { id:"photos", title:t("plan_o10_t"), desc:t("plan_o10_d"), chips:[t("plan_o6_c1"), t("plan_o10_c1")] },
    { id:"relax", title:t("plan_o11_t"), desc:t("plan_o11_d"), chips:[t("plan_o11_c1"), t("plan_o11_c2")] },
    { id:"family", title:t("plan_o12_t"), desc:t("plan_o12_d"), chips:[t("plan_o12_c1"), t("plan_o12_c2")] },
  ],
};

const WHATSAPP = { toNumber: "5521965666913" };

const GIGI = {
  whatsappNumber: "5521965666913",
  fabText: t("gigi_fab"),
  title: "Gigi",
  subtitle: "",
  /* CORREÇÃO DO NOME DO ARQUIVO DA GIGI (Tudo minúsculo como no seu PC) */
  gigiImage: "assets/gigi.png", 
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

  const capiTag = document.getElementById("capiTag");
  if (capiTag) capiTag.textContent = SITE.tip.capiTag;

  const tipTitle = document.getElementById("tipTitle");
  if (tipTitle) tipTitle.textContent = SITE.tip.title;

  const tipText = document.getElementById("tipText");
  if (tipText) tipText.textContent = " " + SITE.tip.text;

  const homeCards = document.getElementById("homeCards");
  if (homeCards) homeCards.innerHTML = SITE.homeCards.map((c,i)=>cardHtml(c,i)).join("");
}

function mountPageCards(pageKey) {
  const list = SITE.pages[pageKey] || [];
  const box = document.getElementById("pageCards");
  if (box) box.innerHTML = list.map((c,i)=>cardHtml(c,i)).join("");
}

function mountNatureCards() {
  const box = document.getElementById("natureCards");
  if (box) box.innerHTML = SITE.naturezaCards.map((c,i)=>cardHtml(c,i)).join("");
}

function mountPlanner() {
  const form = document.getElementById("plannerForm");
  const optionsBox = document.getElementById("plannerOptions");
  const feedback = document.getElementById("planFeedback");
  const clearBtn = document.getElementById("clearPlan");

  if (!form || !optionsBox || !feedback) return;
  const options = SITE.plannerOptions || [];

  optionsBox.innerHTML = options.map((opt) => {
    return `
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

  clearBtn?.addEventListener("click", () => {
    optionsBox.querySelectorAll("input[type='checkbox']").forEach(i => i.checked = false);
    syncCheckedStyles();
    feedback.innerHTML = ``;
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const selectedIds = Array.from(optionsBox.querySelectorAll("input[type='checkbox']:checked")).map(i => i.value);
    if (!selectedIds.length) {
      feedback.innerHTML = `<div class="planMsg planMsg--error">⚠️ Selecione pelo menos uma opção.</div>`;
      return;
    }
    const selected = options.filter(o => selectedIds.includes(o.id));
    openPhoneModal(selected);
  });
  syncCheckedStyles();
}

function openPhoneModal(selectedOptions) {
  const overlay = document.createElement("div");
  overlay.className = "planModalOverlay";
  overlay.innerHTML = `
    <div class="planModal" role="dialog" aria-modal="true">
      <div class="planModal__top">
        <strong>${t("btn_enviar")}</strong>
        <button class="planModal__close" type="button" aria-label="Fechar">✕</button>
      </div>
      <div class="planModal__body">
        <p>${t("pg_plan_p")}</p>
        <input id="planPhone" type="tel" placeholder="Ex: +55 21 99999-9999" />
        <button class="btn btn--green" id="planPhoneSend" type="button">${t("btn_enviar")}</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  const closeBtn = overlay.querySelector(".planModal__close");
  const sendBtn = overlay.querySelector("#planPhoneSend");
  const phoneInput = overlay.querySelector("#planPhone");

  function close() { overlay.remove(); }
  closeBtn?.addEventListener("click", close);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });

  sendBtn?.addEventListener("click", () => {
    const phone = String(phoneInput?.value || "").trim();
    if (!phone) { phoneInput?.focus(); return; }
    const list = selectedOptions.map(o => `• ${o.title}`).join("\n");
    const msg = `Olá! Recebemos um pedido de roteiro (Portal Ilha da Gigóia).\n\nTelefone do visitante: ${phone}\n\nOpções selecionadas:\n${list}\n\nPor favor, enviar roteiro completo com preços e opções.`;
    const url = `https://wa.me/${WHATSAPP.toNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    close();
  });
  setTimeout(() => phoneInput?.focus(), 80);
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
          <div class="gigiCard__img" id="gigiImgBox">56×56px</div>
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
    gigiBox.style.display = "block";
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
      el.textContent = DICT[key][currentLang] || DICT[key].pt;
    }
  });
}

(function init(){
  setupProgress();
  mountHeaderFooter();
  const page = document.body.getAttribute("data-page");

  if (page === "home") mountHome();
  if (page && SITE.pages[page]) mountPageCards(page);
  if (page === "o-que-fazer") mountNatureCards();
  if (page === "planeje") mountPlanner();

  mountGigiWidget();
  setupGigiFloat();
  translateHtmlElements(); 
  
  requestAnimationFrame(()=>document.body.classList.add("is-ready"));
  setupHeaderScroll();
  setupHeroParallax();
  setupReveal();
})();
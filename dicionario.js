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

  // === TERMOS GERAIS (BOTÕES E LABELS) ===
  lbl_duracao: { pt: "Duração", en: "Duration", es: "Duración" },
  lbl_valor_medio: { pt: "Valor Médio", en: "Average Price", es: "Precio Medio" },
  btn_voltar_passeios: { pt: "← Voltar para Passeios e Rotas", en: "← Back to Tours & Routes", es: "← Volver a Paseos y Rutas" },
  btn_agendar_gigi: { pt: "💬 Agendar com a Gigi", en: "💬 Book with Gigi", es: "💬 Reservar con Gigi" },
  btn_ver_detalhes: { pt: "Ver Detalhes", en: "View Details", es: "Ver Detalles" },
  btn_falar_gigi: { pt: "Falar com a Gigi", en: "Talk to Gigi", es: "Hablar con Gigi" },
  btn_voltar_bares: { pt: "← Voltar para Bares e Drinks", en: "← Back to Bars & Drinks", es: "← Volver a Bares y Bebidas" },

  // === PÁGINA: A ILHA ===
  title_a_ilha: { pt: "A Ilha", en: "The Island", es: "La Isla" },
  sub_a_ilha: { 
    pt: "Conheça a história, a cultura e tudo o que você precisa saber antes de desembarcar no nosso paraíso carioca.", 
    en: "Discover the history, culture, and everything you need to know before arriving at our Carioca paradise.", 
    es: "Descubre la historia, la cultura y todo lo que necesitas saber antes de desembarcar en nuestro paraíso carioca." 
  },

  // === PÁGINA: AIRBNB E TEMPORADA ===
  title_airbnb: { pt: "Airbnb e Temporada", en: "Airbnb & Vacation Rentals", es: "Airbnb y Alquileres Vacacionales" },
  sub_airbnb: { pt: "Privacidade, liberdade e o conforto de uma casa inteira para você aproveitar o melhor da ilha.", en: "Privacy, freedom, and the comfort of an entire house to enjoy the best of the island.", es: "Privacidad, libertad y el confort de una casa entera para disfrutar lo mejor de la isla." },
  
  desc_venti: { pt: "Duplex completo em condomínio tranquilo com jardim e churrasqueira.", en: "Complete duplex in a quiet condo with garden and BBQ.", es: "Dúplex completo en condominio tranquilo con jardín y barbacoa." },
  feat_venti: { pt: "✓ Até 7 hóspedes • Aceita Pet", en: "✓ Up to 7 guests • Pet Friendly", es: "✓ Hasta 7 huéspedes • Mascotas Permitidas" },

  desc_lux: { pt: "Apartamento moderno perto do metrô, ideal para casais.", en: "Modern apartment near the subway, ideal for couples.", es: "Apartamento moderno cerca del metro, ideal para parejas." },
  feat_lux: { pt: "✓ Até 4 hóspedes • Moderno", en: "✓ Up to 4 guests • Modern", es: "✓ Hasta 4 huéspedes • Moderno" },

  desc_goia: { pt: "Duplex moderno e amplo nos últimos andares do prédio.", en: "Modern and spacious duplex on the top floors of the building.", es: "Dúplex moderno y amplio en los últimos pisos del edificio." },
  feat_goia: { pt: "✓ Até 8 hóspedes • Localização", en: "✓ Up to 8 guests • Location", es: "✓ Hasta 8 huéspedes • Ubicación" },

  desc_estatua: { pt: "Hospedagem com piscina e churrasqueira para grandes grupos.", en: "Accommodation with pool and BBQ for large groups.", es: "Alojamiento con piscina y barbacoa para grupos grandes." },
  feat_estatua: { pt: "✓ Até 16 hóspedes • Piscina", en: "✓ Up to 16 guests • Pool", es: "✓ Hasta 16 huéspedes • Piscina" },

  // Modal Cadastro Casa (Airbnb)
  side_badge_cad: { pt: "Cadastre sua<br>Casa<br>conosco!", en: "Register your<br>House<br>with us!", es: "¡Registra tu<br>Casa<br>con nosotros!" },
  modal_fale_title: { pt: "Fale Conosco", en: "Contact Us", es: "Contáctenos" },
  modal_fale_sub: { pt: "Preencha os dados abaixo para solicitar o cadastro da sua casa no Portal.", en: "Fill out the details below to request the registration of your house on the Portal.", es: "Complete los datos a continuación para solicitar el registro de su casa en el Portal." },
  lbl_nome_espaco: { pt: "Nome do Espaço / Casa", en: "Space / House Name", es: "Nombre del Espacio / Casa" },
  lbl_seu_nome: { pt: "Seu Nome", en: "Your Name", es: "Tu Nombre" },
  lbl_link_msg: { pt: "Link ou Mensagem", en: "Link or Message", es: "Enlace o Mensaje" },
  btn_enviar_solic: { pt: "Enviar Solicitação", en: "Send Request", es: "Enviar Solicitud" },
  btn_enviando: { pt: "Enviando...", en: "Sending...", es: "Enviando..." },
  modal_sucesso_title: { pt: "Solicitação Enviada!", en: "Request Sent!", es: "¡Solicitud Enviada!" },
  modal_sucesso_sub: { pt: "Entraremos em contato em breve.", en: "We will contact you shortly.", es: "Nos pondremos en contacto en breve." },
  btn_fechar: { pt: "Fechar", en: "Close", es: "Cerrar" },

  // === PÁGINA: AK BAR ===
  title_ak_bar: { pt: "AK Bar", en: "AK Bar", es: "AK Bar" },
  sub_ak_bar: { pt: "Um clássico da Ilha da Gigóia para quem não abre mão de um bom petisco e o visual do pôr do sol.", en: "A Gigóia Island classic for those who love great snacks and sunset views.", es: "Un clásico de la Isla Gigóia para quienes no renuncian a unas buenas tapas y vistas al atardecer." },
  
  ak_sobre_titulo: { pt: "Sobre o Bar", en: "About the Bar", es: "Sobre el Bar" },
  ak_sobre_p1: { pt: "O <strong>AK Bar</strong> é sinônimo de tradição e hospitalidade. Com uma das vistas mais privilegiadas para os canais da Ilha da Gigóia, o bar oferece o cenário perfeito para relaxar e curtir o \"lifestyle\" insular.", en: "The <strong>AK Bar</strong> is synonymous with tradition and hospitality. With one of the most privileged views of the Gigóia Island canals, the bar offers the perfect setting to relax and enjoy the island lifestyle.", es: "El <strong>AK Bar</strong> es sinónimo de tradición y hospitalidad. Con una de las vistas más privilegiadas de los canales de la Isla Gigóia, el bar ofrece el escenario perfecto para relajarse y disfrutar del estilo de vida isleño." },
  ak_sobre_p2: { pt: "É o destino certo para quem busca aquela cerveja estupidamente gelada acompanhada de petiscos que trazem o verdadeiro sabor do Rio. O vai e vem dos barcos e o reflexo do sol na água completam a experiência.", en: "It's the right destination for those looking for an ice-cold beer accompanied by snacks that bring the true taste of Rio. The coming and going of boats and the reflection of the sun on the water complete the experience.", es: "Es el destino indicado para quienes buscan una cerveza helada acompañada de tapas que traen el verdadero sabor de Río. El ir y venir de los barcos y el reflejo del sol en el agua completan la experiencia." },
  
  ak_esp_titulo: { pt: "Especialidades", en: "Specialties", es: "Especialidades" },
  ak_esp_1: { pt: "✓ Petiscos de Boteco", en: "✓ Pub Snacks", es: "✓ Tapas de Bar" },
  ak_esp_2: { pt: "✓ Cerveja no Ponto", en: "✓ Ice-Cold Beer", es: "✓ Cerveza Helada" },
  ak_esp_3: { pt: "✓ Atendimento Amigável", en: "✓ Friendly Service", es: "✓ Servicio Amable" },
  ak_esp_4: { pt: "✓ Vista Panorâmica", en: "✓ Panoramic View", es: "✓ Vista Panorámica" },
  
  ak_dest_titulo: { pt: "Destaque", en: "Highlight", es: "Destacado" },
  ak_dest_p: { pt: "Famoso pelo pôr do sol inesquecível à beira do canal.", en: "Famous for the unforgettable sunset by the canal.", es: "Famoso por el inolvidable atardecer junto al canal." },
  
  ak_ideal_titulo: { pt: "Ideal Para", en: "Ideal For", es: "Ideal Para" },
  ak_ideal_p: { pt: "Happy hour com amigos e momentos relaxantes.", en: "Happy hour with friends and relaxing moments.", es: "Happy hour con amigos y momentos relajantes." },

  // === PÁGINA: BAR BRIZA ===
  badge_briza: { pt: "🍹 Drinks & Vibes", en: "🍹 Drinks & Vibes", es: "🍹 Drinks y Vibras" },
  title_briza: { pt: "Bar Briza", en: "Bar Briza", es: "Bar Briza" },
  sub_briza: { pt: "Onde a sofisticação encontra a descontração da Ilha. Cocktails autorais e a melhor vista para a lagoa.", en: "Where sophistication meets island relaxation. Signature cocktails and the best view of the lagoon.", es: "Donde la sofisticación se encuentra con la relajación isleña. Cócteles de autor y la mejor vista a la laguna." },
  
  briza_sobre_titulo: { pt: "Sinta a Briza", en: "Feel the Briza", es: "Siente la Briza" },
  briza_sobre_p: { pt: "O <strong>Bar Briza</strong> é o destino certo para quem procura uma experiência diferenciada. Com uma curadoria musical impecável e uma carta de drinks que valoriza ingredientes locais, o bar se destaca pelo seu ambiente moderno e acolhedor.", en: "<strong>Bar Briza</strong> is the right destination for those looking for a unique experience. With an impeccable musical curation and a drink menu that highlights local ingredients, the bar stands out for its modern and welcoming atmosphere.", es: "<strong>Bar Briza</strong> es el destino indicado para quienes buscan una experiencia diferente. Con una cuidada selección musical y una carta de cócteles que valora los ingredientes locales, el bar destaca por su ambiente moderno y acogedor." },
  
  briza_dest_titulo: { pt: "Destaques", en: "Highlights", es: "Destacados" },
  briza_dest_1: { pt: "✓ Mixologia Autoral", en: "✓ Signature Mixology", es: "✓ Mixología de Autor" },
  briza_dest_2: { pt: "✓ Música ao Vivo e DJs", en: "✓ Live Music & DJs", es: "✓ Música en Vivo y DJs" },
  briza_dest_3: { pt: "✓ Vista Panorâmica", en: "✓ Panoramic View", es: "✓ Vista Panorámica" },
  briza_dest_4: { pt: "✓ Gastronomia Criativa", en: "✓ Creative Gastronomy", es: "✓ Gastronomía Creativa" },
  
  briza_info_titulo: { pt: "Informações", en: "Information", es: "Información" },
  briza_info_p: { pt: "Ideal para comemorações e fins de tarde.", en: "Ideal for celebrations and late afternoons.", es: "Ideal para celebraciones y atardeceres." },
  
  btn_falar_gigi_reserva: { pt: "Falar com a Gigi para Reservas", en: "Talk to Gigi for Reservations", es: "Habla con Gigi para Reservas" },
  btn_voltar_comer: { pt: "← Voltar para Comer & Beber", en: "← Back to Eat & Drink", es: "← Volver a Comer y Beber" },

  // === PÁGINA: BAR CAIÇARAS ===
  title_caicara: { pt: "Bar Caiçaras", en: "Caiçaras Bar", es: "Bar Caiçaras" },
  sub_caicara: { pt: "Referência em frutos do mar e culinária brasileira, unindo sabor caseiro e o visual incrível da nossa lagoa.", en: "A reference in seafood and Brazilian cuisine, combining homemade flavor with the incredible view of our lagoon.", es: "Referencia en mariscos y gastronomía brasileña, uniendo el sabor casero con la increíble vista de nuestra laguna." },
  
  caicara_sobre_titulo: { pt: "Sobre o Restaurante", en: "About the Restaurant", es: "Sobre el Restaurante" },
  caicara_sobre_p1: { pt: "O <strong>Bar Caiçaras</strong> é um marco na Ilha da Gigóia. Perfeito para quem busca um almoço farto e de qualidade, o restaurante se destaca por suas moquecas, peixes grelhados e guarnições que remetem ao melhor da comida feita com carinho.", en: "<strong>Caiçaras Bar</strong> is a landmark on Gigóia Island. Perfect for those looking for a hearty and quality lunch, the restaurant stands out for its moquecas (fish stews), grilled fish, and side dishes that bring out the best of food made with love.", es: "El <strong>Bar Caiçaras</strong> es un ícono en la Isla Gigóia. Perfecto para quienes buscan un almuerzo abundante y de calidad, el restaurante destaca por sus moquecas, pescados a la parrilla y guarniciones que evocan lo mejor de la comida hecha con cariño." },
  caicara_sobre_p2: { pt: "O ambiente é familiar e acolhedor, ideal para quem quer passar horas aproveitando a brisa da lagoa. A tradição se reflete em cada prato, servido sempre com ingredientes frescos e aquele toque caseiro que só a Gigóia tem.", en: "The atmosphere is family-friendly and welcoming, ideal for those who want to spend hours enjoying the lagoon breeze. The tradition is reflected in every dish, always served with fresh ingredients and that homemade touch unique to Gigóia.", es: "El ambiente es familiar y acogedor, ideal para quienes desean pasar horas disfrutando de la brisa de la laguna. La tradición se refleja en cada plato, siempre servido con ingredientes frescos y ese toque casero que solo Gigóia tiene." },
  
  caicara_esp_titulo: { pt: "Especialidades", en: "Specialties", es: "Especialidades" },
  caicara_esp_1: { pt: "✓ Moquecas Variadas", en: "✓ Various Moquecas", es: "✓ Moquecas Variadas" },
  caicara_esp_2: { pt: "✓ Peixes Frescos do Dia", en: "✓ Fresh Catch of the Day", es: "✓ Pescado Fresco del Día" },
  caicara_esp_3: { pt: "✓ Petiscos Clássicos", en: "✓ Classic Snacks", es: "✓ Tapas Clásicas" },
  caicara_esp_4: { pt: "✓ Guarnições Caseiras", en: "✓ Homemade Sides", es: "✓ Guarniciones Caseras" },
  
  caicara_amb_titulo: { pt: "Ambiente", en: "Atmosphere", es: "Ambiente" },
  caicara_amb_p: { pt: "Amplo, arejado e ideal para famílias e grandes grupos.", en: "Spacious, airy, and ideal for families and large groups.", es: "Amplio, ventilado e ideal para familias y grupos grandes." },
  
  caicara_dest_titulo: { pt: "Destaque", en: "Highlight", es: "Destacado" },
  caicara_dest_p: { pt: "🔝 Um dos mais tradicionais e bem avaliados da ilha.", en: "🔝 One of the most traditional and highly rated on the island.", es: "🔝 Uno de los más tradicionales y mejor valorados de la isla." },

  btn_falar_gigi_menu: { pt: "Ver Cardápio via Gigi", en: "See Menu via Gigi", es: "Ver Menú vía Gigi" },

  // === PÁGINA: BAR CAPIVARA ===
  badge_capivara: { pt: "🍤 Peixe Fresco & Arte", en: "🍤 Fresh Fish & Art", es: "🍤 Pescado Fresco y Arte" },
  title_capivara: { pt: "Bar Capivara", en: "Bar Capivara", es: "Bar Capivara" },
  sub_capivara: { pt: "Uma experiência gastronômica autêntica, onde o cardápio é ditado pelo mar e pela criatividade do chef.", en: "An authentic gastronomic experience where the menu is dictated by the sea and the chef's creativity.", es: "Una experiencia gastronómica auténtica, donde el menú es dictado por el mar y la creatividad del chef." },
  
  capivara_sobre_titulo: { pt: "Essência da Lagoa", en: "Essence of the Lagoon", es: "Esencia de la Laguna" },
  capivara_sobre_p: { pt: "O <strong>Bar Capivara</strong> é o destino final para os verdadeiros amantes da gastronomia. Sem luxo ostensivo, mas com um sabor insuperável, o restaurante foca na qualidade extrema da matéria-prima, vinda diretamente dos pescadores locais.", en: "<strong>Bar Capivara</strong> is the ultimate destination for true gastronomy lovers. Without ostentatious luxury but with an unsurpassed flavor, the restaurant focuses on the extreme quality of the raw materials, coming directly from local fishermen.", es: "El <strong>Bar Capivara</strong> es el destino final para los verdaderos amantes de la gastronomía. Sin lujos ostentosos, pero con un sabor insuperable, el restaurante se centra en la calidad extrema de la materia prima, proveniente directamente de los pescadores locales." },
  
  capivara_dest_titulo: { pt: "Destaques", en: "Highlights", es: "Destacados" },
  capivara_dest_1: { pt: "✓ Frutos do Mar do Dia", en: "✓ Catch of the Day Seafood", es: "✓ Mariscos del Día" },
  capivara_dest_2: { pt: "✓ Pratos Autorais", en: "✓ Signature Dishes", es: "✓ Platos de Autor" },
  capivara_dest_3: { pt: "✓ Cervejas Artesanais", en: "✓ Craft Beers", es: "✓ Cervezas Artesanales" },
  capivara_dest_4: { pt: "✓ Localização \"Raiz\" e Charmosa", en: "✓ \"Authentic\" and Charming Location", es: "✓ Ubicación \"Auténtica\" y Encantadora" },
  
  capivara_dica_titulo: { pt: "Fica a Dica", en: "A Quick Tip", es: "Un Consejo" },
  capivara_dica_p: { pt: "Chegue cedo! Como os produtos são frescos, as especialidades costumam acabar rápido.", en: "Arrive early! Since the products are fresh, the specialties tend to sell out quickly.", es: "¡Llega temprano! Como los productos son frescos, las especialidades suelen agotarse rápido." },
  
  capivara_reserva_titulo: { pt: "Reserva", en: "Reservation", es: "Reserva" },
  capivara_reserva_p: { pt: "Altamente recomendado consultar disponibilidade.", en: "Highly recommended to check availability.", es: "Altamente recomendado consultar disponibilidad." },
  
  btn_consultar_disp: { pt: "Consultar Disponibilidade", en: "Check Availability", es: "Consultar Disponibilidad" },

// === PÁGINA: BAR DO ELSON ===
  badge_elson: { pt: "🍻 Hospitalidade & Tradição", en: "🍻 Hospitality & Tradition", es: "🍻 Hospitalidad y Tradición" },
  title_elson: { pt: "Bar do Elson", en: "Elson's Bar", es: "Bar de Elson" },
  sub_elson: { pt: "Um ponto de encontro clássico onde o bom atendimento e o tempero caseiro são as estrelas da casa.", en: "A classic meeting point where great service and homemade seasoning are the stars of the house.", es: "Un clásico punto de encuentro donde el buen servicio y el sazón casero son las estrellas de la casa." },
  
  elson_sobre_titulo: { pt: "Sobre o Bar", en: "About the Bar", es: "Sobre el Bar" },
  elson_sobre_p: { pt: "O <strong>Bar do Elson</strong> é o lugar para quem busca a simplicidade bem feita. Conhecido pelo seu peixe frito crocante e pelos caldos que revigoram, o bar é um reduto de amizade e boas histórias na Ilha da Gigóia.", en: "<strong>Elson's Bar</strong> is the place for those seeking well-made simplicity. Known for its crispy fried fish and invigorating broths, the bar is a haven of friendship and good stories on Gigóia Island.", es: "El <strong>Bar de Elson</strong> es el lugar para quienes buscan la simplicidad bien hecha. Conocido por su pescado frito crujiente y sus caldos vigorizantes, el bar es un refugio de amistad y buenas historias en la Isla Gigóia." },
  
  elson_dest_titulo: { pt: "Para Comer", en: "To Eat", es: "Para Comer" },
  elson_dest_1: { pt: "✓ Peixe Inteiro Frito", en: "✓ Whole Fried Fish", es: "✓ Pescado Entero Frito" },
  elson_dest_2: { pt: "✓ Porções de Boteco Raiz", en: "✓ Authentic Pub Portions", es: "✓ Porciones de Bar Auténticas" },
  elson_dest_3: { pt: "✓ Caldo de Peixe e Camarão", en: "✓ Fish and Shrimp Broth", es: "✓ Caldo de Pescado y Camarón" },
  elson_dest_4: { pt: "✓ Pratos Feitos (Almoço)", en: "✓ Daily Specials (Lunch)", es: "✓ Platos del Día (Almuerzo)" },
  
  elson_vibe_titulo: { pt: "Vibe", en: "Vibe", es: "Vibra" },
  elson_vibe_p: { pt: "Ambiente familiar e muito acolhedor.", en: "Family atmosphere and very welcoming.", es: "Ambiente familiar y muy acogedor." },
  
  elson_preco_titulo: { pt: "Preço", en: "Price", es: "Precio" },
  elson_preco_p: { pt: "💰 Ótimo custo-benefício.", en: "💰 Great value for money.", es: "💰 Excelente relación calidad-precio." },

  // === PÁGINA: BAR DA JOANA ===
  badge_joana: { pt: "🍳 Tempero com Amor", en: "🍳 Seasoned with Love", es: "🍳 Sazón con Amor" },
  title_joana: { pt: "Bar da Joana", en: "Joana's Bar", es: "Bar de Joana" },
  sub_joana: { pt: "Simplicidade, tradição e aquele gostinho de comida feita na hora que todo mundo ama.", en: "Simplicity, tradition, and that taste of freshly made food that everyone loves.", es: "Simplicidad, tradición y ese saborcito de comida recién hecha que a todos les encanta." },
  
  joana_sobre_titulo: { pt: "Culinária de Raiz", en: "Authentic Cuisine", es: "Cocina Auténtica" },
  joana_sobre_p: { pt: "O <strong>Bar da Joana</strong> é o destino certo para quem busca o verdadeiro sabor da Ilha da Gigóia. Joana e sua equipe preparam cada prato com o cuidado de quem cozinha para a própria família, tornando o local um dos favoritos tanto de moradores quanto de visitantes frequentes.", en: "<strong>Joana's Bar</strong> is the right destination for those seeking the true flavor of Gigóia Island. Joana and her team prepare each dish with the care of someone cooking for their own family, making it a favorite among locals and frequent visitors.", es: "El <strong>Bar de Joana</strong> es el destino ideal para quienes buscan el verdadero sabor de la Isla Gigóia. Joana y su equipo preparan cada plato con el cuidado de quien cocina para su propia familia, convirtiéndolo en un favorito tanto de residentes como de visitantes frecuentes." },
  
  joana_esp_titulo: { pt: "Especialidades", en: "Specialties", es: "Especialidades" },
  joana_esp_1: { pt: "✓ Prato Feito (PF) Caprichado", en: "✓ Hearty Daily Specials", es: "✓ Menú del Día Abundante" },
  joana_esp_2: { pt: "✓ Bolinhos Artesanais", en: "✓ Artisanal Fritters", es: "✓ Croquetas Artesanales" },
  joana_esp_3: { pt: "✓ Peixe com Molho de Camarão", en: "✓ Fish with Shrimp Sauce", es: "✓ Pescado con Salsa de Camarón" },
  joana_esp_4: { pt: "✓ Galinhada aos Domingos", en: "✓ Sunday Galinhada (Chicken & Rice)", es: "✓ Galinhada los Domingos (Arroz con Pollo)" },
  
  joana_info_titulo: { pt: "Informações", en: "Information", es: "Información" },
  joana_info_p: { pt: "Ambiente simples, acolhedor e familiar.", en: "Simple, welcoming, and family-friendly atmosphere.", es: "Ambiente sencillo, acogedor y familiar." },
  
  joana_preco_titulo: { pt: "Preço", en: "Price", es: "Precio" },
  joana_preco_p: { pt: "💸 Excelente custo-benefício.", en: "💸 Excellent value for money.", es: "💸 Excelente relación calidad-precio." },

// === PÁGINA: BAR DO KAI ===
  badge_kai: { pt: "🍹 Drinks & Lagoon View", en: "🍹 Drinks & Lagoon View", es: "🍹 Drinks y Vista a la Laguna" },
  title_kai: { pt: "Bar do Kai", en: "Kai's Bar", es: "Bar de Kai" },
  sub_kai: { pt: "O lugar perfeito para ver o tempo passar devagar, com um bom drink na mão e os pés quase na água.", en: "The perfect place to watch time pass slowly, with a good drink in hand and your feet almost in the water.", es: "El lugar perfecto para ver pasar el tiempo lentamente, con un buen cóctel en mano y los pies casi en el agua." },
  
  kai_sobre_titulo: { pt: "Vibe na Beira d'Água", en: "Waterside Vibe", es: "Vibra a la Orilla del Agua" },
  kai_sobre_p: { pt: "O <strong>Bar do Kai</strong> traduz o espírito da Ilha da Gigóia: sem pressa e com muita cor. É o ponto de encontro ideal para grupos de amigos que querem curtir um balde de cerveja ou coquetéis tropicais enquanto apreciam a fauna e o movimento dos barcos no canal.", en: "<strong>Kai's Bar</strong> translates the spirit of Gigóia Island: unhurried and full of color. It's the ideal meeting point for groups of friends who want to enjoy a bucket of beer or tropical cocktails while appreciating the fauna and the movement of boats in the canal.", es: "El <strong>Bar de Kai</strong> traduce el espíritu de la Isla Gigóia: sin prisa y con mucho color. Es el punto de encuentro ideal para grupos de amigos que quieren disfrutar de un cubo de cerveza o cócteles tropicales mientras aprecian la fauna y el movimiento de los barcos en el canal." },
  
  kai_dest_titulo: { pt: "Destaques", en: "Highlights", es: "Destacados" },
  kai_dest_1: { pt: "✓ Caipirinhas Especiais", en: "✓ Special Caipirinhas", es: "✓ Caipirinhas Especiales" },
  kai_dest_2: { pt: "✓ Porções de Peixe Frito", en: "✓ Fried Fish Portions", es: "✓ Porciones de Pescado Frito" },
  kai_dest_3: { pt: "✓ Deck com Vista Direta", en: "✓ Deck with Direct View", es: "✓ Terraza con Vista Directa" },
  kai_dest_4: { pt: "✓ Música de Qualidade", en: "✓ Quality Music", es: "✓ Música de Calidad" },
  
  kai_info_titulo: { pt: "Informações", en: "Information", es: "Información" },
  kai_info_p: { pt: "Ambiente ao ar livre e descontraído.", en: "Outdoor and relaxed atmosphere.", es: "Ambiente al aire libre y relajado." },
  
  kai_momento_titulo: { pt: "Momento Ideal", en: "Ideal Moment", es: "Momento Ideal" },
  kai_momento_p: { pt: "🌅 Final de tarde e fins de semana.", en: "🌅 Late afternoon and weekends.", es: "🌅 Al final de la tarde y fines de semana." },

// === PÁGINA: KAUAI ===
  badge_kauai: { pt: "🌴 Tropical Vibes", en: "🌴 Tropical Vibes", es: "🌴 Vibras Tropicales" },
  title_kauai: { pt: "Kauai", en: "Kauai", es: "Kauai" },
  sub_kauai: { pt: "Um pedaço do paraíso com deck exclusivo, coquetelaria de alto nível e pratos que celebram o frescor do Rio.", en: "A piece of paradise with an exclusive deck, high-level cocktails, and dishes that celebrate the freshness of Rio.", es: "Un pedazo de paraíso con terraza exclusiva, coctelería de alto nivel y platos que celebran la frescura de Río." },
  
  kauai_sobre_titulo: { pt: "Experiência Kauai", en: "Kauai Experience", es: "Experiencia Kauai" },
  kauai_sobre_p: { pt: "O <strong>Kauai</strong> combina a energia descontraída da ilha com uma estrutura impecável. Conhecido pela sua decoração temática e ambiente arejado, é o lugar perfeito para quem busca um almoço prolongado ou um brinde especial ao pôr do sol.", en: "<strong>Kauai</strong> combines the relaxed energy of the island with impeccable infrastructure. Known for its themed decor and airy environment, it's the perfect place for those seeking a long lunch or a special toast at sunset.", es: "El <strong>Kauai</strong> combina la energía relajada de la isla con una estructura impecable. Conocido por su decoración temática y ambiente ventilado, es el lugar perfecto para quienes buscan un almuerzo prolongado o un brindis especial al atardecer." },
  
  kauai_dest_titulo: { pt: "Destaques", en: "Highlights", es: "Destacados" },
  kauai_dest_1: { pt: "✓ Mixologia Premium", en: "✓ Premium Mixology", es: "✓ Mixología Premium" },
  kauai_dest_2: { pt: "✓ Cozinha Fusion", en: "✓ Fusion Cuisine", es: "✓ Cocina Fusión" },
  kauai_dest_3: { pt: "✓ Deck Panorâmico", en: "✓ Panoramic Deck", es: "✓ Terraza Panorámica" },
  kauai_dest_4: { pt: "✓ Música e DJ Set", en: "✓ Music & DJ Set", es: "✓ Música y DJ Set" },
  
  kauai_info_titulo: { pt: "Informações", en: "Information", es: "Información" },
  kauai_info_p: { pt: "Consulte sobre reservas para eventos e aniversários.", en: "Inquire about reservations for events and birthdays.", es: "Consulte sobre reservas para eventos y cumpleaños." },
  
  kauai_estilo_titulo: { pt: "Estilo", en: "Style", es: "Estilo" },
  kauai_estilo_p: { pt: "🏖️ Tropical Chic.", en: "🏖️ Tropical Chic.", es: "🏖️ Tropical Chic." },
  
  btn_reservar_wpp: { pt: "Reservar pelo WhatsApp", en: "Book via WhatsApp", es: "Reservar por WhatsApp" },

// === PÁGINA: LISTA DE BARES E DRINKS ===
  title_bares: { pt: "Bares e Drinks", en: "Bars & Drinks", es: "Bares y Bebidas" },
  sub_bares: { pt: "Cerveja gelada, caipirinhas e o pôr do sol mais bonito da região.", en: "Ice-cold beer, caipirinhas, and the most beautiful sunset in the region.", es: "Cerveza helada, caipirinhas y el atardecer más hermoso de la región." },
  bares_intro: { pt: "Nada supera o fim de tarde na Gigóia. Escolha um dos nossos <strong>bares e botecos tradicionais</strong> para relaxar, petiscar e curtir a vibe única da ilha.", en: "Nothing beats a late afternoon on Gigóia. Choose one of our <strong>traditional bars and pubs</strong> to relax, snack, and enjoy the island's unique vibe.", es: "Nada supera un atardecer en Gigóia. Elige uno de nuestros <strong>bares y cantinas tradicionales</strong> para relajarte, picar algo y disfrutar de la vibra única de la isla." },
  
  // Descrições dos Cards
  card_akbar_d: { pt: "Drinks autorais e uma das vistas mais disputadas para o canal.", en: "Signature drinks and one of the most sought-after views of the canal.", es: "Tragos de autor y una de las vistas más codiciadas del canal." },
  card_briza_d: { pt: "Ambiente descontraído, música boa e petiscos que são a cara do Rio.", en: "Relaxed atmosphere, good music, and snacks that scream Rio.", es: "Ambiente relajado, buena música y tapas con todo el estilo de Río." },
  card_caicaras_d: { pt: "O ponto de encontro tradicional com o verdadeiro tempero da ilha.", en: "The traditional meeting point with the true flavor of the island.", es: "El punto de encuentro tradicional con el verdadero sazón de la isla." },
  card_capivara_d: { pt: "Simplicidade e cerveja trincando. Um clássico imperdível.", en: "Simplicity and ice-cold beer. An unmissable classic.", es: "Simplicidad y cerveza bien helada. Un clásico imperdible." },
  card_elson_d: { pt: "Famoso pelos petiscos de boteco e atendimento acolhedor.", en: "Famous for its pub snacks and welcoming service.", es: "Famoso por sus tapas de bar y su servicio acogedor." },
  card_joana_d: { pt: "Comida caseira de boteco e aquele clima de vila que a gente ama.", en: "Homemade pub food and that village vibe we all love.", es: "Comida casera de bar y ese ambiente de pueblo que tanto amamos." },
  card_kai_d: { pt: "Modernidade, drinks coloridos e uma vibe jovem à beira d'água.", en: "Modernity, colorful drinks, and a youthful vibe by the water.", es: "Modernidad, tragos coloridos y una vibra joven a la orilla del agua." },
  card_kauai_d: { pt: "Inspirado no estilo tropical, ideal para um final de tarde relaxante.", en: "Inspired by tropical style, ideal for a relaxing late afternoon.", es: "Inspirado en el estilo tropical, ideal para una tarde relajante." },

  btn_voltar_comer_beber: { pt: "← Voltar para Onde Comer e Beber", en: "← Back to Where to Eat & Drink", es: "← Volver a Dónde Comer y Beber" },

  // === PÁGINA: BOAS PRÁTICAS ===
  title_boas_praticas: { pt: "Boas Práticas", en: "Good Practices", es: "Buenas Prácticas" },
  sub_boas_praticas: { pt: "A Ilha da Gigóia é um ecossistema vivo e uma comunidade vibrante. Ajude-nos a manter este paraíso preservado seguindo estas dicas simples.", en: "Gigóia Island is a living ecosystem and a vibrant community. Help us keep this paradise preserved by following these simple tips.", es: "La Isla Gigóia es un ecosistema vivo y una comunidad vibrante. Ayúdanos a mantener este paraíso preservado siguiendo estos sencillos consejos." },
  bp_intro: { pt: "A Ilha da Gigóia é um lugar especial que combina natureza, comunidade local e turismo. Para que todos possam aproveitar a visita e para preservar o ambiente da ilha, algumas boas práticas são importantes.", en: "Gigóia Island is a special place that combines nature, local community, and tourism. So everyone can enjoy the visit and to preserve the island's environment, some good practices are important.", es: "La Isla Gigóia es un lugar especial que combina naturaleza, comunidad local y turismo. Para que todos puedan disfrutar la visita y para preservar el medio ambiente de la isla, algunas buenas prácticas son importantes." },
  
  bp_card1_t: { pt: "Respeite a Natureza", en: "Respect Nature", es: "Respeta la Naturaleza" },
  bp_card1_d: { pt: "A região abriga diversas espécies de aves e peixes. Evite jogar lixo na água ou áreas naturais e ajude a manter o local preservado.", en: "The region is home to various species of birds and fish. Avoid throwing trash in the water or natural areas and help keep the place preserved.", es: "La región alberga diversas especies de aves y peces. Evita tirar basura en el agua o áreas naturales y ayuda a mantener el lugar preservado." },
  
  bp_card2_t: { pt: "Negócios Locais", en: "Local Businesses", es: "Negocios Locales" },
  bp_card2_d: { pt: "Valorize o comércio local administrado por moradores. Conheça a gastronomia e produtos artesanais da região.", en: "Value local businesses run by residents. Discover the region's gastronomy and handcrafted products.", es: "Valora el comercio local administrado por los residentes. Conoce la gastronomía y los productos artesanales de la región." },
  
  bp_card3_t: { pt: "Ambiente Tranquilo", en: "Quiet Environment", es: "Ambiente Tranquilo" },
  bp_card3_d: { pt: "A ilha tem atmosfera de vila. Respeite os moradores e evite barulho excessivo, principalmente em áreas residenciais.", en: "The island has a village atmosphere. Respect the residents and avoid excessive noise, especially in residential areas.", es: "La isla tiene un ambiente de pueblo. Respeta a los residentes y evita el ruido excesivo, especialmente en áreas residenciales." },
  
  bp_card4_t: { pt: "Embarque Seguro", en: "Safe Boarding", es: "Embarque Seguro" },
  bp_card4_d: { pt: "Aguarde sua vez de embarcar e siga as orientações dos barqueiros para uma travessia organizada e segura.", en: "Wait for your turn to board and follow the boatmen's instructions for an organized and safe crossing.", es: "Espera tu turno para embarcar y sigue las instrucciones de los barqueros para una travesía organizada y segura." },
  
  bp_box_t: { pt: "🗑️ Cuide do Lixo", en: "🗑️ Take Care of Your Trash", es: "🗑️ Cuida la Basura" },
  bp_box_d: { pt: "Sempre utilize lixeiras ou leve seu lixo com você até encontrar um local adequado para descartá-lo. Pequenas atitudes ajudam a manter a ilha bonita e agradável para todos.", en: "Always use trash cans or take your trash with you until you find an appropriate place to dispose of it. Small actions help keep the island beautiful and pleasant for everyone.", es: "Utiliza siempre los basureros o lleva tu basura contigo hasta encontrar un lugar adecuado para desecharla. Pequeñas acciones ayudan a mantener la isla hermosa y agradable para todos." },

  // === PÁGINA: CAFÉS E LANCHES ===
  title_cafes: { pt: "Cafés e Lanches", en: "Cafes & Snacks", es: "Cafeterías y Snacks" },
  sub_cafes: { pt: "Comece o dia com tranquilidade ou faça uma pausa deliciosa para recarregar as energias.", en: "Start your day peacefully or take a delicious break to recharge your energy.", es: "Comienza el día con tranquilidad o haz una pausa deliciosa para recargar energías." },
  cafes_h2: { pt: "Onde tomar um bom café", en: "Where to have a good coffee", es: "Dónde tomar un buen café" },
  cafes_p: { pt: "Opções charmosas com bolos caseiros, lanches rápidos e muito sabor.", en: "Charming options with homemade cakes, quick snacks, and lots of flavor.", es: "Opciones encantadoras con pasteles caseros, bocadillos rápidos y mucho sabor." },
  
  // Descrições dos Cards
  desc_poesia: { pt: "Mistura cafeteria com arte e poesia em um ambiente super acolhedor. O lugar perfeito para começar o dia com um café especial e relaxar na ilha.", en: "Mixes a coffee shop with art and poetry in a super cozy environment. The perfect place to start the day with a special coffee and relax on the island.", es: "Mezcla cafetería con arte y poesía en un ambiente súper acogedor. El lugar perfecto para empezar el día con un café especial y relajarse en la isla." },
  desc_cantinho: { pt: "Cafeteria charmosa conhecida pelo cardápio variado. Ideal para um café da manhã relaxante ou um lanche da tarde depois de explorar a região.", en: "Charming cafe known for its varied menu. Ideal for a relaxing breakfast or an afternoon snack after exploring the region.", es: "Cafetería encantadora conocida por su menú variado. Ideal para un desayuno relajante o un refrigerio por la tarde después de explorar la región." },
  desc_parada: { pt: "Ponto de parada obrigatório com deliciosos hambúrgueres preparados na hora. Ambiente descontraído para um lanche reforçado no início da noite.", en: "Mandatory stop with delicious freshly made burgers. Relaxed atmosphere for a hearty snack early in the evening.", es: "Parada obligatoria con deliciosas hamburguesas preparadas al momento. Ambiente relajado para un buen bocadillo a primera hora de la noche." },
  desc_gourmet: { pt: "Uma opção versátil e sem complicação. Perfeito para fazer uma pausa entre um passeio de barco e uma caminhada pelas ruelas da ilha.", en: "A versatile and uncomplicated option. Perfect for taking a break between a boat ride and a walk through the island's narrow streets.", es: "Una opción versátil y sin complicaciones. Perfecto para hacer una pausa entre un paseo en barco y un paseo por las callejuelas de la isla." },
  // === PÁGINA: CAFÉ POESIA ===
  badge_poesia: { pt: "☕ Café & Inspiração", en: "☕ Coffee & Inspiration", es: "☕ Café e Inspiración" },
  title_poesia: { pt: "Café Poesia", en: "Café Poesia", es: "Café Poesia" },
  sub_poesia: { pt: "Um espaço onde o tempo para. Cafés selecionados, doçuras artesanais e o clima mais acolhedor da ilha.", en: "A space where time stops. Selected coffees, artisanal sweets, and the most welcoming atmosphere on the island.", es: "Un espacio donde el tiempo se detiene. Cafés seleccionados, dulces artesanales y el ambiente más acogedor de la isla." },
  
  poesia_sobre_titulo: { pt: "O Refúgio Perfeito", en: "The Perfect Refuge", es: "El Refugio Perfecto" },
  poesia_sobre_p: { pt: "O <strong>Café Poesia</strong> nasceu do desejo de criar um ambiente onde a correria do Rio de Janeiro não entra. Aqui, cada detalhe convida ao relaxamento, desde a trilha sonora suave até o aroma de café fresquinho que invade o espaço.", en: "<strong>Café Poesia</strong> was born from the desire to create an environment where the hustle and bustle of Rio de Janeiro does not enter. Here, every detail invites relaxation, from the soft soundtrack to the aroma of freshly brewed coffee that fills the space.", es: "El <strong>Café Poesia</strong> nació del deseo de crear un ambiente donde el ajetreo de Río de Janeiro no entra. Aquí, cada detalle invita a la relajación, desde la suave banda sonora hasta el aroma a café recién hecho que invade el espacio." },
  
  poesia_dest_titulo: { pt: "Para Saborear", en: "To Savor", es: "Para Saborear" },
  poesia_dest_1: { pt: "✓ Cafés Coados e Espresso", en: "✓ Filtered & Espresso Coffees", es: "✓ Cafés Filtrados y Espresso" },
  poesia_dest_2: { pt: "✓ Bolos do Dia", en: "✓ Cakes of the Day", es: "✓ Pasteles del Día" },
  poesia_dest_3: { pt: "✓ Quiches e Sanduíches", en: "✓ Quiches & Sandwiches", es: "✓ Quiches y Sándwiches" },
  poesia_dest_4: { pt: "✓ Chás Gelados Naturais", en: "✓ Natural Iced Teas", es: "✓ Tés Helados Naturales" },
  
  poesia_vibe_titulo: { pt: "Vibe", en: "Vibe", es: "Vibra" },
  poesia_vibe_p: { pt: "Lugar ideal para leitura, home office ou conversas baixas.", en: "Ideal place for reading, home office, or quiet conversations.", es: "Lugar ideal para lectura, home office o conversaciones en voz baja." },
  
  poesia_dif_titulo: { pt: "Diferencial", en: "Differential", es: "Diferencial" },
  poesia_dif_p: { pt: "📖 Cantinho de livros e arte local.", en: "📖 Corner of books and local art.", es: "📖 Rincón de libros y arte local." },
  
  btn_voltar_cafe_lanches: { pt: "← Voltar para Café & Lanches", en: "← Back to Cafes & Snacks", es: "← Volver a Cafeterías y Snacks" },

  // === PÁGINA: CANTINHO DO CAFÉ ===
  badge_cantinho: { pt: "☕ Pausa & Sabor", en: "☕ Pause & Flavor", es: "☕ Pausa y Sabor" },
  title_cantinho: { pt: "Cantinho do Café", en: "Cantinho do Café", es: "Cantinho do Café" },
  sub_cantinho: { pt: "Um espaço charmoso criado para quem não abre mão de um bom café e um atendimento carinhoso.", en: "A charming space created for those who don't compromise on good coffee and affectionate service.", es: "Un espacio encantador creado para quienes no renuncian a un buen café y una atención cariñosa." },
  
  cantinho_sobre_titulo: { pt: "Sabor em cada detalhe", en: "Flavor in every detail", es: "Sabor en cada detalle" },
  cantinho_sobre_p: { pt: "O <strong>Cantinho do Café</strong> é aquele lugar especial onde o tempo parece passar mais devagar. Perfeito para começar o dia com energia ou para uma pausa relaxante à tarde, oferecemos uma seleção de grãos e acompanhamentos feitos com muito amor.", en: "<strong>Cantinho do Café</strong> is that special place where time seems to pass more slowly. Perfect to start the day with energy or for a relaxing afternoon break, we offer a selection of beans and sides made with a lot of love.", es: "El <strong>Cantinho do Café</strong> es ese lugar especial donde el tiempo parece pasar más lentamente. Perfecto para comenzar el día con energía o para una pausa relajante por la tarde, ofrecemos una selección de granos y acompañamientos hechos con mucho amor." },
  
  cantinho_esp_titulo: { pt: "Especialidades", en: "Specialties", es: "Especialidades" },
  cantinho_esp_1: { pt: "✓ Café Coado na Hora", en: "✓ Freshly Brewed Drip Coffee", es: "✓ Café Filtrado al Instante" },
  cantinho_esp_2: { pt: "✓ Pão de Queijo Recheado", en: "✓ Stuffed Cheese Bread", es: "✓ Pan de Queso Relleno" },
  cantinho_esp_3: { pt: "✓ Bolos Caseiros Variados", en: "✓ Various Homemade Cakes", es: "✓ Pasteles Caseros Variados" },
  cantinho_esp_4: { pt: "✓ Sanduíches Naturais", en: "✓ Natural Sandwiches", es: "✓ Sándwiches Naturales" },
  
  cantinho_vibe_titulo: { pt: "Vibe", en: "Vibe", es: "Vibra" },
  cantinho_vibe_p: { pt: "Ambiente íntimo e perfeito para um bom papo.", en: "Intimate atmosphere, perfect for a good chat.", es: "Ambiente íntimo y perfecto para una buena charla." },
  
  cantinho_dest_titulo: { pt: "Destaque", en: "Highlight", es: "Destacado" },
  cantinho_dest_p: { pt: "☕ Grãos selecionados da região.", en: "☕ Selected beans from the region.", es: "☕ Granos seleccionados de la región." },

  // === PÁGINA: CASA ESTÁTUA ===
  badge_estatua: { pt: "🗿 Arte & Curiosidade", en: "🗿 Art & Curiosity", es: "🗿 Arte y Curiosidad" },
  title_estatua: { pt: "Casa Estátua", en: "Casa Estátua", es: "Casa Estátua" },
  sub_estatua: { pt: "Um dos pontos mais fotografados e icônicos da ilha, onde a arte se mistura com a paisagem urbana da Gigóia.", en: "One of the most photographed and iconic spots on the island, where art blends with Gigóia's urban landscape.", es: "Uno de los puntos más fotografiados e icónicos de la isla, donde el arte se mezcla con el paisaje urbano de Gigóia." },
  
  estatua_sobre_titulo: { pt: "Um Ícone Visual", en: "A Visual Icon", es: "Un Ícono Visual" },
  estatua_sobre_p: { pt: "A <strong>Casa Estátua</strong> chama a atenção de todos que caminham pelas ruelas da Ilha da Gigóia. Com sua estética peculiar e a presença marcante de elementos artísticos em sua fachada, ela se tornou um ponto de referência para turistas e amantes da fotografia.", en: "The <strong>Casa Estátua</strong> catches the eye of everyone walking through the narrow streets of Gigóia Island. With its peculiar aesthetics and the strong presence of artistic elements on its facade, it has become a landmark for tourists and photography lovers.", es: "La <strong>Casa Estátua</strong> llama la atención de todos los que pasean por las callejuelas de la Isla Gigóia. Con su estética peculiar y la fuerte presencia de elementos artísticos en su fachada, se ha convertido en un punto de referencia para turistas y amantes de la fotografía." },
  
  estatua_observar_titulo: { pt: "O que observar", en: "What to look for", es: "Qué observar" },
  estatua_obs_1: { pt: "✓ Esculturas na Fachada", en: "✓ Facade Sculptures", es: "✓ Esculturas en la Fachada" },
  estatua_obs_2: { pt: "✓ Arquitetura Criativa", en: "✓ Creative Architecture", es: "✓ Arquitectura Creativa" },
  estatua_obs_3: { pt: "✓ Integração com as Plantas", en: "✓ Integration with Plants", es: "✓ Integración con las Plantas" },
  estatua_obs_4: { pt: "✓ Detalhes Artesanais", en: "✓ Handcrafted Details", es: "✓ Detalles Artesanales" },
  
  estatua_dica_titulo: { pt: "Dica", en: "Tip", es: "Consejo" },
  estatua_dica_p: { pt: "Prepare a câmera! É um dos melhores ângulos para registrar a identidade única da ilha.", en: "Get your camera ready! It's one of the best angles to capture the unique identity of the island.", es: "¡Prepara la cámara! Es uno de los mejores ángulos para capturar la identidad única de la isla." },
  
  estatua_curiosidade_titulo: { pt: "Curiosidade", en: "Fun Fact", es: "Curiosidad" },
  estatua_curiosidade_p: { pt: "📸 Ponto de parada obrigatória em tours fotográficos.", en: "📸 Mandatory stop on photography tours.", es: "📸 Parada obligatoria en tours fotográficos." },
  
  btn_saber_mais_gigi: { pt: "Saber mais com a Gigi", en: "Learn more with Gigi", es: "Saber más con Gigi" },
  btn_voltar_inicio: { pt: "← Voltar para o Início", en: "← Back to Home", es: "← Volver al Inicio" },

  // === PÁGINA: CASA GOIÁ ===
  title_goia: { pt: "Casa Goiá", en: "Casa Goiá", es: "Casa Goiá" },
  sub_goia: { pt: "Conforto, privacidade e um deck exclusivo para viver a verdadeira experiência da Ilha.", en: "Comfort, privacy, and an exclusive deck to live the true Island experience.", es: "Confort, privacidad y una terraza exclusiva para vivir la verdadera experiencia de la Isla." },
  
  goia_sobre_titulo: { pt: "Sobre a Casa", en: "About the House", es: "Sobre la Casa" },
  goia_sobre_p1: { pt: "A <strong>Casa Goiá</strong> é o refúgio perfeito para quem busca a autenticidade de morar na Ilha da Gigóia com o conforto de uma casa moderna. Com espaços integrados e uma decoração que remete ao clima náutico e tropical, a residência oferece total privacidade para seus hóspedes.", en: "<strong>Casa Goiá</strong> is the perfect refuge for those seeking the authenticity of living on Gigóia Island with the comfort of a modern house. With integrated spaces and a decor that reflects the nautical and tropical climate, the residence offers total privacy for its guests.", es: "La <strong>Casa Goiá</strong> es el refugio perfecto para quienes buscan la autenticidad de vivir en la Isla Gigóia con el confort de una casa moderna. Con espacios integrados y una decoración que remite al clima náutico y tropical, la residencia ofrece total privacidad para sus huéspedes." },
  goia_sobre_p2: { pt: "O grande destaque é o seu deck privativo, onde é possível contemplar o movimento dos barcos pelos canais ou simplesmente relaxar ao fim do dia. Totalmente equipada com cozinha, Wi-Fi de alta velocidade e áreas de descanso, é ideal para casais ou famílias que desejam uma estadia prolongada ou um final de semana diferenciado na Barra da Tijuca.", en: "The main highlight is its private deck, where you can watch the movement of boats through the canals or simply relax at the end of the day. Fully equipped with a kitchen, high-speed Wi-Fi, and resting areas, it is ideal for couples or families wanting a long stay or a different weekend in Barra da Tijuca.", es: "El gran atractivo es su terraza privada, donde es posible contemplar el movimiento de los barcos por los canales o simplemente relajarse al final del día. Totalmente equipada con cocina, Wi-Fi de alta velocidad y áreas de descanso, es ideal para parejas o familias que desean una estadía prolongada o un fin de semana diferente en Barra da Tijuca." },
  
  goia_dif_titulo: { pt: "Diferenciais", en: "Differentials", es: "Diferenciales" },
  goia_dif_1: { pt: "⚓ Deck privativo na lagoa", en: "⚓ Private deck on the lagoon", es: "⚓ Terraza privada en la laguna" },
  goia_dif_2: { pt: "🍳 Cozinha completa", en: "🍳 Full kitchen", es: "🍳 Cocina completa" },
  goia_dif_3: { pt: "📶 Wi-Fi para Home Office", en: "📶 Wi-Fi for Home Office", es: "📶 Wi-Fi para Home Office" },
  goia_dif_4: { pt: "🍃 Ambiente silencioso e seguro", en: "🍃 Quiet and safe environment", es: "🍃 Ambiente silencioso y seguro" },
  
  goia_valores_titulo: { pt: "Valores", en: "Prices", es: "Valores" },
  goia_valores_p: { pt: "🗓️ Sob Consulta", en: "🗓️ Upon Request", es: "🗓️ Bajo Consulta" },
  
  goia_reserva_titulo: { pt: "Reservas", en: "Reservations", es: "Reservas" },
  goia_reserva_p: { pt: "Consulte datas disponíveis diretamente com a nossa assistente Gigi.", en: "Check available dates directly with our assistant Gigi.", es: "Consulta las fechas disponibles directamente con nuestra asistente Gigi." },
  
  btn_reservar_gigi: { pt: "💬 Reservar via Gigi", en: "💬 Book via Gigi", es: "💬 Reservar vía Gigi" },
  btn_voltar_airbnb: { pt: "← Voltar para Airbnb e Temporada", en: "← Back to Airbnb & Vacation Rentals", es: "← Volver a Airbnb y Temporada" },

  // === PÁGINA: CASA VENTI ===
  badge_venti: { pt: "🏡 Conforto Familiar", en: "🏡 Family Comfort", es: "🏡 Confort Familiar" },
  title_venti: { pt: "Casa Venti", en: "Casa Venti", es: "Casa Venti" },
  sub_venti: { pt: "Um duplex acolhedor com alma de casa de vila. Espaço de sobra para relaxar e aproveitar o melhor da Gigóia.", en: "A cozy duplex with the soul of a village house. Plenty of space to relax and enjoy the best of Gigóia.", es: "Un dúplex acogedor con alma de casa de pueblo. Mucho espacio para relajarse y disfrutar lo mejor de Gigóia." },
  
  venti_sobre_titulo: { pt: "Sinta-se em Casa", en: "Feel at Home", es: "Siéntete como en Casa" },
  venti_sobre_p: { pt: "A <strong>Casa Venti</strong> oferece a experiência autêntica de morar na Ilha da Gigóia. Localizada em um condomínio fechado super tranquilo, a casa conta com um charmoso jardim e área de churrasqueira, sendo perfeita para quem viaja com crianças ou amigos.", en: "<strong>Casa Venti</strong> offers the authentic experience of living on Gigóia Island. Located in a super quiet gated community, the house features a charming garden and BBQ area, making it perfect for those traveling with children or friends.", es: "La <strong>Casa Venti</strong> ofrece la experiencia auténtica de vivir en la Isla Gigóia. Ubicada en un condominio cerrado súper tranquilo, la casa cuenta con un encantador jardín y zona de barbacoa, siendo perfecta para quienes viajan con niños o amigos." },
  
  venti_dest_titulo: { pt: "Destaques", en: "Highlights", es: "Destacados" },
  venti_dest_1: { pt: "✓ Acomoda até 7 pessoas", en: "✓ Accommodates up to 7 people", es: "✓ Acomoda hasta 7 personas" },
  venti_dest_2: { pt: "✓ Área com Churrasqueira", en: "✓ BBQ Area", es: "✓ Zona de Barbacoa" },
  venti_dest_3: { pt: "✓ Pet Friendly", en: "✓ Pet Friendly", es: "✓ Mascotas Permitidas" },
  venti_dest_4: { pt: "✓ Jardim Privativo", en: "✓ Private Garden", es: "✓ Jardín Privado" },
  
  venti_dif_titulo: { pt: "Diferencial", en: "Differential", es: "Diferencial" },
  venti_dif_p: { pt: "Segurança e silêncio total para uma noite de sono perfeita.", en: "Total security and silence for a perfect night's sleep.", es: "Seguridad y silencio total para una noche de sueño perfecta." },
  
  venti_lazer_titulo: { pt: "Lazer", en: "Leisure", es: "Ocio" },
  venti_lazer_p: { pt: "🌳 Próximo ao parquinho da ilha.", en: "🌳 Close to the island's playground.", es: "🌳 Cerca del parque infantil de la isla." },
  
  btn_ver_airbnb: { pt: "Ver Datas no Airbnb", en: "Check Dates on Airbnb", es: "Ver Fechas en Airbnb" },

  // === PÁGINA: CASANOVA ===
  badge_casanova: { pt: "✨ Exclusividade & Design", en: "✨ Exclusivity & Design", es: "✨ Exclusividad y Diseño" },
  title_casanova: { pt: "Casanova", en: "Casanova", es: "Casanova" },
  sub_casanova: { pt: "Um refúgio contemporâneo que une o rústico da ilha com o luxo da modernidade. O lugar perfeito para quem busca algo especial.", en: "A contemporary refuge that combines the rustic feel of the island with modern luxury. The perfect place for those seeking something special.", es: "Un refugio contemporáneo que une lo rústico de la isla con el lujo de la modernidad. El lugar perfecto para quienes buscan algo especial." },
  
  casanova_sobre_titulo: { pt: "Sofisticação na Ilha", en: "Sophistication on the Island", es: "Sofisticación en la Isla" },
  casanova_sobre_p: { pt: "A <strong>Casanova</strong> foi projetada para proporcionar uma experiência de imersão total na tranquilidade da Gigóia, sem abrir mão das conveniências modernas. Com ambientes integrados e decoração minimalista, é o cenário ideal para relaxar e se desconectar do caos urbano.", en: "<strong>Casanova</strong> was designed to provide an experience of total immersion in the tranquility of Gigóia, without giving up modern conveniences. With integrated environments and minimalist decor, it is the ideal setting to relax and disconnect from urban chaos.", es: "<strong>Casanova</strong> fue diseñada para brindar una experiencia de inmersión total en la tranquilidad de Gigóia, sin renunciar a las comodidades modernas. Con ambientes integrados y decoración minimalista, es el escenario ideal para relajarse y desconectarse del caos urbano." },
  
  casanova_dest_titulo: { pt: "Destaques", en: "Highlights", es: "Destacados" },
  casanova_dest_1: { pt: "✓ Suítes com Ar-condicionado", en: "✓ Air-conditioned Suites", es: "✓ Suites con Aire Acondicionado" },
  casanova_dest_2: { pt: "✓ Cozinha Gourmet", en: "✓ Gourmet Kitchen", es: "✓ Cocina Gourmet" },
  casanova_dest_3: { pt: "✓ Projeto Arquitetônico Único", en: "✓ Unique Architectural Design", es: "✓ Diseño Arquitectónico Único" },
  casanova_dest_4: { pt: "✓ Localização Silenciosa", en: "✓ Quiet Location", es: "✓ Ubicación Silenciosa" },
  
  casanova_exp_titulo: { pt: "Experiência", en: "Experience", es: "Experiencia" },
  casanova_exp_p: { pt: "Ideal para casais ou quem busca um retiro criativo.", en: "Ideal for couples or those seeking a creative retreat.", es: "Ideal para parejas o quienes buscan un retiro creativo." },
  
  casanova_reserva_titulo: { pt: "Reserva", en: "Reservation", es: "Reserva" },
  casanova_reserva_p: { pt: "📅 Disponível em plataformas de temporada.", en: "📅 Available on vacation rental platforms.", es: "📅 Disponible en plataformas de alquiler vacacional." },
  
  btn_falar_gigi_casanova: { pt: "Falar com a Gigi sobre a Casanova", en: "Talk to Gigi about Casanova", es: "Habla con Gigi sobre Casanova" },
  // === PÁGINA: COMER E BEBER (VITRINE) ===
  title_comer_beber: { pt: "Comer & Beber", en: "Eat & Drink", es: "Comer y Beber" },
  sub_comer_beber: { pt: "Saboreie frutos do mar frescos, pratos da culinária carioca e aproveite os melhores drinks com vista para a lagoa.", en: "Savor fresh seafood, local Carioca cuisine, and enjoy the best drinks with a view of the lagoon.", es: "Saborea mariscos frescos, platos de la cocina carioca y disfruta de las mejores bebidas con vista a la laguna." },
  // === BOTÕES E BADGES GENÉRICOS (APP.JS) ===
  btn_ler_mais: { pt: "Ler mais", en: "Read more", es: "Leer más" },
  btn_conferir: { pt: "Conferir", en: "Check it out", es: "Comprobar" },
  btn_ver_roteiro: { pt: "Ver roteiro", en: "View itinerary", es: "Ver itinerario" },
  btn_ver_opcoes: { pt: "Ver opções", en: "View options", es: "Ver opciones" },
  btn_ver_pacotes: { pt: "Ver pacotes", en: "View packages", es: "Ver paquetes" },
  
  badge_procurado: { pt: "⭐ Mais Procurado", en: "⭐ Most Wanted", es: "⭐ Más Buscado" },
  badge_relaxar: { pt: "🌅 Para Relaxar", en: "🌅 To Relax", es: "🌅 Para Relajarse" },
  badge_mergulho: { pt: "🌊 Mergulho", en: "🌊 Diving", es: "🌊 Buceo" },
  badge_safari: { pt: "🐊 Safári", en: "🐊 Safari", es: "🐊 Safari" },
  badge_praia: { pt: "🏖️ Praia", en: "🏖️ Beach", es: "🏖️ Playa" },
  badge_adrenalina: { pt: "⚡ Adrenalina", en: "⚡ Adrenaline", es: "⚡ Adrenalina" },
  badge_ofertas: { pt: "🎁 Ofertas", en: "🎁 Offers", es: "🎁 Ofertas" },
  badge_gastronomia: { pt: "🍤 Gastronomia", en: "🍤 Gastronomy", es: "🍤 Gastronomía" },
  badge_relax: { pt: "🍹 Relax", en: "🍹 Relax", es: "🍹 Relax" },
  badge_bom_dia: { pt: "☕ Bom dia", en: "☕ Good morning", es: "☕ Buenos días" },
  badge_ao_vivo: { pt: "🎵 Ao Vivo", en: "🎵 Live Music", es: "🎵 En Vivo" },
  badge_celebre: { pt: "🎉 Celebre", en: "🎉 Celebrate", es: "🎉 Celebra" },

  // === TEXTOS MODAL CADASTRO ESPAÇO ===
  side_badge_espaco: { pt: "Cadastre seu<br>Espaço<br>aqui!", en: "Register your<br>Space<br>here!", es: "¡Registra tu<br>Espacio<br>aquí!" },
  modal_cad_espaco_sub: { pt: "Preencha os dados abaixo para solicitar o cadastro do seu estabelecimento no Portal.", en: "Fill out the details below to request the registration of your establishment on the Portal.", es: "Complete los datos a continuación para solicitar el registro de su establecimiento en el Portal." },

  // === CARDS: A ILHA ===
  page_ilha_c1_t: { pt: "Como chegar", en: "How to get there", es: "Cómo llegar" },
  page_ilha_c1_d: { pt: "Acesso rápido a partir do Rio. Dicas de transporte e horários.", en: "Quick access from Rio. Transport tips and schedules.", es: "Acceso rápido desde Río. Consejos de transporte y horarios." },
  
  page_ilha_c2_t: { pt: "História & Cultura", en: "History & Culture", es: "Historia y Cultura" },
  page_ilha_c2_d: { pt: "Tradições locais, ambiente tranquilo e charme natural.", en: "Local traditions, peaceful environment, and natural charm.", es: "Tradiciones locales, ambiente tranquilo y encanto natural." },
  
  page_ilha_c3_t: { pt: "Boas práticas", en: "Good practices", es: "Buenas prácticas" },
  page_ilha_c3_d: { pt: "Recomendações para curtir com respeito à natureza e aos moradores.", en: "Recommendations to enjoy with respect for nature and residents.", es: "Recomendaciones para disfrutar respetando la naturaleza y a los residentes." },
  
  page_ilha_c4_t: { pt: "Melhor época", en: "Best time to visit", es: "Mejor época para visitar" },
  page_ilha_c4_d: { pt: "Clima, horários e dicas para aproveitar o dia inteiro.", en: "Weather, schedules, and tips to enjoy the whole day.", es: "Clima, horarios y consejos para disfrutar todo el día." },

  // === CARDS: PASSEIOS E ROTAS ===
  page_pass_c1_t: { pt: "Ilhas Tijucas", en: "Tijucas Islands", es: "Islas Tijucas" },
  page_pass_c1_d: { pt: "Passeio de barco até o arquipélago. Águas cristalinas e fotos incríveis.", en: "Boat tour to the archipelago. Crystal clear waters and amazing photos.", es: "Paseo en barco al archipiélago. Aguas cristalinas y fotos increíbles." },
  
  page_pass_c2_t: { pt: "Pantanal Carioca", en: "Carioca Pantanal", es: "Pantanal Carioca" },
  page_pass_c2_d: { pt: "Explore a rica biodiversidade da lagoa e o safári urbano.", en: "Explore the rich biodiversity of the lagoon and the urban safari.", es: "Explora la rica biodiversidad de la laguna y el safari urbano." },
  
  page_pass_c3_t: { pt: "Reserva", en: "Reserva Beach", es: "Playa Reserva" },
  page_pass_c3_d: { pt: "Navegue pelos canais até chegar à bela e preservada Praia da Reserva.", en: "Sail through the canals until you reach the beautiful and preserved Reserva Beach.", es: "Navega por los canales hasta llegar a la hermosa y preservada Playa Reserva." },
  
  page_pass_c4_t: { pt: "Jet-Ski", en: "Jet-Ski", es: "Jet-Ski" },
  page_pass_c4_d: { pt: "Aventura e adrenalina explorando as lagoas no seu próprio ritmo.", en: "Adventure and adrenaline exploring the lagoons at your own pace.", es: "Aventura y adrenalina explorando las lagunas a tu propio ritmo." },
  
  page_pass_c5_t: { pt: "Pacotes Especiais", en: "Special Packages", es: "Paquetes Especiales" },
  page_pass_c5_d: { pt: "Monte seu roteiro ideal combinando passeio de barco, almoço e mais.", en: "Create your ideal itinerary combining a boat tour, lunch, and more.", es: "Crea tu itinerario ideal combinando paseo en barco, almuerzo y más." },

  // === CARDS: COMER E BEBER ===
  page_comer_c1_t: { pt: "Restaurantes da Ilha", en: "Island Restaurants", es: "Restaurantes de la Isla" },
  page_comer_c1_d: { pt: "Pratos de frutos do mar, carnes e culinária variada à beira da lagoa.", en: "Seafood dishes, meats, and varied cuisine by the lagoon.", es: "Platos de mariscos, carnes y cocina variada junto a la laguna." },
  
  page_comer_c2_t: { pt: "Bares e Drinks", en: "Bars & Drinks", es: "Bares y Bebidas" },
  page_comer_c2_d: { pt: "Cerveja gelada, caipirinhas e o pôr do sol mais bonito da região.", en: "Ice-cold beer, caipirinhas, and the most beautiful sunset in the region.", es: "Cerveza helada, caipirinhas y el atardecer más hermoso de la región." },
  
  page_comer_c3_t: { pt: "Café da Manhã e Lanches", en: "Breakfast & Snacks", es: "Desayuno y Snacks" },
  page_comer_c3_d: { pt: "Comece o dia com tranquilidade ou faça uma pausa para recarregar.", en: "Start the day peacefully or take a break to recharge.", es: "Comienza el día con tranquilidad o haz una pausa para recargar." },
  
  page_comer_c4_t: { pt: "Eventos e Experiências", en: "Events & Experiences", es: "Eventos y Experiencias" },
  page_comer_c4_d: { pt: "Feirinhas, música ao vivo e espaços para celebrações inesquecíveis.", en: "Fairs, live music, and spaces for unforgettable celebrations.", es: "Ferias, música en vivo y espacios para celebraciones inolvidables." },

  // === CARDS: HOSPEDAGEM ===
  page_hosp_c1_t: { pt: "Hotéis e Pousadas", en: "Hotels & Inns", es: "Hoteles y Posadas" },
  page_hosp_c1_d: { pt: "Conforto e descanso com vista para a lagoa.", en: "Comfort and rest with a view of the lagoon.", es: "Confort y descanso con vista a la laguna." },
  
  page_hosp_c2_t: { pt: "Airbnb e Temporada", en: "Airbnb & Vacation Rentals", es: "Airbnb y Alquileres Vacacionales" },
  page_hosp_c2_d: { pt: "Privacidade e liberdade para grupos e famílias.", en: "Privacy and freedom for groups and families.", es: "Privacidad y libertad para grupos y familias." },
  
  page_hosp_c3_t: { pt: "Espaços para Eventos", en: "Event Spaces", es: "Espacios para Eventos" },
  page_hosp_c3_d: { pt: "Cenários memoráveis para sua celebração.", en: "Memorable settings for your celebration.", es: "Escenarios memorables para tu celebración." },

  // === PÁGINA: COMO CHEGAR ===
  title_como_chegar: { pt: "Como Chegar", en: "How to Get There", es: "Cómo Llegar" },
  sub_como_chegar: { pt: "Tudo o que você precisa saber para chegar ao paraíso de forma rápida e segura.", en: "Everything you need to know to reach paradise quickly and safely.", es: "Todo lo que necesitas saber para llegar al paraíso de forma rápida y segura." },
  
  cc_metro_t: { pt: "Vindo de Metrô", en: "Coming by Subway", es: "Llegando en Metro" },
  cc_metro_d: { pt: "Salte na estação <strong>Jardim Oceânico</strong> (Saída Lagoa). O deck de embarque fica a menos de 5 minutos de caminhada.", en: "Get off at <strong>Jardim Oceânico</strong> station (Lagoa Exit). The boarding deck is less than a 5-minute walk away.", es: "Bájate en la estación <strong>Jardim Oceânico</strong> (Salida Lagoa). El muelle de embarque está a menos de 5 minutos a pie." },
  
  cc_carro_t: { pt: "Vindo de Carro", en: "Coming by Car", es: "Llegando en Coche" },
  cc_carro_d: { pt: "Coloque no GPS: <strong>Av. Armando Lombardi, 350</strong>. Existem estacionamentos particulares no entorno dos principais decks.", en: "Put in your GPS: <strong>Av. Armando Lombardi, 350</strong>. There are private parking lots around the main decks.", es: "Pon en el GPS: <strong>Av. Armando Lombardi, 350</strong>. Hay estacionamientos privados alrededor de los muelles principales." },
  
  cc_barco_t: { pt: "Travessia de Barco", en: "Boat Crossing", es: "Cruce en Barco" },
  cc_barco_d: { pt: "As chalanas e barcos-táxi funcionam 24h por dia. O valor varia entre <strong>R$ 2,00 a R$ 5,00</strong> por pessoa para a travessia comum.", en: "Flatboats and water taxis operate 24/7. The fare ranges from <strong>R$ 2.00 to R$ 5.00</strong> per person for a regular crossing.", es: "Las chalanas y taxis acuáticos funcionan las 24 horas. El precio varía entre <strong>R$ 2,00 y R$ 5,00</strong> por persona para el cruce normal." },
  
  cc_saltar_t: { pt: "Onde Saltar?", en: "Where to get off?", es: "¿Dónde bajarse?" },
  cc_saltar_d: { pt: "Existem diversos decks na ilha. Se for para um restaurante específico, peça ao barqueiro para te deixar no deck mais próximo dele.", en: "There are several decks on the island. If you are going to a specific restaurant, ask the boatman to drop you at the deck closest to it.", es: "Hay varios muelles en la isla. Si vas a un restaurante específico, pídele al barquero que te deje en el muelle más cercano." },
  
  btn_perguntar_gigi_loc: { pt: "Perguntar localização exata para a Gigi", en: "Ask Gigi for exact location", es: "Preguntar ubicación exacta a Gigi" },

  // === PÁGINA: ESPAÇOS PARA EVENTOS ===
  title_espacos_eventos: { pt: "Espaços para Eventos", en: "Event Spaces", es: "Espacios para Eventos" },
  sub_espacos_eventos: { pt: "Celebre momentos inesquecíveis cercado pela natureza.", en: "Celebrate unforgettable moments surrounded by nature.", es: "Celebra momentos inolvidables rodeado de naturaleza." },
  
  espacos_p1: { pt: "A Ilha da Gigóia também é um destino especial para a realização de <strong>eventos e celebrações</strong>.", en: "Gigóia Island is also a special destination for hosting <strong>events and celebrations</strong>.", es: "La Isla Gigóia también es un destino especial para la realización de <strong>eventos y celebraciones</strong>." },
  espacos_p2: { pt: "Diversos espaços podem ser alugados para <strong>casamentos, aniversários, confraternizações, eventos corporativos e encontros entre amigos</strong>, sempre com o charme da lagoa e da natureza ao redor.", en: "Various spaces can be rented for <strong>weddings, birthdays, get-togethers, corporate events, and meetings with friends</strong>, always with the charm of the lagoon and surrounding nature.", es: "Diversos espacios pueden ser alquilados para <strong>bodas, cumpleaños, confraternizaciones, eventos corporativos y reuniones entre amigos</strong>, siempre con el encanto de la laguna y la naturaleza alrededor." },
  espacos_p3: { pt: "Realizar um evento na ilha oferece um cenário diferente e memorável, combinando gastronomia, paisagem e uma atmosfera única dentro da Barra da Tijuca.", en: "Hosting an event on the island offers a different and memorable setting, combining gastronomy, landscape, and a unique atmosphere within Barra da Tijuca.", es: "Realizar un evento en la isla ofrece un escenario diferente y memorable, combinando gastronomía, paisaje y una atmósfera única dentro de Barra da Tijuca." },
  
  btn_planeje_gigi: { pt: "Planeje seu evento com a Gigi", en: "Plan your event with Gigi", es: "Planifica tu evento con Gigi" },
  
  card_mara_d: { pt: "O cenário perfeito para festas ao pôr do sol com energia leve e visual incrível da lagoa.", en: "The perfect setting for sunset parties with light energy and an incredible view of the lagoon.", es: "El escenario perfecto para fiestas al atardecer con energía ligera y una vista increíble a la laguna." },
  card_solar_d: { pt: "Casarão icônico com amplo gramado à beira da água, ideal para casamentos e grandes festas.", en: "Iconic mansion with a large lawn by the water, ideal for weddings and large parties.", es: "Casona icónica con un amplio césped junto al agua, ideal para bodas y grandes fiestas." },
  card_cais_d: { pt: "Tradição, gastronomia de qualidade e espaço coberto e amplo para confraternizações.", en: "Tradition, quality gastronomy, and a large covered space for get-togethers.", es: "Tradición, gastronomía de calidad y un amplio espacio cubierto para confraternizaciones." },
  card_ocya_d: { pt: "Alta gastronomia premiada em um ambiente sofisticado para eventos exclusivos e inesquecíveis.", en: "Award-winning haute cuisine in a sophisticated environment for exclusive and unforgettable events.", es: "Alta gastronomía premiada en un ambiente sofisticado para eventos exclusivos e inolvidables." },

  // === PÁGINA: EVENTOS E EXPERIÊNCIAS ===
  title_eventos_exp: { pt: "Eventos & Experiências", en: "Events & Experiences", es: "Eventos y Experiencias" },
  sub_eventos_exp: { pt: "Conecte-se com a essência da Ilha. De passeios ecológicos a vivências artísticas e culturais.", en: "Connect with the essence of the Island. From ecological tours to artistic and cultural experiences.", es: "Conéctate con la esencia de la Isla. Desde paseos ecológicos hasta vivencias artísticas y culturales." },

  side_badge_exp: { pt: "Ofereça uma<br>Experiência<br>conosco!", en: "Offer an<br>Experience<br>with us!", es: "¡Ofrece una<br>Experiencia<br>con nosotros!" },
  modal_exp_title: { pt: "Seja um Parceiro", en: "Become a Partner", es: "Conviértete en Socio" },
  modal_exp_sub: { pt: "Você oferece tours, cursos ou eventos na Ilha? Divulgue no Portal Oficial.", en: "Do you offer tours, courses, or events on the Island? Promote it on the Official Portal.", es: "¿Ofreces tours, cursos o eventos en la Isla? Promociónalo en el Portal Oficial." },

  lbl_nome_exp: { pt: "Nome da Experiência", en: "Experience Name", es: "Nombre de la Experiencia" },
  lbl_nome_empresa: { pt: "Seu Nome / Empresa", en: "Your Name / Company", es: "Tu Nombre / Empresa" },
  lbl_whatsapp: { pt: "WhatsApp", en: "WhatsApp", es: "WhatsApp" },
  lbl_desc_curta: { pt: "Descrição Curta", en: "Short Description", es: "Descripción Corta" },
  btn_solicitar_parceria: { pt: "Solicitar Parceria", en: "Request Partnership", es: "Solicitar Asociación" },

  modal_exp_sucesso_title: { pt: "Solicitação Recebida!", en: "Request Received!", es: "¡Solicitud Recibida!" },
  modal_exp_sucesso_sub: { pt: "Entraremos em contato para validar sua experiência no portal.", en: "We will contact you to validate your experience on the portal.", es: "Nos pondremos en contacto para validar tu experiencia en el portal." },

  // === PÁGINA: EXPERIÊNCIA COMPLETA ===
  badge_melhor_ilha: { pt: "✨ O Melhor da Ilha", en: "✨ The Best of the Island", es: "✨ Lo Mejor de la Isla" },
  title_exp_completa: { pt: "Experiência Completa", en: "Complete Experience", es: "Experiencia Completa" },
  sub_exp_completa: { pt: "Não escolha apenas um lugar, viva a Ilha inteira. Criamos o roteiro ideal para você aproveitar cada segundo deste refúgio.", en: "Don't just choose one place, live the entire Island. We created the ideal itinerary for you to enjoy every second of this refuge.", es: "No elijas solo un lugar, vive la Isla entera. Creamos el itinerario ideal para que disfrutes cada segundo de este refugio." },
  
  exp_c1_t: { pt: "1. A Chegada", en: "1. The Arrival", es: "1. La Llegada" },
  exp_c1_d: { pt: "Comece com uma travessia panorâmica pelos canais da \"Veneza Carioca\", observando a fauna local e o clima único da Ilha.", en: "Start with a panoramic crossing through the canals of the \"Carioca Venice\", observing the local fauna and the unique climate of the Island.", es: "Comienza con una travesía panorámica por los canales de la \"Venecia Carioca\", observando la fauna local y el clima único de la Isla." },
  
  exp_c2_t: { pt: "2. Gastronomia", en: "2. Gastronomy", es: "2. Gastronomía" },
  exp_c2_d: { pt: "Um almoço inesquecível em um dos nossos restaurantes selecionados, com o melhor dos frutos do mar e tempero caiçara.", en: "An unforgettable lunch in one of our selected restaurants, with the best seafood and caiçara seasoning.", es: "Un almuerzo inolvidable en uno de nuestros restaurantes seleccionados, con lo mejor de los mariscos y el sazón caiçara." },
  
  exp_c3_t: { pt: "3. Pôr do Sol", en: "3. Sunset", es: "3. Puesta de Sol" },
  exp_c3_d: { pt: "Feche o dia com um drink artesanal em um deck exclusivo, assistindo ao sol se pôr atrás da Pedra da Gávea.", en: "End the day with an artisanal drink on an exclusive deck, watching the sun set behind Pedra da Gávea.", es: "Termina el día con una bebida artesanal en una terraza exclusiva, viendo la puesta de sol detrás de la Pedra da Gávea." },
  
  exp_banner_t: { pt: "Quer esse roteiro planejado para você?", en: "Do you want this itinerary planned for you?", es: "¿Quieres este itinerario planificado para ti?" },
  exp_banner_d: { pt: "A Gigi organiza sua reserva, indica os melhores horários e garante que sua experiência seja impecável.", en: "Gigi organizes your reservation, indicates the best times, and ensures your experience is impeccable.", es: "Gigi organiza tu reserva, indica los mejores horarios y asegura que tu experiencia sea impecable." },
  btn_reservar_exp_gigi: { pt: "Reservar Experiência com a Gigi", en: "Book Experience with Gigi", es: "Reservar Experiencia con Gigi" },

  // === PÁGINA: FALE CONOSCO (VERSÃO GIGI DATILÓGRAFA) ===
  pg_fale_h1: { pt: "Fale Conosco", en: "Contact Us", es: "Contáctenos" },
  pg_fale_p: { pt: "Dúvidas, anúncios ou parcerias? Envie uma mensagem para nós.", en: "Questions, ads, or partnerships? Send us a message.", es: "¿Dudas, anuncios o asociaciones? Envíenos un mensaje." },
  fc_intro: { pt: "Estamos aqui para ajudar! Se você tem alguma dúvida sobre a ilha, deseja anunciar seu negócio no Portal Ilha da Gigóia ou propor uma parceria comercial, basta preencher o formulário abaixo que retornaremos em breve.", en: "We're here to help! If you have any questions about the island, want to advertise your business on the Gigóia Island Portal, or propose a business partnership, just fill out the form below and we'll get back to you soon.", es: "¡Estamos aquí para ayudar! Si tiene alguna pregunta sobre la isla, desea anunciar su negocio en el Portal Isla Gigóia o proponer una asociación comercial, simplemente complete el formulario a continuación y le responderemos pronto." },
  fc_lbl_name: { pt: "Seu nome", en: "Your name", es: "Tu nombre" },
  fc_lbl_email: { pt: "Seu e-mail", en: "Your email", es: "Tu email" },
  fc_lbl_phone: { pt: "Telefone para contato", en: "Contact phone", es: "Teléfono de contacto" },
  fc_lbl_msg: { pt: "Corpo da mensagem", en: "Message body", es: "Cuerpo del mensaje" },
  fc_btn_send: { pt: "Enviar mensagem", en: "Send message", es: "Enviar mensaje" },
  fc_feedback_p: { pt: "A Gigi já recebeu sua carta e nossa equipe entrará em contato com você muito em breve.", en: "Gigi has received your letter and our team will get in touch with you very soon.", es: "Gigi ya recebeu su carta y nuestro equipo se pondrá en contacto con usted muy pronto." },

  // === PÁGINA: GAIVOTA ===
  badge_gaivota: { pt: "🕊️ Cenário Especial", en: "🕊️ Special Setting", es: "🕊️ Escenario Especial" },
  title_gaivota: { pt: "Gaivota", en: "Gaivota", es: "Gaivota" },
  sub_gaivota: { pt: "Um cenário especial na Ilha Primeira, combinando vista para a lagoa e atmosfera elegante para festas memoráveis.", en: "A special setting on Ilha Primeira, combining lagoon views and an elegant atmosphere for memorable parties.", es: "Un escenario especial en Ilha Primeira, que combina vistas a la laguna y un ambiente elegante para fiestas memorables." },
  gaivota_sobre_t: { pt: "Sobre o Espaço", en: "About the Space", es: "Sobre el Espacio" },
  gaivota_sobre_p1: { pt: "Localizado na charmosa Ilha Primeira, o <strong>Gaivota</strong> se tornou um dos cenários mais especiais da região para celebrações. O ambiente combina uma vista privilegiada para a lagoa com uma atmosfera descontraída e elegante, perfeita para festas memoráveis cercadas pela natureza.", en: "Located on charming Ilha Primeira, <strong>Gaivota</strong> has become one of the most special settings in the region for celebrations. The environment combines a privileged view of the lagoon with a relaxed and elegant atmosphere, perfect for memorable parties surrounded by nature.", es: "Ubicado en la encantadora Ilha Primeira, <strong>Gaivota</strong> se ha convertido en uno de los escenarios más especiales de la región para celebraciones. El ambiente combina una vista privilegiada de la laguna con una atmósfera relajada y elegante, perfecta para fiestas memorables rodeadas de naturaleza." },
  gaivota_sobre_p2: { pt: "A proposta é simples e irresistível: boa gastronomia, drinks bem preparados e uma vista que transforma qualquer evento. Durante o dia, a luz refletida na lagoa cria um cenário perfeito para eventos ao ar livre. À noite, o clima muda completamente e o espaço ganha uma atmosfera charmosa e festiva, ideal para comemorar entre amigos.", en: "The proposal is simple and irresistible: good gastronomy, well-prepared drinks, and a view that transforms any event. During the day, the light reflected in the lagoon creates a perfect setting for outdoor events. At night, the atmosphere changes completely and the space gains a charming and festive vibe, ideal for celebrating with friends.", es: "La propuesta es sencilla e irresistible: buena gastronomía, tragos bien preparados y una vista que transforma cualquier evento. Durante el día, la luz reflejada en la laguna crea un escenario perfecto para eventos al aire libre. Por la noche, el clima cambia por completo y el espacio adquiere una atmósfera encantadora y festiva, ideal para celebrar con amigos." },
  gaivota_dest_t: { pt: "Destaques", en: "Highlights", es: "Destacados" },
  gaivota_dest_1: { pt: "✓ Vista privilegiada para a lagoa", en: "✓ Privileged view of the lagoon", es: "✓ Vista privilegiada a la laguna" },
  gaivota_dest_2: { pt: "✓ Perfeito para eventos de dia ou à noite", en: "✓ Perfect for day or night events", es: "✓ Perfecto para eventos de día o de noche" },
  gaivota_dest_3: { pt: "✓ Alta gastronomia e drinks", en: "✓ Haute cuisine and drinks", es: "✓ Alta gastronomía y tragos" },
  gaivota_dest_4: { pt: "✓ Clima elegante e descontraído", en: "✓ Elegant and relaxed atmosphere", es: "✓ Clima elegante y relajado" },
  gaivota_orc_t: { pt: "Orçamento", en: "Quote", es: "Presupuesto" },
  gaivota_ideal_t: { pt: "Ideal Para", en: "Ideal For", es: "Ideal Para" },
  gaivota_ideal_p: { pt: "Aniversários, confraternizações, casamentos intimistas e eventos corporativos exclusivos.", en: "Birthdays, get-togethers, intimate weddings, and exclusive corporate events.", es: "Cumpleaños, reuniones, bodas íntimas y eventos corporativos exclusivos." },
  btn_gaivota_orc: { pt: "💬 Solicitar Orçamento e Datas", en: "💬 Request Quote and Dates", es: "💬 Solicitar Presupuesto y Fechas" },
  gaivota_footer_p: { pt: "Fale direto pelo WhatsApp da equipe de eventos para planejar sua festa.", en: "Speak directly via WhatsApp with the events team to plan your party.", es: "Hable directamente por WhatsApp con el equipo de eventos para planificar su fiesta." },
  btn_voltar_eventos: { pt: "← Voltar para Espaços e Eventos", en: "← Back to Spaces and Events", es: "← Volver a Espacios y Eventos" },

  // === PÁGINA: HISTÓRIA E CULTURA ===
  title_historia: { pt: "História & Cultura", en: "History & Culture", es: "Historia y Cultura" },
  sub_historia: { pt: "Conheça a trajetória da Ilha da Gigóia: de uma vila de pescadores ao oásis cultural e gastronômico do Rio de Janeiro.", en: "Discover the journey of Gigóia Island: from a fishing village to the cultural and gastronomic oasis of Rio de Janeiro.", es: "Conozca la trayectoria de la Isla Gigóia: de un pueblo de pescadores al oasis cultural y gastronómico de Río de Janeiro." },
  hist_album_t: { pt: "📸 Álbum de Memórias: A Ilha Antigamente", en: "📸 Memory Album: The Island in the Past", es: "📸 Álbum de Memorias: La Isla Antiguamente" },
  hist_sec1_t: { pt: "De Vila de Pescadores a Refúgio Carioca", en: "From Fishing Village to Carioca Refuge", es: "De Pueblo de Pescadores a Refugio Carioca" },
  hist_sec1_p1: { pt: "A Ilha da Gigóia faz parte de um pequeno arquipélago na Lagoa da Tijuca. Antigamente, a região era habitada predominantemente por pescadores e famílias que viviam da extração de recursos naturais da lagoa. O isolamento, garantido pela falta de pontes, manteve a ilha com um clima de cidade do interior por décadas.", en: "Gigóia Island is part of a small archipelago in the Tijuca Lagoon. In the past, the region was predominantly inhabited by fishermen and families who lived by extracting natural resources from the lagoon. The isolation, guaranteed by the lack of bridges, kept the island with a small-town atmosphere for decades.", es: "La Isla Gigóia forma parte de un pequeño archipiélago en la Laguna de Tijuca. Antiguamente, la región estaba habitada predominantemente por pescadores y familias que vivían de la extracción de recursos naturales de la laguna. El aislamiento, garantizado por la falta de puentes, mantuvo la isla con un clima de ciudad de interior durante décadas." },
  hist_sec1_p2: { pt: "Com o crescimento e a urbanização acelerada da Barra da Tijuca a partir dos anos 1970 e 1980, a Gigóia começou a atrair artistas, músicos e pessoas em busca de um estilo de vida mais próximo à natureza, longe do asfalto.", en: "With the rapid growth and urbanization of Barra da Tijuca starting in the 1970s and 1980s, Gigóia began to attract artists, musicians, and people seeking a lifestyle closer to nature, away from the asphalt.", es: "Con el crecimiento y la urbanización acelerada de Barra da Tijuca a partir de los años 1970 y 1980, Gigóia comenzó a atraer artistas, músicos y personas en busca de un estilo de vida más cercano a la naturaleza, lejos del asfalto." },
  hist_box1_t: { pt: "A Origem do Nome", en: "Origin of the Name", es: "El Origen del Nombre" },
  hist_box1_d: { pt: "O nome \"Gigóia\" vem de uma planta aquática (jacinto-de-água) comum na região. Ela floresce na lagoa e simboliza a resiliência da natureza local frente à urbanização.", en: "The name \"Gigóia\" comes from an aquatic plant (water hyacinth) common in the region. It blooms in the lagoon and symbolizes the resilience of local nature in the face of urbanization.", es: "El nombre \"Gigóia\" proviene de una planta acuática (jacinto de agua) común en la región. Florece en la laguna y simboliza la resiliencia de la naturaleza local frente a la urbanización." },
  hist_box2_t: { pt: "Arte e Boemia", en: "Art and Bohemians", es: "Arte y Bohemia" },
  hist_box2_d: { pt: "Hoje, a ilha é pintada por murais, abriga ateliês de artistas renomados e muita música ao vivo, mantendo sua alma boêmia e criativa.", en: "Today, the island is painted with murals, houses studios of renowned artists, and offers plenty of live music, maintaining its bohemian and creative soul.", es: "Hoy, la isla está pintada con murales, alberga estudios de artistas de renombre y mucha música en vivo, manteniendo su alma bohemia y creativa." },
  hist_sec2_t: { pt: "Comunidade e Preservação", en: "Community and Preservation", es: "Comunidad y Preservación" },
  hist_sec2_p1: { pt: "A ausência de carros é o traço mais marcante da Gigóia. As vielas estreitas moldaram uma comunidade unida, onde o ritmo é humano e a balsa é o elo com o continente. Essa dinâmica única reforça a necessidade constante de preservar as águas que nos cercam.", en: "The absence of cars is the most striking feature of Gigóia. The narrow alleys shaped a united community, where the pace is human and the ferry is the link to the mainland. This unique dynamic reinforces the constant need to preserve the waters that surround us.", es: "La ausencia de coches es el rasgo más llamativo de Gigóia. Las callejuelas estrechas formaron una comunidad unida, donde el ritmo es humano y la balsa es el vínculo con el continente. Esta dinámica única refuerza la necesidad constante de preservar las aguas que nos rodean." },
  btn_conheca_boas_praticas: { pt: "Conheça as Boas Práticas da Ilha", en: "Learn about Island Good Practices", es: "Conozca las Buenas Prácticas de la Isla" },
  btn_voltar_ilha: { pt: "← Voltar para A Ilha", en: "← Back to The Island", es: "← Volver a La Isla" },
// === PÁGINA: HOSPEDAGEM ===
  sub_hospedagem: { pt: "Encontre o lugar perfeito para relaxar e aproveitar a ilha. De charmosas pousadas a casas inteiras de temporada.", en: "Find the perfect place to relax and enjoy the island. From charming inns to entire vacation homes.", es: "Encuentra el lugar perfecto para relajarte y disfrutar de la isla. Desde posadas encantadoras até casas de vacaciones completas." },

  // === PÁGINA: HOTÉIS E POUSADAS ===
  sub_hosp_pousadas: { pt: "Conforto, tranquilidade e a experiência única de acordar com a brisa da lagoa.", en: "Comfort, tranquility, and the unique experience of waking up to the lagoon breeze.", es: "Confort, tranquilidad y la experiencia única de despertar con la brisa de la laguna." },
  hosp_h2: { pt: "Onde ficar nas Ilhas", en: "Where to stay on the Islands", es: "Dónde alojarse en las Islas" },
  hosp_p: { pt: "Opções charmosas para casais, famílias e quem busca relaxar longe do barulho da cidade.", en: "Charming options for couples, families, and those seeking to relax away from city noise.", es: "Opciones encantadoras para parejas, familias y quienes buscan relajarse lejos del ruido de la ciudad." },
  
  // Descrições Cards
  desc_veneza: { pt: "Localizada na tranquila Ilha Primeira. Ambiente intimista, acolhedor e com decoração exclusiva. Ideal para casais e viajantes que buscam sossego.", en: "Located on quiet Ilha Primeira. Intimate, welcoming atmosphere with exclusive decor. Ideal for couples and travelers seeking peace.", es: "Situada en la tranquila Ilha Primeira. Ambiente íntimo, acogedor y con decoración exclusiva. Ideal para parejas y viajeros que buscan tranquilidad." },
  desc_pousada_barra: { pt: "Uma das mais conhecidas da Ilha da Gigóia. Excelente localização, com fácil acesso aos restaurantes e travessia rápida para a praia e o continente.", en: "One of the best-known on Gigóia Island. Excellent location, with easy access to restaurants and quick crossing to the beach and mainland.", es: "Una de las más conocidas de la Isla Gigóia. Excelente ubicación, con fácil acceso a restaurantes y cruce rápido a la playa y al continente." },
  desc_marisis: { pt: "Hospedagem pequena e familiar na Gigóia. Muito elogiada pela limpeza impecável, ambiente silencioso e sensação de estar em um refúgio seguro na natureza.", en: "Small, family-run lodging on Gigóia. Highly praised for its impeccable cleanliness, quiet atmosphere, and the feeling of being in a safe nature retreat.", es: "Alojamiento pequeño y familiar en Gigóia. Muy elogiado por su limpieza impecable, ambiente silencioso y la sensación de estar en un refugio natural seguro." },
  desc_casanova_res: { pt: "Uma das mais sofisticadas da ilha, de frente para a lagoa e vista para a Pedra da Gávea. Suítes com temáticas românticas, perfeita para experiências premium.", en: "One of the most sophisticated on the island, facing the lagoon with views of Pedra da Gávea. Suites with romantic themes, perfect for premium experiences.", es: "Una de las más sofisticadas de la isla, frente a la laguna y con vistas a Pedra da Gávea. Suites con temática romántica, perfectas para experiencias premium." },

  // Modal e Badges
  side_badge_pousada: { pt: "Cadastre sua<br>Pousada<br>aqui!", en: "Register your<br>Inn<br>here!", es: "¡Registra tu<br>Posada<br>aquí!" },
  modal_pousada_sub: { pt: "Preencha os dados abaixo para solicitar um orçamento e cadastrar a sua hospedagem no Portal.", en: "Fill out the form below to request a quote and register your lodging on the Portal.", es: "Complete los datos a continuación para solicitar un presupuesto y registrar su alojamiento en el Portal." },
  lbl_pousada_nome: { pt: "Nome da Pousada/Hotel", en: "Inn/Hotel Name", es: "Nombre de la Posada/Hotel" },

  // === PÁGINA: ILHA GOURMET ===
  badge_gastronomia_alta: { pt: "🍽️ Alta Gastronomia", en: "🍽️ Fine Dining", es: "🍽️ Alta Gastronomía" },
  title_gourmet: { pt: "Ilha Gourmet", en: "Ilha Gourmet", es: "Ilha Gourmet" },
  sub_gourmet: { pt: "Sabores que impressionam. Uma fusão de culinária contemporânea com o frescor e o charme da Ilha da Gigóia.", en: "Impressive flavors. A fusion of contemporary cuisine with the freshness and charm of Gigóia Island.", es: "Sabores que impresionan. Una fusión de cocina contemporánea con la frescura y el encanto de la Isla Gigóia." },
  gourmet_sobre_t: { pt: "Experiência Inesquecível", en: "Unforgettable Experience", es: "Experiencia Inolvidable" },
  gourmet_sobre_p: { pt: "O <strong>Ilha Gourmet</strong> nasceu para os paladares mais exigentes. Com um menu cuidadosamente elaborado, o restaurante oferece pratos que são verdadeiras obras de arte, combinando ingredientes frescos locais com técnicas da gastronomia internacional.", en: "<strong>Ilha Gourmet</strong> was created for the most demanding palates. With a carefully crafted menu, the restaurant offers dishes that are true works of art, combining fresh local ingredients with international gastronomic techniques.", es: "<strong>Ilha Gourmet</strong> nació para los paladares más exigentes. Con un menú cuidadosamente elaborado, el restaurante ofrece platos que son verdaderas obras de arte, combinando ingredientes frescos locales con técnicas de la gastronomía internacional." },
  gourmet_dest_t: { pt: "Destaques do Menu", en: "Menu Highlights", es: "Lo mejor del menú" },
  gourmet_dest_1: { pt: "✓ Frutos do Mar Frescos", en: "✓ Fresh Seafood", es: "✓ Mariscos Frescos" },
  gourmet_dest_2: { pt: "✓ Carnes Nobres", en: "✓ Premium Meats", es: "✓ Carnes Nobles" },
  gourmet_dest_3: { pt: "✓ Sobremesas Autorais", en: "✓ Signature Desserts", es: "✓ Postres de Autor" },
  gourmet_dest_4: { pt: "✓ Carta de Vinhos Premium", en: "✓ Premium Wine List", es: "✓ Carta de Vinos Premium" },
  gourmet_vibe_t: { pt: "Ambiente", en: "Atmosphere", es: "Ambiente" },
  gourmet_vibe_p: { pt: "Intimista, climatizado e com atendimento impecável.", en: "Intimate, air-conditioned, and with impeccable service.", es: "Íntimo, climatizado y con una atención impecable." },
  gourmet_ideal_t: { pt: "Ideal Para", en: "Ideal For", es: "Ideal Para" },
  gourmet_ideal_p: { pt: "🍷 Jantares românticos e comemorações especiais.", en: "🍷 Romantic dinners and special celebrations.", es: "🍷 Cenas románticas y celebraciones especiales." },
  btn_reserva_gourmet: { pt: "Fazer Reserva via Gigi", en: "Make a Reservation via Gigi", es: "Hacer Reserva vía Gigi" },
  btn_voltar_restaurantes: { pt: "← Voltar para Restaurantes", en: "← Back to Restaurants", es: "← Volver a Restaurantes" },

 // === PÁGINA: ILHAS TIJUCAS ===
  sub_tijucas: { pt: "Conhecido como o \"Caribe Carioca\", este arquipélago oferece águas cristalinas perfeitas para mergulho e relaxamento.", en: "Known as the \"Carioca Caribbean\", this archipelago offers crystal clear waters perfect for diving and relaxation.", es: "Conocido como el \"Caribe Carioca\", este archipiélago ofrece aguas cristalinas perfectas para el buceo y la relajación." },
  tijucas_duracao_lbl: { pt: "Duração", en: "Duration", es: "Duración" },
  tijucas_duracao_val: { pt: "⏳ 4 horas de passeio", en: "⏳ 4-hour tour", es: "⏳ 4 horas de recorrido" },
  tijucas_valor_lbl: { pt: "Valor Médio", en: "Average Price", es: "Precio Promedio" },
  tijucas_valor_val: { pt: "💲 R$ 150 por pessoa", en: "💲 R$ 150 per person", es: "💲 R$ 150 por persona" },
  tijucas_sobre_t: { pt: "Um Mergulho no Paraíso", en: "A Dip in Paradise", es: "Un Chapuzón en el Paraíso" },
  tijucas_sobre_p: { pt: "O passeio para as <strong>Ilhas Tijucas</strong> começa navegando pelos belos canais da Gigóia até encontrar o mar aberto. O arquipélago, formado pelas ilhas Alfavaca, Pontuda e do Meio, é um refúgio de vida marinha, sendo muito comum nadar ao lado de tartarugas e peixes coloridos.", en: "The tour to the <strong>Tijucas Islands</strong> begins by navigating the beautiful canals of Gigóia until reaching the open sea. The archipelago, formed by the Alfavaca, Pontuda, and Meio islands, is a marine life sanctuary, where it's very common to swim alongside turtles and colorful fish.", es: "El tour a las <strong>Islas Tijucas</strong> comienza navegando por los hermosos canales de Gigóia hasta llegar a mar abierto. El archipiélago, formado por las islas Alfavaca, Pontuda y del Meio, es un refugio de vida marina, siendo muy común nadar junto a tortugas y peces de colores." },
  tijucas_dest_t: { pt: "Destaques do Passeio", en: "Tour Highlights", es: "Lo mejor del tour" },
  tijucas_dest_1: { pt: "✓ Águas cristalinas para banho", en: "✓ Crystal clear waters for swimming", es: "✓ Aguas cristalinas para bañarse" },
  tijucas_dest_2: { pt: "✓ Observação de tartarugas marinhas", en: "✓ Sea turtle watching", es: "✓ Avistamiento de tortugas marinas" },
  tijucas_dest_3: { pt: "✓ Visual incrível da orla da Barra", en: "✓ Incredible view of the Barra coast", es: "✓ Vista increíble de la costa de Barra" },
  tijucas_dest_4: { pt: "✓ Roteiro de aproximadamente 4 horas", en: "✓ Approximately 4-hour itinerary", es: "✓ Recorrido de aproximadamente 4 horas" },
  tijucas_cond_t: { pt: "Condições", en: "Conditions", es: "Condiciones" },
  tijucas_cond_p: { pt: "Este passeio depende estritamente de boas condições de mar e vento.", en: "This tour strictly depends on good sea and wind conditions.", es: "Este tour depende estrictamente de las buenas condiciones del mar y del viento." },
  tijucas_dica_t: { pt: "Dica de Ouro", en: "Pro Tip", es: "Consejo de Oro" },
  tijucas_dica_p: { pt: "🤿 Leve sua máscara de mergulho para aproveitar a visibilidade!", en: "🤿 Bring your diving mask to enjoy the visibility!", es: "🤿 ¡Lleva tu máscara de buceo para disfrutar de la visibilidad!" },
  btn_tijucas_gigi: { pt: "Verificar Saídas com a Gigi", en: "Check departures with Gigi", es: "Consultar salidas con Gigi" },
  btn_voltar_passeios: { pt: "← Voltar para Passeios e Rotas", en: "← Back to Tours and Routes", es: "← Volver a Paseos y Rutas" },
  
  // === PÁGINA: JET SKI ===
  title_jet_ski: { pt: "Passeio de Jet Ski", en: "Jet Ski Tour", es: "Tour en Moto de Agua" },
  sub_jet_ski: { pt: "Sinta a adrenalina e a liberdade de pilotar nas águas da lagoa da Barra.", en: "Feel the adrenaline and freedom of riding on the waters of the Barra lagoon.", es: "Siente la adrenalina y la libertad de pilotar en las aguas de la laguna de Barra." },
  jet_15min_lbl: { pt: "15 Minutos", en: "15 Minutes", es: "15 Minutos" },
  jet_30min_lbl: { pt: "30 Minutos", en: "30 Minutes", es: "30 Minutos" },
  jet_1h_lbl: { pt: "1 Hora", en: "1 Hour", es: "1 Hora" },
  jet_sobre_t: { pt: "Sobre a Experiência", en: "About the Experience", es: "Sobre la Experiencia" },
  jet_sobre_p1: { pt: "Para quem procura mais emoção na água, o <strong>aluguel de jet ski na Ilha da Gigóia</strong> é uma das experiências mais divertidas da região da Barra da Tijuca. A atividade permite explorar os canais da lagoa e áreas abertas com velocidade, liberdade e uma vista incrível da região.", en: "For those looking for more excitement on the water, <strong>jet ski rental on Gigóia Island</strong> is one of the most fun experiences in the Barra da Tijuca region. The activity allows you to explore the lagoon canals and open areas with speed, freedom, and an incredible view of the region.", es: "Para quienes buscan más emoción en el agua, el <strong>alquiler de moto de agua en la Isla Gigóia</strong> es una de las experiencias más divertidas en la región de Barra da Tijuca. La actividad permite explorar los canales de la laguna y áreas abiertas con velocidad, libertad y una vista increíble de la región." },
  jet_sobre_p2: { pt: "O jet ski é uma ótima opção para quem quer adicionar aventura e adrenalina ao passeio pela ilha, sendo muito procurado por visitantes que querem experimentar algo diferente. A atividade conta com orientação básica antes da saída, garantindo uma experiência segura e divertida mesmo para quem nunca pilotou.", en: "Jet skiing is a great option for those who want to add adventure and adrenaline to their island tour, being highly sought after by visitors who want to try something different. The activity includes basic guidance before departure, ensuring a safe and fun experience even for those who have never ridden before.", es: "La moto de agua es una gran opción para quienes quieren sumar aventura y adrenalina a su recorrido por la isla, siendo muy solicitada por visitantes que quieren experimentar algo diferente. La actividad cuenta con orientación básica antes de la salida, garantizando una experiencia segura y divertida incluso para quienes nunca han pilotado." },
  jet_dest_t: { pt: "Destaques", en: "Highlights", es: "Puntos Destacados" },
  jet_dest_1: { pt: "🚀 Emoção e Adrenalina", en: "🚀 Excitement and Adrenaline", es: "🚀 Emoción y Adrenalina" },
  jet_dest_2: { pt: "🌅 Vistas panorâmicas da Barra", en: "🌅 Panoramic views of Barra", es: "🌅 Vistas panorámicas de Barra" },
  jet_dest_3: { pt: "🔒 Segurança e colete incluso", en: "🔒 Safety and life vest included", es: "🔒 Seguridad y chaleco incluido" },
  jet_dest_4: { pt: "👨‍🏫 Orientação básica para iniciantes", en: "👨‍🏫 Basic guidance for beginners", es: "👨‍🏫 Orientación básica para principiantes" },
  jet_ideal_t: { pt: "Ideal Para", en: "Ideal For", es: "Ideal Para" },
  jet_ideal_p: { pt: "Adicionar aventura ao seu dia na lagoa e ver a região de um ângulo totalmente diferente.", en: "Adding adventure to your day on the lagoon and seeing the region from a totally different angle.", es: "Agregar aventura a tu día en la laguna y ver la región desde un ángulo totalmente diferente." },
  btn_jet_gigi: { pt: "Reservar Jet Ski com a Gigi", en: "Book Jet Ski with Gigi", es: "Reservar Moto de Agua con Gigi" },
  jet_footer_p: { pt: "Agende sua aventura com antecedência e garanta seu horário.", en: "Schedule your adventure in advance and guarantee your spot.", es: "Agenda tu aventura con anticipação y garantiza tu horario." },

  // === PÁGINA: LUX 48 ===
  badge_lux48: { pt: "🏙️ Urbano & Moderno", en: "🏙️ Urban & Modern", es: "🏙️ Urbano y Moderno" },
  title_lux48: { pt: "Lux 48", en: "Lux 48", es: "Lux 48" },
  sub_lux48: { pt: "Design contemporâneo e localização estratégica. A base ideal para explorar a Ilha e o Rio de Janeiro.", en: "Contemporary design and strategic location. The ideal base to explore the Island and Rio de Janeiro.", es: "Diseño contemporáneo y ubicación estratégica. La base ideal para explorar la Isla y Río de Janeiro." },
  lux48_sobre_t: { pt: "Estilo e Praticidade", en: "Style and Practicality", es: "Estilo y Practicidad" },
  lux48_sobre_p: { pt: "A <strong>Lux 48</strong> é perfeita para quem busca uma estadia prática sem abrir mão do estilo. Com decoração clean e aproveitamento inteligente de espaço, o apartamento oferece tudo o que você precisa para uma curta ou longa temporada no coração da Barra.", en: "<strong>Lux 48</strong> is perfect for those seeking a practical stay without giving up on style. With clean decor and smart use of space, the apartment offers everything you need for a short or long stay in the heart of Barra.", es: "El <strong>Lux 48</strong> es perfecto para quienes buscan una estadía práctica sin renunciar al estilo. Con una decoración limpia y un uso inteligente del espacio, el apartamento ofrece todo lo necesario para una estadía corta o larga en el corazón de Barra." },
  lux48_dest_t: { pt: "Destaques", en: "Highlights", es: "Puntos Destacados" },
  lux48_dest_1: { pt: "✓ Ar-condicionado Split", en: "✓ Split Air Conditioning", es: "✓ Aire Acondicionado Split" },
  lux48_dest_2: { pt: "✓ Smart TV e Wi-Fi", en: "✓ Smart TV and Wi-Fi", es: "✓ Smart TV y Wi-Fi" },
  lux48_dest_3: { pt: "✓ Cozinha Equipada", en: "✓ Equipped Kitchen", es: "✓ Cocina Equipada" },
  lux48_dest_4: { pt: "✓ Próximo ao Metrô", en: "✓ Near the Subway", es: "✓ Cerca del Metro" },
  lux48_loc_t: { pt: "Localização", en: "Location", es: "Ubicación" },
  lux48_loc_p: { pt: "Uma das áreas mais acessíveis da Ilha da Gigóia.", en: "One of the most accessible areas of Gigóia Island.", es: "Una de las zonas más accesibles de la Isla Gigóia." },
  lux48_ideal_t: { pt: "Ideal para", en: "Ideal for", es: "Ideal para" },
  lux48_ideal_p: { pt: "💼 Viajantes a trabalho ou casais.", en: "💼 Business travelers or couples.", es: "💼 Viajeros de negocios o parejas." },
  btn_lux48_gigi: { pt: "Consultar Disponibilidade", en: "Check Availability", es: "Consultar Disponibilidad" },
  
  

};

// Função mágica que busca a palavra certa dependendo do idioma
const t = (key) => DICT[key] ? (DICT[key][currentLang] || DICT[key].pt) : key;

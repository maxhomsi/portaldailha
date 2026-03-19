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


};

// Função mágica que busca a palavra certa dependendo do idioma
const t = (key) => DICT[key] ? (DICT[key][currentLang] || DICT[key].pt) : key;

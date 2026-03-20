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
  
  // AQUI ESTÃO AS DUAS CORREÇÕES DO FOOTER:
  footer_text: { 
    pt: "Portal Ilha da Gigóia — <a href='termos.html' style='text-decoration:underline;'>Termos • Privacidade</a>", 
    en: "Gigóia Island Portal — <a href='termos.html' style='text-decoration:underline;'>Terms • Privacy</a>", 
    es: "Portal Isla Gigóia — <a href='termos.html' style='text-decoration:underline;'>Términos • Privacidad</a>" 
  },
  footer_rights: { 
    pt: "Todos os direitos reservados.", 
    en: "All rights reserved.", 
    es: "Todos los derechos reservados." 
  },

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
  badge_briza: { pt: "🎶 Samba & Vibes", en: "🎶 Samba & Vibes", es: "🎶 Samba y Vibras" },
  title_briza: { pt: "Briza da Gigóia", en: "Briza da Gigóia", es: "Briza da Gigóia" },
  sub_briza: { pt: "Gastronomia, música ao vivo e eventos em um ambiente agradável à beira da lagoa.", en: "Gastronomy, live music, and events in a pleasant environment by the lagoon.", es: "Gastronomía, música en vivo y eventos en un ambiente agradable a orillas de la laguna." },
  
  briza_sobre_titulo: { pt: "Sobre o Espaço", en: "About the Space", es: "Sobre el Espacio" },
  briza_p1: { pt: "Localizado logo na entrada principal da ilha, o <strong>Briza da Gigóia</strong> é um espaço que combina gastronomia, música e eventos em um ambiente agradável à beira da lagoa. O bar oferece uma vista privilegiada e um clima descontraído, perfeito para quem quer aproveitar o melhor da atmosfera única da Ilha da Gigóia.", en: "Located right at the main entrance of the island, <strong>Briza da Gigóia</strong> is a space that combines gastronomy, music, and events in a pleasant environment by the lagoon. The bar offers a privileged view and a relaxed atmosphere, perfect for those who want to enjoy the best of Gigóia Island's unique vibe.", es: "Ubicado justo en la entrada principal de la isla, el <strong>Briza da Gigóia</strong> es un espacio que combina gastronomía, música y eventos en un ambiente agradable a orillas de la laguna. El bar ofrece una vista privilegiada y un clima relajado, perfecto para quienes desean disfrutar de lo mejor de la atmósfera única de la Isla Gigóia." },
  briza_p2: { pt: "O ambiente é conhecido por ser versátil e acolhedor, funcionando tanto para um almoço tranquilo quanto para encontros entre amigos ou celebrações especiais. O espaço também pode ser reservado para <strong>eventos e comemorações</strong>, sendo uma ótima opção para quem deseja celebrar aniversários, confraternizações ou encontros particulares em um cenário diferente, cercado pela natureza da lagoa.", en: "The environment is known for being versatile and welcoming, working both for a quiet lunch and for gatherings with friends or special celebrations. The space can also be reserved for <strong>events and celebrations</strong>, making it a great option for those wishing to celebrate birthdays, get-togethers, or private meetings in a different setting, surrounded by the lagoon's nature.", es: "El ambiente es conocido por ser versátil y acogedor, funcionando tanto para un almuerzo tranquilo como para encuentros entre amigos o celebraciones especiales. El espacio también puede ser reservado para <strong>eventos y conmemoraciones</strong>, siendo una excelente opción para quienes desean celebrar cumpleaños, reuniones o encuentros privados en un escenario diferente, rodeado de la naturaleza de la laguna." },
  briza_p3: { pt: "Outro destaque do Briza é a programação musical. Frequentemente acontecem apresentações de música ao vivo, especialmente <strong>rodas de samba aos finais de semana</strong>, que dão ainda mais vida ao lugar e transformam o ambiente em um ponto animado da noite da ilha.", en: "Another highlight of Briza is the musical programming. Live music performances frequently take place, especially <strong>samba circles on weekends</strong>, which bring even more life to the place and transform the environment into a lively spot for the island's nightlife.", es: "Otro destaque del Briza es la programación musical. Frecuentemente hay presentaciones de música en vivo, especialmente <strong>ruedas de samba los fines de semana</strong>, que dan aún más vida al lugar y transforman el ambiente en un punto animado de la noche isleña." },
  briza_p4: { pt: "Com boa comida, música e uma paisagem encantadora, o Briza da Gigóia se tornou um espaço ideal para quem quer curtir bons momentos, comemorar datas especiais ou simplesmente aproveitar a energia boêmia das ilhas da Barra da Tijuca.", en: "With good food, music, and an enchanting landscape, Briza da Gigóia has become an ideal space for those who want to enjoy good times, celebrate special dates, or simply soak up the bohemian energy of the Barra da Tijuca islands.", es: "Con buena comida, música y un paisaje encantador, el Briza da Gigóia se ha convertido en un espacio ideal para quienes quieren disfrutar de buenos momentos, celebrar fechas especiales o simplemente aprovechar la energía bohemia de las islas de Barra da Tijuca." },
  
  briza_esp_titulo: { pt: "A Experiência", en: "The Experience", es: "La Experiencia" },
  briza_esp_1: { pt: "✓ Rodas de Samba", en: "✓ Samba Circles", es: "✓ Ruedas de Samba" },
  briza_esp_2: { pt: "✓ Espaço para Eventos", en: "✓ Event Space", es: "✓ Espacio para Eventos" },
  briza_esp_3: { pt: "✓ Gastronomia e Drinks", en: "✓ Gastronomy & Drinks", es: "✓ Gastronomía y Tragos" },
  briza_esp_4: { pt: "✓ Vista para a Lagoa", en: "✓ Lagoon View", es: "✓ Vista a la Laguna" },
  
  briza_amb_titulo: { pt: "Ambiente", en: "Atmosphere", es: "Ambiente" },
  briza_amb_p: { pt: "Versátil, boêmio e com muita música.", en: "Versatile, bohemian, and full of music.", es: "Versátil, bohemio y con mucha música." },
  
  briza_dest_titulo: { pt: "Destaque", en: "Highlight", es: "Destacado" },
  briza_dest_p: { pt: "🎵 O ponto certo para curtir um samba no fim de semana.", en: "🎵 The right spot to enjoy samba on the weekend.", es: "🎵 El punto ideal para disfrutar un samba el fin de semana." },
  
  btn_falar_gigi_reserva: { pt: "Reservar para Eventos / Aniversários", en: "Book for Events / Birthdays", es: "Reservar para Eventos / Cumpleaños" },

  // === PÁGINA: BAR CAIÇARAS ===
  title_caicara: { pt: "Bar Caiçara", en: "Caiçara Bar", es: "Bar Caiçara" },
  sub_caicara: { pt: "Arte, música, gastronomia e um pôr do sol inesquecível na Ilha da Gigóia.", en: "Art, music, gastronomy, and an unforgettable sunset on Gigóia Island.", es: "Arte, música, gastronomía y un atardecer inolvidable en la Isla Gigóia." },
  caicara_sobre_titulo: { pt: "Sobre o Bar", en: "About the Bar", es: "Sobre el Bar" },
  
  caicara_p1: { pt: "Localizado na Ilha da Gigóia, o <strong>Bar Caiçara</strong> é um dos lugares mais autênticos e culturais da região. Muito mais do que um simples bar, o espaço mistura gastronomia, arte e música, criando um ambiente único para quem visita a ilha.", en: "Located on Gigóia Island, <strong>Bar Caiçara</strong> is one of the most authentic and cultural places in the region. Much more than just a bar, the space mixes gastronomy, art, and music, creating a unique environment for those visiting the island.", es: "Ubicado en la Isla Gigóia, el <strong>Bar Caiçara</strong> es uno de los lugares más auténticos y culturales de la región. Mucho más que un simple bar, el espacio mezcla gastronomía, arte y música, creando un ambiente único para quienes visitan la isla." },
  caicara_p2: { pt: "Um dos grandes diferenciais da casa é seu <strong>palco cultural</strong>, onde acontecem apresentações de música ao vivo, teatro e eventos artísticos, transformando o local em um verdadeiro ponto de encontro para quem aprecia cultura e boa energia.", en: "One of the great differentials of the house is its <strong>cultural stage</strong>, which hosts live music performances, theater, and artistic events, transforming the place into a true meeting point for those who appreciate culture and good energy.", es: "Uno de los grandes diferenciales de la casa es su <strong>escenario cultural</strong>, donde se realizan presentaciones de música en vivo, teatro y eventos artísticos, transformando el lugar en un verdadero punto de encuentro para quienes aprecian la cultura y la buena energía." },
  caicara_p3: { pt: "O cardápio é bem variado e traz excelentes petiscos e pratos inspirados na culinária brasileira e caiçara, com destaque para frutos do mar, pastéis e diversas opções para compartilhar entre amigos. Tudo isso acompanhado de chopp sempre muito gelado e ótimas caipirinhas, perfeitas para o clima descontraído da ilha.", en: "The menu is quite varied and features excellent snacks and dishes inspired by Brazilian and caiçara cuisine, with highlights including seafood, pastéis, and various options to share with friends. All this accompanied by ice-cold draft beer and great caipirinhas, perfect for the island's relaxed atmosphere.", es: "El menú es muy variado y ofrece excelentes tapas y platos inspirados en la cocina brasileña y caiçara, destacando los mariscos, empanadas y diversas opciones para compartir entre amigos. Todo esto acompañado de cerveza de barril siempre muy fría y excelentes caipirinhas, perfectas para el ambiente relajado de la isla." },
  caicara_p4: { pt: "Outro espetáculo à parte é o <strong>pôr do sol</strong>. Com vista privilegiada para a lagoa e para a natureza ao redor, o Bar Caiçara se transforma no fim da tarde em um dos melhores lugares da Ilha da Gigóia para relaxar, apreciar a paisagem e curtir a vibe tranquila das ilhas.", en: "Another spectacle is the <strong>sunset</strong>. With a privileged view of the lagoon and surrounding nature, Bar Caiçara transforms in the late afternoon into one of the best places on Gigóia Island to relax, enjoy the scenery, and soak up the peaceful vibe of the islands.", es: "Otro espectáculo aparte es el <strong>atardecer</strong>. Con una vista privilegiada a la laguna y la naturaleza circundante, el Bar Caiçara se transforma al final de la tarde en uno de los mejores lugares de la Isla Gigóia para relajarse, apreciar el paisaje y disfrutar de la vibra tranquila de las islas." },
  caicara_p5: { pt: "Entre boa música, arte, petiscos e uma paisagem incrível, o Bar Caiçara é uma parada obrigatória para quem quer viver a essência cultural e boêmia da Ilha da Gigóia.", en: "Between good music, art, snacks, and an incredible landscape, Bar Caiçara is a mandatory stop for anyone who wants to experience the cultural and bohemian essence of Gigóia Island.", es: "Entre buena música, arte, tapas y un paisaje increíble, el Bar Caiçara es una parada obligatoria para quienes desean vivir la esencia cultural y bohemia de la Isla Gigóia." },
  
  caicara_esp_titulo: { pt: "A Essência", en: "The Essence", es: "La Esencia" },
  caicara_esp_1: { pt: "✓ Música ao vivo e Arte", en: "✓ Live Music and Art", es: "✓ Música en vivo y Arte" },
  caicara_esp_2: { pt: "✓ Petiscos e Frutos do Mar", en: "✓ Snacks and Seafood", es: "✓ Tapas y Mariscos" },
  caicara_esp_3: { pt: "✓ Chopp gelado e Caipirinhas", en: "✓ Ice-cold Draft Beer and Caipirinhas", es: "✓ Cerveza de barril fría y Caipirinhas" },
  caicara_esp_4: { pt: "✓ Palco Cultural", en: "✓ Cultural Stage", es: "✓ Escenario Cultural" },
  
  caicara_amb_titulo: { pt: "Ambiente", en: "Atmosphere", es: "Ambiente" },
  caicara_amb_p: { pt: "Descontraído, boêmio e com vista privilegiada.", en: "Relaxed, bohemian, and with a privileged view.", es: "Relajado, bohemio y con una vista privilegiada." },
  
  caicara_dest_titulo: { pt: "Destaque", en: "Highlight", es: "Destacado" },
  caicara_dest_p: { pt: "🌅 Um dos melhores lugares para curtir o pôr do sol.", en: "🌅 One of the best places to enjoy the sunset.", es: "🌅 Uno de los mejores lugares para disfrutar del atardecer." },
  
  // === PÁGINA: BOTECO DA CAPIVARA ===
  badge_capivara: { pt: "🌅 Pôr do Sol & Drinks", en: "🌅 Sunset & Drinks", es: "🌅 Atardecer y Tragos" },
  title_capivara: { pt: "Boteco da Capivara", en: "Boteco da Capivara", es: "Boteco da Capivara" },
  sub_capivara: { pt: "Um espaço charmoso com vista direta para a lagoa, perfeito para aproveitar o dia ou o fim de tarde.", en: "A charming space with a direct view of the lagoon, perfect to enjoy the day or late afternoon.", es: "Un espacio encantador con vista directa a la laguna, perfecto para disfrutar el día o el atardecer." },
  
  capivara_sobre_titulo: { pt: "Sobre o Bar", en: "About the Bar", es: "Sobre el Bar" },
  capivara_p1: { pt: "O <strong>Boteco da Capivara</strong> é um bar super charmoso na Ilha da Gigóia, localizado logo em frente à entrada principal da ilha, com vista direta para a lagoa e um dos cenários mais agradáveis para aproveitar o dia ou o fim de tarde.", en: "<strong>Boteco da Capivara</strong> is a super charming bar on Gigóia Island, located right in front of the island's main entrance, with a direct view of the lagoon and one of the most pleasant settings to enjoy the day or late afternoon.", es: "El <strong>Boteco da Capivara</strong> es un bar súper encantador en la Isla Gigóia, ubicado justo frente a la entrada principal de la isla, con vista directa a la laguna y uno de los escenarios más agradables para disfrutar el día o el atardecer." },
  capivara_p2: { pt: "O espaço tem um clima super acolhedor e descontraído. No cardápio é possível encontrar petiscos, drinks variados e também pratos mais elaborados, como moquecas e risotos, agradando tanto quem quer apenas beliscar algo quanto quem prefere fazer uma refeição completa.", en: "The space has a super cozy and relaxed atmosphere. On the menu, you can find snacks, varied drinks, and also more elaborate dishes, such as moquecas and risottos, pleasing both those who just want a bite and those who prefer a full meal.", es: "El espacio tiene un ambiente súper acogedor y relajado. En el menú, se pueden encontrar tapas, tragos variados y también platos más elaborados, como moquecas y risottos, complaciendo tanto a quienes solo quieren picar algo como a quienes prefieren una comida completa." },
  capivara_p3: { pt: "Por estar localizado de frente para a água, o Boteco da Capivara também é um dos lugares ideais para apreciar o pôr do sol na Ilha da Gigóia, quando o ambiente fica ainda mais agradável e o clima da ilha aparece em sua melhor forma.", en: "Being located facing the water, Boteco da Capivara is also one of the ideal places to enjoy the sunset on Gigóia Island, when the environment becomes even more pleasant and the island's vibe shows its best form.", es: "Al estar ubicado frente al agua, Boteco da Capivara también es uno de los lugares ideales para disfrutar del atardecer en la Isla Gigóia, cuando el ambiente se vuelve aún más agradable y el clima de la isla aparece en su mejor forma." },
  capivara_p4: { pt: "Com boa comida, drinks, vista privilegiada e aquele espírito descontraído típico das ilhas da Barra da Tijuca, o Boteco da Capivara se tornou mais uma parada obrigatória para quem quer curtir a gastronomia e o clima único da Ilha da Gigóia.", en: "With good food, drinks, a privileged view, and that relaxed spirit typical of the Barra da Tijuca islands, Boteco da Capivara has become another mandatory stop for those who want to enjoy the gastronomy and unique vibe of Gigóia Island.", es: "Con buena comida, tragos, una vista privilegiada y ese espíritu relajado típico de las islas de Barra da Tijuca, Boteco da Capivara se ha convertido en otra parada obligatoria para quienes desean disfrutar de la gastronomía y el clima único de la Isla Gigóia." },
  
  capivara_esp_titulo: { pt: "A Experiência", en: "The Experience", es: "La Experiencia" },
  capivara_esp_1: { pt: "✓ Vista direta para a lagoa", en: "✓ Direct view of the lagoon", es: "✓ Vista directa a la laguna" },
  capivara_esp_2: { pt: "✓ Petiscos e pratos elaborados", en: "✓ Snacks and elaborate dishes", es: "✓ Tapas y platos elaborados" },
  capivara_esp_3: { pt: "✓ Drinks variados", en: "✓ Varied drinks", es: "✓ Tragos variados" },
  capivara_esp_4: { pt: "✓ Pôr do sol inesquecível", en: "✓ Unforgettable sunset", es: "✓ Atardecer inolvidable" },
  
  capivara_amb_titulo: { pt: "Ambiente", en: "Atmosphere", es: "Ambiente" },
  capivara_amb_p: { pt: "Super acolhedor e descontraído.", en: "Super cozy and relaxed.", es: "Súper acogedor y relajado." },
  
  capivara_dest_titulo: { pt: "Destaque", en: "Highlight", es: "Destacado" },
  capivara_dest_p: { pt: "🌅 Uma parada obrigatória com vista privilegiada.", en: "🌅 A mandatory stop with a privileged view.", es: "🌅 Una parada obligatoria con una vista privilegiada." },


// === PÁGINA: BAR DO ELSON ===
  badge_elson: { pt: "🍗 Boteco Raiz & Futebol", en: "🍗 Authentic Pub & Soccer", es: "🍗 Cantina Auténtica y Fútbol" },
  title_elson: { pt: "Bar do Elson", en: "Elson's Bar", es: "Bar de Elson" },
  sub_elson: { pt: "Um autêntico boteco raiz com o melhor frango assado da Ilha, cerveja gelada e futebol.", en: "An authentic pub with the best roast chicken on the Island, ice-cold beer, and soccer.", es: "Una auténtica cantina de barrio con el mejor pollo asado de la Isla, cerveza helada y fútbol." },
  
  elson_sobre_titulo: { pt: "Sobre o Boteco", en: "About the Pub", es: "Sobre la Cantina" },
  elson_p1: { pt: "Localizado no coração da Ilha da Gigóia, o <strong>Bar do Elson</strong> é um daqueles botequins que rapidamente se tornaram parte da vida da ilha. Criado pelo dono Elson, o bar rapidamente conquistou moradores e visitantes com seu clima simples, acolhedor e cheio de personalidade.", en: "Located in the heart of Gigóia Island, <strong>Elson's Bar</strong> is one of those pubs that quickly became part of the island's life. Created by owner Elson, the bar quickly won over residents and visitors with its simple, welcoming, and personality-filled atmosphere.", es: "Ubicado en el corazón de la Isla Gigóia, el <strong>Bar de Elson</strong> es una de esas cantinas que rápidamente se convirtieron en parte de la vida de la isla. Creado por su dueño Elson, el bar conquistó rápidamente a residentes y visitantes con su ambiente sencillo, acogedor y lleno de personalidad." },
  elson_p2: { pt: "O espaço tem a essência de boteco raiz, onde as pessoas chegam para comer bem, conversar e aproveitar o dia à beira da lagoa. O grande destaque da casa é o famoso frango assado, considerado por muitos frequentadores o melhor frango assado da Ilha da Gigóia, suculento e cheio de sabor.", en: "The space has the essence of an authentic pub, where people come to eat well, chat, and enjoy the day by the lagoon. The main highlight of the house is the famous roast chicken, considered by many patrons the best roast chicken on Gigóia Island, juicy and full of flavor.", es: "El espacio tiene la esencia de un bar auténtico, donde la gente llega para comer bien, conversar y disfrutar del día junto a la laguna. El gran destaque de la casa es el famoso pollo asado, considerado por muchos clientes el mejor pollo asado de la Isla Gigóia, jugoso y lleno de sabor." },
  elson_p3: { pt: "Além da comida, o bar também virou um ponto de encontro para assistir jogos de futebol, reunindo moradores e visitantes que se juntam para torcer, beber uma cerveja gelada e aproveitar o clima descontraído típico das ilhas.", en: "Besides the food, the bar has also become a meeting point to watch soccer games, gathering residents and visitors who join together to cheer, drink an ice-cold beer, and enjoy the relaxed atmosphere typical of the islands.", es: "Además de la comida, el bar también se ha convertido en un punto de encuentro para ver partidos de fútbol, reuniendo a residentes y visitantes que se juntan para animar, beber una cerveza helada y disfrutar del ambiente relajado típico de las islas." },
  elson_p4: { pt: "Outro motivo de destaque é que o bar participa do tradicional concurso gastronômico <strong>Comida di Buteco</strong>, evento que reúne alguns dos melhores botecos do país e celebra a cultura da comida de bar brasileira.", en: "Another highlight is that the bar participates in the traditional gastronomic contest <strong>Comida di Buteco</strong>, an event that gathers some of the best pubs in the country and celebrates the culture of Brazilian pub food.", es: "Otro motivo destacado es que el bar participa en el tradicional concurso gastronómico <strong>Comida di Buteco</strong>, un evento que reúne a algunas de las mejores cantinas del país y celebra la cultura de la comida de bar brasileña." },
  
  elson_esp_titulo: { pt: "A Experiência", en: "The Experience", es: "La Experiencia" },
  elson_esp_1: { pt: "✓ O Melhor Frango Assado", en: "✓ The Best Roast Chicken", es: "✓ El Mejor Pollo Asado" },
  elson_esp_2: { pt: "✓ Transmissão de Jogos", en: "✓ Live Sports Broadcast", es: "✓ Transmisión de Partidos" },
  elson_esp_3: { pt: "✓ Comida di Buteco", en: "✓ Comida di Buteco Contest", es: "✓ Comida di Buteco" },
  elson_esp_4: { pt: "✓ Clima de Boteco Raiz", en: "✓ Authentic Pub Vibe", es: "✓ Clima de Cantina Auténtica" },
  
  elson_amb_titulo: { pt: "Ambiente", en: "Atmosphere", es: "Ambiente" },
  elson_amb_p: { pt: "Simples, acolhedor e cheio de personalidade.", en: "Simple, welcoming, and full of personality.", es: "Sencillo, acogedor y lleno de personalidad." },
  
  elson_dest_titulo: { pt: "Destaque", en: "Highlight", es: "Destacado" },
  elson_dest_p: { pt: "🍗 O famoso frango assado, considerado o melhor da região.", en: "🍗 The famous roast chicken, considered the best in the region.", es: "🍗 El famoso pollo asado, considerado el mejor de la región." },
  
  // === PÁGINA: BAR DA JOANA ===
  badge_joana: { pt: "🍳 Tempero com Amor", en: "🍳 Seasoned with Love", es: "🍳 Sazón con Amor" },
  title_joana: { pt: "Bar da Joana", en: "Joana's Bar", es: "Bar de Joana" },
  sub_joana: { pt: "Um cantinho especial com atendimento caloroso, tempero caseiro e a verdadeira essência do boteco carioca.", en: "A special little corner with warm service, homemade seasoning, and the true essence of a Carioca pub.", es: "Un rincón especial con un servicio cálido, sazón casero y la verdadera esencia de la cantina carioca." },
  
  joana_sobre_titulo: { pt: "Sobre o Bar", en: "About the Bar", es: "Sobre el Bar" },
  joana_p1: { pt: "O <strong>Bar da Joana</strong> é aquele cantinho especial que faz você se sentir em casa logo no primeiro momento. Conhecido pelo atendimento extremamente caloroso e pela comida com verdadeiro tempero caseiro, é o ponto de encontro perfeito para quem busca uma experiência autêntica e sem frescuras.", en: "<strong>Joana's Bar</strong> is that special little corner that makes you feel at home right from the first moment. Known for its extremely warm service and food with true homemade seasoning, it's the perfect meeting point for those seeking an authentic, no-frills experience.", es: "El <strong>Bar de Joana</strong> es ese rincón especial que te hace sentir como en casa desde el primer momento. Conocido por su servicio extremadamente cálido y comida con verdadero sazón casero, es el punto de encuentro perfecto para quienes buscan una experiencia auténtica y sin pretensiones." },
  joana_p2: { pt: "Aqui a regra é simples: sentar, pedir uma bebida bem gelada e deixar o tempo passar enquanto se aproveita a tranquilidade e a simpatia dos moradores e visitantes da ilha.", en: "Here the rule is simple: sit down, order an ice-cold drink, and let time pass while enjoying the tranquility and friendliness of the island's residents and visitors.", es: "Aquí la regla es simple: sentarse, pedir una bebida bien fría y dejar pasar el tiempo mientras se disfruta de la tranquilidad y simpatía de los residentes y visitantes de la isla." },
  joana_p3: { pt: "Se a sua ideia de passeio perfeito envolve simplicidade, gente boa e sabores que abraçam o estômago, o Bar da Joana vai ser uma das suas paradas favoritas.", en: "If your idea of a perfect outing involves simplicity, good people, and flavors that embrace your stomach, Joana's Bar will be one of your favorite stops.", es: "Si tu idea de un paseo perfecto incluye sencillez, buena gente y sabores que abrazan el estómago, el Bar de Joana será una de tus paradas favoritas." },
  
  joana_esp_titulo: { pt: "Destaques do Bar", en: "Bar Highlights", es: "Destacados del Bar" },
  joana_esp_1: { pt: "✓ Cerveja Estupidamente Gelada", en: "✓ Ice-Cold Beer", es: "✓ Cerveza Súper Helada" },
  joana_esp_2: { pt: "✓ Petiscos Raiz (Pastéis e Caldinhos)", en: "✓ Authentic Snacks (Pastries and Broths)", es: "✓ Tapas Auténticas (Empanadas y Caldos)" },
  joana_esp_3: { pt: "✓ Clima Familiar e Aconchegante", en: "✓ Cozy and Family Atmosphere", es: "✓ Clima Familiar y Acogedor" },
  joana_esp_4: { pt: "✓ Comida com Tempero Caseiro", en: "✓ Food with Homemade Seasoning", es: "✓ Comida con Sazón Casero" },
  
  joana_amb_titulo: { pt: "Ambiente", en: "Atmosphere", es: "Ambiente" },
  joana_amb_p: { pt: "Simples, aconchegante e sem frescuras.", en: "Simple, cozy, and no-frills.", es: "Sencillo, acogedor y sin pretensiones." },
  
  joana_dest_titulo: { pt: "Destaque", en: "Highlight", es: "Destacado" },
  joana_dest_p: { pt: "🍻 O ponto de encontro perfeito para uma experiência autêntica.", en: "🍻 The perfect meeting point for an authentic experience.", es: "🍻 El punto de encuentro perfecto para una experiencia auténtica." },
  
/// === PÁGINA: BAR DO KAI ===
  badge_kai: { pt: "🍻 Ponto de Encontro", en: "🍻 Meeting Point", es: "🍻 Punto de Encuentro" },
  title_kai: { pt: "Bar do Kai", en: "Kai's Bar", es: "Bar de Kai" },
  sub_kai: { pt: "Um ambiente super acolhedor e descontraído, ponto de encontro e parada certa para a saideira na ilha.", en: "A super cozy and relaxed atmosphere, a meeting point, and the perfect stop for a nightcap on the island.", es: "Un ambiente súper acogedor y relajado, punto de encuentro y la parada segura para la última copa en la isla." },
  
  kai_sobre_titulo: { pt: "Sobre o Bar", en: "About the Bar", es: "Sobre el Bar" },
  kai_p1: { pt: "O <strong>Kai</strong> é um bar bastante conhecido da Ilha da Gigóia e se destaca pelo ambiente super acolhedor e descontraído, típico dos lugares onde moradores e visitantes se sentem à vontade desde o primeiro momento.", en: "<strong>Kai</strong> is a well-known bar on Gigóia Island and stands out for its super cozy and relaxed atmosphere, typical of places where residents and visitors feel at ease from the first moment.", es: "El <strong>Kai</strong> es un bar muy conocido en la Isla Gigóia y destaca por su ambiente súper acogedor y relajado, típico de los lugares donde residentes y visitantes se sienten cómodos desde el primer momento." },
  kai_p2: { pt: "O espaço oferece pratos executivos e petiscos variados, sendo uma ótima opção tanto para quem quer fazer uma refeição tranquila durante o dia quanto para quem prefere sentar com amigos e aproveitar a atmosfera da ilha.", en: "The space offers executive dishes and varied snacks, making it a great option both for a quiet meal during the day and for sitting with friends to enjoy the island's atmosphere.", es: "El espacio ofrece platos ejecutivos y tapas variadas, siendo una excelente opción tanto para quienes desean una comida tranquila durante el día como para quienes prefieren sentarse con amigos a disfrutar de la atmósfera de la isla." },
  kai_p3: { pt: "Um detalhe que tornou o Kai bastante popular entre frequentadores é que muitas vezes ele acaba sendo um dos bares que ficam <strong>abertos até mais tarde na ilha</strong>, virando parada certa para quem quer tomar aquela saideira.", en: "A detail that made Kai very popular among patrons is that it is often one of the bars that stay <strong>open later on the island</strong>, becoming the perfect stop for a nightcap.", es: "Un detalle que hizo al Kai muy popular entre los clientes es que a menudo es uno de los bares que abren <strong>hasta más tarde en la isla</strong>, convirtiéndose en la parada segura para la última copa." },
  kai_p4: { pt: "A cerveja sempre muito gelada também é parte da fama do lugar, o que naturalmente transforma o bar em ponto de encontro de moradores e visitantes, que se reúnem ali para conversar, relaxar e aproveitar o clima simples e autêntico da ilha.", en: "The always ice-cold beer is also part of the place's fame, which naturally turns the bar into a meeting point for locals and visitors, who gather there to chat, relax, and enjoy the simple and authentic vibe of the island.", es: "La cerveza siempre muy fría también es parte de la fama del lugar, lo que naturalmente transforma el bar en un punto de encuentro para residentes y visitantes, que se reúnen allí para conversar, relajarse y disfrutar del clima sencillo y auténtico de la isla." },
  kai_p5: { pt: "Com ambiente agradável, boa comida e aquele espírito de boteco carioca onde todo mundo acaba se conhecendo, o Kai é mais um dos lugares que ajudam a construir a vida noturna da Ilha da Gigóia, que hoje é reconhecida como um pequeno polo gastronômico dentro da Barra da Tijuca.", en: "With a pleasant atmosphere, good food, and that Carioca pub spirit where everyone gets to know each other, Kai is another place that helps build the nightlife of Gigóia Island, which today is recognized as a small gastronomic hub within Barra da Tijuca.", es: "Con un ambiente agradable, buena comida y ese espíritu de cantina carioca donde todos se terminan conociendo, el Kai es otro de los lugares que ayudan a construir la vida nocturna de la Isla Gigóia, que hoy es reconocida como un pequeño polo gastronómico dentro de Barra da Tijuca." },
  kai_esp_titulo: { pt: "A Experiência", en: "The Experience", es: "La Experiencia" },
  kai_esp_1: { pt: "✓ Pratos executivos e petiscos", en: "✓ Executive dishes and snacks", es: "✓ Platos ejecutivos y tapas" },
  kai_esp_2: { pt: "✓ Aberto até mais tarde (saideira)", en: "✓ Open late (nightcap)", es: "✓ Abierto hasta más tarde (última copa)" },
  kai_esp_3: { pt: "✓ Cerveja sempre muito gelada", en: "✓ Ice-cold beer", es: "✓ Cerveza siempre muy fría" },
  kai_esp_4: { pt: "✓ Clima de boteco carioca", en: "✓ Carioca pub vibe", es: "✓ Clima de cantina carioca" },
  kai_amb_titulo: { pt: "Ambiente", en: "Atmosphere", es: "Ambiente" },
  kai_amb_p: { pt: "Simples, acolhedor e autêntico.", en: "Simple, welcoming, and authentic.", es: "Sencillo, acogedor y auténtico." },
  kai_dest_titulo: { pt: "Destaque", en: "Highlight", es: "Destacado" },
  kai_dest_p: { pt: "🌙 A parada certa para a saideira na ilha.", en: "🌙 The right stop for a nightcap on the island.", es: "🌙 La parada perfecta para la última copa en la isla." },

// === PÁGINA: KAUAI GASTROLOUNGE ===
  badge_kauai: { pt: "🌴 Entretenimento & Natureza", en: "🌴 Entertainment & Nature", es: "🌴 Entretenimiento y Naturaleza" },
  title_kauai: { pt: "Kauai Gastrolounge", en: "Kauai Gastrolounge", es: "Kauai Gastrolounge" },
  sub_kauai: { pt: "Gastronomia, natureza e música em um espaço amplo com área kids na charmosa Ilha do Ipê.", en: "Gastronomy, nature, and music in a spacious venue with a kids' area on the charming Ilha do Ipê.", es: "Gastronomía, naturaleza y música en un amplio espacio con área infantil en la encantadora Ilha do Ipê." },
  
  kauai_sobre_titulo: { pt: "Sobre o Gastrolounge", en: "About the Gastrolounge", es: "Sobre el Gastrolounge" },
  kauai_p1: { pt: "Localizado na charmosa Ilha do Ipê, no complexo lagunar da região da Gigóia, o <strong>Kauai Gastrolounge</strong> é um espaço que mistura gastronomia, natureza e entretenimento, criando um ambiente perfeito para quem quer relaxar e aproveitar bons momentos na ilha.", en: "Located on the charming Ilha do Ipê, in the lagoon complex of the Gigóia region, <strong>Kauai Gastrolounge</strong> is a space that mixes gastronomy, nature, and entertainment, creating a perfect environment for those who want to relax and enjoy good times on the island.", es: "Ubicado en la encantadora Ilha do Ipê, en el complejo lagunar de la región de Gigóia, <strong>Kauai Gastrolounge</strong> es un espacio que mezcla gastronomía, naturaleza y entretenimiento, creando un ambiente perfecto para quienes quieren relajarse y disfrutar de buenos momentos en la isla." },
  kauai_p2: { pt: "O local possui uma estrutura ampla e diferenciada, com decoração rústica e ambiente ao ar livre em meio à natureza. Entre os destaques do espaço está a <strong>área kids</strong>, que permite que famílias aproveitem o passeio enquanto as crianças também têm um espaço próprio para se divertir.", en: "The venue has a large and differentiated structure, with rustic decor and an outdoor environment surrounded by nature. Among the space's highlights is the <strong>kids' area</strong>, which allows families to enjoy the outing while children also have their own space to have fun.", es: "El lugar cuenta con una estructura amplia y diferenciada, con decoración rústica y un ambiente al aire libre en medio de la naturaleza. Entre los atractivos del espacio destaca la <strong>zona kids</strong>, que permite a las familias disfrutar del paseo mientras los niños también tienen un espacio propio para divertirse." },
  kauai_p3: { pt: "A casa também é conhecida pela música ao vivo nos finais de semana, com programação variada que inclui samba, pagode, rock e DJs, criando um clima animado que combina perfeitamente com o cenário das ilhas da lagoa.", en: "The house is also known for live music on weekends, with a varied program that includes samba, pagode, rock, and DJs, creating a lively atmosphere that perfectly matches the scenery of the lagoon islands.", es: "La casa también es conocida por la música en vivo los fines de semana, con una variada programación que incluye samba, pagode, rock y DJs, creando un ambiente animado que combina a la perfección con el paisaje de las islas de la laguna." },
  kauai_p4: { pt: "Com cardápio variado, drinks bem preparados e um ambiente descontraído à beira da água, o Kauai se tornou um dos lugares ideais para curtir o fim de tarde com amigos, apreciando a paisagem, boa música e o clima único da região.", en: "With a varied menu, well-prepared drinks, and a relaxed atmosphere by the water, Kauai has become one of the ideal places to enjoy the late afternoon with friends, appreciating the scenery, good music, and the unique climate of the region.", es: "Con un menú variado, tragos bien preparados y un ambiente relajado a la orilla del agua, Kauai se ha convertido en uno de los lugares ideales para disfrutar del atardecer con amigos, apreciando el paisaje, la buena música y el clima único de la región." },
  kauai_p5: { pt: "Entre gastronomia, natureza e música, o Kauai Gastrolounge oferece uma experiência completa para quem quer aproveitar um dos cenários mais agradáveis das ilhas da Barra da Tijuca.", en: "Between gastronomy, nature, and music, Kauai Gastrolounge offers a complete experience for those who want to enjoy one of the most pleasant settings in the Barra da Tijuca islands.", es: "Entre gastronomía, naturaleza y música, Kauai Gastrolounge ofrece una experiencia completa para quienes desean disfrutar de uno de los escenarios más agradables de las islas de Barra da Tijuca." },
  
  kauai_esp_titulo: { pt: "A Experiência", en: "The Experience", es: "La Experiencia" },
  kauai_esp_1: { pt: "✓ Estrutura ampla com Área Kids", en: "✓ Spacious structure with Kids' Area", es: "✓ Amplia estructura con Área Kids" },
  kauai_esp_2: { pt: "✓ Gastronomia e drinks bem preparados", en: "✓ Well-prepared gastronomy and drinks", es: "✓ Gastronomía y tragos bien preparados" },
  kauai_esp_3: { pt: "✓ Música ao vivo (Samba, Rock, DJs)", en: "✓ Live music (Samba, Rock, DJs)", es: "✓ Música en vivo (Samba, Rock, DJs)" },
  kauai_esp_4: { pt: "✓ Localizado na Ilha do Ipê", en: "✓ Located on Ilha do Ipê", es: "✓ Ubicado en Ilha do Ipê" },
  
  kauai_amb_titulo: { pt: "Ambiente", en: "Atmosphere", es: "Ambiente" },
  kauai_amb_p: { pt: "Amplo, rústico e integrado à natureza.", en: "Spacious, rustic, and integrated with nature.", es: "Amplio, rústico e integrado a la naturaleza." },
  
  kauai_dest_titulo: { pt: "Destaque", en: "Highlight", es: "Destacado" },
  kauai_dest_p: { pt: "🎸 Perfeito para curtir o fim de tarde com amigos e família.", en: "🎸 Perfect to enjoy the late afternoon with friends and family.", es: "🎸 Perfecto para disfrutar del atardecer con amigos y familiares." },

  
// === PÁGINA: LISTA DE BARES E DRINKS ===
  title_bares: { pt: "Bares e Drinks", en: "Bars & Drinks", es: "Bares y Bebidas" },
  sub_bares: { pt: "Cerveja gelada, caipirinhas e o pôr do sol mais bonito da região.", en: "Ice-cold beer, caipirinhas, and the most beautiful sunset in the region.", es: "Cerveza helada, caipirinhas y el atardecer más hermoso de la región." },
  bares_intro: { pt: "Nada supera o fim de tarde na Gigóia. Escolha um dos nossos <strong>bares e botecos tradicionais</strong> para relaxar, petiscar e curtir a vibe única da ilha.", en: "Nothing beats a late afternoon on Gigóia. Choose one of our <strong>traditional bars and pubs</strong> to relax, snack, and enjoy the island's unique vibe.", es: "Nada supera un atardecer en Gigóia. Elige uno de nuestros <strong>bares y cantinas tradicionales</strong> para relajarte, picar algo y disfrutar de la vibra única de la isla." },
  
  // Descrições dos Cards
  card_akbar_d: { pt: "Drinks autorais e uma das vistas mais disputadas para o canal.", en: "Signature drinks and one of the most sought-after views of the canal.", es: "Tragos de autor y una de las vistas más codiciadas del canal." },
  card_briza_d: { pt: "Ambiente descontraído, música boa e petiscos que são a cara do Rio.", en: "Relaxed atmosphere, good music, and snacks that scream Rio.", es: "Ambiente relajado, buena música y tapas con todo el estilo de Río." },
  card_caicaras_d: { pt: "O ponto de encontro tradicional com o verdadeiro tempero da ilha.", en: "The traditional meeting point with the true flavor of the island.", es: "El punto de encuentro tradicional con el verdadero sazón de la isla." },
  card_capivara_d: { pt: "Ambiente charmoso com vista direta para a lagoa, drinks variados e um pôr do sol incrível.", en: "Charming environment with a direct view of the lagoon, varied drinks, and an incredible sunset.", es: "Ambiente encantador con vista directa a la laguna, tragos variados y un atardecer increíble." },
  card_elson_d: { pt: "Boteco raiz famoso pelo melhor frango assado da ilha, cerveja gelada e transmissão de jogos.", en: "Authentic pub famous for the best roast chicken on the island, ice-cold beer, and live sports.", es: "Cantina auténtica famosa por el mejor pollo asado de la isla, cerveza helada y transmisión de partidos." },  card_joana_d: { pt: "Comida caseira de boteco e aquele clima de vila que a gente ama.", en: "Homemade pub food and that village vibe we all love.", es: "Comida casera de bar y ese ambiente de pueblo que tanto amamos." },
card_kai_d: { pt: "Ponto de encontro descontraído, famoso pela cerveja gelada e por ser a parada certa para a saideira.", en: "Relaxed meeting point, famous for ice-cold beer and being the perfect stop for a nightcap.", es: "Punto de encuentro relajado, famoso por la cerveza helada y por ser la parada segura para la última copa." },  card_kauai_d: { pt: "Inspirado no estilo tropical, ideal para um final de tarde relaxante.", en: "Inspired by tropical style, ideal for a relaxing late afternoon.", es: "Inspirado en el estilo tropical, ideal para una tarde relajante." },
card_kauai_d: { pt: "Espaço amplo na Ilha do Ipê com música ao vivo, área kids e um clima perfeito para relaxar.", en: "Spacious venue on Ilha do Ipê with live music, a kids' area, and a perfect vibe to relax.", es: "Amplio espacio en la Ilha do Ipê con música en vivo, área para niños y un clima perfecto para relajarse." },
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

  // === PÁGINA: MARACUJÁ DA ILHA ===
  title_maracuja: { pt: "Maracujá da Ilha", en: "Maracujá da Ilha", es: "Maracujá da Ilha" },
  sub_maracuja: { pt: "Gastronomia, música e um pôr do sol inesquecível em um ambiente que traduz perfeitamente o espírito da Gigóia.", en: "Gastronomy, music, and an unforgettable sunset in an environment that perfectly reflects the spirit of Gigóia.", es: "Gastronomía, música y un atardecer inolvidable en un ambiente que refleja perfectamente el espíritu de Gigóia." },
  maracuja_sobre_p1: { pt: "Localizado em um dos pontos mais privilegiados da lagoa, o <strong>Maracujá da Ilha</strong> oferece uma infraestrutura completa para eventos em um ambiente que respira a natureza da Gigóia. O local é referência por unir bar, restaurante e um deck com a vista mais desejada da região.", en: "Located in one of the most privileged spots on the lagoon, <strong>Maracujá da Ilha</strong> offers complete infrastructure for events in an environment that breathes the nature of Gigóia. The venue is a reference for combining a bar, restaurant, and a deck with the most desired view in the region.", es: "Ubicado en uno de los puntos más privilegiados de la laguna, <strong>Maracujá da Ilha</strong> ofrece una infraestructura completa para eventos en un ambiente que respira la naturaleza de Gigóia. El lugar es referencia por unir bar, restaurante y un deck con la vista más deseada de la región." },
  maracuja_sobre_p2: { pt: "Seja para uma pequena comemoração entre amigos ou um evento corporativo de maior porte, o espaço se adapta com cenografia flexível, gastronomia de qualidade e drinks autorais. O pôr do sol aqui não é apenas um detalhe, é a atração principal que torna qualquer celebração inesquecível.", en: "Whether for a small celebration among friends or a larger corporate event, the space adapts with flexible scenography, quality gastronomy, and signature drinks. The sunset here is not just a detail, it is the main attraction that makes any celebration unforgettable.", es: "Ya sea para una pequeña celebración entre amigos o un evento corporativo de mayor envergadura, el espacio se adapta con escenografía flexible, gastronomía de calidad y tragos de autor. El atardecer aquí no es solo um detalle, es la atracción principal que hace que cualquier celebración sea inolvidable." },
  maracuja_dest_1: { pt: "✓ Deck exclusivo com vista para a lagoa", en: "✓ Exclusive deck overlooking the lagoon", es: "✓ Deck exclusivo con vista a la laguna" },
  maracuja_dest_2: { pt: "✓ Gastronomia e drinks personalizados", en: "✓ Personalized gastronomy and drinks", es: "✓ Gastronomía y tragos personalizados" },
  maracuja_dest_3: { pt: "✓ Localização estratégica na Ilha Primeira", en: "✓ Strategic location on Ilha Primeira", es: "✓ Ubicación estratégica en Ilha Primeira" },
  maracuja_dest_4: { pt: "✓ Clima descontraído e sofisticado", en: "✓ Relaxed and sophisticated atmosphere", es: "✓ Ambiente relajado y sofisticado" },
  maracuja_ideal_p: { pt: "Aniversários, festas corporativas, mini weddings e encontros especiais ao entardecer.", en: "Birthdays, corporate parties, mini weddings, and special sunset gatherings.", es: "Cumpleaños, fiestas corporativas, mini bodas y encuentros especiales al atardecer." },
  maracuja_footer_p: { pt: "Fale direto com a equipe para planejar a sua festa ou confraternização.", en: "Talk directly with the team to plan your party or gathering.", es: "Hable directamente con el equipo para planificar su fiesta o reunión." },

  // === PÁGINA: MELHOR ÉPOCA ===
  badge_clima: { pt: "☀️ Clima & Tempo", en: "☀️ Weather & Climate", es: "☀️ Clima y Tiempo" },
  pg_me_h1: { pt: "Melhor Época para Visitar", en: "Best Time to Visit", es: "Mejor Época para Visitar" },
  pg_me_p: { pt: "Descubra qual estação do ano combina mais com o seu roteiro.", en: "Find out which season best suits your itinerary.", es: "Descubre qué estación del año se adapta melhor a tu itinerario." },
  me_intro: { pt: "A Ilha da Gigóia pode ser visitada durante todo o ano. Cada estação tem seu próprio charme e oferece diferentes formas de aproveitar a ilha e a região da Lagoa da Tijuca.", en: "Gigóia Island can be visited all year round. Each season has its own charm and offers different ways to enjoy the island and the Tijuca Lagoon region.", es: "La Isla Gigóia se puede visitar durante todo el año. Cada estación tiene su propio encanto y ofrece diferentes formas de disfrutar de la isla y de la región de la Laguna de Tijuca." },
  me_h2_verao: { pt: "Verão", en: "Summer", es: "Verano" },
  me_p_verao: { pt: "Durante o verão, os dias são mais longos e o clima é ideal para aproveitar passeios de barco, caminhar pela ilha e curtir os restaurantes ao ar livre. O movimento costuma ser maior, trazendo um ambiente animado e cheio de visitantes.", en: "During the summer, days are longer and the weather is ideal for boat tours, walking around the island, and enjoying outdoor restaurants. It's usually busier, bringing a lively atmosphere full of visitors.", es: "Durante el verano, los días son más largos y el clima es ideal para disfrutar de paseos en barco, caminar por la isla y disfrutar de los restaurantes al aire libre. El movimiento suele ser mayor, trayendo un ambiente animado y lleno de visitantes." },
  me_h2_outono: { pt: "Outono", en: "Autumn", es: "Otoño" },
  me_p_outono: { pt: "O outono costuma ter temperaturas agradáveis e um clima mais tranquilo. É uma ótima época para quem prefere passear com calma, explorar os canais da ilha e aproveitar a paisagem com menos movimento.", en: "Autumn usually has pleasant temperatures and a quieter atmosphere. It's a great time for those who prefer to stroll calmly, explore the island's canals, and enjoy the scenery with fewer crowds.", es: "El otoño suele tener temperaturas agradables y un clima más tranquilo. Es una gran época para quienes prefieren pasear con calma, explorar los canales de la isla y disfrutar del paisaje con menos movimiento." },
  me_h2_inverno: { pt: "Inverno", en: "Winter", es: "Invierno" },
  me_p_inverno: { pt: "Mesmo nos meses de inverno, o clima na Barra da Tijuca continua ameno na maior parte dos dias. Isso permite aproveitar restaurantes, caminhadas e passeios de barco com conforto, além de admirar a natureza ao redor da lagoa.", en: "Even in the winter months, the weather in Barra da Tijuca remains mild most days. This allows you to enjoy restaurants, walks, and boat tours comfortably, while admiring the nature around the lagoon.", es: "Incluso en los meses de invierno, el clima en Barra da Tijuca sigue siendo templado la mayoría de los días. Esto permite disfrutar de restaurantes, caminatas y paseos en barco con comodidad, además de admirar la naturaleza alrededor de la laguna." },
  me_h2_primavera: { pt: "Primavera", en: "Spring", es: "Primavera" },
  me_p_primavera: { pt: "Na primavera, a região fica especialmente bonita, com vegetação mais verde e clima agradável. É um ótimo período para quem gosta de fotografar paisagens e aproveitar a atmosfera tranquila da ilha.", en: "In spring, the region is especially beautiful, with greener vegetation and pleasant weather. It's a great period for those who like to photograph landscapes and enjoy the island's peaceful atmosphere.", es: "En primavera, la región se pone especialmente bonita, con vegetación más verde y clima agradable. Es un gran período para quienes gustan de fotografiar paisajes y disfrutar de la atmósfera tranquila de la isla." },
  me_h2_ano: { pt: "Um destino para o ano inteiro", en: "A destination for the whole year", es: "Un destino para todo el año" },
  me_p_ano: { pt: "Independentemente da época escolhida, a Ilha da Gigóia sempre oferece uma combinação especial de natureza, gastronomia e tranquilidade. Por isso, é um destino que pode ser visitado em qualquer momento do ano, seja para um passeio rápido ou para passar o dia explorando seus restaurantes e canais.", en: "Regardless of the time chosen, Gigóia Island always offers a special combination of nature, gastronomy, and tranquility. Therefore, it is a destination that can be visited at any time of the year, whether for a quick tour or to spend the day exploring its restaurants and canals.", es: "Independientemente de la época elegida, la Isla Gigóia siempre ofrece una combinación especial de naturaleza, gastronomía y tranquilidad. Por ello, es un destino que puede ser visitado en cualquier momento del año, ya sea para um paseo rápido o para pasar el día explorando sus restaurantes y canales." },
  btn_gigi_tempo: { pt: "🌤️ Perguntar a previsão do tempo para a Gigi", en: "🌤️ Ask Gigi for the weather forecast", es: "🌤️ Preguntar el pronóstico del tiempo a Gigi" },

  // === PÁGINA: O QUE FAZER ===
  badge_fazer: { pt: "🎯 Roteiros & Atividades", en: "🎯 Itineraries & Activities", es: "🎯 Itinerarios y Actividades" },
  pg_fazer_h1: { pt: "O que fazer", en: "What to do", es: "Qué hacer" },
  pg_fazer_p: { pt: "Um mix perfeito entre natureza, gastronomia e passeios. Escolha seu estilo e monte seu roteiro.", en: "A perfect mix of nature, gastronomy, and tours. Choose your style and build your itinerary.", es: "Una mezcla perfecta entre naturaleza, gastronomía y recorridos. Elige tu estilo y arma tu itinerario." },
  pg_fazer_h2: { pt: "Natureza & Fauna", en: "Nature & Wildlife", es: "Naturaleza y Fauna" },
  pg_fazer_p2: { pt: "Trilhas leves, observação de aves e paisagens para fotos incríveis.", en: "Easy trails, bird watching, and landscapes for amazing photos.", es: "Senderos ligeros, observación de aves y paisajes para fotos increíbles." },

  // === PÁGINA: OÁSIS GASTROLOUNGE ===
  badge_estiloso: { pt: "🍸 Estiloso", en: "🍸 Stylish", es: "🍸 Elegante" },
  title_oasis: { pt: "Oásis Gastrolounge", en: "Oásis Gastrolounge", es: "Oásis Gastrolounge" },
  sub_oasis: { pt: "Combina restaurante, lounge e espaço para eventos em um ambiente sofisticado e relaxante para celebrações inesquecíveis.", en: "Combines restaurant, lounge, and event space in a sophisticated and relaxing environment for unforgettable celebrations.", es: "Combina restaurante, lounge y espacio para eventos en un ambiente sofisticado y relajante para celebraciones inolvidables." },
  oasis_sobre_p1: { pt: "Entre os lugares mais estilosos da ilha, o <strong>Oásis Gastrolounge</strong> combina restaurante, lounge e espaço para eventos em um ambiente que é sofisticado e relaxante ao mesmo tempo. A proposta é oferecer experiências gastronômicas completas em um cenário que mistura natureza, música e boa comida.", en: "Among the most stylish places on the island, <strong>Oásis Gastrolounge</strong> combines restaurant, lounge, and event space in an environment that is both sophisticated and relaxing. The proposal is to offer complete gastronomic experiences in a setting that mixes nature, music, and good food.", es: "Entre los lugares más elegantes de la isla, <strong>Oásis Gastrolounge</strong> combina restaurante, salón y espacio para eventos en un ambiente sofisticado y relajante a la vez. La propuesta es ofrecer experiencias gastronómicas completas en un entorno que mezcla naturaleza, música y buena comida." },
  oasis_sobre_p2: { pt: "Durante o dia, o ambiente é perfeito para almoços prolongados e encontros animados entre amigos. À noite, o espaço ganha um clima muito mais vibrante com música, drinks elaborados e celebrações especiais. Com decoração elegante e um clima sempre descontraído, tornou-se um dos pontos mais procurados para festas privadas.", en: "During the day, the atmosphere is perfect for long lunches and lively gatherings with friends. At night, the space takes on a much more vibrant mood with music, elaborate drinks, and special celebrations. With elegant decor and an unhurried vibe, it has become one of the most sought-after spots for private parties.", es: "Durante el día, el ambiente es perfecto para almuerzos prolongados y encuentros animados entre amigos. Por la noche, el espacio adquiere un clima mucho más vibrante con música, tragos elaborados y celebraciones especiales. Con una decoración elegante y un ambiente siempre relajado, se ha convertido en uno de los puntos más buscados para fiestas privadas." },
  oasis_dest_1: { pt: "✓ Espaço versátil (Lounge e Restaurante)", en: "✓ Versatile space (Lounge and Restaurant)", es: "✓ Espacio versátil (Lounge y Restaurante)" },
  oasis_dest_2: { pt: "✓ Natureza, música e boa comida", en: "✓ Nature, music, and good food", es: "✓ Naturaleza, música y buena comida" },
  oasis_dest_3: { pt: "✓ Drinks elaborados para a noite", en: "✓ Elaborate drinks for the evening", es: "✓ Tragos elaborados para la noche" },
  oasis_dest_4: { pt: "✓ Decoração elegante e descontraída", en: "✓ Elegant and relaxed decoration", es: "✓ Decoración elegante y relajada" },
  oasis_ideal_p: { pt: "Aniversários, festas privadas, almoços prolongados, confraternizações e eventos charmosos.", en: "Birthdays, private parties, long lunches, get-togethers, and charming events.", es: "Cumpleaños, fiestas privadas, almuerzos prolongados, reuniones y eventos con encanto." },
  oasis_footer_p: { pt: "Fale direto com a equipe para reservar o lounge para a sua festa.", en: "Talk directly with the team to book the lounge for your party.", es: "Hable directamente con el equipo para reservar el salón para su fiesta." },

  // === PÁGINA: PACOTES ESPECIAIS ===
  title_pacotes: { pt: "Pacotes Especiais", en: "Special Packages", es: "Paquetes Especiales" },
  sub_pacotes: { pt: "As melhores combinações de passeio e gastronomia para o seu dia perfeito.", en: "The best combinations of tours and gastronomy for your perfect day.", es: "Las mejores combinaciones de tours y gastronomía para tu día perfecto." },
  pacotes_intro: { pt: "Quer facilidade e economia? Nós criamos <strong>4 pacotes exclusivos</strong> que unem os melhores passeios de barco com paradas estratégicas nos restaurantes mais charmosos da ilha.", en: "Want ease and savings? We've created <strong>4 exclusive packages</strong> that combine the best boat tours with strategic stops at the island's most charming restaurants.", es: "¿Quieres facilidad y ahorro? Hemos creado <strong>4 paquetes exclusivos</strong> que combinan los mejores paseos en barco con paradas estratégicas en los restaurantes más encantadores de la isla." },
  badge_casais: { pt: "❤️ Casais", en: "❤️ Couples", es: "❤️ Parejas" },
  badge_familia: { pt: "👨‍👩‍👧‍👦 Família", en: "👨‍👩‍👧‍👦 Family", es: "👨‍👩‍👧‍👦 Familia" },
  badge_amigos: { pt: "🍹 Amigos", en: "🍹 Friends", es: "🍹 Amigos" },
  badge_vip: { pt: "⭐ VIP", en: "⭐ VIP", es: "⭐ VIP" },
  pacote_rom_t: { pt: "Pacote Romântico", en: "Romantic Package", es: "Paquete Romántico" },
  pacote_rom_d: { pt: "Passeio de barco exclusivo ao pôr do sol + Jantar completo a dois à beira da lagoa.", en: "Exclusive sunset boat tour + Full dinner for two by the lagoon.", es: "Paseo exclusivo en barco al atardecer + Cena completa para dos junto a la laguna." },
  pacote_fam_t: { pt: "Pacote Família", en: "Family Package", es: "Paquete Familiar" },
  pacote_fam_d: { pt: "Passeio Pantanal Carioca (foco na natureza e animais) + Almoço farto com menu kids.", en: "Carioca Pantanal tour (focus on nature and animals) + Hearty lunch with kids' menu.", es: "Tour Pantanal Carioca (foco en naturaleza y animales) + Almuerzo abundante con menú infantil." },
  pacote_sun_t: { pt: "Pacote Sunset", en: "Sunset Package", es: "Paquete Sunset" },
  pacote_sun_d: { pt: "Tour pelas ilhas com parada para mergulho + Reserva VIP em bar com primeira rodada de drinks inclusa.", en: "Island tour with diving stop + VIP bar reservation with first round of drinks included.", es: "Tour por las islas con parada para buceo + Reserva VIP en bar con primera ronda de tragos incluida." },
  pacote_tij_t: { pt: "Pacote Ilhas Tijucas", en: "Tijucas Islands Package", es: "Paquete Islas Tijucas" },
  pacote_tij_d: { pt: "Expedição premium às Ilhas Tijucas (4h) + Almoço VIP de frutos do mar no retorno à ilha.", en: "Premium expedition to Tijucas Islands (4h) + VIP seafood lunch upon returning to the island.", es: "Expedición premium a las Islas Tijucas (4h) + Almuerzo VIP de mariscos al regresar a la isla." },
  btn_consultar_valores: { pt: "Consultar valores", en: "Check prices", es: "Consultar precios" },

  // === PÁGINA: PANTANAL CARIOCA ===
  sub_pantanal: { pt: "Explore a rica biodiversidade da lagoa e conecte-se com a natureza exuberante no coração da Barra.", en: "Explore the lagoon's rich biodiversity and connect with lush nature in the heart of Barra.", es: "Explora la rica biodiversidad de la laguna y conéctate con la naturaleza exuberante en el corazón de Barra." },
  pantanal_dur_val: { pt: "⏳ 45 minutos", en: "⏳ 45 minutes", es: "⏳ 45 minutos" },
  pantanal_val_val: { pt: "💲 R$ 50 por pessoa", en: "💲 R$ 50 per person", es: "💲 R$ 50 por persona" },
  pantanal_sobre_t: { pt: "Sobre a Experiência", en: "About the Experience", es: "Sobre la Experiencia" },
  pantanal_sobre_p1: { pt: "O passeio pelo <strong>Pantanal Carioca</strong> é um dos roteiros mais famosos da região da Lagoa da Tijuca. Durante o trajeto, o barco percorre os canais naturais que formam o arquipélago da Ilha da Gigóia, passando pelas 10 ilhas da região e áreas de manguezal preservadas.", en: "The <strong>Carioca Pantanal</strong> tour is one of the most famous itineraries in the Tijuca Lagoon region. During the trip, the boat travels through the natural canals that form the Gigóia Island archipelago, passing through the region's 10 islands and preserved mangrove areas.", es: "El tour por el <strong>Pantanal Carioca</strong> es uno de los itinerarios más famosos de la región de la Laguna de Tijuca. Durante el trayecto, el barco recorre los canales naturales que forman el archipiélago de la Isla Gigóia, passando por las 10 islas de la región y áreas de manglares preservados." },
  pantanal_sobre_p2: { pt: "Ao longo do percurso, os visitantes podem observar a rica fauna e flora local. É comum avistar jacarés, garças, capivaras e diversas aves que vivem nos manguezais da lagoa, tornando o passeio uma experiência única de contato com a natureza dentro da cidade do Rio de Janeiro.", en: "Along the way, visitors can observe the rich local fauna and flora. It's common to spot caimans, herons, capybaras, and various birds that live in the lagoon's mangroves, making the tour a unique experience of contact with nature within the city of Rio de Janeiro.", es: "A lo largo del recorrido, los visitantes pueden observar la rica fauna y flora local. Es común avistar yacarés, garzas, carpinchos e diversas aves que viven en los manglares de la laguna, convirtiendo el paseo en una experiencia única de contacto con la naturaleza dentro de la ciudad de Río de Janeiro." },
  pantanal_visto_t: { pt: "O que você verá", en: "What you will see", es: "Qué verás" },
  pantanal_visto_1: { pt: "🐊 Jacarés-de-papo-amarelo", en: "🐊 Broad-snouted caimans", es: "🐊 Yacarés de hocico ancho" },
  pantanal_visto_2: { pt: "🐾 Capivaras em seu habitat", en: "🐾 Capybaras in their habitat", es: "🐾 Carpinchos en su hábitat" },
  pantanal_visto_3: { pt: "🦜 Aves raras e migratórias", en: "🦜 Rare and migratory birds", es: "🦜 Aves raras y migratorias" },
  pantanal_visto_4: { pt: "🌿 Manguezais preservados", en: "🌿 Preserved mangroves", es: "🌿 Manglares preservados" },
  pantanal_info_val: { pt: "🗓️ Diariamente", en: "🗓️ Daily", es: "🗓️ Diariamente" },
  pantanal_dica_p: { pt: "Esse passeio é ideal para conhecer melhor a natureza da lagoa e descobrir um lado surpreendente da Barra.", en: "This tour is ideal for getting to know the lagoon's nature better and discovering a surprising side of Barra.", es: "Este paseo es ideal para conocer mejor la naturaleza de la laguna y descubrir un lado sorprendente de Barra." },
  pantanal_footer_p: { pt: "Saídas exclusivas e agendadas para garantir a melhor experiência.", en: "Exclusive and scheduled departures to ensure the best experience.", es: "Salidas exclusivas y programadas para garantizar la mejor experiencia." },

  // === PÁGINA: PARADA BURGER ===
  badge_lanche: { pt: "🍔 Parada Obrigatória", en: "🍔 Mandatory Stop", es: "🍔 Parada Obligatoria" },
  title_parada: { pt: "Parada Burger", en: "Parada Burger", es: "Parada Burger" },
  sub_parada: { pt: "Sabor autêntico e ambiente acolhedor no coração da Ilha da Gigóia. O lanche perfeito para fechar o dia.", en: "Authentic flavor and welcoming atmosphere in the heart of Gigóia Island. The perfect snack to end the day.", es: "Sabor auténtico y ambiente acogedor en el corazón de la Isla Gigóia. El bocado perfecto para terminar el día." },
  parada_sobre_t: { pt: "Sobre a Casa", en: "About the Place", es: "Sobre la Casa" },
  parada_sobre_p: { pt: "O <strong>Parada Burger</strong> é conhecido pela qualidade constante e pelo atendimento que faz você se sentir em casa. Nossos hambúrgueres são montados com ingredientes frescos, blends de carnes selecionadas e molhos especiais da casa que dão aquele toque único.", en: "<strong>Parada Burger</strong> is known for its consistent quality and service that makes you feel at home. Our burgers are made with fresh ingredients, selected meat blends, and special house sauces that give that unique touch.", es: "<strong>Parada Burger</strong> es conocido por su calidad constante y su servicio que te hace sentir como en casa. Nuestras hamburguesas están hechas con ingredientes frescos, mezclas de carne seleccionadas y salsas especiales de la casa que le dan ese toque único." },
  parada_dest_1: { pt: "✓ Hambúrguer Artesanal", en: "✓ Artisanal Burger", es: "✓ Hamburguesa Artesanal" },
  parada_dest_2: { pt: "✓ Milkshakes Especiais", en: "✓ Special Milkshakes", es: "✓ Batidos Especiales" },
  parada_dest_3: { pt: "✓ Localização Central", en: "✓ Central Location", es: "✓ Ubicación Central" },
  parada_dest_4: { pt: "✓ Ambiente Familiar", en: "✓ Family Environment", es: "✓ Ambiente Familiar" },
  parada_func_t: { pt: "Funcionamento", en: "Opening Hours", es: "Funcionamiento" },
  parada_func_p: { pt: "Aberto para almoço e jantar. Consulte os dias exatos.", en: "Open for lunch and dinner. Check exact days.", es: "Abierto para almuerzo y cena. Consultar los días exactos." },
  parada_ped_t: { pt: "Pedidos", en: "Orders", es: "Pedidos" },
  parada_ped_p: { pt: "Disponível para consumo no local e delivery na ilha.", en: "Available for dine-in and delivery on the island.", es: "Disponible para consumo en el local y entrega en la isla." },
  btn_pedido_parada: { pt: "Fazer Pedido com a Gigi", en: "Place Order with Gigi", es: "Hacer Pedido con Gigi" },

  // === PÁGINA: PASSEIOS E ROTAS (VITRINE) ===
  sub_pass_rotas: { pt: "Roteiros de barco, paradas para fotos, horários ideais e dicas do que levar para aproveitar melhor.", en: "Boat itineraries, photo stops, ideal times, and tips on what to bring to enjoy it better.", es: "Itinerarios en barco, paradas para fotos, horarios ideales y consejos sobre qué llevar para disfrutar mejor." },
  
  // Detalhamento dos Cards (usados pelo SITE.pages["passeios-rotas"] no app.js)
  page_pass_c1_d: { pt: "Passeio de barco até o arquipélago. Águas cristalinas e fotos incríveis.", en: "Boat tour to the archipelago. Crystal clear waters and amazing photos.", es: "Paseo en barco al archipiélago. Aguas cristalinas y fotos increíbles." },
  page_pass_c2_d: { pt: "Explore a rica biodiversidade da lagoa e o safári urbano.", en: "Explore the rich biodiversity of the lagoon and the urban safari.", es: "Explora la rica biodiversidad de la laguna y el safari urbano." },
  page_pass_c3_d: { pt: "Navegue pelos canais até chegar à bela e preservada Praia da Reserva.", en: "Sail through the canals until you reach the beautiful and preserved Reserva Beach.", es: "Navega por los canales hasta llegar a la hermosa y preservada Playa Reserva." },
  page_pass_c4_d: { pt: "Aventura e adrenalina explorando as lagoas no seu próprio ritmo.", en: "Adventure and adrenaline exploring the lagoons at your own pace.", es: "Aventura y adrenalina explorando las lagunas a tu propio ritmo." },
  page_pass_c5_d: { pt: "Monte seu roteiro ideal combinando passeio de barco, almoço e mais.", en: "Create your ideal itinerary combining a boat tour, lunch, and more.", es: "Crea tu itinerario ideal combinando paseo en barco, almuerzo y más." },

  // === PÁGINA: PLANEJE ===
  badge_plan: { pt: "📝 Roteiro Personalizado", en: "📝 Custom Itinerary", es: "📝 Itinerario Personalizado" },
  pg_plan_h1: { pt: "Monte seu roteiro", en: "Plan your itinerary", es: "Planifica tu itinerario" },
  pg_plan_p: { pt: "Selecione as opções que você quer fazer. Ao enviar, pediremos seu número para te mandar o roteiro completo com preços e opções.", en: "Select the options you want. Upon sending, we will ask for your number to send the complete itinerary with prices.", es: "Selecciona las opciones que deseas. Al enviar, te pediremos tu número para mandarte el itinerario completo con precios." },
  pg_plan_h2: { pt: "Escolha suas opções", en: "Choose your options", es: "Elige tus opciones" },
  pg_plan_p2: { pt: "Marque o que você quer fazer e clique em <strong>Enviar roteiro</strong> para a Gigi organizar tudo.", en: "Mark what you want to do and click <strong>Send itinerary</strong> for Gigi to organize everything.", es: "Marca lo que quieras hacer y haz clic en <strong>Enviar itinerario</strong> para que Gigi organice todo." },
  btn_enviar_roteiro: { pt: "Enviar roteiro", en: "Send itinerary", es: "Enviar itinerario" },
  btn_limpar: { pt: "Limpar", en: "Clear", es: "Limpiar" },
  alerta_selecione: { pt: "Por favor, selecione pelo menos uma opção.", en: "Please select at least one option.", es: "Por favor, selecciona al menos una opción." },
  gigi_msg_roteiro: { pt: "Olá Gigi! Montei meu roteiro no portal e gostaria de saber mais sobre: ", en: "Hi Gigi! I planned my itinerary on the portal and would like to know more about: ", es: "¡Hola Gigi! Organicé mi itinerario en el portal y me gustaría saber más sobre: " },

  // === PÁGINA: POUSADA BARRA DA TIJUCA ===
  badge_localizada: { pt: "🌴 Bem Localizada", en: "🌴 Great Location", es: "🌴 Bien Ubicada" },
  pousada_barra_t: { pt: "Pousada Barra da Tijuca", en: "Barra da Tijuca Inn", es: "Posada Barra da Tijuca" },
  pousada_barra_sub: { pt: "Excelente localização, com fácil acesso aos restaurantes e travessia rápida para a praia e o continente.", en: "Excellent location, with easy access to restaurants and quick crossing to the beach and mainland.", es: "Excelente ubicación, con fácil acceso a restaurantes e cruce rápido a la playa y al continente." },
  pousada_barra_p1: { pt: "A <strong>Pousada Barra da Tijuca</strong> é uma das mais conhecidas e tradicionais da Ilha da Gigóia. Seu grande diferencial é a localização estratégica: fica a poucos passos dos principais restaurantes e do ponto de travessia para o continente.", en: "<strong>Pousada Barra da Tijuca</strong> is one of the best-known and traditional inns on Gigóia Island. Its main advantage is the strategic location: just steps from main restaurants and the crossing point to the mainland.", es: "La <strong>Pousada Barra da Tijuca</strong> es una de las más conocidas y tradicionales de la Isla Gigóia. Su gran diferencial es la ubicación estratégica: a pocos pasos de los principales restaurantes y del punto de cruce hacia el continente." },
  pousada_barra_p2: { pt: "É a escolha perfeita para quem quer curtir a tranquilidade da lagoa, mas também planeja dar um pulinho na praia da Barra ou usar o metrô para explorar outras partes do Rio de Janeiro com agilidade.", en: "It's the perfect choice for those who want to enjoy the lagoon's tranquility, but also plan to visit Barra beach or use the subway to quickly explore other parts of Rio de Janeiro.", es: "Es la elección perfecta para quienes quieren disfrutar de la tranquilidad de la laguna, pero también planean visitar la playa de Barra o usar el metro para explorar otras partes de Río de Janeiro con agilidad." },
  pb_dest_1: { pt: "✓ Acesso rápido aos barcos", en: "✓ Quick boat access", es: "✓ Acceso rápido a los barcos" },
  pb_dest_2: { pt: "✓ Quartos com Ar-condicionado", en: "✓ Air-conditioned rooms", es: "✓ Habitaciones con aire acondicionado" },
  pb_dest_3: { pt: "✓ Próximo aos restaurantes", en: "✓ Close to restaurants", es: "✓ Cerca de los restaurantes" },
  pb_dest_4: { pt: "✓ Wi-Fi gratuito e rápido", en: "✓ Free and fast Wi-Fi", es: "✓ Wi-Fi gratuito y rápido" },
  pb_diaria: { pt: "/diária", en: "/night", es: "/noche" },
  pb_reserva_p: { pt: "Entre em contato com a Gigi para verificar disponibilidade e fazer sua reserva.", en: "Contact Gigi to check availability and make your reservation.", es: "Contacta a Gigi para consultar disponibilidad y realizar tu reserva." },
  pb_btn_reserva: { pt: "Falar com a Gigi para Reservar", en: "Talk to Gigi to Book", es: "Hablar con Gigi para Reservar" },
  btn_voltar_pousadas: { pt: "← Voltar para Hotéis e Pousadas", en: "← Back to Hotels and Inns", es: "← Volver a Hoteles y Posadas" },

  // === PÁGINA: POUSADA MARÍSIS ===
  badge_acolhedora: { pt: "🌺 Acolhedora", en: "🌺 Cozy", es: "🌺 Acogedora" },
  pousada_marisis_t: { pt: "Pousada Marísis", en: "Marísis Inn", es: "Posada Marísis" },
  pousada_marisis_sub: { pt: "Hospedagem pequena e familiar na Gigóia. O refúgio seguro perfeito para quem busca paz e contato com a natureza.", en: "Small, family-run lodging on Gigóia. The perfect safe haven for those seeking peace and contact with nature.", es: "Alojamiento pequeño y familiar en Gigóia. El refugio seguro perfecto para quienes buscan paz y contacto con la naturaleza." },
  marisis_p1: { pt: "A <strong>Pousada Marísis</strong> é conhecida por ser um verdadeiro lar fora de casa. É uma opção familiar e intimista, muito elogiada pelos visitantes pela limpeza impecável de suas instalações e pelo atendimento sempre caloroso.", en: "<strong>Pousada Marísis</strong> is known for being a true home away from home. It's a family-run and intimate option, highly praised by visitors for the impeccable cleanliness of its facilities and its always warm service.", es: "La <strong>Pousada Marísis</strong> es conocida por ser un verdadero hogar fuera de casa. Es una opción familiar e íntima, muy elogiada por los visitantes por la limpieza impecable de sus instalaciones y por su atención siempre cálida." },
  marisis_p2: { pt: "O ambiente é ideal para quem quer fugir do ritmo acelerado do Rio de Janeiro. Aqui, o silêncio impera, proporcionando noites de sono tranquilas e manhãs revigorantes com o frescor da lagoa.", en: "The environment is ideal for those who want to escape the fast pace of Rio de Janeiro. Here, silence reigns, providing peaceful nights of sleep and invigorating mornings with the freshness of the lagoon.", es: "El ambiente es ideal para quienes desean escapar del ritmo acelerado de Río de Janeiro. Aquí impera el silencio, proporcionando noches de sueño tranquilo y mañanas tonificantes con el frescor de la laguna." },
  marisis_dest_1: { pt: "✓ Quartos com varanda", en: "✓ Rooms with balcony", es: "✓ Habitaciones con balcón" },
  marisis_dest_2: { pt: "✓ Limpeza muito elogiada", en: "✓ Highly praised cleanliness", es: "✓ Limpieza muy elogiada" },
  marisis_dest_3: { pt: "✓ Wi-Fi de alta velocidade", en: "✓ High-speed Wi-Fi", es: "✓ Wi-Fi de alta velocidad" },
  marisis_dest_4: { pt: "✓ Ambiente silencioso e seguro", en: "✓ Quiet and safe environment", es: "✓ Ambiente silencioso y seguro" },
  marisis_reserva_p: { pt: "Entre em contato com a Gigi para verificar disponibilidade e fazer sua reserva.", en: "Contact Gigi to check availability and make your reservation.", es: "Contacta a Gigi para consultar disponibilidad y realizar tu reserva." },

  // === PÁGINA: RESERVA ===
  sub_reserva: { pt: "Um roteiro contemplativo pelo Canal de Marapendi até a praia mais intocada e bonita da região.", en: "A contemplative route through the Marapendi Canal to the most pristine and beautiful beach in the region.", es: "Una ruta contemplativa por el Canal de Marapendi hasta la playa más virgen y hermosa de la región." },
  reserva_dur_val: { pt: "⏳ 2 horas de passeio", en: "⏳ 2-hour tour", es: "⏳ 2 horas de recorrido" },
  reserva_val_val: { pt: "💲 R$ 120 por pessoa", en: "💲 R$ 120 per person", es: "💲 R$ 120 por persona" },
  reserva_sobre_t: { pt: "Sobre a Experiência", en: "About the Experience", es: "Sobre la Experiencia" },
  reserva_sobre_p1: { pt: "Esse passeio leva os visitantes por uma das áreas mais preservadas da região da Barra da Tijuca. A rota segue pelo <strong>Canal de Marapendi</strong>, atravessando trechos de natureza praticamente intocados.", en: "This tour takes visitors through one of the most preserved areas of the Barra da Tijuca region. The route follows the <strong>Marapendi Canal</strong>, crossing practically untouched stretches of nature.", es: "Este tour lleva a los visitantes por una de las zonas más preservadas de la región de Barra da Tijuca. La ruta sigue el <strong>Canal de Marapendi</strong>, atravesando tramos de naturaleza prácticamente vírgenes." },
  reserva_sobre_p2: { pt: "Ao longo do percurso, o barco avança cerca de 9 km pelos canais, passando por áreas de mata ainda preservada e proporcionando uma experiência tranquila de contato com a natureza.", en: "Along the route, the boat travels about 9 km through the canals, passing through preserved forest areas and providing a peaceful experience of contact with nature.", es: "A lo largo de la ruta, el barco recorre unos 9 km por los canales, atravesando zonas de bosque preservado y brindando una tranquila experiencia de contacto con la naturaleza." },
  reserva_dest_t: { pt: "Destaques", en: "Highlights", es: "Lo mejor del tour" },
  reserva_dest_1: { pt: "🌊 Conexão única Lagoa + Mar", en: "🌊 Unique Lagoon + Sea connection", es: "🌊 Conexión única Laguna + Mar" },
  reserva_dest_2: { pt: "🏝️ Parada especial na Praia", en: "🏝️ Special stop at the Beach", es: "🏝️ Parada especial en la Playa" },
  reserva_dest_3: { pt: "📸 Navegação por 9km de canais", en: "📸 Navigation through 9km of canals", es: "📸 Navegación por 9km de canales" },
  reserva_dest_4: { pt: "🕊️ Paz e Silêncio absoluto", en: "🕊️ Absolute Peace and Silence", es: "🕊️ Paz y Silencio absoluto" },
  reserva_ideal_p: { pt: "Famílias e grupos de amigos. Combina natureza, passeio relaxante e a possibilidade de dar um mergulho no mar.", en: "Families and groups of friends. It combines nature, a relaxing tour, and the possibility of taking a dip in the sea.", es: "Familias y grupos de amigos. Combina naturaleza, un recorrido relajante y la posibilidad de darse un chapuzón en el mar." },
  reserva_dif_t: { pt: "Diferencial", en: "What makes it special", es: "Diferencial" },
  reserva_dif_p: { pt: "Algo que quase nenhum roteiro urbano oferece.", en: "Something that almost no urban itinerary offers.", es: "Algo que casi ningún itinerario urbano ofrece." },
  reserva_footer_p: { pt: "Consulte horários e saídas exclusivas.", en: "Check schedules and exclusive departures.", es: "Consulta horarios y salidas exclusivas." },

  // === PÁGINA: CAIS BAR ===
  badge_cais: { pt: "🍤 Tradição & Sabor", en: "🍤 Tradition & Flavor", es: "🍤 Tradición y Sabor" },
  title_cais: { pt: "Cais Bar", en: "Cais Bar", es: "Cais Bar" },
  sub_cais: { pt: "Tradição, clima descontraído e a melhor moqueca à beira da lagoa.", en: "Tradition, relaxed atmosphere, and the best fish stew by the lagoon.", es: "Tradición, ambiente relajado y la mejor moqueca junto a la laguna." },
  galeria_titulo: { pt: "📸 Conheça o Espaço", en: "📸 Discover the Venue", es: "📸 Conoce el Espacio" },
  cais_p1: { pt: "O <strong>Cais Bar</strong> é um dos restaurantes mais antigos da Ilha da Gigóia, uma ótima opção para quem quer aproveitar a gastronomia da região em um ambiente descontraído à beira da lagoa.", en: "<strong>Cais Bar</strong> is one of the oldest restaurants on Gigóia Island, a great option for those who want to enjoy the region's gastronomy in a relaxed atmosphere by the lagoon.", es: "<strong>Cais Bar</strong> es uno de los restaurantes más antiguos de la Isla Gigóia, una excelente opción para quienes desean disfrutar de la gastronomía de la región en un ambiente relajado junto a la laguna." },
  cais_p2: { pt: "A casa tem como destaque a culinária voltada para <strong>frutos do mar</strong>, com pratos preparados com ingredientes frescos e sabores típicos da região.", en: "The house specializes in <strong>seafood</strong>, with dishes prepared with fresh ingredients and typical flavors of the region.", es: "La casa destaca por su cocina orientada a los <strong>mariscos</strong>, con platos preparados con ingredientes frescos y sabores típicos de la región." },
  cais_esp_titulo: { pt: "🐟 Especialidades da Casa", en: "🐟 House Specialties", es: "🐟 Especialidades de la Casa" },
  cais_esp_1: { pt: "<strong style=\"color: #222;\">Moqueca de Peixe:</strong> Uma das opções mais elogiadas, muito procurada por quem visita o restaurante em busca de uma refeição completa, farta e saborosa.", en: "<strong style=\"color: #222;\">Fish Moqueca:</strong> One of the most praised options, highly sought after by those visiting the restaurant for a complete, hearty, and tasty meal.", es: "<strong style=\"color: #222;\">Moqueca de Pescado:</strong> Una de las opciones más elogiadas, muy buscada por quienes visitan el restaurante en busca de una comida completa, abundante y sabrosa." },
  cais_esp_2: { pt: "<strong style=\"color: #222;\">Pratos Executivos:</strong> Servidos durante a semana, são ideais para quem quer almoçar muito bem enquanto aproveita a tranquilidade e a brisa da ilha.", en: "<strong style=\"color: #222;\">Executive Plates:</strong> Served during the week, these are ideal for a great lunch while enjoying the island's peace and breeze.", es: "<strong style=\"color: #222;\">Platos Ejecutivos:</strong> Servidos durante la semana, son ideales para quienes desean almorzar muy bien mientras disfrutan de la tranquilidad y la brisa de la isla." },
  cais_esp_3: { pt: "<strong style=\"color: #222;\">Rodízio de Petiscos:</strong> Com bebida liberada! É o atrativo perfeito para grupos de amigos que querem relaxar, experimentar de tudo e curtir o ambiente sem pressa.", en: "<strong style=\"color: #222;\">Appetizer Buffet:</strong> With open bar! It's the perfect attraction for groups of friends who want to relax, try everything, and enjoy the atmosphere without rushing.", es: "<strong style=\"color: #222;\">Rodizio de Tapas:</strong> ¡Con bebida libre! Es el atractivo perfecto para grupos de amigos que quieren relajarse, probar de todo y disfrutar del ambiente sin prisas." },
  cais_p3: { pt: "Com boa comida, clima descontraído e vista para os canais da lagoa, o Cais Bar é mais um dos pontos gastronômicos que fazem da Ilha da Gigóia um destino especial para passar o dia.", en: "With good food, a relaxed atmosphere, and a view of the lagoon canals, Cais Bar is another gastronomic spot that makes Gigóia Island a special destination to spend the day.", es: "Con buena comida, un ambiente relajado y vista a los canales de la laguna, Cais Bar es uno de los puntos gastronómicos que hacen de la Isla Gigóia un destino especial para pasar el día." },

  // === PÁGINA: CAMARÃO DA BARRA ===
  title_camarao: { pt: "Camarão da Barra", en: "Camarão da Barra", es: "Camarão da Barra" },
  sub_camarao: { pt: "A nova e moderna referência em camarões com vista para a Barra da Tijuca.", en: "The new and modern reference in shrimp with a view of Barra da Tijuca.", es: "La nueva y moderna referencia en camarones con vista a Barra da Tijuca." },
  camarao_p1: { pt: "O <strong>Camarão da Barra</strong> é um dos restaurantes mais novos da Ilha da Gigóia, trazendo uma proposta moderna de gastronomia totalmente especializada em camarão.", en: "<strong>Camarão da Barra</strong> is one of the newest restaurants on Gigóia Island, bringing a modern gastronomic proposal entirely specialized in shrimp.", es: "<strong>Camarão da Barra</strong> es uno de los restaurantes más nuevos de la Isla Gigóia, con una propuesta gastronómica moderna totalmente especializada en camarones." },
  camarao_p2: { pt: "Com uma cozinha contemporânea e pratos super bem elaborados, o restaurante aposta em diferentes preparos e texturas que valorizam esse fruto do mar tão querido pelos visitantes da região.", en: "With contemporary cuisine and very well-crafted dishes, the restaurant bets on different preparations and textures that highlight this seafood so beloved by visitors to the region.", es: "Con una cocina contemporánea y platos muy bien elaborados, el restaurante apuesta por diferentes preparaciones y texturas que realzan este marisco tan querido por los visitantes de la región." },
  camarao_prop_titulo: { pt: "🦐 Proposta & Ambiente", en: "🦐 Concept & Atmosphere", es: "🦐 Propuesta y Ambiente" },
  camarao_prop_1: { pt: "<strong style=\"color: #222;\">Clima Moderno:</strong> Um ambiente casual, atual e descontraído. Foi pensado na medida certa tanto para grupos de amigos animados quanto para encontros românticos.", en: "<strong style=\"color: #222;\">Modern Vibe:</strong> A casual, current, and relaxed atmosphere. It was designed just right for both lively groups of friends and romantic dates.", es: "<strong style=\"color: #222;\">Ambiente Moderno:</strong> Un ambiente casual, actual y relajado. Fue diseñado en su justa medida tanto para grupos de amigos animados como para citas románticas." },
  camarao_prop_2: { pt: "<strong style=\"color: #222;\">Visual Incrível:</strong> O restaurante conta com uma vista privilegiada da lagoa e da região da Barra da Tijuca, o que ajuda a tornar a experiência gastronômica ainda mais completa.", en: "<strong style=\"color: #222;\">Incredible View:</strong> The restaurant has a privileged view of the lagoon and the Barra da Tijuca region, which helps make the dining experience even more complete.", es: "<strong style=\"color: #222;\">Vista Increíble:</strong> El restaurante cuenta con una vista privilegiada de la laguna y de la región de Barra da Tijuca, lo que ayuda a que la experiencia gastronómica sea aún más completa." },
  camarao_p3: { pt: "Para quem é fã de frutos do mar, especialmente camarão em suas mais diversas versões, o Camarão da Barra surge como uma nova e excelente opção na Ilha da Gigóia, ampliando ainda mais a riqueza culinária do destino.", en: "For those who are fans of seafood, especially shrimp in its most diverse versions, Camarão da Barra emerges as a new and excellent option on Gigóia Island, further expanding the culinary richness of the destination.", es: "Para quienes son fanáticos de los mariscos, especialmente del camarón en sus más diversas versiones, Camarão da Barra surge como una nueva y excelente opción en la Isla Gigóia, ampliando aún más la riqueza culinaria del destino." },

  // === PÁGINA: DECK BAR ===
  badge_vibrante: { pt: "🍍 Tropical & Vibrante", en: "🍍 Tropical & Vibrant", es: "🍍 Tropical y Vibrante" },
  title_deck: { pt: "Deck Bar", en: "Deck Bar", es: "Deck Bar" },
  sub_deck: { pt: "Tradição, música ao vivo e um cenário inesquecível à beira da lagoa.", en: "Tradition, live music, and an unforgettable setting by the lagoon.", es: "Tradición, música en vivo y un escenario inolvidable junto a la laguna." },
  deck_p1: { pt: "O <strong>Deck Bar</strong> é um dos restaurantes mais tradicionais da Ilha da Gigóia e se destaca pelo ambiente descontraído e também pela localização privilegiada à beira da lagoa. O espaço é bastante procurado por visitantes que querem aproveitar uma boa gastronomia em um cenário agradável, com vista para os canais e o clima típico da região.", en: "<strong>Deck Bar</strong> is one of the most traditional restaurants on Gigóia Island and stands out for its relaxed atmosphere and privileged location by the lagoon. The space is highly sought after by visitors who want to enjoy great gastronomy in a pleasant setting, with views of the canals and the typical climate of the region.", es: "El <strong>Deck Bar</strong> es uno de los restaurantes más tradicionales de la Isla Gigóia y destaca por su ambiente relajado y su ubicación privilegiada junto a la laguna. El espacio é muy buscado por visitantes que desean disfrutar de una buena gastronomía en un entorno agradable, con vistas a los canales y el clima típico de la región." },
  deck_p2: { pt: "A casa tem forte presença na culinária de <strong>frutos do mar</strong>, com pratos que valorizam ingredientes frescos e sabores marcantes.", en: "The house has a strong presence in <strong>seafood</strong> cuisine, with dishes that highlight fresh ingredients and bold flavors.", es: "La casa tiene una fuerte presencia en la cocina de <strong>mariscos</strong>, con platos que resaltan ingredientes frescos y sabores intensos." },
  deck_dest_titulo: { pt: "🍍 Destaques & Atrações", en: "🍍 Highlights & Attractions", es: "🍍 Destacados y Atracciones" },
  deck_dest_1: { pt: "<strong style=\"color: #222;\">Camarão no Abacaxi:</strong> Uma das marcas registradas do restaurante, o prato chama a atenção tanto pela sua apresentação tropical e criativa quanto pelo sabor irresistível.", en: "<strong style=\"color: #222;\">Shrimp in Pineapple:</strong> One of the restaurant's trademarks, the dish draws attention for its tropical and creative presentation as well as its irresistible flavor.", es: "<strong style=\"color: #222;\">Camarón en Piña:</strong> Una de las marcas registradas del restaurante, el plato llama la atención tanto por su presentación tropical y creativa como por su sabor irresistible." },
  deck_dest_2: { pt: "<strong style=\"color: #222;\">Guarda-chuvas Coloridos:</strong> A decoração suspensa cria um ambiente vibrante e descontraído, tornando-se o cenário perfeito (e muito procurado) para fotos dos visitantes.", en: "<strong style=\"color: #222;\">Colorful Umbrellas:</strong> The hanging decoration creates a vibrant and relaxed environment, making it the perfect (and much sought-after) setting for visitor photos.", es: "<strong style=\"color: #222;\">Paraguas de Colores:</strong> La decoración suspendida crea un ambiente vibrante y relajado, convirtiéndose en el escenario perfecto (y muy buscado) para las fotos de los visitantes." },
  deck_dest_3: { pt: "<strong style=\"color: #222;\">Comida di Buteco:</strong> O Deck Bar também participa do tradicional festival gastronômico, apresentando petiscos criativos que sempre fazem grande sucesso entre os clientes.", en: "<strong style=\"color: #222;\">Comida di Buteco:</strong> Deck Bar also participates in the traditional gastronomic festival, presenting creative appetizers that are always a hit with customers.", es: "<strong style=\"color: #222;\">Comida di Buteco:</strong> El Deck Bar también participa en el tradicional festival gastronómico, presentando tapas creativas que siempre tienen gran éxito entre los clientes." },
  deck_p3: { pt: "Com boa comida, música ao vivo e um ambiente sempre animado, o Deck Bar é uma das paradas mais populares e obrigatórias para quem deseja aproveitar ao máximo o clima da Ilha da Gigóia.", en: "With good food, live music, and an always lively atmosphere, Deck Bar is one of the most popular and mandatory stops for those who want to fully enjoy the atmosphere of Gigóia Island.", es: "Con buena comida, música en vivo y un ambiente siempre animado, el Deck Bar es una de las paradas más populares y obligatorias para quienes desean disfrutar al máximo del ambiente de la Isla Gigóia." },

  // === PÁGINA: RESTAURANTE LAGUNA ===
  title_laguna: { pt: "Restaurante Laguna", en: "Laguna Restaurant", es: "Restaurante Laguna" },
  sub_laguna: { pt: "O pioneiro da Ilha da Gigóia, com tradição e vista para a Pedra da Gávea.", en: "The pioneer of Gigóia Island, with tradition and views of Pedra da Gávea.", es: "El pionero de la Isla Gigóia, con tradición y vistas a la Pedra da Gávea." },
  laguna_p1: { pt: "O <strong>Restaurante Laguna</strong> é considerado o <strong>primeiro estabelecimento fundado na Ilha da Gigóia</strong>, inaugurado em 2002. Desde então, tornou-se uma referência gastronômica da região e um dos locais mais tradicionais para quem visita a ilha.", en: "<strong>Restaurante Laguna</strong> is considered the <strong>first establishment founded on Gigóia Island</strong>, opened in 2002. Since then, it has become a gastronomic reference in the region and one of the most traditional places for island visitors.", es: "El <strong>Restaurante Laguna</strong> es considerado el <strong>primer establecimiento fundado en la Isla Gigóia</strong>, inaugurado en 2002. Desde entonces, se ha convertido en un referente gastronómico de la región y uno de los lugares más tradicionales para quienes visitan la isla." },
  laguna_p2: { pt: "O restaurante oferece um ambiente rústico e sofisticado ao mesmo tempo, com mesas de madeira sob um charmoso teto de palha, cercado por jardins e com uma bela <strong>vista para a Pedra da Gávea</strong>. O cenário torna o espaço especialmente procurado para ocasiões especiais.", en: "The restaurant offers a rustic yet sophisticated atmosphere, with wooden tables under a charming thatched roof, surrounded by gardens and with a beautiful <strong>view of Pedra da Gávea</strong>. The setting makes the space especially sought after for special occasions.", es: "El restaurante ofrece un ambiente rústico y sofisticado a la vez, con mesas de madera bajo un encantador techo de paja, rodeado de jardines y con una hermosa <strong>vista a la Pedra da Gávea</strong>. El escenario hace que el espacio sea especialmente buscado para ocasiones especiales." },
  laguna_esp_titulo: { pt: "🌿 Tradição & Especialidades", en: "🌿 Tradition & Specialties", es: "🌿 Tradición y Especialidades" },
  laguna_esp_1: { pt: "<strong style=\"color: #222;\">Pastel de Camarão:</strong> O famoso e inconfundível pastel é considerado um dos grandes carros-chefes da casa.", en: "<strong style=\"color: #222;\">Shrimp Pastel:</strong> The famous and unmistakable pastry is considered one of the house's main highlights.", es: "<strong style=\"color: #222;\">Pastel de Camarón:</strong> La famosa e inconfundible empanada es considerada uno de los grandes platos estrella de la casa." },
  laguna_esp_2: { pt: "<strong style=\"color: #222;\">Casquinha de Siri:</strong> Preparada de forma autêntica com 100% de carne pura, é um dos pratos mais elogiados do cardápio.", en: "<strong style=\"color: #222;\">Stuffed Crab Shell:</strong> Authentically prepared with 100% pure meat, it is one of the most praised dishes on the menu.", es: "<strong style=\"color: #222;\">Casquinha de Siri:</strong> Preparada de forma auténtica con 100% carne pura, es uno de los platos más elogiados del menú." },
  laguna_esp_3: { pt: "<strong style=\"color: #222;\">Lagosta Laguna:</strong> Um prato individual e sofisticado, muito procurado por quem deseja uma experiência gastronômica marcante e inesquecível.", en: "<strong style=\"color: #222;\">Laguna Lobster:</strong> A sophisticated individual dish, highly sought after by those desiring a remarkable and unforgettable dining experience.", es: "<strong style=\"color: #222;\">Langosta Laguna:</strong> Un plato individual y sofisticado, muy buscado por quienes desean una experiencia gastronómica memorable e inolvidable." },
  laguna_p3: { pt: "Especializado em <strong>frutos do mar preparados de forma artesanal</strong>, o Laguna valoriza ingredientes frescos e receitas clássicas em uma atmosfera que ajuda a contar a história da Ilha da Gigóia.", en: "Specializing in <strong>artisanally prepared seafood</strong>, Laguna values fresh ingredients and classic recipes in an atmosphere that helps tell the story of Gigóia Island.", es: "Especializado en <strong>mariscos preparados de forma artesanal</strong>, Laguna valora los ingredientes frescos y las recetas clásicas en una atmósfera que ayuda a contar la historia de la Isla Gigóia." },

  // === PÁGINA: MARACUJÁ DA ILHA ===
  sub_maracuja_pg: { pt: "Gastronomia, natureza e o clima perfeito na Ilha Primeira.", en: "Gastronomy, nature, and the perfect atmosphere on Ilha Primeira.", es: "Gastronomía, naturaleza y el clima perfecto en Ilha Primeira." },
  mara_p1: { pt: "O <strong>Maracujá da Ilha</strong> é um dos restaurantes mais conhecidos do complexo lagunar, localizado na charmosa <em>Ilha Primeira</em>. Localizado às margens da lagoa, o restaurante oferece um ambiente descontraído e agradável, perfeito para quem quer aproveitar a gastronomia cercado pela natureza.", en: "<strong>Maracujá da Ilha</strong> is one of the most well-known restaurants in the lagoon complex, located on charming <em>Ilha Primeira</em>. Situated on the lagoon's edge, the restaurant offers a relaxed and pleasant atmosphere, perfect for those wanting to enjoy gastronomy surrounded by nature.", es: "El <strong>Maracujá da Ilha</strong> es uno de los restaurantes más conocidos del complejo lagunar, ubicado en la encantadora <em>Ilha Primeira</em>. Situado a orillas de la laguna, el restaurante ofrece un ambiente relajado y agradable, perfecto para quienes desean disfrutar de la gastronomía rodeados de naturaleza." },
  mara_p2: { pt: "O cardápio combina <strong>frutos do mar, petiscos e pratos variados</strong>, sendo uma parada estratégica para quem chega de barco.", en: "The menu combines <strong>seafood, appetizers, and varied dishes</strong>, making it a strategic stop for those arriving by boat.", es: "El menú combina <strong>mariscos, tapas y platos variados</strong>, siendo una parada estratégica para quienes llegan en barco." },
  mara_dest_titulo: { pt: "🍤 Destaques da Casa", en: "🍤 House Highlights", es: "🍤 Destacados de la Casa" },
  mara_dest_1: { pt: "<strong style=\"color: #222;\">Camarão Empanado:</strong> Crocante por fora e suculento por dentro. É um dos grandes sucessos da casa e favorito entre os clientes.", en: "<strong style=\"color: #222;\">Breaded Shrimp:</strong> Crispy on the outside and juicy on the inside. It's one of the house's great hits and a customer favorite.", es: "<strong style=\"color: #222;\">Camarón Empanado:</strong> Crujiente por fuera y jugoso por dentro. Es uno de los grandes éxitos de la casa y favorito entre los clientes." },
  mara_dest_2: { pt: "<strong style=\"color: #222;\">Ceviche Tradicional:</strong> Servido com chips de aipim crocantes, traz uma combinação refrescante de sabores.", en: "<strong style=\"color: #222;\">Traditional Ceviche:</strong> Served with crispy cassava chips, it brings a refreshing combination of flavors.", es: "<strong style=\"color: #222;\">Ceviche Tradicional:</strong> Servido con chips de mandioca crujientes, trae una combinación refrescante de sabores." },
  mara_p3: { pt: "Além da gastronomia, o ambiente aberto e a vista para a lagoa tornam o Maracujá da Ilha o lugar ideal para <strong>almoçar, petiscar e tomar um drink</strong> aproveitando a brisa do Rio.", en: "Besides the gastronomy, the open environment and the view of the lagoon make Maracujá da Ilha the ideal place to <strong>have lunch, snack, and have a drink</strong> while enjoying the Rio breeze.", es: "Además de la gastronomía, el ambiente abierto y la vista a la laguna hacen de Maracujá da Ilha el lugar ideal para <strong>almorzar, picar algo y tomar un trago</strong> disfrutando de la brisa de Río." },
  btn_reservar_mesa: { pt: "💬 Reservar mesa com a Gigi", en: "💬 Book a table with Gigi", es: "💬 Reservar mesa con Gigi" },

  // === PÁGINA: OCYÁ ===
  title_ocya: { pt: "Ocyá", en: "Ocyá", es: "Ocyá" },
  sub_ocya: { pt: "Alta gastronomia e prestígio internacional no coração da lagoa.", en: "Fine dining and international prestige in the heart of the lagoon.", es: "Alta gastronomía y prestigio internacional en el corazón de la laguna." },
  ocya_p1: { pt: "O <strong>Ocyá</strong> é um renomado restaurante de frutos do mar no Rio de Janeiro e um dos maiores destaques gastronômicos da Ilha da Gigóia. Reconhecido pelo exigente <strong>Guia Michelin</strong> e listado entre os melhores da América Latina, atrai visitantes que buscam uma experiência culinária diferenciada.", en: "<strong>Ocyá</strong> is a renowned seafood restaurant in Rio de Janeiro and one of the culinary highlights of Gigóia Island. Recognized by the prestigious <strong>Michelin Guide</strong> and listed among the best in Latin America, it attracts visitors seeking a distinguished culinary experience.", es: "El <strong>Ocyá</strong> es un renombrado restaurante de mariscos en Río de Janeiro y uno de los mayores destacados gastronómicos de la Isla Gigóia. Reconocido por la exigente <strong>Guía Michelin</strong> y listado entre los mejores de América Latina, atrae a visitantes que buscan una experiencia culinaria diferenciada." },
  ocya_p2: { pt: "Sob o comando do chef <strong>Gerônimo Athiê</strong>, o restaurante se destaca pelo cuidado extremo no preparo e por técnicas ancestrais que elevam o sabor dos pescados.", en: "Under the command of chef <strong>Gerônimo Athiê</strong>, the restaurant stands out for its extreme care in preparation and for ancestral techniques that elevate the flavor of the fish.", es: "Bajo el mando del chef <strong>Gerônimo Athiê</strong>, el restaurante destaca por su cuidado extremo en la preparación y por técnicas ancestrales que elevan el sabor de los pescados." },
  ocya_tec_titulo: { pt: "🔥 Técnicas & Diferenciais", en: "🔥 Techniques & Highlights", es: "🔥 Técnicas y Diferenciales" },
  ocya_tec_1: { pt: "<strong style=\"color: #222;\">Maturação de Peixes:</strong> Técnica milenar que intensifica aromas e texturas, criando pratos com identidade única.", en: "<strong style=\"color: #222;\">Fish Aging:</strong> An ancient technique that intensifies aromas and textures, creating dishes with a unique identity.", es: "<strong style=\"color: #222;\">Maduración de Pescados:</strong> Técnica milenaria que intensifica aromas y texturas, creando platos con identidad única." },
  ocya_tec_2: { pt: "<strong style=\"color: #222;\">Preparos na Brasa:</strong> O uso do fogo traz uma profundidade de sabor surpreendente e uma abordagem moderna e rústica à culinária do mar.", en: "<strong style=\"color: #222;\">Grill Preparations:</strong> The use of fire brings a surprising depth of flavor and a modern yet rustic approach to seafood cuisine.", es: "<strong style=\"color: #222;\">Preparaciones a la Brasa:</strong> El uso del fuego aporta una profundidad de sabor sorprendente y un enfoque moderno y rústico a la cocina del mar." },
  ocya_p3: { pt: "Com foco total em ingredientes frescos e pesca sustentável, o Ocyá consolidou-se como um dos restaurantes mais respeitados da cidade, oferecendo sofisticação no coração da Ilha.", en: "With a full focus on fresh ingredients and sustainable fishing, Ocyá has established itself as one of the most respected restaurants in the city, offering sophistication in the heart of the Island.", es: "Con un enfoque total en ingredientes frescos y pesca sostenible, el Ocyá se ha consolidado como uno de los restaurantes más respetados de la ciudad, ofreciendo sofisticación en el corazón de la Isla." },

  // === PÁGINA: SALOMÉ AL MARE ===
  title_salome: { pt: "Salomé al Mare", en: "Salomé al Mare", es: "Salomé al Mare" },
  sub_salome: { pt: "Ambiente descontraído, pastel famoso e as melhores tábuas de frutos do mar.", en: "Relaxed atmosphere, famous pastries, and the best seafood platters.", es: "Ambiente relajado, empanadas famosas y las mejores tablas de mariscos." },
  salome_p1: { pt: "O <strong>Salomé al Mare</strong> é um dos pilares do polo gastronômico da Ilha Primeira. Com um ambiente acolhedor à beira da lagoa, o espaço é perfeito para quem busca relaxar e comer bem cercado por uma vista privilegiada.", en: "<strong>Salomé al Mare</strong> is one of the pillars of the Ilha Primeira gastronomic hub. With a cozy environment by the lagoon, the space is perfect for those seeking to relax and eat well surrounded by a privileged view.", es: "El <strong>Salomé al Mare</strong> es uno de los pilares del polo gastronómico de la Ilha Primeira. Con un ambiente acogedor a orillas de la laguna, el espacio es perfecto para quienes buscan relajarse y comer bien rodeados de una vista privilegiada." },
  salome_p2: { pt: "A casa é celebrada pela sua seleção rigorosa de frutos do mar, preparados com o frescor que o clima da ilha exige.", en: "The house is celebrated for its rigorous selection of seafood, prepared with the freshness that the island's climate demands.", es: "La casa es celebrada por su rigurosa selección de mariscos, preparados con la frescura que el clima de la isla exige." },
  salome_dest_titulo: { pt: "🐚 Paradas Obrigatórias", en: "🐚 Mandatory Stops", es: "🐚 Paradas Obligatorias" },
  salome_dest_1: { pt: "<strong style=\"color: #222;\">Pastel de Camarão:</strong> Crocante e generosamente recheado, é apontado por muitos como um dos melhores de toda a Ilha.", en: "<strong style=\"color: #222;\">Shrimp Pastel:</strong> Crispy and generously filled, it is noted by many as one of the best on the entire Island.", es: "<strong style=\"color: #222;\">Pastel de Camarón:</strong> Crujiente y generosamente relleno, es señalado por muchos como uno de los mejores de toda la Isla." },
  salome_dest_2: { pt: "<strong style=\"color: #222;\">Tábua de Frutos do Mar:</strong> Uma opção farta e completa, ideal para compartilhar entre amigos ou família enquanto aproveita a brisa da lagoa.", en: "<strong style=\"color: #222;\">Seafood Platter:</strong> A hearty and complete option, ideal for sharing among friends or family while enjoying the lagoon breeze.", es: "<strong style=\"color: #222;\">Tabla de Mariscos:</strong> Una opción abundante y completa, ideal para compartir entre amigos o familiares mientras se disfruta de la brisa de la laguna." },
  salome_p3: { pt: "Com um atendimento atencioso e pratos que marcam a memória, o Salomé al Mare é parada indispensável para quem deseja explorar o melhor da culinária lagunar.", en: "With attentive service and dishes that mark the memory, Salomé al Mare is an indispensable stop for those wishing to explore the best of lagoon cuisine.", es: "Con una atención esmerada y platos que quedan en el recuerdo, Salomé al Mare es una parada indispensable para quien desea explorar lo mejor de la cocina lagunar." },

  // === PÁGINA: VENNE GASTRONOMIA ===
  title_venne: { pt: "Venne Gastronomia", en: "Venne Gastronomia", es: "Venne Gastronomía" },
  sub_venne: { pt: "Experiência sofisticada, ambiente refinado e culinária mediterrânea.", en: "Sophisticated experience, refined atmosphere, and Mediterranean cuisine.", es: "Experiencia sofisticada, ambiente refinado y cocina mediterránea." },
  venne_p1: { pt: "O <strong>Venne Gastronomia</strong> se destaca na Ilha da Gigóia por oferecer uma experiência gastronômica superior, unindo alta culinária a um ambiente extremamente elegante e acolhedor.", en: "<strong>Venne Gastronomia</strong> stands out on Gigóia Island by offering a superior dining experience, combining haute cuisine with an extremely elegant and welcoming environment.", es: "El <strong>Venne Gastronomía</strong> destaca en la Isla Gigóia por ofrecer una experiencia gastronómica superior, uniendo la alta cocina a un ambiente sumamente elegante y acogedor." },
  venne_p2: { pt: "Inspirada na culinária mediterrânea, a casa valoriza o frescor dos ingredientes e o equilíbrio de sabores em pratos com apresentação impecável, ideal para momentos marcantes.", en: "Inspired by Mediterranean cuisine, the house values fresh ingredients and balanced flavors in dishes with impeccable presentation, ideal for memorable moments.", es: "Inspirada en la cocina mediterránea, la casa valora la frescura de los ingredientes y el equilibrio de sabores en platos con una presentación impecable, ideal para momentos memorables." },
  venne_dest_titulo: { pt: "🍷 Destaques & Atmosfera", en: "🍷 Highlights & Atmosphere", es: "🍷 Destacados y Atmósfera" },
  venne_dest_1: { pt: "<strong style=\"color: #222;\">Culinária Mediterrânea:</strong> Proposta autoral que prioriza ingredientes da estação e técnicas que ressaltam o sabor natural dos alimentos.", en: "<strong style=\"color: #222;\">Mediterranean Cuisine:</strong> A signature proposal that prioritizes seasonal ingredients and techniques that highlight the natural flavor of food.", es: "<strong style=\"color: #222;\">Cocina Mediterránea:</strong> Propuesta de autor que prioriza ingredientes de temporada y técnicas que resaltan el sabor natural de los alimentos." },
  venne_dest_2: { pt: "<strong style=\"color: #222;\">Ambiente Sofisticado:</strong> Decoração refinada que cria um clima intimista, perfeito para jantares românticos ou celebrações especiais à beira da lagoa.", en: "<strong style=\"color: #222;\">Sophisticated Atmosphere:</strong> Refined decoration that creates an intimate mood, perfect for romantic dinners or special celebrations by the lagoon.", es: "<strong style=\"color: #222;\">Ambiente Sofisticado:</strong> Decoración refinada que crea un clima íntimo, perfecto para cenas románticas o celebraciones especiales a orillas de la laguna." },
  venne_p3: { pt: "Para quem busca fugir do óbvio e vivenciar uma imersão gastronômica de qualidade, o Venne é uma das paradas mais recomendadas para quem visita a Ilha.", en: "For those seeking to escape the obvious and experience a quality gastronomic immersion, Venne is one of the most recommended stops for island visitors.", es: "Para quienes buscan escapar de lo obvio y vivir una inmersión gastronómica de calidad, Venne es una de las paradas más recomendadas para quienes visitan la Isla." },

  // === PÁGINA: LISTA DE RESTAURANTES ===
  sub_restaurantes_pg: { pt: "Gastronomia e tradição à beira da lagoa.", en: "Gastronomy and tradition by the lagoon.", es: "Gastronomía y tradición a orillas de la laguna." },
  restaurantes_intro: { pt: "A Ilha da Gigóia é conhecida pela sua gastronomia, especialmente pelos <strong>pratos de frutos do mar</strong>, carnes e culinária internacional. Escolha a sua próxima experiência gastronômica abaixo:", en: "Gigóia Island is known for its gastronomy, especially for <strong>seafood dishes</strong>, meats, and international cuisine. Choose your next dining experience below:", es: "La Isla Gigóia es conocida por su gastronomía, especialmente por los <strong>platos de mariscos</strong>, carnes y cocina internacional. Elige tu próxima experiencia gastronómica a continuación:" },
  card_mara_d_short: { pt: "Especialidade em frutos do mar e vista deslumbrante na Ilha Primeira.", en: "Seafood specialties and stunning views on Ilha Primeira.", es: "Especialidades en mariscos y vistas deslumbrantes en Ilha Primeira." },
  card_ocya_d_short: { pt: "Alta gastronomia reconhecida pelo Guia Michelin com técnicas de maturação.", en: "Haute cuisine recognized by the Michelin Guide with aging techniques.", es: "Alta gastronomía reconocida por la Guía Michelin con técnicas de maduración." },
  card_cais_d_short: { pt: "Moquecas tradicionais, pratos fartos e um clima familiar inconfundível.", en: "Traditional moquecas, hearty dishes, and an unmistakable family atmosphere.", es: "Moquecas tradicionales, platos abundantes y un ambiente familiar inconfundible." },
  card_deck_d_short: { pt: "Ambiente vibrante com música ao vivo e o famoso camarão no abacaxi.", en: "Vibrant atmosphere with live music and the famous shrimp in pineapple.", es: "Ambiente vibrante con música en vivo y el famoso camarón en piña." },
  card_salome_d_short: { pt: "Um dos melhores pastéis de camarão da ilha e tábuas completas de mariscos.", en: "One of the island's best shrimp pastéis and complete seafood platters.", es: "Una de las mejores empanadas de camarón de la isla y tablas completas de mariscos." },
  card_venne_d_short: { pt: "Sofisticação mediterrânea com pratos autorais em um ambiente refinado.", en: "Mediterranean sophistication with signature dishes in a refined setting.", es: "Sofisticación mediterránea con platos de autor en un ambiente refinado." },
  card_laguna_d_short: { pt: "O pioneiro da Ilha. Tradição artesanal com vista para a Pedra da Gávea.", en: "The Island's pioneer. Artisanal tradition with views of Pedra da Gávea.", es: "El pionero de la Isla. Tradición artesanal con vistas a la Pedra da Gávea." },
  card_camarao_d_short: { pt: "Cozinha contemporânea moderna especializada em diferentes preparos de camarão.", en: "Modern contemporary cuisine specialized in different shrimp preparations.", es: "Cocina contemporánea moderna especializada en diferentes preparaciones de camarón." },

  // === PÁGINA: SOLAR DAS PALMEIRAS RIO ===
  title_solar: { pt: "Solar das Palmeiras Rio", en: "Solar das Palmeiras Rio", es: "Solar das Palmeiras Rio" },
  sub_solar: { pt: "Arquitetura colonial, amplos jardins e produção personalizada para transformar sua festa em uma memória marcante.", en: "Colonial architecture, vast gardens, and personalized production to turn your party into a lasting memory.", es: "Arquitectura colonial, amplios jardines y producción personalizada para transformar tu fiesta en un recuerdo imborrable." },
  solar_p1: { pt: "O <strong>Solar das Palmeiras Rio</strong> é um dos espaços de eventos mais sofisticados da Ilha da Gigóia. O local mistura arquitetura de inspiração colonial com jardins e áreas abertas cercadas pela natureza da lagoa. Ali, cada evento é pensado como uma experiência completa, em um ambiente cuidadosamente decorado.", en: "<strong>Solar das Palmeiras Rio</strong> is one of the most sophisticated event spaces on Gigóia Island. The venue blends colonial-inspired architecture with gardens and open areas surrounded by the lagoon's nature. Every event is conceived as a complete experience in a carefully decorated setting.", es: "El <strong>Solar das Palmeiras Rio</strong> es uno de los espacios para eventos más sofisticados de la Isla Gigóia. El lugar mezcla arquitectura de inspiración colonial con jardines y áreas abiertas rodeadas por la naturaleza de la laguna. Aquí, cada evento se piensa como una experiencia completa, en un ambiente cuidadosamente decorado." },
  solar_p2: { pt: "O espaço é conhecido por sua gastronomia elaborada e produção de eventos personalizados, com cenografia e menus exclusivos. Em ocasiões como festas de Réveillon, o local se torna um dos pontos mais desejados para celebrar com vista privilegiada para os fogos da Barra da Tijuca.", en: "The space is known for its elaborate gastronomy and custom event production, featuring exclusive scenography and menus. On occasions like New Year's Eve, it becomes one of the most sought-after spots to celebrate with a privileged view of the Barra da Tijuca fireworks.", es: "El espacio es conocido por su gastronomía elaborada y producción de eventos personalizados, con escenografía y menús exclusivos. En ocasiones como las fiestas de Año Nuevo, el lugar se convierte en uno de los puntos más deseados para celebrar con una vista privilegiada de los fuegos artificiales de Barra da Tijuca." },
  solar_dest_1: { pt: "✓ Arquitetura colonial e jardins", en: "✓ Colonial architecture and gardens", es: "✓ Arquitectura colonial y jardines" },
  solar_dest_2: { pt: "✓ Gastronomia elaborada", en: "✓ Elaborate gastronomy", es: "✓ Gastronomía elaborada" },
  solar_dest_3: { pt: "✓ Produção e cenografia personalizadas", en: "✓ Custom production and scenography", es: "✓ Producción y escenografía personalizadas" },
  solar_dest_4: { pt: "✓ Integração total com a natureza", en: "✓ Total integration with nature", es: "✓ Integración total con la naturaleza" },
  solar_ideal: { pt: "Casamentos, festas de 15 anos, grandes eventos corporativos e celebrações exclusivas.", en: "Weddings, 15th birthday parties, large corporate events, and exclusive celebrations.", es: "Bodas, fiestas de 15 años, grandes eventos corporativos y celebraciones exclusivas." },
  solar_footer_p: { pt: "Fale direto com a equipe de produção para desenhar o seu evento exclusivo.", en: "Talk directly with the production team to design your exclusive event.", es: "Habla directamente con el equipo de producción para diseñar tu evento exclusivo." },

  // === PÁGINA: TERMOS E PRIVACIDADE ===
  termos_titulo: { pt: "Termos de Uso e Privacidade", en: "Terms of Use and Privacy", es: "Términos de Uso y Privacidad" },
  termos_sub: { pt: "Transparência e segurança para a sua navegação e experiência na ilha.", en: "Transparency and security for your navigation and experience on the island.", es: "Transparencia y seguridad para tu navegación y experiencia en la isla." },
  termos_update: { pt: "Última atualização: Março de 2026", en: "Last update: March 2026", es: "Última actualización: Marzo de 2026" },
  termos_intro: { pt: "Bem-vindo ao <strong>Portal Ilha da Gigóia</strong>. Ao utilizar nosso site e nossos serviços de agendamento (incluindo o atendimento via assistente virtual Gigi), você concorda com os termos descritos abaixo. Leia com atenção!", en: "Welcome to the <strong>Gigóia Island Portal</strong>. By using our website and scheduling services (including service via virtual assistant Gigi), you agree to the terms described below. Read carefully!", es: "Bienvenido al <strong>Portal Isla Gigóia</strong>. Al utilizar nuestro sitio web y nuestros servicios de programación (incluida la atención a través de la asistente virtual Gigi), aceptas los términos descritos a continuación. ¡Lee con atención!" },
  termos_sec1_t: { pt: "1. Propósito do Portal", en: "1. Portal Purpose", es: "1. Propósito del Portal" },
  termos_sec1_p: { pt: "O Portal Ilha da Gigóia atua como um guia turístico digital e plataforma de agendamento. Nosso objetivo é facilitar o acesso à região, divulgar o comércio local e promover o turismo sustentável e consciente.", en: "The Gigóia Island Portal acts as a digital tourist guide and scheduling platform. Our goal is to facilitate access to the region, promote local business, and encourage sustainable tourism.", es: "El Portal Isla Gigóia actúa como una guía turística digital y plataforma de programación. Nuestro objetivo es facilitar el acceso a la región, dar a conocer el comercio local y promover el turismo sostenible." },
  termos_sec2_t: { pt: "2. Privacidade e Dados (LGPD)", en: "2. Privacy and Data", es: "2. Privacidad y Datos" },
  termos_sec2_p: { pt: "Levamos a sua privacidade a sério. Coletamos apenas as informações estritamente necessárias:", en: "We take your privacy seriously. We collect only strictly necessary information:", es: "Nos tomamos en serio tu privacidad. Recopilamos solo la información estrictamente necesaria:" },
  termos_sec2_l1: { pt: "<strong>Dados de Contato:</strong> Nome e telefone podem ser solicitados pela Gigi apenas para confirmar agendamentos de barcos ou reservas em estabelecimentos.", en: "<strong>Contact Data:</strong> Name and phone number may be requested by Gigi only to confirm boat schedules or venue reservations.", es: "<strong>Datos de Contacto:</strong> Gigi puede solicitar nombre y teléfono solo para confirmar horarios de barcos o reservas en establecimientos." },
  termos_sec2_l2: { pt: "<strong>Uso Responsável:</strong> Suas informações são usadas exclusivamente para a prestação do serviço solicitado. <strong>Não vendemos ou compartilhamos seus dados com terceiros para fins publicitários.</strong>", en: "<strong>Responsible Use:</strong> Your information is used exclusively for the requested service. <strong>We do not sell or share your data with third parties for advertising purposes.</strong>", es: "<strong>Uso Responsable:</strong> Tu información se utiliza exclusivamente para la prestación del servicio solicitado. <strong>No vendemos ni compartimos tus datos con terceros con fines publicitarios.</strong>" },
  termos_sec2_l3: { pt: "<strong>Cookies:</strong> Utilizamos cookies básicos para melhorar o desempenho do site e análise anônima de tráfego.", en: "<strong>Cookies:</strong> We use basic cookies to improve website performance and anonymous traffic analysis.", es: "<strong>Cookies:</strong> Utilizamos cookies básicos para mejorar el rendimiento del sitio y el análisis anónimo del tráfico." },
  termos_sec3_t: { pt: "3. Estabelecimentos de Terceiros", en: "3. Third-Party Establishments", es: "3. Establecimientos de Terceros" },
  termos_sec3_p: { pt: "O portal recomenda diversos bares, restaurantes e pousadas. É importante ressaltar:", en: "The portal recommends various bars, restaurants, and inns. It is important to note:", es: "El portal recomienda diversos bares, restaurantes y posadas. Es importante destacar:" },
  termos_sec3_l1: { pt: "Não administramos os estabelecimentos de terceiros listados. Horários, preços e cardápios são de responsabilidade exclusiva de cada local.", en: "We do not manage the third-party establishments listed. Hours, prices, and menus are the sole responsibility of each venue.", es: "No administramos los establecimientos de terceros enumerados. Los horarios, precios y menús son responsabilidad exclusiva de cada lugar." },
  termos_sec3_l2: { pt: "Não nos responsabilizamos por eventuais problemas na prestação de serviços ou qualidade de produtos oferecidos por terceiros.", en: "We are not responsible for any problems in the provision of services or quality of products offered by third parties.", es: "No nos hacemos responsables de eventuales problemas en la prestación de servicios o calidad de productos ofrecidos por terceros." },
  termos_sec4_t: { pt: "4. Serviços Náuticos", en: "4. Nautical Services", es: "4. Servicios Náuticos" },
  termos_sec4_p: { pt: "Para agendamentos realizados diretamente através do nosso portal:", en: "For bookings made directly through our portal:", es: "Para reservas realizadas directamente a través de nuestro portal:" },
  termos_sec4_l1: { pt: "<strong>Segurança:</strong> Passeios estão sujeitos a alterações por condições climáticas (ventos ou tempestades). O reagendamento será sempre priorizado.", en: "<strong>Safety:</strong> Tours are subject to change due to weather conditions. Rescheduling will always be prioritized.", es: "<strong>Seguridad:</strong> Los tours están sujetos a cambios por condiciones climáticas. Siempre se priorizará la reprogramación." },
  termos_sec4_l2: { pt: "<strong>Normas:</strong> É obrigatório o uso de coletes salva-vidas quando indicado e o respeito às instruções do marinheiro responsável.", en: "<strong>Rules:</strong> The use of life jackets is mandatory when indicated, and instructions from the sailor in charge must be respected.", es: "<strong>Normas:</strong> Es obligatorio el uso de chalecos salvavidas cuando se indique y el respeto a las instrucciones del marinero a cargo." },
  termos_sec5_t: { pt: "5. Propriedade Intelectual", en: "5. Intellectual Property", es: "5. Propiedad Intelectual" },
  termos_sec5_p: { pt: "Todo o conteúdo deste site (textos, design, ilustrações dos mascotes Gigi e Capi) é de propriedade exclusiva do Portal Ilha da Gigóia. A reprodução total ou parcial sem autorização prévia é proibida.", en: "All content on this site (text, design, mascot illustrations) is the exclusive property of the Gigóia Island Portal.", es: "Todo el contenido de este sitio es propiedad exclusiva del Portal Isla Gigóia." },
  termos_duvida: { pt: "Dúvidas sobre nossos termos?", en: "Questions about our terms?", es: "¿Dúvidas sobre nuestros términos?" },
  
  // === PÁGINA: VENEZA CARIOCA ===
  title_veneza: { pt: "Veneza Carioca", en: "Veneza Carioca", es: "Veneza Carioca" },
  sub_veneza: { pt: "Ambiente intimista, acolhedor e com decoração exclusiva. O refúgio perfeito na tranquila Ilha Primeira.", en: "Intimate, welcoming atmosphere with exclusive decor. The perfect refuge on peaceful Ilha Primeira.", es: "Ambiente íntimo, acogedor y con decoración exclusiva. El refugio perfecto en la tranquila Ilha Primeira." },
  veneza_p1: { pt: "O <strong>Veneza Carioca Hotel Boutique</strong> é um espaço pensado nos mínimos detalhes para oferecer uma experiência inesquecível. Localizado na Ilha Primeira, ele combina o charme de uma pousada exclusiva com o conforto de um hotel boutique.", en: "<strong>Veneza Carioca Hotel Boutique</strong> is a space designed in every detail to offer an unforgettable experience. Located on Ilha Primeira, it combines the charm of an exclusive inn with the comfort of a boutique hotel.", es: "El <strong>Veneza Carioca Hotel Boutique</strong> es un espacio pensado en los mínimos detalles para ofrecer una experiencia inolvidable. Ubicado en la Ilha Primeira, combina el encanto de una posada exclusiva con el confort de un hotel boutique." },
  veneza_p2: { pt: "Ideal para casais em viagens românticas ou viajantes que buscam sossego longe do barulho da cidade, mas com a facilidade de estar a poucos minutos do metrô Jardim Oceânico e da praia da Barra.", en: "Ideal for couples on romantic trips or travelers seeking peace away from city noise, yet with the ease of being just minutes from Jardim Oceânico metro and Barra beach.", es: "Ideal para parejas en viajes románticos o viajeros que buscan tranquilidad lejos del ruido de la ciudad, pero con la facilidad de estar a pocos minutos del metro Jardim Oceânico y de la playa de Barra." },
  veneza_dest_1: { pt: "✓ Decoração exclusiva", en: "✓ Exclusive decor", es: "✓ Decoración exclusiva" },
  veneza_dest_3: { pt: "✓ Próximo ao Metrô", en: "✓ Near the Metro", es: "✓ Cerca del Metro" },
  veneza_dest_4: { pt: "✓ Ambiente romântico e silencioso", en: "✓ Romantic and quiet environment", es: "✓ Ambiente romántico y silencioso" },
  
  // === PÁGINA: EVENTOS E EXPERIÊNCIAS (COMPLEMENTO) ===
  ee_onde_celebrar_t: { pt: "Onde celebrar", en: "Where to celebrate", es: "Dónde celebrar" },
  ee_onde_celebrar_d: { pt: "Conheça as melhores opções de ambientes para o seu evento.", en: "Discover the best options of environments for your event.", es: "Conoce las mejores opciones de ambientes para tu evento." },
  card_gaivota_ee_d: { pt: "Localizado na Ilha Primeira, combina vista privilegiada com atmosfera elegante. Perfeito para casamentos intimistas, festas e eventos corporativos.", en: "Located on Ilha Primeira, it combines a privileged view with an elegant atmosphere. Perfect for intimate weddings, parties, and corporate events.", es: "Ubicado en Ilha Primeira, combina una vista privilegiada con una atmósfera elegante. Perfecto para bodas íntimas, fiestas y eventos corporativos." },
  card_solar_ee_d: { pt: "Arquitetura colonial e amplos jardins. Oferece produção personalizada de alta gastronomia para casamentos, festas de 15 anos e celebrações grandiosas.", en: "Colonial architecture and vast gardens. Offers personalized high-gastronomy production for weddings, 15th birthday parties, and grand celebrations.", es: "Arquitectura colonial y amplios jardines. Ofrece producción personalizada de alta gastronomía para bodas, fiestas de 15 años y grandes celebraciones." },
  card_oasis_ee_d: { pt: "Mistura restaurante, lounge e espaço para festas privadas. Cenário charmoso para almoços relaxantes que ganha um clima animado e musical à noite.", en: "Mixes restaurant, lounge, and space for private parties. Charming setting for relaxing lunches that gains a lively and musical atmosphere at night.", es: "Mezcla restaurante, lounge y espacio para fiestas privadas. Entorno encantador para almuerzos relajantes que adquiere un ambiente animado y musical por la noche." },
  card_mara_ee_d: { pt: "Reúne gastronomia, drinks tropicais e um pôr do sol inesquecível. O cenário perfeito para confraternizações e encontros descontraídos entre amigos.", en: "Gathers gastronomy, tropical drinks, and an unforgettable sunset. The perfect setting for gatherings and relaxed meetings among friends.", es: "Reúne gastronomía, tragos tropicales y un atardecer inolvidable. El escenario perfecto para confraternizaciones y encuentros relajados entre amigos." }

};

// Função mágica que busca a palavra certa dependendo do idioma
const t = (key) => DICT[key] ? (DICT[key][currentLang] || DICT[key].pt) : key;
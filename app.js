/* =========================================================
   SISTEMA DE IDIOMAS (i18n) E CONFIGURAÇÕES
   WhatsApp: 5521993802618 | E-mail: Ilhadagigoiaoficial@gmail.com
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
  footer_text: { pt: "Portal Ilha da Gigóia — Termos • Privacidade", en: "Gigóia Island Portal — Terms • Privacy", es: "Portal Isla Gigóia — Términos • Privacidad" },

  hero_pill: { pt: "Portal Oficial de Turismo", en: "Official Tourism Portal", es: "Portal Oficial de Turismo" },
  hero_title_a: { pt: "Descubra o Paraíso Tropical", en: "Discover the Tropical Paradise", es: "Descubre el Paraíso Tropical" },
  hero_title_b: { pt: "da Ilha da Gigóia", en: "of Gigóia Island", es: "de la Isla Gigóia" },
  hero_sub: { pt: "Explore praias, passeios de barco, natureza exuberante e experiências autênticas a apenas minutos do Rio de Janeiro", en: "Explore beaches, boat tours, lush nature, and authentic experiences just minutes from Rio de Janeiro", es: "Explora playas, paseos en barco, naturaleza exuberante y experiencias auténticas a solo minutos de Río de Janeiro" },
  hero_check: { pt: "Informações oficiais e atualizadas", en: "Official and updated information", es: "Información oficial y actualizada" },
  sect_espera_title: { pt: "O Que Te Espera na Ilha", en: "What Awaits You on the Island", es: "Lo Que Te Espera en la Isla" },
  sect_espera_sub: { pt: "Da natureza exuberante aos passeios de barco, cada momento é uma nova descoberta", en: "From lush nature to boat tours, every moment is a new discovery", es: "Desde la exuberante naturaleza hasta los paseos en barco, cada momento es un nuevo descobrimento" },

  capi_tag: { pt: "Capi, seu guia", en: "Capi, your guide", es: "Capi, tu guía" },
  tip_title: { pt: "Dica do Capi:", en: "Capi's Tip:", es: "Consejo de Capi:" },
  
  tip_passeios: { pt: "<a href='#' onclick='openGigiChat(); return false;' style='color:#2f9c49; text-decoration:underline'>Fale com a Gigi</a> para checar a tábua de marés e as melhores condições para o seu passeio!", en: "<a href='#' onclick='openGigiChat(); return false;' style='color:#2f9c49; text-decoration:underline'>Talk to Gigi</a> to check the tide table and the best conditions for your tour!", es: "¡<a href='#' onclick='openGigiChat(); return false;' style='color:#2f9c49; text-decoration:underline'>Habla con Gigi</a> para consultar la tabla de mareas y las mejores condiciones para tu paseo!" },
  tip_comer: { pt: "<a href='#' onclick='openGigiChat(); return false;' style='color:#2f9c49; text-decoration:underline'>Fale com a Gigi</a> para fazer a sua reserva e garantir a melhor mesa na beira da lagoa!", en: "<a href='#' onclick='openGigiChat(); return false;' style='color:#2f9c49; text-decoration:underline'>Talk to Gigi</a> to make your reservation and secure the best table by the lagoon!", es: "¡<a href='#' onclick='openGigiChat(); return false;' style='color:#2f9c49; text-decoration:underline'>Habla con Gigi</a> para hacer tu reserva y asegurar la mejor mesa junto a la laguna!" },
  
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
  ilha_c4_l: { pt: "Ver detalhes", en: "View details", es: "Ver detalles" },

  pg_cc_h1: { pt: "Como Chegar", en: "How to get there", es: "Cómo llegar" },
  pg_cc_p: { pt: "O acesso principal é feito por pequenas embarcações que funcionam 24 horas por dia.", en: "Main access is via small boats that operate 24 hours a day.", es: "El acceso principal es mediante pequeñas embarcaciones que funcionas as 24 horas del día." },
  cc_intro: { pt: "A Ilha da Gigóia está localizada na Barra da Tijuca, no Rio de Janeiro, dentro do complexo de ilhas da Lagoa da Tijuca. Apesar de estar cercada por água, chegar até a ilha é simples e rápido. O acesso principal é feito por pequenas embarcações (barco-táxis ou chalanas) que fazem a travessia entre o continente e a ilha. O trajeto dura apenas alguns minutos e já faz parte da experiência de visitar o local. Os barcos funcionam 24 horas por dia.", en: "Gigóia Island is located in Barra da Tijuca, Rio de Janeiro, within the Lagoa da Tijuca island complex. Despite being surrounded by water, reaching the island is simple and fast. Main access is via small boats (water taxis or chalanas) that cross between the mainland and the island. The journey takes just a few minutes and is already part of the experience. Boats operate 24 hours a day.", es: "La Isla Gigóia está ubicada en Barra da Tijuca, Río de Janeiro, dentro del complejo de islas de la Lagoa da Tijuca. A pesar de estar rodeada de agua, llegar a la isla es sencillo y rápido. El acceso principal es mediante pequeñas embarcaciones (taxis acuáticos o chalanas) que cruzan entre el continente y la isla. El trayecto dura solo unos minutos y ya forma parte de la experiencia. Los barcos funcionan as 24 horas del día." },
  cc_h2_metro: { pt: "Acesso pelo Jardim Oceânico (metrô)", en: "Access via Jardim Oceânico (metro)", es: "Acceso por Jardim Oceânico (metro)" },
  cc_p_metro: { pt: "Uma das formas mais práticas de chegar é utilizando o metrô até a estação Jardim Oceânico, na Linha 4. Ao sair da estação no sentido Lagoa, o Cais da Gigóia fica a poucos minutos de caminhada. Nesse local funcionam diversos barquinhos que fazem a travessia constante para a ilha. O percurso dura cerca de 2 a 5 minutos. Esse é o acesso mais utilizado por visitantes.", en: "One of the most practical ways to arrive is by using the metro to Jardim Oceânico station, on Line 4. When leaving the station towards Lagoa, the Cais da Gigóia is a few minutes' walk away. Several small boats operate constant crossings to the island there. The journey takes about 2 to 5 minutes. This is the access most used by visitors.", es: "Una de las formas más prácticas de llegar es utilizando el metro hasta la estación Jardim Oceânico, en la Línea 4. Al salir de la estación en sentido Lagoa, el Cais da Gigóia está a pocos minutos a pie. En este lugar funcionan varios botecitos que hacen el cruce constante hacia la isla. El recorrido dura entre 2 y 5 minutos. Este es el acceso más utilizado por los visitantes." },
  cc_h2_estrada: { pt: "Acesso pela Estrada da Barra da Tijuca", en: "Access via Estrada da Barra da Tijuca", es: "Acceso por Estrada da Barra da Tijuca" },
  cc_p_estrada: { pt: "Também é possível chegar à ilha pela Estrada da Barra da Tijuca 793, onde existem outros pontos de travessia utilizados por moradores e visitantes. Nessa região também operam barcos que fazem o transporte para diferentes pontos da ilha, sendo uma alternativa prática para quem vem de carro pela região da Barra ou do Itanhangá.", en: "It is also possible to reach the island via Estrada da Barra da Tijuca 793, where there are other crossing points used by residents and visitors. Boats also operate in this region, transporting to different points on the island, being a practical alternative for those coming by car through the Barra or Itanhangá region.", es: "También es posible llegar a la isla por Estrada da Barra da Tijuca 793, donde existen otros puntos de cruce utilizados por residentes y visitantes. En esta región también operan barcos que hacen el transporte a diferentes puntos de la isla, siendo una alternativa práctica para quien viene en coche por la región de Barra o del Itanhangá." },
  cc_h2_carro: { pt: "Chegando de carro", en: "Arriving by car", es: "Llegando en coche" },
  cc_p_carro: { pt: "Quem estiver de carro pode seguir até a região do Jardim Oceânico ou da Estrada da Barra da Tijuca 793. Existem estacionamentos privados e algumas vagas nas ruas próximas aos pontos de travessia. Após estacionar, basta caminhar até o cais e pegar um dos barcos para a ilha.", en: "Those coming by car can follow to the Jardim Oceânico region or Estrada da Barra da Tijuca 793. There are private parking lots and some spaces on the streets near the crossing points. After parking, just walk to the pier and take one of the boats to the island.", es: "Quien venga en coche puede seguir hasta la región de Jardim Oceânico o de Estrada da Barra da Tijuca 793. Existen aparcamientos privados y algunas plazas en las calles cercanas a los puntos de cruce. Después de aparcar, basta con caminar hasta el muelle y tomar uno de los barcos hacia la isla." },
  cc_h2_app: { pt: "Chegando de aplicativo ou táxi", en: "Arriving by app or taxi", es: "Llegando por aplicación o taxi" },
  cc_p_app: { pt: "Outra opção muito comum é utilizar Uber, 99 ou táxi diretamente até o Cais da Gigóia ou até os pontos de travessia na Estrada da Barra da Tijuca 793.", en: "Another very common option is to use Uber, 99 or a taxi directly to Cais da Gigóia or to the crossing points at Estrada da Barra da Tijuca 793.", es: "Otra opción muy común es utilizar Uber, 99 o taxi directamente hasta el Cais da Gigóia o hasta los puntos de cruce en Estrada da Barra da Tijuca 793." },
  cc_h2_travessia: { pt: "A travessia", en: "The crossing", es: "La travesía" },
  cc_p_travessia: { pt: "Os barcos fazem a travessia durante o dia e a noite, e o trajeto é rápido, agradável e seguro. Em poucos minutos você chega à Ilha da Gigóia, um lugar conhecido pelo clima tranquilo, pela natureza ao redor e pelos restaurantes e passeios que fazem da ilha um destino especial na Barra da Tijuca.", en: "Boats make the crossing during the day and night, and the journey is fast, pleasant, and safe. In a few minutes you arrive at Gigóia Island, a place known for its peaceful atmosphere, surrounding nature, and the restaurants and tours that make the island a special destination in Barra da Tijuca.", es: "Los barcos hacen el cruce durante el día y la noche, y el trayecto es rápido, agradable y seguro. En pocos minutos llegas a la Isla Gigóia, un lugar conocido por su clima tranquilo, la naturaleza que la rodea y por los restaurantes y paseos que hacen de la isla un destino especial en Barra da Tijuca." },

  pg_hc_h1: { pt: "História & Cultura", en: "History & Culture", es: "Historia y Cultura" },
  pg_hc_p: { pt: "Conheça as raízes da Ilha da Gigóia e seu charme boêmio.", en: "Discover the roots of Gigóia Island and its bohemian charm.", es: "Descubre las raíces de la Isla Gigóia y su encanto bohemio." },
  hc_p1: { pt: "A Ilha da Gigóia, localizada na Barra da Tijuca, faz parte do conjunto de ilhas da Lagoa da Tijuca e possui uma história marcada pela relação entre natureza e comunidade.", en: "Gigóia Island, located in Barra da Tijuca, is part of the Lagoa da Tijuca island complex and has a history marked by the relationship between nature and community.", es: "La Isla Gigóia, ubicada en Barra da Tijuca, forma parte del complejo de islas de la Lagoa da Tijuca y tiene una historia marcada por la relación entre la naturaleza y la comunidad." },
  hc_p2: { pt: "Durante muitos anos, a região era frequentada principalmente por pescadores e moradores que viviam da lagoa e dos recursos naturais ao redor. Aos poucos, pequenas casas começaram a surgir e a ilha foi se transformando em uma comunidade única dentro da cidade do Rio de Janeiro.", en: "For many years, the region was mostly frequented by fishermen and residents who lived off the lagoon and surrounding natural resources. Gradually, small houses began to appear, and the island transformed into a unique community within the city of Rio de Janeiro.", es: "Durante muchos años, la región fue frecuentada principalmente por pescadores y residentes que vivían de la laguna y los recursos naturales circundantes. Poco a poco, comenzaron a aparecer pequeñas casas, y la isla se transformó en una comunidad única dentro de la ciudad de Río de Janeiro." },
  hc_p3: { pt: "Com o crescimento da Barra da Tijuca ao longo das últimas décadas, a ilha passou a despertar curiosidade de visitantes que buscavam um lugar diferente, mais tranquilo e em contato com a natureza. Restaurantes, bares e pequenos negócios locais começaram a aparecer, trazendo nova vida à região.", en: "With the growth of Barra da Tijuca over the last few decades, the island began to arouse the curiosity of visitors looking for a different, more peaceful place in contact with nature. Restaurants, bars, and small local businesses began to appear, bringing new life to the region.", es: "Con el crecimiento de Barra da Tijuca en las últimas décadas, la isla comenzó a despertar la curiosidad de visitantes que buscaban un lugar diferente, más tranquilo y en contacto con la naturaleza. Restaurantes, bares y pequeños negocios locales comenzaron a aparecer, dando nueva vida a la región." },
  hc_p4: { pt: "Hoje, a Ilha da Gigóia mistura o charme de uma vila com o movimento de um destino gastronômico. Caminhar por suas ruas estreitas, observar as casas à beira da água e conversar com moradores faz parte da experiência de quem visita o local.", en: "Today, Gigóia Island mixes the charm of a village with the bustle of a gastronomic destination. Walking through its narrow streets, observing the waterside houses, and talking to residents is part of the experience for those who visit the place.", es: "Hoy en día, la Isla Gigóia mezcla el encanto de un pueblo con el movimiento de un destino gastronómico. Caminar por sus estrechas calles, observar las casas junto al agua y conversar con los residentes es parte de la experiencia de quienes visitan el lugar." },
  hc_p5: { pt: "A cultura da ilha também está ligada ao convívio próximo entre natureza e cidade. Garças, jacarés, capivaras e outras espécies são frequentemente vistas nos canais e manguezais da região, lembrando que o local faz parte de um importante ecossistema da Lagoa da Tijuca.", en: "The island's culture is also linked to the close coexistence between nature and the city. Herons, alligators, capybaras, and other species are frequently seen in the region's canals and mangroves, a reminder that the place is part of an important ecosystem of the Lagoa da Tijuca.", es: "La cultura de la isla también está ligada a la estrecha convivencia entre la naturaleza y la ciudad. Garzas, caimanes, capibaras y otras especies son vistas frecuentemente en los canales y manglares de la región, recordando que el lugar forma parte de un importante ecosistema de la Lagoa da Tijuca." },
  hc_p6: { pt: "Essa combinação entre história, natureza e vida comunitária é o que torna a Ilha da Gigóia um lugar especial e diferente de qualquer outro ponto da Barra da Tijuca.", en: "This combination of history, nature, and community life is what makes Gigóia Island a special place and different from any other spot in Barra da Tijuca.", es: "Esta combinación de historia, naturaleza y vida comunitaria es lo que hace de la Isla Gigóia un lugar especial y diferente a cualquier otro punto en Barra da Tijuca." },

  pg_bp_h1: { pt: "Boas Práticas", en: "Best Practices", es: "Buenas Prácticas" },
  pg_bp_p: { pt: "Ajude a preservar este paraíso ecológico e respeite a comunidade local.", en: "Help preserve this ecological paradise and respect the local community.", es: "Ayuda a preservar este paraíso ecológico y respeta a la comunidad local." },
  bp_intro: { pt: "A Ilha da Gigóia é um lugar especial que combina natureza, comunidade local e turismo. Para que todos possam aproveitar a visita e para preservar o ambiente da ilha, algumas boas práticas são importantes.", en: "Gigóia Island is a special place that combines nature, local community, and tourism. So that everyone can enjoy the visit and to preserve the island's environment, some best practices are important.", es: "La Isla Gigóia es un lugar especial que combina naturaleza, comunidad local y turismo. Para que todos puedan disfrutar de la visita y para preservar el entorno de la isla, algunas buenas prácticas son importantes." },
  bp_h2_1: { pt: "Respeite a natureza", en: "Respect nature", es: "Respeta la naturaleza" },
  bp_p_1: { pt: "A região faz parte do ecossistema da Lagoa da Tijuca, que abriga diversas espécies de aves, peixes e outros animais. Durante a visita, evite jogar lixo na água ou nas áreas naturais e ajude a manter o local limpo e preservado.", en: "The region is part of the Lagoa da Tijuca ecosystem, home to several species of birds, fish, and other animals. During your visit, avoid throwing trash in the water or natural areas and help keep the place clean and preserved.", es: "La región forma parte del ecosistema de la Lagoa da Tijuca, que alberga diversas especies de aves, peces y otros animales. Durante su visita, evite arrojar basura al agua o áreas naturales y ayude a mantener el lugar limpio y preservado." },
  bp_h2_2: { pt: "Valorize os negócios locais", en: "Support local businesses", es: "Valora los negocios locales" },
  bp_p_2: { pt: "A ilha possui diversos restaurantes, bares e pequenos empreendimentos administrados por moradores. Sempre que possível, valorize o comércio local e aproveite para conhecer a gastronomia e os produtos da região.", en: "The island has several restaurants, bars, and small businesses run by residents. Whenever possible, support local commerce and take the opportunity to discover the region's gastronomy and products.", es: "La isla cuenta con varios restaurantes, bares y pequeños emprendimientos administrados por residentes. Siempre que sea posible, valora el comercio local y aprovecha para conocer la gastronomía y los productos de la región." },
  bp_h2_3: { pt: "Mantenha o ambiente tranquilo", en: "Keep the environment peaceful", es: "Mantén el ambiente tranquilo" },
  bp_p_3: { pt: "A Ilha da Gigóia é conhecida pelo clima relaxante e pela atmosfera de vila. Respeite os moradores e evite barulho excessivo, principalmente em áreas residenciais.", en: "Gigóia Island is known for its relaxing climate and village atmosphere. Respect the residents and avoid excessive noise, especially in residential areas.", es: "La Isla Gigóia es conocida por su clima relajante y atmósfera de pueblo. Respeta a los residentes y evita el ruido excesivo, especialmente en áreas residenciales." },
  bp_h2_4: { pt: "Utilize os pontos de embarque com segurança", en: "Use boarding points safely", es: "Utiliza los puntos de embarque con seguridad" },
  bp_p_4: { pt: "Ao utilizar os barcos para a travessia, aguarde sua vez de embarcar e siga as orientações dos barqueiros. A travessia é rápida e segura quando realizada com organização e atenção.", en: "When using boats for the crossing, wait your turn to board and follow the boatmen's instructions. The crossing is fast and safe when done with organization and attention.", es: "Al utilizar los barcos para la travesía, espera tu turno para embarcar y sigue las instrucciones de los barqueros. La travesía es rápida y segura cuando se realiza con organización y atención." },
  bp_h2_5: { pt: "Cuide do lixo", en: "Take care of your trash", es: "Cuida la basura" },
  bp_p_5: { pt: "Sempre utilize lixeiras ou leve seu lixo com você até encontrar um local adequado para descartá-lo. Pequenas atitudes ajudam a manter a ilha bonita e agradável para todos.", en: "Always use trash cans or take your trash with you until you find a suitable place to dispose of it. Small actions help keep the island beautiful and pleasant for everyone.", es: "Utiliza siempre basureros o lleva tu basura contigo hasta encontrar un lugar adecuado para desecharla. Pequeñas acciones ayudan a mantener la isla hermosa y agradable para todos." },

  pg_me_h1: { pt: "Melhor Época", en: "Best Time to Visit", es: "Mejor Época" },
  pg_me_p: { pt: "Descubra qual estação do ano combina mais com o seu roteiro.", en: "Discover which season best suits your itinerary.", es: "Descubre qué estación se adapta melhor a tu itinerario." },
  me_h2: { pt: "O ano todo é incrível!", en: "All year round is amazing!", es: "¡Todo el año es increíble!" },
  me_p1: { pt: "Por estar no Rio de Janeiro, a ilha é ótima o ano todo. No verão (Dezembro a Março), o clima é ideal para curtir os bares e um chope gelado na lagoa. No outono e inverno (Abril a Agosto), as temperaturas mais amenas deixam as caminhadas e trilhas ecológicas muito mais confortáveis. Dica de ouro: Chegue sempre por volta das 16h para não perder o pôr do sol mágico!", en: "Being in Rio, the island is great year-round. In summer (Dec-Mar), it's ideal for enjoying bars and cold beer. In autumn/winter (Apr-Aug), milder temperatures make walking and trails comfortable. Golden tip: Always arrive around 4 PM to not miss the magical sunset!", es: "Al estar en Río, la isla es genial todo el año. En verano (Dic-Mar), es ideal para disfrutar de los bares y una cerveza fría. En otoño/invierno (Abr-Ago), las temperaturas suaves hacen que caminar y los senderos sean cómodos. Consejo de oro: ¡Llega siempre a las 16:00 para el mágico atardecer!" },

  pass_c1_t: { pt: "Ilhas Tijucas", en: "Tijucas Islands", es: "Islas Tijucas" },
  pass_c1_d: { pt: "Passeio de barco até o arquipélago. Águas cristalinas perfeitas para um mergulho e fotos incríveis.", en: "Boat tour to the archipelago. Crystal clear waters perfect for a swim and incredible photos.", es: "Paseo en barco hasta el archipiélago. Aguas cristalinas perfectas para un chapuzón y fotos increíbles." },
  pass_c1_l: { pt: "Ver roteiro", en: "View route", es: "Ver ruta" },
  pg_it_h1: { pt: "Ilhas Tijucas", en: "Tijucas Islands", es: "Islas Tijucas" },
  pg_it_p: { pt: "Águas cristalinas e vida marinha a poucos minutos da costa.", en: "Crystal clear waters and marine life just minutes from the coast.", es: "Aguas cristalinas y vida marina a pocos minutos de la costa." },
  it_p1: { pt: "O passeio até as Ilhas Tijucas é considerado um dos roteiros mais impressionantes da região da Barra da Tijuca. A rota segue cerca de 2 km mar adentro, saindo da costa da Barra até o arquipélago das Ilhas Tijucas, um verdadeiro paraíso natural no litoral do Rio de Janeiro.", en: "The tour to the Tijucas Islands is considered one of the most impressive routes in the Barra da Tijuca region. The route goes about 2 km out to sea, leaving the coast of Barra to the Tijucas Islands archipelago, a true natural paradise on the coast of Rio de Janeiro.", es: "El paseo a las Islas Tijucas es considerado una de las rutas más impresionantes de la región de Barra da Tijuca. La ruta sigue unos 2 km mar adentro, saliendo de la costa de Barra hasta el archipiélago de las Islas Tijucas, un verdadero paraíso natural en la costa de Río de Janeiro." },
  it_p2: { pt: "Durante o trajeto, é possível contemplar uma vista privilegiada da cidade, observando pontos icônicos como o Cristo Redentor, a Pedra da Gávea, o Morro do Vidigal, a Rocinha e o Pão de Açúcar, além das praias da Joatinga, São Conrado e Barra da Tijuca.", en: "During the journey, it is possible to contemplate a privileged view of the city, observing iconic points such as Christ the Redeemer, Pedra da Gávea, Morro do Vidigal, Rocinha, and Sugarloaf Mountain, as well as the beaches of Joatinga, São Conrado, and Barra da Tijuca.", es: "Durante el trayecto, es posible contemplar una vista privilegiada de la ciudad, observando puntos icónicos como el Cristo Redentor, la Pedra da Gávea, el Morro do Vidigal, la Rocinha y el Pan de Azúcar, además de las playas de Joatinga, São Conrado y Barra da Tijuca." },
  it_p3: { pt: "Ao chegar nas ilhas, o cenário impressiona: águas cristalinas, formações rochosas e uma rica vida marinha. Em muitos momentos é possível avistar golfinhos, tartarugas, peixes e diversas aves marinhas, tornando a experiência ainda mais especial.", en: "Upon arriving at the islands, the scenery is impressive: crystal clear waters, rock formations, and rich marine life. At many times it is possible to spot dolphins, turtles, fish, and various seabirds, making the experience even more special.", es: "Al llegar a las islas, el escenario impresiona: aguas cristalinas, formaciones rocosas y una rica vida marina. En muchos momentos es posible avistar delfines, tortugas, peces y diversas aves marinas, haciendo la experiencia aún más especial." },
  it_p4: { pt: "O local é perfeito para mergulhar, tirar fotos, relaxar e explorar um dos lugares mais bonitos do litoral carioca. Muitos visitantes descrevem o destino como um verdadeiro “Caribe dentro do Rio de Janeiro”.", en: "The place is perfect for snorkeling, taking photos, relaxing, and exploring one of the most beautiful places on the Rio coast. Many visitors describe the destination as a true “Caribbean within Rio de Janeiro”.", es: "El lugar es perfecto para bucear, tomar fotos, relajarse y explorar uno de los lugares más hermosos de la costa de Río. Muchos visitantes describen el destino como un verdadero “Caribe dentro de Río de Janeiro”." },
  it_dur_lbl: { pt: "Duração:", en: "Duration:", es: "Duración:" },
  it_dur_val: { pt: "4 horas de passeio", en: "4-hour tour", es: "4 horas de paseo" },
  it_prc_lbl: { pt: "Valor médio:", en: "Average price:", es: "Precio medio:" },
  it_prc_val: { pt: "R$ 150 por pessoa", en: "R$ 150 per person", es: "R$ 150 por persona" },
  it_btn_book: { pt: "Agendar Passeio", en: "Book Tour", es: "Reservar Paseo" },

  pass_c2_t: { pt: "Pantanal Carioca", en: "Pantanal Carioca", es: "Pantanal Carioca" },
  pass_c2_d: { pt: "Explore a rica biodiversidade da lagoa, com observação de aves, jacarés e capivaras em um trajeto relaxante.", en: "Explore the lagoon's rich biodiversity, observing birds, alligators, and capybaras on a relaxing route.", es: "Explora la rica biodiversidad de la laguna, observando aves, caimanes y capibaras en un trayecto relajante." },
  pass_c2_l: { pt: "Ver roteiro", en: "View route", es: "Ver ruta" },
  pg_pc_h1: { pt: "Pantanal Carioca", en: "Pantanal Carioca", es: "Pantanal Carioca" },
  pg_pc_p: { pt: "Um safári urbano inesquecível pelo complexo de lagoas da Barra.", en: "An unforgettable urban safari through the Barra lagoon complex.", es: "Un safari urbano inolvidable por el complejo de lagunas de Barra." },
  pc_p1: { pt: "O passeio pelo Pantanal Carioca é um dos roteiros mais famosos da região da Lagoa da Tijuca. Durante o trajeto, o barco percorre os canais naturais que formam o arquipélago da Ilha da Gigóia, passando pelas 10 ilhas da região e áreas de manguezal preservadas.", en: "The Pantanal Carioca tour is one of the most famous routes in the Lagoa da Tijuca region. During the journey, the boat travels through the natural canals that form the Gigóia Island archipelago, passing by the 10 islands of the region and preserved mangrove areas.", es: "El paseo por el Pantanal Carioca es una de las rutas más famosas de la región de la Lagoa da Tijuca. Durante el trayecto, el barco recorre los canales naturales que forman el archipiélago de la Isla Gigóia, pasando por las 10 islas de la región y áreas de manglares preservadas." },
  pc_p2: { pt: "Ao longo do percurso, os visitantes podem observar a rica fauna e flora local. É comum avistar jacarés, garças, capivaras e diversas aves que vivem nos manguezais da lagoa, tornando o passeio uma experiência única de contato com a natureza dentro da cidade do Rio de Janeiro.", en: "Along the way, visitors can observe the rich local fauna and flora. It is common to spot alligators, herons, capybaras, and various birds that live in the lagoon's mangroves, making the tour a unique experience of contact with nature within the city of Rio de Janeiro.", es: "A lo largo del recorrido, los visitantes pueden observar la rica fauna y flora local. Es común avistar caimanes, garzas, capibaras y diversas aves que viven en los manglares de la laguna, haciendo del paseo una experiencia única de contacto con la naturaleza dentro de la ciudad de Río de Janeiro." },
  pc_p3: { pt: "O cenário lembra um pequeno pantanal urbano, motivo pelo qual a região ficou conhecida como Pantanal Carioca.", en: "The scenery resembles a small urban pantanal, which is why the region became known as Pantanal Carioca.", es: "El escenario se asemeja a un pequeño pantanal urbano, motivo por el cual la región se conoció como Pantanal Carioca." },
  pc_p4: { pt: "Esse passeio é ideal para quem quer conhecer melhor a natureza da lagoa e descobrir um lado surpreendente da Barra da Tijuca.", en: "This tour is ideal for those who want to get to know the nature of the lagoon better and discover a surprising side of Barra da Tijuca.", es: "Este paseo es ideal para quienes desean conocer mejor la naturaleza de la laguna y descubrir un lado sorprendente de Barra da Tijuca." },
  pc_dur_lbl: { pt: "Duração:", en: "Duration:", es: "Duración:" },
  pc_dur_val: { pt: "45 minutos", en: "45 minutes", es: "45 minutos" },
  pc_prc_lbl: { pt: "Valor médio:", en: "Average price:", es: "Precio medio:" },
  pc_prc_val: { pt: "R$ 50 por pessoa", en: "R$ 50 per person", es: "R$ 50 por persona" },
  pc_btn_book: { pt: "Agendar Passeio", en: "Book Tour", es: "Reservar Paseo" },

  jack_title: { pt: "Aviso do Jack, o Protetor do Mangue:", en: "Warning from Jack, the Mangrove Protector:", es: "Aviso de Jack, el Protector del Manglar:" },
  jack_tip_pc: { pt: "Bem-vindos ao meu quintal! Mas atenção: sou o guardião destas águas. Durante o passeio, não jogue lixo na lagoa, não alimente os animais selvagens e respeite a natureza. O mangue é a nossa casa e a sobrevivência dele depende de todos nós!", en: "Welcome to my backyard! But beware: I am the guardian of these waters. During the tour, do not throw trash in the lagoon, do not feed the wild animals, and respect nature. The mangrove is our home and its survival depends on all of us!", es: "¡Bienvenidos a mi patio! Pero atención: soy el guardián de estas aguas. Durante el paseo, no arrojes basura a la laguna, no alimentes a los animales salvajes y respeta la naturaleza. ¡El manglar es nuestro hogar y su supervivencia depende de todos nosotros!" },

  pass_c3_t: { pt: "Reserva", en: "Reserva Beach", es: "Playa Reserva" },
  pass_c3_d: { pt: "Navegue pelos canais até chegar à bela e preservada Praia da Reserva. Um contato imersivo com a natureza.", en: "Sail through the canals until you reach the beautiful and preserved Reserva Beach. Immersive contact with nature.", es: "Navega por los canales hasta llegar a la hermosa y conservada Playa Reserva. Contacto inmersivo con la naturaleza." },
  pass_c3_l: { pt: "Ver roteiro", en: "View route", es: "Ver ruta" },
  pg_res_h1: { pt: "Praia da Reserva", en: "Reserva Beach", es: "Playa Reserva" },
  pg_res_p: { pt: "Navegue pelos canais até uma das praias mais limpas e preservadas do Rio.", en: "Sail through the canals to one of the cleanest and most preserved beaches in Rio.", es: "Navega por los canales hasta una de las playas más limpias y preservadas de Río." },
  res_p1: { pt: "Esse passeio leva os visitantes por uma das áreas mais preservadas da região da Barra da Tijuca. A rota segue pelo Canal de Marapendi, atravessando trechos de natureza praticamente intocados, onde é possível observar a vegetação típica da lagoa e uma paisagem pouco vista pela maioria das pessoas.", en: "This tour takes visitors through one of the most preserved areas in the Barra da Tijuca region. The route follows the Marapendi Canal, crossing practically untouched stretches of nature, where you can observe typical lagoon vegetation and a landscape rarely seen by most people.", es: "Este paseo lleva a los visitantes por una de las áreas más preservadas de la región de Barra da Tijuca. La ruta sigue por el Canal de Marapendi, atravesando tramos de naturaleza prácticamente intactos, donde se puede observar la vegetación típica de la laguna y un paisaje poco visto por la mayoría de las personas." },
  res_p2: { pt: "Ao longo do percurso, o barco avança cerca de 9 km pelos canais, passando por áreas de mata ainda preservada e proporcionando uma experiência tranquila de contato com a natureza.", en: "Along the route, the boat travels about 9 km through the canals, passing through areas of preserved forest and providing a peaceful experience of contact with nature.", es: "A lo largo del recorrido, el barco avanza unos 9 km por los canales, pasando por áreas de bosque aún preservadas y brindando una experiencia tranquila de contacto con la naturaleza." },
  res_p3: { pt: "O passeio segue até a Praia da Reserva, uma das praias mais bonitas e preservadas da região. Em alguns momentos é possível parar para apreciar a paisagem ou até dar um mergulho no mar.", en: "The tour continues to Reserva Beach, one of the most beautiful and preserved beaches in the region. At times, it is possible to stop to enjoy the scenery or even take a dip in the sea.", es: "El paseo continúa hasta la Playa de Reserva, una de las playas más hermosas y preservadas de la región. En algunos momentos es posible detenerse para apreciar el paisaje o incluso darse un chapuzón en el mar." },
  res_p4: { pt: "É um roteiro muito procurado por famílias e grupos de amigos, já que combina natureza, passeio relaxante e uma parada especial na praia. Esse passeio tem uma vantagem enorme: ele conecta lagoa + mar. Isso é algo que quase nenhum roteiro urbano oferece.", en: "It is a highly sought-after route for families and groups of friends, as it combines nature, a relaxing boat ride, and a special stop at the beach. This tour has a huge advantage: it connects lagoon + sea. This is something almost no urban itinerary offers.", es: "Es una ruta muy solicitada por familias y grupos de amigos, ya que combina naturaleza, un paseo relajante y una parada especial en la playa. Este paseo tiene una ventaja enorme: conecta laguna + mar. Esto es algo que casi ningún itinerario urbano ofrece." },
  res_dur_lbl: { pt: "Duração:", en: "Duration:", es: "Duración:" },
  res_dur_val: { pt: "2 horas", en: "2 hours", es: "2 horas" },
  res_prc_lbl: { pt: "Valor médio:", en: "Average price:", es: "Precio medio:" },
  res_prc_val: { pt: "R$ 120 por pessoa", en: "R$ 120 per person", es: "R$ 120 por persona" },
  res_btn_book: { pt: "Agendar Passeio", en: "Book Tour", es: "Reservar Paseo" },

  pass_c4_t: { pt: "Jet-Ski", en: "Jet-Ski", es: "Moto de Agua" },
  pass_c4_d: { pt: "Para os aventureiros! Passeios guiados e aluguel de Jet-Ski para explorar a lagoa com muita adrenalina.", en: "For the adventurous! Guided tours and Jet-Ski rentals to explore the lagoon with lots of adrenaline.", es: "¡Para los aventureros! Paseos guiados y alquiler de motos de agua para explorar la laguna con mucha adrenalina." },
  pass_c4_l: { pt: "Ver opções", en: "View options", es: "Ver opciones" },
  pg_js_h1: { pt: "Passeio de Jet-Ski", en: "Jet-Ski Tour", es: "Paseo en Moto de Agua" },
  pg_js_p: { pt: "Aventura e adrenalina explorando as lagoas no seu próprio ritmo.", en: "Adventure and adrenaline exploring the lagoons at your own pace.", es: "Aventura y adrenalina explorando las lagunas a tu propio ritmo." },
  js_p1: { pt: "Para quem procura mais emoção na água, o aluguel de jet ski na Ilha da Gigóia é uma das experiências mais divertidas da região da Barra da Tijuca.", en: "For those looking for more excitement on the water, renting a jet ski at Gigóia Island is one of the most fun experiences in the Barra da Tijuca region.", es: "Para quienes buscan más emoción en el agua, el alquiler de motos de agua en la Isla Gigóia es una de las experiencias más divertidas en la región de Barra da Tijuca." },
  js_p2: { pt: "A atividade permite explorar os canais da lagoa e áreas abertas com velocidade, liberdade e uma vista incrível da região. Durante o passeio é possível navegar pelas águas da lagoa enquanto aprecia a paisagem da Barra da Tijuca de um ângulo totalmente diferente.", en: "The activity allows you to explore the lagoon canals and open areas with speed, freedom, and an incredible view of the region. During the ride, you can navigate the lagoon waters while enjoying the Barra da Tijuca landscape from a totally different angle.", es: "La actividad permite explorar los canales de la laguna y áreas abiertas con velocidad, libertad y una vista increíble de la región. Durante el paseo, es posible navegar por las aguas de la laguna mientras se aprecia el paisaje de Barra da Tijuca desde un ángulo totalmente diferente." },
  js_p3: { pt: "O jet ski é uma ótima opção para quem quer adicionar aventura e adrenalina ao passeio pela ilha, sendo muito procurado por visitantes que querem experimentar algo diferente enquanto aproveitam o dia na lagoa.", en: "The jet ski is a great option for those who want to add adventure and adrenaline to their island tour, being highly sought after by visitors who want to try something different while enjoying the day at the lagoon.", es: "La moto de agua es una gran opción para quienes desean agregar aventura y adrenalina a su paseo por la isla, siendo muy buscada por los visitantes que quieren probar algo diferente mientras disfrutan del día en la laguna." },
  js_p4: { pt: "A atividade conta com orientação básica antes da saída, garantindo uma experiência segura e divertida mesmo para quem nunca pilotou um jet ski.", en: "The activity includes basic orientation before departure, ensuring a safe and fun experience even for those who have never ridden a jet ski.", es: "La actividad cuenta con orientación básica antes de la salida, garantizando una experiencia segura y divertida incluso para quienes nunca han pilotado una moto de agua." },
  js_lbl_vals: { pt: "Valores:", en: "Prices:", es: "Valores:" },
  js_time_15: { pt: "15 minutos", en: "15 minutes", es: "15 minutos" },
  js_prc_15: { pt: "R$ 200", en: "R$ 200", es: "R$ 200" },
  js_time_30: { pt: "30 minutos", en: "30 minutes", es: "30 minutos" },
  js_prc_30: { pt: "R$ 300", en: "R$ 300", es: "R$ 300" },
  js_time_60: { pt: "1 hora", en: "1 hour", es: "1 hora" },
  js_prc_60: { pt: "R$ 600", en: "R$ 600", es: "R$ 600" },
  js_btn_book: { pt: "Agendar Jet Ski", en: "Book Jet Ski", es: "Reservar Moto de Agua" },

  com_c1_t: { pt: "Frutos do mar", en: "Seafood", es: "Mariscos" },
  com_c1_d: { pt: "Os clássicos que você precisa experimentar.", en: "The classics you must try.", es: "Los clásicos que debes probar." },
  com_c1_l: { pt: "Ver opções", en: "View options", es: "Ver opciones" },
  com_c2_t: { pt: "Bares & pôr do sol", en: "Bars & sunsets", es: "Bares y atardeceres" },
  com_c2_d: { pt: "Clima perfeito pra relaxar no fim do dia.", en: "Perfect vibe to relax at the end of the day.", es: "Ambiente perfecto para relajarse al final del día." },
  com_c2_l: { pt: "Sugestões", en: "Suggestions", es: "Sugerencias" },
  com_c3_t: { pt: "Café e lanches", en: "Coffee and snacks", es: "Café y bocadillos" },
  com_c3_d: { pt: "Paradas rápidas durante o passeio.", en: "Quick stops during the tour.", es: "Paradas rápidas durante el paseo." },
  com_c3_l: { pt: "Dicas", en: "Tips", es: "Consejos" },
  com_c4_t: { pt: "Para famílias", en: "For families", es: "Para familias" },
  com_c4_d: { pt: "Locais tranquilos e com boas opções.", en: "Quiet places with good options.", es: "Lugares tranquilos con buenas opciones." },
  com_c4_l: { pt: "Ver", en: "View", es: "Ver" },

  hosp_c1_t: { pt: "Hotéis e Pousadas", en: "Hotels & Inns", es: "Hoteles y Posadas" },
  hosp_c1_d: { pt: "Conforto e descanso com vista para a lagoa.", en: "Comfort and rest overlooking the lagoon.", es: "Confort y descanso con vistas a la laguna." },
  hosp_c2_t: { pt: "Airbnb e Temporada", en: "Airbnb & Vacation Rentals", es: "Airbnb y Alquileres Vacacionales" },
  hosp_c2_d: { pt: "Privacidade e liberdade para grupos e famílias.", en: "Privacy and freedom for groups and families.", es: "Privacidad y libertad para grupos y familias." },
  hosp_c3_t: { pt: "Espaços para Eventos", en: "Event Spaces", es: "Espacios para Eventos" },
  hosp_c3_d: { pt: "Cenários memoráveis para sua celebração.", en: "Memorable settings for your celebration.", es: "Escenarios memorables para tu celebración." },
  hosp_c4_t: { pt: "Experiência Completa", en: "Complete Experience", es: "Experiencia Completa" },
  hosp_c4_d: { pt: "Passeio, gastronomia e natureza em um único dia.", en: "Tour, gastronomy, and nature in a single day.", es: "Paseo, gastronomía y naturaleza en un solo día." },

  /* TEXTOS DAS 4 NOVAS PÁGINAS DE HOSPEDAGEM PARA TRADUÇÃO */
  hp_h1: { pt: "Hotéis e Pousadas", en: "Hotels & Inns", es: "Hoteles y Posadas" },
  hp_sub: { pt: "Hospedagem com charme e tranquilidade.", en: "Accommodation with charm and tranquility.", es: "Alojamiento con encanto y tranquilidad." },
  hp_p1: { pt: "A Ilha da Gigóia possui diversas <strong>pousadas e pequenas hospedagens</strong> ideais para quem deseja passar mais tempo na região e aproveitar o clima tranquilo da lagoa.", en: "Gigóia Island has several <strong>inns and small accommodations</strong> ideal for those who want to spend more time in the region and enjoy the tranquil atmosphere of the lagoon.", es: "La Isla Gigóia cuenta con varias <strong>posadas y pequeños alojamientos</strong> ideales para quienes desean pasar más tiempo en la región y disfrutar del ambiente tranquilo de la laguna." },
  hp_p2: { pt: "Muitas dessas hospedagens oferecem <strong>suítes confortáveis, vista para os canais, café da manhã e áreas externas agradáveis</strong>, criando um ambiente perfeito para descanso.", en: "Many of these accommodations offer <strong>comfortable suites, views of the canals, breakfast, and pleasant outdoor areas</strong>, creating a perfect environment for rest.", es: "Muchos de estos alojamientos ofrecen <strong>cómodas suites, vistas a los canales, desayuno y agradables áreas al aire libre</strong>, creando un ambiente perfecto para descansar." },
  hp_p3: { pt: "Hospedar-se na ilha permite explorar com calma os restaurantes, bares, passeios de barco e atrações locais, vivendo uma experiência diferente dentro da cidade do Rio de Janeiro.", en: "Staying on the island allows you to calmly explore the restaurants, bars, boat tours, and local attractions, living a different experience within the city of Rio de Janeiro.", es: "Hospedarse en la isla permite explorar con calma los restaurantes, bares, paseos en barco y atracciones locales, viviendo una experiencia diferente dentro de la ciudad de Río de Janeiro." },
  hp_btn: { pt: "Falar com a Gigi sobre Pousadas", en: "Talk to Gigi about Inns", es: "Hablar con Gigi sobre Posadas" },

  ab_h1: { pt: "Airbnb e Casas de Temporada", en: "Airbnb & Vacation Rentals", es: "Airbnb y Alquileres Vacacionales" },
  ab_sub: { pt: "Sinta-se um verdadeiro morador da ilha.", en: "Feel like a true island resident.", es: "Siéntete como un verdadero residente de la isla." },
  ab_p1: { pt: "Outra opção bastante procurada na ilha são os <strong>aluguéis de temporada</strong>, como casas e apartamentos disponíveis em plataformas como Airbnb.", en: "Another highly sought-after option on the island is <strong>vacation rentals</strong>, such as houses and apartments available on platforms like Airbnb.", es: "Otra opción muy solicitada en la isla son los <strong>alquileres vacacionales</strong>, como casas y apartamentos disponibles en plataformas como Airbnb." },
  ab_p2: { pt: "Essa alternativa é ideal para quem viaja em grupo, com amigos ou família, oferecendo <strong>mais privacidade e liberdade</strong> durante a estadia.", en: "This alternative is ideal for those traveling in a group, with friends or family, offering <strong>more privacy and freedom</strong> during the stay.", es: "Esta alternativa es ideal para quienes viajan en grupo, con amigos o familiares, ofreciendo <strong>más privacidad y libertad</strong> durante la estadía." },
  ab_p3: { pt: "Algumas casas possuem varanda, vista para a lagoa e acesso fácil aos restaurantes e bares da ilha, permitindo que o visitante aproveite o ambiente único da região.", en: "Some houses have a balcony, a view of the lagoon, and easy access to the island's restaurants and bars, allowing the visitor to enjoy the unique atmosphere of the region.", es: "Algunas casas tienen balcón, vista a la laguna y fácil acceso a los restaurantes y bares de la isla, permitiendo al visitante disfrutar del ambiente único de la región." },
  ab_btn: { pt: "Verificar opções com a Gigi", en: "Check options with Gigi", es: "Consultar opciones con Gigi" },

  ev_h1: { pt: "Espaços para Eventos", en: "Event Spaces", es: "Espacios para Eventos" },
  ev_sub: { pt: "Celebre momentos inesquecíveis cercado pela natureza.", en: "Celebrate unforgettable moments surrounded by nature.", es: "Celebra momentos inolvidables rodeado de naturaleza." },
  ev_p1: { pt: "A Ilha da Gigóia também é um destino especial para a realização de <strong>eventos e celebrações</strong>.", en: "Gigóia Island is also a special destination for hosting <strong>events and celebrations</strong>.", es: "La Isla Gigóia también es un destino especial para la realización de <strong>eventos y celebraciones</strong>." },
  ev_p2: { pt: "Diversos espaços podem ser alugados para <strong>casamentos, aniversários, confraternizações, eventos corporativos e encontros entre amigos</strong>, sempre com o charme da lagoa e da natureza ao redor.", en: "Various spaces can be rented for <strong>weddings, birthdays, get-togethers, corporate events, and meetings with friends</strong>, always with the charm of the lagoon and the surrounding nature.", es: "Diversos espacios pueden ser alquilados para <strong>bodas, cumpleaños, confraternizaciones, eventos corporativos y encuentros entre amigos</strong>, siempre con el encanto de la laguna y la naturaleza alrededor." },
  ev_p3: { pt: "Realizar um evento na ilha oferece um cenário diferente e memorável, combinando gastronomia, paisagem e uma atmosfera única dentro da Barra da Tijuca.", en: "Hosting an event on the island offers a different and memorable setting, combining gastronomy, landscape, and a unique atmosphere within Barra da Tijuca.", es: "Realizar un evento en la isla ofrece un escenario diferente y memorable, combinando gastronomía, paisaje y una atmósfera única dentro de Barra da Tijuca." },
  ev_btn: { pt: "Planeje seu evento com a Gigi", en: "Plan your event with Gigi", es: "Planifica tu evento con Gigi" },

  ex_h1: { pt: "Experiência Completa na Ilha", en: "Complete Experience", es: "Experiencia Completa" },
  ex_sub: { pt: "O roteiro perfeito para viver a Gigóia em um dia.", en: "The perfect itinerary to experience Gigóia in one day.", es: "El itinerario perfecto para vivir Gigóia en un día." },
  ex_p1: { pt: "Além da hospedagem, também é possível viver <strong>uma experiência completa de um dia na Ilha da Gigóia.</strong>", en: "In addition to accommodation, it is also possible to live <strong>a complete one-day experience on Gigóia Island.</strong>", es: "Además del alojamiento, también es posible vivir <strong>una experiencia completa de un día en la Isla Gigóia.</strong>" },
  ex_p2: { pt: "O visitante pode começar o passeio chegando de barco e sendo recepcionado na ilha, seguindo para um <strong>café da manhã em um dos estabelecimentos locais.</strong>", en: "Visitors can start the tour by arriving by boat and being welcomed to the island, heading for <strong>breakfast at one of the local establishments.</strong>", es: "El visitante puede comenzar el paseo llegando en barco y siendo recibido en la isla, dirigiéndose a un <strong>desayuno en uno de los establecimentos locales.</strong>" },
  ex_p3: { pt: "Durante o dia, é possível fazer um <strong>passeio de barco pelos canais ou pela lagoa</strong>, conhecer a natureza da região e depois aproveitar o <strong>almoço em um dos restaurantes da ilha.</strong>", en: "During the day, it is possible to take a <strong>boat tour through the canals or the lagoon</strong>, discover the nature of the region, and then enjoy <strong>lunch at one of the island's restaurants.</strong>", es: "Durante el día, es posible hacer un <strong>paseo en barco por los canales o la laguna</strong>, conocer la naturaleza de la región y luego disfrutar del <strong>almuerzo en uno de los restaurantes de la isla.</strong>" },
  ex_p4: { pt: "À tarde, muitos visitantes gostam de caminhar pela ilha e visitar a <strong>feirinha local</strong>, antes de relaxar com um <strong>drink ao pôr do sol</strong> à beira da água.", en: "In the afternoon, many visitors like to walk around the island and visit the <strong>local market</strong> before relaxing with a <strong>sunset drink</strong> by the water.", es: "Por la tarde, a muchos visitantes les gusta caminar por la isla y visitar el <strong>mercado local</strong>, antes de relajarse con una <strong>bebida al atardecer</strong> junto al agua." },
  ex_p5: { pt: "Para encerrar o dia, alguns bares e restaurantes oferecem <strong>música ao vivo</strong>, criando o clima perfeito para aproveitar a noite antes de retornar.", en: "To end the day, some bars and restaurants offer <strong>live music</strong>, creating the perfect atmosphere to enjoy the night before returning.", es: "Para terminar el día, algunos bares y restaurantes ofrecen <strong>música en vivo</strong>, creando el ambiente perfecto para disfrutar la noche antes de regresar." },
  ex_p6: { pt: "Essa experiência reúne natureza, gastronomia, cultura e lazer em um único dia inesquecível com tudo de melhor que tem na ilha.", en: "This experience brings together nature, gastronomy, culture, and leisure in a single unforgettable day with the best the island has to offer.", es: "Esta experiencia reúne naturaleza, gastronomía, cultura y ocio en un solo día inolvidable con lo mejor que la isla tiene para ofrecer." },
  ex_btn: { pt: "Agendar Experiência com a Gigi", en: "Schedule Experience with Gigi", es: "Programar Experiencia con Gigi" },

  pg_ilha_h1: { pt: "A Ilha", en: "The Island", es: "La Isla" },
  pg_ilha_p: { pt: "Um refúgio tropical com natureza exuberante, clima tranquilo e experiências únicas pertinho do Rio.", en: "A tropical refuge with lush nature, a peaceful climate, and unique experiences close to Rio.", es: "Un refugio tropical con natureza exuberante, clima tranquilo y experiencias únicas cerca de Río." },
  pg_passeios_h1: { pt: "Passeios & Rotas", en: "Tours & Routes", es: "Paseos y Rutas" },
  pg_passeios_p: { pt: "Roteiros de barco, paradas para fotos, horários ideais e dicas do que levar para aproveitar melhor.", en: "Boat itineraries, photo stops, ideal times, and tips on what to bring to make the most of it.", es: "Itinerarios en barco, paradas para fotos, horarios ideales y consejos sobre qué llevar." },
  pg_comer_h1: { pt: "Comer & Beber", en: "Food & Drink", es: "Comer y Beber" },
  pg_comer_p: { pt: "Explore sabores locais: frutos do mar frescos, bares charmosos e aquele pôr do sol perfeito.", en: "Explore local flavors: fresh seafood, charming bars, and that perfect sunset.", es: "Explora sabores locales: mariscos frescos, bares encantadores y ese atardecer perfecto." },
  pg_hospeda_h1: { pt: "Hospedagem", en: "Accommodation", es: "Accommodation" },
  pg_hospeda_p: { pt: "Encontre o lugar perfeito para descansar: opções aconchegantes, boas localizações e dicas de custo-benefício.", en: "Find the perfect place to rest: cozy options, good locations, and cost-benefit tips.", es: "Encuentra el lugar perfeito para descansar: opciones acogedoras, buenas ubicaciones y consejos." },

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
  gigi_note: { pt: "Ao enviar, abriremos o WhatsApp com sua mensagem pronta.", en: "When sending, we will open WhatsApp with your message ready.", es: "Al enviar, abriremos WhatsApp con tu mensaje listo." }
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
  },
  homeCards: [
    { title:t("hm_c1_t"), desc:t("hm_c1_d"), linkLabel:t("hm_c1_l"), href:"passeios-rotas.html", img:"assets/card-passeios.jpg", icon:"boat", badge:"⭐ Mais Procurado" },
    { title:t("hm_c2_t"), desc:t("hm_c2_d"), linkLabel:t("hm_c2_l"), href:"comer-beber.html", img:"assets/card-comer.jpg", icon:"fork", badge:"🍤 Gastronomia" },
    { title:t("hm_c3_t"), desc:t("hm_c3_d"), linkLabel:t("hm_c3_l"), href:"a-ilha.html", img:"assets/card-natureza.jpg", icon:"leaf", badge:"🔭 Observação" },
    { title:t("hm_c4_t"), desc:t("hm_c4_d"), linkLabel:t("hm_c4_l"), href:"hospedagem.html", img:"assets/card-hospedagem.jpg", icon:"bed", badge:"🌅 Para Relaxar" },
  ],
  pages: {
    "a-ilha": [
      { title:t("ilha_c1_t"), desc:t("ilha_c1_d"), linkLabel:t("ilha_c1_l"), href:"como-chegar.html", img:"assets/comochegar.jpg", icon:"boat" },
      { title:t("ilha_c2_t"), desc:t("ilha_c2_d"), linkLabel:t("ilha_c2_l"), href:"historia-cultura.html", img:"assets/historia.jpg", icon:"leaf" },
      { title:t("ilha_c3_t"), desc:t("ilha_c3_d"), linkLabel:t("ilha_c3_l"), href:"boas-praticas.html", img:"assets/boaspraticas.jpg", icon:"bed" },
      { title:t("ilha_c4_t"), desc:t("ilha_c4_d"), linkLabel:t("ilha_c4_l"), href:"melhor-epoca.html", img:"assets/melhorepoca.jpg", icon:"fork" },
    ],
    "passeios-rotas": [
      { title:t("pass_c1_t"), desc:t("pass_c1_d"), linkLabel:t("pass_c1_l"), href:"ilhas-tijucas.html", img:"assets/ilhastijucas.jpg", icon:"boat", badge:"🌊 Mergulho" },
      { title:t("pass_c2_t"), desc:t("pass_c2_d"), linkLabel:t("pass_c2_l"), href:"pantanal-carioca.html", img:"assets/pantanalcarioca.jpg", icon:"leaf", badge:"🐊 Safári" },
      { title:t("pass_c3_t"), desc:t("pass_c3_d"), linkLabel:t("pass_c3_l"), href:"reserva.html", img:"assets/reserva.jpg", icon:"boat", badge:"🏖️ Praia" },
      { title:t("pass_c4_t"), desc:t("pass_c4_d"), linkLabel:t("pass_c4_l"), href:"jet-ski.html", img:"assets/jetski.jpg", icon:"boat", badge:"⚡ Adrenalina" },
    ],
    "comer-beber": [
      { title:t("com_c1_t"), desc:t("com_c1_d"), linkLabel:t("com_c1_l"), href:"passeios-rotas.html", img:"assets/card-comer.jpg", icon:"fork" },
      { title:t("com_c2_t"), desc:t("com_c2_d"), linkLabel:t("com_c2_l"), href:"a-ilha.html", img:"assets/card-passeios.jpg", icon:"boat" },
      { title:t("com_c3_t"), desc:t("com_c3_d"), linkLabel:t("com_c3_l"), href:"passeios-rotas.html", img:"assets/card-natureza.jpg", icon:"leaf" },
      { title:t("com_c4_t"), desc:t("com_c4_d"), linkLabel:t("com_c4_l"), href:"passeios-rotas.html", img:"assets/card-hospedagem.jpg", icon:"bed" },
    ],
    "hospedagem": [
      { title:t("hosp_c1_t"), desc:t("hosp_c1_d"), linkLabel:t("ilha_c1_l"), href:"hoteis-pousadas.html", img:"assets/card-hospedagem.jpg", icon:"bed" },
      { title:t("hosp_c2_t"), desc:t("hosp_c2_d"), linkLabel:t("ilha_c1_l"), href:"airbnb-temporada.html", img:"assets/airbnb.jpg", icon:"bed" },
      { title:t("hosp_c3_t"), desc:t("hosp_c3_d"), linkLabel:t("ilha_c1_l"), href:"espacos-eventos.html", img:"assets/eventos.jpg", icon:"fork", badge:"🎉 Celebre" },
      { title:t("hosp_c4_t"), desc:t("hosp_c4_d"), linkLabel:t("ilha_c1_l"), href:"experiencia-completa.html", img:"assets/experiencia.jpg", icon:"boat", badge:"🌅 Roteiro" },
    ]
  }
};

const GIGI = {
  whatsappNumber: "5521993802618",
  fabText: t("gigi_fab")
};

window.openGigiChat = function() {
  const box = document.getElementById("gigiBox");
  if(box) {
    box.style.display = "flex";
    localStorage.setItem("ilg_gigi_open_v1", "1");
  }
};

const svgInsta = `<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`;
const svgFb = `<svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>`;
const svgTiktok = `<svg viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>`;
const svgYoutube = `<svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`;

const socialHtml = `
  <div class="social-links">
    <a href="https://www.instagram.com/ilha.da.gigoia" target="_blank" class="social-icon" aria-label="Instagram">${svgInsta}</a>
    <a href="https://www.facebook.com/portaldailhadagigoia" target="_blank" class="social-icon" aria-label="Facebook">${svgFb}</a>
    <a href="https://www.tiktok.com/@ilha.da.gigoia" target="_blank" class="social-icon" aria-label="TikTok">${svgTiktok}</a>
    <a href="https://www.youtube.com/@ilha.da.gigoia" target="_blank" class="social-icon" aria-label="YouTube">${svgYoutube}</a>
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
        <a class="card__link" href="${c.href}">
          ${c.linkLabel || 'Ver detalhes'} <span aria-hidden="true">→</span>
        </a>
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
          ${socialHtml}
          <select class="lang-switcher" id="langSwitcher" aria-label="Selecione o idioma" onchange="changeLanguage(this.value)">
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
  if (tipText) {
    const tipsArray = Array.from({length: 20}, (_, i) => "tip_text_" + i);
    const randomTipKey = tipsArray[Math.floor(Math.random() * tipsArray.length)];
    tipText.innerHTML = " " + t(randomTipKey);
  }

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
      <button class="gigiFab__btn" id="gigiFabBtn" type="button" aria-label="${t("gigi_fab")}" onclick="openGigiChat()">
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
            <input id="gigiName" name="name" type="text" placeholder="Maria" required />
          </div>
          <div>
            <label for="gigiPhone">${t("gigi_lbl_phone")}</label>
            <input id="gigiPhone" name="phone" type="tel" placeholder="+55 21 99999-9999" required />
          </div>
          <div>
            <label for="gigiMessage">${t("gigi_lbl_msg")}</label>
            <textarea id="gigiMessage" name="message" placeholder="..." required></textarea>
          </div>
          <button class="gigiSend" type="submit">${t("gigi_btn")}</button>
          <small style="color:rgba(0,0,0,.55);font-weight:800">${t("gigi_note")}</small>
        </form>
      </div>
    </div>
  `;

  const boxImg = document.getElementById("gigiImgBox");
  if (boxImg) {
    boxImg.innerHTML = `<img src="assets/gigi.png" alt="Gigi" style="width:100%;height:100%;object-fit:cover;border-radius:18px" />`;
    boxImg.style.border = "none";
    boxImg.style.background = "transparent";
  }

  const form = document.getElementById("gigiForm");
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
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(e => { 
      if (e.isIntersecting) {
        e.target.classList.add("is-in"); 
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.05, rootMargin: "50px" });
  
  els.forEach(el => io.observe(el));

  setTimeout(() => {
    els.forEach(el => el.classList.add("is-in"));
  }, 150);
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
      el.innerHTML = DICT[key][currentLang] || DICT[key].pt;
    }
  });
}

(function init(){
  setupProgress();
  mountHeaderFooter();
  const page = document.body.getAttribute("data-page");

  if (page === "home") mountHome();
  if (page && SITE.pages[page]) mountPageCards(page);

  mountGigiWidget();
  setupGigiFloat();
  translateHtmlElements(); 
  
  requestAnimationFrame(() => document.body.classList.add("is-ready"));
  
  setupHeaderScroll();
  setupHeroParallax();
  setupReveal();
})();
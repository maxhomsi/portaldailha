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
  btn_passeios: { pt: "Ver Passeios", en: "View Tours", es: "Ver Paseos" },
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
  
  /* DICA ATUALIZADA DA PÁGINA DE PASSEIOS COM LINK PARA A GIGI */
  tip_passeios: { 
    pt: "<a href='#' onclick='document.getElementById(\"gigiFabBtn\").click(); return false;' style='color:#2f9c49; text-decoration:underline'>Fale com a Gigi</a> para checar a tábua de marés e as melhores condições para o seu passeio!", 
    en: "<a href='#' onclick='document.getElementById(\"gigiFabBtn\").click(); return false;' style='color:#2f9c49; text-decoration:underline'>Talk to Gigi</a> to check the tide table and the best conditions for your tour!", 
    es: "¡<a href='#' onclick='document.getElementById(\"gigiFabBtn\").click(); return false;' style='color:#2f9c49; text-decoration:underline'>Habla con Gigi</a> para consultar la tabla de mareas y las mejores condiciones para tu paseo!" 
  },
  
  /* 20 DICAS ALEATÓRIAS DA CAPI (HOME) */
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

  /* TEXTOS PÁGINAS "A ILHA" */
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
  pg_me_p: { pt: "Descubra qual estação do ano combina mais com o seu roteiro.", en: "Discover which season best suits your itinerary.", es: "Descubre qué estación se adapta mejor a tu itinerario." },
  me_h2: { pt: "O ano todo é incrível!", en: "All year round is amazing!", es: "¡Todo el año es increíble!" },
  me_p1: { pt: "Por estar no Rio de Janeiro, a ilha é ótima o ano todo. No verão (Dezembro a Março), o clima é ideal para curtir os bares e um chope gelado na lagoa. No outono e inverno (Abril a Agosto), as temperaturas mais amenas deixam as caminhadas e trilhas ecológicas muito mais confortáveis. Dica de ouro: Chegue sempre por volta das 16h para não perder o pôr do sol mágico!", en: "Being in Rio, the island is great year-round. In summer (Dec-Mar), it's ideal for enjoying bars and cold beer. In autumn/winter (Apr-Aug), milder temperatures make walking and trails comfortable. Golden tip: Always arrive around 4 PM to not miss the magical sunset!", es: "Al estar en Río, la isla es genial todo el año. En verano (Dic-Mar), es ideal para disfrutar de los bares y una cerveza fría. En otoño/invierno (Abr-Ago), las temperaturas suaves hacen que caminar y los senderos sean cómodos. Consejo de oro: ¡Llega siempre a las 16:00 para el mágico atardecer!" },

  /* TEXTOS PASSEIOS E ROTAS */
  pass_c1_t: { pt: "Ilhas Tijucas", en: "Tijucas Islands", es: "Islas Tijucas" },
  pass_c1_d: { pt: "Passeio de barco até o arquipélago. Águas cristalinas perfeitas para um mergulho e fotos incríveis.", en: "Boat tour to the archipelago. Crystal clear waters perfect for a swim and incredible photos.", es: "Paseo en barco hasta el archipiélago. Aguas cristalinas perfectas para un chapuzón y fotos increíbles." },
  pass_c1_l: { pt: "Ver roteiro", en: "View route", es: "Ver ruta" },
  pg_it_h1: { pt: "Ilhas Tijucas", en: "Tijucas Islands", es: "Islas Tijucas" },
  pg_it_p: { pt: "Águas cristalinas e vida marinha a poucos minutos da costa.", en: "Crystal clear waters and marine life just minutes from the coast.", es: "Aguas cristalinas y vida marina a pocos minutos de la costa." },
  it_h2: { pt: "O Caribe Carioca", en: "The Carioca Caribbean", es: "El Caribe Carioca" },
  it_p1: { pt: "O arquipélago das Ilhas Tijucas é um paraíso escondido no Rio de Janeiro. O passeio de barco leva você a águas incrivelmente claras, perfeitas para mergulho de flutuação, stand up paddle ou simplesmente para relaxar e tirar fotos deslumbrantes.", en: "The Tijucas Islands archipelago is a hidden paradise in Rio de Janeiro. The boat tour takes you to incredibly clear waters, perfect for snorkeling, stand up paddle boarding, or simply relaxing and taking stunning photos.", es: "El archipiélago de las Islas Tijucas es un paraíso escondido en Río de Janeiro. El paseo en barco lo lleva a aguas increíblemente claras, perfectas para hacer snorkel, stand up paddle o simplemente relajarse y tomar fotos impresionantes." },

  pass_c2_t: { pt: "Pantanal Carioca", en: "Pantanal Carioca", es: "Pantanal Carioca" },
  pass_c2_d: { pt: "Explore a rica biodiversidade da lagoa, com observação de aves, jacarés e capivaras em um trajeto relaxante.", en: "Explore the lagoon's rich biodiversity, observing birds, alligators, and capybaras on a relaxing route.", es: "Explora la rica biodiversidad de la laguna, observando aves, caimanes y capibaras en un trayecto relajante." },
  pass_c2_l: { pt: "Ver roteiro", en: "View route", es: "Ver ruta" },
  pg_pc_h1: { pt: "Pantanal Carioca", en: "Pantanal Carioca", es: "Pantanal Carioca" },
  pg_pc_p: { pt: "Um safári urbano inesquecível pelo complexo de lagoas da Barra.", en: "An unforgettable urban safari through the Barra lagoon complex.", es: "Un safari urbano inolvidable por el complejo de lagunas de Barra." },
  pc_h2: { pt: "Conexão com a Natureza", en: "Connection with Nature", es: "Conexión con la Naturaleza" },
  pc_p1: { pt: "Navegar pelo Pantanal Carioca é como entrar em outro mundo. Durante o trajeto pelos canais e manguezais calmos, é comum avistarmos capivaras, jacarés-de-papo-amarelo, garças e diversas outras aves. É um passeio relaxante e educativo para todas as idades.", en: "Sailing through the Pantanal Carioca is like entering another world. During the journey through the calm canals and mangroves, it is common to spot capybaras, broad-snouted caimans, herons, and various other birds. It is a relaxing and educational tour for all ages.", es: "Navegar por el Pantanal Carioca es como entrar en otro mundo. Durante el trayecto por los canales y manglares tranquilos, es común avistar capibaras, caimanes de hocico ancho, garzas y diversas otras aves. Es un paseo relajante y educativo para todas las edades." },

  pass_c3_t: { pt: "Reserva", en: "Reserva Beach", es: "Playa Reserva" },
  pass_c3_d: { pt: "Navegue pelos canais até chegar à bela e preservada Praia da Reserva. Um contato imersivo com a natureza.", en: "Sail through the canals until you reach the beautiful and preserved Reserva Beach. Immersive contact with nature.", es: "Navega por los canales hasta llegar a la hermosa y conservada Playa Reserva. Contacto inmersivo con la naturaleza." },
  pass_c3_l: { pt: "Ver roteiro", en: "View route", es: "Ver ruta" },
  pg_res_h1: { pt: "Praia da Reserva", en: "Reserva Beach", es: "Playa Reserva" },
  pg_res_p: { pt: "Navegue pelos canais até uma das praias mais limpas e preservadas do Rio.", en: "Sail through the canals to one of the cleanest and most preserved beaches in Rio.", es: "Navega por los canales hasta una de las playas más limpias y preservadas de Río." },
  res_h2: { pt: "Tranquilidade e Mar", en: "Tranquility and Sea", es: "Tranquilidad y Mar" },
  res_p1: { pt: "O passeio até a Praia da Reserva oferece o melhor dos dois mundos: a viagem contemplativa pelas águas mansas da lagoa e a chegada em uma extensa faixa de areia branca e mar cristalino, longe da agitação da cidade.", en: "The tour to Reserva Beach offers the best of both worlds: the contemplative journey through the calm waters of the lagoon and the arrival at an extensive strip of white sand and crystal clear sea, far from the hustle and bustle of the city.", es: "El paseo hasta la Playa de la Reserva ofrece lo mejor de ambos mundos: el viaje contemplativo por las aguas tranquilas de la laguna y la llegada a una extensa franja de arena blanca y mar cristalino, lejos del bullicio de la ciudad." },

  pass_c4_t: { pt: "Jet-Ski", en: "Jet-Ski", es: "Moto de Agua" },
  pass_c4_d: { pt: "Para os aventureiros! Passeios guiados e aluguel de Jet-Ski para explorar a lagoa com muita adrenalina.", en: "For the adventurous! Guided tours and Jet-Ski rentals to explore the lagoon with lots of adrenaline.", es: "¡Para los aventureros! Paseos guiados y alquiler de motos de agua para explorar la laguna con mucha adrenalina." },
  pass_c4_l: { pt: "Ver opções", en: "View options", es: "Ver opciones" },
  pg_js_h1: { pt: "Passeio de Jet-Ski", en: "Jet-Ski Tour", es: "Paseo en Moto de Agua" },
  pg_js_p: { pt: "Aventura e adrenalina explorando as lagoas no seu próprio ritmo.", en: "Adventure and adrenaline exploring the lagoons at your own pace.", es: "Aventura y adrenalina explorando las lagunas a tu propio ritmo." },
  js_h2: { pt: "Acelere na Lagoa", en: "Accelerate on the Lagoon", es: "Acelera en la Laguna" },
  js_p1: { pt: "Para quem busca emoção, o passeio de Jet-Ski é a escolha perfeita. Oferecemos opções de passeios guiados pelos principais pontos do complexo lagunar, garantindo segurança, diversão e uma vista privilegiada da natureza ao redor.", en: "For those looking for thrills, the Jet-Ski tour is the perfect choice. We offer guided tour options through the main points of the lagoon complex, ensuring safety, fun, and a privileged view of the surrounding nature.", es: "Para quienes buscan emoción, el paseo en Moto de Agua es la elección perfecta. Ofrecemos opciones de paseos guiados por los puntos principales del complejo lagunar, garantizando seguridad, diversión y una vista privilegiada de la naturaleza circundante." },

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

  hosp_c1_t: { pt: "Pousadas aconchegantes", en: "Cozy inns", es: "Posadas acogedoras" },
  hosp_c1_d: { pt: "Opções para descansar e aproveitar a ilha.", en: "Options to rest and enjoy the island.", es: "Opciones para descansar y disfrutar de la isla." },
  hosp_c1_l: { pt: "Ver opções", en: "View options", es: "Ver opciones" },
  hosp_c2_t: { pt: "Melhor localização", en: "Best location", es: "Mejor ubicación" },
  hosp_c2_d: { pt: "Dicas para ficar perto do que você quer fazer.", en: "Tips to stay close to what you want to do.", es: "Consejos para estar cerca de lo que quieres hacer." },
  hosp_c2_l: { pt: "Guia", en: "Guide", es: "Guía" },
  hosp_c3_t: { pt: "Viagem romântica", en: "Romantic trip", es: "Viaje romántico" },
  hosp_c3_d: { pt: "Sugestões para casal e momentos especiais.", en: "Suggestions for couples and special moments.", es: "Sugerencias para parejas y momentos especiales." },
  hosp_c3_l: { pt: "Roteiro", en: "Itinerary", es: "Itinerario" },
  hosp_c4_t: { pt: "Custo-benefício", en: "Cost-benefit", es: "Costo-beneficio" },
  hosp_c4_d: { pt: "Como equilibrar conforto e preço.", en: "How to balance comfort and price.", es: "Cómo equilibrar comodidad y precio." },
  hosp_c4_l: { pt: "Ver opções", en: "View options", es: "Ver opciones" },

  faz_c1_t: { pt: "Passeios de barco", en: "Boat tours", es: "Paseos en barco" },
  faz_c1_d: { pt: "O clássico imperdível para primeiro dia.", en: "The unmissable classic for the first day.", es: "El clásico imperdible para el primer día." },
  faz_c1_l: { pt: "Ver rotas", en: "View routes", es: "Ver rutas" },
  faz_c2_t: { pt: "Comer bem", en: "Eat well", es: "Comer bien" },
  faz_c2_d: { pt: "Experiências gastronômicas locais.", en: "Local gastronomic experiences.", es: "Experiencias gastronómicas locales." },
  faz_c2_l: { pt: "Ver opções", en: "View options", es: "Ver opciones" },
  faz_c3_t: { pt: "Contato com a natureza", en: "Contact with nature", es: "Contacto con la naturaleza" },
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
    { href: "o-que-fazer.html", label: t("nav_fazer") },
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
    { title:t("hm_c1_t"), desc:t("hm_c1_d"), linkLabel:t("hm_c1_l"), href:"passeios-rotas.html", img:"assets/card-passeios.jpg", icon:"boat" },
    { title:t("hm_c2_t"), desc:t("hm_c2_d"), linkLabel:t("hm_c2_l"), href:"comer-beber.html", img:"assets/card-comer.jpg", icon:"fork" },
    { title:t("hm_c3_t"), desc:t("hm_c3_d"), linkLabel:t("hm_c3_l"), href:"o-que-fazer.html#natureza", img:"assets/card-natureza.jpg", icon:"leaf" },
    { title:t("hm_c4_t"), desc:t("hm_c4_d"), linkLabel:t("hm_c4_l"), href:"hospedagem.html", img:"assets/card-hospedagem.jpg", icon:"bed" },
  ],
  pages: {
    "a-ilha": [
      { title:t("ilha_c1_t"), desc:t("ilha_c1_d"), linkLabel:t("ilha_c1_l"), href:"como-chegar.html", img:"assets/comochegar.jpg", icon:"boat" },
      { title:t("ilha_c2_t"), desc:t("ilha_c2_d"), linkLabel:t("ilha_c2_l"), href:"historia-cultura.html", img:"assets/historia.jpg", icon:"leaf" },
      { title:t("ilha_c3_t"), desc:t("ilha_c3_d"), linkLabel:t("ilha_c3_l"), href:"boas-praticas.html", img:"assets/boaspraticas.jpg", icon:"bed" },
      { title:t("ilha_c4_t"), desc:t("ilha_c4_d"), linkLabel:t("ilha_c4_l"), href:"melhor-epoca.html", img:"assets/melhorepoca.jpg", icon:"fork" },
    ],
    "passeios-rotas": [
      { title:t("pass_c1_t"), desc:t("pass_c1_d"), linkLabel:t("pass_c1_l"), href:"ilhas-tijucas.html", img:"assets/ilhastijucas.jpg", icon:"boat" },
      { title:t("pass_c2_t"), desc:t("pass_c2_d"), linkLabel:t("pass_c2_l"), href:"pantanal-carioca.html", img:"assets/pantanalcarioca.jpg", icon:"leaf" },
      { title:t("pass_c3_t"), desc:t("pass_c3_d"), linkLabel:t("pass_c3_l"), href:"reserva.html", img:"assets/reserva.jpg", icon:"boat" },
      { title:t("pass_c4_t"), desc:t("pass_c4_d"), linkLabel:t("pass_c4_l"), href:"jet-ski.html", img:"assets/jetski.jpg", icon:"boat" },
    ],
    "comer-beber": [
      { title:t("com_c1_t"), desc:t("com_c1_d"), linkLabel:t("com_c1_l"), href:"passeios-rotas.html", img:"assets/card-comer.jpg", icon:"fork" },
      { title:t("com_c2_t"), desc:t("com_c2_d"), linkLabel:t("com_c2_l"), href:"o-que-fazer.html", img:"assets/card-passeios.jpg", icon:"boat" },
      { title:t("com_c3_t"), desc:t("com_c3_d"), linkLabel:t("com_c3_l"), href:"passeios-rotas.html", img:"assets/card-natureza.jpg", icon:"leaf" },
      { title:t("com_c4_t"), desc:t("com_c4_d"), linkLabel:t("com_c4_l"), href:"passeios-rotas.html", img:"assets/card-hospedagem.jpg", icon:"bed" },
    ],
    "hospedagem": [
      { title:t("hosp_c1_t"), desc:t("hosp_c1_d"), linkLabel:t("hosp_c1_l"), href:"passeios-rotas.html", img:"assets/card-hospedagem.jpg", icon:"bed" },
      { title:t("hosp_c2_t"), desc:t("hosp_c2_d"), linkLabel:t("hosp_c2_l"), href:"passeios-rotas.html", img:"assets/card-natureza.jpg", icon:"leaf" },
      { title:t("hosp_c3_t"), desc:t("hosp_c3_d"), linkLabel:t("hosp_c3_l"), href:"passeios-rotas.html", img:"assets/card-comer.jpg", icon:"fork" },
      { title:t("hosp_c4_t"), desc:t("hosp_c4_d"), linkLabel:t("hosp_c4_l"), href:"passeios-rotas.html", img:"assets/card-passeios.jpg", icon:"boat" },
    ],
    "o-que-fazer": [
      { title:t("faz_c1_t"), desc:t("faz_c1_d"), linkLabel:t("faz_c1_l"), href:"passeios-rotas.html", img:"assets/card-passeios.jpg", icon:"boat" },
      { title:t("faz_c2_t"), desc:t("faz_c2_d"), linkLabel:t("faz_c2_l"), href:"comer-beber.html", img:"assets/card-comer.jpg", icon:"fork" },
      { title:t("faz_c3_t"), desc:t("faz_c3_d"), linkLabel:t("faz_c3_l"), href:"o-que-fazer.html#natureza", img:"assets/card-natureza.jpg", icon:"leaf" },
      { title:t("faz_c4_t"), desc:t("faz_c4_d"), linkLabel:t("faz_c4_l"), href:"hospedagem.html", img:"assets/card-hospedagem.jpg", icon:"bed" },
    ],
  },
  naturezaCards: [
    { title:t("nat_c1_t"), desc:t("nat_c1_d"), linkLabel:t("nat_c1_l"), href:"passeios-rotas.html", img:"assets/card-natureza.jpg", icon:"leaf" },
    { title:t("nat_c2_t"), desc:t("nat_c2_d"), linkLabel:t("nat_c2_l"), href:"passeios-rotas.html", img:"assets/card-passeios.jpg", icon:"boat" },
  ],
};

const WHATSAPP = { toNumber: "5521965666913" };

const GIGI = {
  whatsappNumber: "5521965666913",
  fabText: t("gigi_fab"),
  title: "Gigi",
  subtitle: "",
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

function mountNatureCards() {
  const box = document.getElementById("natureCards");
  if (box) box.innerHTML = SITE.naturezaCards.map((c,i)=>cardHtml(c,i)).join("");
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

/* =========================================================
   TRADUTOR (Agora usa innerHTML para permitir o link da Capi)
   ========================================================= */
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
  if (page === "o-que-fazer") mountNatureCards();

  mountGigiWidget();
  setupGigiFloat();
  translateHtmlElements(); 
  
  requestAnimationFrame(()=>document.body.classList.add("is-ready"));
  setupHeaderScroll();
  setupHeroParallax();
  setupReveal();
})();
/* =========================================================
   CÉREBRO DA GIGI - BASE DE CONHECIMENTO COMPLETA
   Ilha da Gigóia | Versão 2.0 — Maio 2026
   Baseado em: portal oficial + Visit Rio + blogs + TripAdvisor
   ========================================================= */

const GIGI_BRAIN = [

  // ==========================================
  // 1. GATILHOS DIRETOS PARA O WHATSAPP
  // ==========================================
  {
    keywords: ["falar com atendente", "humano", "pessoa", "telefone", "contato", "falar com alguem", "equipe", "atendimento", "atendente", "human", "person", "contact", "speak to someone", "team", "hablar con alguien", "equipo", "contacto", "zap", "whatsapp"],
    reply: {
      pt: "Com certeza! Vou te passar direto para a nossa equipe humana. É só clicar no botão do WhatsApp logo abaixo e mandar sua mensagem! 😊",
      en: "Sure! I'll connect you directly to our human team. Just click the WhatsApp button below and send your message! 😊",
      es: "¡Claro! Te conectaré directamente con nuestro equipo humano. ¡Solo haz clic en el botón de WhatsApp abajo y envía tu mensaje! 😊",
      zh: "当然！我会直接将您转接给我们的人工团队。只需点击下方的WhatsApp按钮并发送您的消息！😊"
    },
    showWhatsapp: true
  },
  {
    keywords: ["reservar", "reserva", "agendar", "agendamento", "marcar", "orcamento", "orçamento", "preco", "preço", "valor", "comprar", "book", "reservation", "schedule", "price", "cost", "buy", "reservación", "programar", "precio", "costo"],
    reply: {
      pt: "Excelente! Para consultar valores exatos, disponibilidade e fazer a sua reserva, o ideal é falar direto com a nossa equipe no WhatsApp. É só clicar no botão aqui embaixo!",
      en: "Excellent! To check exact prices, availability, and make your reservation, it's best to speak directly with our team on WhatsApp. Just click the button below!",
      es: "¡Excelente! Para consultar precios exactos, disponibilidad y hacer tu reserva, lo ideal es hablar directamente con nuestro equipo en WhatsApp. ¡Solo haz clic en el botón de abajo!",
      zh: "太棒了！要查询确切价格、空房情况并完成预订，最好直接通过WhatsApp与我们的团队联系。只需点击下方的按钮！"
    },
    showWhatsapp: true
  },

  // ==========================================
  // 2. FALSOS POSITIVOS E CORREÇÕES DE CONTEXTO
  // ==========================================
  {
    keywords: ["sushi", "japones", "japa", "sashimi", "temaki", "yakisoba", "rodizio de sushi", "japanese", "japonesa"],
    reply: {
      pt: "Atualmente não temos restaurantes especializados em culinária japonesa/sushi na Ilha da Gigóia. 🍣 Mas se você gosta de peixe fresco, vai amar a alta gastronomia de frutos do mar do <a href='restaurante-ocya.html'>Ocyá</a> ou do <a href='restaurante-laguna.html'>Laguna</a>!",
      en: "Currently, we don't have Japanese cuisine/sushi restaurants on Gigóia Island. 🍣 But if you like fresh fish, try the high-end seafood at <a href='restaurante-ocya.html'>Ocyá</a> or <a href='restaurante-laguna.html'>Laguna</a>!",
      es: "Actualmente no tenemos restaurantes de sushi en la Isla de Gigóia. 🍣 ¡Pero si te gusta el pescado fresco, prueba la alta gastronomía de <a href='restaurante-ocya.html'>Ocyá</a> o <a href='restaurante-laguna.html'>Laguna</a>!",
      zh: "目前吉戈亚岛上没有专门的日本料理/寿司餐厅。🍣 但如果您喜欢新鲜的鱼，一定会喜欢<a href='restaurante-ocya.html'>欧希亚</a>（米其林认可）或<a href='restaurante-laguna.html'>拉古纳</a>的高端海鲜！"
    }
  },
  {
    keywords: ["baleia", "tubarao", "golfinho", "pinguim", "leao marinho", "whale", "shark", "dolphin", "penguin", "sea lion", "ballena", "tiburon", "delfin", "pinguino", "lobo marino"],
    reply: {
      pt: "Hahaha! Na nossa lagoa não tem baleia nem tubarão! 🐋 Aqui a água é abrigada. As grandes estrelas da nossa fauna são os jacarés-de-papo-amarelo, as capivaras e as garças.",
      en: "Hahaha! There are no whales or sharks in our lagoon! 🐋 The big stars of our fauna are the broad-snouted caimans, capybaras, and herons.",
      es: "¡Jajaja! ¡En nuestra laguna no hay ballenas ni tiburones! 🐋 Las grandes estrellas de nuestra fauna son los caimanes, las capibaras y las garzas.",
      zh: "哈哈哈！我们的泻湖里没有鲸鱼或鲨鱼！🐋 这里的水域很平静。我们动物群的明星是宽吻凯门鳄、水豚和苍鹭。"
    }
  },
  {
    keywords: ["nadar", "banho", "mergulhar na lagoa", "agua limpa lagoa", "swim lagoon", "bathe lagoon", "bañarse laguna"],
    reply: {
      pt: "Antigamente a lagoa era límpida e os moradores nadavam aqui, mas hoje, devido ao assoreamento e à falta de tratamento de esgoto, NÃO recomendamos o banho na lagoa. 🚫 Se quiser mergulhar em águas cristalinas, agende nosso passeio para as <a href='ilhas-tijucas.html'>Ilhas Tijucas</a> — o nosso Caribe Carioca!",
      en: "In the past, the lagoon was crystal clear, but today, due to silting and sewage issues, we DO NOT recommend swimming in it. 🚫 For crystal-clear water, book our <a href='ilhas-tijucas.html'>Tijucas Islands</a> tour!",
      es: "Antiguamente la laguna era cristalina, pero hoy NO recomendamos bañarse en ella. 🚫 ¡Para aguas cristalinas, reserva nuestro tour a las <a href='ilhas-tijucas.html'>Islas Tijucas</a>!",
      zh: "过去泻湖水质清澈，但如今由于淤积和污水问题，我们不建议在泻湖游泳。🚫 如果您想在清澈水域潜水，请预订<a href='ilhas-tijucas.html'>蒂茹卡斯群岛</a>之旅！"
    }
  },
  {
    keywords: ["praia de areia", "praia na ilha", "tem praia", "beach", "sandy beach", "playa", "playa de arena"],
    reply: {
      pt: "A Ilha da Gigóia é cercada pela Lagoa da Tijuca, não tem praia de mar com ondas. 🌴 Mas os barqueiros podem te deixar a apenas 5 minutinhos de caminhada da Praia da Barra da Tijuca — uma das maiores praias do Brasil!",
      en: "Gigóia Island is surrounded by the lagoon, it has no ocean beach. 🌴 However, boat operators can drop you just 5 minutes from Barra da Tijuca Beach — one of Brazil's largest beaches!",
      es: "La Isla de Gigóia está rodeada por la laguna, no tiene playa de mar. 🌴 ¡Pero el bote puede dejarte a solo 5 minutos a pie de la Playa de Barra da Tijuca!",
      zh: "吉戈亚岛被蒂茹卡泻湖环绕，没有有浪的海滩。🌴 但船夫可以在5分钟步行路程内送您到巴拉达蒂茹卡海滩——巴西最长的海滩之一！"
    }
  },

  // ==========================================
  // 3. SAUDAÇÕES E INTERAÇÕES BÁSICAS
  // ==========================================
  {
    keywords: ["oi", "ola", "bom dia", "boa tarde", "boa noite", "tudo bem", "hey", "eae", "opa", "alo", "salve", "hello", "hi", "good morning", "good afternoon", "good evening", "how are you", "hola", "buenos dias", "buenas tardes", "buenas noches", "que tal"],
    reply: {
      pt: "Olá! Tudo ótimo por aqui! 😊 Sou a Gigi, a assistente virtual oficial do Portal Ilha da Gigóia. Como posso te ajudar a planejar seu dia perfeito na Veneza Carioca?",
      en: "Hello! Everything is great here! 😊 I'm Gigi, the official virtual assistant of the Gigóia Island Portal. How can I help you plan your perfect day on the 'Carioca Venice'?",
      es: "¡Hola! ¡Todo genial por aquí! 😊 Soy Gigi, la asistente virtual oficial del Portal Isla de Gigóia. ¿Cómo puedo ayudarte a planificar tu día perfecto?",
      zh: "您好！这里一切都很棒！😊 我是吉吉，吉戈亚岛门户网站的官方虚拟助手。我今天能帮您规划在\"卡里奥卡威尼斯\"的完美一天吗？"
    }
  },
  {
    keywords: ["obrigado", "obrigada", "valeu", "show", "perfeito", "otimo", "top", "legal", "agradecido", "incrivel", "maravilha", "thanks", "thank you", "great", "perfect", "awesome", "gracias", "genial", "perfecto", "increible"],
    reply: {
      pt: "Por nada! Fico muito feliz em ajudar. 🌴 Se precisar de mais alguma dica, quiser saber de algum restaurante ou agendar um passeio, é só me chamar!",
      en: "You're welcome! I'm very happy to help. 🌴 If you need any more tips, want to know about a restaurant, or book a tour, just let me know!",
      es: "¡De nada! Me alegra mucho ayudar. 🌴 Si necesitas algún consejo más o quieres reservar un tour, ¡solo dímelo!",
      zh: "不客气！很高兴能帮上忙。🌴 如果您需要更多建议或想预订游览，请随时联系我！"
    }
  },
  {
    keywords: ["quem e voce", "robo", "inteligencia artificial", "bot", "assistente", "vc e real", "who are you", "robot", "artificial intelligence", "assistant", "quien eres", "eres real", "asistente"],
    reply: {
      pt: "Eu sou a Gigi, a mascote e assistente virtual do Portal Ilha da Gigóia! 🕊️ Fui programada para conhecer cada detalhe histórico, gastronômico e turístico daqui. Se eu não souber algo, te passo para nossa equipe humana, combinado?",
      en: "I am Gigi, the mascot and virtual assistant of the Gigóia Island Portal! 🕊️ I was programmed to know every historical, gastronomic, and tourist detail here. If I don't know something, I'll connect you to our human team!",
      es: "¡Soy Gigi, la mascota y asistente virtual del Portal Isla Gigóia! 🕊️ Fui programada para conocer cada detalle histórico, gastronómico y turístico. Si no sé algo, te paso a nuestro equipo humano.",
      zh: "我是吉吉，吉戈亚岛门户网站的吉祥物和虚拟助手！🕊️ 我被编程来了解这里每一个历史、美食和旅游细节。如果我不知道某些事情，我会把您转接给我们的人工团队！"
    }
  },

  // ==========================================
  // 4. PERGUNTAS GENÉRICAS (CORINGAS)
  // ==========================================
  {
    keywords: ["comer", "restaurante", "fome", "almoco", "jantar", "comida", "onde comer", "gastronomia", "alimentacao", "eat", "restaurant", "lunch", "dinner", "food", "where to eat", "donde comer", "almuerzo", "cena"],
    reply: {
      pt: "A Gigóia é um paraíso gastronômico! 🍤 Alta gastronomia no <a href='restaurante-ocya.html'>Ocyá</a> (Guia Michelin), o pioneiro <a href='restaurante-laguna.html'>Laguna</a> (desde 2002), o animado <a href='restaurante-deck-bar.html'>Deck Bar</a> com música ao vivo, e muito mais. Veja a lista completa em <a href='restaurantes.html'>Onde Comer</a>. 💡 Dica: reserve mesa com antecedência aos fins de semana!",
      en: "Gigóia is a gastronomic paradise! 🍤 Fine dining at <a href='restaurante-ocya.html'>Ocyá</a> (Michelin Guide), the pioneer <a href='restaurante-laguna.html'>Laguna</a> (since 2002), the lively <a href='restaurante-deck-bar.html'>Deck Bar</a> with live music. See the full list at <a href='restaurantes.html'>Where to Eat</a>. 💡 Tip: book in advance on weekends!",
      es: "¡Gigóia es un paraíso gastronómico! 🍤 Alta gastronomía en <a href='restaurante-ocya.html'>Ocyá</a> (Guía Michelin), el pionero <a href='restaurante-laguna.html'>Laguna</a>, el animado <a href='restaurante-deck-bar.html'>Deck Bar</a>. Mira la lista completa en <a href='restaurantes.html'>Dónde Comer</a>. 💡 ¡Reserva con anticipación los fines de semana!",
      zh: "吉戈亚是美食天堂！🍤 <a href='restaurante-ocya.html'>欧希亚</a>（米其林认可）、开创先河的<a href='restaurante-laguna.html'>拉古纳</a>（自2002年）、充满活力的<a href='restaurante-deck-bar.html'>甲板酒吧</a>。查看完整列表：<a href='restaurantes.html'>餐饮指南</a>。💡提示：周末请提前预订！"
    }
  },
  {
    keywords: ["passeio", "passear", "tour", "roteiro", "fazer o que", "o que fazer", "atividade", "turismo", "what to do", "excursion", "que hacer", "paseo", "actividad"],
    reply: {
      pt: "Os passeios de barco são a alma da ilha! 🚤 Recomendo o tour pelo <a href='pantanal-carioca.html'>Pantanal Carioca</a> (jacarés e capivaras de perto!) e o mergulho nas <a href='ilhas-tijucas.html'>Ilhas Tijucas</a>. Também temos <a href='jet-ski.html'>Jet Ski</a>, caiaque e stand-up paddle. Veja tudo em <a href='passeios-rotas.html'>Passeios & Rotas</a>!",
      en: "Boat tours are the soul of the island! 🚤 I recommend the <a href='pantanal-carioca.html'>Carioca Pantanal</a> tour (caimans and capybaras up close!) and diving at <a href='ilhas-tijucas.html'>Tijucas Islands</a>. We also have <a href='jet-ski.html'>Jet Ski</a>, kayak and SUP. See everything at <a href='passeios-rotas.html'>Tours & Routes</a>!",
      es: "¡Los paseos en bote son el alma de la isla! 🚤 Recomiendo el tour por el <a href='pantanal-carioca.html'>Pantanal Carioca</a> y bucear en las <a href='ilhas-tijucas.html'>Islas Tijucas</a>. También tenemos <a href='jet-ski.html'>Jet Ski</a> y kayak. ¡Ve todo en <a href='passeios-rotas.html'>Paseos & Rutas</a>!",
      zh: "乘船游览是小岛的灵魂！🚤 我推荐<a href='pantanal-carioca.html'>里约潘塔纳尔</a>之旅（近距离观看凯门鳄和水豚！）和<a href='ilhas-tijucas.html'>蒂茹卡斯群岛</a>潜水。还有<a href='jet-ski.html'>摩托艇</a>、皮划艇和立式桨板。查看所有选项：<a href='passeios-rotas.html'>游览与路线</a>！"
    },
    showWhatsapp: true
  },
  {
    keywords: ["dormir", "pousada", "hotel", "hospedagem", "ficar", "pernoite", "onde dormir", "onde ficar", "sleep", "inn", "accommodation", "stay", "where to sleep", "posada", "alojamiento", "donde dormir"],
    reply: {
      pt: "Dormir aqui é uma paz! 🛏️ Temos pousadas como a <a href='pousada-barra.html'>Pousada Barra da Tijuca</a> e a <a href='pousada-marisis.html'>Pousada Marísis</a>, além de casas de temporada incríveis. Acesse <a href='hospedagem.html'>Hospedagem</a> para ver todas as opções!",
      en: "Sleeping here is pure peace! 🛏️ We have inns like <a href='pousada-barra.html'>Pousada Barra da Tijuca</a> and <a href='pousada-marisis.html'>Pousada Marísis</a>, plus amazing vacation homes. Visit <a href='hospedagem.html'>Accommodation</a> for all options!",
      es: "¡Dormir aquí es pura paz! 🛏️ Tenemos posadas como <a href='pousada-barra.html'>Pousada Barra da Tijuca</a> y <a href='pousada-marisis.html'>Pousada Marísis</a>, además de increíbles casas Airbnb. ¡Visita <a href='hospedagem.html'>Alojamiento</a>!",
      zh: "在这里睡觉是一种享受！🛏️ 我们有<a href='pousada-barra.html'>巴拉旅馆</a>和<a href='pousada-marisis.html'>玛丽西斯旅馆</a>等迷人的旅馆，以及令人惊叹的Airbnb度假屋。查看所有选项：<a href='hospedagem.html'>住宿</a>！"
    },
    showWhatsapp: true
  },

  // ==========================================
  // 5. HISTÓRIA, GEOLOGIA E CURIOSIDADES
  // ==========================================
  {
    keywords: ["historia", "origem", "formacao", "geologia", "criacao", "passado", "17 mil anos", "pedra branca", "history", "origin", "geology", "curiosidade", "fatos", "curiosity", "facts"],
    reply: {
      pt: "A história é fascinante! 📜 Geólogos dizem que há 17 mil anos o nível do mar era 70 metros mais baixo e batia no maciço da Pedra Branca. A erosão e o assoreamento formaram a praia da Barra, as lagoas e o nosso arquipélago. Saiba mais em <a href='historia-cultura.html'>História & Cultura</a>.",
      en: "The history is fascinating! 📜 Geologists say 17,000 years ago the sea level was 70m lower, reaching the Pedra Branca mountains. Erosion gradually formed Barra beach, the lagoons, and our archipelago. Learn more at <a href='historia-cultura.html'>History & Culture</a>.",
      es: "¡La historia es fascinante! 📜 Los geólogos dicen que hace 17.000 años el mar estaba 70m más bajo. La erosión formó la playa de Barra, las lagunas y nuestro archipiélago. Más info en <a href='historia-cultura.html'>Historia & Cultura</a>.",
      zh: "历史非常迷人！📜 地质学家表示，17000年前海平面比现在低70米，曾到达白石山脉的山脚。侵蚀和淤积形成了巴拉海滩、泻湖和我们的群岛。了解更多：<a href='historia-cultura.html'>历史与文化</a>。"
    }
  },
  {
    keywords: ["veneza carioca apelido", "por que veneza", "venice", "why veneza", "venecia carioca", "por que venecia"],
    reply: {
      pt: "Ganhamos o apelido de 'Veneza Carioca' porque somos um arquipélago cercado de canais navegáveis, sem carros, onde a vida flui em barcos — um clima bucólico que contrasta com o caos da metrópole ao redor. 🚤 É um universo paralelo dentro de Barra da Tijuca!",
      en: "We earned the nickname 'Carioca Venice' because we are an archipelago surrounded by navigable canals, with no cars, where life flows on boats — contrasting with the surrounding metropolis. 🚤 It's a parallel universe inside Barra da Tijuca!",
      es: "Ganamos el apodo de 'Venecia Carioca' porque somos un archipiélago rodeado de canales navegables, sin autos, donde la vida fluye en botes — contrastando con la metrópoli. 🚤 ¡Es un universo paralelo dentro de Barra da Tijuca!",
      zh: "我们获得了\"卡里奥卡威尼斯\"的绰号，因为我们是一个被可通航运河环绕的群岛，没有汽车，生活在船上流淌，田园氛围与周围的大都市形成对比。🚤 这是巴拉达蒂茹卡内的一个平行宇宙！"
    }
  },
  {
    keywords: ["rua dos colibris", "guaimun", "coroneis", "3 ilhas", "tres ilhas", "colibris", "three islands", "tres islas"],
    reply: {
      pt: "Curiosidade incrível: A Gigóia na verdade eram 3 ilhas! 🏝️ A Ilha da Gigóia, a Ilha dos Coronéis e a Ilha Guaimun. O canal que as separava secou com o assoreamento e se transformou na famosa <strong>Rua dos Colibris</strong> — hoje uma das ruas principais da ilha!",
      en: "Amazing fact: Gigóia was actually 3 islands! 🏝️ Gigóia Island, Coronéis Island, and Guaimun Island. The dividing canal silted up and became the famous <strong>Colibris Street</strong> — now one of the island's main streets!",
      es: "¡Dato curioso: Gigóia eran originalmente 3 islas! 🏝️ Isla Gigóia, Isla Coronéis e Isla Guaimun. El canal que las dividía se rellenó y hoy es la famosa <strong>Calle Colibris</strong> — una de las principales calles de la isla.",
      zh: "令人惊叹的事实：吉戈亚实际上曾是3个小岛！🏝️ 吉戈亚岛、科罗内斯岛和瓜伊蒙岛。将它们分隔的运河随时间淤积，现在变成了著名的<strong>蜂鸟街（Rua dos Colibris）</strong>——如今是岛上的主要街道之一！"
    }
  },
  {
    keywords: ["ponte de madeira", "ponte", "avenida das americas", "av das americas", "bridge", "puente"],
    reply: {
      pt: "No passado, a ilha tinha uma ponte de madeira com acesso direto para a Av. das Américas! 🌉 Com o tempo ela foi demolida. Hoje o acesso 100% por barco é o nosso maior charme e o que nos diferencia de tudo.",
      en: "In the past, the island had a wooden bridge connecting to Av. das Américas! 🌉 Over time, it was demolished. Today, the 100% boat-only access is our greatest charm and what sets us apart.",
      es: "En el pasado, la isla tenía un puente de madera conectando con la Av. das Américas. 🌉 Con el tiempo fue demolido. Hoy, el acceso 100% en bote es nuestro mayor encanto.",
      zh: "过去，小岛有一座木桥直接连接到美洲大道！🌉 随着时间的推移，它被拆除了。如今，100%的船只通行是我们最大的魅力，也是让我们与众不同的地方。"
    }
  },
  {
    keywords: ["pescadores", "primeiros moradores", "antigamente", "como comecou", "fishermen", "historia da ilha"],
    reply: {
      pt: "A ocupação começou com pescadores. 🎣 Eles viviam da pesca do camarão em águas tão limpas que se via a areia branca do fundo. O serviço de barcos foi iniciado pelos moradores Antônio, Zé Íris e Zé Grande. Em 2015, Nilson Simão criou o Simão Express com 6 embarcações licenciadas.",
      en: "The island started with fishermen catching shrimp in waters so clear you could see the white sand. 🎣 Boat service was started by residents Antônio, Zé Íris, and Zé Grande. In 2015, Nilson Simão launched the Simão Express boat taxi with 6 licensed boats.",
      es: "La isla comenzó con pescadores atrapando camarones en aguas cristalinas. 🎣 El servicio de botes fue iniciado por los residentes Antônio, Zé Íris y Zé Grande. En 2015, Nilson Simão creó el Simão Express.",
      zh: "小岛的历史始于简单的渔民捕虾生活，当时湖水清澈得可以看到白色沙底。🎣 船只服务由居民安东尼奥、泽·伊里斯和泽·格兰德发起。2015年，尼尔森·西芒创立了西芒快递船出租服务。"
    }
  },
  {
    keywords: ["gigoga", "planta", "nome da ilha", "origem do nome", "plant name", "nombre isla"],
    reply: {
      pt: "Curiosidade sobre o nome! 🌿 A ilha provavelmente se chama Gigóia por causa da <strong>gigoga</strong> — uma planta aquática flutuante que cobre a lagoa em várias áreas. Suas raízes filtram matéria orgânica, ajudando na despoluição e servindo de abrigo para diversas espécies.",
      en: "About the name! 🌿 The island is likely named after the <strong>gigoga</strong> — a floating aquatic plant that covers much of the lagoon. Its roots filter organic matter, helping clean the water and providing habitat for various species.",
      es: "¡Sobre el nombre! 🌿 La isla probablemente lleva el nombre de la <strong>gigoga</strong> — una planta acuática flotante que cubre la laguna. Sus raíces filtran materia orgánica, ayudando a limpiar el agua.",
      zh: "关于名字！🌿 小岛的名字可能来自<strong>gigoga</strong>——一种漂浮水生植物，覆盖泻湖表面的许多区域。它的根部过滤有机物，有助于净化水质，并为各种物种提供栖息地。"
    }
  },
  {
    keywords: ["populacao", "habitantes", "quantas pessoas", "moradores", "population", "inhabitants", "how many people", "residents", "poblacion", "cuantas personas"],
    reply: {
      pt: "A Ilha da Gigóia abriga entre 3 mil e 7 mil moradores (estimativas variam). Todo o arquipélago das 9 ilhas soma quase 12 mil pessoas vivendo sem carros! 🏘️",
      en: "Gigóia Island houses between 3,000 and 7,000 residents (estimates vary). The entire 9-island archipelago totals nearly 12,000 people living car-free! 🏘️",
      es: "La Isla de Gigóia alberga entre 3.000 y 7.000 residentes. ¡Todo el archipiélago suma casi 12.000 personas viviendo sin autos! 🏘️",
      zh: "吉戈亚岛居住着3000至7000名居民（估计数字有所不同）。整个群岛的9个小岛合计有近12000人生活在这个无汽车环境中！🏘️"
    }
  },
  {
    keywords: ["iptu", "uniao", "prefeitura", "ilegal", "non edificando", "decreto", "comprar casa", "terreno", "legalizado"],
    reply: {
      pt: "Curiosidade fundiária: Todos os terrenos pertencem à União. Um decreto de 1981 transformou a área em 'non edificandi'. Por conta da fiscalização precária, a maioria das edificações é considerada irregular e não possui registro formal de IPTU. 🏢",
      en: "Land curiosity: All land belongs to the Federal Government. A 1981 decree banned new construction, so most buildings are considered irregular and lack formal property tax (IPTU) registration. 🏢",
      es: "Curiosidad: Todo el terreno pertenece al Gobierno Federal. Un decreto de 1981 prohibió construir, por lo que la mayoría de las edificaciones son irregulares y no tienen registro formal de impuesto predial. 🏢",
      zh: "土地知识：这里所有土地均属于联邦政府。1981年的法令将该地区列为禁止建设区。由于过去监管不力，大多数建筑被认为是不规则的，没有正式的房产税登记。🏢"
    }
  },
  {
    keywords: ["poluicao", "esgoto", "saneamento", "assoreamento", "pollution", "sewage", "sanitation"],
    reply: {
      pt: "A urbanização desordenada trouxe desafios: mais esgoto sem tratamento nas lagoas, causando poluição e assoreamento. 🌿 Mesmo assim, a natureza resiste bravamente e continua sendo o maior tesouro da ilha!",
      en: "Unregulated urbanization brought challenges: more untreated sewage in the lagoons, causing pollution and silting. 🌿 Despite this, nature resists bravely and remains the island's greatest treasure!",
      es: "La urbanización desordenada trajo desafíos: más aguas residuales sin tratamiento, causando contaminación. 🌿 ¡A pesar de esto, la naturaleza resiste valientemente!",
      zh: "无序城市化带来了挑战：更多未经处理的污水排入泻湖，造成污染和淤积。🌿 尽管如此，自然仍然顽强地抵抗着，继续成为小岛最宝贵的财富！"
    }
  },

  // ==========================================
  // 6. COMO CHEGAR E TRANSPORTE
  // ==========================================
  {
    keywords: ["como chegar", "como ir", "chegar", "acesso", "how to get", "como llegar", "acceso", "directions", "where is", "onde fica"],
    reply: {
      pt: "Chegar é bem simples! 🚇 De metrô: Linha 4, estação <strong>Jardim Oceânico</strong>, saída 'Lagoa'. Poucos metros até o atracadouro. De carro: estacione no <strong>Shopping Barra Point</strong> ou Av. Armando Lombardi, 350. O barco custa R$ 2–6 e funciona 24h. Guia completo em <a href='como-chegar.html'>Como Chegar</a>.",
      en: "Getting there is easy! 🚇 By subway: Line 4, <strong>Jardim Oceânico</strong> station, 'Lagoa' exit — just meters to the dock. By car: park at <strong>Shopping Barra Point</strong> or Av. Armando Lombardi, 350. Boat costs R$ 2–6 and runs 24/7. Full guide at <a href='como-chegar.html'>How to Get Here</a>.",
      es: "¡Llegar es muy sencillo! 🚇 En metro: Línea 4, estación <strong>Jardim Oceânico</strong>, salida 'Lagoa' — a pocos metros del embarcadero. En auto: estaciona en <strong>Shopping Barra Point</strong>. El bote cuesta R$ 2–6 y funciona 24h. Guía completa en <a href='como-chegar.html'>Cómo Llegar</a>.",
      zh: "到达很简单！🚇 乘地铁：4号线，<strong>花园海洋站</strong>，走\"泻湖\"出口——到码头只需几步。开车：停在<strong>巴拉点购物中心</strong>或Av. Armando Lombardi 350号。船票R$ 2-6，全天24小时运营。完整指南：<a href='como-chegar.html'>如何到达</a>。"
    }
  },
  {
    keywords: ["metro", "metrô", "linha 4", "jardim oceanico", "subway", "tube", "underground"],
    reply: {
      pt: "De metrô é a melhor opção! 🚇 Linha 4 (amarela) até <strong>Jardim Oceânico</strong>. Use a saída 'Lagoa' e caminhe ~200 metros em direção à lagoa. Você vai encontrar os barqueiros esperando para te levar à ilha!",
      en: "The subway is the best option! 🚇 Line 4 (yellow) to <strong>Jardim Oceânico</strong> station. Use the 'Lagoa' exit and walk ~200 meters toward the lagoon. You'll find boat operators waiting!",
      es: "¡El metro es la mejor opción! 🚇 Línea 4 (amarilla) hasta <strong>Jardim Oceânico</strong>. Usa la salida 'Lagoa' y camina ~200 metros hacia la laguna. ¡Encontrarás barqueros esperando!",
      zh: "地铁是最好的选择！🚇 乘坐4号线（黄线）到<strong>花园海洋站</strong>。走\"泻湖\"出口，向泻湖方向步行约200米。您会找到等待送您到小岛的船夫！"
    }
  },
  {
    keywords: ["uber", "99", "taxi", "onibus", "bus", "como vir de carro", "transporte publico"],
    reply: {
      pt: "Várias opções! 🚗 Uber/99: peça para a Av. Armando Lombardi, 350 (perto do pier). Ônibus: várias linhas passam pela Av. das Américas. Metrô é o mais prático — Linha 4, Jardim Oceânico. Carro: estacione no Shopping Barra Point.",
      en: "Multiple options! 🚗 Uber/99: request to Av. Armando Lombardi, 350 (near the pier). Bus: several lines on Av. das Américas. Subway is most practical — Line 4, Jardim Oceânico. Car: park at Shopping Barra Point.",
      es: "¡Varias opciones! 🚗 Uber/99: pide a Av. Armando Lombardi, 350. Autobús: varias líneas en Av. das Américas. Metro es lo más práctico — Línea 4, Jardim Oceânico. Auto: estaciona en Shopping Barra Point.",
      zh: "多种选择！🚗 打车（Uber/99）：请求前往Av. Armando Lombardi 350号（码头附近）。公交车：多条线路经过美洲大道。地铁是最实用的——4号线，花园海洋站。开车：停在巴拉点购物中心。"
    }
  },
  {
    keywords: ["carro", "estacionamento", "estacionar", "vaga", "parar o carro", "car", "parking", "park", "drive", "coche", "estacionamiento"],
    reply: {
      pt: "A ilha não tem carros! 🚫🚗 Se vier de carro, estacione na <strong>Av. Armando Lombardi, 350</strong> ou no <strong>Shopping Barra Point</strong>. Veja mais em <a href='como-chegar.html'>Como Chegar</a>.",
      en: "The island has no cars! 🚫🚗 If you come by car, use parking at <strong>Av. Armando Lombardi, 350</strong> or <strong>Shopping Barra Point</strong>. More details at <a href='como-chegar.html'>How to Get Here</a>.",
      es: "¡La isla no tiene coches! 🚫🚗 Si vienes en auto, usa los estacionamientos en <strong>Av. Armando Lombardi, 350</strong> o <strong>Shopping Barra Point</strong>. Más en <a href='como-chegar.html'>Cómo Llegar</a>.",
      zh: "小岛没有汽车！🚫🚗 如果您开车来，请使用<strong>Av. Armando Lombardi 350号</strong>或<strong>巴拉点购物中心</strong>的停车场。更多详情：<a href='como-chegar.html'>如何到达</a>。"
    }
  },
  {
    keywords: ["barco", "balsa", "chalana", "travessia", "barquinho", "valor do barco", "preco do barco", "horario barco", "boat", "ferry", "crossing", "boat price", "bote", "lancha", "cruce"],
    reply: {
      pt: "As chalanas funcionam <strong>24 horas por dia, 7 dias por semana!</strong> 🚤 Valor: R$ 2 a R$ 6 por pessoa. De madrugada pode ter pequeno acréscimo. Dica: diga o nome do restaurante e o barqueiro te deixa direto no deck certo!",
      en: "The chalanas (boats) run <strong>24/7!</strong> 🚤 Fare: R$ 2 to R$ 6 per person. Small surcharge possible late at night. Tip: just tell the boatman the restaurant name and they'll drop you at the right dock!",
      es: "¡Las chalanas funcionan <strong>24/7!</strong> 🚤 Tarifa: R$ 2 a R$ 6 por persona. Puede haber pequeño recargo de madrugada. ¡Dato: di el nombre del restaurante y el barquero te lleva directo!",
      zh: "渡船（chalanas）<strong>每天24小时、每周7天</strong>运营！🚤 费用：每人R$ 2至R$ 6。深夜可能有小额附加费。提示：只需告诉船夫餐厅名称，他们会直接送您到正确的码头！"
    }
  },
  {
    keywords: ["como voltar", "volta", "retorno", "sair da ilha", "how to return", "come back", "volver"],
    reply: {
      pt: "Para voltar é simples! 🚤 Vá até qualquer deck ou cais da ilha e espere um barco. Eles circulam constantemente. Paga a passagem de volta separada (R$ 2 a R$ 6). Os barcos funcionam 24h — não tem hora de fechar!",
      en: "Getting back is simple! 🚤 Go to any dock or pier on the island and wait for a boat. They circulate constantly. Pay the return fare separately (R$ 2 to R$ 6). Boats run 24/7 — no closing time!",
      es: "¡Volver es simple! 🚤 Ve a cualquier muelle de la isla y espera un bote. Circulan constantemente. Pagas el regreso por separado (R$ 2 a R$ 6). ¡Los botes funcionan 24h!",
      zh: "返回很简单！🚤 只需前往小岛的任何码头等待船只。它们持续循环运行。您需要单独支付返程费用（R$ 2至R$ 6）。船只24小时运营，没有关闭时间！"
    }
  },

  // ==========================================
  // 7. INFORMAÇÕES PRÁTICAS PARA O VISITANTE
  // ==========================================
  {
    keywords: ["banheiro", "wc", "sanitario", "toalete", "toilet", "restroom", "bathroom", "baño", "lavabo"],
    reply: {
      pt: "Não há banheiros públicos na ilha! 🚾 Use os banheiros dos restaurantes e bares onde você consumir. A maioria disponibiliza para clientes. Boa desculpa para tomar uma cerveja! 😄",
      en: "There are no public restrooms on the island! 🚾 Use bathrooms at restaurants and bars where you're a customer. Most make them available to customers. A good excuse for a beer! 😄",
      es: "¡No hay baños públicos en la isla! 🚾 Usa los baños de restaurantes y bares donde consumas. La mayoría los pone a disposición de los clientes. ¡Una buena excusa para tomar algo! 😄",
      zh: "岛上没有公共厕所！🚾 请使用您光顾的餐厅和酒吧的卫生间。大多数场所为顾客提供卫生间使用权。这是喝一杯啤酒的好理由！😄"
    }
  },
  {
    keywords: ["acessibilidade", "cadeirante", "cadeira de rodas", "deficiente", "mobilidade reduzida", "wheelchair", "accessibility", "disabled", "discapacidad"],
    reply: {
      pt: "É importante ser honesto: ♿ A Ilha da Gigóia tem ruas de terra batida, vielas estreitas e embarques/desembarques em barcos — o que torna o acesso <strong>bastante difícil para cadeirantes</strong>. A maioria das ruas não tem calçamento nem rampas. Recomendamos contatar diretamente o estabelecimento de interesse.",
      en: "Being honest is important: ♿ Gigóia Island has dirt roads, narrow alleys, and boarding/unboarding boats — making it <strong>quite challenging for wheelchair users</strong>. Most streets lack paving or ramps. We recommend contacting your specific destination directly.",
      es: "Es importante ser honesto: ♿ La Isla de Gigóia tiene calles de tierra, callejones estrechos y subida/bajada de botes — lo que la hace <strong>bastante difícil para usuarios de silla de ruedas</strong>. Se recomienda consultar directamente con el establecimiento.",
      zh: "关于这一点需要诚实说明：♿ 吉戈亚岛有泥土路、狭窄小巷，以及上下船只，这对<strong>轮椅使用者来说相当困难</strong>。大多数街道没有铺路或坡道。建议直接联系您的目的地场所咨询。"
    }
  },
  {
    keywords: ["aceita cartao", "aceita pix", "dinheiro", "pagamento", "forma de pagamento", "card", "payment", "credit card", "cash", "tarjeta", "efectivo"],
    reply: {
      pt: "A maioria dos restaurantes e pousadas aceita PIX e cartão. 💳 Mas alguns botecos e barqueiros preferem dinheiro. Dica: tenha sempre um pouco de dinheiro trocado — especialmente para a travessia (R$ 2–6). PIX é aceito em quase todo lugar!",
      en: "Most restaurants and inns accept PIX and credit/debit cards. 💳 But some traditional bars and boat operators prefer cash. Tip: always have some cash — especially for the boat crossing (R$ 2–6). PIX is accepted almost everywhere!",
      es: "La mayoría de restaurantes y posadas aceptan tarjeta y PIX. 💳 Pero algunos botecos y barqueros prefieren efectivo. Consejo: ten siempre algo de efectivo — especialmente para el bote (R$ 2–6).",
      zh: "大多数餐厅和旅馆接受PIX和信用卡/借记卡。💳 但一些传统小馆和船夫仍然更喜欢现金。建议：始终携带一些零钱——特别是用于支付渡船费用（R$ 2至R$ 6）。PIX几乎在任何地方都被接受！"
    }
  },
  {
    keywords: ["quanto tempo", "tempo de visita", "how long", "cuanto tiempo", "duracao visita"],
    reply: {
      pt: "Depende do seu plano! ⏰ A ilha pode ser atravessada a pé em 30min–1h. Para um passeio + almoço, planeje 3–4 horas. Para um dia completo com barco + refeições + pôr do sol, deixe o dia inteiro! Muitos visitantes ficam mais tempo do que planejado — a ilha é viciante! 😄",
      en: "It depends on your plans! ⏰ The island can be walked in 30min–1h. For a basic tour + lunch, plan 3–4 hours. For a full day with boat tour + meals + sunset, set aside the whole day! Many visitors stay longer than planned — the island is addictive! 😄",
      es: "¡Depende de tus planes! ⏰ La isla se cruza a pie en 30min–1h. Para un paseo + almuerzo, planifica 3–4 horas. ¡Para un día completo con bote + comidas + atardecer, reserva el día entero! Muchos se quedan más de lo planeado. 😄",
      zh: "这取决于您的计划！⏰ 步行穿越小岛需要30分钟至1小时。基本游览+午餐计划3至4小时。完整的一天——乘船游览+用餐+日落，留出整天！许多游客停留时间超过计划——这里令人上瘾！😄"
    }
  },
  {
    keywords: ["chuva", "tempo ruim", "chove", "rain", "bad weather", "lluvia"],
    reply: {
      pt: "A ilha é muito mais gostosa no sol! ☀️ Com chuva, os passeios ao ar livre perdem a graça e as ruas de terra ficam enlameadas. Se pegar chuva, refugie-se em um restaurante coberto com vista para a lagoa. Para passeios de barco, sempre verifique a previsão antes!",
      en: "The island is much more enjoyable on sunny days! ☀️ In rainy weather, outdoor activities lose their charm and dirt roads become muddy. If it rains, take refuge in a covered restaurant with lagoon views. Always check the weather forecast before boat tours!",
      es: "¡La isla es mucho más agradable con sol! ☀️ Con lluvia, las actividades al aire libre pierden encanto y las calles de tierra se ponen fangosas. Si llueve, refúgiate en un restaurante cubierto con vista a la laguna.",
      zh: "阳光明媚的日子，小岛更加美丽！☀️ 雨天时，户外活动会失去乐趣，泥土路也会变得泥泞。如果下雨，在有泻湖景观的有遮蔽餐厅里避雨是最好的选择。乘船游览前请务必查看天气预报！"
    }
  },
  {
    keywords: ["melhor dia", "melhor horario", "quando ir", "best time", "best day", "cuando ir", "mejor dia"],
    reply: {
      pt: "Para <strong>sossego</strong>: venha de segunda a quinta — ruas quase vazias e mesa fácil. Para <strong>agito e música ao vivo</strong>: venha no sábado ou domingo! O melhor horário é a partir das 11h para o almoço, ficando até o pôr do sol (17h–18h). 📅",
      en: "For <strong>peace and quiet</strong>: visit Monday to Thursday — nearly empty streets and easy table availability. For <strong>buzz and live music</strong>: come Saturday or Sunday! Best time: arrive around 11am for lunch, stay for sunset (5–6pm). 📅",
      es: "Para <strong>tranquilidad</strong>: ve de lunes a jueves — calles casi vacías. Para <strong>ambiente y música</strong>: ven el sábado o domingo. ¡El horario ideal es desde las 11h para el almuerzo hasta el atardecer! 📅",
      zh: "寻求<strong>安静</strong>：周一至周四来——街道几乎空无一人，容易订到位子。寻求<strong>热闹和音乐</strong>：周六或周日来！最佳时间：上午11点左右到达享用午餐，一直待到日落时分（下午5-6点）。📅"
    }
  },
  {
    keywords: ["crianca", "bebe", "familia", "kids", "children", "family", "baby", "nino", "familia"],
    reply: {
      pt: "A ilha é ótima para família! 👨‍👩‍👧 Sem carros, as crianças andam com mais liberdade. Para bebês, leve carrinho leve (ruas de terra). O <a href='bar-kauai.html'>Kauai Gastrolounge</a> tem área kids. Ver jacarés e capivaras no <a href='pantanal-carioca.html'>Pantanal Carioca</a> é uma atração que as crianças adoram!",
      en: "The island is great for families! 👨‍👩‍👧 With no cars, children can move freely and safely. For toddlers, bring a light stroller (dirt roads). <a href='bar-kauai.html'>Kauai Gastrolounge</a> has a kids' area. Seeing caimans and capybaras on the <a href='pantanal-carioca.html'>Carioca Pantanal</a> tour is a hit with kids!",
      es: "¡La isla es excelente para familias! 👨‍👩‍👧 Sin autos, los niños se mueven con libertad. El <a href='bar-kauai.html'>Kauai Gastrolounge</a> tiene área kids. ¡Ver caimanes y capibaras en el <a href='pantanal-carioca.html'>Pantanal Carioca</a> encanta a los niños!",
      zh: "小岛非常适合家庭！👨‍👩‍👧 街上没有汽车，孩子们可以更自由安全地走动。<a href='bar-kauai.html'>考艾美食休闲吧</a>有儿童区。在<a href='pantanal-carioca.html'>里约潘塔纳尔</a>之旅中看到凯门鳄和水豚是孩子们最喜欢的体验！"
    }
  },
  {
    keywords: ["seguranca", "seguro", "perigo", "safe", "security", "danger", "seguridad", "peligro"],
    reply: {
      pt: "A Ilha da Gigóia é um dos lugares mais seguros do Rio! 🛡️ O acesso exclusivo por barco controla naturalmente quem entra e sai. É uma comunidade tranquila. Como em qualquer lugar, use o bom senso e aproveite à vontade!",
      en: "Gigóia Island is one of the safest places in Rio! 🛡️ Boat-only access naturally controls who comes and goes. It's a peaceful community. As anywhere, use common sense and enjoy yourself!",
      es: "¡La Isla de Gigóia es uno de los lugares más seguros de Río! 🛡️ El acceso exclusivo en bote controla naturalmente quién entra y sale. Es una comunidad tranquila. ¡Como en cualquier lugar, usa el sentido común!",
      zh: "吉戈亚岛是里约热内卢最安全的地方之一！🛡️ 仅限船只通行的入口自然控制着进出人员。这是一个宁静的社区。像任何地方一样，保持常识，尽情享受！"
    }
  },
  {
    keywords: ["wifi", "internet", "sinal", "4g", "5g", "conexao", "wi-fi", "connection", "signal"],
    reply: {
      pt: "O Wi-Fi nos restaurantes e pousadas costuma ser excelente! 📶 O sinal 4G/5G funciona bem na maior parte da ilha, mas pode oscilar em algumas vielas. Dica: salve o mapa e endereço do seu destino antes de sair!",
      en: "Wi-Fi at restaurants and inns is usually excellent! 📶 Mobile signal (4G/5G) works well in most of the island but can fluctuate in narrower alleys. Tip: save your destination's map before leaving, just in case!",
      es: "¡El Wi-Fi en restaurantes y posadas suele ser excelente! 📶 La señal móvil funciona bien en la mayor parte de la isla, pero puede fluctuar en callejones estrechos. ¡Guarda el mapa de tu destino por precaución!",
      zh: "餐厅和旅馆的Wi-Fi通常很好！📶 手机信号（4G/5G）在小岛大部分地区运行良好，但在一些较狭窄的小巷中可能会不稳定。建议：出发前保存目的地的地图，以防万一！"
    }
  },
  {
    keywords: ["pet", "cachorro", "gato", "animal", "pets", "pet friendly", "caozinho", "dog", "cat", "perro", "gato", "mascota"],
    reply: {
      pt: "Somos Pet Friendly! 🐾 Casas como a <a href='casa-venti.html'>Casa Venti</a> e a <a href='casa-goia.html'>Casa Goiá</a> aceitam pets de pequeno porte. Vários bares ao ar livre também permitem pets. Confirme sempre antes de reservar! Veja mais em <a href='boas-praticas.html'>Boas Práticas</a>.",
      en: "We're Pet Friendly! 🐾 Homes like <a href='casa-venti.html'>Casa Venti</a> and <a href='casa-goia.html'>Casa Goiá</a> accept small pets. Several open-air bars also allow pets. Always confirm before booking! See more at <a href='boas-praticas.html'>Good Practices</a>.",
      es: "¡Somos Pet Friendly! 🐾 Casas como <a href='casa-venti.html'>Casa Venti</a> y <a href='casa-goia.html'>Casa Goiá</a> aceptan mascotas pequeñas. Varios bares al aire libre también permiten mascotas. ¡Confirma siempre antes de reservar!",
      zh: "我们是宠物友好型！🐾 <a href='casa-venti.html'>文蒂之家</a>和<a href='casa-goia.html'>戈亚之家</a>等度假屋接受小型宠物。几家露天酒吧也允许携带宠物。预订前请务必确认！"
    }
  },
  {
    keywords: ["lixo", "barulho", "regras", "boas praticas", "som alto", "musica alta", "trash", "noise", "rules", "loud music", "basura", "ruido"],
    reply: {
      pt: "Ajude-nos a preservar nosso paraíso! 🌿 Nunca jogue lixo na lagoa, respeite os moradores em relação ao barulho (especialmente à noite), não alimente a fauna silvestre. Quem cuida da ilha, cuida do próprio paraíso. Veja em <a href='boas-praticas.html'>Boas Práticas</a>.",
      en: "Help us preserve our paradise! 🌿 Never throw trash in the lagoon, respect residents regarding noise (especially at night), don't feed wildlife. See more at <a href='boas-praticas.html'>Good Practices</a>.",
      es: "¡Ayúdanos a preservar nuestro paraíso! 🌿 Nunca tires basura en la laguna, respeta a los residentes con el ruido, no alimentes a la fauna silvestre. Ver más en <a href='boas-praticas.html'>Buenas Prácticas</a>.",
      zh: "帮助我们保护我们的天堂！🌿 永远不要将垃圾丢入泻湖，尊重居民关于噪音的规定（尤其是夜间），不要喂食野生动物。查看更多：<a href='boas-praticas.html'>行为准则</a>。"
    }
  },
  {
    keywords: ["quanto gastar", "budget", "custo", "caro", "barato", "how much money", "presupuesto", "orcamento viagem"],
    reply: {
      pt: "Opções para todos os bolsos! 💰 Travessia: R$ 2–6. Boteco/lanche: R$ 40–60/pessoa. Restaurantes médios (Deck Bar, Cais Bar): R$ 60–100. Alta gastronomia (Ocyá, Laguna): R$ 150–250+. Dia completo com barco + refeição + drinks: ~R$ 150–300/pessoa.",
      en: "Options for all budgets! 💰 Boat crossing: R$ 2–6. Traditional bar/snack: R$ 40–60/person. Mid-range restaurants (Deck Bar, Cais Bar): R$ 60–100. Fine dining (Ocyá, Laguna): R$ 150–250+. Full day with boat + meal + drinks: ~R$ 150–300/person.",
      es: "¡Opciones para todos los bolsillos! 💰 Travesía: R$ 2–6. Boteco/merienda: R$ 40–60/persona. Restaurantes medios: R$ 60–100. Alta gastronomía: R$ 150–250+. Día completo: ~R$ 150–300/persona.",
      zh: "有适合各种预算的选择！💰 渡船：R$ 2-6。传统小馆/小吃：每人R$ 40-60。中档餐厅（甲板酒吧、码头酒吧）：R$ 60-100。高档美食（欧希亚、拉古纳）：R$ 150-250+。包括乘船游览+用餐+饮品的完整一天：每人约R$ 150-300。"
    }
  },
  {
    keywords: ["roupa", "o que vestir", "calcado", "sapato", "what to wear", "clothing", "shoes", "ropa", "calzado"],
    reply: {
      pt: "Vista-se de forma leve e confortável! 👟 As ruas são de terra batida — evite saltos altos, prefira calçados confortáveis. Leve protetor solar e repelente no fim de tarde. Roupa de banho se planeja atividades aquáticas!",
      en: "Dress light and comfortable! 👟 Streets are unpaved dirt roads — avoid high heels, opt for comfortable shoes. Bring sunscreen and insect repellent for late afternoon. Swimwear if you plan water activities!",
      es: "¡Vístete de forma ligera y cómoda! 👟 Las calles son de tierra — evita tacones, prefiere calzado cómodo. Lleva protector solar y repelente para el final de la tarde.",
      zh: "穿着轻便舒适！👟 街道是泥土路——避免穿高跟鞋，选择舒适的鞋子。带上防晒霜和傍晚时分的驱虫剂。如果计划水上活动，带上泳衣！"
    }
  },
  {
    keywords: ["fotografia", "foto", "instagram", "selfie", "tirar foto", "photo", "picture", "photography", "fotografía"],
    reply: {
      pt: "A ilha é um paraíso para fotos! 📸 Melhores pontos: pôr do sol nos decks à beira da lagoa, casas coloridas das vielas, jacarés e capivaras nos passeios, barcos pintados no cais. A luz dourada do fim de tarde é espetacular!",
      en: "The island is a photographer's paradise! 📸 Best spots: sunset from lagoon-side restaurant decks, colorful houses in alleys, caimans and capybaras on tours, and painted boats at the dock. The golden afternoon light is spectacular!",
      es: "¡La isla es un paraíso para fotos! 📸 Los mejores puntos: atardecer desde las terrazas, casas coloridas, caimanes y capibaras, botes pintados. ¡La luz dorada de la tarde es espectacular!",
      zh: "小岛是摄影爱好者的天堂！📸 最佳拍摄地点：泻湖边餐厅露台上的日落、小巷中的彩色房屋、游览中与凯门鳄和水豚的相遇，以及码头上的彩绘船只。傍晚的金色光线效果极佳！"
    }
  },
  {
    keywords: ["artesanato", "loja", "souvenir", "compra", "artesanal", "craft", "shopping", "souvenir", "artesania"],
    reply: {
      pt: "Nas vielas internas da ilha você encontra pequenas lojas de artesanato local! 🎨 Arte feita pelos próprios moradores, bijuterias, pinturas e lembranças únicas da ilha. Vale explorar as ruas internas para encontrar esses cantinhos especiais!",
      en: "In the island's inner alleys you'll find small local craft shops! 🎨 Art made by residents, jewelry, paintings, and unique island souvenirs. Worth exploring the inner streets to find these hidden gems!",
      es: "¡En las callejuelas internas de la isla encontrarás pequeñas tiendas de artesanía! 🎨 Arte hecho por los propios residentes, bisutería, pinturas y recuerdos únicos de la isla.",
      zh: "在小岛的内部小巷中，您可以找到当地手工艺品小店！🎨 由居民亲手制作的艺术品、珠宝、画作和独特的纪念品。值得探索内部街道来寻找这些隐藏的宝藏！"
    }
  },
  {
    keywords: ["infraestrutura", "comercio", "mercado", "padaria", "farmacia", "lojas", "supermercado", "market", "bakery", "pharmacy"],
    reply: {
      pt: "Nossa ilha é bastante autossuficiente! 🛒 Nas ruas de terra você encontra: 2 mercadinhos, farmácias, lojas de material de construção, hortifrúti, pet shops, lavanderia e dezenas de bares e restaurantes!",
      en: "Our island is quite self-sufficient! 🛒 On the dirt streets you'll find: 2 markets, pharmacies, hardware stores, produce shops, pet stores, laundry, plus dozens of bars and restaurants!",
      es: "¡Nuestra isla es bastante autosuficiente! 🛒 En las calles de tierra encontrarás: 2 mercados, farmacias, ferreterías, fruterías, tiendas de mascotas, lavandería y docenas de bares y restaurantes.",
      zh: "我们的小岛相当自给自足！🛒 在泥土路上您可以找到：2家小超市、药店、建材店、果蔬店、宠物店、洗衣店，以及数十家酒吧和餐厅！"
    }
  },

  // ==========================================
  // 8. PASSEIOS, ESPORTES E NATUREZA
  // ==========================================
  {
    keywords: ["caiaque", "stand up", "sup", "esportes", "remo", "kayak", "paddle", "sports", "deportes", "flyboard", "bike aquatica"],
    reply: {
      pt: "A lagoa é um paraíso para esportes aquáticos! 🚣‍♂️ Na <strong>Ilha da Coroa</strong> (vizinha) você pode alugar caiaques, stand-up paddle, flyboard e bike aquática. Preços acessíveis e experiência incrível explorar os canais no seu próprio ritmo!",
      en: "The lagoon is a paradise for water sports! 🚣‍♂️ At <strong>Ilha da Coroa</strong> (neighboring islet) you can rent kayaks, stand-up paddle, flyboard, and water bikes. Very affordable and an amazing experience exploring the canals at your own pace!",
      es: "¡La laguna es un paraíso para los deportes acuáticos! 🚣‍♂️ En la <strong>Ilha da Coroa</strong> puedes alquilar kayaks, stand-up paddle, flyboard y bicicletas acuáticas. ¡Precios muy accesibles!",
      zh: "泻湖是水上运动的天堂！🚣‍♂️ 在邻近的<strong>科罗阿岛（Ilha da Coroa）</strong>，您可以租用皮划艇、立式桨板（SUP）、飞板和水上自行车。价格非常实惠！"
    }
  },
  {
    keywords: ["pantanal", "jacare", "capivara", "natureza", "passaros", "bicho", "fauna", "safari", "alligator", "capybara", "nature", "birds", "caiman", "naturaleza"],
    reply: {
      pt: "O passeio do <a href='pantanal-carioca.html'>Pantanal Carioca</a> é inesquecível! 🐊 O barco entra fundo nos manguezais onde você vê jacarés-de-papo-amarelo, capivaras e garças bem de perto. ~R$ 50/pessoa. Saídas durante o dia enquanto houver claridade. A fauna também inclui tartarugas no verão!",
      en: "The <a href='pantanal-carioca.html'>Carioca Pantanal</a> tour is unforgettable! 🐊 The boat goes deep into the mangroves where you see caimans, capybaras, and herons up close. ~R$ 50/person. Departures during daylight. Local wildlife also includes sea turtles especially in summer!",
      es: "¡El tour del <a href='pantanal-carioca.html'>Pantanal Carioca</a> es inolvidable! 🐊 El bote se adentra en los manglares donde ves caimanes, capibaras y garzas de muy cerca. ~R$ 50/persona. ¡La fauna también incluye tortugas en verano!",
      zh: "<a href='pantanal-carioca.html'>里约潘塔纳尔</a>之旅令人难忘！🐊 船只深入红树林，您可以近距离看到宽吻凯门鳄、水豚和苍鹭。约每人R$ 50。白天有出发班次。当地野生动物还包括夏季常见的海龟！"
    }
  },
  {
    keywords: ["tijucas", "ilhas tijucas", "mar", "mergulho", "tartaruga", "caribe carioca", "sea", "dive", "turtle", "tijucas islands"],
    reply: {
      pt: "As <a href='ilhas-tijucas.html'>Ilhas Tijucas</a> são o nosso 'Caribe Carioca'! 🤿 Passeio de 4 horas para o mar aberto — nadar em águas cristalinas e ver tartarugas (dependendo do mar). O passeio é condicionado às boas condições climáticas, sempre verifique antes!",
      en: "The <a href='ilhas-tijucas.html'>Tijucas Islands</a> are our 'Carioca Caribbean'! 🤿 A 4-hour open sea tour — crystal-clear water and turtle spotting (weather permitting). The tour is weather-dependent, always check conditions beforehand!",
      es: "¡Las <a href='ilhas-tijucas.html'>Islas Tijucas</a> son nuestro 'Caribe Carioca'! 🤿 Un tour de 4 horas a mar abierto — aguas cristalinas y tortugas (según condiciones). ¡El tour depende del clima, siempre verifica antes!",
      zh: "<a href='ilhas-tijucas.html'>蒂茹卡斯群岛</a>是我们的\"卡里奥卡加勒比\"！🤿 4小时的公海之旅——在清澈的海水中游泳并发现海龟（取决于天气条件）。游览受天气影响，请务必提前确认！"
    }
  },
  {
    keywords: ["reserva", "praia da reserva", "marapendi", "canal", "reserve beach", "playa de reserva"],
    reply: {
      pt: "Temos um passeio maravilhoso até a <a href='reserva.html'>Praia da Reserva</a>! 🏝️ São 2 horas de navegação relaxante pelos canais do Marapendi — um corredor de natureza preservada — com parada para banho de mar. Uma experiência única que mistura lagoa e oceano!",
      en: "We have a wonderful tour to <a href='reserva.html'>Reserva Beach</a>! 🏝️ 2 hours of relaxing sailing through the Marapendi canals — a preserved nature corridor — with a sea bath stop. A unique experience mixing lagoon and ocean!",
      es: "¡Tenemos un maravilloso paseo hasta la <a href='reserva.html'>Playa de Reserva</a>! 🏝️ 2 horas de relajante navegación por los canales de Marapendi con parada para bañarse en el mar.",
      zh: "我们有前往<a href='reserva.html'>保护区海滩</a>的精彩游览！🏝️ 2小时轻松航行穿越马拉佩恩迪运河——一条保留的自然走廊——然后在保护区停靠游泳。将泻湖和海洋融合的独特体验！"
    }
  },
  {
    keywords: ["jet ski", "jetski", "jet-ski", "adrenalina", "pilotar", "moto aquatica", "adrenaline", "ride"],
    reply: {
      pt: "Curte adrenalina? 🚀 Aluguel de Jet Ski na Lagoa da Barra! 15 min = R$ 200 / 30 min = R$ 300 / 1h = R$ 600. Colete salva-vidas incluso e orientações para iniciantes. Veja mais em <a href='jet-ski.html'>Jet Ski</a> ou agende pelo WhatsApp!",
      en: "Like adrenaline? 🚀 Jet Ski rental on Barra Lagoon! 15 min = R$ 200 / 30 min = R$ 300 / 1h = R$ 600. Life vest included, with guidance for beginners. See more at <a href='jet-ski.html'>Jet Ski</a> or book via WhatsApp!",
      es: "¿Te gusta la adrenalina? 🚀 ¡Alquiler de Jet Ski en la Laguna de Barra! 15 min = R$ 200 / 30 min = R$ 300 / 1h = R$ 600. Chaleco incluido. ¡Más info en <a href='jet-ski.html'>Jet Ski</a>!",
      zh: "喜欢肾上腺素？🚀 在巴拉泻湖租用摩托艇！15分钟=R$ 200 / 30分钟=R$ 300 / 1小时=R$ 600。包含救生衣，为初学者提供指导。更多信息：<a href='jet-ski.html'>摩托艇</a>，或通过WhatsApp预约！"
    },
    showWhatsapp: true
  },
  {
    keywords: ["pacote", "combo", "pacotes especiais", "romantico", "vip", "experiencia completa", "roteiro perfeito", "package", "special packages", "romantic"],
    reply: {
      pt: "Quer facilidade? Temos a <a href='experiencia-completa.html'>Experiência Completa</a> 🥰 — travessia panorâmica pelos canais, almoço nos melhores restaurantes e pôr do sol exclusivo. Clique no botão abaixo para nossa equipe montar o pacote ideal para você!",
      en: "Want convenience? We have the <a href='experiencia-completa.html'>Complete Experience</a> 🥰 — panoramic canal crossing, lunch at the best restaurants, exclusive sunset. Click below for our team to put together your ideal package!",
      es: "¿Quieres comodidad? Tenemos la <a href='experiencia-completa.html'>Experiencia Completa</a> 🥰 — travesía panorámica, almuerzo en los mejores restaurantes y atardecer exclusivo. ¡Haz clic abajo para que nuestro equipo arme tu paquete ideal!",
      zh: "想要便利实惠？我们有<a href='experiencia-completa.html'>完整体验</a>🥰——包含运河全景穿越、在最好的餐厅用餐和独家日落的行程。点击下方按钮，让我们的团队为您定制理想的套餐！"
    },
    showWhatsapp: true
  },
  {
    keywords: ["ilha primeira", "ilha de sao jorge", "ilha garças", "arquipelago", "outras ilhas", "other islands", "9 ilhas", "10 ilhas"],
    reply: {
      pt: "A Gigóia é a maior, mas fazemos parte de um arquipélago com 9–10 ilhas! 🏝️ As principais: <strong>Ilha Primeira</strong> (Salomé, Veneza Carioca, Maracujá), <strong>Ilha de São Jorge</strong>, <strong>Ilha da Coroa</strong> (esportes aquáticos) e <strong>Ilha das Garças</strong>. Cada uma tem seu charme!",
      en: "Gigóia is the largest, but we're part of an archipelago of 9–10 islands! 🏝️ The main ones: <strong>Ilha Primeira</strong> (Salomé, Veneza Carioca, Maracujá), <strong>Ilha de São Jorge</strong>, <strong>Ilha da Coroa</strong> (water sports) and <strong>Ilha das Garças</strong>. Each has its own charm!",
      es: "Gigóia es la más grande, pero somos parte de un archipiélago de 9–10 islas. 🏝️ Las principales: <strong>Ilha Primeira</strong> (Salomé, Veneza Carioca, Maracujá), <strong>Ilha de São Jorge</strong>, <strong>Ilha da Coroa</strong> (deportes acuáticos) e <strong>Ilha das Garças</strong>.",
      zh: "吉戈亚是最大的，但我们是由9-10个小岛组成的群岛的一部分！🏝️ 主要岛屿：<strong>伊岛一号</strong>（萨洛梅、里约威尼斯、百香果所在地）、<strong>圣豪尔赫岛</strong>、<strong>科罗阿岛</strong>（水上运动）和<strong>加尔萨斯岛</strong>。每个都有其独特的魅力！"
    }
  },

  // ==========================================
  // 9. RESTAURANTES ESPECÍFICOS
  // ==========================================
  {
    keywords: ["frutos do mar", "peixe", "camarao", "moqueca", "lagosta", "ceviche", "seafood", "fish", "shrimp", "lobster", "mariscos", "pescado"],
    reply: {
      pt: "Para frutos do mar, opções incríveis! 🦞 Alta gastronomia: <a href='restaurante-ocya.html'>Ocyá</a> (Guia Michelin). Tradição: <a href='restaurante-laguna.html'>Laguna</a> (moqueca alagoana imperdível). Petiscos: <a href='restaurante-deck-bar.html'>Deck Bar</a> (camarão no abacaxi!). Casual: <a href='restaurante-cais-bar.html'>Cais Bar</a> (rodízio com bebida liberada).",
      en: "For seafood, amazing options! 🦞 Fine dining: <a href='restaurante-ocya.html'>Ocyá</a> (Michelin Guide). Tradition: <a href='restaurante-laguna.html'>Laguna</a> (outstanding moqueca). Snacks: <a href='restaurante-deck-bar.html'>Deck Bar</a> (pineapple shrimp!). Casual: <a href='restaurante-cais-bar.html'>Cais Bar</a> (all-you-can-eat with open bar).",
      es: "¡Para mariscos, opciones increíbles! 🦞 Alta gastronomía: <a href='restaurante-ocya.html'>Ocyá</a> (Guía Michelin). Tradición: <a href='restaurante-laguna.html'>Laguna</a> (moqueca imperdible). Bocadillos: <a href='restaurante-deck-bar.html'>Deck Bar</a> (camarón en piña). Casual: <a href='restaurante-cais-bar.html'>Cais Bar</a> (barra libre).",
      zh: "海鲜选择太精彩了！🦞 高级美食：<a href='restaurante-ocya.html'>欧希亚</a>（米其林认可）。传统：<a href='restaurante-laguna.html'>拉古纳</a>（精彩的阿拉戈斯鱼汤）。小吃：<a href='restaurante-deck-bar.html'>甲板酒吧</a>（菠萝虾！）。休闲：<a href='restaurante-cais-bar.html'>码头酒吧</a>（含无限饮品的小吃轮转）。"
    }
  },
  {
    keywords: ["ocya", "michelin", "geronimo", "sofisticado", "chique", "luxo", "alta gastronomia", "sophisticated", "luxury"],
    reply: {
      pt: "O <a href='restaurante-ocya.html'>Ocyá</a> é um dos restaurantes mais premiados do Rio! ⭐ Guia Michelin, entre os melhores da América Latina. Chef Gerônimo Athiê com técnicas de maturação de peixes e preparos na brasa. <strong>Reserve com antecedência — essencial!</strong>",
      en: "The <a href='restaurante-ocya.html'>Ocyá</a> is one of Rio's most awarded restaurants! ⭐ Michelin Guide, among Latin America's best. Chef Gerônimo Athiê with fish aging techniques and grill preparations. <strong>Book in advance — essential!</strong>",
      es: "¡El <a href='restaurante-ocya.html'>Ocyá</a> es uno de los más premiados de Río! ⭐ Guía Michelin, entre los mejores de Latinoamérica. Chef Gerônimo Athiê. <strong>¡Reserva con anticipación, es esencial!</strong>",
      zh: "<a href='restaurante-ocya.html'>欧希亚</a>是里约最受奖励的餐厅之一！⭐ 米其林认可，被列为拉丁美洲最佳餐厅之一。格罗尼莫·阿蒂耶主厨以鱼类熟成技术和炭烤料理引领厨房。<strong>提前预订——这是必须的！</strong>"
    }
  },
  {
    keywords: ["laguna", "pedra da gavea", "primeiro restaurante", "antigo", "tradicional", "moqueca alagoana", "desde 2002"],
    reply: {
      pt: "O <a href='restaurante-laguna.html'>Restaurante Laguna</a> é o pioneiro da ilha — aberto em 2002! 🏆 Rústico e sofisticado com vista linda para a Pedra da Gávea. Destaque para a <strong>moqueca alagoana</strong>, chapas de frutos do mar e tem cardápio infantil. Preços acima da média mas vale!",
      en: "The <a href='restaurante-laguna.html'>Laguna Restaurant</a> is the island's pioneer — open since 2002! 🏆 Rustic and sophisticated with gorgeous views of Pedra da Gávea. Highlights: <strong>moqueca alagoana</strong>, seafood platters, and kids' menu. Prices above average but worth it!",
      es: "¡El <a href='restaurante-laguna.html'>Restaurante Laguna</a> es el pionero de la isla, desde 2002! 🏆 Rústico y sofisticado con vista a la Pedra da Gávea. Plato estrella: <strong>moqueca alagoana</strong>. ¡Tiene menú infantil!",
      zh: "<a href='restaurante-laguna.html'>拉古纳餐厅</a>是岛上的先驱——自2002年开业！🏆 质朴而精致，拥有对加维亚石山的绝美景观。亮点：<strong>阿拉戈斯鱼汤</strong>和海鲜拼盘。甚至有儿童菜单！"
    }
  },
  {
    keywords: ["deck", "deck bar", "camarao no abacaxi", "guarda chuva", "musica ao vivo", "comida di buteco"],
    reply: {
      pt: "O <a href='restaurante-deck-bar.html'>Deck Bar</a> é um dos mais queridos da ilha! 🍍 Famoso pelos guarda-chuvas coloridos no teto, pelo incrível <strong>Camarão no Abacaxi</strong> e pela música ao vivo. Funciona todos os dias 11h–18h. WhatsApp: (21) 3738-0935. Reserve aos fins de semana!",
      en: "The <a href='restaurante-deck-bar.html'>Deck Bar</a> is one of the island's most beloved! 🍍 Famous for colorful umbrellas on the ceiling, the incredible <strong>Pineapple Shrimp</strong>, and live music. Open daily 11am–6pm. WhatsApp: (21) 3738-0935. Book for weekends!",
      es: "¡El <a href='restaurante-deck-bar.html'>Deck Bar</a> es uno de los más queridos de la isla! 🍍 Famoso por los coloridos paraguas, el increíble <strong>Camarón en Piña</strong> y la música en vivo. Funciona todos los días 11h–18h. WhatsApp: (21) 3738-0935.",
      zh: "<a href='restaurante-deck-bar.html'>甲板酒吧</a>是岛上最受欢迎的地方之一！🍍 以天花板上的彩色雨伞、令人惊叹的<strong>菠萝虾</strong>和现场音乐而闻名。每天营业时间11:00-18:00。WhatsApp：(21) 3738-0935。周末请预订！"
    }
  },
  {
    keywords: ["cais bar", "cais", "moqueca cais", "rodizio de petiscos"],
    reply: {
      pt: "O <a href='restaurante-cais-bar.html'>Cais Bar</a> é tradição na Gigóia! 🍲 Um dos mais antigos, com clima descontraído e vista para os canais. Destaques: <strong>moqueca de peixe</strong>, pratos executivos na semana e o famoso <strong>rodízio de petiscos com bebida liberada</strong>!",
      en: "The <a href='restaurante-cais-bar.html'>Cais Bar</a> is a Gigóia tradition! 🍲 One of the oldest, relaxed atmosphere and canal views. Highlights: <strong>fish moqueca</strong>, weekday lunch specials, and the famous <strong>all-you-can-eat snacks with open bar</strong>!",
      es: "¡El <a href='restaurante-cais-bar.html'>Cais Bar</a> es tradición en Gigóia! 🍲 Uno de los más antiguos, ambiente descontraído. Destacan: <strong>moqueca de pescado</strong>, especiales de semana y el famoso <strong>rodizio de bocadillos con barra libre</strong>.",
      zh: "<a href='restaurante-cais-bar.html'>码头酒吧</a>是吉戈亚的传统！🍲 岛上最古老的之一，氛围轻松，有运河景观。亮点：<strong>鱼汤</strong>、工作日商务套餐和著名的<strong>含无限饮品的小吃轮转</strong>！"
    }
  },
  {
    keywords: ["camarao da barra", "especializado em camarao", "shrimp bar"],
    reply: {
      pt: "O <a href='restaurante-camarao.html'>Camarão da Barra</a> é super moderno e especializado em diferentes preparos contemporâneos de camarão. 🍤 Ambiente sofisticado com vista para a lagoa — perfeito para jantares e comemorações!",
      en: "The <a href='restaurante-camarao.html'>Camarão da Barra</a> is super modern and specializes in various contemporary shrimp preparations. 🍤 Sophisticated atmosphere with lagoon view — perfect for dinners and celebrations!",
      es: "El <a href='restaurante-camarao.html'>Camarão da Barra</a> es súper moderno y especializado en diversas preparaciones contemporáneas de camarones. 🍤 ¡Ambiente sofisticado con vista a la laguna!",
      zh: "<a href='restaurante-camarao.html'>巴拉虾</a>超级现代，专注于各种当代虾类烹制方式。🍤 精致的环境配上令人惊叹的泻湖景观——非常适合晚餐和庆祝活动！"
    }
  },
  {
    keywords: ["salome", "salomé", "salome al mare", "tabua de frutos do mar"],
    reply: {
      pt: "O <a href='restaurante-salome.html'>Salomé al Mare</a> fica na Ilha Primeira e é famoso pelas <strong>tábuas gigantes de mariscos</strong> — perfeitas para dividir em grupo! 🐚 Vista à beira da lagoa e o famoso pastel de camarão da região!",
      en: "The <a href='restaurante-salome.html'>Salomé al Mare</a> is on Primeira Island and is famous for its <strong>giant seafood platters</strong> — perfect for sharing! 🐚 Lagoon-side setting with the region's famous shrimp pastry!",
      es: "¡El <a href='restaurante-salome.html'>Salomé al Mare</a> en la Isla Primera es famoso por sus <strong>tablas gigantes de mariscos</strong> — perfectas para compartir! 🐚 Vista a orillas de la laguna.",
      zh: "<a href='restaurante-salome.html'>萨洛梅海洋餐厅</a>位于伊岛一号，以其<strong>巨型海鲜拼盘</strong>而著名——非常适合分享！🐚 泻湖边的环境和该地区著名的虾饺！"
    }
  },
  {
    keywords: ["venne", "mediterranea", "elegante", "mediterranean", "elegant"],
    reply: {
      pt: "O <a href='restaurante-venne.html'>Venne Gastronomia</a> é para momentos especiais! 🍷 Culinária mediterrânea refinada em ambiente super elegante à beira da lagoa. Perfeito para jantares românticos e celebrações. Reserve com antecedência!",
      en: "<a href='restaurante-venne.html'>Venne Gastronomia</a> is for special moments! 🍷 Refined Mediterranean cuisine in a super elegant lagoon-side setting. Perfect for romantic dinners and celebrations. Book in advance!",
      es: "¡El <a href='restaurante-venne.html'>Venne Gastronomia</a> es para momentos especiales! 🍷 Cocina mediterránea refinada en ambiente super elegante junto a la laguna. ¡Reserva con anticipación!",
      zh: "<a href='restaurante-venne.html'>文内美食</a>是为特别时刻而设的！🍷 在泻湖边超级优雅的环境中享用精致的地中海料理。非常适合浪漫晚餐和庆祝活动。请提前预订！"
    }
  },
  {
    keywords: ["maracuja restaurante", "maracuja da ilha restaurante", "camarao empanado", "ceviche aipim"],
    reply: {
      pt: "O <a href='restaurante-maracuja.html'>Maracujá da Ilha</a> na Ilha Primeira tem um dos melhores decks para o pôr do sol! 🌅 Famoso pelo <strong>camarão empanado</strong> e pelo <strong>ceviche com chips de aipim</strong>. Vista privilegiada para a lagoa — ideal para almoços e drinks no fim do dia!",
      en: "The <a href='restaurante-maracuja.html'>Maracujá da Ilha</a> on Primeira Island has one of the best sunset decks! 🌅 Famous for its <strong>breaded shrimp</strong> and <strong>ceviche with cassava chips</strong>. Prime lagoon view — ideal for lunch and end-of-day drinks!",
      es: "¡El <a href='restaurante-maracuja.html'>Maracujá da Ilha</a> en la Isla Primera tiene uno de los mejores decks para el atardecer! 🌅 Famoso por el <strong>camarón empanizado</strong> y el <strong>ceviche con chips de yuca</strong>.",
      zh: "<a href='restaurante-maracuja.html'>岛上百香果</a>位于伊岛一号，拥有观看日落的最佳露台之一！🌅 以<strong>炸虾</strong>和<strong>配木薯片的酸橘汁腌鱼</strong>而著名。泻湖景观优越——非常适合午餐和傍晚饮品！"
    }
  },

  // ==========================================
  // 10. BARES ESPECÍFICOS
  // ==========================================
  {
    keywords: ["ak bar", "ak", "por do sol bar", "bar ak"],
    reply: {
      pt: "O <a href='bar-ak.html'>AK Bar</a> é o clássico ponto de encontro da Gigóia! 🌅 Famoso pela vista privilegiada para os canais e pelo pôr do sol inesquecível. Petiscos variados e cerveja sempre gelada. Chegue antes das 17h para garantir um bom lugar!",
      en: "The <a href='bar-ak.html'>AK Bar</a> is Gigóia's classic meeting point! 🌅 Famous for the privileged canal view and unforgettable sunset. Varied snacks and always cold beer. Arrive before 5pm to secure a good spot!",
      es: "¡El <a href='bar-ak.html'>AK Bar</a> es el clásico punto de encuentro de Gigóia! 🌅 Famoso por la vista privilegiada a los canales y el atardecer inolvidable. Llega antes de las 17h para asegurar buen lugar.",
      zh: "<a href='bar-ak.html'>AK酒吧</a>是吉戈亚经典的聚集地！🌅 以俯瞰运河的优越视野和令人难忘的日落而著名。各种小吃，总是冰镇的啤酒。下午5点前到达以确保好位置！"
    }
  },
  {
    keywords: ["briza", "briza da gigoia", "samba", "musica ao vivo briza"],
    reply: {
      pt: "A <a href='bar-briza.html'>Briza da Gigóia</a> fica na entrada principal e é o point do samba e música ao vivo! 🎶 Vista deslumbrante para a lagoa, ambiente gastronômico e ótimo espaço para eventos. Os fins de semana com roda de samba são imperdíveis!",
      en: "The <a href='bar-briza.html'>Briza da Gigóia</a> is at the main entrance and is the spot for samba and live music! 🎶 Stunning lagoon view, gastronomic atmosphere and great for events. Weekend samba circles are a must!",
      es: "¡La <a href='bar-briza.html'>Briza da Gigóia</a> en la entrada principal es el punto de samba y música en vivo! 🎶 Vista impresionante a la laguna y excelente para eventos. ¡Los fines de semana con roda de samba son imperdibles!",
      zh: "<a href='bar-briza.html'>吉戈亚微风</a>位于小岛主入口，是桑巴和现场音乐的聚集地！🎶 令人惊叹的泻湖景观，美食氛围，也是举办活动的好地方。周末的桑巴圈不容错过！"
    }
  },
  {
    keywords: ["caicara", "caiçara", "bar caicara", "cultura", "arte bar"],
    reply: {
      pt: "O <a href='bar-caicaras.html'>Bar Caiçara</a> é um dos lugares mais autênticos e culturais da ilha! 🎭 Palco para shows e performances artísticas, petiscos de frutos do mar e ótimo para o pôr do sol. 'Só é permitida a entrada de boas energias' — a plaquinha da porta. Rua Dr. Sebastião Aquino, 170.",
      en: "The <a href='bar-caicaras.html'>Bar Caiçara</a> is one of the island's most authentic and cultural spots! 🎭 Stage for shows, seafood snacks, and great for sunset. 'Only good vibes allowed' — the door sign. Rua Dr. Sebastião Aquino, 170.",
      es: "¡El <a href='bar-caicaras.html'>Bar Caiçara</a> es uno de los más auténticos y culturales de la isla! 🎭 Escenario para shows, bocadillos y perfecto para el atardecer. 'Solo se permite la entrada de buenas energías'. Rua Dr. Sebastião Aquino, 170.",
      zh: "<a href='bar-caicaras.html'>海滨酒吧</a>是岛上最真实、最具文化气息的地方之一！🎭 有演出舞台、海鲜小吃和最好的日落氛围。\"只允许好能量进入\"——门上的标语。Rua Dr. Sebastião Aquino 170号。"
    }
  },
  {
    keywords: ["capivara", "boteco capivara", "dona capivara"],
    reply: {
      pt: "A <a href='bar-capivara.html'>Dona Capivara</a> é um bar gastronômico charmoso na entrada da Gigóia com vista direta para a lagoa! 🌅 Petiscos variados com opções sofisticadas (moqueca, risoto) e pôr do sol incrível. Rua Nuta James, 879.",
      en: "The <a href='bar-capivara.html'>Dona Capivara</a> is a charming gastronomic bar at Gigóia's entrance with a direct lagoon view! 🌅 Varied snacks with sophisticated options (moqueca, risotto) and incredible sunset. Rua Nuta James, 879.",
      es: "¡El <a href='bar-capivara.html'>Dona Capivara</a> es un bar gastronómico encantador en la entrada de Gigóia con vista directa a la laguna! 🌅 Bocadillos variados con opciones sofisticadas. Rua Nuta James, 879.",
      zh: "<a href='bar-capivara.html'>多娜水豚</a>是吉戈亚入口处一个超级迷人的美食酒吧，可以直接俯瞰泻湖！🌅 各种小吃（包括鱼汤和意大利炖饭等更精致的选项）和令人惊叹的日落。Rua Nuta James 879号。"
    }
  },
  {
    keywords: ["bar elson", "elson", "frango assado", "boteco raiz"],
    reply: {
      pt: "O <a href='bar-elson.html'>Bar do Elson</a> é o boteco mais raiz da Gigóia! 🍗 Famoso pelo melhor frango assado da ilha, sempre temperado e suculento. Ambiente descontraído com transmissão de jogos de futebol e cerveja sempre gelada. Para quem quer o sabor carioca autêntico!",
      en: "The <a href='bar-elson.html'>Bar do Elson</a> is Gigóia's most authentic traditional bar! 🍗 Famous for the best roasted chicken on the island — always well-seasoned and juicy. Relaxed atmosphere with football matches on TV. For those who want the authentic carioca taste!",
      es: "¡El <a href='bar-elson.html'>Bar do Elson</a> es el boteco más auténtico de Gigóia! 🍗 Famoso por el mejor pollo asado de la isla — siempre bien sazonado. Ambiente descontraído con fútbol. ¡Cerveza siempre helada!",
      zh: "<a href='bar-elson.html'>埃尔森酒吧</a>是吉戈亚最地道的传统小馆！🍗 以岛上最美味的烤鸡而著名——总是调味充足、多汁。轻松的氛围，有足球赛直播，啤酒总是冰凉的！"
    }
  },
  {
    keywords: ["bar joana", "joana", "bolinho", "caldinho", "comida caseira bar"],
    reply: {
      pt: "O <a href='bar-joana.html'>Bar da Joana</a> é o lar fora de lar da Gigóia! 🏡 Famosa pela limpeza impecável e pelos <strong>bolinhos caseiros</strong>, <strong>caldinhos</strong> e quitutes com sabor de comida de vó. Ambiente familiar e muito acolhedor!",
      en: "The <a href='bar-joana.html'>Bar da Joana</a> is Gigóia's home away from home! 🏡 Famous for impeccable cleanliness and homemade <strong>pastéis</strong>, <strong>caldinhos</strong> (broths), and treats with grandma's cooking flavor. Family and welcoming atmosphere!",
      es: "¡El <a href='bar-joana.html'>Bar da Joana</a> es el hogar fuera del hogar de Gigóia! 🏡 Famosa por la limpieza impecable y los <strong>bolinhos caseros</strong> y <strong>caldinhos</strong> con sabor de cocina de abuela.",
      zh: "<a href='bar-joana.html'>若阿娜酒吧</a>是吉戈亚的家外之家！🏡 以无可挑剔的清洁度和著名的<strong>手工炸饺子</strong>、<strong>汤汁</strong>以及有祖母烹饪味道的美食而著称。家庭温馨氛围！"
    }
  },
  {
    keywords: ["bar kai", "kai", "ultimo bar", "mais tarde", "saideira"],
    reply: {
      pt: "O <a href='bar-kai.html'>Bar do Kai</a> é onde a noite continua! 🍺 Um dos que ficam abertos até mais tarde na ilha — perfeito para a saideira. Ambiente animado, cerveja gelada e petiscos. Se quer esticar a noite na Gigóia, é o lugar certo!",
      en: "The <a href='bar-kai.html'>Bar do Kai</a> is where the night continues! 🍺 One of the bars that stays open latest on the island — perfect for the last round. Lively atmosphere, cold beer, and snacks. If you want to extend your Gigóia night, this is the place!",
      es: "¡El <a href='bar-kai.html'>Bar do Kai</a> es donde la noche continúa! 🍺 Uno de los que permanece abierto hasta más tarde — perfecto para la última ronda. Ambiente animado y cerveza fría.",
      zh: "<a href='bar-kai.html'>凯酒吧</a>是夜晚继续的地方！🍺 岛上开放最晚的酒吧之一——非常适合最后一杯。热闹的氛围，冰镇啤酒和各种小吃。如果您想在吉戈亚度过一个长夜，这是正确的地方！"
    }
  },
  {
    keywords: ["kauai", "area kids", "infantil", "familia bar", "ilha do ipe"],
    reply: {
      pt: "O <a href='bar-kauai.html'>Kauai Gastrolounge</a> na Ilha do Ipê é o mais completo para famílias! 🌺 Espaço amplo, área kids com brinquedos, música ao vivo e cardápio super variado. Ótimo para quem vai com crianças ou quer um dia relaxante com muita estrutura!",
      en: "The <a href='bar-kauai.html'>Kauai Gastrolounge</a> on Ilha do Ipê is the most complete for families! 🌺 Spacious area, kids' zone with toys, live music and a very varied menu. Great for those going with children or wanting a relaxing day with good facilities!",
      es: "¡El <a href='bar-kauai.html'>Kauai Gastrolounge</a> en Ilha do Ipê es el más completo para familias! 🌺 Espacio amplio, área kids con juguetes, música en vivo y menú variado.",
      zh: "<a href='bar-kauai.html'>考艾美食休闲吧</a>位于伊佩岛，是该地区家庭最完整的场所！🌺 宽敞区域，有玩具的儿童区，现场音乐和非常多样化的菜单。非常适合带孩子出行！"
    }
  },

  // ==========================================
  // 11. CAFÉ, LANCHES E HOSPEDAGEM
  // ==========================================
  {
    keywords: ["cafe", "lanche", "cantinho", "cafeteria", "cafe da manha", "tapioca", "bolo", "coffee", "snack", "breakfast"],
    reply: {
      pt: "Para um café ou lanche, temos opções charmosas! ☕ O <a href='cantinho-cafe.html'>Cantinho do Café</a> tem espresso, cappuccino, bolos caseiros, tapiocas e sanduíches. Para algo mais artístico, visite o Café Poesia — um cantinho cultural com música e bom café!",
      en: "For coffee or a snack, we have charming options! ☕ The <a href='cantinho-cafe.html'>Cantinho do Café</a> has espresso, cappuccino, homemade cakes, tapioca, and sandwiches. For something more artistic, visit Café Poesia — a cultural corner with music and good coffee!",
      es: "¡Para café o merienda, tenemos opciones encantadoras! ☕ El <a href='cantinho-cafe.html'>Cantinho do Café</a> tiene espresso, cappuccino, pasteles caseros, tapioca y sándwiches. Para algo más artístico, visita el Café Poesia.",
      zh: "想喝咖啡或吃点心，我们有迷人的选择！☕ <a href='cantinho-cafe.html'>咖啡小角落</a>有浓缩咖啡、卡布奇诺、自制蛋糕、木薯饼和三明治。想要更有艺术气息的体验，可以访问诗意咖啡馆！"
    }
  },
  {
    keywords: ["pousada barra", "pousada barra da tijuca", "pousada proxima metro"],
    reply: {
      pt: "A <a href='pousada-barra.html'>Pousada Barra da Tijuca</a> é a mais estratégica da ilha! 🌴 A poucos passos dos principais restaurantes e do ponto de travessia — fácil acesso ao metrô e à praia da Barra. A partir de R$ 220/diária.",
      en: "The <a href='pousada-barra.html'>Pousada Barra da Tijuca</a> is the island's most strategically located! 🌴 Steps from main restaurants and boat crossing — easy subway and beach access. From R$ 220/night.",
      es: "¡La <a href='pousada-barra.html'>Pousada Barra da Tijuca</a> es la más estratégica de la isla! 🌴 A pasos de los principales restaurantes y el punto de travesía. Desde R$ 220/noche.",
      zh: "<a href='pousada-barra.html'>巴拉达蒂茹卡旅馆</a>是岛上地理位置最优越的！🌴 距离主要餐厅和渡船点只有几步之遥。起价R$ 220/晚。"
    }
  },
  {
    keywords: ["marisis pousada", "limpeza pousada", "silencio pousada", "tranquila pousada"],
    reply: {
      pt: "A <a href='pousada-marisis.html'>Pousada Marísis</a> é o refúgio para quem busca paz absoluta! 🌺 Super elogiada pela limpeza impecável e silêncio absoluto — verdadeiro lar fora de lar. Quartos com varanda e Wi-Fi. A partir de R$ 200/diária.",
      en: "The <a href='pousada-marisis.html'>Pousada Marísis</a> is the refuge for those seeking absolute peace! 🌺 Highly praised for impeccable cleanliness and silence. Rooms with balcony and Wi-Fi. From R$ 200/night.",
      es: "¡La <a href='pousada-marisis.html'>Pousada Marísis</a> es el refugio para quienes buscan paz absoluta! 🌺 Muy elogiada por la limpieza impecable y el silencio. Habitaciones con balcón y Wi-Fi. Desde R$ 200/noche.",
      zh: "<a href='pousada-marisis.html'>玛丽西斯旅馆</a>是寻求绝对宁静者的避风港！🌺 以无可挑剔的清洁度和绝对安静而备受好评。带阳台的客房和Wi-Fi。起价R$ 200/晚。"
    }
  },
  {
    keywords: ["veneza carioca hotel", "boutique", "intimista", "romantico hospedagem"],
    reply: {
      pt: "O <a href='veneza-carioca.html'>Veneza Carioca Hotel Boutique</a> é o mais romântico da ilha! ✨ Na Ilha Primeira, decoração exclusiva e ambiente intimista pensado nos mínimos detalhes. Ideal para casais. A partir de R$ 250/diária.",
      en: "The <a href='veneza-carioca.html'>Veneza Carioca Hotel Boutique</a> is the island's most romantic! ✨ On Primeira Island, exclusive décor and intimate atmosphere. Ideal for couples. From R$ 250/night.",
      es: "¡El <a href='veneza-carioca.html'>Veneza Carioca Hotel Boutique</a> es el más romántico de la isla! ✨ En la Isla Primera, decoración exclusiva y ambiente íntimo. Ideal para parejas. Desde R$ 250/noche.",
      zh: "<a href='veneza-carioca.html'>里约威尼斯精品酒店</a>是岛上最浪漫的！✨ 位于伊岛一号，拥有独特的装饰和亲密氛围。非常适合情侣。起价R$ 250/晚。"
    }
  },
  {
    keywords: ["airbnb", "casa inteira", "temporada", "alugar casa", "whole house", "rent house", "casa entera"],
    reply: {
      pt: "Para privacidade total, Airbnbs incríveis! 🏡 <a href='casa-venti.html'>Casa Venti</a> (R$ 450/noite, 7 pessoas), <a href='casa-goia.html'>Casa Goiá</a> (R$ 500, 8 pessoas), <a href='casa-estatua.html'>Casa da Estátua</a> (R$ 1.500, 16 pessoas com piscina!), <a href='lux-48.html'>Lux 48</a> (R$ 250, casais). Veja tudo em <a href='airbnb-temporada.html'>Airbnb & Temporada</a>!",
      en: "For total privacy, amazing Airbnbs! 🏡 <a href='casa-venti.html'>Casa Venti</a> (R$ 450/night, 7 people), <a href='casa-goia.html'>Casa Goiá</a> (R$ 500, 8 people), <a href='casa-estatua.html'>Casa da Estátua</a> (R$ 1,500, 16 people with pool!), <a href='lux-48.html'>Lux 48</a> (R$ 250, couples). See all at <a href='airbnb-temporada.html'>Airbnb & Rentals</a>!",
      es: "¡Para privacidad total, increíbles Airbnbs! 🏡 <a href='casa-venti.html'>Casa Venti</a> (R$ 450/noche, 7 personas), <a href='casa-goia.html'>Casa Goiá</a> (R$ 500, 8 personas), <a href='casa-estatua.html'>Casa da Estátua</a> (R$ 1.500, 16 con piscina!), <a href='lux-48.html'>Lux 48</a> (R$ 250, parejas).",
      zh: "想要完全私密，令人惊叹的Airbnb！🏡 <a href='casa-venti.html'>文蒂之家</a>（R$ 450/晚，7人）、<a href='casa-goia.html'>戈亚之家</a>（R$ 500，8人）、<a href='casa-estatua.html'>雕像之家</a>（R$ 1500，16人含私人泳池！）、<a href='lux-48.html'>豪华48号</a>（R$ 250，情侣）。查看全部：<a href='airbnb-temporada.html'>Airbnb与度假租赁</a>！"
    },
    showWhatsapp: true
  },
  {
    keywords: ["casanova", "luxuoso", "arquitetura unica", "retiro"],
    reply: {
      pt: "A <a href='casanova.html'>Casanova</a> é para quem busca algo único! ✨ Retiro luxuoso com projeto arquitetônico diferenciado, cozinha gourmet e vista exclusiva para a lagoa. Ideal para casais e retiros criativos.",
      en: "The <a href='casanova.html'>Casanova</a> is for those seeking something unique! ✨ Luxurious retreat with distinctive architectural design, gourmet kitchen, and exclusive lagoon view. Ideal for couples and creative retreats.",
      es: "¡La <a href='casanova.html'>Casanova</a> es para quienes buscan algo único! ✨ Refugio lujoso con diseño arquitectónico diferenciado, cocina gourmet y vista a la laguna. Ideal para parejas y retiros creativos.",
      zh: "<a href='casanova.html'>卡萨诺瓦</a>是为寻求独特的人而设的！✨ 拥有独特建筑设计、美食厨房和俯瞰泻湖独家氛围的豪华避难所。非常适合情侣和创意静修。"
    }
  },
  {
    keywords: ["casa estatua", "estatua", "piscina privativa", "grupo grande", "16 pessoas", "pool"],
    reply: {
      pt: "A <a href='casa-estatua.html'>Casa da Estátua</a> é a escolha dos grupos! 🏊‍♂️ 6 quartos, até 16 hóspedes, piscina privativa, churrasqueira e estilo artístico único. A partir de R$ 1.500/noite. Para aniversários, despedidas e reuniões de família!",
      en: "The <a href='casa-estatua.html'>Casa da Estátua</a> is the choice for groups! 🏊‍♂️ 6 bedrooms, up to 16 guests, private pool, BBQ, unique artistic style. From R$ 1,500/night. Perfect for birthdays, bachelor parties, and family reunions!",
      es: "¡La <a href='casa-estatua.html'>Casa da Estátua</a> es la opción para grupos! 🏊‍♂️ 6 habitaciones, hasta 16 huéspedes, piscina privada, asador. Desde R$ 1.500/noche.",
      zh: "<a href='casa-estatua.html'>雕像之家</a>是团体的最佳选择！🏊‍♂️ 6间卧室，最多16位客人，私人泳池，烧烤架和独特的艺术风格。起价R$ 1500/晚。"
    }
  },

  // ==========================================
  // 12. EVENTOS, CASAMENTOS E AGENDA
  // ==========================================
  {
    keywords: ["casamento", "festa", "evento", "confraternizacao", "15 anos", "alugar espaco", "wedding", "party", "event", "rent space", "boda", "fiesta"],
    reply: {
      pt: "A ilha é um cenário dos sonhos para eventos! 🎉 Para grandes celebrações: <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a> (casarão colonial). Eventos intimistas: <a href='gaivota.html'>Espaço Gaivota</a>. Festas ao ar livre: <a href='maracuja.html'>Maracujá da Ilha</a> e <a href='oasis.html'>Oásis Gastrolounge</a>. Peça seu orçamento abaixo!",
      en: "The island is a dream setting for events! 🎉 For large celebrations: <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a> (colonial mansion). Intimate events: <a href='gaivota.html'>Espaço Gaivota</a>. Outdoor parties: <a href='maracuja.html'>Maracujá da Ilha</a> and <a href='oasis.html'>Oásis Gastrolounge</a>. Request a quote below!",
      es: "¡La isla es un escenario de ensueño para eventos! 🎉 Para grandes celebraciones: <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a>. Eventos íntimos: <a href='gaivota.html'>Espacio Gaivota</a>. Fiestas al aire libre: <a href='maracuja.html'>Maracujá da Ilha</a> y <a href='oasis.html'>Oásis Gastrolounge</a>.",
      zh: "小岛是梦想中的活动场所！🎉 大型庆典：<a href='solar-palmeiras.html'>里约棕榈庄园</a>（殖民庄园）。亲密活动：<a href='gaivota.html'>海鸥空间</a>。户外派对：<a href='maracuja.html'>岛上百香果</a>和<a href='oasis.html'>绿洲美食休闲吧</a>。点击下方申请报价！"
    },
    showWhatsapp: true
  },
  {
    keywords: ["solar das palmeiras", "casarao", "colonial", "casar na ilha", "mansion"],
    reply: {
      pt: "O <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a> é um dos espaços mais disputados do Rio para casamentos ao ar livre! 🏛️ Arquitetura colonial, jardins deslumbrantes, gastronomia elaborada. Famoso pelo réveillon com vista para os fogos da Barra. Orçamento sob consulta.",
      en: "The <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a> is one of Rio's most sought-after outdoor wedding venues! 🏛️ Colonial architecture, stunning gardens, elaborate gastronomy. Famous for New Year's with fireworks views. Custom pricing.",
      es: "¡El <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a> es uno de los lugares más buscados de Río para bodas! 🏛️ Arquitectura colonial, jardines impresionantes. Famoso por el Réveillon con vista a los fuegos artificiales.",
      zh: "<a href='solar-palmeiras.html'>里约棕榈庄园</a>是里约最受追捧的户外婚礼场所之一！🏛️ 殖民建筑、壮观花园、精致美食。以举办跨年夜庆典时可以俯瞰巴拉烟花的优越视野而著称。价格按需咨询。"
    }
  },
  {
    keywords: ["gaivota espaco", "espaco gaivota", "gaivota eventos"],
    reply: {
      pt: "O <a href='gaivota.html'>Espaço Gaivota</a> na Ilha Primeira é para celebrações exclusivas! 🥂 Ambiente elegante e intimista com vista para a lagoa. Dia ou noite, o clima é sempre especial. Ideal para confraternizações privadas, aniversários e eventos corporativos.",
      en: "The <a href='gaivota.html'>Espaço Gaivota</a> on Primeira Island is for exclusive celebrations! 🥂 Elegant and intimate atmosphere with lagoon views. Day or night, always special. Ideal for private gatherings, birthdays, and corporate events.",
      es: "¡El <a href='gaivota.html'>Espacio Gaivota</a> en la Isla Primera es para celebraciones exclusivas! 🥂 Ambiente elegante e íntimo con vista a la laguna. Ideal para reuniones privadas, cumpleaños y eventos corporativos.",
      zh: "伊岛一号的<a href='gaivota.html'>海鸥空间</a>是专属庆典的理想场所！🥂 优雅而亲密的氛围，俯瞰泻湖。非常适合私人聚会、生日和企业活动。"
    }
  },
  {
    keywords: ["agenda", "programacao", "hoje", "fim de semana", "o que ta rolando", "festival", "show", "schedule", "today", "weekend"],
    reply: {
      pt: "Nossa ilha é viva o tempo todo! 🎵 Sempre tem festival gastronômico, shows de jazz, rodas de samba e eventos especiais. Confira em <a href='agenda-cultural.html'>Agenda Cultural</a>! Aos fins de semana, há música ao vivo em vários bares.",
      en: "Our island is always alive! 🎵 There's always a food festival, jazz shows, samba circles, and special events. Check our <a href='agenda-cultural.html'>Cultural Agenda</a>! Weekends are especially lively with live music in various bars.",
      es: "¡Nuestra isla siempre está viva! 🎵 Siempre hay festivales gastronómicos, shows de jazz y rodas de samba. ¡Revisa nuestra <a href='agenda-cultural.html'>Agenda Cultural</a>!",
      zh: "我们的小岛总是充满生机！🎵 总是有美食节、爵士音乐会、桑巴圈和特别活动。查看我们的<a href='agenda-cultural.html'>文化日程</a>！周末时各个酒吧都有现场音乐，特别热闹。"
    }
  },

  // ==========================================
  // 13. PERGUNTAS PRÁTICAS EXTRAS
  // ==========================================
  {
    keywords: ["como voltar de noite", "barco de madrugada", "late night boat", "madrugada barco"],
    reply: {
      pt: "Os barcos funcionam 24h! 🌙 De madrugada ficam menos frequentes — pode ter de esperar um pouco no cais. Pode haver pequeno acréscimo no valor. Dica: combine a volta com o barqueiro antes de sair, ou avise se for partir tarde!",
      en: "Boats run 24 hours! 🌙 After midnight they become less frequent — you may need to wait a bit at the dock. Small surcharge possible. Tip: arrange your return with the boatman beforehand if leaving late!",
      es: "¡Los botes funcionan 24h! 🌙 Después de medianoche son menos frecuentes. Puede haber pequeño recargo. ¡Tip: coordina el regreso con el barquero de antemano si sales tarde!",
      zh: "船只24小时运营！🌙 但午夜后频率会降低，您可能需要在码头多等一会儿。可能有小额附加费。提示：如果您要晚走，事先与船夫安排返回时间！"
    }
  },
  {
    keywords: ["reservar mesa", "mesa", "precisa reservar", "table reservation", "do i need to book", "necesito reservar"],
    reply: {
      pt: "Nos restaurantes mais concorridos (Ocyá, Laguna, Deck Bar, Venne), especialmente aos fins de semana, a reserva é <strong>altamente recomendada</strong>! 📋 Os lugares ficam cheios cedo. Para bares e botecos, geralmente não é necessário. Posso ajudar com a reserva via WhatsApp!",
      en: "At the most popular restaurants (Ocyá, Laguna, Deck Bar, Venne), especially on weekends, reservations are <strong>highly recommended</strong>! 📋 Places fill up early. For bars and pubs, generally not needed. I can help with reservations via WhatsApp!",
      es: "¡En los restaurantes más concurridos (Ocyá, Laguna, Deck Bar, Venne), especialmente en fines de semana, la reserva es <strong>muy recomendada</strong>! 📋 Los lugares se llenan temprano. Para bares, generalmente no es necesario.",
      zh: "在最受欢迎的餐厅（欧希亚、拉古纳、甲板酒吧、文内），特别是在周末，<strong>强烈建议预订</strong>！📋 位置很早就会被占满。对于酒吧和传统小馆，通常不需要预订。我可以通过WhatsApp帮助预订！"
    },
    showWhatsapp: true
  },
  {
    keywords: ["instagram", "rede social", "tiktok", "youtube", "redes sociais", "social media", "seguir", "follow"],
    reply: {
      pt: "Nos siga nas redes! 📱 Instagram: <a href='https://www.instagram.com/ilha.da.gigoia' target='_blank'>@ilha.da.gigoia</a>. Também estamos no TikTok e YouTube com conteúdo sobre eventos, restaurantes e novidades da ilha. Ativa o 'seguir'!",
      en: "Follow us on social media! 📱 Instagram: <a href='https://www.instagram.com/ilha.da.gigoia' target='_blank'>@ilha.da.gigoia</a>. Also on TikTok and YouTube with island content, events, and news. Hit 'follow'!",
      es: "¡Síguenos en redes! 📱 Instagram: <a href='https://www.instagram.com/ilha.da.gigoia' target='_blank'>@ilha.da.gigoia</a>. También en TikTok y YouTube con contenido sobre eventos y novedades. ¡Dale 'seguir'!",
      zh: "在社交媒体上关注我们！📱 Instagram: <a href='https://www.instagram.com/ilha.da.gigoia' target='_blank'>@ilha.da.gigoia</a>。我们也在TikTok和YouTube上。点击\"关注\"！"
    }
  },
  {
    keywords: ["dica", "conselho", "sugestao", "tip", "advice", "suggestion", "consejo"],
    reply: {
      pt: "Minhas melhores dicas! 💡 1) Vá de metrô — Linha 4, Jardim Oceânico. 2) Reserve mesa com antecedência nos restaurantes famosos. 3) Tenha dinheiro trocado para o barco. 4) Calçado confortável — ruas de terra! 5) Repelente no fim de tarde. 6) Deixe o dia inteiro — você vai querer ficar! 7) Respeite a natureza e os moradores. 🌴",
      en: "My best tips! 💡 1) Take the subway — Line 4, Jardim Oceânico. 2) Book tables at famous restaurants in advance. 3) Bring cash for the boat. 4) Comfortable shoes — dirt roads! 5) Insect repellent for late afternoon. 6) Set aside the whole day — you'll want to stay! 7) Respect nature and residents. 🌴",
      es: "¡Mis mejores consejos! 💡 1) Ve en metro — Línea 4, Jardim Oceânico. 2) Reserva mesa con anticipación. 3) Lleva efectivo para el bote. 4) Calzado cómodo — calles de tierra. 5) Repelente al final de la tarde. 6) ¡Deja el día entero — querrás quedarte! 7) Respeta la naturaleza y los residentes. 🌴",
      zh: "最佳建议！💡 1) 乘地铁——4号线，花园海洋站。2) 提前预订著名餐厅的桌位。3) 带零钱支付船费。4) 舒适的鞋子——泥土路！5) 傍晚时带驱虫剂。6) 留出整天时间——您会想要停留更久！7) 尊重自然和居民。🌴"
    }
  },
  {
    keywords: ["paqueta", "paquetá", "comparacao ilha", "similar ilha", "parecido"],
    reply: {
      pt: "Boa comparação! 🏝️ A Gigóia lembra Paquetá pelo clima bucólico e acesso só de barco. Mas a Gigóia é bem menor (atravessa em 30 min a pé), fica na zona oeste (Barra da Tijuca), tem foco gastronômico muito forte e muito mais opções de restaurantes e bares. A Gigóia é o 'Paquetá da Barra'!",
      en: "Great comparison! 🏝️ Gigóia resembles Paquetá with its bucolic atmosphere and boat-only access. But Gigóia is much smaller (30 min walk across), in Barra da Tijuca (west side), with a strong gastronomic focus. Gigóia is the 'Paquetá of Barra'!",
      es: "¡Buena comparación! 🏝️ La Gigóia recuerda a Paquetá por el clima bucólico y acceso en bote. Pero Gigóia es mucho más pequeña, en Barra da Tijuca, con fuerte enfoque gastronómico. ¡La Gigóia es el 'Paquetá de Barra'!",
      zh: "很好的比较！🏝️ 吉戈亚让人想起帕克塔，因为两者都有田园氛围和仅限船只通行的入口。但吉戈亚要小得多（步行30分钟可以穿越），位于巴拉达蒂茹卡，有很强的美食重点。吉戈亚是\"巴拉的帕克塔\"！"
    }
  }

];
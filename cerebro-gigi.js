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
  // 2. FALSOS POSITIVOS
  // ==========================================
  {
    keywords: ["sushi", "japones", "japa", "sashimi", "temaki", "yakisoba", "rodizio de sushi", "japanese", "japonesa"],
    reply: {
      pt: "Atualmente não temos restaurantes especializados em culinária japonesa/sushi na Ilha da Gigóia. 🍣 Mas se você gosta de peixe fresco, vai amar a alta gastronomia de frutos do mar do <a href='restaurante-ocya.html'>Ocyá</a> ou do <a href='restaurante-laguna.html'>Laguna</a>!",
      en: "Currently, we don't have Japanese cuisine/sushi restaurants on Gigóia Island. 🍣 But if you like fresh fish, try the high-end seafood at <a href='restaurante-ocya.html'>Ocyá</a> or <a href='restaurante-laguna.html'>Laguna</a>!",
      es: "Actualmente no tenemos restaurantes de sushi en la Isla de Gigóia. 🍣 ¡Pero si te gusta el pescado fresco, prueba la alta gastronomía de <a href='restaurante-ocya.html'>Ocyá</a> o <a href='restaurante-laguna.html'>Laguna</a>!",
      zh: "目前吉戈亚岛上没有专门的日本料理/寿司餐厅。🍣 但如果您喜欢新鲜的鱼，一定会喜欢<a href='restaurante-ocya.html'>欧希亚</a>或<a href='restaurante-laguna.html'>拉古纳</a>的高端海鲜！"
    }
  },
  {
    keywords: ["baleia", "tubarao", "golfinho", "pinguim", "leao marinho", "whale", "shark", "dolphin", "penguin", "ballena", "tiburon", "delfin"],
    reply: {
      pt: "Hahaha! Na nossa lagoa não tem baleia nem tubarão! 🐋 Aqui a água é abrigada. As grandes estrelas da nossa fauna são os jacarés-de-papo-amarelo, as capivaras e as garças.",
      en: "Hahaha! There are no whales or sharks in our lagoon! 🐋 The big stars of our fauna are the broad-snouted caimans, capybaras, and herons.",
      es: "¡Jajaja! ¡En nuestra laguna no hay ballenas ni tiburones! 🐋 Las grandes estrellas de nuestra fauna son los caimanes, las capibaras y las garzas.",
      zh: "哈哈哈！我们的泻湖里没有鲸鱼或鲨鱼！🐋 这里的水域很平静。我们动物群的明星是宽吻凯门鳄、水豚和苍鹭。"
    }
  },
  {
    keywords: ["nadar", "banho", "mergulhar na lagoa", "agua limpa lagoa", "swim lagoon", "bañarse laguna"],
    reply: {
      pt: "Antigamente a lagoa era límpida e os moradores nadavam aqui, mas hoje, por causa do assoreamento e da falta de saneamento, NÃO recomendamos o banho na lagoa. 🚫 Se quiser mergulhar em águas cristalinas, agende nosso passeio para as <a href='ilhas-tijucas.html'>Ilhas Tijucas</a>!",
      en: "In the past the lagoon was crystal clear, but today due to silting and lack of sanitation, we DO NOT recommend swimming in it. 🚫 For crystal-clear water, book our <a href='ilhas-tijucas.html'>Tijucas Islands</a> tour!",
      es: "Antiguamente la laguna era cristalina, pero hoy NO recomendamos bañarse en ella. 🚫 ¡Para aguas cristalinas, reserva nuestro tour a las <a href='ilhas-tijucas.html'>Islas Tijucas</a>!",
      zh: "过去泻湖水质清澈，但如今由于淤积和缺乏污水处理，我们不建议在泻湖游泳。🚫 如果您想在清澈水域游泳，请预订我们的<a href='ilhas-tijucas.html'>蒂茹卡斯群岛</a>之旅！"
    }
  },
  {
    keywords: ["praia de areia", "praia na ilha", "tem praia", "beach on island", "sandy beach", "playa de arena"],
    reply: {
      pt: "A Ilha da Gigóia é cercada pela Lagoa da Tijuca — não tem praia de mar com ondas. 🌴 Mas os barqueiros podem te deixar a apenas 5 minutinhos de caminhada da Praia da Barra da Tijuca, uma das maiores do Brasil!",
      en: "Gigóia Island is surrounded by the lagoon — it has no ocean beach with waves. 🌴 However, boats can drop you just 5 minutes from Barra da Tijuca Beach, one of Brazil's largest!",
      es: "La Isla de Gigóia está rodeada por la laguna — no tiene playa de mar con olas. 🌴 ¡Pero los botes pueden dejarte a solo 5 minutos de la Playa de Barra da Tijuca!",
      zh: "吉戈亚岛被蒂茹卡泻湖环绕——没有有浪的海滩。🌴 但船只可以在步行5分钟内送您到巴拉达蒂茹卡海滩——巴西最长的海滩之一！"
    }
  },

  // ==========================================
  // 3. SAUDAÇÕES E INTERAÇÕES BÁSICAS
  // ==========================================
  {
    keywords: ["oi", "ola", "bom dia", "boa tarde", "boa noite", "tudo bem", "hey", "eae", "opa", "alo", "salve", "hello", "hi", "good morning", "good afternoon", "good evening", "how are you", "hola", "buenos dias", "buenas tardes", "buenas noches", "ajuda", "help", "preciso de ajuda", "me ajuda", "me ajude", "pode me ajudar", "ayuda", "quero saber", "quero conhecer"],
    reply: {
      pt: "Olá! Tudo ótimo por aqui! 😊 Sou a Gigi, a assistente virtual oficial do Portal Ilha da Gigóia. Como posso te ajudar a planejar seu dia perfeito na Veneza Carioca?",
      en: "Hello! Everything is great here! 😊 I'm Gigi, the official virtual assistant of the Gigóia Island Portal. How can I help you plan your perfect day on the 'Carioca Venice'?",
      es: "¡Hola! ¡Todo genial por aquí! 😊 Soy Gigi, la asistente virtual oficial del Portal Isla de Gigóia. ¿Cómo puedo ayudarte a planificar tu día perfecto?",
      zh: "您好！这里一切都很棒！😊 我是吉吉，吉戈亚岛门户网站的官方虚拟助手。我今天能帮您规划在\"卡里奥卡威尼斯\"的完美一天吗？"
    }
  },
  {
    keywords: ["obrigado", "obrigada", "valeu", "show", "perfeito", "otimo", "top", "legal", "agradecido", "incrivel", "maravilha", "thanks", "thank you", "great", "perfect", "awesome", "gracias", "genial", "perfecto"],
    reply: {
      pt: "Por nada! Fico muito feliz em ajudar. 🌴 Se precisar de mais alguma dica, quiser saber de algum restaurante ou agendar um passeio, é só me chamar!",
      en: "You're welcome! I'm very happy to help. 🌴 If you need any more tips, want to know about a restaurant, or book a tour, just let me know!",
      es: "¡De nada! Me alegra mucho ayudar. 🌴 ¡Si necesitas más consejos o quieres reservar un tour, solo dímelo!",
      zh: "不客气！很高兴能帮上忙。🌴 如果您需要更多建议或想预订游览，请随时联系我！"
    }
  },
  {
    keywords: ["quem e voce", "robo", "inteligencia artificial", "bot", "assistente", "vc e real", "who are you", "robot", "artificial intelligence", "assistant", "quien eres", "asistente"],
    reply: {
      pt: "Eu sou a Gigi, a mascote e assistente virtual do Portal Ilha da Gigóia! 🕊️ Fui programada para conhecer cada detalhe histórico, gastronômico e turístico daqui. Se eu não souber algo, te passo para nossa equipe humana!",
      en: "I am Gigi, the mascot and virtual assistant of the Gigóia Island Portal! 🕊️ I was programmed to know every historical, gastronomic, and tourist detail here. If I don't know something, I'll connect you to our human team!",
      es: "¡Soy Gigi, la mascota y asistente virtual del Portal Isla Gigóia! 🕊️ Fui programada para conocer cada detalle histórico, gastronómico y turístico. Si no sé algo, ¡te paso a nuestro equipo humano!",
      zh: "我是吉吉，吉戈亚岛门户网站的吉祥物和虚拟助手！🕊️ 我被编程来了解这里每一个历史、美食和旅游细节。如果我不知道某些事情，我会把您转接给我们的人工团队！"
    }
  },

  // ==========================================
  // 4. PERGUNTAS GENÉRICAS
  // ==========================================
  {
    keywords: ["comer", "restaurante", "fome", "almoco", "jantar", "comida", "onde comer", "gastronomia", "eat", "restaurant", "lunch", "dinner", "food", "where to eat", "donde comer", "almuerzo", "cena", "indicação", "indicacao", "recomendacao", "recomendação", "recommend", "best restaurant", "melhor restaurante", "bom restaurante", "bar", "bares", "petisco", "bebida", "drinks"],
    reply: {
      pt: "A Gigóia é um paraíso gastronômico! 🍤 Alta gastronomia no <a href='restaurante-ocya.html'>Ocyá</a> (Guia Michelin), o pioneiro <a href='restaurante-laguna.html'>Laguna</a> (desde 2002), o animado <a href='restaurante-deck-bar.html'>Deck Bar</a> com música ao vivo, e muito mais. Veja a lista completa em <a href='restaurantes.html'>Onde Comer</a>. 💡 Reserve mesa com antecedência aos fins de semana!",
      en: "Gigóia is a gastronomic paradise! 🍤 Fine dining at <a href='restaurante-ocya.html'>Ocyá</a> (Michelin), the pioneer <a href='restaurante-laguna.html'>Laguna</a> (since 2002), the lively <a href='restaurante-deck-bar.html'>Deck Bar</a> with live music, and much more. See the full list at <a href='restaurantes.html'>Where to Eat</a>. 💡 Book tables in advance on weekends!",
      es: "¡Gigóia es un paraíso gastronómico! 🍤 Alta gastronomía en <a href='restaurante-ocya.html'>Ocyá</a> (Michelin), el pionero <a href='restaurante-laguna.html'>Laguna</a> (desde 2002), el animado <a href='restaurante-deck-bar.html'>Deck Bar</a>. ¡Mira la lista completa en <a href='restaurantes.html'>Dónde Comer</a>!",
      zh: "吉戈亚是美食天堂！🍤 <a href='restaurante-ocya.html'>欧希亚</a>高级美食（米其林认可）、先驱<a href='restaurante-laguna.html'>拉古纳</a>（自2002年）、充满活力的<a href='restaurante-deck-bar.html'>甲板酒吧</a>。查看完整列表：<a href='restaurantes.html'>餐饮指南</a>。💡 周末请提前预订！"
    }
  },
  {
    keywords: ["passeio", "passear", "tour", "roteiro", "fazer o que", "o que fazer", "atividade", "turismo", "what to do", "excursion", "que hacer", "paseo", "actividad", "atracao", "atração", "programa", "opcoes", "opções", "diversao", "lazer", "o que tem", "o que visitar", "visit", "attraction"],
    reply: {
      pt: "Os passeios de barco são a alma da ilha! 🚤 Recomendamos o <a href='pantanal-carioca.html'>Pantanal Carioca</a> (ver jacarés e capivaras), o mergulho nas <a href='ilhas-tijucas.html'>Ilhas Tijucas</a>, o passeio pela <a href='reserva.html'>Praia da Reserva</a> e o <a href='jet-ski.html'>Jet Ski</a>. Veja todas as opções em <a href='passeios-rotas.html'>Passeios & Rotas</a>!",
      en: "Boat tours are the soul of the island! 🚤 We recommend the <a href='pantanal-carioca.html'>Carioca Pantanal</a> (see caimans and capybaras), diving at <a href='ilhas-tijucas.html'>Tijucas Islands</a>, the <a href='reserva.html'>Reserva Beach</a> tour, and <a href='jet-ski.html'>Jet Ski</a>. See all options at <a href='passeios-rotas.html'>Tours & Routes</a>!",
      es: "¡Los paseos en bote son el alma de la isla! 🚤 Recomendamos el <a href='pantanal-carioca.html'>Pantanal Carioca</a>, bucear en las <a href='ilhas-tijucas.html'>Islas Tijucas</a> y el <a href='jet-ski.html'>Jet Ski</a>. ¡Ve todas las opciones en <a href='passeios-rotas.html'>Paseos & Rutas</a>!",
      zh: "乘船游览是小岛的灵魂！🚤 我们推荐<a href='pantanal-carioca.html'>里约潘塔纳尔</a>（观看凯门鳄和水豚）、<a href='ilhas-tijucas.html'>蒂茹卡斯群岛</a>潜水、<a href='reserva.html'>保护区海滩</a>游览和<a href='jet-ski.html'>摩托艇</a>。查看所有选项：<a href='passeios-rotas.html'>游览与路线</a>！"
    },
    showWhatsapp: true
  },
  {
    keywords: ["dormir", "pousada", "hotel", "hospedagem", "ficar", "pernoite", "onde dormir", "onde ficar", "sleep", "inn", "accommodation", "stay", "posada", "alojamiento"],
    reply: {
      pt: "Dormir aqui é uma paz! 🛏️ Temos pousadas charmosas como a <a href='pousada-barra.html'>Pousada Barra da Tijuca</a> (a partir de R$ 220) e a <a href='pousada-marisis.html'>Pousada Marísis</a> (a partir de R$ 200), além de casas de temporada incríveis. Acesse <a href='hospedagem.html'>Hospedagem</a> para ver tudo!",
      en: "Sleeping here is pure peace! 🛏️ We have charming inns like <a href='pousada-barra.html'>Pousada Barra da Tijuca</a> (from R$ 220) and <a href='pousada-marisis.html'>Pousada Marísis</a> (from R$ 200), plus amazing vacation homes. Visit <a href='hospedagem.html'>Accommodation</a> to see everything!",
      es: "¡Dormir aquí es pura paz! 🛏️ Tenemos posadas como <a href='pousada-barra.html'>Pousada Barra da Tijuca</a> (desde R$ 220) y <a href='pousada-marisis.html'>Pousada Marísis</a> (desde R$ 200). ¡Visita <a href='hospedagem.html'>Alojamiento</a> para ver todo!",
      zh: "在这里睡觉是一种享受！🛏️ 我们有<a href='pousada-barra.html'>巴拉旅馆</a>（起价R$ 220）和<a href='pousada-marisis.html'>玛丽西斯旅馆</a>（起价R$ 200）等迷人的旅馆，以及令人惊叹的度假屋。访问<a href='hospedagem.html'>住宿</a>查看全部选项！"
    },
    showWhatsapp: true
  },

  // ==========================================
  // 5. HISTÓRIA E CURIOSIDADES
  // ==========================================
  {
    keywords: ["historia", "origem", "formacao", "geologia", "criacao", "passado", "17 mil anos", "pedra branca", "history", "origin", "geology", "curiosidade", "fatos", "o que voce sabe", "me fala sobre a ilha", "me conta sobre", "informacoes sobre a ilha", "tudo sobre a ilha", "sobre a ilha", "conta sobre", "fala sobre", "tell me about", "about the island", "what do you know", "cuentame sobre", "información sobre"],
    reply: {
      pt: "A história é fascinante! 📜 Há 17 mil anos o mar era 70m mais baixo e batia no maciço da Pedra Branca. A erosão formou a praia da Barra, as lagoas e o nosso arquipélago. A ilha era originalmente 3 ilhas (Gigóia, Coronéis e Guaimun) separadas por canais que secaram. Saiba mais em <a href='historia-cultura.html'>História & Cultura</a>.",
      en: "The history is fascinating! 📜 17,000 years ago the sea was 70m lower and reached the Pedra Branca mountains. Erosion formed Barra beach, the lagoons and our archipelago. The island was originally 3 islands (Gigóia, Coronéis and Guaimun) separated by canals that dried up. More at <a href='historia-cultura.html'>History & Culture</a>.",
      es: "¡La historia es fascinante! 📜 Hace 17.000 años el mar estaba 70m más bajo. La erosión formó la playa de Barra, las lagunas y nuestro archipiélago. La isla era originalmente 3 islas separadas por canales que se secaron. Más info en <a href='historia-cultura.html'>Historia & Cultura</a>.",
      zh: "历史非常迷人！📜 17000年前海平面比现在低70米，曾到达白石山脉。侵蚀形成了巴拉海滩、泻湖和我们的群岛。小岛最初是3个小岛（吉戈亚、科罗内斯和瓜伊蒙），被运河分隔，后来干涸。了解更多：<a href='historia-cultura.html'>历史与文化</a>。"
    }
  },
  {
    keywords: ["veneza carioca apelido", "por que veneza", "venice", "why veneza", "venecia carioca"],
    reply: {
      pt: "Ganhamos o apelido de 'Veneza Carioca' porque somos um arquipélago cercado de canais navegáveis, sem carros, onde a vida flui em barcos num clima bucólico que contrasta com a metrópole ao redor. 🚤 É um universo paralelo dentro de Barra da Tijuca!",
      en: "We earned the nickname 'Carioca Venice' because we are an archipelago surrounded by navigable canals, car-free, where life flows on boats — a bucolic atmosphere contrasting with the surrounding city. 🚤 A parallel universe inside Barra da Tijuca!",
      es: "Ganamos el apodo de 'Venecia Carioca' porque somos un archipiélago rodeado de canales navegables, sin autos, donde la vida fluye en botes. 🚤 ¡Un universo paralelo dentro de Barra da Tijuca!",
      zh: "我们获得了\"卡里奥卡威尼斯\"的绰号，因为我们是一个被可通航运河环绕的群岛，没有汽车，生活在船上流淌，田园氛围与周围的大都市形成对比。🚤 这是巴拉达蒂茹卡内的一个平行宇宙！"
    }
  },
  {
    keywords: ["rua dos colibris", "guaimun", "coroneis", "3 ilhas", "tres ilhas", "three islands"],
    reply: {
      pt: "Curiosidade: A Gigóia eram 3 ilhas! 🏝️ A Ilha da Gigóia, dos Coronéis e Guaimun. O canal que as separava secou com o assoreamento e se transformou na famosa <strong>Rua dos Colibris</strong> — uma das ruas principais da ilha hoje!",
      en: "Fun fact: Gigóia was 3 islands! 🏝️ Gigóia Island, Coronéis Island and Guaimun Island. The dividing canal silted up over time and became the famous <strong>Colibris Street</strong> — now one of the island's main streets!",
      es: "Dato curioso: ¡Gigóia eran 3 islas! 🏝️ Gigóia, Coronéis y Guaimun. El canal que las dividía se rellenó y hoy es la famosa <strong>Calle Colibris</strong> — una de las calles principales de la isla.",
      zh: "趣味知识：吉戈亚曾是3个小岛！🏝️ 吉戈亚岛、科罗内斯岛和瓜伊蒙岛。分隔它们的运河逐渐淤积，现在变成了著名的<strong>蜂鸟街（Rua dos Colibris）</strong>——如今是岛上的主要街道之一！"
    }
  },
  {
    keywords: ["ponte de madeira", "ponte historica", "avenida das americas", "ligacao continente", "bridge"],
    reply: {
      pt: "No passado, a ilha tinha uma ponte de madeira com acesso direto para a Av. das Américas! 🌉 Com o tempo ela foi demolida. Hoje o acesso 100% por barco é o nosso maior charme e o que nos diferencia de tudo!",
      en: "In the past, the island had a wooden bridge connecting to Av. das Américas! 🌉 Over time it was demolished. Today, the 100% boat-only access is our greatest charm and what sets us apart!",
      es: "¡En el pasado la isla tenía un puente de madera que conectaba con la Av. das Américas! 🌉 Con el tiempo fue demolido. ¡Hoy el acceso 100% en bote es nuestro mayor encanto!",
      zh: "过去，小岛有一座木桥直接连接到美洲大道！🌉 随着时间的推移，它被拆除了。如今，100%的船只通行是我们最大的魅力，也是让我们与众不同的地方！"
    }
  },
  {
    keywords: ["pescadores", "primeiros moradores", "antigamente", "como comecou", "fishermen", "historia da ilha"],
    reply: {
      pt: "A ocupação começou com pescadores que viviam da pesca do camarão em águas tão limpas que se via o fundo! 🎣 O serviço de barcos foi iniciado pelos moradores Antônio, Zé Íris e Zé Grande — só de dia. Mais tarde surgiu o transporte noturno com Seu João. Em 2015, Nilson Simão criou o Simão Express com 6 embarcações licenciadas.",
      en: "Occupation began with fishermen living off shrimp fishing in waters so clear you could see the bottom! 🎣 Boat service was started by residents Antônio, Zé Íris and Zé Grande — daytime only. Night transport appeared with Seu João. In 2015, Nilson Simão launched Simão Express with 6 licensed boats.",
      es: "La ocupación comenzó con pescadores que vivían de la pesca del camarón en aguas tan cristalinas que se veía el fondo. 🎣 El servicio de botes fue iniciado por los residentes Antônio, Zé Íris y Zé Grande. En 2015, Nilson Simão creó el Simão Express.",
      zh: "小岛的历史始于渔民在清澈可见水底的湖水中捕虾！🎣 船只服务由居民安东尼奥、泽·伊里斯和泽·格兰德发起——最初只在白天。夜间交通后来由若昂先生开创。2015年，尼尔森·西芒创立了西芒快递船出租服务，拥有6艘持牌船只。"
    }
  },
  {
    keywords: ["gigoga", "planta", "nome da ilha", "origem do nome"],
    reply: {
      pt: "O nome vem da <strong>gigoga</strong>! 🌿 Uma planta aquática flutuante que cobre a superfície da lagoa em várias áreas. Suas raízes filtram matéria orgânica, ajudando a limpar as águas e servindo de abrigo para várias espécies da fauna local.",
      en: "The name comes from the <strong>gigoga</strong>! 🌿 An aquatic floating plant that covers the lagoon's surface. Its roots filter organic matter, helping clean the water and providing habitat for local wildlife.",
      es: "¡El nombre viene de la <strong>gigoga</strong>! 🌿 Una planta acuática flotante que cubre la superficie de la laguna. Sus raíces filtran materia orgánica, ayudando a limpiar el agua.",
      zh: "名字来源于<strong>gigoga</strong>！🌿 一种漂浮的水生植物，覆盖泻湖表面。它的根部过滤有机物，有助于净化水质，并为当地野生动物提供栖息地。"
    }
  },
  {
    keywords: ["populacao", "habitantes", "quantas pessoas", "moradores", "population", "how many people", "residents"],
    reply: {
      pt: "A Ilha da Gigóia foi a que mais cresceu no complexo lagunar. Hoje abriga entre 3 mil e 7 mil moradores (estimativas variam). Todo o arquipélago das 9 ilhas soma quase 12 mil pessoas vivendo num ambiente único sem carros! 🏘️",
      en: "Gigóia Island grew the fastest in the lagoon complex. Today it houses between 3,000 and 7,000 residents. The entire 9-island archipelago totals nearly 12,000 people living in a unique car-free environment! 🏘️",
      es: "¡La Isla de Gigóia fue la que más creció! Hoy alberga entre 3.000 y 7.000 residentes. Todo el archipiélago de 9 islas suma casi 12.000 personas en un ambiente sin autos. 🏘️",
      zh: "吉戈亚岛是泻湖综合体中增长最快的。今天居住着3000至7000名居民（估计数字有所不同）。整个9岛群岛合计有近12000人生活在这个独特的无汽车环境中！🏘️"
    }
  },
  {
    keywords: ["iptu", "uniao", "prefeitura", "ilegal", "non edificando", "decreto", "comprar casa", "terreno"],
    reply: {
      pt: "Curiosidade fundiária: Todos os terrenos pertencem à União Federal. Em 1981, um decreto municipal proibiu novas construções. Por fiscalização precária no passado, a maioria das casas não tem registro formal de IPTU. 🏢 Uma situação sui generis que faz parte do charme histórico da ilha.",
      en: "Land curiosity: All land belongs to the Federal Government. A 1981 municipal decree banned new construction. Due to poor oversight in the past, most houses lack formal property tax (IPTU) registration. 🏢 A unique situation that is part of the island's historical charm.",
      es: "Curiosidad: Todo el terreno pertenece al Gobierno Federal. Un decreto de 1981 prohibió nuevas construcciones. Por fiscalización precaria en el pasado, la mayoría de las casas no tienen registro formal de IPTU. 🏢",
      zh: "土地知识：这里所有土地均属于联邦政府。1981年的市政法令禁止新建筑。由于过去监管不力，大多数房屋没有正式的房产税（IPTU）登记。🏢 这是小岛历史魅力的一部分。"
    }
  },
  {
    keywords: ["poluicao", "esgoto", "saneamento", "assoreamento", "pollution", "sewage"],
    reply: {
      pt: "A urbanização desordenada trouxe desafios sérios — o esgoto gerado é descartado sem tratamento nas lagoas, causando poluição e assoreamento. 🌿 Mesmo assim, a natureza resiste bravamente e continua sendo o maior tesouro da ilha. Por isso preservar é fundamental!",
      en: "Unregulated urbanization brought serious challenges — sewage is dumped without proper treatment into the lagoons, causing pollution and silting. 🌿 Despite this, nature resists and remains the island's greatest treasure. That's why preservation is fundamental!",
      es: "La urbanización desordenada trajo serios desafíos — las aguas residuales se vierten sin tratamiento en las lagunas. 🌿 Aun así, la naturaleza resiste y sigue siendo el mayor tesoro de la isla. ¡Por eso la preservación es fundamental!",
      zh: "无序城市化带来了严峻挑战——污水未经处理就排入泻湖，造成污染和淤积。🌿 尽管如此，自然仍然顽强抵抗，继续成为小岛最宝贵的财富。这就是为什么保护如此重要！"
    }
  },

  // ==========================================
  // 6. COMO CHEGAR E TRANSPORTE
  // ==========================================
  {
    keywords: ["como chegar", "como ir", "chegar", "acesso", "how to get", "como llegar", "acceso", "directions", "onde fica", "where is", "localizacao", "localização", "endereco", "endereço", "address", "como acessar", "como entrar", "como visitar", "how to visit", "how do i get", "como faço para chegar", "transport", "transporte"],
    reply: {
      pt: "Chegar é simples! 🚇 <strong>De metrô:</strong> Linha 4 → Estação Jardim Oceânico → saída 'Lagoa' → ~200m até o atracadouro. <strong>De carro:</strong> estacione no Shopping Barra Point ou Av. Armando Lombardi, 350. O barco (chalana) custa R$ 2–6 e funciona 24h! Guia completo: <a href='como-chegar.html'>Como Chegar</a>.",
      en: "Getting there is easy! 🚇 <strong>By subway:</strong> Line 4 → Jardim Oceânico station → 'Lagoa' exit → ~200m to the dock. <strong>By car:</strong> park at Shopping Barra Point or Av. Armando Lombardi, 350. The boat costs R$ 2–6 and runs 24/7! Full guide: <a href='como-chegar.html'>How to Get Here</a>.",
      es: "¡Llegar es simple! 🚇 <strong>En metro:</strong> Línea 4 → Estación Jardim Oceânico → salida 'Lagoa' → ~200m al embarcadero. <strong>En auto:</strong> Shopping Barra Point o Av. Armando Lombardi, 350. El bote cuesta R$ 2–6 y funciona 24h. Guía completa: <a href='como-chegar.html'>Cómo Llegar</a>.",
      zh: "到达很简单！🚇 <strong>乘地铁：</strong>4号线→花园海洋站→\"泻湖\"出口→步行约200米到码头。<strong>开车：</strong>停在巴拉点购物中心或Av. Armando Lombardi 350号。船票R$ 2-6，全天24小时运营！完整指南：<a href='como-chegar.html'>如何到达</a>。"
    }
  },
  {
    keywords: ["metro", "metrô", "linha 4", "jardim oceanico", "subway", "underground"],
    reply: {
      pt: "De metrô é a melhor opção! 🚇 Pegue a <strong>Linha 4 (amarela)</strong> até a estação <strong>Jardim Oceânico</strong>. Use a saída 'Lagoa' e caminhe ~200 metros em direção à lagoa. Você vai encontrar os barqueiros esperando para te levar à ilha. Simples assim!",
      en: "The subway is the best option! 🚇 Take <strong>Line 4 (yellow)</strong> to <strong>Jardim Oceânico</strong> station. Use the 'Lagoa' exit and walk ~200 meters toward the lagoon. You'll find boat operators waiting to take you to the island. Simple as that!",
      es: "¡El metro es la mejor opción! 🚇 Toma la <strong>Línea 4 (amarilla)</strong> hasta la estación <strong>Jardim Oceânico</strong>. Usa la salida 'Lagoa' y camina ~200 metros hacia la laguna. ¡Encontrarás barqueros esperando!",
      zh: "地铁是最好的选择！🚇 乘坐<strong>4号线（黄线）</strong>到<strong>花园海洋站</strong>。走\"泻湖\"出口，向泻湖方向步行约200米。您会找到等待送您到小岛的船夫。就这么简单！"
    }
  },
  {
    keywords: ["carro", "estacionamento", "estacionar", "vaga", "parking", "park", "coche", "estacionamiento"],
    reply: {
      pt: "A ilha não tem carros! 🚫🚗 Se vier de carro, estacione no <strong>Shopping Barra Point</strong> ou nos estacionamentos particulares da <strong>Av. Armando Lombardi, 350</strong>. Depois é só pegar o barco! Veja mais em <a href='como-chegar.html'>Como Chegar</a>.",
      en: "The island has no cars! 🚫🚗 If you come by car, park at <strong>Shopping Barra Point</strong> or private lots on <strong>Av. Armando Lombardi, 350</strong>. Then just take the boat! More details at <a href='como-chegar.html'>How to Get Here</a>.",
      es: "¡La isla no tiene coches! 🚫🚗 Si vienes en auto, estaciona en <strong>Shopping Barra Point</strong> o en los aparcamientos de <strong>Av. Armando Lombardi, 350</strong>. Más detalles en <a href='como-chegar.html'>Cómo Llegar</a>.",
      zh: "小岛没有汽车！🚫🚗 如果您开车来，请停在<strong>巴拉点购物中心</strong>或<strong>Av. Armando Lombardi 350号</strong>的私人停车场。然后乘船即可！更多详情：<a href='como-chegar.html'>如何到达</a>。"
    }
  },
  {
    keywords: ["barco", "balsa", "chalana", "travessia", "valor do barco", "preco do barco", "horario barco", "horario", "horários", "horarios", "funcionamento", "abre", "fecha", "que horas", "quando abre", "quando fecha", "boat", "ferry", "crossing", "bote", "lancha", "schedule hours", "opening hours", "horario de funcionamento"],
    reply: {
      pt: "As chalanas funcionam <strong>24 horas por dia, 7 dias por semana!</strong> 🚤 O valor varia entre R$ 2,00 e R$ 6,00 por pessoa dependendo da distância. De madrugada pode ter um pequeno acréscimo. Dica: diga o nome do restaurante e o barqueiro te deixa direto no deck certo!",
      en: "The chalanas (boats) run <strong>24 hours a day, 7 days a week!</strong> 🚤 Fare varies from R$ 2 to R$ 6 per person depending on distance. There may be a small surcharge late at night. Tip: tell the boatman the restaurant name and they'll drop you at the right dock!",
      es: "¡Las chalanas (botes) funcionan <strong>24 horas al día, 7 días a la semana!</strong> 🚤 El valor varía entre R$ 2 y R$ 6 por persona. De madrugada puede haber un pequeño recargo. ¡Dato: di el nombre del restaurante y el barquero te lleva directo!",
      zh: "渡船（chalanas）<strong>每天24小时、每周7天</strong>运营！🚤 费用根据距离从R$ 2到R$ 6不等。深夜可能有小额附加费。提示：告诉船夫餐厅名称，他们会直接送您到正确的码头！"
    }
  },
  {
    keywords: ["como voltar", "volta", "retorno", "sair da ilha", "how to return", "come back", "volver"],
    reply: {
      pt: "Para voltar é simples! 🚤 Vá até qualquer deck ou cais da ilha e espere um barco — eles ficam circulando constantemente. Você paga a passagem de volta separada (R$ 2–6). Os barcos funcionam 24h, então não tem hora de fechar!",
      en: "Getting back is simple! 🚤 Go to any dock on the island and wait for a boat — they circulate constantly. You pay the return fare separately (R$ 2–6). Boats run 24/7, so there's no closing time!",
      es: "¡Volver es simple! 🚤 Ve a cualquier muelle de la isla y espera un bote — circulan constantemente. Pagas el regreso por separado (R$ 2–6). ¡Los botes funcionan 24h, sin hora de cierre!",
      zh: "返回很简单！🚤 前往小岛的任何码头等待船只——它们持续循环运行。您需要单独支付返程费用（R$ 2-6）。船只24小时运营，没有关闭时间！"
    }
  },
  {
    keywords: ["uber", "99", "taxi", "onibus", "bus", "como vir de carro", "transporte publico"],
    reply: {
      pt: "Várias opções de transporte! 🚗 Uber/99: peça para 'Pier da Barra' ou 'Av. Armando Lombardi, 350'. Ônibus: várias linhas passam pela Av. das Américas próximo ao local. O metrô (Linha 4 - Jardim Oceânico) é o mais prático de todos!",
      en: "Multiple transport options! 🚗 Uber/99: request to 'Pier da Barra' or 'Av. Armando Lombardi, 350'. Bus: several lines pass along Av. das Américas nearby. The subway (Line 4 - Jardim Oceânico) is the most practical of all!",
      es: "¡Múltiples opciones de transporte! 🚗 Uber/99: pide al 'Pier da Barra' o 'Av. Armando Lombardi, 350'. Autobús: varias líneas pasan por Av. das Américas. ¡El metro (Línea 4 - Jardim Oceânico) es lo más práctico!",
      zh: "多种交通选择！🚗 Uber/99：请求前往\"巴拉码头\"或\"Av. Armando Lombardi 350号\"。公交：多条线路经过附近的美洲大道。地铁（4号线-花园海洋站）是最实用的！"
    }
  },

  // ==========================================
  // 7. INFORMAÇÕES PRÁTICAS
  // ==========================================
  {
    keywords: ["banheiro", "wc", "sanitario", "toalete", "toilet", "restroom", "bathroom", "baño"],
    reply: {
      pt: "Não há banheiros públicos na ilha! 🚾 A dica é usar os banheiros dos restaurantes, bares ou pousadas onde você consumir. A maioria dos estabelecimentos disponibiliza para clientes. Uma boa razão para parar em um bar e tomar uma bebida! 😄",
      en: "There are no public restrooms on the island! 🚾 The tip is to use bathrooms at restaurants, bars, or inns where you're a customer. Most establishments make restrooms available to customers. A good reason to stop for a drink! 😄",
      es: "¡No hay baños públicos en la isla! 🚾 Usa los baños de los restaurantes, bares o posadas donde consumas. La mayoría los pone a disposición de los clientes. ¡Una buena razón para parar a tomar algo! 😄",
      zh: "岛上没有公共厕所！🚾 建议使用您光顾的餐厅、酒吧或旅馆的卫生间。大多数场所为顾客提供卫生间使用权。这是在酒吧停下来喝一杯的好理由！😄"
    }
  },
  {
    keywords: ["acessibilidade", "cadeirante", "cadeira de rodas", "deficiente", "mobilidade reduzida", "wheelchair", "accessibility", "disabled"],
    reply: {
      pt: "É importante ser honesto: a ilha tem ruas de terra batida, vielas estreitas e subida/descida de barcos, o que torna o acesso <strong>bastante difícil para cadeirantes</strong>. ♿ A maioria das ruas não tem rampas. Recomendamos consultar diretamente o estabelecimento de interesse antes de ir.",
      en: "It's important to be honest: the island has dirt roads, narrow alleys, and boarding/unboarding boats, making it <strong>quite challenging for wheelchair users</strong>. ♿ Most streets lack ramps. We recommend contacting your specific destination directly before going.",
      es: "Es importante ser honesto: la isla tiene calles de tierra, callejones estrechos y subida/bajada de botes, lo que la hace <strong>bastante difícil para sillas de ruedas</strong>. ♿ Recomendamos consultar directamente con el establecimiento antes de ir.",
      zh: "关于这点需要坦诚说明：小岛有泥土路、狭窄小巷和上下船只，这对<strong>轮椅使用者来说相当困难</strong>。♿ 大多数街道没有坡道。建议在前往前直接联系您的目的地场所咨询。"
    }
  },
  {
    keywords: ["aceita cartao", "aceita pix", "dinheiro", "pagamento", "forma de pagamento", "card", "payment", "cash", "tarjeta", "efectivo"],
    reply: {
      pt: "A maioria dos restaurantes e pousadas aceita PIX e cartão de crédito/débito. 💳 Mas alguns botecos e barqueiros ainda preferem dinheiro. Nossa dica: sempre tenha um pouco de dinheiro trocado — especialmente para a travessia de barco (R$ 2–6). PIX é aceito em quase todo lugar!",
      en: "Most restaurants and inns accept PIX and credit/debit cards. 💳 But some traditional bars and boatmen still prefer cash. Our tip: always carry some cash — especially for the boat crossing (R$ 2–6). PIX is accepted almost everywhere!",
      es: "La mayoría de restaurantes y posadas aceptan tarjeta y PIX (pago digital). 💳 Pero algunos botecos y barqueros prefieren efectivo. Recomendación: siempre ten algo de efectivo, especialmente para el bote (R$ 2–6).",
      zh: "大多数餐厅和旅馆接受PIX和信用卡/借记卡。💳 但一些传统小馆和船夫仍然更喜欢现金。我们的建议：始终携带一些零钱——特别是用于支付渡船费用（R$ 2-6）。PIX几乎在任何地方都被接受！"
    }
  },
  {
    keywords: ["quanto tempo", "tempo de visita", "quanto tempo fica", "how long", "cuanto tiempo", "duracao visita", "vale a pena", "vale a pena ir", "compensa", "is it worth", "merece la pena", "um dia", "um dia inteiro", "half day", "meio dia", "dia inteiro"],
    reply: {
      pt: "Depende do seu plano! ⏰ A ilha pode ser atravessada a pé em 30min–1h. Para passeio básico + almoço: 3–4 horas. Para um dia completo com passeio de barco + refeições + pôr do sol: o dia inteiro! Muitos visitantes ficam mais tempo do que o planejado — a ilha é viciante! 😄",
      en: "It depends on your plan! ⏰ The island can be walked in 30min–1h. For basic tour + lunch: 3–4 hours. For a full day with boat tour + meals + sunset: the whole day! Many visitors stay longer than planned — the island is addictive! 😄",
      es: "¡Depende de tus planes! ⏰ La isla se puede cruzar a pie en 30min–1h. Para paseo básico + almuerzo: 3–4 horas. Para un día completo: ¡el día entero! Muchos visitantes se quedan más de lo planeado. 😄",
      zh: "这取决于您的计划！⏰ 步行穿越小岛需要30分钟至1小时。基本游览+午餐：3-4小时。如果是完整的一天——乘船游览+用餐+日落：留出整天！许多游客停留的时间超过计划——这里令人上瘾！😄"
    }
  },
  {
    keywords: ["chuva", "chover", "vai chover", "tempo ruim", "chove", "rain", "bad weather", "lluvia", "clima", "como é o clima", "como esta o tempo", "como está o tempo", "como ta o tempo", "tempo agora", "tempo hoje", "tempo la", "tempo lá", "temperatura agora", "temperatura hoje", "calor", "frio", "quente", "weather", "climate", "temperature", "forecast", "previsao", "previsão", "sol hoje", "nublado", "hace calor", "hace frio", "va a llover", "天气", "下雨"],
    reply: {
      pt: "__WEATHER__",
      en: "__WEATHER__",
      es: "__WEATHER__",
      zh: "__WEATHER__"
    }
  },
  {
    keywords: ["melhor dia", "melhor horario", "quando ir", "best time", "best day", "cuando ir", "mejor dia"],
    reply: {
      pt: "Ótima pergunta! 📅 Para <strong>sossego</strong>: venha de segunda a quinta — ruas quase vazias, mesa fácil. Para <strong>agito e música ao vivo</strong>: sábado ou domingo, a ilha fica animadíssima! Melhor horário: chegue às 11h para o almoço e fique até o pôr do sol (17h–18h).",
      en: "Great question! 📅 For <strong>peace</strong>: visit Monday to Thursday — nearly empty streets, easy table availability. For <strong>buzz and live music</strong>: come Saturday or Sunday for a lively crowd! Best time: arrive at 11am for lunch and stay until sunset (5–6pm).",
      es: "¡Buena pregunta! 📅 Para <strong>tranquilidad</strong>: ve de lunes a jueves. Para <strong>ambiente y música</strong>: sábado o domingo. ¡El horario ideal es llegar a las 11h para almorzar y quedarse hasta el atardecer!",
      zh: "很好的问题！📅 寻求<strong>安静</strong>：周一至周四来——街道几乎空无一人，容易订到位子。寻求<strong>热闹和音乐</strong>：周六或周日来！最佳时间：上午11点到达享用午餐，一直待到日落（下午5-6点）。"
    }
  },
  {
    keywords: ["crianca", "bebe", "familia", "kids", "children", "family", "baby", "nino"],
    reply: {
      pt: "A ilha é ótima para famílias! 👨‍👩‍👧 Sem carros nas ruas, as crianças andam com mais liberdade. Para pequenos, leve carrinho leve (ruas de terra podem dificultar carrinhos grandes). O <a href='bar-kauai.html'>Kauai Gastrolounge</a> tem área kids. Ver jacarés e capivaras no <a href='pantanal-carioca.html'>Pantanal Carioca</a> é uma experiência que eles adoram!",
      en: "The island is great for families! 👨‍👩‍👧 With no cars, children can move more freely. For toddlers, bring a light stroller (dirt roads can challenge large ones). <a href='bar-kauai.html'>Kauai Gastrolounge</a> has a kids' area. Seeing caimans and capybaras on the <a href='pantanal-carioca.html'>Carioca Pantanal</a> tour is a hit with kids!",
      es: "¡La isla es excelente para familias! 👨‍👩‍👧 Sin autos, los niños se mueven con más libertad. El <a href='bar-kauai.html'>Kauai Gastrolounge</a> tiene área kids. ¡Ver caimanes y capibaras en el <a href='pantanal-carioca.html'>Pantanal Carioca</a> encanta a los niños!",
      zh: "小岛非常适合家庭！👨‍👩‍👧 街上没有汽车，孩子们可以更自由地走动。<a href='bar-kauai.html'>考艾美食休闲吧</a>有儿童区。在<a href='pantanal-carioca.html'>里约潘塔纳尔</a>之旅中看到凯门鳄和水豚是孩子们最喜欢的体验！"
    }
  },
  {
    keywords: ["seguranca", "seguro", "perigo", "safe", "security", "danger", "seguridad", "perigoso", "violencia", "crime", "roubo", "furto", "medo", "posso ir sozinho", "posso ir sozinha", "can i go alone", "is it safe", "es seguro"],
    reply: {
      pt: "A Ilha da Gigóia é considerada um dos lugares mais seguros do Rio! 🛡️ O acesso exclusivo por barco naturalmente controla quem entra e sai. É uma comunidade tranquila onde os vizinhos se conhecem. Use o bom senso como em qualquer lugar e aproveite à vontade!",
      en: "Gigóia Island is considered one of the safest places in Rio! 🛡️ Boat-only access naturally controls who comes and goes. It's a peaceful community where neighbors know each other. Use common sense as anywhere and enjoy yourself!",
      es: "¡La Isla de Gigóia es considerada uno de los lugares más seguros de Río! 🛡️ El acceso exclusivo en bote controla naturalmente quién entra y sale. Es una comunidad tranquila donde los vecinos se conocen. ¡Usa el sentido común y disfruta!",
      zh: "吉戈亚岛被认为是里约热内卢最安全的地方之一！🛡️ 仅限船只通行的入口自然控制着进出人员。这是一个宁静的社区，邻居们互相认识。像任何地方一样保持常识，尽情享受！"
    }
  },
  {
    keywords: ["wifi", "internet", "sinal", "4g", "5g", "conexao", "wi-fi", "connection", "signal"],
    reply: {
      pt: "O Wi-Fi nos restaurantes, bares e pousadas costuma ser excelente! 📶 O sinal de operadora (4G/5G) funciona bem na maior parte da ilha, mas pode oscilar em algumas vielas. Dica: salve o mapa do seu destino antes de sair, só por precaução!",
      en: "Wi-Fi at restaurants, bars, and inns is usually excellent! 📶 Mobile signal (4G/5G) works well in most of the island but can fluctuate in narrower alleys. Tip: save your destination's map before leaving, just in case!",
      es: "¡El Wi-Fi en restaurantes, bares y posadas suele ser excelente! 📶 La señal móvil funciona bien en la mayor parte, pero puede fluctuar en callejones. ¡Guarda el mapa de tu destino por precaución!",
      zh: "餐厅、酒吧和旅馆的Wi-Fi通常很好！📶 手机信号在大部分地区运行良好，但在一些较窄的小巷中可能不稳定。提示：出发前保存目的地的地图，以防万一！"
    }
  },
  {
    keywords: ["pet", "cachorro", "gato", "animal", "pets", "pet friendly", "dog", "cat", "perro", "gato", "mascota"],
    reply: {
      pt: "Somos Pet Friendly! 🐾 Casas de temporada como <a href='casa-venti.html'>Casa Venti</a> e <a href='casa-goia.html'>Casa Goiá</a> aceitam pets de pequeno porte. Vários bares ao ar livre também permitem. Sempre confirme antes de reservar! Mais em <a href='boas-praticas.html'>Boas Práticas</a>.",
      en: "We're Pet Friendly! 🐾 Vacation homes like <a href='casa-venti.html'>Casa Venti</a> and <a href='casa-goia.html'>Casa Goiá</a> accept small pets. Several open-air bars also allow them. Always confirm before booking! More at <a href='boas-praticas.html'>Good Practices</a>.",
      es: "¡Somos Pet Friendly! 🐾 Casas como <a href='casa-venti.html'>Casa Venti</a> y <a href='casa-goia.html'>Casa Goiá</a> aceptan mascotas pequeñas. Varios bares al aire libre también las permiten. ¡Confirma siempre antes de reservar!",
      zh: "我们是宠物友好型！🐾 <a href='casa-venti.html'>文蒂之家</a>和<a href='casa-goia.html'>戈亚之家</a>等度假屋接受小型宠物。几家露天酒吧也允许携带宠物。预订前请务必确认！"
    }
  },
  {
    keywords: ["lixo", "barulho", "regras", "boas praticas", "som alto", "musica alta", "trash", "noise", "rules"],
    reply: {
      pt: "Ajude-nos a preservar nosso paraíso! 🌿 Nunca jogue lixo na lagoa, respeite os moradores em relação ao barulho (especialmente à noite), não alimente a fauna silvestre e mantenha as ruas limpas. Veja mais em <a href='boas-praticas.html'>Boas Práticas</a>.",
      en: "Help us preserve our paradise! 🌿 Never throw trash in the lagoon, respect residents regarding noise (especially at night), don't feed wildlife, keep streets clean. More at <a href='boas-praticas.html'>Good Practices</a>.",
      es: "¡Ayúdanos a preservar nuestro paraíso! 🌿 Nunca tires basura en la laguna, respeta a los residentes con el ruido, no alimentes la fauna silvestre. Ver más en <a href='boas-praticas.html'>Buenas Prácticas</a>.",
      zh: "帮助我们保护我们的天堂！🌿 永远不要将垃圾丢入泻湖，尊重居民关于噪音的规定（尤其是夜间），不要喂食野生动物，保持街道清洁。查看更多：<a href='boas-praticas.html'>行为准则</a>。"
    }
  },
  {
    keywords: ["quanto gastar", "budget", "custo", "caro", "barato", "how much money", "presupuesto"],
    reply: {
      pt: "A ilha tem para todos os bolsos! 💰 Barco: R$ 2–6. Boteco: R$ 40–60/pessoa. Restaurante médio (Deck Bar, Cais Bar): R$ 60–100. Alta gastronomia (Ocyá, Laguna): R$ 150–250+. Dia completo com passeio de barco + refeição + drinks: R$ 150–300/pessoa em média.",
      en: "The island has options for all budgets! 💰 Boat: R$ 2–6. Traditional bar: R$ 40–60/person. Mid-range restaurant (Deck Bar, Cais Bar): R$ 60–100. Fine dining (Ocyá, Laguna): R$ 150–250+. Full day with boat tour + meal + drinks: R$ 150–300/person on average.",
      es: "¡La isla tiene opciones para todos! 💰 Bote: R$ 2–6. Boteco: R$ 40–60/persona. Restaurante medio: R$ 60–100. Alta gastronomía: R$ 150–250+. Día completo: R$ 150–300/persona en promedio.",
      zh: "小岛有适合各种预算的选择！💰 渡船：R$ 2-6。传统小馆：每人R$ 40-60。中档餐厅：R$ 60-100。高档美食：R$ 150-250+。包括乘船游览+用餐+饮品的完整一天：每人平均R$ 150-300。"
    }
  },
  {
    keywords: ["roupa", "o que vestir", "calcado", "sapato", "what to wear", "clothing", "shoes", "ropa", "calzado"],
    reply: {
      pt: "Vista-se de forma leve e confortável! 👟 As ruas são de terra batida — evite salto alto e prefira tênis ou sandálias de trekking. Roupa de banho se planeja passeios aquáticos. Leve protetor solar e, no fim da tarde, repelente de insetos!",
      en: "Dress light and comfortable! 👟 The streets are unpaved — avoid heels and opt for sneakers or trekking sandals. Swimwear if you plan water activities. Bring sunscreen and, in the late afternoon, insect repellent!",
      es: "¡Vístete de forma ligera y cómoda! 👟 Las calles son de tierra sin pavimento — evita tacones y prefiere zapatillas o sandalias de trekking. Lleva traje de baño, protector solar y repelente de insectos.",
      zh: "穿着轻便舒适！👟 街道是未铺砌的泥土路——避免穿高跟鞋，选择运动鞋或徒步凉鞋。如果计划水上活动，带上泳衣。带上防晒霜，傍晚时分带上驱虫剂！"
    }
  },
  {
    keywords: ["fotografia", "foto", "instagram", "selfie", "tirar foto", "photo", "picture", "fotografía"],
    reply: {
      pt: "A ilha é um paraíso para fotos! 📸 Melhores pontos: pôr do sol nos decks à beira da lagoa, as casas coloridas das vielas, os jacarés e capivaras nos passeios e os barcos no cais. A luz dourada do fim de tarde é espetacular para retratos com a lagoa ao fundo!",
      en: "The island is a photographer's paradise! 📸 Best spots: sunset from the lagoon restaurant decks, colorful houses in the alleys, caimans and capybaras on tours, and painted boats at the dock. The golden afternoon light is spectacular for portraits with the lagoon background!",
      es: "¡La isla es un paraíso para fotos! 📸 Los mejores puntos: atardecer desde las terrazas, casas coloridas en las callejuelas, caimanes y capibaras en los tours y botes pintados en el muelle. ¡La luz dorada de la tarde es espectacular!",
      zh: "小岛是摄影爱好者的天堂！📸 最佳拍摄地点：泻湖边餐厅露台上的日落、小巷中的彩色房屋、游览中的凯门鳄和水豚，以及码头上的彩绘船只。傍晚的金色光线配上泻湖背景，拍摄效果极佳！"
    }
  },
  {
    keywords: ["artesanato", "loja", "souvenir", "compra", "artesanal", "craft", "shopping", "artesania"],
    reply: {
      pt: "Tem sim! 🎨 Nas vielas internas da ilha você encontra pequenas lojas de artesanato local — arte feita pelos próprios moradores, bijuterias, pinturas e lembranças únicas. Não espere shoppings — é justamente o charme artesanal que faz a ilha especial!",
      en: "Yes! 🎨 In the island's inner alleys you'll find small local craft shops — art made by residents, jewelry, paintings, and unique souvenirs. Don't expect malls — it's precisely this artisanal charm that makes the island special!",
      es: "¡Sí! 🎨 En las callejuelas internas encontrarás pequeñas tiendas de artesanía local — arte hecho por los propios residentes, bisutería, pinturas y recuerdos únicos. ¡No esperes centros comerciales — ese es el encanto!",
      zh: "当然有！🎨 在小岛的内部小巷中，您可以找到当地手工艺品小店——由居民亲手制作的艺术品、珠宝、画作和独特的纪念品。不要期望购物中心——正是这种手工魅力使小岛特别！"
    }
  },
  {
    keywords: ["infraestrutura", "comercio", "mercado", "padaria", "farmacia", "lojas", "market", "pharmacy", "stores"],
    reply: {
      pt: "Nossa ilha é bastante autossuficiente! 🛒 Você encontra: 2 mercadinhos, farmácias, lojas de material de construção, hortifrúti, pet shops, lavanderia e dezenas de bares e restaurantes. Não é preciso trazer quase nada do continente para uma estadia confortável!",
      en: "Our island is quite self-sufficient! 🛒 You'll find: 2 markets, pharmacies, hardware stores, produce shops, pet stores, laundry, plus dozens of bars and restaurants. You barely need to bring anything from the mainland for a comfortable stay!",
      es: "¡Nuestra isla es bastante autosuficiente! 🛒 Encontrarás: 2 mercados, farmacias, ferreterías, fruterías, tiendas de mascotas, lavandería y decenas de bares y restaurantes.",
      zh: "我们的小岛相当自给自足！🛒 您可以找到：2家小超市、药店、建材店、果蔬店、宠物店、洗衣店，以及数十家酒吧和餐厅。在这里舒适地住几天，您几乎不需要从陆地带任何东西！"
    }
  },
  {
    keywords: ["reservar mesa", "mesa", "precisa reservar", "table reservation", "do i need to book", "necesito reservar"],
    reply: {
      pt: "Nos restaurantes mais concorridos (Ocyá, Laguna, Deck Bar, Venne), especialmente aos fins de semana, a reserva é <strong>altamente recomendada</strong>! 📋 Os lugares ficam cheios cedo. Para bares e botecos, geralmente não precisa. Nossa equipe pode ajudar com reservas pelo WhatsApp!",
      en: "At the most popular restaurants (Ocyá, Laguna, Deck Bar, Venne), especially on weekends, reservations are <strong>highly recommended</strong>! 📋 Places fill up early. For bars and traditional pubs, reservations are generally not needed. Our team can help with bookings via WhatsApp!",
      es: "¡En los restaurantes más concurridos (Ocyá, Laguna, Deck Bar, Venne), especialmente en fines de semana, la reserva es <strong>muy recomendada</strong>! 📋 Los lugares se llenan temprano. Para bares y botecos, generalmente no es necesario.",
      zh: "在最受欢迎的餐厅（欧希亚、拉古纳、甲板酒吧、文内），特别是在周末，<strong>强烈建议预订</strong>！📋 位置很早就会被占满。对于酒吧和传统小馆，通常不需要预订。我们的团队可以通过WhatsApp帮助预订！"
    },
    showWhatsapp: true
  },

  // ==========================================
  // 8. PASSEIOS E NATUREZA
  // ==========================================
  {
    keywords: ["caiaque", "stand up", "sup", "esportes", "remo", "kayak", "paddle", "sports", "deportes", "flyboard", "bike aquatica"],
    reply: {
      pt: "A lagoa é um paraíso para esportes aquáticos! 🚣‍♂️ Na <strong>Ilha da Coroa</strong> (ilhazinha vizinha) você pode alugar caiaque, stand-up paddle (SUP), flyboard e bike aquática. Preços acessíveis e uma experiência incrível de explorar os canais no seu ritmo!",
      en: "The lagoon is a paradise for water sports! 🚣‍♂️ At <strong>Ilha da Coroa</strong> (a neighboring islet) you can rent kayaks, stand-up paddle (SUP), flyboard, and water bikes. Affordable prices and an amazing experience exploring the canals at your own pace!",
      es: "¡La laguna es un paraíso para los deportes acuáticos! 🚣‍♂️ En la <strong>Ilha da Coroa</strong> puedes alquilar kayaks, stand-up paddle, flyboard y bicicletas acuáticas. ¡Precios accesibles!",
      zh: "泻湖是水上运动的天堂！🚣‍♂️ 在邻近的<strong>科罗阿岛（Ilha da Coroa）</strong>，您可以租用皮划艇、立式桨板、飞板和水上自行车。价格实惠，以自己的节奏探索运河体验极佳！"
    }
  },
  {
    keywords: ["pantanal", "jacare", "capivara", "natureza", "passaros", "bicho", "fauna", "safari", "caiman", "capybara", "nature", "birds"],
    reply: {
      pt: "O passeio do <a href='pantanal-carioca.html'>Pantanal Carioca</a> é inesquecível! 🐊 O barco entra fundo nos manguezais e você vê jacarés-de-papo-amarelo, capivaras e garças bem de perto. Custa em média R$ 50/pessoa. A fauna também inclui tartarugas, especialmente no verão!",
      en: "The <a href='pantanal-carioca.html'>Carioca Pantanal</a> tour is unforgettable! 🐊 The boat goes deep into the mangroves where you see broad-snouted caimans, capybaras, and herons up close. About R$ 50/person. Wildlife also includes sea turtles, especially in summer!",
      es: "¡El tour del <a href='pantanal-carioca.html'>Pantanal Carioca</a> es inolvidable! 🐊 El bote se adentra en los manglares y ves caimanes, capibaras y garzas de muy cerca. ~R$ 50/persona. ¡La fauna también incluye tortugas, especialmente en verano!",
      zh: "<a href='pantanal-carioca.html'>里约潘塔纳尔</a>之旅令人难忘！🐊 船只深入红树林，您可以近距离看到宽吻凯门鳄、水豚和苍鹭。每人约R$ 50。当地野生动物还包括夏季特别常见的海龟！"
    }
  },
  {
    keywords: ["tijucas", "ilhas tijucas", "mergulho", "tartaruga", "caribe carioca", "sea", "dive", "turtle"],
    reply: {
      pt: "As <a href='ilhas-tijucas.html'>Ilhas Tijucas</a> são o nosso 'Caribe Carioca'! 🤿 Tour de 4h para o mar aberto — ótimo para nadar em águas cristalinas e ver tartarugas. O passeio é condicionado ao bom tempo, então sempre verifique as condições antes!",
      en: "The <a href='ilhas-tijucas.html'>Tijucas Islands</a> are our 'Carioca Caribbean'! 🤿 4-hour open sea tour — great for swimming in crystal-clear waters and spotting turtles. The tour is weather-dependent, so always check conditions beforehand!",
      es: "¡Las <a href='ilhas-tijucas.html'>Islas Tijucas</a> son nuestro 'Caribe Carioca'! 🤿 Tour de 4h a mar abierto — perfecto para nadar en aguas cristalinas y ver tortugas. ¡El tour depende del clima, siempre verifica antes!",
      zh: "<a href='ilhas-tijucas.html'>蒂茹卡斯群岛</a>是我们的\"卡里奥卡加勒比\"！🤿 4小时公海之旅——非常适合在清澈海水中游泳并发现海龟。游览受天气影响，请务必提前确认！"
    }
  },
  {
    keywords: ["reserva", "praia da reserva", "marapendi", "canal", "reserve beach"],
    reply: {
      pt: "Temos um passeio maravilhoso até a <a href='reserva.html'>Praia da Reserva</a>! 🏝️ São 2 horas de navegação relaxante pelos canais do Marapendi com parada para banho de mar. Uma experiência que mistura lagoa e oceano de forma única!",
      en: "We have a wonderful tour to <a href='reserva.html'>Reserva Beach</a>! 🏝️ 2 hours of relaxing sailing through the Marapendi canals with a sea bath stop. A unique experience mixing lagoon and ocean!",
      es: "¡Tenemos un maravilloso paseo hasta la <a href='reserva.html'>Playa de Reserva</a>! 🏝️ 2 horas de relajante navegación por los canales de Marapendi con parada para bañarse en el mar.",
      zh: "我们有前往<a href='reserva.html'>保护区海滩</a>的精彩游览！🏝️ 2小时轻松航行穿越马拉佩恩迪运河，然后停靠游泳。一种将泻湖和海洋独特融合的体验！"
    }
  },
  {
    keywords: ["jet ski", "jetski", "jet-ski", "adrenalina", "pilotar", "moto aquatica", "adrenaline"],
    reply: {
      pt: "Curte adrenalina? 🚀 Jet Ski na Lagoa da Barra: 15min = R$ 200 / 30min = R$ 300 / 1h = R$ 600. Colete salva-vidas incluído, com orientações para iniciantes. Veja em <a href='jet-ski.html'>Jet Ski</a> ou agende pelo WhatsApp!",
      en: "Like adrenaline? 🚀 Jet Ski on Barra Lagoon: 15min = R$ 200 / 30min = R$ 300 / 1h = R$ 600. Life vest included, guidance for beginners. See at <a href='jet-ski.html'>Jet Ski</a> or book via WhatsApp!",
      es: "¿Te gusta la adrenalina? 🚀 Jet Ski en la Laguna de Barra: 15min = R$ 200 / 30min = R$ 300 / 1h = R$ 600. Chaleco incluido. ¡Más info en <a href='jet-ski.html'>Jet Ski</a>!",
      zh: "喜欢肾上腺素？🚀 巴拉泻湖摩托艇：15分钟=R$ 200 / 30分钟=R$ 300 / 1小时=R$ 600。包含救生衣，初学者有指导。查看：<a href='jet-ski.html'>摩托艇</a>，或通过WhatsApp预约！"
    },
    showWhatsapp: true
  },
  {
    keywords: ["pacote", "combo", "experiencia completa", "roteiro perfeito", "package", "romantic"],
    reply: {
      pt: "Quer tudo planejado? Temos a <a href='experiencia-completa.html'>Experiência Completa</a> 🥰 — travessia panorâmica pelos canais, almoço nos melhores restaurantes e pôr do sol exclusivo. Clique abaixo para nossa equipe montar o pacote ideal pra você!",
      en: "Want everything planned? We have the <a href='experiencia-completa.html'>Complete Experience</a> 🥰 — panoramic canal crossing, lunch at the best restaurants, and exclusive sunset. Click below for our team to create your ideal package!",
      es: "¿Quieres todo planificado? Tenemos la <a href='experiencia-completa.html'>Experiencia Completa</a> 🥰 — travesía panorámica, almuerzo en los mejores restaurantes y atardecer exclusivo. ¡Haz clic abajo!",
      zh: "想要一切都规划好？我们有<a href='experiencia-completa.html'>完整体验</a>🥰——运河全景穿越、在最好的餐厅用餐和独家日落。点击下方，让我们的团队为您定制理想套餐！"
    },
    showWhatsapp: true
  },
  {
    keywords: ["ilha primeira", "ilha sao jorge", "ilha garças", "arquipelago", "outras ilhas", "other islands", "9 ilhas"],
    reply: {
      pt: "A Gigóia é a maior, mas somos um arquipélago de 9 a 10 ilhas! 🏝️ As principais: <strong>Ilha Primeira</strong> (Salomé, Veneza Carioca, Maracujá), <strong>Ilha de São Jorge</strong>, <strong>Ilha da Coroa</strong> (esportes aquáticos) e <strong>Ilha das Garças</strong>. Cada uma tem seu charme único!",
      en: "Gigóia is the largest, but we're part of an archipelago of 9-10 islands! 🏝️ Main ones: <strong>Ilha Primeira</strong> (Salomé, Veneza Carioca, Maracujá), <strong>Ilha de São Jorge</strong>, <strong>Ilha da Coroa</strong> (water sports), and <strong>Ilha das Garças</strong>. Each has its own charm!",
      es: "Gigóia es la más grande, pero somos parte de un archipiélago de 9-10 islas. 🏝️ Las principales: <strong>Ilha Primeira</strong> (Salomé, Veneza Carioca, Maracujá), <strong>Ilha da Coroa</strong> (deportes acuáticos). ¡Cada una tiene su encanto!",
      zh: "吉戈亚是最大的，但我们是9-10个小岛群岛的一部分！🏝️ 主要岛屿：<strong>伊岛一号</strong>（萨洛梅、里约威尼斯、百香果所在地）、<strong>圣豪尔赫岛</strong>、<strong>科罗阿岛</strong>（水上运动）和<strong>加尔萨斯岛</strong>。每个都有独特魅力！"
    }
  },

  // ==========================================
  // 9. RESTAURANTES ESPECÍFICOS
  // ==========================================
  {
    keywords: ["frutos do mar", "peixe", "camarao", "moqueca", "lagosta", "ceviche", "seafood", "fish", "shrimp", "mariscos"],
    reply: {
      pt: "Para frutos do mar, opções incríveis! 🦞 Alta gastronomia: <a href='restaurante-ocya.html'>Ocyá</a> (Michelin, chef Gerônimo Athiê). Tradição: <a href='restaurante-laguna.html'>Laguna</a> (desde 2002, moqueca alagoana). Petiscos: <a href='restaurante-deck-bar.html'>Deck Bar</a> (camarão no abacaxi!). Casual: <a href='restaurante-cais-bar.html'>Cais Bar</a> (rodízio com bebida liberada).",
      en: "For seafood, amazing options! 🦞 Fine dining: <a href='restaurante-ocya.html'>Ocyá</a> (Michelin, chef Gerônimo Athiê). Tradition: <a href='restaurante-laguna.html'>Laguna</a> (since 2002, outstanding moqueca). Snacks: <a href='restaurante-deck-bar.html'>Deck Bar</a> (pineapple shrimp!). Casual: <a href='restaurante-cais-bar.html'>Cais Bar</a> (open bar snacks).",
      es: "¡Para mariscos, opciones increíbles! 🦞 Alta gastronomía: <a href='restaurante-ocya.html'>Ocyá</a> (Michelin). Tradición: <a href='restaurante-laguna.html'>Laguna</a> (desde 2002). Bocadillos: <a href='restaurante-deck-bar.html'>Deck Bar</a> (camarón en piña!). Casual: <a href='restaurante-cais-bar.html'>Cais Bar</a>.",
      zh: "海鲜选择太精彩了！🦞 高级美食：<a href='restaurante-ocya.html'>欧希亚</a>（米其林，格罗尼莫·阿蒂耶主厨）。传统：<a href='restaurante-laguna.html'>拉古纳</a>（自2002年）。小吃：<a href='restaurante-deck-bar.html'>甲板酒吧</a>（菠萝虾！）。休闲：<a href='restaurante-cais-bar.html'>码头酒吧</a>（含无限饮品的小吃轮转）。"
    }
  },
  {
    keywords: ["ocya", "michelin", "geronimo", "alta gastronomia", "sophisticated", "luxury", "luxo"],
    reply: {
      pt: "O <a href='restaurante-ocya.html'>Ocyá</a> é um dos mais premiados do Rio! ⭐ Reconhecido pelo Guia Michelin e listado entre os melhores da América Latina. Chef Gerônimo Athiê comanda a cozinha com técnicas de maturação de peixes e preparos na brasa. <strong>Faça reserva com antecedência — é essencial!</strong>",
      en: "The <a href='restaurante-ocya.html'>Ocyá</a> is one of Rio's most awarded restaurants! ⭐ Recognized by the Michelin Guide and listed among Latin America's best. Chef Gerônimo Athiê leads the kitchen with fish aging and grilling techniques. <strong>Book in advance — it's essential!</strong>",
      es: "¡El <a href='restaurante-ocya.html'>Ocyá</a> es uno de los más premiados de Río! ⭐ Reconocido por la Guía Michelin. El chef Gerônimo Athiê dirige la cocina. <strong>¡Reserva con anticipación, es esencial!</strong>",
      zh: "<a href='restaurante-ocya.html'>欧希亚</a>是里约最受奖励的餐厅之一！⭐ 由米其林指南认可，被列为拉丁美洲最佳之一。格罗尼莫·阿蒂耶主厨以鱼类熟成技术和炭烤料理引领厨房。<strong>提前预订——这是必须的！</strong>"
    }
  },
  {
    keywords: ["laguna", "pedra da gavea", "primeiro restaurante", "antigo", "tradicional", "moqueca alagoana"],
    reply: {
      pt: "O <a href='restaurante-laguna.html'>Restaurante Laguna</a> é o pioneiro da ilha — aberto em 2002! 🏆 Vista linda para a Pedra da Gávea, famosa <strong>moqueca alagoana</strong> e chapas de frutos do mar. Tem cardápio infantil. Preços acima da média mas vale cada centavo!",
      en: "The <a href='restaurante-laguna.html'>Laguna Restaurant</a> is the island's pioneer — open since 2002! 🏆 Beautiful view of Pedra da Gávea, famous <strong>moqueca alagoana</strong>, and seafood platters. Has a kids' menu. Prices above average but worth every penny!",
      es: "¡El <a href='restaurante-laguna.html'>Restaurante Laguna</a> es el pionero, abierto en 2002! 🏆 Vista a la Pedra da Gávea, famosa <strong>moqueca alagoana</strong> y tablas de mariscos. ¡Tiene menú infantil!",
      zh: "<a href='restaurante-laguna.html'>拉古纳餐厅</a>是岛上的先驱——自2002年开业！🏆 对加维亚石山的绝美景观，著名的<strong>阿拉戈斯鱼汤</strong>和海鲜拼盘。有儿童菜单。价格略高但物有所值！"
    }
  },
  {
    keywords: ["deck", "deck bar", "camarao no abacaxi", "guarda chuva", "musica ao vivo deck"],
    reply: {
      pt: "O <a href='restaurante-deck-bar.html'>Deck Bar</a> é um dos mais queridos! 🍍 Guarda-chuvas coloridos no teto, <strong>Camarão no Abacaxi</strong> incrível e música ao vivo. Aberto todos os dias 11h–18h. WhatsApp: (21) 3738-0935. Reserve mesa aos fins de semana!",
      en: "The <a href='restaurante-deck-bar.html'>Deck Bar</a> is one of the island's most beloved! 🍍 Colorful ceiling umbrellas, incredible <strong>Pineapple Shrimp</strong>, and live music. Open daily 11am–6pm. WhatsApp: (21) 3738-0935. Book for weekends!",
      es: "¡El <a href='restaurante-deck-bar.html'>Deck Bar</a> es uno de los más queridos! 🍍 Paraguas coloridos en el techo, increíble <strong>Camarón en Piña</strong> y música en vivo. Funciona diariamente 11h–18h. WhatsApp: (21) 3738-0935.",
      zh: "<a href='restaurante-deck-bar.html'>甲板酒吧</a>是岛上最受欢迎的地方之一！🍍 天花板上的彩色雨伞、令人惊叹的<strong>菠萝虾</strong>和现场音乐。每天营业11:00-18:00。WhatsApp：(21) 3738-0935。周末请预订！"
    }
  },
  {
    keywords: ["cais bar", "cais", "moqueca cais", "rodizio de petiscos"],
    reply: {
      pt: "O <a href='restaurante-cais-bar.html'>Cais Bar</a> é tradição! 🍲 Um dos mais antigos da ilha. Destaque para a <strong>moqueca de peixe</strong>, os pratos executivos na semana e o famoso <strong>rodízio de petiscos com bebida liberada</strong> — perfeito para grupos!",
      en: "The <a href='restaurante-cais-bar.html'>Cais Bar</a> is a tradition! 🍲 One of the island's oldest. Highlights: <strong>fish moqueca</strong>, weekday lunch specials, and the famous <strong>all-you-can-eat snacks with open bar</strong> — perfect for groups!",
      es: "¡El <a href='restaurante-cais-bar.html'>Cais Bar</a> es tradición! 🍲 Uno de los más antiguos. Destacan la <strong>moqueca de pescado</strong> y el famoso <strong>rodizio de bocadillos con barra libre</strong>.",
      zh: "<a href='restaurante-cais-bar.html'>码头酒吧</a>是传统！🍲 岛上最古老的之一。亮点：<strong>鱼汤</strong>、工作日商务套餐和著名的<strong>含无限饮品的小吃轮转</strong>——非常适合团体！"
    }
  },
  {
    keywords: ["salome", "salomé", "tabua de frutos do mar", "ilha primeira restaurante"],
    reply: {
      pt: "O <a href='restaurante-salome.html'>Salomé al Mare</a> fica na Ilha Primeira e é famoso pelas <strong>tábuas gigantes de mariscos</strong> perfeitas para compartilhar! 🐚 Vista à beira da lagoa e o famoso pastel de camarão da região!",
      en: "The <a href='restaurante-salome.html'>Salomé al Mare</a> is on Primeira Island and famous for its <strong>giant seafood platters</strong> perfect for sharing! 🐚 Lagoon-side setting and the region's famous shrimp pastry!",
      es: "¡El <a href='restaurante-salome.html'>Salomé al Mare</a> en la Isla Primera es famoso por sus <strong>tablas gigantes de mariscos</strong> para compartir! 🐚 Ambiente a orillas de la laguna.",
      zh: "<a href='restaurante-salome.html'>萨洛梅海洋餐厅</a>位于伊岛一号，以<strong>巨型海鲜拼盘</strong>而著名——非常适合分享！🐚 泻湖边的环境和该地区著名的虾饺！"
    }
  },
  {
    keywords: ["venne", "mediterranea", "elegante", "mediterranean", "elegant"],
    reply: {
      pt: "O <a href='restaurante-venne.html'>Venne Gastronomia</a> é para momentos especiais! 🍷 Culinária mediterrânea refinada num ambiente super elegante à beira da lagoa. Perfeito para jantares românticos e comemorações. Vale reservar com antecedência!",
      en: "<a href='restaurante-venne.html'>Venne Gastronomia</a> is for special moments! 🍷 Refined Mediterranean cuisine in an elegant lagoon-side setting. Perfect for romantic dinners and celebrations. Worth booking in advance!",
      es: "¡El <a href='restaurante-venne.html'>Venne Gastronomia</a> es para momentos especiales! 🍷 Cocina mediterránea refinada en un ambiente elegante junto a la laguna. Perfecto para cenas románticas.",
      zh: "<a href='restaurante-venne.html'>文内美食</a>是为特别时刻而设的！🍷 在泻湖边优雅环境中享用精致的地中海料理。非常适合浪漫晚餐和庆祝活动。值得提前预订！"
    }
  },
  {
    keywords: ["maracuja restaurante", "camarao empanado", "ceviche aipim", "ilha primeira comida"],
    reply: {
      pt: "O <a href='restaurante-maracuja.html'>Maracujá da Ilha</a> na Ilha Primeira tem um dos melhores decks para o pôr do sol! 🌅 Famoso pelo <strong>camarão empanado</strong> e pelo <strong>ceviche com chips de aipim</strong>. Ambiente aberto com vista privilegiada para a lagoa!",
      en: "The <a href='restaurante-maracuja.html'>Maracujá da Ilha</a> on Primeira Island has one of the best sunset decks! 🌅 Famous for <strong>breaded shrimp</strong> and <strong>ceviche with cassava chips</strong>. Open-air with a prime lagoon view!",
      es: "¡El <a href='restaurante-maracuja.html'>Maracujá da Ilha</a> en la Isla Primera tiene uno de los mejores decks para el atardecer! 🌅 Famoso por el <strong>camarón empanizado</strong> y el <strong>ceviche con chips de yuca</strong>.",
      zh: "<a href='restaurante-maracuja.html'>岛上百香果</a>位于伊岛一号，拥有观看日落的最佳露台之一！🌅 以<strong>炸虾</strong>和<strong>配木薯片的酸橘汁腌鱼</strong>而著名。开放式环境，泻湖景观优越！"
    }
  },
  {
    keywords: ["camarao da barra", "especializado camarao"],
    reply: {
      pt: "O <a href='restaurante-camarao.html'>Camarão da Barra</a> é super moderno e especializado em diferentes preparos contemporâneos de camarão. 🍤 Ambiente sofisticado com vista para a lagoa — ótimo para jantares e comemorações!",
      en: "The <a href='restaurante-camarao.html'>Camarão da Barra</a> is super modern and specializes in various contemporary shrimp preparations. 🍤 Sophisticated atmosphere with lagoon views — great for dinners and celebrations!",
      es: "El <a href='restaurante-camarao.html'>Camarão da Barra</a> es súper moderno y se especializa en diversas preparaciones contemporáneas de camarones. 🍤 ¡Ambiente sofisticado con vista a la laguna!",
      zh: "<a href='restaurante-camarao.html'>巴拉虾</a>超级现代，专注于各种当代虾类烹制方式。🍤 精致的环境配上泻湖景观——非常适合晚餐和庆祝活动！"
    }
  },
  {
    keywords: ["cafe", "lanche", "cantinho cafe", "cafeteria", "cafe da manha", "tapioca", "bolo", "coffee", "breakfast"],
    reply: {
      pt: "Para um café ou lanche, temos opções charmosas! ☕ O <a href='cantinho-cafe.html'>Cantinho do Café</a> tem espresso, cappuccino, bolos caseiros, tapiocas e sanduíches. Também temos o Café Poesia — um cantinho cultural com música e bom café. Perfeito para começar o dia na ilha!",
      en: "For coffee or a snack, we have charming options! ☕ The <a href='cantinho-cafe.html'>Cantinho do Café</a> has espresso, cappuccino, homemade cakes, tapioca, and sandwiches. We also have Café Poesia — a cultural corner with music and good coffee. Perfect to start your island day!",
      es: "¡Para un café o merienda, tenemos opciones encantadoras! ☕ El <a href='cantinho-cafe.html'>Cantinho do Café</a> tiene espresso, cappuccino, pasteles caseros, tapioca y sándwiches. ¡También está el Café Poesia, un rincón cultural!",
      zh: "想喝咖啡或吃点心，我们有迷人的选择！☕ <a href='cantinho-cafe.html'>咖啡小角落</a>有浓缩咖啡、卡布奇诺、自制蛋糕、木薯饼和三明治。还有诗意咖啡馆——一个有音乐和好咖啡的文化角落。非常适合在岛上开始新的一天！"
    }
  },

  // ==========================================
  // 10. BARES ESPECÍFICOS
  // ==========================================
  {
    keywords: ["ak bar", "ak por do sol", "bar ak"],
    reply: {
      pt: "O <a href='bar-ak.html'>AK Bar</a> é o clássico ponto de encontro da Gigóia! 🌅 Vista privilegiada para os canais e pôr do sol inesquecível. Petiscos variados e cerveja sempre gelada. Chegue antes das 17h para garantir bom lugar!",
      en: "The <a href='bar-ak.html'>AK Bar</a> is Gigóia's classic meeting point! 🌅 Privileged canal views and unforgettable sunset. Varied snacks and always cold beer. Arrive before 5pm to get a good spot!",
      es: "¡El <a href='bar-ak.html'>AK Bar</a> es el clásico punto de encuentro de Gigóia! 🌅 Vista privilegiada a los canales y atardecer inolvidable. ¡Llega antes de las 17h para asegurar buen lugar!",
      zh: "<a href='bar-ak.html'>AK酒吧</a>是吉戈亚经典的聚集地！🌅 俯瞰运河的优越视野和令人难忘的日落。各种小吃，总是冰镇的啤酒。下午5点前到达以确保好位置！"
    }
  },
  {
    keywords: ["briza", "briza da gigoia", "samba briza", "musica ao vivo briza"],
    reply: {
      pt: "A <a href='bar-briza.html'>Briza da Gigóia</a> fica na entrada principal da ilha e é o point do samba e da música ao vivo! 🎶 Vista deslumbrante para a lagoa e ótimo espaço para festas privadas. Os fins de semana com roda de samba são imperdíveis!",
      en: "The <a href='bar-briza.html'>Briza da Gigóia</a> is at the island's main entrance — the spot for samba and live music! 🎶 Stunning lagoon view and great space for private parties. Weekend samba circles are a must!",
      es: "¡La <a href='bar-briza.html'>Briza da Gigóia</a> en la entrada principal es el punto de samba y música en vivo! 🎶 Vista a la laguna y gran espacio para fiestas privadas. ¡Los fines de semana con roda de samba son imperdibles!",
      zh: "<a href='bar-briza.html'>吉戈亚微风</a>位于小岛主入口——是桑巴和现场音乐的聚集地！🎶 令人惊叹的泻湖景观，也是举办私人派对的好地方。周末的桑巴圈不容错过！"
    }
  },
  {
    keywords: ["caicara", "caiçara", "bar caicara", "cultura", "arte bar", "boas energias"],
    reply: {
      pt: "O <a href='bar-caicaras.html'>Bar Caiçara</a> é um dos mais autênticos e culturais da ilha! 🎭 Palco para shows e performances artísticas, petiscos de frutos do mar e a melhor atmosfera para o pôr do sol. 'Só é permitida a entrada de boas energias' — está na placa! Rua Dr. Sebastião Aquino, 170.",
      en: "The <a href='bar-caicaras.html'>Bar Caiçara</a> is one of the island's most authentic and cultural spots! 🎭 Stage for shows and artistic performances, seafood snacks, and the best sunset atmosphere. 'Only good vibes allowed' — it's on the sign! Rua Dr. Sebastião Aquino, 170.",
      es: "¡El <a href='bar-caicaras.html'>Bar Caiçara</a> es uno de los más auténticos y culturales de la isla! 🎭 Escenario para shows artísticos y el mejor ambiente para el atardecer. '¡Solo se permite la entrada de buenas energías!'",
      zh: "<a href='bar-caicaras.html'>海滨酒吧</a>是岛上最真实、最具文化气息的地方之一！🎭 有演出舞台和艺术表演、海鲜小吃和最好的日落氛围。\"只允许好能量进入\"——这是门上的标语！"
    }
  },
  {
    keywords: ["capivara", "boteco capivara", "dona capivara"],
    reply: {
      pt: "A <a href='bar-capivara.html'>Dona Capivara</a> é um bar gastronômico super charmoso na entrada da Gigóia com vista direta para a lagoa! 🌅 Petiscos variados (incluindo moqueca e risoto), drinks e pôr do sol incrível. Rua Nuta James, 879.",
      en: "The <a href='bar-capivara.html'>Dona Capivara</a> is a charming gastronomic bar at Gigóia's entrance with a direct lagoon view! 🌅 Varied snacks (including moqueca and risotto), drinks, and an incredible sunset. Rua Nuta James, 879.",
      es: "¡El <a href='bar-capivara.html'>Dona Capivara</a> es un bar gastronómico encantador en la entrada de Gigóia con vista directa a la laguna! 🌅 Bocadillos variados y atardecer increíble. Rua Nuta James, 879.",
      zh: "<a href='bar-capivara.html'>多娜水豚</a>是吉戈亚入口处一个超级迷人的美食酒吧，可直接俯瞰泻湖！🌅 各种小吃（包括鱼汤和意大利炖饭）、饮品和令人惊叹的日落。Rua Nuta James 879号。"
    }
  },
  {
    keywords: ["bar elson", "elson", "frango assado", "boteco raiz"],
    reply: {
      pt: "O <a href='bar-elson.html'>Bar do Elson</a> é o boteco mais raiz da Gigóia! 🍗 Famoso pelo melhor <strong>frango assado</strong> da ilha — bem temperado e suculento. Ambiente descontraído com futebol na TV e cerveja sempre gelada. O sabor autêntico carioca!",
      en: "The <a href='bar-elson.html'>Bar do Elson</a> is Gigóia's most authentic traditional bar! 🍗 Famous for the best <strong>roasted chicken</strong> on the island — always well-seasoned and juicy. Relaxed atmosphere with football on TV and cold beer. Authentic carioca flavor!",
      es: "¡El <a href='bar-elson.html'>Bar do Elson</a> es el boteco más auténtico de Gigóia! 🍗 Famoso por el mejor <strong>pollo asado</strong> de la isla. Ambiente descontraído con fútbol en TV. ¡Sabor carioca auténtico!",
      zh: "<a href='bar-elson.html'>埃尔森酒吧</a>是吉戈亚最地道的传统小馆！🍗 以岛上最美味的<strong>烤鸡</strong>而著名——总是调味充足、多汁。轻松的氛围，有足球赛直播，啤酒总是冰凉的。正宗卡里奥卡风味！"
    }
  },
  {
    keywords: ["bar joana", "joana", "bolinho", "caldinho", "comida caseira bar"],
    reply: {
      pt: "O <a href='bar-joana.html'>Bar da Joana</a> é o lar fora de lar da Gigóia! 🏡 Conhecida pela limpeza impecável e pelos famosos <strong>bolinhos caseiros</strong>, <strong>caldinhos</strong> e quitutes com sabor de comida de vó. Ambiente familiar e muito acolhedor!",
      en: "The <a href='bar-joana.html'>Bar da Joana</a> is Gigóia's home away from home! 🏡 Known for impeccable cleanliness and famous <strong>homemade pastéis</strong>, <strong>caldinhos</strong> (broths), and grandma's cooking flavor. Family and welcoming atmosphere!",
      es: "¡El <a href='bar-joana.html'>Bar da Joana</a> es el hogar fuera del hogar de Gigóia! 🏡 Conocido por la limpieza impecable y los famosos <strong>bolinhos caseros</strong> y <strong>caldinhos</strong>. ¡Ambiente familiar y acogedor!",
      zh: "<a href='bar-joana.html'>若阿娜酒吧</a>是吉戈亚的家外之家！🏡 以无可挑剔的清洁度和著名的<strong>手工炸饺子</strong>、<strong>汤汁</strong>以及有祖母烹饪味道的美食而著称。家庭温馨氛围！"
    }
  },
  {
    keywords: ["bar kai", "kai bar", "ultimo bar", "mais tarde", "saideira"],
    reply: {
      pt: "O <a href='bar-kai.html'>Bar do Kai</a> é onde a noite continua! 🍺 Um dos bares que fica aberto até mais tarde na ilha — perfeito para a famosa 'saideira'. Ambiente animado, cerveja gelada e petiscos. Se quer esticar a noite na Gigóia, é o lugar certo!",
      en: "The <a href='bar-kai.html'>Bar do Kai</a> is where the night continues! 🍺 One of the bars that stays open latest on the island — perfect for the 'last round'. Lively atmosphere, cold beer, and snacks. Want to extend your Gigóia night? This is the right place!",
      es: "¡El <a href='bar-kai.html'>Bar do Kai</a> es donde la noche continúa! 🍺 Uno de los que permanece abierto hasta más tarde — perfecto para la última ronda. Ambiente animado, cerveza fría y bocadillos.",
      zh: "<a href='bar-kai.html'>凯酒吧</a>是夜晚继续的地方！🍺 岛上开放最晚的酒吧之一——非常适合最后一杯。热闹的氛围，冰镇啤酒和小吃。想在吉戈亚度过一个长夜？这是正确的地方！"
    }
  },
  {
    keywords: ["kauai", "area kids", "infantil", "familia bar", "ilha do ipe", "gastrolounge"],
    reply: {
      pt: "O <a href='bar-kauai.html'>Kauai Gastrolounge</a> fica na Ilha do Ipê e é o mais completo para famílias! 🌺 Espaço amplo, área kids com brinquedos, música ao vivo e cardápio super variado. Ótimo para quem vai com crianças ou quer um dia bem estruturado!",
      en: "The <a href='bar-kauai.html'>Kauai Gastrolounge</a> on Ilha do Ipê is the most complete for families! 🌺 Spacious area, kids' zone with toys, live music, and a very varied menu. Great for those going with children or wanting a well-structured day!",
      es: "¡El <a href='bar-kauai.html'>Kauai Gastrolounge</a> en la Ilha do Ipê es el más completo para familias! 🌺 Espacio amplio, área kids con juguetes, música en vivo y menú variado.",
      zh: "<a href='bar-kauai.html'>考艾美食休闲吧</a>位于伊佩岛，是家庭最完整的场所！🌺 宽敞区域，有玩具的儿童区，现场音乐和非常多样化的菜单。非常适合带孩子出行！"
    }
  },

  // ==========================================
  // 11. HOSPEDAGEM ESPECÍFICA
  // ==========================================
  {
    keywords: ["pousada barra", "pousada barra da tijuca", "pousada proxima metro"],
    reply: {
      pt: "A <a href='pousada-barra.html'>Pousada Barra da Tijuca</a> é a mais estratégica! 🌴 A poucos passos dos principais restaurantes e do ponto de travessia. Perfeita para quem quer curtir a ilha com fácil acesso ao metrô e à praia. A partir de R$ 220/diária.",
      en: "The <a href='pousada-barra.html'>Pousada Barra da Tijuca</a> is the most strategically located! 🌴 Steps from the main restaurants and boat crossing. Perfect for enjoying the island with easy access to the subway and beach. From R$ 220/night.",
      es: "¡La <a href='pousada-barra.html'>Pousada Barra da Tijuca</a> es la más estratégica! 🌴 A pasos de los principales restaurantes y el punto de travesía. Perfecta con fácil acceso al metro y la playa. Desde R$ 220/noche.",
      zh: "<a href='pousada-barra.html'>巴拉达蒂茹卡旅馆</a>是地理位置最优越的！🌴 距离主要餐厅和渡船点只有几步之遥。非常适合轻松前往地铁和海滩。起价R$ 220/晚。"
    }
  },
  {
    keywords: ["marisis", "limpeza pousada", "silencio pousada", "tranquila pousada"],
    reply: {
      pt: "A <a href='pousada-marisis.html'>Pousada Marísis</a> é o refúgio para quem busca paz! 🌺 Super elogiada pela limpeza impecável e silêncio absoluto. Quartos com varanda e Wi-Fi de alta velocidade. A partir de R$ 200/diária.",
      en: "The <a href='pousada-marisis.html'>Pousada Marísis</a> is the refuge for those seeking peace! 🌺 Highly praised for impeccable cleanliness and absolute silence. Rooms with balcony and high-speed Wi-Fi. From R$ 200/night.",
      es: "¡La <a href='pousada-marisis.html'>Pousada Marísis</a> es el refugio para quienes buscan paz! 🌺 Muy elogiada por la limpieza impecable y el silencio absoluto. Desde R$ 200/noche.",
      zh: "<a href='pousada-marisis.html'>玛丽西斯旅馆</a>是寻求宁静者的避风港！🌺 以无可挑剔的清洁度和绝对安静而备受好评。带阳台的客房和高速Wi-Fi。起价R$ 200/晚。"
    }
  },
  {
    keywords: ["veneza carioca hotel", "boutique hotel", "intimista hotel", "romantico hospedagem"],
    reply: {
      pt: "O <a href='veneza-carioca.html'>Veneza Carioca Hotel Boutique</a> é o mais romântico! ✨ Na Ilha Primeira, com decoração exclusiva e ambiente intimista pensado nos mínimos detalhes. Ideal para casais em viagem especial. A partir de R$ 250/diária.",
      en: "The <a href='veneza-carioca.html'>Veneza Carioca Hotel Boutique</a> is the most romantic! ✨ On Primeira Island, with exclusive décor and an intimate atmosphere. Ideal for couples on a special trip. From R$ 250/night.",
      es: "¡El <a href='veneza-carioca.html'>Veneza Carioca Hotel Boutique</a> es el más romántico! ✨ En la Isla Primera, con decoración exclusiva y ambiente íntimo. Ideal para parejas en un viaje especial. Desde R$ 250/noche.",
      zh: "<a href='veneza-carioca.html'>里约威尼斯精品酒店</a>是最浪漫的！✨ 位于伊岛一号，拥有独特的装饰和亲密氛围。非常适合特别旅行中的情侣。起价R$ 250/晚。"
    }
  },
  {
    keywords: ["airbnb", "casa inteira", "temporada", "alugar casa", "whole house", "rent house"],
    reply: {
      pt: "Para privacidade total, temos Airbnbs incríveis! 🏡 <a href='casa-venti.html'>Casa Venti</a> (R$ 450/noite, 7 pessoas), <a href='casa-goia.html'>Casa Goiá</a> (R$ 500/noite, 8 pessoas), <a href='casa-estatua.html'>Casa da Estátua</a> (R$ 1.500/noite, 16 pessoas com piscina!), <a href='lux-48.html'>Lux 48</a> (R$ 250/noite, casais). Ver tudo: <a href='airbnb-temporada.html'>Airbnb & Temporada</a>!",
      en: "For total privacy, amazing Airbnbs! 🏡 <a href='casa-venti.html'>Casa Venti</a> (R$ 450/night, 7 people), <a href='casa-goia.html'>Casa Goiá</a> (R$ 500/night, 8), <a href='casa-estatua.html'>Casa da Estátua</a> (R$ 1,500/night, 16 with pool!), <a href='lux-48.html'>Lux 48</a> (R$ 250/night, couples). See all: <a href='airbnb-temporada.html'>Airbnb & Rentals</a>!",
      es: "¡Para privacidad total, increíbles Airbnbs! 🏡 <a href='casa-venti.html'>Casa Venti</a> (R$ 450/noche, 7 personas), <a href='casa-goia.html'>Casa Goiá</a> (R$ 500, 8 personas), <a href='casa-estatua.html'>Casa da Estátua</a> (R$ 1.500, 16 con piscina!), <a href='lux-48.html'>Lux 48</a> (R$ 250, parejas).",
      zh: "想要完全私密，令人惊叹的Airbnb！🏡 <a href='casa-venti.html'>文蒂之家</a>（R$ 450/晚，7人）、<a href='casa-goia.html'>戈亚之家</a>（R$ 500/晚，8人）、<a href='casa-estatua.html'>雕像之家</a>（R$ 1500/晚，16人含私人泳池！）、<a href='lux-48.html'>豪华48号</a>（R$ 250/晚，情侣）。查看全部：<a href='airbnb-temporada.html'>Airbnb与度假租赁</a>！"
    },
    showWhatsapp: true
  },
  {
    keywords: ["casanova", "luxuoso", "arquitetura unica", "retiro"],
    reply: {
      pt: "A <a href='casanova.html'>Casanova</a> é para quem busca algo único! ✨ Retiro luxuoso com projeto arquitetônico diferenciado, cozinha gourmet e clima exclusivo com vista para a lagoa. Ideal para casais e retiros criativos.",
      en: "The <a href='casanova.html'>Casanova</a> is for those seeking something unique! ✨ Luxurious retreat with distinctive architectural design, gourmet kitchen, and exclusive lagoon views. Ideal for couples and creative retreats.",
      es: "¡La <a href='casanova.html'>Casanova</a> es para quienes buscan algo único! ✨ Refugio lujoso con diseño arquitectónico diferenciado, cocina gourmet y vista exclusiva a la laguna.",
      zh: "<a href='casanova.html'>卡萨诺瓦</a>是为寻求独特的人而设的！✨ 拥有独特建筑设计、美食厨房和俯瞰泻湖独家氛围的豪华避难所。非常适合情侣和创意静修。"
    }
  },
  {
    keywords: ["casa estatua", "estatua", "piscina privativa", "grupo grande", "16 pessoas"],
    reply: {
      pt: "A <a href='casa-estatua.html'>Casa da Estátua</a> é a escolha dos grupos! 🏊‍♂️ 6 quartos, até 16 hóspedes, piscina privativa, churrasqueira e estilo artístico único. A partir de R$ 1.500/noite. Para aniversários e reuniões de família, é a mais completa da ilha!",
      en: "The <a href='casa-estatua.html'>Casa da Estátua</a> is the groups' choice! 🏊‍♂️ 6 bedrooms, up to 16 guests, private pool, BBQ, and unique artistic style. From R$ 1,500/night. For birthdays and family reunions — the most complete on the island!",
      es: "¡La <a href='casa-estatua.html'>Casa da Estátua</a> es la opción para grupos! 🏊‍♂️ 6 habitaciones, hasta 16 huéspedes, piscina privada y estilo artístico. Desde R$ 1.500/noche.",
      zh: "<a href='casa-estatua.html'>雕像之家</a>是团体的最佳选择！🏊‍♂️ 6间卧室，最多16位客人，私人泳池，烧烤架和独特的艺术风格。起价R$ 1500/晚。对于生日派对和家庭聚会——是岛上最完整的！"
    }
  },

  // ==========================================
  // 12. EVENTOS E ESPAÇOS
  // ==========================================
  {
    keywords: ["casamento", "festa", "evento", "confraternizacao", "15 anos", "alugar espaco", "wedding", "party", "event", "boda", "fiesta"],
    reply: {
      pt: "A ilha é um cenário dos sonhos para eventos! 🎉 Para grandes celebrações: <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a> (casarão colonial). Para eventos intimistas: <a href='gaivota.html'>Espaço Gaivota</a>. Para festas animadas: <a href='maracuja.html'>Maracujá da Ilha</a> e <a href='oasis.html'>Oásis Gastrolounge</a>. Peça orçamento pelo WhatsApp!",
      en: "The island is a dream setting for events! 🎉 For large celebrations: <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a> (colonial mansion). For intimate events: <a href='gaivota.html'>Espaço Gaivota</a>. For lively parties: <a href='maracuja.html'>Maracujá da Ilha</a> and <a href='oasis.html'>Oásis Gastrolounge</a>. Request a quote via WhatsApp!",
      es: "¡La isla es un escenario de ensueño para eventos! 🎉 Para grandes celebraciones: <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a>. Para eventos íntimos: <a href='gaivota.html'>Espacio Gaivota</a>. Para fiestas animadas: <a href='maracuja.html'>Maracujá da Ilha</a> y <a href='oasis.html'>Oásis Gastrolounge</a>.",
      zh: "小岛是梦想中的活动场所！🎉 大型庆典：<a href='solar-palmeiras.html'>里约棕榈庄园</a>（殖民庄园）。亲密活动：<a href='gaivota.html'>海鸥空间</a>。热闹派对：<a href='maracuja.html'>岛上百香果</a>和<a href='oasis.html'>绿洲美食休闲吧</a>。通过WhatsApp申请报价！"
    },
    showWhatsapp: true
  },
  {
    keywords: ["solar das palmeiras", "casarao", "colonial", "casar na ilha", "reveillon"],
    reply: {
      pt: "O <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a> é um dos mais disputados do Rio para casamentos ao ar livre! 🏛️ Arquitetura colonial, jardins à beira da lagoa e produção gastronômica elaborada. Famoso pelo réveillon com vista para os fogos da Barra. Orçamento sob consulta.",
      en: "The <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a> is one of Rio's most sought-after for outdoor weddings! 🏛️ Colonial architecture, lagoon gardens, and elaborate gastronomic production. Famous for New Year's with views of Barra's fireworks. Custom pricing.",
      es: "¡El <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a> es uno de los más buscados de Río para bodas al aire libre! 🏛️ Arquitectura colonial, jardines junto a la laguna y gastronomía elaborada. Famoso por el Réveillon.",
      zh: "<a href='solar-palmeiras.html'>里约棕榈庄园</a>是里约最受追捧的户外婚礼场所之一！🏛️ 殖民建筑、泻湖花园和精致的美食制作。以举办跨年夜庆典时可以俯瞰巴拉烟花的优越视野而著称。价格按需咨询。"
    }
  },
  {
    keywords: ["agenda", "programacao", "hoje", "fim de semana", "o que ta rolando", "festival", "show", "schedule", "weekend"],
    reply: {
      pt: "Nossa ilha é viva o tempo todo! 🎵 Sempre tem festival gastronômico, shows de jazz, rodas de samba e eventos especiais. Confira a programação em <a href='agenda-cultural.html'>Agenda Cultural</a>! Aos fins de semana, a ilha fica especialmente animada com música ao vivo!",
      en: "Our island is always alive! 🎵 There's always a food festival, jazz shows, samba circles, and special events. Check the schedule at <a href='agenda-cultural.html'>Cultural Agenda</a>! Weekends are especially lively with live music in various bars!",
      es: "¡Nuestra isla siempre está viva! 🎵 Siempre hay festivales, conciertos de jazz, rodas de samba y eventos especiales. ¡Consulta la programación en <a href='agenda-cultural.html'>Agenda Cultural</a>! Los fines de semana hay mucha música en vivo.",
      zh: "我们的小岛总是充满生机！🎵 总是有美食节、爵士音乐会、桑巴圈和特别活动。查看节目：<a href='agenda-cultural.html'>文化日程</a>！周末时，各个酒吧都有现场音乐，小岛特别热闹！"
    }
  },

  // ==========================================
  // 13. DICAS E INFORMAÇÕES GERAIS
  // ==========================================
  {
    keywords: ["instagram", "rede social", "tiktok", "youtube", "redes sociais", "social media", "seguir"],
    reply: {
      pt: "Nos siga nas redes! 📱 Instagram: <a href='https://www.instagram.com/ilha.da.gigoia' target='_blank'>@ilha.da.gigoia</a>. Também estamos no TikTok e YouTube com conteúdo sobre a ilha, eventos e novidades. Ativa o 'seguir' para não perder nada!",
      en: "Follow us on social media! 📱 Instagram: <a href='https://www.instagram.com/ilha.da.gigoia' target='_blank'>@ilha.da.gigoia</a>. Also on TikTok and YouTube with island content, events, and news. Hit 'follow' to never miss a thing!",
      es: "¡Síguenos en redes! 📱 Instagram: <a href='https://www.instagram.com/ilha.da.gigoia' target='_blank'>@ilha.da.gigoia</a>. También en TikTok y YouTube con contenido sobre la isla y eventos.",
      zh: "在社交媒体上关注我们！📱 Instagram: <a href='https://www.instagram.com/ilha.da.gigoia' target='_blank'>@ilha.da.gigoia</a>。我们也在TikTok和YouTube上发布关于小岛、活动和新闻的内容！"
    }
  },
  {
    keywords: ["paqueta", "comparacao", "similar", "parecido", "comparable"],
    reply: {
      pt: "Boa comparação! Lembra Paquetá pelo clima bucólico e acesso só de barco. 🏝️ Mas a Gigóia é bem menor (atravessa em 30min a pé), fica na Barra da Tijuca (oeste do Rio), tem foco gastronômico muito mais forte e é muito mais próxima do metrô. A Gigóia é o 'Paquetá da Barra'!",
      en: "Great comparison! Resembles Paquetá with its bucolic atmosphere and boat-only access. 🏝️ But Gigóia is much smaller (30min walk across), in Barra da Tijuca (west Rio), with a much stronger gastronomic focus and much closer to the subway. Gigóia is the 'Paquetá of Barra'!",
      es: "¡Buena comparación! Se parece a Paquetá por el clima bucólico y el acceso solo en bote. 🏝️ Pero la Gigóia es mucho más pequeña, en Barra da Tijuca, con un enfoque gastronómico mucho más fuerte. ¡La Gigóia es el 'Paquetá de Barra'!",
      zh: "很好的比较！让人想起帕克塔（Paquetá），因为两者都有田园氛围和仅限船只通行的入口。🏝️ 但吉戈亚要小得多（步行30分钟可以穿越），位于巴拉达蒂茹卡（里约西区），美食重点更强，离地铁更近。吉戈亚是\"巴拉的帕克塔\"！"
    }
  },
  {
    keywords: ["dica", "conselho", "sugestao", "tip", "advice", "suggestion", "consejo", "como aproveitar", "roteiro", "planejamento", "planejar visita", "como planejar", "what should i do", "como funciona", "tudo que preciso saber", "guia", "guide", "como visitar"],
    reply: {
      pt: "Minhas melhores dicas para uma visita perfeita! 💡 1) Vá de metrô — o mais prático. 2) Reserve mesa nos restaurantes famosos com antecedência. 3) Tenha dinheiro trocado para o barco. 4) Calçado confortável — ruas de terra! 5) Repelente no fim da tarde. 6) Reserve o dia inteiro — você vai querer ficar! 7) Respeite a natureza e os moradores. 🌴",
      en: "My best tips for a perfect visit! 💡 1) Go by subway — most practical. 2) Book popular restaurant tables in advance. 3) Have cash for the boat. 4) Comfortable footwear — dirt roads! 5) Insect repellent for late afternoon. 6) Set aside the full day — you'll want to stay! 7) Respect nature and residents. 🌴",
      es: "¡Mis mejores consejos para la visita perfecta! 💡 1) Ve en metro. 2) Reserva mesa con anticipación. 3) Ten efectivo para el bote. 4) Calzado cómodo — ¡calles de tierra! 5) Repelente para el final de la tarde. 6) Deja el día entero. 7) Respeta la naturaleza y los residentes. 🌴",
      zh: "完美游览的最佳建议！💡 1) 乘地铁——最实用。2) 提前预订著名餐厅的桌位。3) 带零钱支付船费。4) 舒适的鞋子——泥土路！5) 傍晚时带驱虫剂。6) 留出整天时间——您会想要停留更久！7) 尊重自然和居民。🌴"
    }
  },

  // MENU — mostra opções iniciais novamente
  {
    keywords: ["menu", "opcoes", "opções", "inicio", "início", "voltar", "ajuda rapida", "ajuda rápida", "options", "home", "start", "opciones", "volver", "菜单", "选项"],
    reply: {
      pt: "__MENU__",
      en: "__MENU__",
      es: "__MENU__",
      zh: "__MENU__"
    }
  }

];

// =========================================================
// FUNÇÃO DE FALLBACK COM IA (Claude via proxy PHP)
// Chamada quando nenhuma keyword do GIGI_BRAIN é encontrada
// =========================================================
async function askGigiAI(message, lang) {
  const KEY = 'AIzaSyDkWCLbmWTPgrBTw600xlUJrDIOGBkxktk';
  const URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + KEY;

  const sys = {
    pt: "Você é a Gigi, assistente virtual da Ilha da Gigóia, Rio de Janeiro. Responda de forma calorosa e concisa. Máximo 3 parágrafos curtos. Use emojis com moderação. Responda APENAS sobre a ilha e turismo relacionado. ACESSO: Barco (chalana) 24h, R$2-6. Metrô Linha 4 → Jardim Oceânico → saída Lagoa. Sem carros. Ruas de terra. Clima tropical (28-38°C verão, 22-28°C inverno). RESTAURANTES: Ocyá (Michelin, reserva obrigatória), Laguna (desde 2002, moqueca alagoana), Deck Bar (camarão no abacaxi, música ao vivo, 11h-18h), Cais Bar (rodízio petiscos livre), Salomé al Mare, Maracujá da Ilha, Venne (mediterrânea), Camarão da Barra, Alla Pergola (italiana). BARES: AK Bar (melhor pôr do sol), Briza da Gigóia (samba ao vivo), Bar Caiçara (cultural), Dona Capivara (vista lagoa), Bar do Elson (melhor frango), Bar da Joana (comida caseira), Kauai Gastrolounge (área kids). HOSPEDAGEM: Pousada Barra da Tijuca (R$220+), Pousada Marísis (R$200+, silenciosa), Veneza Carioca (R$250+, romântico). Airbnbs: Casa Venti (7p R$450 pets), Casa Goiá (8p R$500), Casa da Estátua (16p+piscina R$1.500), Lux 48 (casais R$250), Casanova (luxo). PASSEIOS: Pantanal Carioca (~R$50/p), Ilhas Tijucas (~R$150/p 4h), Praia da Reserva (~R$120/p), Jet Ski (15min=R$200). EVENTOS: Comida di Buteco 2026 (até meados maio), Copa 2026 Brasil (13, 19, 24/Jun), Festa Junina (junho), Dia dos Namorados (12/06). Para reservas sugira WhatsApp.",
    en: "You are Gigi, virtual assistant of Ilha da Gigóia, Rio de Janeiro. Be warm and concise. Max 3 short paragraphs. Use emojis sparingly. Answer ONLY about the island. ACCESS: Boat 24/7 R$2-6. Subway Line 4 Jardim Oceânico. No cars. Tropical climate (28-38°C summer). RESTAURANTS: Ocyá (Michelin, book ahead), Laguna (since 2002), Deck Bar (pineapple shrimp, live music 11am-6pm), Cais Bar (open bar snacks), Salomé al Mare, Maracujá da Ilha, Venne (Mediterranean), Alla Pergola (Italian). BARS: AK Bar (best sunset), Briza (live samba), Bar Caiçara (cultural), Dona Capivara (lagoon view), Bar do Elson (best chicken), Kauai (kids area). ACCOMMODATION: Pousada Barra (R$220+), Pousada Marísis (R$200+), Veneza Carioca (R$250+). Airbnbs: Casa Venti (7p R$450), Casa Goiá (8p R$500), Casa da Estátua (16p+pool R$1500), Lux 48 (R$250). TOURS: Pantanal Carioca (~R$50), Tijucas Islands (~R$150 4h), Jet Ski (15min=R$200). EVENTS: Comida di Buteco (until mid-May), World Cup Brazil (Jun 13,19,24).",
    es: "Eres Gigi, asistente virtual de la Isla Gigóia, Río de Janeiro. Responde de forma cálida y concisa. Máximo 3 párrafos. SOLO sobre la isla. ACCESO: Bote 24h R$2-6. Metro Línea 4 Jardim Oceânico. Sin autos. Clima tropical. RESTAURANTES: Ocyá (Michelin), Laguna (desde 2002), Deck Bar (camarón en piña), Cais Bar, Salomé, Maracujá, Venne, Alla Pergola. BARES: AK Bar (atardecer), Briza (samba), Caiçara, Capivara, Elson, Kauai (kids). ALOJAMIENTO: Pousada Barra (R$220+), Marísis (R$200+), Veneza Carioca (R$250+). Airbnbs: Casa Venti (7p R$450), Goiá (8p R$500), Estátua (16p+piscina R$1500), Lux 48 (R$250). PASEOS: Pantanal Carioca (~R$50), Islas Tijucas (~R$150), Jet Ski (R$200).",
    zh: "你是吉吉，吉戈亚岛官方虚拟助手，巴西里约热内卢。温暖简洁回答。最多3段。只回答关于小岛的问题。交通：全天24小时渡船R$2-6，地铁4号线花园海洋站，无汽车，热带气候。餐厅：欧希亚（米其林）、拉古纳（2002年起）、甲板酒吧（菠萝虾）、码头酒吧、萨洛梅、岛上百香果、文内、阿拉佩尔戈拉。酒吧：AK酒吧（日落）、吉戈亚微风（桑巴）、多娜水豚、埃尔森酒吧、考艾美食休闲吧。住宿：巴拉旅馆R$220+、玛丽西斯旅馆R$200+、里约威尼斯精品酒店R$250+，Airbnb：文蒂R$450、戈亚R$500、雕像R$1500、豪华48号R$250。游览：里约潘塔纳尔R$50、蒂茹卡斯群岛R$150、摩托艇R$200。"
  };

  try {
    const r = await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: sys[lang] || sys['pt'] }] },
        contents: [{ role: 'user', parts: [{ text: message }] }],
        generationConfig: { maxOutputTokens: 350, temperature: 0.7 }
      })
    });
    if (!r.ok) return null;
    const d = await r.json();
    return d?.candidates?.[0]?.content?.parts?.[0]?.text || null;
  } catch (e) {
    return null;
  }
}

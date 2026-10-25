/* =========================================================
   CÉREBRO DA GIGI - BASE DE CONHECIMENTO (ILHA DA GIGÓIA)
   Versão: DEFINITIVA (Genéricos + Específicos + Multilíngue)
   ========================================================= */

const GIGI_BRAIN = [

  // ==========================================
  // 1. GATILHOS DIRETOS PARA O WHATSAPP
  // ==========================================
  {
    keywords: ["falar com atendente", "humano", "pessoa", "telefone", "contato", "falar com alguem", "equipe", "atendimento", "atendente", "human", "person", "contact", "speak to someone", "team", "hablar con alguien", "equipo", "contacto", "zap", "whatsapp", "humain", "contacter", "agent", "conseiller", "parler a un humain"],
    reply: {
      pt: "Com certeza! Vou te passar direto para a nossa equipe humana. É só clicar no botão do WhatsApp logo abaixo e mandar sua mensagem!",
      fr: "Bien sûr ! Je vous passe directement à notre équipe humaine. Cliquez simplement sur le bouton WhatsApp juste en dessous et envoyez votre message !",
      en: "Sure! I'll connect you directly to our human team. Just click the WhatsApp button below and send your message!",
      es: "¡Claro! Te conectaré directamente con nuestro equipo humano. ¡Solo haz clic en el botón de WhatsApp abajo y envía tu mensaje!",
      zh: "当然！我会直接将您转接给我们的人工团队。只需点击下方的WhatsApp按钮并发送您的消息！"
    },
    showWhatsapp: true
  },
  {
    keywords: ["reservar", "reserva", "agendar", "agendamento", "marcar", "orcamento", "orçamento", "preco", "preço", "valor", "comprar", "book", "reservation", "schedule", "price", "cost", "buy", "reservación", "programar", "precio", "costo", "reserver", "prix", "tarif", "devis", "acheter"],
    reply: {
      pt: "Excelente! Para consultar valores exatos, disponibilidade e fazer a sua reserva, o ideal é falar direto com a nossa equipe no WhatsApp. É só clicar no botão aqui embaixo!",
      fr: "Parfait ! Pour connaître les tarifs exacts, les disponibilités et faire votre réservation, le mieux est de parler directement avec notre équipe sur WhatsApp. Cliquez sur le bouton ci-dessous !",
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
    keywords: ["sushi", "japones", "japa", "sashimi", "temaki", "yakisoba", "rodizio de sushi", "japanese", "japonesa", "japonais", "cuisine japonaise"],
    reply: {
      pt: "Atualmente não temos restaurantes especializados em culinária japonesa/sushi na Ilha da Gigóia. 🍣 Mas se você gosta de peixe fresco, vai amar a alta gastronomia de frutos do mar do <a href='restaurante-ocya.html'>Ocyá</a> ou do <a href='restaurante-laguna.html'>Laguna</a>!",
      fr: "Il n'y a pas actuellement de restaurant spécialisé en cuisine japonaise / sushi sur l'Île de Gigóia. 🍣 Mais si vous aimez le poisson frais, vous allez adorer la haute gastronomie de fruits de mer de l'<a href='restaurante-ocya.html'>Ocyá</a> ou du <a href='restaurante-laguna.html'>Laguna</a> !",
      en: "Currently, we don't have Japanese cuisine/sushi restaurants on Gigóia Island. 🍣 But if you like fresh fish, try the high-end seafood at <a href='restaurante-ocya.html'>Ocyá</a> or <a href='restaurante-laguna.html'>Laguna</a>!",
      es: "Actualmente no tenemos restaurantes de sushi en la Isla de Gigóia. 🍣 ¡Pero si te gusta el pescado fresco, prueba la alta gastronomía de <a href='restaurante-ocya.html'>Ocyá</a> o <a href='restaurante-laguna.html'>Laguna</a>!",
      zh: "目前吉戈亚岛上没有专门的日本料理/寿司餐厅。🍣 但如果您喜欢新鲜的鱼，一定会喜欢<a href='restaurante-ocya.html'>欧希亚</a>或<a href='restaurante-laguna.html'>拉古纳</a>的高端海鲜！"
    }
  },
  {
    keywords: ["baleia", "tubarao", "golfinho", "pinguim", "leao marinho", "whale", "shark", "dolphin", "penguin", "sea lion", "ballena", "tiburon", "delfin", "pinguino", "lobo marino", "baleine", "requin", "dauphin", "pingouin"],
    reply: {
      pt: "Hahaha! Na nossa lagoa não tem baleia nem tubarão! 🐋 Aqui a água é abrigada. As grandes estrelas da nossa fauna são os jacarés-de-papo-amarelo, as capivaras e as garças.",
      fr: "Hahaha ! Dans notre lagune, il n'y a ni baleine ni requin ! 🐋 Ici l'eau est abritée. Les grandes vedettes de notre faune sont les caïmans à museau large, les capybaras et les hérons.",
      en: "Hahaha! There are no whales or sharks in our lagoon! 🐋 The big stars of our fauna are the broad-snouted caimans, capybaras, and herons.",
      es: "¡Jajaja! ¡En nuestra laguna no hay ballenas ni tiburones! 🐋 Las grandes estrellas de nuestra fauna son los caimanes de hocico ancho, las capibaras y las garzas.",
      zh: "哈哈哈！我们的泻湖里没有鲸鱼或鲨鱼！🐋 这里的水域很平静。我们动物群的明星是宽吻凯门鳄、水豚和苍鹭。"
    }
  },
  {
    keywords: ["nadar", "banho", "mergulhar", "agua limpa", "swim", "bathe", "dive", "clean water", "bañarse", "bucear", "agua limpia", "nager", "baignade", "se baigner", "eau propre"],
    reply: {
      pt: "Antigamente a lagoa era límpida e os moradores tomavam banho, mas hoje, devido ao assoreamento e urbanização, NÃO recomendamos o banho na lagoa. 🚫 Se quiser mergulhar, agende nosso passeio para as <a href='ilhas-tijucas.html'>Ilhas Tijucas</a>!",
      fr: "Autrefois la lagune était limpide et les habitants s'y baignaient, mais aujourd'hui, à cause de l'envasement et de l'urbanisation, nous NE recommandons PAS la baignade dans la lagune. 🚫 Si vous voulez nager, réservez notre excursion vers les <a href='ilhas-tijucas.html'>Ilhas Tijucas</a> !",
      en: "In the past, the lagoon was crystal clear, but today, due to silting, we DO NOT recommend swimming in it. 🚫 For diving, book our tour to the <a href='ilhas-tijucas.html'>Tijucas Islands</a>!",
      es: "Antiguamente la laguna era cristalina, pero hoy NO recomendamos bañarse en ella debido a la contaminación. 🚫 Para bucear, ¡reserva nuestro tour a las <a href='ilhas-tijucas.html'>Islas Tijucas</a>!",
      zh: "过去泻湖水质清澈，居民们会在这里游泳，但如今由于淤积和城市化，我们不建议在泻湖游泳。🚫 如果您想潜水，请预订我们的<a href='ilhas-tijucas.html'>蒂茹卡斯群岛</a>之旅！"
    }
  },
  {
    keywords: ["praia de areia", "praia na ilha", "tem praia", "beach", "sandy beach", "playa", "playa de arena", "plage", "plage de sable"],
    reply: {
      pt: "A Ilha da Gigóia é cercada pela lagoa, não tem praia de mar com ondas. 🌴 Mas o barquinho pode te deixar num deck a apenas 5 minutinhos de caminhada da Praia da Barra da Tijuca!",
      fr: "L'Île de Gigóia est entourée par la lagune, il n'y a pas de plage de mer avec des vagues. 🌴 Mais le bateau peut vous déposer à un ponton à seulement 5 minutes à pied de la plage de Barra da Tijuca !",
      en: "Gigóia Island is surrounded by the lagoon, it has no ocean beach. 🌴 However, the boat can drop you 5 minutes away from Barra da Tijuca Beach!",
      es: "La Isla de Gigóia está rodeada por la laguna, no tiene playa de mar. 🌴 ¡Pero el bote puede dejarte a 5 minutos a pie de la Playa de Barra da Tijuca!",
      zh: "吉戈亚岛被泻湖环绕，没有有浪的海滩。🌴 但小船可以在5分钟步行路程内送您到巴拉达蒂茹卡海滩！"
    }
  },

  // ==========================================
  // 3. SAUDAÇÕES E INTERAÇÕES BÁSICAS
  // ==========================================
  {
    keywords: ["oi", "ola", "bom dia", "boa tarde", "boa noite", "tudo bem", "hey", "eae", "opa", "alo", "salve", "hello", "hi", "good morning", "good afternoon", "good evening", "how are you", "hola", "buenos dias", "buenas tardes", "buenas noches", "que tal", "bonjour", "bonsoir", "salut", "coucou"],
    reply: {
      pt: "Olá! Tudo ótimo por aqui! 😊 Sou a Gigi, a assistente virtual oficial do Portal. Como posso te ajudar a planejar seu dia perfeito na Ilha da Gigóia hoje?",
      fr: "Bonjour ! Tout va très bien ici ! 😊 Je suis Gigi, l'assistante virtuelle officielle du Portail. Comment puis-je vous aider à préparer votre journée parfaite sur l'Île de Gigóia ?",
      en: "Hello! Everything is great here! 😊 I'm Gigi, the official virtual assistant of the Portal. How can I help you plan your perfect day on Gigóia Island today?",
      es: "¡Hola! ¡Todo genial por aquí! 😊 Soy Gigi, la asistente virtual oficial del Portal. ¿Cómo puedo ayudarte a planificar tu día perfecto en la Isla de Gigóia hoy?",
      zh: "您好！这里一切都很棒！😊 我是吉吉，门户网站的官方虚拟助手。我今天能帮您规划在吉戈亚岛上的完美一天吗？"
    }
  },
  {
    keywords: ["obrigado", "obrigada", "valeu", "show", "perfeito", "otimo", "top", "legal", "agradecido", "incrivel", "maravilha", "thanks", "thank you", "great", "perfect", "awesome", "gracias", "genial", "perfecto", "increible", "merci", "parfait", "formidable"],
    reply: {
      pt: "Por nada! Fico muito feliz em ajudar. Se precisar de mais alguma dica, quiser saber de algum restaurante ou agendar um passeio, é só me chamar. Boa diversão na Ilha! 🌴",
      fr: "Je vous en prie ! Ravie d'avoir pu aider. Si vous avez besoin d'un autre conseil, d'une adresse de restaurant ou de réserver une excursion, écrivez-moi. Bon séjour sur l'île ! 🌴",
      en: "You're welcome! I'm very happy to help. If you need any more tips, want to know about a restaurant, or book a tour, just let me know. Have fun on the Island! 🌴",
      es: "¡De nada! Me alegra mucho ayudar. Si necesitas algún consejo más, quieres saber sobre algún restaurante o reservar un tour, solo dímelo. ¡Diviértete en la Isla! 🌴",
      zh: "不客气！很高兴能帮上忙。如果您需要更多建议、想了解餐厅或预订游览，请随时联系我。在小岛上玩得开心！🌴"
    }
  },
  {
    keywords: ["quem e voce", "robo", "inteligencia artificial", "humano", "inteligencia", "bot", "assistente", "vc e real", "who are you", "robot", "artificial intelligence", "assistant", "quien eres", "eres real", "asistente", "qui es tu", "qui etes vous", "assistante", "es tu un robot"],
    reply: {
      pt: "Eu sou a Gigi, a mascote e assistente virtual do Portal Ilha da Gigóia! 🕊️ Fui programada para conhecer cada detalhe histórico e turístico daqui. Se eu não souber algo, te passo para nossa equipe humana, combinado?",
      fr: "Je suis Gigi, la mascotte et l'assistante virtuelle du Portal Ilha da Gigóia ! 🕊️ J'ai été programmée pour connaître chaque détail historique et touristique d'ici. Si je ne sais pas quelque chose, je vous passe à notre équipe humaine, d'accord ?",
      en: "I am Gigi, the mascot and virtual assistant of the Portal! 🕊️ I was programmed to know every historical and tourist detail here. If I don't know something, I'll pass you to our human team, deal?",
      es: "¡Soy Gigi, la mascota y asistente virtual del Portal! 🕊️ Fui programada para conocer cada detalle histórico y turístico de aquí. Si no sé algo, te paso a nuestro equipo humano, ¿de acuerdo?",
      zh: "我是吉吉，门户网站的吉祥物和虚拟助手！🕊️ 我被编程来了解这里每一个历史和旅游细节。如果我不知道某些事情，我会把您转接给我们的人工团队，好吗？"
    }
  },

  // ==========================================
  // 4. PERGUNTAS GENÉRICAS (CORINGAS)
  // ==========================================
  {
    keywords: ["comer", "restaurante", "fome", "almoco", "jantar", "comida", "onde comer", "gastronomia", "alimentacao", "eat", "restaurant", "lunch", "dinner", "food", "where to eat", "donde comer", "almuerzo", "cena", "manger", "ou manger", "diner", "dejeuner", "nourriture"],
    reply: {
      pt: "A Gigóia é um paraíso gastronômico! 🍤 Temos excelentes restaurantes de frutos do mar (como Ocyá e Laguna), lanches rápidos, cafés e botecos raiz. Veja nossa lista completa de locais na página <a href='restaurantes.html'>Onde Comer</a>.",
      fr: "La Gigóia est un paradis gastronomique ! 🍤 Nous avons d'excellents restaurants de fruits de mer (comme l'Ocyá et le Laguna), des snacks, des cafés et des botecos authentiques. Voyez la liste complète sur la page <a href='restaurantes.html'>Où manger</a>.",
      en: "Gigóia is a gastronomic paradise! 🍤 We have excellent seafood restaurants (like Ocyá and Laguna), quick snacks, cafes, and traditional pubs. See our full list on the <a href='restaurantes.html'>Where to Eat</a> page.",
      es: "¡Gigóia es un paraíso gastronómico! 🍤 Tenemos excelentes restaurantes de mariscos (como Ocyá y Laguna), comida rápida, cafeterías y tabernas. Mira nuestra lista completa en la página <a href='restaurantes.html'>Dónde Comer</a>.",
      zh: "当然！🍽️ 岛上的美食是亮点之一。对于高级美食，我推荐<a href='restaurante-ocya.html'>欧希亚</a>（米其林认可）。对于传统美食，<a href='restaurante-laguna.html'>拉古纳</a>是先驱。寻找轻松的地方？<a href='restaurante-deck-bar.html'>甲板酒吧</a>以菠萝虾而闻名！"
    }
  },
  {
    keywords: ["passeio", "passear", "tour", "roteiro", "fazer o que", "o que fazer", "atividade", "turismo", "what to do", "excursion", "que hacer", "paseo", "actividad", "balade", "que faire", "visite", "activite", "quoi faire"],
    reply: {
      pt: "Temos dois passeios imperdíveis! 🚤 O <a href='pantanal-carioca.html'>Pantanal Carioca</a> — você vê jacarés e capivaras de pertinho nos manguezais, sai todo dia, custa <strong>R$50 por pessoa</strong>. E as <a href='ilhas-tijucas.html'>Ilhas Tijucas</a> — nosso Caribe Carioca, 4h em mar aberto com tartarugas marinhas, <strong>R$150 por pessoa</strong>, vagas limitadas! Qual te interessa mais? Posso reservar agora pelo WhatsApp 😊",
      fr: "Nous avons deux excursions à ne pas manquer ! 🚤 Le <a href='pantanal-carioca.html'>Pantanal Carioca</a> — vous voyez caïmans et capybaras de tout près dans les mangroves, départ tous les jours, <strong>R$50 par personne</strong>. Et les <a href='ilhas-tijucas.html'>Ilhas Tijucas</a> — nos Caraïbes cariocas, 4h en pleine mer avec des tortues marines, <strong>R$150 par personne</strong>, places limitées ! Laquelle vous tente le plus ? Je peux réserver tout de suite sur WhatsApp 😊",
      en: "We have two unmissable tours! 🚤 <a href='pantanal-carioca.html'>Carioca Pantanal</a> — see caimans and capybaras up close in the mangroves, departs daily, <strong>R$50 per person</strong>. And <a href='ilhas-tijucas.html'>Tijucas Islands</a> — our Caribbean, 4h open sea with sea turtles, <strong>R$150 per person</strong>, limited spots! Which one interests you? I can book right now on WhatsApp 😊",
      es: "¡Tenemos dos tours imperdibles! 🚤 <a href='pantanal-carioca.html'>Pantanal Carioca</a> — ver caimanes y capibaras de cerca, sale todos los días, <strong>R$50 por persona</strong>. Y las <a href='ilhas-tijucas.html'>Islas Tijucas</a> — nuestro Caribe, 4h en mar abierto con tortugas, <strong>R$150 por persona</strong>, ¡cupos limitados! ¿Cuál te interesa? ¡Puedo reservar ahora por WhatsApp 😊",
      zh: "我们有两个必游之旅！🚤 <a href='pantanal-carioca.html'>里约潘塔纳尔</a>——近距离观看凯门鳄和水豚，每天出发，<strong>每人R$50</strong>。还有<a href='ilhas-tijucas.html'>蒂茹卡斯群岛</a>——我们的加勒比海，4小时公海游，海龟相伴，<strong>每人R$150</strong>，名额有限！哪个更感兴趣？我可以立即通过WhatsApp预订😊"
    },
    showWhatsapp: true
  },
  {
    keywords: ["dormir", "pousada", "hotel", "hospedagem", "ficar", "pernoite", "onde dormir", "onde ficar", "sleep", "inn", "accommodation", "stay", "where to sleep", "posada", "alojamiento", "donde dormir", "hebergement", "ou loger", "auberge", "loger", "ou dormir"],
    reply: {
      pt: "Boa escolha, a ilha é um sonho para se hospedar! 🏡 Me conta: vocês são casal, família ou grupo de amigos? E quantas pessoas? Assim te indico a opção perfeita — temos pousadas charmosas a partir de <strong>R$300/diária por casal</strong> (chegando a R$650 nas mais sofisticadas) e casas de temporada completas para grupos. Já reserva pelo WhatsApp! 😊",
      fr: "Excellent choix, l'île est un rêve pour y séjourner ! 🏡 Dites-moi : vous êtes en couple, en famille ou entre amis ? Et combien de personnes ? Je vous indiquerai l'option parfaite — nous avons des auberges pleines de charme à partir de <strong>R$300 la nuit pour deux</strong> (jusqu'à R$650 pour les plus raffinées) et des maisons de vacances complètes pour les groupes. Réservez dès maintenant sur WhatsApp ! 😊",
      en: "Great choice, the island is a dream for a stay! 🏡 Tell me: are you a couple, family, or group of friends? And how many people? That way I can point you to the perfect option — we have charming inns from <strong>R$300/night per couple</strong> (up to R$650 for the more upscale ones) and full vacation homes for groups. Book right on WhatsApp! 😊",
      es: "¡Excelente elección, la isla es un sueño para hospedarse! 🏡 Cuéntame: ¿son pareja, familia o grupo de amigos? ¿Y cuántas personas? Así te indico la opción perfecta — tenemos posadas desde <strong>R$300/noche por pareja</strong> (hasta R$650 en las más sofisticadas) y casas completas para grupos. ¡Reserva ahora por WhatsApp! 😊",
      zh: "好主意，小岛是住宿的梦想之地！🏡 告诉我：你们是情侣、家庭还是朋友团体？有多少人？这样我可以为你推荐完美的选择——我们有从<strong>每对情侣R$300/晚</strong>起的迷人旅馆（更高档的可达R$650）和适合团体的完整度假屋。立即通过WhatsApp预订！😊"
    },
    showWhatsapp: true
  },

  // ==========================================
  // 5. HISTÓRIA, GEOLOGIA E CURIOSIDADES
  // ==========================================
  {
    keywords: ["historia", "origem", "geologia", "17 mil anos", "pedra branca", "history", "origin", "geology", "historia", "origen", "geologia", "histoire", "origine", "geologie", "passe"],
    reply: {
      pt: "A história é fascinante! 📜 Geólogos dizem que há 17 mil anos o nível do mar era 70 metros mais baixo e batia no maciço da Pedra Branca. A erosão e o assoreamento fecharam a passagem, formando a praia da Barra, as lagoas e o nosso arquipélago.",
      fr: "L'histoire est fascinante ! 📜 Les géologues disent qu'il y a 17 000 ans le niveau de la mer était 70 mètres plus bas et venait battre le massif de la Pedra Branca. L'érosion et l'envasement ont fermé le passage, formant la plage de Barra, les lagunes et notre archipel.",
      en: "The history is fascinating! 📜 Geologists say 17,000 years ago, the sea level was 70m lower and hit the Pedra Branca mountains. Erosion formed Barra beach, the lagoons, and our archipelago.",
      es: "¡La historia es fascinante! 📜 Los geólogos dicen que hace 17.000 años el mar estaba 70m más bajo y golpeaba las montañas de Pedra Branca. La erosión formó la playa de Barra, las lagunas y nuestro archipiélago.",
      zh: "到达很简单！🚇 最实用的方式是乘坐地铁到花园海洋站。从那里，只需步行几分钟就可以到达渡船点，它全天24小时运营。🚤 租车的话，有停车场可供使用，但岛上不允许汽车进入。"
    }
  },
  {
    keywords: ["veneza carioca", "apelido", "por que veneza", "venice", "why veneza", "venecia", "por que venecia", "venise", "pourquoi venise"],
    reply: {
      pt: "Ganhamos o apelido de 'Veneza Carioca' porque somos um arquipélago cercado de canais navegáveis, sem carros, onde a vida flui em barcos, num clima bucólico que contrasta com o caos da metrópole. 🚤",
      fr: "On nous a surnommés la « Venise carioca » parce que nous sommes un archipel entouré de canaux navigables, sans voitures, où la vie se déroule en bateau, dans une ambiance bucolique qui contraste avec le chaos de la métropole. 🚤",
      en: "We earned the nickname 'Carioca Venice' because we are an archipelago surrounded by canals, with no cars, where life flows on boats, contrasting with the city's chaos. 🚤",
      es: "Ganamos el apodo de 'Venecia Carioca' porque somos un archipiélago rodeado de canales, sin autos, donde la vida fluye en botes, contrastando con el caos de la metrópoli. 🚤",
      zh: "这里真的很特别！🐊 岛上最受欢迎的动物是宽吻凯门鳄（非常温顺！）、水豚和各种鸟类，如苍鹭和科鸟。如果您乘船游览运河，一定会看到它们的！"
    }
  },
  {
    keywords: ["rua dos colibris", "guaimun", "coroneis", "3 ilhas", "tres ilhas", "colibris", "three islands", "tres islas", "trois iles"],
    reply: {
      pt: "Curiosidade: A Gigóia na verdade eram 3 ilhas! 🏝️ A Ilha da Gigóia, dos Coronéis e Guaimun. O canal que dividia elas secou com o tempo e hoje se transformou na famosa Rua dos Colibris!",
      fr: "Une curiosité : la Gigóia était en réalité 3 îles ! 🏝️ L'Ilha da Gigóia, celle dos Coronéis et Guaimun. Le canal qui les séparait s'est asséché avec le temps et est devenu aujourd'hui la fameuse Rua dos Colibris !",
      en: "Fun fact: Gigóia was originally 3 islands! 🏝️ Gigóia, Coronéis, and Guaimun. The dividing canal dried up and is now the famous Colibris Street!",
      es: "Dato curioso: ¡Gigóia eran originalmente 3 islas! 🏝️ Gigóia, Coronéis y Guaimun. ¡El canal que las dividía se secó y ahora es la famosa Calle Colibris!",
      zh: "岛上有很多很棒的地方！🍺 <a href='bar-ak.html'>AK酒吧</a>以日落而闻名。<a href='bar-briza.html'>吉戈亚微风</a>在周末有桑巴。<a href='bar-capivara.html'>水豚小馆</a>面朝泻湖，视野绝佳。还有更多！"
    }
  },
  {
    keywords: ["ponte de madeira", "ponte", "avenida das americas", "av das americas", "ligacao continente", "bridge", "puente", "pont", "pont en bois"],
    reply: {
      pt: "No passado, a ilha tinha uma ponte de madeira com acesso direto para a Av. das Américas! 🌉 Com o tempo e o crescimento, ela foi demolida. Hoje o isolamento (acesso 100% por barco) é o nosso maior charme.",
      fr: "Autrefois, l'île avait un pont en bois avec un accès direct à l'Av. das Américas ! 🌉 Avec le temps et la croissance, il a été démoli. Aujourd'hui, l'isolement (accès 100 % par bateau) est notre plus grand charme.",
      en: "In the past, the island had a wooden bridge connecting to Av. das Américas! 🌉 It was demolished over time. Today, the 100% boat access is our greatest charm.",
      es: "En el pasado, la isla tenía un puente de madera que conectaba con la Av. das Américas. 🌉 Fue demolido con el tiempo. Hoy, el acceso 100% en bote es nuestro mayor encanto.",
      zh: "主要渡船（地铁附近）约为R$ 2至R$ 5，视时间而定。🚤 私人游览行程因路线和时长而异——请通过WhatsApp联系我们获取确切报价！"
    }
  },
  {
    keywords: ["pescadores", "primeiros moradores", "antigamente", "como comecou", "fishermen", "pescadores", "pecheurs", "premiers habitants"],
    reply: {
      pt: "A ocupação da ilha começou de forma singela com pescadores. 🎣 Eles viviam da pesca do camarão em águas tão limpas que se via a areia branca do fundo. Com a mídia, o paraíso foi descoberto e a ocupação cresceu.",
      fr: "L'occupation de l'île a commencé modestement, avec des pêcheurs. 🎣 Ils vivaient de la pêche à la crevette dans une eau si claire qu'on voyait le sable blanc du fond. Avec les médias, le paradis a été découvert et l'occupation s'est développée.",
      en: "The island's occupation started simply with fishermen catching shrimp in waters so clean you could see the white sand. 🎣 Then the media discovered the paradise.",
      es: "La ocupación de la isla comenzó con pescadores que atrapaban camarones en aguas tan limpias que se veía la arena blanca. 🎣 Luego los medios descubrieron el paraíso.",
      zh: "是的！😊 几乎所有岛上的旅馆、餐厅和酒吧都提供免费Wi-Fi。信号通常很好，虽然在一些较偏僻的地方运营商信号（4G/5G）可能会不稳定。"
    }
  },
  {
    keywords: ["populacao", "habitantes", "quantas pessoas", "moradores", "population", "inhabitants", "how many people", "residents", "poblacion", "habitantes", "cuantas personas", "residentes", "combien habitants", "combien de personnes"],
    reply: {
      pt: "A Ilha da Gigóia foi a que mais sofreu com o crescimento rápido. Hoje abriga cerca de 7 mil moradores! Todo o complexo lagunar junto soma quase 12 mil pessoas morando no arquipélago. 🏘️",
      fr: "L'Île de Gigóia est celle qui a le plus souffert de la croissance rapide. Elle abrite aujourd'hui environ 7 000 habitants ! L'ensemble du complexe lagunaire réunit près de 12 000 personnes vivant sur l'archipel. 🏘️",
      en: "Gigóia Island grew the fastest. Today it houses about 7,000 residents! The whole lagoon complex totals nearly 12,000 people living in the archipelago. 🏘️",
      es: "La Isla de Gigóia fue la que más creció. ¡Hoy alberga a unos 7.000 residentes! Todo el complejo de la laguna suma casi 12.000 personas viviendo en el archipiélago. 🏘️",
      zh: "很多住宿都允许携带宠物！🐾 例如，<a href='casa-venti.html'>文蒂之家</a>和<a href='casa-goia.html'>戈亚之家</a>通常接受小型宠物（需提前确认）。建议通过WhatsApp联系我们，以便我们验证每个地方的具体政策。"
    }
  },
  {
    keywords: ["iptu", "uniao", "prefeitura", "ilegal", "non edificando", "decreto", "comprar casa", "terreno", "legalizado", "legal", "taxes", "impuestos", "gobierno", "terrain", "impots", "acheter une maison"],
    reply: {
      pt: "Curiosidade fundiária: Todos os terrenos pertencem à União. Em 1981, um decreto da Prefeitura transformou a área em 'non edificandi'. Por conta da fiscalização precária no passado, a maioria das casas hoje não possui inscrição formal de IPTU. 🏢",
      fr: "Une curiosité foncière : tous les terrains appartiennent à l'État fédéral. En 1981, un décret municipal a classé la zone « non edificandi ». En raison d'un contrôle insuffisant par le passé, la plupart des maisons n'ont aujourd'hui pas d'inscription formelle à la taxe foncière. 🏢",
      en: "Land curiosity: All land here belongs to the Federal Government. A 1981 decree banned residential building, so most houses today lack formal city tax registration (IPTU). 🏢",
      es: "Curiosidad de tierras: Todo el terreno pertenece a la Unión (Gobierno). Un decreto de 1981 prohibió construir, por lo que la mayoría de las casas no pagan impuesto municipal formal (IPTU). 🏢",
      zh: "非常适合带孩子！👨‍👩‍👧‍👦 <a href='bar-kauai.html'>考艾美食休闲吧</a>有儿童游乐区。岛上禁止汽车，使其成为孩子们安全行走的环境。带他们去看野生动物——他们一定会爱上凯门鳄和水豚的！"
    }
  },
  {
    keywords: ["poluicao", "esgoto", "saneamento", "assoreamento", "pollution", "sewage", "sanitation", "polucion", "alcantarillado", "saneamiento", "egouts", "assainissement", "envasement"],
    reply: {
      pt: "A urbanização desordenada trouxe desafios: o consumo de água aumentou e a falta de tratamento de esgoto gerou poluição e assoreamento da lagoa. 🌿 Mesmo com o desgaste do progresso, a natureza resiste bravamente e é nosso maior tesouro.",
      fr: "L'urbanisation désordonnée a apporté son lot de défis : la consommation d'eau a augmenté et l'absence de traitement des eaux usées a provoqué pollution et envasement de la lagune. 🌿 Malgré l'usure du progrès, la nature résiste vaillamment et reste notre plus grand trésor.",
      en: "Disorderly urbanization brought challenges: lack of sewage treatment caused pollution and lagoon silting. 🌿 Even with this wear, nature resists and is our greatest treasure.",
      es: "La urbanización desordenada trajo desafíos: la falta de tratamiento de aguas residuales causó contaminación y sedimentación. 🌿 A pesar de esto, la naturaleza resiste y es nuestro mayor tesoro.",
      zh: "当然！🚗 在渡船点附近有停车场。最实用的是接近花园海洋地铁站的停车场。记住：汽车不能进入岛屿，只能留在渡口区域。"
    }
  },
  {
    keywords: ["vale a pena", "vale a pena visitar", "o que acha", "is it worth it", "vale la pena", "ca vaut le coup", "vaut la peine"],
    reply: {
      pt: "Lógico que vale a pena! 😍 Apesar dos desafios urbanos, a Gigóia é mágica. É uma mistura de clima de interior, paz, alta gastronomia e natureza incrível a apenas 5 minutos da metrópole caótica.",
      fr: "Bien sûr que ça vaut le coup ! 😍 Malgré les défis urbains, la Gigóia est magique. C'est un mélange d'ambiance de province, de paix, de haute gastronomie et de nature incroyable, à seulement 5 minutes de la métropole chaotique.",
      en: "Of course it's worth it! 😍 Despite urban challenges, Gigóia is magical. It's a mix of countryside peace, high gastronomy, and incredible nature just 5 mins from the chaotic city.",
      es: "¡Lógico que vale la pena! 😍 A pesar de los desafíos urbanos, Gigóia es mágica. Es una mezcla de paz pueblerina, alta gastronomía y naturaleza increíble a 5 mins de la ciudad.",
      zh: "我的主要建议是：提前预订餐厅和游览，特别是在周末和节假日，因为岛上总是很热闹！🌴 此外，带上驱蚊剂、穿舒适的鞋子，并留出一整天——一旦您到了那里，就不想离开了！"
    }
  },
  {
    keywords: ["allan", "hostel barra lake", "cachorra lola", "lola", "morador antigo", "hostel", "ancien habitant"],
    reply: {
      pt: "O Allan do Hostel Barra Lake é uma lenda viva daqui! Ele mora na ilha há mais de 40 anos e viu a Barra da Tijuca nascer. E quem cuida da propriedade com ele é a sua simpática cachorrinha Lola. 🐶",
      fr: "Allan, du Hostel Barra Lake, est une légende vivante ici ! Il vit sur l'île depuis plus de 40 ans et a vu naître Barra da Tijuca. Et c'est sa gentille petite chienne Lola qui veille sur les lieux avec lui. 🐶",
      en: "Allan from Hostel Barra Lake is a local legend! He has lived here for over 40 years and saw Barra da Tijuca be built. His friendly dog Lola helps him look after the property. 🐶",
      es: "¡Allan del Hostel Barra Lake es una leyenda local! Vive aquí hace más de 40 años. Su simpática perra Lola lo ayuda a cuidar la propiedad. 🐶",
      zh: "吉戈亚岛是里约热内卢最安全的地方之一。🌴 由于没有汽车通行，街道对行人非常友好。与任何地方一样，保持正常的安全措施即可，享受放松的环境！"
    }
  },
  {
    keywords: ["chalana", "transporte antigo", "ze iris", "ze grande", "antonio", "seu joao", "como era o barco", "old transport", "transporte antiguo", "ancien transport", "barques"],
    reply: {
      pt: "A história do nosso transporte é linda! 🛶 Começou só com barcos a remo. O serviço de chalana surgiu com Antônio, Zé Iris e Zé Grande (que só operavam de dia). O transporte noturno só foi inventado anos depois, pelo Seu João!",
      fr: "L'histoire de notre transport est très belle ! 🛶 Tout a commencé avec de simples barques à rames. Le service de chalana est né avec Antônio, Zé Iris et Zé Grande (qui n'opéraient que de jour). Le transport de nuit n'a été inventé que des années plus tard, par Seu João !",
      en: "Our transport history is beautiful! 🛶 It started with rowboats. The 'chalana' service was created by locals like Antônio. Night transport was only invented years later by Seu João!",
      es: "¡Nuestra historia de transporte es hermosa! 🛶 Comenzó con botes de remos. El servicio de 'chalana' fue creado por lugareños como Antônio. ¡El transporte nocturno fue inventado años después por Seu João!",
      zh: "当然！📱 在Instagram上关注我们 <a href='https://www.instagram.com/ilha.da.gigoia' target='_blank'>@ilha.da.gigoia</a> 以获取最新照片、活动和小贴士。我们的TikTok和YouTube也有精彩内容！"
    }
  },
  {
    keywords: ["simao express", "nilson", "barco taxi", "cartao fidelidade", "fidelidade", "boat taxi", "taxi acuatico", "bateau taxi", "carte de fidelite"],
    reply: {
      pt: "Em 2015 o transporte evoluiu: o morador Nilson Simão criou o Barco Táxi (Simão Express)! 🚤 Hoje ele tem barcos legalizados funcionando das 6h às 0h e até oferece 'Cartão Fidelidade' com descontos para os moradores economizarem.",
      fr: "En 2015, le transport a évolué : Nilson Simão, un habitant, a créé le Barco Táxi (Simão Express) ! 🚤 Il dispose aujourd'hui de bateaux agréés circulant de 6h à minuit et propose même une « carte de fidélité » avec des réductions pour les habitants.",
      en: "In 2015, local Nilson created the Boat Taxi (Simão Express)! 🚤 They run from 6 AM to midnight and offer a Loyalty Card with discounts for residents.",
      es: "En 2015, el residente Nilson creó el Barco Taxi (Simão Express). 🚤 Funcionan de 6 am a medianoche y ofrecen una Tarjeta de Fidelidad con descuentos para residentes.",
      zh: "🌊 吉戈亚岛的泻湖是吉戈亚泻湖的一部分，它是巴拉达蒂茹卡泻湖体系的一部分。这是一个平静而美丽的环境，周围有丰富的野生动植物——里约真正的卡里奥卡潘塔纳尔！"
    }
  },

  // ==========================================
  // 6. DICAS PRÁTICAS E INFRAESTRUTURA
  // ==========================================
  {
    keywords: ["dinheiro", "cartao", "pix", "caixa eletronico", "banco", "pagamento", "pagar", "money", "card", "atm", "bank", "payment", "pay", "dinero", "tarjeta", "cajero automatico", "banco", "pago", "argent", "carte bancaire", "distributeur", "payer", "especes", "liquide"],
    reply: {
      pt: "A grande maioria dos estabelecimentos aceita PIX e Cartão! 💳 Porém, tenha sempre dinheiro vivo (notas trocadas) para pagar a travessia das chalanas. Não temos caixa eletrônico dentro da ilha.",
      fr: "La grande majorité des établissements acceptent le PIX et la carte ! 💳 Mais ayez toujours du liquide (petites coupures) pour payer la traversée en chalana. Il n'y a pas de distributeur sur l'île.",
      en: "The vast majority of places accept PIX and Cards! 💳 However, always carry small cash for the boat crossings. We do not have an ATM on the island.",
      es: "¡La gran mayoría acepta PIX y Tarjeta! 💳 Sin embargo, siempre lleva efectivo pequeño para los cruces en bote. No tenemos cajero automático en la isla.",
      zh: "🏛️ 吉戈亚岛有着丰富的历史！这里曾是渔民和水手的聚居地。随着时间的推移，它成为了里约一个独特的旅游目的地，以其平静、自然和美食而著称。了解更多请访问我们的<a href='historia-cultura.html'>历史与文化</a>页面！"
    }
  },
  {
    keywords: ["mosquito", "repelente", "borrachudo", "inseto", "pernilongo", "repellent", "bug", "insect", "repelente", "insecto", "bicho", "moustique", "repulsif", "insecte"],
    reply: {
      pt: "Dica de ouro: Como estamos inseridos no Pantanal Carioca, especialmente no final da tarde, é super recomendável trazer um repelente! 🦟 Assim você curte o pôr do sol sem preocupações.",
      fr: "Le bon conseil : comme nous sommes au cœur du Pantanal Carioca, surtout en fin d'après-midi, il est vivement recommandé d'apporter un répulsif ! 🦟 Vous profiterez du coucher de soleil sans soucis.",
      en: "Golden tip: Since we are in the Carioca Pantanal, especially in the late afternoon, it is highly recommended to bring bug repellent! 🦟",
      es: "Consejo de oro: Como estamos en el Pantanal Carioca, especialmente al final de la tarde, ¡es muy recomendable traer repelente de insectos! 🦟",
      zh: "<a href='pousada-barra.html'>蒂茹卡巴拉旅馆</a>非常传统且位置优越：最靠近地铁渡口。🌴"
    }
  },
  {
    keywords: ["acessibilidade", "cadeirante", "idoso", "cadeira de rodas", "dificuldade", "locomocao", "accessibility", "wheelchair", "elderly", "mobility", "accesibilidad", "silla de ruedas", "anciano", "movilidad", "accessibilite", "fauteuil roulant", "mobilite reduite", "personnes agees"],
    reply: {
      pt: "A ilha tem um charme rústico com ruelas estreitas. Para melhor acessibilidade, recomendamos ir de barco direto para o deck de locais preparados como o <a href='restaurante-laguna.html'>Laguna</a> ou <a href='bar-kauai.html'>Kauai</a>.",
      fr: "L'île a un charme rustique, avec ses ruelles étroites. Pour une meilleure accessibilité, nous recommandons d'aller en bateau directement au ponton d'établissements équipés comme le <a href='restaurante-laguna.html'>Laguna</a> ou le <a href='bar-kauai.html'>Kauai</a>.",
      en: "The island has narrow rustic streets. For better accessibility, we recommend going by boat directly to the deck of places like <a href='restaurante-laguna.html'>Laguna</a> or <a href='bar-kauai.html'>Kauai</a>.",
      es: "La isla tiene calles rústicas y estrechas. Para mayor accesibilidad, recomendamos ir en bote directamente al muelle de lugares como <a href='restaurante-laguna.html'>Laguna</a> o <a href='bar-kauai.html'>Kauai</a>.",
      zh: "<a href='pousada-marisis.html'>玛丽西斯旅馆</a>是寻求绝对安静和无可挑剔清洁度的人的完美避难所。🌺"
    }
  },
  {
    keywords: ["farmacia", "remedio", "hospital", "posto de saude", "emergencia", "medico", "pharmacy", "medicine", "doctor", "emergency", "farmacia", "medicina", "hospital", "medico", "emergencia", "pharmacie", "medicament", "urgence", "medecin", "hopital"],
    reply: {
      pt: "Temos 2 farmácias pequenas na ilha, mas para emergências ou hospitais, logo ali na Av. Armando Lombardi (a 5 min de barco) você encontra clínicas e grandes drogarias 24h. 🏥",
      fr: "Nous avons 2 petites pharmacies sur l'île, mais pour les urgences ou l'hôpital, juste à côté, Av. Armando Lombardi (à 5 min en bateau), vous trouverez des cliniques et de grandes pharmacies 24h/24. 🏥",
      en: "We have 2 small pharmacies on the island. For emergencies, just on Armando Lombardi Ave. (5 mins by boat) you can find hospitals and 24h drugstores. 🏥",
      es: "Tenemos 2 farmacias pequeñas en la isla. Para emergencias, en la Av. Armando Lombardi (a 5 minutos en bote) encontrarás hospitales y farmacias 24h. 🏥",
      zh: "<a href='veneza-carioca.html'>里约威尼斯</a>是一家超级浪漫而私密的精品酒店，位于伊岛一号。✨"
    }
  },
  {
    keywords: ["clima", "tempo", "chove", "melhor epoca", "quando ir", "verao", "inverno", "weather", "climate", "rain", "best time", "summer", "winter", "clima", "tiempo", "lluvia", "mejor epoca", "verano", "invierno", "meteo", "climat", "quand venir", "meilleure saison", "pluie"],
    reply: {
      pt: "A Gigóia é linda o ano todo! ☀️ No verão os dias são perfeitos para esportes aquáticos, e no inverno o clima ameno é ideal para a gastronomia. Confira em <a href='melhor-epoca.html'>Melhor Época para Visitar</a>.",
      fr: "La Gigóia est belle toute l'année ! ☀️ En été, les journées sont parfaites pour les sports nautiques, et en hiver le climat doux est idéal pour la gastronomie. Voyez <a href='melhor-epoca.html'>Meilleure période pour visiter</a>.",
      en: "Gigóia is beautiful all year round! ☀️ Summer is perfect for water sports, and winter has a mild climate ideal for gastronomy. Check <a href='melhor-epoca.html'>Best Time to Visit</a>.",
      es: "¡Gigóia es hermosa todo el año! ☀️ El verano es perfecto para deportes acuáticos, y el invierno es ideal para la gastronomía. Revisa <a href='melhor-epoca.html'>Mejor Época para Visitar</a>.",
      zh: "想要完全私密？我们有令人惊叹的Airbnb，如<a href='casa-venti.html'>文蒂之家</a>、<a href='casa-goia.html'>戈亚之家</a>或宏伟的<a href='casa-estatua.html'>雕像之家</a>。通过WhatsApp联系我们获取价格！"
    }
  },

  // ==========================================
  // 7. LOGÍSTICA, ACESSO E REGRAS DA ILHA
  // ==========================================
  {
    keywords: ["unimed", "posto de gasolina", "entrada", "onde pegar o barco", "acesso principal", "beco", "where to catch the boat", "gas station", "donde tomar el bote", "gasolinera", "entree principale", "ou prendre le bateau", "station service"],
    reply: {
      pt: "O acesso principal fica meio escondido! É uma ruela entre o Posto de Gasolina e o prédio espelhado da Unimed, na Av. Armando Lombardi. É ali que ficam os barcos! 📍",
      fr: "L'accès principal est un peu caché ! C'est une ruelle entre la station-service et l'immeuble miroir d'Unimed, sur l'Av. Armando Lombardi. C'est là que sont les bateaux ! 📍",
      en: "The main access is a bit hidden! It's a narrow street between the Gas Station and the mirrored Unimed building on Armando Lombardi Ave. That's where the boats are! 📍",
      es: "¡El acceso principal está un poco escondido! Es una calle estrecha entre la gasolinera y el edificio de Unimed en la Av. Armando Lombardi. ¡Allí están los botes! 📍",
      zh: "<a href='casanova.html'>卡萨诺瓦</a>是一个豪华的避难所，拥有独特的建筑设计、美食厨房和面向泻湖的专属氛围。✨"
    }
  },
  {
    keywords: ["como chegar", "onde fica", "localizacao", "endereco", "chegar", "como ir", "metro", "jardim oceanico", "how to get there", "location", "address", "subway", "como llegar", "donde esta", "ubicacion", "direccion", "metro", "comment venir", "comment y aller", "ou se trouve", "localisation", "adresse"],
    reply: {
      pt: "Chegar aqui é super fácil! 📍 A melhor opção é ir de Metrô (estação Jardim Oceânico - Saída Lagoa). Veja o passo a passo na nossa página <a href='como-chegar.html'>Como Chegar</a>.",
      fr: "Venir ici est très simple ! 📍 La meilleure option est le métro (station Jardim Oceânico - sortie Lagoa). Voyez le pas à pas sur notre page <a href='como-chegar.html'>Comment venir</a>.",
      en: "Getting here is super easy! 📍 The best option is the Subway (Jardim Oceânico station). See the step-by-step guide on our <a href='como-chegar.html'>How to Get Here</a> page.",
      es: "¡Llegar aquí es muy fácil! 📍 La mejor opción es el metro (estación Jardim Oceânico). Vea la guía paso a paso en nuestra página <a href='como-chegar.html'>Cómo Llegar</a>.",
      zh: "<a href='casa-estatua.html'>雕像之家</a>非常适合团体！有私人泳池，可舒适容纳最多16人。🏊‍♂️"
    }
  },
  {
    keywords: ["carro", "estacionamento", "estacionar", "vaga", "parar o carro", "dirigir", "uber", "car", "parking", "park", "drive", "coche", "estacionamiento", "estacionar", "conducir", "voiture", "se garer", "stationnement"],
    reply: {
      pt: "A ilha não tem carros! 🚫🚗 Se vier de carro, recomendamos os estacionamentos particulares na Av. Armando Lombardi, 370. Veja detalhes em <a href='como-chegar.html'>Como Chegar</a>.",
      fr: "Il n'y a pas de voitures sur l'île ! 🚫🚗 Si vous venez en voiture, nous recommandons les parkings privés Av. Armando Lombardi, 370. Détails sur <a href='como-chegar.html'>Comment venir</a>.",
      en: "The island has no cars! 🚫🚗 If you come by car, we recommend the private parking lots at 370 Armando Lombardi Ave. See details at <a href='como-chegar.html'>How to Get Here</a>.",
      es: "¡La isla no tiene coches! 🚫🚗 Si vienes en coche, te recomendamos los aparcamientos privados en la Av. Armando Lombardi, 370. Consulta los detalles en <a href='como-chegar.html'>Cómo Llegar</a>.",
      zh: "<a href='lux-48.html'>豪华48号</a>是一个超现代的概念工作室，设计大胆，非常适合情侣。🖤"
    }
  },
  {
    keywords: ["barco", "balsa", "travessia", "barquinho", "valor do barco", "preco do barco", "horario barco", "madrugada", "boat", "ferry", "crossing", "boat price", "boat schedule", "bote", "lancha", "cruce", "precio del bote", "horario del bote", "bateau", "traversee", "prix du bateau", "horaire bateau"],
    reply: {
      pt: "As chalanas funcionam 24h! 🚤 O valor varia entre R$ 2,00 e R$ 5,00. Você só precisa dizer o nome do restaurante para o barqueiro te deixar no deck certo.",
      fr: "Les chalanas fonctionnent 24h/24 ! 🚤 Le tarif varie entre R$ 2,00 et R$ 5,00. Il vous suffit de donner le nom du restaurant au batelier pour qu'il vous dépose au bon ponton.",
      en: "The chalanas (boats) run 24/7! 🚤 The price varies between R$ 2.00 and R$ 5.00. Just tell the boatman the restaurant's name to get dropped off at the right deck.",
      es: "¡Las chalanas (botes) funcionan las 24 horas! 🚤 El valor varía entre R$ 2,00 y R$ 5,00. Solo dile al barquero el nombre del restaurante para que te deje en el muelle correcto.",
      zh: "<a href='casa-goia.html'>戈亚之家</a>是一个壮观的复式公寓，适合想要像岛上居民一样生活几天的家庭。🏡"
    }
  },
  {
    keywords: ["pet", "cachorro", "gato", "animal", "pets", "pet friendly", "caozinho", "cachorrinho", "dog", "cat", "perro", "gato", "mascota", "animaux", "chien", "animal accepte"],
    reply: {
      pt: "Sim! Somos Pet Friendly 🐾. Casas de temporada como a <a href='casa-venti.html'>Casa Venti</a> aceitam pets e vários bares também. Confira dicas em <a href='boas-praticas.html'>Boas Práticas</a>.",
      fr: "Oui ! Nous sommes Pet Friendly 🐾. Des maisons de vacances comme la <a href='casa-venti.html'>Casa Venti</a> acceptent les animaux, et plusieurs bars aussi. Voyez les conseils sur <a href='boas-praticas.html'>Bonnes pratiques</a>.",
      en: "Yes! We are Pet Friendly 🐾. Houses like <a href='casa-venti.html'>Casa Venti</a> and many bars accept pets. Check out our tips in <a href='boas-praticas.html'>Good Practices</a>.",
      es: "¡Sí! Somos Pet Friendly 🐾. Casas como <a href='casa-venti.html'>Casa Venti</a> y varios bares aceptan mascotas. Consulta nuestros consejos en <a href='boas-praticas.html'>Buenas Prácticas</a>.",
      zh: "梦想场景！🎉 对于大型活动，我们有宏伟的<a href='solar-palmeiras.html'>里约棕榈庄园</a>，对于私密活动则有<a href='gaivota.html'>海鸥空间</a>。请向我们的团队申请报价！"
    }
  },
  {
    keywords: ["lixo", "barulho", "regras", "boas praticas", "som alto", "pode fazer som", "musica alta", "trash", "noise", "rules", "loud music", "basura", "ruido", "reglas", "musica alta", "dechets", "bruit", "regles", "musique forte"],
    reply: {
      pt: "Ajude-nos a preservar nosso paraíso! 🗑️🌿 É fundamental respeitar os moradores com relação ao barulho e nunca jogar lixo na lagoa. Veja a página <a href='boas-praticas.html'>Boas Práticas</a>.",
      fr: "Aidez-nous à préserver notre paradis ! 🗑️🌿 Il est essentiel de respecter les habitants en matière de bruit et de ne jamais jeter de déchets dans la lagune. Voyez la page <a href='boas-praticas.html'>Bonnes pratiques</a>.",
      en: "Help us preserve our paradise! 🗑️🌿 It is essential to respect residents regarding noise and never throw trash in the lagoon. See the <a href='boas-praticas.html'>Good Practices</a> page.",
      es: "¡Ayúdanos a preservar nuestro paraíso! 🗑️🌿 Es fundamental respetar a los residentes en cuanto al ruido y nunca arrojar basura a la laguna. Vea la página <a href='boas-praticas.html'>Buenas Prácticas</a>.",
      zh: "<a href='solar-palmeiras.html'>里约棕榈庄园</a>是一座美丽的殖民庄园！是里约在泻湖边举办户外婚礼最受欢迎的场所之一。🏛️"
    }
  },
  {
    keywords: ["ilha primeira", "ilha de sao jorge", "arquipelago", "outras ilhas", "other islands", "otras islas", "autres iles", "archipel"],
    reply: {
      pt: "A Gigóia é a maior, mas fazemos parte do complexo lagunar que inclui a charmosíssima Ilha Primeira (onde ficam o Salomé e o Veneza Carioca) e a Ilha de São Jorge! 🏝️",
      fr: "La Gigóia est la plus grande, mais nous faisons partie du complexe lagunaire qui comprend la très charmante Ilha Primeira (où se trouvent le Salomé et le Veneza Carioca) et l'Ilha de São Jorge ! 🏝️",
      en: "Gigóia is the largest, but we are part of a lagoon complex that includes the charming Ilha Primeira (home to Salomé and Veneza Carioca) and Ilha de São Jorge! 🏝️",
      es: "Gigóia es la más grande, pero somos parte del complejo lagunar que incluye la encantadora Ilha Primeira (donde están Salomé y Veneza Carioca) y la Ilha de São Jorge. 🏝️",
      zh: "<a href='gaivota.html'>海鸥空间</a>位于伊岛一号，提供超级优雅而私密的氛围，适合专属聚会。🥂"
    }
  },
  {
    keywords: ["infraestrutura", "comercio", "mercado", "padaria", "lojas", "supermercado", "market", "bakery", "stores", "mercado", "panaderia", "tiendas", "commerces", "supermarche", "boulangerie", "epicerie"],
    reply: {
      pt: "Nossa ilha hoje é autossuficiente! 🛒 Nas ruas de terra batida você encontra 2 mercadinhos, farmácias, lojas de material de construção, hortifrúti, pet shops e dezenas de comércios.",
      fr: "Notre île est aujourd'hui autosuffisante ! 🛒 Dans les ruelles en terre battue, vous trouverez 2 épiceries, des pharmacies, des magasins de bricolage, un primeur, des animaleries et des dizaines de commerces.",
      en: "Our island is self-sufficient today! 🛒 On the dirt streets you will find 2 markets, pharmacies, hardware stores, produce markets, pet shops, and dozens of businesses.",
      es: "¡Nuestra isla hoy es autosuficiente! 🛒 En las calles de tierra encontrarás 2 mercados, farmacias, ferreterías, fruterías, tiendas de mascotas y decenas de negocios.",
      zh: "我们的岛屿充满活力！总是有美食节、爵士音乐会和桑巴在举行。查看我们的<a href='agenda-cultural.html'>文化日程</a>了解一切！📅"
    }
  },

  // ==========================================
  // 8. PASSEIOS, ESPORTES E NATUREZA
  // ==========================================
  {
    keywords: ["caiaque", "stand up", "sup", "esportes", "remo", "kayak", "paddle", "sports", "deportes", "sports nautiques", "planche"],
    reply: {
      pt: "A lagoa é um paraíso para esportes aquáticos! 🚣‍♂️ O aluguel de Caiaque e Stand-Up Paddle (SUP) é muito comum por aqui para explorar os canais num ritmo bem tranquilo.",
      fr: "La lagune est un paradis pour les sports nautiques ! 🚣‍♂️ La location de kayak et de stand-up paddle (SUP) est très courante ici pour explorer les canaux à un rythme tout tranquille.",
      en: "The lagoon is a paradise for water sports! 🚣‍♂️ Renting Kayaks and Stand-Up Paddleboards (SUP) is very common to explore the canals at a slow pace.",
      es: "¡La laguna es un paraíso para los deportes acuáticos! 🚣‍♂️ El alquiler de Kayak y Stand-Up Paddle (SUP) es muy común aquí para explorar los canales a un ritmo tranquilo."
    }
  },
  {
    keywords: ["pantanal", "jacare", "capivara", "natureza", "passaros", "bicho", "fauna", "safari", "alligator", "capybara", "nature", "birds", "caiman", "capibara", "naturaleza", "pajaros", "oiseaux", "faune sauvage"],
    reply: {
      pt: "O passeio do <a href='pantanal-carioca.html'>Pantanal Carioca</a> é incrível para ver jacarés e capivaras soltas! 🐊 Custa em média R$ 50 por pessoa e o barco entra fundo nos manguezais.",
      fr: "L'excursion du <a href='pantanal-carioca.html'>Pantanal Carioca</a> est formidable pour voir caïmans et capybaras en liberté ! 🐊 Elle coûte en moyenne R$ 50 par personne et le bateau s'enfonce loin dans les mangroves.",
      en: "The <a href='pantanal-carioca.html'>Carioca Pantanal</a> tour is amazing to see wild alligators and capybaras! 🐊 It costs ~R$ 50 and goes deep into the mangroves.",
      es: "¡El tour del <a href='pantanal-carioca.html'>Pantanal Carioca</a> es increíble para ver caimanes y capibaras salvajes! 🐊 Cuesta ~R$ 50 y se adentra en los manglares."
    }
  },
  {
    keywords: ["tijucas", "ilhas tijucas", "mar", "mergulho", "tartaruga", "caribe carioca", "ilha das tijucas", "sea", "dive", "turtle", "tijucas islands", "mar", "buceo", "tortuga", "islas tijucas", "tortue", "plongee", "caraibes cariocas"],
    reply: {
      pt: "As <a href='ilhas-tijucas.html'>Ilhas Tijucas</a> são nossa joia escondida — o Caribe Carioca! 🤿 São 4h de passeio em mar aberto com água cristalina e tartarugas marinhas pra nadar do lado. Custa <strong>R$150 por pessoa</strong>, saem com bom tempo e as vagas esgotam rápido nos fins de semana. Quer garantir já? Me chama no WhatsApp!",
      fr: "Les <a href='ilhas-tijucas.html'>Ilhas Tijucas</a> sont notre joyau caché — les Caraïbes cariocas ! 🤿 4h d'excursion en pleine mer, eau cristalline et tortues marines pour nager à côté. <strong>R$150 par personne</strong>, départs par beau temps et les places partent vite le week-end. Vous voulez réserver ? Écrivez-moi sur WhatsApp !",
      en: "The <a href='ilhas-tijucas.html'>Tijucas Islands</a> are our hidden gem — the Carioca Caribbean! 🤿 4h in open sea with crystal clear water and sea turtles swimming right next to you. Costs <strong>R$150 per person</strong>, weather-dependent, and spots fill up fast on weekends. Want to secure yours? Hit me up on WhatsApp!",
      es: "¡Las <a href='ilhas-tijucas.html'>Islas Tijucas</a> son nuestra joya escondida — el Caribe Carioca! 🤿 Son 4h en mar abierto con agua cristalina y tortugas marinas nadando a tu lado. Cuesta <strong>R$150 por persona</strong>, depende del clima y los cupos se agotan rápido los fines de semana. ¿Quieres asegurar el tuyo? ¡Escríbeme por WhatsApp!"
    }
  },
  {
    keywords: ["reserva", "praia da reserva", "marapendi", "canal", "reserve beach", "playa de reserva", "plage de la reserve"],
    reply: {
      pt: "Temos um passeio maravilhoso de barco até a <a href='reserva.html'>Praia da Reserva</a>! 🏝️ São 2 horas de navegação relaxante pelos canais com parada para banho de mar.",
      fr: "Nous avons une magnifique excursion en bateau jusqu'à la <a href='reserva.html'>Praia da Reserva</a> ! 🏝️ 2 heures de navigation paisible dans les canaux, avec un arrêt baignade en mer.",
      en: "We have a wonderful boat tour to <a href='reserva.html'>Reserva Beach</a>! 🏝️ It's 2 hours of relaxing sailing through the canals with a sea bath stop.",
      es: "¡Tenemos un maravilloso paseo en bote hasta la <a href='reserva.html'>Playa de Reserva</a>! 🏝️ Son 2 horas de relajante navegación por los canales con parada para bañarse en el mar."
    }
  },
  {
    keywords: ["jet ski", "jetski", "jet-ski", "adrenalina", "pilotar", "moto aquatica", "adrenaline", "ride", "adrenalina", "conducir", "moto marine", "sensations fortes"],
    reply: {
      pt: "Jet ski na ilha? 🚀 10 min R$ 150 · 20 min R$ 250 · 30 min R$ 450 · 1 hora R$ 750 — valores por jet ski (até 2 pessoas). A partir de 30 minutos você administra o tempo como quiser, e quem contrata ainda ganha a área de lazer com piscina depois do passeio. Tudo na página de <a href='jet-ski.html'>Jet Ski</a>, ou me chame no WhatsApp para agendar!",
      fr: "Envie de jet-ski ? 🚀 10 min R$ 150 · 20 min R$ 250 · 30 min R$ 450 · 1 heure R$ 750 — tarif par jet-ski (jusqu'à 2 personnes). À partir de 30 minutes, vous gérez le temps comme vous voulez, et toute réservation donne accès à l'espace détente avec piscine après la sortie. Tout est sur notre page <a href='jet-ski.html'>Jet-ski</a>, ou écrivez-moi sur WhatsApp pour réserver !",
      en: "Jet ski on the island? 🚀 10 min R$ 150 · 20 min R$ 250 · 30 min R$ 450 · 1 hour R$ 750 — price per jet ski (up to 2 people). From 30 minutes on you manage the time as you like, and every booking also gets the leisure area with pool afterwards. It's all on our <a href='jet-ski.html'>Jet Ski</a> page, or message me on WhatsApp to book!",
      es: "¿Jet ski en la isla? 🚀 10 min R$ 150 · 20 min R$ 250 · 30 min R$ 450 · 1 hora R$ 750 — precio por jet ski (hasta 2 personas). A partir de 30 minutos administras el tiempo como quieras, y quien contrata gana además el área de ocio con piscina después del paseo. Todo en nuestra página de <a href='jet-ski.html'>Jet Ski</a>, ¡o escríbeme por WhatsApp para reservar!"
    },
    showWhatsapp: true
  },
  {
    keywords: ["pacote", "combo", "pacotes especiais", "romantico", "vip", "experiencia completa", "roteiro perfeito", "package", "special packages", "romantic", "complete experience", "paquete", "paquetes especiales", "romantico", "experiencia completa", "forfait", "forfaits speciaux", "experience complete", "romantique"],
    reply: {
      pt: "Quer facilidade? Temos a <a href='experiencia-completa.html'>Experiência Completa</a> e diversos <a href='pacotes-especiais.html'>Pacotes Especiais</a> 🥰. Clique no botão abaixo para orçarmos!",
      fr: "Vous voulez la simplicité ? Nous avons l'<a href='experiencia-completa.html'>Expérience complète</a> et plusieurs <a href='pacotes-especiais.html'>Forfaits spéciaux</a> 🥰. Cliquez sur le bouton ci-dessous pour un devis !",
      en: "Want convenience? We have the <a href='experiencia-completa.html'>Complete Experience</a> and several <a href='pacotes-especiais.html'>Special Packages</a> 🥰. Click the button below for a quote!",
      es: "¿Quieres comodidad? Tenemos la <a href='experiencia-completa.html'>Experiencia Completa</a> y varios <a href='pacotes-especiais.html'>Paquetes Especiales</a> 🥰. ¡Haz clic en el botón de abajo para pedir un presupuesto!"
    },
    showWhatsapp: true
  },

  // ==========================================
  // 9. RESTAURANTES ESPECÍFICOS E TIPOS DE COMIDA
  // ==========================================
  {
    keywords: ["frutos do mar", "peixe", "camarao", "moqueca", "lagosta", "ceviche", "seafood", "fish", "shrimp", "lobster", "mariscos", "pescado", "camaron", "langosta", "fruits de mer", "poisson", "crevette", "langouste"],
    reply: {
      pt: "Para frutos do mar, experimente a alta gastronomia do <a href='restaurante-ocya.html'>Ocyá</a> (Guia Michelin), o pioneiro <a href='restaurante-laguna.html'>Laguna</a>, ou a famosa moqueca do <a href='restaurante-cais-bar.html'>Cais Bar</a>!",
      fr: "Pour les fruits de mer, essayez la haute gastronomie de l'<a href='restaurante-ocya.html'>Ocyá</a> (Guide Michelin), le pionnier <a href='restaurante-laguna.html'>Laguna</a>, ou la fameuse moqueca du <a href='restaurante-cais-bar.html'>Cais Bar</a> !",
      en: "For seafood, try high gastronomy at <a href='restaurante-ocya.html'>Ocyá</a> (Michelin), the pioneer <a href='restaurante-laguna.html'>Laguna</a>, or the famous moqueca at <a href='restaurante-cais-bar.html'>Cais Bar</a>!",
      es: "Para mariscos, prueba la alta gastronomía de <a href='restaurante-ocya.html'>Ocyá</a> (Michelin), el pionero <a href='restaurante-laguna.html'>Laguna</a>, o la famosa moqueca de <a href='restaurante-cais-bar.html'>Cais Bar</a>."
    }
  },
  {
    keywords: ["ocya", "michelin", "geronimo", "sofisticado", "chique", "luxo", "alta gastronomia", "sophisticated", "chic", "luxury", "high gastronomy", "sofisticado", "lujo", "alta gastronomia", "haute gastronomie", "raffine"],
    reply: {
      pt: "O <a href='restaurante-ocya.html'>Ocyá</a> é reconhecido pelo Guia Michelin e comandado pelo chef Gerônimo Athiê. É pura alta gastronomia! 🐟",
      fr: "L'<a href='restaurante-ocya.html'>Ocyá</a> est reconnu par le Guide Michelin et dirigé par le chef Gerônimo Athiê. C'est de la haute gastronomie pure ! 🐟",
      en: "<a href='restaurante-ocya.html'>Ocyá</a> is recognized by the Michelin Guide and led by chef Gerônimo Athiê. It's pure high gastronomy! 🐟",
      es: "¡<a href='restaurante-ocya.html'>Ocyá</a> está reconocido por la Guía Michelin y liderado por el chef Gerônimo Athiê. ¡Es pura alta gastronomía! 🐟"
    }
  },
  {
    keywords: ["laguna", "pedra da gavea", "primeiro restaurante", "antigo", "tradicional", "oldest restaurant", "traditional", "restaurante mas antiguo", "tradicional", "plus ancien restaurant", "pionnier"],
    reply: {
      pt: "O <a href='restaurante-laguna.html'>Restaurante Laguna</a> é o pioneiro da ilha (desde 2002)! Rústico e sofisticado com vista linda para a Pedra da Gávea.",
      fr: "Le <a href='restaurante-laguna.html'>Restaurante Laguna</a> est le pionnier de l'île (depuis 2002) ! Rustique et raffiné, avec une vue superbe sur la Pedra da Gávea.",
      en: "The <a href='restaurante-laguna.html'>Laguna Restaurant</a> is the pioneer of the island (since 2002)! Rustic and sophisticated with a view of Pedra da Gávea.",
      es: "¡El <a href='restaurante-laguna.html'>Restaurante Laguna</a> es el pionero de la isla (desde 2002)! Rústico y sofisticado con vistas a la Pedra da Gávea."
    }
  },
  {
    keywords: ["deck", "guarda chuva", "guarda-chuva", "deck bar", "camarao no abacaxi", "umbrella", "shrimp in pineapple", "paraguas", "camaron en piña", "parasols", "crevette ananas"],
    reply: {
      pt: "O <a href='restaurante-deck-bar.html'>Deck Bar</a> é famoso pelos guarda-chuvas coloridos no teto e pelo incrível Camarão no Abacaxi! 🍍",
      fr: "Le <a href='restaurante-deck-bar.html'>Deck Bar</a> est célèbre pour ses parasols colorés au plafond et pour ses incroyables crevettes dans l'ananas ! 🍍",
      en: "The <a href='restaurante-deck-bar.html'>Deck Bar</a> is famous for its colorful umbrellas on the ceiling and the incredible Pineapple Shrimp! 🍍",
      es: "¡El <a href='restaurante-deck-bar.html'>Deck Bar</a> es famoso por sus coloridos paraguas en el techo y su increíble Camarón en Piña! 🍍"
    }
  },
  {
    keywords: ["cais bar", "cais", "melhor moqueca", "rodizio de petiscos", "best moqueca", "snack all you can eat", "mejor moqueca", "meilleure moqueca"],
    reply: {
      pt: "O <a href='restaurante-cais-bar.html'>Cais Bar</a> tem a moqueca mais tradicional da região! 🍲 E eles fazem muito sucesso com o rodízio de petiscos.",
      fr: "Le <a href='restaurante-cais-bar.html'>Cais Bar</a> sert la moqueca la plus traditionnelle du coin ! 🍲 Et leur rodízio de tapas a beaucoup de succès.",
      en: "The <a href='restaurante-cais-bar.html'>Cais Bar</a> has the most traditional moqueca in the region! 🍲 They are also highly successful with their all-you-can-eat snacks.",
      es: "¡El <a href='restaurante-cais-bar.html'>Cais Bar</a> tiene la moqueca más tradicional de la región! 🍲 Y tienen mucho éxito con su barra libre de bocadillos."
    }
  },
  {
    keywords: ["camarao da barra", "especializado em camarao", "shrimp specialized", "especializado en camaron", "specialiste crevette"],
    reply: {
      pt: "O <a href='restaurante-camarao.html'>Camarão da Barra</a> é super moderno e especializado em diferentes preparos contemporâneos de camarão. 🍤",
      fr: "Le <a href='restaurante-camarao.html'>Camarão da Barra</a> est très moderne et spécialisé dans différentes préparations contemporaines de la crevette. 🍤",
      en: "The <a href='restaurante-camarao.html'>Camarão da Barra</a> is super modern and specializes in various contemporary shrimp preparations. 🍤",
      es: "El <a href='restaurante-camarao.html'>Camarão da Barra</a> es súper moderno y se especializa en varias preparaciones contemporáneas de camarones. 🍤"
    }
  },
  {
    keywords: ["salome", "salomé", "salome al mare", "tabua de frutos do mar", "seafood platter", "tabla de mariscos", "plateau de fruits de mer"],
    reply: {
      pt: "O <a href='restaurante-salome.html'>Salomé al Mare</a> fica na Ilha Primeira e serve tábuas de mariscos gigantes perfeitas para dividir! 🐚",
      fr: "Le <a href='restaurante-salome.html'>Salomé al Mare</a> se trouve sur l'Ilha Primeira et sert de gigantesques plateaux de fruits de mer, parfaits à partager ! 🐚",
      en: "The <a href='restaurante-salome.html'>Salomé al Mare</a> is on Primeira Island and serves giant seafood platters perfect for sharing! 🐚",
      es: "¡El <a href='restaurante-salome.html'>Salomé al Mare</a> está en la Isla Primera y sirve tablas gigantes de mariscos perfectas para compartir! 🐚"
    }
  },
  {
    keywords: ["venne", "mediterranea", "mediterraneo", "elegante", "mediterranean", "elegant", "mediterraneo", "elegante", "mediterraneenne"],
    reply: {
      pt: "O <a href='restaurante-venne.html'>Venne Gastronomia</a> oferece culinária mediterrânea refinada. O ambiente é super elegante para ocasiões especiais. 🍷",
      fr: "Le <a href='restaurante-venne.html'>Venne Gastronomia</a> propose une cuisine méditerranéenne raffinée. Le cadre est très élégant, pour les grandes occasions. 🍷",
      en: "<a href='restaurante-venne.html'>Venne Gastronomia</a> offers refined Mediterranean cuisine. The environment is super elegant for special occasions. 🍷",
      es: "El <a href='restaurante-venne.html'>Venne Gastronomia</a> ofrece una refinada cocina mediterránea. El ambiente es súper elegante para ocasiones especiales. 🍷"
    }
  },
  {
    keywords: ["maracuja", "maracujá", "maracuja da ilha", "camarao empanado", "breaded shrimp", "camaron empanizado", "crevettes panees"],
    reply: {
      pt: "O <a href='restaurante-maracuja.html'>Maracujá da Ilha</a> (na Ilha Primeira) tem um dos melhores decks para ver o pôr do sol! 🌅",
      fr: "Le <a href='restaurante-maracuja.html'>Maracujá da Ilha</a> (sur l'Ilha Primeira) a l'un des meilleurs pontons pour voir le coucher de soleil ! 🌅",
      en: "The <a href='restaurante-maracuja.html'>Maracujá da Ilha</a> (on Primeira Island) has one of the best decks to watch the sunset! 🌅",
      es: "¡El <a href='restaurante-maracuja.html'>Maracujá da Ilha</a> (en la Isla Primera) tiene una de las mejores terrazas para ver el atardecer! 🌅"
    }
  },
  {
    keywords: ["burger", "hamburguer", "sanduiche", "lanche", "parada burger", "pizza", "pizzaria", "massa", "ilha gourmet", "pasta", "sandwich", "snack", "hamburguesa", "casse croute"],
    reply: {
      pt: "Bateu a fome de lanche? O <a href='parada-burger.html'>Parada Burger</a> tem hambúrgueres artesanais incríveis! Se preferir pizza e massas, vá direto para o <a href='ilha-gourmet.html'>Ilha Gourmet</a>. 🍔🍕",
      fr: "Une petite faim ? Le <a href='parada-burger.html'>Parada Burger</a> fait des burgers artisanaux incroyables ! Si vous préférez pizza et pâtes, allez directement à l'<a href='ilha-gourmet.html'>Ilha Gourmet</a>. 🍔🍕",
      en: "Craving a snack? <a href='parada-burger.html'>Parada Burger</a> has amazing craft burgers! If you prefer pizza, go to <a href='ilha-gourmet.html'>Ilha Gourmet</a>. 🍔🍕",
      es: "¿Hambre de bocadillos? ¡<a href='parada-burger.html'>Parada Burger</a> tiene hamburguesas increíbles! Si prefieres pizza, ve a <a href='ilha-gourmet.html'>Ilha Gourmet</a>. 🍔🍕"
    }
  },
  {
    keywords: ["carne", "frango", "boteco raiz", "elson", "barato", "simples", "comida di buteco", "joana", "pastel", "caldinho", "meat", "chicken", "cheap", "simple", "carne", "pollo", "poulet", "poulet roti", "pas cher", "viande"],
    reply: {
      pt: "Para um clima de vila e comida raiz, visite o <a href='bar-elson.html'>Bar do Elson</a> (melhor frango assado) ou o acolhedor <a href='bar-joana.html'>Bar da Joana</a> para pastéis caseiros! 🍗",
      fr: "Pour une ambiance de village et une cuisine authentique, allez au <a href='bar-elson.html'>Bar do Elson</a> (le meilleur poulet rôti) ou au chaleureux <a href='bar-joana.html'>Bar da Joana</a> pour des pastéis maison ! 🍗",
      en: "For a local vibe and watching football, visit <a href='bar-elson.html'>Bar do Elson</a> (best roast chicken) or the cozy <a href='bar-joana.html'>Bar da Joana</a> for homemade snacks! 🍗",
      es: "Para un ambiente local y ver el fútbol, visita <a href='bar-elson.html'>Bar do Elson</a> (mejor pollo asado) o el acogedor <a href='bar-joana.html'>Bar da Joana</a> para bocadillos caseros. 🍗"
    }
  },
  {
    keywords: ["futebol", "jogo", "mengao", "assistir", "telao", "football", "match", "futbol", "partido", "regarder le match", "football francais"],
    reply: {
      pt: "Quer assistir a um bom jogo de futebol (especialmente do Mengão)? A dica é colar no <a href='bar-elson.html'>Bar do Elson</a>. Cerveja no precinho e clima de arquibancada! ⚽",
      fr: "Vous voulez regarder un bon match de football (surtout de Flamengo) ? Le bon plan, c'est le <a href='bar-elson.html'>Bar do Elson</a>. Bière pas chère et ambiance de tribune ! ⚽",
      en: "Want to watch a good football match? The tip is to go to <a href='bar-elson.html'>Bar do Elson</a>. Cold beer and a stadium vibe! ⚽",
      es: "¿Quieres ver un buen partido de fútbol? El consejo es ir al <a href='bar-elson.html'>Bar do Elson</a>. ¡Cerveza helada y ambiente de estadio! ⚽"
    }
  },
  {
    keywords: ["cafe", "cafeteria", "cafe da manha", "bolo", "tapioca", "cantinho do cafe", "poesia", "coffee", "breakfast", "cake", "desayuno", "pastel", "petit dejeuner", "gateau"],
    reply: {
      pt: "Comece o dia no <a href='cafe-poesia.html'>Café da Poesia</a> (com pegada artística) ou no <a href='cantinho-cafe.html'>Cantinho do Café</a> (tapiocas e bolos maravilhosos). ☕",
      fr: "Commencez la journée au <a href='cafe-poesia.html'>Café da Poesia</a> (à l'esprit artistique) ou au <a href='cantinho-cafe.html'>Cantinho do Café</a> (tapiocas et gâteaux délicieux). ☕",
      en: "Start your day at <a href='cafe-poesia.html'>Café da Poesia</a> (artistic vibe) or <a href='cantinho-cafe.html'>Cantinho do Café</a> (great tapiocas and cakes). ☕",
      es: "Comienza tu día en <a href='cafe-poesia.html'>Café da Poesia</a> (estilo artístico) o <a href='cantinho-cafe.html'>Cantinho do Café</a> (tapiocas y pasteles geniales). ☕"
    }
  },
  {
    keywords: ["crianca", "kids", "filhos", "familia", "kauai", "ilha do ipe", "children", "family", "niños", "hijos", "familia", "enfants", "famille", "coin enfants"],
    reply: {
      pt: "Se vier com a família, o <a href='bar-kauai.html'>Kauai Gastrolounge</a> (na Ilha do Ipê) é imbatível! 🌴 Espaço gigante, estilo tropical e uma Área Kids maravilhosa para as crianças.",
      fr: "Si vous venez en famille, le <a href='bar-kauai.html'>Kauai Gastrolounge</a> (sur l'Ilha do Ipê) est imbattable ! 🌴 Espace immense, style tropical et un superbe coin enfants.",
      en: "If coming with family, <a href='bar-kauai.html'>Kauai Gastrolounge</a> is unbeatable! 🌴 Giant space, tropical style, and an amazing Kids Area.",
      es: "Si vienes con familia, ¡el <a href='bar-kauai.html'>Kauai Gastrolounge</a> es imbatible! 🌴 Espacio gigante, estilo tropical y una Área Kids increíble."
    }
  },
  {
    keywords: ["oasis", "lounge", "descontraido", "vibrante", "relaxed", "vibrant", "relajado", "decontracte"],
    reply: {
      pt: "O <a href='oasis.html'>Oásis Gastrolounge</a> é restaurante de dia e vira um lounge vibrante com música e drinks elaborados à noite. 🍸",
      fr: "L'<a href='oasis.html'>Oásis Gastrolounge</a> est restaurant le jour et devient un lounge vibrant avec musique et cocktails travaillés le soir. 🍸",
      en: "The <a href='oasis.html'>Oásis Gastrolounge</a> is a daytime restaurant and turns into a vibrant lounge with music and crafted drinks at night. 🍸",
      es: "El <a href='oasis.html'>Oásis Gastrolounge</a> es restaurante de día y se convierte en un lounge vibrante con música y tragos elaborados por la noche. 🍸"
    }
  },
  {
    keywords: ["kai", "bar kai", "modernidade", "jovem", "modernity", "young", "modernidad", "joven", "ambiance jeune"],
    reply: {
      pt: "O <a href='bar-kai.html'>Bar Kai</a> é ponto de encontro jovem com drinks coloridos à beira d'água. 🍹",
      fr: "Le <a href='bar-kai.html'>Bar Kai</a> est un point de rendez-vous jeune, avec des cocktails colorés au bord de l'eau. 🍹",
      en: "The <a href='bar-kai.html'>Bar Kai</a> is a young meeting point with colorful drinks by the water. 🍹",
      es: "El <a href='bar-kai.html'>Bar Kai</a> es un punto de encuentro para jóvenes con coloridas bebidas junto al agua. 🍹"
    }
  },

  // ==========================================
  // 10. BARES E VIDA NOTURNA
  // ==========================================
  {
    keywords: ["bar", "bares", "beber", "cerveja", "chopp", "caipirinha", "drinks", "bebida", "beer", "drink", "cerveza", "bebidas", "boire", "biere", "cocktail", "ou boire"],
    reply: {
      pt: "A Gigóia é boêmia! 🍻 Conheça a aba <a href='bares-drinks.html'>Bares & Drinks</a> para escolher entre o <a href='bar-capivara.html'>Boteco da Capivara</a> ou o <a href='bar-briza.html'>Briza</a>.",
      fr: "La Gigóia est bohème ! 🍻 Découvrez l'onglet <a href='bares-drinks.html'>Bars & Cocktails</a> pour choisir entre le <a href='bar-capivara.html'>Boteco da Capivara</a> et le <a href='bar-briza.html'>Briza</a>.",
      en: "Gigóia is bohemian! 🍻 Visit <a href='bares-drinks.html'>Bars & Drinks</a> to choose between <a href='bar-capivara.html'>Boteco da Capivara</a> or <a href='bar-briza.html'>Briza</a>.",
      es: "¡Gigóia es bohemia! 🍻 Visita <a href='bares-drinks.html'>Bares y Bebidas</a> para elegir entre <a href='bar-capivara.html'>Boteco da Capivara</a> o <a href='bar-briza.html'>Briza</a>."
    }
  },
  {
    keywords: ["por do sol", "fim de tarde", "visual", "ak bar", "caicara", "capivara", "pordosol", "sunset", "late afternoon", "atardecer", "puesta de sol", "coucher de soleil", "fin apres midi"],
    reply: {
      pt: "Pôr do sol inesquecível? 🌅 Recomendo a vista do <a href='bar-capivara.html'>Boteco da Capivara</a>, do <a href='bar-caicaras.html'>Bar Caiçaras</a> ou do clássico AK Bar.",
      fr: "Un coucher de soleil inoubliable ? 🌅 Je recommande la vue du <a href='bar-capivara.html'>Boteco da Capivara</a>, du <a href='bar-caicaras.html'>Bar Caiçaras</a> ou du classique AK Bar.",
      en: "Unforgettable sunset? 🌅 I recommend the view from <a href='bar-capivara.html'>Boteco da Capivara</a>, <a href='bar-caicaras.html'>Bar Caiçaras</a>, or the classic AK Bar.",
      es: "¿Un atardecer inolvidable? 🌅 Te recomiendo la vista del <a href='bar-capivara.html'>Boteco da Capivara</a>, <a href='bar-caicaras.html'>Bar Caiçaras</a>, o el clásico AK Bar."
    }
  },
  {
    keywords: ["samba", "pagode", "musica ao vivo", "tocar", "briza", "jazz", "banda", "live music", "band", "musica en vivo", "musique live", "concert", "groupe"],
    reply: {
      pt: "Música ao vivo e Samba? 🎵 O <a href='bar-briza.html'>Briza da Gigóia</a> e o Caiçaras sempre têm bandas no final de semana. Confira a <a href='agenda-cultural.html'>Agenda Cultural</a>!",
      fr: "Musique live et samba ? 🎵 Le <a href='bar-briza.html'>Briza da Gigóia</a> et le Caiçaras ont toujours des groupes le week-end. Consultez l'<a href='agenda-cultural.html'>Agenda culturel</a> !",
      en: "Live music and Samba? 🎵 <a href='bar-briza.html'>Briza da Gigóia</a> and Caiçaras always have bands on weekends. Check the <a href='agenda-cultural.html'>Cultural Agenda</a>!",
      es: "¿Música en vivo y Samba? 🎵 <a href='bar-briza.html'>Briza da Gigóia</a> y Caiçaras siempre tienen bandas los fines de semana. ¡Revisa la <a href='agenda-cultural.html'>Agenda Cultural</a>!"
    }
  },
  {
    keywords: ["saideira", "tarde da noite", "madrugada", "aberto ate tarde", "bar do kai", "late night", "open late", "madrugada", "abierto hasta tarde", "dernier verre", "ouvert tard", "tard le soir"],
    reply: {
      pt: "A saideira oficial da ilha é no <a href='bar-kai.html'>Bar do Kai</a>! 🌙 Aberto até de madrugada com cerveja trincando.",
      fr: "Le dernier verre officiel de l'île, c'est au <a href='bar-kai.html'>Bar do Kai</a> ! 🌙 Ouvert jusque tard dans la nuit, avec la bière bien fraîche.",
      en: "The official island nightcap is at <a href='bar-kai.html'>Bar do Kai</a>! 🌙 Open until late with ice-cold beer.",
      es: "¡La copa de despedida oficial de la isla es en <a href='bar-kai.html'>Bar do Kai</a>! 🌙 Abierto hasta tarde con cerveza helada."
    }
  },

  // ==========================================
  // 11. HOSPEDAGEM E AIRBNBS
  // ==========================================
  {
    keywords: ["pousada barra da tijuca", "mais perto do metro", "melhor localizacao", "closest to subway", "best location", "cerca del metro", "mejor ubicacion", "plus proche du metro", "meilleur emplacement"],
    reply: {
      pt: "A <a href='pousada-barra.html'>Pousada Barra da Tijuca</a> é super tradicional e estratégica: a mais próxima do ponto de travessia para o metrô. A partir de R$300/diária o casal. 🌴",
      fr: "La <a href='pousada-barra.html'>Pousada Barra da Tijuca</a> est très traditionnelle et bien placée : la plus proche du point de traversée vers le métro. À partir de R$300/nuit pour deux. 🌴",
      en: "The <a href='pousada-barra.html'>Pousada Barra da Tijuca</a> is very traditional and strategically located: the closest to the subway crossing point. From R$300/night per couple. 🌴",
      es: "La <a href='pousada-barra.html'>Pousada Barra da Tijuca</a> es muy tradicional y estratégica: la más cercana al punto de cruce del metro. Desde R$300/noche por pareja. 🌴"
    }
  },
  {
    keywords: ["marisis", "limpeza", "silencio", "tranquila", "cleanliness", "silence", "quiet", "limpieza", "silencio", "tranquilo", "proprete", "calme", "silencieux"],
    reply: {
      pt: "A <a href='pousada-marisis.html'>Pousada Marísis</a> é o refúgio perfeito para quem busca silêncio absoluto e uma limpeza impecável. A partir de R$300/diária o casal. 🌺",
      fr: "La <a href='pousada-marisis.html'>Pousada Marísis</a> est le refuge parfait pour qui cherche le silence absolu et une propreté impeccable. À partir de R$300/nuit pour deux. 🌺",
      en: "The <a href='pousada-marisis.html'>Pousada Marísis</a> is the perfect refuge for those seeking absolute silence and impeccable cleanliness. From R$300/night per couple. 🌺",
      es: "La <a href='pousada-marisis.html'>Pousada Marísis</a> es el refugio perfecto para quienes buscan silencio absoluto y limpieza impecable. Desde R$300/noche por pareja. 🌺"
    }
  },
  {
    keywords: ["veneza carioca", "boutique", "intimista", "intimate", "intimista", "intimiste"],
    reply: {
      pt: "O <a href='veneza-carioca.html'>Veneza Carioca</a> é um Hotel Boutique super romântico e intimista, localizado na Ilha Primeira. A partir de R$650/diária o casal. ✨",
      fr: "Le <a href='veneza-carioca.html'>Veneza Carioca</a> est un hôtel boutique très romantique et intimiste, situé sur l'Ilha Primeira. À partir de R$650/nuit pour deux. ✨",
      en: "The <a href='veneza-carioca.html'>Veneza Carioca</a> is a super romantic and intimate Boutique Hotel, located on Primeira Island. From R$650/night per couple. ✨",
      es: "El <a href='veneza-carioca.html'>Veneza Carioca</a> es un Hotel Boutique súper romántico e íntimo, ubicado en la Isla Primera. Desde R$650/noche por pareja. ✨"
    }
  },
  {
    keywords: ["airbnb", "casa inteira", "temporada", "alugar casa", "whole house", "rent house", "casa entera", "alquilar casa", "maison entiere", "louer une maison", "location saisonniere"],
    reply: {
      pt: "Privacidade total? Temos Airbnbs deslumbrantes como a <a href='casa-venti.html'>Casa Venti</a>, <a href='casa-goia.html'>Casa Goiá</a> ou a grandiosa <a href='casa-estatua.html'>Casa da Estátua</a>. Chame no WhatsApp para valores!",
      fr: "Une intimité totale ? Nous avons de superbes Airbnb comme la <a href='casa-venti.html'>Casa Venti</a>, la <a href='casa-goia.html'>Casa Goiá</a> ou la vaste <a href='casa-estatua.html'>Casa da Estátua</a>. Écrivez-nous sur WhatsApp pour les tarifs !",
      en: "Total privacy? We have stunning Airbnbs like <a href='casa-venti.html'>Casa Venti</a>, <a href='casa-goia.html'>Casa Goiá</a>, or <a href='casa-estatua.html'>Casa da Estátua</a>. Contact us on WhatsApp for prices!",
      es: "¿Privacidad total? Tenemos Airbnbs impresionantes como <a href='casa-venti.html'>Casa Venti</a>, <a href='casa-goia.html'>Casa Goiá</a>, o <a href='casa-estatua.html'>Casa da Estátua</a>. ¡Contáctanos por WhatsApp!"
    },
    showWhatsapp: true
  },
  {
    keywords: ["casanova", "luxuoso", "arquitetura", "retiro", "luxurious", "architecture", "retreat", "lujoso", "arquitectura", "retiro", "luxueux", "retraite"],
    reply: {
      pt: "A <a href='casanova.html'>Casanova</a> é um retiro luxuoso com projeto arquitetônico único, cozinha gourmet e clima exclusivo de frente para a lagoa. A partir de R$650/diária o casal. ✨",
      fr: "La <a href='casanova.html'>Casanova</a> est une retraite luxueuse au projet architectural unique, avec cuisine gourmet et cadre exclusif face à la lagune. À partir de R$650/nuit pour deux. ✨",
      en: "The <a href='casanova.html'>Casanova</a> is a luxurious retreat with unique architectural design, gourmet kitchen, and exclusive vibe facing the lagoon. From R$650/night per couple. ✨",
      es: "La <a href='casanova.html'>Casanova</a> es un refugio lujoso con diseño arquitectónico único, cocina gourmet y ambiente exclusivo frente a la laguna. Desde R$650/noche por pareja. ✨"
    }
  },
  {
    keywords: ["casa da estatua", "estatua", "piscina", "grupo grande", "16 pessoas", "pool", "large group", "16 people", "piscina", "grupo grande", "16 personas", "grand groupe", "16 personnes", "piscine privative"],
    reply: {
      pt: "A <a href='casa-estatua.html'>Casa da Estátua</a> é maravilhosa para grupos! Tem piscina privativa e acomoda até 16 pessoas confortavelmente. 🏊‍♂️",
      fr: "La <a href='casa-estatua.html'>Casa da Estátua</a> est idéale pour les groupes ! Elle a une piscine privative et accueille confortablement jusqu'à 16 personnes. 🏊‍♂️",
      en: "The <a href='casa-estatua.html'>Casa da Estátua</a> is wonderful for groups! It has a private pool and sleeps up to 16 people comfortably. 🏊‍♂️",
      es: "¡La <a href='casa-estatua.html'>Casa da Estátua</a> es maravillosa para grupos! Tiene piscina privada y aloja hasta 16 personas cómodamente. 🏊‍♂️"
    }
  },
  {
    keywords: ["lux 48", "lux", "casal moderno", "estudio", "modern couple", "studio", "pareja moderna", "couple moderne"],
    reply: {
      pt: "O <a href='lux-48.html'>Lux 48</a> é um estúdio conceito super moderno, de design arrojado, ideal para casais. 🖤",
      fr: "Le <a href='lux-48.html'>Lux 48</a> est un studio très moderne, au design audacieux, idéal pour les couples. 🖤",
      en: "<a href='lux-48.html'>Lux 48</a> is a super modern concept studio, with bold design, ideal for couples. 🖤",
      es: "El <a href='lux-48.html'>Lux 48</a> es un estudio de concepto súper moderno, con diseño audaz, ideal para parejas. 🖤"
    }
  },
  {
    keywords: ["casa goia", "goia", "duplex", "duplex familial"],
    reply: {
      pt: "A <a href='casa-goia.html'>Casa Goiá</a> é um duplex espetacular para famílias que querem se sentir moradores da ilha por alguns dias. 🏡",
      fr: "La <a href='casa-goia.html'>Casa Goiá</a> est un duplex spectaculaire pour les familles qui veulent se sentir habitants de l'île pendant quelques jours. 🏡",
      en: "<a href='casa-goia.html'>Casa Goiá</a> is a spectacular duplex for families who want to feel like island locals for a few days. 🏡",
      es: "La <a href='casa-goia.html'>Casa Goiá</a> es un espectacular dúplex para familias que quieren sentirse como locales de la isla por unos días. 🏡"
    }
  },

  // ==========================================
  // 12. EVENTOS, CASAMENTOS E AGENDA CULTURAL
  // ==========================================
  {
    keywords: ["casamento", "festa", "evento", "confraternizacao", "15 anos", "alugar espaco", "eventos", "wedding", "party", "event", "rent space", "boda", "fiesta", "alquilar espacio", "mariage", "fete", "evenement", "louer un espace"],
    reply: {
      pt: "Cenário dos sonhos! 🎉 Para eventos maiores temos o casarão <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a>, e para algo intimista o <a href='gaivota.html'>Espaço Gaivota</a>. Peça seu orçamento com nossa equipe abaixo!",
      fr: "Un cadre de rêve ! 🎉 Pour les grands événements nous avons la demeure <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a>, et pour quelque chose de plus intimiste l'<a href='gaivota.html'>Espace Gaivota</a>. Demandez votre devis à notre équipe ci-dessous !",
      en: "Dream setting! 🎉 For larger events we have <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a>, and for intimate ones <a href='gaivota.html'>Espaço Gaivota</a>. Request a quote below!",
      es: "¡Escenario de ensueño! 🎉 Para grandes eventos tenemos <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a>, y para algo íntimo el <a href='gaivota.html'>Espacio Gaivota</a>. ¡Pide tu presupuesto abajo!"
    },
    showWhatsapp: true
  },
  {
    keywords: ["solar das palmeiras", "casarao", "colonial", "casar na ilha", "mansion", "marry on the island", "casona", "casarse en la isla", "demeure", "se marier"],
    reply: {
      pt: "O <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a> é um casarão colonial belíssimo! Um dos locais mais disputados do Rio para casamentos ao ar livre com gramado à beira da lagoa. 🏛️",
      fr: "Le <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a> est une magnifique demeure coloniale ! L'un des lieux les plus courus de Rio pour les mariages en plein air, avec sa pelouse au bord de la lagune. 🏛️",
      en: "The <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a> is a beautiful colonial mansion! A highly sought-after location in Rio for outdoor weddings by the lagoon. 🏛️",
      es: "¡El <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a> es una hermosa casona colonial! Un lugar muy solicitado en Río para bodas al aire libre junto a la laguna. 🏛️"
    }
  },
  {
    keywords: ["gaivota", "espaco gaivota", "ilha primeira", "espace gaivota"],
    reply: {
      pt: "O <a href='gaivota.html'>Espaço Gaivota</a> fica na Ilha Primeira e oferece um clima super elegante e intimista para confraternizações exclusivas. 🥂",
      fr: "L'<a href='gaivota.html'>Espace Gaivota</a> se trouve sur l'Ilha Primeira et offre un cadre très élégant et intimiste pour des réceptions exclusives. 🥂",
      en: "The <a href='gaivota.html'>Espaço Gaivota</a> is on Primeira Island and offers a super elegant and intimate atmosphere for exclusive gatherings. 🥂",
      es: "El <a href='gaivota.html'>Espacio Gaivota</a> está en la Isla Primera y ofrece un ambiente súper elegante e íntimo para reuniones exclusivas. 🥂"
    }
  },
  {
    keywords: ["agenda", "programacao", "hoje", "fim de semana", "o que ta rolando", "festival", "show", "ingresso", "schedule", "today", "weekend", "whats happening", "ticket", "hoy", "fin de semana", "que esta pasando", "entrada", "programmation", "ce week end", "concerts", "programme"],
    reply: {
      pt: "Nossa ilha é viva! Tem sempre festival gastronômico, shows de jazz e rodas de samba acontecendo. Confira tudo na nossa <a href='agenda-cultural.html'>Agenda Cultural</a>! 📅",
      fr: "Notre île est bien vivante ! Il y a toujours un festival gastronomique, des concerts de jazz ou des rodas de samba. Retrouvez tout dans notre <a href='agenda-cultural.html'>Agenda culturel</a> ! 📅",
      en: "Our island is alive! There's always a food festival, jazz shows, and samba happening. Check everything out on our <a href='agenda-cultural.html'>Cultural Agenda</a>! 📅",
      es: "¡Nuestra isla está viva! Siempre hay festivales gastronómicos, espectáculos de jazz y samba. ¡Revisa todo en nuestra <a href='agenda-cultural.html'>Agenda Cultural</a>! 📅"
    }
  }

];
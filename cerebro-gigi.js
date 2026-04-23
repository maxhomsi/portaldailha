/* =========================================================
   CÉREBRO DA GIGI - BASE DE CONHECIMENTO (ILHA DA GIGÓIA)
   Versão: Multilíngue (PT, EN, ES) + Gatilhos + Correção de Falsos Positivos
   ========================================================= */

const GIGI_BRAIN = [

  // ==========================================
  // 1. GATILHOS DIRETOS PARA O WHATSAPP (RESERVAS E HUMANO)
  // ==========================================
  {
    keywords: ["falar com atendente", "humano", "pessoa", "telefone", "contato", "falar com alguem", "equipe", "atendimento", "atendente", "human", "person", "contact", "speak to someone", "team", "hablar con alguien", "equipo", "contacto"],
    reply: {
      pt: "Com certeza! Vou te passar direto para a nossa equipe humana. É só clicar no botão do WhatsApp logo abaixo e mandar sua mensagem!",
      en: "Sure! I'll connect you directly to our human team. Just click the WhatsApp button below and send your message!",
      es: "¡Claro! Te conectaré directamente con nuestro equipo humano. ¡Solo haz clic en el botón de WhatsApp abajo y envía tu mensaje!"
    },
    showWhatsapp: true
  },
  {
    keywords: ["reservar", "reserva", "agendar", "agendamento", "marcar", "orcamento", "orçamento", "preco", "preço", "valor", "comprar", "book", "reservation", "schedule", "price", "cost", "buy", "reservación", "programar", "precio", "costo", "comprar"],
    reply: {
      pt: "Excelente! Para consultar valores exatos, disponibilidade e fazer a sua reserva, o ideal é falar direto com a nossa equipe no WhatsApp. É só clicar no botão aqui embaixo!",
      en: "Excellent! To check exact prices, availability, and make your reservation, it's best to speak directly with our team on WhatsApp. Just click the button below!",
      es: "¡Excelente! Para consultar precios exactos, disponibilidad y hacer tu reserva, lo ideal es hablar directamente con nuestro equipo en WhatsApp. ¡Solo haz clic en el botón de abajo!"
    },
    showWhatsapp: true
  },

  // ==========================================
  // 2. PERGUNTAS SOBRE SUSHI E ANIMAIS IRREAIs (CORREÇÕES DE CONTEXTO)
  // ==========================================
  {
    keywords: ["sushi", "japones", "japa", "sashimi", "temaki", "yakisoba", "rodizio de sushi", "japanese"],
    reply: {
      pt: "Atualmente não temos restaurantes especializados em culinária japonesa/sushi na Ilha da Gigóia. 🍣 Mas se você gosta de peixe fresco, vai amar a alta gastronomia de frutos do mar do <a href='restaurante-ocya.html'>Ocyá</a> ou do <a href='restaurante-laguna.html'>Laguna</a>!",
      en: "Currently, we don't have restaurants specializing in Japanese cuisine/sushi on Gigóia Island. 🍣 But if you like fresh fish, you'll love the high-end seafood gastronomy at <a href='restaurante-ocya.html'>Ocyá</a> or <a href='restaurante-laguna.html'>Laguna</a>!",
      es: "Actualmente no tenemos restaurantes especializados en cocina japonesa/sushi en la Isla de Gigóia. 🍣 Pero si te gusta el pescado fresco, ¡te encantará la alta gastronomía de mariscos en <a href='restaurante-ocya.html'>Ocyá</a> o <a href='restaurante-laguna.html'>Laguna</a>!"
    }
  },
  {
    keywords: ["baleia", "tubarao", "golfinho", "pinguim", "leao marinho", "whale", "shark", "dolphin", "penguin", "sea lion", "ballena", "tiburón", "tiburon", "delfín", "delfin", "pingüino", "pinguino", "lobo marino"],
    reply: {
      pt: "Hahaha! Na nossa lagoa não tem baleia nem tubarão! 🐋 Aqui a água é abrigada. As grandes estrelas da nossa fauna são os jacarés-de-papo-amarelo, as capivaras e as garças.",
      en: "Hahaha! There are no whales or sharks in our lagoon! 🐋 The water here is sheltered. The big stars of our fauna are the broad-snouted caimans, capybaras, and herons.",
      es: "¡Jajaja! ¡En nuestra laguna no hay ballenas ni tiburones! 🐋 Aquí el agua está resguardada. Las grandes estrellas de nuestra fauna son los caimanes de hocico ancho, las capibaras y las garzas."
    }
  },
  {
    keywords: ["nadar na lagoa", "banho na lagoa", "mergulhar na lagoa", "tomar banho", "agua limpa", "swim", "bathe", "dive", "clean water", "nadar", "bañarse", "bucear", "agua limpia"],
    reply: {
      pt: "Não recomendamos o banho/mergulho nas águas da lagoa ao redor da ilha. 🚫 Se quiser dar um mergulho em águas cristalinas, a dica perfeita é agendar o nosso passeio para as <a href='ilhas-tijucas.html'>Ilhas Tijucas</a>!",
      en: "We do not recommend swimming/diving in the lagoon waters around the island. 🚫 If you want to take a dip in crystal-clear waters, the perfect tip is to book our tour to the <a href='ilhas-tijucas.html'>Tijucas Islands</a>!",
      es: "No recomendamos nadar/bucear en las aguas de la laguna alrededor de la isla. 🚫 Si quieres darte un chapuzón en aguas cristalinas, ¡el consejo perfecto es reservar nuestro tour a las <a href='ilhas-tijucas.html'>Islas Tijucas</a>!"
    }
  },
  {
    keywords: ["praia de areia", "praia na ilha", "tem praia", "beach", "sandy beach", "playa", "playa de arena"],
    reply: {
      pt: "A Ilha da Gigóia não tem praia de mar com ondas, nós somos cercados pela Lagoa da Tijuca! 🌴 Mas o barquinho pode te deixar em um deck que fica a apenas 5 minutinhos de caminhada da Praia da Barra.",
      en: "Gigóia Island doesn't have an ocean beach with waves, we are surrounded by the Tijuca Lagoon! 🌴 But the little boat can drop you off at a deck that's just a 5-minute walk from Barra Beach.",
      es: "¡La Isla de Gigóia no tiene playa de mar con olas, estamos rodeados por la Laguna de Tijuca! 🌴 Pero el barquito te puede dejar en un muelle que está a solo 5 minutos a pie de la Playa de Barra."
    }
  },

  // ==========================================
  // 3. SAUDAÇÕES E INTERAÇÕES BÁSICAS
  // ==========================================
  {
    keywords: ["oi", "ola", "bom dia", "boa tarde", "boa noite", "tudo bem", "hey", "eae", "opa", "alo", "salve", "hello", "hi", "good morning", "good afternoon", "good evening", "how are you", "hola", "buenos dias", "buenas tardes", "buenas noches", "que tal"],
    reply: {
      pt: "Olá! Tudo ótimo por aqui! 😊 Sou a Gigi, a assistente virtual oficial do Portal. Como posso te ajudar a planejar seu dia perfeito na Ilha da Gigóia hoje?",
      en: "Hello! Everything is great here! 😊 I'm Gigi, the official virtual assistant of the Portal. How can I help you plan your perfect day on Gigóia Island today?",
      es: "¡Hola! ¡Todo genial por aquí! 😊 Soy Gigi, la asistente virtual oficial del Portal. ¿Cómo puedo ayudarte a planificar tu día perfecto en la Isla de Gigóia hoy?"
    }
  },
  {
    keywords: ["obrigado", "obrigada", "valeu", "show", "perfeito", "otimo", "top", "legal", "agradecido", "incrivel", "maravilha", "thanks", "thank you", "great", "perfect", "awesome", "gracias", "genial", "perfecto", "increíble", "increible"],
    reply: {
      pt: "Por nada! Fico muito feliz em ajudar. Se precisar de mais alguma dica, quiser saber de algum restaurante ou agendar um passeio, é só me chamar. Boa diversão na Ilha! 🌴",
      en: "You're welcome! I'm very happy to help. If you need any more tips, want to know about a restaurant, or book a tour, just let me know. Have fun on the Island! 🌴",
      es: "¡De nada! Me alegra mucho ayudar. Si necesitas algún consejo más, quieres saber sobre algún restaurante o reservar un tour, solo dímelo. ¡Diviértete en la Isla! 🌴"
    }
  },
  {
    keywords: ["quem e voce", "robo", "inteligencia artificial", "humano", "inteligencia", "bot", "assistente", "vc e real", "who are you", "robot", "artificial intelligence", "human", "assistant", "are you real", "quien eres", "inteligencia artificial", "humano", "asistente", "eres real"],
    reply: {
      pt: "Eu sou a Gigi, a mascote e assistente virtual do Portal Ilha da Gigóia! 🕊️ Fui programada para conhecer cada cantinho daqui. Se eu não souber responder algo, te passo para a nossa equipe humana no WhatsApp, combinado?",
      en: "I am Gigi, the mascot and virtual assistant of the Gigóia Island Portal! 🕊️ I was programmed to know every corner of this place. If I don't know how to answer something, I'll pass you on to our human team on WhatsApp, deal?",
      es: "¡Soy Gigi, la mascota y asistente virtual del Portal Isla de Gigóia! 🕊️ Fui programada para conocer cada rincón de aquí. Si no sé cómo responder a algo, te pasaré a nuestro equipo humano en WhatsApp, ¿de acuerdo?"
    }
  },

  // ==========================================
  // 4. DICAS PRÁTICAS, SEGURANÇA E ESTRUTURA
  // ==========================================
  {
    keywords: ["dinheiro", "cartao", "pix", "caixa eletronico", "banco", "pagamento", "pagar", "money", "card", "atm", "bank", "payment", "pay", "dinero", "tarjeta", "cajero automatico", "banco", "pago", "pagar"],
    reply: {
      pt: "A grande maioria dos estabelecimentos aceita PIX e Cartão! 💳 Porém, é sempre bom ter um trocadinho para a travessia das chalanas. Não temos caixa eletrônico dentro da ilha.",
      en: "The vast majority of establishments accept PIX (local transfer) and Cards! 💳 However, it's always good to have some small change for the chalana crossings. We do not have an ATM on the island.",
      es: "¡La gran mayoría de los establecimientos aceptan PIX (transferencia local) y Tarjeta! 💳 Sin embargo, siempre es bueno tener algo de cambio para el cruce en las chalanas. No tenemos cajero automático en la isla."
    }
  },
  {
    keywords: ["mosquito", "repelente", "borrachudo", "inseto", "pernilongo", "repellent", "bug", "insect", "repelente", "insecto", "bicho"],
    reply: {
      pt: "Dica de ouro: Como estamos cercados por natureza, especialmente no final da tarde, é super recomendável trazer um repelente! 🦟 Assim você curte o pôr do sol sem preocupações.",
      en: "Golden tip: Since we are surrounded by nature, especially in the late afternoon, it is highly recommended to bring insect repellent! 🦟 This way you can enjoy the sunset without worries.",
      es: "Consejo de oro: Como estamos rodeados de naturaleza, especialmente al final de la tarde, ¡es muy recomendable traer repelente de insectos! 🦟 De esta manera podrás disfrutar de la puesta de sol sin preocupaciones."
    }
  },
  {
    keywords: ["acessibilidade", "cadeirante", "idoso", "cadeira de rodas", "dificuldade de locomocao", "locomocao", "accessibility", "wheelchair", "elderly", "mobility", "accesibilidad", "silla de ruedas", "anciano", "movilidad"],
    reply: {
      pt: "A ilha tem um charme rústico com ruelas estreitas. Para melhor acessibilidade, recomendamos ir de barco direto para o deck de locais como o <a href='restaurante-laguna.html'>Laguna</a> ou <a href='bar-kauai.html'>Kauai</a>.",
      en: "The island has a rustic charm with narrow streets. For better accessibility, we recommend going by boat directly to the deck of places like <a href='restaurante-laguna.html'>Laguna</a> or <a href='bar-kauai.html'>Kauai</a>.",
      es: "La isla tiene un encanto rústico con calles estrechas. Para mayor accesibilidad, recomendamos ir en bote directamente al muelle de lugares como <a href='restaurante-laguna.html'>Laguna</a> o <a href='bar-kauai.html'>Kauai</a>."
    }
  },
  {
    keywords: ["farmacia", "remedio", "hospital", "posto de saude", "emergencia", "medico", "pharmacy", "medicine", "doctor", "emergency", "farmacia", "medicina", "hospital", "medico", "emergencia"],
    reply: {
      pt: "Não temos farmácias grandes dentro da ilha. 🏥 Mas logo na Av. Armando Lombardi (a 5 min de barco), você encontra farmácias 24h e clínicas.",
      en: "We don't have large pharmacies on the island. 🏥 But just on Armando Lombardi Ave. (5 mins by boat), you can find 24h pharmacies and clinics.",
      es: "No tenemos grandes farmacias en la isla. 🏥 Pero justo en la Av. Armando Lombardi (a 5 minutos en bote), puedes encontrar farmacias y clínicas abiertas las 24 horas."
    }
  },
  {
    keywords: ["historia", "origem", "nome gigoia", "antigamente", "cultura", "antigo", "history", "origin", "culture", "old", "historia", "origen", "cultura", "antiguo"],
    reply: {
      pt: "A Gigóia começou como uma pacata vila de pescadores! 📜 Você pode ler tudo sobre nossa trajetória na página <a href='a-ilha.html'>A Ilha</a>.",
      en: "Gigóia started as a quiet fishing village! 📜 You can read all about our history on <a href='a-ilha.html'>The Island</a> page.",
      es: "¡Gigóia comenzó como un tranquilo pueblo de pescadores! 📜 Puedes leer todo sobre nuestra trayectoria en la página <a href='a-ilha.html'>La Isla</a>."
    }
  },
  {
    keywords: ["clima", "tempo", "chove", "melhor epoca", "quando ir", "verao", "inverno", "weather", "climate", "rain", "best time", "summer", "winter", "clima", "tiempo", "lluvia", "mejor epoca", "verano", "invierno"],
    reply: {
      pt: "A Gigóia é linda o ano todo! ☀️ No verão os dias são longos para barcos, e no inverno o clima é ameno para caminhar. Confira mais em <a href='melhor-epoca.html'>Melhor Época para Visitar</a>.",
      en: "Gigóia is beautiful all year round! ☀️ In the summer the days are long for boating, and in the winter the weather is mild for walking. Check out more at <a href='melhor-epoca.html'>Best Time to Visit</a>.",
      es: "¡Gigóia es hermosa todo el año! ☀️ En verano los días son largos para pasear en bote, y en invierno el clima es templado para caminar. Descubre más en <a href='melhor-epoca.html'>Mejor Época para Visitar</a>."
    }
  },

  // ==========================================
  // 5. LOGÍSTICA, ACESSO E REGRAS
  // ==========================================
  {
    keywords: ["como chegar", "onde fica", "localizacao", "endereco", "chegar", "como ir", "metro", "jardim oceanico", "how to get there", "location", "address", "subway", "como llegar", "donde esta", "ubicacion", "direccion", "metro"],
    reply: {
      pt: "Chegar aqui é super fácil! 📍 Veja o passo a passo completo, incluindo mapas e dicas de transporte, na nossa página <a href='como-chegar.html'>Como Chegar</a>.",
      en: "Getting here is super easy! 📍 See the complete step-by-step guide, including maps and transportation tips, on our <a href='como-chegar.html'>How to Get Here</a> page.",
      es: "¡Llegar aquí es muy fácil! 📍 Vea la guía paso a paso completa, que incluye mapas y consejos de transporte, en nuestra página <a href='como-chegar.html'>Cómo Llegar</a>."
    }
  },
  {
    keywords: ["carro", "estacionamento", "estacionar", "vaga", "parar o carro", "dirigir", "uber", "car", "parking", "park", "drive", "coche", "estacionamiento", "estacionar", "conducir"],
    reply: {
      pt: "A ilha não tem carros! 🚫🚗 Se vier de carro, recomendamos os estacionamentos particulares na Av. Armando Lombardi, 350. Veja detalhes em <a href='como-chegar.html'>Como Chegar</a>.",
      en: "The island has no cars! 🚫🚗 If you come by car, we recommend the private parking lots at 350 Armando Lombardi Ave. See details at <a href='como-chegar.html'>How to Get Here</a>.",
      es: "¡La isla no tiene coches! 🚫🚗 Si vienes en coche, te recomendamos los aparcamientos privados en la Av. Armando Lombardi, 350. Consulta los detalles en <a href='como-chegar.html'>Cómo Llegar</a>."
    }
  },
  {
    keywords: ["barco", "balsa", "chalana", "travessia", "barquinho", "valor do barco", "preco do barco", "horario barco", "madrugada", "boat", "ferry", "crossing", "boat price", "boat schedule", "bote", "lancha", "cruce", "precio del bote", "horario del bote"],
    reply: {
      pt: "As chalanas funcionam 24h! 🚤 O valor varia entre R$ 2,00 e R$ 5,00. Saiba mais detalhes de horários e decks em <a href='como-chegar.html'>Como Chegar</a>.",
      en: "The chalanas (boats) run 24/7! 🚤 The price varies between R$ 2.00 and R$ 5.00. Learn more details about schedules and decks at <a href='como-chegar.html'>How to Get Here</a>.",
      es: "¡Las chalanas (botes) funcionan las 24 horas! 🚤 El valor varía entre R$ 2,00 y R$ 5,00. Conoce más detalles de horarios y muelles en <a href='como-chegar.html'>Cómo Llegar</a>."
    }
  },
  {
    keywords: ["pet", "cachorro", "gato", "animal", "pets", "pet friendly", "caozinho", "cachorrinho", "dog", "cat", "perro", "gato", "mascota"],
    reply: {
      pt: "Sim! Somos Pet Friendly 🐾. Casas como a <a href='casa-venti.html'>Casa Venti</a> aceitam pets. Confira mais dicas de convivência em <a href='boas-praticas.html'>Boas Práticas</a>.",
      en: "Yes! We are Pet Friendly 🐾. Houses like <a href='casa-venti.html'>Casa Venti</a> accept pets. Check out more living tips in <a href='boas-praticas.html'>Good Practices</a>.",
      es: "¡Sí! Somos Pet Friendly 🐾. Casas como <a href='casa-venti.html'>Casa Venti</a> aceptan mascotas. Consulta más consejos de convivencia en <a href='boas-praticas.html'>Buenas Prácticas</a>."
    }
  },
  {
    keywords: ["lixo", "barulho", "regras", "boas praticas", "som alto", "pode fazer som", "musica alta", "trash", "noise", "rules", "loud music", "basura", "ruido", "reglas", "musica alta"],
    reply: {
      pt: "Ajude-nos a preservar nosso paraíso! 🗑️🌿 Conheça as regrinhas essenciais de silêncio e lixo na página <a href='boas-praticas.html'>Boas Práticas</a>.",
      en: "Help us preserve our paradise! 🗑️🌿 Learn the essential rules regarding silence and trash on the <a href='boas-praticas.html'>Good Practices</a> page.",
      es: "¡Ayúdanos a preservar nuestro paraíso! 🗑️🌿 Conoce las reglas esenciales sobre el silencio y la basura en la página <a href='boas-praticas.html'>Buenas Prácticas</a>."
    }
  },

  // ==========================================
  // 6. PASSEIOS DE BARCO E AVENTURA
  // ==========================================
  {
    keywords: ["passeio", "tour", "roteiro", "fazer o que", "o que fazer", "passear", "what to do", "excursion", "que hacer", "paseo"],
    reply: {
      pt: "Os passeios de barco são a alma da ilha! 🚤 Temos o <a href='pantanal-carioca.html'>Pantanal Carioca</a> e as <a href='ilhas-tijucas.html'>Ilhas Tijucas</a>. Veja todas as opções em <a href='passeios-rotas.html'>Passeios & Rotas</a>.",
      en: "Boat tours are the soul of the island! 🚤 We have the <a href='pantanal-carioca.html'>Carioca Pantanal</a> and the <a href='ilhas-tijucas.html'>Tijucas Islands</a>. See all options at <a href='passeios-rotas.html'>Tours & Routes</a>.",
      es: "¡Los paseos en bote son el alma de la isla! 🚤 Tenemos el <a href='pantanal-carioca.html'>Pantanal Carioca</a> y las <a href='ilhas-tijucas.html'>Islas Tijucas</a>. Ve todas las opciones en <a href='passeios-rotas.html'>Paseos y Rutas</a>."
    },
    showWhatsapp: true
  },
  {
    keywords: ["pantanal", "jacare", "capivara", "animais", "natureza", "passaros", "bicho", "fauna", "safari", "alligator", "capybara", "animals", "nature", "birds", "caiman", "capibara", "animales", "naturaleza", "pajaros"],
    reply: {
      pt: "O passeio do <a href='pantanal-carioca.html'>Pantanal Carioca</a> é incrível para ver jacarés e capivaras! 🐊 Dura 45 min e custa em média R$ 50 por pessoa.",
      en: "The <a href='pantanal-carioca.html'>Carioca Pantanal</a> tour is amazing for seeing alligators and capybaras! 🐊 It lasts 45 mins and costs an average of R$ 50 per person.",
      es: "¡El tour del <a href='pantanal-carioca.html'>Pantanal Carioca</a> es increíble para ver caimanes y capibaras! 🐊 Dura 45 minutos y cuesta en promedio R$ 50 por persona."
    }
  },
  {
    keywords: ["tijucas", "ilhas tijucas", "mar", "mergulho", "tartaruga", "caribe carioca", "ilha das tijucas", "sea", "dive", "turtle", "tijucas islands", "mar", "buceo", "tortuga", "islas tijucas"],
    reply: {
      pt: "As <a href='ilhas-tijucas.html'>Ilhas Tijucas</a> são o nosso 'Caribe Carioca'! 🤿 Perfeito para mergulhar e ver tartarugas em águas cristalinas.",
      en: "The <a href='ilhas-tijucas.html'>Tijucas Islands</a> are our 'Carioca Caribbean'! 🤿 Perfect for diving and seeing turtles in crystal-clear waters.",
      es: "¡Las <a href='ilhas-tijucas.html'>Islas Tijucas</a> son nuestro 'Caribe Carioca'! 🤿 Perfecto para bucear y ver tortugas en aguas cristalinas."
    }
  },
  {
    keywords: ["reserva", "praia da reserva", "marapendi", "canal", "reserve beach", "playa de reserva"],
    reply: {
      pt: "Temos um passeio maravilhoso de barco até a <a href='reserva.html'>Praia da Reserva</a>! 🏝️ São 2 horas de navegação com parada para banho de mar.",
      en: "We have a wonderful boat tour to <a href='reserva.html'>Reserva Beach</a>! 🏝️ It's 2 hours of sailing with a stop for a sea bath.",
      es: "¡Tenemos un maravilloso paseo en bote hasta la <a href='reserva.html'>Playa de Reserva</a>! 🏝️ Son 2 horas de navegación con parada para bañarse en el mar."
    }
  },
  {
    keywords: ["jet ski", "jetski", "jet-ski", "adrenalina", "pilotar", "moto aquatica", "adrenaline", "ride", "adrenalina", "conducir"],
    reply: {
      pt: "Curte adrenalina? 🚀 Veja os valores para aluguel de Jet Ski na nossa página de <a href='jet-ski.html'>Jet Ski</a> ou chame no WhatsApp!",
      en: "Like adrenaline? 🚀 See the prices for Jet Ski rentals on our <a href='jet-ski.html'>Jet Ski</a> page or contact us on WhatsApp!",
      es: "¿Te gusta la adrenalina? 🚀 ¡Mira los precios de alquiler de Jet Ski en nuestra página de <a href='jet-ski.html'>Jet Ski</a> o contáctanos por WhatsApp!"
    },
    showWhatsapp: true
  },
  {
    keywords: ["pacote", "combo", "pacotes especiais", "romantico", "vip", "experiencia completa", "roteiro perfeito", "package", "special packages", "romantic", "complete experience", "paquete", "paquetes especiales", "romantico", "experiencia completa"],
    reply: {
      pt: "Quer facilidade? Temos a <a href='experiencia-completa.html'>Experiência Completa</a> e diversos <a href='pacotes-especiais.html'>Pacotes Especiais</a> 🥰. Clique no botão abaixo para orçarmos!",
      en: "Want convenience? We have the <a href='experiencia-completa.html'>Complete Experience</a> and several <a href='pacotes-especiais.html'>Special Packages</a> 🥰. Click the button below for a quote!",
      es: "¿Quieres comodidad? Tenemos la <a href='experiencia-completa.html'>Experiencia Completa</a> y varios <a href='pacotes-especiais.html'>Paquetes Especiales</a> 🥰. ¡Haz clic en el botón de abajo para pedir un presupuesto!"
    },
    showWhatsapp: true
  },

  // ==========================================
  // 7. GASTRONOMIA E RESTAURANTES ESPECÍFICOS
  // ==========================================
  {
    keywords: ["frutos do mar", "peixe", "camarao", "moqueca", "lagosta", "ceviche", "seafood", "fish", "shrimp", "lobster", "mariscos", "pescado", "camaron", "langosta"],
    reply: {
      pt: "Para frutos do mar, experimente o <a href='restaurante-ocya.html'>Ocyá</a>, o <a href='restaurante-laguna.html'>Laguna</a> ou a moqueca do <a href='restaurante-cais-bar.html'>Cais Bar</a>. Veja a lista completa em <a href='restaurantes.html'>Restaurantes</a>.",
      en: "For seafood, try <a href='restaurante-ocya.html'>Ocyá</a>, <a href='restaurante-laguna.html'>Laguna</a>, or the moqueca at <a href='restaurante-cais-bar.html'>Cais Bar</a>. See the full list at <a href='restaurantes.html'>Restaurants</a>.",
      es: "Para mariscos, prueba <a href='restaurante-ocya.html'>Ocyá</a>, <a href='restaurante-laguna.html'>Laguna</a>, o la moqueca en <a href='restaurante-cais-bar.html'>Cais Bar</a>. Mira la lista completa en <a href='restaurantes.html'>Restaurantes</a>."
    }
  },
  {
    keywords: ["ocya", "michelin", "geronimo", "sofisticado", "chique", "luxo", "alta gastronomia", "sophisticated", "chic", "luxury", "high gastronomy", "sofisticado", "lujo", "alta gastronomia"],
    reply: {
      pt: "O <a href='restaurante-ocya.html'>Ocyá</a> é reconhecido pelo Guia Michelin e comandado pelo chef Gerônimo Athiê. É pura alta gastronomia! 🐟",
      en: "<a href='restaurante-ocya.html'>Ocyá</a> is recognized by the Michelin Guide and led by chef Gerônimo Athiê. It's pure high gastronomy! 🐟",
      es: "¡<a href='restaurante-ocya.html'>Ocyá</a> está reconocido por la Guía Michelin y liderado por el chef Gerônimo Athiê. ¡Es pura alta gastronomía! 🐟"
    }
  },
  {
    keywords: ["laguna", "pedra da gavea", "primeiro restaurante", "antigo", "tradicional", "oldest restaurant", "traditional", "restaurante mas antiguo", "tradicional"],
    reply: {
      pt: "O <a href='restaurante-laguna.html'>Restaurante Laguna</a> é o pioneiro da ilha! Rústico e sofisticado com vista para a Pedra da Gávea.",
      en: "The <a href='restaurante-laguna.html'>Laguna Restaurant</a> is the pioneer of the island! Rustic and sophisticated with a view of Pedra da Gávea.",
      es: "¡El <a href='restaurante-laguna.html'>Restaurante Laguna</a> es el pionero de la isla! Rústico y sofisticado con vistas a la Pedra da Gávea."
    }
  },
  {
    keywords: ["deck", "guarda chuva", "guarda-chuva", "deck bar", "camarao no abacaxi", "umbrella", "shrimp in pineapple", "paraguas", "camaron en piña"],
    reply: {
      pt: "O <a href='restaurante-deck-bar.html'>Deck Bar</a> é famoso pelos guarda-chuvas coloridos e pelo Camarão no Abacaxi! 🍍",
      en: "The <a href='restaurante-deck-bar.html'>Deck Bar</a> is famous for its colorful umbrellas and Pineapple Shrimp! 🍍",
      es: "¡El <a href='restaurante-deck-bar.html'>Deck Bar</a> es famoso por sus coloridos paraguas y su Camarón en Piña! 🍍"
    }
  },
  {
    keywords: ["cais bar", "cais", "melhor moqueca", "rodizio de petiscos", "best moqueca", "snack all you can eat", "mejor moqueca"],
    reply: {
      pt: "O <a href='restaurante-cais-bar.html'>Cais Bar</a> tem a moqueca mais tradicional da região! 🍲 Confira também o rodízio de petiscos.",
      en: "The <a href='restaurante-cais-bar.html'>Cais Bar</a> has the most traditional moqueca in the region! 🍲 Also check out their all-you-can-eat snacks.",
      es: "¡El <a href='restaurante-cais-bar.html'>Cais Bar</a> tiene la moqueca más tradicional de la región! 🍲 No te pierdas su barra libre de bocadillos."
    }
  },
  {
    keywords: ["camarao da barra", "especializado em camarao", "shrimp specialized", "especializado en camaron"],
    reply: {
      pt: "O <a href='restaurante-camarao.html'>Camarão da Barra</a> é especializado em diferentes preparos contemporâneos de camarão. 🍤",
      en: "The <a href='restaurante-camarao.html'>Camarão da Barra</a> specializes in various contemporary shrimp preparations. 🍤",
      es: "El <a href='restaurante-camarao.html'>Camarão da Barra</a> se especializa en varias preparaciones contemporáneas de camarones. 🍤"
    }
  },
  {
    keywords: ["salome", "salomé", "salome al mare", "tabua de frutos do mar", "seafood platter", "tabla de mariscos"],
    reply: {
      pt: "O <a href='restaurante-salome.html'>Salomé al Mare</a> fica na Ilha Primeira e tem tábuas de mariscos gigantes! 🐚",
      en: "The <a href='restaurante-salome.html'>Salomé al Mare</a> is on Primeira Island and features giant seafood platters! 🐚",
      es: "¡El <a href='restaurante-salome.html'>Salomé al Mare</a> está en la Isla Primera y cuenta con tablas gigantes de mariscos! 🐚"
    }
  },
  {
    keywords: ["venne", "mediterranea", "mediterraneo", "elegante", "mediterranean", "elegant", "mediterraneo", "elegante"],
    reply: {
      pt: "O <a href='restaurante-venne.html'>Venne Gastronomia</a> oferece culinária mediterrânea refinada e autorais impecáveis. 🍷",
      en: "<a href='restaurante-venne.html'>Venne Gastronomia</a> offers refined Mediterranean cuisine with impeccable signature dishes. 🍷",
      es: "El <a href='restaurante-venne.html'>Venne Gastronomia</a> ofrece una refinada cocina mediterránea con platos de autor impecables. 🍷"
    }
  },
  {
    keywords: ["maracuja", "maracujá", "maracuja da ilha", "camarao empanado", "breaded shrimp", "camaron empanizado"],
    reply: {
      pt: "O <a href='restaurante-maracuja.html'>Maracujá da Ilha</a> tem um dos melhores decks para ver o pôr do sol! 🌅",
      en: "The <a href='restaurante-maracuja.html'>Maracujá da Ilha</a> has one of the best decks to watch the sunset! 🌅",
      es: "¡El <a href='restaurante-maracuja.html'>Maracujá da Ilha</a> tiene una de las mejores terrazas para ver el atardecer! 🌅"
    }
  },
  {
    keywords: ["burger", "hamburguer", "sanduiche", "lanche", "parada burger", "fome", "hamburgueria", "sandwich", "snack", "hungry", "hamburguesa", "hambre"],
    reply: {
      pt: "Quer um hambúrguer artesanal? O <a href='parada-burger.html'>Parada Burger</a> é o point certo! 🍔",
      en: "Want a craft burger? The <a href='parada-burger.html'>Parada Burger</a> is the right spot! 🍔",
      es: "¿Quieres una hamburguesa artesanal? ¡El <a href='parada-burger.html'>Parada Burger</a> es el lugar ideal! 🍔"
    }
  },
  {
    keywords: ["pizza", "pizzaria", "massa", "ilha gourmet", "pasta"],
    reply: {
      pt: "Para pizzas e massas, recomendo o <a href='ilha-gourmet.html'>Ilha Gourmet</a>! Casual e muito saboroso. 🍕",
      en: "For pizzas and pastas, I recommend <a href='ilha-gourmet.html'>Ilha Gourmet</a>! Casual and very tasty. 🍕",
      es: "¡Para pizzas y pastas, recomiendo <a href='ilha-gourmet.html'>Ilha Gourmet</a>! Casual y muy sabroso. 🍕"
    }
  },
  {
    keywords: ["carne", "frango", "boteco raiz", "elson", "barato", "simples", "comida di buteco", "meat", "chicken", "cheap", "simple", "carne", "pollo", "barato"],
    reply: {
      pt: "Comida raiz é no <a href='bar-elson.html'>Bar do Elson</a>! 🍗 Não deixe de provar o famoso frango assado.",
      en: "Authentic bar food is at <a href='bar-elson.html'>Bar do Elson</a>! 🍗 Be sure to try their famous roast chicken.",
      es: "¡La auténtica comida de bar está en <a href='bar-elson.html'>Bar do Elson</a>! 🍗 Asegúrate de probar su famoso pollo asado."
    }
  },
  {
    keywords: ["cafe", "cafeteria", "cafe da manha", "bolo", "tapioca", "cantinho do cafe", "poesia", "coffee", "breakfast", "cake", "desayuno", "pastel"],
    reply: {
      pt: "Comece o dia no <a href='cafe-poesia.html'>Café da Poesia</a> ou no <a href='cantinho-cafe.html'>Cantinho do Café</a>. Veja mais em <a href='cafe-lanches.html'>Cafés & Lanches</a>. ☕",
      en: "Start your day at <a href='cafe-poesia.html'>Café da Poesia</a> or <a href='cantinho-cafe.html'>Cantinho do Café</a>. See more at <a href='cafe-lanches.html'>Cafés & Snacks</a>. ☕",
      es: "Comienza tu día en <a href='cafe-poesia.html'>Café da Poesia</a> o <a href='cantinho-cafe.html'>Cantinho do Café</a>. Ver más en <a href='cafe-lanches.html'>Cafés y Snacks</a>. ☕"
    }
  },
  {
    keywords: ["joana", "bar da joana", "comida caseira", "pastel", "caldinho", "homemade food", "comida casera"],
    reply: {
      pt: "O <a href='bar-joana.html'>Bar da Joana</a> tem aquele clima de vila e petiscos caseiros deliciosos. 🍳",
      en: "The <a href='bar-joana.html'>Bar da Joana</a> has that village vibe and delicious homemade snacks. 🍳",
      es: "El <a href='bar-joana.html'>Bar da Joana</a> tiene ese ambiente de pueblo y deliciosos aperitivos caseros. 🍳"
    }
  },
  {
    keywords: ["crianca", "kids", "filhos", "familia", "kauai", "ilha do ipe", "children", "family", "niños", "hijos", "familia"],
    reply: {
      pt: "O <a href='bar-kauai.html'>Kauai Gastrolounge</a> tem uma Área Kids incrível para a criançada brincar! 🌴",
      en: "The <a href='bar-kauai.html'>Kauai Gastrolounge</a> has an amazing Kids Area for children to play! 🌴",
      es: "¡El <a href='bar-kauai.html'>Kauai Gastrolounge</a> tiene una increíble Área Kids para que los niños jueguen! 🌴"
    }
  },
  {
    keywords: ["oasis", "lounge", "descontraido", "vibrante", "relaxed", "vibrant", "relajado"],
    reply: {
      pt: "O <a href='oasis.html'>Oásis Gastrolounge</a> vira um lounge vibrante com música e drinks à noite. 🍸",
      en: "The <a href='oasis.html'>Oásis Gastrolounge</a> turns into a vibrant lounge with music and drinks at night. 🍸",
      es: "El <a href='oasis.html'>Oásis Gastrolounge</a> se convierte en un lounge vibrante con música y bebidas por la noche. 🍸"
    }
  },
  {
    keywords: ["kai", "bar kai", "modernidade", "jovem", "modernity", "young", "modernidad", "joven"],
    reply: {
      pt: "O <a href='bar-kai.html'>Bar Kai</a> é ponto de encontro jovem com drinks coloridos à beira d'água. 🍹",
      en: "The <a href='bar-kai.html'>Bar Kai</a> is a young meeting point with colorful drinks by the water. 🍹",
      es: "El <a href='bar-kai.html'>Bar Kai</a> es un punto de encuentro para jóvenes con coloridas bebidas junto al agua. 🍹"
    }
  },

  // ==========================================
  // 8. BARES E VIDA NOTURNA
  // ==========================================
  {
    keywords: ["bar", "bares", "beber", "cerveja", "chopp", "caipirinha", "drinks", "bebida", "beer", "drink", "cerveza", "bebidas"],
    reply: {
      pt: "A Gigóia é boêmia! 🍻 Conheça o <a href='bares-drinks.html'>Bares & Drinks</a> para escolher entre o <a href='bar-capivara.html'>Boteco da Capivara</a> ou o <a href='bar-briza.html'>Briza</a>.",
      en: "Gigóia is bohemian! 🍻 Visit <a href='bares-drinks.html'>Bars & Drinks</a> to choose between <a href='bar-capivara.html'>Boteco da Capivara</a> or <a href='bar-briza.html'>Briza</a>.",
      es: "¡Gigóia es bohemia! 🍻 Visita <a href='bares-drinks.html'>Bares y Bebidas</a> para elegir entre <a href='bar-capivara.html'>Boteco da Capivara</a> o <a href='bar-briza.html'>Briza</a>."
    }
  },
  {
    keywords: ["por do sol", "fim de tarde", "visual", "ak bar", "caicara", "capivara", "pordosol", "sunset", "late afternoon", "atardecer", "puesta de sol"],
    reply: {
      pt: "Pôr do sol inesquecível? 🌅 Recomendo o <a href='bar-capivara.html'>Boteco da Capivara</a> ou o <a href='bar-caicaras.html'>Bar Caiçaras</a>.",
      en: "Unforgettable sunset? 🌅 I recommend the <a href='bar-capivara.html'>Boteco da Capivara</a> or <a href='bar-caicaras.html'>Bar Caiçaras</a>.",
      es: "¿Un atardecer inolvidable? 🌅 Te recomiendo el <a href='bar-capivara.html'>Boteco da Capivara</a> o el <a href='bar-caicaras.html'>Bar Caiçaras</a>."
    }
  },
  {
    keywords: ["samba", "pagode", "musica ao vivo", "tocar", "briza", "jazz", "banda", "live music", "band", "musica en vivo"],
    reply: {
      pt: "Música ao vivo? 🎵 Confira a <a href='agenda-cultural.html'>Agenda Cultural</a> para ver shows no <a href='bar-briza.html'>Briza da Gigóia</a>.",
      en: "Live music? 🎵 Check out the <a href='agenda-cultural.html'>Cultural Agenda</a> to see shows at <a href='bar-briza.html'>Briza da Gigóia</a>.",
      es: "¿Música en vivo? 🎵 Revisa la <a href='agenda-cultural.html'>Agenda Cultural</a> para ver espectáculos en <a href='bar-briza.html'>Briza da Gigóia</a>."
    }
  },
  {
    keywords: ["saideira", "tarde da noite", "madrugada", "aberto ate tarde", "bar do kai", "late night", "open late", "madrugada", "abierto hasta tarde"],
    reply: {
      pt: "A saideira oficial é no <a href='bar-kai.html'>Bar do Kai</a>! 🌙 Aberto até tarde com cerveja trincando.",
      en: "The official nightcap is at <a href='bar-kai.html'>Bar do Kai</a>! 🌙 Open late with ice-cold beer.",
      es: "¡La copa de despedida oficial es en <a href='bar-kai.html'>Bar do Kai</a>! 🌙 Abierto hasta tarde con cerveza helada."
    }
  },

  // ==========================================
  // 9. HOSPEDAGEM E AIRBNBS
  // ==========================================
  {
    keywords: ["dormir", "pousada", "hotel", "hospedagem", "ficar", "pernoite", "onde dormir", "sleep", "inn", "accommodation", "stay", "where to sleep", "dormir", "posada", "alojamiento", "donde dormir"],
    reply: {
      pt: "Dormir aqui é uma paz! 🛏️ Veja opções em <a href='hospedagem.html'>Hospedagem</a>, como a <a href='pousada-marisis.html'>Marísis</a> ou <a href='veneza-carioca.html'>Veneza Carioca</a>.",
      en: "Sleeping here is peaceful! 🛏️ See options in <a href='hospedagem.html'>Accommodation</a>, such as <a href='pousada-marisis.html'>Marísis</a> or <a href='veneza-carioca.html'>Veneza Carioca</a>.",
      es: "¡Dormir aquí es pura paz! 🛏️ Mira las opciones en <a href='hospedagem.html'>Alojamiento</a>, como <a href='pousada-marisis.html'>Marísis</a> o <a href='veneza-carioca.html'>Veneza Carioca</a>."
    },
    showWhatsapp: true
  },
  {
    keywords: ["pousada barra da tijuca", "mais perto do metro", "melhor localizacao", "closest to subway", "best location", "cerca del metro", "mejor ubicacion"],
    reply: {
      pt: "A <a href='pousada-barra.html'>Pousada Barra da Tijuca</a> é super tradicional e estratégica perto do metrô. 🌴",
      en: "The <a href='pousada-barra.html'>Pousada Barra da Tijuca</a> is very traditional and strategically located near the subway. 🌴",
      es: "La <a href='pousada-barra.html'>Pousada Barra da Tijuca</a> es muy tradicional y tiene una ubicación estratégica cerca del metro. 🌴"
    }
  },
  {
    keywords: ["marisis", "limpeza", "silencio", "tranquila", "cleanliness", "silence", "quiet", "limpieza", "silencio", "tranquilo"],
    reply: {
      pt: "A <a href='pousada-marisis.html'>Pousada Marísis</a> é o refúgio perfeito para quem busca silêncio e limpeza impecável. 🌺",
      en: "The <a href='pousada-marisis.html'>Pousada Marísis</a> is the perfect refuge for those seeking silence and impeccable cleanliness. 🌺",
      es: "La <a href='pousada-marisis.html'>Pousada Marísis</a> es el refugio perfecto para quienes buscan silencio y una limpieza impecable. 🌺"
    }
  },
  {
    keywords: ["veneza carioca", "boutique", "intimista", "intimate", "intimista"],
    reply: {
      pt: "O <a href='veneza-carioca.html'>Veneza Carioca</a> é um Hotel Boutique romântico e intimista na Ilha Primeira. ✨",
      en: "The <a href='veneza-carioca.html'>Veneza Carioca</a> is a romantic and intimate Boutique Hotel on Primeira Island. ✨",
      es: "El <a href='veneza-carioca.html'>Veneza Carioca</a> es un Hotel Boutique romántico e íntimo en la Isla Primera. ✨"
    }
  },
  {
    keywords: ["airbnb", "casa inteira", "temporada", "alugar casa", "whole house", "rent house", "casa entera", "alquilar casa"],
    reply: {
      pt: "Privacidade? Temos Airbnbs como a <a href='casa-venti.html'>Casa Venti</a> ou <a href='casa-estatua.html'>Casa da Estátua</a>. Veja em <a href='airbnb-temporada.html'>Airbnb & Temporada</a>.",
      en: "Privacy? We have Airbnbs like <a href='casa-venti.html'>Casa Venti</a> or <a href='casa-estatua.html'>Casa da Estátua</a>. See them in <a href='airbnb-temporada.html'>Airbnb & Vacation Rentals</a>.",
      es: "¿Privacidad? Tenemos Airbnbs como la <a href='casa-venti.html'>Casa Venti</a> o la <a href='casa-estatua.html'>Casa da Estátua</a>. Míralos en <a href='airbnb-temporada.html'>Airbnb y Alquileres de Vacaciones</a>."
    },
    showWhatsapp: true
  },
  {
    keywords: ["casanova", "luxuoso", "arquitetura", "retiro", "luxurious", "architecture", "retreat", "lujoso", "arquitectura", "retiro"],
    reply: {
      pt: "A <a href='casanova.html'>Casanova</a> é um retiro luxuoso com projeto arquitetônico único de frente para a lagoa. ✨",
      en: "The <a href='casanova.html'>Casanova</a> is a luxurious retreat with unique architectural design facing the lagoon. ✨",
      es: "La <a href='casanova.html'>Casanova</a> es un refugio lujoso con un diseño arquitectónico único frente a la laguna. ✨"
    }
  },
  {
    keywords: ["casa da estatua", "estatua", "piscina", "grupo grande", "16 pessoas", "pool", "large group", "16 people", "piscina", "grupo grande", "16 personas"],
    reply: {
      pt: "A <a href='casa-estatua.html'>Casa da Estátua</a> tem piscina privativa e acomoda até 16 pessoas! 🏊‍♂️",
      en: "The <a href='casa-estatua.html'>Casa da Estátua</a> has a private pool and accommodates up to 16 people! 🏊‍♂️",
      es: "¡La <a href='casa-estatua.html'>Casa da Estátua</a> tiene una piscina privada y tiene capacidad para hasta 16 personas! 🏊‍♂️"
    }
  },
  {
    keywords: ["lux 48", "lux", "casal moderno", "estudio", "modern couple", "studio", "pareja moderna"],
    reply: {
      pt: "O <a href='lux-48.html'>Lux 48</a> é um estúdio conceito super moderno, ideal para casais. 🖤",
      en: "<a href='lux-48.html'>Lux 48</a> is a super modern concept studio, ideal for couples. 🖤",
      es: "El <a href='lux-48.html'>Lux 48</a> es un estudio de concepto súper moderno, ideal para parejas. 🖤"
    }
  },
  {
    keywords: ["casa goia", "goia", "duplex"],
    reply: {
      pt: "A <a href='casa-goia.html'>Casa Goiá</a> é um duplex maravilhoso para quem quer viver como um morador local. 🏡",
      en: "<a href='casa-goia.html'>Casa Goiá</a> is a wonderful duplex for those who want to live like a local. 🏡",
      es: "La <a href='casa-goia.html'>Casa Goiá</a> es un maravilloso dúplex para aquellos que quieren vivir como un local. 🏡"
    }
  },

  // ==========================================
  // 10. EVENTOS, CASAMENTOS E AGENDA CULTURAL
  // ==========================================
  {
    keywords: ["casamento", "festa", "evento", "confraternizacao", "15 anos", "alugar espaco", "eventos", "wedding", "party", "event", "rent space", "boda", "fiesta", "alquilar espacio"],
    reply: {
      pt: "Cenário dos sonhos! 🎉 Temos o <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a> e o <a href='gaivota.html'>Espaço Gaivota</a>. Peça seu orçamento abaixo!",
      en: "Dream setting! 🎉 We have the <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a> and the <a href='gaivota.html'>Espaço Gaivota</a>. Request your quote below!",
      es: "¡Escenario de ensueño! 🎉 Tenemos el <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a> y el <a href='gaivota.html'>Espacio Gaivota</a>. ¡Pide tu presupuesto a continuación!"
    },
    showWhatsapp: true
  },
  {
    keywords: ["solar das palmeiras", "casarao", "colonial", "casar na ilha", "mansion", "marry on the island", "casona", "casarse en la isla"],
    reply: {
      pt: "O <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a> é um casarão colonial belíssimo para casamentos ao ar livre. 🏛️",
      en: "The <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a> is a beautiful colonial mansion for outdoor weddings. 🏛️",
      es: "El <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a> es una hermosa casona colonial para bodas al aire libre. 🏛️"
    }
  },
  {
    keywords: ["gaivota", "espaco gaivota", "ilha primeira"],
    reply: {
      pt: "O <a href='gaivota.html'>Espaço Gaivota</a> oferece um clima intimista para confraternizações elegantes. 🥂",
      en: "The <a href='gaivota.html'>Espaço Gaivota</a> offers an intimate atmosphere for elegant gatherings. 🥂",
      es: "El <a href='gaivota.html'>Espacio Gaivota</a> ofrece un ambiente íntimo para reuniones elegantes. 🥂"
    }
  },
  {
    keywords: ["agenda", "programacao", "hoje", "fim de semana", "o que ta rolando", "festival", "show", "ingresso", "schedule", "today", "weekend", "whats happening", "ticket", "hoy", "fin de semana", "que esta pasando", "entrada"],
    reply: {
      pt: "Confira todos os shows e festivais do mês na nossa <a href='agenda-cultural.html'>Agenda Cultural</a>! 📅",
      en: "Check out all the shows and festivals of the month in our <a href='agenda-cultural.html'>Cultural Agenda</a>! 📅",
      es: "¡Revisa todos los espectáculos y festivales del mes en nuestra <a href='agenda-cultural.html'>Agenda Cultural</a>! 📅"
    }
  }

];
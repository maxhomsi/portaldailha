/* =========================================================
   CÉREBRO DA GIGI - BASE DE CONHECIMENTO (ILHA DA GIGÓIA)
   Versão: DEFINITIVA (Genéricos + Específicos + Multilíngue)
   ========================================================= */

const GIGI_BRAIN = [

  // ==========================================
  // 1. GATILHOS DIRETOS PARA O WHATSAPP
  // ==========================================
  {
    keywords: ["falar com atendente", "humano", "pessoa", "telefone", "contato", "falar com alguem", "equipe", "atendimento", "atendente", "human", "person", "contact", "speak to someone", "team", "hablar con alguien", "equipo", "contacto", "zap", "whatsapp"],
    reply: {
      pt: "Com certeza! Vou te passar direto para a nossa equipe humana. É só clicar no botão do WhatsApp logo abaixo e mandar sua mensagem!",
      en: "Sure! I'll connect you directly to our human team. Just click the WhatsApp button below and send your message!",
      es: "¡Claro! Te conectaré directamente con nuestro equipo humano. ¡Solo haz clic en el botón de WhatsApp abajo y envía tu mensaje!"
    },
    showWhatsapp: true
  },
  {
    keywords: ["reservar", "reserva", "agendar", "agendamento", "marcar", "orcamento", "orçamento", "preco", "preço", "valor", "comprar", "book", "reservation", "schedule", "price", "cost", "buy", "reservación", "programar", "precio", "costo"],
    reply: {
      pt: "Excelente! Para consultar valores exatos, disponibilidade e fazer a sua reserva, o ideal é falar direto com a nossa equipe no WhatsApp. É só clicar no botão aqui embaixo!",
      en: "Excellent! To check exact prices, availability, and make your reservation, it's best to speak directly with our team on WhatsApp. Just click the button below!",
      es: "¡Excelente! Para consultar precios exactos, disponibilidad y hacer tu reserva, lo ideal es hablar directamente con nuestro equipo en WhatsApp. ¡Solo haz clic en el botón de abajo!"
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
      es: "Actualmente no tenemos restaurantes de sushi en la Isla de Gigóia. 🍣 ¡Pero si te gusta el pescado fresco, prueba la alta gastronomía de <a href='restaurante-ocya.html'>Ocyá</a> o <a href='restaurante-laguna.html'>Laguna</a>!"
    }
  },
  {
    keywords: ["baleia", "tubarao", "golfinho", "pinguim", "leao marinho", "whale", "shark", "dolphin", "penguin", "sea lion", "ballena", "tiburon", "delfin", "pinguino", "lobo marino"],
    reply: {
      pt: "Hahaha! Na nossa lagoa não tem baleia nem tubarão! 🐋 Aqui a água é abrigada. As grandes estrelas da nossa fauna são os jacarés-de-papo-amarelo, as capivaras e as garças.",
      en: "Hahaha! There are no whales or sharks in our lagoon! 🐋 The big stars of our fauna are the broad-snouted caimans, capybaras, and herons.",
      es: "¡Jajaja! ¡En nuestra laguna no hay ballenas ni tiburones! 🐋 Las grandes estrellas de nuestra fauna son los caimanes de hocico ancho, las capibaras y las garzas."
    }
  },
  {
    keywords: ["nadar", "banho", "mergulhar", "agua limpa", "swim", "bathe", "dive", "clean water", "bañarse", "bucear", "agua limpia"],
    reply: {
      pt: "Antigamente a lagoa era límpida e os moradores tomavam banho, mas hoje, devido ao assoreamento e urbanização, NÃO recomendamos o banho na lagoa. 🚫 Se quiser mergulhar, agende nosso passeio para as <a href='ilhas-tijucas.html'>Ilhas Tijucas</a>!",
      en: "In the past, the lagoon was crystal clear, but today, due to silting, we DO NOT recommend swimming in it. 🚫 For diving, book our tour to the <a href='ilhas-tijucas.html'>Tijucas Islands</a>!",
      es: "Antiguamente la laguna era cristalina, pero hoy NO recomendamos bañarse en ella debido a la contaminación. 🚫 Para bucear, ¡reserva nuestro tour a las <a href='ilhas-tijucas.html'>Islas Tijucas</a>!"
    }
  },
  {
    keywords: ["praia de areia", "praia na ilha", "tem praia", "beach", "sandy beach", "playa", "playa de arena"],
    reply: {
      pt: "A Ilha da Gigóia é cercada pela lagoa, não tem praia de mar com ondas. 🌴 Mas o barquinho pode te deixar num deck a apenas 5 minutinhos de caminhada da Praia da Barra da Tijuca!",
      en: "Gigóia Island is surrounded by the lagoon, it has no ocean beach. 🌴 However, the boat can drop you 5 minutes away from Barra da Tijuca Beach!",
      es: "La Isla de Gigóia está rodeada por la laguna, no tiene playa de mar. 🌴 ¡Pero el bote puede dejarte a 5 minutos a pie de la Playa de Barra da Tijuca!"
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
    keywords: ["obrigado", "obrigada", "valeu", "show", "perfeito", "otimo", "top", "legal", "agradecido", "incrivel", "maravilha", "thanks", "thank you", "great", "perfect", "awesome", "gracias", "genial", "perfecto", "increible"],
    reply: {
      pt: "Por nada! Fico muito feliz em ajudar. Se precisar de mais alguma dica, quiser saber de algum restaurante ou agendar um passeio, é só me chamar. Boa diversão na Ilha! 🌴",
      en: "You're welcome! I'm very happy to help. If you need any more tips, want to know about a restaurant, or book a tour, just let me know. Have fun on the Island! 🌴",
      es: "¡De nada! Me alegra mucho ayudar. Si necesitas algún consejo más, quieres saber sobre algún restaurante o reservar un tour, solo dímelo. ¡Diviértete en la Isla! 🌴"
    }
  },
  {
    keywords: ["quem e voce", "robo", "inteligencia artificial", "humano", "inteligencia", "bot", "assistente", "vc e real", "who are you", "robot", "artificial intelligence", "assistant", "quien eres", "eres real", "asistente"],
    reply: {
      pt: "Eu sou a Gigi, a mascote e assistente virtual do Portal Ilha da Gigóia! 🕊️ Fui programada para conhecer cada detalhe histórico e turístico daqui. Se eu não souber algo, te passo para nossa equipe humana, combinado?",
      en: "I am Gigi, the mascot and virtual assistant of the Portal! 🕊️ I was programmed to know every historical and tourist detail here. If I don't know something, I'll pass you to our human team, deal?",
      es: "¡Soy Gigi, la mascota y asistente virtual del Portal! 🕊️ Fui programada para conocer cada detalle histórico y turístico de aquí. Si no sé algo, te paso a nuestro equipo humano, ¿de acuerdo?"
    }
  },

  // ==========================================
  // 4. PERGUNTAS GENÉRICAS (CORINGAS)
  // ==========================================
  {
    keywords: ["comer", "restaurante", "fome", "almoco", "jantar", "comida", "onde comer", "gastronomia", "alimentacao", "eat", "restaurant", "lunch", "dinner", "food", "where to eat", "donde comer", "almuerzo", "cena"],
    reply: {
      pt: "A Gigóia é um paraíso gastronômico! 🍤 Temos excelentes restaurantes de frutos do mar (como Ocyá e Laguna), lanches rápidos, cafés e botecos raiz. Veja nossa lista completa de locais na página <a href='restaurantes.html'>Onde Comer</a>.",
      en: "Gigóia is a gastronomic paradise! 🍤 We have excellent seafood restaurants (like Ocyá and Laguna), quick snacks, cafes, and traditional pubs. See our full list on the <a href='restaurantes.html'>Where to Eat</a> page.",
      es: "¡Gigóia es un paraíso gastronómico! 🍤 Tenemos excelentes restaurantes de mariscos (como Ocyá y Laguna), comida rápida, cafeterías y tabernas. Mira nuestra lista completa en la página <a href='restaurantes.html'>Dónde Comer</a>."
    }
  },
  {
    keywords: ["passeio", "passear", "tour", "roteiro", "fazer o que", "o que fazer", "atividade", "turismo", "what to do", "excursion", "que hacer", "paseo", "actividad"],
    reply: {
      pt: "Os passeios de barco são a alma da ilha! 🚤 Recomendamos muito o tour pelo <a href='pantanal-carioca.html'>Pantanal Carioca</a> (para ver a natureza) ou o mergulho nas <a href='ilhas-tijucas.html'>Ilhas Tijucas</a>. Veja todas as rotas em <a href='passeios-rotas.html'>Passeios</a>.",
      en: "Boat tours are the soul of the island! 🚤 We highly recommend the <a href='pantanal-carioca.html'>Carioca Pantanal</a> tour (to see nature) or diving in the <a href='ilhas-tijucas.html'>Tijucas Islands</a>. See all routes in <a href='passeios-rotas.html'>Tours</a>.",
      es: "¡Los paseos en bote son el alma de la isla! 🚤 Recomendamos mucho el tour por el <a href='pantanal-carioca.html'>Pantanal Carioca</a> o bucear en las <a href='ilhas-tijucas.html'>Islas Tijucas</a>. Ve todas las rutas en <a href='passeios-rotas.html'>Paseos</a>."
    },
    showWhatsapp: true
  },
  {
    keywords: ["dormir", "pousada", "hotel", "hospedagem", "ficar", "pernoite", "onde dormir", "onde ficar", "sleep", "inn", "accommodation", "stay", "where to sleep", "posada", "alojamiento", "donde dormir"],
    reply: {
      pt: "Dormir aqui é uma paz! 🛏️ Temos pousadas charmosas (como a <a href='pousada-barra.html'>Barra</a> e a <a href='pousada-marisis.html'>Marísis</a>), além de casas de temporada incríveis no Airbnb. Acesse a página <a href='hospedagem.html'>Hospedagem</a> para escolher a sua.",
      en: "Sleeping here is peaceful! 🛏️ We have charming inns (like <a href='pousada-barra.html'>Barra</a> and <a href='pousada-marisis.html'>Marísis</a>), plus amazing Airbnb vacation homes. Visit the <a href='hospedagem.html'>Accommodation</a> page to choose yours.",
      es: "¡Dormir aquí es pura paz! 🛏️ Tenemos posadas encantadoras (como <a href='pousada-barra.html'>Barra</a> y <a href='pousada-marisis.html'>Marísis</a>), además de increíbles casas Airbnb. Visita la página de <a href='hospedagem.html'>Alojamiento</a>."
    },
    showWhatsapp: true
  },

  // ==========================================
  // 5. HISTÓRIA, GEOLOGIA E CURIOSIDADES
  // ==========================================
  {
    keywords: ["historia", "origem", "formacao", "geologia", "criacao", "passado", "17 mil anos", "pedra branca", "history", "origin", "geology", "historia", "origen", "geologia", "curiosidade", "fatos", "curiosity", "facts"],
    reply: {
      pt: "A história é fascinante! 📜 Geólogos dizem que há 17 mil anos o nível do mar era 70 metros mais baixo e batia no maciço da Pedra Branca. A erosão e o assoreamento fecharam a passagem, formando a praia da Barra, as lagoas e o nosso arquipélago.",
      en: "The history is fascinating! 📜 Geologists say 17,000 years ago, the sea level was 70m lower and hit the Pedra Branca mountains. Erosion formed Barra beach, the lagoons, and our archipelago.",
      es: "¡La historia es fascinante! 📜 Los geólogos dicen que hace 17.000 años el mar estaba 70m más bajo y golpeaba las montañas de Pedra Branca. La erosión formó la playa de Barra, las lagunas y nuestro archipiélago."
    }
  },
  {
    keywords: ["veneza carioca", "apelido", "por que veneza", "venice", "why veneza", "venecia", "por que venecia"],
    reply: {
      pt: "Ganhamos o apelido de 'Veneza Carioca' porque somos um arquipélago cercado de canais navegáveis, sem carros, onde a vida flui em barcos, num clima bucólico que contrasta com o caos da metrópole. 🚤",
      en: "We earned the nickname 'Carioca Venice' because we are an archipelago surrounded by canals, with no cars, where life flows on boats, contrasting with the city's chaos. 🚤",
      es: "Ganamos el apodo de 'Venecia Carioca' porque somos un archipiélago rodeado de canales, sin autos, donde la vida fluye en botes, contrastando con el caos de la metrópoli. 🚤"
    }
  },
  {
    keywords: ["rua dos colibris", "guaimun", "coroneis", "3 ilhas", "tres ilhas", "colibris", "three islands", "tres islas"],
    reply: {
      pt: "Curiosidade: A Gigóia na verdade eram 3 ilhas! 🏝️ A Ilha da Gigóia, dos Coronéis e Guaimun. O canal que dividia elas secou com o tempo e hoje se transformou na famosa Rua dos Colibris!",
      en: "Fun fact: Gigóia was originally 3 islands! 🏝️ Gigóia, Coronéis, and Guaimun. The dividing canal dried up and is now the famous Colibris Street!",
      es: "Dato curioso: ¡Gigóia eran originalmente 3 islas! 🏝️ Gigóia, Coronéis y Guaimun. ¡El canal que las dividía se secó y ahora es la famosa Calle Colibris!"
    }
  },
  {
    keywords: ["ponte de madeira", "ponte", "avenida das americas", "av das americas", "ligacao continente", "bridge", "puente"],
    reply: {
      pt: "No passado, a ilha tinha uma ponte de madeira com acesso direto para a Av. das Américas! 🌉 Com o tempo e o crescimento, ela foi demolida. Hoje o isolamento (acesso 100% por barco) é o nosso maior charme.",
      en: "In the past, the island had a wooden bridge connecting to Av. das Américas! 🌉 It was demolished over time. Today, the 100% boat access is our greatest charm.",
      es: "En el pasado, la isla tenía un puente de madera que conectaba con la Av. das Américas. 🌉 Fue demolido con el tiempo. Hoy, el acceso 100% en bote es nuestro mayor encanto."
    }
  },
  {
    keywords: ["pescadores", "primeiros moradores", "antigamente", "como comecou", "fishermen", "pescadores"],
    reply: {
      pt: "A ocupação da ilha começou de forma singela com pescadores. 🎣 Eles viviam da pesca do camarão em águas tão limpas que se via a areia branca do fundo. Com a mídia, o paraíso foi descoberto e a ocupação cresceu.",
      en: "The island's occupation started simply with fishermen catching shrimp in waters so clean you could see the white sand. 🎣 Then the media discovered the paradise.",
      es: "La ocupación de la isla comenzó con pescadores que atrapaban camarones en aguas tan limpias que se veía la arena blanca. 🎣 Luego los medios descubrieron el paraíso."
    }
  },
  {
    keywords: ["populacao", "habitantes", "quantas pessoas", "moradores", "population", "inhabitants", "how many people", "residents", "poblacion", "habitantes", "cuantas personas", "residentes"],
    reply: {
      pt: "A Ilha da Gigóia foi a que mais sofreu com o crescimento rápido. Hoje abriga cerca de 7 mil moradores! Todo o complexo lagunar junto soma quase 12 mil pessoas morando no arquipélago. 🏘️",
      en: "Gigóia Island grew the fastest. Today it houses about 7,000 residents! The whole lagoon complex totals nearly 12,000 people living in the archipelago. 🏘️",
      es: "La Isla de Gigóia fue la que más creció. ¡Hoy alberga a unos 7.000 residentes! Todo el complejo de la laguna suma casi 12.000 personas viviendo en el archipiélago. 🏘️"
    }
  },
  {
    keywords: ["iptu", "uniao", "prefeitura", "ilegal", "non edificando", "decreto", "comprar casa", "terreno", "legalizado", "legal", "taxes", "impuestos", "gobierno"],
    reply: {
      pt: "Curiosidade fundiária: Todos os terrenos pertencem à União. Em 1981, um decreto da Prefeitura transformou a área em 'non edificandi'. Por conta da fiscalização precária no passado, a maioria das casas hoje não possui inscrição formal de IPTU. 🏢",
      en: "Land curiosity: All land here belongs to the Federal Government. A 1981 decree banned residential building, so most houses today lack formal city tax registration (IPTU). 🏢",
      es: "Curiosidad de tierras: Todo el terreno pertenece a la Unión (Gobierno). Un decreto de 1981 prohibió construir, por lo que la mayoría de las casas no pagan impuesto municipal formal (IPTU). 🏢"
    }
  },
  {
    keywords: ["poluicao", "esgoto", "saneamento", "assoreamento", "pollution", "sewage", "sanitation", "polucion", "alcantarillado", "saneamiento"],
    reply: {
      pt: "A urbanização desordenada trouxe desafios: o consumo de água aumentou e a falta de tratamento de esgoto gerou poluição e assoreamento da lagoa. 🌿 Mesmo com o desgaste do progresso, a natureza resiste bravamente e é nosso maior tesouro.",
      en: "Disorderly urbanization brought challenges: lack of sewage treatment caused pollution and lagoon silting. 🌿 Even with this wear, nature resists and is our greatest treasure.",
      es: "La urbanización desordenada trajo desafíos: la falta de tratamiento de aguas residuales causó contaminación y sedimentación. 🌿 A pesar de esto, la naturaleza resiste y es nuestro mayor tesoro."
    }
  },
  {
    keywords: ["vale a pena", "vale a pena visitar", "o que acha", "is it worth it", "vale la pena"],
    reply: {
      pt: "Lógico que vale a pena! 😍 Apesar dos desafios urbanos, a Gigóia é mágica. É uma mistura de clima de interior, paz, alta gastronomia e natureza incrível a apenas 5 minutos da metrópole caótica.",
      en: "Of course it's worth it! 😍 Despite urban challenges, Gigóia is magical. It's a mix of countryside peace, high gastronomy, and incredible nature just 5 mins from the chaotic city.",
      es: "¡Lógico que vale la pena! 😍 A pesar de los desafíos urbanos, Gigóia es mágica. Es una mezcla de paz pueblerina, alta gastronomía y naturaleza increíble a 5 mins de la ciudad."
    }
  },
  {
    keywords: ["allan", "hostel barra lake", "cachorra lola", "lola", "morador antigo", "hostel"],
    reply: {
      pt: "O Allan do Hostel Barra Lake é uma lenda viva daqui! Ele mora na ilha há mais de 40 anos e viu a Barra da Tijuca nascer. E quem cuida da propriedade com ele é a sua simpática cachorrinha Lola. 🐶",
      en: "Allan from Hostel Barra Lake is a local legend! He has lived here for over 40 years and saw Barra da Tijuca be built. His friendly dog Lola helps him look after the property. 🐶",
      es: "¡Allan del Hostel Barra Lake es una leyenda local! Vive aquí hace más de 40 años. Su simpática perra Lola lo ayuda a cuidar la propiedad. 🐶"
    }
  },
  {
    keywords: ["chalana", "transporte antigo", "ze iris", "ze grande", "antonio", "seu joao", "como era o barco", "old transport", "transporte antiguo"],
    reply: {
      pt: "A história do nosso transporte é linda! 🛶 Começou só com barcos a remo. O serviço de chalana surgiu com Antônio, Zé Iris e Zé Grande (que só operavam de dia). O transporte noturno só foi inventado anos depois, pelo Seu João!",
      en: "Our transport history is beautiful! 🛶 It started with rowboats. The 'chalana' service was created by locals like Antônio. Night transport was only invented years later by Seu João!",
      es: "¡Nuestra historia de transporte es hermosa! 🛶 Comenzó con botes de remos. El servicio de 'chalana' fue creado por lugareños como Antônio. ¡El transporte nocturno fue inventado años después por Seu João!"
    }
  },
  {
    keywords: ["simao express", "nilson", "barco taxi", "cartao fidelidade", "fidelidade", "boat taxi", "taxi acuatico"],
    reply: {
      pt: "Em 2015 o transporte evoluiu: o morador Nilson Simão criou o Barco Táxi (Simão Express)! 🚤 Hoje ele tem barcos legalizados funcionando das 6h às 0h e até oferece 'Cartão Fidelidade' com descontos para os moradores economizarem.",
      en: "In 2015, local Nilson created the Boat Taxi (Simão Express)! 🚤 They run from 6 AM to midnight and offer a Loyalty Card with discounts for residents.",
      es: "En 2015, el residente Nilson creó el Barco Taxi (Simão Express). 🚤 Funcionan de 6 am a medianoche y ofrecen una Tarjeta de Fidelidad con descuentos para residentes."
    }
  },

  // ==========================================
  // 6. DICAS PRÁTICAS E INFRAESTRUTURA
  // ==========================================
  {
    keywords: ["dinheiro", "cartao", "pix", "caixa eletronico", "banco", "pagamento", "pagar", "money", "card", "atm", "bank", "payment", "pay", "dinero", "tarjeta", "cajero automatico", "banco", "pago"],
    reply: {
      pt: "A grande maioria dos estabelecimentos aceita PIX e Cartão! 💳 Porém, tenha sempre dinheiro vivo (notas trocadas) para pagar a travessia das chalanas. Não temos caixa eletrônico dentro da ilha.",
      en: "The vast majority of places accept PIX and Cards! 💳 However, always carry small cash for the boat crossings. We do not have an ATM on the island.",
      es: "¡La gran mayoría acepta PIX y Tarjeta! 💳 Sin embargo, siempre lleva efectivo pequeño para los cruces en bote. No tenemos cajero automático en la isla."
    }
  },
  {
    keywords: ["mosquito", "repelente", "borrachudo", "inseto", "pernilongo", "repellent", "bug", "insect", "repelente", "insecto", "bicho"],
    reply: {
      pt: "Dica de ouro: Como estamos inseridos no Pantanal Carioca, especialmente no final da tarde, é super recomendável trazer um repelente! 🦟 Assim você curte o pôr do sol sem preocupações.",
      en: "Golden tip: Since we are in the Carioca Pantanal, especially in the late afternoon, it is highly recommended to bring bug repellent! 🦟",
      es: "Consejo de oro: Como estamos en el Pantanal Carioca, especialmente al final de la tarde, ¡es muy recomendable traer repelente de insectos! 🦟"
    }
  },
  {
    keywords: ["acessibilidade", "cadeirante", "idoso", "cadeira de rodas", "dificuldade", "locomocao", "accessibility", "wheelchair", "elderly", "mobility", "accesibilidad", "silla de ruedas", "anciano", "movilidad"],
    reply: {
      pt: "A ilha tem um charme rústico com ruelas estreitas. Para melhor acessibilidade, recomendamos ir de barco direto para o deck de locais preparados como o <a href='restaurante-laguna.html'>Laguna</a> ou <a href='bar-kauai.html'>Kauai</a>.",
      en: "The island has narrow rustic streets. For better accessibility, we recommend going by boat directly to the deck of places like <a href='restaurante-laguna.html'>Laguna</a> or <a href='bar-kauai.html'>Kauai</a>.",
      es: "La isla tiene calles rústicas y estrechas. Para mayor accesibilidad, recomendamos ir en bote directamente al muelle de lugares como <a href='restaurante-laguna.html'>Laguna</a> o <a href='bar-kauai.html'>Kauai</a>."
    }
  },
  {
    keywords: ["farmacia", "remedio", "hospital", "posto de saude", "emergencia", "medico", "pharmacy", "medicine", "doctor", "emergency", "farmacia", "medicina", "hospital", "medico", "emergencia"],
    reply: {
      pt: "Temos 2 farmácias pequenas na ilha, mas para emergências ou hospitais, logo ali na Av. Armando Lombardi (a 5 min de barco) você encontra clínicas e grandes drogarias 24h. 🏥",
      en: "We have 2 small pharmacies on the island. For emergencies, just on Armando Lombardi Ave. (5 mins by boat) you can find hospitals and 24h drugstores. 🏥",
      es: "Tenemos 2 farmacias pequeñas en la isla. Para emergencias, en la Av. Armando Lombardi (a 5 minutos en bote) encontrarás hospitales y farmacias 24h. 🏥"
    }
  },
  {
    keywords: ["clima", "tempo", "chove", "melhor epoca", "quando ir", "verao", "inverno", "weather", "climate", "rain", "best time", "summer", "winter", "clima", "tiempo", "lluvia", "mejor epoca", "verano", "invierno"],
    reply: {
      pt: "A Gigóia é linda o ano todo! ☀️ No verão os dias são perfeitos para esportes aquáticos, e no inverno o clima ameno é ideal para a gastronomia. Confira em <a href='melhor-epoca.html'>Melhor Época para Visitar</a>.",
      en: "Gigóia is beautiful all year round! ☀️ Summer is perfect for water sports, and winter has a mild climate ideal for gastronomy. Check <a href='melhor-epoca.html'>Best Time to Visit</a>.",
      es: "¡Gigóia es hermosa todo el año! ☀️ El verano es perfecto para deportes acuáticos, y el invierno es ideal para la gastronomía. Revisa <a href='melhor-epoca.html'>Mejor Época para Visitar</a>."
    }
  },

  // ==========================================
  // 7. LOGÍSTICA, ACESSO E REGRAS DA ILHA
  // ==========================================
  {
    keywords: ["unimed", "posto de gasolina", "entrada", "onde pegar o barco", "acesso principal", "beco", "where to catch the boat", "gas station", "donde tomar el bote", "gasolinera"],
    reply: {
      pt: "O acesso principal fica meio escondido! É uma ruela entre o Posto de Gasolina e o prédio espelhado da Unimed, na Av. Armando Lombardi. É ali que ficam os barcos! 📍",
      en: "The main access is a bit hidden! It's a narrow street between the Gas Station and the mirrored Unimed building on Armando Lombardi Ave. That's where the boats are! 📍",
      es: "¡El acceso principal está un poco escondido! Es una calle estrecha entre la gasolinera y el edificio de Unimed en la Av. Armando Lombardi. ¡Allí están los botes! 📍"
    }
  },
  {
    keywords: ["como chegar", "onde fica", "localizacao", "endereco", "chegar", "como ir", "metro", "jardim oceanico", "how to get there", "location", "address", "subway", "como llegar", "donde esta", "ubicacion", "direccion", "metro"],
    reply: {
      pt: "Chegar aqui é super fácil! 📍 A melhor opção é ir de Metrô (estação Jardim Oceânico - Saída Lagoa). Veja o passo a passo na nossa página <a href='como-chegar.html'>Como Chegar</a>.",
      en: "Getting here is super easy! 📍 The best option is the Subway (Jardim Oceânico station). See the step-by-step guide on our <a href='como-chegar.html'>How to Get Here</a> page.",
      es: "¡Llegar aquí es muy fácil! 📍 La mejor opción es el metro (estación Jardim Oceânico). Vea la guía paso a paso en nuestra página <a href='como-chegar.html'>Cómo Llegar</a>."
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
    keywords: ["barco", "balsa", "travessia", "barquinho", "valor do barco", "preco do barco", "horario barco", "madrugada", "boat", "ferry", "crossing", "boat price", "boat schedule", "bote", "lancha", "cruce", "precio del bote", "horario del bote"],
    reply: {
      pt: "As chalanas funcionam 24h! 🚤 O valor varia entre R$ 2,00 e R$ 5,00. Você só precisa dizer o nome do restaurante para o barqueiro te deixar no deck certo.",
      en: "The chalanas (boats) run 24/7! 🚤 The price varies between R$ 2.00 and R$ 5.00. Just tell the boatman the restaurant's name to get dropped off at the right deck.",
      es: "¡Las chalanas (botes) funcionan las 24 horas! 🚤 El valor varía entre R$ 2,00 y R$ 5,00. Solo dile al barquero el nombre del restaurante para que te deje en el muelle correcto."
    }
  },
  {
    keywords: ["pet", "cachorro", "gato", "animal", "pets", "pet friendly", "caozinho", "cachorrinho", "dog", "cat", "perro", "gato", "mascota"],
    reply: {
      pt: "Sim! Somos Pet Friendly 🐾. Casas de temporada como a <a href='casa-venti.html'>Casa Venti</a> aceitam pets e vários bares também. Confira dicas em <a href='boas-praticas.html'>Boas Práticas</a>.",
      en: "Yes! We are Pet Friendly 🐾. Houses like <a href='casa-venti.html'>Casa Venti</a> and many bars accept pets. Check out our tips in <a href='boas-praticas.html'>Good Practices</a>.",
      es: "¡Sí! Somos Pet Friendly 🐾. Casas como <a href='casa-venti.html'>Casa Venti</a> y varios bares aceptan mascotas. Consulta nuestros consejos en <a href='boas-praticas.html'>Buenas Prácticas</a>."
    }
  },
  {
    keywords: ["lixo", "barulho", "regras", "boas praticas", "som alto", "pode fazer som", "musica alta", "trash", "noise", "rules", "loud music", "basura", "ruido", "reglas", "musica alta"],
    reply: {
      pt: "Ajude-nos a preservar nosso paraíso! 🗑️🌿 É fundamental respeitar os moradores com relação ao barulho e nunca jogar lixo na lagoa. Veja a página <a href='boas-praticas.html'>Boas Práticas</a>.",
      en: "Help us preserve our paradise! 🗑️🌿 It is essential to respect residents regarding noise and never throw trash in the lagoon. See the <a href='boas-praticas.html'>Good Practices</a> page.",
      es: "¡Ayúdanos a preservar nuestro paraíso! 🗑️🌿 Es fundamental respetar a los residentes en cuanto al ruido y nunca arrojar basura a la laguna. Vea la página <a href='boas-praticas.html'>Buenas Prácticas</a>."
    }
  },
  {
    keywords: ["ilha primeira", "ilha de sao jorge", "arquipelago", "outras ilhas", "other islands", "otras islas"],
    reply: {
      pt: "A Gigóia é a maior, mas fazemos parte do complexo lagunar que inclui a charmosíssima Ilha Primeira (onde ficam o Salomé e o Veneza Carioca) e a Ilha de São Jorge! 🏝️",
      en: "Gigóia is the largest, but we are part of a lagoon complex that includes the charming Ilha Primeira (home to Salomé and Veneza Carioca) and Ilha de São Jorge! 🏝️",
      es: "Gigóia es la más grande, pero somos parte del complejo lagunar que incluye la encantadora Ilha Primeira (donde están Salomé y Veneza Carioca) y la Ilha de São Jorge. 🏝️"
    }
  },
  {
    keywords: ["infraestrutura", "comercio", "mercado", "padaria", "lojas", "supermercado", "market", "bakery", "stores", "mercado", "panaderia", "tiendas"],
    reply: {
      pt: "Nossa ilha hoje é autossuficiente! 🛒 Nas ruas de terra batida você encontra 2 mercadinhos, farmácias, lojas de material de construção, hortifrúti, pet shops e dezenas de comércios.",
      en: "Our island is self-sufficient today! 🛒 On the dirt streets you will find 2 markets, pharmacies, hardware stores, produce markets, pet shops, and dozens of businesses.",
      es: "¡Nuestra isla hoy es autosuficiente! 🛒 En las calles de tierra encontrarás 2 mercados, farmacias, ferreterías, fruterías, tiendas de mascotas y decenas de negocios."
    }
  },

  // ==========================================
  // 8. PASSEIOS, ESPORTES E NATUREZA
  // ==========================================
  {
    keywords: ["caiaque", "stand up", "sup", "esportes", "remo", "kayak", "paddle", "sports", "deportes"],
    reply: {
      pt: "A lagoa é um paraíso para esportes aquáticos! 🚣‍♂️ O aluguel de Caiaque e Stand-Up Paddle (SUP) é muito comum por aqui para explorar os canais num ritmo bem tranquilo.",
      en: "The lagoon is a paradise for water sports! 🚣‍♂️ Renting Kayaks and Stand-Up Paddleboards (SUP) is very common to explore the canals at a slow pace.",
      es: "¡La laguna es un paraíso para los deportes acuáticos! 🚣‍♂️ El alquiler de Kayak y Stand-Up Paddle (SUP) es muy común aquí para explorar los canales a un ritmo tranquilo."
    }
  },
  {
    keywords: ["pantanal", "jacare", "capivara", "natureza", "passaros", "bicho", "fauna", "safari", "alligator", "capybara", "nature", "birds", "caiman", "capibara", "naturaleza", "pajaros"],
    reply: {
      pt: "O passeio do <a href='pantanal-carioca.html'>Pantanal Carioca</a> é incrível para ver jacarés e capivaras soltas! 🐊 Custa em média R$ 50 por pessoa e o barco entra fundo nos manguezais.",
      en: "The <a href='pantanal-carioca.html'>Carioca Pantanal</a> tour is amazing to see wild alligators and capybaras! 🐊 It costs ~R$ 50 and goes deep into the mangroves.",
      es: "¡El tour del <a href='pantanal-carioca.html'>Pantanal Carioca</a> es increíble para ver caimanes y capibaras salvajes! 🐊 Cuesta ~R$ 50 y se adentra en los manglares."
    }
  },
  {
    keywords: ["tijucas", "ilhas tijucas", "mar", "mergulho", "tartaruga", "caribe carioca", "ilha das tijucas", "sea", "dive", "turtle", "tijucas islands", "mar", "buceo", "tortuga", "islas tijucas"],
    reply: {
      pt: "As <a href='ilhas-tijucas.html'>Ilhas Tijucas</a> são o nosso 'Caribe Carioca'! 🤿 Um passeio de 4h pro mar aberto, perfeito para mergulhar e ver tartarugas (depende da condição do mar).",
      en: "The <a href='ilhas-tijucas.html'>Tijucas Islands</a> are our 'Carioca Caribbean'! 🤿 A 4h open sea tour, perfect for diving and seeing turtles.",
      es: "¡Las <a href='ilhas-tijucas.html'>Islas Tijucas</a> son nuestro 'Caribe Carioca'! 🤿 Un tour de 4h a mar abierto, perfecto para bucear y ver tortugas."
    }
  },
  {
    keywords: ["reserva", "praia da reserva", "marapendi", "canal", "reserve beach", "playa de reserva"],
    reply: {
      pt: "Temos um passeio maravilhoso de barco até a <a href='reserva.html'>Praia da Reserva</a>! 🏝️ São 2 horas de navegação relaxante pelos canais com parada para banho de mar.",
      en: "We have a wonderful boat tour to <a href='reserva.html'>Reserva Beach</a>! 🏝️ It's 2 hours of relaxing sailing through the canals with a sea bath stop.",
      es: "¡Tenemos un maravilloso paseo en bote hasta la <a href='reserva.html'>Playa de Reserva</a>! 🏝️ Son 2 horas de relajante navegación por los canales con parada para bañarse en el mar."
    }
  },
  {
    keywords: ["jet ski", "jetski", "jet-ski", "adrenalina", "pilotar", "moto aquatica", "adrenaline", "ride", "adrenalina", "conducir"],
    reply: {
      pt: "Curte adrenalina? 🚀 Veja os valores para aluguel de Jet Ski na nossa página de <a href='jet-ski.html'>Jet Ski</a> ou chame no WhatsApp para agendar!",
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
  // 9. RESTAURANTES ESPECÍFICOS E TIPOS DE COMIDA
  // ==========================================
  {
    keywords: ["frutos do mar", "peixe", "camarao", "moqueca", "lagosta", "ceviche", "seafood", "fish", "shrimp", "lobster", "mariscos", "pescado", "camaron", "langosta"],
    reply: {
      pt: "Para frutos do mar, experimente a alta gastronomia do <a href='restaurante-ocya.html'>Ocyá</a> (Guia Michelin), o pioneiro <a href='restaurante-laguna.html'>Laguna</a>, ou a famosa moqueca do <a href='restaurante-cais-bar.html'>Cais Bar</a>!",
      en: "For seafood, try high gastronomy at <a href='restaurante-ocya.html'>Ocyá</a> (Michelin), the pioneer <a href='restaurante-laguna.html'>Laguna</a>, or the famous moqueca at <a href='restaurante-cais-bar.html'>Cais Bar</a>!",
      es: "Para mariscos, prueba la alta gastronomía de <a href='restaurante-ocya.html'>Ocyá</a> (Michelin), el pionero <a href='restaurante-laguna.html'>Laguna</a>, o la famosa moqueca de <a href='restaurante-cais-bar.html'>Cais Bar</a>."
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
      pt: "O <a href='restaurante-laguna.html'>Restaurante Laguna</a> é o pioneiro da ilha (desde 2002)! Rústico e sofisticado com vista linda para a Pedra da Gávea.",
      en: "The <a href='restaurante-laguna.html'>Laguna Restaurant</a> is the pioneer of the island (since 2002)! Rustic and sophisticated with a view of Pedra da Gávea.",
      es: "¡El <a href='restaurante-laguna.html'>Restaurante Laguna</a> es el pionero de la isla (desde 2002)! Rústico y sofisticado con vistas a la Pedra da Gávea."
    }
  },
  {
    keywords: ["deck", "guarda chuva", "guarda-chuva", "deck bar", "camarao no abacaxi", "umbrella", "shrimp in pineapple", "paraguas", "camaron en piña"],
    reply: {
      pt: "O <a href='restaurante-deck-bar.html'>Deck Bar</a> é famoso pelos guarda-chuvas coloridos no teto e pelo incrível Camarão no Abacaxi! 🍍",
      en: "The <a href='restaurante-deck-bar.html'>Deck Bar</a> is famous for its colorful umbrellas on the ceiling and the incredible Pineapple Shrimp! 🍍",
      es: "¡El <a href='restaurante-deck-bar.html'>Deck Bar</a> es famoso por sus coloridos paraguas en el techo y su increíble Camarón en Piña! 🍍"
    }
  },
  {
    keywords: ["cais bar", "cais", "melhor moqueca", "rodizio de petiscos", "best moqueca", "snack all you can eat", "mejor moqueca"],
    reply: {
      pt: "O <a href='restaurante-cais-bar.html'>Cais Bar</a> tem a moqueca mais tradicional da região! 🍲 E eles fazem muito sucesso com o rodízio de petiscos.",
      en: "The <a href='restaurante-cais-bar.html'>Cais Bar</a> has the most traditional moqueca in the region! 🍲 They are also highly successful with their all-you-can-eat snacks.",
      es: "¡El <a href='restaurante-cais-bar.html'>Cais Bar</a> tiene la moqueca más tradicional de la región! 🍲 Y tienen mucho éxito con su barra libre de bocadillos."
    }
  },
  {
    keywords: ["camarao da barra", "especializado em camarao", "shrimp specialized", "especializado en camaron"],
    reply: {
      pt: "O <a href='restaurante-camarao.html'>Camarão da Barra</a> é super moderno e especializado em diferentes preparos contemporâneos de camarão. 🍤",
      en: "The <a href='restaurante-camarao.html'>Camarão da Barra</a> is super modern and specializes in various contemporary shrimp preparations. 🍤",
      es: "El <a href='restaurante-camarao.html'>Camarão da Barra</a> es súper moderno y se especializa en varias preparaciones contemporáneas de camarones. 🍤"
    }
  },
  {
    keywords: ["salome", "salomé", "salome al mare", "tabua de frutos do mar", "seafood platter", "tabla de mariscos"],
    reply: {
      pt: "O <a href='restaurante-salome.html'>Salomé al Mare</a> fica na Ilha Primeira e serve tábuas de mariscos gigantes perfeitas para dividir! 🐚",
      en: "The <a href='restaurante-salome.html'>Salomé al Mare</a> is on Primeira Island and serves giant seafood platters perfect for sharing! 🐚",
      es: "¡El <a href='restaurante-salome.html'>Salomé al Mare</a> está en la Isla Primera y sirve tablas gigantes de mariscos perfectas para compartir! 🐚"
    }
  },
  {
    keywords: ["venne", "mediterranea", "mediterraneo", "elegante", "mediterranean", "elegant", "mediterraneo", "elegante"],
    reply: {
      pt: "O <a href='restaurante-venne.html'>Venne Gastronomia</a> oferece culinária mediterrânea refinada. O ambiente é super elegante para ocasiões especiais. 🍷",
      en: "<a href='restaurante-venne.html'>Venne Gastronomia</a> offers refined Mediterranean cuisine. The environment is super elegant for special occasions. 🍷",
      es: "El <a href='restaurante-venne.html'>Venne Gastronomia</a> ofrece una refinada cocina mediterránea. El ambiente es súper elegante para ocasiones especiales. 🍷"
    }
  },
  {
    keywords: ["maracuja", "maracujá", "maracuja da ilha", "camarao empanado", "breaded shrimp", "camaron empanizado"],
    reply: {
      pt: "O <a href='restaurante-maracuja.html'>Maracujá da Ilha</a> (na Ilha Primeira) tem um dos melhores decks para ver o pôr do sol! 🌅",
      en: "The <a href='restaurante-maracuja.html'>Maracujá da Ilha</a> (on Primeira Island) has one of the best decks to watch the sunset! 🌅",
      es: "¡El <a href='restaurante-maracuja.html'>Maracujá da Ilha</a> (en la Isla Primera) tiene una de las mejores terrazas para ver el atardecer! 🌅"
    }
  },
  {
    keywords: ["burger", "hamburguer", "sanduiche", "lanche", "parada burger", "pizza", "pizzaria", "massa", "ilha gourmet", "pasta", "sandwich", "snack", "hamburguesa"],
    reply: {
      pt: "Bateu a fome de lanche? O <a href='parada-burger.html'>Parada Burger</a> tem hambúrgueres artesanais incríveis! Se preferir pizza e massas, vá direto para o <a href='ilha-gourmet.html'>Ilha Gourmet</a>. 🍔🍕",
      en: "Craving a snack? <a href='parada-burger.html'>Parada Burger</a> has amazing craft burgers! If you prefer pizza, go to <a href='ilha-gourmet.html'>Ilha Gourmet</a>. 🍔🍕",
      es: "¿Hambre de bocadillos? ¡<a href='parada-burger.html'>Parada Burger</a> tiene hamburguesas increíbles! Si prefieres pizza, ve a <a href='ilha-gourmet.html'>Ilha Gourmet</a>. 🍔🍕"
    }
  },
  {
    keywords: ["carne", "frango", "boteco raiz", "elson", "barato", "simples", "comida di buteco", "joana", "pastel", "caldinho", "meat", "chicken", "cheap", "simple", "carne", "pollo"],
    reply: {
      pt: "Para um clima de vila e comida raiz, visite o <a href='bar-elson.html'>Bar do Elson</a> (melhor frango assado) ou o acolhedor <a href='bar-joana.html'>Bar da Joana</a> para pastéis caseiros! 🍗",
      en: "For a local vibe and watching football, visit <a href='bar-elson.html'>Bar do Elson</a> (best roast chicken) or the cozy <a href='bar-joana.html'>Bar da Joana</a> for homemade snacks! 🍗",
      es: "Para un ambiente local y ver el fútbol, visita <a href='bar-elson.html'>Bar do Elson</a> (mejor pollo asado) o el acogedor <a href='bar-joana.html'>Bar da Joana</a> para bocadillos caseros. 🍗"
    }
  },
  {
    keywords: ["futebol", "jogo", "mengao", "assistir", "telao", "football", "match", "futbol", "partido"],
    reply: {
      pt: "Quer assistir a um bom jogo de futebol (especialmente do Mengão)? A dica é colar no <a href='bar-elson.html'>Bar do Elson</a>. Cerveja no precinho e clima de arquibancada! ⚽",
      en: "Want to watch a good football match? The tip is to go to <a href='bar-elson.html'>Bar do Elson</a>. Cold beer and a stadium vibe! ⚽",
      es: "¿Quieres ver un buen partido de fútbol? El consejo es ir al <a href='bar-elson.html'>Bar do Elson</a>. ¡Cerveza helada y ambiente de estadio! ⚽"
    }
  },
  {
    keywords: ["cafe", "cafeteria", "cafe da manha", "bolo", "tapioca", "cantinho do cafe", "poesia", "coffee", "breakfast", "cake", "desayuno", "pastel"],
    reply: {
      pt: "Comece o dia no <a href='cafe-poesia.html'>Café da Poesia</a> (com pegada artística) ou no <a href='cantinho-cafe.html'>Cantinho do Café</a> (tapiocas e bolos maravilhosos). ☕",
      en: "Start your day at <a href='cafe-poesia.html'>Café da Poesia</a> (artistic vibe) or <a href='cantinho-cafe.html'>Cantinho do Café</a> (great tapiocas and cakes). ☕",
      es: "Comienza tu día en <a href='cafe-poesia.html'>Café da Poesia</a> (estilo artístico) o <a href='cantinho-cafe.html'>Cantinho do Café</a> (tapiocas y pasteles geniales). ☕"
    }
  },
  {
    keywords: ["crianca", "kids", "filhos", "familia", "kauai", "ilha do ipe", "children", "family", "niños", "hijos", "familia"],
    reply: {
      pt: "Se vier com a família, o <a href='bar-kauai.html'>Kauai Gastrolounge</a> (na Ilha do Ipê) é imbatível! 🌴 Espaço gigante, estilo tropical e uma Área Kids maravilhosa para as crianças.",
      en: "If coming with family, <a href='bar-kauai.html'>Kauai Gastrolounge</a> is unbeatable! 🌴 Giant space, tropical style, and an amazing Kids Area.",
      es: "Si vienes con familia, ¡el <a href='bar-kauai.html'>Kauai Gastrolounge</a> es imbatible! 🌴 Espacio gigante, estilo tropical y una Área Kids increíble."
    }
  },
  {
    keywords: ["oasis", "lounge", "descontraido", "vibrante", "relaxed", "vibrant", "relajado"],
    reply: {
      pt: "O <a href='oasis.html'>Oásis Gastrolounge</a> é restaurante de dia e vira um lounge vibrante com música e drinks elaborados à noite. 🍸",
      en: "The <a href='oasis.html'>Oásis Gastrolounge</a> is a daytime restaurant and turns into a vibrant lounge with music and crafted drinks at night. 🍸",
      es: "El <a href='oasis.html'>Oásis Gastrolounge</a> es restaurante de día y se convierte en un lounge vibrante con música y tragos elaborados por la noche. 🍸"
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
  // 10. BARES E VIDA NOTURNA
  // ==========================================
  {
    keywords: ["bar", "bares", "beber", "cerveja", "chopp", "caipirinha", "drinks", "bebida", "beer", "drink", "cerveza", "bebidas"],
    reply: {
      pt: "A Gigóia é boêmia! 🍻 Conheça a aba <a href='bares-drinks.html'>Bares & Drinks</a> para escolher entre o <a href='bar-capivara.html'>Boteco da Capivara</a> ou o <a href='bar-briza.html'>Briza</a>.",
      en: "Gigóia is bohemian! 🍻 Visit <a href='bares-drinks.html'>Bars & Drinks</a> to choose between <a href='bar-capivara.html'>Boteco da Capivara</a> or <a href='bar-briza.html'>Briza</a>.",
      es: "¡Gigóia es bohemia! 🍻 Visita <a href='bares-drinks.html'>Bares y Bebidas</a> para elegir entre <a href='bar-capivara.html'>Boteco da Capivara</a> o <a href='bar-briza.html'>Briza</a>."
    }
  },
  {
    keywords: ["por do sol", "fim de tarde", "visual", "ak bar", "caicara", "capivara", "pordosol", "sunset", "late afternoon", "atardecer", "puesta de sol"],
    reply: {
      pt: "Pôr do sol inesquecível? 🌅 Recomendo a vista do <a href='bar-capivara.html'>Boteco da Capivara</a>, do <a href='bar-caicaras.html'>Bar Caiçaras</a> ou do clássico AK Bar.",
      en: "Unforgettable sunset? 🌅 I recommend the view from <a href='bar-capivara.html'>Boteco da Capivara</a>, <a href='bar-caicaras.html'>Bar Caiçaras</a>, or the classic AK Bar.",
      es: "¿Un atardecer inolvidable? 🌅 Te recomiendo la vista del <a href='bar-capivara.html'>Boteco da Capivara</a>, <a href='bar-caicaras.html'>Bar Caiçaras</a>, o el clásico AK Bar."
    }
  },
  {
    keywords: ["samba", "pagode", "musica ao vivo", "tocar", "briza", "jazz", "banda", "live music", "band", "musica en vivo"],
    reply: {
      pt: "Música ao vivo e Samba? 🎵 O <a href='bar-briza.html'>Briza da Gigóia</a> e o Caiçaras sempre têm bandas no final de semana. Confira a <a href='agenda-cultural.html'>Agenda Cultural</a>!",
      en: "Live music and Samba? 🎵 <a href='bar-briza.html'>Briza da Gigóia</a> and Caiçaras always have bands on weekends. Check the <a href='agenda-cultural.html'>Cultural Agenda</a>!",
      es: "¿Música en vivo y Samba? 🎵 <a href='bar-briza.html'>Briza da Gigóia</a> y Caiçaras siempre tienen bandas los fines de semana. ¡Revisa la <a href='agenda-cultural.html'>Agenda Cultural</a>!"
    }
  },
  {
    keywords: ["saideira", "tarde da noite", "madrugada", "aberto ate tarde", "bar do kai", "late night", "open late", "madrugada", "abierto hasta tarde"],
    reply: {
      pt: "A saideira oficial da ilha é no <a href='bar-kai.html'>Bar do Kai</a>! 🌙 Aberto até de madrugada com cerveja trincando.",
      en: "The official island nightcap is at <a href='bar-kai.html'>Bar do Kai</a>! 🌙 Open until late with ice-cold beer.",
      es: "¡La copa de despedida oficial de la isla es en <a href='bar-kai.html'>Bar do Kai</a>! 🌙 Abierto hasta tarde con cerveza helada."
    }
  },

  // ==========================================
  // 11. HOSPEDAGEM E AIRBNBS
  // ==========================================
  {
    keywords: ["pousada barra da tijuca", "mais perto do metro", "melhor localizacao", "closest to subway", "best location", "cerca del metro", "mejor ubicacion"],
    reply: {
      pt: "A <a href='pousada-barra.html'>Pousada Barra da Tijuca</a> é super tradicional e estratégica: a mais próxima do ponto de travessia para o metrô. 🌴",
      en: "The <a href='pousada-barra.html'>Pousada Barra da Tijuca</a> is very traditional and strategically located: the closest to the subway crossing point. 🌴",
      es: "La <a href='pousada-barra.html'>Pousada Barra da Tijuca</a> es muy tradicional y estratégica: la más cercana al punto de cruce del metro. 🌴"
    }
  },
  {
    keywords: ["marisis", "limpeza", "silencio", "tranquila", "cleanliness", "silence", "quiet", "limpieza", "silencio", "tranquilo"],
    reply: {
      pt: "A <a href='pousada-marisis.html'>Pousada Marísis</a> é o refúgio perfeito para quem busca silêncio absoluto e uma limpeza impecável. 🌺",
      en: "The <a href='pousada-marisis.html'>Pousada Marísis</a> is the perfect refuge for those seeking absolute silence and impeccable cleanliness. 🌺",
      es: "La <a href='pousada-marisis.html'>Pousada Marísis</a> es el refugio perfecto para quienes buscan silencio absoluto y limpieza impecable. 🌺"
    }
  },
  {
    keywords: ["veneza carioca", "boutique", "intimista", "intimate", "intimista"],
    reply: {
      pt: "O <a href='veneza-carioca.html'>Veneza Carioca</a> é um Hotel Boutique super romântico e intimista, localizado na Ilha Primeira. ✨",
      en: "The <a href='veneza-carioca.html'>Veneza Carioca</a> is a super romantic and intimate Boutique Hotel, located on Primeira Island. ✨",
      es: "El <a href='veneza-carioca.html'>Veneza Carioca</a> es un Hotel Boutique súper romántico e íntimo, ubicado en la Isla Primera. ✨"
    }
  },
  {
    keywords: ["airbnb", "casa inteira", "temporada", "alugar casa", "whole house", "rent house", "casa entera", "alquilar casa"],
    reply: {
      pt: "Privacidade total? Temos Airbnbs deslumbrantes como a <a href='casa-venti.html'>Casa Venti</a>, <a href='casa-goia.html'>Casa Goiá</a> ou a grandiosa <a href='casa-estatua.html'>Casa da Estátua</a>. Chame no WhatsApp para valores!",
      en: "Total privacy? We have stunning Airbnbs like <a href='casa-venti.html'>Casa Venti</a>, <a href='casa-goia.html'>Casa Goiá</a>, or <a href='casa-estatua.html'>Casa da Estátua</a>. Contact us on WhatsApp for prices!",
      es: "¿Privacidad total? Tenemos Airbnbs impresionantes como <a href='casa-venti.html'>Casa Venti</a>, <a href='casa-goia.html'>Casa Goiá</a>, o <a href='casa-estatua.html'>Casa da Estátua</a>. ¡Contáctanos por WhatsApp!"
    },
    showWhatsapp: true
  },
  {
    keywords: ["casanova", "luxuoso", "arquitetura", "retiro", "luxurious", "architecture", "retreat", "lujoso", "arquitectura", "retiro"],
    reply: {
      pt: "A <a href='casanova.html'>Casanova</a> é um retiro luxuoso com projeto arquitetônico único, cozinha gourmet e clima exclusivo de frente para a lagoa. ✨",
      en: "The <a href='casanova.html'>Casanova</a> is a luxurious retreat with unique architectural design, gourmet kitchen, and exclusive vibe facing the lagoon. ✨",
      es: "La <a href='casanova.html'>Casanova</a> es un refugio lujoso con diseño arquitectónico único, cocina gourmet y ambiente exclusivo frente a la laguna. ✨"
    }
  },
  {
    keywords: ["casa da estatua", "estatua", "piscina", "grupo grande", "16 pessoas", "pool", "large group", "16 people", "piscina", "grupo grande", "16 personas"],
    reply: {
      pt: "A <a href='casa-estatua.html'>Casa da Estátua</a> é maravilhosa para grupos! Tem piscina privativa e acomoda até 16 pessoas confortavelmente. 🏊‍♂️",
      en: "The <a href='casa-estatua.html'>Casa da Estátua</a> is wonderful for groups! It has a private pool and sleeps up to 16 people comfortably. 🏊‍♂️",
      es: "¡La <a href='casa-estatua.html'>Casa da Estátua</a> es maravillosa para grupos! Tiene piscina privada y aloja hasta 16 personas cómodamente. 🏊‍♂️"
    }
  },
  {
    keywords: ["lux 48", "lux", "casal moderno", "estudio", "modern couple", "studio", "pareja moderna"],
    reply: {
      pt: "O <a href='lux-48.html'>Lux 48</a> é um estúdio conceito super moderno, de design arrojado, ideal para casais. 🖤",
      en: "<a href='lux-48.html'>Lux 48</a> is a super modern concept studio, with bold design, ideal for couples. 🖤",
      es: "El <a href='lux-48.html'>Lux 48</a> es un estudio de concepto súper moderno, con diseño audaz, ideal para parejas. 🖤"
    }
  },
  {
    keywords: ["casa goia", "goia", "duplex"],
    reply: {
      pt: "A <a href='casa-goia.html'>Casa Goiá</a> é um duplex espetacular para famílias que querem se sentir moradores da ilha por alguns dias. 🏡",
      en: "<a href='casa-goia.html'>Casa Goiá</a> is a spectacular duplex for families who want to feel like island locals for a few days. 🏡",
      es: "La <a href='casa-goia.html'>Casa Goiá</a> es un espectacular dúplex para familias que quieren sentirse como locales de la isla por unos días. 🏡"
    }
  },

  // ==========================================
  // 12. EVENTOS, CASAMENTOS E AGENDA CULTURAL
  // ==========================================
  {
    keywords: ["casamento", "festa", "evento", "confraternizacao", "15 anos", "alugar espaco", "eventos", "wedding", "party", "event", "rent space", "boda", "fiesta", "alquilar espacio"],
    reply: {
      pt: "Cenário dos sonhos! 🎉 Para eventos maiores temos o casarão <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a>, e para algo intimista o <a href='gaivota.html'>Espaço Gaivota</a>. Peça seu orçamento com nossa equipe abaixo!",
      en: "Dream setting! 🎉 For larger events we have <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a>, and for intimate ones <a href='gaivota.html'>Espaço Gaivota</a>. Request a quote below!",
      es: "¡Escenario de ensueño! 🎉 Para grandes eventos tenemos <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a>, y para algo íntimo el <a href='gaivota.html'>Espacio Gaivota</a>. ¡Pide tu presupuesto abajo!"
    },
    showWhatsapp: true
  },
  {
    keywords: ["solar das palmeiras", "casarao", "colonial", "casar na ilha", "mansion", "marry on the island", "casona", "casarse en la isla"],
    reply: {
      pt: "O <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a> é um casarão colonial belíssimo! Um dos locais mais disputados do Rio para casamentos ao ar livre com gramado à beira da lagoa. 🏛️",
      en: "The <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a> is a beautiful colonial mansion! A highly sought-after location in Rio for outdoor weddings by the lagoon. 🏛️",
      es: "¡El <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a> es una hermosa casona colonial! Un lugar muy solicitado en Río para bodas al aire libre junto a la laguna. 🏛️"
    }
  },
  {
    keywords: ["gaivota", "espaco gaivota", "ilha primeira"],
    reply: {
      pt: "O <a href='gaivota.html'>Espaço Gaivota</a> fica na Ilha Primeira e oferece um clima super elegante e intimista para confraternizações exclusivas. 🥂",
      en: "The <a href='gaivota.html'>Espaço Gaivota</a> is on Primeira Island and offers a super elegant and intimate atmosphere for exclusive gatherings. 🥂",
      es: "El <a href='gaivota.html'>Espacio Gaivota</a> está en la Isla Primera y ofrece un ambiente súper elegante e íntimo para reuniones exclusivas. 🥂"
    }
  },
  {
    keywords: ["agenda", "programacao", "hoje", "fim de semana", "o que ta rolando", "festival", "show", "ingresso", "schedule", "today", "weekend", "whats happening", "ticket", "hoy", "fin de semana", "que esta pasando", "entrada"],
    reply: {
      pt: "Nossa ilha é viva! Tem sempre festival gastronômico, shows de jazz e rodas de samba acontecendo. Confira tudo na nossa <a href='agenda-cultural.html'>Agenda Cultural</a>! 📅",
      en: "Our island is alive! There's always a food festival, jazz shows, and samba happening. Check everything out on our <a href='agenda-cultural.html'>Cultural Agenda</a>! 📅",
      es: "¡Nuestra isla está viva! Siempre hay festivales gastronómicos, espectáculos de jazz y samba. ¡Revisa todo en nuestra <a href='agenda-cultural.html'>Agenda Cultural</a>! 📅"
    }
  }

];
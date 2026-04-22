/* =========================================================
   CÉREBRO DA GIGI - BASE DE CONHECIMENTO (ILHA DA GIGÓIA)
   Versão: Super Completa + Gatilhos + Correção de Falsos Positivos
   ========================================================= */

const GIGI_BRAIN = [

  // ==========================================
  // 1. GATILHOS DIRETOS PARA O WHATSAPP (RESERVAS E HUMANO)
  // ==========================================
  {
    keywords: ["falar com atendente", "humano", "pessoa", "telefone", "contato", "falar com alguem", "equipe", "atendimento", "atendente"],
    reply: "Com certeza! Vou te passar direto para a nossa equipe humana. É só clicar no botão do WhatsApp logo abaixo e mandar sua mensagem!",
    showWhatsapp: true
  },
  {
    keywords: ["reservar", "reserva", "agendar", "agendamento", "marcar", "orcamento", "orçamento", "preco", "preço", "valor", "comprar"],
    reply: "Excelente! Para consultar valores exatos, disponibilidade e fazer a sua reserva, o ideal é falar direto com a nossa equipe no WhatsApp. É só clicar no botão aqui embaixo!",
    showWhatsapp: true
  },

  // ==========================================
  // 2. PERGUNTAS SOBRE SUSHI E ANIMAIS IRREAIs (CORREÇÕES DE CONTEXTO)
  // ==========================================
  {
    keywords: ["sushi", "japones", "japa", "sashimi", "temaki", "yakisoba", "rodizio de sushi"],
    reply: "Atualmente não temos restaurantes especializados em culinária japonesa/sushi na Ilha da Gigóia. 🍣 Mas se você gosta de peixe fresco, vai amar a alta gastronomia de frutos do mar do <a href='restaurante-ocya.html'>Ocyá</a> ou do <a href='restaurante-laguna.html'>Laguna</a>!"
  },
  {
    keywords: ["baleia", "tubarao", "golfinho", "pinguim", "leao marinho"],
    reply: "Hahaha! Na nossa lagoa não tem baleia nem tubarão! 🐋 Aqui a água é abrigada. As grandes estrelas da nossa fauna são os jacarés-de-papo-amarelo, as capivaras e as garças."
  },
  {
    keywords: ["nadar na lagoa", "banho na lagoa", "mergulhar na lagoa", "tomar banho", "agua limpa"],
    reply: "Não recomendamos o banho/mergulho nas águas da lagoa ao redor da ilha. 🚫 Se quiser dar um mergulho em águas cristalinas, a dica perfeita é agendar o nosso passeio para as <a href='ilhas-tijucas.html'>Ilhas Tijucas</a>!"
  },
  {
    keywords: ["praia de areia", "praia na ilha", "tem praia"],
    reply: "A Ilha da Gigóia não tem praia de mar com ondas, nós somos cercados pela Lagoa da Tijuca! 🌴 Mas o barquinho pode te deixar em um deck que fica a apenas 5 minutinhos de caminhada da Praia da Barra."
  },

  // ==========================================
  // 3. SAUDAÇÕES E INTERAÇÕES BÁSICAS
  // ==========================================
  {
    keywords: ["oi", "ola", "bom dia", "boa tarde", "boa noite", "tudo bem", "hey", "eae", "opa", "alo", "salve"],
    reply: "Olá! Tudo ótimo por aqui! 😊 Sou a Gigi, a assistente virtual oficial do Portal. Como posso te ajudar a planejar seu dia perfeito na Ilha da Gigóia hoje?"
  },
  {
    keywords: ["obrigado", "obrigada", "valeu", "show", "perfeito", "otimo", "top", "legal", "agradecido", "incrivel", "maravilha"],
    reply: "Por nada! Fico muito feliz em ajudar. Se precisar de mais alguma dica, quiser saber de algum restaurante ou agendar um passeio, é só me chamar. Boa diversão na Ilha! 🌴"
  },
  {
    // Removido "ia" para não dar conflito com "baleia", "praia", etc.
    keywords: ["quem e voce", "robo", "inteligencia artificial", "humano", "inteligencia", "bot", "assistente", "vc e real"],
    reply: "Eu sou a Gigi, a mascote e assistente virtual do Portal Ilha da Gigóia! 🕊️ Fui programada para conhecer cada cantinho daqui. Se eu não souber responder algo, te passo para a nossa equipe humana no WhatsApp, combinado?"
  },

  // ==========================================
  // 4. DICAS PRÁTICAS, SEGURANÇA E ESTRUTURA
  // ==========================================
  {
    keywords: ["dinheiro", "cartao", "pix", "caixa eletronico", "banco", "pagamento", "pagar"],
    reply: "A grande maioria dos estabelecimentos aceita PIX e Cartão! 💳 Porém, é sempre bom ter um trocadinho para a travessia das chalanas. Não temos caixa eletrônico dentro da ilha."
  },
  {
    keywords: ["mosquito", "repelente", "borrachudo", "inseto", "pernilongo"],
    reply: "Dica de ouro: Como estamos cercados por natureza, especialmente no final da tarde, é super recomendável trazer um repelente! 🦟 Assim você curte o pôr do sol sem preocupações."
  },
  {
    keywords: ["acessibilidade", "cadeirante", "idoso", "cadeira de rodas", "dificuldade de locomocao", "locomocao"],
    reply: "A ilha tem um charme rústico com ruelas estreitas. Para melhor acessibilidade, recomendamos ir de barco direto para o deck de locais como o <a href='restaurante-laguna.html'>Laguna</a> ou <a href='bar-kauai.html'>Kauai</a>."
  },
  {
    keywords: ["farmacia", "remedio", "hospital", "posto de saude", "emergencia", "medico"],
    reply: "Não temos farmácias grandes dentro da ilha. 🏥 Mas logo na Av. Armando Lombardi (a 5 min de barco), você encontra farmácias 24h e clínicas."
  },
  {
    keywords: ["historia", "origem", "nome gigoia", "antigamente", "cultura", "antigo"],
    reply: "A Gigóia começou como uma pacata vila de pescadores! 📜 Você pode ler tudo sobre nossa trajetória na página <a href='a-ilha.html'>A Ilha</a>."
  },
  {
    keywords: ["clima", "tempo", "chove", "melhor epoca", "quando ir", "verao", "inverno"],
    reply: "A Gigóia é linda o ano todo! ☀️ No verão os dias são longos para barcos, e no inverno o clima é ameno para caminhar. Confira mais em <a href='melhor-epoca.html'>Melhor Época para Visitar</a>."
  },

  // ==========================================
  // 5. LOGÍSTICA, ACESSO E REGRAS
  // ==========================================
  {
    keywords: ["como chegar", "onde fica", "localizacao", "endereco", "chegar", "como ir", "metro", "jardim oceanico"],
    reply: "Chegar aqui é super fácil! 📍 Veja o passo a passo completo, incluindo mapas e dicas de transporte, na nossa página <a href='como-chegar.html'>Como Chegar</a>."
  },
  {
    keywords: ["carro", "estacionamento", "estacionar", "vaga", "parar o carro", "dirigir", "uber"],
    reply: "A ilha não tem carros! 🚫🚗 Se vier de carro, recomendamos os estacionamentos particulares na Av. Armando Lombardi, 350. Veja detalhes em <a href='como-chegar.html'>Como Chegar</a>."
  },
  {
    keywords: ["barco", "balsa", "chalana", "travessia", "barquinho", "valor do barco", "preco do barco", "horario barco", "madrugada"],
    reply: "As chalanas funcionam 24h! 🚤 O valor varia entre R$ 2,00 e R$ 5,00. Saiba mais detalhes de horários e decks em <a href='como-chegar.html'>Como Chegar</a>."
  },
  {
    // Removido "cao" para não conflitar com macarrao/educacao
    keywords: ["pet", "cachorro", "gato", "animal", "pets", "pet friendly", "caozinho", "cachorrinho"],
    reply: "Sim! Somos Pet Friendly 🐾. Casas como a <a href='casa-venti.html'>Casa Venti</a> aceitam pets. Confira mais dicas de convivência em <a href='boas-praticas.html'>Boas Práticas</a>."
  },
  {
    keywords: ["lixo", "barulho", "regras", "boas praticas", "som alto", "pode fazer som", "musica alta"],
    reply: "Ajude-nos a preservar nosso paraíso! 🗑️🌿 Conheça as regrinhas essenciais de silêncio e lixo na página <a href='boas-praticas.html'>Boas Práticas</a>."
  },

  // ==========================================
  // 6. PASSEIOS DE BARCO E AVENTURA
  // ==========================================
  {
    keywords: ["passeio", "tour", "roteiro", "fazer o que", "o que fazer", "passear"],
    reply: "Os passeios de barco são a alma da ilha! 🚤 Temos o <a href='pantanal-carioca.html'>Pantanal Carioca</a> e as <a href='ilhas-tijucas.html'>Ilhas Tijucas</a>. Veja todas as opções em <a href='passeios-rotas.html'>Passeios & Rotas</a>.",
    showWhatsapp: true
  },
  {
    keywords: ["pantanal", "jacare", "capivara", "animais", "natureza", "passaros", "bicho", "fauna", "safari"],
    reply: "O passeio do <a href='pantanal-carioca.html'>Pantanal Carioca</a> é incrível para ver jacarés e capivaras! 🐊 Dura 45 min e custa em média R$ 50 por pessoa."
  },
  {
    keywords: ["tijucas", "ilhas tijucas", "mar", "mergulho", "tartaruga", "caribe carioca", "ilha das tijucas"],
    reply: "As <a href='ilhas-tijucas.html'>Ilhas Tijucas</a> são o nosso 'Caribe Carioca'! 🤿 Perfeito para mergulhar e ver tartarugas em águas cristalinas."
  },
  {
    keywords: ["reserva", "praia da reserva", "marapendi", "canal"],
    reply: "Temos um passeio maravilhoso de barco até a <a href='reserva.html'>Praia da Reserva</a>! 🏝️ São 2 horas de navegação com parada para banho de mar."
  },
  {
    keywords: ["jet ski", "jetski", "jet-ski", "adrenalina", "pilotar", "moto aquatica"],
    reply: "Curte adrenalina? 🚀 Veja os valores para aluguel de Jet Ski na nossa página de <a href='jet-ski.html'>Jet Ski</a> ou chame no WhatsApp!",
    showWhatsapp: true
  },
  {
    keywords: ["pacote", "combo", "pacotes especiais", "romantico", "vip", "experiencia completa", "roteiro perfeito"],
    reply: "Quer facilidade? Temos a <a href='experiencia-completa.html'>Experiência Completa</a> e diversos <a href='pacotes-especiais.html'>Pacotes Especiais</a> 🥰. Clique no botão abaixo para orçarmos!",
    showWhatsapp: true
  },

  // ==========================================
  // 7. GASTRONOMIA E RESTAURANTES ESPECÍFICOS
  // ==========================================
  {
    keywords: ["frutos do mar", "peixe", "camarao", "moqueca", "lagosta", "ceviche"],
    reply: "Para frutos do mar, experimente o <a href='restaurante-ocya.html'>Ocyá</a>, o <a href='restaurante-laguna.html'>Laguna</a> ou a moqueca do <a href='restaurante-cais-bar.html'>Cais Bar</a>. Veja a lista completa em <a href='restaurantes.html'>Restaurantes</a>."
  },
  {
    keywords: ["ocya", "michelin", "geronimo", "sofisticado", "chique", "luxo", "alta gastronomia"],
    reply: "O <a href='restaurante-ocya.html'>Ocyá</a> é reconhecido pelo Guia Michelin e comandado pelo chef Gerônimo Athiê. É pura alta gastronomia! 🐟"
  },
  {
    keywords: ["laguna", "pedra da gavea", "primeiro restaurante", "antigo", "tradicional"],
    reply: "O <a href='restaurante-laguna.html'>Restaurante Laguna</a> é o pioneiro da ilha! Rústico e sofisticado com vista para a Pedra da Gávea."
  },
  {
    keywords: ["deck", "guarda chuva", "guarda-chuva", "deck bar", "camarao no abacaxi"],
    reply: "O <a href='restaurante-deck-bar.html'>Deck Bar</a> é famoso pelos guarda-chuvas coloridos e pelo Camarão no Abacaxi! 🍍"
  },
  {
    keywords: ["cais bar", "cais", "melhor moqueca", "rodizio de petiscos"],
    reply: "O <a href='restaurante-cais-bar.html'>Cais Bar</a> tem a moqueca mais tradicional da região! 🍲 Confira também o rodízio de petiscos."
  },
  {
    keywords: ["camarao da barra", "especializado em camarao"],
    reply: "O <a href='restaurante-camarao.html'>Camarão da Barra</a> é especializado em diferentes preparos contemporâneos de camarão. 🍤"
  },
  {
    keywords: ["salome", "salomé", "salome al mare", "tabua de frutos do mar"],
    reply: "O <a href='restaurante-salome.html'>Salomé al Mare</a> fica na Ilha Primeira e tem tábuas de mariscos gigantes! 🐚"
  },
  {
    keywords: ["venne", "mediterranea", "mediterraneo", "elegante"],
    reply: "O <a href='restaurante-venne.html'>Venne Gastronomia</a> oferece culinária mediterrânea refinada e autorais impecáveis. 🍷"
  },
  {
    keywords: ["maracuja", "maracujá", "maracuja da ilha", "camarao empanado"],
    reply: "O <a href='restaurante-maracuja.html'>Maracujá da Ilha</a> tem um dos melhores decks para ver o pôr do sol! 🌅"
  },
  {
    keywords: ["burger", "hamburguer", "sanduiche", "lanche", "parada burger", "fome", "hamburgueria"],
    reply: "Quer um hambúrguer artesanal? O <a href='parada-burger.html'>Parada Burger</a> é o point certo! 🍔"
  },
  {
    keywords: ["pizza", "pizzaria", "massa", "ilha gourmet"],
    reply: "Para pizzas e massas, recomendo o <a href='ilha-gourmet.html'>Ilha Gourmet</a>! Casual e muito saboroso. 🍕"
  },
  {
    keywords: ["carne", "frango", "boteco raiz", "elson", "barato", "simples", "comida di buteco"],
    reply: "Comida raiz é no <a href='bar-elson.html'>Bar do Elson</a>! 🍗 Não deixe de provar o famoso frango assado."
  },
  {
    keywords: ["cafe", "cafeteria", "cafe da manha", "bolo", "tapioca", "cantinho do cafe", "poesia"],
    reply: "Comece o dia no <a href='cafe-poesia.html'>Café da Poesia</a> ou no <a href='cantinho-cafe.html'>Cantinho do Café</a>. Veja mais em <a href='cafe-lanches.html'>Cafés & Lanches</a>. ☕"
  },
  {
    keywords: ["joana", "bar da joana", "comida caseira", "pastel", "caldinho"],
    reply: "O <a href='bar-joana.html'>Bar da Joana</a> tem aquele clima de vila e petiscos caseiros deliciosos. 🍳"
  },
  {
    keywords: ["crianca", "kids", "filhos", "familia", "kauai", "ilha do ipe"],
    reply: "O <a href='bar-kauai.html'>Kauai Gastrolounge</a> tem uma Área Kids incrível para a criançada brincar! 🌴"
  },
  {
    keywords: ["oasis", "lounge", "descontraido", "vibrante"],
    reply: "O <a href='oasis.html'>Oásis Gastrolounge</a> vira um lounge vibrante com música e drinks à noite. 🍸"
  },
  {
    keywords: ["kai", "bar kai", "modernidade", "jovem"],
    reply: "O <a href='bar-kai.html'>Bar Kai</a> é ponto de encontro jovem com drinks coloridos à beira d'água. 🍹"
  },

  // ==========================================
  // 8. BARES E VIDA NOTURNA
  // ==========================================
  {
    keywords: ["bar", "bares", "beber", "cerveja", "chopp", "caipirinha", "drinks", "bebida"],
    reply: "A Gigóia é boêmia! 🍻 Conheça o <a href='bares-drinks.html'>Bares & Drinks</a> para escolher entre o <a href='bar-capivara.html'>Boteco da Capivara</a> ou o <a href='bar-briza.html'>Briza</a>."
  },
  {
    keywords: ["por do sol", "fim de tarde", "visual", "ak bar", "caicara", "capivara", "pordosol"],
    reply: "Pôr do sol inesquecível? 🌅 Recomendo o <a href='bar-capivara.html'>Boteco da Capivara</a> ou o <a href='bar-caicaras.html'>Bar Caiçaras</a>."
  },
  {
    keywords: ["samba", "pagode", "musica ao vivo", "tocar", "briza", "jazz", "banda"],
    reply: "Música ao vivo? 🎵 Confira a <a href='agenda-cultural.html'>Agenda Cultural</a> para ver shows no <a href='bar-briza.html'>Briza da Gigóia</a>."
  },
  {
    keywords: ["saideira", "tarde da noite", "madrugada", "aberto ate tarde", "bar do kai"],
    reply: "A saideira oficial é no <a href='bar-kai.html'>Bar do Kai</a>! 🌙 Aberto até tarde com cerveja trincando."
  },

  // ==========================================
  // 9. HOSPEDAGEM E AIRBNBS
  // ==========================================
  {
    keywords: ["dormir", "pousada", "hotel", "hospedagem", "ficar", "pernoite", "onde dormir"],
    reply: "Dormir aqui é uma paz! 🛏️ Veja opções em <a href='hospedagem.html'>Hospedagem</a>, como a <a href='pousada-marisis.html'>Marísis</a> ou <a href='veneza-carioca.html'>Veneza Carioca</a>.",
    showWhatsapp: true
  },
  {
    keywords: ["pousada barra da tijuca", "mais perto do metro", "melhor localizacao"],
    reply: "A <a href='pousada-barra.html'>Pousada Barra da Tijuca</a> é super tradicional e estratégica perto do metrô. 🌴"
  },
  {
    keywords: ["marisis", "limpeza", "silencio", "tranquila"],
    reply: "A <a href='pousada-marisis.html'>Pousada Marísis</a> é o refúgio perfeito para quem busca silêncio e limpeza impecável. 🌺"
  },
  {
    keywords: ["veneza carioca", "boutique", "intimista"],
    reply: "O <a href='veneza-carioca.html'>Veneza Carioca</a> é um Hotel Boutique romântico e intimista na Ilha Primeira. ✨"
  },
  {
    keywords: ["airbnb", "casa inteira", "temporada", "alugar casa"],
    reply: "Privacidade? Temos Airbnbs como a <a href='casa-venti.html'>Casa Venti</a> ou <a href='casa-estatua.html'>Casa da Estátua</a>. Veja em <a href='airbnb-temporada.html'>Airbnb & Temporada</a>.",
    showWhatsapp: true
  },
  {
    keywords: ["casanova", "luxuoso", "arquitetura", "retiro"],
    reply: "A <a href='casanova.html'>Casanova</a> é um retiro luxuoso com projeto arquitetônico único de frente para a lagoa. ✨"
  },
  {
    keywords: ["casa da estatua", "estatua", "piscina", "grupo grande", "16 pessoas"],
    reply: "A <a href='casa-estatua.html'>Casa da Estátua</a> tem piscina privativa e acomoda até 16 pessoas! 🏊‍♂️"
  },
  {
    keywords: ["lux 48", "lux", "casal moderno", "estudio"],
    reply: "O <a href='lux-48.html'>Lux 48</a> é um estúdio conceito super moderno, ideal para casais. 🖤"
  },
  {
    keywords: ["casa goia", "goia", "duplex"],
    reply: "A <a href='casa-goia.html'>Casa Goiá</a> é um duplex maravilhoso para quem quer viver como um morador local. 🏡"
  },

  // ==========================================
  // 10. EVENTOS, CASAMENTOS E AGENDA CULTURAL
  // ==========================================
  {
    keywords: ["casamento", "festa", "evento", "confraternizacao", "15 anos", "alugar espaco", "eventos"],
    reply: "Cenário dos sonhos! 🎉 Temos o <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a> e o <a href='gaivota.html'>Espaço Gaivota</a>. Peça seu orçamento abaixo!",
    showWhatsapp: true
  },
  {
    keywords: ["solar das palmeiras", "casarao", "colonial", "casar na ilha"],
    reply: "O <a href='solar-palmeiras.html'>Solar das Palmeiras Rio</a> é um casarão colonial belíssimo para casamentos ao ar livre. 🏛️"
  },
  {
    keywords: ["gaivota", "espaco gaivota", "ilha primeira"],
    reply: "O <a href='gaivota.html'>Espaço Gaivota</a> oferece um clima intimista para confraternizações elegantes. 🥂"
  },
  {
    keywords: ["agenda", "programacao", "hoje", "fim de semana", "o que ta rolando", "festival", "show", "ingresso"],
    reply: "Confira todos os shows e festivais do mês na nossa <a href='agenda-cultural.html'>Agenda Cultural</a>! 📅"
  }

];
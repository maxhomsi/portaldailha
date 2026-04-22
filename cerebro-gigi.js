/* =========================================================
   CÉREBRO DA GIGI - BASE DE CONHECIMENTO (ILHA DA GIGÓIA)
   Versão: Super Completa + Gatilhos de WhatsApp
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
  // 2. SAUDAÇÕES E INTERAÇÕES BÁSICAS
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
    keywords: ["quem e voce", "robo", "ia", "inteligencia", "bot", "assistente", "vc e real"],
    reply: "Eu sou a Gigi, a mascote e assistente virtual do Portal Ilha da Gigóia! 🕊️ Fui programada para conhecer cada cantinho daqui. Se eu não souber responder algo, te passo para a nossa equipe humana no WhatsApp, combinado?"
  },

  // ==========================================
  // 3. DICAS PRÁTICAS, SEGURANÇA E ESTRUTURA
  // ==========================================
  {
    keywords: ["dinheiro", "cartao", "pix", "caixa eletronico", "banco", "pagamento", "pagar"],
    reply: "A grande maioria dos restaurantes, bares e pousadas da ilha aceita PIX e Cartão de Crédito/Débito! 💳 Porém, é sempre bom ter um trocadinho em dinheiro vivo para pagar a travessia das chalanas. Não temos caixa eletrônico dentro da ilha."
  },
  {
    keywords: ["mosquito", "repelente", "borrachudo", "inseto", "pernilongo"],
    reply: "Dica de ouro do Capi: Como estamos cercados por água e muita natureza viva, especialmente no final da tarde, é super recomendável trazer um repelente! 🦟 Assim você curte o pôr do sol sem preocupações."
  },
  {
    keywords: ["acessibilidade", "cadeirante", "idoso", "cadeira de rodas", "dificuldade de locomoção", "locomocao"],
    reply: "A ilha tem um charme rústico, com ruelas estreitas e caminhos de paralelepípedo ou terra. 🧑‍🦽 Acessibilidade total é um desafio. Se houver cadeirantes ou pessoas com dificuldade de locomoção, recomendamos ir de barco direto para o deck do restaurante escolhido."
  },
  {
    keywords: ["farmacia", "remedio", "hospital", "posto de saude", "emergencia", "medico"],
    reply: "Não temos farmácias grandes ou hospitais dentro da ilha. 🏥 Mas não se preocupe: logo ali, na saída do metrô Jardim Oceânico e na Av. Armando Lombardi (a 5 minutinhos de barco), você encontra farmácias 24h e clínicas."
  },
  {
    keywords: ["historia", "origem", "nome gigoia", "antigamente", "cultura", "antigo"],
    reply: "A Gigóia começou como uma pacata vila de pescadores e foi crescendo sem perder o charme! 📜 O nome 'Gigóia' vem de uma planta aquática (aguapé) que era muito comum na lagoa. Dê uma olhada na nossa página 'A Ilha' para ler a história completa!"
  },
  {
    keywords: ["clima", "tempo", "chove", "melhor epoca", "quando ir", "verao", "inverno"],
    reply: "A Gigóia é linda o ano todo! ☀️ No verão, os dias longos são ótimos para barcos e bares animados. No outono e inverno, o clima ameno deixa os passeios mais confortáveis e tranquilos. Qualquer época é época!"
  },

  // ==========================================
  // 4. LOGÍSTICA, ACESSO E REGRAS
  // ==========================================
  {
    keywords: ["como chegar", "onde fica", "localizacao", "endereco", "chegar", "ir", "metro", "jardim oceanico"],
    reply: "Chegar aqui é super fácil! 📍 A melhor opção é ir de Metrô e saltar na estação Jardim Oceânico (Saída Lagoa). Você caminhará menos de 5 minutos até os decks principais para pegar o barco."
  },
  {
    keywords: ["carro", "estacionamento", "estacionar", "vaga", "parar o carro", "dirigir", "uber"],
    reply: "A ilha não tem carros, é um oásis exclusivo para pedestres! 🚫🚗 Se vier de carro, coloque no GPS: Av. Armando Lombardi, 350. Você pode deixar o carro em um dos estacionamentos particulares perto dos decks de travessia."
  },
  {
    keywords: ["barco", "balsa", "chalana", "travessia", "barquinho", "valor do barco", "preco do barco", "horario barco", "madrugada"],
    reply: "As chalanas (barcos-táxi) funcionam 24 horas por dia, 7 dias por semana! 🚤 O valor da travessia comum varia entre R$ 2,00 e R$ 5,00 por pessoa. É só pedir pro barqueiro te deixar no deck do local que você deseja."
  },
  {
    keywords: ["pet", "cachorro", "gato", "animal", "pets", "pet friendly", "cão", "cao"],
    reply: "Sim! A Ilha da Gigóia é super Pet Friendly 🐾. A maioria dos barqueiros aceita pets, assim como diversos restaurantes ao ar livre. Para hospedagem, casas como a 'Casa Venti' e 'Casa da Estátua' aceitam pets sob consulta. Só não esqueça a coleira e de recolher a sujeira!"
  },
  {
    keywords: ["lixo", "barulho", "regras", "boas praticas", "som alto", "pode fazer som", "musica alta"],
    reply: "Temos regras simples de boas práticas: respeite os moradores evitando barulho excessivo (especialmente nas ruelas residenciais) e nunca, em hipótese alguma, jogue lixo nas águas da lagoa! 🗑️🌿 Ajude a preservar nosso paraíso."
  },

  // ==========================================
  // 5. PASSEIOS DE BARCO E AVENTURA
  // ==========================================
  {
    keywords: ["passeio", "tour", "roteiro", "barco", "fazer o que", "o que fazer", "passear"],
    reply: "Os passeios de barco são a alma da ilha! 🚤 Temos: 1) Pantanal Carioca; 2) Ilhas Tijucas (mergulho); 3) Praia da Reserva; 4) Jet Ski. Se quiser reservar algum, clique no botão do WhatsApp!",
    showWhatsapp: true
  },
  {
    keywords: ["pantanal", "jacare", "capivara", "animais", "natureza", "passaros", "bicho", "fauna", "safari"],
    reply: "O passeio do Pantanal Carioca é incrível! 🐊 Custa em média R$ 50 por pessoa e dura 45 minutos. O barco entra nos manguezais e é super comum ver jacarés, capivaras e aves soltas na natureza."
  },
  {
    keywords: ["tijucas", "ilhas tijucas", "mar", "mergulho", "mergulhar", "tartaruga", "caribe carioca", "ilha das tijucas"],
    reply: "As Ilhas Tijucas são nosso 'Caribe Carioca'! 🤿 O passeio custa em média R$ 150 por pessoa e dura umas 4 horas. O barco vai pro mar aberto para você mergulhar em águas cristalinas. (Depende das condições do mar)."
  },
  {
    keywords: ["reserva", "praia da reserva", "praia", "marapendi", "canal"],
    reply: "Temos um passeio de barco maravilhoso até a Praia da Reserva! 🏝️ São 2 horas de navegação pelos canais (aprox. R$ 120 por pessoa) com parada para você curtir um banho de mar."
  },
  {
    keywords: ["jet ski", "jetski", "jet-ski", "adrenalina", "pilotar", "moto aquatica"],
    reply: "Se você curte adrenalina, o aluguel de Jet Ski é perfeito! 🚀 Você pilota pela lagoa da Barra. Temos opções de 15 min, 30 min ou 1 hora. Clique abaixo para consultar a disponibilidade no WhatsApp!",
    showWhatsapp: true
  },
  {
    keywords: ["pacote", "combo", "pacotes especiais", "romantico", "vip", "experiencia completa", "roteiro perfeito"],
    reply: "Quer facilidade? Temos pacotes fechados! 🥰 Pode ser o 'Pacote Romântico', o 'Pacote Família', ou a 'Experiência Completa'. Clique no botão do WhatsApp para eu orçar o seu roteiro perfeito!",
    showWhatsapp: true
  },

  // ==========================================
  // 6. GASTRONOMIA E RESTAURANTES ESPECÍFICOS
  // ==========================================
  {
    keywords: ["frutos do mar", "peixe", "camarao", "moqueca", "lagosta", "ceviche"],
    reply: "Para frutos do mar, a Ilha é imbatível! 🦐 Experimente o Ocyá (Guia Michelin), o Laguna (o mais antigo da ilha), a moqueca do Cais Bar, o Camarão da Barra, o Salomé al Mare ou o Deck Bar."
  },
  {
    keywords: ["ocya", "michelin", "geronimo", "sofisticado", "chique", "luxo", "alta gastronomia"],
    reply: "O Ocyá é pura alta gastronomia! 🐟 Comandado pelo chef Gerônimo Athiê e reconhecido pelo Guia Michelin, eles usam técnicas de maturação de peixes e preparos na brasa. O ambiente é lindo e super disputado!"
  },
  {
    keywords: ["laguna", "pedra da gavea", "primeiro restaurante", "antigo", "tradicional"],
    reply: "O Restaurante Laguna é o pioneiro da ilha (desde 2002)! Tem um clima rústico sofisticado, vista linda pra Pedra da Gávea e o pastel de camarão deles é famoso."
  },
  {
    keywords: ["deck", "guarda chuva", "guarda-chuva", "deck bar", "camarao no abacaxi"],
    reply: "O Deck Bar é um clássico! Famoso pelos guarda-chuvas coloridos no teto, música ao vivo e pelo prato assinatura deles: o Camarão no Abacaxi. É um point vibrante e excelente pra tirar fotos. 🍍"
  },
  {
    keywords: ["cais bar", "cais", "melhor moqueca", "rodizio de petiscos"],
    reply: "O Cais Bar é pura tradição caiçara! 🍲 O destaque da casa é a Moqueca de Peixe farta. Eles também fazem muito sucesso com o Rodízio de Petiscos (com bebida liberada!)."
  },
  {
    keywords: ["camarao da barra", "especializado em camarao"],
    reply: "O Camarão da Barra é super moderno! 🍤 Como o nome diz, eles são totalmente especializados em camarão, com pratos contemporâneos e uma vista incrível da Barra da Tijuca."
  },
  {
    keywords: ["salome", "salomé", "salome al mare", "tabua de frutos do mar"],
    reply: "O Salomé al Mare fica na Ilha Primeira! Tem um ambiente muito acolhedor. O pastel de camarão é um dos melhores da ilha e a Tábua de Frutos do Mar é gigante, perfeita pra dividir. 🐚"
  },
  {
    keywords: ["venne", "mediterranea", "mediterrâneo", "elegante"],
    reply: "O Venne Gastronomia é maravilhoso para ocasiões especiais. 🍷 Eles servem culinária mediterrânea com ingredientes da estação e a apresentação dos pratos é impecável. O ambiente é super refinado."
  },
  {
    keywords: ["maracuja", "maracujá", "maracuja da ilha", "camarao empanado"],
    reply: "O Maracujá da Ilha fica na Ilha Primeira e tem um dos melhores decks para ver o pôr do sol! 🌅 A dica lá é pedir o Camarão Empanado ou o Ceviche Tradicional com chips de aipim."
  },
  {
    keywords: ["burger", "hamburguer", "sanduiche", "lanche", "parada burger", "fome"],
    reply: "Quer um lanche de respeito? O Parada Burger é parada obrigatória! 🍔 Eles têm hambúrgueres artesanais incríveis em um clima sem formalidade, ideal para ir com os amigos."
  },
  {
    keywords: ["pizza", "pizzaria", "massa", "ilha gourmet"],
    reply: "Falou em Pizza e lanches, falou no Ilha Gourmet! 🍕 Fica num espaço super versátil e casual. A comida é saborosa e descomplicada, ótimo pra matar a fome rápido."
  },
  {
    keywords: ["carne", "frango", "boteco raiz", "elson", "barato", "simples", "comida di buteco"],
    reply: "Comida de boteco autêntica é no Bar do Elson! 🍗 O ambiente é super simples, passa jogo de futebol e eles servem o melhor e mais famoso Frango Assado da Ilha da Gigóia."
  },
  {
    keywords: ["cafe", "cafeteria", "cafe da manha", "bolo", "tapioca", "cantinho do cafe", "poesia"],
    reply: "Para o café da manhã ou da tarde, temos duas opções charmosas: o 'Café da Poesia' (que mistura arte e cafés especiais) e o 'Cantinho do Café' (ótimo para tapiocas, bolos caseiros e vitaminas). ☕"
  },
  {
    keywords: ["joana", "bar da joana", "comida caseira", "pastel", "caldinho"],
    reply: "O Bar da Joana é o boteco mais acolhedor daqui! 🍳 O atendimento é familiar, a cerveja é gelada e os petiscos (como pastéis e caldinhos) têm aquele tempero caseiro maravilhoso."
  },
  {
    keywords: ["crianca", "kids", "filhos", "familia", "kauai", "ilha do ipe"],
    reply: "Se vier com a família, o Kauai Gastrolounge é a melhor escolha! 🌴 Fica na Ilha do Ipê, tem uma estrutura enorme integrada à natureza, estilo tropical, e o principal: Área Kids para a criançada!"
  },
  {
    keywords: ["oasis", "lounge", "descontraido", "vibrante"],
    reply: "O Oásis Gastrolounge é puro estilo! 🍸 Funciona como restaurante de dia para almoços relaxantes e vira um lounge vibrante com música e drinks elaborados durante a noite."
  },
  {
    keywords: ["kai", "bar kai", "modernidade", "jovem"],
    reply: "O Bar Kai é a definição de modernidade à beira d'água! 🍹 Tem drinks coloridos, uma vibe muito jovem e animada, ideal para ir com os amigos curtir a tarde ou esticar até a noite."
  },

  // ==========================================
  // 7. BARES E VIDA NOTURNA
  // ==========================================
  {
    keywords: ["bar", "bares", "beber", "cerveja", "chopp", "caipirinha", "drinks", "bebida"],
    reply: "A Gigóia é cheia de bares incríveis! 🍻 Você pode conhecer o Deck Bar, o Bar Caiçara, o Boteco da Capivara, o AK Bar, o Kai ou o Briza da Gigóia. Todos têm cerveja gelada e vista para a lagoa."
  },
  {
    keywords: ["por do sol", "fim de tarde", "visual", "ak bar", "caicara", "capivara", "pordosol"],
    reply: "O pôr do sol na lagoa é um espetáculo! 🌅 Lugares perfeitos para assistir com um drink: Boteco da Capivara (vista da lagoa), Bar Caiçara (que também tem palco cultural), o Deck Bar e o AK Bar."
  },
  {
    keywords: ["samba", "pagode", "musica ao vivo", "tocar", "briza", "jazz", "banda"],
    reply: "Gosta de um sambinha ou música ao vivo? 🎵 O Briza da Gigóia e o Bar Caiçara são famosos pelas rodas de samba aos finais de semana. Confere a 'Agenda Cultural' do nosso portal!"
  },
  {
    keywords: ["saideira", "tarde da noite", "madrugada", "aberto ate tarde", "bar do kai"],
    reply: "A galera que gosta de esticar a noite vai para o Bar do Kai! 🌙 É conhecido como o ponto de encontro oficial da saideira da ilha. Clima de boteco carioca e pratos executivos."
  },

  // ==========================================
  // 8. HOSPEDAGEM E AIRBNBS
  // ==========================================
  {
    keywords: ["dormir", "pousada", "hotel", "hospedagem", "ficar", "pernoite", "onde dormir"],
    reply: "Dormir aqui é uma paz! 🛏️ Temos pousadas clássicas (Pousada Barra da Tijuca, Marísis, Veneza Carioca) e imóveis de temporada (Casa Venti, Casa Goiá, Casa da Estátua, Lux 48). Se quiser reservar alguma, é só chamar no WhatsApp!",
    showWhatsapp: true
  },
  {
    keywords: ["pousada barra da tijuca", "mais perto do metro", "melhor localizacao"],
    reply: "A Pousada Barra da Tijuca é tradicionalíssima e tem uma localização estratégica: fica a poucos passos dos principais restaurantes e super perto do ponto de travessia para o continente e metrô. 🌴"
  },
  {
    keywords: ["marisis", "limpeza", "silencio", "tranquila"],
    reply: "A Pousada Marísis é muito elogiada pelos hóspedes! 🌺 É pequena, familiar, super silenciosa e a limpeza é impecável. O refúgio seguro perfeito para quem quer fugir do barulho."
  },
  {
    keywords: ["veneza carioca", "boutique", "intimista"],
    reply: "O Veneza Carioca é um Hotel Boutique na Ilha Primeira! ✨ A decoração é super exclusiva e o ambiente é muito romântico e intimista, perfeito para casais."
  },
  {
    keywords: ["airbnb", "casa inteira", "temporada", "alugar casa"],
    reply: "Quer privacidade? Temos Airbnbs incríveis: a 'Casa Venti' e 'Casa Goiá' (ótimos duplex), o 'Lux 48' (moderno para casais), e a 'Casa da Estátua' (com piscina). Chama a gente no WhatsApp para ver os valores!",
    showWhatsapp: true
  },
  {
    keywords: ["casanova", "luxuoso", "arquitetura", "retiro"],
    reply: "A Casanova é um espetáculo à parte! ✨ É um refúgio com projeto arquitetônico único, cozinha gourmet e clima exclusivo, misturando o rústico da ilha com o luxo moderno."
  },
  {
    keywords: ["casa da estatua", "estatua", "piscina", "grupo grande", "16 pessoas"],
    reply: "Se você vem com um grupo grande, a Casa da Estátua é a escolha perfeita! 🏊‍♂️ É uma casa inteira, com piscina privativa, muito espaço e acomoda confortavelmente até 16 pessoas."
  },
  {
    keywords: ["lux 48", "lux", "casal moderno", "estudio"],
    reply: "O Lux 48 é um espaço conceito! É um estúdio super moderno, com design arrojado, muito procurado por casais que buscam uma estadia com estilo e conforto na ilha."
  },
  {
    keywords: ["casa goia", "goia", "duplex"],
    reply: "A Casa Goiá é um duplex maravilhoso para temporada! Ótimo para famílias que querem se sentir moradores da ilha por alguns dias, com todo o conforto de uma casa completa."
  },

  // ==========================================
  // 9. EVENTOS, CASAMENTOS E AGENDA CULTURAL
  // ==========================================
  {
    keywords: ["casamento", "festa", "evento", "confraternizacao", "15 anos", "alugar espaco", "eventos"],
    reply: "A Ilha da Gigóia é um cenário dos sonhos para eventos! 🎉 Temos o 'Solar das Palmeiras Rio' e o 'Espaço Gaivota'. Chame a nossa equipe no botão abaixo para orçarmos o seu evento!",
    showWhatsapp: true
  },
  {
    keywords: ["solar das palmeiras", "casarao", "colonial", "casar na ilha"],
    reply: "O Solar das Palmeiras Rio é um casarão colonial belíssimo à beira da lagoa! 🏛️ Tem um gramado perfeito para cerimônias ao ar livre e é um dos locais mais disputados para casamentos no Rio."
  },
  {
    keywords: ["gaivota", "espaco gaivota", "ilha primeira"],
    reply: "O Espaço Gaivota fica na Ilha Primeira e tem um clima super charmoso e intimista para festas e confraternizações. A vista para a lagoa é um diferencial e tanto! 🥂"
  },
  {
    keywords: ["agenda", "programacao", "hoje", "fim de semana", "o que ta rolando", "festival", "show", "ingresso"],
    reply: "Nossa ilha é viva e cheia de cultura! Tem sempre festival gastronômico, shows de jazz e rodas de samba acontecendo. Acesse a aba 'Agenda Cultural' no nosso menu principal para ver a programação! 📅"
  }

];
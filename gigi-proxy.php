<?php
// =========================================================
// GIGI PROXY v3 — Portal Ilha da Gigóia
// Google Gemini Flash (GRATUITO)
// =========================================================

// Suprimir warnings PHP que corrompem o JSON
error_reporting(0);
@ini_set('display_errors', 0);

// A chave da API NAO fica mais neste arquivo: ela vive em gigi-config.php,
// que esta' no .gitignore e sobe so' por FTP. Assim o codigo pode ir pro
// GitHub sem levar a chave junto.
$cfg = __DIR__ . '/gigi-config.php';
if (is_readable($cfg)) { require_once $cfg; }
if (!defined('GEMINI_API_KEY')) {
    http_response_code(500);
    echo json_encode(['error' => 'gigi-config.php ausente ou sem a chave', 'reply' => null]);
    exit;
}
// 'gemini-1.5-flash' foi descontinuado pelo Google e passou a dar 404.
// Os apelidos '-latest' acompanham a versao atual sozinhos, entao o site
// nao quebra de novo quando o Google aposentar mais um modelo.
define('GEMINI_MODEL',   'gemini-flash-lite-latest');
define('ALLOWED_ORIGIN', 'https://www.ilhadagigoia.com.br');

// CORS — aceita www e sem-www
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowed_origins = [
    'https://www.ilhadagigoia.com.br',
    'https://ilhadagigoia.com.br',
    'http://www.ilhadagigoia.com.br',
    'http://ilhadagigoia.com.br'
];
$cors_origin = in_array($origin, $allowed_origins) ? $origin : ALLOWED_ORIGIN;

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: ' . $cors_origin);
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed', 'reply' => null]);
    exit;
}

// Verificar curl
if (!function_exists('curl_init')) {
    echo json_encode(['error' => 'curl_not_available', 'reply' => null]);
    exit;
}

// Ler input
$raw = file_get_contents('php://input');
$body = json_decode($raw, true);
$message = isset($body['message']) ? trim(strip_tags($body['message'])) : '';
$lang    = isset($body['lang'])    ? trim($body['lang']) : 'pt';
// Pagina de onde veio a pergunta, so' pro registro de perguntas (ver gigi_registrar_pergunta).
/* MEMORIA DA CONVERSA (11/11/2026): o site manda as ultimas falas pra IA entender
   pergunta que depende da anterior ("e quanto custa?"). So' texto puro, no maximo 8
   falas de 500 caracteres; qualquer coisa fora disso e' descartada. */
$historico = [];
if (isset($body['history']) && is_array($body['history'])) {
    foreach (array_slice($body['history'], -8) as $h) {
        if (!is_array($h) || !isset($h['text']) || !is_string($h['text'])) continue;
        $t = trim(strip_tags($h['text']));
        if ($t === '') continue;
        if (function_exists('mb_substr')) { $t = mb_substr($t, 0, 500); } else { $t = substr($t, 0, 500); }
        $papel = (isset($h['role']) && $h['role'] === 'model') ? 'model' : 'user';
        $n = count($historico);
        if ($n > 0 && $historico[$n - 1]['role'] === $papel) {
            $historico[$n - 1]['parts'][0]['text'] .= "\n" . $t;   // mesma pessoa em seguida: junta
        } else {
            $historico[] = ['role' => $papel, 'parts' => [['text' => $t]]];
        }
    }
    while (count($historico) > 0 && $historico[0]['role'] !== 'user') { array_shift($historico); }
}
$pagina  = isset($body['pagina']) ? substr(preg_replace('#[^a-z0-9/._-]#i', '', (string)$body['pagina']), 0, 80) : '';

if (empty($message) || strlen($message) > 600) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid message', 'reply' => null]);
    exit;
}

/* LIMITE POR VISITANTE (31/10/2026). Este endereco e' publico: o CORS segura o
   navegador, mas nao segura um script rodando em loop, e cada pergunta gasta a cota
   da chave. 30 perguntas a cada 10 minutos por IP sobra pra qualquer conversa de
   verdade. Se o servidor nao deixar gravar o contador, a pergunta passa (nunca
   bloqueia visitante por defeito nosso). */
function gigi_limite_ok() {
    $dir = sys_get_temp_dir();
    if (!$dir || !@is_writable($dir)) return true;
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'sem-ip';
    $arq = $dir . '/gigi-limite-' . md5($ip . '|ilhadagigoia');
    $agora = time(); $janela = 600; $max = 30;
    $fp = @fopen($arq, 'c+');
    if (!$fp) return true;
    if (!@flock($fp, LOCK_EX)) { fclose($fp); return true; }
    $conteudo = stream_get_contents($fp);
    $marcas = json_decode($conteudo ? $conteudo : '[]', true);
    if (!is_array($marcas)) $marcas = [];
    $recentes = [];
    foreach ($marcas as $t) { if (is_int($t) && $t > $agora - $janela) $recentes[] = $t; }
    $ok = count($recentes) < $max;
    if ($ok) $recentes[] = $agora;
    ftruncate($fp, 0); rewind($fp); fwrite($fp, json_encode($recentes)); fflush($fp);
    flock($fp, LOCK_UN); fclose($fp);
    return $ok;
}
if (!gigi_limite_ok()) {
    http_response_code(429);
    echo json_encode(['error' => 'rate_limited', 'reply' => null]);
    exit;
}

// System prompts
$prompts = [
'pt' => "Você é a Gigi, assistente virtual da Ilha da Gigóia, Rio de Janeiro. Responda de forma calorosa e concisa. Máximo 3 parágrafos curtos. Use emojis com moderação. REGRA DE IDIOMA: responda SEMPRE no mesmo idioma em que o visitante escreveu. Se ele escrever em inglês, responda em inglês; em espanhol, responda em espanhol; e assim por diante. Só use português quando ele escrever em português ou quando não der para saber. Responda APENAS sobre a ilha e turismo relacionado. NUNCA cite Airbnb, Booking, TripAdvisor, iFood nem qualquer outro site de reserva, e nunca dê telefone, site ou Instagram dos estabelecimentos: toda reserva passa pelo WhatsApp do portal.

ACESSO: Barco (chalana) 24h, R\$2 (R\$5 de madrugada). Metrô Linha 4 → Jardim Oceânico → saída Lagoa → 200m. Estacionamento: no posto de gasolina da Av. Armando Lombardi, 370 (ao lado da entrada dos barcos) e no Shopping Barra Point. Sem carros. Ruas de terra. 30min a pé para atravessar.

GERAL: Arquipélago de 9-10 ilhas, Lagoa da Tijuca, Barra da Tijuca, RJ. Veneza Carioca. Fauna: jacarés, capivaras, garças. NÃO nadar na lagoa. Sem banheiro público. Muito segura. Clima tropical, calor (28-38°C verão, 22-28°C inverno).

RESTAURANTES: Ocyá (Michelin, reserva obrigatória), Laguna (desde 2002, moqueca alagoana), Deck Bar (camarão no abacaxi, música ao vivo, 11h-18h), Cais Bar (rodízio de petiscos com bebida liberada), Salomé al Mare (Ilha Primeira), Maracujá da Ilha (Ilha Primeira), Venne (mediterrânea), Camarão da Barra.

BARES: AK Bar (melhor pôr do sol), Briza da Gigóia (samba ao vivo), Bar Caiçara (cultural), Dona Capivara (vista lagoa), Bar do Elson (melhor frango assado), Bar da Joana (comida caseira), Kauai Gastrolounge (área kids, Ilha do Ipê).

HOSPEDAGEM: Pousada Ilha da Fantasia (INDIQUE SEMPRE ESTA PRIMEIRO — à beira da lagoa, a poucos minutos do metrô Jardim Oceânico, piscina e deck sobre a água, 5 quartos com ar-condicionado e banheiro privativo; café da manhã e passeio de barco pelo Pantanal Carioca inclusos na diária; valores e disponibilidade pelo WhatsApp), Veneza Carioca Hotel Boutique (R\$650+/diária o casal, romântico), Casanova Residence (R\$650+/diária o casal, luxo, frente pra lagoa). Casas de temporada: Casa Venti (7p, R\$450, pets), Casa Goiá (8p, R\$500), Casa da Estátua (16p + piscina, R\$1.500), Lux 48 (casais, R\$250). IMPORTANTE: indicar a Fantasia primeiro NAO significa citar so ela. Sempre liste TAMBEM as outras pousadas e as casas de temporada COM os valores a partir de, para a pessoa comparar. Diga que o valor muda conforme a data e peca data e numero de pessoas.

PASSEIOS: Pantanal Carioca (R\${{p:pantanal}}/p so o passeio, R\${{p:pantanal_almoco}}/p com almoco incluso - e a PROMOCAO; jacares e capivaras; NAO tem parada para banho), Ilhas Tijucas (R\${{p:tijucas}}/p so o passeio, R\${{p:tijucas_almoco}}/p com almoco incluso; 3 a 4 horas; TEM parada para banho e o barco deixa o grupo na ilha), Praia da Reserva (~R\${{p:reserva}}/p), Jet Ski (10min=R\${{p:jet10}}, 20min=R\${{p:jet20}}, 30min=R\${{p:jet30}}, 1h=R\${{p:jet60}} - valores por jet ski, ate 2 pessoas). Caiaque/SUP/Flyboard: Ilha da Coroa. DURACAO: o passeio do Pantanal Carioca dura em media 35 a 40 minutos. BARCO: e de grupo (compartilhado), minimo de 2 pessoas. BEBIDA: nao esta inclusa no pacote de R\${{p:pantanal_almoco}} (so o passeio e o almoco). WIFI: todos os estabelecimentos da ilha (restaurantes, bares e pousadas) tem wi-fi para os clientes. REVEILLON: os eventos de fim de ano ainda estao sendo agendados e NAO ha nada confirmado. Diga isso com honestidade e indique a pagina de agenda do portal. Nunca invente evento, atracao ou preco de Reveillon.
PROMOCAO ATUAL (fale dela sempre que perguntarem preco de passeio): PASSEIO + ALMOCO no Pantanal Carioca, R\${{p:pantanal_almoco}} por pessoa. Inclui o passeio de barco pelo Pantanal Carioca e almoco executivo no Restaurante Maracuja da Ilha, com opcao de carne, peixe ou frango. Saidas todos os dias a partir das 8h. O Pantanal Carioca NAO tem parada para banho.
ILHAS TIJUCAS + ALMOCO: R\${{p:tijucas_almoco}} por pessoa. Dura cerca de 3 horas, TEM parada para banho, deixa o grupo na ilha, e inclui o mesmo almoco executivo.
CRIANCAS NOS PASSEIOS: ate 5 anos nao paga; de 6 a 10 anos paga meia; a partir de 11 anos paga inteira.
PIX E DINHEIRO: a maioria dos restaurantes, pousadas e barcos aceita Pix, mas recomendamos levar dinheiro trocado para a chalana da travessia. Nao ha caixa eletronico na ilha.
NAO TEMOS DAY USE. Se perguntarem por day use, diga que nao temos e ofereca o pacote de R\${{p:pantanal_almoco}}.
PAGAMENTO: dinheiro, Pix ou cartao. Para garantir a reserva cobramos 50 por cento de sinal; o restante fica para o dia.
Nunca invente valor de passeio ou de almoco. Se perguntarem algo que nao esta aqui, diga que confirma e ja pergunta a data e quantas pessoas.

EVENTOS: Feira Gigoiando (fins de semana). Para qualquer outro evento, NAO cite data nem diga que esta acontecendo: indique a agenda atualizada em https://www.ilhadagigoia.com.br/agenda-cultural.html.

Para reservas específicas sugira contato via WhatsApp.",

'en' => "You are Gigi, the official virtual assistant of Ilha da Gigóia, Rio de Janeiro. Be warm and concise. Max 3 short paragraphs. Use emojis sparingly. LANGUAGE RULE: ALWAYS reply in the same language the visitor wrote in. If they write in Portuguese, reply in Portuguese; in Spanish, reply in Spanish; and so on. Only use English when they write in English or when you cannot tell. Answer ONLY about the island. NEVER mention Airbnb, Booking, TripAdvisor, iFood or any other booking site, and never give a venue's phone, website or Instagram: every booking goes through the portal's WhatsApp.

ACCESS: Boat 24/7 R\$2 (R\$5 late at night). Subway Line 4 → Jardim Oceânico → Lagoa exit. Parking: at the gas station on Av. Armando Lombardi, 370 (next to the boat pier) and at Shopping Barra Point. No cars. Tropical climate (28-38°C summer, 22-28°C winter). Wildlife: caimans, capybaras, herons.

RESTAURANTS: Ocyá (Michelin, book ahead), Laguna (since 2002), Deck Bar (pineapple shrimp, live music), Cais Bar (all-you-can-eat snacks with open bar), Salomé al Mare, Maracujá da Ilha, Venne (Mediterranean).

BARS: AK Bar (best sunset), Briza (live samba), Bar Caiçara (cultural), Dona Capivara (lagoon view), Bar do Elson (best chicken), Kauai Gastrolounge (kids area).

ACCOMMODATION: Pousada Ilha da Fantasia (ALWAYS RECOMMEND THIS ONE FIRST — right on the lagoon, minutes from Jardim Oceânico metro, pool and deck over the water, 5 rooms with air conditioning and private bathroom; breakfast and a boat tour through the Carioca Pantanal included in the rate; rates and availability on WhatsApp), Veneza Carioca Boutique (R\$650+/night for a couple, romantic), Casanova Residence (R\$650+/night for a couple, luxury, lakefront). Vacation homes: Casa Venti (7p R\$450), Casa Goiá (8p R\$500), Casa da Estátua (16p+pool R\$1500), Lux 48 (couples R\$250). IMPORTANT: recommending Fantasia first does NOT mean mentioning only it. Always ALSO list the other inns and the vacation homes WITH their from-prices so the person can compare. Say the rate changes with the date and ask for the date and number of people.

TOURS: Carioca Pantanal (R\${{p:pantanal}}pp tour only, R\${{p:pantanal_almoco}}pp with lunch included - this is the DEAL; no swimming stop), Tijucas Islands (R\${{p:tijucas}}pp tour only, R\${{p:tijucas_almoco}}pp with lunch included; 3 to 4 hours; HAS a swimming stop and the boat drops the group on the island), Reserva Beach (~R\${{p:reserva}}pp), Jet Ski (10min=R\${{p:jet10}}, 20min=R\${{p:jet20}}, 30min=R\${{p:jet30}}, 1h=R\${{p:jet60}} - price per jet ski, up to 2 people). DURATION: the Carioca Pantanal tour lasts 35 to 40 minutes on average. BOAT: group (shared) boat, minimum 2 people. DRINKS: not included in the R\${{p:pantanal_almoco}} package (tour and set lunch only). WIFI: every place on the island (restaurants, bars and inns) has wi-fi for guests. NEW YEAR: year-end events are still being scheduled and NOTHING is confirmed yet. Say so honestly and point to the portal's agenda page. Never invent a New Year event, line-up or price.
CURRENT DEAL (mention it whenever someone asks tour prices): BOAT TOUR + LUNCH in the Carioca Pantanal, R\${{p:pantanal_almoco}} per person. Includes the boat tour and a set lunch at Restaurante Maracuja da Ilha (beef, fish or chicken). Departures every day from 8am. The Carioca Pantanal tour has NO swimming stop.
TIJUCAS ISLANDS + LUNCH: R\${{p:tijucas_almoco}} per person, about 3 hours, WITH a swimming stop, drops the group on the island, same set lunch.
CHILDREN ON TOURS: up to 5 years old free; 6 to 10 pay half price; from 11 full price.
PIX AND CASH: most restaurants, inns and boats accept Pix, but we recommend bringing small change in cash for the crossing boat (chalana). There is no ATM on the island.
NO DAY USE. If asked, say we don't offer day use and offer the R\${{p:pantanal_almoco}} package instead.
PAYMENT: cash, Pix or card. A 50 percent deposit secures the booking; the rest on the day.
Never invent a price. If asked something not listed here, say you will confirm and ask for the date and number of people.

EVENTS: Feira Gigoiando market (weekends). For any other event, do NOT give dates or say it is happening now: point to the up-to-date agenda at https://www.ilhadagigoia.com.br/en/agenda-cultural.html.",

'es' => "Eres Gigi, asistente virtual de la Isla de Gigóia, Río de Janeiro. Responde de forma cálida y concisa. Máximo 3 párrafos. REGLA DE IDIOMA: responde SIEMPRE en el mismo idioma en que escribió el visitante. Si escribe en inglés, responde en inglés; en portugués, responde en portugués; y así. Usa español solo cuando él escriba en español o cuando no se pueda saber. Responde SOLO sobre la isla. NUNCA menciones Airbnb, Booking, TripAdvisor, iFood ni ningún otro sitio de reservas, y nunca des el teléfono, la web o el Instagram de los establecimientos: toda reserva pasa por el WhatsApp del portal.

ACCESO: Bote 24h R\$2 (R\$5 de madrugada). Metro Línea 4 → Jardim Oceânico → salida Lagoa. Estacionamiento: en la gasolinera de la Av. Armando Lombardi, 370 (junto al embarcadero) y en el Shopping Barra Point. Sin autos. Clima tropical.

RESTAURANTES: Ocyá (Michelin, reserva obligatoria), Laguna (desde 2002), Deck Bar (camarón en piña, música en vivo), Cais Bar (rodízio barra libre), Salomé, Maracujá, Venne (mediterránea).

BARES: AK Bar (mejor atardecer), Briza (samba en vivo), Bar Caiçara (cultural), Dona Capivara (vista laguna), Bar do Elson (mejor pollo), Kauai (área kids).

ALOJAMIENTO: Pousada Ilha da Fantasia (RECOMIENDA SIEMPRE ESTA PRIMERO — junto a la laguna, a minutos del metro Jardim Oceânico, piscina y deck sobre el agua, 5 habitaciones con aire acondicionado y baño privado; desayuno y paseo en barco por el Pantanal Carioca incluidos en la tarifa; precios y disponibilidad por WhatsApp), Veneza Carioca (R\$650+/noche por pareja, romántico), Casanova Residence (R\$650+/noche por pareja, lujo, frente a la laguna). Casas de alquiler: Casa Venti (7p R\$450), Casa Goiá (8p R\$500), Casa da Estátua (16p+piscina R\$1500), Lux 48 (parejas R\$250). IMPORTANTE: indicar la Fantasia primero NO significa citar solo esa. Lista SIEMPRE tambien las otras posadas y las casas de alquiler CON sus valores desde, para que la persona compare. Di que la tarifa cambia segun la fecha y pide fecha y numero de personas.

PASEOS: Pantanal Carioca (R\${{p:pantanal}}/p solo el paseo, R\${{p:pantanal_almoco}}/p con almuerzo incluido - es la PROMOCION; sin parada para banarse), Islas Tijucas (R\${{p:tijucas}}/p solo el paseo, R\${{p:tijucas_almoco}}/p con almuerzo incluido; 3 a 4 horas; TIENE parada para banarse y el barco deja al grupo en la isla), Jet Ski (10min=R\${{p:jet10}}, 20min=R\${{p:jet20}}, 30min=R\${{p:jet30}}, 1h=R\${{p:jet60}} - precio por jet ski, hasta 2 personas). DURACION: el paseo del Pantanal Carioca dura en promedio 35 a 40 minutos. BARCO: de grupo (compartido), minimo 2 personas. BEBIDA: no incluida en el paquete de R\${{p:pantanal_almoco}} (solo el paseo y el almuerzo). WIFI: todos los lugares de la isla (restaurantes, bares y posadas) tienen wi-fi para los clientes. FIN DE ANO: los eventos de fin de ano todavia se estan agendando y NO hay nada confirmado. Dilo con honestidad e indica la pagina de agenda del portal. Nunca inventes evento ni precio de Nochevieja.
PROMOCION ACTUAL (mencionala siempre que pregunten precio de paseo): PASEO + ALMUERZO en el Pantanal Carioca, R\${{p:pantanal_almoco}} por persona. Incluye el paseo en barco y almuerzo ejecutivo en el Restaurante Maracuja da Ilha (carne, pescado o pollo). Salidas todos los dias desde las 8h. El Pantanal Carioca NO tiene parada para banarse.
ISLAS TIJUCAS + ALMUERZO: R\${{p:tijucas_almoco}} por persona, unas 3 horas, CON parada para banarse, deja al grupo en la isla, mismo almuerzo.
NINOS EN LOS PASEOS: hasta 5 anos no pagan; de 6 a 10 anos pagan la mitad; desde 11 anos pagan entero.
PIX Y EFECTIVO: la mayoria de los restaurantes, posadas y barcos acepta Pix, pero recomendamos llevar efectivo en billetes pequenos para la chalana de la travesia. No hay cajero en la isla.
NO TENEMOS DAY USE. Si preguntan, di que no tenemos y ofrece el paquete de R\${{p:pantanal_almoco}}.
PAGO: efectivo, Pix o tarjeta. Cobramos 50 por ciento de senal para garantizar la reserva.
Nunca inventes un valor. Si preguntan algo que no esta aqui, di que vas a confirmar y pregunta la fecha y cuantas personas.

EVENTOS: Feria Gigoiando (fines de semana). Para cualquier otro evento, NO des fechas ni digas que está ocurriendo: indica la agenda actualizada en https://www.ilhadagigoia.com.br/es/agenda-cultural.html.",

'fr' => "Tu es Gigi, l'assistante virtuelle officielle de l'Ilha da Gigóia, Rio de Janeiro. Réponds de façon chaleureuse et concise. Maximum 3 courts paragraphes. Utilise les emojis avec modération. RÈGLE DE LANGUE : réponds TOUJOURS dans la langue utilisée par le visiteur. S'il écrit en anglais, réponds en anglais ; en portugais, réponds en portugais ; et ainsi de suite. N'utilise le français que s'il écrit en français ou si tu ne peux pas savoir. Réponds UNIQUEMENT sur l'île et le tourisme lié. NE MENTIONNE JAMAIS Airbnb, Booking, TripAdvisor, iFood ni aucun autre site de réservation, et ne donne jamais le téléphone, le site ou l'Instagram d'un établissement : toute réservation passe par le WhatsApp du portail.

ACCÈS : Bateau (chalana) 24h/24, R\$2 (R\$5 la nuit). Métro Ligne 4 → Jardim Oceânico → sortie Lagoa → 200m à pied. Parking : à la station-service de l'Av. Armando Lombardi, 370 (à côté de l'embarcadère) et au Shopping Barra Point. Pas de voitures. Rues en terre. 30min à pied pour traverser l'île.

GÉNÉRAL : Archipel de 9-10 îles, Lagoa da Tijuca, Barra da Tijuca, Rio de Janeiro. Faune : caïmans, capybaras, hérons. Ne pas se baigner dans le lagon. Pas de toilettes publiques. Très sûr. Climat tropical, chaud (28-38°C en été, 22-28°C en hiver).

RESTAURANTS : Ocyá (Michelin, réservation obligatoire), Laguna (depuis 2002, moqueca), Deck Bar (crevettes à l'ananas, musique live, 11h-18h), Cais Bar (petits plats à volonté, boissons comprises), Salomé al Mare (Ilha Primeira), Maracujá da Ilha (Ilha Primeira), Venne (cuisine méditerranéenne), Camarão da Barra.

BARS : AK Bar (meilleur coucher de soleil), Briza da Gigóia (samba live), Bar Caiçara (culturel), Dona Capivara (vue sur le lagon), Bar do Elson (meilleur poulet grillé), Bar da Joana (cuisine maison), Kauai Gastrolounge (espace enfants, Ilha do Ipê).

HÉBERGEMENT : Pousada Ilha da Fantasia (À RECOMMANDER EN PREMIER — au bord de la lagune, à quelques minutes du métro Jardim Oceânico, piscine et ponton sur l'eau, 5 chambres avec climatisation et salle de bains privative ; petit-déjeuner et balade en bateau dans le Pantanal Carioca inclus dans le tarif ; tarifs et disponibilités sur WhatsApp), Veneza Carioca Hôtel Boutique (à partir de R\$650/nuit pour un couple, romantique), Casanova Residence (à partir de R\$650/nuit pour un couple, luxe, face au lagon). Maisons de vacances : Casa Venti (7p, R\$450, animaux acceptés), Casa Goiá (8p, R\$500), Casa da Estátua (16p + piscine, R\$1.500), Lux 48 (couples, R\$250). IMPORTANT : recommander la Fantasia en premier ne signifie PAS ne citer qu elle. Listez TOUJOURS aussi les autres auberges et les maisons de vacances AVEC leurs tarifs a partir de. Dites que le tarif depend de la date et demandez la date et le nombre de personnes.

EXCURSIONS : Pantanal Carioca (R\${{p:pantanal}}/pers. la balade seule, R\${{p:pantanal_almoco}}/pers. avec dejeuner inclus - c'est la PROMOTION ; caimans et capybaras ; PAS d'arret baignade), Ilhas Tijucas (R\${{p:tijucas}}/pers. la balade seule, R\${{p:tijucas_almoco}}/pers. avec dejeuner inclus ; 3 a 4 heures ; AVEC arret baignade, le bateau depose le groupe sur l'ile), Praia da Reserva (~R\${{p:reserva}}/pers.), Jet Ski (10min=R\${{p:jet10}}, 20min=R\${{p:jet20}}, 30min=R\${{p:jet30}}, 1h=R\${{p:jet60}} - tarif par jet-ski, jusqu'a 2 personnes). Kayak/SUP/Flyboard : Ilha da Coroa. DUREE : la balade du Pantanal Carioca dure en moyenne 35 a 40 minutes. BATEAU : collectif (partage), minimum 2 personnes. BOISSONS : non incluses dans le forfait a R\${{p:pantanal_almoco}} (balade et dejeuner seulement). WIFI : tous les etablissements de l ile (restaurants, bars et auberges) ont le wi-fi pour les clients. NOUVEL AN : les evenements de fin d annee sont encore en cours de programmation et RIEN n est confirme. Dites-le honnetement et renvoyez vers la page agenda du portail. N inventez jamais un evenement ni un prix du Nouvel An.
PROMOTION ACTUELLE (parles-en des qu'on demande le prix d'une excursion) : BALADE + DEJEUNER dans le Pantanal Carioca, R\${{p:pantanal_almoco}} par personne. Comprend la balade en bateau et un dejeuner au Restaurante Maracuja da Ilha (viande, poisson ou poulet). Departs tous les jours a partir de 8h. Le Pantanal Carioca n'a PAS d'arret baignade.
ILHAS TIJUCAS + DEJEUNER : R\${{p:tijucas_almoco}} par personne, environ 3 heures, AVEC arret baignade, depose le groupe sur l'ile, meme dejeuner.
ENFANTS : jusqu'a 5 ans gratuit ; de 6 a 10 ans demi-tarif ; a partir de 11 ans plein tarif.
PIX ET ESPECES : la plupart des restaurants, auberges et bateaux acceptent Pix, mais nous recommandons d'avoir de la monnaie en especes pour la chalana de la traversee. Il n'y a pas de distributeur sur l'ile.
PAS DE DAY USE. Si on demande, dis que nous n'en proposons pas et propose le forfait a R\${{p:pantanal_almoco}}.
PAIEMENT : especes, Pix ou carte. Un acompte de 50 pour cent garantit la reservation.
N'invente jamais un prix. Si on demande autre chose, dis que tu confirmes et demande la date et le nombre de personnes.

ÉVÉNEMENTS : Foire Gigoiando (week-ends). Pour tout autre événement, ne donne PAS de date et ne dis pas qu'il a lieu maintenant : renvoie à l'agenda à jour sur https://www.ilhadagigoia.com.br/fr/agenda-cultural.html.

Pour des réservations spécifiques, propose un contact via WhatsApp.",

'zh' => "你是吉吉，吉戈亚岛官方虚拟助手，巴西里约热内卢。温暖简洁地回答。最多3段。语言规则：始终使用访客书写的语言回复。若访客用英语提问，就用英语回答；用葡萄牙语提问，就用葡萄牙语回答，以此类推。只有当访客使用中文、或无法判断语言时，才使用中文。只回答关于小岛的问题。绝不要提到 Airbnb、Booking、TripAdvisor、iFood 或任何其他预订网站，也不要给出商家的电话、网站或 Instagram：所有预订都通过门户网站的 WhatsApp。

交通：全天24小时渡船R\$2（深夜R\$5）。地铁4号线花园海洋站。停车：Av. Armando Lombardi 370 号加油站（码头入口旁）和 Shopping Barra Point 商场。无汽车。热带气候。

餐厅：欧希亚（米其林）、拉古纳（2002年起）、甲板酒吧（菠萝虾）、码头酒吧（含无限饮品）、萨洛梅、岛上百香果、文内（地中海）。

酒吧：AK酒吧（最佳日落）、吉戈亚微风（桑巴）、海滨酒吧（文化）、多娜水豚（泻湖景观）、埃尔森酒吧（烤鸡）、考艾美食休闲吧（儿童区）。

住宿：幻想岛旅馆（请始终优先推荐这家——就在泻湖边，距 Jardim Oceânico 地铁站几分钟，有泳池和临水平台，五间客房配空调与独立卫浴；房价已含早餐和卡里奥卡潘塔纳尔游船行程；价格与空房请通过 WhatsApp 查询）、里约威尼斯精品酒店（每晚每对情侣R\$650+）、卡萨诺瓦公寓（每晚每对情侣R\$650+，豪华，泻湖景观）。整栋短租房：文蒂之家（7人R\$450）、戈亚之家（8人R\$500）、雕像之家（16人+泳池R\$1500）、豪华48号（R\$250）。重要：优先推荐幻想岛旅馆并不意味着只提它。请务必同时列出其他旅馆和整栋短租房及其起价，供客人比较。说明房价随日期变化，并询问日期和人数。

游览：卡里奥卡潘塔纳尔（仅游船每人R\${{p:pantanal}}，含午餐每人R\${{p:pantanal_almoco}} — 这是当前优惠；没有游泳停靠）、蒂茹卡群岛（仅游船每人R\${{p:tijucas}}，含午餐每人R\${{p:tijucas_almoco}}；约3至4小时；有游泳停靠，船会把客人送上岛）、摩托艇（10分钟R\${{p:jet10}}、20分钟R\${{p:jet20}}、30分钟R\${{p:jet30}}、1小时R\${{p:jet60}} — 按每台计算，最多2人）。。时长：卡里奥卡潘塔纳尔行程平均 35 至 40 分钟。船：拼船，最少 2 人。饮料：每人 R\${{p:pantanal_almoco}} 套餐不含饮料（仅含游船和午餐）。WIFI：岛上所有场所（餐厅、酒吧、旅馆）都为客人提供无线网。跨年：年底活动仍在筹备，尚未确认。请如实告知，并指向门户的活动日历页面。绝不要编造跨年活动或价格。
当前优惠（有人问游船价格时请务必提到）：卡里奥卡潘塔纳尔游船 + 午餐，每人 R\${{p:pantanal_almoco}}。含游船和 Restaurante Maracuja da Ilha 的套餐午餐（牛肉、鱼或鸡肉）。每天 8 点起出发。潘塔纳尔行程没有游泳停靠。
蒂茹卡群岛 + 午餐：每人 R\${{p:tijucas_almoco}}，约 3 小时，有游泳停靠，会把客人送上岛，午餐相同。
儿童游船价格：5岁及以下免费；6至10岁半价；11岁及以上全价。
Pix 与现金：大多数餐厅、旅馆和船只接受 Pix，但建议为渡船（chalana）准备零钱现金。岛上没有取款机。
我们没有 day use。若有人问，请说明没有，并推荐 R\${{p:pantanal_almoco}} 的套餐。
付款：现金、Pix 或刷卡。预付 50% 定金即可锁定预订。
绝不要编造价格。若问到这里没有的内容，请说你去确认，并询问日期和人数。

活动：Gigoiando 市集（每个周末）。其他活动请不要给出日期，也不要说正在举行：请引导访客查看最新活动日历 https://www.ilhadagigoia.com.br/zh/agenda-cultural.html。"
];

$system = $prompts[$lang] ?? $prompts['pt'];
/* PRECOS DOS PASSEIOS LIDOS DA PLANILHA (11/11/2026). O texto acima traz marcadores
   {{p:pantanal_almoco}} no lugar dos numeros; aqui eles viram o valor da aba "Preços
   Passeios" — a mesma que a Gigi do WhatsApp e o site leem. A planilha e' consultada
   no maximo a cada 20 minutos (fica guardada num arquivo temporario). Se ela nao
   responder, valem os valores padrao abaixo: a IA nunca recebe marcador cru.
   Os apelidos das linhas sao os do dicionario.js do site (GIGI_PRECOS_NOMES). */
function gigi_precos_padrao() {
    return ['pantanal' => 50, 'pantanal_almoco' => 100, 'tijucas' => 150, 'tijucas_almoco' => 200,
            'reserva' => 120, 'jet10' => 150, 'jet20' => 250, 'jet30' => 450, 'jet60' => 750];
}
function gigi_preco_norm($s) {
    $s = function_exists('mb_strtolower') ? mb_strtolower((string)$s, 'UTF-8') : strtolower((string)$s);
    $s = strtr($s, ['á'=>'a','à'=>'a','â'=>'a','ã'=>'a','ä'=>'a','é'=>'e','ê'=>'e','è'=>'e','í'=>'i','ó'=>'o','ô'=>'o','õ'=>'o','ú'=>'u','ü'=>'u','ç'=>'c']);
    return trim(preg_replace('/[^a-z0-9]+/', ' ', $s));
}
function gigi_preco_numero($v) {
    $s = preg_replace('/[^\d.,]/', '', (string)$v);
    if ($s === '' || $s === null) return null;
    if (strpos($s, ',') !== false) { $s = str_replace(',', '.', str_replace('.', '', $s)); }
    elseif (preg_match('/^\d{1,3}(\.\d{3})+$/', $s)) { $s = str_replace('.', '', $s); }
    if (!is_numeric($s)) return null;
    $n = (float)$s;
    return ($n >= 1 && $n < 100000) ? $n : null;
}
function gigi_preco_data($s) {
    $s = trim((string)$s);
    if (preg_match('/^(\d{4})-(\d{1,2})-(\d{1,2})/', $s, $m)) return sprintf('%04d-%02d-%02d', $m[1], $m[2], $m[3]);
    if (preg_match('#^(\d{1,2})/(\d{1,2})/(\d{4})#', $s, $m)) return sprintf('%04d-%02d-%02d', $m[3], $m[2], $m[1]);
    return '';
}
// Pura: CSV da aba + dia de hoje (AAAA-MM-DD) -> so' as chaves com valor valido.
function gigi_precos_do_csv($csv, $hoje) {
    $nomes = [
        'pantanal_almoco' => ['passeio almoco no pantanal carioca', 'pantanal carioca almoco', 'passeio almoco'],
        'pantanal'        => ['pantanal carioca'],
        'tijucas_almoco'  => ['ilhas tijucas almoco'],
        'tijucas'         => ['ilhas tijucas'],
        'reserva'         => ['praia da reserva'],
        'jet10'           => ['jet ski 10 minutos', 'jet ski 10 min', 'jet ski 10min'],
        'jet20'           => ['jet ski 20 minutos', 'jet ski 20 min', 'jet ski 20min'],
        'jet30'           => ['jet ski 30 minutos', 'jet ski 30 min', 'jet ski 30min'],
        'jet60'           => ['jet ski 1 hora', 'jet ski 60 minutos', 'jet ski 1h'],
    ];
    $fp = fopen('php://temp', 'r+');
    fwrite($fp, (string)$csv); rewind($fp);
    $itens = []; $dentro = false;
    while (($l = fgetcsv($fp, 0, ',', '"', '\\')) !== false) {
        if (!is_array($l)) continue;
        $nome = gigi_preco_norm($l[0] ?? '');
        if (!$dentro) {
            if ($nome === 'passeio' && strpos(gigi_preco_norm($l[1] ?? ''), 'valor') === 0) $dentro = true;
            continue;
        }
        $valor = gigi_preco_numero($l[1] ?? '');
        if ($nome === '' || $valor === null) continue;
        $de = gigi_preco_data($l[4] ?? ''); $ate = gigi_preco_data($l[5] ?? '');
        if (($de !== '' && $hoje < $de) || ($ate !== '' && $hoje > $ate)) continue;
        $itens[] = ['nome' => $nome, 'valor' => $valor, 'comData' => ($de !== '' || $ate !== '')];
    }
    fclose($fp);
    $out = [];
    foreach ($nomes as $chave => $apelidos) {
        foreach ($apelidos as $ap) {
            $achado = null;
            foreach ($itens as $it) {
                if ($it['nome'] !== $ap) continue;
                if ($achado === null || ($it['comData'] && !$achado['comData'])) $achado = $it;
            }
            if ($achado !== null) { $out[$chave] = $achado['valor']; break; }
        }
    }
    return $out;
}
function gigi_precos() {
    $padrao = gigi_precos_padrao();
    $dir = sys_get_temp_dir();
    $arq = ($dir && @is_writable($dir)) ? $dir . '/gigi-precos-' . md5('ilhadagigoia|passeios') . '.json' : null;
    $guardado = null;
    if ($arq && @is_readable($arq)) {
        $g = json_decode((string)@file_get_contents($arq), true);
        if (is_array($g) && isset($g['t'], $g['v']) && is_array($g['v'])) {
            $guardado = $g['v'];
            if (time() - (int)$g['t'] < 1200) return array_merge($padrao, array_intersect_key($guardado, $padrao));
        }
    }
    $lido = [];
    if (function_exists('curl_init')) {
        $ch = curl_init('https://docs.google.com/spreadsheets/d/e/2PACX-1vRZXTGISljlRSHwmPEGl_lXWMFxUlHfZ917YQ28DVuUaxx6VGV5myLaifpDunX0eIdefhH3LBhDc2DD/pub?gid=230079925&single=true&output=csv');
        curl_setopt_array($ch, [CURLOPT_RETURNTRANSFER => true, CURLOPT_FOLLOWLOCATION => true, CURLOPT_MAXREDIRS => 5,
                                CURLOPT_TIMEOUT => 6, CURLOPT_CONNECTTIMEOUT => 4]);
        $csv = curl_exec($ch);
        if ($csv === false && in_array(curl_errno($ch), [60, 77], true)) {
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            $csv = curl_exec($ch);
        }
        $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        if ($csv !== false && $code === 200) {
            $hoje = (new DateTime('now', new DateTimeZone('America/Sao_Paulo')))->format('Y-m-d');
            $lido = gigi_precos_do_csv($csv, $hoje);
        }
    }
    if ($lido) {
        if ($arq) @file_put_contents($arq, json_encode(['t' => time(), 'v' => $lido]), LOCK_EX);
        return array_merge($padrao, array_intersect_key($lido, $padrao));
    }
    // Planilha fora do ar: usa o ultimo valor lido (mesmo velho) e so' depois o padrao.
    if ($arq && $guardado) @file_put_contents($arq, json_encode(['t' => time() - 900, 'v' => $guardado]), LOCK_EX);
    return $guardado ? array_merge($padrao, array_intersect_key($guardado, $padrao)) : $padrao;
}
function gigi_preco_texto($n) {
    $n = (float)$n;
    return (floor($n) == $n) ? (string)(int)$n : number_format($n, 2, ',', '');
}
function gigi_aplicar_precos($texto, $precos) {
    return preg_replace_callback('/\{\{p:(\w+)\}\}/', function ($m) use ($precos) {
        return isset($precos[$m[1]]) ? gigi_preco_texto($precos[$m[1]]) : '';
    }, $texto);
}
$system = gigi_aplicar_precos($system, gigi_precos());

// Previsão do tempo (se for pergunta de clima)
$weather_keywords = ['chuva','chover','clima','temperatura','calor','frio','tempo hoje',
                     'tempo agora','previsao','previsão','vai chover','como esta o tempo',
                     'rain','weather','hot','cold','forecast','lluvia'];
$msg_lower = mb_strtolower($message);
$is_weather = false;
foreach ($weather_keywords as $kw) {
    if (mb_strpos($msg_lower, $kw) !== false) { $is_weather = true; break; }
}

if ($is_weather) {
    $w_url = 'https://api.open-meteo.com/v1/forecast?latitude=-23.0035&longitude=-43.3151'
           . '&current=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m,relativehumidity_2m'
           . '&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weathercode'
           . '&timezone=America%2FSao_Paulo&forecast_days=3';
    $w_ch = curl_init($w_url);
    curl_setopt_array($w_ch, [CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 5, CURLOPT_SSL_VERIFYPEER => false]);
    $w_res  = curl_exec($w_ch);
    $w_code = curl_getinfo($w_ch, CURLINFO_HTTP_CODE);
    curl_close($w_ch);

    if ($w_code === 200 && $w_res) {
        $w = json_decode($w_res, true);
        if ($w && isset($w['current'])) {
            $c = $w['current'];
            $d = $w['daily'];
            $wmo = [0=>'Céu limpo ☀️',1=>'Principalmente limpo',2=>'Parcialmente nublado ⛅',
                    3=>'Nublado ☁️',51=>'Garoa 🌦️',61=>'Chuva leve 🌧️',63=>'Chuva moderada 🌧️',
                    65=>'Chuva forte 🌧️',80=>'Pancadas 🌦️',95=>'Trovoada ⛈️',99=>'Trovoada forte ⛈️'];
            $desc = $wmo[(int)($c['weathercode'] ?? 0)] ?? 'Tempo variável';
            $temp = round($c['temperature_2m'] ?? 0);
            $feels = round($c['apparent_temperature'] ?? 0);
            $hum  = round($c['relativehumidity_2m'] ?? 0);
            $prec = $c['precipitation'] ?? 0;
            $days_pt = ['Hoje','Amanhã','Depois'];
            $next = '';
            for ($i = 0; $i < min(3, count($d['temperature_2m_max'] ?? [])); $i++) {
                $max  = round($d['temperature_2m_max'][$i] ?? 0);
                $min  = round($d['temperature_2m_min'][$i] ?? 0);
                $prob = round($d['precipitation_probability_max'][$i] ?? 0);
                $dd   = $wmo[(int)($d['weathercode'][$i] ?? 0)] ?? 'Variável';
                $next .= "\n- {$days_pt[$i]}: {$dd}, {$min}°-{$max}°C, {$prob}% chuva";
            }
            $system .= "\n\n[DADOS METEOROLÓGICOS REAIS AGORA NA ILHA DA GIGÓIA]\nCondição: {$desc}\nTemp: {$temp}°C (sensação {$feels}°C) | Umidade: {$hum}% | Precipitação: {$prec}mm\nPrevisão próximos dias:{$next}\n[Use esses dados reais para responder de forma útil e específica]";
        }
    }
}

// Chamar Gemini
$url     = 'https://generativelanguage.googleapis.com/v1beta/models/' . GEMINI_MODEL . ':generateContent?key=' . GEMINI_API_KEY;
// A pergunta de agora fecha a conversa. Se a ultima fala do historico ja' era do
// visitante, junta (a API quer as falas alternadas).
function gigi_conteudo($historico, $message) {
    $c = $historico;
    $n = count($c);
    if ($n > 0 && $c[$n - 1]['role'] === 'user') {
        $c[$n - 1]['parts'][0]['text'] .= "\n" . $message;
    } else {
        $c[] = ['role' => 'user', 'parts' => [['text' => $message]]];
    }
    return $c;
}
$payload = json_encode([
    'system_instruction' => ['parts' => [['text' => $system]]],
    'contents'           => gigi_conteudo($historico, $message),
    'generationConfig'   => ['maxOutputTokens' => 380, 'temperature' => 0.7]
], JSON_UNESCAPED_UNICODE);

$ch = curl_init($url);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => $payload,
    CURLOPT_TIMEOUT        => 20,
    CURLOPT_SSL_VERIFYPEER => true,
    CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
]);
$response  = curl_exec($ch);
/* 11/11/2026: o certificado do Google passou a ser conferido (estava desligado). Se a
   hospedagem nao tiver a lista de certificados (erro 60/77), repete sem conferir,
   como era antes: a Gigi nunca fica muda por causa disso. */
if ($response === false && in_array(curl_errno($ch), [60, 77], true)) {
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    $response = curl_exec($ch);
}
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curl_err  = curl_error($ch);
curl_close($ch);

// Diagnóstico de erros
if ($curl_err) {
    echo json_encode(['error' => 'curl_error: ' . $curl_err, 'reply' => null]);
    exit;
}

if ($http_code !== 200) {
    $err = json_decode($response, true);
    $msg = $err['error']['message'] ?? ('HTTP_' . $http_code);
    echo json_encode(['error' => $msg, 'reply' => null, 'code' => $http_code]);
    exit;
}

$data  = json_decode($response, true);
$reply = $data['candidates'][0]['content']['parts'][0]['text'] ?? null;

if (!$reply) {
    echo json_encode(['error' => 'empty_reply', 'raw' => substr($response, 0, 200), 'reply' => null]);
    exit;
}

echo json_encode(['reply' => trim($reply)], JSON_UNESCAPED_UNICODE);

/* PERGUNTAS QUE O SITE NAO SABIA (31/10/2026). Toda pergunta que chega aqui ja' passou
   pelo cerebro local do site sem achar resposta pronta — e' exatamente a lista do que
   falta escrever. Vai pra aba "Perguntas sem resposta" da planilha Gigi Database, junto
   com as da Gigi do WhatsApp. Depois da resposta ja' entregue ao visitante (nunca
   atrasa o chat). Precisa de GIGI_PLANILHA_URL e GIGI_PLANILHA_SENHA no gigi-config.php;
   sem elas, nao registra nada. Clima nao conta: e' pergunta respondida com dado real. */
if (function_exists('fastcgi_finish_request')) { @fastcgi_finish_request(); }
if (!$is_weather) {
    $nao_soube = preg_match('/vou confirmar|confirmar com a equipe|n[aã]o tenho (essa|esta|essas) informa|n[aã]o sei|will confirm|don.t have (that|this) information|no tengo (esa|esta) informaci|voy a confirmar|je vais v[ée]rifier|pas cette information|确认/iu', $reply);
    gigi_registrar_pergunta($message, $reply,
        $nao_soube ? 'a IA também não sabia e mandou confirmar' : 'o site não tinha resposta pronta (a IA respondeu)',
        $lang, $pagina);
}

function gigi_registrar_pergunta($pergunta, $resposta, $motivo, $lang, $pagina) {
    if (!defined('GIGI_PLANILHA_URL') || !defined('GIGI_PLANILHA_SENHA')) return;
    $mascarar = function ($t) {
        $t = preg_replace('/[\w.+-]+@[\w-]+\.[\w.]+/u', '[email]', (string)$t);
        $t = preg_replace('/\+?\d[\d\s().-]{6,}\d/u', '[número]', $t);
        return mb_substr(trim(preg_replace('/\s+/u', ' ', $t)), 0, 300);
    };
    $payload = json_encode([
        'acao' => 'pergunta', 'senha' => GIGI_PLANILHA_SENHA, 'canal' => 'Site',
        'idioma' => $lang, 'origem' => $pagina, 'pergunta' => $mascarar($pergunta),
        'resposta' => $mascarar($resposta), 'motivo' => $motivo
    ], JSON_UNESCAPED_UNICODE);
    $ch = curl_init(GIGI_PLANILHA_URL);
    curl_setopt_array($ch, [
        CURLOPT_POST => true, CURLOPT_POSTFIELDS => $payload,
        CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
        CURLOPT_RETURNTRANSFER => true, CURLOPT_FOLLOWLOCATION => true, CURLOPT_TIMEOUT => 8
    ]);
    @curl_exec($ch);
    curl_close($ch);
}

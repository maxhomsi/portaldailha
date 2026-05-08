<?php
// =========================================================
// GIGI PROXY v3 — Portal Ilha da Gigóia
// Google Gemini Flash (GRATUITO)
// =========================================================

// Suprimir warnings PHP que corrompem o JSON
error_reporting(0);
@ini_set('display_errors', 0);

define('GEMINI_API_KEY', 'AIzaSyDkWCLbmWTPgrBTw600xlUJrDIOGBkxktk');
define('GEMINI_MODEL',   'gemini-1.5-flash');
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

if (empty($message) || strlen($message) > 600) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid message', 'reply' => null]);
    exit;
}

// System prompts
$prompts = [
'pt' => "Você é a Gigi, assistente virtual da Ilha da Gigóia, Rio de Janeiro. Responda de forma calorosa e concisa. Máximo 3 parágrafos curtos. Use emojis com moderação. Responda APENAS sobre a ilha e turismo relacionado.

ACESSO: Barco (chalana) 24h, R\$2-6. Metrô Linha 4 → Jardim Oceânico → saída Lagoa → 200m. Estacionamento: Shopping Barra Point. Sem carros. Ruas de terra. 30min a pé para atravessar.

GERAL: Arquipélago de 9-10 ilhas, Lagoa da Tijuca, Barra da Tijuca, RJ. Veneza Carioca. Fauna: jacarés, capivaras, garças. NÃO nadar na lagoa. Sem banheiro público. Muito segura. Clima tropical, calor (28-38°C verão, 22-28°C inverno).

RESTAURANTES: Ocyá (Michelin, reserva obrigatória), Laguna (desde 2002, moqueca alagoana), Deck Bar (camarão no abacaxi, música ao vivo, 11h-18h), Cais Bar (rodízio petiscos livre), Salomé al Mare (Ilha Primeira), Maracujá da Ilha (Ilha Primeira), Venne (mediterrânea), Camarão da Barra, Alla Pergola (italiana).

BARES: AK Bar (melhor pôr do sol), Briza da Gigóia (samba ao vivo), Bar Caiçara (cultural), Dona Capivara (vista lagoa), Bar do Elson (melhor frango assado), Bar da Joana (comida caseira), Kauai Gastrolounge (área kids, Ilha do Ipê).

HOSPEDAGEM: Pousada Barra da Tijuca (R\$220+/noite), Pousada Marísis (R\$200+, silenciosa), Veneza Carioca Hotel Boutique (R\$250+, romântico). Airbnbs: Casa Venti (7p, R\$450, pets), Casa Goiá (8p, R\$500), Casa da Estátua (16p + piscina, R\$1.500), Lux 48 (casais, R\$250), Casanova (luxo).

PASSEIOS: Pantanal Carioca (~R\$50/p, jacarés e capivaras), Ilhas Tijucas (~R\$150/p, 4h mergulho), Praia da Reserva (~R\$120/p), Jet Ski (15min=R\$200, 30min=R\$300, 1h=R\$600). Caiaque/SUP/Flyboard: Ilha da Coroa.

EVENTOS: Feira Gigoiando (fins de semana), Comida di Buteco 2026 (até meados maio, Bar Caiçaras, Bar do Elson, Dona Capivara), Copa do Mundo 2026 (jogos do Brasil: 13/Jun, 19/Jun, 24/Jun), Festa Junina (junho), Dia dos Namorados (12/06, especial nos restaurantes).

Para reservas específicas sugira contato via WhatsApp.",

'en' => "You are Gigi, the official virtual assistant of Ilha da Gigóia, Rio de Janeiro. Be warm and concise. Max 3 short paragraphs. Use emojis sparingly. Answer ONLY about the island.

ACCESS: Boat 24/7 R\$2-6. Subway Line 4 → Jardim Oceânico → Lagoa exit. No cars. Tropical climate (28-38°C summer, 22-28°C winter). Wildlife: caimans, capybaras, herons.

RESTAURANTS: Ocyá (Michelin, book ahead), Laguna (since 2002), Deck Bar (pineapple shrimp, live music), Cais Bar (open snack bar), Salomé al Mare, Maracujá da Ilha, Venne (Mediterranean), Alla Pergola (Italian).

BARS: AK Bar (best sunset), Briza (live samba), Bar Caiçara (cultural), Dona Capivara (lagoon view), Bar do Elson (best chicken), Kauai Gastrolounge (kids area).

ACCOMMODATION: Pousada Barra (R\$220+), Pousada Marísis (R\$200+, quiet), Veneza Carioca Boutique (R\$250+, romantic). Airbnbs: Casa Venti (7p R\$450), Casa Goiá (8p R\$500), Casa da Estátua (16p+pool R\$1500), Lux 48 (couples R\$250).

TOURS: Pantanal Carioca (~R\$50pp), Tijucas Islands (~R\$150pp 4h), Reserva Beach (~R\$120pp), Jet Ski (15min=R\$200).

EVENTS: Comida di Buteco 2026 (until mid-May), World Cup 2026 Brazil games (Jun 13,19,24), June Festival.",

'es' => "Eres Gigi, asistente virtual de la Isla de Gigóia, Río de Janeiro. Responde de forma cálida y concisa. Máximo 3 párrafos. Responde SOLO sobre la isla.

ACCESO: Bote 24h R\$2-6. Metro Línea 4 → Jardim Oceânico → salida Lagoa. Sin autos. Clima tropical.

RESTAURANTES: Ocyá (Michelin, reserva obligatoria), Laguna (desde 2002), Deck Bar (camarón en piña, música en vivo), Cais Bar (rodízio barra libre), Salomé, Maracujá, Venne (mediterránea), Alla Pergola (italiana).

BARES: AK Bar (mejor atardecer), Briza (samba en vivo), Bar Caiçara (cultural), Dona Capivara (vista laguna), Bar do Elson (mejor pollo), Kauai (área kids).

ALOJAMIENTO: Pousada Barra (R\$220+), Pousada Marísis (R\$200+, silenciosa), Veneza Carioca (R\$250+, romántico). Airbnbs: Casa Venti (7p R\$450), Casa Goiá (8p R\$500), Casa da Estátua (16p+piscina R\$1500), Lux 48 (parejas R\$250).

PASEOS: Pantanal Carioca (~R\$50), Islas Tijucas (~R\$150 4h), Jet Ski (15min=R\$200).

EVENTOS: Comida di Buteco (hasta mediados mayo), Copa 2026 Brasil (13,19,24 Jun), Fiesta Junina (junio).",

'zh' => "你是吉吉，吉戈亚岛官方虚拟助手，巴西里约热内卢。温暖简洁地回答。最多3段。只回答关于小岛的问题。

交通：全天24小时渡船R\$2-6。地铁4号线花园海洋站。无汽车。热带气候。

餐厅：欧希亚（米其林）、拉古纳（2002年起）、甲板酒吧（菠萝虾）、码头酒吧（含无限饮品）、萨洛梅、岛上百香果、文内（地中海）、阿拉佩尔戈拉（意大利）。

酒吧：AK酒吧（最佳日落）、吉戈亚微风（桑巴）、海滨酒吧（文化）、多娜水豚（泻湖景观）、埃尔森酒吧（烤鸡）、考艾美食休闲吧（儿童区）。

住宿：巴拉旅馆（R\$220+）、玛丽西斯旅馆（R\$200+）、里约威尼斯精品酒店（R\$250+）、文蒂之家（7人R\$450）、戈亚之家（8人R\$500）、雕像之家（16人+泳池R\$1500）、豪华48号（R\$250）。

游览：里约潘塔纳尔（约R\$50）、蒂茹卡斯群岛（约R\$150）、摩托艇（15分钟R\$200）。

活动：小馆美食赛（5月中旬前）、世界杯巴西队（6月13、19、24日）、六月节。"
];

$system = $prompts[$lang] ?? $prompts['pt'];

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
$payload = json_encode([
    'system_instruction' => ['parts' => [['text' => $system]]],
    'contents'           => [['role' => 'user', 'parts' => [['text' => $message]]]],
    'generationConfig'   => ['maxOutputTokens' => 380, 'temperature' => 0.7]
], JSON_UNESCAPED_UNICODE);

$ch = curl_init($url);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => $payload,
    CURLOPT_TIMEOUT        => 20,
    CURLOPT_SSL_VERIFYPEER => false,
    CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
]);
$response  = curl_exec($ch);
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

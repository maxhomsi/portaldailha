<?php
/* =========================================================================
   PAGINA DE PAGAMENTO — PONTE PRA GIGI (23/11/2026)
   A pagina /pagar/ pede aqui os dados da reserva; este arquivo pergunta a Gigi no
   Railway (GET <GIGI_API_URL>/api/pagamento/<token>) e devolve a resposta dela.
   O navegador do cliente nunca fala com o Railway direto.

   O endereco da Gigi fica no gigi-config.php (fora do git), numa linha assim:
     define('GIGI_API_URL', 'https://SEU-APP.up.railway.app');
   Sem essa linha, este arquivo responde "config" e a Gigi continua mandando o Pix do
   jeito antigo (ela confere o ?t=ping a cada 30 min e so' liga a pagina com o "pong").

   So' leitura. Aceita so' "ping" ou um token de 16 a 40 letras/numeros.
   ========================================================================= */
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Robots-Tag: noindex, nofollow');

$cfg = __DIR__ . '/../gigi-config.php';
if (is_readable($cfg)) { require_once $cfg; }

$t = isset($_GET['t']) ? (string)$_GET['t'] : '';
$soStatus = (isset($_GET['s']) && $_GET['s'] === '1');
if (!preg_match('/^(ping|[A-Za-z0-9_-]{16,40})$/', $t)) {
    http_response_code(404);
    echo '{"ok":false}';
    exit;
}
if (!defined('GIGI_API_URL') || !GIGI_API_URL || !function_exists('curl_init')) {
    http_response_code(503);
    echo '{"ok":false,"erro":"config"}';
    exit;
}

$url = rtrim(GIGI_API_URL, '/') . '/api/pagamento/' . rawurlencode($t) . ($soStatus ? '?s=1' : '');
$ch = curl_init($url);
curl_setopt_array($ch, [CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 20, CURLOPT_CONNECTTIMEOUT => 6,
    CURLOPT_FOLLOWLOCATION => false, CURLOPT_HTTPHEADER => ['Accept: application/json']]);
$body = curl_exec($ch);
// Mesmo jeitinho do gigi-proxy.php: hospedagem com a lista de certificados velha.
if ($body === false && in_array(curl_errno($ch), [60, 77], true)) {
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    $body = curl_exec($ch);
}
$code = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

$j = ($body === false) ? null : json_decode($body, true);
if (!is_array($j)) {
    http_response_code(502);
    echo '{"ok":false,"erro":"gigi"}';
    exit;
}
http_response_code($code >= 200 && $code < 600 ? $code : 200);
echo json_encode($j, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

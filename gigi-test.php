<?php
error_reporting(0);
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

$results = [];

// Teste 1: curl disponível?
$results['curl'] = function_exists('curl_init') ? 'OK' : 'NOT_AVAILABLE';

// Teste 2: consegue alcançar o Google?
if (function_exists('curl_init')) {
    $ch = curl_init('https://www.google.com');
    curl_setopt_array($ch, [CURLOPT_RETURNTRANSFER=>true, CURLOPT_TIMEOUT=>5, CURLOPT_SSL_VERIFYPEER=>false, CURLOPT_NOBODY=>true]);
    curl_exec($ch);
    $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $err = curl_error($ch);
    curl_close($ch);
    $results['google_reach'] = $code > 0 ? "OK ($code)" : "FAIL: $err";
}

// Teste 3: consegue alcançar a API do Gemini?
if (function_exists('curl_init')) {
    $ch = curl_init('https://generativelanguage.googleapis.com/v1beta/models?key=test');
    curl_setopt_array($ch, [CURLOPT_RETURNTRANSFER=>true, CURLOPT_TIMEOUT=>8, CURLOPT_SSL_VERIFYPEER=>false]);
    $res = curl_exec($ch);
    $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $err = curl_error($ch);
    curl_close($ch);
    $results['gemini_reach'] = $code > 0 ? "OK ($code)" : "FAIL: $err";
}

// Teste 4: consegue alcançar Open-Meteo?
if (function_exists('curl_init')) {
    $ch = curl_init('https://api.open-meteo.com/v1/forecast?latitude=-23&longitude=-43&current=temperature_2m');
    curl_setopt_array($ch, [CURLOPT_RETURNTRANSFER=>true, CURLOPT_TIMEOUT=>5, CURLOPT_SSL_VERIFYPEER=>false]);
    $res = curl_exec($ch);
    $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $err = curl_error($ch);
    curl_close($ch);
    $results['openmeteo_reach'] = $code > 0 ? "OK ($code)" : "FAIL: $err";
}

echo json_encode($results, JSON_PRETTY_PRINT);

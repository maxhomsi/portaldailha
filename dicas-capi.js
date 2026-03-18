/* =========================================================
   DICAS DO CAPI - O Mascote da Ilha da Gigóia
   ========================================================= */

// Lista de 10 dicas (já preparadas para receber 'en' e 'es' no futuro)
const capiTips = [
  {
    pt: "<strong>Barcos 24h:</strong> A travessia principal (pelo deck do metrô Jardim Oceânico) funciona 24 horas por dia. O valor costuma ser tabelado, mas de madrugada pode ter um pequeno acréscimo."
  },
  {
    pt: "<strong>Leve repelente:</strong> Como estamos cercados de lagoa e muita natureza, os mosquitinhos costumam aparecer no fim da tarde. É sempre bom ter um na mochila!"
  },
  {
    pt: "<strong>Passeios de barco:</strong> Combine o valor e o roteiro do passeio antes de embarcar. Os barqueiros da cooperativa local conhecem as melhores histórias e pontos para fotos."
  },
  {
    pt: "<strong>Sem carros:</strong> Lembre-se, na Ilha da Gigóia não entram carros nem motos! Venha com calçados confortáveis para caminhar pelas nossas ruelas charmosas."
  },
  {
    pt: "<strong>Fauna local:</strong> É comum ver capivaras e jacarés tomando um sol na beira da lagoa. Tire muitas fotos, mas mantenha uma distância segura e nunca alimente os animais silvestres."
  },
  {
    pt: "<strong>Dinheiro trocado:</strong> Embora quase todos os restaurantes e pousadas aceitem PIX e cartão, é sempre bom ter um pouco de dinheiro trocado para facilitar o pagamento rápido da travessia."
  },
  {
    pt: "<strong>Bagagem leve:</strong> Como as ruas são estreitas e feitas apenas para pedestres, evite malas de rodinhas muito grandes ou pesadas. Mochilas ou malas menores facilitam muito a chegada até a sua pousada!"
  },
  {
    pt: "<strong>Fim de tarde mágico:</strong> O pôr do sol visto da lagoa é um espetáculo à parte. Escolha um restaurante ou barzinho de frente para a água no fim do dia para aproveitar a vista."
  },
  {
    pt: "<strong>Agito vs. Calmaria:</strong> Sábados e domingos a ilha fica super animada, com música ao vivo e movimento. Se você busca silêncio absoluto e ruas vazias, prefira visitar de segunda a quinta-feira."
  },
  {
    pt: "<strong>Sinal de celular:</strong> O Wi-Fi nas pousadas e restaurantes costuma ser excelente, mas o sinal de operadora (4G/5G) pode oscilar em algumas ruazinhas mais fechadas. Salve o mapa ou endereço do seu destino por precaução!"
  }
];

// Função que sorteia e exibe a dica
function initCapiTip() {
  const tipTextEl = document.getElementById("tipText");
  
  // Se a página atual não tiver o bloco do Capi (ex: páginas internas), o script não faz nada e evita erros
  if (!tipTextEl) return; 

  // Verifica o idioma atual (se não tiver nada salvo, assume 'pt')
  const currentLang = localStorage.getItem('ilha_lang') || 'pt';

  // Sorteia uma dica aleatória baseada no tamanho da lista
  const randomIndex = Math.floor(Math.random() * capiTips.length);
  const selectedTip = capiTips[randomIndex];

  // Insere a dica na tela no idioma correto
  tipTextEl.innerHTML = selectedTip[currentLang] || selectedTip.pt;
}
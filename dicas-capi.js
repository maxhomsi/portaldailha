/* =========================================================
   DICAS DO CAPI - O Mascote da Ilha da Gigóia
   ========================================================= */

const capiTips = [
  {
    pt: "<strong>Barcos 24h:</strong> A travessia principal (pelo deck do metrô Jardim Oceânico) funciona 24 horas por dia. O valor costuma ser tabelado, mas de madrugada pode ter um pequeno acréscimo.",
    en: "<strong>24h Boats:</strong> The main crossing (from the Jardim Oceânico subway deck) operates 24 hours a day. The price is usually fixed, but there might be a small surcharge late at night.",
    es: "<strong>Barcos 24h:</strong> El cruce principal (por el muelle del metro Jardim Oceânico) funciona las 24 horas. El precio suele ser fijo, pero de madrugada puede tener un pequeño recargo.",
    zh: "<strong>24小时渡船：</strong>主要渡口（从花园海洋地铁站的码头）全天24小时运营。价格通常是固定的，但深夜可能会有小额附加费。"
  },
  {
    pt: "<strong>Leve repelente:</strong> Como estamos cercados de lagoa e muita natureza, os mosquitinhos costumam aparecer no fim da tarde. É sempre bom ter um na mochila!",
    en: "<strong>Bring repellent:</strong> Since we are surrounded by a lagoon and nature, mosquitoes usually appear in the late afternoon. It's always good to have one in your backpack!",
    es: "<strong>Lleva repelente:</strong> Como estamos rodeados de laguna y naturaleza, los mosquitos suelen aparecer al final de la tarde. ¡Siempre es bueno tener uno en la mochila!",
    zh: "<strong>带驱蚊剂：</strong>由于我们周围环绕着泻湖和大量自然环境，蚊子通常在傍晚出没。背包里准备一瓶总是个好主意！"
  },
  {
    pt: "<strong>Passeios de barco:</strong> Combine o valor e o roteiro do passeio antes de embarcar. Os barqueiros da cooperativa local conhecem as melhores histórias e pontos para fotos.",
    en: "<strong>Boat tours:</strong> Agree on the price and itinerary before boarding. The local cooperative boatmen know the best stories and photo spots.",
    es: "<strong>Paseos en barco:</strong> Acuerda el precio y el itinerario antes de embarcar. Los barqueros de la cooperativa local conocen las mejores historias y puntos para fotos.",
    zh: "<strong>乘船游览：</strong>上船前先商定游览价格和路线。当地合作社的船夫们知道最好的故事和拍照地点。"
  },
  {
    pt: "<strong>Sem carros:</strong> Lembre-se, na Ilha da Gigóia não entram carros nem motos! Venha com calçados confortáveis para caminhar pelas nossas ruelas charmosas.",
    en: "<strong>No cars:</strong> Remember, no cars or motorcycles are allowed on Gigóia Island! Wear comfortable shoes to walk through our charming alleys.",
    es: "<strong>Sin coches:</strong> ¡Recuerda, en la Isla Gigóia no entran coches ni motos! Ven con calzado cómodo para caminar por nuestras encantadoras callejuelas.",
    zh: "<strong>无汽车：</strong>记住，吉戈亚岛不允许汽车或摩托车进入！穿上舒适的鞋子，漫步我们迷人的小巷。"
  },
  {
    pt: "<strong>Fauna local:</strong> É comum ver capivaras e jacarés tomando um sol na beira da lagoa. Tire muitas fotos, mas mantenha uma distância segura e nunca alimente os animais silvestres.",
    en: "<strong>Local wildlife:</strong> It's common to see capybaras and caimans sunbathing by the lagoon. Take plenty of photos, but keep a safe distance and never feed wildlife.",
    es: "<strong>Fauna local:</strong> Es común ver carpinchos y yacarés tomando sol a la orilla de la laguna. Saca muchas fotos, pero mantén una distancia segura y nunca alimentes a los animales.",
    zh: "<strong>本地动物：</strong>在泻湖边晒太阳的水豚和凯门鳄非常常见。多拍照，但要保持安全距离，切勿喂食野生动物。"
  },
  {
    pt: "<strong>Dinheiro trocado:</strong> Embora quase todos os restaurantes e pousadas aceitem PIX e cartão, é sempre bom ter um pouco de dinheiro trocado para facilitar o pagamento rápido da travessia.",
    en: "<strong>Small change:</strong> Although almost all restaurants and inns accept cards, it's always good to have some small change to make paying for the boat crossing easier.",
    es: "<strong>Dinero suelto:</strong> Aunque casi todos los restaurantes y posadas aceptan tarjetas, siempre es bueno tener algo de efectivo para facilitar el pago rápido del cruce en barco.",
    zh: "<strong>零钱：</strong>虽然几乎所有餐厅和旅馆都接受刷卡，但准备一些零钱总是好的，方便快速支付渡船费用。"
  },
  {
    pt: "<strong>Bagagem leve:</strong> Como as ruas são estreitas e feitas apenas para pedestres, evite malas de rodinhas muito grandes ou pesadas. Mochilas ou malas menores facilitam muito a chegada até a sua pousada!",
    en: "<strong>Light luggage:</strong> Since the streets are narrow and pedestrian-only, avoid very large or heavy wheeled suitcases. Backpacks or smaller bags make reaching your inn much easier!",
    es: "<strong>Equipaje ligero:</strong> Como las calles son estrechas y solo para peatones, evita las maletas de ruedas muy grandes o pesadas. ¡Las mochilas o maletas pequeñas facilitan mucho la llegada a tu posada!",
    zh: "<strong>轻装行李：</strong>由于街道狭窄且只供行人通行，请避免携带很大或很重的行李箱。背包或小行李箱更方便抵达旅馆！"
  },
  {
    pt: "<strong>Fim de tarde mágico:</strong> O pôr do sol visto da lagoa é um espetáculo à parte. Escolha um restaurante ou barzinho de frente para a água no fim do dia para aproveitar a vista.",
    en: "<strong>Magical sunset:</strong> The sunset seen from the lagoon is a show of its own. Choose a restaurant or bar facing the water at the end of the day to enjoy the view.",
    es: "<strong>Atardecer mágico:</strong> El atardecer visto desde la laguna es un espectáculo aparte. Elige un restaurante o bar frente al agua al final del día para disfrutar de la vista.",
    zh: "<strong>神奇日落：</strong>从泻湖看到的日落是一道独特的风景。在傍晚选择一家面向水面的餐厅或酒吧，欣赏这美丽的景色。"
  },
  {
    pt: "<strong>Agito vs. Calmaria:</strong> Sábados e domingos a ilha fica super animada, com música ao vivo e movimento. Se você busca silêncio absoluto e ruas vazias, prefira visitar de segunda a quinta-feira.",
    en: "<strong>Bustle vs. Calm:</strong> On Saturdays and Sundays, the island is very lively, with live music and crowds. If you seek absolute silence and empty streets, prefer to visit from Monday to Thursday.",
    es: "<strong>Ajetreo vs. Calma:</strong> Los sábados y domingos la isla está muy animada, con música en vivo y movimiento. Si buscas silencio absoluto y calles vacías, prefiere visitar de lunes a jueves.",
    zh: "<strong>热闹 vs 宁静：</strong>周六和周日小岛非常热闹，有现场音乐和人群。如果您追求绝对的安静和空旷的街道，请选择周一至周四来访。"
  },
  {
    pt: "<strong>Sinal de celular:</strong> O Wi-Fi nas pousadas e restaurantes costuma ser excelente, mas o sinal de operadora (4G/5G) pode oscilar em algumas ruazinhas mais fechadas. Salve o mapa ou endereço do seu destino por precaução!",
    en: "<strong>Cell signal:</strong> Wi-Fi in inns and restaurants is usually excellent, but mobile signal (4G/5G) can fluctuate in narrower streets. Save your destination's map or address just in case!",
    es: "<strong>Señal de celular:</strong> El Wi-Fi en las posadas y restaurantes suele ser excelente, pero la señal de red (4G/5G) puede oscilar en algunas calles estrechas. ¡Guarda el mapa o la dirección por precaución!",
    zh: "<strong>手机信号：</strong>旅馆和餐厅的Wi-Fi通常很好，但在一些较封闭的小巷中，运营商信号（4G/5G）可能不稳定。以防万一，请提前保存目的地地图或地址！"
  }
];

// Função que sorteia e exibe a dica
function initCapiTip() {
  const tipTextEl = document.getElementById("tipText");
  if (!tipTextEl) return; 

  const lang = typeof currentLang !== 'undefined' ? currentLang : 'pt';

  const randomIndex = Math.floor(Math.random() * capiTips.length);
  const selectedTip = capiTips[randomIndex];

  tipTextEl.innerHTML = selectedTip[lang] || selectedTip.pt;
}

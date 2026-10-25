/* ============================================================================
   Mapa interativo da Ilha da Gigóia — Portal Ilha da Gigóia
   ----------------------------------------------------------------------------
   Como funciona:
   - A página já traz o mapa simples (iframe) dentro de #mapa-ilha. Este script
     só troca o iframe pelo mapa interativo QUANDO dá tudo certo. Se faltar
     chave, falhar a rede ou não houver nenhuma coordenada preenchida, o
     visitante continua vendo o mapa de sempre. O site nunca piora.
   - A API do Google só é carregada quando o mapa entra na tela, pra não gastar
     cota de quem nem rolou até ali.
   - Os rótulos de comércio do Google ficam DESLIGADOS de propósito: sem isso,
     clicar num restaurante abre o cartão do Google com telefone e site do
     estabelecimento, e a reserva sai por fora.

   PARA PREENCHER AS COORDENADAS (uma vez só):
   abra  https://www.ilhadagigoia.com.br/como-chegar.html?pins
   clique em cima de cada ponto na ordem da lista que aparece na tela, e no
   final copie o bloco pronto e cole aqui embaixo no lugar de PONTOS.
   ========================================================================== */

(function () {
  'use strict';

  // ---- 1. chave e Map ID -------------------------------------------------
  // A chave NAO fica aqui. Ela vem de /mapa-chave.js, que esta' no .gitignore e
  // sobe so' por FTP — mesmo arranjo do gigi-config.php. Assim este arquivo pode
  // ir pro GitHub sem levar a chave junto.
  var API_KEY = window.MAPA_CHAVE || '';

  // Opcional. Com um Map ID os pinos ficam personalizados (bolinha com ícone).
  // Sem ele, o mapa usa os marcadores clássicos e funciona igual.
  var MAP_ID = window.MAPA_MAP_ID || '';

  // ---- 2. os pontos ------------------------------------------------------
  // lat/lng em null = ponto ainda não posicionado, não aparece no mapa.
  var PONTOS = [
    { id: 'embarque', tipo: 'embarque', nome: 'Deck de embarque',
      pagina: 'como-chegar.html', lat: -23.0058689, lng: -43.3093306 },
    { id: 'maracuja', tipo: 'restaurante', nome: 'Maracujá da Ilha',
      pagina: 'restaurante-maracuja.html', lat: -23.0007188, lng: -43.3076355 },
    { id: 'ocya', tipo: 'restaurante', nome: 'Ocyá',
      pagina: 'restaurante-ocya.html', lat: -23.0005780, lng: -43.3111841 },
    { id: 'salome', tipo: 'restaurante', nome: 'Salomé al Mare',
      pagina: 'restaurante-salome.html', lat: -23.0008244, lng: -43.3084344 },
    { id: 'laguna', tipo: 'restaurante', nome: 'Restaurante Laguna',
      pagina: 'restaurante-laguna.html', lat: -23.0027699, lng: -43.3073455 },
    { id: 'deckbar', tipo: 'restaurante', nome: 'Deck Bar',
      pagina: 'restaurante-deck-bar.html', lat: -23.0012342, lng: -43.3085900 },
    { id: 'camarao', tipo: 'restaurante', nome: 'Camarão da Barra',
      pagina: 'restaurante-camarao.html', lat: -23.0052289, lng: -43.3090514 },
    { id: 'venne', tipo: 'restaurante', nome: 'Venne Gastronomia',
      pagina: 'restaurante-venne.html', lat: -23.0019403, lng: -43.3103496 },
    { id: 'caisbar', tipo: 'restaurante', nome: 'Cais Bar',
      pagina: 'restaurante-cais-bar.html', lat: -23.0012886, lng: -43.3089065 }
  ];

  var CENTRO = { lat: -23.0022724, lng: -43.3089808 }; // centro dos 9 pontos
  var ZOOM = 16;

  // ---- 3. textos por idioma ---------------------------------------------
  var TEXTOS = {
    pt: { ver: 'Ver página', embarque: 'Ponto de embarque',
          endereco: 'Av. Armando Lombardi, 370 — Barra da Tijuca',
          travessia: 'Travessia de barco, cerca de 2 minutos. Funciona 24 horas.',
          aviso: 'Toque num pino para ver o lugar.' },
    en: { ver: 'View page', embarque: 'Boarding point',
          endereco: 'Av. Armando Lombardi, 370 — Barra da Tijuca',
          travessia: 'Boat crossing, about 2 minutes. Runs 24 hours.',
          aviso: 'Tap a pin to see the place.' },
    es: { ver: 'Ver página', embarque: 'Punto de embarque',
          endereco: 'Av. Armando Lombardi, 370 — Barra da Tijuca',
          travessia: 'Travesía en barco, unos 2 minutos. Funciona 24 horas.',
          aviso: 'Toca un pin para ver el lugar.' },
    fr: { ver: 'Voir la page', embarque: "Point d'embarquement",
          endereco: 'Av. Armando Lombardi, 370 — Barra da Tijuca',
          travessia: 'Traversée en bateau, environ 2 minutes. 24 h/24.',
          aviso: 'Touchez un repère pour voir le lieu.' },
    zh: { ver: '查看页面', embarque: '登船点',
          endereco: 'Av. Armando Lombardi, 370 — Barra da Tijuca',
          travessia: '乘船约 2 分钟，24 小时运营。',
          aviso: '点击图钉查看地点。' }
  };

  // ---- 4. daqui pra baixo não precisa mexer ------------------------------
  var cfg = window.MAPA_ILHA || {};
  var LANG = cfg.lang || 'pt';
  var BASE = cfg.base || '/';
  var T = TEXTOS[LANG] || TEXTOS.pt;
  var MODO_PINOS = /[?&]pins\b/.test(window.location.search);

  var caixa = document.getElementById('mapa-ilha');
  if (!caixa) return;

  var comCoordenada = PONTOS.filter(function (p) {
    return typeof p.lat === 'number' && typeof p.lng === 'number';
  });
  // Nenhum ponto posicionado ainda: deixa o iframe de sempre no lugar.
  if (!comCoordenada.length && !MODO_PINOS) return;
  // Sem chave, ou com o texto de exemplo ainda la', nao chama o Google: o site fica
  // com o mapa simples em vez de mostrar erro.
  if (!API_KEY || API_KEY.indexOf('COLE_AQUI') === 0) return;

  // Esconde os rótulos de comércio do Google. Sem isto, um toque no nome de um
  // restaurante abre o cartão do Google com o contato direto dele.
  var ESTILO = [
    { featureType: 'poi.business',    stylers: [{ visibility: 'off' }] },
    { featureType: 'poi.attraction',  stylers: [{ visibility: 'off' }] },
    { featureType: 'poi',  elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
    { featureType: 'transit', elementType: 'labels.icon', stylers: [{ visibility: 'off' }] }
  ];

  function carregarApi() {
    return new Promise(function (ok, erro) {
      if (window.google && window.google.maps) return ok();
      var s = document.createElement('script');
      var q = 'key=' + encodeURIComponent(API_KEY) + '&v=weekly&language=' + LANG + '&region=BR';
      if (MAP_ID) q += '&libraries=marker';
      s.src = 'https://maps.googleapis.com/maps/api/js?' + q + '&loading=async&callback=__mapaIlhaPronto';
      s.async = true;
      s.onerror = function () { erro(new Error('nao carregou a API do Maps')); };
      window.__mapaIlhaPronto = function () { ok(); };
      document.head.appendChild(s);
    });
  }

  function escapar(t) {
    return String(t).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function conteudoDoBalao(p) {
    var url = BASE + p.pagina;
    var corpo = p.tipo === 'embarque'
      ? '<div style="color:#5c6360;font-size:13px;line-height:1.45;margin:4px 0 8px">' +
          escapar(T.endereco) + '<br>' + escapar(T.travessia) + '</div>'
      : '<div style="height:6px"></div>';
    return '<div style="font-family:inherit;max-width:240px;padding:2px 2px 4px">' +
      '<strong style="font-size:15px;color:#1d2320">' + escapar(p.nome) + '</strong>' +
      corpo +
      '<a href="' + escapar(url) + '" style="display:inline-block;background:#2e8c42;color:#fff;' +
      'text-decoration:none;font-weight:700;font-size:13px;padding:6px 12px;border-radius:999px">' +
      escapar(T.ver) + '</a></div>';
  }

  function iconeClassico(tipo) {
    var cor = tipo === 'embarque' ? '#1d6fb8' : '#2e8c42';
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 30 40">' +
      '<path d="M15 0C6.7 0 0 6.7 0 15c0 11 15 25 15 25s15-14 15-25C30 6.7 23.3 0 15 0z" fill="' + cor + '"/>' +
      '<circle cx="15" cy="15" r="6" fill="#fff"/></svg>';
    return { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg),
             scaledSize: new google.maps.Size(30, 40), anchor: new google.maps.Point(15, 40) };
  }

  function pinoAvancado(p) {
    var cor = p.tipo === 'embarque' ? '#1d6fb8' : '#2e8c42';
    var el = document.createElement('div');
    el.style.cssText = 'background:' + cor + ';color:#fff;font:700 12px/1 system-ui,sans-serif;' +
      'padding:7px 11px;border-radius:999px;border:2px solid #fff;white-space:nowrap;' +
      'box-shadow:0 2px 6px rgba(0,0,0,.3);cursor:pointer';
    el.textContent = p.nome;
    return el;
  }

  function montar() {
    caixa.innerHTML = '';
    caixa.style.height = '450px';

    var mapa = new google.maps.Map(caixa, {
      center: CENTRO,
      zoom: ZOOM,
      mapId: MAP_ID || undefined,
      styles: MAP_ID ? undefined : ESTILO, // com Map ID o estilo vem do console
      clickableIcons: false,               // não abre o cartão do Google de terceiros
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
      gestureHandling: 'cooperative'       // no celular, só arrasta com dois dedos
    });

    var balao = new google.maps.InfoWindow();
    var usarAvancado = !!(MAP_ID && google.maps.marker && google.maps.marker.AdvancedMarkerElement);

    if (!MODO_PINOS) comCoordenada.forEach(function (p) {
      var marcador;
      if (usarAvancado) {
        marcador = new google.maps.marker.AdvancedMarkerElement({
          map: mapa, position: { lat: p.lat, lng: p.lng }, title: p.nome, content: pinoAvancado(p)
        });
      } else {
        marcador = new google.maps.Marker({
          map: mapa, position: { lat: p.lat, lng: p.lng }, title: p.nome, icon: iconeClassico(p.tipo)
        });
      }
      marcador.addListener('click', function () {
        balao.setContent(conteudoDoBalao(p));
        balao.open({ map: mapa, anchor: marcador });
      });
    });

    if (comCoordenada.length > 1) {
      var area = new google.maps.LatLngBounds();
      comCoordenada.forEach(function (p) { area.extend({ lat: p.lat, lng: p.lng }); });
      mapa.fitBounds(area, 60);
    }

    if (MODO_PINOS) modoPinos(mapa);
  }

  // Modo de ajuste. Os pontos que ainda nao tem coordenada voce clica; os que ja' tem
  // aparecem numerados e ARRASTAVEIS, pra corrigir um sem refazer todos.
  function modoPinos(mapa) {
    var fila = PONTOS.filter(function (p) { return typeof p.lat !== 'number'; });
    var painel = document.createElement('div');
    painel.style.cssText = 'position:absolute;top:10px;left:10px;z-index:5;background:#fff;' +
      'padding:12px 14px;border-radius:10px;font:13px/1.5 system-ui,sans-serif;max-width:310px;' +
      'box-shadow:0 2px 10px rgba(0,0,0,.25)';
    caixa.style.position = 'relative';
    caixa.appendChild(painel);

    function marcar(p) {
      var m = new google.maps.Marker({
        map: mapa,
        position: { lat: p.lat, lng: p.lng },
        draggable: true,
        label: String(PONTOS.indexOf(p) + 1),
        title: p.nome + ' — arraste para corrigir'
      });
      m.addListener('dragend', function (e) {
        p.lat = e.latLng.lat();
        p.lng = e.latLng.lng();
        pintar();
      });
    }

    function bloco() {
      return PONTOS.map(function (p) {
        if (typeof p.lat !== 'number') return null;
        return "    { id: '" + p.id + "', tipo: '" + p.tipo + "', nome: '" +
          p.nome.replace(/'/g, "\\'") + "',\n      pagina: '" + p.pagina +
          "', lat: " + p.lat.toFixed(7) + ', lng: ' + p.lng.toFixed(7) + ' },';
      }).filter(Boolean).join('\n');
    }

    function pintar() {
      if (fila.length) {
        painel.innerHTML = '<b>Clique em:</b><br>' +
          '<span style="font-size:17px;color:#2e8c42"><b>' + fila[0].nome + '</b></span>' +
          '<br><span style="color:#70776f">faltam ' + fila.length + '</span>';
      } else {
        painel.innerHTML = '<b>Arraste qualquer pino para corrigir.</b><br>' +
          '<span style="color:#70776f">O texto abaixo se atualiza sozinho.</span>' +
          '<textarea readonly style="width:280px;height:160px;font:11px/1.3 monospace;' +
          'margin-top:6px">' + bloco() + '</textarea>';
      }
    }

    PONTOS.forEach(function (p) { if (typeof p.lat === 'number') marcar(p); });
    pintar();

    mapa.addListener('click', function (e) {
      if (!fila.length) return;
      var p = fila.shift();
      p.lat = e.latLng.lat();
      p.lng = e.latLng.lng();
      marcar(p);
      pintar();
    });
  }

  // Só carrega a API quando o mapa chega perto da tela.
  function quandoAparecer(fn) {
    if (!('IntersectionObserver' in window)) return fn();
    var obs = new IntersectionObserver(function (itens) {
      if (itens.some(function (i) { return i.isIntersecting; })) { obs.disconnect(); fn(); }
    }, { rootMargin: '300px' });
    obs.observe(caixa);
  }

  quandoAparecer(function () {
    carregarApi()
      .then(montar)
      .catch(function (err) {
        // Deu errado: o iframe original já foi embora? Não — só trocamos em montar().
        console.warn('Mapa interativo indisponível, mantendo o mapa simples:', err && err.message);
      });
  });
})();

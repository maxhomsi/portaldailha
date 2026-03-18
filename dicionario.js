/* =========================================================
   SISTEMA DE TRADUÇÃO E DICIONÁRIO
   ========================================================= */

// Descobre qual idioma o usuário escolheu (padrão é Português 'pt')
const currentLang = localStorage.getItem('ilha_lang') || 'pt';

// Função para o botão de trocar de idioma
function changeLanguage(lang) {
  localStorage.setItem('ilha_lang', lang);
  location.reload(); // Recarrega a página para aplicar o novo idioma
}

/* DICIONÁRIO COMPLETO
   Aqui você adiciona 'en' (Inglês) e 'es' (Espanhol) no futuro.
   Exemplo: nav_ilha: { pt: "A Ilha", en: "The Island", es: "La Isla" }
*/
const DICT = {
  nav_ilha: { pt: "A Ilha" },
  nav_passeios: { pt: "Passeios & Rotas" },
  nav_comer: { pt: "Comer & Beber" },
  nav_hospedagem: { pt: "Hospedagem" },
  nav_fale: { pt: "Fale Conosco" },
  btn_passeios: { pt: "Ver Passeios" },
  btn_conheca: { pt: "Conheça a Ilha" },
  footer_text: { pt: "Portal Ilha da Gigóia — Termos • Privacidade" },

  hero_pill: { pt: "Portal Oficial de Turismo" },
  hero_title_a: { pt: "Descubra o Paraíso Tropical" },
  hero_title_b: { pt: "da Ilha da Gigóia" },
  hero_sub: { pt: "Explore praias, passeios de barco, natureza exuberante e experiências autênticas a apenas minutos do Rio de Janeiro" },
  hero_check: { pt: "Informações oficiais e atualizadas" },
  sect_espera_title: { pt: "O Que Te Espera na Ilha" },
  sect_espera_sub: { pt: "Da natureza exuberante aos passeios de barco, cada momento é uma nova descoberta" },

  capi_tag: { pt: "Capi, seu guia" },
  tip_title: { pt: "Dica do Capi:" },
  
  hm_c1_t: { pt: "Passeios de Barco" },
  hm_c1_d: { pt: "Navegue pelas águas calmas e descubra paisagens deslumbrantes" },
  hm_c1_l: { pt: "Ver roteiros" },
  hm_c2_t: { pt: "Comer & Beber" },
  hm_c2_d: { pt: "Saboreie frutos do mar frescos e pratos da culinária carioca" },
  hm_c2_l: { pt: "Explorar restaurantes" },
  hm_c4_t: { pt: "Hospedagem" },
  hm_c4_d: { pt: "Encontre o lugar perfeito para relaxar e aproveitar a ilha" },
  hm_c4_l: { pt: "Ver opções" },

  gigi_fab: { pt: "Fale com a Gigi" },
  gigi_hello: { pt: "Olá, me chamo Gigi!" },
  gigi_sub: { pt: "Me envie uma mensagem e eu te respondo direto no WhatsApp!" },
  gigi_lbl_name: { pt: "Seu nome *" },
  gigi_lbl_phone: { pt: "Seu telefone *" },
  gigi_lbl_msg: { pt: "Mensagem *" },
  gigi_btn: { pt: "Enviar" },
  gigi_note: { pt: "Ao enviar, abriremos o WhatsApp com sua mensagem pronta." }
};

// Função mágica que busca a palavra certa dependendo do idioma
const t = (key) => DICT[key] ? (DICT[key][currentLang] || DICT[key].pt) : key;
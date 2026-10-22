# Portal Ilha da Gigóia — o site

Leia isto antes de mexer em qualquer coisa. São 63 páginas × 5 idiomas = 315
páginas HTML escritas à mão, publicadas por FTP. **Não existe teste automático
aqui.** A rede de segurança que protege o bot da Gigi não existe neste repo: a
verificação é alguém abrindo a página no navegador.

O bot de WhatsApp é outro projeto, na pasta `gigi-bot`, com `CLAUDE.md` próprio.
As duas coisas se chamam "Gigi" e **não compartilham nada de código.**

## Quem é quem

- **Max** — desenvolvedor, dono do projeto. Decide tudo.
- **Vinicius ("Vini")** — sócio, opera o dia a dia. Atende o cliente no WhatsApp.
  **Não abre planilha e não mexe no site.** Qualquer processo que dependa dele
  abrir algo não vai acontecer.

## A regra que mais importa: `git push` NÃO publica nada

O repo (`github.com/maxhomsi/portaldailha`, **público**) é só versionamento. O
site no ar é atualizado **por FTP, na mão, pelo Max**.

Uma sessão que faz commit, dá push e diz "pronto, está no ar" **está errada**. O
site não mudou. O que você entrega é:

1. o arquivo alterado, salvo na pasta
2. um `_SUBIR-FTP-<ASSUNTO>-<DIA>.txt` na raiz, listando **exatamente** o que
   arrastar e pra onde (há vários exemplos antigos na raiz — siga o formato)

### E antes de montar essa lista: bumpe o `sw.js`

O site é PWA com service worker. O `sw.js` tem:

```js
const CACHE_NAME   = 'ilha-gigoia-v15';
const CACHE_STATIC = 'ilha-static-v15';
```

**Subir HTML/CSS/JS novo sem trocar esse `v15` por `v16` entrega o arquivo velho
para quem já visitou o site.** O Max sobe tudo, abre no celular, vê a página
antiga e acha que o FTP falhou. As duas linhas sobem juntas, e o `sw.js` entra na
lista de arquivos a subir. Isso vale para toda mudança de conteúdo — imagem nova
em pasta nova não precisa, arquivo existente alterado precisa.

## As DUAS Gigis

| | Onde | Cérebro | Modelo |
|---|---|---|---|
| **Gigi do site** (widget) | este repo | `cerebro-gigi-pt/en/es/fr/zh.js` + `cerebro-gigi.js` | Google Gemini, via `gigi-proxy.php` |
| **Gigi do WhatsApp** | pasta `gigi-bot` | `index.js` | Groq |

**Ensinar uma não ensina a outra.** Se o Max pede "a Gigi tem que saber X",
pergunte qual das duas — ou faça nas duas e diga que fez. Esse é o buraco mais
fácil de cair aqui.

O `cerebro-gigi.js` (775 linhas) é o motor; os `cerebro-gigi-<idioma>.js` (~1.700
linhas cada) são o conhecimento, um por idioma. Os `dicionario-<idioma>.js` são a
tradução da interface. Mexer no conhecimento quer dizer mexer em **cinco**
arquivos.

## As DUAS planilhas

Isto não é óbvio e já confundiu: são dois documentos diferentes no Drive.

- **"Eventos"** (`1Jzhxu…`) — abas `Eventos`, `Depoimentos`, **`Preços
  Hospedagem`**, `Preços Passeios`, `Preços Travessia`. É **daqui** que saem os
  preços que a Gigi do WhatsApp fala, e os depoimentos que o site lê.
- **"Gigi Database"** (`1IBxBO…`) — abas `Reservas`, `Passeios Realizados`,
  `Hotel / Restaurante`, `Reserva Perdida`, `Caixa`. É onde o Apps Script
  **escreve** as reservas.

Preço mora na "Eventos". Reserva mora na "Gigi Database".

## Preço: 233 páginas à mão contra uma planilha

O site publica preço em **233 páginas** (50 pt + 50 en + 50 es + 50 fr + 33 zh).
Esses valores estão **escritos no HTML**, um por um. A planilha não alimenta o
site — alimenta só a Gigi do WhatsApp, com cache de 20 minutos.

Então: **mudar o preço na planilha não muda o site**, e mudar no site não muda o
que a Gigi fala. Conferido em 22/10/2026: hoje os dois batem, e os 5 idiomas
batem entre si. Mas isso é coincidência mantida à mão, não garantia.

Ao mexer em preço: mude na planilha **e** nas 5 páginas do idioma, **e** na
`hoteis-pousadas.html` (a página-lista repete os valores), **e** avise o Max que
a Gigi do WhatsApp leva 20 min pra pegar.

Casos combinados de propósito, não conserte sem perguntar:

- **Pousada Ilha da Fantasia** — planilha tem "400 a 500", site não publica valor
- **Pousada Barra** e **Pousada Babel** — não são parceiras: o site publica preço
  (R$300 e R$270), a planilha fica **vazia** de propósito e a coluna "A Gigi
  sugere?" está NÃO. Preço de quem não é parceiro envelhece sem ninguém conferir
- **Pousada Marísis** — sem parceria desde 21/10/2026. Continua no site, a Gigi
  do WhatsApp não oferece
- **Solar das Palmeiras** — espaço de eventos, não pousada. Os R$100 e R$50 da
  página são preço de **passeio** (aba `Preços Passeios`), e batem

## Chave de API: nunca no git, nunca no browser

- A chave do Gemini vive **só** em `gigi-config.php`, que está no `.gitignore` e
  **sobe apenas por FTP**. Nunca commite esse arquivo, nunca ponha chave no
  `gigi-proxy.php`, nunca em `.js` (o browser mostra para qualquer visitante).
- Por que isto está escrito com tanta ênfase: em 07/05/2026 um commit chamado
  "Gemini direto do browser, sem proxy PHP" pôs a chave como `const KEY` dentro
  do `cerebro-gigi.js`. Ela ficou **67 commits** num repo **público**. Duas chaves
  passaram por isso (`…xktk` e `…uIJk`); as duas já foram revogadas e os commits
  hoje carregam chave morta, então não há nada a limpar no histórico. A
  arquitetura atual (browser → `gigi-proxy.php` → `gigi-config.php`) é a certa.

## Os 5 idiomas

Português na raiz; `en/`, `es/`, `fr/`, `zh/` com os **mesmos 63 nomes de
arquivo**. Mudou uma página, mudou nas cinco — ou o site fica inconsistente e o
Google indexa versões que discordam.

Não há include nem template: `<footer>` está escrito dentro de cada página. Por
isso trocar um telefone no rodapé é uma mudança de **310 arquivos** (62 por
idioma), e por isso os `_SUBIR-FTP.txt` antigos têm listas enormes. Faça com
script, nunca à mão.

São 62 e não 63 porque a `offline.html` — a página que o PWA mostra sem internet —
não tem rodapé **de propósito**, igual nos 5 idiomas. Não conserte isso.

**O zh está atrasado:** 33 páginas com preço contra 50 nas outras. Faltam em
`a-ilha`, `agenda-cultural`, `bar-joana`, `bar-kauai`, `bares-drinks`,
`cafe-lanches`, `como-chegar`, `espacos-eventos`, `eventos-experiencias`,
`gaivota`, `hoteis-pousadas`, `oasis`, `pantanal-carioca`, `reserva`,
`restaurante-laguna`, `restaurantes`, `solar-palmeiras`.

## Cuidado: existem cópias velhas das páginas

Duas pastas guardam versões **antigas** de páginas que também existem na raiz:

- `_upload-precos-pousadas/` — 25 arquivos (5 páginas × 5 idiomas), sobra de uma
  leva de upload de preços. **Não está no `.gitignore`**, então entra num
  `git add -A` sem avisar.
- `.stage/` — 4 páginas e um zip. Está ignorada.

Conferido em 22/10/2026: os **preços nelas são idênticos** aos da raiz; o que
muda é o resto do conteúdo, e a raiz é a versão mais nova. Então não há preço
errado escondido ali — mas **edite sempre a raiz**. Mexer em
`_upload-precos-pousadas/casanova.html` pensando que é a página do site é um erro
que não dá erro: você salva, manda subir, e nada muda no ar.

## Como trabalhar aqui

- **Não mude o que não foi pedido.** O Max pediu isso explicitamente.
- **A página do site é a da raiz** (ou a de `en/`, `es/`, `fr/`, `zh/`). Qualquer
  outra cópia é sobra.
- **Sem teste, a verificação é olhar.** Depois de mexer em página, confira o HTML
  (tag fechada, acento, link) e diga ao Max o que ele precisa abrir no navegador.
- **Comentário e mensagem de commit explicam POR QUE**, com o caso real que
  motivou. No projeto do bot o `git log` é a documentação de verdade; aqui
  também.
- **Nunca invente preço, horário, telefone ou endereço.** Se não está na planilha
  nem numa página existente, pergunte.

### Atualize esta documentação no MESMO commit

**Regra, não sugestão.** Mudou algo que este arquivo afirma — a contagem de
páginas, a versão do `sw.js`, o estado, uma pendência, o nome de um arquivo? O
commit que muda o código é o mesmo que corrige o texto.

Documento desatualizado é pior que documento nenhum: a sessão nova lê isto antes
de olhar o código e decide errado com confiança. No projeto do bot esse bug
apareceu três vezes em dois dias. Aqui o risco é maior, porque não há teste que
cobre — **no `gigi-bot` existe o `testes/docs.js` para isso; neste repo a
responsabilidade é inteiramente sua.**

## Estado em 22/10/2026

- **315 arquivos não commitados** (251 modificados, 63 novos, 1 apagado). Entre
  eles a limpeza do `gigi-proxy.php` que tirou a chave do código — correta e
  ainda não commitada. Antes de qualquer coisa, entenda com o Max o que desse
  bolo deve entrar e o que é lixo.
- O `HEAD` publicado no GitHub (`7e7fb5a`) ainda contém a chave morta no
  `gigi-proxy.php`. Commitar a limpeza resolve o presente; o histórico fica, e
  está tudo bem porque a chave não vale mais nada.
- `_to_delete/` tem 14 itens, entre eles `HEAD.lock.*` — sobra de git rodado por
  sessões anteriores, que nesta pasta não consegue apagar os próprios locks.
  Lixo, pode ignorar.
- A promoção "Passeio + Almoço no Pantanal Carioca" (R$100) tem validade até
  **31/12/2026** na planilha. O site publica sem prazo. Em 01/01/2027 a Gigi do
  WhatsApp para de falar esse valor e as páginas continuam.

## Onde estão as coisas

```
*.html                    63 páginas em português (raiz)
en/ es/ fr/ zh/           as mesmas 63, por idioma
cerebro-gigi.js           motor do widget da Gigi do site
cerebro-gigi-<id>.js      conhecimento dela, um por idioma
dicionario-<id>.js        tradução da interface
app.js                    JS geral do site
sw.js                     service worker — BUMPE A VERSÃO ao subir
gigi-proxy.php            chama o Gemini; sem chave dentro
gigi-config.php           A CHAVE. gitignored, só FTP
depoimentos.js            lê a aba Depoimentos da planilha "Eventos"
eventos.js mapa-ilha.js   agenda e mapa
assets/                   312 imagens
.htaccess                 404 e cache de imagens (7 dias)
_SUBIR-FTP-*.txt          listas de upload antigas — siga o formato
Claude outputs/           relatórios e listas de sessões anteriores (ignorada)
_upload-precos-pousadas/  CÓPIAS VELHAS de 5 páginas — não é o site
.stage/                   CÓPIAS VELHAS de 4 páginas — não é o site (ignorada)
_to_delete/               lixo de sessões anteriores (ignorada)
```

Fora da raiz e das 4 pastas de idioma não existe página do site.

## Pendências

- Decidir o que fazer com os 315 arquivos não commitados
- Decidir se `_upload-precos-pousadas/` deve ser apagada ou entrar no
  `.gitignore` — hoje ela pode ser commitada por acidente
- Completar o preço nas 17 páginas em chinês
- Conferir com as pousadas os valores marcados "CONFERIR se ainda vale" na aba
  `Preços Hospedagem`
- Decidir o que acontece com a promoção do Pantanal em 01/01/2027

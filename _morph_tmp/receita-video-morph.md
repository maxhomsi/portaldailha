# Vídeo de morph "crescimento" — receita completa

Um clipe de ~25-30s onde o rosto de uma pessoa se transforma continuamente entre fotos de idades diferentes, estilo o clipe "Black or White" do Michael Jackson.

---

## PARTE 1 — O que preparar antes

**10 a 12 fotos da mesma pessoa**, em ordem cronológica. Critérios, do mais pro menos importante:

- Rosto **de frente**, olhando pra câmera
- Expressão parecida entre elas (todas sorrindo, ou todas neutras — misturar fica estranho)
- Boa resolução, luz razoável
- Fundo limpo ajuda, mas **não é obrigatório** — o recorte fecha em cima do rosto e o fundo quase some

Não precisa que estejam centralizadas nem no mesmo enquadramento. Isso é resolvido no passo do alinhamento.

**Espaço pra hospedar as fotos:** conta no [Pixabay](https://pixabay.com) não serve — precisa ser lugar que dê **link direto pro arquivo `.jpg`**. Imgur funciona (o link direto é `https://i.imgur.com/CODIGO.jpg`, não a página `imgur.com/CODIGO`). Google Drive e Dropbox **não funcionam**.

**Música (opcional):** [Pixabay Music](https://pixabay.com/music/) ou a Biblioteca de Áudio do YouTube. Busque por "emotional piano" ou "nostalgic".

---

## PARTE 2 — O prompt

Cole isto no Claude, com as fotos anexadas:

> Quero fazer um vídeo de morph estilo o clipe "Black or White" do Michael Jackson, com estas fotos da mesma pessoa em idades diferentes.
>
> **Passo 1 — Alinhar as fotos.** Antes de gerar qualquer vídeo, processe todas as fotos com OpenCV em Python:
> - corrigir orientação pelo EXIF
> - detectar o rosto e os dois olhos em cada foto
> - rotacionar para deixar a linha dos olhos na horizontal
> - escalar para que a distância entre os olhos seja igual em todas
> - recortar em 3:4 com os olhos sempre na mesma altura (uns 42% da altura do quadro)
> - se o recorte deixar buraco (foto que já é close-up), aumente a escala até preencher o quadro
>
> Me mostre um contact sheet das fotos alinhadas antes de continuar. **Confira especialmente fotos de bebê** — o detector de olhos erra muito nelas; se errar, meça os olhos manualmente sobre uma grade de coordenadas e use valores fixos.
>
> **Passo 2 — Hospedar.** Não use base64 para mandar as imagens (o texto trunca e o JPEG chega corrompido). Me devolva as fotos alinhadas pra eu subir em algum host e te passar os links diretos `.jpg`.
>
> **Passo 3 — Gerar as transições.** Com os links, gere uma transição por par consecutivo (10 fotos = 9 transições) usando o Seedance com primeiro e último quadro:
> - modelo: `doubao-seedance-1-0-pro-250528`
> - resolução 720p, ratio 3:4, duração 3s
> - dispare todas em paralelo
> - prompt de cada transição: *"Seamless facial morph. The face in the first frame gradually and continuously transforms into the face in the last frame: features slowly stretch, blend and flow into one another in one uninterrupted dissolve. The head stays centered and the eyes remain in the same position throughout. Locked-off static camera, no cuts, no zoom, no pan."*
>
> **Passo 4 — Montar.** Se você não conseguir baixar os vídeos gerados (o CDN costuma estar fora da lista de saída permitida), me passe um script que eu rodo aqui pra baixar os trechos. Depois eu te devolvo os arquivos e você emenda com ffmpeg, acelera 1,25x e, se eu mandar uma música, mixa com fade-in e fade-out.

---

## PARTE 3 — As armadilhas (o que deu errado aqui)

Vale avisar seu amigo, porque cada uma dessas custou tempo:

**Modelo.** O `2.0-mini` e o `2.0-fast` batem num timeout fixo de 184 s e morrem antes de entregar — em 720p e em 480p, dá na mesma. O `1.0-lite-i2v` pode não estar liberado na conta ("model is not supported"). O `1.0-pro-fast` não aceita primeiro+último quadro ("task_type flf2v não suportado"). **O que funciona é o `doubao-seedance-1-0-pro-250528`**, ~50s por trecho. Custo: 1,71 crédito por trecho de 3s.

**Base64 não vale a pena.** Sem URL, a única alternativa é embutir a imagem inteira codificada na chamada — 15 a 20 mil caracteres que precisam ser reproduzidos sem errar um único. Erra. Hospedar as fotos e passar link resolve em um minuto.

**O alinhamento é o que faz ou quebra.** Sem ele o rosto pula de tamanho e posição a cada 3 segundos e não parece morph, parece slideshow. Com ele, a cabeça fica travada no centro e a transformação flui.

**Rosto de bebê engana o detector.** O Haar cascade do OpenCV acha "rosto" do tamanho da imagem inteira em close-up de recém-nascido. Sanity check: a distância entre os olhos tem que ficar entre 30% e 60% da largura do rosto detectado — fora disso, medir na mão.

**Privacidade.** Se forem fotos de criança, o host tem que ser temporário e apagado depois. Não subir em repositório público do GitHub, que o histórico guarda para sempre.

---

## Custo e tempo

- ~17 créditos de geração para 10 transições
- ~15 min de processamento, mais o tempo de subir as fotos
- Resultado: 832×1120, 24 fps, 24 a 30 segundos

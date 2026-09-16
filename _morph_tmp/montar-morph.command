#!/bin/bash
# ------------------------------------------------------------------
# Monta o clipe de morph (11 fotos -> 10 transicoes -> 1 video unico)
# Basta dar dois cliques neste arquivo no Finder.
# Precisa de ffmpeg:  brew install ffmpeg
# ------------------------------------------------------------------
set -e
cd "$(dirname "$0")"

URLS=(
"https://platform2.cdn.acedata.cloud/seedance/01b2f868-4afb-449a-9cae-83eb09bf663d.mp4"
"https://platform2.cdn.acedata.cloud/seedance/14d6da7e-12b9-4ebb-a2f1-d6004857203c.mp4"
"https://platform2.cdn.acedata.cloud/seedance/de78bf83-fd96-469d-ac96-51d68cef2018.mp4"
"https://platform2.cdn.acedata.cloud/seedance/e45e08ba-c79d-4680-ab11-72c18b216d10.mp4"
"https://platform2.cdn.acedata.cloud/seedance/57660a16-a7b1-4264-aac9-02d5f73b4321.mp4"
"https://platform2.cdn.acedata.cloud/seedance/7b2ec532-2a4e-4238-a2ff-1d16499dd73d.mp4"
"https://platform2.cdn.acedata.cloud/seedance/2c68a53e-a912-4f29-a742-7e11d6a602e9.mp4"
"https://platform2.cdn.acedata.cloud/seedance/c3134ba7-6da1-4008-8861-16192b84dc38.mp4"
"https://platform2.cdn.acedata.cloud/seedance/c22b1372-d86a-4d9a-bd4f-6c6c7744ed3b.mp4"
"https://platform2.cdn.acedata.cloud/seedance/d4dc7d4a-9b5c-45f6-bfd8-539a42d7cf76.mp4"
)

mkdir -p clipes
echo "Baixando os 10 trechos..."
i=1
for u in "${URLS[@]}"; do
  n=$(printf "%02d" $i)
  if [ ! -s "clipes/$n.mp4" ]; then
    curl -fL --retry 3 -o "clipes/$n.mp4" "$u" || { echo "FALHOU o trecho $n (link pode ter expirado)"; exit 1; }
  fi
  echo "  trecho $n ok"
  i=$((i+1))
done

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo
  echo "ffmpeg nao encontrado. Instale com:  brew install ffmpeg"
  echo "Os 10 trechos ja estao baixados na pasta 'clipes'."
  exit 1
fi

: > lista.txt
for f in clipes/*.mp4; do echo "file '$PWD/$f'" >> lista.txt; done

echo "Juntando..."
ffmpeg -y -loglevel error -f concat -safe 0 -i lista.txt -c copy morph-bruta.mp4 2>/dev/null \
  || ffmpeg -y -loglevel error -f concat -safe 0 -i lista.txt -c:v libx264 -crf 18 -preset slow -pix_fmt yuv420p morph-bruta.mp4

# versao final: leve aceleracao pra transicao ficar mais fluida (30s -> ~24s)
ffmpeg -y -loglevel error -i morph-bruta.mp4 -filter:v "setpts=PTS/1.25" -an morph-final.mp4

rm -f lista.txt
echo
echo "PRONTO ->  $PWD/morph-final.mp4"
echo "(morph-bruta.mp4 e a versao em velocidade normal, 30s)"
open .

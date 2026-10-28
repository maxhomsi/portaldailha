#!/usr/bin/env python3
"""
SITEMAP E LISTA DE FTP SEM TRABALHO MANUAL — rode antes de cada FTP.

    python3 atualizar-sitemap.py            prepara: atualiza o <lastmod> das paginas
                                            que mudaram e escreve a lista do que subir
    python3 atualizar-sitemap.py --subi     depois de subir tudo: grava que o servidor
                                            esta' igual a esta pasta
    python3 atualizar-sitemap.py --conferir so' mostra o que mudaria, nao escreve nada

POR QUE EXISTE (25/10/2026). O deploy e' FTP na mao e o sitemap tem 300 URLs: ninguem
atualizava o <lastmod>, que ficou parado em 08/10 enquanto 290 paginas mudaram em 13/10.
Data atrasada o Google ignora; o que faz ele parar de confiar no sitemap e' o contrario,
marcar tudo como novo a cada envio. Por isso a data so' muda quando o CONTEUDO da pagina
muda: o script guarda a impressao digital (sha256) de cada arquivo como estava no ultimo
FTP, em sitemap-estado.json, e compara.

O mesmo registro responde "o que eu preciso subir?": tudo que mudou desde o ultimo
--subi. E avisa quando HTML/CSS/JS mudou sem o sw.js mudar junto (regra do CLAUDE.md).

Nao acrescenta nem remove URL do sitemap: pagina nova precisa do bloco com hreflang,
que e' decisao de quem cria a pagina. O script so' avisa.
"""
import hashlib, json, os, re, subprocess, sys, datetime

RAIZ = os.path.dirname(os.path.abspath(__file__))
BASE = 'https://www.ilhadagigoia.com.br'
ESTADO = os.path.join(RAIZ, 'sitemap-estado.json')
SITEMAP = os.path.join(RAIZ, 'sitemap.xml')
HOJE = datetime.date.today().isoformat()

# O que NAO vai pro servidor (mesma lista dos _SUBIR-FTP-*.txt).
FORA_PASTAS = {'.git', '.stage', '_to_delete', '_upload-precos-pousadas', 'Claude outputs',
               'assets/marinagemeos', 'assets/pousadas/Babel', 'assets/pousadas/Fantasia',
               '_morph_tmp', 'node_modules'}
FORA_ARQUIVOS = {'sitemap-estado.json', 'CLAUDE.md', 'README.md', 'README.txt', '.gitignore',
                 '.DS_Store', 'segmentar.py', 'atualizar-sitemap.py'}
# Paginas que ficam no servidor mas fora do ar de proposito (redirecionadas no .htaccess).
# Marisis e Barra da Tijuca sairam da parceria em 28/10/2026; se voltarem, tire daqui.
FORA_DO_AR = {'pousada-marisis.html', 'pousada-barra.html'}
def fora(rel):
    nome = os.path.basename(rel)
    if nome in FORA_ARQUIVOS: return True
    if nome.startswith('.') and nome != '.htaccess': return True
    if re.match(r'_?SUBIR', nome): return True
    if nome.endswith(('.py', '.md')): return True
    return any(rel == p or rel.startswith(p + '/') for p in FORA_PASTAS)

def sha(b): return hashlib.sha256(b).hexdigest()

def arquivos_do_site():
    out = {}
    for dirpath, dirs, files in os.walk(RAIZ):
        rel_dir = os.path.relpath(dirpath, RAIZ)
        rel_dir = '' if rel_dir == '.' else rel_dir
        dirs[:] = [d for d in dirs if not fora(os.path.join(rel_dir, d) if rel_dir else d)]
        for f in files:
            rel = os.path.join(rel_dir, f) if rel_dir else f
            if not fora(rel):
                with open(os.path.join(RAIZ, rel), 'rb') as fh: out[rel] = sha(fh.read())
    return out

def arquivo_da_url(u):
    p = u[len(BASE):].split('?')[0]
    if p.endswith('/'): p += 'index.html'
    return p.lstrip('/')

def marco_zero(atuais):
    """Primeira vez: o servidor esta' igual ao ultimo commit (o repositorio foi
    sincronizado com o que esta' no ar em 25/10/2026). Arquivo fora do git: vale o local."""
    est = {}
    for rel, h in atuais.items():
        r = subprocess.run(['git', '-C', RAIZ, 'show', 'HEAD:' + rel], capture_output=True)
        est[rel] = sha(r.stdout) if r.returncode == 0 else h
    return est

def main():
    modo = (sys.argv[1] if len(sys.argv) > 1 else '').strip()
    atuais = arquivos_do_site()
    primeira = not os.path.exists(ESTADO)
    if primeira:
        estado = {'subido_em': None, 'arquivos': marco_zero(atuais)}
        print('Primeira vez: o marco zero e\' o ultimo commit (= o que esta\' no ar).')
    else:
        estado = json.load(open(ESTADO, encoding='utf-8'))
    base = estado['arquivos']

    if modo == '--subi':
        estado = {'subido_em': HOJE, 'arquivos': atuais}
        json.dump(estado, open(ESTADO, 'w', encoding='utf-8'), indent=0, sort_keys=True)
        print('Registrado: o servidor esta\' igual a esta pasta (' + str(len(atuais)) + ' arquivos).')
        return

    mudados = sorted(r for r, h in atuais.items() if base.get(r) != h)
    sumidos = sorted(r for r in base if r not in atuais)

    # --- lastmod
    sm = open(SITEMAP, encoding='utf-8').read()
    novo = sm; trocas = []
    for bloco in re.findall(r'<url>.*?</url>', sm, re.S):
        loc = re.search(r'<loc>([^<]+)</loc>', bloco).group(1)
        rel = arquivo_da_url(loc)
        m = re.search(r'<lastmod>([^<]+)</lastmod>', bloco)
        if not m or rel not in atuais: continue
        antes = m.group(1)
        if primeira:
            # data real da ultima edicao, nunca anterior a que ja' estava la'
            depois = max(antes, datetime.date.fromtimestamp(os.path.getmtime(os.path.join(RAIZ, rel))).isoformat())
        else:
            depois = HOJE if rel in mudados else antes
        if depois != antes:
            novo = novo.replace(bloco, bloco.replace('<lastmod>%s</lastmod>' % antes, '<lastmod>%s</lastmod>' % depois, 1), 1)
            trocas.append((loc, antes, depois))
    # pagina nova fora do sitemap
    locs = set(re.findall(r'<loc>([^<]+)</loc>', sm))
    fora_do_sitemap = []
    for rel in atuais:
        if not rel.endswith('.html') or os.path.basename(rel) in ('offline.html', 'termos.html', 'politica-privacidade.html'): continue
        if os.path.basename(rel) in FORA_DO_AR: continue
        d = os.path.dirname(rel); f = os.path.basename(rel)
        u = BASE + '/' + (d + '/' if d else '') + ('' if f == 'index.html' else f)
        if u not in locs: fora_do_sitemap.append(rel)

    if trocas and modo != '--conferir':
        open(SITEMAP, 'w', encoding='utf-8').write(novo)
        if 'sitemap.xml' not in mudados: mudados.append('sitemap.xml'); mudados.sort()

    # --- relatorio
    print('\nlastmod atualizado em %d URL(s)%s' % (len(trocas), ' (so conferindo, nada gravado)' if modo == '--conferir' else ''))
    for loc, a, d in trocas[:15]: print('   %s  %s -> %s' % (loc.replace(BASE, ''), a, d))
    if len(trocas) > 15: print('   ...')
    if fora_do_sitemap:
        print('\nATENCAO: pagina(s) fora do sitemap (acrescente o bloco com hreflang):')
        for r in fora_do_sitemap: print('   ' + r)
    web = [r for r in mudados if r.endswith(('.html', '.css', '.js')) and r != 'sw.js']
    if web and 'sw.js' not in mudados:
        print('\nATENCAO: mudou HTML/CSS/JS e o sw.js NAO mudou. Bumpe a versao do cache,')
        print('senao quem ja\' visitou continua vendo o arquivo velho (CLAUDE.md, sw.js).')
    print('\n%d arquivo(s) para subir:' % len(mudados))
    for r in mudados: print('   ' + r)
    if sumidos:
        print('\nSumiram daqui desde o ultimo FTP (apague no servidor se for o caso):')
        for r in sumidos: print('   ' + r)

    if modo != '--conferir' and mudados:
        nome = '_SUBIR-FTP-%s.txt' % HOJE
        with open(os.path.join(RAIZ, nome), 'w', encoding='utf-8') as fh:
            fh.write('ARQUIVOS PARA SUBIR POR FTP — %s (gerado por atualizar-sitemap.py)\n\n' % HOJE)
            for r in mudados: fh.write('   ' + r + '\n')
            fh.write('\nDepois de subir tudo:  python3 atualizar-sitemap.py --subi\n')
        print('\nLista gravada em ' + nome + '. Depois de subir:  python3 atualizar-sitemap.py --subi')
    if primeira and modo != '--conferir':
        json.dump(estado, open(ESTADO, 'w', encoding='utf-8'), indent=0, sort_keys=True)

if __name__ == '__main__':
    main()

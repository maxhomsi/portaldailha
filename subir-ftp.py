#!/usr/bin/env python3
"""Sobe pro servidor (GoDaddy) os arquivos que mudaram desde o ultimo FTP, confere
um por um e, se tudo bateu, registra (o mesmo que atualizar-sitemap.py --subi).

    python3 atualizar-sitemap.py      # 1. atualiza o sitemap e mostra a lista
    python3 subir-ftp.py              # 2. sobe a lista, confere e registra
    python3 subir-ftp.py --teste      #    so' testa a conexao (nao sobe nada)
    python3 subir-ftp.py --conferir   #    so' mostra o que subiria
    python3 subir-ftp.py zh/a.html    #    sobe so' esse(s) arquivo(s), sem registrar

POR QUE EXISTE (02/11/2026): arrastando 12 arquivos no Cyberduck, um ficou pra tras
(zh/pantanal-carioca.html) e o --subi registrou o servidor como igual a pasta sem
estar. Aqui a lista sai da mesma conta do atualizar-sitemap.py (sha256 contra
sitemap-estado.json), cada arquivo e' BAIXADO DE VOLTA e comparado, e o registro so'
acontece se todos bateram.

SENHA: nunca neste arquivo (o repositorio e' publico). Fica no ~/.netrc do Mac,
que o curl le' sozinho:
    machine SERVIDOR login USUARIO password SENHA
e o resto em ~/.portaldailha-ftp.json:
    {"protocolo": "ftp", "servidor": "SERVIDOR", "pasta": "/public_html"}
(protocolo: ftp, ftps ou sftp — o mesmo do favorito no Cyberduck)
"""
import importlib.util, json, os, subprocess, sys, urllib.parse
sys.dont_write_bytecode = True   # sem __pycache__ dentro da pasta do site

RAIZ = os.path.dirname(os.path.abspath(__file__))
CONFIG = os.path.expanduser('~/.portaldailha-ftp.json')

spec = importlib.util.spec_from_file_location('atualizar_sitemap', os.path.join(RAIZ, 'atualizar-sitemap.py'))
sm = importlib.util.module_from_spec(spec); spec.loader.exec_module(sm)


def ler_config(caminho=CONFIG):
    if not os.path.exists(caminho):
        sys.exit('Falta ' + caminho + ' (veja o comeco deste arquivo).')
    c = json.load(open(caminho, encoding='utf-8'))
    for k in ('protocolo', 'servidor', 'pasta'):
        if not c.get(k): sys.exit('Falta "%s" em %s' % (k, caminho))
    if c['protocolo'] not in ('ftp', 'ftps', 'sftp'):
        sys.exit('protocolo tem que ser ftp, ftps ou sftp (veio "%s")' % c['protocolo'])
    return c


def url_de(c, rel=''):
    esquema = 'ftp' if c['protocolo'] == 'ftps' else c['protocolo']   # ftps explicito = ftp:// + --ssl-reqd
    pasta = '/' + c['pasta'].strip('/') if c['pasta'].strip('/') else ''
    caminho = pasta + '/' + rel.replace(os.sep, '/')
    return '%s://%s%s' % (esquema, c['servidor'], urllib.parse.quote(caminho))


def curl_base(c):
    cmd = ['curl', '--netrc', '--silent', '--show-error', '--fail', '--max-time', '120']
    if c['protocolo'] == 'ftps': cmd.append('--ssl-reqd')
    return cmd


def com_porta(c, url):
    if not c.get('porta'): return url
    p = urllib.parse.urlsplit(url)
    return urllib.parse.urlunsplit((p.scheme, '%s:%s' % (p.hostname, c['porta']), p.path, '', ''))


def subir(c, rel, rodar=subprocess.run):
    local = os.path.join(RAIZ, rel)
    url = com_porta(c, url_de(c, rel))
    r = rodar(curl_base(c) + ['--ftp-create-dirs', '-T', local, url], capture_output=True)
    if r.returncode != 0:
        return 'falhou ao subir: ' + (r.stderr.decode(errors='replace').strip() or 'curl %d' % r.returncode)
    r = rodar(curl_base(c) + [url], capture_output=True)
    if r.returncode != 0:
        return 'subiu, mas nao consegui baixar de volta pra conferir: ' + r.stderr.decode(errors='replace').strip()
    with open(local, 'rb') as fh: esperado = sm.sha(fh.read())
    if sm.sha(r.stdout) != esperado:
        return 'subiu, mas o que esta' + "'" + ' no servidor NAO bate com a pasta'
    return None


def pendentes():
    atuais = sm.arquivos_do_site()
    estado = json.load(open(sm.ESTADO, encoding='utf-8'))
    base = estado['arquivos']
    mudados = sorted(r for r, h in atuais.items() if base.get(r) != h)
    sumidos = sorted(r for r in base if r not in atuais)
    return mudados, sumidos


def main():
    modo = (sys.argv[1] if len(sys.argv) > 1 else '').strip()
    if modo and not modo.startswith('--'):
        # Arquivos escolhidos a mao: sobe e confere, mas NAO registra — o registro
        # vale pra pasta inteira, e o resto pode nao estar no servidor.
        c = ler_config(); falhas = 0
        for rel in sys.argv[1:]:
            if not os.path.isfile(os.path.join(RAIZ, rel)):
                print('   NAO EXISTE ' + rel); falhas += 1; continue
            erro = subir(c, rel)
            print(('   ok      ' if not erro else '   FALHOU  ') + rel + ('' if not erro else ' — ' + erro))
            falhas += bool(erro)
        return 1 if falhas else 0
    mudados, sumidos = pendentes()
    if modo == '--conferir':
        print('%d arquivo(s) subiriam:' % len(mudados))
        for r in mudados: print('   ' + r)
        return 0
    c = ler_config()
    if modo == '--teste':
        r = subprocess.run(curl_base(c) + ['--list-only', com_porta(c, url_de(c))], capture_output=True)
        if r.returncode != 0:
            print('Nao conectou: ' + r.stderr.decode(errors='replace').strip()); return 1
        nomes = r.stdout.decode(errors='replace').split()
        print('Conectou. Na pasta do site tem %d itens; index.html %s.' % (len(nomes), 'esta\' la\'' if 'index.html' in nomes else 'NAO apareceu — confira a "pasta"'))
        return 0
    if not mudados:
        print('Nada mudou desde o ultimo FTP.'); return 0
    if 'sw.js' not in mudados and any(r.endswith(('.html', '.css', '.js')) for r in mudados):
        print('PAREI: mudou HTML/CSS/JS e o sw.js nao mudou. Bumpe a versao do cache antes (CLAUDE.md).')
        return 1
    print('Subindo %d arquivo(s) para %s ...' % (len(mudados), c['servidor']))
    falhas = []
    for rel in mudados:
        erro = subir(c, rel)
        print(('   ok      ' if not erro else '   FALHOU  ') + rel + ('' if not erro else ' — ' + erro))
        if erro: falhas.append(rel)
        # Login recusado ou servidor fora: parar no primeiro, senao 12 tentativas com
        # senha errada seguidas podem fazer a GoDaddy bloquear a conta.
        if erro and any(('curl: (%d)' % n) in erro for n in (6, 7, 9, 28, 67)):
            print('   ... parei aqui: o problema e' + "'" + ' de conexao ou login, nao do arquivo.')
            falhas += [r for r in mudados[mudados.index(rel) + 1:]]
            break
    if sumidos:
        print('\nSumiram daqui desde o ultimo FTP (nao apaguei nada no servidor; apague a mao se for o caso):')
        for r in sumidos: print('   ' + r)
    if falhas:
        print('\n%d arquivo(s) NAO subiram direito. Nada foi registrado: rode de novo.' % len(falhas))
        return 1
    sys.argv = [sys.argv[0], '--subi']
    sm.main()
    print('Tudo conferido: cada arquivo foi baixado de volta e bate com a pasta.')
    return 0


if __name__ == '__main__':
    sys.exit(main())

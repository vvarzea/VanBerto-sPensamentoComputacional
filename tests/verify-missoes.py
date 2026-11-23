#!/usr/bin/env python3
"""Corre a solução de referência de CADA missão no motor real do jogo (Chromium sem janela)
e confirma que: (1) resolve a missão, (2) respeita o máximo de blocos, (3) tem exatamente o nº de
blocos da tabela OPT (a base das estrelas). Requer:  pip install playwright && playwright install chromium
Uso:  python3 tests/verify-missoes.py     (devolve código 1 se algo estiver errado)"""
import pathlib,sys
from playwright.sync_api import sync_playwright
ROOT=pathlib.Path(__file__).resolve().parent.parent/'blocos'
EXP='''([c,l])=>{cy=c;LV=CY[c].lv;lv=l;const py=VB_SOL[GAME][c][l];try{prog=parsePy(py)}catch(e){return {err:String(e.message||e)}}
 const L=LV[l],tests=L.tests||[null],cnt=prog.filter(b=>b.k!=='end').length,nz=a=>L.free?a.map(k=>'RBGY'.includes(k)?'P':k):a,
 seq=e=>nz(expand(e?{...e}:null).map(a=>a.k)).join(),goal=e=>nz(L.x?L.x(e):L.g).join();
 return {cnt,ok:tests.every(e=>seq(e)===goal(e)),opt:OPT[c][l],max:L.max||null}}'''
CASA='''([c,l])=>{cy=c;LV=CY[c].lv;lv=l;const py=VB_SOL[GAME][c][l];try{prog=parsePy(py)}catch(e){return {err:String(e.message||e)}}
 const L=LV[l],tests=L.tests||[{}],cnt=prog.filter(b=>b.k!=='end').length;
 return {cnt,ok:tests.every(t=>{const E=mk(L,t),r=simulate(E);return !r.st.stop&&won(E,r.st)}),opt:OPT[c][l],max:L.max||null}}'''
bad=total=0
with sync_playwright() as p:
    b=p.chromium.launch()
    for game in ['fabrica','natal','casa-cao']:
        pg=b.new_page(); errs=[]; pg.add_init_script('window.requestAnimationFrame=()=>0')  # só a lógica interessa: não desenhar o 3D torna o teste rápido; pg.on('pageerror',lambda e:errs.append(str(e)))
        pg.goto((ROOT/f'{game}.html').as_uri(),wait_until='domcontentloaded',timeout=90000); pg.wait_for_timeout(2500)
        pg.evaluate(f"window.GAME='{game}'")
        n=pg.evaluate('VB_SOL[GAME].map(c=>c.length)')
        levels=pg.evaluate('CY.map(c=>c.lv.length)')
        if n!=levels: bad+=1; print(f'✗ {game}: nº de soluções {n} ≠ nº de missões {levels}'); continue
        for c,cnt in enumerate(n):
            for l in range(cnt):
                total+=1; r=pg.evaluate(CASA if game=='casa-cao' else EXP,[c,l]); tag=None
                if 'err' in r: tag='não percebe o Python: '+r['err']
                elif not r['ok']: tag='NÃO resolve a missão'
                elif r['max'] and r['cnt']>r['max']: tag=f"excede o máximo ({r['cnt']}>{r['max']})"
                elif r['cnt']!=r['opt']: tag=f"{r['cnt']} blocos mas OPT={r['opt']} (estrelas desajustadas)"
                if tag: bad+=1; print(f'✗ {game} ciclo {c+1} missão {l+1}: {tag}')
        if errs: bad+=1; print(f'✗ {game}: erro JS na página: {errs[0][:120]}')
    b.close()
print(f'{total-bad if bad<=total else 0}/{total} missões OK' if not bad else f'{bad} problema(s) em {total} missões')
sys.exit(1 if bad else 0)

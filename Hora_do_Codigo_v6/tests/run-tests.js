// Testes do jogo — corre com:  node tests/run-tests.js
const fs=require('fs'),path=require('path');
const R=p=>fs.readFileSync(path.join(__dirname,'..',p),'utf8');
let fail=0; const ok=(c,m)=>{ if(!c){fail++;console.error('✗',m);} else console.log('✓',m); };

// 1) as duas implementações da regra das estrelas têm de dar o mesmo resultado
const app=R('app.js');
const cs=app.match(/function computeStars\([^)]*\)\{.*\}\n/)[0];
const computeStars=new Function(cs+';return computeStars;')();
const win={}; new Function('window',R('blocos/vb-core.js'))(win);
let same=true;
for(let o=1;o<=20;o++)for(let u=1;u<=40;u++) if(computeStars(u,o)!==win.VB.stars(u,o)) same=false;
ok(same,'computeStars (app.js) == VB.stars (vb-core.js)');
ok(computeStars(2,2)===3&&computeStars(3,2)===2&&computeStars(4,2)===1,'ótimo 2: 3★ até 2, 2★ até 3, 1★ acima');
ok(computeStars(9,9)===3&&computeStars(12,9)===2&&computeStars(13,9)===1,'ótimo 9: 2★ até 12');
ok(computeStars(5,null)===1&&computeStars(5,Infinity)===1,'sem ótimo conhecido → 1★ (sem erro)');

// 2) os três jogos usam a regra comum e mostram o ótimo
for(const g of ['fabrica','casa-cao','natal']){
  const h=R(`blocos/${g}.html`);
  ok(h.includes('VB.stars(cnt,o)'),`${g}: usa VB.stars`);
  ok(!/cnt<=o\+2/.test(h),`${g}: sem a regra antiga (+2)`);
}

// 3) a página da professora coincide com a regra
const pr=R('professora.html'); let bad=0,n=0;
for(const m of pr.matchAll(/⭐⭐⭐ com (\d+) ou menos; ⭐⭐ até (\d+)/g)){n++; const o=+m[1]; if(+m[2]!==o+Math.max(1,Math.ceil(o*0.25))) bad++;}
ok(n>0&&bad===0,`professora.html: ${n} limiares coerentes com a regra`);

// 4) service worker e versões
ok(/vanbertos-v47/.test(R('sw.js')),'sw.js: cache atualizada');
for(const g of ['fabrica','casa-cao','natal']) ok(R(`blocos/${g}.html`).includes('vb-solucoes.js')&&R(`blocos/${g}.html`).includes('VB.compare'),`${g}: carrega as soluções e a comparação`);
ok(R('sw.js').includes('vb-solucoes.js'),'sw.js: guarda vb-solucoes.js offline');
console.log('\nPara validar as soluções no motor real dos jogos:  python3 tests/verify-missoes.py');
ok(R('blocos/casa-cao.html').includes('dog3dUpdate')&&R('blocos/casa-cao.html').includes('id="d3"'),'casa-cao: cão 3D e opção «Cão 3D» presentes');
process.exit(fail?1:0);

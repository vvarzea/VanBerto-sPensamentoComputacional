/* VanBerto's · Ajuda por degraus + «Outras soluções» (partilhado pelos 3 jogos de blocos) */
window.VBA=(function(){
 let C=null,st={key:'',tier:0,open:0,fails:0,revealed:{},won:false};
 const $=id=>document.getElementById(id);
 const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');
 const plural=(n,s,p)=>n+' '+(n===1?s:p);
 function init(cfg){
  C=cfg;
  C.btn.onclick=()=>{toggle()};
  C.host.innerHTML='<div class="ajhd"><b>💡 Ajuda</b><button class="ajx" id="ajx" title="Fechar">✕</button></div><div class="ajtabs"><button data-t="1">1 · Pensar</button><button data-t="2">2 · Onde estou</button><button data-t="3">3 · Quase lá</button></div><div id="ajtxt" class="ajtxt"></div><div id="ajsol"></div>';
  $('ajx').onclick=()=>toggle(false);
  C.host.querySelectorAll('.ajtabs button').forEach(b=>b.onclick=()=>showTier(+b.dataset.t));
  reset();
 }
 function toggle(v){const on=v===undefined?!C.host.classList.contains('on'):v;C.host.classList.toggle('on',on);if(on&&!st.open)showTier(1);if(on&&st.won)renderSolutions();if(on)C.host.scrollIntoView({block:'nearest',behavior:'smooth'})}
 function reset(){
  st.key=C.key();st.open=0;st.fails=0;st.won=false;
  if(!C)return;C.host.classList.remove('on');$('ajtxt').innerHTML='<span class="aj0">Carrega em <b>1 · Pensar</b> para uma primeira pista. As dicas seguintes olham para o programa que já montaste.</span>';$('ajsol').innerHTML='';
  C.host.querySelectorAll('.ajtabs button').forEach(b=>{b.disabled=+b.dataset.t>1;b.classList.remove('cur')});
  C.btn.classList.remove('pulse');
 }
 function showTier(t){
  if(t>st.open+1)return;st.open=Math.max(st.open,t);
  C.host.querySelectorAll('.ajtabs button').forEach(b=>{const n=+b.dataset.t;b.disabled=n>st.open+1;b.classList.toggle('cur',n===t)});
  const d=C.diag(),h=(C.kind==='grid'?hintsGrid:hintsSeq)(d,t);
  let html='<div class="ajh t'+t+'">'+h.map(x=>'<p>'+x+'</p>').join('')+'</div>';
  if(t===3){const k=C.key();html+=st.revealed[k]?'':'<p class="ajrv"><button id="ajrv">Quero ver como se faz</button> <small>(esta missão fica sem estrelas)</small></p>'}
  $('ajtxt').innerHTML=html;
  const rv=$('ajrv');if(rv)rv.onclick=()=>{st.revealed[C.key()]=true;const S=C.sol();if(S&&S.alts.length){renderSolutions(true)}};
 }
 /* ---------- dicas: sequência de ações (fábricas) ---------- */
 function runInfo(G){let best={n:1,k:G[0]},n=1;for(let i=1;i<G.length;i++){if(G[i]===G[i-1]){n++;if(n>best.n)best={n,k:G[i]}}else n=1}return best}
 function hasPeriod(G){for(let d=2;d<=Math.floor(G.length/2);d++){let ok=true,reps=Math.floor(G.length/d);for(let i=d;i<reps*d&&ok;i++)if(G[i]!==G[i%d])ok=false;if(ok&&reps>=2)return d}return 0}
 function hintsSeq(d,t){
  const out=[],P=d.per[0],G=P.G,nm=d.nm;
  const firstBad=d.per.find(p=>p.A.join()!==p.G.join());
  if(t===1){
   if(d.pre)out.push('🐞 O programa já está montado, mas tem um erro. Carrega em <b>Executar</b> e vê o que acontece. Compara com o que a missão pede.');
   if(d.hasPecas)out.push('O número de vezes muda de pedido para pedido. Que bloco repete <b>enquanto</b> ainda faltar fazer?');
   if(d.hasCor)out.push('A cor muda conforme o pedido. Precisas de <b>escolher</b>: «se» o pedido for de uma cor, faz uma coisa; «senão», faz outra.');
   if(d.hasDef)out.push('Só <b>se houver defeito</b> é que se repara. O bloco «se» serve para decidir isso.');
   if(!d.hasPecas&&!d.hasCor&&!d.hasDef&&!d.pre){
    const r=runInfo(G),per=d.rep?hasPeriod(G):0;
    if(d.rep&&r.n>=3)out.push('Repara: «'+esc(nm(r.k))+'» aparece <b>'+r.n+' vezes seguidas</b>. Em vez de '+r.n+' blocos iguais, existe um bloco que repete por ti.');
    else if(d.rep&&per)out.push('Há um grupo de passos que <b>se repete</b>. Consegues pô-lo dentro de um «repete»?');
    else out.push('Lê a missão devagar e faz uma <b>lista dos passos</b>, pela ordem. Depois transforma cada passo num bloco.');
   }
   if(d.max)out.push('O limite é de <b>'+d.max+' blocos</b>: procura o que se pode poupar.');
   out.push('Liga os blocos por baixo de <b>«quando carregar em ▶ Executar»</b>.');
   return out;
  }
  if(d.empty){return ['Ainda não há blocos ligados. Arrasta um bloco para debaixo de <b>«quando carregar em ▶ Executar»</b> e carrega em Executar.']}
  if(d.orphans>0)out.push('Tens <b>'+plural(d.orphans,'bloco solto','blocos soltos')+'</b> que não estão ligados a «quando carregar em ▶ Executar». Só contam os blocos ligados.');
  if(d.max&&d.cnt>d.max)out.push('Usas <b>'+d.cnt+' blocos</b> e o limite é '+d.max+'. Procura passos iguais seguidos para os juntares num «repete».');
  const A=firstBad?firstBad.A:P.A,Gg=firstBad?firstBad.G:P.G;
  if(!firstBad){
   if(d.max&&d.cnt>d.max){return out}
   out.push('✅ O resultado está certo para todos os casos. Se tiveres mais blocos do que o necessário, tenta poupar.');return out;
  }
  if(d.per.length>1){const okN=d.per.filter(p=>p.A.join()===p.G.join()).length;if(okN>0)out.push('O teu programa funciona em <b>'+okN+' de '+d.per.length+'</b> casos. Tem de servir para qualquer pedido: carrega em Executar várias vezes e observa.')}
  let i=0;while(i<A.length&&i<Gg.length&&A[i]===Gg[i])i++;
  if(t===2){
   if(i>=Gg.length)out.push('Fizeste os passos certos, mas <b>há passos a mais</b> no fim.');
   else if(i>=A.length)out.push((i===1?'O <b>1.º passo</b> está certo':'Os <b>'+i+' primeiros passos</b> estão certos')+' ✅, mas o programa acaba cedo: <b>faltam passos</b> no fim.');
   else{
    out.push((i===0?'Logo o <b>1.º passo</b> não é o esperado.':i===1?'O <b>1.º passo</b> está certo ✅. ':'Os <b>'+i+' primeiros passos</b> estão certos ✅. ')+(i===0?'':'O erro está no <b>passo '+(i+1)+'</b>.'));
    if(A[i]===undefined||false){}
    // repetições com número errado
    const tk=Gg[i];if(A[i]===tk){} 
    let ra=0;while(i+ra<A.length&&A[i+ra]===A[i])ra++;let rg=0;while(i+rg<Gg.length&&Gg[i+rg]===Gg[i])rg++;
    if(A[i]===Gg[i]&&ra!==rg)out.push('Confere <b>quantas vezes</b> repete «'+esc(nm(Gg[i]))+'»: o teu programa faz '+ra+' e a missão pede '+rg+'.');
   }
   return out;
  }
  /* degrau 3 */
  if(i>=Gg.length)out.push('Depois do último passo da missão já não há nada a fazer: <b>tira os blocos a mais</b> do fim.');
  else if(i>=A.length)out.push('Falta fazer «<b>'+esc(nm(Gg[i]))+'</b>» (passo '+(i+1)+').');
  else out.push('No passo <b>'+(i+1)+'</b> o teu programa faz «'+esc(nm(A[i]))+'», mas a missão pede «<b>'+esc(nm(Gg[i]))+'</b>».');
  const S=C.sol();if(S&&S.alts&&S.alts.length)out.push('Há uma solução com <b>'+S.alts[0].cnt+' blocos</b>'+(S.alts[0].cnt<=S.opt?' (⭐⭐⭐)':'')+'. Estás perto!');
  return out;
 }
 /* ---------- dicas: grelha (cão) ---------- */
 const NOME_DIR=(dx,dy)=>{const a=[];if(dx)a.push(plural(Math.abs(dx),'casa','casas')+' para '+(dx>0?'a direita':'a esquerda'));if(dy)a.push(plural(Math.abs(dy),'casa','casas')+' para '+(dy>0?'baixo':'cima'));return a.join(' e ')};
 function hintsGrid(d,t){
  const out=[],P=d.per[0],nm=d.nm;
  if(t===1){
   if(d.pre)out.push('🐞 O programa já está montado, mas tem um erro. Carrega em <b>Executar</b> e vê por onde o cão vai.');
   if(d.hasDoors)out.push('A porta só abre quando o cão <b>está em cima do botão vermelho</b> e usa «abrir a porta». Planeia: botão primeiro, porta depois.');
   if(d.hasLamps)out.push('O cão só acende um candeeiro se estiver <b>em cima dele</b>. Todos os candeeiros têm de ficar acesos antes de chegares à tigela.');
   if(d.hasWalls&&!d.hasDoors)out.push('Há <b>obstáculos</b> no caminho. Desenha o percurso (ou imagina-o) e conta os passos de cada troço.');
   if(d.tests)out.push('O cão pode começar em sítios diferentes: usa «<b>enquanto</b> o caminho estiver livre» para andar até ao fim, em vez de contar passos.');
   const r=(()=>{let b=1,n=1,k=d.solActs&&d.solActs[0];if(!d.solActs)return 1;for(let i=1;i<d.solActs.length;i++){if(d.solActs[i]===d.solActs[i-1]){n++;b=Math.max(b,n)}else n=1}return b})();
   if(d.rep&&r>=3)out.push('Há passos <b>seguidos iguais</b>: usa «repete» para os juntar.');
   out.push('Lembra-te: o cão só anda <b>para a frente</b>. Para mudar de direção, primeiro vira, depois anda.');
   if(d.max)out.push('Limite: <b>'+d.max+' blocos</b>.');
   return out;
  }
  if(d.empty)return ['Ainda não há blocos ligados. Arrasta um bloco para debaixo de <b>«quando carregar em ▶ Executar»</b> e carrega em Executar.'];
  if(d.orphans>0)out.push('Tens <b>'+plural(d.orphans,'bloco solto','blocos soltos')+'</b> que não estão ligados a «quando carregar em ▶ Executar».');
  if(d.max&&d.cnt>d.max)out.push('Usas <b>'+d.cnt+' blocos</b> e o limite é '+d.max+'.');
  if(P.stop){
   const i=P.acts.length;
   if(P.err==='luz')out.push('💡 O cão tentou acender uma luz onde <b>não há candeeiro</b> (passo '+(i+1)+'). Só funciona em cima de um candeeiro.');
   else if(P.err==='porta')out.push('🚪 O cão tentou abrir uma porta onde <b>não há botão</b> (passo '+(i+1)+'). Só funciona em cima do botão vermelho.');
   else out.push('💥 O cão <b>bateu num obstáculo</b> no passo '+(i+1)+'. Confere as curvas e quantos passos dás.');
   if(t===3&&d.solActs){const j=firstDiff(P.acts,d.solActs);if(j<d.solActs.length)out.push('No passo <b>'+(j+1)+'</b> devias fazer «<b>'+esc(nm(d.solActs[j]))+'</b>».')}
   return out;
  }
  if(P.ok&&d.per.every(p=>p.ok)){out.push('✅ O cão chega sempre ao destino. Se gastares mais blocos do que o necessário, tenta poupar.');return out}
  if(d.per.length>1){const okN=d.per.filter(p=>p.ok).length;out.push('O teu programa funciona em <b>'+okN+' de '+d.per.length+'</b> casos. Tem de funcionar quando o cão começa em qualquer sítio.')}
  const bad=d.per.find(p=>!p.ok)||P;
  if(t===2){
   const dx=bad.tx-bad.x,dy=bad.ty-bad.y;
   if(dx||dy)out.push('O cão ficou em <b>('+(bad.x+1)+', '+(bad.y+1)+')</b>. Faltam '+NOME_DIR(dx,dy)+' até à tigela.');
   else if(bad.lampsLeft>0)out.push('O cão chegou à tigela, mas faltam <b>'+plural(bad.lampsLeft,'candeeiro','candeeiros')+'</b> por acender.');
   if(dx||dy){if(bad.lampsLeft>0)out.push('Ainda faltam <b>'+plural(bad.lampsLeft,'candeeiro','candeeiros')+'</b> por acender.')}
   return out;
  }
  if(d.solActs){const j=firstDiff(bad.acts,d.solActs);if(j<d.solActs.length)out.push('No passo <b>'+(j+1)+'</b> o cão devia fazer «<b>'+esc(nm(d.solActs[j]))+'</b>»'+(bad.acts[j]?' em vez de «'+esc(nm(bad.acts[j]))+'»':'')+'.');else out.push('Os passos que tens estão certos até onde chegam: <b>faltam passos no fim</b>.')}
  const S=C.sol();if(S&&S.alts&&S.alts.length)out.push('Há uma solução com <b>'+S.alts[0].cnt+' blocos</b>.');
  return out;
 }
 function firstDiff(a,b){let i=0;while(i<a.length&&i<b.length&&a[i]===b[i])i++;return i}
 /* ---------- depois de acertar / falhar ---------- */
 function onFail(){
  if(st.key!==C.key())reset();st.fails++;
  C.btn.classList.add('pulse');
  if(st.fails>=2&&!C.host.classList.contains('on')){const m=$('msg');if(m&&!m.querySelector('.ajhint'))m.insertAdjacentHTML('beforeend',' <button class="ajhint" id="ajh" type="button">💡 Precisas de uma dica?</button>');const h=$('ajh');if(h)h.onclick=()=>{toggle(true)}}
  if(C.host.classList.contains('on')&&st.open)showTier(Math.min(3,Math.max(1,st.open)));
 }
 function onWin(){
  if(st.key!==C.key())reset();st.won=true;C.btn.classList.remove('pulse');
  const m=$('msg');if(m){m.insertAdjacentHTML('beforeend',' <button class="ajs" id="ajs" type="button">🔎 Outras soluções</button>');const b=$('ajs');if(b)b.onclick=()=>{toggle(true);renderSolutions();$('ajsol').scrollIntoView({block:'nearest',behavior:'smooth'})}}
 }
 function cap(n){return st.revealed[C.key()]?1:n}
 /* ---------- mostrar soluções ---------- */
 function blocksHtml(p){
  let d=0,h='<div class="mini">';
  p.forEach(t=>{
   if(t.k==='end'){d=Math.max(0,d-1);return}
   if(t.k==='else'){h+='<div class="mb" style="margin-left:'+(Math.max(0,d-1)*14)+'px;background:'+C.ctrl+'">senão</div>';return}
   const txt=t.k==='rep'?'repete '+t.n+' vezes':C.open.includes(t.k)?(t.k==='wh'?'enquanto ':'se ')+esc(C.label(t.k)):esc(C.label(t.k));
   const col=t.k==='rep'?C.repc:C.open.includes(t.k)?(t.k==='wh'?C.whc:C.ctrl):C.color(t.k);
   h+='<div class="mb" style="margin-left:'+(d*14)+'px;background:'+col+'">'+txt+'</div>';
   if(C.open.includes(t.k)||t.k==='rep')d++;
  });
  return h+'</div>';
 }
 function notes(alt,idx){
  const p=alt.p,has=k=>p.some(t=>t.k===k),reps=p.filter(t=>t.k==='rep').length,nested=(()=>{let d=0,m=0;p.forEach(t=>{if(t.k==='rep'||t.k==='wh'||C.open.includes(t.k)){d++;m=Math.max(m,d)}else if(t.k==='end')d--});return m>=2})();
  const out=[];
  if(idx===0)out.push('É a solução <b>mais curta</b> que encontrámos.');
  if(alt.tag==='semrepetir')out.push('Sem «repete»: <b>mais fácil de ler</b>, mas com mais blocos.');
  else if(idx>0&&!has('rep')&&!has('wh')&&!p.some(t=>['ifB','ifR','ifD','ifO'].includes(t.k))&&C.kind==='grid')out.push('Outro caminho para chegar ao mesmo sítio.');
  if(has('rep')&&nested&&reps>=2)out.push('Usa <b>repete dentro de repete</b>.');
  else if(has('rep'))out.push('Usa «repete» para evitar blocos iguais seguidos.');
  if(has('wh'))out.push('O «enquanto» funciona <b>seja qual for o número</b> de peças/passos.');
  if(has('else'))out.push('Escolhe com «<b>se… senão</b>».');
  else if(p.filter(t=>['ifB','ifR','ifD','ifO'].includes(t.k)).length>=2)out.push('Usa <b>dois «se» seguidos</b>, um para cada caso.');
  return out.join(' ');
 }
 function renderSolutions(reveal){
  const S=C.sol(),host=$('ajsol');
  if(!S||!S.alts.length){host.innerHTML='<div class="solbox"><b>🔎 Outras soluções</b><p>Para esta missão só encontrámos uma maneira de resolver com estes blocos.</p></div>';return}
  const mine=JSON.stringify(C.prog().map(t=>t.k==='rep'?{k:t.k,n:t.n}:{k:t.k}));
  const same=a=>JSON.stringify(a.p.map(t=>t.k==='rep'?{k:t.k,n:t.n}:{k:t.k}))===mine;
  const cnt=C.prog().filter(t=>t.k!=='end').length;
  let html='<div class="solbox"><b>'+(reveal?'👀 Uma solução':'🔎 Outras maneiras de resolver')+'</b><p class="solmy">'+(reveal?'Podes carregar em «Experimentar» e depois em Executar.':'A tua solução usa <b>'+cnt+' blocos</b>. Vê outras possibilidades e compara.')+'</p>';
  const list=reveal?S.alts.slice(0,1):S.alts;
  list.forEach((a,i)=>{
   const star=a.cnt<=S.opt?' ⭐⭐⭐':'';
   html+='<div class="solc'+(same(a)?' mine':'')+'"><div class="solh"><b>Solução '+String.fromCharCode(65+i)+'</b> · '+a.cnt+' blocos'+star+(same(a)?' <em>(a tua)</em>':'')+'</div>'+blocksHtml(a.p)+'<pre class="solpy">'+C.py(a.p).map(l=>esc(l)).join('\n')+'</pre><p class="soln">'+notes(a,i)+'</p><button class="solb" data-i="'+i+'" type="button">Experimentar no editor</button></div>';
  });
  if(list.length===1&&!reveal)html+='<p class="soln">Com estes blocos só encontrámos <b>esta maneira</b> de resolver a missão.</p>';
  host.innerHTML=html+'</div>';
  host.querySelectorAll('.solb').forEach(b=>b.onclick=()=>{C.load(list[+b.dataset.i].p);const m=$('msg');if(m)m.textContent='Solução carregada. Carrega em Executar para ver! ▶'});
 }
 return {init,reset,onFail,onWin,cap,toggle};
})();

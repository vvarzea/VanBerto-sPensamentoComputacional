/* VanBerto's · motor comum dos jogos de blocos (Fábrica, Casa e Cão, Natal) */
window.VB=(function(){
 function build(prog,OPEN){const root={b:[]},st=[root];
  prog.forEach((t,i)=>{const top=st[st.length-1],add=n=>(top.inElse?top.e:top.b).push(n);
   if(OPEN.includes(t.k)){const n={t,i,b:[],e:null,inElse:false};add(n);st.push(n)}
   else if(t.k==='else'){if(top!==root){top.inElse=true;top.e=[]}}
   else if(t.k==='end'){if(st.length>1)st.pop()}
   else add({t,i})});
  return root.b}
 function toPy(prog,PY,OPEN){let ind=0,o=[],po=false;
  for(const b of prog){
   if(b.k==='else'){ind=Math.max(0,ind-1);o.push('    '.repeat(ind)+'else:');ind++;po=true;continue}
   if(b.k==='end'){if(po)o.push('    '.repeat(ind)+'pass');ind=Math.max(0,ind-1);po=false;continue}
   const sp='    '.repeat(ind);
   if(b.k==='rep'){o.push(sp+'for i in range('+b.n+'):');ind++;po=true;continue}
   o.push(sp+PY[b.k]);
   if(OPEN.includes(b.k)){ind++;po=true}else po=false}
  return o.join('\n')||'# o teu programa aparece aqui'}
 function delRange(prog,i,OPEN){const rm=[i];
  if(OPEN.includes(prog[i].k)){let d=1;for(let j=i+1;j<prog.length;j++){const k=prog[j].k;
   if(OPEN.includes(k))d++;else if(k==='else'&&d===1)rm.push(j);else if(k==='end'&&--d===0){rm.push(j);break}}}
  return rm}
 /* pistas por degraus: 1.ª falha = incentivo, 2.ª = onde está o erro, 3.ª em diante = o que era esperado */
 function hint(fails,A,G,nm){
  const i=A.findIndex((k,j)=>k!==G[j]),inside=i>=0&&i<G.length;
  if(fails<=1)return '❌ Quase! Lê outra vez a missão e confere a ordem dos blocos.';
  if(fails===2)return inside?'💡 Pista: o erro está no passo '+(i+1)+'. Experimenta o programa até esse passo.':A.length<G.length?'💡 Pista: o programa está curto, faltam passos no fim.':'💡 Pista: o programa tem passos a mais no fim.';
  return inside?'❌ No passo '+(i+1)+' fizeste «'+nm(A[i])+'», mas a missão pedia «'+nm(G[i])+'».':A.length<G.length?'❌ Faltou fazer «'+nm(G[A.length])+'» (passo '+(A.length+1)+').':'❌ Fizeste passos a mais depois do que a missão pedia.'}
 /* passo a passo: espera que o aluno carregue em «Próximo passo» */
 function step(){return new Promise(r=>{let b=document.getElementById('vb-step');
  if(!b){b=document.createElement('button');b.id='vb-step';b.type='button';b.textContent='Próximo passo ▶';
   b.style.cssText="position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);z-index:60;background:#2f6bff;color:#fff;font:800 1rem Nunito,system-ui,sans-serif;border:3px solid #1e1b4b;border-radius:16px;box-shadow:0 4px 0 #1e1b4b;padding:12px 22px;cursor:pointer";
   document.body.appendChild(b)}
  b.style.display='block';b.onclick=()=>{b.style.display='none';r()}})}
 return {build,toPy,delRange,hint,step};
})();

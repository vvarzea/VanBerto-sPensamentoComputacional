/* VanBerto's · extras partilhados pelos jogos de blocos (carregado no fim da página):
   1) cartão «Novo conceito» (VB.intro)   2) «Modo teclado»: escrever o programa em texto, sem arrastar blocos
   3) anúncios para leitores de ecrã (aria-live) */
(function(){
 var game=(location.pathname.split('/').pop()||'').replace('.html','');
 var $=function(s){return document.querySelector(s)};
 var kbOn=function(){try{return localStorage.getItem('vb-teclado')==='1'}catch(e){return false}};
 function runIntro(){try{VB.intro&&VB.intro({game:game,cy:cy,lv:lv,parsePy:parsePy,BL:BL,conds:CONDS,whiles:WHILES,open:OPEN,before:$('#bw')&&($('#bw').closest('.bwrap')||$('#bw')),after:function(){try{ED.resize()}catch(e){}}})}catch(e){}}
 function applyKb(){try{
  var on=kbOn(),b=$('#pyb'),w=$('#pyw'),t=$('#py'),c=$('#kb');if(!b)return;if(c)c.checked=on;
  if(on){b.style.display='';b.textContent='⌨️ Escrever';if(w)w.style.display='block';
   if(t&&t.style.display!=='block'){var e=$('#pye');e&&e.onclick&&e.onclick()}}
  else{b.textContent='🐍 Python';if(!CY[cy].py){b.style.display='none';if(w)w.style.display='none'}}
  try{ED.resize()}catch(e){}}catch(e){}}
 function init(){
  var m=$('#msg');if(m){m.setAttribute('role','status');m.setAttribute('aria-live','polite');m.setAttribute('aria-atomic','true')}
  var cv=document.querySelector('canvas');if(cv&&!cv.getAttribute('aria-label')){cv.setAttribute('role','img');cv.setAttribute('aria-label','Cena animada do jogo. Podes jogar só com o teclado no «Modo teclado».')}
  var t=$('#py');if(t){t.setAttribute('aria-label','Código Python do programa. Um comando por linha. Ctrl+Enter aplica e executa.');
   var hint=document.createElement('small');hint.id='kbhint';hint.textContent='⌨️ Um comando por linha (ex.: '+Object.keys(PY).slice(0,2).map(function(k){return PY[k]}).join(', ')+'). Ctrl+Enter aplica e executa.';
   hint.style.cssText='display:block;margin:4px 0;color:#475569';t.insertAdjacentElement('afterend',hint);
   t.addEventListener('keydown',function(e){if(e.ctrlKey&&e.key==='Enter'){e.preventDefault();var a=$('#pya'),g=$('#go');a&&a.click();setTimeout(function(){g&&g.click()},120)}})}
  var lt=$('#lt'),host=lt&&lt.closest('label');
  if(host){var l=document.createElement('label');l.innerHTML='<input type="checkbox" id="kb"> ⌨️ Modo teclado';host.insertAdjacentElement('afterend',l);
   l.querySelector('input').addEventListener('change',function(e){try{localStorage.setItem('vb-teclado',e.target.checked?'1':'0')}catch(x){}applyKb();if(e.target.checked&&t)t.focus()})}
  if(typeof levels==='function'){var orig=levels;levels=function(){var r=orig.apply(this,arguments);runIntro();applyKb();return r}}
  runIntro();applyKb()}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();

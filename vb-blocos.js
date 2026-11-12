/* VanBerto's — Programação com Blocos: abre a Fábrica de Carros e a Casa Inteligente e Cão Robô
   a partir do menu de universos. Os jogos vivem na pasta blocos/ e abrem num ecrã por cima do menu. */
(function(){
  var GAMES={
    fabrica:{title:'🏭 Fábrica de Carros',src:'blocos/fabrica.html',key:'vbf',max:72},
    casa:{title:'🏠 Casa Inteligente e Cão Robô',src:'blocos/casa-cao.html',key:'vbc',max:51}
  };
  var ov=null,fr=null,INLINE=window.VB_BLOCOS_INLINE||null;
  function build(){
    ov=document.createElement('div');ov.id='vb-blocos-ov';
    ov.innerHTML='<div class="bar"><button type="button" id="vb-blocos-back">← Voltar aos universos</button><b id="vb-blocos-title"></b></div><iframe id="vb-blocos-fr" title="Jogo" allow="fullscreen"></iframe>';
    document.body.appendChild(ov);fr=ov.querySelector('#vb-blocos-fr');
    ov.querySelector('#vb-blocos-back').addEventListener('click',close);
  }
  function stars(id){
    var n=0;try{var P=JSON.parse(localStorage.getItem(GAMES[id].key));if(P&&P.d)n=Object.keys(P.d).reduce(function(a,k){return a+P.d[k];},0);}catch(e){}
    return n;
  }
  function paint(){
    Object.keys(GAMES).forEach(function(id){
      var c=document.querySelector('.universe-card[data-universe="'+id+'"]');if(!c)return;
      var el=c.querySelector('.vb-prog');if(!el)return;
      var n=stars(id);el.textContent=n?('⭐ '+n+' / '+GAMES[id].max):'🆕 Ainda não jogaste';
    });
  }
  function open(id){
    if(!ov)build();var g=GAMES[id];
    ov.querySelector('#vb-blocos-title').textContent=g.title;
    if(INLINE&&INLINE[id]){fr.removeAttribute('src');fr.srcdoc=INLINE[id];}else{fr.removeAttribute('srcdoc');fr.src=g.src;}
    ov.classList.add('on');
  }
  function close(){
    if(!ov)return;ov.classList.remove('on');fr.removeAttribute('srcdoc');fr.src='about:blank';paint();
  }
  function init(){
    Object.keys(GAMES).forEach(function(id){
      var c=document.querySelector('.universe-card[data-universe="'+id+'"]');if(!c)return;
      c.addEventListener('click',function(){open(id);});
      c.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();open(id);}});
    });
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&ov&&ov.classList.contains('on'))close();});
    paint();
    var us=document.getElementById('universe-screen');
    if(us)new MutationObserver(function(){if(us.classList.contains('active'))paint();}).observe(us,{attributes:true,attributeFilter:['class']});
  }
  /* depois do head.js (que escreve "Ainda não jogaste" em todos os cartões) */
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(init,0);});else setTimeout(init,0);
})();

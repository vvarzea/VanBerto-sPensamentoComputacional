
  /* PWA: service worker + botão "Instalar" */
  (function(){
    if('serviceWorker' in navigator && (location.protocol==='https:'||location.hostname==='localhost')){
      window.addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){});});
    }
    var standalone=(window.matchMedia&&matchMedia('(display-mode: standalone)').matches)||navigator.standalone;
    var dp=null;
    function btn(){var b=document.getElementById('vb-install');if(!b){b=document.createElement('button');b.id='vb-install';b.textContent='📲 Instalar app';document.body.appendChild(b);}return b;}
    window.addEventListener('beforeinstallprompt',function(e){
      e.preventDefault();dp=e;if(standalone)return;var b=btn();b.classList.add('show');
      b.onclick=function(){dp.prompt();dp.userChoice.finally(function(){b.classList.remove('show');dp=null;});};
    });
    window.addEventListener('appinstalled',function(){var b=document.getElementById('vb-install');if(b)b.classList.remove('show');});
    /* iPhone/iPad: o Safari não tem prompt; mostra a dica uma vez */
    window.addEventListener('load',function(){
      var ios=/iphone|ipad|ipod/i.test(navigator.userAgent);
      if(ios&&!standalone){var k='vb_ios_tip';try{if(localStorage.getItem(k))return;localStorage.setItem(k,'1');}catch(e){}
        var b=btn();b.textContent='📲 Partilhar ▸ Adicionar ao ecrã principal';b.classList.add('show');b.onclick=function(){b.classList.remove('show');};
        setTimeout(function(){b.classList.remove('show');},9000);}
    });
  })();
  
;

  /* Perfil + progresso no cabeçalho (a barra lateral está escondida) */
  window.addEventListener('DOMContentLoaded',function(){
    var b=document.getElementById('btn-hdr-profile'),side=document.getElementById('side-profile'),sp=document.getElementById('side-progress'),h=document.getElementById('hdr-progress');
    if(b&&side) b.addEventListener('click',function(){side.click();});
    function sync(){ if(!sp||!h) return; var n=(sp.textContent.match(/\d+/g)||[]); h.textContent='⭐ '+(n[0]||0)+' · 🌟 '+(n[1]||0); }
    if(sp){ new MutationObserver(sync).observe(sp,{childList:true,subtree:true,characterData:true}); sync(); }
  });
  
;

  /* Velocidade do robô + fonte legível */
  window.addEventListener('DOMContentLoaded',function(){
    var S={slow:1.8,normal:1,fast:.45},cur='normal',D='vb_dys_v1',K='vb_speed_v1';
    try{cur=localStorage.getItem(K)||'normal';}catch(e){} if(!S[cur])cur='normal'; window.vbSpeed=S[cur];
    var row=document.querySelector('#game-screen .controls-row');
    if(row){var w=document.createElement('div');w.className='vb-tools';w.setAttribute('role','group');w.setAttribute('aria-label','Velocidade do robô');
      [['slow','🐢','Devagar'],['normal','🚶','Normal'],['fast','🐇','Rápido']].forEach(function(o){
        var b=document.createElement('button');b.type='button';b.className='btn secondary small';b.textContent=o[1];b.title='Velocidade: '+o[2];b.setAttribute('aria-label',o[2]);
        b.setAttribute('aria-pressed',o[0]===cur);
        b.onclick=function(){cur=o[0];window.vbSpeed=S[cur];try{localStorage.setItem(K,cur);}catch(e){}
          w.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===b);});};
        w.appendChild(b);});
      row.appendChild(w);}
    var hp=document.getElementById('hdr-progress');
    if(hp){var d=document.createElement('button');d.type='button';d.className='btn secondary small';d.textContent='Aa';d.title='Letra mais fácil de ler';d.setAttribute('aria-label','Letra mais fácil de ler');
      var on=false;try{on=localStorage.getItem(D)==='1';}catch(e){}
      function ap(){document.body.classList.toggle('vb-dys',on);d.setAttribute('aria-pressed',on);} ap();
      d.onclick=function(){on=!on;try{localStorage.setItem(D,on?'1':'0');}catch(e){} ap();};
      hp.parentNode.insertBefore(d,hp.nextSibling);}
  });
  
;

  /* Nome obrigatório antes de jogar */
  window.addEventListener('DOMContentLoaded',function(){
    var KEY='vanbertos_student_name_v1';
    function get(){try{return (localStorage.getItem(KEY)||'').trim();}catch(e){return '';}}
    function valid(v){return v.trim().length>=2 && /[A-Za-zÀ-ÿ]/.test(v);}
    var g=document.createElement('div');g.id='vb-name-gate';g.setAttribute('role','dialog');g.setAttribute('aria-modal','true');g.setAttribute('aria-labelledby','vb-name-title');
    g.innerHTML='<div id="vb-name-box"><canvas class="vb-bot" id="vb-gate-bot" width="192" height="192" style="width:96px;height:96px" aria-hidden="true"></canvas><h2 id="vb-name-title">Olá! Como te chamas?</h2><p>O VanBerto\'s precisa de saber o teu nome para guardar o teu progresso.</p>'+
      '<input id="vb-name-input" type="text" maxlength="40" autocomplete="off" autocapitalize="words" placeholder="Escreve o teu nome" aria-label="O teu nome"><button id="vb-name-go" type="button" disabled>Vamos jogar! 🚀</button>'+
      '<small>O nome fica guardado só neste equipamento.</small><p class="vb-by">© Prof.ª Vanda Várzea</p></div>';
    document.body.appendChild(g);
    var inp=g.querySelector('#vb-name-input'),go=g.querySelector('#vb-name-go');
    function bot(c){try{var x=c.getContext('2d');x.clearRect(0,0,c.width,c.height);x.scale(c.width/96,c.height/96);window.drawVanBerto(x,'happy',-1,true);}catch(e){}}
    function show(){bot(g.querySelector('#vb-gate-bot'));g.classList.add('show');inp.value='';go.disabled=true;setTimeout(function(){inp.focus();},50);}
    function save(){var v=inp.value.trim().replace(/\s+/g,' ');if(!valid(v))return;
      try{localStorage.setItem(KEY,v);}catch(e){}
      var pi=document.getElementById('student-name-input');if(pi){pi.value=v;pi.dispatchEvent(new Event('input',{bubbles:true}));}
      g.classList.remove('show');}
    inp.addEventListener('input',function(){go.disabled=!valid(inp.value);});
    inp.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();save();}});
    go.addEventListener('click',save);
    g.addEventListener('keydown',function(e){if(e.key==='Escape')e.stopPropagation();},true);
    document.querySelectorAll('.certificate-bot').forEach(function(sp){var c=document.createElement('canvas');c.width=c.height=192;c.style.cssText='width:56px;height:56px;display:block';sp.textContent='';sp.appendChild(c);bot(c);});
    if(!valid(get())) show();
    /* se apagarem o nome no perfil, volta a pedir */
    var pi=document.getElementById('student-name-input');
    if(pi) pi.addEventListener('blur',function(){if(!valid(pi.value)) show();});
  });
  
;

  window.addEventListener('DOMContentLoaded',function(){
    var $=function(i){return document.getElementById(i);};
    var NK=typeof STUDENT_NAME_KEY!=='undefined'?STUDENT_NAME_KEY:'vanbertos_student_name_v1';
    function name(){try{return (localStorage.getItem(NK)||'').trim();}catch(e){return '';}}
    /* 1. cabeçalho: Perfil = nome do aluno; Aa e Pausa vão para o menu Mais */
    var pb=$('btn-hdr-profile');
    function paint(){var n=name();if(pb)pb.textContent='👤 '+(n||'Perfil');
      var h=document.querySelector('.universe-hero h2');if(h)h.textContent=n?'Olá, '+n.split(' ')[0]+'! Escolhe o teu universo':'Escolhe o teu universo!';}
    var nd=$('vb-student-name-display');if(nd)new MutationObserver(paint).observe(nd,{childList:true,characterData:true,subtree:true});
    var pi=$('student-name-input');if(pi)pi.addEventListener('input',function(){setTimeout(paint,0);});
    window.addEventListener('storage',paint);paint();
    var more=document.querySelector('.hdr-more');
    if(more){[$('btn-teacher-pause')].concat([].slice.call(document.querySelectorAll('.badge-row > .btn')).filter(function(b){return b.textContent.trim()==='Aa';})).forEach(function(b){if(b){b.classList.add('vb-moved');more.appendChild(b);}});}
    /* estado: início / jogo */
    var us=$('universe-screen'),gs=$('game-screen');
    function st(){document.body.classList.toggle('vb-home',!!us&&us.classList.contains('active'));document.body.classList.toggle('vb-ingame',!!gs&&gs.classList.contains('active'));}
    [us,gs].forEach(function(e){if(e)new MutationObserver(st).observe(e,{attributes:true,attributeFilter:['class']});});st();
    /* 3. cartões: sem "Todos os Ciclos", botão Jogar, cores por cartão */
    var tiles=['#ffd23f','#2ee6a6','#4cc9f0','#ff9aa2','#c4b5fd','#fdba74'],gcs=['#ffd23f','#4cc9f0','#2ee6a6','#ff9aa2'];
    document.querySelectorAll('.universe-card').forEach(function(c,i){
      c.style.setProperty('--tile',tiles[i%tiles.length]);
      c.querySelectorAll('.u-chip').forEach(function(x){if(/todos os ciclos/i.test(x.textContent))x.remove();});
      if(!c.querySelector('.vb-play')){var b=document.createElement('div');b.className='vb-play';b.textContent='Jogar! ▶';c.appendChild(b);}
    });
    document.querySelectorAll('.universe-group-label').forEach(function(l,i){l.style.setProperty('--gc',gcs[i%gcs.length]);});
    function prog(id){var raw=null;try{raw=localStorage.getItem((typeof STORAGE_PREFIX!=='undefined'?STORAGE_PREFIX:'vanbertos_unified_v1_')+id);}catch(e){}
      if(!raw)return null;var c=0,st=0;try{Object.values(JSON.parse(raw)).forEach(function(bt){bt&&Object.values(bt).forEach(function(d){d&&d.levels&&Object.values(d.levels).forEach(function(l){if(l&&l.completed){c++;st+=(l.stars||1);}});});});}catch(e){return null;}return {c:c,st:st};}
    function paintProg(){document.querySelectorAll('.universe-card').forEach(function(cd){var el=cd.querySelector('.vb-prog');if(!el){el=document.createElement('div');el.className='vb-prog';var pl=cd.querySelector('.vb-play');cd.insertBefore(el,pl);}
      var r=prog(cd.dataset.universe);el.textContent=(r&&r.c)?('✅ '+r.c+(r.c===1?' nível':' níveis')+' · ⭐ '+r.st):'🆕 Ainda não jogaste';});}
    paintProg();if(us)new MutationObserver(function(){if(us.classList.contains('active'))paintProg();}).observe(us,{attributes:true,attributeFilter:['class']});
    /* 5. continuar onde ficou */
    var uk=typeof UNIVERSE_KEY!=='undefined'?UNIVERSE_KEY:null,last=null;try{if(uk)last=localStorage.getItem(uk);}catch(e){}
    var card=last&&document.querySelector('.universe-card[data-universe="'+last+'"]'),grid=document.querySelector('.universe-grid');
    if(card&&grid){var t=card.querySelector('.u-title'),k=document.createElement('div');k.id='vb-continue';k.className='show';k.setAttribute('role','button');k.tabIndex=0;
      k.innerHTML='<span style="font-size:1.6rem">▶️</span><span>Continuar: '+(t?t.textContent:'')+'</span>';
      k.onclick=function(){card.click();};k.onkeydown=function(e){if(e.key==='Enter')card.click();};grid.insertBefore(k,grid.firstChild);}
  });
  
;(function(){
  window.addEventListener('DOMContentLoaded',function(){
    var er=document.getElementById('er-app');
    if(er&&!document.getElementById('er-sign')){var d=document.createElement('div');d.id='er-sign';d.className='vb-sign';d.textContent='© Prof.ª Vanda Várzea';er.appendChild(d);}
  });
})();

;(function(){
  /* Escape Rooms: cronómetro opcional (desligado por defeito no 1.º ciclo) */
  var K='vb_er_notimer_v1';
  function load(){var v=null;try{v=localStorage.getItem(K);}catch(e){}
    if(v===null){try{return (typeof currentCycleKey!=='undefined')&&currentCycleKey==='1c';}catch(e){return false;}}return v==='1';}
  window.vbErNoTimer=false;
  window.addEventListener('DOMContentLoaded',function(){
    window.vbErNoTimer=load();
    var hero=document.querySelector('.er-hub-hero');if(!hero||document.getElementById('vb-er-timer'))return;
    var b=document.createElement('button');b.id='vb-er-timer';b.type='button';
    function paint(){b.setAttribute('aria-pressed',window.vbErNoTimer);b.textContent=window.vbErNoTimer?'⏱️ Sem cronómetro (calmo)':'⏱️ Com cronómetro (10 min)';}
    b.onclick=function(){window.vbErNoTimer=!window.vbErNoTimer;try{localStorage.setItem(K,window.vbErNoTimer?'1':'0');}catch(e){}paint();};
    paint();hero.appendChild(b);
  });
})();

;(function(){
  window.addEventListener('DOMContentLoaded',function(){
    /* grupos de universos retráteis */
    var K='vb_groups_v1',st={};try{st=JSON.parse(localStorage.getItem(K)||'{}')||{};}catch(e){}
    document.querySelectorAll('.universe-group-label').forEach(function(l){
      var id=l.dataset.group||l.textContent.trim(),cards=[],n=l.nextElementSibling;
      while(n&&!n.classList.contains('universe-group-label')){if(n.classList.contains('universe-card'))cards.push(n);n=n.nextElementSibling;}
      l.setAttribute('role','button');l.tabIndex=0;
      function set(open){l.setAttribute('aria-expanded',open);cards.forEach(function(c){c.classList.toggle('vb-collapsed',!open);});}
      function tog(){var o=l.getAttribute('aria-expanded')!=='false';set(!o);st[id]=!o?1:0;try{localStorage.setItem(K,JSON.stringify(st));}catch(e){}}
      l.addEventListener('click',tog);l.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();tog();}});
      set(st[id]!==0);
    });
    /* menu "Mais" abre sempre dentro do ecrã */
    var more=document.getElementById('hdr-more'),btn=document.getElementById('btn-hdr-more');
    if(more&&btn){
      var place=function(){if(more.classList.contains('qx-hidden'))return;var r=btn.getBoundingClientRect(),w=more.offsetWidth||190;
        more.style.position='fixed';more.style.right='auto';more.style.left=Math.max(8,Math.min(r.left,innerWidth-w-8))+'px';
        more.style.top=(r.bottom+6)+'px';more.style.maxHeight=Math.max(140,innerHeight-r.bottom-18)+'px';};
      new MutationObserver(place).observe(more,{attributes:true,attributeFilter:['class']});
      addEventListener('resize',place);addEventListener('scroll',place,true);
    }
  });
})();

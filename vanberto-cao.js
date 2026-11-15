/* VanBerto's — cão-robô desenhado em canvas. FICHEIRO ÚNICO: qualquer retoque ao cão faz-se só aqui.
   Usado por index.html (jogo principal) e por blocos/*.html. Define window.vbDogDraw e window.drawVanBerto.
   Poses: blink=false|true(pisca)|'happy'|'sad' ; step=-1|0|1 ; armsUp=true acena. Direção: canvas.dataset.vbdir (0 cima,1 dta,2 baixo,3 esq). */
(function(root){
function drawVanBerto(ctx, blink, step, armsUp, dirOverride){
  var cv=ctx.canvas, S=((cv&&cv.width)||96)/96;
  var dir=2;
  if(dirOverride!=null) dir=dirOverride;
  else if(cv&&cv.dataset&&cv.dataset.vbdir!=null&&cv.dataset.vbdir!=='') dir=+cv.dataset.vbdir;
  if(cv&&cv.closest&&cv.closest('.mode3d')) dir=2;
  if(dir!==0&&dir!==1&&dir!==3) dir=2;
  step=(step===0||step===1)?step:-1;

  var OUT='#0e1c4b', BLK='#060a17', CY='#5af2ff', CYD='#22b9ee';
  var happy=(blink==='happy'), blinking=(blink===true), sad=(blink==='sad');
  var PI=Math.PI;

  ctx.setTransform(1,0,0,1,0,0);
  ctx.clearRect(0,0,cv.width,cv.height);
  ctx.setTransform(S,0,0,S,0,0);
  ctx.lineJoin='round'; ctx.lineCap='round';

  /* ---------- utilitários ---------- */
  function rr(x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();}
  function ell(x,y,rx,ry,rot){ctx.beginPath();ctx.ellipse(x,y,rx,ry,rot||0,0,PI*2);}
  function circ(x,y,r){ctx.beginPath();ctx.arc(x,y,r,0,PI*2);}
  function white(x0,y0,x1,y1){var g=ctx.createLinearGradient(x0,y0,x1,y1);g.addColorStop(0,'#ffffff');g.addColorStop(.55,'#eaf0fb');g.addColorStop(1,'#c2d1ec');return g;}
  function blue(x0,y0,x1,y1){var g=ctx.createLinearGradient(x0,y0,x1,y1);g.addColorStop(0,'#4b98ff');g.addColorStop(.55,'#2a63e6');g.addColorStop(1,'#1637a8');return g;}
  function fs(fill,lw){ctx.fillStyle=fill;ctx.fill();ctx.lineWidth=(lw==null?2.2:lw);ctx.strokeStyle=OUT;ctx.stroke();}
  function glow(col,b){ctx.shadowColor=col;ctx.shadowBlur=b*S;}
  function noGlow(){ctx.shadowColor='transparent';ctx.shadowBlur=0;}
  function paw(x,y,s,col,b){
    ctx.save(); if(b) glow(col,b); ctx.fillStyle=col;
    ell(x,y+1.1*s,2.9*s,2.3*s); ctx.fill();
    [[-3.4,-.6,1.15],[-1.2,-2.9,1.2],[1.2,-2.9,1.2],[3.4,-.6,1.15]].forEach(function(t){circ(x+t[0]*s,y+t[1]*s,t[2]*s);ctx.fill();});
    ctx.restore();
  }
  function bez(p,t){var u=1-t;return [u*u*u*p[0][0]+3*u*u*t*p[1][0]+3*u*t*t*p[2][0]+t*t*t*p[3][0],
                                       u*u*u*p[0][1]+3*u*u*t*p[1][1]+3*u*t*t*p[2][1]+t*t*t*p[3][1]];}
  function seg(p,t0,t1,w,col,cap){
    ctx.beginPath(); for(var i=0;i<=14;i++){var q=bez(p,t0+(t1-t0)*i/14); if(i) ctx.lineTo(q[0],q[1]); else ctx.moveTo(q[0],q[1]);}
    ctx.lineWidth=w; ctx.strokeStyle=col; ctx.lineCap=cap||'round'; ctx.stroke(); ctx.lineCap='round';
  }
  function tail(p){
    seg(p,0,1,11,OUT);
    seg(p,0,1,7.4,'#f1f5fd');
    seg(p,.30,.40,7.4,'#101a40','butt');
    seg(p,.52,.62,7.4,'#101a40','butt');
    ctx.save(); glow(CY,5); seg(p,.76,1,7.4,CY); ctx.restore();
    seg(p,.80,.96,2.4,'#d9fcff');
  }
  function shadow(cx,rx){ell(cx,91,rx,4);ctx.fillStyle='rgba(10,24,70,.22)';ctx.fill();}
  function pawFoot(cx,cy,rx,ry,fill){
    ell(cx,cy,rx,ry); fs(fill||white(cx-rx,cy-ry,cx+rx,cy+ry),2.1);
    ctx.save(); ell(cx,cy,rx,ry); ctx.clip();
    ctx.fillStyle='#2a63e6'; ctx.fillRect(cx-rx,cy+ry-2.6,rx*2,4); ctx.restore();
    ctx.strokeStyle='rgba(14,28,75,.55)'; ctx.lineWidth=1.1;
    ctx.beginPath(); ctx.moveTo(cx-rx*.28,cy-ry*.1); ctx.lineTo(cx-rx*.28,cy+ry*.55); ctx.moveTo(cx+rx*.28,cy-ry*.1); ctx.lineTo(cx+rx*.28,cy+ry*.55); ctx.stroke();
    ell(cx,cy,rx,ry); ctx.lineWidth=2.1; ctx.strokeStyle=OUT; ctx.stroke();
  }
  function haunch(cx,cy){
    ell(cx,cy,9.4,10.2); fs(white(cx-9,cy-10,cx+9,cy+10),2.2);
    circ(cx,cy,6.2); ctx.fillStyle='#0a1128'; ctx.fill(); ctx.lineWidth=1.6; ctx.strokeStyle=OUT; ctx.stroke();
    circ(cx,cy,6.2); ctx.lineWidth=1.1; ctx.strokeStyle='rgba(90,242,255,.7)'; ctx.stroke();
    paw(cx,cy-.3,.95,CY,4);
  }
  function collarBand(x,y,w,h){
    rr(x,y,w,h,h/2); fs(blue(x,y,x,y+h),2.2);
    ctx.strokeStyle='rgba(150,225,255,.85)'; ctx.lineWidth=1.1; ctx.beginPath(); ctx.moveTo(x+h/2,y+2); ctx.lineTo(x+w-h/2,y+2); ctx.stroke();
  }
  function tag(cx,cy,sc){
    ctx.save(); ctx.translate(cx,cy); ctx.scale(sc,sc);
    ctx.strokeStyle='#cfd8e8'; ctx.lineWidth=1.4; ctx.beginPath(); ctx.arc(0,-6,2.4,0,PI*2); ctx.stroke();
    ctx.strokeStyle=OUT; ctx.lineWidth=.7; ctx.beginPath(); ctx.arc(0,-6,3.1,0,PI*2); ctx.stroke();
    var K=[[-7.2,-2.6],[7.2,-2.6],[-7.2,2.9],[7.2,2.9]];
    rr(-7.6,-3.6,15.2,8.6,3.2); fs(blue(0,-4,0,5),1.8);
    K.forEach(function(k){circ(k[0],k[1],2.9);ctx.fillStyle='#2a63e6';ctx.fill();ctx.lineWidth=1.8;ctx.strokeStyle=OUT;ctx.stroke();});
    rr(-7.6,-3.6,15.2,8.6,3.2); ctx.fillStyle='#2a63e6'; ctx.fill();
    ctx.strokeStyle='rgba(170,230,255,.9)'; ctx.lineWidth=.9; rr(-6.4,-2.5,12.8,6.4,2.4); ctx.stroke();
    ctx.fillStyle='#fff'; paw(0,.9,.52,'#ffffff',0);
    ctx.restore();
  }
  function ear(root,tip,out,hang){   /* orelha mole azul */
    var rx=root[0], ry=root[1], d=out;      /* d = +1 direita / -1 esquerda */
    ctx.beginPath();
    ctx.moveTo(rx,ry);
    ctx.bezierCurveTo(rx+d*12,ry-8, rx+d*24,ry+2, rx+d*21,ry+16+hang);
    ctx.bezierCurveTo(rx+d*19,ry+24+hang, rx+d*9,ry+27+hang, rx+d*3,ry+16);
    ctx.closePath();
    fs(blue(rx,ry-8,rx+d*22,ry+26),2.3);
    ctx.save(); glow(CY,4); ctx.strokeStyle=CY; ctx.lineWidth=1.5;
    ctx.beginPath(); ctx.moveTo(rx+d*9,ry-4); ctx.bezierCurveTo(rx+d*20,ry-3, rx+d*23,ry+9, rx+d*19.5,ry+17+hang); ctx.stroke(); ctx.restore();
  }
  function eyeArc(cx,cy,r,flat){
    if(sad){ ctx.save(); glow(CY,6); ctx.fillStyle=CY; circ(cx,cy+1.2,2.9); ctx.fill(); noGlow(); ctx.fillStyle='#e3fdff'; circ(cx-.9,cy+.2,1.05); ctx.fill(); ctx.restore(); return; }
    ctx.save(); glow(CY,7); ctx.strokeStyle=CY; ctx.lineWidth=3.2;
    ctx.beginPath();
    if(flat){ ctx.moveTo(cx-r,cy+1); ctx.quadraticCurveTo(cx,cy-.6,cx+r,cy+1); }
    else ctx.arc(cx,cy+1.6,r,PI,PI*2);
    ctx.stroke(); noGlow();
    ctx.strokeStyle='#e3fdff'; ctx.lineWidth=1.1; ctx.stroke(); ctx.restore();
  }
  function mouth(cx,cy,w,hOpen){
    if(sad){ ctx.beginPath(); ctx.moveTo(cx-w*.6,cy+2.6); ctx.quadraticCurveTo(cx,cy-.8,cx+w*.6,cy+2.6); ctx.lineWidth=1.9; ctx.strokeStyle=OUT; ctx.stroke(); return; }
    ctx.beginPath(); ctx.moveTo(cx-w,cy); ctx.quadraticCurveTo(cx,cy+hOpen*1.9,cx+w,cy); ctx.quadraticCurveTo(cx,cy+1.4,cx-w,cy); ctx.closePath();
    ctx.fillStyle='#4a1020'; ctx.fill();
    ctx.save(); ctx.clip(); ell(cx+.6,cy+hOpen*.95,w*.52,hOpen*.42); ctx.fillStyle='#ff6f86'; ctx.fill(); ctx.restore();
    ctx.beginPath(); ctx.moveTo(cx-w,cy); ctx.quadraticCurveTo(cx,cy+hOpen*1.9,cx+w,cy); ctx.lineWidth=1.7; ctx.strokeStyle=OUT; ctx.stroke();
  }

  /* ---------- movimento ---------- */
  var walking=(step===0||step===1);
  var bob=walking?-1.4:0;
  var lift0=(step===0)?5:0, lift1=(step===1)?5:0;
  var wag=(step===0)?-1:(step===1?1:0);

  /* =====================  FRENTE  ===================== */
  function front(){
    shadow(48,25);
    tail(sad?[[62,78],[78,84],[88,80],[86,68]]:[[62,78],[80,80],[90,62],[83+wag*3,43]]);
    /* patas de trás (só se veem as ancas e os pezinhos) */
    pawFoot(26,88.5,7.4,3.9,'#dfe8f7'); pawFoot(70,88.5,7.4,3.9,'#dfe8f7');
    haunch(26.5,77); haunch(69.5,77);
    /* corpo */
    ctx.save(); ctx.translate(0,bob*.5);
    rr(30,55,36,30,14); fs(white(30,55,66,85),2.3);
    ctx.save(); rr(30,55,36,30,14); ctx.clip();
    ell(48,84,22,7); ctx.fillStyle='rgba(120,150,210,.28)'; ctx.fill();
    ell(41,62,9,5,-.4); ctx.fillStyle='rgba(255,255,255,.75)'; ctx.fill(); ctx.restore();
    ctx.restore();
    /* patas da frente */
    var L=armsUp;
    ctx.save(); ctx.translate(0,bob*.5);
    /* direita (do lado de quem olha) */
    ctx.save(); ctx.translate(0,-lift1);
    rr(51,68,12,19,5.5); fs(white(51,68,63,68),2.2);
    pawFoot(57,88,8.6,5.4);
    ctx.restore();
    if(!L){
      ctx.save(); ctx.translate(0,-lift0);
      rr(33,68,12,19,5.5); fs(white(33,68,45,68),2.2);
      pawFoot(39,88,8.6,5.4);
      ctx.restore();
    } else {
      /* patinha a acenar */
      var wv=wag*3;
      ctx.beginPath(); ctx.moveTo(37,71); ctx.lineTo(20+wv*.4,62-wv*.3);
      ctx.lineWidth=13; ctx.strokeStyle=OUT; ctx.stroke();
      ctx.lineWidth=9.6; ctx.strokeStyle='#eef3fc'; ctx.stroke();
      circ(14+wv,55,10.2); fs(white(4,45,24,65),2.3);
      circ(14+wv,55,6.9); ctx.fillStyle='#0a1128'; ctx.fill(); ctx.lineWidth=1.4; ctx.strokeStyle=OUT; ctx.stroke();
      circ(14+wv,55,6.9); ctx.lineWidth=1.1; ctx.strokeStyle='rgba(90,242,255,.75)'; ctx.stroke();
      paw(14+wv,55,1.25,CY,5);
    }
    ctx.restore();
    /* colar + medalha */
    ctx.save(); ctx.translate(0,bob*.5);
    collarBand(30,52,36,9);
    tag(48,69.5,1);
    ctx.restore();

    /* cabeça (com balanço) */
    ctx.save(); ctx.translate(0,bob);
    if(sad){ ctx.translate(48,38); ctx.rotate(-.1); ctx.translate(-48,-38); }
    var earHang=sad?4:(happy?-3:(walking?1.5*wag:0));
    ear([30,20],null,-1,earHang); ear([66,20],null,1,-earHang);
    /* cabeça */
    ctx.beginPath(); ctx.moveTo(48,10);
    ctx.bezierCurveTo(66,10,76,22,76,35); ctx.bezierCurveTo(76,48,64,56,48,56);
    ctx.bezierCurveTo(32,56,20,48,20,35); ctx.bezierCurveTo(20,22,30,10,48,10); ctx.closePath();
    fs(white(24,12,72,56),2.5);
    ctx.save(); ctx.clip();
    ell(48,56,30,9); ctx.fillStyle='rgba(120,150,210,.26)'; ctx.fill();
    ell(35,16,11,4.2,-.4); ctx.fillStyle='rgba(255,255,255,.85)'; ctx.fill(); ctx.restore();
    /* placa azul no topo */
    rr(36,8.2,24,8.4,4); fs(blue(36,8,36,17),2);
    ctx.strokeStyle='rgba(150,225,255,.9)'; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(41,10.8); ctx.lineTo(55,10.8); ctx.stroke();
    /* pods das bochechas */
    [21,75].forEach(function(px){
      circ(px,40,6.4); fs(blue(px-6,34,px+6,46),2);
      ctx.save(); glow(CY,4); circ(px,40,3.6); ctx.strokeStyle=CY; ctx.lineWidth=1.5; ctx.stroke(); ctx.restore();
    });
    /* viseira */
    rr(26,19,44,21,10.5);
    var vg=ctx.createLinearGradient(0,19,0,40); vg.addColorStop(0,'#101a3e'); vg.addColorStop(.5,'#070c20'); vg.addColorStop(1,'#03050f');
    ctx.fillStyle=vg; ctx.fill(); ctx.lineWidth=2; ctx.strokeStyle=OUT; ctx.stroke();
    ctx.strokeStyle='rgba(120,170,255,.35)'; ctx.lineWidth=.9; rr(27.5,20.5,41,18,9); ctx.stroke();
    ell(62,23.6,2.8,1.5,.3); ctx.fillStyle='rgba(255,255,255,.92)'; ctx.fill();
    ell(33,22.6,2.2,1,-.3); ctx.fillStyle='rgba(255,255,255,.35)'; ctx.fill();
    /* olhos */
    eyeArc(38.5,29.5,5.2,blinking); eyeArc(57.5,29.5,5.2,blinking);
    if(happy){ ell(30.5,37,3.2,1.8); ctx.fillStyle='rgba(255,120,150,.5)'; ctx.fill(); ell(65.5,37,3.2,1.8); ctx.fill(); }
    /* focinho */
    ell(48,43.5,14.5,10.3); fs(white(34,34,62,54),2);
    ell(48,38.2,5.6,3.9); ctx.fillStyle=BLK; ctx.fill(); ctx.lineWidth=1.2; ctx.strokeStyle=OUT; ctx.stroke();
    ell(46.3,36.8,1.9,1,-.4); ctx.fillStyle='rgba(255,255,255,.85)'; ctx.fill();
    ctx.strokeStyle=OUT; ctx.lineWidth=1.5; ctx.beginPath(); ctx.moveTo(48,42); ctx.lineTo(48,44.4); ctx.stroke();
    mouth(48,44.6,8.2,happy?8.4:6.2);
    ctx.restore();
  }

  /* =====================  COSTAS  ===================== */
  function back(){
    shadow(48,25);
    tail([[58,76],[80,78],[86,58],[78+wag*3,42]]);
    pawFoot(34,88.5,8,4.6,'#dfe8f7'); pawFoot(62,88.5,8,4.6,'#dfe8f7');
    /* patas de trás */
    ctx.save(); ctx.translate(0,bob*.5);
    ctx.save(); ctx.translate(0,-lift0); rr(28,70,14,17,6); fs(white(28,70,42,70),2.2); pawFoot(35,88,8.8,5.3); ctx.restore();
    ctx.save(); ctx.translate(0,-lift1); rr(54,70,14,17,6); fs(white(54,70,68,70),2.2); pawFoot(61,88,8.8,5.3); ctx.restore();
    rr(26,52,44,30,15); fs(white(26,52,70,82),2.3);
    ell(48,82,24,6); ctx.save(); rr(26,52,44,30,15); ctx.clip(); ctx.fillStyle='rgba(120,150,210,.28)'; ctx.fill(); ctx.restore();
    haunch(31,72); haunch(65,72);
    ctx.restore();
    /* cauda para cima, à frente do corpo */
    ctx.save(); ctx.translate(0,bob*.5); collarBand(30,48,36,9); ctx.restore();
    ctx.save(); ctx.translate(0,bob);
    ear([30,20],null,-1,walking?1.5*wag:0); ear([66,20],null,1,walking?-1.5*wag:0);
    ctx.beginPath(); ctx.moveTo(48,10);
    ctx.bezierCurveTo(66,10,76,22,76,35); ctx.bezierCurveTo(76,48,64,56,48,56);
    ctx.bezierCurveTo(32,56,20,48,20,35); ctx.bezierCurveTo(20,22,30,10,48,10); ctx.closePath();
    fs(white(24,12,72,56),2.5);
    ctx.save(); ctx.clip(); ell(48,56,30,9); ctx.fillStyle='rgba(120,150,210,.26)'; ctx.fill();
    ell(35,16,11,4.2,-.4); ctx.fillStyle='rgba(255,255,255,.85)'; ctx.fill(); ctx.restore();
    /* placa azul grande atrás */
    rr(33,13,30,17,8); fs(blue(33,13,33,30),2);
    ctx.save(); glow(CY,4); ctx.strokeStyle=CY; ctx.lineWidth=1.3; ctx.beginPath(); ctx.moveTo(39,17); ctx.lineTo(57,17); ctx.stroke(); ctx.restore();
    ctx.fillStyle='#fff'; paw(48,24,.8,'#d6f6ff',3);
    [21,75].forEach(function(px){ circ(px,40,6.4); fs(blue(px-6,34,px+6,46),2);
      ctx.save(); glow(CY,4); circ(px,40,3.6); ctx.strokeStyle=CY; ctx.lineWidth=1.5; ctx.stroke(); ctx.restore(); });
    ctx.restore();
  }

  /* =====================  LADO (virado para a direita)  ===================== */
  function side(){
    shadow(46,27);
    tail([[22,68],[6,70],[4,52],[12+wag*2,40]]);
    /* patas longínquas */
    ctx.save(); ctx.translate(0,bob*.5);
    ctx.save(); ctx.translate(0,-lift1); rr(33,72,11,15,5); fs('#d3dff3',2); pawFoot(40,88,8,5,'#d3dff3'); ctx.restore();
    ctx.save(); ctx.translate(0,-lift0); rr(57,72,11,15,5); fs('#d3dff3',2); pawFoot(64,88,8,5,'#d3dff3'); ctx.restore();
    /* corpo */
    rr(14,53,50,29,13); fs(white(14,53,64,82),2.3);
    ctx.save(); rr(14,53,50,29,13); ctx.clip(); ell(40,82,28,6); ctx.fillStyle='rgba(120,150,210,.28)'; ctx.fill();
    ell(30,59,10,4.5,-.1); ctx.fillStyle='rgba(255,255,255,.75)'; ctx.fill(); ctx.restore();
    /* anca + pata de trás */
    ctx.save(); ctx.translate(0,-lift0);
    rr(20,70,12,17,5.5); fs(white(20,70,32,70),2.2); pawFoot(27,88,9,5.4);
    ctx.restore();
    haunch(26,72);
    /* pata da frente */
    ctx.save(); ctx.translate(0,-lift1);
    if(armsUp){
      var wv=wag*2.5;
      ctx.beginPath(); ctx.moveTo(52,68); ctx.lineTo(66+wv*.3,56-wv*.3); ctx.lineWidth=13; ctx.strokeStyle=OUT; ctx.stroke(); ctx.lineWidth=9.6; ctx.strokeStyle='#eef3fc'; ctx.stroke();
      circ(69+wv,52,9.8); fs(white(59,42,79,62),2.3); circ(69+wv,52,6.6); ctx.fillStyle='#0a1128'; ctx.fill(); ctx.lineWidth=1.4; ctx.strokeStyle=OUT; ctx.stroke();
      paw(69+wv,52,1.2,CY,5);
    } else { rr(48,68,12,19,5.5); fs(white(48,68,60,68),2.2); pawFoot(55,88,9,5.4); }
    ctx.restore();
    ctx.restore();
    /* colar + medalha */
    ctx.save(); ctx.translate(0,bob*.5);
    ctx.save(); ctx.translate(58,57); ctx.rotate(.12); collarBand(-10,-5,20,10); ctx.restore();
    tag(62,69,.85);
    ctx.restore();
    /* cabeça de perfil */
    ctx.save(); ctx.translate(0,bob);
    /* orelha de trás (azul, à esquerda da cabeça) */
    ear([52,19],null,-1,sad?4:(walking?1.5*wag:(happy?-3:0)));
    ctx.beginPath(); ctx.moveTo(60,11);
    ctx.bezierCurveTo(76,10,84,22,83,34); ctx.bezierCurveTo(82,50,70,57,58,56);
    ctx.bezierCurveTo(46,55,40,46,40,34); ctx.bezierCurveTo(40,20,48,11,60,11); ctx.closePath();
    fs(white(44,12,84,56),2.5);
    ctx.save(); ctx.clip(); ell(62,56,24,8); ctx.fillStyle='rgba(120,150,210,.26)'; ctx.fill(); ell(54,16,9,3.6,-.3); ctx.fillStyle='rgba(255,255,255,.85)'; ctx.fill(); ctx.restore();
    rr(52,8.4,18,8,4); fs(blue(52,8,52,17),2);
    /* viseira de lado */
    rr(46,20,34,19,9.5); var vg=ctx.createLinearGradient(0,20,0,39); vg.addColorStop(0,'#101a3e'); vg.addColorStop(.5,'#070c20'); vg.addColorStop(1,'#03050f');
    ctx.fillStyle=vg; ctx.fill(); ctx.lineWidth=2; ctx.strokeStyle=OUT; ctx.stroke();
    ell(72,23.4,2.6,1.4,.3); ctx.fillStyle='rgba(255,255,255,.92)'; ctx.fill();
    eyeArc(66,29.5,5.2,blinking);
    /* focinho comprido */
    ell(78,43,11.5,8.6); fs(white(66,35,90,52),2);
    ell(86,38.6,4.6,3.5); ctx.fillStyle=BLK; ctx.fill(); ctx.lineWidth=1.2; ctx.strokeStyle=OUT; ctx.stroke();
    ell(85,37.4,1.5,.9,-.4); ctx.fillStyle='rgba(255,255,255,.85)'; ctx.fill();
    mouth(79,45.6,6.6,happy?7.4:5.4);
    /* pod da bochecha */
    circ(49,42,6); fs(blue(43,36,55,48),2); ctx.save(); glow(CY,4); circ(49,42,3.3); ctx.strokeStyle=CY; ctx.lineWidth=1.5; ctx.stroke(); ctx.restore();
    ctx.restore();
  }

  if(dir===2) front();
  else if(dir===0) back();
  else if(dir===1) side();
  else { ctx.save(); ctx.translate(96,0); ctx.scale(-1,1); side(); ctx.restore(); }
  noGlow();
  ctx.setTransform(1,0,0,1,0,0);
}
root.vbDogDraw=drawVanBerto; if(!root.drawVanBerto) root.drawVanBerto=drawVanBerto;
if(typeof module!=='undefined'&&module.exports) module.exports=drawVanBerto;
})(typeof window!=='undefined'?window:globalThis);

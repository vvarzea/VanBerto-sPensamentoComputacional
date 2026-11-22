/* VanBerto's · melhorias gráficas partilhadas (reflexos, sombras de contacto, partículas, texturas) */
window.VBG=(function(){
 const T=()=>window.THREE;
 const cvs=(w,h)=>{const c=document.createElement('canvas');c.width=w;c.height=h;return c};
 const api={envTex:null};
 /* partícula redonda e suave (faíscas, neve, brilhos) */
 api.dot=function(){if(api._dot)return api._dot;const c=cvs(64,64),g=c.getContext('2d'),r=g.createRadialGradient(32,32,0,32,32,32);
  r.addColorStop(0,'rgba(255,255,255,1)');r.addColorStop(.35,'rgba(255,255,255,.55)');r.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=r;g.fillRect(0,0,64,64);
  return api._dot=new (T().CanvasTexture)(c)};
 /* sombra de contacto: mancha escura e suave no chão por baixo de cada objeto */
 api.blob=function(parent,x,y,z,sx,sz,op){const t=T();
  if(!api._blob){const c=cvs(64,64),g=c.getContext('2d'),r=g.createRadialGradient(32,32,2,32,32,32);
   r.addColorStop(0,'rgba(0,0,0,.9)');r.addColorStop(.55,'rgba(0,0,0,.38)');r.addColorStop(1,'rgba(0,0,0,0)');g.fillStyle=r;g.fillRect(0,0,64,64);api._blob=new t.CanvasTexture(c)}
  const m=new t.Mesh(new t.PlaneGeometry(1,1),new t.MeshBasicMaterial({map:api._blob,transparent:true,opacity:op==null?.5:op,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-2}));
  m.rotation.x=-Math.PI/2;m.position.set(x,y,z);m.scale.set(sx,sz,1);m.renderOrder=1;if(parent)parent.add(m);return m};
 /* ruído para bump (tinta, madeira, chão) */
 api.noise=function(w,h,amp,rx,ry){const t=T(),sw=Math.max(4,w>>3),sh=Math.max(4,h>>3),sm=cvs(sw,sh),sg=sm.getContext('2d'),d=sg.createImageData(sw,sh);
  for(let i=0;i<sw*sh;i++){const v=128+(Math.random()-.5)*255*(amp==null?1:amp);d.data[i*4]=d.data[i*4+1]=d.data[i*4+2]=v;d.data[i*4+3]=255}
  sg.putImageData(d,0,0);const c=cvs(w,h),g=c.getContext('2d');g.imageSmoothingEnabled=true;g.imageSmoothingQuality='high';g.drawImage(sm,0,0,w,h);const x=new t.CanvasTexture(c);x.wrapS=x.wrapT=t.RepeatWrapping;x.repeat.set(rx||1,ry||1);return x};
 /* reflexos: ambiente de estúdio gerado por código (céu em degradê + painéis de luz) */
 api.env=function(R,scene,o){o=o||{};const t=T();
  try{if(!t.PMREMGenerator)return null;
   const pm=new t.PMREMGenerator(R),es=new t.Scene(),c=cvs(8,256),g=c.getContext('2d'),gr=g.createLinearGradient(0,0,0,256);
   gr.addColorStop(0,o.top||'#7f9ee0');gr.addColorStop(.5,o.mid||'#c8d2ea');gr.addColorStop(1,o.bottom||'#4a4034');g.fillStyle=gr;g.fillRect(0,0,8,256);
   const tx=new t.CanvasTexture(c);tx.encoding=t.sRGBEncoding;
   es.add(new t.Mesh(new t.SphereGeometry(40,32,16),new t.MeshBasicMaterial({map:tx,side:t.BackSide})));
   (o.panels||[[0xffffff,-10,16,12,12,5],[0xfff0d8,18,9,-4,8,8],[0xcfe0ff,0,20,-14,16,4]]).forEach(p=>{
    const m=new t.Mesh(new t.PlaneGeometry(p[4],p[5]),new t.MeshBasicMaterial({color:new t.Color(p[0]).multiplyScalar(o.panelI||5),side:t.DoubleSide}));
    m.position.set(p[1],p[2],p[3]);m.lookAt(0,0,0);es.add(m)});
   const rt=pm.fromScene(es,.03);scene.environment=rt.texture;api.envTex=rt.texture;pm.dispose();return rt.texture;
  }catch(e){return null}};
 /* chão de madeira em tábuas, com ranhura em cada quadrado (para a grelha se ver bem) */
 api.woodTex=function(W,H){const t=T(),Z=128,c=cvs(W*Z,H*Z),g=c.getContext('2d'),b=cvs(W*Z,H*Z),bg=b.getContext('2d');
  bg.fillStyle='#bbb';bg.fillRect(0,0,W*Z,H*Z);
  for(let x=0;x<W;x++)for(let y=0;y<H;y++){
   const base=(x+y)%2?[186,134,84]:[203,156,100];
   for(let p=0;p<4;p++){const py=y*Z+p*32,k=1+(((x*13+y*7+p*11)%9)-4)/55;
    g.fillStyle='rgb('+(base[0]*k|0)+','+(base[1]*k|0)+','+(base[2]*k|0)+')';g.fillRect(x*Z,py,Z,32);
    g.strokeStyle='rgba(90,55,25,.2)';g.lineWidth=1;
    for(let i=0;i<5;i++){const yy=py+4+Math.random()*24;g.beginPath();g.moveTo(x*Z,yy);g.bezierCurveTo(x*Z+40,yy+Math.random()*3-1.5,x*Z+80,yy+Math.random()*3-1.5,x*Z+Z,yy+1);g.stroke()}
    g.fillStyle='rgba(50,28,10,.5)';g.fillRect(x*Z,py,Z,2);bg.fillStyle='#222';bg.fillRect(x*Z,py,Z,2)}
   g.strokeStyle='rgba(60,32,12,.8)';g.lineWidth=4;g.strokeRect(x*Z+2,y*Z+2,Z-4,Z-4);bg.strokeStyle='#000';bg.lineWidth=4;bg.strokeRect(x*Z+2,y*Z+2,Z-4,Z-4)}
  const m=new t.CanvasTexture(c);m.encoding=t.sRGBEncoding;m.anisotropy=4;return {map:m,bump:new t.CanvasTexture(b)}};
 /* tapete com padrão */
 api.rugTex=function(){const t=T(),c=cvs(256,160),g=c.getContext('2d');
  g.fillStyle='#6d28d9';g.fillRect(0,0,256,160);g.strokeStyle='#fbbf24';g.lineWidth=6;g.strokeRect(10,10,236,140);g.lineWidth=2;g.strokeRect(20,20,216,120);
  g.fillStyle='#a78bfa';for(let x=0;x<7;x++)for(let y=0;y<4;y++){const cx=40+x*29,cy=38+y*30;g.beginPath();g.moveTo(cx,cy-9);g.lineTo(cx+9,cy);g.lineTo(cx,cy+9);g.lineTo(cx-9,cy);g.closePath();g.fill()}
  for(let i=0;i<500;i++){g.fillStyle='rgba(255,255,255,'+Math.random()*.05+')';g.fillRect(Math.random()*256,Math.random()*160,2,1)}
  const x=new t.CanvasTexture(c);x.encoding=t.sRGBEncoding;return x};
 /* quadro na parede */
 api.painting=function(){const t=T(),c=cvs(192,144),g=c.getContext('2d'),s=g.createLinearGradient(0,0,0,144);
  s.addColorStop(0,'#ff9a6b');s.addColorStop(.6,'#ffd9a0');s.addColorStop(1,'#ffe9c4');g.fillStyle=s;g.fillRect(0,0,192,144);
  g.fillStyle='#fff3b0';g.beginPath();g.arc(130,52,20,0,7);g.fill();
  g.fillStyle='#7a9a5c';g.beginPath();g.moveTo(0,110);g.quadraticCurveTo(50,70,100,105);g.quadraticCurveTo(150,80,192,110);g.lineTo(192,144);g.lineTo(0,144);g.fill();
  g.fillStyle='#5b7d46';g.beginPath();g.moveTo(0,125);g.quadraticCurveTo(70,100,140,128);g.quadraticCurveTo(170,118,192,126);g.lineTo(192,144);g.lineTo(0,144);g.fill();
  g.fillStyle='#b4543a';g.fillRect(40,98,22,16);g.beginPath();g.moveTo(36,98);g.lineTo(51,84);g.lineTo(66,98);g.fill();
  const x=new t.CanvasTexture(c);x.encoding=t.sRGBEncoding;return x};
 /* mancha de luz da janela no chão (aditiva) */
 api.windowLight=function(){const t=T(),c=cvs(128,96),g=c.getContext('2d'),r=g.createRadialGradient(64,48,5,64,48,70);
  r.addColorStop(0,'rgba(255,240,200,.9)');r.addColorStop(1,'rgba(255,220,150,.25)');g.fillStyle=r;g.fillRect(0,0,128,96);
  g.fillStyle='rgba(0,0,0,.85)';g.fillRect(61,0,6,96);g.fillRect(0,45,128,6);
  g.globalCompositeOperation='destination-in';const m=g.createRadialGradient(64,48,10,64,48,64);m.addColorStop(0,'rgba(0,0,0,1)');m.addColorStop(1,'rgba(0,0,0,0)');g.fillStyle=m;g.fillRect(0,0,128,96);
  return new t.CanvasTexture(c)};
 return api;
})();

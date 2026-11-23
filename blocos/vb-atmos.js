/* VanBerto's · atmosfera 3D partilhada pelos jogos: feixes de luz, brilhos (halos) e poeira no ar.
   Tudo é aditivo e barato; desliga-se no «Modo leve» (variável global `light` dos jogos). */
window.VBA=(function(){
 var T=function(){return window.THREE},motes=[],raf=0;
 var isLight=function(){try{return !!light}catch(e){return false}};
 function tex(w,h,draw){var c=document.createElement('canvas');c.width=w;c.height=h;draw(c.getContext('2d'),w,h);var t=new (T().CanvasTexture)(c);return t}
 /* feixe de luz volumétrico: cone aberto do ponto de origem até ao chão, mais forte junto à origem */
 function beam(S,fx,fy,fz,tx,ty,tz,radius,color,opacity){
  var th=T(),d=new th.Vector3(fx-tx,fy-ty,fz-tz),len=d.length();d.normalize();
  var a=tex(4,64,function(g,w,h){var gr=g.createLinearGradient(0,0,0,h);gr.addColorStop(0,'#fff');gr.addColorStop(.35,'#7a7a7a');gr.addColorStop(1,'#050505');g.fillStyle=gr;g.fillRect(0,0,w,h)});
  var m=new th.Mesh(new th.ConeGeometry(radius,len,28,1,true),new th.MeshBasicMaterial({color:color,alphaMap:a,transparent:true,opacity:opacity,blending:th.AdditiveBlending,depthWrite:false,side:th.DoubleSide}));
  m.position.set((fx+tx)/2,(fy+ty)/2,(fz+tz)/2);m.quaternion.setFromUnitVectors(new th.Vector3(0,1,0),d);m.userData.vba='beam';m.renderOrder=3;S.add(m);return m}
 /* raio de luz plano (de A a B, largura wA→wB), mais forte junto a A */
 function ray(S,ax,ay,az,bx,by,bz,wA,wB,color,opacity){
  var th=T(),g=new th.BufferGeometry();
  g.setAttribute('position',new th.BufferAttribute(new Float32Array([ax-wA/2,ay,az,ax+wA/2,ay,az,bx+wB/2,by,bz,bx-wB/2,by,bz]),3));
  g.setAttribute('uv',new th.BufferAttribute(new Float32Array([0,1,1,1,1,0,0,0]),2));g.setIndex([0,1,2,0,2,3]);
  var a=tex(4,64,function(c,w,h){var gr=c.createLinearGradient(0,0,0,h);gr.addColorStop(0,'#fff');gr.addColorStop(.5,'#555');gr.addColorStop(1,'#000');c.fillStyle=gr;c.fillRect(0,0,w,h)});
  var m=new th.Mesh(g,new th.MeshBasicMaterial({color:color,alphaMap:a,transparent:true,opacity:opacity,blending:th.AdditiveBlending,depthWrite:false,side:th.DoubleSide}));
  m.userData.vba='beam';m.renderOrder=3;S.add(m);return m}
 /* sombra de contacto suave junto às paredes (oclusão ambiente falsa) */
 function wallAO(S,len,x,z,rotY,opacity){
  var th=T(),a=tex(4,32,function(c,w,h){var gr=c.createLinearGradient(0,0,0,h);gr.addColorStop(0,'#fff');gr.addColorStop(1,'#000');c.fillStyle=gr;c.fillRect(0,0,w,h)});
  var m=new th.Mesh(new th.PlaneGeometry(len,.9),new th.MeshBasicMaterial({color:0x000000,alphaMap:a,transparent:true,opacity:opacity||.3,depthWrite:false}));
  m.rotation.x=-Math.PI/2;var gp=new th.Group();gp.position.set(x,.03,z);gp.rotation.y=rotY||0;gp.add(m);gp.renderOrder=1;S.add(gp);return gp}
 /* halo luminoso (sprite aditivo) */
 var haloTex=null;
 function glow(parent,x,y,z,color,size,opacity){
  var th=T();if(!haloTex)haloTex=tex(64,64,function(g){var r=g.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,'rgba(255,255,255,1)');r.addColorStop(.25,'rgba(255,255,255,.45)');r.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=r;g.fillRect(0,0,64,64)});
  var s=new th.Sprite(new th.SpriteMaterial({map:haloTex,color:color,transparent:true,opacity:opacity==null?.7:opacity,blending:th.AdditiveBlending,depthWrite:false}));
  s.position.set(x,y,z);s.scale.setScalar(size);s.userData.vba='glow';s.renderOrder=4;parent.add(s);return s}
 /* poeira / partículas no ar a derivar devagar */
 function dust(S,b,count,size,opacity){
  var th=T(),pos=new Float32Array(count*3),vel=new Float32Array(count*3);
  for(var i=0;i<count;i++){pos[i*3]=b.x0+Math.random()*(b.x1-b.x0);pos[i*3+1]=b.y0+Math.random()*(b.y1-b.y0);pos[i*3+2]=b.z0+Math.random()*(b.z1-b.z0);
   vel[i*3]=(Math.random()-.5)*.12;vel[i*3+1]=(Math.random()-.4)*.05;vel[i*3+2]=(Math.random()-.5)*.12}
  var g=new th.BufferGeometry();g.setAttribute('position',new th.BufferAttribute(pos,3));
  var dot=tex(32,32,function(c){var r=c.createRadialGradient(16,16,0,16,16,16);r.addColorStop(0,'rgba(255,255,255,.95)');r.addColorStop(1,'rgba(255,255,255,0)');c.fillStyle=r;c.fillRect(0,0,32,32)});
  var p=new th.Points(g,new th.PointsMaterial({size:size||.06,map:dot,color:b.color||0xffffff,transparent:true,opacity:opacity==null?.45:opacity,blending:th.AdditiveBlending,depthWrite:false}));
  p.frustumCulled=false;p.userData.vba='dust';S.add(p);motes.push({p:p,pos:pos,vel:vel,b:b,n:count,g:g});if(!raf)tick();return p}
 var last=performance.now();
 function tick(){raf=requestAnimationFrame(tick);var n=performance.now(),dt=Math.min(.05,(n-last)/1000);last=n;var off=isLight();
  for(var k=0;k<motes.length;k++){var m=motes[k];m.p.visible=!off;if(off)continue;
   for(var i=0;i<m.n;i++){var j=i*3;m.pos[j]+=m.vel[j]*dt;m.pos[j+1]+=m.vel[j+1]*dt;m.pos[j+2]+=m.vel[j+2]*dt;
    if(m.pos[j]<m.b.x0)m.pos[j]=m.b.x1;else if(m.pos[j]>m.b.x1)m.pos[j]=m.b.x0;
    if(m.pos[j+1]<m.b.y0)m.pos[j+1]=m.b.y1;else if(m.pos[j+1]>m.b.y1)m.pos[j+1]=m.b.y0;
    if(m.pos[j+2]<m.b.z0)m.pos[j+2]=m.b.z1;else if(m.pos[j+2]>m.b.z1)m.pos[j+2]=m.b.z0}
   m.g.attributes.position.needsUpdate=true}}
 /* esconde feixes e halos no Modo leve (chamar depois de setLight) */
 function setLight(S,v){S.traverse(function(o){if(o.userData&&(o.userData.vba==='beam'||o.userData.vba==='glow'))o.visible=!v})}
 return {beam:beam,ray:ray,wallAO:wallAO,glow:glow,dust:dust,setLight:setLight,isLight:isLight}
})();

const V='vanbertos-v52';
const SHELL=['./','./index.html','./styles.css','./head.js','./app.js','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./vb-blocos.js','./vb-blocos.css','./blocos/fabrica.html','./blocos/casa-cao.html','./blocos/natal.html','./blocos/vb-core.js','./blocos/vb-solucoes.js','./blocos/vb-extras.js','./blocos/vb-atmos.js','./blocos/vb-jogo.css','./blocos/vb-gfx.js','./blocos/three.min.js','./blocos/blockly_compressed.js','./blocos/blockly-msg-pt.js','./blocos/vb-editor.js','./blocos/media/sprites.svg','./blocos/media/delete-icon.svg','./blocos/media/dropdown-arrow.svg','./blocos/media/foldout-icon.svg','./blocos/media/1x1.gif','./blocos/media/handopen.cur','./blocos/media/handclosed.cur','./blocos/media/handdelete.cur','./blocos/media/resize-handle.svg','./blocos/media/pilcrow.png','./blocos/media/quote0.png','./blocos/media/quote1.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const r=e.request; if(r.method!=='GET') return;
  const u=new URL(r.url);
  const fonts=/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname);
  if(u.origin!==location.origin && !fonts) return;
  if(fonts){ /* fontes: cache primeiro */
    e.respondWith(caches.match(r).then(h=>h||fetch(r).then(x=>{const c=x.clone();caches.open(V).then(k=>k.put(r,c));return x;})));
    return;
  }
  /* ficheiros da app: rede primeiro (apanha atualizações), cache se offline */
  e.respondWith(fetch(r).then(x=>{const c=x.clone();caches.open(V).then(k=>k.put(r,c));return x;}).catch(()=>caches.match(r,{ignoreSearch:true}).then(h=>h||(r.mode==='navigate'?caches.match('./index.html'):undefined))));
});
const V='raqiyoun-v2',SHELL=['./','style.css','app.js','abjad.js','manifest.json','icons/icon-192x192.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 const r=e.request,u=new URL(r.url);
 if(r.method!=='GET'||r.headers.has('range')||/\.(mp3|mp4|m4a)$/i.test(u.pathname))return;
 if(u.origin!==location.origin&&!/(^|\.)(fonts\.googleapis\.com|fonts\.gstatic\.com)$/.test(u.hostname))return;
 e.respondWith(caches.open(V).then(async c=>{
  const hit=await c.match(r);
  const net=fetch(r).then(res=>{if(res.ok||res.type==='opaque')c.put(r,res.clone());return res}).catch(()=>hit||(r.mode==='navigate'?c.match('./'):0)||Response.error());
  return hit||net;
 }));
});

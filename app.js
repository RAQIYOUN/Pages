(()=>{const s=document.currentScript&&document.currentScript.src;if(!s)return;
 // روی اینترنت، دکمهٔ «صفحهٔ اصلی» را مستقیم به پوشهٔ همین سایت وصل می‌کنیم (روی فایل محلی همان index.html می‌ماند)
 if(/^https?:$/.test(location.protocol)){const h=document.querySelector('.bar a');if(h)h.href=new URL('./',s).href}
 if('serviceWorker'in navigator&&location.protocol==='https:')addEventListener('load',()=>navigator.serviceWorker.register(new URL('service-worker.js',s)).catch(()=>{}));
})();

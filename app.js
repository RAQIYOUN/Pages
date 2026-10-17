if('serviceWorker'in navigator&&location.protocol==='https:'){addEventListener('load',()=>navigator.serviceWorker.register(new URL('service-worker.js',document.currentScript.src)).catch(()=>{}))}

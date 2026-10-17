(function(){
const q=document.getElementById('q'),cards=[...document.querySelectorAll('.card')],secs=[...document.querySelectorAll('section[data-sec]')],none=document.getElementById('none');
const n=s=>s.replace(/[يى]/g,'ی').replace(/ك/g,'ک').replace(/[\u200c\s]+/g,'').toLowerCase();
cards.forEach(c=>c._k=n(c.textContent));
function f(){const v=n(q.value);let any=false;
 cards.forEach(c=>{const m=!v||c._k.includes(v);c.hidden=!m;if(m)any=true});
 secs.forEach(s=>s.hidden=!s.querySelector('.card:not([hidden])'));none.hidden=any}
q.addEventListener('input',f);
addEventListener('keydown',e=>{if(e.key==='/'&&document.activeElement!==q){e.preventDefault();q.focus()}});
})();
if('serviceWorker'in navigator&&location.protocol==='https:'){addEventListener('load',()=>navigator.serviceWorker.register('service-worker.js').catch(()=>{}))}

/* جدول ابجد مشترک بین ابزارها: حروف فارسی هم‌ارز حروف عربی پایه‌شان حساب می‌شوند */
const ABJAD={ا:1,ب:2,ج:3,د:4,ه:5,و:6,ز:7,ح:8,ط:9,ی:10,ک:20,ل:30,م:40,ن:50,س:60,ع:70,ف:80,ص:90,ق:100,ر:200,ش:300,ت:400,ث:500,خ:600,ذ:700,ض:800,ظ:900,غ:1000,پ:2,چ:3,ژ:7,گ:20,ء:1};
function foldAr(s){return s.replace(/[يى]/g,'ی').replace(/ك/g,'ک').replace(/[ةۀ]/g,'ه').replace(/ؤ/g,'و').replace(/[أإآٱ]/g,'ا').replace(/[\u064B-\u065F\u0670\u0640\u200c\u200d\s]+/g,'')}
function abjadOf(text){const letters=[],bad=[];let sum=0;for(const ch of foldAr(text)){const v=ABJAD[ch];if(v){letters.push([ch,v]);sum+=v}else if(!bad.includes(ch))bad.push(ch)}return{sum,letters,bad}}

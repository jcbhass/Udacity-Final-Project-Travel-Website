if(!self.define){const e=async e=>{if("require"!==e&&(e+=".js"),!i[e]&&(await new Promise(async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}),!i[e]))throw new Error(`Module ${e} didn’t register its module`);return i[e]},s=async(s,i)=>{const r=await Promise.all(s.map(e));i(1===r.length?r[0]:r)};s.toUrl=e=>`./${e}`;const i={require:Promise.resolve(s)};self.define=(s,r,o)=>{i[s]||(i[s]=new Promise(async i=>{let n={};const c={uri:location.origin+s.slice(1)},t=await Promise.all(r.map(s=>"exports"===s?n:"module"===s?c:e(s))),a=o(...t);n.default||(n.default=a),i(n)}))}}define("./service-worker.js",["./workbox-7c85bfc1"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"./index.html",revision:"fdac22b2f710d01c5432ffc45ee0d34e"},{url:"main.css",revision:"5d7ecafae055a2b60c98792714bf37e2"},{url:"main.js",revision:"d59dc6a599a289e8a223597d50027d55"}],{})}));
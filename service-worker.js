if(!self.define){let e,n={};const o=(o,r)=>(o=new URL(o+".js",r).href,n[o]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=n,document.head.appendChild(e)}else e=o,importScripts(o),n()})).then((()=>{let e=n[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(r,s)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(n[t])return;let i={};const c=e=>o(e,t),d={module:{uri:t},exports:i,require:c};n[t]=Promise.all(r.map((e=>d[e]||c(e)))).then((e=>(s(...e),i)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue-demosite"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/Frontend-Demo/css/app.cbb5701c.css",revision:null},{url:"/Frontend-Demo/index.html",revision:"6c79eccb53de35fa448aa0a4f216d995"},{url:"/Frontend-Demo/js/app.8aedb60c.js",revision:null},{url:"/Frontend-Demo/js/chunk-vendors.10ba05b2.js",revision:null},{url:"/Frontend-Demo/manifest.json",revision:"57dfcd9b256044188f022827c2786ffd"},{url:"/Frontend-Demo/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map

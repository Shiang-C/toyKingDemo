if(!self.define){let e,o={};const n=(n,i)=>(n=new URL(n+".js",i).href,o[n]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=o,document.head.appendChild(e)}else e=n,importScripts(n),o()})).then((()=>{let e=o[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,s)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(o[t])return;let r={};const l=e=>n(e,t),c={module:{uri:t},exports:r,require:l};o[t]=Promise.all(i.map((e=>c[e]||l(e)))).then((e=>(s(...e),r)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"toy-king"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/toyKingDemo/css/app.74f02f9c.css",revision:null},{url:"/toyKingDemo/css/chunk-vendors.a9bc3fc2.css",revision:null},{url:"/toyKingDemo/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.e3468f46.woff",revision:null},{url:"/toyKingDemo/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.8c17aa52.woff2",revision:null},{url:"/toyKingDemo/img/Logo.faca9384.png",revision:null},{url:"/toyKingDemo/index.html",revision:"cf10bdc6b0318c0cc5e68331055d83fa"},{url:"/toyKingDemo/js/about.b90d3d80.js",revision:null},{url:"/toyKingDemo/js/app.5cf5b8d9.js",revision:null},{url:"/toyKingDemo/js/chunk-vendors.5ad7aeea.js",revision:null},{url:"/toyKingDemo/manifest.json",revision:"d6366e48fde9f74246aa87ebd3a1a433"},{url:"/toyKingDemo/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map

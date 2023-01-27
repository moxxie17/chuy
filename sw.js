const STATIC_CACHE = "static";

const APP_SHELL = [
 "/",
 "index.html",
 "style/style.css",
 "js/functions.js",
 "js/main.js",
 "js/script1.js",
 "js/script2.js",
 "images/beerjs-logo.png"  
];

self.addEventListener("intall", (e)=>{
 const cacheStatic = caches
   .open(STATIC_CACHE)
   .then((cache) => cache.addAll(APP_SHELL));
   
   e.waitUntil(cacheStatic);
});

self.addEventListener("fetch",(e) =>{
    console.log("fectch", e.request);

    e.respondWitch(
        caches
        .match(e.resquest)
        .then(res => res || fetch(e.resquest))
        .catch(console.log)
    );

});
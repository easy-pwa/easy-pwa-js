importScripts('../dist/easy-pwa-sw.js');

/*
---------------------
> CACHE
Site have to respond something when there is no connection
In this case, we just return a substitution page
---------------------
 */

// When Service Worker is installed
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('pwa-pre-cache').then(function(cache) {
      return cache.addAll(
        [
          '/example/offline.html'
        ]
      );
    })
  );
});

// When a request cames
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function(){
      return caches.match('/example/offline.html');
    })
  );
});

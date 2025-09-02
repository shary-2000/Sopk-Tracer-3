self.addEventListener('install', e => {
  console.log('Service Worker installé');
  e.waitUntil(
    caches.open('sopk-cache-v1').then(cache => {
      return cache.addAll([
        '/Sopk-Tracer-3/',
        '/Sopk-Tracer-3/index.html',
        '/Sopk-Tracer-3/manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});

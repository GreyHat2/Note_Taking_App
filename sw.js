const filesToCache = [
  'static/css/bootstrap.css',
  'static/icons/192.png',
  'static/icons/512.png',
  'static/js/index.js',
  'static/js/service.js',
  'static/manifest.json',
  'index.html',
  'static/css/bootstrap.css.map',
  'static/js/bootstrap.min.js',
  'static/js/bootstrap.min.js.map',
  'static/icons/icon.ico',
  '/sw.js'

  ];
  
  const staticCacheName = 'Notify-cache';
  
  self.addEventListener('install', event => {
    console.log('Attempting to install service worker and cache static assets');
    event.waitUntil(
      caches.open(staticCacheName)
      .then(cache => {
        return cache.addAll(filesToCache);
      })
    );
  });
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request)
    })
  )
})
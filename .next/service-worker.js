importScripts("precache-manifest.5aab1de847ec508a755698c92c009181.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

const OFFLINE_PAGE_URL = 'offline.html';

workbox.precaching.precacheAndRoute(['/', OFFLINE_PAGE_URL].concat(self.__precacheManifest || []));

workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  new workbox.strategies.StaleWhileRevalidate()
);

self.addEventListener('fetch', async event => {
  if (event.request.mode === 'navigate' ||
        (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))
  ) {
    event.respondWith(
      fetch(event.request).catch(error => caches.match(OFFLINE_PAGE_URL))
    );
  }
});


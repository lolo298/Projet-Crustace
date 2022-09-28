const crustace = "Projet-Crustace";
const assets = ["/"];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(crustace).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    fetch(event.request).then(function (networkResponse) {
      return networkResponse;
    })
  );
});

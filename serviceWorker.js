const crustace = "Projet-Crustace";
const assets = [
  "/",
  "/css/",
  "/js/",
  "/assets/fonts/",
  "/assets/icon/",
  "/assets/img/",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(crustace).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});

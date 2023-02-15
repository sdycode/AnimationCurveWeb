'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "518c3ed59bf0dff43187d1055e744950",
"assets/assets/icons/addwithpaste.png": "f87e8355b66a50583f6ba21dbcaa3a61",
"assets/assets/icons/addwithpaste2.png": "2b44a6d8b840f56dd75f1a9e7ddefaf9",
"assets/assets/icons/animation.gif": "3c61734e7bd00a017ff3b8f3c01d7e96",
"assets/assets/icons/bullet.png": "10d200ad5e892b5de4aa4baa087f0d2c",
"assets/assets/icons/curly.png": "d146f21425819cfa3e86e05a62e0f364",
"assets/assets/icons/demovideo1thumb.png": "ffba4a93fe7455b4a9dea52dc8990c70",
"assets/assets/icons/export.png": "53eb46dbfdf8fa06aea016385b59fe18",
"assets/assets/icons/file.png": "340dff2cfcdad09e41994dc4913f3a5e",
"assets/assets/icons/files.png": "d442a59ef40fdfe86cdba3a0c0a54b16",
"assets/assets/icons/filter.png": "9074e65aae7a83cb965e2e920196250f",
"assets/assets/icons/flutter3dp.png": "bbe200a8fb8cedc951688ae345855fe2",
"assets/assets/icons/flutterlogo.png": "25945cf1d0cf7d508e02cb8c00eaeda6",
"assets/assets/icons/git.png": "4f71e21c699d933c41010a40f2ea3fea",
"assets/assets/icons/google.png": "0eb8078198b32ac9d48f60dc38d16bc3",
"assets/assets/icons/gradient.png": "a2e66b804bc2e6d9f2f72de16428e480",
"assets/assets/icons/gradientAnim.gif": "8eaafbc16c56e3724d09de01e98e3697",
"assets/assets/icons/linkedin.png": "9449e52f97bb9b80a2e560d6339805f5",
"assets/assets/icons/loading.gif": "f842e82a10bab3222ee88c3b16a5dfb5",
"assets/assets/icons/loadinganimnobg.gif": "236d689f90e506cb19eedae4af39d6f5",
"assets/assets/icons/man1.webp": "a83469ba50fa748e675a778c0fd8c37b",
"assets/assets/icons/menu.png": "348605d24aa688bac0f7fd381b326648",
"assets/assets/icons/nature.jpg": "7164eb969b59913277ab196795886f86",
"assets/assets/icons/newfile.png": "ab9bd06f3b423ed18993c8eaa28bf826",
"assets/assets/icons/notes.png": "b638a4773e56aa0fdf3e3db9aa933fbe",
"assets/assets/icons/openfile.png": "31a6ce3697d2d02c2b669a9ae8e1d981",
"assets/assets/icons/paint.png": "b8d57b50ce9385c8cd6b3dc3a0f2807e",
"assets/assets/icons/pan.png": "a219f48efde11344f32feceede563347",
"assets/assets/icons/paste1.png": "69c8986ff8043fd948cf62f4d1842433",
"assets/assets/icons/playstore.png": "fd53fc3ed492c70d4db90920da79f7d3",
"assets/assets/icons/save.png": "35a163a812178b8ece17bddebbef96b5",
"assets/assets/icons/saveas.png": "5ae1e977df25b7de91e7ad0ef6683739",
"assets/assets/icons/share.png": "3c51e619ef54c9a858463713d135865c",
"assets/assets/icons/signout.png": "5e7897e17163218d5e6c4403dcd67720",
"assets/assets/icons/starr.png": "c3d53b19c9875d47459f6a83da459aaf",
"assets/assets/icons/theme.png": "2497f2d0bec1243f435fb3cea439417d",
"assets/assets/icons/translate.png": "ae17b023ed09334f8fe3b1374b395cc5",
"assets/assets/icons/translate_arrow.png": "b1ca9bdab309012ecc1fac03e72ea67a",
"assets/assets/icons/translate_arrow_transp.png": "9ee674374edfad8ddce2fb1b271b4390",
"assets/assets/icons/webapp.png": "0293c74f9fc9bd0dc64da0ed598fd0de",
"assets/assets/icons/youtube.png": "48e0b02dd613c829619a6369b6530548",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "585e856189c7a53cdf4af7913855eb88",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "b3e27c0d08da98c43257e56014beffb0",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.ico": "de878a2ff0dc8396fcc4d07f78d5dee8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/android-chrome-192x192.png": "5eb475af4527079829b6cf328e4d55f2",
"icons/android-chrome-512x512.png": "43c2dfca01985c92168b551327fe22e3",
"icons/apple-touch-icon.png": "39234d401188f1d9fd2325f190439b77",
"index.html": "2d669e56014ebd6133a7a8c389d24545",
"/": "2d669e56014ebd6133a7a8c389d24545",
"logo.png": "5eb475af4527079829b6cf328e4d55f2",
"main.dart.js": "6a5bff5a9e5b1ee4ee8b0618afb41a34",
"manifest.json": "dcb82f73036e3866aac366cec9d4f83a",
"version.json": "a680f461eb20bcd9916cceee4a2c5e08"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

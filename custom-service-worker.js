importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
    console.log(`Workbox carregado!`);
} else {
    console.log(`Workbox não carregado!`);
}

workbox.routing.registerRoute(
    /\.(?:js|css|html)$/,
    new workbox.strategies.NetworkFirst()
)

// workbox.routing.registerRoute(
//     'http://localhost:3000/#/',
//     new workbox.strategies.NetworkFirst()
// )

workbox.routing.registerRoute(
    'https://brunofsilveira.github.io/Quadrinhos-Avenida/',
    new workbox.strategies.NetworkFirst()
)

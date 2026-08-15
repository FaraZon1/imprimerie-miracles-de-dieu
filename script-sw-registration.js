// --- Service Worker registration (ajout non intrusif)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => {
        console.log('Service Worker registered with scope:', reg.scope);
      })
      .catch(err => {
        console.warn('Service Worker registration failed:', err);
      });
  });
}

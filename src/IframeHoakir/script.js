window.addEventListener('message', (event) => {
    if (event.origin === "http://localhost:5173") {
      const iframe = document.getElementById('myIframe');
      if (iframe) {
        iframe.style.height = event.data.height + 'px';
      }
    }
  });

  window.addEventListener('scroll', () => {
const iframe = document.getElementById('myIframe');
if (iframe && iframe.contentWindow) {
  iframe.contentWindow.postMessage({ scrollY: window.scrollY }, 'http://localhost:5173');
}
});
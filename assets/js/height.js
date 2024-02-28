function sendHeight() {
  window.parent.postMessage(document.documentElement.offsetHeight, '*');
}

window.addEventListener("load", () => {
  if(window.self === window.top) return;

  sendHeight();
  window.addEventListener("resize", sendHeight);
})

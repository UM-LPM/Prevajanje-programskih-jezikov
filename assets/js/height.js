window.addEventListener("load", () => {
  window.parent.postMessage(document.documentElement.offsetHeight, '*');
})

window.addEventListener("load", () => {
  window.parent.postMessage(document.documentElement.getBoundingClientRect().height, '*');
})

window.addEventListener("load", () => {
  window.parent.postMessage(document.body.scrollHeight, '*');
})

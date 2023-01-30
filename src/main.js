window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#open-url-button").addEventListener("click", () => {
    window.__TAURI__.shell.open("https://tauri.app");
  });
});

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("content");

  setTimeout(() => {
    preloader.style.display = "none";
    content.classList.remove("hidden");
  }, 3000); // 3000 milliseconds = 3 seconds
});

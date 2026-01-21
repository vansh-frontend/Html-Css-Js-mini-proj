window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("content");

  setTimeout(() => {
    preloader.style.display = "none";
    content.classList.remove("hidden");
  }, 2000); // 2000 milliseconds = 2 seconds
});


// side nav
// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";

//   }
  
//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
 
//   }
 
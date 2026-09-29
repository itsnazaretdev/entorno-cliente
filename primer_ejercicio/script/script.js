let menu = document.querySelector(".menu");
let nav = document.querySelector("nav");
let navList = nav.querySelector("ul");

menu.addEventListener("click", () => {
  navList.classList.toggle("active");
});

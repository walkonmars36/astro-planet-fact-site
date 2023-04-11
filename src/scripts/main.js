const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav__list");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("nav__open");
  document.body.classList.toggle("no-scroll");
});

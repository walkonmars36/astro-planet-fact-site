const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("nav__open");
  if (nav.classList.contains("nav__open")) {
    hamburger.innerHTML = "&times;";
  } else {
    hamburger.innerHTML = "&#9776;";
  }
  document.body.classList.toggle("no-scroll");
});

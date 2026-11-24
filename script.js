const app = {
  name: "Mario Lourenço Portfolio",
  version: "1.0.0",
  author: "Mario Lourenço"
};
console.log(`${app.name} v${app.version}`);
// ANIMAÇÃO DE SCROLL
function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const visible = 100;

    if (elementTop < windowHeight - visible) {
      element.classList.add("active");
    }
  });
}
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// MENU MOBILE
function toggleMenu() {
  const menu = document.getElementById("menu");

  if (menu) {
    menu.classList.toggle("open");
  }
}

const langBtn = document.querySelector(".lang-btn");
const langMenu = document.querySelector(".lang-options");

if (langBtn && langMenu) {

  langBtn.addEventListener("click", () => {

    if (langMenu.style.display === "block") {
      langMenu.style.display = "none";
    } else {
      langMenu.style.display = "block";
    }

  });
  document.addEventListener("click", (event) => {

    if (!event.target.closest(".language-menu")) {
      langMenu.style.display = "none";
    }

  });
}
function updateClock() {

  const clock = document.getElementById("clock");

  if (!clock) return;

  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  clock.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
function updateYear() {

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

}
updateYear();
let visits = localStorage.getItem("visits");

if (!visits) {
  visits = 0;
}

visits++;

localStorage.setItem("visits", visits);

console.log(`Número de visitas: ${visits}`);
const backToTop = document.getElementById("backToTop");

if (backToTop) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }

  });
   backToTop.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}

const typingTarget = document.getElementById("typing");
const phrase =
  "Développeur Web | JavaScript | React | Node.js";

let index = 0;

function typingEffect() {

  if (!typingTarget) return;

  if (index < phrase.length) {

    typingTarget.textContent += phrase.charAt(index);

    index++;

    setTimeout(typingEffect, 80);

  }

}
typingEffect();
const themeButton = document.getElementById("themeButton");

if (themeButton) {

  themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const darkEnabled =
      document.body.classList.contains("dark");

    localStorage.setItem("darkMode", darkEnabled);

  });

}
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
}


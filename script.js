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

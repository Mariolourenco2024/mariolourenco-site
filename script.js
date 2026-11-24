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

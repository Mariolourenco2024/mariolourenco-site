const langBtn = document.querySelector(".lang-btn");
const langMenu = document.querySelector(".lang-options");

// Abrir/fechar menu de idiomas
langBtn.addEventListener("click", () => {
  langMenu.style.display =
    langMenu.style.display === "block" ? "none" : "block";
});

// Fechar ao clicar fora
document.addEventListener("click", (e) => {
  if (!e.target.closest(".language-menu")) {
    langMenu.style.display = "none";
  }
   });

// Abrir/fechar menu mobile
function toggleMenu() {
  document.getElementById("menu").classList.toggle("open");
}

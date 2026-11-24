const langBtn = document.querySelector(".lang-btn");
const langMenu = document.querySelector(".lang-options");

// Abrir/fechar menu de idiomas
langBtn.addEventListener("click", () => {
  langMenu.style.display =
    langMenu.style.display === "block" ? "none" : "block";
});

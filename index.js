
function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
 const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

     if (response.ok) {
      status.innerHTML = "✅ Votre message a été envoyé avec succès !";
      status.style.color = "green";
      form.reset();
    }

    else {
      status.innerHTML =
        "❌ Une erreur est survenue. Réessayez plus tard.";
      status.style.color = "red";
    }
  } catch (error) {
    status.innerHTML =
      "⚠️ Erreur de connexion. Vérifiez votre internet.";
    status.style.color = "red";
  }
});

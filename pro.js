 function toggleMenu() {
      document.getElementById("menu").classList.toggle("open");
    }

    window.addEventListener("click", function(event) {
      const menu = document.getElementById("menu");
      const button = document.querySelector(".menu-button");
      if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.style.display = "none";
      }
    });

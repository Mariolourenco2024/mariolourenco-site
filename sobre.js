
  const langBtn = document.querySelector('.lang-btn');
  const langMenu = document.querySelector('.lang-options');

  // Toggle dropdown when clicking the button
  langBtn.addEventListener('click', () => {
    langMenu.style.display = langMenu.style.display === 'block' ? 'none' : 'block';
  });

  // Close menu if clicked outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.language-menu')) {
      langMenu.style.display = 'none';
    }
  });
</script>
  <script>
    function toggleMenu() {
      document.getElementById("menu").classList.toggle("open");
    }



// Ouverture bouton de menu de navigation
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('.menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const openIcon = toggleButton.querySelector('.menu-open-icon'); 
    const closeIcon = toggleButton.querySelector('.menu-close-icon'); 
  
    toggleButton.addEventListener('click', () => {
      const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
      toggleButton.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
      openIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });
  });

// Gestion barre de recherche
  document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const searchPopup = document.getElementById('searchPopup');
  
    // Fonction pour basculer la visibilité de la barre de recherche
    function toggleSearchPopup() {
      searchPopup.classList.toggle('hidden');
      document.body.classList.toggle('backdrop-blur-md'); 
    }
  
    // Écouteur d'événement pour le bouton de recherche
    searchButton.addEventListener('click', (event) => {
      event.stopPropagation(); // Empêche l'événement de cliquer sur le document
      toggleSearchPopup();
    });
  
    // Ferme la barre de recherche si l'utilisateur clique en dehors
    document.addEventListener('click', (event) => {
      if (!searchPopup.contains(event.target) && !searchButton.contains(event.target)) {
        if (!searchPopup.classList.contains('hidden')) {
          toggleSearchPopup();
        }
      }
    });
  
    // Fermer avec la touche Esc
    document.addEventListener('keydown', (event) => {
      if (event.key === "Escape") {
        if (!searchPopup.classList.contains('hidden')) {
          toggleSearchPopup();
        }
      }
    });
  });



  // Ouverture et fermeture bouton menu générique
  document.addEventListener("DOMContentLoaded", function() {
    const selectButtons = document.querySelectorAll('.select-button');

    selectButtons.forEach(button => {
        button.addEventListener('click', () => {
            const menuId = button.getAttribute('aria-controls');
            const menu = document.getElementById(menuId);
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', !isExpanded);
            menu.classList.toggle('hidden');

            // Gestion des icônes de menu ouvert/fermé
            const openIcon = button.querySelector('.menu-open-icon');
            const closeIcon = button.querySelector('.menu-close-icon');
            if (openIcon && closeIcon) {
                openIcon.classList.toggle('hidden');
                closeIcon.classList.toggle('hidden');
              }
          });
      });
  });

  // Filter et rechercher dans le bouton menu générique
  document.addEventListener('DOMContentLoaded', function() {
    const tagFilter = document.querySelector('.tag-filter');
    const tagLinks = document.querySelectorAll('#tag-menu a');

    tagFilter.addEventListener('input', function() {
      const search = tagFilter.value.toLowerCase();
      tagLinks.forEach(link => {
        const tagText = link.textContent.toLowerCase();
        link.style.display = tagText.includes(search) ? '' : 'none';
      });
    });
  });

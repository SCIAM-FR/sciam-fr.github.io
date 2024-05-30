
// Ouverture bouton de menu de navigation
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('.menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const openIcon = toggleButton.querySelector('.menu-open-icon'); 
    const closeIcon = toggleButton.querySelector('.menu-close-icon'); 
      // const mobileSearchButton = document.getElementById('mobileSearchButton');
    const searchPopup = document.getElementById('searchPopup');
    const mainContent = document.getElementById('mainContent');
    const searchButtons = [document.getElementById('searchButton'), document.getElementById('mobileSearchButton')];
    
    function toggleMenu() {
      // event.stopPropagation();
      const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
      toggleButton.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
      openIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
      if (!mobileMenu.classList.contains('hidden')) {
        closeSearchPopup();
    }
    }


// Gestion barre de recherche
    
    // Fonction pour basculer la visibilité de la barre de recherche
    function toggleSearchPopup() {
      searchPopup.classList.toggle('hidden');
      mainContent.classList.toggle('backdrop-blur-xl');
      if (!searchPopup.classList.contains('hidden')) {
        closeMenu();
      }
    }

    function closeMenu() {
      if (!mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          openIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
          toggleButton.setAttribute('aria-expanded', false);
      }
  }

  function closeSearchPopup() {
    if (!searchPopup.classList.contains('hidden')) {
        searchPopup.classList.add('hidden');
    }
}

  toggleButton.addEventListener('click', toggleMenu);

    // Écouteur d'événement pour le bouton de recherche
    // searchButtons.forEach(button => {
    //   button.addEventListener('click', toggleSearchPopup);
    //   });
       searchButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleSearchPopup();
      });
    });

    // Fermer si l'utilisateur clique en dehors
    document.addEventListener('click', (event) => {
      if (!searchPopup.contains(event.target)  && !searchButtons.some(button => button.contains(event.target)) && !searchPopup.classList.contains('hidden')) {
        toggleSearchPopup();
      }
      if (!toggleButton.contains(event.target) && !mobileMenu.contains(event.target) && !mobileMenu.classList.contains('hidden')) {
        closeMenu();
    }
    });
    // Fermer avec la touche Esc
    document.addEventListener('keydown', (event) => {
      if (event.key === "Escape" && !searchPopup.classList.contains('hidden')) {
        toggleSearchPopup();
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

  // Gestion swiper des articles de l'accueil
  document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.mySwiper', {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }
    });
  });



  // Filter et rechercher dans le bouton menu générique
  // document.addEventListener('DOMContentLoaded', function() {
  //   const tagFilter = document.querySelector('.tag-filter');
  //   const tagLinks = document.querySelectorAll('#tag-menu a');

  //   tagFilter.addEventListener('input', function() {
  //     const search = tagFilter.value.toLowerCase();
  //     tagLinks.forEach(link => {
  //       const tagText = link.textContent.toLowerCase();
  //       link.style.display = tagText.includes(search) ? '' : 'none';
  //     });
  //   });
  // });


document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('.menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const openIcon = toggleButton.querySelector('.menu-open-icon'); 
    const closeIcon = toggleButton.querySelector('.menu-close-icon'); 
    const mainContent = document.getElementById('mainContent');
    const searchPopup = document.getElementById('searchPopup');  
    const searchButtons = [document.getElementById('searchButton'), document.getElementById('mobileSearchButton')];
    // const blur = document.getElementById('blur');
    const closeButton = document.getElementById('closeSearchPopupButton');

  // Ouverture bouton de menu de navigation
    toggleButton.addEventListener('click', (event) => {
      event.stopPropagation();
      const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
      toggleButton.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
      openIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });

  // Gestion barre de recherche
    function toggleSearchPopup() {
      searchPopup.classList.toggle('hidden');
      mainContent.classList.toggle('blur-effect');
      // if (!searchPopup.classList.contains('hidden')&& mobileMenu) {
      //   mobileMenu.classList.add('hidden');
      // }  
    }
    closeButton.addEventListener('click', toggleSearchPopup);
    // Écouteur d'événement pour le bouton de recherche
      searchButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleSearchPopup();
      });
    });

    // Fermer si l'utilisateur clique en dehors

    // document.addEventListener('click', (event) => {
    //   if (!searchPopup.contains(event.target) && !searchPopup.classList.contains('hidden')) {
    //     toggleSearchPopup();
    //   }
    //   if (!toggleButton.contains(event.target) && !mobileMenu.contains(event.target) && !mobileMenu.classList.contains('hidden')) {
    //     closeMenu();
    // }
    // });


    // Fermer avec la touche Esc
    document.addEventListener('keydown', (event) => {
      if (event.key === "Escape" && !searchPopup.classList.contains('hidden')) {
        toggleSearchPopup();
      }
    });
  });

  // Ouverture et fermeture bouton menu générique
//   document.addEventListener("DOMContentLoaded", function() {
//     const selectButtons = document.querySelectorAll('.select-button');

//     selectButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const menuId = button.getAttribute('aria-controls');
//             const menu = document.getElementById(menuId);
//             const isExpanded = button.getAttribute('aria-expanded') === 'true';
//             button.setAttribute('aria-expanded', !isExpanded);
//             menu.classList.toggle('hidden');

//             // Gestion des icônes de menu ouvert/fermé
//             const openIcon = button.querySelector('.menu-open-icon');
//             const closeIcon = button.querySelector('.menu-close-icon');
//             if (openIcon && closeIcon) {
//                 openIcon.classList.toggle('hidden');
//                 closeIcon.classList.toggle('hidden');
//               }
//           });
//       });
// });

  // Gestion swiper des articles de l'accueil
  document.addEventListener('DOMContentLoaded', function () {
    var swiperAuto = new Swiper('.swiperAuto', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
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
          spaceBetween: 25,
        },
        850: {
          slidesPerView: 3,
          spaceBetween: 35,
        },
      }
    });

    var swiperManu = new Swiper('.swiperManu', {
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
          spaceBetween: 25,
        },
        850: {
          slidesPerView: 3,
          spaceBetween: 35,
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

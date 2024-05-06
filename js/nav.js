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
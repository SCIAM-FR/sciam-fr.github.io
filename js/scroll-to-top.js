document.addEventListener("DOMContentLoaded", function() {
  const backToTopBtn = document.getElementById('scrollToTopButton');
  const footer = document.getElementById("footer-area");

  if (!backToTopBtn || !footer) {
        return;
  }

  function toggleButtonVisibility() {
    const viewportHeight = window.innerHeight;
    const footerRect = footer.getBoundingClientRect();

    // Check if the footer is visible within the viewport
    if (footerRect.top < viewportHeight) {
        backToTopBtn.classList.add('hidden');
    } else if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.classList.remove('hidden');
    } else {
        backToTopBtn.classList.add('hidden');
    }
  }

  window.addEventListener('scroll', toggleButtonVisibility);

  backToTopBtn.addEventListener('click', () => {
      window.scrollTo({top: 0, behavior: 'smooth'});
  });
});
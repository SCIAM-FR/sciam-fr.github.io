function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollFunction() {
  let backToTopBtn = document.getElementById("back-to-top-btn");
  let footer = document.getElementById("footer-area");

  let viewportHeight = window.innerHeight;
  let footerRect = footer.getBoundingClientRect();

  // Hide the button when the footer is near the bottom of the viewport
  if (footerRect.top < viewportHeight) {
    backToTopBtn.classList.add('hidden');
  } else if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.classList.remove('hidden');
  } else {
    backToTopBtn.classList.add('hidden');
  }
}

window.onscroll = function() { scrollFunction() };
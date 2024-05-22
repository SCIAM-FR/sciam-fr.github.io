window.addEventListener('scroll', function() {
    const image = document.getElementById('backgroundImage');
    const baseScale = 0.95; // Initial smaller scale
    const scrollScaleIncrease = window.scrollY / 3000; // Increased sensitivity
    const newScale = Math.min(baseScale + scrollScaleIncrease, 1.10); // Capping the maximum scale to 1.10
    image.style.transform = `scale(${newScale})`;
  });
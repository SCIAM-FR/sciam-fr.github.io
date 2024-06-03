document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('h2[id], h3[id], h4[id]');
  const navLinks = document.querySelectorAll('#toc a');

  // Add TailwindCSS classes to each ToC link for styling
  navLinks.forEach(link => {
    link.classList.add('block', 'text-gray-500', 'hover:text-blue-800', 'transition-colors', 'duration-150', 'p-2',);
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const correspondingLink = document.querySelector(`#toc a[href="#${entry.target.id}"]`);
      if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
        // Ensure only one active link at a time
        navLinks.forEach(link => {
          link.classList.remove('active', 'text-blue-800', 'bg-gray-100');
          link.classList.add('text-gray-500', 'bg-white');
        });
        correspondingLink.classList.add('active', 'text-blue-800', 'bg-gray-100');
        correspondingLink.classList.remove('text-gray-500', 'bg-white');
      } else {
        correspondingLink.classList.remove('active', 'text-blue-800', 'bg-gray-100');
        correspondingLink.classList.add('text-gray-500', 'bg-white');
      }
    });
  }, {
    threshold: 0.5
  });

  // Attach the observer to each section
  sections.forEach(section => {
    observer.observe(section);
  });
});

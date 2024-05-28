document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.getElementById('tocProgress');
    const tocContainer = document.querySelector('.toc-container');
  
    function updateProgressBar() {
      const scrollDistance = document.documentElement.scrollTop || document.body.scrollTop;
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollDistance / totalHeight) * 100;
  
      progressBar.style.height = `${scrollPercentage}%`;
    }
  
    window.addEventListener('scroll', updateProgressBar);
  });
  
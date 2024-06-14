document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const heroSection = document.querySelector('.hero-section');
    let mouseX = 0;
    let mouseY = 0;
    let ballX = 0;
    let ballY = 0;
    const speed = 0.2; 
  
    function animate() {
      let distX = mouseX - ballX;
      let distY = mouseY - ballY;
  
      ballX = ballX + (distX * speed);
      ballY = ballY + (distY * speed);
  
      cursor.style.left = ballX + 'px';
      cursor.style.top = ballY + 'px';
  
      requestAnimationFrame(animate);
    }
  
    animate();
  
    document.addEventListener('mousemove', (e) => {
      if (heroSection.contains(e.target)) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.display = 'block';
        document.body.style.cursor = 'none'; 
      } else {
        cursor.style.display = 'none';
        document.body.style.cursor = 'default'; 
      }
    });
  
    document.addEventListener('click', (e) => {
      if (heroSection.contains(e.target)) {
        e.preventDefault();
        cursor.classList.remove('animate-bounce');
        void cursor.offsetWidth; 
        cursor.classList.add('animate-bounce');
      }
    }, false);
  });
  
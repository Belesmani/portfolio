document.addEventListener('DOMContentLoaded', function() {
  // ========== Configuração do Typed.js ==========
  const typedElement = document.querySelector('.typed');
  if (typedElement) {
    new Typed('.typed', {
      strings: typedElement.dataset.typedItems.split(','),
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }

  // ========== Animação das Barras de Progresso ==========
  const animateBars = () => {
    document.querySelectorAll('.language-progress-bar').forEach(bar => {
      const targetWidth = bar.style.getPropertyValue('--progress');
      bar.style.width = '0%'; // Reset inicial
      
      setTimeout(() => {
        bar.style.transition = 'width 1.5s ease-out';
        bar.style.width = targetWidth;
      }, 500);
    });
  };

  // Observador para animação ao scroll
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateBars();
        progressObserver.unobserve(entry.target); // Para de observar após animar
      }
    });
  });

  // Observa todos os containers de linguagem
  document.querySelectorAll('.language-item').forEach(item => {
    progressObserver.observe(item);
  });

  // Reanimação ao passar o mouse
  document.querySelectorAll('.language-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      const bar = item.querySelector('.language-progress-bar');
      if (bar) {
        bar.style.transition = 'none';
        bar.style.width = '0%';
        
        requestAnimationFrame(() => {
          bar.style.transition = 'width 1.2s ease-out';
          bar.style.width = bar.style.getPropertyValue('--progress');
        });
      }
    });
  });
});
  

  

    
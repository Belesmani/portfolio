document.addEventListener('DOMContentLoaded', function () {
    // Animação automática com IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBar = entry.target.querySelector('.language-progress-bar');
          if (progressBar) {
            progressBar.style.width = progressBar.style.getPropertyValue('--progress');
          }
        }
      });
    });

    document.querySelectorAll('.language-item').forEach(item => {
      const progressBar = item.querySelector('.language-progress-bar');

      // Observa para animação automática
      observer.observe(item);

      // Reanima ao passar o mouse
      item.addEventListener('mouseenter', () => {
        if (progressBar) {
          progressBar.style.transition = 'none'; // Remove transição temporariamente
          progressBar.style.width = '0';

          // Usa requestAnimationFrame para garantir que o reset ocorra antes da animação
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              progressBar.style.transition = 'width 2.0s ease'; // Restaura a transição
              progressBar.style.width = progressBar.style.getPropertyValue('--progress');
            });
          });
        }
      });
      
    });
    
    
  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 120,
      backSpeed: 100,
      backDelay: 2500
    });
  }
  });

  

    
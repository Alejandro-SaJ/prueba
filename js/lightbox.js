document.addEventListener("DOMContentLoaded", function() {
    const lightboxLinks = document.querySelectorAll('.lightbox-link');
    const lightboxes = document.querySelectorAll('.lightbox');
    const closeButtons = document.querySelectorAll('.close');
  
    lightboxLinks.forEach((link, index) => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetLightboxId = link.getAttribute('href');
        const targetLightbox = document.querySelector(targetLightboxId);
        targetLightbox.style.display = 'block';
      });
    });
  
    closeButtons.forEach(button => {
      button.addEventListener('click', function() {
        const lightbox = button.closest('.lightbox');
        lightbox.style.display = 'none';
      });
    });
  
    lightboxes.forEach(lightbox => {
      lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
          lightbox.style.display = 'none';
        }
      });
    });
  });
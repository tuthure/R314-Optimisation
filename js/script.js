(function() {
  // Fonction utilitaire pour gérer une image
  const handleImageLoad = (img) => {
    img.classList.add('loaded');
  };

  // Logique principale
  const initImages = () => {
    const imgs = document.querySelectorAll('.card img');
    
    imgs.forEach(img => {
      // Si l'image est déjà dans le cache du navigateur
      if (img.complete) {
        handleImageLoad(img);
      } else {
        // Sinon, on attend qu'elle charge
        img.addEventListener('load', () => handleImageLoad(img));
      }
    });
  };

  // On lance le script quand le DOM est prêt (plus rapide que window.load)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initImages);
  } else {
    initImages();
  }
})();
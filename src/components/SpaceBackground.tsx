
import { useEffect } from 'react';

const SpaceBackground = () => {
  useEffect(() => {
    // Create stars
    const starsContainer = document.getElementById('stars-container');
    if (starsContainer) {
      const numberOfStars = 200;
      
      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Randomize star size
        const size = Math.random() * 3;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Randomize star position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        
        // Randomize star brightness
        const opacity = Math.random() * 0.8 + 0.2;
        star.style.opacity = opacity.toString();
        
        // Add pulsing animation to some stars
        if (Math.random() > 0.7) {
          star.classList.add('animate-pulse-slow');
          star.style.animationDelay = `${Math.random() * 4}s`;
        }
        
        starsContainer.appendChild(star);
      }
      
      // Add some shooting stars
      for (let i = 0; i < 3; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.classList.add('shooting-star');
        
        const width = Math.random() * 100 + 50;
        shootingStar.style.width = `${width}px`;
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        shootingStar.style.left = `${x}%`;
        shootingStar.style.top = `${y}%`;
        
        shootingStar.style.animationDelay = `${Math.random() * 10}s`;
        
        starsContainer.appendChild(shootingStar);
      }
    }
  }, []);

  return (
    <div id="stars-container" className="fixed inset-0 overflow-hidden z-0"></div>
  );
};

export default SpaceBackground;

import { useEffect } from 'react';

export const useBackNavigation = () => {
  useEffect(() => {
    let startX: number;
    
    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX;
      const threshold = 100; // minimum distance for swipe
      
      // If swipe right more than threshold, go back
      if (endX - startX > threshold) {
        window.history.back();
      }
    };

    // Handle clicks on the main container
    const handleClick = (e: MouseEvent) => {
      // Check if click is on the edge of the screen (first 50px from left)
      if (e.clientX < 50) {
        window.history.back();
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('click', handleClick);
    };
  }, []);
};
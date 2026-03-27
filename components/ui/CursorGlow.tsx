'use client';

import { useEffect, useState } from 'react';

export function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
          document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
          if (!isVisible) setIsVisible(true);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Only enable on non-touch devices
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      window.addEventListener('mousemove', handleMouseMove);
      document.body.addEventListener('mouseleave', handleMouseLeave);
      document.body.addEventListener('mouseenter', handleMouseEnter);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 overflow-hidden"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div 
        className="absolute w-[500px] h-[500px] rounded-full mix-blend-multiply will-change-transform"
        style={{
          top: 'var(--cursor-y, 50%)',
          left: 'var(--cursor-x, 50%)',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}

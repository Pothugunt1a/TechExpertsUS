import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${clientX}px`;
        cursorDotRef.current.style.top = `${clientY}px`;
      }

      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          { duration: 500, fill: 'forwards' }
        );
      }

      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.onclick !== null ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(isClickable);
    };

    const handleMouseEnter = () => {
      if (cursorDotRef.current) cursorDotRef.current.style.opacity = '1';
      if (cursorOutlineRef.current) cursorOutlineRef.current.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      if (cursorDotRef.current) cursorDotRef.current.style.opacity = '0';
      if (cursorOutlineRef.current) cursorOutlineRef.current.style.opacity = '0';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorDotRef}
        className={`custom-cursor-dot ${isPointer ? 'cursor-hover' : ''}`}
        style={{
          position: 'fixed',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: 'hsl(var(--primary))',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.3s ease, transform 0.2s ease',
          opacity: 0,
          mixBlendMode: 'difference',
        }}
      />
      <div
        ref={cursorOutlineRef}
        className={`custom-cursor-outline ${isPointer ? 'cursor-hover' : ''}`}
        style={{
          position: 'fixed',
          width: isPointer ? '50px' : '40px',
          height: isPointer ? '50px' : '40px',
          borderRadius: '50%',
          border: '2px solid hsl(var(--primary))',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.3s ease, width 0.3s ease, height 0.3s ease',
          opacity: 0,
          boxShadow: isPointer 
            ? '0 0 20px hsl(var(--primary) / 0.5), inset 0 0 20px hsl(var(--primary) / 0.3)'
            : '0 0 10px hsl(var(--primary) / 0.3)',
        }}
      />
      <style>{`
        * {
          cursor: none !important;
        }
        
        .custom-cursor-dot.cursor-hover {
          transform: translate(-50%, -50%) scale(1.5);
        }
      `}</style>
    </>
  );
}

import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafIdRef = useRef<number>();
  const animationRunningRef = useRef(true);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Initialize dimensions
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Main animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !dimensions.width || !dimensions.height) return;

    const ctx = canvas.getContext('2d', { 
      alpha: true,
      willReadFrequently: false 
    });
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Initialize particles only once
    if (particlesRef.current.length === 0) {
      const particleCount = 50;
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    } else {
      // Adjust existing particles to new canvas size
      particlesRef.current.forEach(particle => {
        if (particle.x > canvas.width) particle.x = Math.random() * canvas.width;
        if (particle.y > canvas.height) particle.y = Math.random() * canvas.height;
      });
    }

    animationRunningRef.current = true;
    let frameCount = 0;

    const animate = () => {
      if (!animationRunningRef.current || !canvas || !ctx) {
        return;
      }

      frameCount++;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      const particles = particlesRef.current;
      const particleCount = particles.length;

      for (let i = 0; i < particleCount; i++) {
        const particle = particles[i];
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${particle.opacity})`;
        ctx.fill();

        // Draw connections (optimize by only checking nearby particles)
        for (let j = i + 1; j < particleCount; j++) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      }

      // Continue animation
      rafIdRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    rafIdRef.current = requestAnimationFrame(animate);

    // Handle visibility change
    const handleVisibilityChange = () => {
      if (document.hidden) {
        animationRunningRef.current = false;
        if (rafIdRef.current) {
          cancelAnimationFrame(rafIdRef.current);
        }
      } else {
        animationRunningRef.current = true;
        rafIdRef.current = requestAnimationFrame(animate);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      animationRunningRef.current = false;
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ 
        opacity: 0.4,
        width: '100%',
        height: '100%',
        display: 'block',
        imageRendering: 'auto'
      }}
    />
  );
}

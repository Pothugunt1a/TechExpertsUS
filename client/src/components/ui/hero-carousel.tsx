import { ParticleBackground } from "./particle-background";

export function HeroCarousel() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/Home.mp4" type="video/mp4" />
      </video>

      {/* Overlay for better visibility in both modes */}
      <div className="absolute inset-0 bg-background/10 dark:bg-background/0" />

      {/* Particle Background */}
      <ParticleBackground />
    </div>
  );
}
import { ParticleBackground } from "./particle-background";

export function HeroCarousel() {
  return (
    <div className="relative w-full overflow-hidden mb-0" style={{ aspectRatio: '16/9' }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-fill"
      >
        <source src="/assets/Home.mp4" type="video/mp4" />
      </video>

      {/* Particle Background */}
      <ParticleBackground />
    </div>
  );
}
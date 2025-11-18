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
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          minWidth: '100%',
          minHeight: '100%',
        }}
      >
        <source src="/assets/Home.mp4" type="video/mp4" />
      </video>

      {/* Particle Background */}
      <ParticleBackground />
    </div>
  );
}
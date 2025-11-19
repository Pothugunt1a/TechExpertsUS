import { ParticleBackground } from "./particle-background";

export function HeroCarousel() {
  return (
    <div className="relative min-h-screen md:min-h-screen h-[50vh] md:h-auto overflow-hidden mb-0">
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

      {/* Particle Background */}
      <ParticleBackground />
    </div>
  );
}
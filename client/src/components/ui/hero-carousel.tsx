import { ParticleBackground } from "./particle-background";

export function HeroCarousel() {
  return (
    <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:min-h-screen overflow-hidden">
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
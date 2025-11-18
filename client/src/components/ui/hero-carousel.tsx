import { ParticleBackground } from "./particle-background";

export function HeroCarousel() {
  return (
    <div className="relative h-screen md:min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto max-w-none object-cover"
      >
        <source src="/assets/Home.mp4" type="video/mp4" />
      </video>

      {/* Particle Background */}
      <ParticleBackground />
    </div>
  );
}
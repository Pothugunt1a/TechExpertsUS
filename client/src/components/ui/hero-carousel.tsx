import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const slides = [
  {
    id: 1,
    type: "slide1" as const,
  },
  {
    id: 2,
    type: "slide2" as const,
  },
  {
    id: 3,
    type: "slide3" as const,
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000); // 2 seconds per slide as requested

    return () => clearInterval(timer);
  }, [isPaused]);

  const slide = slides[currentSlide];

  return (
    <div 
      className="relative w-full min-h-screen overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Hero carousel"
      aria-live="polite"
    >
      <AnimatePresence mode="wait">
        {slide.type === "slide1" && (
          <Slide1 key="slide1" />
        )}
        {slide.type === "slide2" && (
          <Slide2 key="slide2" />
        )}
        {slide.type === "slide3" && (
          <Slide3 key="slide3" />
        )}
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setIsPaused(false); // Reset timer on manual navigation
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            data-testid={`indicator-slide-${index}`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  );
}

// Slide 1: Solutions that you need!
function Slide1() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute inset-0 w-full min-h-screen flex items-center bg-gradient-to-br from-background via-background to-primary/10 py-20"
    >
      <div className="relative w-full px-6 lg:px-8">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Animate from TOP */}
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left z-10"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
                Solutions
              </span>{" "}
              that you need!
            </h1>
            
            <p className="text-2xl md:text-3xl text-muted-foreground mb-8 max-w-2xl">
              We aim to improve client
              <br />
              proficiency, profit & productivity
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/services">
                <Button size="lg" className="text-lg px-8" data-testid="button-explore-services">
                  Explore Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8" data-testid="button-contact-us">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Image - Animate from LEFT */}
          <motion.div
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            <img
              src="/assets/Home1.png"
              alt="Solutions"
              className="w-full max-w-lg h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// Slide 2: Service boxes with images
function Slide2() {
  const services = [
    "Programming & app development",
    "Security & compliance governance",
    "Mobile apps & device management",
    "Project management",
    "Database administration",
    "Data Analytics",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute inset-0 w-full min-h-screen flex items-center bg-gradient-to-br from-background via-chart-2/5 to-background py-20"
    >
      <div className="relative w-full px-6 lg:px-8">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Service Boxes - Left side with staggered animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.1 * index,
                  ease: "easeOut"
                }}
                className="relative p-6 bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border border-primary/20 rounded-xl shadow-lg overflow-hidden"
                data-testid={`service-box-${index}`}
              >
                <p className="relative text-sm md:text-base font-semibold text-foreground text-center">
                  {service}
                </p>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-xl" />
              </motion.div>
            ))}
          </div>

          {/* Images - Right side, appear together */}
          <div className="flex gap-6 items-center justify-center flex-wrap lg:flex-nowrap">
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative flex-1 max-w-xs min-w-[200px]"
            >
              <img
                src="/assets/Home2.1.png"
                alt="Service 1"
                className="w-full h-auto object-contain drop-shadow-2xl rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative flex-1 max-w-xs min-w-[200px]"
            >
              <img
                src="/assets/Home2.png"
                alt="Service 2"
                className="w-full h-auto object-contain drop-shadow-2xl rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Slide 3: Opportunity with balloons
function Slide3() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute inset-0 w-full min-h-screen flex items-center bg-gradient-to-br from-background via-primary/5 to-chart-2/10 py-20"
    >
      <div className="relative w-full px-6 lg:px-8">
        <div className="max-w-5xl w-full mx-auto text-center relative min-h-[600px] flex items-center justify-center">
          {/* Small Balloon - Top Left - Responsive positioning */}
          <motion.div
            initial={{ x: -300, y: -300, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut"
            }}
            className="absolute top-0 left-0 lg:top-10 lg:left-10 hidden sm:block"
            style={{ maxWidth: "clamp(80px, 15vw, 128px)" }}
          >
            <img
              src="/assets/Home3.png"
              alt="Balloon"
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </motion.div>

          {/* Medium Balloon - Top Right - Responsive positioning */}
          <motion.div
            initial={{ x: 300, y: -300, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.1,
              ease: "easeOut"
            }}
            className="absolute top-0 right-0 lg:top-5 lg:right-5 hidden sm:block"
            style={{ maxWidth: "clamp(120px, 20vw, 192px)" }}
          >
            <img
              src="/assets/Home3.1.png"
              alt="Balloon"
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </motion.div>

          {/* Text Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            {/* "Opportunity" from top to center */}
            <motion.h2
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.6,
                ease: "easeOut"
              }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
            >
              <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
                Opportunity
              </span>
            </motion.h2>

            {/* "You will be satisfied and" from bottom to center */}
            <motion.p
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut"
              }}
              className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-4"
            >
              You will be satisfied and
            </motion.p>

            {/* "your customers will reward you for it" from bottom to center */}
            <motion.p
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.6,
                delay: 0.3,
                ease: "easeOut"
              }}
              className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-12"
            >
              your customers will reward you for it
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/services">
                <Button size="lg" className="text-lg px-8" data-testid="button-get-started">
                  Get Started
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="text-lg px-8" data-testid="button-learn-more">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

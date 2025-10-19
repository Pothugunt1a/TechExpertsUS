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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds per slide for better viewing

    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div className="relative w-full h-screen overflow-hidden">
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
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            data-testid={`indicator-slide-${index}`}
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
      transition={{ duration: 0.5 }}
      className="absolute inset-0 w-full h-full bg-gradient-to-br from-background via-background to-primary/10"
    >
      <div className="relative w-full h-full flex items-center justify-center px-6 lg:px-8">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Animate from top */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 60 }}
            className="text-center lg:text-left z-10"
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Solutions
              </span>{" "}
              that you need!
            </motion.h1>
            
            <motion.p
              className="text-2xl md:text-3xl text-muted-foreground mb-8 max-w-2xl"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              We aim to improve client
              <br />
              proficiency, profit & productivity
            </motion.p>

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
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
            </motion.div>
          </motion.div>

          {/* Image - Animate from left */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 60 }}
            className="relative flex items-center justify-center"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative"
            >
              <img
                src="/assets/Home1.png"
                alt="Solutions"
                className="w-full max-w-lg h-auto object-contain drop-shadow-2xl"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-chart-2/20 blur-3xl -z-10" />
            </motion.div>
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
      transition={{ duration: 0.5 }}
      className="absolute inset-0 w-full h-full bg-gradient-to-br from-background via-chart-2/5 to-background"
    >
      <div className="relative w-full h-full flex items-center justify-center px-6 lg:px-8">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Service Boxes - Left side */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ x: -100, opacity: 0, scale: 0.8 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.1 * index,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 10px 40px rgba(59, 130, 246, 0.3)"
                }}
                className="relative p-6 bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border border-primary/20 rounded-xl shadow-lg group overflow-hidden"
                data-testid={`service-box-${index}`}
              >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-chart-2/10 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                
                <p className="relative text-sm md:text-base font-semibold text-foreground text-center">
                  {service}
                </p>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-xl" />
              </motion.div>
            ))}
          </motion.div>

          {/* Images - Right side */}
          <motion.div
            className="flex gap-6 items-center justify-center"
          >
            <motion.div
              initial={{ x: 100, opacity: 0, rotateY: -20 }}
              animate={{ x: 0, opacity: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring" }}
              className="relative flex-1 max-w-xs"
            >
              <motion.img
                src="/assets/Home2.1.png"
                alt="Service 1"
                className="w-full h-auto object-contain drop-shadow-2xl rounded-lg"
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent blur-2xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ x: 150, opacity: 0, rotateY: 20 }}
              animate={{ x: 0, opacity: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.5, type: "spring" }}
              className="relative flex-1 max-w-xs"
            >
              <motion.img
                src="/assets/Home2.png"
                alt="Service 2"
                className="w-full h-auto object-contain drop-shadow-2xl rounded-lg"
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-chart-2/10 to-transparent blur-2xl -z-10" />
            </motion.div>
          </motion.div>
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
      transition={{ duration: 0.5 }}
      className="absolute inset-0 w-full h-full bg-gradient-to-br from-background via-primary/5 to-chart-2/10"
    >
      <div className="relative w-full h-full flex items-center justify-center px-6 lg:px-8">
        <div className="max-w-5xl w-full mx-auto text-center relative">
          {/* Small Balloon - Top Left */}
          <motion.div
            initial={{ x: -200, y: -200, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.5, 
              delay: 0.2,
              type: "spring",
              stiffness: 60
            }}
            className="absolute -top-20 -left-20 lg:top-0 lg:left-0"
          >
            <motion.img
              src="/assets/Home3.png"
              alt="Balloon"
              className="w-32 h-auto object-contain drop-shadow-xl"
              animate={{ 
                y: [0, -30, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </motion.div>

          {/* Medium Balloon - Top Right */}
          <motion.div
            initial={{ x: 200, y: -200, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.5, 
              delay: 0.4,
              type: "spring",
              stiffness: 60
            }}
            className="absolute -top-32 -right-32 lg:top-0 lg:right-0"
          >
            <motion.img
              src="/assets/Home3.1.png"
              alt="Balloon"
              className="w-48 h-auto object-contain drop-shadow-xl"
              animate={{ 
                y: [0, -40, 0],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>

          {/* Text Content */}
          <div className="relative z-10">
            {/* "Opportunity" from top to center */}
            <motion.h2
              initial={{ y: -150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 1, 
                delay: 0.6,
                type: "spring",
                stiffness: 70
              }}
              className="text-6xl md:text-8xl font-bold mb-8"
            >
              <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Opportunity
              </span>
            </motion.h2>

            {/* "You will be satisfied and" from bottom to center */}
            <motion.p
              initial={{ y: 150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 1, 
                delay: 0.8,
                type: "spring",
                stiffness: 70
              }}
              className="text-3xl md:text-4xl text-muted-foreground mb-4"
            >
              You will be satisfied and
            </motion.p>

            {/* "your customers will reward you for it" from bottom to center */}
            <motion.p
              initial={{ y: 150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 1, 
                delay: 1,
                type: "spring",
                stiffness: 70
              }}
              className="text-3xl md:text-4xl text-muted-foreground mb-12"
            >
              your customers will reward you for it
            </motion.p>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
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

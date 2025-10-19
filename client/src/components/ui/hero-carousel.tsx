
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Floating Circles */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-48 h-48 rounded-full bg-chart-2/10 blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, -20, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-primary/15 blur-2xl"
          animate={{
            y: [0, 60, 0],
            x: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-1/3 w-56 h-56 rounded-full bg-chart-1/10 blur-3xl"
          animate={{
            y: [0, -50, 0],
            x: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Squares */}
        <motion.div
          className="absolute top-1/3 left-1/2 w-24 h-24 bg-gradient-to-br from-primary/5 to-chart-2/5 blur-xl rotate-45"
          animate={{
            rotate: [45, 135, 45],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-2/3 right-1/4 w-20 h-20 bg-gradient-to-tl from-chart-3/5 to-primary/5 blur-xl rotate-12"
          animate={{
            rotate: [12, 102, 12],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-gradient-to-r from-primary/5 via-chart-2/10 to-chart-1/5 blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <AnimatePresence mode="wait">
        {currentSlide === 0 && (
          <motion.div
            key="slide1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Text from top */}
                <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-left"
                >
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
                    Solutions that you need!
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground">
                    We aim to improve client proficiency, profit & productivity
                  </p>
                </motion.div>

                {/* Right side - Image from left */}
                <motion.div
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative max-w-lg mx-auto"
                >
                  <img
                    src="/assets/Home1.png"
                    alt="Solutions"
                    className="w-full h-auto rounded-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {currentSlide === 1 && (
          <motion.div
            key="slide2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Left side - Animated boxes (1/3 width) */}
                <div className="w-full lg:w-1/3 space-y-3">
                  {[
                    "Programming & app development",
                    "Security & compliance governance",
                    "Mobile apps & device management",
                    "Project management",
                    "Database administration",
                    "Data Analytics"
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative pl-6 py-3 border-l-4 border-primary/50 bg-card/50 backdrop-blur-sm rounded-r-xl hover:border-primary hover:bg-card/80 transition-all duration-300"
                    >
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
                      <p className="text-base font-semibold text-foreground">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Right side - Two images centered (2/3 width) */}
                <div className="w-full lg:w-2/3 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-8 w-full max-w-5xl">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="flex items-center justify-center"
                    >
                      <img
                        src="/assets/Home2.1.png"
                        alt="Service 1"
                        className="w-[150%] h-auto min-w-[300px] rounded-2xl"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="flex items-center justify-center"
                    >
                      <img
                        src="/assets/Home2.png"
                        alt="Service 2"
                        className="w-[150%] h-auto min-w-[300px] rounded-2xl"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {currentSlide === 2 && (
          <motion.div
            key="slide3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative">
              {/* Small balloon from top left */}
              <motion.div
                initial={{ x: -200, y: -200, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                className="absolute top-10 left-10 w-32 h-32 z-10"
              >
                <img
                  src="/assets/Home3.png"
                  alt="Balloon 1"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Medium balloon from top right */}
              <motion.div
                initial={{ x: 200, y: -200, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
                className="absolute top-10 right-10 w-48 h-48 z-10"
              >
                <img
                  src="/assets/Home3.1.png"
                  alt="Balloon 2"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Center content */}
              <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8">
                <motion.h2
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent text-center"
                >
                  Opportunity
                </motion.h2>

                <motion.p
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-2xl md:text-3xl text-foreground text-center font-semibold"
                >
                  You will be satisfied and
                </motion.p>

                <motion.p
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="text-2xl md:text-3xl text-muted-foreground text-center"
                >
                  your customers will reward you for it
                </motion.p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-primary w-8"
                : "bg-primary/30 hover:bg-primary/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

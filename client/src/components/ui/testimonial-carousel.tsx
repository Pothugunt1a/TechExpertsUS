import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  content: string;
  author: string;
  role: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative max-w-4xl mx-auto" data-testid="testimonial-carousel">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 md:p-12"
        >
          <Quote className="w-12 h-12 text-primary/30 mb-6" />
          <p className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
            {testimonials[currentIndex].content}
          </p>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center">
              <span className="text-white font-semibold">
                {testimonials[currentIndex].author.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-semibold">{testimonials[currentIndex].author}</p>
              <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary w-8"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            data-testid={`button-testimonial-dot-${index}`}
          />
        ))}
      </div>
    </div>
  );
}

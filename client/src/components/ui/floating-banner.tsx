import { useState } from "react";
import { X, Megaphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface FloatingBannerProps {
  message: string;
  link?: {
    text: string;
    href: string;
  };
}

export function FloatingBanner({ message, link }: FloatingBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed top-20 left-0 right-0 z-40 px-4 py-2"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(6, 182, 212, 0.2)",
                  "0 0 40px rgba(6, 182, 212, 0.4)",
                  "0 0 20px rgba(6, 182, 212, 0.2)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative overflow-hidden bg-gradient-to-r from-primary/90 via-chart-2/90 to-primary/90 dark:from-primary/80 dark:via-chart-2/80 dark:to-primary/80 backdrop-blur-xl border border-primary/30 rounded-lg shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
              
              <div className="relative flex items-center justify-between gap-4 px-6 py-3">
                <div className="flex items-center gap-3 flex-1">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Megaphone className="w-5 h-5 text-white dark:text-white" />
                  </motion.div>
                  <p className="text-sm md:text-base font-medium text-white dark:text-white">
                    {message}
                  </p>
                </div>
                
                {link && (
                  <a
                    href={link.href}
                    className="text-sm font-semibold text-white dark:text-white hover:underline whitespace-nowrap"
                    data-testid="link-banner-cta"
                  >
                    {link.text} →
                  </a>
                )}
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsVisible(false)}
                  className="h-8 w-8 text-white hover:bg-white/20 dark:text-white dark:hover:bg-white/20"
                  data-testid="button-close-banner"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

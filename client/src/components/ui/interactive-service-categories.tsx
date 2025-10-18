import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LucideIcon } from "lucide-react";

interface ServiceCategory {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  visual: string;
}

interface InteractiveServiceCategoriesProps {
  categories: ServiceCategory[];
}

export function InteractiveServiceCategories({ categories }: InteractiveServiceCategoriesProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedCategory = categories[selectedIndex];

  return (
    <div className="relative w-full">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 border-2 border-primary/20 rounded-2xl"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-24 h-24 border-2 border-chart-2/20 rounded-full"
          animate={{
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-20 h-20 bg-primary/10 rounded-lg"
          animate={{
            y: [0, -25, 0],
            rotate: [0, -45, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-16 h-16 border-2 border-chart-2/30"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-tr from-chart-2/20 to-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Main Content */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side - Category List */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              Benefits We Offer
            </h3>
            <p className="text-lg text-muted-foreground">
              Unlock the full potential of our services with our amazing features and top-notch solutions.
            </p>
          </div>

          <div className="space-y-3">
            {categories.map((category, index) => {
              const Icon = category.icon;
              const isSelected = selectedIndex === index;
              
              return (
                <motion.button
                  key={category.title}
                  onClick={() => setSelectedIndex(index)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="relative w-full text-left p-5 rounded-xl transition-all duration-300 bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card/80"
                  data-testid={`category-item-${index}`}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`
                        flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center
                        ${isSelected 
                          ? 'bg-gradient-to-br from-primary to-chart-2' 
                          : 'bg-primary/10'
                        }
                      `}
                      animate={isSelected ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-primary'}`} />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h4 className={`
                        text-base md:text-lg font-semibold mb-1
                        ${isSelected ? 'text-foreground' : 'text-foreground/90'}
                      `}>
                        {category.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Vertical bar indicator - centered on left border */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-primary to-chart-2 rounded-r-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Right Side - Interactive Visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative lg:sticky lg:top-24"
        >
          <div className="relative aspect-square max-w-lg mx-auto">
            {/* Background glow effect */}
            <motion.div
              key={`glow-${selectedIndex}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 bg-gradient-to-br from-primary/30 via-chart-2/30 to-primary/30 rounded-3xl blur-3xl"
            />

            {/* Visual Container */}
            <div className="relative bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl rounded-3xl border border-primary/20 p-8 shadow-2xl overflow-hidden">
              {/* Animated pattern background */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="20" cy="20" r="1" fill="currentColor" className="text-primary" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative z-10"
                  data-testid={`visual-display-${selectedIndex}`}
                >
                  {/* Visual Content - SVG Illustration */}
                  <div 
                    className="w-full h-full flex items-center justify-center"
                    dangerouslySetInnerHTML={{ __html: selectedCategory.visual }}
                  />
                  
                  {/* Category label at bottom */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 text-center"
                  >
                    <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary/20 to-chart-2/20 backdrop-blur-sm rounded-full border border-primary/30">
                      <p className="text-lg font-semibold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                        {selectedCategory.title}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LucideIcon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

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
  const { theme } = useTheme();

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
      <div className="relative grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-start">
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
              Technology Platforms
            </h3>
            <p className="text-lg text-muted-foreground">
              Explore our comprehensive technology platforms and discover the perfect solution for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((category, index) => {
              const Icon = category.icon;
              const isSelected = selectedIndex === index;
              
              return (
                <motion.button
                  key={category.title}
                  onClick={() => setSelectedIndex(index)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="relative w-full text-left p-6 rounded-xl transition-all duration-300 bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card/80 h-full"
                  data-testid={`category-item-${index}`}
                >
                  <div className="flex flex-col h-full">
                    <motion.div
                      className={`
                        w-14 h-14 rounded-lg flex items-center justify-center mb-4
                        ${isSelected 
                          ? 'bg-gradient-to-br from-primary to-chart-2' 
                          : 'bg-primary/10'
                        }
                      `}
                      animate={isSelected ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className={`w-7 h-7 ${isSelected ? 'text-white' : 'text-primary'}`} />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h4 className={`
                        text-base md:text-lg font-semibold mb-2 whitespace-nowrap overflow-hidden text-ellipsis
                        ${isSelected ? 'text-foreground' : 'text-foreground/90'}
                      `}>
                        {category.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
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

        {/* Right Side - Interactive Visual (Full Height) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative lg:sticky lg:top-24 h-full min-h-[800px]"
          style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
        >
          {/* Visual Container - No Card Styling */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Top Right 3D Corner Border - Enhanced */}
            <motion.div 
              className="absolute top-0 right-0 w-48 h-48 pointer-events-none z-20"
              initial={{ opacity: 0, scale: 0.8, rotateZ: -15 }}
              animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
              transition={{ delay: 0.3, duration: 1, type: "spring", stiffness: 100 }}
            >
              {/* Corner Accent Square */}
              <motion.div
                className="absolute top-0 right-0 w-3 h-3 bg-gradient-to-br from-primary to-chart-2 rounded-sm"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ transform: "translateZ(20px)" }}
              />
              
              {/* Main Border - Thick Professional */}
              <motion.div
                className="absolute top-0 right-0 w-full h-full"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ 
                  rotateX: [0, 8, 0],
                  rotateY: [0, -8, 0],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: [0.45, 0.05, 0.55, 0.95] }}
              >
                <motion.div 
                  className="absolute top-0 right-0 w-full h-2 bg-gradient-to-l from-primary via-chart-2 to-transparent"
                  style={{ 
                    transform: "translateZ(15px)",
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.3)"
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.3)",
                      "0 0 40px rgba(59, 130, 246, 0.8), 0 0 80px rgba(59, 130, 246, 0.5)",
                      "0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-primary via-chart-2 to-transparent"
                  style={{ 
                    transform: "translateZ(15px)",
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.3)"
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.3)",
                      "0 0 40px rgba(59, 130, 246, 0.8), 0 0 80px rgba(59, 130, 246, 0.5)",
                      "0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
              
              {/* Inner Accent Line */}
              <motion.div
                className="absolute top-3 right-3 w-full h-full opacity-70"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ 
                  rotateX: [0, -5, 0],
                  rotateY: [0, 5, 0],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: [0.45, 0.05, 0.55, 0.95], delay: 0.5 }}
              >
                <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-white/80 via-primary/60 to-transparent"
                     style={{ transform: "translateZ(8px)" }}></div>
                <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-white/80 via-primary/60 to-transparent"
                     style={{ transform: "translateZ(8px)" }}></div>
              </motion.div>
              
              {/* Animated Glow Orb */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24"
                animate={{ 
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/50 via-chart-2/50 to-transparent blur-2xl rounded-full"></div>
              </motion.div>
              
              {/* Particle Trail Effect */}
              <motion.div
                className="absolute top-0 right-0"
                animate={{ 
                  x: [0, -100],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", repeatDelay: 1 }}
              >
                <div className="w-1 h-1 bg-primary rounded-full blur-sm"></div>
              </motion.div>
            </motion.div>
            
            {/* Bottom Left 3D Corner Border - Enhanced */}
            <motion.div 
              className="absolute bottom-0 left-0 w-48 h-48 pointer-events-none z-20"
              initial={{ opacity: 0, scale: 0.8, rotateZ: 15 }}
              animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
              transition={{ delay: 0.3, duration: 1, type: "spring", stiffness: 100 }}
            >
              {/* Corner Accent Square */}
              <motion.div
                className="absolute bottom-0 left-0 w-3 h-3 bg-gradient-to-tl from-chart-2 to-primary rounded-sm"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, -90, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ transform: "translateZ(20px)" }}
              />
              
              {/* Main Border - Thick Professional */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-full"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ 
                  rotateX: [0, -8, 0],
                  rotateY: [0, 8, 0],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: [0.45, 0.05, 0.55, 0.95] }}
              >
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-chart-2 via-primary to-transparent"
                  style={{ 
                    transform: "translateZ(15px)",
                    boxShadow: "0 0 30px rgba(147, 51, 234, 0.6), 0 0 60px rgba(147, 51, 234, 0.3)"
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(147, 51, 234, 0.6), 0 0 60px rgba(147, 51, 234, 0.3)",
                      "0 0 40px rgba(147, 51, 234, 0.8), 0 0 80px rgba(147, 51, 234, 0.5)",
                      "0 0 30px rgba(147, 51, 234, 0.6), 0 0 60px rgba(147, 51, 234, 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute bottom-0 left-0 w-2 h-full bg-gradient-to-t from-chart-2 via-primary to-transparent"
                  style={{ 
                    transform: "translateZ(15px)",
                    boxShadow: "0 0 30px rgba(147, 51, 234, 0.6), 0 0 60px rgba(147, 51, 234, 0.3)"
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(147, 51, 234, 0.6), 0 0 60px rgba(147, 51, 234, 0.3)",
                      "0 0 40px rgba(147, 51, 234, 0.8), 0 0 80px rgba(147, 51, 234, 0.5)",
                      "0 0 30px rgba(147, 51, 234, 0.6), 0 0 60px rgba(147, 51, 234, 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
              
              {/* Inner Accent Line */}
              <motion.div
                className="absolute bottom-3 left-3 w-full h-full opacity-70"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ 
                  rotateX: [0, 5, 0],
                  rotateY: [0, -5, 0],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: [0.45, 0.05, 0.55, 0.95], delay: 0.5 }}
              >
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white/80 via-chart-2/60 to-transparent"
                     style={{ transform: "translateZ(8px)" }}></div>
                <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-white/80 via-chart-2/60 to-transparent"
                     style={{ transform: "translateZ(8px)" }}></div>
              </motion.div>
              
              {/* Animated Glow Orb */}
              <motion.div
                className="absolute -bottom-4 -left-4 w-24 h-24"
                animate={{ 
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, 1.2, 1],
                  rotate: [0, -180, -360]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full bg-gradient-to-tl from-chart-2/50 via-primary/50 to-transparent blur-2xl rounded-full"></div>
              </motion.div>
              
              {/* Particle Trail Effect */}
              <motion.div
                className="absolute bottom-0 left-0"
                animate={{ 
                  x: [0, 100],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", repeatDelay: 1 }}
              >
                <div className="w-1 h-1 bg-chart-2 rounded-full blur-sm"></div>
              </motion.div>
            </motion.div>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative z-10 w-full max-w-lg"
                data-testid={`visual-display-${selectedIndex}`}
              >
                {/* Visual Content - Image for specific services or SVG for others */}
                {(() => {
                  let imageSrc = "";
                  let altText = "";
                  
                  switch (selectedCategory.title) {
                    case "Software as a Service (SaaS)":
                      imageSrc = theme === "dark" ? "/assets/Saas.png" : "/assets/Saas1.png";
                      altText = "Software as a Service";
                      break;
                    case "Application Service Providers (ASP)":
                      imageSrc = "/assets/ASP.png";
                      altText = "Application Service Providers";
                      break;
                    case "Virtualization":
                      imageSrc = "/assets/Virtualization.png";
                      altText = "Virtualization";
                      break;
                    case "Cloud Computing":
                      imageSrc = "/assets/CloudComputing.gif";
                      altText = "Cloud Computing";
                      break;
                    case "Enterprise Resource Planning (ERP)":
                      imageSrc = "/assets/ERP.gif";
                      altText = "Enterprise Resource Planning";
                      break;
                    case "Customer Relations Management":
                      imageSrc = "/assets/CRM.gif";
                      altText = "Customer Relations Management";
                      break;
                    case "Infrastructure as a Service (IaaS)":
                      imageSrc = "/assets/Iaas.gif";
                      altText = "Infrastructure as a Service";
                      break;
                    case "Internet of Things (IoT)":
                      imageSrc = "/assets/IOT.png";
                      altText = "Internet of Things";
                      break;
                    case "Big Data":
                      imageSrc = "/assets/Bigdata.png";
                      altText = "Big Data";
                      break;
                  }
                  
                  if (imageSrc) {
                    const isERP = selectedCategory.title === "Enterprise Resource Planning (ERP)";
                    return (
                      <div className="w-full flex items-center justify-center px-8">
                        <img
                          src={imageSrc}
                          alt={altText}
                          className="w-full h-auto object-contain"
                          style={isERP ? {
                            maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                            maskComposite: 'intersect',
                            WebkitMaskComposite: 'source-in'
                          } : undefined}
                        />
                      </div>
                    );
                  }
                  
                  return (
                    <div 
                      className="w-full flex items-center justify-center px-8"
                      dangerouslySetInnerHTML={{ __html: selectedCategory.visual }}
                    />
                  );
                })()}
                
                {/* Category label at bottom */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-12 text-center"
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
        </motion.div>
      </div>
    </div>
  );
}


import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState, useRef } from "react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
  index?: number;
  image?: string;
}

export function ServiceCard({ icon: Icon, title, description, link, index = 0, image }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse position tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / (rect.width / 2));
    mouseY.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const card = (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onHoverStart={() => setIsHovered(true)}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-full"
      data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <motion.div 
        className="relative h-full bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_60px_rgba(34,211,238,0.25)]"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Image Section with Advanced Effects */}
        {image && (
          <div className="relative h-64 overflow-hidden">
            {/* Main Image with Parallax */}
            <motion.div
              className="absolute inset-0"
              animate={{
                scale: isHovered ? 1.15 : 1,
              }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover"
              />
              
              {/* Color overlay with blend mode */}
              <motion.div 
                className="absolute inset-0 bg-primary/20 mix-blend-overlay"
                animate={{
                  opacity: isHovered ? 0.4 : 0,
                }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            
            {/* Dynamic Gradient Overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"
              animate={{
                background: isHovered 
                  ? "linear-gradient(to top, rgb(0 0 0 / 0.9), rgb(0 0 0 / 0.6), transparent)"
                  : "linear-gradient(to top, rgb(0 0 0 / 0.8), rgb(0 0 0 / 0.5), transparent)"
              }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Multiple Scan Line Effects */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-transparent"
              animate={{
                y: isHovered ? ["0%", "100%"] : "0%",
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                ease: "linear",
              }}
              style={{ height: "20%" }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-chart-2/20 to-transparent"
              animate={{
                x: isHovered ? ["0%", "100%"] : "0%",
              }}
              transition={{
                duration: 1.5,
                repeat: isHovered ? Infinity : 0,
                ease: "linear",
              }}
              style={{ width: "30%" }}
            />

            {/* Animated Grid Overlay */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-20"
              style={{
                backgroundImage: "linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
              animate={{
                backgroundPosition: isHovered ? ["0px 0px", "20px 20px"] : "0px 0px",
              }}
              transition={{
                duration: 1,
                repeat: isHovered ? Infinity : 0,
                ease: "linear",
              }}
            />

            {/* Floating Icon with Enhanced Animation */}
            <motion.div
              className="absolute top-4 right-4 w-14 h-14 rounded-xl bg-background/90 backdrop-blur-md border-2 border-primary/30 flex items-center justify-center shadow-lg shadow-primary/20"
              animate={{
                y: isHovered ? [0, -15, 0] : 0,
                rotate: isHovered ? [0, 10, -10, 0] : 0,
                scale: isHovered ? [1, 1.1, 1] : 1,
              }}
              transition={{
                duration: 2.5,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.15 }}
            >
              <Icon className="w-7 h-7 text-primary" />
            </motion.div>

            {/* Glowing particles effect */}
            {isHovered && (
              <>
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary rounded-full"
                    initial={{ 
                      x: Math.random() * 100 + "%", 
                      y: "100%",
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{ 
                      y: "-20%",
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </>
            )}
          </div>
        )}

        {/* Multi-layer Glow effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/10 to-chart-2/10 opacity-0 group-hover:opacity-100"
          animate={{
            background: isHovered 
              ? ["linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(147, 51, 234, 0.1))", 
                 "linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(34, 211, 238, 0.1))"]
              : "linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(147, 51, 234, 0.1))",
          }}
          transition={{ 
            duration: 3,
            repeat: isHovered ? Infinity : 0,
            repeatType: "reverse",
          }}
        />
        
        <div className="relative z-10 p-8">
          {/* Icon for cards without images */}
          {!image && (
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow duration-500"
            >
              <Icon className="w-8 h-8 text-primary" />
            </motion.div>
          )}

          {/* Content */}
          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground mb-6 line-clamp-3">
            {description}
          </p>

          {link && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                className="text-primary hover:text-primary hover:bg-primary/20 relative overflow-hidden group/btn"
                data-testid={`button-read-more-${title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"
                  animate={{
                    x: ["-200%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <span className="relative z-10">Read More</span>
                <motion.span
                  className="ml-2 relative z-10"
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );

  if (link) {
    return <Link href={link}>{card}</Link>;
  }

  return card;
}

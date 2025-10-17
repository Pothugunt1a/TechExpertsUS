
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";

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

  const card = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative h-full"
      data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="relative h-full bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
        {/* Image Section with Parallax Effect */}
        {image && (
          <div className="relative h-56 overflow-hidden">
            <motion.div
              className="absolute inset-0"
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            
            {/* Animated Scan Line Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent"
              animate={{
                y: isHovered ? ["0%", "100%"] : "0%",
              }}
              transition={{
                duration: 1.5,
                repeat: isHovered ? Infinity : 0,
                ease: "linear",
              }}
              style={{ height: "30%" }}
            />

            {/* Floating Icon */}
            <motion.div
              className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-background/80 backdrop-blur-sm border border-primary/20 flex items-center justify-center"
              animate={{
                y: isHovered ? [0, -10, 0] : 0,
                rotate: isHovered ? [0, 5, -5, 0] : 0,
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut",
              }}
            >
              <Icon className="w-6 h-6 text-primary" />
            </motion.div>
          </div>
        )}

        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-chart-2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
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
            <Button
              variant="ghost"
              className="text-primary hover:text-primary hover:bg-primary/10"
              data-testid={`button-read-more-${title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              Read More
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );

  if (link) {
    return <Link href={link}>{card}</Link>;
  }

  return card;
}

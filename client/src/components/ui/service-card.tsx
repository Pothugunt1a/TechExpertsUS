
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
  index?: number;
  image?: string;
}

export function ServiceCard({ icon: Icon, title, description, link, index = 0, image }: ServiceCardProps) {
  const card = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative h-full"
      data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="relative h-full bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
        {/* Image Section with Overlay */}
        {image && (
          <div className="relative h-64 overflow-hidden">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-90" />
            
            {/* Animated Corner Accent */}
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100"
              initial={false}
              whileHover={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{ duration: 0.6 }}
            />

            {/* Floating Icon */}
            <motion.div
              className="absolute top-6 left-6 w-16 h-16 rounded-xl bg-gradient-to-br from-primary/80 to-chart-2/80 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-primary/30"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Icon className="w-8 h-8 text-white" />
            </motion.div>
          </div>
        )}

        {/* Content Section */}
        <div className="relative p-8">
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-chart-2/5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            {/* Show icon only if no image */}
            {!image && (
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow duration-500"
              >
                <Icon className="w-8 h-8 text-primary" />
              </motion.div>
            )}

            {/* Title with gradient on hover */}
            <h3 className="text-xl font-semibold mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-chart-2 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              {title}
            </h3>
            
            <p className="text-muted-foreground mb-6 line-clamp-3">
              {description}
            </p>

            {link && (
              <Button
                variant="ghost"
                className="text-primary hover:text-primary hover:bg-primary/10 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300"
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

        {/* Animated Border Glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.3), transparent)',
            backgroundSize: '200% 100%',
          }}
          animate={{
            backgroundPosition: ['200% 0', '-200% 0'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </motion.div>
  );

  if (link) {
    return <Link href={link}>{card}</Link>;
  }

  return card;
}

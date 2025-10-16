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
}

export function ServiceCard({ icon: Icon, title, description, link, index = 0 }: ServiceCardProps) {
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
      <div className="relative h-full bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-chart-2/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow duration-500"
          >
            <Icon className="w-8 h-8 text-primary" />
          </motion.div>

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

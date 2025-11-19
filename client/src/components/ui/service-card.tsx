import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
  index?: number;
  image?: string;
  logo?: string;
}

export function ServiceCard({ icon: Icon, title, description, link, index = 0, image, logo }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const card = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
      data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center">
            <Icon className="w-24 h-24 text-primary/40" />
          </div>
        )}
      </div>

      {/* Default Overlay - Bottom gradient with title */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent dark:from-black/80 dark:via-black/40 dark:to-transparent"
        animate={{
          opacity: isHovered ? 0 : 1
        }}
        transition={{ duration: 0.4 }}
      >
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold !text-white mb-2">{title}</h3>
          {logo && (
            <img src={logo} alt={`${title} logo`} className="h-8 object-contain" />
          )}
        </div>
      </motion.div>

      {/* Hover Overlay - Slides up from bottom */}
      <motion.div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col justify-between p-8"
        initial={{ y: "100%" }}
        animate={{ 
          y: isHovered ? "0%" : "100%"
        }}
        transition={{ 
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1]
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20
          }}
          transition={{ 
            duration: 0.3,
            delay: isHovered ? 0.2 : 0
          }}
          className="flex-1 flex flex-col justify-center"
        >
          <h3 className="text-2xl font-bold !text-white mb-4">{title}</h3>
          <p className="!text-white mb-6 leading-relaxed">
            {description}
          </p>
          {link && (
            <motion.div
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-primary font-semibold"
              data-testid={`button-see-details-${title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              See Details
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );

  if (link) {
    return <Link href={link}>{card}</Link>;
  }

  return card;
}

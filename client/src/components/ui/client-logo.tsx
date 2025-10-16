import { motion } from "framer-motion";

interface ClientLogoProps {
  name: string;
  index?: number;
}

export function ClientLogo({ name, index = 0 }: ClientLogoProps) {
  // Create a simple logo placeholder based on company name
  const initials = name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="flex items-center justify-center p-6 bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
      data-testid={`logo-${name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
        <span className="text-2xl font-bold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          {initials}
        </span>
      </div>
    </motion.div>
  );
}

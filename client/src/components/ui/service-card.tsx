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

export function ServiceCard({ icon: Icon, title, description, link, index = 0 }: ServiceCardProps) {
  const card = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:shadow-lg"
      data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          {link && (
            <Button
              variant="ghost"
              className="text-primary hover:text-primary hover:bg-primary/10"
              data-testid={`button-read-more-${title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              Read More →
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
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface SkillBarProps {
  label: string;
  percentage: number;
  index?: number;
}

export function SkillBar({ label, percentage, index = 0 }: SkillBarProps) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="space-y-2"
      data-testid={`skill-${label.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm font-mono text-primary">{percentage}%</span>
      </div>
      <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={hasAnimated ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
          className="h-full bg-gradient-to-r from-primary to-chart-2 rounded-full relative"
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse-glow" />
        </motion.div>
      </div>
    </motion.div>
  );
}

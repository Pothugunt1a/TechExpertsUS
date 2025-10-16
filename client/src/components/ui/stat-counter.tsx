import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";

interface StatCounterProps {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
}

export function StatCounter({ end, label, suffix = "", duration = 2.5 }: StatCounterProps) {
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
      transition={{ duration: 0.6 }}
      className="text-center"
      data-testid={`stat-${label.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="text-5xl md:text-6xl font-mono font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent mb-2">
        {hasAnimated && <CountUp end={end} duration={duration} suffix={suffix} />}
      </div>
      <p className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
        {label}
      </p>
    </motion.div>
  );
}

import { motion, useScroll, useTransform } from "framer-motion";
import { ParticleBackground } from "@/components/ui/particle-background";
import {
  Lightbulb,
  TrendingUp,
  Target,
  Zap,
  Rocket,
  Shield,
  Users,
  Award,
  BarChart3,
  Globe,
  Brain,
  Sparkles,
  CheckCircle,
  CheckCircle2,
  ArrowRight,
  Building2,
  ClipboardCheck,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useRef } from "react";

const transformationFeatures = [
  {
    icon: Rocket,
    title: "Lean Optimization",
    description: "Streamlining processes for maximum efficiency",
  },
  {
    icon: Settings,
    title: "Technology Integration",
    description: "Harnessing cutting-edge solutions",
  },
  {
    icon: Shield,
    title: "Trust-Based Partnerships",
    description: "4th generation partnering agreements",
  },
  {
    icon: Target,
    title: "Virtual Operations",
    description: "Virtualizing non-core operations",
  },
];

const competitiveAdvantages = [
  {
    icon: BarChart3,
    title: "Business Analysis",
    description:
      "Comprehensive analysis to understand your unique challenges and opportunities",
  },
  {
    icon: ClipboardCheck,
    title: "Implementation Excellence",
    description:
      "We don't just plan - we execute and deliver measurable results",
  },
  {
    icon: Globe,
    title: "Global Resources",
    description:
      "Access to world-class integrated business and technology solutions",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Flexible delivery of solutions quickly and cost-effectively",
  },
  {
    icon: Brain,
    title: "Future Thinking",
    description:
      "Forward-looking strategies that anticipate tomorrow's challenges",
  },
  {
    icon: Award,
    title: "Outcome-Based",
    description: "Measured against business outcomes, not just deliverables",
  },
];

export default function Consulting() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Banner Style */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ position: 'relative' }}
      >
        {/*
          IMAGE PLACEHOLDER 1: Hero Background
          Recommended: Business consulting, strategic planning, modern office, or professional team
          Size: 1920x1080 or larger
          Path: /assets/consulting-hero-bg.jpg or .gif
        */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-primary/20 via-background to-chart-2/20" />
        </div>

        <ParticleBackground />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-chart-2/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full"
          style={{ opacity, scale }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-4"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.3)",
                      "0 0 40px rgba(59, 130, 246, 0.6)",
                      "0 0 20px rgba(59, 130, 246, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="px-4 py-2 bg-primary/10 backdrop-blur-md border border-primary/30 rounded-full"
                >
                  <span className="text-sm font-semibold text-primary">
                    Strategic Consulting
                  </span>
                </motion.div>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-chart-2 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="block mb-2">Helping Companies</span>
                <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
                  Think Ahead
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Business today is evolving faster than at any other time in
                history. We help you anticipate tomorrow's challenges and
                opportunities - giving you the competitive edge in what's to
                come.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="text-base px-8 py-6 rounded-lg shadow-lg hover:shadow-primary/50"
                      data-testid="button-get-started"
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <img
                src="/assets/Consulting-banner.png"
                alt="Consulting Services"
                className="w-auto h-auto max-w-full"
              />

              {/* Floating stats cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-md border border-primary/20 rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">200+</p>
                    <p className="text-xs text-muted-foreground">
                      Transformations
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -top-6 -right-6 bg-card/90 backdrop-blur-md border border-primary/20 rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-chart-2/20 flex items-center justify-center">
                    <Award className="w-6 h-6 text-chart-2" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">95%</p>
                    <p className="text-xs text-muted-foreground">
                      Success Rate
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Section with Image */}
      <section className="relative py-10 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

        <div className="relative max-w-7xl mx-auto px-3 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden">
                  <img
                    src="/assets/Consulting1.gif"
                    alt="Future-Focused Solutions"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block mb-4"
              >
                <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                  <span className="text-sm font-semibold text-primary">
                    Our Approach
                  </span>
                </div>
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-chart-2 bg-clip-text text-transparent">
                Future-Focused Solutions
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  At Tech Expertsus Consulting, we help companies think ahead.
                  Business today is evolving faster than at any other time in
                  history, and tomorrow there are going to be challenges we
                  can't even imagine today. And opportunities. But to survive
                  and thrive, we must imagine that future. We must anticipate
                  it.
                </p>
                <p>
                  Even while we're helping you solve your business challenges
                  today, we're thinking about the future - and how we can take
                  you there. Which is what gives you the competitive edge in
                  what's to come.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Lightbulb,
                    label: "Strategic",
                    value: "Planning",
                  },
                  {
                    icon: Rocket,
                    label: "Future",
                    value: "Thinking",
                  },
                  {
                    icon: TrendingUp,
                    label: "Innovation",
                    value: "Focus",
                  },
                  {
                    icon: Target,
                    label: "Digital",
                    value: "Transformation",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group relative p-6 bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                    data-testid={`stat-${item.label.toLowerCase().replace(/\//g, "-")}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-chart-2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                    <div className="relative z-10 flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0"
                      >
                        <item.icon className="w-6 h-6 text-primary" />
                      </motion.div>

                      <div>
                        <p className="text-2xl font-bold text-primary mb-1">
                          {item.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Challenges Section - Circular Layout */}
      <section className="relative py-10 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />

        <div className="relative max-w-7xl mx-auto px-3 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-sm font-semibold text-primary">
                  Our Focus
                </span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-chart-2 bg-clip-text text-transparent">
              Client Challenges We Address
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We tackle the most critical challenges facing modern businesses
              with proven strategies and innovative solutions
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              {/* Left Side: Large Circle with Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative flex justify-center lg:justify-end"
              >
                <div className="relative h-[500px] flex items-center gap-6">
                  {/* GIF Image on the left - Bigger */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-72 h-72"
                  >
                    <img
                      src="/assets/Consulting3.png"
                      alt="Client Challenges"
                      className="w-full h-full object-contain"
                    />
                  </motion.div>

                  {/* Circle - Smaller */}
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center shadow-2xl">
                    <Target className="w-16 h-16 text-gray-900 dark:text-white" />
                  </div>

                  {/* Curved Line (SVG) - Perfect semi-circle arc */}
                  <svg
                    className="absolute -right-20 top-0 w-56 h-full"
                    viewBox="0 0 180 500"
                    style={{ overflow: "visible" }}
                  >
                    <path
                      d="M 30 50 A 180 200 0 0 1 30 450"
                      stroke="hsl(var(--primary))"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      opacity="0.8"
                    />
                  </svg>

                  {/* Numbered Circles along the semi-circle arc - Precisely calculated positions */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    style={{ right: "30px", top: "20px" }}
                    className="absolute w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-xl border-4 border-white z-10"
                  >
                    <span className="text-xl font-bold text-gray-900 dark:text-white">01</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    style={{ right: "-76px", top: "94px" }}
                    className="absolute w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-xl border-4 border-white z-10"
                  >
                    <span className="text-xl font-bold text-gray-900 dark:text-white">02</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    style={{ right: "-118px", top: "218px" }}
                    className="absolute w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-xl border-4 border-white z-10"
                  >
                    <span className="text-xl font-bold text-gray-900 dark:text-white">03</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    style={{ right: "-76px", top: "343px" }}
                    className="absolute w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-xl border-4 border-white z-10"
                  >
                    <span className="text-xl font-bold text-gray-900 dark:text-white">04</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    style={{ right: "32px", top: "416px" }}
                    className="absolute w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-xl border-4 border-white z-10"
                  >
                    <span className="text-xl font-bold text-gray-900 dark:text-white">05</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Side: Challenge Descriptions */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-10 pl-20"
              >
                {[
                  {
                    number: "01",
                    icon: Users,
                    title: "Talent Acquisition & Retention",
                    description:
                      "Finding and keeping the right talent in a competitive market",
                  },
                  {
                    number: "02",
                    icon: TrendingUp,
                    title: "Digital Transformation",
                    description:
                      "Adapting to rapidly evolving technology and business models",
                  },
                  {
                    number: "03",
                    icon: Shield,
                    title: "Operational Efficiency",
                    description:
                      "Streamlining processes and reducing costs while maintaining quality",
                  },
                  {
                    number: "04",
                    icon: Zap,
                    title: "Market Competitiveness",
                    description:
                      "Staying ahead of competitors in a fast-paced industry",
                  },
                  {
                    number: "05",
                    icon: Globe,
                    title: "Scalability & Growth",
                    description:
                      "Building infrastructure that supports sustainable expansion",
                  },
                ].map((challenge, index) => (
                  <motion.div
                    key={challenge.number}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <challenge.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">
                        {challenge.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {challenge.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="relative py-10 md:py-16 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-3 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-sm font-semibold text-primary">
                  Transformation Model
                </span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-chart-2 bg-clip-text text-transparent">
              Transformation Is Key
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everyone talks about transformation, but transformation into what?
              In our practice of continually thinking ahead, we've developed
              certain essentials for our model of the 21st Century Virtual
              Corporation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left: Transformation Details */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Our model includes implementing lean optimization.
                  Virtualizing non-core operations and harnessing new
                  technology. Structuring 4th generation partnering agreements
                  that operate at the highest level of trust.
                </p>
                <motion.div
                  className="p-6 bg-gradient-to-br from-primary/10 to-chart-2/10 border border-primary/20 rounded-xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-xl font-semibold text-foreground mb-2">
                    The Transformation Model
                  </p>
                  <p className="text-base">
                    A business that has been optimized in every respect to
                    improve the bottom line and meet the future with confidence.
                  </p>
                </motion.div>
              </div>

              {/* Small Images Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    num: 1,
                    src: "/assets/Consulting4.gif",
                    alt: "Lean Optimization",
                  },
                  {
                    num: 2,
                    src: "/assets/Consulting5.gif",
                    alt: "Technology Integration",
                  },
                  {
                    num: 3,
                    src: "/assets/Consulting7.gif",
                    alt: "Trust-Based Partnerships",
                  },
                  {
                    num: 4,
                    src: "/assets/Consulting6.webp",
                    alt: "Virtual Operations",
                  },
                ].map((item) => (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: item.num * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative h-40 rounded-xl overflow-hidden group cursor-pointer"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-chart-2/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Features Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {transformationFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                  data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="relative h-full bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10">
                      <motion.div
                        className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <feature.icon className="w-7 h-7 text-primary" />
                      </motion.div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages Section */}
      <section className="relative py-10 md:py-16 pt-32 pb-0 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/Consulting-background.jpg"
            alt="Consulting Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80 dark:bg-background/85" />
        </div>
        {/* Background with tech pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent dark:via-primary/10" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <div className="px-4 py-2 bg-primary/10 backdrop-blur-md border border-primary/30 rounded-full inline-block">
                  <span className="text-sm font-semibold text-primary">Why Choose Us</span>
                </div>
              </motion.div>

              {/* Heading */}
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-chart-2 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Competitive Advantages
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Tech Expertsus Consulting can give you the business analyses you need and follow through with implementation. We deliver a depth of resources that's unsurpassed by other firms.
              </motion.p>

              {/* Features Grid - Two columns */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-2 gap-4 pt-4"
              >
                {[
                  { icon: BarChart3, text: "Business Analysis" },
                  { icon: Globe, text: "Global Resources" },
                  { icon: Zap, text: "Rapid Deployment" },
                  { icon: Award, text: "Outcome-Based" }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex-shrink-0"
                    >
                      <feature.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <span className="text-base md:text-lg font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Image and Statistics Combined */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative space-y-8"
            >
              {/* Circular Image */}
              <div className="relative flex justify-center">
                <div className="relative">
                  {/* Animated glow effect */}
                  <motion.div
                    className="absolute -inset-8 bg-gradient-to-r from-primary/30 to-chart-2/30 rounded-full blur-3xl"
                    animate={{
                      opacity: [0.4, 0.7, 0.4],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />

                  {/* Circular image container */}
                  <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-primary/20 shadow-2xl">
                    <img
                      src="/assets/Consulting8.png"
                      alt="Professional consulting team"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Decorative circles */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-24 h-24 border-4 border-primary/40 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute -bottom-8 -left-8 w-32 h-32 border-4 border-chart-2/40 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </div>

              </motion.div>
          </div>
        </div>

        {/* Statistics Bar - Overlapping at bottom of section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative -mb-16 z-30">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-blue-700 rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden">
            {/* Decorative dot pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 4px 4px, white 2px, transparent 0)`,
                backgroundSize: '30px 30px'
              }} />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 relative z-10">
              {[
                { value: "200", suffix: "+", label: "Projects" },
                { value: "95", suffix: "%", label: "Success Rate" },
                { value: "50", suffix: "+", label: "Experts" },
                { value: "24", suffix: "/7", label: "Support" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm md:text-base lg:text-lg text-gray-900 dark:text-white/90 uppercase tracking-wide font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Impact Section with Multiple Images */}
      <section className="relative pt-20 pb-12 md:pb-20 bg-gradient-to-b from-card/30 to-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4">
              <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-sm font-semibold text-primary">
                  Our Impact
                </span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Excellence in Practice
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-0 mt-8">
            {[
              {
                title: "Digital Transformation",
                icon: Rocket,
                description: "Leveraging cutting-edge technologies to modernize your business operations and drive digital innovation.",
                image: "/assets/Consulting10.jpg"
              },
              {
                title: "Process Optimization",
                icon: Settings,
                description: "Streamlining workflows and eliminating inefficiencies to maximize productivity and reduce costs.",
                image: "/assets/Consulting11.jpg"
              },
              {
                title: "Strategic Growth",
                icon: TrendingUp,
                description: "Developing data-driven strategies to accelerate business expansion and market penetration.",
                image: "/assets/Consulting12.jpg"
              },
              {
                title: "Innovation Leadership",
                icon: Lightbulb,
                description: "Cultivating a culture of innovation and staying ahead of industry trends and disruption.",
                image: "/assets/Consulting13.jpg"
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
                data-testid={`expertise-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                </div>

                {/* Icon in top right */}
                <motion.div
                  className="absolute top-4 right-4 w-14 h-14 rounded-xl bg-primary/20 backdrop-blur-md border border-white/10 flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-7 h-7 text-gray-900 dark:text-white" />
                </motion.div>

                {/* Content at bottom with transparent border box */}
                <div className="absolute bottom-4 inset-x-0 p-4 text-gray-900 dark:text-white bg-card/10 backdrop-blur-md border border-primary/30 rounded-2xl" style={{ marginBottom: '-14px' }}>
                  <h3 className="text-xl font-bold mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-900 dark:text-white/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Modern with Animation */}
      <section className="relative py-10 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-chart-2/20" />
          <ParticleBackground />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-3 lg:px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Sparkles className="w-16 h-16 text-primary mx-auto" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let our consulting experts help you anticipate the future and stay
              ahead of the competition. Contact us today to get started.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="text-lg px-10 py-6 rounded-lg shadow-xl hover:shadow-primary/50"
                    data-testid="button-contact-consulting"
                  >
                    Get in Touch
                  </Button>
                </motion.div>
              </Link>
              <Link href="/services">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-10 py-6 rounded-lg"
                    data-testid="button-view-services"
                  >
                    View All Services
                  </Button>
                </motion.div>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-8 justify-center text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Future Thinking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Proven Results</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Expert Team</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
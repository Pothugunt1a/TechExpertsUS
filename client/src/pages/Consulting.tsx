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
    description: "We don't just plan - we execute and deliver measurable results",
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
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
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
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base px-8 py-6 rounded-lg"
                    data-testid="button-learn-more"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right: Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* 
                IMAGE PLACEHOLDER 2: Hero Main Image
                Recommended: Professional consultant, business strategy visualization, or modern technology
                Size: 600x500
                Path: /assets/consulting-hero.png
              */}
              <div className="w-full h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <Building2 className="w-24 h-24 text-primary mx-auto mb-4 opacity-50" />
                  <p className="text-muted-foreground">
                    Hero Image Placeholder
                    <br />
                    600x500px
                  </p>
                </div>
              </div>

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
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
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
                {/* 
                  IMAGE PLACEHOLDER 3: Approach/Strategy Image
                  Recommended: Team collaboration, strategic planning session, or digital transformation
                  Size: 600x400
                  Path: /assets/consulting-approach.jpg
                */}
                <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Brain className="w-20 h-20 text-primary mx-auto mb-4 opacity-50" />
                    <p className="text-muted-foreground">
                      Approach Image Placeholder
                      <br />
                      600x400px
                    </p>
                  </div>
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

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
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
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Client Challenges We Address
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We tackle the most critical challenges facing modern businesses with proven strategies and innovative solutions
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side: Large Circle with Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative flex justify-center lg:justify-end"
              >
                <div className="relative h-[500px] flex items-center gap-8">
                  {/* GIF Image on the left */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-48 h-48 rounded-xl overflow-hidden shadow-lg"
                  >
                    <img
                      src="/assets/Outsourcing5.gif"
                      alt="Client Challenges"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Large Circle */}
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center shadow-2xl">
                    <Target className="w-24 h-24 text-white" />
                  </div>

                  {/* Curved Line (SVG) - Perfect semi-circle arc */}
                  <svg className="absolute -right-20 top-0 w-56 h-full" viewBox="0 0 180 500" style={{ overflow: 'visible' }}>
                    <path
                      d="M 30 50 A 180 200 0 0 1 30 450"
                      stroke="hsl(var(--primary))"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      opacity="0.8"
                    />
                  </svg>

                  {/* Numbered Circles along the semi-circle arc - Positioned on perfect arc */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="absolute right-[-50px] top-[10%] w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-xl border-4 border-white z-10"
                  >
                    <span className="text-xl font-bold text-white">01</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="absolute right-[-120px] top-[25%] w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-xl border-4 border-white z-10"
                  >
                    <span className="text-xl font-bold text-white">02</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="absolute right-[-150px] top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-xl border-4 border-white z-10"
                  >
                    <span className="text-xl font-bold text-white">03</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="absolute right-[-120px] top-[75%] w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-xl border-4 border-white z-10"
                  >
                    <span className="text-xl font-bold text-white">04</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="absolute right-[-50px] top-[90%] w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-xl border-4 border-white z-10"
                  >
                    <span className="text-xl font-bold text-white">05</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Side: Challenge Descriptions */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {[
                  {
                    number: "01",
                    icon: Users,
                    title: "Talent Acquisition & Retention",
                    description: "Finding and keeping the right talent in a competitive market"
                  },
                  {
                    number: "02",
                    icon: TrendingUp,
                    title: "Digital Transformation",
                    description: "Adapting to rapidly evolving technology and business models"
                  },
                  {
                    number: "03",
                    icon: Shield,
                    title: "Operational Efficiency",
                    description: "Streamlining processes and reducing costs while maintaining quality"
                  },
                  {
                    number: "04",
                    icon: Zap,
                    title: "Market Competitiveness",
                    description: "Staying ahead of competitors in a fast-paced industry"
                  },
                  {
                    number: "05",
                    icon: Globe,
                    title: "Scalability & Growth",
                    description: "Building infrastructure that supports sustainable expansion"
                  }
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
                      <h3 className="text-lg font-bold mb-1">{challenge.title}</h3>
                      <p className="text-muted-foreground">{challenge.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
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
                {/* 
                  IMAGE PLACEHOLDER 4-7: Small Transformation Images
                  Recommended: Optimization, Virtualization, Technology, Partnership icons/images
                  Size: 250x200 each
                  Path: /assets/consulting-transform-1.jpg through consulting-transform-4.jpg
                */}
                {[1, 2, 3, 4].map((num) => (
                  <motion.div
                    key={num}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: num * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative h-40 rounded-xl overflow-hidden bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-sm border border-primary/10 flex items-center justify-center group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-chart-2/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="text-center p-4 relative z-10">
                      <Sparkles className="w-10 h-10 text-primary mx-auto mb-2 opacity-50" />
                      <p className="text-xs text-muted-foreground">
                        Image {num}
                        <br />
                        250x200px
                      </p>
                    </div>
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
      <section className="relative py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-sm font-semibold text-primary">
                  Why Choose Us
                </span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Competitive Advantages
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Tech Expertsus Consulting can give you the business analyses you
              need and follow through with implementation. As part of eLan, the
              world's leading provider of integrated business, technology and
              process solutions, we can deliver a depth of resources that's
              unsurpassed by other firms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {competitiveAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
                data-testid={`advantage-${advantage.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="relative h-full bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/10 rounded-xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <advantage.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary/10 via-chart-2/10 to-primary/10 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl md:text-3xl font-bold">
                    The Complete Advantage
                  </h3>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-4">
                  We have the flexibility to deliver solutions quickly and
                  cost-effectively. And our confidence in our ability to think
                  ahead makes us willing to be measured against any business
                  outcomes.
                </p>
                <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                  Which means that with Tech Expertsus Consulting, you get the
                  advantage of future thinking - along with the advantage of
                  being taken the rest of the way.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Impact Section with Multiple Images */}
      <section className="relative py-12 md:py-20 bg-gradient-to-b from-card/30 to-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our Expertise in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we've transformed businesses across industries
            </p>
          </motion.div>

          {/* 
            IMAGE PLACEHOLDER 8-11: Case Study/Expertise Images
            Recommended: Success stories, industry applications, client transformations
            Size: Variable - responsive grid
            Path: /assets/consulting-expertise-1.jpg through consulting-expertise-4.jpg
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Digital Transformation", icon: Rocket },
              { title: "Process Optimization", icon: Settings },
              { title: "Strategic Growth", icon: TrendingUp },
              { title: "Innovation Leadership", icon: Lightbulb },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/10 group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-chart-2/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="w-16 h-16 text-primary mb-4 opacity-50" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    Image Placeholder
                    <br />
                    Responsive Grid
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Modern with Animation */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-chart-2/20" />
          <ParticleBackground />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
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

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let our consulting experts help you anticipate the future and
              stay ahead of the competition. Contact us today to get started.
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
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-8 justify-center text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Future Thinking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Proven Results</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Expert Team</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

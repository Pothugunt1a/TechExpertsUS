import { motion, useScroll, useTransform } from "framer-motion";
import { ParticleBackground } from "@/components/ui/particle-background";
import {
  Users,
  Target,
  Clock,
  TrendingUp,
  Award,
  Shield,
  CheckCircle,
  Sparkles,
  Zap,
  Building2,
  Globe,
  Headphones,
  GraduationCap,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useRef } from "react";

const benefits = [
  {
    icon: Zap,
    title: "Quick Turnaround",
    description:
      "Ability to produce quick turnaround times in providing IT consultants with required skills to supplement your team's staff on projects",
  },
  {
    icon: Target,
    title: "Reduced Dependency",
    description:
      "Reduced dependency on regional and national technology solutions providers when your project requires staff augmentation",
  },
  {
    icon: TrendingUp,
    title: "Cost Efficiency",
    description:
      "Reduced project resource costs with all-inclusive hourly rates for consultants",
  },
  {
    icon: Building2,
    title: "Flexible Solutions",
    description:
      "Flexibility to provide consultants at your facility or offsite at our offices",
  },
  {
    icon: Users,
    title: "Qualified Talent Pool",
    description:
      "Large qualified talent pool of consultants so you have access to best talent that fits your company's technical needs and culture",
  },
  {
    icon: Award,
    title: "Proven Experts",
    description:
      "Ability to provide seasoned consultants to meet your company's fluctuating demands without hiring full-time employees",
  },
];

const features = [
  {
    icon: Users,
    title: "Staff Augmentation",
    description:
      "Supplement your team with skilled IT consultants who can hit the ground running",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Target,
    title: "Project Solutions",
    description:
      "Complete project lifecycle solutions with experienced professionals",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Vendor Management",
    description:
      "Comprehensive vendor management services to streamline your operations",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Sparkles,
    title: "Executive Search",
    description: "Targeted searches for middle to upper management positions",
    gradient: "from-green-500 to-emerald-500",
  },
];

export default function StaffingSolutions() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Modern Animated Banner */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* 
          IMAGE PLACEHOLDER 1: Hero Background
          Recommended: Animated GIF or high-quality image of diverse professionals working
          Size: 1920x1080 or larger
          Path: /assets/staffing-hero-banner.gif or .jpg
        */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-primary/20 via-background to-chart-2/20" />
          {
            <img
              src="/assets/Staffing2.gif"
              alt="Staffing Solutions"
              className="w-full h-full object-cover object-center"
            />
          }
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
                    Staffing Excellence
                  </span>
                </motion.div>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="block mb-2">The Right People,</span>
                <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
                  The Right Time
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Your goal is to focus on your core business. Our goal is to help
                you by offering comprehensive workforce solutions that deliver
                skilled professionals exactly when you need them.
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
              <img
                src="/assets/Staffing-banner.png"
                alt="Staffing Solutions"
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
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">500+</p>
                    <p className="text-xs text-muted-foreground">
                      Clients Served
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
                    <TrendingUp className="w-6 h-6 text-chart-2" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">98%</p>
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
                <img
                  src="/assets/Staffing2.gif"
                  alt="About Tech Expertsus"
                  className="w-auto h-auto max-w-full"
                />
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
                    Who We Are
                  </span>
                </div>
              </motion.div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Full Service IT & Business Solutions
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Tech Expertsus is a full service IT Services and Business
                  Services Firm. Our Staff Augmentation, Project Solutions,
                  Vendor Management, and Executive Search services enable us to
                  deliver ideas and solutions that meet all of our customers' IT
                  and Business resource needs.
                </p>
                <p>
                  Our international footprint allows us to tap into multiple
                  labor pools and deliver the best talent to our Fortune 500
                  customer base.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Trophy,
                    label: "Fortune 500",
                    value: "Clients",
                  },
                  {
                    icon: Globe,
                    label: "Global",
                    value: "Reach",
                  },
                  {
                    icon: Headphones,
                    label: "24/7",
                    value: "Support",
                  },
                  {
                    icon: GraduationCap,
                    label: "Expert",
                    value: "Team",
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

      {/* Services Section - Diagonal Split Layout */}
      <section className="relative py-12 md:py-20 bg-gradient-to-b from-background to-card/30">
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
                  Our Services
                </span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Comprehensive Workforce Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From staff augmentation to executive search, we provide end-to-end
              staffing solutions
            </p>
          </motion.div>

          <div className="space-y-0">
            {/* First Component - Image Left, Two Content Items on Right */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative -mx-6 lg:-mx-8"
              data-testid="service-component-1"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-0 overflow-hidden">
                {/* Image - Left Side with Diagonal Cut */}
<div className="relative h-[250px] lg:h-[280px] overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center rounded-br"
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0 100%)',
                      backgroundImage: 'url(/assets/Staffing3.png)',
                    }}
                  />
                </div>

                {/* Two Content Items Stacked - Right Side */}
                <div className="flex flex-col">
                  {/* First Content Item - Top Right */}
                  <div className="relative overflow-hidden bg-white dark:bg-card/50 backdrop-blur-sm p-6 lg:p-8 flex flex-col justify-center flex-1 group">
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/5 via-chart-2/5 to-primary/5 opacity-0 group-hover:opacity-100"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    {/* Floating particles */}
                    <motion.div
                      className="absolute top-0 left-0 w-2 h-2 bg-primary/20 rounded-full"
                      animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.7, 0.3]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div
                      className="absolute bottom-0 right-0 w-3 h-3 bg-chart-2/20 rounded-full"
                      animate={{
                        x: [0, -80, 0],
                        y: [0, -40, 0],
                        scale: [1, 1.8, 1],
                        opacity: [0.2, 0.6, 0.2]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    />

                    <div className="relative z-10 flex items-start gap-4">
                      <motion.div
                        className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          y: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        }}
                      >
                        <Users className="w-6 h-6 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg lg:text-xl font-bold mb-2">
                          Staff Augmentation
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Supplement your team with skilled IT consultants who can hit the ground running
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Second Content Item - Bottom Right */}
                  <div className="relative overflow-hidden bg-white dark:bg-card/50 backdrop-blur-sm p-6 lg:p-8 flex flex-col justify-center flex-1 group">
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-l from-chart-2/5 via-primary/5 to-chart-2/5 opacity-0 group-hover:opacity-100"
                      animate={{
                        x: ['100%', '-100%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 0.5
                      }}
                    />

                    {/* Floating particles */}
                    <motion.div
                      className="absolute top-1/2 left-1/4 w-2 h-2 bg-chart-2/20 rounded-full"
                      animate={{
                        x: [0, 60, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.8, 0.3]
                      }}
                      transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                    />

                    <div className="relative z-10 flex items-start gap-4">
                      <motion.div
                        className="w-12 h-12 rounded-lg bg-gradient-to-br from-chart-2/20 to-primary/20 flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          y: {
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.3
                          }
                        }}
                      >
                        <Target className="w-6 h-6 text-chart-2" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg lg:text-xl font-bold mb-2">
                          Project Solutions
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Complete project lifecycle solutions with experienced professionals
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Second Component - Two Content Items on Left, Image Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative -mx-6 lg:-mx-8"
              data-testid="service-component-2"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-0 overflow-hidden">
                {/* Two Content Items Stacked - Left Side */}
                <div className="flex flex-col order-2 lg:order-1">
                  {/* First Content Item - Top Left */}
                  <div className="relative overflow-hidden bg-white dark:bg-card/50 backdrop-blur-sm p-6 lg:p-8 flex flex-col justify-center flex-1 group">
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-chart-2/5 via-primary/5 to-chart-2/5 opacity-0 group-hover:opacity-100"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1
                      }}
                    />

                    {/* Floating particles */}
                    <motion.div
                      className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary/20 rounded-full"
                      animate={{
                        x: [0, -70, 0],
                        y: [0, 40, 0],
                        scale: [1, 1.6, 1],
                        opacity: [0.2, 0.7, 0.2]
                      }}
                      transition={{
                        duration: 4.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.8
                      }}
                    />

                    <div className="relative z-10 flex items-start gap-4">
                      <motion.div
                        className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          y: {
                            duration: 2.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                          }
                        }}
                      >
                        <Shield className="w-6 h-6 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg lg:text-xl font-bold mb-2">
                          Vendor Management
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Comprehensive vendor management services to streamline your operations
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Second Content Item - Bottom Left */}
                  <div className="relative overflow-hidden bg-white dark:bg-card/50 backdrop-blur-sm p-6 lg:p-8 flex flex-col justify-center flex-1 group">
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-l from-primary/5 via-chart-2/5 to-primary/5 opacity-0 group-hover:opacity-100"
                      animate={{
                        x: ['100%', '-100%'],
                      }}
                      transition={{
                        duration: 3.2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1.5
                      }}
                    />

                    {/* Floating particles */}
                    <motion.div
                      className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-chart-2/20 rounded-full"
                      animate={{
                        x: [0, 50, 0],
                        y: [0, -25, 0],
                        scale: [1, 1.4, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 3.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.2
                      }}
                    />

                    <div className="relative z-10 flex items-start gap-4">
                      <motion.div
                        className="w-12 h-12 rounded-lg bg-gradient-to-br from-chart-2/20 to-primary/20 flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          y: {
                            duration: 2.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.7
                          }
                        }}
                      >
                        <Sparkles className="w-6 h-6 text-chart-2" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg lg:text-xl font-bold mb-2">
                          Executive Search
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Targeted searches for middle to upper management positions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image - Right Side with Diagonal Cut */}
                <div className="relative h-[250px] lg:h-[280px] overflow-hidden order-1 lg:order-2">
                  <div 
                    className="absolute inset-0 bg-cover bg-center rounded-tl"
                    style={{
                      clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)',
                      backgroundImage: 'url(/assets/Staffing4.png)',
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Custom Grid Layout */}
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
                  Value Proposition
                </span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Why Partner With Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We understand your project and resource needs to deliver
              exceptional value
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side */}
            <div className="space-y-8">
              {/* Cards 1 and 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.slice(0, 2).map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group"
                    data-testid={`benefit-${benefit.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="relative h-full bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                          <benefit.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Card 3 - Centered below 1 and 2 */}
              <div className="flex justify-center">
                {(() => {
                  const benefit = benefits[2];
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      whileHover={{ y: -8 }}
                      className="group w-full md:w-1/2"
                      data-testid={`benefit-${benefit.title.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <div className="relative h-full bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="relative z-10">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })()}
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-8">
              {/* Cards 4 and 5 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.slice(3, 5).map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index + 3) * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group"
                    data-testid={`benefit-${benefit.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="relative h-full bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                          <benefit.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Card 6 - Centered below 4 and 5 */}
              <div className="flex justify-center">
                {(() => {
                  const benefit = benefits[5];
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ y: -8 }}
                      className="group w-full md:w-1/2"
                      data-testid={`benefit-${benefit.title.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <div className="relative h-full bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="relative z-10">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })()}
              </div>
            </div>
          </div>

          {/* Handshake GIF - Centered in the middle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center items-center min-h-[400px]"
          >
            <div className="w-64 h-64 flex items-center justify-center">
              <img
                src="https://media.giphy.com/media/l0HU7yHIK6Nc3WcE0/giphy.gif"
                alt="Partnership Handshake"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Recruiting - Split Layout with Image */}
      <section className="relative py-12 md:py-20 bg-gradient-to-b from-card/30 to-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                  <span className="text-sm font-semibold text-primary">
                    Executive Placement
                  </span>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Professional Recruiting Services
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground mb-8">
                <p>
                  Our professional placement services are designed for
                  organizations looking to fill middle to upper management
                  positions. Our targeted searches offer a confidential way to
                  target latent job seekers with specific skills and experience.
                </p>
                <p>
                  We source, screen, and interview potential candidates based on
                  your requirements, then provide you with a list of top-tier
                  candidates. You conduct final interviews and make the final
                  hiring decision.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  "Confidential targeted searches",
                  "Comprehensive candidate screening",
                  "Top-tier candidate selection",
                  "60-180 day guarantee period",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-base">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img
                  src="/assets/Staffing1.gif"
                  alt="Professional Recruiting"
                  className="w-auto h-auto max-w-full"
                />
              </div>
            </motion.div>
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
              Ready to Build Your Dream Team?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let us help you find the perfect talent with our comprehensive
              staffing solutions. Contact us today to get started.
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
                    data-testid="button-contact-staffing"
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
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Quick Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Satisfaction Guaranteed</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

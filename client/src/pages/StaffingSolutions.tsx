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
              {/* 
                IMAGE PLACEHOLDER 2: Hero Image/GIF
                Recommended: Animated GIF of team collaboration or professional recruiting
                Size: 800x600
                Path: /assets/staffing-hero-image.gif
              */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-primary/20 shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Users className="w-24 h-24 mx-auto mb-4 text-primary/40" />
                    <p className="text-muted-foreground text-sm">
                      Upload Hero Image/GIF Here
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      800x600 recommended
                    </p>
                  </div>
                </div>
                {/* Replace with: <img src="/assets/staffing-hero-image.gif" alt="Staffing Solutions" className="w-full h-full object-cover" /> */}
              </motion.div>

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
      <section className="relative py-20 md:py-32 overflow-hidden">
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
              <div className="relative aspect-[6/5] rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
                <img src="/assets/Staffing1.gif" alt="About Tech Expertsus" className="w-full h-full object-cover" />
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

      {/* Services Section - Bento Grid Style */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-background to-card/30">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
                data-testid={`service-${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="relative h-full bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
                  {/* Animated gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Animated corner accent */}
                  <motion.div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-20 blur-3xl`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      {feature.description}
                    </p>

                    {/* Hover arrow */}
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <span className="text-sm font-semibold mr-2">
                        Learn more
                      </span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Modern Cards with Icons */}
      <section className="relative py-20 md:py-32">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
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
        </div>
      </section>

      {/* Professional Recruiting - Split Layout with Image */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-card/30 to-background overflow-hidden">
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
              <div className="relative aspect-[6/7] rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
                <img src="/assets/Staffing2.gif" alt="Professional Recruiting" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Modern with Animation */}
      <section className="relative py-20 md:py-32 overflow-hidden">
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

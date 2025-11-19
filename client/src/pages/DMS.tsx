import { motion, useScroll, useTransform } from "framer-motion";
import { ParticleBackground } from "@/components/ui/particle-background";
import {
  Server,
  Database,
  Shield,
  Zap,
  Network,
  Cloud,
  Cpu,
  Code,
  TrendingUp,
  Lock,
  Layers,
  BarChart3,
  CheckCircle2,
  Lightbulb,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useRef } from "react";

const services = [
  {
    icon: Server,
    title: "IT Services",
    description:
      "Comprehensive IT infrastructure management and support services tailored to your business needs.",
    color: "from-cyan-500 to-blue-600",
    delay: 0,
  },
  {
    icon: Layers,
    title: "Enterprise Solutions",
    description:
      "Scalable enterprise-grade solutions designed to grow with your organization.",
    color: "from-blue-500 to-purple-600",
    delay: 0.1,
  },
  {
    icon: BarChart3,
    title: "Business Intelligence & Performance",
    description:
      "Data-driven insights and analytics to optimize your business performance.",
    color: "from-purple-500 to-pink-600",
    delay: 0.2,
  },
  {
    icon: Cpu,
    title: "Engineering & Industrial Services",
    description:
      "Advanced engineering solutions for modern industrial challenges.",
    color: "from-pink-500 to-red-600",
    delay: 0.3,
  },
];

const features = [
  {
    icon: Server,
    title: "24/7 Monitoring",
    description:
      "Continuous server health monitoring and instant alert systems",
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Secure and scalable data storage with automated backups",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Enterprise-grade security protocols and compliance standards",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized infrastructure for maximum speed and efficiency",
  },
  {
    icon: Network,
    title: "Network Optimization",
    description: "Advanced networking solutions for seamless connectivity",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Hybrid and multi-cloud deployment strategies",
  },
];

const benefits = [
  "Streamlined business processes",
  "Maximized ROI on IT investments",
  "Reduced operational costs",
  "Enhanced system reliability",
  "Future-proof infrastructure",
  "24/7 expert support",
];

export default function DMS() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen overflow-hidden" ref={containerRef}>
      {/* Hero Section - Modern with Geometric Shapes */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/DataCenterManagement-banner.gif"
            alt="Data Center Management Banner"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>

        {/* Particle Background Layer */}
        <div className="absolute inset-0 z-[3] pointer-events-none">
          <ParticleBackground />
        </div>

        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 z-[4] pointer-events-none overflow-hidden">
          {/* Floating Hexagons */}
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/30"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "loop",
            }}
          />
          <motion.div
            className="absolute top-1/3 right-20 w-24 h-24 border-2 border-chart-2/40"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
            animate={{
              y: [0, 40, 0],
              rotate: [360, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "loop",
            }}
          />

          {/* Glowing Circles */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "loop",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-chart-2/10 blur-3xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "loop",
              delay: 1,
            }}
          />

          {/* Triangles */}
          <motion.div
            className="absolute bottom-40 right-1/3 w-20 h-20 border-2 border-primary/30"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "loop",
            }}
          />
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full"
          style={{ y, opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            {/* Badge */}
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
                  Data Center Management Services
                </span>
              </motion.div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-chart-2 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block mb-2 text-white">Transform Your</span>
              <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
                Infrastructure
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl text-white mb-8 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Powering Business Excellence Through Intelligent Data Center
              Solutions
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-primary/50 transition-all"
                  data-testid="button-get-started"
                >
                  Get Started
                  <Zap className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 rounded-xl border-primary/30 hover:border-primary/60 transition-all backdrop-blur-sm"
                data-testid="button-learn-more"
              >
                Learn More
                <TrendingUp className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "99.9%", label: "Uptime" },
              { value: "24/7", label: "Support" },
              { value: "500+", label: "Clients" },
              { value: "15+", label: "Years" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="text-center"
                data-testid={`stat-${stat.label.toLowerCase()}`}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Overview Section with Image Placeholder */}
      <section className="relative py-10 md:py-16 bg-gradient-to-b from-background to-card/20">
        <div className="max-w-7xl mx-auto px-3 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Placeholder with Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full h-96 rounded-2xl overflow-hidden">
                <img
                  src="/assets/DMS1.gif"
                  alt="Data Center Infrastructure"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block mb-4"
                >
                  <span className="text-sm font-semibold text-primary px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                    Our Approach
                  </span>
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-white via-primary to-chart-2 bg-clip-text text-transparent">
                    Comprehensive Data Center Solutions
                  </span>
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Data Center Management in general the "Server Room" for all your
                business needs plays a key and vital capacity in reaching out
                the needs of your business. The firm or business needs to act
                faster with maximum accuracy to meet the challenges that were
                posed in day to day competitive world.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                At Tech Expertsus we do Application Outsourcing which enables to
                streamline your business processes and maximizes the returns of
                your investment. Our service modules helps you to reach out all
                your needs and business goals with your limited investments.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Tech Execpertsus provides fineness and positive assurance across
                all your enterprise's IT needs through comprehensive data center
                management.
              </p>

              {/* Benefits List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                    data-testid={`benefit-${index}`}
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm md:text-lg text-muted-foreground text-base">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IT Services Details Section - Diagonal Split with Image */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-2/5" />

        {/* Diagonal Background Split */}
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-br from-primary/10 to-chart-2/10 transform skew-x-12 origin-top-right" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-3 lg:px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">
                    Core Capabilities
                  </span>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-primary to-chart-2 bg-clip-text text-transparent">
                  Our Core Capabilities
                </span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8">
                Our IT Services helps you in managing your day to day IT needs
                through a strong and reliable IT infrastructure. Our Tech
                Expertsus works on Business Effective model where our customers
                extracts maximum returns out of their limited investments.
              </p>

              <div className="space-y-6">
                {features.slice(0, 5).map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                    data-testid={`feature-${index}`}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Right with Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/assets/DMS7.jpeg"
                  alt="Core Capabilities"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-8 -left-8 bg-background/95 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">
                      Monitoring
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enterprise Computing Section with Image Placeholder */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-3 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content First on Desktop */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:order-1"
            >
              <div>
                <span className="text-sm font-semibold text-primary px-4 py-2 bg-primary/10 rounded-full border border-primary/20 inline-block mb-4">
                  Cloud Excellence
                </span>

                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-white via-primary to-chart-2 bg-clip-text text-transparent">
                    Enterprise Computing and Cloud Services
                  </span>
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                We @ Tech Expertsus with years of knowledge and experience in IT
                fields provides strategic technology directions for data center
                assessment. We by bringing into line your infrastructure to your
                business goals Tech Expertsus empower you to become more
                responsive to business needs.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                We @ Tech Expertsus offers leading technology to vitalize your
                IT infrastructure and improve your return on assets. We helps in
                making your IT services looks dynamic and in step with changing
                business process.
              </p>

              {/* Additional Benefits */}
              <div className="space-y-3 pt-4">
                {benefits.slice(4).map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                    data-testid={`enterprise-benefit-${index}`}
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-lg md:text-xl text-base">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-6">
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-primary/50 transition-all"
                      data-testid="button-contact-enterprise"
                    >
                      Start Your Transformation
                      <TrendingUp className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </motion.div>

            {/* Image with Stats Overlay */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
                {/* Cloud Image */}
                <img
                  src="/assets/DMS2.webp"
                  alt="Cloud Infrastructure"
                  className="w-full h-full object-cover aspect-[4/3]"
                />

                {/* Stats Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex items-end p-8">
                  <div className="grid grid-cols-3 gap-4 w-full">
                    {[
                      { label: "Uptime", value: "99.9%" },
                      { label: "Speed", value: "10x" },
                      { label: "Security", value: "100%" },
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="text-center"
                        data-testid={`cloud-stat-${stat.label.toLowerCase()}`}
                      >
                        <div className="text-xl font-bold text-primary">
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Shapes */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-12 -right-12 w-48 h-48 border-4 border-dashed border-primary/20 rounded-full -z-10"
              />
              <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-primary/5 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Provide - Excellence in Practice Style */}
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
                  Our Services
                </span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-primary to-chart-2 bg-clip-text text-transparent">
                What We Provide
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We @ Tech Expertsus helps your firm and business or IT
              organization in re-engineering the data infrastructure and align
              capacity with business outcomes which helps customers to realize
              full potential of their investment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-0 mt-8">
            {services.map((service, index) => {
              // Map service titles to images
              let imageSrc = "";
              switch (service.title) {
                case "IT Services":
                  imageSrc = "/assets/DMS3.webp";
                  break;
                case "Enterprise Solutions":
                  imageSrc = "/assets/DMS4.jpg";
                  break;
                case "Business Intelligence & Performance":
                  imageSrc = "/assets/DMS5.webp";
                  break;
                case "Engineering & Industrial Services":
                  imageSrc = "/assets/DMS6.jpg";
                  break;
                default:
                  imageSrc = "/assets/Home5.jpg";
              }

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
                  data-testid={`service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={imageSrc}
                      alt={service.title}
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
                    <service.icon className="w-7 h-7 !text-white" />
                  </motion.div>

                  {/* Content at bottom with transparent border box */}
                  <div
                    className="absolute bottom-4 inset-x-0 p-4 !text-white bg-card/10 backdrop-blur-md border border-primary/30 rounded-2xl"
                    style={{ marginBottom: "-14px" }}
                  >
                    <h3 className="text-xl font-bold mb-3 leading-tight !text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm !text-white/90 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-all duration-300" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section with Gradient */}
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
              <Shield className="w-16 h-16 text-primary mx-auto" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
                Infrastructure?
              </span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join hundreds of businesses that trust Tech Expertsus for their
              data center management needs. Let's build the future together.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="text-lg px-10 py-6 rounded-lg shadow-xl hover:shadow-primary/50 transition-all"
                    data-testid="button-get-started"
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
                    className="text-lg px-10 py-6 rounded-lg border-primary/30 hover:border-primary/60 transition-all"
                    data-testid="button-explore-services"
                  >
                    Explore All Services
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
                <Shield className="w-4 h-4 text-primary" />
                <span>Secure Infrastructure</span>
              </div>
              <div className="flex items-center gap-2">
                <Network className="w-4 h-4 text-primary" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                <span>Expert Team</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
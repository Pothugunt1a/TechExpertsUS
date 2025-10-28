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
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useRef } from "react";

const services = [
  {
    icon: Server,
    title: "IT Services",
    description: "Comprehensive IT infrastructure management and support services tailored to your business needs.",
    color: "from-cyan-500 to-blue-600",
    delay: 0,
  },
  {
    icon: Layers,
    title: "Enterprise Solutions",
    description: "Scalable enterprise-grade solutions designed to grow with your organization.",
    color: "from-blue-500 to-purple-600",
    delay: 0.1,
  },
  {
    icon: BarChart3,
    title: "Business Intelligence & Performance",
    description: "Data-driven insights and analytics to optimize your business performance.",
    color: "from-purple-500 to-pink-600",
    delay: 0.2,
  },
  {
    icon: Cpu,
    title: "Engineering & Industrial Services",
    description: "Advanced engineering solutions for modern industrial challenges.",
    color: "from-pink-500 to-red-600",
    delay: 0.3,
  },
];

const features = [
  {
    icon: Server,
    title: "24/7 Monitoring",
    description: "Continuous server health monitoring and instant alert systems",
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
    offset: ["start start", "end start"]
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
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
        </div>

        <ParticleBackground />

        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
          {/* Floating Hexagons */}
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/20"
            style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/3 right-20 w-24 h-24 border-2 border-chart-2/30"
            style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
            animate={{
              y: [0, 40, 0],
              rotate: [360, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Glowing Circles */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-chart-2/5 blur-3xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          {/* Triangles */}
          <motion.div
            className="absolute bottom-40 right-1/3 w-20 h-20 border-2 border-primary/20"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 0],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Hero Content */}
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center"
          style={{ y, opacity }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(6, 182, 212, 0.3)",
                  "0 0 40px rgba(6, 182, 212, 0.6)",
                  "0 0 20px rgba(6, 182, 212, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block px-6 py-2 bg-primary/10 backdrop-blur-md border border-primary/30 rounded-full"
            >
              <span className="text-sm font-semibold text-primary">
                Data Center Management Services
              </span>
            </motion.div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
                Transform Your
              </span>
              <br />
              <span className="text-foreground">
                Infrastructure
              </span>
            </h1>
          </motion.div>

          {/* Subtitle with Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            <p className="text-xl md:text-2xl text-muted-foreground">
              Powering Business Excellence Through Intelligent Data Center Solutions
            </p>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto max-w-md"
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
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
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-background to-card/20">
        <div className="max-w-7xl mx-auto px-3 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Placeholder with Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
                {/* Placeholder Image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-card to-chart-2/10 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <Server className="w-24 h-24 mx-auto text-primary/40" />
                    <p className="text-muted-foreground">Data Center Infrastructure</p>
                  </div>
                </div>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              {/* Decorative Shape */}
              <div className="absolute -top-8 -right-8 w-32 h-32 border-4 border-primary/20 rounded-full blur-sm -z-10" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-chart-2/10 rounded-full blur-2xl -z-10" />
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
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Comprehensive Data Center{" "}
                  <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                    Solutions
                  </span>
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Data Center Management in general the "Server Room" for all your business needs plays a key and vital capacity in reaching out the needs of your business. The firm or business needs to act faster with maximum accuracy to meet the challenges that were posed in day to day competitive world.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                At Tech Expertsus we do Application Outsourcing which enables to streamline your business processes and maximizes the returns of your investment. Our service modules helps you to reach out all your needs and business goals with your limited investments.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Tech Expertsus provides fineness and positive assurance across all your enterprise's IT needs through comprehensive data center management.
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
                    className="flex items-center gap-2"
                    data-testid={`benefit-${index}`}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Matching Website Theme */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-3 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We @ Tech Expertsus helps your firm and business or IT organization in re-engineering the data infrastructure and align capacity with business outcomes which helps customers to realize full potential of their investment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: service.delay, duration: 0.6 }}
                className="group"
                data-testid={`service-card-${index}`}
              >
                <div className="relative h-full bg-gradient-to-br from-card/90 to-card/60 dark:from-primary/20 dark:to-chart-2/20 rounded-2xl p-8 backdrop-blur-xl border border-primary/20 shadow-2xl hover:shadow-primary/20 transition-all duration-300">
                  {/* Animated Background Glow */}
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-chart-2/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 -z-10"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  
                  {/* Icon Container */}
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-chart-2/20 group-hover:from-primary/30 group-hover:to-chart-2/30 transition-all duration-300 mb-6"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, -10, 0]
                    }}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      },
                      rotate: {
                        duration: 0.6
                      }
                    }}
                  >
                    <service.icon className="w-8 h-8 text-primary" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Details Section - Matching Website Theme */}
      <section className="relative py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-3 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive <span className="text-primary">IT Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our IT Services helps you in managing your day to day IT needs through a strong and reliable IT infrastructure. Our Tech Expertsus works on Business Effective model where our customers extracts maximum returns out of their limited investments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ x: 10 }}
                className="group cursor-pointer"
                data-testid={`feature-${index}`}
              >
                <div className="flex items-start space-x-4">
                  <motion.div 
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-chart-2/30 transition-colors flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <feature.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Computing Section with Image Placeholder */}
      <section className="relative py-20 md:py-32">
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
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Enterprise Computing and{" "}
                  <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                    Cloud Services
                  </span>
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                We @ Tech Expertsus with years of knowledge and experience in IT fields provides strategic technology directions for data center assessment. We by bringing into line your infrastructure to your business goals Tech Expertsus empower you to become more responsive to business needs.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                We @ Tech Expertsus offers leading technology to vitalize your IT infrastructure and improve your return on assets. We helps in making your IT services looks dynamic and in step with changing business process.
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
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-6">
                <Link href="/contact">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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

            {/* Image Placeholder with 3D Effect */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
                {/* Placeholder Image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-chart-2/10 via-card to-primary/10 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <Cloud className="w-24 h-24 mx-auto text-primary/40" />
                    <p className="text-muted-foreground">Cloud Infrastructure</p>
                  </div>
                </div>

                {/* Overlay with Stats */}
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
                        className="text-center p-3 bg-card/80 backdrop-blur-sm rounded-lg border border-primary/10"
                        data-testid={`cloud-stat-${stat.label.toLowerCase()}`}
                      >
                        <div className="text-xl font-bold text-primary">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
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

      {/* Final CTA Section with Gradient */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-chart-2/10" />
        
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-3 lg:px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
                Infrastructure?
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of businesses that trust Tech Expertsus for their data center management needs. Let's build the future together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="text-lg px-10 py-6 rounded-xl shadow-2xl hover:shadow-primary/50 transition-all"
                    data-testid="button-contact-us"
                  >
                    Contact Us Today
                    <Zap className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </Link>
              <Link href="/services">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="text-lg px-10 py-6 rounded-xl border-primary/30 hover:border-primary/60 transition-all backdrop-blur-sm"
                    data-testid="button-explore-services"
                  >
                    Explore All Services
                    <TrendingUp className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

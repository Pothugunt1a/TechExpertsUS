import { motion, useScroll, useTransform } from "framer-motion";
import { ParticleBackground } from "@/components/ui/particle-background";
import { ServiceCard } from "@/components/ui/service-card";
import { StatCounter } from "@/components/ui/stat-counter";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
import { HeroCarousel } from "@/components/ui/hero-carousel";
import { Server, Network, ClipboardCheck, Users, Code, Shield, Cpu, Database, Cloud, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useRef } from "react";

const services = [
  {
    icon: Users,
    title: "Consulting",
    description: "At Tech Expertsus Consulting, we help companies think ahead. Business today is evolving faster than at any other time in history.",
    link: "/consult/consulting",
  },
  {
    icon: Server,
    title: "Outsourcing",
    description: "Today's dynamic business environment mandates a robust IT organization while simultaneously reducing Total Cost of Ownership.",
    link: "/consult/outsourcing",
  },
  {
    icon: Network,
    title: "Staffing Solutions",
    description: "Your goal is to focus on your core business. Our goal is to help you by offering comprehensive workforce solutions.",
    link: "/consult/staffing",
  },
  {
    icon: ClipboardCheck,
    title: "IT Infrastructure Services",
    description: "Because of the rapid development of new technologies and infrastructure like openstack, Tech Expertsus helps organizations stay ahead.",
    link: "/services",
  },
  {
    icon: Code,
    title: "Application Management Services",
    description: "Tech Expertsus's Application Management offers a wide range of proactive support services for various platforms.",
    link: "/services",
  },
  {
    icon: Shield,
    title: "Testing Services",
    description: "With the emergence of disruptive technologies, evolution of distributed application landscapes and modern testing approaches.",
    link: "/services",
  },
];

const testimonials = [
  {
    content: "Tech Expertsus has transformed our IT infrastructure with their innovative solutions. Their team's expertise and dedication are unmatched.",
    author: "John Doe",
    role: "Customer",
  },
  {
    content: "Working with Tech Expertsus has been a game-changer for our business. They deliver exceptional results consistently.",
    author: "Jane Smith",
    role: "Customer",
  },
  {
    content: "The professionalism and technical excellence of Tech Expertsus team exceeded our expectations. Highly recommended!",
    author: "Mike Johnson",
    role: "Customer",
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <section ref={heroRef} className="relative">
        <HeroCarousel />
      </section>

      {/* Features Section */}
      <section className="relative py-10 md:py-16 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Welcome To Our <span className="text-primary">Tech Expertsus</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Tech Experts us was founded on three basic principles: Technology expertise, Innovative solutions and long lasting partnership with customers.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Established in the year 2012, Tech Experts us Technologies has grown to be the preferred IT partner for the big players in the industry across various industry verticals. Tech Experts us has partnered with some of the esteemed clients, helping them meet the new challenges of IT innovations.
              </p>
              <p className="text-lg text-muted-foreground">
                We have an enviable reputation for delivering independent, practical, value-priced advice and services to our chosen market sectors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Animated Background Glow */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-chart-2/20 rounded-3xl blur-2xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative bg-gradient-to-br from-card/90 to-card/60 dark:from-primary/20 dark:to-chart-2/20 rounded-2xl p-8 backdrop-blur-xl border border-primary/20 shadow-2xl">
                <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                  Why Choose Us?
                </h3>
                <ul className="space-y-4">
                  {[
                    { text: "Technology Expertise", icon: Code },
                    { text: "Innovative Solutions", icon: Zap },
                    { text: "Long-lasting Partnerships", icon: Users },
                    { text: "Proven Track Record", icon: Shield }
                  ].map((item, index) => (
                    <motion.li
                      key={item.text}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-center space-x-3 group cursor-pointer"
                    >
                      <motion.div 
                        className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-chart-2/30 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <item.icon className="w-5 h-5 text-primary" />
                      </motion.div>
                      <span className="text-lg">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages Section */}
      <section className="relative py-10 md:py-16 bg-gradient-to-b from-background to-primary/5 dark:to-primary/10 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Left Side - Circular Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center lg:justify-start"
            >
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
                    src="/assets/stock_images/professional_busines_78765498.jpg"
                    alt="Professional team collaborating"
                    className="w-full h-full object-cover"
                    data-testid="img-competitive-advantages-team"
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
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
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
                  <span className="text-sm font-semibold text-primary">It Support For Business</span>
                </div>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                data-testid="text-competitive-advantages-heading"
              >
                Preparing for your success trusted IT services.
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                We've been a nearly strategic thought leader for five we are bring unrivaled decades incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam nostrud
              </motion.p>

              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
              >
                {[
                  { icon: CheckCircle2, text: "Custom shortcodes" },
                  { icon: CheckCircle2, text: "Data Analytics" },
                  { icon: CheckCircle2, text: "IT Consultancy" },
                  { icon: CheckCircle2, text: "Data security" }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3 group"
                    data-testid={`feature-${feature.text.toLowerCase().replace(/\s+/g, "-")}`}
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
          </div>

          {/* Bottom Statistics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="relative"
          >
            <div className="bg-primary dark:bg-primary/90 rounded-2xl p-8 md:p-10 shadow-2xl backdrop-blur-sm">
              {/* Dot pattern overlay */}
              <div className="absolute inset-0 opacity-10 rounded-2xl overflow-hidden">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 4px 4px, white 2px, transparent 0)`,
                  backgroundSize: '30px 30px'
                }} />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                {[
                  { value: "3", suffix: "+", label: "" },
                  { value: "7", suffix: "+", label: "" },
                  { value: "5", suffix: "+", label: "" },
                  { value: "6", suffix: "", label: "" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center"
                    data-testid={`stat-competitive-${index}`}
                  >
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                      {stat.value}{stat.suffix}
                    </div>
                    {stat.label && (
                      <div className="text-sm md:text-base text-white/80 uppercase tracking-wide">
                        {stat.label}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-10 md:py-16 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center group"
              data-testid="stat-our-products"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-chart-2/20 group-hover:from-primary/30 group-hover:to-chart-2/30 transition-all duration-300"
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
                  <Code className="w-10 h-10 text-primary" />
                </motion.div>
                <div className="text-5xl md:text-6xl font-mono font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                  <StatCounter end={13} label="" />
                </div>
              </div>
              <p className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
                Our Products
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center group"
              data-testid="stat-our-customers"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-chart-2/20 group-hover:from-primary/30 group-hover:to-chart-2/30 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 360
                  }}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    scale: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    },
                    rotate: {
                      duration: 0.8
                    }
                  }}
                >
                  <Users className="w-10 h-10 text-primary" />
                </motion.div>
                <div className="text-5xl md:text-6xl font-mono font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                  <StatCounter end={126} label="" />
                </div>
              </div>
              <p className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
                Our Customers
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center group"
              data-testid="stat-staffing"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-chart-2/20 group-hover:from-primary/30 group-hover:to-chart-2/30 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    y: [-5, 5, -5]
                  }}
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    rotate: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    y: {
                      duration: 0.4,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <Network className="w-10 h-10 text-primary" />
                </motion.div>
                <div className="text-5xl md:text-6xl font-mono font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                  <StatCounter end={320} label="" />
                </div>
              </div>
              <p className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
                Staffing
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center group"
              data-testid="stat-new-updates"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-chart-2/20 group-hover:from-primary/30 group-hover:to-chart-2/30 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, 360]
                  }}
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    y: {
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    },
                    rotate: {
                      y: {
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      },
                      hover: {
                        duration: 0.8
                      }
                    }
                  }}
                >
                  <Zap className="w-10 h-10 text-primary" />
                </motion.div>
                <div className="text-5xl md:text-6xl font-mono font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                  <StatCounter end={144} label="" />
                </div>
              </div>
              <p className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
                New Updates
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-muted-foreground">What our clients say about us</p>
          </motion.div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative py-10 md:py-16 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[
              { name: "Adaptability", icon: "adaptability" },
              { name: "Communication", icon: "communication" },
              { name: "Satisfaction", icon: "satisfaction" },
              { name: "Performance", icon: "performance" },
              { name: "Consciousness", icon: "consciousness" }
            ].map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center group"
                data-testid={`value-${value.name.toLowerCase()}`}
              >
                <div className="relative w-40 h-40 mb-4">
                  {/* Animated circle border with draw effect */}
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 160 160">
                    <circle
                      cx="80"
                      cy="80"
                      r="76"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-primary/20"
                    />
                    <motion.circle
                      cx="80"
                      cy="80"
                      r="76"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="text-primary"
                      strokeDasharray="477"
                      initial={{ strokeDashoffset: 477 }}
                      whileInView={{ strokeDashoffset: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 2,
                        delay: index * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  </svg>
                  
                  {/* Animated glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/5 blur-xl"
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                  />
                  
                  {/* Inner content with icon */}
                  <div className="absolute inset-3 rounded-full bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center group-hover:bg-background transition-colors duration-300">
                    <motion.img
                      src={`/assets/icons/${value.icon}.svg`}
                      alt={value.name}
                      className="w-16 h-16 mb-2 text-primary"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                      style={{ filter: 'invert(47%) sepia(96%) saturate(3071%) hue-rotate(190deg) brightness(95%) contrast(101%)' }}
                    />
                    <motion.span
                      className="text-sm font-semibold text-center px-2 text-primary"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.7 }}
                    >
                      {value.name}
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

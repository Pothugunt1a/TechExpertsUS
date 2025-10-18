import { motion, useScroll, useTransform } from "framer-motion";
import { ParticleBackground } from "@/components/ui/particle-background";
import { ServiceCard } from "@/components/ui/service-card";
import { StatCounter } from "@/components/ui/stat-counter";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
import { Server, Network, ClipboardCheck, Users, Code, Shield, Cpu, Database, Cloud, Zap } from "lucide-react";
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
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        
        {/* Animated Tech Icons */}
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 pointer-events-none"
        >
          <motion.div
            className="absolute top-1/4 left-1/4"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Cpu className="w-16 h-16 text-primary/20 dark:text-primary/30" />
          </motion.div>
          <motion.div
            className="absolute top-1/3 right-1/4"
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <Database className="w-20 h-20 text-chart-2/20 dark:text-chart-2/30" />
          </motion.div>
          <motion.div
            className="absolute bottom-1/3 left-1/3"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 15, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <Cloud className="w-24 h-24 text-primary/20 dark:text-primary/30" />
          </motion.div>
          <motion.div
            className="absolute top-1/2 right-1/3"
            animate={{ 
              y: [0, 25, 0],
              rotate: [0, -15, 0]
            }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <Zap className="w-14 h-14 text-chart-2/20 dark:text-chart-2/30" />
          </motion.div>
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% auto" }}
            >
              Solutions that you need!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
            >
              We aim to improve client proficiency, profit & productivity
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/services">
                <Button size="lg" className="text-lg px-8" data-testid="button-explore-services">
                  Explore Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8" data-testid="button-contact-us">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-40 h-40 bg-chart-2/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </section>

      {/* Features Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
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
      <section className="relative py-20 md:py-32">
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

      {/* Stats Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-muted-foreground">Numbers that speak for themselves</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCounter end={13} label="Our Products" />
            <StatCounter end={126} label="Our Customers" />
            <StatCounter end={320} label="Staffing" />
            <StatCounter end={144} label="New Updates" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-muted-foreground">What our clients say about us</p>
          </motion.div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
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
                      className="text-sm font-semibold text-center px-2"
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

import { motion } from "framer-motion";
import { ParticleBackground } from "@/components/ui/particle-background";
import { Server, Database, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const services = [
  "IT Services",
  "Enterprise Solutions",
  "Business Intelligence and Performance Management",
  "Engineering and Industrial Services",
];

export default function DMS() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Screen Banner */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - High Resolution GIF */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/DataCenterManagement-banner.gif"
            alt="Data Center Management Banner"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>

        {/* Particle Background Overlay */}
        <ParticleBackground />

        {/* Centered Text Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 w-full flex items-center min-h-screen py-20">
          <motion.div
            className="text-center flex flex-col items-center justify-center w-full"
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-4 sm:mb-6"
            >
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.3)",
                    "0 0 40px rgba(59, 130, 246, 0.5)",
                    "0 0 20px rgba(59, 130, 246, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block px-4 py-2 bg-primary/10 backdrop-blur-md border border-primary/30 rounded-full"
              >
                <span className="text-xs sm:text-sm font-semibold text-primary">
                  Next-Gen Infrastructure
                </span>
              </motion.div>
            </motion.div>

            {/* Main Title with Staggered Word Animation */}
            <div className="overflow-hidden mb-3 sm:mb-4 lg:mb-6">
              <motion.h1 
                className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {["Powering", "Your", "Digital", "Future"].map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.2 + index * 0.1,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                    className="inline-block mr-3 sm:mr-4 bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent"
                    data-testid={`banner-word-${index}`}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            {/* Subtitle with Multiple Animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-2"
            >
              <motion.p 
                className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold text-foreground"
                animate={{ 
                  textShadow: [
                    "0 0 10px rgba(59, 130, 246, 0.3)",
                    "0 0 20px rgba(59, 130, 246, 0.5)",
                    "0 0 10px rgba(59, 130, 246, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                data-testid="banner-subtitle-main"
              >
                Innovation Meets Excellence
              </motion.p>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto max-w-md"
              />
              
              <motion.p 
                className="text-xs sm:text-base md:text-lg lg:text-xl text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                data-testid="banner-subtitle-secondary"
              >
                Transforming Infrastructure into Intelligent Systems
              </motion.p>
            </motion.div>

            {/* Animated CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="mt-6 sm:mt-8"
            >
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid="button-explore-solutions"
                >
                  <Button 
                    size="lg" 
                    className="text-sm sm:text-base md:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-lg shadow-lg hover:shadow-primary/50 transition-shadow"
                  >
                    Explore Solutions
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Floating Icons Animation */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                className="absolute top-1/4 left-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-primary/40 rounded-full blur-sm"
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.5, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-1/3 right-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-chart-2/40 rounded-full blur-sm"
                animate={{
                  y: [0, 30, 0],
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.5, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <motion.div
                className="absolute bottom-1/3 left-1/3 w-2 h-2 sm:w-3 sm:h-3 bg-primary/40 rounded-full blur-sm"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.5, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Data Center Solutions</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Data Center Management in general the "Server Room" for all your business needs plays a key and vital capacity in reaching out the needs of your business. The firm or business needs to act faster with maximum accuracy to meet the challenges that were posed in day to day competitive world.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                At Tech Expertsus we do Application Outsourcing which enables to streamline your business processes and maximizes the returns of your investment. Our service modules helps you to reach out all your needs and business goals with your limited investments.
              </p>
              <p className="text-lg text-muted-foreground">
                Tech Expertsus provides fineness and positive assurance across all your enterprise's IT needs through comprehensive data center management.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <Server className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-primary">Server Management</h3>
                <p className="text-sm text-muted-foreground">24/7 monitoring and maintenance</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <Database className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-primary">Data Storage</h3>
                <p className="text-sm text-muted-foreground">Scalable storage solutions</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-primary">Security</h3>
                <p className="text-sm text-muted-foreground">Enterprise-grade protection</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-primary">Performance</h3>
                <p className="text-sm text-muted-foreground">Optimized operations</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-10 md:py-16 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We @ Tech Expertsus helps your firm and business or IT organization in re-engineering the data infrastructure and align capacity with business outcomes which helps customers to realize full potential of their investment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300"
                data-testid={`service-${service.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">{index + 1}</span>
                </div>
                <p className="font-semibold">{service}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Computing */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Enterprise Computing and Cloud Services</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-muted-foreground">
                We @ Tech Expertsus with years of knowledge and experience in IT fields provides strategic technology directions for data center assessment. We by bringing into line your infrastructure to your business goals Tech Expertsus empower you to become more responsive to business needs.
              </p>
              <p className="text-lg text-muted-foreground">
                We @ Tech Expertsus offers leading technology to vitalize your IT infrastructure and improve your return on assets. We helps in making your IT services looks dynamic and in step with changing business process.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8" data-testid="button-contact-us">
                Contact Us Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

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
                <h3 className="text-lg font-semibold mb-2">Server Management</h3>
                <p className="text-sm text-muted-foreground">24/7 monitoring and maintenance</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <Database className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Data Storage</h3>
                <p className="text-sm text-muted-foreground">Scalable storage solutions</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Security</h3>
                <p className="text-sm text-muted-foreground">Enterprise-grade protection</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Performance</h3>
                <p className="text-sm text-muted-foreground">Optimized operations</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Redesigned */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Gradient Orbs */}
          <motion.div
            className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-40 -right-40 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          
          {/* Geometric Shapes */}
          <motion.div
            className="absolute top-20 right-20 w-32 h-32 border-2 border-primary/20 rounded-3xl rotate-12"
            animate={{ rotate: [12, 32, 12] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-40 left-20 w-24 h-24 border-2 border-chart-2/20 rounded-2xl -rotate-12"
            animate={{ rotate: [-12, 8, -12] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Section Title */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="inline-block"
                >
                  <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-semibold text-primary">
                    What We Offer
                  </span>
                </motion.div>
                
                <motion.h2 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Our <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">Services</span>
                </motion.h2>
                
                <motion.p 
                  className="text-lg text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  We @ Tech Expertsus helps your firm and business or IT organization in re-engineering the data infrastructure and align capacity with business outcomes which helps customers to realize full potential of their investment.
                </motion.p>
              </div>

              {/* Services List */}
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="group relative"
                    data-testid={`service-${service.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {/* Background Glow on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-chart-2/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                    
                    {/* Service Item */}
                    <div className="relative flex items-start gap-4 p-4 bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl group-hover:border-primary/30 group-hover:shadow-lg transition-all duration-300">
                      {/* Number Badge */}
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 border border-primary/30 flex items-center justify-center"
                      >
                        <span className="text-xl font-bold bg-gradient-to-br from-primary to-chart-2 bg-clip-text text-transparent">
                          {index + 1}
                        </span>
                      </motion.div>
                      
                      {/* Service Name */}
                      <div className="flex-1 pt-2">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {service}
                        </h3>
                      </div>
                      
                      {/* Arrow Icon */}
                      <motion.div
                        className="flex-shrink-0 text-primary/50 group-hover:text-primary"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Animated GIF with Decorative Frame */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Decorative Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-chart-2/20 to-primary/20 rounded-3xl blur-2xl transform rotate-6 scale-105" />
              
              {/* Main Container with Border Animation */}
              <motion.div
                className="relative rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  animate={{
                    background: [
                      "linear-gradient(0deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))",
                      "linear-gradient(90deg, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3))",
                      "linear-gradient(180deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))",
                      "linear-gradient(270deg, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3))",
                      "linear-gradient(360deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))",
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{ padding: '3px' }}
                >
                  <div className="w-full h-full bg-background rounded-3xl" />
                </motion.div>
                
                {/* GIF Image Container */}
                <div className="relative rounded-3xl overflow-hidden">
                  <motion.img
                    src="/assets/DataCenterManagement.gif"
                    alt="Data Center Management"
                    className="w-full h-auto rounded-3xl"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-3xl" />
                </div>
              </motion.div>

              {/* Floating Elements Around Image */}
              <motion.div
                className="absolute -top-6 -right-6 w-20 h-20 bg-primary/20 rounded-full blur-xl"
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-chart-2/20 rounded-full blur-xl"
                animate={{
                  y: [0, 20, 0],
                  scale: [1.2, 1, 1.2],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </motion.div>
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

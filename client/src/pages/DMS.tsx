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
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <img
            src="/assets/DataCenterManagement-banner.gif"
            alt="Data Center Management Banner"
            className="w-full h-full object-contain object-center"
          />
        </motion.div>

        {/* Particle Background Overlay */}
        <ParticleBackground />

        {/* Centered Text Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 w-full flex items-center" style={{ height: '85vh' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center flex flex-col items-center justify-center w-full"
            style={{ marginTop: '-6px' }}
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
              Data Center Management Services
            </h1>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-muted-foreground">
              We Are Professional
            </p>
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

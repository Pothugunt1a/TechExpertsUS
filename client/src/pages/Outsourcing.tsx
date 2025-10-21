import { motion } from "framer-motion";
import { ParticleBackground } from "@/components/ui/particle-background";
import { Server, Cloud, Briefcase, TrendingDown, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const challenges = [
  "Build and grow a flexible IT organization to keep pace with business growth",
  "Manage TCO in a shrinking IT budget regime",
  "Manage operational issues like high turnaround time",
  "Access or maintain required competency/skills across the technology stack",
  "Leverage IT investment as a differentiator",
];

const offerings = [
  {
    icon: Server,
    title: "IT Services",
    description: "Comprehensive IT infrastructure and application management services",
  },
  {
    icon: Cloud,
    title: "Enterprise Solutions",
    description: "Scalable cloud and enterprise computing solutions",
  },
  {
    icon: Briefcase,
    title: "Business Intelligence",
    description: "Performance management and analytics solutions",
  },
  {
    icon: Users,
    title: "Engineering Services",
    description: "Industrial and technical engineering expertise",
  },
];

const businessValues = [
  "Seamless scaling up of IT organization to increased complexity",
  "Scalable, flexible and unified IT solution tied to business objectives",
  "Reduced TCO and correlation of IT to financial objectives",
  "A transformed IT organization capable of meeting increasing environmental challenges",
];

export default function Outsourcing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              IT <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">Outsourcing</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              We Are Professional
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Strategic IT Outsourcing Solutions</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Today's dynamic business environment mandates a robust IT organization while simultaneously reducing Total Cost of Ownership (TCO), enhancing service levels and transforming IT into a strategic enabler.
              </p>
              <p>
                Tech Expertsus' outsourcing value proposition couples IT solutions with business objectives, while delivering certainty in an environment of collaboration, trust, reliability and flexibility to meet customer's changing requirements.
              </p>
              <p>
                Our full service model, in-depth industry knowledge and technical expertise, robust and repeatable processes, Global Network Delivery Model GNDMT, and expertise at optimizing IT environments help us deliver measurable business results.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Challenges */}
      <section className="relative py-10 md:py-16 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Challenges We Address</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl hover:border-primary/30 transition-all duration-300"
                data-testid={`challenge-${index}`}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <p className="text-lg">{challenge}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">What Tech Expertsus Provides</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The Tech Expertsus Outsourcing solution envisages transparent, flexible and scalable full service offerings delivered seamlessly through its GNDMT while maintaining a global uniform single delivery standard.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 text-center"
                data-testid={`offering-${offering.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center mb-6"
                >
                  <offering.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{offering.title}</h3>
                <p className="text-muted-foreground">{offering.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Value */}
      <section className="relative py-10 md:py-16 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Business Value</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {businessValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex items-start space-x-4 p-6 bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl hover:border-primary/30 transition-all duration-300"
              >
                <TrendingDown className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Optimize Your IT Operations?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let us help you transform your IT investments into reliable and future-proof business service infrastructures.
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8" data-testid="button-get-started">
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

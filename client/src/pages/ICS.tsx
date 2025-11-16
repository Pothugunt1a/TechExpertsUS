import { motion } from "framer-motion";
import { ParticleBackground } from "@/components/ui/particle-background";
import {
  Network,
  Monitor,
  Server as ServerIcon,
  Code,
  Database,
  Lock,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const solutions = [
  {
    icon: Network,
    title: "Network Management",
    description:
      "eLan Technology identifies the positives and negatives of the company network security and offers solutions in preventing frequent outages.",
  },
  {
    icon: Monitor,
    title: "Desktop Management",
    description:
      "We offer trust worthy and reliable solutions to the corporate sectors through comprehensive desktop management services.",
  },
  {
    icon: ServerIcon,
    title: "Server Management & Automation",
    description:
      "Tech Expertsus helps in delivering security, policy management, server compliance and standardizing your company configurations.",
  },
  {
    icon: Code,
    title: "DevOps: Development Operations",
    description:
      "Software development method that enables rapid evolutions of products and services while reducing risks and improving quality.",
  },
  {
    icon: Database,
    title: "Application & Database Management",
    description:
      "We help design databases ensuring information is easily accessible and helps users with their different queries efficiently.",
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    description:
      "Ensuring your organization stays protected from security breaches with well-prepared plans and risk-focused strategies.",
  },
];

export default function ICS() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Screen Banner */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/assets/InfrastructureConsultingServices-banner.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Particle Background Overlay */}
        <ParticleBackground />

        {/* Centered Text Content */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-3 lg:px-4 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center">
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
                  Infrastructure Consulting
                </span>
              </motion.div>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block mb-2">Infrastructure</span>
              <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
                Consulting Services
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              We Are Professional
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-3 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Building Secure & Resilient Infrastructure
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                For the successful and to be successful in any field or in any
                area one has to ensure the safety of it otherwise it leads to
                faults play. An intelligent Infrastructure consulting services
                enables a company to grow in digital business and yields
                high-end results. ICS at Tech Expertsus helps its customers in
                creating a more secure infrastructure and manages it more
                effectively.
              </p>
              <p>
                eLan enables your firm to come out from risks that involved in
                different stages of the work. By creating and implementing
                structures plans eLan Technology offers more secure and
                resilient infrastructure which in turn helps your organization
                to come out from outages and disasters.
              </p>
              <p>
                eLan technology ensures your organization from security breaches
                with well-prepared plans and focuses on the risks that were
                troubling the company's safety and security.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative py-10 md:py-16 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-3 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Wide Range of Solutions
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive infrastructure services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
                data-testid={`solution-${solution.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="relative h-full bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-chart-2/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center mb-6"
                    >
                      <solution.icon className="w-8 h-8 text-primary" />
                    </motion.div>

                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
                Business?
              </span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Real change comes through the right ideas and effective
              implementation. Let's create something amazing together.
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
                    className="text-lg px-10 py-6 rounded-lg"
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
                <span>Innovative Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                <span>Expert Team</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

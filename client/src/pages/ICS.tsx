import { motion } from "framer-motion";
import { ParticleBackground } from "@/components/ui/particle-background";
import { Network, Monitor, Server as ServerIcon, Code, Database, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const solutions = [
  {
    icon: Network,
    title: "Network Management",
    description: "eLan Technology identifies the positives and negatives of the company network security and offers solutions in preventing frequent outages.",
  },
  {
    icon: Monitor,
    title: "Desktop Management",
    description: "We offer trust worthy and reliable solutions to the corporate sectors through comprehensive desktop management services.",
  },
  {
    icon: ServerIcon,
    title: "Server Management & Automation",
    description: "Tech Expertsus helps in delivering security, policy management, server compliance and standardizing your company configurations.",
  },
  {
    icon: Code,
    title: "DevOps: Development Operations",
    description: "Software development method that enables rapid evolutions of products and services while reducing risks and improving quality.",
  },
  {
    icon: Database,
    title: "Application & Database Management",
    description: "We help design databases ensuring information is easily accessible and helps users with their different queries efficiently.",
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    description: "Ensuring your organization stays protected from security breaches with well-prepared plans and risk-focused strategies.",
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
            backgroundImage: `url(/assets/Infrastructure-banner.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/80 z-[1]" />
        
        {/* Particle Background Overlay */}
        <ParticleBackground />
      </section>

      {/* Overview Section */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Building Secure & Resilient Infrastructure</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                For the successful and to be successful in any field or in any area one has to ensure the safety of it otherwise it leads to faults play. An intelligent Infrastructure consulting services enables a company to grow in digital business and yields high-end results. ICS at Tech Expertsus helps its customers in creating a more secure infrastructure and manages it more effectively.
              </p>
              <p>
                eLan enables your firm to come out from risks that involved in different stages of the work. By creating and implementing structures plans eLan Technology offers more secure and resilient infrastructure which in turn helps your organization to come out from outages and disasters.
              </p>
              <p>
                eLan technology ensures your organization from security breaches with well-prepared plans and focuses on the risks that were troubling the company's safety and security.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative py-10 md:py-16 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Wide Range of Solutions</h2>
            <p className="text-xl text-muted-foreground">Comprehensive infrastructure services</p>
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
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Secure Your Infrastructure?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let our experts help you build a resilient and secure IT infrastructure that drives your business forward.
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8" data-testid="button-get-started">
                Get Started Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { motion } from "framer-motion";
import { ParticleBackground } from "@/components/ui/particle-background";
import { ClipboardCheck, TrendingUp, Shield, Code, Globe, Database, Lock, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const solutions = [
  {
    icon: TrendingUp,
    title: "Process Improvement",
    description: "Business processes are fundamental to every company's performance. We help establish high-performing processes through systematic assessment and improvement.",
  },
  {
    icon: Shield,
    title: "Risk Analysis",
    description: "Decades of experience in helping organizations understand formal risk management. We identify, analyze and help objectively manage project risks.",
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Organizations can create software exactly according to their requirements, reducing the need for multiple software purchases and expensive licenses.",
  },
  {
    icon: Globe,
    title: "Web Application Solutions",
    description: "From high level strategy to implementation, we offer technically complex yet user-friendly solutions with optimal cost/performance ratio.",
  },
  {
    icon: Lock,
    title: "Secure Internet",
    description: "Secure scalable solutions for businesses of all sizes. We maximize network security protection against DDoS attacks and threats.",
  },
  {
    icon: Database,
    title: "Enterprise Database Solutions",
    description: "Control costs without sacrificing growth with our Enterprise Data Management combining strategic expertise and deep operational understanding.",
  },
  {
    icon: Smartphone,
    title: "Responsive Designs",
    description: "Device-independent UI design that develops and delivers optimized website experience across all devices and resolutions.",
  },
  {
    icon: ClipboardCheck,
    title: "Scrum Training",
    description: "SCRUM training where our highly skilled professionals teach all aspects and modules from the very basic points to advanced concepts.",
  },
];

export default function PMS() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Screen Banner */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/assets/photodune.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Particle Background Overlay */}
        <ParticleBackground />

        {/* Centered Text Content */}
        <div
          className="relative z-10 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 w-full flex items-center"
          style={{ height: "85vh" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center flex flex-col items-center justify-center w-full"
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
              Project Management Solutions
            </h1>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-muted-foreground">
              We Are Professional
            </p>
          </motion.div>
        </div>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Comprehensive Project Management</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Tech Expertsus project management solutions help companies schedule resources and monitor performance to ensure both deadlines and project requirements are met. Automated project execution ensures timely communication across distributed teams by automatically updating schedules and delivering resource assignments as each critical deadline is met.
              </p>
              <p>
                Companies can implement a standardized, efficient process to manage projects and enhance communication among product teams.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="relative py-10 md:py-16 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-3 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Our Solutions</h2>
            <p className="text-xl text-muted-foreground">End-to-end project management services</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative"
                data-testid={`solution-${solution.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="relative h-full bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-chart-2/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center mb-4"
                    >
                      <solution.icon className="w-7 h-7 text-primary" />
                    </motion.div>

                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-3 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Key Highlights</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary">Process Excellence</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span>Understanding the "voice of the customer" around performance expectations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span>Leveraging qualitative and quantitative analytics</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span>Prioritizing improvements based on benefit potential</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary">Risk Management</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span>Assessing composition and performance of your portfolio</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span>Cost and Schedule Risk Analysis</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span>Risk Management and Simulation Optimization</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-10 md:py-16 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-3 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Ready to Optimize Your Projects?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let us help you implement efficient project management solutions that deliver results.
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8" data-testid="button-start-project">
                Start Your Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

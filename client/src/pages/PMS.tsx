import { motion, useScroll, useTransform } from "framer-motion";
import { ParticleBackground } from "@/components/ui/particle-background";
import {
  TrendingUp,
  Shield,
  Code,
  Globe,
  Lock,
  Database,
  Smartphone,
  Layers,
  CheckCircle2,
  Zap,
  Target,
  Users,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/ProjectManagement_1760669441810.png";
import processImage from "@assets/stock_images/business_process_imp_401b7a1a.jpg";
import softwareDevImage from "@assets/stock_images/software_development_b3e036ce.jpg";
import securityImage from "@assets/stock_images/security_network_cyb_149dfe18.jpg";
import scrumImage from "@assets/stock_images/agile_scrum_project__beb30006.jpg";

export default function PMS() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Parallax Effect */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ y: heroY }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-primary/30" />
        </motion.div>

        <motion.div
          className="relative z-10 max-w-5xl mx-auto px-3 lg:px-4 text-center"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              data-testid="heading-hero"
            >
              <span className="block mb-2 text-foreground">Project Management</span>
              <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent animate-gradient">
                Solutions
              </span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              data-testid="text-hero-description"
            >
              Streamline resources, monitor performance, and deliver projects on time with automated execution
            </motion.p>
          </motion.div>
        </motion.div>

        <ParticleBackground />
      </section>

      {/* Process Improvement - Diagonal Split with Image */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-2/5" />
        
        {/* Diagonal Background Split */}
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-br from-primary/10 to-chart-2/10 transform skew-x-12 origin-top-right" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-3 lg:px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20" data-testid="badge-process-excellence">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Process Excellence</span>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="heading-process-improvement">
                Business Process <span className="text-primary">Improvement</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8" data-testid="text-process-description">
                Processes are the key mechanism by which businesses deliver value. We help establish high-performing 
                processes through systematic assessment, prioritization, and continuous improvement based on strategic imperatives.
              </p>

              <div className="space-y-4">
                {[
                  "Understanding customer performance expectations",
                  "Leveraging qualitative and quantitative analytics",
                  "Targeting improvements with highest value impact",
                  "Building momentum for organizational change"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                    data-testid={`feature-process-${index}`}
                  >
                    <div className="mt-1">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Right with Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src={processImage} 
                  alt="Process improvement"
                  className="w-full h-[400px] object-cover"
                  data-testid="img-process-improvement"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-8 -left-8 bg-background/95 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 shadow-2xl"
                data-testid="card-success-rate"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary" data-testid="text-success-rate">95%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Risk Analysis - Dark Background with Overlapping Elements */}
      <section className="relative py-24 bg-gradient-to-br from-card via-background to-card overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-chart-2 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-3 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20" data-testid="badge-risk-management">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Risk Management</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="heading-risk-analysis">
              Comprehensive <span className="text-primary">Risk Analysis</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-risk-description">
              Decades of experience helping organizations understand formal risk management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Portfolio Assessment",
                description: "Assessing composition and performance of your project portfolio"
              },
              {
                icon: TrendingUp,
                title: "Cost & Schedule Analysis",
                description: "Comprehensive risk analysis for cost and schedule optimization"
              },
              {
                icon: Target,
                title: "Risk Optimization",
                description: "Management simulation and optimization for highest success probability"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
                data-testid={`card-risk-${index}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-chart-2/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8 border border-primary/10 rounded-2xl backdrop-blur-sm hover:border-primary/30 transition-all duration-500">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center mb-4"
                  >
                    <item.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3" data-testid={`heading-risk-${index}`}>{item.title}</h3>
                  <p className="text-muted-foreground" data-testid={`text-risk-desc-${index}`}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Software Development - Numbered Steps with Alternating Layout */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-3 lg:px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden">
                <img 
                  src={softwareDevImage} 
                  alt="Software development"
                  className="w-full h-[500px] object-cover"
                  data-testid="img-software-development"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-chart-2/30" />
              </div>

              {/* Floating Icon */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-8 -right-8 w-24 h-24 rounded-2xl bg-primary/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center shadow-2xl"
                data-testid="icon-code-floating"
              >
                <Code className="w-12 h-12 text-primary" />
              </motion.div>
            </motion.div>

            {/* Content Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20" data-testid="badge-software-solutions">
                  <Code className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Software Solutions</span>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="heading-custom-software">
                Custom Software <span className="text-primary">Development</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8" data-testid="text-software-description">
                Create software exactly according to your requirements. Eliminate expensive licenses and reduce maintenance costs.
              </p>

              <div className="space-y-4">
                {[
                  "Gathering Requirements",
                  "Predefined Methodologies",
                  "Quality Assurance & Testing",
                  "Installation & Client Training",
                  "Ongoing Support"
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-primary hover:from-primary/10 transition-all duration-300"
                    data-testid={`step-software-${index}`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center shrink-0">
                      <span className="text-lg font-bold text-primary">{index + 1}</span>
                    </div>
                    <span className="text-lg font-medium">{step}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Web Applications - Full Width Image Background */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" 
               style={{ backgroundImage: `url(${processImage})` }} />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-3 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20" data-testid="badge-web-solutions">
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Web Solutions</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="heading-web-applications">
              Advanced <span className="text-primary">Web Applications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-web-description">
              Business-ready solutions from day one with advanced technologies and optimal cost/performance ratio
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Layers, title: "Strategy & Planning", desc: "High-level strategy and accurate planning" },
              { icon: Code, title: "Development", desc: "Advanced technologies and tools" },
              { icon: CheckCircle2, title: "Testing & QA", desc: "Comprehensive testing procedures" },
              { icon: Users, title: "Training & Support", desc: "Complete training and ongoing support" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-background/80 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300"
                data-testid={`card-web-feature-${index}`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" data-testid={`heading-web-${index}`}>{item.title}</h3>
                  <p className="text-muted-foreground" data-testid={`text-web-desc-${index}`}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Solutions - Split Background */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 flex">
          <div className="w-1/2 bg-gradient-to-br from-primary/10 to-chart-2/10" />
          <div className="w-1/2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-3 lg:px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20" data-testid="badge-security-first">
                  <Lock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Security First</span>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="heading-security-solutions">
                Secure Internet & <span className="text-primary">Intranet Solutions</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-6" data-testid="text-security-description">
                Secure, scalable, US-based solutions combining cutting-edge security technology with certified 
                senior-level professionals to protect and grow your business.
              </p>

              <div className="space-y-3">
                {[
                  "DDoS protection and network security",
                  "256-bit encryption standards",
                  "Document and file management",
                  "24/7 monitoring and support"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                    data-testid={`feature-security-${index}`}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src={securityImage} 
                  alt="Security solutions"
                  className="w-full h-[400px] object-cover"
                  data-testid="img-security"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                
                {/* Floating Security Badge */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-primary/20 backdrop-blur-xl border-4 border-primary/30 flex flex-col items-center justify-center shadow-2xl"
                  data-testid="badge-encryption"
                >
                  <Lock className="w-12 h-12 text-primary mb-1" />
                  <span className="text-xs font-semibold text-primary">256-bit</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Solutions - Horizontal Cards */}
      <section className="relative py-24 bg-gradient-to-b from-background to-card/50">
        <div className="max-w-7xl mx-auto px-3 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="heading-more-solutions">
              More <span className="text-primary">Solutions</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Smartphone,
                title: "Responsive Design",
                description: "Device-independent UI that adapts to all screen sizes and resolutions"
              },
              {
                icon: Layers,
                title: "3rd Party Integration",
                description: "Seamless integration with payment gateways, social networks, and more"
              },
              {
                icon: Database,
                title: "Enterprise Database",
                description: "Real-time data access with flexible deployment and breakthrough performance"
              }
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300 bg-background/50 backdrop-blur-sm"
                data-testid={`card-solution-${index}`}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center mb-4"
                >
                  <solution.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3" data-testid={`heading-solution-${index}`}>{solution.title}</h3>
                <p className="text-muted-foreground" data-testid={`text-solution-desc-${index}`}>{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scrum Training - Centered with Image */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center opacity-15" 
               style={{ backgroundImage: `url(${scrumImage})` }} />
          <div className="absolute inset-0 bg-gradient-to-br from-background/98 via-primary/5 to-background/98" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-3 lg:px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-block mb-8"
            >
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center border-4 border-primary/30">
                <Users className="w-12 h-12 text-primary" />
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="heading-scrum-training">
              Professional <span className="text-primary">Scrum Training</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-scrum-description">
              Master the lightweight Scrum framework with our comprehensive training program covering all aspects 
              from basic principles to advanced concepts.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                { icon: Target, title: "Scrum Theory", desc: "Complete understanding of Scrum framework" },
                { icon: Users, title: "Team Dynamics", desc: "Values and principles for project success" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="p-6 rounded-2xl bg-background/80 backdrop-blur-sm border border-primary/10"
                  data-testid={`card-scrum-${index}`}
                >
                  <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2" data-testid={`heading-scrum-${index}`}>{item.title}</h3>
                  <p className="text-muted-foreground" data-testid={`text-scrum-desc-${index}`}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Modern Gradient */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-chart-2/20" />
        <ParticleBackground />

        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-chart-2/20 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-3 lg:px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="heading-cta">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
                Projects?
              </span>
            </h2>

            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto" data-testid="text-cta-description">
              Let us help you implement efficient project management solutions that deliver measurable results
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" data-testid="link-contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="text-lg px-8 bg-primary hover:bg-primary/90"
                    data-testid="button-get-started"
                  >
                    Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </Link>
              <Link href="/services" data-testid="link-services">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8"
                    data-testid="button-explore-services"
                  >
                    Explore Services
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

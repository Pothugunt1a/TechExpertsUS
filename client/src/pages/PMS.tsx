import { motion, useScroll, useTransform } from "framer-motion";
import { ParticleBackground } from "@/components/ui/particle-background";
import { AnimatedGridBackground } from "@/components/ui/animated-grid-background";
import {
  ClipboardCheck,
  TrendingUp,
  Shield,
  Code,
  Globe,
  Database,
  Lock,
  Smartphone,
  Target,
  BarChart3,
  Zap,
  CheckCircle2,
  Server,
  Workflow,
  Layers,
  Settings,
  Award,
  Users,
  ArrowRight,
  Sparkles,
  GraduationCap,
  Puzzle,
  CloudCog,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useRef } from "react";

const processFeatures = [
  {
    icon: Target,
    title: "Customer-Centric Approach",
    description: "Understanding performance expectations and client needs",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Analytics",
    description: "Leveraging qualitative and quantitative insights",
  },
  {
    icon: TrendingUp,
    title: "Strategic Prioritization",
    description: "Focusing on high-impact performance improvements",
  },
];

const riskServices = [
  "Portfolio Performance Assessment",
  "Cost & Schedule Risk Analysis",
  "Risk Management & Simulation",
  "Project Risk Identification",
  "Objective Risk Mitigation",
  "Risk Process Development",
];

const developmentSteps = [
  { icon: ClipboardCheck, title: "Requirements Gathering", description: "Understanding your exact specifications" },
  { icon: Workflow, title: "Proven Methodologies", description: "Frameworks that deliver results" },
  { icon: Code, title: "Process-Oriented Development", description: "Systematic approach to coding" },
  { icon: Award, title: "Quality Assurance", description: "Rigorous testing protocols" },
  { icon: Users, title: "User Training", description: "Comprehensive client support" },
  { icon: Settings, title: "Ongoing Maintenance", description: "Continuous optimization" },
];

const webFeatures = [
  { title: "Strategic Planning", description: "High-level business consulting and accurate research" },
  { title: "Advanced Technologies", description: "Cutting-edge development tools and frameworks" },
  { title: "User-Friendly Design", description: "Technically complex yet intuitive solutions" },
  { title: "Cost-Effective", description: "Optimal performance-to-cost ratio" },
];

const securityFeatures = [
  {
    icon: Shield,
    title: "DDoS Protection",
    description: "Network security against sophisticated attacks",
  },
  {
    icon: Server,
    title: "24/7 Monitoring",
    description: "Continuous server and application oversight",
  },
  {
    icon: Zap,
    title: "Traffic Analysis",
    description: "State-of-the-art profiling and anomaly detection",
  },
  {
    icon: Lock,
    title: "256-Bit Encryption",
    description: "Military-grade data security",
  },
];

const intranetFeatures = [
  "Enterprise Social Networking",
  "Business Email Integration",
  "Document Management",
  "Project Collaboration",
  "Calendar & Contact Tools",
  "Customized URL Solutions",
];

const responsiveAdvantages = [
  {
    icon: Smartphone,
    title: "Universal Compatibility",
    description: "Seamless experience across all devices and screen sizes",
  },
  {
    icon: Layers,
    title: "Fluid Grids",
    description: "Dynamic layouts that adapt effortlessly",
  },
  {
    icon: Settings,
    title: "CMS Integration",
    description: "Compatible with Drupal and WordPress",
  },
];

const integrationServices = [
  { icon: Users, title: "Live Chat Tools", color: "from-blue-500 to-cyan-500" },
  { icon: Lock, title: "Payment Gateways", color: "from-green-500 to-emerald-500" },
  { icon: Globe, title: "Social Networks", color: "from-purple-500 to-pink-500" },
  { icon: Target, title: "Geo-Location Services", color: "from-orange-500 to-red-500" },
  { icon: Sparkles, title: "Advertising Platforms", color: "from-indigo-500 to-violet-500" },
];

const databaseBenefits = [
  {
    icon: Globe,
    title: "Real-Time Access",
    description: "Web-based data access from anywhere, anytime",
  },
  {
    icon: Users,
    title: "Permission Levels",
    description: "Multiple accounts with role-based access",
  },
  {
    icon: CloudCog,
    title: "Auto Notifications",
    description: "Email alerts for data changes and updates",
  },
  {
    icon: Zap,
    title: "Cloud Deployment",
    description: "Flexible server-to-cloud solutions",
  },
];

export default function PMS() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/assets/ProjectManagement-banner.jpg)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />

        <ParticleBackground />

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full"
          style={{ opacity, scale }}
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(34, 211, 238, 0.4)",
                    "0 0 40px rgba(34, 211, 238, 0.7)",
                    "0 0 20px rgba(34, 211, 238, 0.4)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="px-6 py-2 bg-primary/10 backdrop-blur-md border border-primary/30 rounded-full"
              >
                <span className="text-sm font-semibold text-primary">
                  Project Management Excellence
                </span>
              </motion.div>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block mb-2 text-white">Deliver Projects</span>
              <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                On Time, Every Time
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Comprehensive solutions that ensure deadlines are met, resources
              are optimized, and teams stay connected
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="text-lg px-10 py-6 rounded-lg shadow-xl hover:shadow-primary/50"
                  data-testid="button-get-started"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Process Improvement - Side by Side with Image */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-background via-card/20 to-background overflow-hidden">
        <AnimatedGridBackground />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <img
                  src="/assets/Consulting2.png"
                  alt="Process Improvement"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-8 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-primary/30 px-4 py-2 rounded-full mb-3">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-semibold">Process Excellence</span>
                  </div>
                </motion.div>
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-primary/90 to-chart-2/90 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 shadow-2xl"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">95%</div>
                  <div className="text-sm text-white/80">Success Rate</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-primary text-sm font-semibold tracking-widest uppercase mb-4"
                >
                  Our Approach
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
                >
                  Process Improvement That Drives Results
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  Business processes are the foundation of every company's
                  performance. We help establish high-performing processes
                  through systematic assessment, prioritization, and targeted
                  improvements that deliver measurable value.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {processFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Risk Analysis - Diagonal Split */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-chart-2/10" />
        
        {/* Diagonal Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-chart-2 transform -skew-y-6" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Comprehensive Risk Analysis
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Decades of experience helping organizations understand and manage
              project risks effectively
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {riskServices.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 hover-elevate"
                data-testid={`risk-service-${index}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <h3 className="font-semibold text-lg">{service}</h3>
                </div>
                <div className="h-1 w-16 bg-gradient-to-r from-primary to-chart-2 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Software Development - Grid Layout */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-background to-card/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Code className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Custom Software Development
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Build software exactly according to your requirements—reducing
              costs and eliminating unnecessary licenses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
                data-testid={`dev-step-${index}`}
              >
                <div className="relative h-full bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover-elevate">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center mb-6"
                  >
                    <step.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{index + 1}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Application Solutions - Alternating Layout */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/assets/Consulting3.png)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Web Application Solutions
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              From strategy to implementation—technically complex yet
              user-friendly solutions with optimal cost-performance ratio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8"
                data-testid={`web-feature-${index}`}
              >
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex flex-wrap gap-4 justify-center">
              <div className="px-6 py-3 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full">
                <span className="text-white font-semibold">Application Development</span>
              </div>
              <div className="px-6 py-3 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full">
                <span className="text-white font-semibold">Re-engineering</span>
              </div>
              <div className="px-6 py-3 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full">
                <span className="text-white font-semibold">Enhancement & Maintenance</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Solutions - Cards Grid */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-card/20 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Enterprise Security Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Secure, scalable infrastructure with cutting-edge protection
              against threats
            </p>
          </motion.div>

          {/* Secure Internet */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold mb-8 text-center">Secure Internet</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 hover-elevate"
                  data-testid={`security-feature-${index}`}
                >
                  <feature.icon className="w-10 h-10 text-primary mb-4" />
                  <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Secure Intranet */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 to-chart-2/10 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <Lock className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4">Secure Intranet</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Enterprise social networking, document management, and
                collaboration tools—all fully secured
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {intranetFeatures.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl p-4"
                  data-testid={`intranet-feature-${index}`}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Responsive Design - Side by Side */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <AnimatedGridBackground />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <Smartphone className="w-16 h-16 text-primary mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                  Responsive Web Design
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Device-independent UI design that delivers optimized website
                  experiences across all platforms—from desktop to mobile.
                </p>
                <div className="space-y-4">
                  {responsiveAdvantages.map((advantage, index) => (
                    <motion.div
                      key={advantage.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center">
                        <advantage.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{advantage.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {advantage.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="/assets/Consulting2.png"
                  alt="Responsive Design"
                  className="w-full rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-3xl" />
                
                {/* Floating Device Icons */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-8 right-8 bg-white dark:bg-card shadow-xl rounded-2xl p-4"
                >
                  <Smartphone className="w-8 h-8 text-primary" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3rd Party Integrations - Icon Grid */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-background to-card/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Puzzle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Seamless Third-Party Integrations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert integration services across API, XML, and white-label
              solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {integrationServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
                data-testid={`integration-service-${index}`}
              >
                <div className="relative bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover-elevate text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold">{service.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Database - Feature Cards */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-card/20 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Database className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Enterprise Database Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic data management expertise with flexible deployment from
              server to cloud
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {databaseBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
                data-testid={`database-benefit-${index}`}
              >
                <div className="relative h-full bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover-elevate">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scrum Training - Full Width */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-chart-2/20" />
        <ParticleBackground />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 mx-auto mb-8"
            >
              <GraduationCap className="w-full h-full text-primary" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Professional Scrum Training
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Master agile methodologies with comprehensive SCRUM training—from
              basic principles to advanced implementation
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 text-left"
              >
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  SCRUM Theory & Values
                </h3>
                <p className="text-muted-foreground">
                  Comprehensive understanding of SCRUM principles and how they
                  contribute to project success
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 text-left"
              >
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Expert Instructors
                </h3>
                <p className="text-muted-foreground">
                  Learn from highly skilled professionals with real-world
                  experience in agile project management
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/assets/Consulting3.png)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-8"
            >
              <Sparkles className="w-20 h-20 text-primary mx-auto" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
                Project Management?
              </span>
            </h2>

            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Partner with us to deliver projects on time, within budget, and
              beyond expectations
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="text-lg px-10 py-6 rounded-lg shadow-xl hover:shadow-primary/50"
                  data-testid="button-contact-cta"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-10 py-6 rounded-lg bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                  data-testid="button-services-cta"
                >
                  Explore All Services
                </Button>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex flex-wrap gap-8 justify-center text-sm text-gray-300"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Enterprise-Grade Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                <span>Proven Expertise</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span>Rapid Delivery</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

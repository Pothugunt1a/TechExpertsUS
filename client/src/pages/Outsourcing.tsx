import { motion, useScroll, useTransform } from "framer-motion";
import { ParticleBackground } from "@/components/ui/particle-background";
import {
  Server,
  Cloud,
  Briefcase,
  TrendingDown,
  TrendingUp,
  Users,
  CheckCircle,
  Target,
  Zap,
  Shield,
  Award,
  BarChart3,
  Globe,
  Boxes,
  CircuitBoard,
  Database,
  Layers,
  Settings,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useRef } from "react";

const challenges = [
  {
    icon: Target,
    title: "Flexible IT Growth",
    description:
      "Build and grow a flexible IT organization to keep pace with business growth, while ensuring that technology investments effectively support business objectives and the evolving processes across functional domains.",
  },
  {
    icon: TrendingDown,
    title: "TCO Management",
    description:
      "Manage TCO in a shrinking IT budget regime, correlate investments with results and deliver quantifiable business benefits.",
  },
  {
    icon: Settings,
    title: "Operational Excellence",
    description:
      "Manage operational issues, like high turnaround time because of decentralized operations and disjoined technology portfolio.",
  },
  {
    icon: Award,
    title: "Skills & Competency",
    description:
      "Access or maintain required competency/skills and focus across the technology stack and future models/evolutions.",
  },
  {
    icon: Zap,
    title: "Competitive Advantage",
    description:
      "Leverage IT investment as a differentiator, while responding to complex macroeconomic and competitive challenges.",
  },
];

const businessValues = [
  {
    icon: Globe,
    title: "Seamless Scaling",
    description:
      "Seamless scaling up of IT organization to increased complexity with uniform service delivery standards by leveraging Tech Expertsus' GNDMT infrastructure",
  },
  {
    icon: Layers,
    title: "Unified IT Solutions",
    description:
      "Scalable, flexible and unified IT solution tied to business service management objectives using Tech Expertsus' Integrated Full Service Play and vendor agnostic approach",
  },
  {
    icon: BarChart3,
    title: "Reduced TCO",
    description:
      "Reduced TCO and correlation of IT to financial objectives leveraging Tech Expertsus' transparent service delivery philosophy and investments in innovation",
  },
  {
    icon: Shield,
    title: "Agile Transformation",
    description:
      "A transformed IT organization capable of meeting increasing environmental challenges, while ensuring agility and improving time to market",
  },
];

const applicationServices = [
  "IT Services",
  "Enterprise Solutions",
  "Business Intelligence and Performance Management",
  "Engineering and Industrial Services",
];

export default function Outsourcing() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Staffing Style */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/*
          IMAGE PLACEHOLDER 1: Hero Background
          Recommended: Modern IT outsourcing, cloud infrastructure, or global network visualization
          Size: 1920x1080 or larger
          Path: /assets/outsourcing-hero-bg.jpg or .gif
        */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-primary/20 via-background to-chart-2/20" />
        </div>

        <ParticleBackground />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-chart-2/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-3 lg:px-4 w-full"
          style={{ opacity, scale }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
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
                    IT Outsourcing Excellence
                  </span>
                </motion.div>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-chart-2 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="block mb-2">Transform Your IT</span>
                <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
                  Into Strategic Value
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Today's dynamic business environment mandates a robust IT
                organization while simultaneously reducing Total Cost of
                Ownership (TCO), enhancing service levels and transforming IT
                into a strategic enabler.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="text-base px-8 py-6 rounded-lg shadow-lg hover:shadow-primary/50"
                      data-testid="button-get-started"
                    >
                      Get Started
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <img
                src="/assets/Outsourcing.png"
                alt="IT Outsourcing Solutions"
                className="w-auto h-auto max-w-full"
              />

              {/* Floating stats cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-md border border-primary/20 rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <TrendingDown className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">50%</p>
                    <p className="text-xs text-muted-foreground">
                      Cost Reduction
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -top-6 -right-6 bg-card/90 backdrop-blur-md border border-primary/20 rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-chart-2/20 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-chart-2" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">Global</p>
                    <p className="text-xs text-muted-foreground">Delivery</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Overview Section with Image */}
      <section className="relative py-10 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

        <div className="relative max-w-7xl mx-auto px-3 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="relative w-full h-64 rounded-2xl overflow-hidden">
                <img
                  src="/assets/Outsourcing.gif"
                  alt="IT Outsourcing Overview"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block mb-4"
              >
                <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                  <span className="text-sm font-semibold text-primary">
                    Our Approach
                  </span>
                </div>
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-primary to-chart-2 bg-clip-text text-transparent">
                  Strategic Outsourcing Solutions
                </span>
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Tech Expertsus' outsourcing value proposition couples IT
                  solutions with business objectives, while delivering certainty
                  in an environment of collaboration, trust, reliability and
                  flexibility to meet customer's changing requirements.
                </p>
                <p>
                  Our full service model, in-depth industry knowledge and
                  technical expertise, robust and repeatable processes, Global
                  Network Delivery Model (GNDM), and expertise at optimizing IT
                  environments in globally scalable environments help us deliver
                  measurable business results and transform our customers' IT
                  investments into reliable and future-proof Business Service
                  Infrastructures.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Challenges Section - Circular Layout */}
      <section className="relative py-10 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />

        <div className="relative max-w-7xl mx-auto px-3 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-sm font-semibold text-primary">
                  Our Focus
                </span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-primary to-chart-2 bg-clip-text text-transparent">
                Client Challenges We Address
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We tackle the most critical challenges facing modern businesses
              with proven strategies and innovative solutions
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 items-center">
              {/* Left Side: Large Circle with Icon - Hidden on mobile */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative hidden lg:flex justify-center lg:justify-end"
              >
                <div className="relative h-[500px] flex items-center gap-6">
                  {/* GIF Image on the left - Bigger */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-72 h-72"
                  >
                    <img
                      src="/assets/Outsourcing5.png"
                      alt="Client Challenges"
                      className="w-full h-full object-contain"
                    />
                  </motion.div>

                  {/* Curved Line (SVG) - Perfect semi-circle arc */}
                  <svg
                    className="absolute -right-20 top-0 w-56 h-full"
                    viewBox="0 0 180 500"
                    style={{ overflow: "visible" }}
                  >
                    <path
                      d="M 30 50 A 180 200 0 0 1 30 450"
                      stroke="hsl(var(--primary))"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      opacity="0.8"
                    />
                  </svg>

                  {/* Numbered Circles along the semi-circle arc - Precisely calculated positions */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    style={{ right: "30px", top: "20px" }}
                    className="absolute w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-xl border-4 border-white z-10"
                  >
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      01
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    style={{ right: "-76px", top: "94px" }}
                    className="absolute w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-xl border-4 border-white z-10"
                  >
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      02
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    style={{ right: "-118px", top: "218px" }}
                    className="absolute w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-xl border-4 border-white z-10"
                  >
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      03
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    style={{ right: "-76px", top: "343px" }}
                    className="absolute w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-xl border-4 border-white z-10"
                  >
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      04
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    style={{ right: "32px", top: "416px" }}
                    className="absolute w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-xl border-4 border-white z-10"
                  >
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      05
                    </span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Side: Challenge Descriptions */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6 md:space-y-10 pl-0 lg:pl-0"
              >
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={challenge.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <challenge.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold mb-1">
                        {challenge.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground">
                        {challenge.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-3 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-sm font-semibold text-primary">
                  Our Services
                </span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-primary to-chart-2 bg-clip-text text-transparent">
                What Tech Expertsus Provides
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent, flexible and scalable full service offerings
              delivered seamlessly through our GNDM with global uniform delivery
              standards
            </p>
          </motion.div>

          <div className="space-y-12">
            {/* Application Outsourcing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
                <div>
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center">
                      <Server className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">
                      Application Outsourcing
                    </h3>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">
                    Streamline your processes by leveraging your application
                    management and IT investments. Our full services model
                    enables you to meet all your needs and business goals with
                    maximum efficiency.
                  </p>
                  <div className="space-y-3">
                    {applicationServices.map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <p className="text-base">{service}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                {/*
                  IMAGE PLACEHOLDER 4: Application Outsourcing
                  Recommended: Application development, coding, software architecture
                  Size: 500x400
                  Path: /assets/app-outsourcing.jpg
                */}
                <div className="w-full h-full min-h-[400px] rounded-xl overflow-hidden">
                  <img
                    src="/assets/Outsourcing2.jpg"
                    alt="Application Outsourcing"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Infrastructure Outsourcing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
                {/*
                  IMAGE PLACEHOLDER 5: Infrastructure Outsourcing
                  Recommended: Data center, servers, network infrastructure
                  Size: 500x400
                  Path: /assets/infra-outsourcing.jpg
                */}
                <div className="w-full h-full min-h-[400px] rounded-xl overflow-hidden order-2 lg:order-1">
                  <img
                    src="/assets/Outsourcing3.jpg"
                    alt="Infrastructure Outsourcing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-chart-2/20 to-primary/20 flex items-center justify-center">
                      <Database className="w-7 h-7 text-chart-2" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">
                      Infrastructure Outsourcing
                    </h3>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">
                    Manage your ever-growing IT needs with a robust and reliable
                    IT infrastructure. Our in-depth industry knowledge and
                    technical expertise helps customers extract the best out of
                    their IT investments by creating a 'Business Effective' IT
                    infrastructure that is not only reliable, but also
                    future-proof.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Robust and reliable infrastructure",
                      "Future-proof technology solutions",
                      "Business-effective IT investments",
                      "Expert technical support",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-chart-2 flex-shrink-0" />
                        <p className="text-base">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Business Process Outsourcing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
                <div>
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center">
                      <Briefcase className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">
                      Business Process Outsourcing
                    </h3>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">
                    Focus on strategic and core functions while we execute your
                    non-core business processes, optimizing business performance
                    to attain value creation. Expect significant lower overall
                    costs with our efficient delivery mechanisms.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Up to 50% reduction in people costs",
                      "Lift-off productivity gains in transition",
                      "Lean, six-sigma and automation deployment",
                      "Up to 30% reduction in total operations cost",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <p className="text-base">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                {/*
                  IMAGE PLACEHOLDER 6: Business Process Outsourcing
                  Recommended: Business processes, workflow automation, team collaboration
                  Size: 500x400
                  Path: /assets/bpo-outsourcing.jpg
                */}
                <div className="w-full h-full min-h-[400px] rounded-xl overflow-hidden">
                  <img
                    src="/assets/Outsourcing4.jpg"
                    alt="Business Process Outsourcing"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Value Section */}
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
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">
                    Value Delivered
                  </span>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-primary to-chart-2 bg-clip-text text-transparent">
                  Business Value
                </span>
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                Measurable outcomes that drive your business forward through
                strategic outsourcing partnerships.
              </p>

              <div className="space-y-6">
                {businessValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                    data-testid={`value-${value.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
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
                  src="/assets/Outsourcing10.jpg"
                  alt="Business Value"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />

                {/* Floating Value Badge */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-primary/20 backdrop-blur-xl border-4 border-primary/30 flex flex-col items-center justify-center shadow-2xl"
                >
                  <TrendingUp className="w-12 h-12 text-primary mb-1" />
                  <span className="text-xs font-semibold text-primary">
                    Value
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Modern with Animation */}
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
              <Sparkles className="w-16 h-16 text-primary mx-auto" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Ready to Optimize Your{" "}
              <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
                IT Operations?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let us help you transform your IT investments into reliable and
              future-proof Business Service Infrastructures. Contact us today to
              get started.
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
                    data-testid="button-contact-outsourcing"
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
                    data-testid="button-view-services"
                  >
                    View All Services
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
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Global Delivery Model</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Proven Track Record</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Transparent Pricing</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

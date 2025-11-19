import { motion, useScroll, useTransform } from "framer-motion";
import { ParticleBackground } from "@/components/ui/particle-background";
import { ServicesCarousel } from "@/components/ui/services-carousel";
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
  Target,
  Users,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/ProjectManagement_1760669441810.png";
import processImage from "@assets/stock_images/business_process_imp_401b7a1a.jpg";

export default function PMS() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  const coreServices = [
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Tech Expertsus delivers fully customized software solutions built precisely around your business requirements. Our tailored systems eliminate the need for multiple third-party tools, remove costly licensing fees, and reduce maintenance overhead.",
      image: "/assets/PMS2.jpg",
    },
    {
      icon: Globe,
      title: "Web Application Development",
      description:
        "As digital interactions continue to expand, businesses increasingly rely on sophisticated web applications for everything from collaboration to commerce. We deliver full-cycle web application development—from strategy and planning to design, development, testing, and deployment.",
      image: "/assets/PMS3.jpg",
    },
    {
      icon: Shield,
      title: "Secure Internet Solutions",
      description:
        "Tech Expertsus provides secure, scalable U.S.-based solutions built for small and medium enterprises. Our private-cloud and security technologies reduce your IT burden, lower ownership costs, and give you unmatched flexibility.",
      image: "/assets/PMS4.jpg",
    },
    {
      icon: Lock,
      title: "Secure Intranet Solutions",
      description:
        "Our secure intranet platform enhances collaboration and communication within your organization through features such as enterprise social networking, business email, online document management, project management tools, and 256-bit encryption.",
      image: "/assets/PMS5.jpg",
    },
    {
      icon: Smartphone,
      title: "Responsive Web Design",
      description:
        "Responsive Web Design (RWD) delivers an optimized experience across all devices—desktops, laptops, tablets, and smartphones. Our designers ensure your site adapts gracefully to any screen size using fluid grids and CSS media queries.",
      image: "/assets/PMS6.jpg",
    },
    {
      icon: Layers,
      title: "3rd Party Integrations",
      description:
        "Every business can benefit from strategic third-party integrations. Tech Expertsus specializes in seamless integration with powerful external applications using APIs, XML, and white-labeling methods.",
      image: "/assets/PMS7.jpg",
    },
    {
      icon: Database,
      title: "Enterprise Database Solutions",
      description:
        "Modern organizations generate massive volumes of data, creating challenges in storage, management, and analysis. Tech Expertsus provides enterprise-grade database solutions designed to boost productivity and reduce operating costs.",
      image: "/assets/PMS8.jpg",
    },
    {
      icon: Users,
      title: "Scrum Training",
      description:
        "Scrum is a lightweight, agile framework that enables teams to deliver high-quality software efficiently. At Tech Expertsus, we offer comprehensive Scrum training led by industry professionals.",
      image: "/assets/PMS9.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Parallax Effect */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(/assets/ProjectManagement-banner.jpg)` }}
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
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              data-testid="heading-hero"
            >
              <span className="block mb-2 text-white">
                Project Management
              </span>
              <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent animate-gradient">
                Solutions
              </span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              data-testid="text-hero-description"
            >
              Streamline resources, monitor performance, and deliver projects on
              time with automated execution
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
                <div
                  className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
                  data-testid="badge-process-excellence"
                >
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">
                    Process Excellence
                  </span>
                </div>
              </div>

              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                data-testid="heading-process-improvement"
              >
                <span className="bg-gradient-to-r from-white via-primary to-chart-2 bg-clip-text text-transparent">
                  Business Process Improvement
                </span>
              </h2>

              <p
                className="text-lg text-muted-foreground mb-8"
                data-testid="text-process-description"
              >
                Processes are the key mechanism by which businesses deliver
                value. We help establish high-performing processes through
                systematic assessment, prioritization, and continuous
                improvement based on strategic imperatives.
              </p>

              <div className="space-y-4">
                {[
                  "Understanding customer performance expectations",
                  "Leveraging qualitative and quantitative analytics",
                  "Targeting improvements with highest value impact",
                  "Building momentum for organizational change",
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
                    <div
                      className="text-3xl font-bold text-primary"
                      data-testid="text-success-rate"
                    >
                      95%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Success Rate
                    </div>
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
              <div
                className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
                data-testid="badge-risk-management"
              >
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  Risk Management
                </span>
              </div>
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              data-testid="heading-risk-analysis"
            >
              <span className="bg-gradient-to-r from-white via-primary to-chart-2 bg-clip-text text-transparent">
                Comprehensive Risk Analysis
              </span>
            </h2>
            <p
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
              data-testid="text-risk-description"
            >
              With decades of experience across multiple industries, Tech
              Expertsus helps organizations adopt formal risk-management
              practices tailored to their unique environments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Portfolio Assessment",
                description: "Portfolio composition and performance assessment",
              },
              {
                icon: TrendingUp,
                title: "Cost & Schedule Analysis",
                description: "Cost and schedule risk analysis",
              },
              {
                icon: Target,
                title: "Risk Optimization",
                description: "Risk management and simulation optimization",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
                data-testid={`card-risk-${index}`}
              >
                <div className="p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 h-full">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-chart-2/30 transition-all"
                  >
                    <service.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    data-testid={`heading-risk-${index}`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-muted-foreground"
                    data-testid={`text-risk-desc-${index}`}
                  >
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Core Services - Carousel Style */}
      <section className="relative py-10 md:py-16 bg-gradient-to-b from-background to-card/30">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 px-3 lg:px-4"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              data-testid="heading-core-services"
            >
              <span className="bg-gradient-to-r from-white via-primary to-chart-2 bg-clip-text text-transparent">
                Our Core Services
              </span>
            </h2>
            <p
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              data-testid="text-services-description"
            >
              Comprehensive project management solutions tailored to your
              business needs
            </p>
          </motion.div>

          <ServicesCarousel services={coreServices} />
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
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              data-testid="heading-cta"
            >
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
                Projects?
              </span>
            </h2>

            <p
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
              data-testid="text-cta-description"
            >
              Let us help you implement efficient project management solutions
              that deliver measurable results
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" data-testid="link-contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
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
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
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

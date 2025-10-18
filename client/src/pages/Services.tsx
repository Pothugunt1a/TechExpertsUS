import { motion, useScroll, useTransform } from "framer-motion";
import { ParticleBackground } from "@/components/ui/particle-background";
import { ServiceCard } from "@/components/ui/service-card";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
import { ClientsScrollingCarousel } from "@/components/ui/clients-scrolling-carousel";
import { Server, Network, ClipboardCheck, Cloud, Database, Shield, Cpu, Globe, BarChart, Users, Zap, Target } from "lucide-react";
import { useRef } from "react";

const mainServices = [
  {
    icon: Server,
    title: "Data Center Management Services",
    description: "Data Center Management in general the 'Server Room' for all your business needs plays a key and vital capacity in reaching out the needs of your business.",
    link: "/services/dms",
    image: "/attached_assets/DataCenterManagement_1760680662236.png",
  },
  {
    icon: Network,
    title: "Infrastructure Consulting Services",
    description: "An intelligent Infrastructure consulting services enables a company to grow in digital business and yields high-end results.",
    link: "/services/ics",
    image: "/attached_assets/InfrastructureConsulting_1760680667042.png",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management Solutions",
    description: "Tech Expertsus project management solutions help companies schedule resources and monitor performance to ensure both deadlines and project requirements are met.",
    link: "/services/pms",
    image: "/attached_assets/ProjectManagement_1760680672108.png",
  },
];

const serviceCategories = [
  {
    title: "Software as a Service (SaaS)",
    description: "Applications, Runtime, Data, Middleware, OSes, Virtualization, Servers, Storage and networking. For: Google Apps, Salesforce, Workday, Concur, Citrix, GoToMeeting, Cisco WebEX",
    icon: Cloud,
  },
  {
    title: "Application Service Providers (ASP)",
    description: "Consumer Acquisition, Appnext, Avazu Mobile DSP, StrikeAd by Sizmek, AppLift, Mobusi, Smaato, Liftoff, Trademob, PocketMath, Merchenta, Jampp, Splicky, MobFox DSP by Matomy, Fiksu",
    icon: Server,
  },
  {
    title: "Virtualization",
    description: "KVM, VMware Workstation, VMware Fusion, Hyper-V, Windows Virtual PC, Xen, VirtualBox, Parallels Workstation, QEMU, Adeos, Mac-on-Linux, Win4Lin Pro, Egenera vBlade",
    icon: Cpu,
  },
  {
    title: "Cloud Computing",
    description: "AppFog, BitNami, Cloudify, ConPaaS, ElasticBox, Gondor, Google AppEngine, Azure, Uhuru, PaaS, Stackato, Pydra, Oracle, EngineYard, Cumulogic, Heroku, ScaleMatrix",
    icon: Globe,
  },
  {
    title: "Enterprise Resource Planning (ERP)",
    description: "WebERP, Openbravo, Postbooks, Tryton, SQL-Ledger, Odoo, Adaxa Suite, HeliumV, LedgerSMB, JFire, Kuali, ERPNEXT, Dolibarr, Compiere, ERP5, FrontAccounting, Scipio ERP",
    icon: Database,
  },
  {
    title: "Customer Relations Management",
    description: "ConnectWise PSA, Desk.com, Zoho CRM, Vtiger CRM, TeamWox, SuiteCRM, Base CRM, Dolibarr, Casengo, Dynamics CRM, SugarCRM, Streak, Salesforce.com, WORKetc, SuperOffice CRM",
    icon: Users,
  },
  {
    title: "Infrastructure as a Service (IaaS)",
    description: "Amazon Web Services, Windows Azure, Google Compute Engine, Rackspace, IBM SmartCloud, Enterprise, HP Enterprise Converged Infrastructure, Cisco Metapod",
    icon: Shield,
  },
  {
    title: "Internet of Things (IoT)",
    description: "XOBXOB, Lab of Things, Konekt, Temboo, Open Sensors, Smart Living, Google Cloud Platform, RTI, ThingWorx, Cisco, GE Predix, Verizon, ThingSpace, IBM BlueMix",
    icon: Network,
  },
  {
    title: "Big Data",
    description: "Apache Hadoop, Julia, SAS, Python, SQL, Scala, MATLAB, HiveQL, Pig Latin, Go, Kafka, Storm, Hive, Octave, Java",
    icon: BarChart,
  },
];

const whyChooseUs = [
  {
    icon: Target,
    title: "Expert Team",
    description: "Highly skilled professionals with years of industry experience",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnaround time without compromising quality",
  },
  {
    icon: Users,
    title: "24/7 Support",
    description: "Round-the-clock support for all your technical needs",
  },
  {
    icon: Shield,
    title: "Secure Solutions",
    description: "Enterprise-grade security in all our implementations",
  },
];

const testimonials = [
  {
    content: "Tech Expertsus has transformed our IT infrastructure with their innovative solutions. Their team's expertise and dedication are unmatched.",
    author: "John Doe",
    role: "CTO, Fortune 500 Company",
  },
  {
    content: "Working with Tech Expertsus has been a game-changer for our business. They deliver exceptional results consistently.",
    author: "Jane Smith",
    role: "IT Director, Global Enterprise",
  },
  {
    content: "The professionalism and technical excellence of Tech Expertsus team exceeded our expectations. Highly recommended!",
    author: "Mike Johnson",
    role: "VP of Operations, Tech Startup",
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function Services() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <ParticleBackground />

        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"
          style={{ opacity }}
        />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-chart-2/20 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.3, 0.5],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center"
          style={{ opacity, scale, y }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              Our <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">Services</span>
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-4xl text-muted-foreground max-w-3xl mx-auto font-semibold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              We Are Professional
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 100 }}
              className="mt-8 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"
            />
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Services Overview with 3D Transform */}
      <section className="relative py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome To Our <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">Tech Expertsus Services</span>
            </h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.9 }}
            >
              Tech Expertsus provides IT Infrastructure Managed Services to help design secure, Strategize, implement scalable and reliable communications and IT infrastructure. We are specialized in Application management services, Server Management and Storages services.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {mainServices.map((service, index) => (
              <motion.div 
                key={service.title} 
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 5,
                  z: 50
                }}
                style={{ perspective: 1000 }}
              >
                <ServiceCard {...service} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Categories with Morphing Cards */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-card/20 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Our Service Categories</h2>
            <p className="text-2xl text-muted-foreground">Comprehensive solutions for every need</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -12, 
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.02
                }}
                className="group relative"
                style={{ transformStyle: "preserve-3d" }}
                data-testid={`category-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="relative h-full bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                  {/* Animated corner accents */}
                  <motion.div
                    className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100"
                    initial={false}
                    whileHover={{
                      scale: [1, 1.3, 1],
                      rotate: [0, 180, 0],
                    }}
                    transition={{ duration: 0.8 }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-chart-2/30 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100"
                    initial={false}
                    whileHover={{
                      scale: [1, 1.3, 1],
                      rotate: [0, -180, 0],
                    }}
                    transition={{ duration: 0.8 }}
                  />

                  <div className="relative z-10">
                    <motion.div 
                      className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center mb-6"
                      whileHover={{ 
                        scale: 1.15,
                        rotate: 360
                      }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                      <category.icon className="w-10 h-10 text-primary" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-lg">{category.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us with Magnetic Effect */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Animated background pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "40px 40px"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-2xl text-muted-foreground">Excellence in every aspect of our service</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -15, 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group relative"
              >
                <div className="relative h-full bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/40 transition-all duration-500 overflow-hidden">
                  {/* Animated shimmer effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />

                  {/* Animated background gradient */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 via-chart-2/10 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center mb-6 group-hover:shadow-2xl group-hover:shadow-primary/40"
                      whileHover={{ 
                        rotate: [0, -10, 10, -10, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-10 h-10 text-primary" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-lg">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Clients - Scrolling Carousel */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Our Clients</h2>
            <p className="text-2xl text-muted-foreground">Trusted by industry leaders</p>
          </motion.div>

          <div className="relative">
            {/* Top horizontal triangular borders */}
            <svg 
              className="absolute left-0 right-0 w-full z-10" 
              height="18" 
              viewBox="0 0 1200 18" 
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ top: '-20px' }}
            >
              <defs>
                <linearGradient id="topLeftGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="topRightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
                </linearGradient>
              </defs>
              {/* Left triangle - starts thick at left, tapers to point at middle, straight bottom */}
              <polygon 
                points="0,0 0,18 600,18" 
                fill="url(#topLeftGradient)"
              />
              {/* Right triangle - starts at middle point, expands to thick at right */}
              <polygon 
                points="600,9 1200,18 1200,0" 
                fill="url(#topRightGradient)"
                opacity="0"
              />
            </svg>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ClientsScrollingCarousel />
            </motion.div>

            {/* Bottom horizontal triangular borders */}
            <svg 
              className="absolute left-0 right-0 w-full z-10" 
              height="18" 
              viewBox="0 0 1200 18" 
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ bottom: '-20px' }}
            >
              <defs>
                <linearGradient id="bottomLeftGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="bottomRightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
                </linearGradient>
              </defs>
              {/* Left triangle - starts thick at left, tapers to point at middle */}
              <polygon 
                points="0,18 0,0 600,9" 
                fill="url(#bottomLeftGradient)"
                opacity="0"
              />
              {/* Right triangle - starts at middle point, expands to thick at right, straight top */}
              <polygon 
                points="600,0 1200,0 1200,18" 
                fill="url(#bottomRightGradient)"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-card/20 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-2xl text-muted-foreground">What our clients say about us</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TestimonialCarousel testimonials={testimonials} />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
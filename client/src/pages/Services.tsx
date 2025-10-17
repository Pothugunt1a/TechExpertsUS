import { motion } from "framer-motion";
import { ParticleBackground } from "@/components/ui/particle-background";
import { ServiceCard } from "@/components/ui/service-card";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
import { ClientLogo } from "@/components/ui/client-logo";
import {
  Server,
  Network,
  ClipboardCheck,
  Cloud,
  Database,
  Shield,
  Cpu,
  Globe,
  BarChart,
  Users,
  Zap,
  Target,
} from "lucide-react";

const mainServices = [
  {
    icon: Server,
    title: "Data Center Management Services",
    description:
      "Data Center Management in general the 'Server Room' for all your business needs plays a key and vital capacity in reaching out the needs of your business.",
    link: "/services/dms",
    image: "/assets/DataCenterManagement.png",
  },
  {
    icon: Network,
    title: "Infrastructure Consulting Services",
    description:
      "An intelligent Infrastructure consulting services enables a company to grow in digital business and yields high-end results.",
    link: "/services/ics",
    image: "/attached_assets/InfrastructureConsulting_1760679602182.png",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management Solutions",
    description:
      "Tech Expertsus project management solutions help companies schedule resources and monitor performance to ensure both deadlines and project requirements are met.",
    link: "/services/pms",
    image: "/attached_assets/ProjectManagement_1760679609231.png",
  },
];

const serviceCategories = [
  {
    title: "Software as a Service (SaaS)",
    description:
      "Applications, Runtime, Data, Middleware, OSes, Virtualization, Servers, Storage and networking.",
    technologies:
      "Google Apps, Salesforce, Workday, Concur, Citrix, GoToMeeting, Cisco WebEX",
    icon: Cloud,
  },
  {
    title: "Application Service Providers (ASP)",
    description:
      "Consumer Acquisition and mobile advertising platforms for comprehensive app marketing solutions.",
    technologies:
      "Appnext, Avazu Mobile DSP, StrikeAd by Sizmek, AppLift, Mobusi, Smaato, Liftoff, Trademob, PocketMath, Merchenta, Jampp, Splicky, MobFox DSP by Matomy, Fiksu",
    icon: Globe,
  },
  {
    title: "Virtualization",
    description:
      "Complete virtualization solutions for diverse computing environments and platforms.",
    technologies:
      "KVM, VMware Workstation, VMware Fusion, Hyper-V, Windows Virtual PC, Xen, VirtualBox, Parallels Workstation, QEMU, Adeos, Mac-on-Linux, Win4Lin Pro, Egenera vBlade",
    icon: Cpu,
  },
  {
    title: "Cloud Computing",
    description:
      "Scalable cloud platform solutions for modern application deployment and management.",
    technologies:
      "AppFog, BitNami, Cloudify, ConPaaS, ElasticBox, Gondor, Google AppEngine, Azure, Uhuru, PaaS, Stackato, Pydra, Oracle, EngineYard, Cumulogic, Heroku, ScaleMatrix",
    icon: Server,
  },
  {
    title: "Enterprise Resource Planning (ERP)",
    description:
      "Comprehensive ERP solutions for business process management and automation.",
    technologies:
      "WebERP, Openbravo, Postbooks, Tryton, SQL-Ledger, Odoo, Adaxa Suite, HeliumV, LedgerSMB, JFire, Kuali, ERPNEXT, Dolibarr, Compiere, ERP5, FrontAccounting, Scipio ERP",
    icon: Database,
  },
  {
    title: "Customer Relations Management",
    description:
      "Advanced CRM platforms for customer engagement and relationship optimization.",
    technologies:
      "ConnectWise PSA, Desk.com, Zoho CRM, Vtiger CRM, TeamWox, SuiteCRM, Base CRM, Dolibarr, Casengo, Dynamics CRM, SugarCRM, Streak, Salesforce.com, WORKetc, SuperOffice CRM",
    icon: Users,
  },
  {
    title: "Infrastructure as a Service (IaaS)",
    description:
      "Enterprise-grade infrastructure solutions for scalable cloud deployments.",
    technologies:
      "Amazon Web Services, Windows Azure, Google Compute Engine, Rackspace, IBM SmartCloud, Enterprise, HP Enterprise Converged Infrastructure, Cisco Metapod",
    icon: Shield,
  },
  {
    title: "Internet of Things (IoT)",
    description:
      "Cutting-edge IoT platforms for connected device ecosystems and smart solutions.",
    technologies:
      "XOBXOB, Lab of Things, Konekt, Temboo, Open Sensors, Smart Living, Google Cloud Platform, RTI, ThingWorx, Cisco, GE Predix, Verizon, ThingSpace, IBM BlueMix",
    icon: Network,
  },
  {
    title: "Big Data",
    description:
      "Powerful big data tools and languages for analytics and data processing.",
    technologies:
      "Apache Hadoop, Julia, SAS, Python, SQL, Scala, MATLAB, HiveQL, Pig Latin, Go, Kafka, Storm, Hive, Octave, Java",
    icon: BarChart,
  },
];

const whyChooseUs = [
  {
    icon: Target,
    title: "Expert Team",
    description:
      "Highly skilled professionals with years of industry experience",
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
    content:
      "Tech Expertsus has transformed our IT infrastructure with their innovative solutions. Their team's expertise and dedication are unmatched.",
    author: "John Doe",
    role: "CTO, Fortune 500 Company",
  },
  {
    content:
      "Working with Tech Expertsus has been a game-changer for our business. They deliver exceptional results consistently.",
    author: "Jane Smith",
    role: "IT Director, Global Enterprise",
  },
  {
    content:
      "The professionalism and technical excellence of Tech Expertsus team exceeded our expectations. Highly recommended!",
    author: "Mike Johnson",
    role: "VP of Operations, Tech Startup",
  },
];

const clients = [
  "Microsoft",
  "Amazon",
  "Google",
  "IBM",
  "Oracle",
  "SAP",
  "Cisco",
  "Dell",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <ParticleBackground />

        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Our{" "}
              <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent animate-gradient">
                Services
              </span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-3xl text-muted-foreground max-w-3xl mx-auto font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              We Are Professional
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome To Our{" "}
              <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                Tech Expertsus Services
              </span>
            </h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Tech Expertsus provides IT Infrastructure Managed Services to help
              design secure, Strategize, implement scalable and reliable
              communications and IT infrastructure. We are specialized in
              Application management services, Server Management and Storages
              services.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {mainServices.map((service, index) => (
              <motion.div key={service.title} variants={itemVariants}>
                <ServiceCard {...service} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-card/20 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Service Categories
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive technology solutions across all platforms
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group relative"
                data-testid={`category-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="relative h-full bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(circle at top right, rgba(34, 211, 238, 0.15), transparent 50%)",
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 p-8">
                    <div className="flex items-start gap-6">
                      {/* Icon */}
                      <motion.div
                        className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary/30 to-chart-2/30 backdrop-blur-sm flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-all duration-500"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <category.icon className="w-8 h-8 text-primary" />
                      </motion.div>

                      {/* Text Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-2xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-chart-2 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {category.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {category.description}
                        </p>

                        {/* Technologies Badge List */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {category.technologies
                            .split(",")
                            .slice(0, 6)
                            .map((tech, i) => (
                              <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                              >
                                {tech.trim()}
                              </motion.span>
                            ))}
                          {category.technologies.split(",").length > 6 && (
                            <span className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full">
                              +{category.technologies.split(",").length - 6}{" "}
                              more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.2), transparent)",
                      backgroundSize: "200% 100%",
                    }}
                    animate={{
                      backgroundPosition: ["200% 0", "-200% 0"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-muted-foreground">
              Excellence in every aspect of our service
            </p>
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
                whileHover={{ y: -12, scale: 1.03 }}
                className="group relative"
              >
                <div className="relative h-full bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 via-chart-2/10 to-transparent opacity-0 group-hover:opacity-100"
                    initial={false}
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-primary/30"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-card/20 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-muted-foreground">
              What our clients say about us
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TestimonialCarousel testimonials={testimonials} />
          </motion.div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="relative py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Clients</h2>
            <p className="text-xl text-muted-foreground">
              Trusted by industry leaders
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {clients.map((client, index) => (
              <motion.div key={client} variants={itemVariants}>
                <ClientLogo name={client} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

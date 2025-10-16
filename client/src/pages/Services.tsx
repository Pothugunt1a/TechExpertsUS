import { motion } from "framer-motion";
import { ParticleBackground } from "@/components/ui/particle-background";
import { ServiceCard } from "@/components/ui/service-card";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
import { ClientLogo } from "@/components/ui/client-logo";
import { Server, Network, ClipboardCheck, Cloud, Database, Shield, Cpu, Globe, BarChart } from "lucide-react";

const mainServices = [
  {
    icon: Server,
    title: "Data Center Management Services",
    description: "Data Center Management in general the 'Server Room' for all your business needs plays a key and vital capacity in reaching out the needs of your business.",
    link: "/services/dms",
  },
  {
    icon: Network,
    title: "Infrastructure Consulting Services",
    description: "An intelligent Infrastructure consulting services enables a company to grow in digital business and yields high-end results.",
    link: "/services/ics",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management Solutions",
    description: "Tech Expertsus project management solutions help companies schedule resources and monitor performance to ensure both deadlines and project requirements are met.",
    link: "/services/pms",
  },
];

const serviceCategories = [
  {
    title: "Software as a Service (SaaS)",
    description: "Applications, Runtime, Data, Middleware, OSes, Virtualization, Servers, Storage and networking.",
    icon: Cloud,
  },
  {
    title: "Virtualization",
    description: "KVM, VMware Workstation, VMware Fusion, Hyper-V, Windows Virtual PC, Xen, VirtualBox, and more.",
    icon: Cpu,
  },
  {
    title: "Cloud Computing",
    description: "AppFog, BitNami, Cloudify, Google AppEngine, Azure, Heroku, ScaleMatrix and comprehensive cloud solutions.",
    icon: Globe,
  },
  {
    title: "Enterprise Resource Planning (ERP)",
    description: "WebERP, Openbravo, Odoo, Compiere, ERP5, FrontAccounting and enterprise management solutions.",
    icon: Database,
  },
  {
    title: "Infrastructure as a Service (IaaS)",
    description: "Amazon Web Services, Windows Azure, Google Compute Engine, Rackspace, IBM SmartCloud.",
    icon: Shield,
  },
  {
    title: "Big Data",
    description: "Apache Hadoop, Julia, SAS, Python, SQL, Scala, MATLAB, Kafka, Storm, Hive and analytics solutions.",
    icon: BarChart,
  },
];

const testimonials = [
  {
    content: "Tech Expertsus has transformed our IT infrastructure with their innovative solutions. Their team's expertise and dedication are unmatched.",
    author: "John Doe",
    role: "Customer",
  },
  {
    content: "Working with Tech Expertsus has been a game-changer for our business. They deliver exceptional results consistently.",
    author: "Jane Smith",
    role: "Customer",
  },
  {
    content: "The professionalism and technical excellence of Tech Expertsus team exceeded our expectations. Highly recommended!",
    author: "Mike Johnson",
    role: "Customer",
  },
];

const clients = [
  "Microsoft", "Amazon", "Google", "IBM",
  "Oracle", "SAP", "Cisco", "Dell"
];

export default function Services() {
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
              Our <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              We Are Professional
            </p>
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
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Welcome To Our Tech Expertsus Services</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Tech Expertsus provides IT Infrastructure Managed Services to help design secure, Strategize, implement scalable and reliable communications and IT infrastructure. We are specialized in Application management services, Server Management and Storages services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Service Categories</h2>
            <p className="text-xl text-muted-foreground">Comprehensive solutions for every need</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                data-testid={`category-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center mb-6">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-muted-foreground">What our clients say about us</p>
          </motion.div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Our Clients */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Clients</h2>
            <p className="text-xl text-muted-foreground">Trusted by industry leaders</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <ClientLogo key={client} name={client} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

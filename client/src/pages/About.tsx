import { motion, useScroll, useTransform } from "framer-motion";
import { ParticleBackground } from "@/components/ui/particle-background";
import { AnimatedGridBackground } from "@/components/ui/animated-grid-background";
import { FloatingShapes } from "@/components/ui/floating-shapes";
import { ClientsScrollingCarousel } from "@/components/ui/clients-scrolling-carousel";
import { 
  Target, Eye, Heart, Users, Lightbulb, Award, 
  TrendingUp, MessageSquare, Star, Shield, Handshake,
  Globe, Calendar, MapPin, CheckCircle2, Zap, ArrowRight,
  Building2, Rocket, Sparkles, Briefcase, Code
} from "lucide-react";
import { useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const stats = [
  { number: "2012", label: "Founded", icon: Calendar },
  { number: "126+", label: "Happy Clients", icon: Users },
  { number: "320+", label: "Staffing Placed", icon: TrendingUp },
  { number: "2", label: "Global Offices", icon: Globe },
];

const coreValues = [
  { 
    icon: Handshake, 
    title: "Commitment", 
    description: "Dedicated to excellence in everything we do"
  },
  { 
    icon: Shield, 
    title: "Integrity", 
    description: "Operating with honesty and transparency"
  },
  { 
    icon: Award, 
    title: "Reputation", 
    description: "Building trust through consistent delivery"
  },
  { 
    icon: CheckCircle2, 
    title: "Honesty", 
    description: "Open and truthful in all our dealings"
  },
  { 
    icon: Heart, 
    title: "Quality Relationships", 
    description: "Fostering lasting partnerships"
  },
  { 
    icon: Users, 
    title: "Helping Society", 
    description: "Making a positive impact"
  },
  { 
    icon: Star, 
    title: "Trust", 
    description: "Earning confidence through reliability"
  },
];

const whatWeDoServices = [
  {
    icon: MessageSquare,
    title: "Effective Communication",
    description: "We convey relevant information in an understandable, timely and logical fashion. We understand the needs of the clients, solicit feedback, and are always prepared for every communication need."
  },
  {
    icon: Star,
    title: "Client Satisfaction",
    description: "Our primary focus is ensuring complete client satisfaction through quality service delivery and long-term commitment."
  },
  {
    icon: TrendingUp,
    title: "Performance Orientation",
    description: "We maintain high performance standards in all our projects and continuously strive for excellence."
  },
  {
    icon: Briefcase,
    title: "Resource Consciousness",
    description: "We optimize resource utilization to deliver maximum value to our clients while maintaining cost-effectiveness."
  },
  {
    icon: Users,
    title: "Employee Focus",
    description: "We believe our people are our greatest asset and invest in their growth and development."
  },
  {
    icon: Lightbulb,
    title: "Adaptability",
    description: "We quickly adapt to changing market conditions and client requirements with innovative solutions."
  },
];

const skills = [
  { label: "Client Satisfaction", percentage: 98, icon: Star },
  { label: "Performance Orientation", percentage: 96, icon: TrendingUp },
  { label: "Adaptability", percentage: 97, icon: Lightbulb },
  { label: "Employee Focus", percentage: 100, icon: Users },
  { label: "Resource Consciousness", percentage: 98, icon: Briefcase },
  { label: "Staffing Solutions", percentage: 96, icon: Code },
];

export default function About() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card/20 to-background">
        <FloatingShapes />
        <ParticleBackground />

        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center"
          style={{ y, opacity }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
                Since 2012
              </span>
            </motion.div>

            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="block text-gray-900 dark:text-white mb-2">About</span>
              <span className="block bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Tech Expertsus
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Technology Expertise • Innovative Solutions • Lasting Partnerships
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-2 text-primary/60">
            <span className="text-xs font-semibold tracking-widest">SCROLL</span>
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
              <motion.div 
                className="w-1.5 h-1.5 bg-primary rounded-full"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-10 md:py-16 bg-gradient-to-b from-background to-card/20">
        <AnimatedGridBackground />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center group"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-chart-2/20 mb-6 group-hover:from-primary/30 group-hover:to-chart-2/30 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <stat.icon className="w-10 h-10 text-primary" />
                </motion.div>
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground font-semibold tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Tech Experts USA - Alternating Image/Text Layout */}
      <section className="relative py-10 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-chart-2/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Why Tech Experts USA
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto" />
          </motion.div>

          {/* First Row - Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary">Our Culture</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Think Outside the Box
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Tech Expertsus, you are encouraged to think out of the box. We enable our colleagues to explore their ideas by creating a collaborative and entrepreneurial environment.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                If you consider yourself ready for a challenging but rewarding career, at Tech Expertsus, you will feel right at home.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-chart-2/30 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Lightbulb className="w-8 h-8 text-primary" />
                </motion.div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Innovation First</p>
                  <p className="text-sm text-muted-foreground">Collaborative Environment</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-96 rounded-3xl overflow-hidden">
                <img
                  src="/assets/About.png"
                  alt="Innovation at Tech Expertsus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Second Row - Image Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative h-96 rounded-3xl overflow-hidden">
                <img
                  src="/assets/Consulting1.gif"
                  alt="Excellence at Tech Expertsus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 order-1 lg:order-2"
            >
              <div className="inline-block px-4 py-2 bg-chart-2/10 border border-chart-2/20 rounded-full mb-4">
                <span className="text-sm font-semibold text-chart-2">Our Team</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Excellence & Passion
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're proud of the outstanding work that we deliver to our clients, and most importantly, we're proud of our people who make it happen.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                It takes extreme talent, passion for your work and an ability to inspire others to excel here. The drive of a rapidly evolving team, combined with driven individuals all focused on the final goal are vital factors for delivering exceptional IT projects.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-chart-2/30 to-primary/30 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: -10 }}
                >
                  <Award className="w-8 h-8 text-chart-2" />
                </motion.div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Talent & Passion</p>
                  <p className="text-sm text-muted-foreground">Inspiring Excellence</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Third Row - Timeline Style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Where We Are",
                description: "Corporate Headquarters in Argyle, TX 76226, United States with offshore office in Hyderabad, India. Our development and technical teams support clients globally.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Calendar,
                title: "Our Journey",
                description: "Tech Expertsus started in 2012 and has been successfully supporting clients ever since, growing to become a preferred IT partner across various industry verticals.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Rocket,
                title: "Our Foundation",
                description: "Founded on three basic principles: Technology expertise, Innovative solutions, and long-lasting partnership with customers - the pillars of our success.",
                gradient: "from-orange-500 to-red-500"
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative group"
                data-testid={`info-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-chart-2/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative h-full p-8 bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl border border-primary/10 rounded-3xl hover:border-primary/30 transition-all duration-300">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} bg-opacity-20 flex items-center justify-center mb-6`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Heritage Statement - Full Width Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mt-20 p-12 md:p-16 bg-gradient-to-br from-primary/10 via-card/40 to-chart-2/10 backdrop-blur-xl border border-primary/20 rounded-3xl text-center overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 opacity-5"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(34, 211, 238, 0.3) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}
            />
            <div className="relative z-10">
              <Building2 className="w-16 h-16 text-primary mx-auto mb-6" />
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-5xl mx-auto">
                Established in 2012, Tech Expertsus Technologies has grown to be the preferred IT partner for industry leaders across various verticals. We have an enviable reputation for delivering independent, practical, value-priced advice and services to our chosen market sectors.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision - Large Side-by-Side Cards with Background Images */}
      <section className="relative py-10 md:py-16 bg-gradient-to-b from-card/10 to-background">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Commitment to You
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
              data-testid="card-mission"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/40 to-chart-2/40 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative h-full bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl border border-primary/20 rounded-3xl overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="/assets/Consulting3.png"
                    alt="Our Mission"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="p-12">
                  <motion.div 
                    className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/30 to-chart-2/30 flex items-center justify-center mb-8"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Target className="w-12 h-12 text-primary" />
                  </motion.div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Mission</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Tech Expertsus focuses on high quality standards to provide professional consulting services and viable resources to our clients, ensuring complete client satisfaction and long-term commitment.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We customize employment solutions for our customers and employees, with each unique partnership built on quality relationships and our core values.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
              data-testid="card-vision"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-chart-2/40 to-primary/40 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative h-full bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl border border-chart-2/20 rounded-3xl overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="/assets/Consulting2.png"
                    alt="Our Vision"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="p-12">
                  <motion.div 
                    className="w-24 h-24 rounded-3xl bg-gradient-to-br from-chart-2/30 to-primary/30 flex items-center justify-center mb-8"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <Eye className="w-12 h-12 text-chart-2" />
                  </motion.div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Vision</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    To explore new opportunities and ideas to enhance quality-based contributions that benefit our clients and to be recognized as a global leader in IT Services and Technology solutions.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We fulfill customer needs while utilizing our knowledge and experience with a great sense of urgency every time.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* A Passion for Innovation - Full Width with Background */}
      <section className="relative py-10 md:py-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/OurCoreValues.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
            data-testid="section-innovation"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1 }}
              className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-primary/40 to-chart-2/40 mb-8"
            >
              <Zap className="w-14 h-14 text-white" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white">
              A Passion for Innovation<br />A Commitment to Excellence
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              The drive of a rapidly evolving team, combined with driven individuals all focused on the final goal with no leeway for a quality dip are vital factors for the delivery of IT projects to meet the demands of the day.
            </p>
            <p className="text-lg text-white/80 italic max-w-3xl mx-auto">
              At Tech Expertsus we passionately believe that real change only comes about through a combination of the right ideas and effective implementation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values - Enhanced Grid */}
      <section className="relative py-10 md:py-16 overflow-hidden bg-gradient-to-b from-background to-card/20">
        <FloatingShapes />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Principles that guide everything we do
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
                data-testid={`value-${value.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-chart-2/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative h-full p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/10 rounded-2xl group-hover:border-primary/30 transition-all duration-300">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-chart-2/30 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do - Diagonal Split Layout (like Staffing page) */}
      <section className="relative py-10 md:py-16">
        <AnimatedGridBackground />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">What We Do</h2>
            <p className="text-xl text-muted-foreground">Excellence in every dimension</p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto mt-6" />
          </motion.div>

          <div className="space-y-0">
            {/* Row 1 - Image Left, Two Content Right */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative -mx-6 lg:-mx-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-0 overflow-hidden">
                <div className="relative h-[250px] lg:h-[280px] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 75% 100%, 0 100%)",
                      backgroundImage: "url(/assets/Staffing3.png)",
                    }}
                  />
                </div>

                <div className="flex flex-col">
                  {/* Content Item 1 */}
                  <div className="relative overflow-hidden bg-white dark:bg-card/50 backdrop-blur-sm p-6 lg:p-8 flex flex-col justify-center flex-1 group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/5 via-chart-2/5 to-primary/5 opacity-0 group-hover:opacity-100"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />

                    <div className="relative z-10 flex items-start gap-4">
                      <motion.div
                        className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
                      >
                        <MessageSquare className="w-6 h-6 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg lg:text-xl font-bold mb-2">Effective Communication</h3>
                        <p className="text-muted-foreground text-sm">
                          We convey relevant information in an understandable, timely and logical fashion, understanding client needs and soliciting feedback.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content Item 2 */}
                  <div className="relative overflow-hidden bg-white dark:bg-card/50 backdrop-blur-sm p-6 lg:p-8 flex flex-col justify-center flex-1 group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-l from-chart-2/5 via-primary/5 to-chart-2/5 opacity-0 group-hover:opacity-100"
                      animate={{ x: ["100%", "-100%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 }}
                    />

                    <div className="relative z-10 flex items-start gap-4">
                      <motion.div
                        className="w-12 h-12 rounded-lg bg-gradient-to-br from-chart-2/20 to-primary/20 flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ y: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 } }}
                      >
                        <Star className="w-6 h-6 text-chart-2" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg lg:text-xl font-bold mb-2">Client Satisfaction</h3>
                        <p className="text-muted-foreground text-sm">
                          Our primary focus is ensuring complete client satisfaction through quality service delivery and long-term commitment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Row 2 - Two Content Left, Image Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative -mx-6 lg:-mx-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-0 overflow-hidden">
                <div className="flex flex-col">
                  {/* Content Item 3 */}
                  <div className="relative overflow-hidden bg-white dark:bg-card/50 backdrop-blur-sm p-6 lg:p-8 flex flex-col justify-center flex-1 group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/5 via-chart-2/5 to-primary/5 opacity-0 group-hover:opacity-100"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />

                    <div className="relative z-10 flex items-start gap-4">
                      <motion.div
                        className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
                      >
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg lg:text-xl font-bold mb-2">Performance Orientation</h3>
                        <p className="text-muted-foreground text-sm">
                          We maintain high performance standards in all our projects and continuously strive for excellence.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content Item 4 */}
                  <div className="relative overflow-hidden bg-white dark:bg-card/50 backdrop-blur-sm p-6 lg:p-8 flex flex-col justify-center flex-1 group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-l from-chart-2/5 via-primary/5 to-chart-2/5 opacity-0 group-hover:opacity-100"
                      animate={{ x: ["100%", "-100%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 }}
                    />

                    <div className="relative z-10 flex items-start gap-4">
                      <motion.div
                        className="w-12 h-12 rounded-lg bg-gradient-to-br from-chart-2/20 to-primary/20 flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ y: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 } }}
                      >
                        <Briefcase className="w-6 h-6 text-chart-2" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg lg:text-xl font-bold mb-2">Resource Consciousness</h3>
                        <p className="text-muted-foreground text-sm">
                          We optimize resource utilization to deliver maximum value to our clients while maintaining cost-effectiveness.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative h-[250px] lg:h-[280px] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%)",
                      backgroundImage: "url(/assets/Consulting8.png)",
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Row 3 - Image Left, Two Content Right */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative -mx-6 lg:-mx-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-0 overflow-hidden">
                <div className="relative h-[250px] lg:h-[280px] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 75% 100%, 0 100%)",
                      backgroundImage: "url(/assets/Outsourcing.gif)",
                    }}
                  />
                </div>

                <div className="flex flex-col">
                  {/* Content Item 5 */}
                  <div className="relative overflow-hidden bg-white dark:bg-card/50 backdrop-blur-sm p-6 lg:p-8 flex flex-col justify-center flex-1 group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/5 via-chart-2/5 to-primary/5 opacity-0 group-hover:opacity-100"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />

                    <div className="relative z-10 flex items-start gap-4">
                      <motion.div
                        className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
                      >
                        <Users className="w-6 h-6 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg lg:text-xl font-bold mb-2">Employee Focus</h3>
                        <p className="text-muted-foreground text-sm">
                          We believe our people are our greatest asset and invest in their growth and development.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content Item 6 */}
                  <div className="relative overflow-hidden bg-white dark:bg-card/50 backdrop-blur-sm p-6 lg:p-8 flex flex-col justify-center flex-1 group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-l from-chart-2/5 via-primary/5 to-chart-2/5 opacity-0 group-hover:opacity-100"
                      animate={{ x: ["100%", "-100%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 }}
                    />

                    <div className="relative z-10 flex items-start gap-4">
                      <motion.div
                        className="w-12 h-12 rounded-lg bg-gradient-to-br from-chart-2/20 to-primary/20 flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ y: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 } }}
                      >
                        <Lightbulb className="w-6 h-6 text-chart-2" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg lg:text-xl font-bold mb-2">Adaptability</h3>
                        <p className="text-muted-foreground text-sm">
                          We quickly adapt to changing market conditions and client requirements with innovative solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section - Enhanced with Icons */}
      <section className="relative py-10 md:py-16 bg-gradient-to-b from-card/20 to-background">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Our Skills & Expertise</h3>
            <p className="text-xl text-muted-foreground">Proven excellence across all dimensions</p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto mt-6" />
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                  data-testid={`skill-${skill.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <skill.icon className="w-5 h-5 text-primary" />
                      </motion.div>
                      <span className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{skill.label}</span>
                    </div>
                    <span className="text-3xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">{skill.percentage}%</span>
                  </div>
                  <div className="relative h-3 bg-card/50 rounded-full overflow-hidden border border-primary/20">
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-chart-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 1.5, ease: "easeOut" }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients - Scrolling Carousel - KEEP EXACTLY THE SAME */}
      <section className="relative py-10 md:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Clients
            </h2>
            <p className="text-2xl text-muted-foreground">
              Trusted by industry leaders
            </p>
          </motion.div>

          <div className="relative">
            {/* Top horizontal triangular borders */}
            <svg
              className="absolute left-0 right-0 w-full z-10"
              height="18"
              viewBox="0 0 1200 18"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ top: "-25px" }}
            >
              <defs>
                <linearGradient
                  id="topLeftGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity="0.7"
                  />
                  <stop
                    offset="100%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity="0"
                  />
                </linearGradient>
                <linearGradient
                  id="topRightGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity="0"
                  />
                  <stop
                    offset="100%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity="0.7"
                  />
                </linearGradient>
              </defs>
              <polygon points="0,0 0,18 600,18" fill="url(#topLeftGradient)" />
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
              style={{ bottom: "-25px" }}
            >
              <defs>
                <linearGradient
                  id="bottomLeftGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity="0.7"
                  />
                  <stop
                    offset="100%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity="0"
                  />
                </linearGradient>
                <linearGradient
                  id="bottomRightGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity="0"
                  />
                  <stop
                    offset="100%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity="0.7"
                  />
                </linearGradient>
              </defs>
              <polygon
                points="0,18 0,0 600,9"
                fill="url(#bottomLeftGradient)"
                opacity="0"
              />
              <polygon
                points="600,0 1200,0 1200,18"
                fill="url(#bottomRightGradient)"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* CTA Section - KEEP EXACTLY THE SAME */}
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

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
                Business?
              </span>
            </h2>

            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Real change comes through the right ideas and effective implementation. Let's create something amazing together.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
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
              <Link to="/services">
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

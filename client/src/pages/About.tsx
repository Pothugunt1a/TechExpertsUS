import { motion, useScroll, useTransform } from "framer-motion";
import { ParticleBackground } from "@/components/ui/particle-background";
import { 
  Target, Eye, Heart, Users, Lightbulb, Award, 
  TrendingUp, MessageSquare, Star, Shield, Handshake,
  Globe, Calendar, MapPin, CheckCircle2, Zap
} from "lucide-react";
import { useRef } from "react";

const skills = [
  { label: "Client Satisfaction", percentage: 98 },
  { label: "Performance Orientation", percentage: 96 },
  { label: "Adaptability", percentage: 97 },
  { label: "Employee Focus", percentage: 100 },
  { label: "Resource Consciousness", percentage: 98 },
  { label: "Staffing Solutions", percentage: 96 },
];

const coreValues = [
  { 
    icon: Handshake, 
    title: "Commitment", 
    description: "Dedicated to excellence in everything we do",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  { 
    icon: Shield, 
    title: "Integrity", 
    description: "Operating with honesty and transparency",
    color: "from-purple-500/20 to-pink-500/20"
  },
  { 
    icon: Award, 
    title: "Reputation", 
    description: "Building trust through consistent delivery",
    color: "from-green-500/20 to-emerald-500/20"
  },
  { 
    icon: CheckCircle2, 
    title: "Honesty", 
    description: "Open and truthful in all our dealings",
    color: "from-orange-500/20 to-red-500/20"
  },
  { 
    icon: Heart, 
    title: "Quality Relationships", 
    description: "Fostering lasting partnerships",
    color: "from-pink-500/20 to-rose-500/20"
  },
  { 
    icon: Users, 
    title: "Helping Society", 
    description: "Making a positive impact",
    color: "from-indigo-500/20 to-blue-500/20"
  },
  { 
    icon: Star, 
    title: "Trust", 
    description: "Earning confidence through reliability",
    color: "from-yellow-500/20 to-amber-500/20"
  },
];

const whatWeDo = [
  {
    icon: MessageSquare,
    title: "Effective Communication",
    description: "We at Tech Expertsus Inc convey relevant information in an understandable, timely and logical fashion. We understand the needs of the clients, solicit feedback, and are always prepared for every communication need."
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
    icon: Users,
    title: "Employee Focus",
    description: "We believe our people are our greatest asset and invest in their growth and development."
  },
];

const clients = [
  "Microsoft", "Amazon", "Google", "IBM",
  "Oracle", "SAP", "Cisco", "Dell"
];

export default function About() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ scale }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-chart-2/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent" />
        </motion.div>

        <ParticleBackground />
        
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center"
          style={{ opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              About <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent animate-gradient">Tech Expertsus</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Technology Expertise • Innovative Solutions • Lasting Partnerships
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <motion.div 
              className="w-1.5 h-1.5 bg-primary rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Why Tech Experts USA - Enhanced Layout */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-chart-2/10 rounded-full blur-[120px]" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Why <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">Tech Experts USA</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="relative p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/20 rounded-3xl overflow-hidden group hover:border-primary/40 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <Lightbulb className="w-12 h-12 text-primary mb-4" />
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    At Tech Expertsus, you are encouraged to think out of the box. We enable our colleagues to explore their ideas by creating a collaborative and entrepreneurial environment. If you consider yourself ready for a challenging but rewarding career, at Tech Expertsus, you will feel right at home.
                  </p>
                </div>
              </div>

              <div className="relative p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/20 rounded-3xl overflow-hidden group hover:border-primary/40 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-chart-2/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <Award className="w-12 h-12 text-chart-2 mb-4" />
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    At Tech Expertsus, we're proud of the outstanding work that we deliver to our clients, and most importantly, we're proud of our people who make it happen. It takes extreme talent, passion for your work and an ability to inspire others to excel here.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="relative p-8 bg-gradient-to-br from-primary/20 to-chart-2/20 backdrop-blur-xl border border-primary/30 rounded-3xl overflow-hidden">
                <motion.div
                  className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <MapPin className="w-10 h-10 text-primary mb-4" data-testid="icon-location" />
                <h3 className="text-2xl font-semibold mb-4 text-white">Where are We</h3>
                <p className="text-muted-foreground">
                  Having Corporate Headquarters in Argyle, TX 76226, United States we have offshore office located in Hyderabad in India with development team and Technical team supports our clients globally.
                </p>
              </div>

              <div className="relative p-8 bg-gradient-to-br from-chart-2/20 to-primary/20 backdrop-blur-xl border border-chart-2/30 rounded-3xl overflow-hidden">
                <motion.div
                  className="absolute -bottom-20 -left-20 w-40 h-40 bg-chart-2/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                />
                <Calendar className="w-10 h-10 text-chart-2 mb-4" data-testid="icon-calendar" />
                <h3 className="text-2xl font-semibold mb-4 text-white">When</h3>
                <p className="text-muted-foreground">
                  Tech Expertsus started in the year 2012 and supporting clients successfully.
                </p>
              </div>

              <div className="relative p-8 bg-gradient-to-br from-primary/10 to-chart-2/10 backdrop-blur-xl border border-primary/20 rounded-3xl overflow-hidden">
                <Globe className="w-10 h-10 text-primary mb-4" data-testid="icon-globe" />
                <p className="text-muted-foreground italic">
                  "Tech Expertsus was founded on three basic principles: Technology expertise, Innovative solutions and long lasting partnership with customers."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision Cards - Larger and More Prominent */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-background via-card/10 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
              data-testid="card-mission"
            >
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-chart-2/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="relative h-full bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl border border-primary/20 rounded-3xl p-12 overflow-hidden">
                <motion.div
                  className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                <div className="relative">
                  <motion.div 
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/30 to-chart-2/30 flex items-center justify-center mb-8"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Target className="w-10 h-10 text-primary" />
                  </motion.div>
                  <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">Our Mission</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Tech Expertsus focuses on high quality standards to provide professional consulting services and viable resources to our clients thereby ensuring complete client satisfaction and long-term commitment with them.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
              data-testid="card-vision"
            >
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-chart-2/30 to-primary/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="relative h-full bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl border border-chart-2/20 rounded-3xl p-12 overflow-hidden">
                <motion.div
                  className="absolute bottom-0 left-0 w-64 h-64 bg-chart-2/10 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 2.5 }}
                />
                <div className="relative">
                  <motion.div 
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-chart-2/30 to-primary/30 flex items-center justify-center mb-8"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <Eye className="w-10 h-10 text-chart-2" />
                  </motion.div>
                  <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-chart-2 to-primary bg-clip-text text-transparent">Our Vision</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To explore new opportunities and ideas to enhance quality based contributions that are beneficial for our clients and to get recognized as a global leader in providing IT Services and Technology based solutions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Passion for Innovation Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl p-12 md:p-16 bg-gradient-to-br from-primary/20 via-card/40 to-chart-2/20 backdrop-blur-xl border border-primary/30"
            data-testid="section-innovation"
          >
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
              style={{
                backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}
            />
            <div className="relative text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.8 }}
                className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary/40 to-chart-2/40 mb-8"
              >
                <Zap className="w-12 h-12 text-primary" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                A Passion for Innovation And A Commitment To Excellence
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The drive of a rapidly evolving team, combined with driven individuals all focused on the final goal with no leeway for a quality dip are vital factors for the delivery of IT projects to meet the demands of the day.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values - Circular Grid Layout */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card/20" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">Principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group"
                data-testid={`value-${value.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="relative h-full p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/10 rounded-2xl overflow-hidden group-hover:border-primary/30 transition-all duration-500">
                  <motion.div
                    className={`absolute -inset-20 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500`}
                  />
                  
                  <div className="relative flex flex-col items-center text-center">
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-chart-2/30 transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <value.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    
                    <h4 className="text-xl font-bold mb-3 text-white">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-card/20 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">What We Do</h2>
            <p className="text-xl text-muted-foreground">Excellence in every dimension</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {whatWeDo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative group"
                data-testid={`what-we-do-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="relative h-full p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/10 rounded-3xl overflow-hidden group-hover:border-primary/30 transition-all duration-500">
                  <motion.div
                    className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center mb-6"
                    >
                      <item.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Progress Bars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-4xl font-bold text-center mb-12 text-white">Our Skills</h3>
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group"
                  data-testid={`skill-${skill.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-semibold text-white group-hover:text-primary transition-colors">{skill.label}</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">{skill.percentage}%</span>
                  </div>
                  <div className="relative h-4 bg-card/50 rounded-full overflow-hidden border border-primary/20">
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-chart-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Happy Clients Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card/20" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">Our Happy Clients</h2>
            <p className="text-xl text-muted-foreground">Trusted by industry leaders worldwide</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
                data-testid={`client-${client.toLowerCase()}`}
              >
                <div className="relative h-32 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/10 rounded-2xl flex items-center justify-center overflow-hidden group-hover:border-primary/30 transition-all duration-300">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-chart-2/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative text-2xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                    {client}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-chart-2/10" />
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              At Tech Expertsus we passionately believe
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Real change only comes about through a combination of the right ideas and effective implementation.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-chart-2 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary/50 transition-all duration-300"
                data-testid="button-contact"
              >
                Get in Touch
                <Zap className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

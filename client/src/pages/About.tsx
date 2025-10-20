import { motion } from "framer-motion";
import { ParticleBackground } from "@/components/ui/particle-background";
import { SkillBar } from "@/components/ui/skill-bar";
import { ClientLogo } from "@/components/ui/client-logo";
import { Target, Eye, Heart } from "lucide-react";

const skills = [
  { label: "Client Satisfaction", percentage: 98 },
  { label: "Performance Orientation", percentage: 96 },
  { label: "Adaptability", percentage: 97 },
  { label: "Employee Focus", percentage: 100 },
  { label: "Resource Consciousness", percentage: 98 },
  { label: "Staffing Solutions", percentage: 96 },
];

const clients = [
  "Microsoft", "Amazon", "Google", "IBM",
  "Oracle", "SAP", "Cisco", "Dell"
];

const values = [
  { title: "Commitment", description: "Dedicated to excellence in everything we do" },
  { title: "Integrity", description: "Operating with honesty and transparency" },
  { title: "Reputation", description: "Building trust through consistent delivery" },
  { title: "Honesty", description: "Open and truthful in all our dealings" },
  { title: "Quality Relationships", description: "Fostering lasting partnerships" },
  { title: "Helping Society", description: "Making a positive impact" },
  { title: "Trust", description: "Earning confidence through reliability" },
];

export default function About() {
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
              About <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">Tech Experts US</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              We Are Professional
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Tech Experts USA */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Tech Experts USA</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground">
                At Tech Expertsus, you are encouraged to think out of the box. We enable our colleagues to explore their ideas by creating a collaborative and entrepreneurial environment. If you consider yourself ready for a challenging but rewarding career, at Tech Expertsus, you will feel right at home.
              </p>
              <p className="text-lg text-muted-foreground">
                At Tech Expertsus, we're proud of the outstanding work that we deliver to our clients, and most importantly, we're proud of our people who make it happen. It takes extreme talent, passion for your work and an ability to inspire others to excel here.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="p-6 bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-primary">Where are We</h3>
                <p className="text-muted-foreground">
                  Having Corporate Headquarters in Argyle, TX 76226, United States we have offshore office located in Hyderabad in India with development team and Technical team supports our clients globally.
                </p>
              </div>
              <div className="p-6 bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-primary">When</h3>
                <p className="text-muted-foreground">
                  Tech Expertsus started in the year 2012 and supporting clients successfully.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="relative py-10 md:py-16 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="h-full bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  Tech Expertsus focuses on high quality standards to provide professional consulting services and viable resources to our clients thereby ensuring complete client satisfaction and long-term commitment with them.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative group"
            >
              <div className="h-full bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To explore new opportunities and ideas to enhance quality based contributions that are beneficial for our clients and to get recognized as a global leader in providing IT Services and Technology based solutions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="h-full bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
                <p className="text-muted-foreground">
                  We uphold the highest standards of commitment, integrity, reputation, and honesty in all our endeavors.
                </p>
              </div>
            </motion.div>
          </div>

          {/* All Values Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h3 className="text-3xl font-bold text-center mb-12">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl hover:border-primary/30 transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold mb-2 text-primary">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Skills</h2>
            <p className="text-xl text-muted-foreground">Excellence in every dimension</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {skills.map((skill, index) => (
              <SkillBar key={skill.label} {...skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Happy Clients */}
      <section className="relative py-10 md:py-16 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Happy Clients</h2>
            <p className="text-xl text-muted-foreground">Trusted by industry leaders</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <ClientLogo key={client} name={client} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Passion for Innovation */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              A Passion for Innovation And A Commitment To Excellence
            </h2>
            <p className="text-lg text-muted-foreground">
              The drive of a rapidly evolving team, combined with driven individuals all focused on the final goal with no leeway for a quality dip are vital factors for the delivery of IT projects to meet the demands of the day.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

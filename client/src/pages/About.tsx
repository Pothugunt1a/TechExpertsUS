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
import { useRef, useState } from "react";
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

interface MissionVisionCardProps {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description1: string;
  description2: string;
  image: string;
  dataTestId: string;
  delay?: number;
}

function MissionVisionCard({
  title,
  icon: Icon,
  description1,
  description2,
  image,
  dataTestId,
  delay = 0
}: MissionVisionCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
      data-testid={dataTestId}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Default Overlay - Bottom gradient with title */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
        animate={{
          opacity: isHovered ? 0 : 1
        }}
        transition={{ duration: 0.4 }}
      >
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        </div>
      </motion.div>

      {/* Hover Overlay - Slides up from bottom */}
      <motion.div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col justify-center p-10"
        initial={{ y: "100%" }}
        animate={{
          y: isHovered ? "0%" : "100%"
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1]
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20
          }}
          transition={{
            duration: 0.3,
            delay: isHovered ? 0.2 : 0
          }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="text-gray-300 leading-relaxed">
            {description1}
          </p>
          <p className="text-gray-300 leading-relaxed">
            {description2}
          </p>
        </motion.div>
      </motion.div>

      {/* Glow effect on hover */}
      <motion.div
        className="absolute -inset-2 bg-gradient-to-r from-primary/40 to-chart-2/40 rounded-3xl blur-2xl"
        animate={{
          opacity: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.5 }}
        style={{ zIndex: -1 }}
      />
    </motion.div>
  );
}

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
      {/* Hero Section - Matching Consulting Page Banner Style */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/About-banner.jpg"
            alt="About Tech Expertsus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
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
          style={{ y, opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
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
                  Since 2012
                </span>
              </motion.div>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block mb-2">About</span>
              <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
                Tech Expertsus
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Technology Expertise • Innovative Solutions • Lasting Partnerships
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-10 md:py-16 bg-gradient-to-b from-background to-card/20">
        <AnimatedGridBackground />

        <div className="relative max-w-7xl mx-auto px-3 lg:px-4">
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

        <div className="relative max-w-7xl mx-auto px-3 lg:px-4">
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

          {/* Our Culture Section - Matching Consulting Page Layout */}
      <section className="relative py-10 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

        <div className="relative max-w-7xl mx-auto px-3 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden">
                  <img
                    src="https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif"
                    alt="Innovation at Tech Expertsus"
                    className="w-full h-full object-contain"
                  />
                </div>
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
                    Our Culture
                  </span>
                </div>
              </motion.div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Think Outside the Box
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  At Tech Expertsus, you are encouraged to think out of the box. We enable our colleagues to explore their ideas by creating a collaborative and entrepreneurial environment.
                </p>
                <p>
                  If you consider yourself ready for a challenging but rewarding career, at Tech Expertsus, you will feel right at home.
                </p>
              </div>

              <div className="mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative p-6 bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 max-w-sm"
                  data-testid="stat-innovation"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-chart-2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                  <div className="relative z-10 flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0"
                    >
                      <Lightbulb className="w-6 h-6 text-primary" />
                    </motion.div>

                    <div>
                      <p className="text-2xl font-bold text-primary mb-1">
                        Innovation
                      </p>
                      <p className="text-sm text-muted-foreground">
                        First
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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

          {/* Third Row - Service Card Style Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: MapPin,
                title: "Where We Are",
                description: "Corporate Headquarters in Argyle, TX 76226, United States with offshore office in Hyderabad, India. Our development and technical teams support clients globally.",
                image: "/assets/Home5.jpg"
              },
              {
                icon: Calendar,
                title: "Our Journey",
                description: "Tech Expertsus started in 2012 and has been successfully supporting clients ever since, growing to become a preferred IT partner across various industry verticals.",
                image: "/assets/Home6.jpg"
              },
              {
                icon: Rocket,
                title: "Our Foundation",
                description: "Founded on three basic principles: Technology expertise, Innovative solutions, and long-lasting partnership with customers - the pillars of our success.",
                image: "/assets/Home7.jpg"
              }
            ].map((item, idx) => {
              const [isHovered, setIsHovered] = useState(false);

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.7 }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
                  data-testid={`info-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Default Overlay - Bottom gradient with title */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                    animate={{
                      opacity: isHovered ? 0 : 1
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    </div>
                  </motion.div>

                  {/* Hover Overlay - Slides up from bottom */}
                  <motion.div
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col justify-between p-8"
                    initial={{ y: "100%" }}
                    animate={{
                      y: isHovered ? "0%" : "100%"
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.4, 0.0, 0.2, 1]
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : 20
                      }}
                      transition={{
                        duration: 0.3,
                        delay: isHovered ? 0.2 : 0
                      }}
                      className="flex-1 flex flex-col justify-center"
                    >
                      {/* Icon in top right */}
                      <motion.div
                        className="absolute top-4 right-4 w-14 h-14 rounded-xl bg-primary/20 backdrop-blur-md border border-white/10 flex items-center justify-center"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <item.icon className="w-7 h-7 text-gray-900 dark:text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                      <p className="text-gray-200 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </motion.div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-all duration-300" />
                </motion.div>
              );
            })}
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

      {/* Mission & Vision - Side-by-Side Layout */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-card/10 to-background">
        <div className="relative max-w-7xl mx-auto px-3 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Column: Content - Takes 1 column (1/3) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 lg:col-span-1"
            >
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-primary text-sm font-semibold tracking-widest uppercase mb-4"
                >
                  Our Commitment
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight"
                >
                  Driving excellence through innovation and expertise
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-base text-muted-foreground leading-relaxed"
              >
                We are dedicated to providing professional consulting services and viable technology solutions that ensure complete client satisfaction and long-term commitment.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="group"
                  data-testid="link-learn-more-commitment"
                  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column: Image Cards - Takes 2 columns (2/3) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-2"
            >
              {/* Mission Card */}
              <MissionVisionCard
                title="Our Mission"
                icon={Target}
                description1="Tech Expertsus focuses on high quality standards to provide professional consulting services and viable resources to our clients, ensuring complete client satisfaction and long-term commitment."
                description2="We customize employment solutions for our customers and employees, with each unique partnership built on quality relationships and our core values."
                image="/assets/Consulting3.png"
                dataTestId="card-mission"
              />

              {/* Vision Card */}
              <MissionVisionCard
                title="Our Vision"
                icon={Eye}
                description1="To explore new opportunities and ideas to enhance quality-based contributions that benefit our clients and to be recognized as a global leader in IT Services and Technology solutions."
                description2="We fulfill customer needs while utilizing our knowledge and experience with a great sense of urgency every time."
                image="/assets/Consulting2.png"
                dataTestId="card-vision"
                delay={0.2}
              />
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

        <div className="relative z-10 max-w-7xl mx-auto px-3 lg:px-4">
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

      {/* Core Values - 2x2 Grid on Left with Background */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/About9.jpeg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-3 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">Our Core Values</h2>
            <p className="text-lg text-white/90">
              Principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - 2x2 Grid of All 7 Core Values (takes 1/3) */}
            <div className="lg:col-span-1">
              <div className="grid grid-cols-2 gap-3">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="relative group"
                    data-testid={`value-${value.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/40 to-chart-2/40 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />
                    <div className="relative h-full p-4 bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-xl border border-primary/30 rounded-lg group-hover:border-primary/50 transition-all duration-300">
                      <motion.div
                        className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/30 to-chart-2/30 flex items-center justify-center mb-3 group-hover:from-primary/40 group-hover:to-chart-2/40 transition-colors mx-auto"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <value.icon className="w-5 h-5 text-primary" />
                      </motion.div>
                      <h4 className="text-sm font-bold mb-1.5 text-gray-900 dark:text-white text-center">{value.title}</h4>
                      <p className="text-xs text-muted-foreground leading-snug text-center">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side - Empty space for background image visibility (takes 2/3) */}
            <div className="lg:col-span-2 hidden lg:block" />
          </div>
        </div>
      </section>

      {/* What We Do - Diagonal Split Layout (like Staffing page) */}
      <section className="relative py-10 md:py-16">
        <div className="relative max-w-7xl mx-auto px-3 lg:px-4">
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
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg lg:text-xl font-bold">Effective Communication</h3>
                          <div className="flex items-center gap-2 ml-auto">
                            <div className="w-16 h-1.5 bg-card/50 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-primary to-chart-2 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: "98%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                              />
                            </div>
                            <span className="text-xs font-bold text-primary">98%</span>
                          </div>
                        </div>
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
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg lg:text-xl font-bold">Client Satisfaction</h3>
                          <div className="flex items-center gap-2 ml-auto">
                            <div className="w-16 h-1.5 bg-card/50 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-primary to-chart-2 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: "98%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
                              />
                            </div>
                            <span className="text-xs font-bold text-primary">98%</span>
                          </div>
                        </div>
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
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg lg:text-xl font-bold">Performance Orientation</h3>
                          <div className="flex items-center gap-2 ml-auto">
                            <div className="w-16 h-1.5 bg-card/50 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-primary to-chart-2 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: "96%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                              />
                            </div>
                            <span className="text-xs font-bold text-primary">96%</span>
                          </div>
                        </div>
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
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg lg:text-xl font-bold">Resource Consciousness</h3>
                          <div className="flex items-center gap-2 ml-auto">
                            <div className="w-16 h-1.5 bg-card/50 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-primary to-chart-2 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: "98%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
                              />
                            </div>
                            <span className="text-xs font-bold text-primary">98%</span>
                          </div>
                        </div>
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
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg lg:text-xl font-bold">Employee Focus</h3>
                          <div className="flex items-center gap-2 ml-auto">
                            <div className="w-16 h-1.5 bg-card/50 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-primary to-chart-2 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                              />
                            </div>
                            <span className="text-xs font-bold text-primary">100%</span>
                          </div>
                        </div>
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
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg lg:text-xl font-bold">Adaptability</h3>
                          <div className="flex items-center gap-2 ml-auto">
                            <div className="w-16 h-1.5 bg-card/50 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-primary to-chart-2 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: "97%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
                              />
                            </div>
                            <span className="text-xs font-bold text-primary">97%</span>
                          </div>
                        </div>
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
import { motion, useScroll, useTransform } from "framer-motion";
import { ParticleBackground } from "@/components/ui/particle-background";
import {
  Briefcase,
  Users,
  TrendingUp,
  Heart,
  Globe,
  Award,
  Coffee,
  Zap,
  Clock,
  Target,
  Rocket,
  Shield,
  DollarSign,
  GraduationCap,
  Laptop,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import ConsultingImage from "@assets/Consulting1__1_-removebg-preview_1761620472526.png";
import teamCollabImage from "@assets/stock_images/diverse_team_collabo_2d12e2b3.jpg";
import remoteWorkImage from "@assets/stock_images/professional_woman_w_0d590630.jpg";
import officeWorkspaceImage from "@assets/stock_images/modern_office_worksp_4f27422a.jpg";
import teamCelebrationImage from "@assets/stock_images/team_celebration_suc_ed7a51e1.jpg";

export default function Careers() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 300], [0, 100]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs",
    },
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Market-leading compensation packages",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Work-life balance with flexible scheduling",
    },
    {
      icon: Laptop,
      title: "Remote Options",
      description: "Hybrid and remote work opportunities",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Continuous training and skill enhancement",
    },
    {
      icon: Coffee,
      title: "Great Perks",
      description: "Free meals, gym memberships, and more",
    },
  ];

  const coreValues = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and creative solutions",
      gradient: "from-primary/20 to-chart-2/20",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Teamwork and open communication drive our success",
      gradient: "from-chart-2/20 to-chart-3/20",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver quality and strive for continuous improvement",
      gradient: "from-chart-3/20 to-primary/20",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Our work shapes industries worldwide",
      gradient: "from-primary/20 to-chart-4/20",
    },
  ];

  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Full-time",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "On-site",
      type: "Full-time",
      skills: ["Docker", "Kubernetes", "CI/CD", "Terraform"],
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Hybrid",
      type: "Full-time",
      skills: ["Agile", "Scrum", "Stakeholder Management", "Planning"],
    },
    {
      title: "Data Scientist",
      department: "Analytics",
      location: "Remote",
      type: "Full-time",
      skills: ["Python", "Machine Learning", "SQL", "Data Visualization"],
    },
    {
      title: "Cloud Solutions Architect",
      department: "Engineering",
      location: "Hybrid",
      type: "Full-time",
      skills: ["AWS", "Azure", "Architecture Design", "Security"],
    },
  ];

  const applicationSteps = [
    {
      number: "01",
      title: "Submit Application",
      description: "Send us your resume and cover letter",
    },
    {
      number: "02",
      title: "Initial Screening",
      description: "Our team reviews your application",
    },
    {
      number: "03",
      title: "Technical Interview",
      description: "Showcase your skills and expertise",
    },
    {
      number: "04",
      title: "Team Meeting",
      description: "Meet potential colleagues and managers",
    },
    {
      number: "05",
      title: "Offer & Onboarding",
      description: "Welcome to the team!",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Senior Developer",
      quote: "Best decision of my career. The team is incredibly supportive and the projects are challenging and rewarding.",
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "UX Designer",
      quote: "The creative freedom and collaborative environment here allow me to do my best work every day.",
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Project Manager",
      quote: "Tech Experts invests in their people. I've grown more here in two years than I did in five at my previous company.",
      avatar: "ER",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/assets/Careers-banner.jpeg)" }}
        />
        
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-background/40" />
        
        <ParticleBackground />
        
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-3 lg:px-4 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Badge
              className="mb-6 bg-primary/10 text-primary border-primary/20"
              data-testid="badge-join-team"
            >
              Join Our Team
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Build Your Career with{" "}
            <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
              Tech Experts
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join a team of passionate innovators shaping the future of technology.
            We're looking for talented individuals ready to make an impact.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              onClick={() => scrollToSection('open-positions')}
              data-testid="button-view-positions"
            >
              View Open Positions <Briefcase className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('our-culture')}
              data-testid="button-learn-culture"
            >
              Learn About Our Culture
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating animated shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-2xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-chart-2/20 rounded-full blur-2xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </section>

      {/* Why Join Us - Bento Box Layout with Images */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Why Join <span className="text-primary">Tech Experts?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in investing in our people and creating an environment
              where innovation thrives
            </p>
          </motion.div>

          {/* Bento Grid - Asymmetric Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Large Featured Card - Health & Wellness with Background Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 lg:row-span-2"
            >
              <Card
                className="relative h-full min-h-[400px] overflow-hidden hover-elevate active-elevate-2 group"
                data-testid="card-benefit-featured"
              >
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0">
                  <img
                    src={teamCollabImage}
                    alt="Team collaboration"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-chart-2/80" />
                </div>

                <CardContent className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
                  <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-3">
                    Health & Wellness
                  </h3>
                  <p className="text-white/90 text-lg mb-4">
                    Comprehensive health insurance, mental health support, and wellness programs designed to keep you at your best
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                      Medical Coverage
                    </Badge>
                    <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                      Dental & Vision
                    </Badge>
                    <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                      Wellness Programs
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Medium Card - Competitive Salary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <Card className="h-full hover-elevate active-elevate-2" data-testid="card-benefit-1">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-primary/20 to-chart-2/20 w-14 h-14 rounded-xl flex items-center justify-center shrink-0">
                      <DollarSign className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        Competitive Salary
                      </h3>
                      <p className="text-muted-foreground">
                        Market-leading compensation packages with annual reviews and performance bonuses
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tall Card with Image - Flexible Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:row-span-2"
            >
              <Card
                className="relative h-full min-h-[300px] overflow-hidden hover-elevate active-elevate-2 group"
                data-testid="card-benefit-2"
              >
                <div className="absolute inset-0">
                  <img
                    src={officeWorkspaceImage}
                    alt="Modern workspace"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>
                <CardContent className="relative z-10 p-6 h-full flex flex-col justify-end">
                  <div className="bg-primary/10 backdrop-blur-sm w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-primary/20">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Flexible Hours
                  </h3>
                  <p className="text-muted-foreground">
                    Work-life balance with flexible scheduling that fits your lifestyle
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tall Card with Image - Remote Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:row-span-2"
            >
              <Card
                className="relative h-full min-h-[300px] overflow-hidden hover-elevate active-elevate-2 group"
                data-testid="card-benefit-3"
              >
                <div className="absolute inset-0">
                  <img
                    src={remoteWorkImage}
                    alt="Remote work"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>
                <CardContent className="relative z-10 p-6 h-full flex flex-col justify-end">
                  <div className="bg-chart-2/10 backdrop-blur-sm w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-chart-2/20">
                    <Laptop className="h-6 w-6 text-chart-2" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Remote Options
                  </h3>
                  <p className="text-muted-foreground">
                    Hybrid and fully remote work opportunities from anywhere in the world
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Wide Card - Learning & Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <Card
                className="relative h-full overflow-hidden hover-elevate active-elevate-2 group"
                data-testid="card-benefit-4"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-chart-3/20 to-primary/20 w-14 h-14 rounded-xl flex items-center justify-center shrink-0">
                      <GraduationCap className="h-7 w-7 text-chart-3" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        Learning & Development
                      </h3>
                      <p className="text-muted-foreground">
                        Continuous training, certifications, and skill enhancement programs to advance your career
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Small Card with Image - Great Perks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="md:col-span-2"
            >
              <Card
                className="relative h-full min-h-[200px] overflow-hidden hover-elevate active-elevate-2 group"
                data-testid="card-benefit-5"
              >
                <div className="absolute inset-0">
                  <img
                    src={teamCelebrationImage}
                    alt="Team celebration"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-chart-4/90 via-chart-4/70 to-primary/80" />
                </div>
                <CardContent className="relative z-10 p-6 h-full flex items-center">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 backdrop-blur-sm w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-white/20">
                      <Coffee className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 text-white">
                      <h3 className="text-xl font-semibold mb-2">
                        Amazing Perks
                      </h3>
                      <p className="text-white/90">
                        Free meals, gym memberships, team events, and much more to make work enjoyable
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Floating Background Elements */}
        <motion.div
          className="absolute top-10 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-60 h-60 bg-chart-2/5 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </section>

      {/* Our Culture - Side by Side with Image */}
      <section id="our-culture" className="relative py-16 md:py-24 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-3 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge 
                className="mb-4 bg-primary/10 text-primary border-primary/20"
                data-testid="badge-culture"
              >
                Our Culture
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Where Innovation Meets{" "}
                <span className="text-primary">Collaboration</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                At Tech Experts, we foster a culture of creativity, continuous
                learning, and mutual respect. Our team members are empowered to
                take ownership of their work and make meaningful contributions to
                projects that shape industries.
              </p>

              <div className="space-y-4">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`p-4 rounded-lg bg-gradient-to-r ${value.gradient} border border-primary/10`}
                    data-testid={`card-value-${index}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 p-2 rounded-lg">
                        <value.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{value.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {value.description}
                        </p>
                      </div>
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
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
                <img
                  src={ConsultingImage}
                  alt="Team collaboration"
                  className="w-full h-auto"
                  data-testid="img-culture"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              {/* Floating stat card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-card border border-primary/20 rounded-xl p-6 shadow-xl backdrop-blur-sm"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                data-testid="card-stat-employees"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-muted-foreground">Team Members</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions - Staggered Grid */}
      <section id="open-positions" className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-3 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Open <span className="text-primary">Positions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore opportunities across various departments and find your
              perfect role
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="h-full hover-elevate active-elevate-2 overflow-visible"
                  data-testid={`card-position-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-3 w-3" />
                            {position.department}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Globe className="h-3 w-3" />
                            {position.location}
                          </span>
                        </div>
                      </div>
                      <Badge variant="outline">{position.type}</Badge>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {position.skills.map((skill) => (
                        <Badge
                          key={skill}
                          className="bg-primary/10 text-primary border-primary/20"
                          data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      className="w-full"
                      variant="outline"
                      data-testid={`button-apply-${index}`}
                    >
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials - Horizontal Scroll */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-3 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What Our Team <span className="text-primary">Says</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from the people who make Tech Experts a great place to work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="h-full hover-elevate overflow-visible"
                  data-testid={`card-testimonial-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center text-white font-semibold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">
                      "{testimonial.quote}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process - Timeline */}
      <section className="relative py-16 md:py-24">
        <div className="relative z-10 max-w-7xl mx-auto px-3 lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Application <span className="text-primary">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple, transparent hiring process designed to find the best fit
              for both you and us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {applicationSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
                data-testid={`card-step-${index}`}
              >
                <div className="bg-card border border-primary/20 rounded-lg p-6 h-full">
                  <div className="text-4xl font-bold text-primary/30 mb-3">
                    {step.number}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                {index < applicationSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Rocket className="h-5 w-5 text-primary/50 rotate-90" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-chart-2/20" />
        
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-3 lg:px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Make an{" "}
              <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
                Impact?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our team of innovators and help us build the future of
              technology. Your next career move starts here.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={() => scrollToSection('open-positions')}
                data-testid="button-browse-jobs"
              >
                Browse All Jobs
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                data-testid="button-contact-hr"
              >
                <Link href="/contact">Contact HR Team</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

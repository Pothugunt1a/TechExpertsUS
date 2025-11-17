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

      {/* Why Join Us - Benefits Grid */}
      <section className="relative py-16 md:py-24">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="h-full hover-elevate active-elevate-2 overflow-visible"
                  data-testid={`card-benefit-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
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
                Browse All Jobs <Zap className="ml-2 h-4 w-4" />
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

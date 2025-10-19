import { motion } from "framer-motion";
import { ParticleBackground } from "@/components/ui/particle-background";
import { Users, Target, Clock, TrendingUp, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const benefits = [
  "Ability to produce quick turnaround times in providing IT consultants with required skills",
  "Reduced dependency on regional and national technology solutions providers",
  "Reduced project resource costs",
  "Flexibility to provide consultants at your facility or offsite at our offices",
  "All inclusive hourly rates for consultants",
  "Large qualified talent pool of consultants to choose from",
  "Ability to provide seasoned consultants to meet fluctuating demands",
];

const features = [
  {
    icon: Users,
    title: "The Right People",
    description: "From the factory to the tech site to the law firm, we'll deliver the skilled professionals you need.",
  },
  {
    icon: Clock,
    title: "Time Critical Support",
    description: "We've earned the reputation for enabling clients to meet critical deadlines.",
  },
  {
    icon: Target,
    title: "Full Spectrum Services",
    description: "Staff Augmentation, Project Solutions, Vendor Management, Executive Search services.",
  },
  {
    icon: TrendingUp,
    title: "Best Talent",
    description: "Access to best talent that fits your company's technical needs and culture.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Delivering ideas and solutions to Fortune 500 customer base.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "All consultants are thoroughly vetted and qualified for their roles.",
  },
];

export default function StaffingSolutions() {
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
              Staffing <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              We Are Professional
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">The Right People at the Right Time</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Your goal is to focus on your core business. Our goal is to help you by offering comprehensive workforce solutions. Tech Expertsus provides a full spectrum of tactical and strategic workforce services. Providing you with the right talent at the right time is how it begins.
              </p>
              <p>
                Tech Expertsus is a full service IT Services and Business Services Firm. Tech Expertsus's Staff Augmentation, Project Solutions, Vendor Management, Executive Search services, call center technology and IT and business development services allow us to deliver ideas and solutions that meet all of our customers' IT and Business resource needs.
              </p>
              <p>
                Tech Expertsus's international footprint allows us to tap into multiple labor pools and deliver the best to our Fortune 500 customer base.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-10 md:py-16 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Our Staffing Solutions</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
                data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="relative h-full bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-chart-2/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center mb-6"
                    >
                      <feature.icon className="w-8 h-8 text-primary" />
                    </motion.div>

                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Value We Provide</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We partner with our clients to understand their project and resource needs so that we are able to provide the following value:
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start space-x-4 p-6 bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl hover:border-primary/30 transition-all duration-300"
                data-testid={`benefit-${index}`}
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-3" />
                <p className="text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Recruiting */}
      <section className="relative py-10 md:py-16 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Professional Recruiting</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                Our professional placement services are designed for organizations looking to fill middle to upper management positions. Our targeted searches offer a confidential way to target latent job seekers with specific skills and experience.
              </p>
              <p>
                We source, screen, and interview potential candidates based on your requirements, then provide you with a list of the top-tier candidates. You have the ability to conduct final interviews and make the final hiring decision.
              </p>
              <p>
                To ensure your satisfaction, our Professional Placement services are also backed by a guarantee ranging from 60 to 180 days, depending on the position.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Find the Right Talent?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let us help you build a world-class team with our comprehensive staffing solutions.
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8" data-testid="button-contact-staffing">
                Contact Us Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

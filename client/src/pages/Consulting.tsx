import { motion } from "framer-motion";
import { ParticleBackground } from "@/components/ui/particle-background";
import { Lightbulb, TrendingUp, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Consulting() {
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
              Tech Expertsus <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">Consulting</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              We Are Professional
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Helping Companies Think Ahead</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
              <p>
                At Tech Expertsus Consulting, we help companies think ahead. Business today is evolving faster than at any other time in history, and tomorrow there are going to be challenges we can't even imagine today. And opportunities. But to survive and thrive, we must imagine that future. We must anticipate it.
              </p>
              <p>
                Even while we're helping you solve your business challenges today, we're thinking about the future - and how we can take you there. Which is what gives you the competitive edge in what's to come.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold mb-6">Transformation Is Key</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Everyone talks about transformation, but transformation into what? In our practice of continually thinking ahead, we've developed certain essentials for our model of the 21st Century Virtual Corporation.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our model includes implementing lean optimization. Virtualizing non-core operations and harnessing new technology. Structuring 4th generation partnering agreements that operate at the highest level of trust.
              </p>
              <p className="text-lg text-muted-foreground">
                So what is the transformation model? It's a business that has been optimized in every respect to improve the bottom line and meet the future with confidence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <Lightbulb className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-lg font-semibold mb-2">Innovation</h4>
                <p className="text-sm text-muted-foreground">Future-focused solutions</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-lg font-semibold mb-2">Growth</h4>
                <p className="text-sm text-muted-foreground">Scalable strategies</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <Target className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-lg font-semibold mb-2">Precision</h4>
                <p className="text-sm text-muted-foreground">Targeted approach</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-lg font-semibold mb-2">Efficiency</h4>
                <p className="text-sm text-muted-foreground">Optimized operations</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="relative py-10 md:py-16 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Competitive Advantages</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p>
              Tech Expertsus Consulting can give you the business analyses you need and follow through with implementation. As part of eLan, the world's leading provider of integrated business, technology and process solutions, we can deliver a depth of resources that's unsurpassed by other firms.
            </p>
            <p>
              We have the flexibility to deliver solutions quickly and cost-effectively. And our confidence in our ability to think ahead makes us willing to be measured against any business outcomes.
            </p>
            <p className="text-xl font-semibold text-foreground">
              Which means that with Tech Expertsus Consulting, you get the advantage of future thinking - along with the advantage of being taken the rest of the way.
            </p>
          </div>
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
            className="text-center bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let our consulting experts help you anticipate the future and stay ahead of the competition.
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8" data-testid="button-schedule-consultation">
                Schedule a Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

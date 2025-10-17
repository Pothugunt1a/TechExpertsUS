import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const footerSections = [
  {
    title: "Company",
    links: [
      { name: "About Us", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Data Center Management", path: "/services/dms" },
      { name: "Infrastructure Consulting", path: "/services/ics" },
      { name: "Project Management", path: "/services/pms" },
    ],
  },
  {
    title: "Consult",
    links: [
      { name: "Consulting", path: "/consult/consulting" },
      { name: "Outsourcing", path: "/consult/outsourcing" },
      { name: "Staffing Solutions", path: "/consult/staffing" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-background to-card border-t border-primary/10">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center">
                <span className="text-xl font-bold text-white">TE</span>
              </div>
              <div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                  Tech Experts
                </h3>
                <p className="text-xs text-muted-foreground">US</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Technology expertise, Innovative solutions and long lasting partnership with customers since 2012.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 469-666-0019</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@techexpertsus.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Argyle, TX 76226, United States</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link href={link.path}>
                      <a className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200" data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, "-")}`}>
                        {link.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Tech Experts US. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Built with excellence</span>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

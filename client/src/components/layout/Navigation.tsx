import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { 
    name: "Services", 
    path: "/services",
    subItems: [
      { name: "Data Center Management", path: "/services/dms" },
      { name: "Infrastructure Consulting", path: "/services/ics" },
      { name: "Project Management", path: "/services/pms" },
    ]
  },
  {
    name: "Consult",
    path: "/consult",
    subItems: [
      { name: "Consulting", path: "/consult/consulting" },
      { name: "Outsourcing", path: "/consult/outsourcing" },
      { name: "Staffing Solutions", path: "/consult/staffing" },
    ]
  },
  { name: "Contact", path: "/contact" },
];

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/80 backdrop-blur-xl shadow-lg border-b border-primary/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/">
              <a className="flex items-center" data-testid="link-home">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <img 
                    src="/attached_assets/TechExperts_1760680720730.png" 
                    alt="Tech Experts US Logo" 
                    className="h-12 w-auto"
                  />
                </motion.div>
              </a>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link href={item.path}>
                    <a data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Button
                        variant="ghost"
                        className={`relative ${
                          location === item.path || location.startsWith(item.path + "/")
                            ? "text-primary"
                            : "text-foreground"
                        }`}
                        asChild
                      >
                        <span>
                          {item.name}
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-chart-2"
                            initial={{ scaleX: 0 }}
                            animate={{
                              scaleX: location === item.path || location.startsWith(item.path + "/") ? 1 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          />
                        </span>
                      </Button>
                    </a>
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.subItems && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-card/95 backdrop-blur-xl border border-primary/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
                    >
                      {item.subItems.map((subItem) => (
                        <Link key={subItem.path} href={subItem.path}>
                          <a data-testid={`link-${subItem.name.toLowerCase().replace(/\s+/g, "-")}`}>
                            <Button
                              variant="ghost"
                              className="w-full justify-start text-left hover:bg-primary/10"
                              asChild
                            >
                              <span>{subItem.name}</span>
                            </Button>
                          </a>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-background/95 backdrop-blur-xl pt-20"
          >
            <div className="flex flex-col p-6 space-y-4 overflow-y-auto h-full">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={item.path}>
                    <a data-testid={`link-mobile-${item.name.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-lg"
                        onClick={() => !item.subItems && setIsMobileMenuOpen(false)}
                        asChild
                      >
                        <span>{item.name}</span>
                      </Button>
                    </a>
                  </Link>
                  
                  {item.subItems && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.subItems.map((subItem) => (
                        <Link key={subItem.path} href={subItem.path}>
                          <a data-testid={`link-mobile-${subItem.name.toLowerCase().replace(/\s+/g, "-")}`}>
                            <Button
                              variant="ghost"
                              className="w-full justify-start text-muted-foreground"
                              onClick={() => setIsMobileMenuOpen(false)}
                              asChild
                            >
                              <span>{subItem.name}</span>
                            </Button>
                          </a>
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

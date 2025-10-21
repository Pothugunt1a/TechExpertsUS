import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Services",
    path: "/services",
    subItems: [
      { name: "Data Center Management Services", path: "/services/dms" },
      { name: "Infrastructure Consulting Services", path: "/services/ics" },
      { name: "Project Management Solutions", path: "/services/pms" },
    ],
  },
  {
    name: "Consult",
    path: "/consult",
    subItems: [
      { name: "Consulting", path: "/consult/consulting" },
      { name: "Outsourcing", path: "/consult/outsourcing" },
      { name: "Staffing Solutions", path: "/consult/staffing" },
    ],
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
            <Link href="/" data-testid="link-home">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <img
                  src="/assets/TechExperts.png"
                  alt="Tech Experts US Logo"
                  className="h-16 w-auto"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.path}
                    data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div
                      className={`relative px-4 py-2 cursor-pointer transition-colors ${
                        location === item.path ||
                        location.startsWith(item.path + "/")
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {item.name}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-chart-2"
                        initial={{ scaleX: 0 }}
                        animate={{
                          scaleX:
                            location === item.path ||
                            location.startsWith(item.path + "/")
                              ? 1
                              : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </Link>

                  {/* Dropdown Menu */}
                  {item.subItems && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-card/95 backdrop-blur-xl border border-primary/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="py-2">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.path}
                            href={subItem.path}
                            data-testid={`link-${subItem.name.toLowerCase().replace(/\s+/g, "-")}`}
                          >
                            <div className="w-full px-4 py-3 text-left hover:bg-primary/10 cursor-pointer transition-colors text-sm">
                              {subItem.name}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button & Theme Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                data-testid="button-mobile-menu"
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
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
                  {!item.subItems ? (
                    <Link
                      href={item.path}
                      data-testid={`link-mobile-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <div
                        className="w-full px-4 py-2 text-lg cursor-pointer hover:bg-primary/10 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </div>
                    </Link>
                  ) : null}

                  {item.subItems && (
                    <>
                      <div
                        className="w-full px-4 py-2 text-lg cursor-pointer hover:bg-primary/10 transition-colors flex items-center justify-between"
                        onClick={() =>
                          setOpenSubmenu(
                            openSubmenu === item.name ? null : item.name,
                          )
                        }
                      >
                        {item.name}
                        <motion.span
                          animate={{
                            rotate: openSubmenu === item.name ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          ▼
                        </motion.span>
                      </div>
                      <AnimatePresence>
                        {openSubmenu === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="ml-4 overflow-hidden"
                          >
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.path}
                                href={subItem.path}
                                data-testid={`link-mobile-${subItem.name.toLowerCase().replace(/\s+/g, "-")}`}
                              >
                                <div
                                  className="w-full px-4 py-2 text-muted-foreground cursor-pointer hover:bg-primary/10 transition-colors"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {subItem.name}
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
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

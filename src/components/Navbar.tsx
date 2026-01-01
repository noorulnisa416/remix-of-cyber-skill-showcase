import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, Terminal } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "SKILLS", href: "#skills" },
  { name: "PROJECTS", href: "#projects" },
  { name: "CERTIFICATIONS", href: "#certifications" },
  { name: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md neon-border border-t-0 border-x-0"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <Shield className="w-8 h-8 text-primary group-hover:text-glow-cyan transition-all" />
            <span className="font-display font-bold text-lg tracking-wider text-foreground group-hover:text-primary transition-colors">
              NOOR<span className="text-primary">.SEC</span>
            </span>
          </a>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Hire Me Button - Right */}
          <div className="hidden md:block">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono text-sm"
            >
              <a href="#contact">
                <Terminal className="w-4 h-4 mr-2" />
                HIRE ME
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-primary/30"
          >
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 font-mono text-muted-foreground hover:text-primary transition-colors border-b border-border/30 last:border-0"
                >
                  <span className="text-primary">&gt; </span>
                  {item.name}
                </motion.a>
              ))}
              <Button
                asChild
                variant="outline"
                className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono"
              >
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  <Terminal className="w-4 h-4 mr-2" />
                  HIRE ME
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
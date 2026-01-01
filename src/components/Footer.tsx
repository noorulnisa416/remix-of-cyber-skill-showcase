import { motion } from "framer-motion";
import { Shield, Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/noorulnisa416",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/noorulnisa416/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:noorulnisa416@gmail.com",
      label: "Email",
    },
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative py-12 border-t border-border">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4 group">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-display font-bold text-lg tracking-wider text-foreground">
                NOOR<span className="text-primary">_</span>UL
                <span className="text-primary">_</span>NISA
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Cybersecurity enthusiast passionate about penetration testing and building secure systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
                  >
                    <span className="text-primary">&gt;</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-secondary/50 rounded neon-border hover:bg-primary/10 hover:border-primary transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-muted-foreground font-mono text-sm">
            © {currentYear} Noor Ul Nisa. All rights reserved.
          </p>
          <p className="text-muted-foreground font-mono text-sm flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-primary" /> for Cybersecurity
          </p>
        </div>

        {/* Terminal Style */}
        <div className="mt-8 text-center font-mono text-xs text-muted-foreground/50">
          <p>&gt; system.secure() ✓</p>
          <p>&gt; connection.encrypted() ✓</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

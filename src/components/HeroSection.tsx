import { motion } from "framer-motion";
import { ChevronDown, Terminal, Shield, Lock } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      <div className="absolute inset-0 hex-pattern" />
      
      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-32 right-20 hidden lg:block"
      >
        <Shield className="w-16 h-16 text-primary/30" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-32 left-20 hidden lg:block"
      >
        <Lock className="w-12 h-12 text-accent/30" />
      </motion.div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-card/50 backdrop-blur-sm neon-border font-mono text-sm"
          >
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">
              <span className="text-primary">root@security</span>:~$ whoami
            </span>
            <span className="terminal-cursor text-primary">▋</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="text-foreground">NOOR</span>
            <span className="text-primary text-glow-cyan"> UL </span>
            <span className="text-foreground">NISA</span>
          </motion.h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="font-display text-xl md:text-2xl text-primary tracking-widest mb-4">
              PENETRATION TESTER
            </h2>
            <p className="font-mono text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              <span className="text-primary">&gt;</span> Cybersecurity Enthusiast | 
              <span className="text-primary"> Ethical Hacker </span>| 
              Network Security Specialist
            </p>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Passionate about discovering vulnerabilities, securing systems, and building 
            a safer digital world. Currently focused on penetration testing, network 
            security, and threat detection.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="cyber-button px-8 py-6 text-lg font-display"
            >
              <a href="#projects">
                <span className="relative z-10">VIEW PROJECTS</span>
              </a>
            </Button>
            <Button
              asChild
              variant="cyber"
              size="lg"
              className="px-8 py-6 text-lg"
            >
              <a href="#contact">
                <span>CONTACT ME</span>
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto"
          >
            {[
              { value: "5+", label: "Projects" },
              { value: "3+", label: "Certifications" },
              { value: "2+", label: "Years Learning" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl font-bold text-primary text-glow-subtle">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/50 hover:text-primary transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.a>
    </section>
  );
};

export default HeroSection;

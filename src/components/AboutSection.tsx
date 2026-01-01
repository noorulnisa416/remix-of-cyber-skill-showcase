import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Target, Award, BookOpen } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Target, value: "50+", label: "LABS COMPLETED" },
    { icon: Award, value: "3+", label: "CERTIFICATIONS" },
    { icon: BookOpen, value: "2+", label: "YEARS LEARNING" },
  ];

  return (
    <section id="about" className="py-24 relative rounded-3xl mx-4" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-2 px-4 py-2 border border-primary/50 rounded-full bg-card/50">
            <User className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">About Me</span>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Who <span className="text-primary text-glow-cyan">Am I?</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Terminal Style Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="cyber-card p-6 md:p-8 corner-accent"
          >
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="ml-2 font-mono text-sm text-muted-foreground">
                about.sh
              </span>
            </div>

            <div className="font-mono text-sm space-y-3">
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> cat profile.txt
              </p>
              <div className="pl-4 space-y-2">
                <p className="text-foreground">
                  <span className="text-primary">Name:</span> Noor Ul Nisa
                </p>
                <p className="text-foreground">
                  <span className="text-primary">Role:</span> Aspiring Penetration Tester
                </p>
                <p className="text-foreground">
                  <span className="text-primary">Focus:</span> Ethical Hacking, Vulnerability Assessment
                </p>
                <p className="text-foreground">
                  <span className="text-primary">Status:</span>{" "}
                  <span className="text-primary">●</span> Active
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Securing the Digital Frontier
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              I am an intermediate-level cybersecurity enthusiast with a deep passion for penetration testing
              and ethical hacking. My journey in security began with a curiosity about how systems can be
              exploited and, more importantly, how they can be protected.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Currently focusing on developing advanced skills in vulnerability assessment, network penetration
              testing, and web application security. I actively practice on platforms like TryHackMe and
              HackTheBox to sharpen my skills.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              My goal is to become a professional penetration tester, helping organizations identify and fix
              security vulnerabilities before malicious actors can exploit them.
            </p>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-4 mt-12"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="cyber-card p-6 text-center"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="text-2xl md:text-3xl font-display font-bold text-primary mb-1">
                {stat.value}
              </p>
              <p className="font-mono text-xs text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Section Divider */}
        <div className="section-divider mt-24" />
      </div>
    </section>
  );
};

export default AboutSection;
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Target, Award, BookOpen } from "lucide-react";

const stats = [
  { label: "LABS COMPLETED", value: "50+", icon: Target },
  { label: "CERTIFICATIONS", value: "3+", icon: Award },
  { label: "YEARS LEARNING", value: "2+", icon: BookOpen },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative rounded-3xl mx-4" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background rounded-3xl" />
      
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
          className="mb-6 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Who <span className="text-gradient">Am I?</span>
          </h2>
        </motion.div>

        {/* Cyber Line Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="cyber-line mb-16 max-w-md mx-auto"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Terminal Style Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-2 lg:order-1"
          >
            <div className="cyber-card rounded-xl overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 p-4 border-b border-border bg-card/80">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="ml-2 font-mono text-sm text-muted-foreground">
                  about.sh
                </span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm space-y-4">
                <p className="text-muted-foreground">
                  <span className="text-primary">$</span> cat profile.txt
                </p>
                <div className="space-y-3">
                  <p className="text-foreground">
                    <span className="text-primary font-semibold">Name:</span> Noor Ul Nisa
                  </p>
                  <p className="text-foreground">
                    <span className="text-primary font-semibold">Role:</span> Aspiring Penetration Tester
                  </p>
                  <p className="text-foreground">
                    <span className="text-primary font-semibold">Focus:</span> Ethical Hacking, Vulnerability Assessment
                  </p>
                  <p className="text-foreground">
                    <span className="text-primary font-semibold">Status:</span>{" "}
                    <span className="text-primary">●</span> Active
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Securing the Digital Frontier
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am an intermediate-level cybersecurity enthusiast with a deep passion for penetration testing
                and ethical hacking. My journey in security began with a curiosity about how systems can be
                exploited and, more importantly, how they can be protected.
              </p>
              
              <p>
                Currently focusing on developing advanced skills in vulnerability assessment, network penetration
                testing, and web application security. I actively practice on platforms like TryHackMe and
                HackTheBox to sharpen my skills.
              </p>
              
              <p>
                My goal is to become a professional penetration tester, helping organizations identify and fix
                security vulnerabilities before malicious actors can exploit them.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="cyber-card p-6 text-center rounded-xl"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="text-2xl md:text-3xl font-display font-bold text-primary mb-1">
                {stat.value}
              </p>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Divider */}
        <div className="section-divider mt-24" />
      </div>
    </section>
  );
};

export default AboutSection;

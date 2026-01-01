import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, GraduationCap, Briefcase, Code2 } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Target,
      title: "Focus",
      description: "Penetration Testing & Network Security",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Continuous Learning in Cybersecurity",
    },
    {
      icon: Briefcase,
      title: "Experience",
      description: "Intermediate Level Professional",
    },
    {
      icon: Code2,
      title: "Specialization",
      description: "SOC Analysis & Threat Detection",
    },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-mono text-sm mb-2">
            <span className="text-accent">&gt;</span> about.init()
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            ABOUT <span className="text-primary text-glow-cyan">ME</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Terminal Style Bio */}
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
                about_me.sh
              </span>
            </div>

            <div className="font-mono text-sm space-y-4">
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> cat /home/noorulnisa/bio.txt
              </p>
              <p className="text-foreground leading-relaxed pl-4">
                A passionate Cybersecurity professional with intermediate-level expertise 
                in penetration testing, network security, and threat detection. 
                Currently on a mission to learn, grow, and contribute to building 
                a more secure digital landscape.
              </p>
              <p className="text-muted-foreground mt-6">
                <span className="text-primary">$</span> cat /home/noorulnisa/mission.txt
              </p>
              <p className="text-foreground leading-relaxed pl-4">
                My goal is to become a skilled Penetration Tester, identifying 
                vulnerabilities before malicious actors can exploit them. I believe 
                in ethical hacking as a means to protect individuals and organizations 
                from cyber threats.
              </p>
              <p className="text-muted-foreground mt-6">
                <span className="text-primary">$</span> echo $INTERESTS
              </p>
              <p className="text-primary pl-4">
                ["Web App Security", "Network Penetration", "Vulnerability Assessment", 
                "SOC Operations", "Threat Hunting"]
              </p>
            </div>
          </motion.div>

          {/* Right - Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="cyber-card p-6 group hover:neon-border-hover"
              >
                <item.icon className="w-10 h-10 text-primary mb-4 group-hover:text-glow-cyan transition-all" />
                <h3 className="font-display font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section Divider */}
        <div className="section-divider mt-24" />
      </div>
    </section>
  );
};

export default AboutSection;

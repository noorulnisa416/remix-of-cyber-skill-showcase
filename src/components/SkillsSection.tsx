import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Shield, 
  Network, 
  Bug, 
  Server, 
  Lock, 
  Eye,
  Terminal,
  Globe
} from "lucide-react";

const skills = [
  {
    category: "Offensive Security",
    icon: Bug,
    items: [
      { name: "Penetration Testing", level: 75 },
      { name: "Vulnerability Assessment", level: 70 },
      { name: "Web Application Testing", level: 65 },
      { name: "Network Exploitation", level: 60 },
    ],
  },
  {
    category: "Network Security",
    icon: Network,
    items: [
      { name: "Firewall Configuration", level: 70 },
      { name: "Network Monitoring", level: 75 },
      { name: "Cisco Networking", level: 65 },
      { name: "Wireshark Analysis", level: 70 },
    ],
  },
  {
    category: "Defensive Security",
    icon: Shield,
    items: [
      { name: "SOC Operations", level: 65 },
      { name: "Threat Detection", level: 70 },
      { name: "Incident Response", level: 60 },
      { name: "SIEM Tools", level: 55 },
    ],
  },
  {
    category: "Tools & Technologies",
    icon: Terminal,
    items: [
      { name: "Kali Linux", level: 75 },
      { name: "Burp Suite", level: 65 },
      { name: "Nmap", level: 80 },
      { name: "Metasploit", level: 60 },
    ],
  },
];

const tools = [
  { name: "Kali Linux", icon: Terminal },
  { name: "Wireshark", icon: Eye },
  { name: "Burp Suite", icon: Bug },
  { name: "Nmap", icon: Network },
  { name: "Metasploit", icon: Server },
  { name: "OWASP ZAP", icon: Globe },
  { name: "Nessus", icon: Shield },
  { name: "Hashcat", icon: Lock },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-mono text-sm mb-2">
            <span className="text-accent">&gt;</span> skills.load()
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            TECHNICAL <span className="text-primary text-glow-cyan">SKILLS</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skills.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="cyber-card p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-6 h-6 text-primary" />
                <h3 className="font-display font-bold text-lg text-foreground">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.items.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-mono text-sm text-muted-foreground">
                        {skill.name}
                      </span>
                      <span className="font-mono text-sm text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="font-display font-bold text-2xl text-foreground mb-8">
            TOOLS <span className="text-primary">&</span> PLATFORMS
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-card/50 neon-border neon-border-hover font-mono text-sm text-muted-foreground hover:text-primary transition-colors cursor-default"
              >
                <tool.icon className="w-4 h-4" />
                {tool.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section Divider */}
        <div className="section-divider mt-24" />
      </div>
    </section>
  );
};

export default SkillsSection;

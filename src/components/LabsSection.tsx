import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Network, Shield, Terminal, ExternalLink } from "lucide-react";

const labs = [
  {
    platform: "Cisco Networking Academy",
    icon: Network,
    description: "Hands-on networking labs covering routing, switching, and network security fundamentals.",
    skills: ["CCNA", "Routing & Switching", "Network Protocols", "Packet Tracer"],
    color: "primary",
    url: "https://www.netacad.com/",
  },
  {
    platform: "TryHackMe",
    icon: Terminal,
    description: "Interactive cybersecurity training platform with guided learning paths and CTF challenges.",
    skills: ["Penetration Testing", "Web Security", "Linux", "CTF"],
    color: "accent",
    url: "https://tryhackme.com/",
  },
  {
    platform: "Hack The Box",
    icon: Server,
    description: "Advanced penetration testing labs with real-world vulnerable machines.",
    skills: ["Advanced Exploitation", "Privilege Escalation", "Active Directory"],
    color: "primary",
    url: "https://www.hackthebox.com/",
  },
  {
    platform: "PentesterLab",
    icon: Shield,
    description: "Focused exercises on web application security and common vulnerabilities.",
    skills: ["Web App Security", "SQL Injection", "XSS", "Authentication Bypass"],
    color: "accent",
    url: "https://pentesterlab.com/",
  },
];

const LabsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="labs" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-mono text-sm mb-2">
            <span className="text-accent">&gt;</span> labs.practice()
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            LABS <span className="text-primary text-glow-cyan">& PRACTICE</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Continuous hands-on practice is key to mastering cybersecurity. Here are the platforms I use to sharpen my skills.
          </p>
        </motion.div>

        {/* Labs Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {labs.map((lab, index) => (
            <motion.a
              key={lab.platform}
              href={lab.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="cyber-card p-6 group cursor-pointer hover:neon-border-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded neon-border group-hover:pulse-glow transition-all">
                  <lab.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                      {lab.platform}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {lab.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {lab.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-secondary text-muted-foreground font-mono text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Learning Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 cyber-card p-8"
        >
          <h3 className="font-display font-bold text-xl text-foreground mb-6 text-center">
            PRACTICE <span className="text-primary">STATS</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "50+", label: "Labs Completed" },
              { value: "10+", label: "CTF Challenges" },
              { value: "100+", label: "Hours Practiced" },
              { value: "4", label: "Platforms Active" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl font-bold text-primary text-glow-subtle">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-muted-foreground mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section Divider */}
        <div className="section-divider mt-24" />
      </div>
    </section>
  );
};

export default LabsSection;

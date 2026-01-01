import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Shield, Network, Bug, Lock } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Network Vulnerability Scanner",
    description: "Automated tool for scanning networks to identify potential vulnerabilities, open ports, and security misconfigurations.",
    tech: ["Python", "Nmap", "Scapy"],
    icon: Network,
    github: "https://github.com/noorulnisa416",
    featured: true,
  },
  {
    title: "Web Application Penetration Testing",
    description: "Comprehensive security assessment of web applications identifying OWASP Top 10 vulnerabilities.",
    tech: ["Burp Suite", "OWASP ZAP", "SQL Injection"],
    icon: Bug,
    github: "https://github.com/noorulnisa416",
    featured: true,
  },
  {
    title: "Security Monitoring Dashboard",
    description: "Real-time security monitoring solution for detecting and alerting on suspicious network activities.",
    tech: ["SIEM", "ELK Stack", "Python"],
    icon: Shield,
    github: "https://github.com/noorulnisa416",
    featured: false,
  },
  {
    title: "Password Security Analyzer",
    description: "Tool to analyze password strength and check for known data breaches using hash comparison.",
    tech: ["Python", "Hashcat", "API Integration"],
    icon: Lock,
    github: "https://github.com/noorulnisa416",
    featured: false,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-mono text-sm mb-2">
            <span className="text-accent">&gt;</span> projects.showcase()
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            MY <span className="text-primary text-glow-cyan">PROJECTS</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`cyber-card p-6 group ${
                project.featured ? "md:col-span-1" : ""
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/10 rounded neon-border">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary font-mono text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-primary text-primary-foreground font-mono text-xs font-bold">
                    FEATURED
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary/50 hover:bg-primary/10 hover:border-primary font-display"
          >
            <a
              href="https://github.com/noorulnisa416"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              VIEW ALL ON GITHUB
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>

        {/* Section Divider */}
        <div className="section-divider mt-24" />
      </div>
    </section>
  );
};

export default ProjectsSection;

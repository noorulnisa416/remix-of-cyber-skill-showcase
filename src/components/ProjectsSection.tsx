import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder, FolderOpen, ArrowRight } from "lucide-react";

const featuredProjects = [
  {
    number: "01",
    title: "Network Vulnerability Scanner",
    description: "Python-based tool for automated network scanning and vulnerability detection using Nmap and custom scripts.",
    tech: ["Python", "Nmap", "Networking"],
    github: "https://github.com/noorulnisa416",
    demo: "#",
  },
  {
    number: "02",
    title: "Web Application Pentest Report",
    description: "Comprehensive penetration testing report for a vulnerable web application, documenting findings and remediation steps.",
    tech: ["OWASP", "Burp Suite", "Web Security"],
    github: "https://github.com/noorulnisa416",
    demo: "#",
  },
];

const otherProjects = [
  {
    title: "Password Cracking Lab",
    description: "Home lab setup for password cracking techniques using Hashcat and John the Ripper with various hash types.",
    tech: ["Hashcat", "Password Security", "Lab"],
    github: "https://github.com/noorulnisa416",
  },
  {
    title: "SQL Injection Demo",
    description: "Educational demo showcasing various SQL injection techniques and prevention methods on a custom vulnerable app.",
    tech: ["SQL", "Web Security", "OWASP"],
    github: "https://github.com/noorulnisa416",
    demo: "#",
  },
  {
    title: "Active Directory Lab",
    description: "Virtual lab environment for practicing Active Directory attacks and defenses including Kerberoasting and Pass-the-Hash.",
    tech: ["Active Directory", "Windows", "Lab"],
    github: "https://github.com/noorulnisa416",
  },
  {
    title: "Phishing Campaign Analyzer",
    description: "Tool to analyze and detect phishing emails using header analysis and content inspection techniques.",
    tech: ["Python", "Email Security", "Analysis"],
    github: "https://github.com/noorulnisa416",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative rounded-3xl mx-4" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-2 px-4 py-2 border border-primary/50 rounded-full bg-card/50">
            <Folder className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">My Work</span>
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
            Featured <span className="text-primary text-glow-cyan">Projects</span>
          </h2>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="cyber-card p-6 relative rounded-xl"
            >
              {/* Project Number */}
              <div className="absolute top-4 right-4">
                <span className="font-mono text-primary text-xl font-bold">
                  {project.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-xl text-foreground mb-3 pr-12">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 border border-primary/50 text-primary font-mono text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Other Projects
          </h3>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="cyber-card p-6 rounded-xl"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <FolderOpen className="w-8 h-8 text-primary" />
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <h4 className="font-display font-bold text-lg text-foreground mb-2">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <p className="font-mono text-xs text-muted-foreground">
                {project.tech.join(" · ")}
              </p>
            </motion.div>
          ))}
        </div>

        {/* View All on GitHub Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center"
        >
          <a
            href="https://github.com/noorulnisa416"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-button inline-flex items-center gap-2 px-8 py-3 font-mono text-sm uppercase tracking-wider rounded-md"
          >
            View All on GitHub
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Section Divider */}
        <div className="section-divider mt-24" />
      </div>
    </section>
  );
};

export default ProjectsSection;

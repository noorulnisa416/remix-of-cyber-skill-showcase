import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, CheckCircle } from "lucide-react";

const certifications = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    status: "In Progress",
    description: "Foundational cybersecurity certification covering network security, compliance, and operational security.",
    inProgress: true,
  },
  {
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    status: "Planned",
    description: "Industry-recognized certification for ethical hacking and penetration testing methodologies.",
    inProgress: false,
  },
  {
    name: "CCNA",
    issuer: "Cisco",
    status: "In Progress",
    description: "Networking certification covering routing, switching, and network fundamentals.",
    inProgress: true,
  },
  {
    name: "Google Cybersecurity Certificate",
    issuer: "Google",
    status: "Completed",
    description: "Professional certificate covering security fundamentals, SIEM tools, and incident response.",
    inProgress: false,
    completed: true,
  },
];

const learningPath = [
  { step: 1, title: "Networking Fundamentals", status: "completed" },
  { step: 2, title: "Linux & Security Basics", status: "completed" },
  { step: 3, title: "Vulnerability Assessment", status: "current" },
  { step: 4, title: "Penetration Testing", status: "upcoming" },
  { step: 5, title: "Advanced Exploitation", status: "upcoming" },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 relative rounded-3xl mx-4" ref={ref}>
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
            <span className="text-accent">&gt;</span> certifications.verify()
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            CERTIFICATIONS <span className="text-primary text-glow-cyan">& PATH</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xl text-foreground mb-6">
              <Award className="w-6 h-6 text-primary inline mr-2" />
              CERTIFICATIONS
            </h3>
            {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="cyber-card p-5 rounded-xl group hover:neon-border-hover"
                >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      {cert.name}
                    </h4>
                    <p className="font-mono text-xs text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 font-mono text-xs rounded-lg ${
                      cert.completed
                        ? "bg-primary/20 text-primary"
                        : cert.inProgress
                        ? "bg-accent/20 text-accent"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {cert.status}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Learning Path */}
          <div>
            <h3 className="font-display font-bold text-xl text-foreground mb-6">
              <CheckCircle className="w-6 h-6 text-primary inline mr-2" />
              LEARNING JOURNEY
            </h3>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="cyber-card p-6 rounded-xl"
            >
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

                <div className="space-y-6">
                  {learningPath.map((item, index) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="relative pl-12"
                    >
                      {/* Step indicator */}
                      <div
                        className={`absolute left-0 w-8 h-8 rounded-xl flex items-center justify-center font-mono text-sm font-bold ${
                          item.status === "completed"
                            ? "bg-primary text-primary-foreground"
                            : item.status === "current"
                            ? "bg-accent text-accent-foreground pulse-glow"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {item.step}
                      </div>

                      <div
                        className={`${
                          item.status === "current" ? "text-accent" : 
                          item.status === "completed" ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        <h4 className="font-display font-bold">{item.title}</h4>
                        <span className="font-mono text-xs capitalize">
                          {item.status === "current" ? "Currently Learning" : item.status}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* SOC Analyst Path */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 cyber-card p-6 rounded-xl neon-border"
            >
              <h4 className="font-display font-bold text-lg text-primary mb-3">
                🎯 Career Goal: Penetration Tester
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Working towards becoming a skilled Penetration Tester with expertise 
                in vulnerability assessment, ethical hacking, and security consulting. 
                Currently building hands-on experience through CTFs, labs, and real-world projects.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Section Divider */}
        <div className="section-divider mt-24" />
      </div>
    </section>
  );
};

export default CertificationsSection;

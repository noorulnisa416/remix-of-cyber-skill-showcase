import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Send, Mail, Github, Linkedin, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

// EmailJS Configuration
const EMAILJS_SERVICE_ID = "service_zoqna0r";
const EMAILJS_TEMPLATE_ID = "template_9s0pykf";
const EMAILJS_PUBLIC_KEY = "aI6z75wQtlon_aQlq";

const ContactSection = () => {
  const sectionRef = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error",
        description:
          "Failed to send message. Please try again or email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "noorulnisa416@gmail.com",
      href: "mailto:noorulnisa416@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/noorulnisa416",
      href: "https://github.com/noorulnisa416",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/noorulnisa416",
      href: "https://www.linkedin.com/in/noorulnisa416/",
    },
  ];

  return (
    <section id="contact" className="py-24 relative rounded-3xl mx-4" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-mono text-sm mb-2">
            <span className="text-accent">&gt;</span> contact.init()
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            GET IN <span className="text-primary text-glow-cyan">TOUCH</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="cyber-card p-6">
              <h3 className="font-display font-bold text-xl text-foreground mb-4">
                Let's Build Something <span className="text-primary">Secure</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you have a project in mind, want to discuss cybersecurity,
                or just want to connect — I'm always open to new opportunities and
                conversations.
              </p>

              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-secondary/50 rounded hover:bg-secondary transition-colors group"
                  >
                    <div className="p-2 bg-primary/10 rounded neon-border group-hover:pulse-glow">
                      <link.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-muted-foreground">
                        {link.label}
                      </p>
                      <p className="text-foreground group-hover:text-primary transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Terminal Style Message */}
            <div className="cyber-card p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="ml-2 text-muted-foreground">terminal</span>
              </div>
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> echo "Looking forward to
                connecting with you!"
              </p>
              <p className="text-primary mt-2">
                Looking forward to connecting with you!
              </p>
              <p className="text-muted-foreground mt-2">
                <span className="text-primary">$</span>{" "}
                <span className="terminal-cursor">▋</span>
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="cyber-card p-6 md:p-8 space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-sm text-muted-foreground mb-2"
                >
                  <span className="text-primary">&gt;</span> Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-sm text-muted-foreground mb-2"
                >
                  <span className="text-primary">&gt;</span> Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-sm text-muted-foreground mb-2"
                >
                  <span className="text-primary">&gt;</span> Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground resize-none"
                  placeholder="Hello! I'd like to discuss..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                variant="cyberFilled"
                size="lg"
                className="w-full"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    SENDING...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    SEND MESSAGE
                    <Send className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

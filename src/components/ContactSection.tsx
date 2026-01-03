import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Send, Mail, Github, Linkedin, MapPin, Terminal, Check } from "lucide-react";
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
    subject: "",
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

      setFormData({ name: "", email: "", subject: "", message: "" });
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
      value: "your.email@example.com",
      href: "mailto:noorulnisa416@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/yourusername",
      href: "https://github.com/noorulnisa416",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/noorulnisa416",
      href: "https://www.linkedin.com/in/noorulnisa416/",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available Remotely",
      href: "#",
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
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 px-4 py-2 border border-primary/50 rounded-full bg-card/50">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">&gt;_ Get In Touch</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in working together or have a question? Feel free to reach out. I'm always open to
            discussing new opportunities and collaborations.
          </p>
          <div className="cyber-line mt-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Information Card */}
            <div className="cyber-card p-6 rounded-xl">
              <h3 className="font-display font-bold text-xl text-foreground mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href !== "#" ? "_blank" : undefined}
                    rel={link.href !== "#" ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/30 transition-colors group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg border border-primary/30">
                      <link.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-muted-foreground">
                        {link.label}
                      </p>
                      <p className="text-foreground group-hover:text-primary transition-colors text-sm">
                        {link.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Terminal Style Availability Card */}
            <div className="cyber-card p-6 rounded-xl font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="ml-2 text-muted-foreground">availability.sh</span>
              </div>
              <p className="text-muted-foreground mb-3">
                <span className="text-primary">$</span> check_availability
              </p>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-primary">Currently available for freelance projects</span>
                </p>
                <p className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-primary">Open to full-time opportunities</span>
                </p>
                <p className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-primary">Remote work preferred</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="cyber-card p-6 md:p-8 rounded-xl">
              <h3 className="font-display font-bold text-xl text-foreground mb-6">
                Send a Message
              </h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-mono text-xs text-muted-foreground mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono text-xs text-muted-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block font-mono text-xs text-muted-foreground mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-xs text-muted-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="cyberFilled"
                  size="lg"
                  className="w-full rounded-lg"
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

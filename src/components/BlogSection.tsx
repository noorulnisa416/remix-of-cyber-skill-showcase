import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Calendar, ArrowRight, Terminal } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Introduction to Web Application Penetration Testing",
    description: "A comprehensive guide to getting started with web application security testing...",
    date: "Dec 15, 2024",
    category: "Penetration Testing",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Setting Up Your First Home Lab for Cybersecurity",
    description: "Step-by-step guide to building a cybersecurity home lab using VirtualBox...",
    date: "Dec 10, 2024",
    category: "Lab Setup",
    readTime: "12 min read",
  },
  {
    id: 3,
    title: "Understanding SQL Injection Attacks",
    description: "Deep dive into SQL injection vulnerabilities, how they work, and prevention...",
    date: "Dec 05, 2024",
    category: "Web Security",
    readTime: "10 min read",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-24 relative rounded-3xl mx-4" ref={ref}>
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
              <span className="font-mono text-sm text-muted-foreground">&gt;_ My Writings</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Blog <span className="text-primary">&</span>{" "}
            <span className="text-gradient">Notes</span>
          </h2>
        </motion.div>

        <div className="cyber-line mb-12" />

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="cyber-card p-6 rounded-xl group cursor-pointer hover:border-primary/50 transition-all duration-300"
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 border border-primary/50 text-primary font-mono text-xs rounded-full">
                  {post.category}
                </span>
                <span className="text-muted-foreground text-xs font-mono">
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {post.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border/30">
                <div className="flex items-center gap-2 text-muted-foreground text-xs">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <span className="flex items-center gap-1 text-primary text-sm font-mono group-hover:gap-2 transition-all">
                  Read <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Section Divider */}
        <div className="section-divider mt-24" />
      </div>
    </section>
  );
};

export default BlogSection;
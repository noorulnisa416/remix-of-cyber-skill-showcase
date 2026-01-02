import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FileText, Calendar, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Introduction to Web Application Penetration Testing",
    excerpt: "A comprehensive guide to getting started with web application security testing, covering OWASP Top 10 vulnerabilities and common attack vectors.",
    date: "2024-12-15",
    category: "Penetration Testing",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Setting Up Your First Home Lab for Cybersecurity",
    excerpt: "Step-by-step guide to building a cybersecurity home lab using VirtualBox, Kali Linux, and vulnerable VMs for practice.",
    date: "2024-12-10",
    category: "Lab Setup",
    readTime: "12 min read",
  },
  {
    id: 3,
    title: "Understanding SQL Injection Attacks",
    excerpt: "Deep dive into SQL injection vulnerabilities, how they work, and effective prevention techniques for developers.",
    date: "2024-12-05",
    category: "Web Security",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Network Security Fundamentals",
    excerpt: "Essential networking concepts every cybersecurity professional should know, from TCP/IP to firewalls and IDS/IPS systems.",
    date: "2024-11-28",
    category: "Networking",
    readTime: "15 min read",
  },
  {
    id: 5,
    title: "My TryHackMe Journey: Tips and Lessons Learned",
    excerpt: "Personal experiences and tips from completing various TryHackMe rooms and paths, including recommendations for beginners.",
    date: "2024-11-20",
    category: "Personal",
    readTime: "6 min read",
  },
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog & Notes | Noor Ul Nisa</title>
        <meta 
          name="description" 
          content="Cybersecurity blog posts, notes, and tutorials covering penetration testing, web security, networking, and more." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        {/* Scanline Effect */}
        <div className="scanline" />
        
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-primary/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16 md:h-20">
              <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-sm">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
              <span className="font-display font-bold text-base md:text-lg tracking-wider text-foreground">
                NOOR_UL_NISA<span className="text-primary">.</span>
              </span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-20 md:pt-24 pb-16">
          <div className="container mx-auto px-4">
            {/* Page Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16"
            >
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-2 px-4 py-2 border border-primary/50 rounded-full bg-card/50">
                  <FileText className="w-4 h-4 text-primary" />
                  <span className="font-mono text-sm text-muted-foreground">My Writings</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
                Blog <span className="text-primary">&</span> <span className="text-primary text-glow-cyan">Notes</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base px-4">
                Documenting my cybersecurity journey, sharing knowledge, and exploring security concepts through writeups and tutorials.
              </p>
            </motion.div>

            {/* Blog Posts Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="cyber-card p-4 md:p-6 rounded-xl group cursor-pointer"
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
                  <h2 className="font-display font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/30">
                    <div className="flex items-center gap-2 text-muted-foreground text-xs">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </div>
                    <span className="flex items-center gap-1 text-primary text-sm font-mono group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Coming Soon Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mt-16"
            >
              <p className="text-muted-foreground font-mono text-sm">
                <span className="text-primary">&gt;</span> More posts coming soon...
              </p>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Blog;
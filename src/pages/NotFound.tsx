import { motion } from "framer-motion";
import { Shield, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center cyber-grid relative overflow-hidden">
      {/* Scanline Effect */}
      <div className="scanline" />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-card/50 backdrop-blur-sm neon-border font-mono text-sm">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">
              <span className="text-primary">error</span>::page_not_found
            </span>
          </div>

          <h1 className="font-display text-8xl md:text-9xl font-bold text-primary text-glow-cyan mb-4">
            404
          </h1>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            ACCESS <span className="text-primary">DENIED</span>
          </h2>

          <p className="text-muted-foreground font-mono max-w-md mx-auto mb-8">
            <span className="text-primary">&gt;</span> The page you're looking for has been encrypted, 
            deleted, or never existed in this dimension.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="cyber-button px-8 py-6 font-display">
              <Link to="/">
                <span className="relative z-10 flex items-center">
                  <Home className="w-5 h-5 mr-2" />
                  RETURN HOME
                </span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
              className="border-primary/50 hover:bg-primary/10 hover:border-primary px-8 py-6 font-display"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              GO BACK
            </Button>
          </div>

          {/* Terminal Style */}
          <div className="mt-12 cyber-card p-6 max-w-md mx-auto font-mono text-sm text-left">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="ml-2 text-muted-foreground">terminal</span>
            </div>
            <p className="text-muted-foreground">
              <span className="text-primary">$</span> locate requested_page
            </p>
            <p className="text-destructive mt-1">
              Error: Page not found in filesystem
            </p>
            <p className="text-muted-foreground mt-2">
              <span className="text-primary">$</span> suggest --alternative
            </p>
            <p className="text-foreground mt-1">
              Navigate to homepage for available routes
            </p>
            <p className="text-muted-foreground mt-2">
              <span className="text-primary">$</span>{" "}
              <span className="terminal-cursor">▋</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;

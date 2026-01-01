import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import LabsSection from "@/components/LabsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Noor Ul Nisa | Cybersecurity Professional & Penetration Tester</title>
        <meta 
          name="description" 
          content="Noor Ul Nisa - Cybersecurity professional specializing in penetration testing, network security, and threat detection. Explore my projects, certifications, and skills." 
        />
        <meta name="keywords" content="cybersecurity, penetration testing, ethical hacker, network security, SOC analyst, security professional" />
        <meta property="og:title" content="Noor Ul Nisa | Cybersecurity Portfolio" />
        <meta property="og:description" content="Cybersecurity professional specializing in penetration testing and network security." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://noorulnisa.dev" />
      </Helmet>
      
      <div className="min-h-screen bg-background overflow-x-hidden">
        {/* Scanline Effect */}
        <div className="scanline" />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <LabsSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;

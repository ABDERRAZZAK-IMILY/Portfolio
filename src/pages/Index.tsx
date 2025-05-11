
import { useEffect } from 'react';
import SpaceBackground from '@/components/SpaceBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css';
    document.head.appendChild(link);
    
    // Update document title
    document.title = "Abderrazzak Imily - Web Developer Portfolio";
    
    return () => {
      // Cleanup if needed
      document.head.removeChild(link);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-space">
      {/* Space Background with stars */}
      <SpaceBackground />
      
      {/* Fixed planets in the background */}
      <div className="planet bg-blue-500 w-64 h-64 top-16 -right-20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="planet bg-purple-500 w-40 h-40 bottom-16 -left-10 animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="shooting-star top-1/4 left-1/4" style={{ width: '150px', animationDelay: '2s' }}></div>
      <div className="shooting-star top-1/3 left-2/3" style={{ width: '200px', animationDelay: '7s' }}></div>
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Skills Section */}
        <SkillsSection />
        
        {/* Projects Section */}
        <ProjectsSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

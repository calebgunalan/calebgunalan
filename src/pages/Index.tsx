import { Suspense } from 'react';
import CyberBackground from '@/components/3d/CyberBackground';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* 3D Background */}
      <Suspense fallback={<div className="fixed inset-0 bg-background" />}>
        <CyberBackground />
      </Suspense>

      {/* Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-border/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground font-mono text-sm">
            © 2024 M. Caleb Gunalan. Securing the digital frontier.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;


import React from 'react';
import Navbar from '@/components/Navbar';
import VideoHero from '@/components/VideoHero';
import AboutSection from '@/components/AboutSection';
import MissionSection from '@/components/MissionSection';
import DocumentarySection from '@/components/DocumentarySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  // You can replace this with your actual video URL when available
  const institutionalVideoUrl = ""; // e.g., "https://www.youtube.com/embed/your-video-id"
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <VideoHero videoUrl={institutionalVideoUrl} />
        <AboutSection />
        <MissionSection />
        <DocumentarySection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

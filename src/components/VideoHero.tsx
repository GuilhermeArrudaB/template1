
import React from 'react';

interface VideoHeroProps {
  videoUrl?: string;
}

const VideoHero: React.FC<VideoHeroProps> = ({ videoUrl }) => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 bg-black-rich">
        {videoUrl ? (
          <div className="relative w-full h-full">
            <iframe 
              src={videoUrl}
              className="absolute inset-0 w-full h-full object-cover"
              title="Institutional Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-graphite-dark to-black-rich">
            <div className="text-center p-8 animate-pulse">
              <p className="text-gold text-xl mb-4">Video Placeholder</p>
              <p className="text-white-pure/60 text-sm">Institutional video will be displayed here</p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black-rich via-transparent to-black-rich/80"></div>
      </div>
      
      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 text-center mt-16">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight animate-fade-in">
          <span className="text-gradient-gold">BLACK NIGGA</span>
        </h1>
        <p className="text-xl md:text-2xl text-white-pure/80 max-w-2xl mx-auto mb-8 animate-fade-in">
          Produtora de conteúdo audiovisual com foco em narrativas impactantes
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
          <a 
            href="#about" 
            className="px-6 py-3 rounded bg-gold hover:bg-gold-dark text-black-rich font-medium transition-colors gold-shine"
          >
            Saiba mais
          </a>
          <a 
            href="#documentary" 
            className="px-6 py-3 rounded border border-gold text-gold hover:bg-gold/10 font-medium transition-colors"
          >
            Documentário
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white-pure/50 text-sm mb-2">Scroll Down</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default VideoHero;

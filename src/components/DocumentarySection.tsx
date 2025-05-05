
import React from 'react';

const DocumentarySection: React.FC = () => {
  return (
    <section id="documentary" className="py-20 bg-graphite relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        {/* Background pattern or texture could go here */}
        <div className="w-full h-full bg-gradient-to-br from-gold/5 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="text-gradient-gold">Documentário</span> Edhie Colucci
            </h2>
            <p className="text-xl text-white-pure/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          
          <div className="bg-black-rich rounded-lg overflow-hidden shadow-xl shadow-black-rich/50 mb-12">
            <div className="aspect-video bg-graphite-dark flex items-center justify-center relative">
              {/* Video thumbnail placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-16 h-16 text-gold opacity-80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 8L16 12L10 16V8Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-gold/50">Trailer do documentário</span>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-white-pure/80">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <div className="mt-8 flex justify-center">
              <a 
                href="#" 
                className="px-6 py-3 rounded bg-gold hover:bg-gold-dark text-black-rich font-medium transition-colors gold-shine"
              >
                Assista ao trailer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentarySection;

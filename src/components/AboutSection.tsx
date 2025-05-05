
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-graphite-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              <span className="text-gradient-gold">Sobre</span> Nós
            </h2>
            <p className="text-white-pure/80">
              A Black Nigga é uma produtora audiovisual inovadora dedicada a criar conteúdo 
              que desafia convenções e apresenta novas perspectivas. Fundada com a missão 
              de dar voz a histórias únicas e autênticas, buscamos excelência técnica e 
              profundidade narrativa em cada projeto.
            </p>
            <p className="text-white-pure/80">
              Nossa equipe combina talento criativo e experiência técnica para desenvolver 
              documentários, filmes e conteúdo audiovisual que não apenas entretém, mas 
              também provoca reflexão e conexão emocional com o público.
            </p>
          </div>
          <div className="lg:w-1/2 rounded-lg overflow-hidden border border-gold/20">
            <div className="aspect-video bg-graphite relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gold/50">Imagem da equipe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

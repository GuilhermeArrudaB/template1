
import React from 'react';

interface ValueItemProps {
  title: string;
  description: string;
}

const ValueItem: React.FC<ValueItemProps> = ({ title, description }) => {
  return (
    <div className="border-l-2 border-gold pl-4 py-2">
      <h4 className="text-xl font-display font-medium text-gold mb-2">{title}</h4>
      <p className="text-white-pure/70">{description}</p>
    </div>
  );
};

const MissionSection: React.FC = () => {
  return (
    <section id="mission" className="py-20 bg-black-rich">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            <span className="text-gradient-gold">Missão e</span> Valores
          </h2>
          <p className="text-xl text-white-pure/80">
            Nosso compromisso é contar histórias que importam, dando visibilidade a narrativas 
            que inspiram, educam e transformam.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-semibold text-white-pure mb-6">Nossa Missão</h3>
            <p className="text-white-pure/80">
              Criar conteúdo audiovisual de excelência que conecta pessoas através de histórias 
              autênticas e significativas, amplificando vozes e perspectivas diversas que enriquecem 
              nossa compreensão do mundo.
            </p>
            <p className="text-white-pure/80">
              Buscamos inovar constantemente, mantendo o compromisso com a qualidade técnica e a 
              profundidade narrativa em cada projeto que desenvolvemos.
            </p>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl font-display font-semibold text-white-pure mb-6">Nossos Valores</h3>
            <div className="space-y-8">
              <ValueItem 
                title="Autenticidade" 
                description="Compromisso com histórias genuínas e representações honestas de nossas narrativas."
              />
              <ValueItem 
                title="Excelência" 
                description="Busca constante pelo mais alto padrão de qualidade em todos os aspectos da produção."
              />
              <ValueItem 
                title="Inovação" 
                description="Exploração de novas técnicas e abordagens para contar histórias de maneiras impactantes."
              />
              <ValueItem 
                title="Respeito" 
                description="Valorização de todas as perspectivas e tratamento ético de cada narrativa que contamos."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

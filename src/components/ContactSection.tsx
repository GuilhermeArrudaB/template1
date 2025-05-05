
import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-black-rich">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="text-gradient-gold">Entre em</span> Contato
            </h2>
            <p className="text-xl text-white-pure/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white-pure mb-2 font-medium">
                    Nome
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-graphite border border-graphite-light rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-white-pure"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white-pure mb-2 font-medium">
                    E-mail
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-graphite border border-graphite-light rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-white-pure"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white-pure mb-2 font-medium">
                    Mensagem
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-graphite border border-graphite-light rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-white-pure"
                    placeholder="Sua mensagem..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-6 py-3 rounded bg-gold hover:bg-gold-dark text-black-rich font-medium transition-colors flex items-center gap-2 gold-shine"
                >
                  {isSubmitting ? (
                    <>Enviando...</>
                  ) : (
                    <>
                      <Send size={18} /> 
                      Enviar mensagem
                    </>
                  )}
                </button>
              </form>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="bg-graphite rounded-lg p-8 border border-graphite-light/20">
                <h3 className="text-2xl font-display font-semibold text-gold mb-6">
                  Contato direto
                </h3>
                
                <p className="text-white-pure/80 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                
                <a 
                  href="mailto:contato@blacknigga.com" 
                  className="flex items-center gap-3 text-gold hover:text-gold-light transition-colors"
                >
                  <Mail size={24} />
                  <span className="text-lg">contato@blacknigga.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

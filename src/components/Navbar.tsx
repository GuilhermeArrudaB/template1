
import React, { useState } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Sobre nós', href: '#about' },
  { label: 'Missão e valores', href: '#mission' },
  { label: 'Documentário Edhie Colucci', href: '#documentary' },
  { label: 'Contato', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black-rich/90 backdrop-blur-md border-b border-graphite/30">
      <div className="container px-4 mx-auto flex items-center justify-between h-16 md:h-20">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-sm font-medium text-white-pure/70 hover:text-gold transition-colors px-1 py-2"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white-pure" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 top-16 bg-black-rich/95 backdrop-blur-md p-4 z-40 md:hidden flex flex-col gap-4 transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col gap-6 pt-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-lg font-medium text-white-pure/80 hover:text-gold transition-colors py-2 border-b border-graphite/30"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

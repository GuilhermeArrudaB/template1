
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <h1 className="text-2xl md:text-3xl font-display font-bold tracking-tighter">
        <span className="text-gradient-gold">BLACK</span> <span className="text-white-pure">NIGGA</span>
      </h1>
    </div>
  );
};

export default Logo;

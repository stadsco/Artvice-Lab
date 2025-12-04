import React from 'react';
import { motion } from 'framer-motion';

interface GlassOrbProps {
  className?: string;
  delay?: number;
  size?: string;
  color?: 'white' | 'blue' | 'teal';
}

export const GlassOrb: React.FC<GlassOrbProps> = ({ 
  className = '', 
  delay = 0, 
  size = "w-64 h-64",
  color = 'white' 
}) => {
  
  const getGradient = () => {
    switch(color) {
      case 'blue': return 'from-accent-blue/30 to-transparent';
      case 'teal': return 'from-accent-teal/30 to-transparent';
      default: return 'from-white/20 to-transparent';
    }
  };

  const getShine = () => {
    switch(color) {
      case 'blue': return 'bg-accent-blue/40';
      case 'teal': return 'bg-accent-teal/40';
      default: return 'bg-white/40';
    }
  };

  const getBorder = () => {
    switch(color) {
      case 'blue': return 'border-accent-blue/20 shadow-[inset_0_0_40px_rgba(137,176,210,0.2)]';
      case 'teal': return 'border-accent-teal/20 shadow-[inset_0_0_40px_rgba(137,210,189,0.2)]';
      default: return 'border-white/10 shadow-[inset_0_0_40px_rgba(255,255,255,0.1)]';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
      transition={{ 
        duration: 1.5,
        y: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: delay },
        rotate: { repeat: Infinity, duration: 10, ease: "easeInOut", delay: delay }
      }}
      className={`absolute rounded-full pointer-events-none z-0 ${className} ${size}`}
    >
      {/* Core Gradient */}
      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${getGradient()} blur-3xl opacity-40`} />
      
      {/* Shine/Reflection */}
      <div className={`absolute top-4 left-10 w-1/4 h-1/4 rounded-full ${getShine()} blur-xl`} />
      
      {/* Glass Rim */}
      <div className={`absolute inset-0 rounded-full border ${getBorder()}`} />
    </motion.div>
  );
};
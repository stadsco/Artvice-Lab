import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-body font-medium tracking-body transition-all duration-300 text-sm md:text-base px-8 py-3 md:py-4 leading-body";
  
  const variants = {
    primary: "bg-white text-background hover:scale-105 hover:shadow-[0_0_20px_rgba(137,176,210,0.5)]", // using accent-blue hex for shadow
    outline: "bg-transparent border border-white/40 text-white hover:border-accent-blue hover:text-accent-blue hover:bg-white/5 backdrop-blur-sm",
    ghost: "bg-transparent text-white/70 hover:text-white hover:bg-white/5"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <motion.button 
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Button } from './ui/Button';
import { Logo } from './ui/Logo';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? 'py-4 bg-[#070A0E]/80 backdrop-blur-xl border-white/5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]' 
            : 'py-8 bg-transparent border-transparent'
        }`}
      >
        {/* Tech Line Gradient (Only on Scroll) */}
        <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent transition-opacity duration-700 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
          
          {/* Logo */}
          <a href="#" className="relative group z-50">
            <Logo 
              variant="horizontal" 
              className="h-8 md:h-9 w-auto text-white group-hover:text-accent-blue transition-colors duration-500" 
            />
          </a>

          {/* Desktop Nav - Control Panel Style */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/0 border border-transparent">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="px-5 py-2 rounded-full text-sm font-body font-medium text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300 tracking-body relative group"
              >
                {link.label}
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA Group */}
          <div className="hidden md:flex items-center gap-6">
            <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className="text-sm font-body text-white/40 hover:text-white transition-colors">
              Área do Cliente
            </a>
            <Button 
              variant="outline" 
              className="!py-2.5 !px-6 text-sm hover:!bg-white hover:!text-black hover:!border-white transition-all duration-300" 
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Seja Parceiro
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50 p-2 text-white/80 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay - Premium Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#070A0E]/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
          >
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent-blue/10 blur-[100px] rounded-full pointer-events-none" />
             <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-teal/10 blur-[100px] rounded-full pointer-events-none" />

            <nav className="flex flex-col items-center gap-8 relative z-10 w-full px-8">
              {NAV_LINKS.map((link, index) => (
                <motion.a 
                  key={link.label} 
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-3xl font-heading font-medium text-white tracking-heading hover:text-accent-blue transition-colors flex items-center gap-4 group w-full justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                  <ArrowRight className="w-0 opacity-0 group-hover:w-6 group-hover:opacity-100 transition-all duration-300 text-accent-blue" />
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full pt-8 mt-8 border-t border-white/10"
              >
                <Button 
                  fullWidth 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="!text-lg !py-5"
                >
                  Quero ser parceiro
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
import React from 'react';
import { Instagram, Linkedin, Facebook, ArrowUp, ShieldCheck } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Logo } from './ui/Logo';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020202] border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-20 border-b border-white/5 pb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-5">
             <a href="#" className="inline-block mb-8">
              <Logo variant="tagline" className="h-16 w-auto text-white hover:text-accent-blue transition-colors duration-500" />
            </a>
            <p className="text-white/50 text-lg font-body leading-relaxed mb-8 max-w-sm tracking-body">
              Redefinindo a prótese dentária com precisão industrial e acabamento artesanal. O parceiro definitivo para clínicas de alta performance.
            </p>
            
            <div className="flex gap-4">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Navigation */}
            <div>
              <h4 className="font-complement font-medium uppercase tracking-widest text-xs text-white/30 mb-8">Menu</h4>
              <ul className="space-y-4">
                {NAV_LINKS.map(link => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="text-sm font-body text-white/60 hover:text-accent-blue transition-colors tracking-wide flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent-blue opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-complement font-medium uppercase tracking-widest text-xs text-white/30 mb-8">Contato</h4>
              <ul className="space-y-4 text-sm font-body text-white/60 tracking-wide">
                <li className="hover:text-white transition-colors cursor-pointer">contato@artvicelab.com</li>
                <li className="hover:text-white transition-colors cursor-pointer">+55 (11) 99999-9999</li>
                <li className="text-white/40">Av. Paulista, 1000 - SP</li>
              </ul>
            </div>

            {/* Technical Badge */}
            <div className="flex flex-col items-start">
               <h4 className="font-complement font-medium uppercase tracking-widest text-xs text-white/30 mb-8">Certificação</h4>
               
               <div className="group p-4 rounded-xl bg-surface/50 border border-white/5 backdrop-blur-sm hover:border-accent-teal/30 transition-colors duration-500 cursor-default">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-accent-teal/10 text-accent-teal">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-complement uppercase tracking-widest text-white/40">Tecnologia</p>
                      <p className="text-sm font-heading font-bold text-white">CAD/CAM System</p>
                    </div>
                  </div>
                  <div className="h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-accent-teal/50 group-hover:w-full transition-all duration-700 ease-out"></div>
                  </div>
               </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-xs font-body text-white/30 tracking-wide flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Artvice Lab.</p>
            <div className="flex gap-6 justify-center">
              <a href="#" className="hover:text-white/50 transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white/50 transition-colors">Termos</a>
            </div>
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-complement uppercase tracking-widest text-white/40 hover:text-white transition-colors"
          >
            Voltar ao topo
            <div className="p-2 rounded-full border border-white/10 group-hover:border-white/30 group-hover:bg-white/5 transition-all">
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>

        </div>
      </div>
    </footer>
  );
};
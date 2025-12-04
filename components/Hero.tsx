import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight, CheckCircle2, TrendingUp, Clock } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-32 pb-20">
      
      {/* --- Background Elements --- */}
      
      {/* 1. Technical Grid Background (CAD/CAM vibe) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* 2. Top Spotlight Glow */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent-blue/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* 3. Secondary Teal Accent Glow */}
      <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-accent-teal/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          {/* Badge High Ticket */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 hover:border-accent-blue/30 transition-colors cursor-default"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-teal"></span>
            </span>
            <span className="text-xs font-complement font-medium uppercase tracking-widest text-white/80">
              Laboratório Digital B2B
            </span>
          </motion.div>

          {/* Headline Escultural */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-semibold text-white tracking-tighter leading-[1.05] mb-8"
          >
            A excelência que sua <br className="hidden md:block" />
            clínica exige, com a <br className="hidden md:block" />
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-white to-accent-teal">
                precisão que falta.
              </span>
              {/* Underline sutil */}
              <motion.svg 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute -bottom-2 left-0 w-full h-3 text-accent-blue/30 -z-0"
                viewBox="0 0 100 10" 
                preserveAspectRatio="none"
              >
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </motion.svg>
            </span>
          </motion.h1>

          {/* Subheadline persuasiva */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg md:text-xl font-body text-white/60 mb-10 leading-relaxed tracking-wide"
          >
            Elimine retrabalhos e garanta previsibilidade total em próteses protocolo. 
            Somos a extensão técnica de alta performance do seu consultório.
          </motion.p>

          {/* CTAs & Micro-conversion text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <Button 
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="!py-4 !px-10 text-lg shadow-[0_0_30px_-5px_rgba(137,176,210,0.3)] hover:shadow-[0_0_50px_-10px_rgba(137,176,210,0.5)]"
              >
                Quero ser parceiro
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="ghost" 
                onClick={() => document.getElementById('casos')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white/60 hover:text-white"
              >
                Ver casos clínicos
              </Button>
            </div>

            {/* Social Proof Line */}
            <div className="flex items-center gap-2 text-sm text-white/40 font-body">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full bg-surface border border-white/10 flex items-center justify-center text-[10px] overflow-hidden">
                    <img src={`https://picsum.photos/50/50?random=${i+10}`} alt="Doctor" className="w-full h-full object-cover opacity-70" />
                  </div>
                ))}
              </div>
              <p>Junte-se a +200 dentistas parceiros</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Metrics Bar (Bottom of Hero) */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-black/40 backdrop-blur-sm hidden md:block"
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            
            <div className="flex items-center justify-center gap-4 px-4">
              <div className="p-3 rounded-full bg-accent-blue/10 text-accent-blue">
                <CheckCircle2 size={24} />
              </div>
              <div className="text-left">
                <p className="text-2xl font-heading font-bold text-white">99.8%</p>
                <p className="text-xs font-complement uppercase tracking-wider text-white/40">Precisão de Adaptação</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 px-4">
              <div className="p-3 rounded-full bg-accent-teal/10 text-accent-teal">
                <Clock size={24} />
              </div>
              <div className="text-left">
                <p className="text-2xl font-heading font-bold text-white">5 Dias</p>
                <p className="text-xs font-complement uppercase tracking-wider text-white/40">Prazo Médio (Fases)</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 px-4">
              <div className="p-3 rounded-full bg-white/5 text-white">
                <TrendingUp size={24} />
              </div>
              <div className="text-left">
                <p className="text-2xl font-heading font-bold text-white">+5k</p>
                <p className="text-xs font-complement uppercase tracking-wider text-white/40">Casos Entregues</p>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};
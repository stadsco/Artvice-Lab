
import React from 'react';
import { STEPS } from '../constants';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight, UploadCloud, Cpu, PackageCheck } from 'lucide-react';

const ICONS = [UploadCloud, Cpu, PackageCheck];

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-32 bg-background relative overflow-hidden">
      
      {/* Background Tech Grid - subtle */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent-blue"></span>
            <span className="text-xs font-complement font-medium uppercase tracking-widest text-accent-blue">
              Fluxo Digital
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-semibold text-white mb-6 tracking-heading leading-[1.1]"
          >
            Do arquivo STL à entrega <br />
            <span className="text-white/40">em 3 etapas simples.</span>
          </motion.h2>

          <p className="text-lg font-body text-white/60 leading-relaxed tracking-body">
            Integração total com seu scanner intraoral e fluxo de trabalho.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {STEPS.map((step, index) => {
              const Icon = ICONS[index];
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative flex flex-col items-center text-center"
                >
                  {/* Icon Wrapper (The anchor on the line) */}
                  <div className="relative mb-8">
                     {/* Active state glow */}
                     <div className="absolute inset-0 bg-accent-blue/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                     
                     <div className="w-20 h-20 rounded-2xl bg-surface border border-white/10 flex items-center justify-center relative z-10 group-hover:border-accent-blue/50 group-hover:scale-110 transition-all duration-500 shadow-2xl bg-black">
                        <Icon size={32} className="text-white/70 group-hover:text-accent-blue transition-colors" strokeWidth={1.5} />
                        
                        {/* Number Badge */}
                        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-surface border border-white/10 flex items-center justify-center text-xs font-heading font-bold text-white shadow-lg group-hover:border-accent-blue group-hover:text-accent-blue transition-colors">
                           {step.number}
                        </div>
                     </div>
                  </div>

                  {/* Content Card */}
                  <div className="p-8 rounded-2xl bg-surface/30 border border-white/5 hover:bg-surface/50 hover:border-white/10 transition-all duration-300 w-full min-h-[180px] flex flex-col items-center backdrop-blur-sm">
                    <h3 className="text-xl font-heading font-medium text-white mb-4 tracking-tight group-hover:text-accent-blue transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm font-body text-white/50 leading-relaxed tracking-body">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Mobile Connector */}
                  {index !== STEPS.length - 1 && (
                    <div className="md:hidden w-[1px] h-12 bg-gradient-to-b from-white/10 to-transparent my-4" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.6 }}
           className="mt-20 flex justify-center"
        >
          <div className="p-[1px] rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent">
             <Button 
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="!py-4 !px-12 text-lg shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_-10px_rgba(137,176,210,0.4)]"
             >
                Iniciar Parceria
                <ArrowRight className="ml-2 w-5 h-5" />
             </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

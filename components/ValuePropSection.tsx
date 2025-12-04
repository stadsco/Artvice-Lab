import React from 'react';
import { VALUE_PROPS } from '../constants';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

export const ValuePropSection: React.FC = () => {
  return (
    <section id="diferenciais" className="py-32 bg-background relative overflow-hidden">
      
      {/* Background Grid Sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Lado Esquerdo: Sticky Header + CTA */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-8 h-[1px] bg-accent-blue"></div>
                  <span className="text-xs font-complement font-medium uppercase tracking-widest text-accent-blue">
                    Proposta de Valor
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white mb-6 tracking-heading leading-[1.1]">
                  Por que a Artvice <br />
                  é a escolha das <br />
                  <span className="text-white/40">melhores clínicas?</span>
                </h2>

                <p className="text-lg font-body text-white/60 mb-10 leading-relaxed tracking-body max-w-md">
                  Resolvemos as maiores dores do dentista protesista com processos industriais e acabamento artístico.
                </p>

                <Button 
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group"
                >
                  Quero ser parceiro
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Lado Direito: Grid de Cards High Tech */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {VALUE_PROPS.map((prop, index) => {
                const Icon = prop.icon;
                return (
                  <motion.div
                    key={prop.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative p-8 rounded-2xl bg-surface/50 border border-white/5 hover:bg-surface hover:border-accent-blue/20 transition-all duration-500 flex flex-col min-h-[280px]"
                  >
                    {/* Icon Chip */}
                    <div className="mb-auto">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 border border-white/5 text-white group-hover:text-accent-blue group-hover:bg-accent-blue/10 group-hover:border-accent-blue/20 transition-all duration-500 shadow-inner">
                        <Icon size={26} strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-heading font-medium text-white mb-3 tracking-tight group-hover:text-white transition-colors">
                        {prop.title}
                      </h3>
                      <p className="text-sm font-body text-white/50 leading-relaxed tracking-body group-hover:text-white/70 transition-colors">
                        {prop.description}
                      </p>
                    </div>

                    {/* Interactive Border Gradient */}
                    <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/5 pointer-events-none transition-colors duration-500" />
                    
                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-2 h-2 rounded-full bg-accent-blue/50 blur-[2px]" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
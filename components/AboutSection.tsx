import React from 'react';
import { FEATURES } from '../constants';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-32 bg-background relative overflow-hidden">
      
      {/* Background Decor - Right Side Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-blue/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Coluna Esquerda: Narrativa Institucional */}
          <div className="lg:col-span-5 sticky top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-[1px] bg-accent-teal"></div>
                <span className="text-xs font-complement font-medium uppercase tracking-widest text-accent-teal">
                  Nossa Essência
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white mb-8 tracking-heading leading-[1.1]">
                Tecnologia que amplia a arte da <span className="text-white/40">odontologia.</span>
              </h2>

              <div className="space-y-6 text-lg font-body text-white/60 leading-relaxed tracking-body">
                <p>
                  Na Artvice Lab, não apenas fabricamos próteses; nós materializamos a visão clínica do dentista com uma precisão micrométrica que apenas a indústria 4.0 permite.
                </p>
                <p>
                  Entendemos que por trás de cada arquivo STL existe um paciente esperando recuperar sua autoestima. Por isso, combinamos a frieza exata do CAD/CAM com o olhar sensível de ceramistas seniores.
                </p>
              </div>

              <div className="mt-10">
                <a 
                  href="#contato" 
                  className="group inline-flex items-center gap-3 text-white font-body font-medium hover:text-accent-blue transition-colors"
                >
                  <span className="border-b border-white/20 group-hover:border-accent-blue pb-1 transition-colors">
                    Conhecer nossa estrutura
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Coluna Direita: Bento Grid Técnico */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {FEATURES.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative p-8 rounded-3xl bg-surface border border-white/5 overflow-hidden hover:border-white/10 transition-colors duration-500"
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white group-hover:bg-accent-blue group-hover:text-background group-hover:scale-110 transition-all duration-300 shadow-lg">
                          <Icon size={22} strokeWidth={1.5} />
                        </div>
                        <span className="text-xs font-complement font-bold text-white/20 group-hover:text-accent-blue/50 transition-colors">
                          0{index + 1}
                        </span>
                      </div>
                      
                      <div className="mt-auto">
                        <h3 className="text-xl font-heading font-medium text-white mb-3 tracking-tight group-hover:text-accent-blue transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-sm font-body text-white/50 leading-relaxed tracking-body group-hover:text-white/70 transition-colors">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Decorative Corner Line */}
                    <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-3xl" />
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
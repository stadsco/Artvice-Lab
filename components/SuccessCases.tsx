import React, { useRef } from 'react';
import { TESTIMONIALS } from '../constants';
import { motion } from 'framer-motion';
import { Quote, Star, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

export const SuccessCases: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="casos" className="py-32 bg-black relative border-t border-white/5 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-accent-teal/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-6"
            >
               <div className="w-8 h-[1px] bg-accent-teal"></div>
               <span className="text-xs font-complement font-medium uppercase tracking-widest text-accent-teal">
                 Prova Social
               </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-semibold text-white mb-6 tracking-heading leading-[1.1]"
            >
              A escolha de quem exige <br />
              <span className="text-white/40">perfeição.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg font-body text-white/60 leading-relaxed tracking-body max-w-lg"
            >
              Dentistas de alta performance não arriscam sua reputação. Veja quem já elevou o nível de entrega com a Artvice.
            </motion.p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="group p-4 rounded-full border border-white/10 text-white bg-surface hover:bg-white hover:text-black transition-all duration-300 active:scale-95"
              aria-label="Anterior"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="group p-4 rounded-full border border-white/10 text-white bg-surface hover:bg-white hover:text-black transition-all duration-300 active:scale-95"
              aria-label="Próximo"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Cards Container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 md:gap-8 px-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide -mr-[calc(100vw-100%)]"
        style={{ scrollPaddingLeft: '1.5rem' }}
      >
        {TESTIMONIALS.map((t, index) => (
          <motion.div 
            key={t.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="min-w-[320px] md:min-w-[500px] snap-center bg-surface/50 backdrop-blur-sm border border-white/5 p-8 md:p-10 rounded-3xl relative group hover:border-accent-teal/30 transition-all duration-500 hover:bg-surface flex flex-col justify-between"
          >
            {/* Top Row: Quote Icon & Badge */}
            <div className="flex justify-between items-start mb-8">
              <Quote className="text-accent-teal/50 w-8 h-8 md:w-10 md:h-10 group-hover:text-accent-teal transition-colors" />
              <div className="flex gap-1">
                {[1,2,3,4,5].map(star => (
                  <Star key={star} size={16} className="fill-accent-teal text-accent-teal" />
                ))}
              </div>
            </div>

            {/* Content */}
            <blockquote className="text-xl md:text-2xl font-heading font-medium text-white mb-10 leading-tight tracking-tight">
              "{t.quote}"
            </blockquote>
            
            {/* Footer: Author */}
            <div className="flex items-center gap-4 mt-auto pt-8 border-t border-white/5">
              <div className="relative">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 overflow-hidden ring-2 ring-transparent group-hover:ring-accent-teal/50 transition-all">
                   <img src={t.image} alt={t.doctorName} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-accent-teal text-black rounded-full p-0.5 md:p-1 border-2 border-surface">
                  <CheckCircle2 size={12} strokeWidth={3} />
                </div>
              </div>
              
              <div>
                <h4 className="font-heading font-semibold text-white tracking-wide text-sm md:text-base">{t.doctorName}</h4>
                <p className="text-xs font-complement uppercase tracking-widest text-accent-teal">{t.role}</p>
              </div>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
          </motion.div>
        ))}
        
        {/* CTA Card at the end of the scroll */}
         <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="min-w-[300px] snap-center flex flex-col items-center justify-center bg-gradient-to-br from-accent-teal/10 to-surface border border-accent-teal/20 p-10 rounded-3xl relative group cursor-pointer hover:scale-[0.98] transition-all"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="text-center">
              <h3 className="text-2xl font-heading font-bold text-white mb-2">Seja o próximo</h3>
              <p className="text-sm font-body text-white/50 mb-8">Case de sucesso Artvice</p>
            </div>
            
            <div className="w-16 h-16 rounded-full bg-accent-teal text-black flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(137,210,189,0.4)] transition-all duration-300">
              <ArrowRight size={28} />
            </div>
         </motion.div>
      </div>

    </section>
  );
};

import React, { useState } from 'react';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Mail, MessageCircle, Building2, User } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    clinic: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    if (currentStep === 1) {
      if (!formData.name.trim()) { newErrors.name = 'Nome é obrigatório'; isValid = false; }
      if (!formData.clinic.trim()) { newErrors.clinic = 'Nome da clínica é obrigatório'; isValid = false; }
    }

    if (currentStep === 2) {
      if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) { newErrors.email = 'Email inválido'; isValid = false; }
      if (!formData.phone.trim()) { newErrors.phone = 'WhatsApp é obrigatório'; isValid = false; }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setDirection(1);
      setStep(prev => prev + 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(step)) return;

    setLoading(true);
    // Simulate API Call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    setSuccess(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear error when user types
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  return (
    <section id="contato" className="py-24 bg-background relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-accent-teal/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Copy & Trust */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-[1px] bg-accent-teal"></div>
                <span className="text-xs font-complement font-medium uppercase tracking-widest text-accent-teal">
                  Parceria Exclusiva
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-heading font-semibold text-white mb-6 tracking-heading leading-[1.05]">
                Vamos elevar o <br />
                padrão da sua <br />
                <span className="text-white/40">clínica?</span>
              </h2>

              <p className="text-lg font-body text-white/60 mb-10 leading-relaxed tracking-body max-w-md">
                Junte-se ao grupo seleto de dentistas que não aceitam menos que a excelência. Preencha os dados ao lado para iniciar.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white/80">
                  <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-accent-teal">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-complement uppercase tracking-widest text-white/40">Suporte Direto</p>
                    <p className="font-heading font-medium text-lg">Discussão de casos via WhatsApp</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-white/80">
                  <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-accent-teal">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-complement uppercase tracking-widest text-white/40">Garantia Artvice</p>
                    <p className="font-heading font-medium text-lg">Qualidade assegurada em cada peça</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-teal blur-3xl opacity-10 rounded-full pointer-events-none" />
             
             <div className="bg-surface/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col">
                
                {success ? (
                   <motion.div 
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     className="flex flex-col items-center justify-center text-center h-full flex-1"
                   >
                     <div className="w-24 h-24 rounded-full bg-accent-teal/10 text-accent-teal flex items-center justify-center mb-6 ring-1 ring-accent-teal/50 shadow-[0_0_30px_rgba(137,210,189,0.3)]">
                       <CheckCircle2 size={48} />
                     </div>
                     <h3 className="text-3xl font-heading font-bold text-white mb-4">Cadastro Recebido!</h3>
                     <p className="text-white/60 font-body mb-8 max-w-xs">
                       Nosso time de especialistas entrará em contato com você via WhatsApp em breve.
                     </p>
                     <Button 
                       variant="outline" 
                       onClick={() => { setSuccess(false); setStep(1); setFormData({name: '', clinic: '', email: '', phone: ''}); }}
                       className="text-sm"
                     >
                       Nova solicitação
                     </Button>
                   </motion.div>
                ) : (
                  <>
                    {/* Progress Indicator */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex gap-2">
                        <div className={`h-1.5 rounded-full transition-all duration-500 ${step >= 1 ? 'w-8 bg-accent-teal' : 'w-2 bg-white/10'}`} />
                        <div className={`h-1.5 rounded-full transition-all duration-500 ${step >= 2 ? 'w-8 bg-accent-teal' : 'w-2 bg-white/10'}`} />
                      </div>
                      <span className="text-xs font-complement uppercase tracking-widest text-white/30">
                        Etapa {step} de 2
                      </span>
                    </div>

                    <form className="flex-1 flex flex-col" onSubmit={handleSubmit}>
                      <AnimatePresence custom={direction} mode="wait">
                        {step === 1 && (
                          <motion.div
                            key="step1"
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                            className="space-y-6 flex-1"
                          >
                             <div className="space-y-1">
                               <h3 className="text-2xl font-heading font-medium text-white">Quem é você?</h3>
                               <p className="text-white/50 text-sm font-body">Comece nos dizendo seu nome e clínica.</p>
                             </div>

                             <div className="space-y-4 pt-4">
                                <div className="space-y-2">
                                  <label className="flex items-center gap-2 text-sm font-body font-medium text-accent-blue tracking-body">
                                    <User size={14} /> Nome Completo
                                  </label>
                                  <input
                                    autoFocus
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full bg-background/50 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-accent-teal focus:ring-1 focus:ring-accent-teal/50 transition-all font-body text-lg`}
                                    placeholder="Ex: Dr. Roberto Campos"
                                  />
                                  {errors.name && <span className="text-red-400 text-xs">{errors.name}</span>}
                                </div>

                                <div className="space-y-2">
                                  <label className="flex items-center gap-2 text-sm font-body font-medium text-accent-blue tracking-body">
                                    <Building2 size={14} /> Nome da Clínica
                                  </label>
                                  <input
                                    name="clinic"
                                    value={formData.clinic}
                                    onChange={handleChange}
                                    className={`w-full bg-background/50 border ${errors.clinic ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-accent-teal focus:ring-1 focus:ring-accent-teal/50 transition-all font-body text-lg`}
                                    placeholder="Ex: Odonto Premium"
                                  />
                                  {errors.clinic && <span className="text-red-400 text-xs">{errors.clinic}</span>}
                                </div>
                             </div>
                          </motion.div>
                        )}

                        {step === 2 && (
                          <motion.div
                            key="step2"
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                            className="space-y-6 flex-1"
                          >
                             <div className="space-y-1">
                               <h3 className="text-2xl font-heading font-medium text-white">Como falamos com você?</h3>
                               <p className="text-white/50 text-sm font-body">Seus dados de contato profissional.</p>
                             </div>

                             <div className="space-y-4 pt-4">
                                <div className="space-y-2">
                                  <label className="flex items-center gap-2 text-sm font-body font-medium text-accent-blue tracking-body">
                                    <MessageCircle size={14} /> WhatsApp
                                  </label>
                                  <input
                                    autoFocus
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`w-full bg-background/50 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-accent-teal focus:ring-1 focus:ring-accent-teal/50 transition-all font-body text-lg`}
                                    placeholder="(11) 99999-9999"
                                  />
                                  {errors.phone && <span className="text-red-400 text-xs">{errors.phone}</span>}
                                </div>

                                <div className="space-y-2">
                                  <label className="flex items-center gap-2 text-sm font-body font-medium text-accent-blue tracking-body">
                                    <Mail size={14} /> Email Profissional
                                  </label>
                                  <input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full bg-background/50 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-accent-teal focus:ring-1 focus:ring-accent-teal/50 transition-all font-body text-lg`}
                                    placeholder="contato@clinica.com"
                                  />
                                  {errors.email && <span className="text-red-400 text-xs">{errors.email}</span>}
                                </div>
                             </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="mt-8 flex items-center justify-between">
                        {step > 1 ? (
                          <button 
                            type="button" 
                            onClick={() => { setDirection(-1); setStep(prev => prev - 1); }}
                            className="text-white/40 hover:text-white transition-colors text-sm font-body"
                          >
                            Voltar
                          </button>
                        ) : (
                          <div /> 
                        )}

                        {step === 1 ? (
                          <Button 
                            type="button" 
                            onClick={handleNext}
                            className="bg-accent-teal text-background hover:bg-accent-teal/90 hover:scale-105"
                          >
                            Continuar <ArrowRight size={18} className="ml-2" />
                          </Button>
                        ) : (
                          <Button 
                            type="submit" 
                            disabled={loading}
                            className={`bg-accent-teal text-background hover:bg-accent-teal/90 hover:scale-105 ${loading ? 'opacity-70 cursor-wait' : ''}`}
                          >
                            {loading ? 'Enviando...' : 'Finalizar Cadastro'} <CheckCircle2 size={18} className="ml-2" />
                          </Button>
                        )}
                      </div>
                    </form>
                  </>
                )}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

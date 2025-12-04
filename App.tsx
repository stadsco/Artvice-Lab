import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ValuePropSection } from './components/ValuePropSection';
import { SuccessCases } from './components/SuccessCases';
import { HowItWorks } from './components/HowItWorks';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-white/20 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ValuePropSection />
        <SuccessCases />
        <HowItWorks />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
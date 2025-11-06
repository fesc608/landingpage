import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface HeroProps {
  language: 'de' | 'en';
}

export function Hero({ language }: HeroProps) {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  const content = {
    de: {
      headline: 'Provisions- und Bonusprozesse sind ineffizient und fehleranfällig',
      description: 'Vertriebsteams verschwenden unzählige Stunden mit Tabellenkalkulationen und manuellen Berechnungen.',
      highlight: 'COMI automatisiert alles',
      description2: '— von CRM-Integrationen bis zur Echtzeit-Provisionsübersicht.',
      cta: 'Zur Warteliste',
    },
    en: {
      headline: 'Commission and bonus processes are inefficient and error-prone',
      description: 'Sales teams waste countless hours on spreadsheets and manual calculations.',
      highlight: 'COMI automates everything',
      description2: '— from CRM integrations to real-time commission visibility.',
      cta: 'Join the waitlist',
    },
  };

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#5B4FFF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#7C3AED]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="mb-6 text-black font-bold text-5xl md:text-6xl">
            {content[language].headline}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-600 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            {content[language].description}
            {' '}
            <span className="text-[#5B4FFF]">{content[language].highlight}</span>
            {' '}
            {content[language].description2}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-4"
          >
            <Button
              onClick={scrollToWaitlist}
              size="lg"
              className="bg-[#5B4FFF] hover:bg-[#4A3FCC] text-white group"
            >
              {content[language].cta}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

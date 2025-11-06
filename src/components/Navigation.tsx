import { Button } from './ui/button';
import { Menu, Globe } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NavigationProps {
  language: 'de' | 'en';
  setLanguage: (lang: 'de' | 'en') => void;
}

export function Navigation({ language, setLanguage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const content = {
    de: {
      features: 'Features',
      joinWaitlist: 'Zur Warteliste',
    },
    en: {
      features: 'Features',
      joinWaitlist: 'Join Waitlist',
    },
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="text-black font-bold text-2xl">COMI</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-neutral-600 hover:text-black transition-colors">
              {content[language].features}
            </a>
            
            {/* Language Switcher */}
            <div className="flex items-center gap-2 text-sm">
              <Globe className="w-4 h-4 text-neutral-400" />
              <button
                onClick={() => setLanguage('de')}
                className={`transition-colors ${language === 'de' ? 'text-[#5B4FFF]' : 'text-neutral-400 hover:text-neutral-600'}`}
              >
                DE
              </button>
              <span className="text-neutral-300">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`transition-colors ${language === 'en' ? 'text-[#5B4FFF]' : 'text-neutral-400 hover:text-neutral-600'}`}
              >
                EN
              </button>
            </div>

            <Button
              onClick={scrollToWaitlist}
              className="bg-[#5B4FFF] hover:bg-[#4A3FCC] text-white"
            >
              {content[language].joinWaitlist}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-600 hover:text-black"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-neutral-100 bg-white"
          >
            <div className="px-6 py-4 space-y-4">
              <a href="#features" className="block text-neutral-600 hover:text-black transition-colors">
                {content[language].features}
              </a>
              
              {/* Language Switcher Mobile */}
              <div className="flex items-center gap-3 pt-2">
                <Globe className="w-4 h-4 text-neutral-400" />
                <button
                  onClick={() => setLanguage('de')}
                  className={`transition-colors ${language === 'de' ? 'text-[#5B4FFF]' : 'text-neutral-400'}`}
                >
                  DE
                </button>
                <span className="text-neutral-300">|</span>
                <button
                  onClick={() => setLanguage('en')}
                  className={`transition-colors ${language === 'en' ? 'text-[#5B4FFF]' : 'text-neutral-400'}`}
                >
                  EN
                </button>
              </div>

              <Button
                onClick={scrollToWaitlist}
                className="w-full bg-[#5B4FFF] hover:bg-[#4A3FCC] text-white"
              >
                {content[language].joinWaitlist}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { WaitlistSection } from './components/WaitlistSection';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [language, setLanguage] = useState<'de' | 'en'>('de');

  const content = {
    de: {
      copyright: '© 2025 COMI. Alle Rechte vorbehalten.',
    },
    en: {
      copyright: '© 2025 COMI. All rights reserved.',
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Toaster />
      <Navigation language={language} setLanguage={setLanguage} />
      
      <main>
        <Hero language={language} />
        <ProblemSection language={language} />
        <SolutionSection language={language} />
        <WaitlistSection language={language} />
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-100 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center">
            <p className="text-neutral-400 text-sm">
              {content[language].copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

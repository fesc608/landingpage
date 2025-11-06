import { motion } from 'motion/react';
import { AlertCircle, Clock, TrendingDown } from 'lucide-react';

interface ProblemSectionProps {
  language: 'de' | 'en';
}

const content = {
  de: {
    title: 'Die Herausforderungen, denen Teams heute gegenüberstehen',
    subtitle: 'Traditionelles Provisionsmanagement schafft Reibung in Ihrer gesamten Organisation',
    problems: [
      {
        title: 'Unzählige verschwendete Stunden',
        description: 'HR- und Vertriebsteams erstellen manuell Berechnungslogik, pflegen Tabellenkalkulationen und korrigieren Auszahlungsfehler.',
      },
      {
        title: 'Verlorenes Vertrauen',
        description: 'Vertriebsmitarbeiter verlieren das Vertrauen aufgrund ungenauer Auszahlungen und fehlender Echtzeit-Transparenz ihrer Einnahmen.',
      },
      {
        title: 'Manuelle Simulationen',
        description: 'Finanzteams verbringen viel Zeit mit der Verifizierung von Daten und manuellen SPIFF- oder Provisionsmodell-Simulationen.',
      },
    ],
  },
  en: {
    title: 'The challenges teams face today',
    subtitle: 'Traditional commission management creates friction across your entire organization',
    problems: [
      {
        title: 'Countless wasted hours',
        description: 'HR and Sales teams manually build calculation logic, maintain spreadsheets, and correct payout errors.',
      },
      {
        title: 'Broken trust',
        description: 'Sales reps lose confidence due to inaccurate payouts and lack of real-time visibility into their earnings.',
      },
      {
        title: 'Manual simulations',
        description: 'Finance teams spend significant time verifying data and running manual SPIFF or commission model simulations.',
      },
    ],
  },
};

const icons = [Clock, TrendingDown, AlertCircle];

export function ProblemSection({ language }: ProblemSectionProps) {
  const problems = content[language].problems.map((problem, index) => ({
    ...problem,
    icon: icons[index],
  }));

  return (
    <section className="py-32 bg-[#1E293B]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-white mb-6">{content[language].title}</h2>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-[#5B4FFF]/40 hover:bg-white/10 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-[#5B4FFF]/20 flex items-center justify-center mb-6">
                <problem.icon className="w-6 h-6 text-[#5B4FFF]" />
              </div>
              <h3 className="text-white mb-3">{problem.title}</h3>
              <p className="text-neutral-300 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

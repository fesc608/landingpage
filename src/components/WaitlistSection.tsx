import { motion } from 'motion/react';
import { WaitlistForm } from './WaitlistForm';
import { CheckCircle2 } from 'lucide-react';

interface WaitlistSectionProps {
  language: 'de' | 'en';
}

const content = {
  de: {
    title: 'Zur Warteliste',
    subtitle: 'Seien Sie unter den Ersten, die die Zukunft des Provisionsmanagements erleben',
    benefitsTitle: 'Was Sie erhalten:',
    benefits: [
      'Früher Zugang zur Plattform',
      'Exklusiver Onboarding-Support',
      'Sonderpreise für Early Adopters',
      'Direkten Einfluss auf die Feature-Entwicklung',
    ],
    note: 'Begrenzte Plätze verfügbar.',
    noteHighlight: 'Melden Sie sich jetzt an, um Ihren Platz in unserem privaten Beta-Launch zu sichern.',
  },
  en: {
    title: 'Join the waitlist',
    subtitle: 'Be among the first to experience the future of commission management',
    benefitsTitle: 'What you will get:',
    benefits: [
      'Early access to the platform',
      'Exclusive onboarding support',
      'Special pricing for early adopters',
      'Direct input on feature development',
    ],
    note: 'Limited spots available.',
    noteHighlight: 'Join now to secure your place in our private beta launch.',
  },
};

export function WaitlistSection({ language }: WaitlistSectionProps) {
  return (
    <section id="waitlist" className="py-32 bg-[#1E293B]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-6">{content[language].title}</h2>
            <p className="text-neutral-300">
              {content[language].subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-white mb-6">{content[language].benefitsTitle}</h3>
              <div className="space-y-4">
                {content[language].benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#5B4FFF] flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-200">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
                <p className="text-neutral-200">
                  <span className="text-[#5B4FFF] font-semibold">{content[language].note}</span> {content[language].noteHighlight}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-neutral-200 rounded-xl p-8 shadow-lg shadow-neutral-200/50"
            >
              <WaitlistForm language={language} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

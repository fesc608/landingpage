import { motion } from 'motion/react';
import { Zap, Database, BarChart3, Sparkles, Shield, Download } from 'lucide-react';
import dashboardImage from 'figma:asset/b6af938a95269d1c4f430ab4135e619db874fde1.png';

interface SolutionSectionProps {
  language: 'de' | 'en';
}

const content = {
  de: {
    title: 'Eine Plattform. Alles automatisiert.',
    subtitle: 'COMI zentralisiert Ihren gesamten Provisions- und Bonusprozess mit intelligenter Automatisierung',
    features: [
      {
        title: 'Nahtlose Integrationen',
        description: 'Automatische Verbindung zu CRM- und ERP-Systemen',
      },
      {
        title: 'Automatisierte Berechnungen',
        description: 'Konfigurierbare Logik mit KI-gestütztem Testing',
      },
      {
        title: 'Echtzeit-Transparenz',
        description: 'Vertriebsmitarbeiter sehen ihre Einnahmen sofort',
      },
      {
        title: 'KI-Optimierung',
        description: 'Intelligente Vorschläge für Modellverbesserungen',
      },
      {
        title: 'Genehmigungs-Workflows',
        description: 'Integrierte Governance- und Compliance-Kontrollen',
      },
      {
        title: 'Gehaltsabrechnung-Exporte',
        description: 'Direkte Integration mit wichtigen Lohnabrechnungssystemen',
      },
    ],
  },
  en: {
    title: 'One platform. Everything automated.',
    subtitle: 'COMI centralizes your entire commission and bonus process with intelligent automation',
    features: [
      {
        title: 'Seamless integrations',
        description: 'Connect to your CRM and ERP systems automatically',
      },
      {
        title: 'Automated calculations',
        description: 'Configurable logic with AI-assisted testing',
      },
      {
        title: 'Real-time visibility',
        description: 'Sales reps see their earnings instantly',
      },
      {
        title: 'AI optimization',
        description: 'Get intelligent suggestions for model improvements',
      },
      {
        title: 'Approval workflows',
        description: 'Built-in governance and compliance controls',
      },
      {
        title: 'Payroll exports',
        description: 'Direct integration with major payroll systems',
      },
    ],
  },
};

const icons = [Database, Zap, BarChart3, Sparkles, Shield, Download];

export function SolutionSection({ language }: SolutionSectionProps) {
  const features = content[language].features.map((feature, index) => ({
    ...feature,
    icon: icons[index],
  }));

  return (
    <section id="features" className="py-32 relative overflow-hidden bg-neutral-50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-[#5B4FFF]/[0.02] to-neutral-50 -z-10"></div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-black mb-6">{content[language].title}</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-white border border-neutral-200 rounded-lg p-6 h-full hover:border-[#5B4FFF] transition-all">
                <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center mb-4 group-hover:bg-[#5B4FFF]/10 transition-colors">
                  <feature.icon className="w-5 h-5 text-neutral-600 group-hover:text-[#5B4FFF] transition-colors" />
                </div>
                <h3 className="text-black mb-2">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#5B4FFF]/10 via-transparent to-[#5B4FFF]/10 rounded-2xl blur-3xl"></div>
          <div className="relative bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-2xl shadow-neutral-200/50">
            <img 
              src={dashboardImage} 
              alt="COMI Dashboard" 
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

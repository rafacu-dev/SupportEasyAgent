import { motion } from 'motion/react';
import { Phone, Calendar, MessageSquare, BarChart3 } from 'lucide-react';

// Import images
import phonePortrait from '@assets/phone-portrait.png';
import calendarPortrait from '@assets/calendar-portrait.png';
import callDetailsPortrait from '@assets/call-details-portrait.png';
import analyticsPortrait from '@assets/analytics-portrait.png';

interface FeatureShowcaseProps {
  translations: {
    feature1Title: string;
    feature1Description: string;
    feature1DetailedDescription: string;
    feature2Title: string;
    feature2Description: string;
    feature2DetailedDescription: string;
    feature3Title: string;
    feature3Description: string;
    feature3DetailedDescription: string;
    feature4Title: string;
    feature4Description: string;
    feature4DetailedDescription: string;
  };
}

export default function FeatureShowcase({ translations }: FeatureShowcaseProps) {
  const features = [
    {
      icon: Phone,
      title: translations.feature1Title,
      description: translations.feature1Description,
      image: phonePortrait.src,
      detailedDescription: translations.feature1DetailedDescription
    },
    {
      icon: Calendar,
      title: translations.feature2Title,
      description: translations.feature2Description,
      image: calendarPortrait.src,
      detailedDescription: translations.feature2DetailedDescription
    },
    {
      icon: MessageSquare,
      title: translations.feature3Title,
      description: translations.feature3Description,
      image: callDetailsPortrait.src,
      detailedDescription: translations.feature3DetailedDescription
    },
    {
      icon: BarChart3,
      title: translations.feature4Title,
      description: translations.feature4Description,
      image: analyticsPortrait.src,
      detailedDescription: translations.feature4DetailedDescription
    },
  ];
  return (
    <div className="space-y-0">
      {features.map((feature, index) => {
        const isReversed = index % 2 === 0; // Primera feature imagen a la derecha
        const bgColor = index % 2 === 0 ? 'bg-white' : 'bg-slate-50';
        
        return (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${bgColor} py-16 md:py-20`}
          >
            <div className={`container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
              isReversed ? 'lg:flex-row-reverse' : ''
            }`}>
            {/* Imagen - Siempre primero en móvil */}
            <div className={`${isReversed ? 'lg:order-2' : 'lg:order-1'} order-1`}>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative rounded-2xl overflow-hidden"
              >
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-auto max-w-[280px] mx-auto object-contain"
                  loading="lazy"
                />
              </motion.div>
            </div>

            {/* Contenido de texto */}
            <div className={`${isReversed ? 'lg:order-1' : 'lg:order-2'} order-2 space-y-6`}>
              <motion.div
                initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-100 rounded-xl mb-6">
                  <feature.icon className="w-7 h-7 text-orange-600" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <p className="text-base text-slate-700 leading-relaxed">
                  {feature.detailedDescription}
                </p>
              </motion.div>
            </div>
          </div>
          </motion.div>
        );
      })}
    </div>
  );
}

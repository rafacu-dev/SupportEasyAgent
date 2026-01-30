import { motion } from 'motion/react';
import { Phone, Calendar, MessageSquare, BarChart3 } from 'lucide-react';

// Import images
import phonePortrait from '@assets/phone-portrait.png';
import calendarPortrait from '@assets/calendar-portrait.png';
import callDetailsPortrait from '@assets/call-details-portrait.png';
import analyticsPortrait from '@assets/analytics-portrait.png';

const features = [
  {
    icon: Phone,
    title: 'Agente de Voz con IA',
    description: 'Tu asistente virtual atiende llamadas 24/7 con voz natural y conversaciones profesionales.',
    image: phonePortrait.src,
    detailedDescription: 'Nuestro agente de IA utiliza procesamiento de lenguaje natural avanzado para mantener conversaciones fluidas y naturales. Puede responder preguntas frecuentes, agendar citas, tomar mensajes y transferir llamadas cuando sea necesario. Todo con una voz profesional que representa tu marca las 24 horas del día.'
  },
  {
    icon: Calendar,
    title: 'Agenda Automática',
    description: 'El agente programa citas automáticamente y envía recordatorios a ti y tus clientes.',
    image: calendarPortrait.src,
    detailedDescription: 'Sistema de calendario inteligente que se sincroniza con tu agenda existente. El agente verifica disponibilidad en tiempo real, programa citas según tus preferencias, y envía confirmaciones y recordatorios automáticos vía SMS y email. Reduce las ausencias hasta un 80%.'
  },
  {
    icon: MessageSquare,
    title: 'Transcripciones Completas',
    description: 'Recibe transcripciones detalladas de cada llamada con análisis de sentimiento incluido.',
    image: callDetailsPortrait.src,
    detailedDescription: 'Cada llamada se transcribe automáticamente con precisión del 95%+. Incluye análisis de sentimiento para identificar clientes satisfechos o preocupados, palabras clave extraídas automáticamente, y métricas de calidad. Busca y encuentra cualquier conversación en segundos.'
  },
  {
    icon: BarChart3,
    title: 'Análisis en Tiempo Real',
    description: 'Visualiza estadísticas de llamadas, horarios pico y métricas de rendimiento al instante.',
    image: analyticsPortrait.src,
    detailedDescription: 'Dashboard completo con métricas clave: volumen de llamadas por hora/día/mes, tasa de conversión, duración promedio, tipos de solicitudes más comunes, y tendencias de crecimiento. Exporta reportes profesionales en PDF para análisis detallado.'
  },
];

export default function FeatureShowcase() {
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

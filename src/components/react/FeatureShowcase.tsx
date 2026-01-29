import { motion } from 'motion/react';
import { Phone, Calendar, MessageSquare, BarChart3, Clock, Headphones } from 'lucide-react';

const features = [
  {
    icon: Phone,
    title: 'Agente de Voz con IA',
    description: 'Tu asistente virtual atiende llamadas 24/7 con voz natural y conversaciones profesionales.',
    image: { src: 'https://placehold.co/800x600/dc2626/ffffff?text=Agente+IA' },
  },
  {
    icon: Calendar,
    title: 'Agenda Automática',
    description: 'El agente programa citas automáticamente y envía recordatorios a ti y tus clientes.',
    image: { src: 'https://placehold.co/800x600/f43f5e/ffffff?text=Calendario' },
  },
  {
    icon: MessageSquare,
    title: 'Transcripciones Completas',
    description: 'Recibe transcripciones detalladas de cada llamada con análisis de sentimiento incluido.',
    image: { src: 'https://placehold.co/800x600/dc2626/ffffff?text=Transcripciones' },
  },
  {
    icon: BarChart3,
    title: 'Análisis en Tiempo Real',
    description: 'Visualiza estadísticas de llamadas, horarios pico y métricas de rendimiento al instante.',
    image: { src: 'https://placehold.co/800x600/f43f5e/ffffff?text=Analytics' },
  },
  {
    icon: Clock,
    title: 'Disponible 24/7/365',
    description: 'Nunca pierdas una llamada. Tu agente trabaja día y noche, incluidos festivos.',
    image: { src: 'https://placehold.co/800x600/dc2626/ffffff?text=24-7' },
  },
  {
    icon: Headphones,
    title: 'Soporte Dedicado',
    description: 'Equipo de soporte en español listo para ayudarte cuando lo necesites.',
    image: { src: 'https://placehold.co/800x600/f43f5e/ffffff?text=Soporte' },
  },
];

export default function FeatureShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <motion.img
                src={feature.image.src}
                alt={feature.title}
                className="w-full h-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
              
              {/* Icon overlay */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                className="absolute top-4 right-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg"
              >
                <feature.icon className="w-6 h-6 text-red-600" />
              </motion.div>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-200 opacity-90">{feature.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}


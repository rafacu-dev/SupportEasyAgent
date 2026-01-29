import { motion } from 'motion/react';
import { Warehouse, Truck, Package, BarChart3, Shield, Headphones } from 'lucide-react';

const features = [
  {
    icon: Warehouse,
    title: 'Advanced Warehousing',
    description: 'Climate-controlled facilities with automated inventory systems and 24/7 security.',
    image: { src: 'https://placehold.co/800x600/3b82f6/ffffff?text=Warehousing' },
  },
  {
    icon: Truck,
    title: 'Fast Transportation',
    description: 'Multi-modal logistics network ensuring rapid delivery across all destinations.',
    image: { src: 'https://placehold.co/800x600/14b8a6/ffffff?text=Transportation' },
  },
  {
    icon: Package,
    title: 'Quality Manufacturing',
    description: 'ISO-certified production with precision engineering and quality control.',
    image: { src: 'https://placehold.co/800x600/3b82f6/ffffff?text=Manufacturing' },
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Complete supply chain visibility with advanced tracking and reporting.',
    image: { src: 'https://placehold.co/800x600/14b8a6/ffffff?text=Analytics' },
  },
  {
    icon: Shield,
    title: 'Secure Operations',
    description: 'Industry-leading security protocols protecting your valuable assets.',
    image: { src: 'https://placehold.co/800x600/3b82f6/ffffff?text=Security' },
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated teams available around the clock to ensure seamless operations.',
    image: { src: 'https://placehold.co/800x600/14b8a6/ffffff?text=Support' },
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
                <feature.icon className="w-6 h-6 text-blue-600" />
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


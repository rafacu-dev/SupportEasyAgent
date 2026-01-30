import { motion } from 'motion/react';

interface IndustryCardProps {
  title: string;
  description: string;
  imageSrc: string;
  emoji: string;
  delay: number;
}

export default function IndustryCard({ title, description, imageSrc, emoji, delay }: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="relative h-64 overflow-hidden rounded-2xl shadow-xl">
        <motion.img 
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-1">{emoji} {title}</h3>
          <p className="text-sm text-gray-200">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

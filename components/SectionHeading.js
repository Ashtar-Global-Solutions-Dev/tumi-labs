import { motion } from 'framer-motion';

export default function SectionHeading({ label, title, description, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-16 ${center ? 'text-center' : ''}`}
    >
      {label && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium text-accent bg-accent/10 border border-accent/20 mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}

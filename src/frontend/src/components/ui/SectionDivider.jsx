'use client';

import { motion } from 'framer-motion';

export default function SectionDivider({ variant = 'default', className = '' }) {
  const variants = {
    default: {
      gradient: 'from-gold via-royal to-gold',
    },
    elegant: {
      gradient: 'from-transparent via-gold to-transparent',
    },
    modern: {
      gradient: 'from-gold to-gold',
    },
    floral: {
      gradient: 'from-gold via-royal to-gold',
    },
  };

  const currentVariant = variants[variant] || variants.default;

  return (
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      whileInView={{ opacity: 1, width: 'auto' }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex items-center justify-center gap-3 my-4 ${className}`}
    >
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`h-px bg-gradient-to-r ${currentVariant.gradient}`}
        style={{ width: variant === 'floral' ? '60px' : '40px' }}
      />

      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 200,
          delay: 0.3,
        }}
        className="relative flex items-center justify-center"
      >
        {variant === 'floral' ? (
          <div className="text-gold text-xl animate-pulse-slow">✦</div>
        ) : variant === 'modern' ? (
          <div className="w-2 h-2 bg-gold rounded-full shadow-lg shadow-gold/50" />
        ) : (
          <div className="flex gap-1.5">
            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
            <span className="w-1.5 h-1.5 bg-royal rounded-full" />
            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={`h-px bg-gradient-to-l ${currentVariant.gradient}`}
        style={{ width: variant === 'floral' ? '60px' : '40px' }}
      />
    </motion.div>
  );
}
'use client';

import { motion } from 'framer-motion';
import Countdown from '../ui/Countdown';

export default function Hero() {
  const targetDate = new Date(process.env.NEXT_PUBLIC_WEDDING_DATE).getTime();

  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 10,
  }));

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-royal-dark to-royal-deep"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-gold/10"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Decorative Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] border border-gold/5 rounded-full animate-[spin_30s_linear_infinite]" />
        <div className="absolute w-[450px] h-[450px] border border-gold/10 rounded-full animate-[spin_25s_linear_infinite_reverse]" />
        <div className="absolute w-[300px] h-[300px] border border-gold/5 rounded-full animate-[spin_20s_linear_infinite]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="inline-block bg-gold/10 backdrop-blur-sm text-gold text-xs md:text-sm font-bold tracking-[0.3em] uppercase px-6 py-2 rounded-full border border-gold/30 mb-8">
            Save the Date
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-script text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight"
        >
          Esther
          <motion.span
            className="text-gold inline-block mx-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            &amp;
          </motion.span>
          Daniel
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6"
        >
          <p className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-white/85">
            <span className="text-gold font-extrabold">Saturday, 14th November 2026</span>
            <span className="mx-3 text-white/40">·</span>
            9:00am Prompt
          </p>
          <p className="text-white/60 text-sm md:text-base mt-2 tracking-wider font-semibold">
            Deeper Life Bible Church Regional Headquarters, Bwari, Abuja
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Countdown target={targetDate} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="relative max-w-xl mx-auto"
        >
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <blockquote className="relative bg-white/5 backdrop-blur-sm border border-gold/15 rounded-2xl px-6 md:px-8 py-6 mx-4">
            <p className="font-serif italic text-white/80 text-sm md:text-base leading-relaxed font-semibold">
              "Every good gift and every perfect gift is from above, and cometh down from the Father of lights..."
            </p>
            <cite className="block not-italic text-xs text-gold font-bold mt-2 tracking-wider">
              — James 1:17 (KJV)
            </cite>
          </blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-wrap gap-4 justify-center mt-8"
        >
          <a
            href="#rsvp"
            className="group relative overflow-hidden bg-gradient-to-r from-gold to-gold-dark text-black font-bold px-8 py-3 rounded-full hover:shadow-2xl hover:shadow-gold/25 transition-all duration-500"
          >
            <span className="relative z-10 flex items-center gap-2">
              📋 Confirm Attendance
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>
          <a
            href="#registry"
            className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold px-8 py-3 rounded-full hover:bg-white/20 transition-all duration-500"
          >
            <span className="relative z-10 flex items-center gap-2">
              🎁 Send a Gift
            </span>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 bg-gold rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
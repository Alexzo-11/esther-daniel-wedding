'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Countdown({ target }) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTime = () => {
      const now = Date.now();
      let diff = target - now;

      if (diff <= 0) {
        setIsExpired(true);
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setIsExpired(false);
      const days = Math.floor(diff / 86400000);
      diff -= days * 86400000;
      const hours = Math.floor(diff / 3600000);
      diff -= hours * 3600000;
      const minutes = Math.floor(diff / 60000);
      diff -= minutes * 60000;
      const seconds = Math.floor(diff / 1000);
      setTime({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [target]);

  const pad = (n) => String(n).padStart(2, '0');

  const timeUnits = [
    { key: 'days', label: 'Days', icon: '📅' },
    { key: 'hours', label: 'Hours', icon: '⏰' },
    { key: 'minutes', label: 'Minutes', icon: '⏱️' },
    { key: 'seconds', label: 'Seconds', icon: '⚡' },
  ];

  const NumberDisplay = ({ value, label, icon }) => {
    const [prevValue, setPrevValue] = useState(value);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
      if (value !== prevValue) {
        setIsAnimating(true);
        setPrevValue(value);
        setTimeout(() => setIsAnimating(false), 300);
      }
    }, [value, prevValue]);

    return (
      <motion.div
        className="relative group"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-gold/20 rounded-2xl px-4 py-4 min-w-[80px] md:min-w-[100px] shadow-xl hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 hover:border-gold/40">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-royal/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="text-lg md:text-xl mb-1">{icon}</div>

          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={value}
                initial={isAnimating ? { y: -20, opacity: 0 } : false}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white block"
              >
                {pad(value)}
              </motion.span>
            </AnimatePresence>
          </div>

          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/50 block mt-1">
            {label}
          </span>

          <div className="absolute -top-1 -right-1 w-2 h-2 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-royal-light rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </motion.div>
    );
  };

  if (isExpired) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <div className="inline-block bg-gold/10 backdrop-blur-sm border border-gold/20 rounded-2xl px-8 py-6">
          <span className="text-4xl block mb-2">🎉</span>
          <p className="font-serif text-2xl text-gold">The Celebration Has Begun!</p>
          <p className="text-white/50 text-sm mt-1">Today is the day! ❤️</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[300px] h-[300px] border border-gold/5 rounded-full animate-spin-slow" />
        <div className="absolute w-[200px] h-[200px] border border-gold/5 rounded-full animate-spin-slower" />
      </div>

      <div className="relative flex flex-wrap justify-center gap-3 md:gap-4 my-4">
        {timeUnits.map((unit) => (
          <NumberDisplay
            key={unit.key}
            value={time[unit.key]}
            label={unit.label}
            icon={unit.icon}
          />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center text-white/30 text-xs tracking-[0.3em] uppercase mt-2"
      >
        Until the big day
      </motion.p>
    </motion.div>
  );
}
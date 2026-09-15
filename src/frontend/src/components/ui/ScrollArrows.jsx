'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollArrows() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [sections, setSections] = useState([]);

  // Collect all sections that have an id
  useEffect(() => {
    const sectionEls = Array.from(document.querySelectorAll('section[id]'));
    setSections(sectionEls);

    // Show arrows after a short delay (once intro is likely gone)
    const timer = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  // Track current section on scroll
  useEffect(() => {
    if (!sections.length) return;

    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;
      let idx = 0;
      sections.forEach((sec, i) => {
        if (sec.offsetTop <= scrollY) idx = i;
      });
      setCurrentIndex(idx);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (index) => {
    if (index < 0 || index >= sections.length) return;
    const target = sections[index];
    window.scrollTo({
      top: target.offsetTop - 20,
      behavior: 'smooth',
    });
  };

  const scrollToNext = () => scrollToSection(currentIndex + 1);
  const scrollToPrev = () => scrollToSection(currentIndex - 1);

  const atTop = currentIndex <= 0;
  const atBottom = currentIndex >= sections.length - 1;

  return (
    <AnimatePresence>
      {visible && sections.length > 0 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
          className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3"
        >
          {/* Up Arrow */}
          <motion.button
            onClick={scrollToPrev}
            disabled={atTop}
            whileHover={{ scale: atTop ? 1 : 1.1 }}
            whileTap={{ scale: atTop ? 1 : 0.9 }}
            className={`group relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 backdrop-blur-md border-2 ${
              atTop
                ? 'bg-white/40 border-gray-200/50 text-gray-300 cursor-not-allowed'
                : 'bg-white/90 border-gold/40 text-royal hover:bg-gold hover:text-black hover:border-gold shadow-royal/20'
            }`}
            aria-label="Previous section"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:-translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>

            {/* Glow ring on hover */}
            {!atTop && (
              <span className="absolute inset-0 rounded-full bg-gold/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
            )}
          </motion.button>

          {/* Section indicator dots */}
          <div className="flex flex-col items-center gap-1.5 py-2">
            {sections.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToSection(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? 'w-2 h-6 bg-gold'
                    : 'w-1.5 h-1.5 bg-royal/30 hover:bg-gold/60'
                }`}
                aria-label={`Go to section ${i + 1}`}
              />
            ))}
          </div>

          {/* Down Arrow */}
          <motion.button
            onClick={scrollToNext}
            disabled={atBottom}
            whileHover={{ scale: atBottom ? 1 : 1.1 }}
            whileTap={{ scale: atBottom ? 1 : 0.9 }}
            className={`group relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 backdrop-blur-md border-2 ${
              atBottom
                ? 'bg-white/40 border-gray-200/50 text-gray-300 cursor-not-allowed'
                : 'bg-royal text-white border-gold/40 hover:bg-gold hover:text-black hover:border-gold shadow-royal/30'
            }`}
            aria-label="Next section"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>

            {/* Glow ring on hover */}
            {!atBottom && (
              <span className="absolute inset-0 rounded-full bg-gold/30 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
            )}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroOverlay({ onComplete }) {
  const [stage, setStage] = useState(1);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (stage === 1) {
      const timer = setTimeout(() => setStage(2), 3000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  const handleContinue = () => {
    setIsVisible(false);
    setTimeout(onComplete, 800);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-royal-dark to-royal-deep"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-royal/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold/10 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/5 rounded-full" />
          </div>

          <div className="relative z-10 text-center px-6 max-w-3xl">
            <AnimatePresence mode="wait">
              {stage === 1 ? (
                <motion.div
                  key="stage1"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-7xl md:text-8xl mb-6"
                  >
                    💙
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="font-script text-4xl md:text-6xl text-gold tracking-wider"
                  >
                    
                    EleOjo'26 
                  
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="font-serif text-lg md:text-xl text-white/60 tracking-[0.3em] uppercase mt-2"
                  >
                    Love Story Now Told
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="mt-8 flex justify-center gap-2"
                  >
                    <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                    <span className="w-2 h-2 bg-gold rounded-full animate-pulse delay-150" />
                    <span className="w-2 h-2 bg-gold rounded-full animate-pulse delay-300" />
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="stage2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  <motion.div
                    initial={{ scale: 0.9, rotateX: 20 }}
                    animate={{ scale: 1, rotateX: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-transparent to-gold/20 blur-xl" />
                    <div className="relative bg-white/5 backdrop-blur-xl border border-gold/20 rounded-3xl p-8 md:p-12 shadow-2xl">
                      <div className="absolute inset-4 border border-gold/10 rounded-2xl pointer-events-none" />

                      <div className="relative">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="text-gold/60 text-xs tracking-[0.4em] uppercase mb-4"
                        >
                          You are cordially invited
                        </motion.div>

                        <motion.h2
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="font-script text-4xl md:text-6xl text-gold"
                        >
                          Esther <span className="text-white/40">&amp;</span> Daniel
                        </motion.h2>

                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.7 }}
                          className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-4"
                        />

                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.9 }}
                          className="font-serif text-white/70 text-sm md:text-base"
                        >
                          Saturday, 14th November 2026 · 9:00am Prompt
                        </motion.p>

                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.1 }}
                          className="font-serif text-white/50 text-xs md:text-sm mt-1"
                        >
                          Deeper Life Bible Church Headquarters, Bwari, Abuja
                        </motion.p>

                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.3 }}
                          className="mt-6"
                        >
                          <button
                            onClick={handleContinue}
                            className="group relative overflow-hidden bg-gradient-to-r from-gold to-gold-dark text-black font-semibold px-8 md:px-12 py-3 md:py-4 rounded-full hover:shadow-2xl hover:shadow-gold/25 transition-all duration-500"
                          >
                            <span className="relative z-10 flex items-center gap-3">
                              Open the Invitation
                              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                          </button>
                        </motion.div>

                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.5 }}
                          className="text-white/20 text-xs mt-6"
                        >
                          James 1:17
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
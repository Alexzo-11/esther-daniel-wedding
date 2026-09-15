'use client';

import { motion } from 'framer-motion';
import SectionDivider from '../ui/SectionDivider';

export default function Events() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="events" className="relative py-24 overflow-hidden bg-gradient-to-b from-cream to-white">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-royal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/5 rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-royal">
            The Ceremony
          </h2>
          <SectionDivider variant="floral" />
          <p className="text-muted uppercase tracking-[0.3em] text-sm">
            Solemnization of Holy Matrimony
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-royal/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gold/10 hover:border-gold/30 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-gold/20 rounded-tr-2xl" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-gold/20 rounded-bl-2xl" />

              <div className="text-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-6xl md:text-7xl mb-4"
                >
                  💒
                </motion.div>

                <h3 className="font-serif text-3xl md:text-4xl text-royal">
                  Wedding Ceremony
                </h3>

                <SectionDivider variant="elegant" className="my-6" />

                <div className="space-y-4 text-muted max-w-lg mx-auto">
                  <motion.div
                    className="flex items-center justify-center gap-3 text-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-gold text-xl">📅</span>
                    <span><strong className="text-royal">Date:</strong> Saturday, 14th November 2026</span>
                  </motion.div>

                  <motion.div
                    className="flex items-center justify-center gap-3 text-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-gold text-xl">⏰</span>
                    <span><strong className="text-royal">Time:</strong> 9:00am Prompt</span>
                  </motion.div>

                  <motion.div
                    className="flex items-center justify-center gap-3 text-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-gold text-xl">📍</span>
                    <span><strong className="text-royal">Venue:</strong> Deeper Life Bible Church Headquarters, Bwari, Abuja</span>
                  </motion.div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4 justify-center">
                  <motion.a
                    href="https://maps.google.com/maps?q=Deeper+Life+Bible+Church+Headquarters+Bwari+Abuja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden bg-gradient-to-r from-gold to-gold-dark text-black font-semibold px-6 py-2.5 rounded-full hover:shadow-2xl hover:shadow-gold/25 transition-all duration-500"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      📍 View on Google Maps
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </motion.a>

                  <motion.button
                    onClick={() => {
                      const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=Esther%20%26%20Daniel%20Wedding&details=Solemnization%20of%20Holy%20Matrimony&location=Deeper%20Life%20Bible%20Church%20Headquarters%2C%20Bwari%2C%20Abuja&dates=20261114T090000/20261114T120000`;
                      window.open(url, '_blank');
                    }}
                    className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-royal text-royal font-semibold px-6 py-2.5 rounded-full hover:bg-royal hover:text-white transition-all duration-500"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      📅 Add to Calendar
                    </span>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
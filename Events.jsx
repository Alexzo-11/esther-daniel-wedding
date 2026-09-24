'use client';

import { motion } from 'framer-motion';
import SectionDivider from '../ui/SectionDivider';

export default function Events() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const events = [
    {
      icon: '💒',
      title: 'Wedding Ceremony',
      subtitle: 'Solemnization of Holy Matrimony',
      date: 'Saturday, 14th November 2026',
      time: '9:00am Prompt',
      venue: 'Deeper Life Bible Church Regional Headquarters, Deeper Life Junction Bwari, Abuja',
      mapLink: 'https://maps.google.com/maps?q=Deeper+Life+Bible+Church+Regional+Headquarters+Bwari+Abuja',
      accent: 'gold',
    },
    {
      icon: '🎉',
      title: 'Reception',
      subtitle: 'Celebration of Love & Joy',
      date: 'Saturday, 14th November 2026',
      time: 'Immediately after the ceremony',
      venue: 'Goodness and Mercy Hotel, Old Bwari Road, Jigo, Abuja',
      mapLink: 'https://maps.google.com/maps?q=Goodness+and+Mercy+Hotel+Old+Bwari+Road+Jigo+Abuja',
      accent: 'royal',
    },
  ];

  return (
    <section id="events" className="relative py-24 overflow-hidden bg-gradient-to-b from-cream to-white">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-royal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/5 rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-royal">
            The Ceremony
          </h2>
          <SectionDivider variant="floral" />
          <p className="text-muted uppercase tracking-[0.3em] text-sm font-semibold">
            Solemnization of Holy Matrimony
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="mt-12 grid md:grid-cols-2 gap-6 lg:gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-royal/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-gold/10 hover:border-gold/30 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 h-full">
                {/* Corner ornaments */}
                <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-gold/20 rounded-tr-2xl" />
                <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-gold/20 rounded-bl-2xl" />

                <div className="text-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="text-5xl md:text-6xl mb-4"
                  >
                    {event.icon}
                  </motion.div>

                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-royal">
                    {event.title}
                  </h3>

                  <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold-dark font-bold mt-1">
                    {event.subtitle}
                  </p>

                  <SectionDivider variant="elegant" className="my-4" />

                  <div className="space-y-3 text-muted text-sm md:text-base">
                    <motion.div
                      className="flex items-start justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="text-gold text-lg">📅</span>
                      <span className="font-semibold text-royal">{event.date}</span>
                    </motion.div>

                    <motion.div
                      className="flex items-start justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="text-gold text-lg">⏰</span>
                      <span className="font-semibold text-royal">{event.time}</span>
                    </motion.div>

                    <motion.div
                      className="flex items-start justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="text-gold text-lg">📍</span>
                      <span className="font-semibold text-royal leading-snug">
                        {event.venue}
                      </span>
                    </motion.div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3 justify-center">
                    <motion.a
                      href={event.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden bg-gradient-to-r from-gold to-gold-dark text-black font-bold text-sm px-5 py-2.5 rounded-full hover:shadow-2xl hover:shadow-gold/25 transition-all duration-500"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        📍 Open in Google Maps
                      </span>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add to Calendar Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-10"
        >
          <motion.button
            onClick={() => {
              const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=Esther%20%26%20Daniel%20Wedding&details=Solemnization%20of%20Holy%20Matrimony%20%7C%20Reception%20to%20follow&location=Deeper%20Life%20Bible%20Church%20Regional%20Headquarters%2C%20Bwari%2C%20Abuja&dates=20261114T090000/20261114T150000`;
              window.open(url, '_blank');
            }}
            className="group relative overflow-hidden bg-white border-2 border-royal text-royal font-bold px-8 py-3 rounded-full hover:bg-royal hover:text-white transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              📅 Add Both Events to Calendar
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

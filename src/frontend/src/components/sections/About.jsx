'use client';

import { motion } from 'framer-motion';
import SectionDivider from '../ui/SectionDivider';

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const couple = [
    {
      firstName: 'Esther',
      name: 'Esther Eleojo Shaibu',
      role: 'Bride',
      parents: '',
      description:
        'A woman of grace, faith, and strength. Her joy and kindness have touched everyone who knows her. She loves the Lord and is ready to begin this beautiful journey with her beloved Daniel.',
      image: '/images/esther.jpg',
      fallbackEmoji: '👰',
      traits: ['Grace', 'Faith', 'Joy'],
    },
    {
      firstName: 'Daniel',
      name: 'Daniel Ojonugwa Uwada',
      role: 'Groom',
      parents: '',
      description:
        'A man of integrity, passion, and purpose. He loves deeply, serves faithfully, and is overjoyed to call Esther his bride.',
      image: '/images/daniel.jpg',
      fallbackEmoji: '🤵',
      traits: ['Integrity', 'Purpose', 'Faithfulness'],
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-cream">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-royal/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold/5 rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-royal">
            The Couple
          </h2>
          <SectionDivider variant="elegant" />
          <p className="text-muted uppercase tracking-[0.3em] text-sm">
            Two Hearts, One Love, Forever
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-16">
          {couple.map((person, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-royal/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />

              {/* Card */}
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gold/10 hover:border-gold/30 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                {/* ===== SINGLE PORTRAIT IMAGE ===== */}
                <div className="relative px-6 pt-6">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border-4 border-gold shadow-2xl group/hero">
                    <div className="absolute inset-0 bg-gradient-to-br from-royal/10 to-gold/10 z-10 opacity-40" />

                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/hero:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div
                      className="w-full h-full hidden items-center justify-center bg-gradient-to-br from-royal/10 via-gold/5 to-royal/10 text-8xl md:text-9xl"
                      style={{ display: 'none' }}
                    >
                      {person.fallbackEmoji}
                    </div>

                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-royal-deep/80 via-royal-deep/30 to-transparent z-20" />

                    <div className="absolute top-4 left-4 z-30">
                      <span className="bg-gold text-black text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
                        {person.role}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-30">
                      <h3 className="font-script text-3xl md:text-4xl text-white drop-shadow-lg">
                        {person.firstName}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* ===== INFO ===== */}
                <div className="p-6 md:p-8 text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-royal">
                    {person.name}
                  </h3>

                  <SectionDivider variant="modern" className="my-4" />

                  <p className="text-muted text-sm leading-relaxed">
                    <span className="text-royal font-semibold">{person.parents}</span>.{' '}
                    {person.description}
                  </p>

                  <div className="mt-5 flex justify-center gap-2 flex-wrap">
                    {person.traits.map((trait, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 text-xs rounded-full ${
                          i % 2 === 0
                            ? 'bg-gold/10 text-gold-dark'
                            : 'bg-royal/10 text-royal'
                        }`}
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Family Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative mt-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-royal/5 to-gold/5 rounded-3xl" />
          <div className="relative bg-white/80 backdrop-blur-sm border border-gold/10 rounded-3xl p-6 md:p-8 text-center">
            <p className="text-sm text-muted">
              <span className="text-royal font-semibold">The Families Of</span>
            </p>
            <p className="font-serif text-xl md:text-2xl text-royal mt-1">
              MR &amp; MRS PAUL SHAIBU <span className="text-gold mx-2">&amp;</span> MR &amp; MRS DAVID UWADA
            </p>
            <SectionDivider variant="floral" className="my-3" />
            <p className="text-xs text-muted mt-3 uppercase tracking-wider">
              ☯ Cordially Invite You To ☯
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

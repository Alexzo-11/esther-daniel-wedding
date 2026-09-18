'use client';

import { motion } from 'framer-motion';
import SectionDivider from '../ui/SectionDivider';

export default function Registry() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const registryItems = [
    {
      icon: '🇳🇬',
      title: 'Naira Account',
      bank: 'GTBank',
      account: '014 0743 789',
      name: 'Uwada Daniel Ojonugwa',
      color: 'from-green-500/20 to-green-600/20',
      border: 'border-green-200',
    },
    {
      icon: '🇳🇬',
      title: 'Naira Account',
      bank: 'ACCESS Bank',
      account: '009 9455 447',
      name: 'Shaibu Esther Eleojo',
      color: 'from-royal/20 to-royal-dark/20',
      border: 'border-royal/30',
    },
    {
      icon: '🏠',
      title: 'Home Essentials',
      description: 'Furniture, appliances, and more',
      note: 'Contact us for details',
      color: 'from-gold/20 to-gold-dark/20',
      border: 'border-gold/30',
    },
  ];

  return (
    <section id="registry" className="relative py-24 overflow-hidden bg-gradient-to-b from-cream to-white">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-royal/5 rounded-full blur-3xl" />
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
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-royal">
            Gift Registry
          </h2>
          <SectionDivider variant="elegant" />
          <p className="text-muted uppercase tracking-[0.3em] text-sm">
            Your love and presence are the greatest gifts
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {registryItems.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500`} />
              <div className={`relative bg-white rounded-3xl shadow-xl p-8 text-center border ${item.border} hover:border-gold/30 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2`}>
                <div className="relative">
                  <div className="absolute -top-3 -right-3 w-16 h-16 bg-gold/5 rounded-full blur-2xl" />
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
                    className="text-6xl mb-4"
                  >
                    {item.icon}
                  </motion.div>
                </div>

                <h4 className="font-serif text-2xl text-royal mb-3">
                  {item.title}
                </h4>

                {item.bank && (
                  <>
                    <p className="text-sm text-muted">{item.bank}</p>
                    <p className="font-semibold text-gold-dark text-lg mt-1">
                      {item.account}
                    </p>
                    <p className="text-xs text-muted mt-1">{item.name}</p>
                    <SectionDivider variant="modern" className="my-3" />
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(item.account);
                        alert('Account number copied!');
                      }}
                      className="text-xs text-royal hover:text-gold transition-colors font-semibold flex items-center justify-center gap-1 mx-auto"
                    >
                      <span>Copy Details</span>
                      <span className="text-gold">📋</span>
                    </button>
                  </>
                )}

                {item.description && (
                  <>
                    <p className="text-muted text-sm">{item.description}</p>
                    <SectionDivider variant="floral" className="my-3" />
                    <p className="text-sm text-royal font-semibold">{item.note}</p>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="relative group max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-royal/5 to-gold/5 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-gold/10">
              <p className="font-serif text-gold-dark text-sm">
                "Every good gift and every perfect gift is from above..."
              </p>
              <SectionDivider variant="elegant" className="my-2" />
              <p className="text-xs text-muted mt-1">James 1:17</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
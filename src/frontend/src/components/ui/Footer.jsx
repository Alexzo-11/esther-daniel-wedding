'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // WhatsApp link — opens chat with prefilled message
  const whatsappNumber = '2348106509069'; // International format (Nigeria +234, drop leading 0)
  const whatsappMessage = encodeURIComponent(
    "Hi Alexander! I saw your design work on Esther & Daniel's wedding website and I'd love to work with you. Are you available?"
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="relative bg-gradient-to-br from-black via-royal-dark to-royal-deep text-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-royal-light/10 rounded-full blur-3xl" />
        {/* Gold top border accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        {/* Decorative ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/5 rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Monogram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="font-script text-5xl md:text-6xl text-gold drop-shadow-lg">
              EleOjo<span className="text-white/40">'26</span>
            </span>
            <p className="text-xs tracking-[0.4em] uppercase text-white/40 mt-2">
              Forever Begins
            </p>
          </motion.div>

          {/* Three-column grid */}
          <div className="grid md:grid-cols-3 gap-10 md:gap-8 text-center md:text-left">
            {/* Couple */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-serif text-gold text-lg mb-3">The Couple</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Esther Eleojo Shaibu
              </p>
              <p className="text-gold/70 text-xs my-1">&</p>
              <p className="text-sm text-white/70 leading-relaxed">
                Daniel Ojonugwa Uwada
              </p>
            </motion.div>

            {/* Ceremony */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:border-l md:border-r md:border-white/10 md:px-6"
            >
              <h3 className="font-serif text-gold text-lg mb-3">The Ceremony</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Saturday, 14th November 2026
              </p>
              <p className="text-gold/70 text-xs my-1">·</p>
              <p className="text-sm text-white/70 leading-relaxed">
                9:00am Prompt
              </p>
              <p className="text-xs text-white/40 mt-2">
                Deeper Life Bible Church Headquarters
                <br />Bwari, Abuja
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-serif text-gold text-lg mb-3">RSVP Contacts</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Mercy <span className="text-white">09067521268</span>
              </p>
              <p className="text-gold/70 text-xs my-1">·</p>
              <p className="text-sm text-white/70 leading-relaxed">
                Innocent <span className="text-white">08102705038</span>
              </p>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="my-10 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40" />
            <span className="text-gold text-lg">✦</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40" />
          </div>

          {/* Verse */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <p className="font-serif italic text-lg text-gold-light max-w-2xl mx-auto leading-relaxed">
              "Every good gift and every perfect gift is from above,
              and cometh down from the Father of lights..."
            </p>
            <cite className="block not-italic text-xs text-white/40 mt-2 tracking-widest uppercase">
              James 1:17 · KJV
            </cite>
          </motion.blockquote>

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 pt-6 border-t border-white/10 text-center"
          >
            <p className="text-xs text-white/40">
              &copy; {currentYear} Esther &amp; Daniel
              <span className="mx-2 text-gold/40">·</span>
              Made with <span className="text-red-500">❤</span> for a lifetime of love
            </p>

            {/* Designer credit */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-4 flex items-center justify-center gap-2 text-xs"
            >
              <span className="text-white/30">Designed by</span>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 font-semibold text-gold hover:text-gold-light transition-colors duration-300"
              >
                <span className="relative">
                  Alexander Innocent
                  {/* Animated underline */}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-500" />
                </span>
                {/* WhatsApp icon */}
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-500/20 border border-green-400/40 group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-3 h-3 text-green-400 group-hover:text-white transition-colors"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49" />
                  </svg>
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
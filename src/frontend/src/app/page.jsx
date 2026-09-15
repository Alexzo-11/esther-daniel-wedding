'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Events from '@/components/sections/Events';
import RSVPForm from '@/components/sections/RSVPForm';
import Guestbook from '@/components/sections/Guestbook';
import Registry from '@/components/sections/Registry';
import Footer from '@/components/ui/Footer';
import IntroOverlay from '@/components/ui/IntroOverlay';
import ScrollArrows from '@/components/ui/ScrollArrows';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro && <IntroOverlay onComplete={() => setShowIntro(false)} />}
      <ScrollArrows />
      <main>
        <Hero />
        <About />
        <Events />
        <RSVPForm />
        <Guestbook />
        <Registry />
        <Footer />
      </main>
    </>
  );
}
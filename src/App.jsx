import { useEffect, useRef } from 'react';
import SiteHeader from './components/SiteHeader.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import About from './components/About.jsx';
import Project from './components/Project.jsx';
import Socials from './components/Socials.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import { useMotionSystem } from './hooks/useMotionSystem.js';

export default function App() {
  const appRef = useRef(null);
  useMotionSystem(appRef);

  useEffect(() => {
    const bar = document.querySelector('.scroll-progress span');
    if (!bar) return undefined;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
        bar.style.width = `${progress * 100}%`;
      });
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="site-root" ref={appRef}>
      <div className="scroll-progress" aria-hidden="true"><span /></div>
      <div className="ambient-glow ambient-glow--one" aria-hidden="true" />
      <div className="ambient-glow ambient-glow--two" aria-hidden="true" />
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Project />
        <Socials />
      </main>
      <SiteFooter />
    </div>
  );
}

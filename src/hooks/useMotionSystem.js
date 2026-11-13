import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Motion is strictly progressive enhancement. Nothing is visually hidden in
 * CSS while waiting for JavaScript, GSAP, ScrollTrigger, or Lenis to load.
 */
export function useMotionSystem(scopeRef) {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    gsap.registerPlugin(ScrollTrigger);

    let lenis;
    const syncLenis = (time) => lenis?.raf(time * 1000);

    try {
      lenis = new Lenis({
        autoRaf: false,
        anchors: true,
        duration: 1.05,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 0.9,
      });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(syncLenis);
      gsap.ticker.lagSmoothing(0);
    } catch (error) {
      // Native scrolling remains fully usable when smooth scrolling is unavailable.
      lenis?.destroy();
      lenis = undefined;
    }

    const root = scopeRef.current;
    const context = gsap.context(() => {
      gsap.from('.hero-kicker, .hero-title, .hero-description, .hero-actions', {
        y: 24,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'transform',
      });

      gsap.from('.hero-art', {
        y: 18,
        rotate: 1.5,
        duration: 1.2,
        delay: 0.18,
        ease: 'power3.out',
        clearProps: 'transform',
      });

      gsap.utils.toArray('[data-motion="rise"]').forEach((element) => {
        gsap.from(element, {
          y: 26,
          duration: 0.85,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: element,
            start: 'top 88%',
            once: true,
          },
        });
      });

      gsap.to('.orbit-ring--outer', {
        rotate: 360,
        duration: 72,
        repeat: -1,
        ease: 'none',
        transformOrigin: '50% 50%',
      });
      gsap.to('.orbit-satellite', {
        y: -9,
        x: 5,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
      gsap.to('.project-orbit', {
        rotate: -360,
        duration: 38,
        repeat: -1,
        ease: 'none',
      });
    }, root);

    return () => {
      context.revert();
      gsap.ticker.remove(syncLenis);
      lenis?.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [scopeRef]);
}

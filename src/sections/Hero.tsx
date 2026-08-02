import { useRef, type MouseEvent } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { EASE } from '../lib/motion';
import { SITE } from '../data/site';
import { ANCHORS } from '../data/anchors';
import type { TranslationKey } from '../i18n';

interface HeroProps {
  t: (key: TranslationKey) => string;
}

export default function Hero({ t }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });

  const hillsBack = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const hillsMid = useTransform(scrollYProgress, [0, 1], ['0%', '32%']);
  const hillsFront = useTransform(scrollYProgress, [0, 1], ['0%', '55%']);
  const sunY = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);
  const heroTextY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // whole-page parallax layer for the hills — keeps drifting as you scroll the ENTIRE page
  const { scrollYProgress: pageProgress } = useScroll();
  const bgDrift = useTransform(pageProgress, [0, 1], ['0%', '140%']);

  // mouse tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), { stiffness: 150, damping: 20 });
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-4, 4]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative h-[100svh] min-h-[640px] flex items-end overflow-hidden bg-forest grain"
    >
      {/* glowing sun */}
      <motion.div
        style={{ y: sunY }}
        animate={{ opacity: [0.55, 0.85, 0.55], scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full
                   bg-[radial-gradient(circle,rgba(232,174,0,0.6)_0%,rgba(232,174,0,0)_70%)] blur-2xl"
      />
      <motion.div
        style={{ y: sunY }}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: 0.6 }}
        className="absolute top-[13%] left-1/2 -translate-x-1/2 w-[180px] h-[180px] rounded-full bg-gold/40 blur-3xl"
      />

      {/* layered parallax hills */}
      <motion.svg
        style={{ y: hillsBack, translateY: bgDrift }}
        className="absolute bottom-0 left-0 w-full h-[55%] opacity-40"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path d="M0,220 C240,120 420,280 720,200 C1000,130 1220,260 1440,180 L1440,400 L0,400 Z" fill="#0F5A41" />
      </motion.svg>
      <motion.svg
        style={{ y: hillsMid }}
        className="absolute bottom-0 left-0 w-full h-[42%] opacity-70"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path d="M0,180 C280,260 460,120 760,190 C1040,255 1240,150 1440,210 L1440,320 L0,320 Z" fill="#0A4635" />
      </motion.svg>
      <motion.svg
        style={{ y: hillsFront }}
        className="absolute bottom-0 left-0 w-full h-[30%]"
        viewBox="0 0 1440 240"
        preserveAspectRatio="none"
      >
        <path d="M0,140 C300,60 500,180 800,120 C1080,65 1260,150 1440,110 L1440,240 L0,240 Z" fill="#06281E" />
      </motion.svg>

      {/* hero content */}
      <motion.div
        style={{ y: heroTextY, opacity: heroOpacity, rotateX: rotX, rotateY: rotY, transformPerspective: 1000 }}
        className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-20 md:pb-28"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-gold mb-6"
        >
          {SITE.locationLabel}
        </motion.p>

        {/* letter-stagger wordmark (#15) */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
          }}
          className="text-[15vw] leading-[0.9] md:text-[8.5rem] font-display font-bold text-gradient tracking-tight"
          aria-label={SITE.acronym}
        >
          {SITE.acronym.split('').map((letter, i) => (
            <motion.span
              key={i}
              variants={
                reduceMotion
                  ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
                  : { hidden: { opacity: 0, y: 60 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } }
              }
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-white/80 text-lg md:text-2xl max-w-xl font-light"
          >
            {t('heroTagline')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex gap-4"
          >
            <a href={`#${ANCHORS.projects}`} className="btn-secondary">
              {t('heroCtaProjects')}
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href={`#${ANCHORS.about}`} className="btn-ghost">
              {t('heroCtaAbout')}
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* hill divider into the stats strip */}
    </section>
  );
}
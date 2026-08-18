import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../lib/motion';
import LazyMount from '../components/LazyMount';
import type { TranslationKey } from '../i18n';

const TeamCarousel = lazy(() => import('./TeamCarousel'));

interface TeamProps {
  t: (key: TranslationKey) => string;
}

export default function Team({ t }: TeamProps) {
  return (
    <motion.section id="equipe" className="section-padding bg-forest text-white grain" {...fadeInUp}>
      <div className="max-w-6xl mx-auto mb-12">
        <span className="eyebrow">{t('teamEyebrow')}</span>
        <h2 className="text-3xl md:text-5xl font-display font-semibold mt-3">{t('teamTitle')}</h2>
      </div>
      <LazyMount rootMargin="600px 0px">
        <Suspense fallback={<div className="h-[24rem] animate-pulse rounded-2xl bg-white/5" />}>
          <TeamCarousel />
        </Suspense>
      </LazyMount>
    </motion.section>
  );
}

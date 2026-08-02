import { motion } from 'framer-motion';
import ParallaxDrift from '../components/ParallaxDrift';
import { fadeInUp } from '../lib/motion';
import { ANCHORS } from '../data/anchors';
import type { TranslationKey } from '../i18n';

interface AboutProps {
  t: (key: TranslationKey) => string;
}

export default function About({ t }: AboutProps) {
  return (
    <motion.section id={ANCHORS.about} className="section-padding bg-cream dark:bg-noir" {...fadeInUp}>
      <div className="max-w-5xl mx-auto grid md:grid-cols-[auto,1fr] gap-10 items-start">
        <span className="eyebrow whitespace-nowrap">{t('aboutEyebrow')}</span>
        <ParallaxDrift strength={16}>
          <h2 className="text-3xl md:text-5xl font-display font-semibold mb-8 text-forest dark:text-cream leading-tight">
            {t('aboutTitleA')}&nbsp;
            <span className="text-emerald">{t('aboutTitleB')}</span>
          </h2>
          <p className="text-lg text-ink/70 dark:text-cream/60 leading-relaxed max-w-2xl">{t('aboutText')}</p>
        </ParallaxDrift>
      </div>
    </motion.section>
  );
}
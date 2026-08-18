import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../lib/motion';
import { ANCHORS } from '../data/anchors';
import LazyMount from '../components/LazyMount';
import type { TranslationKey } from '../i18n';

const ProjectsCarousel = lazy(() => import('./ProjectsCarousel'));

interface ProjectsProps {
  t: (key: TranslationKey) => string;
}

export default function Projects({ t }: ProjectsProps) {
  return (
    <motion.section id={ANCHORS.projects} className="section-padding bg-surface" {...fadeInUp}>
      <div className="max-w-6xl mx-auto mb-12 flex items-end justify-between flex-wrap gap-4">
        <div>
          <span className="eyebrow">{t('projectsEyebrow')}</span>
          <h2 className="text-3xl md:text-5xl font-display font-semibold mt-3 text-heading">
            {t('projectsTitle')}
          </h2>
        </div>
      </div>
      <LazyMount rootMargin="600px 0px">
        <Suspense fallback={<div className="h-[28rem] animate-pulse rounded-2xl bg-edge/10" />}>
          <ProjectsCarousel t={t} />
        </Suspense>
      </LazyMount>
    </motion.section>
  );
}

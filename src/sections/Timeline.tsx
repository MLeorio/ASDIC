import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EASE, fadeInUp } from '../lib/motion';
import { TIMELINE } from '../data/timeline';
import type { TranslationKey } from '../i18n';

interface TimelineProps {
  t: (key: TranslationKey) => string;
}

const accentCycle = ['emerald', 'gold', 'teal'] as const;

const accentText: Record<(typeof accentCycle)[number], string> = {
  emerald: 'text-emerald',
  gold: 'text-gold',
  teal: 'text-teal'
};

const accentBg: Record<(typeof accentCycle)[number], string> = {
  emerald: 'bg-emerald',
  gold: 'bg-gold',
  teal: 'bg-teal'
};

const accentBorder: Record<(typeof accentCycle)[number], string> = {
  emerald: 'hover:border-emerald/50',
  gold: 'hover:border-gold/50',
  teal: 'hover:border-teal/50'
};

export default function Timeline({ t }: TimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ['start 65%', 'end 60%']
  });
  const timelineHeight = useTransform(timelineProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="actions" className="section-padding bg-surface-card">
      <motion.div {...fadeInUp} className="max-w-5xl mx-auto mb-16 flex items-end justify-between flex-wrap gap-4">
        <div>
          <span className="eyebrow">{t('timelineEyebrow')}</span>
          <h2 className="text-3xl md:text-5xl font-display font-semibold mt-3 text-heading">
            {t('timelineTitle')}
          </h2>
        </div>
      </motion.div>

      <div ref={timelineRef} className="max-w-5xl mx-auto relative pl-12 md:pl-0">
        <div className="timeline-track" />
        <motion.div style={{ height: timelineHeight }} className="timeline-fill" />
        <div className="space-y-20 md:space-y-16">
          {TIMELINE.map((item, index) => {
            const accent = accentCycle[index % accentCycle.length];
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: EASE }}
                className={`relative md:w-[52%] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
              >
                <div
                  className={`absolute -left-12 md:top-1/2 md:-translate-y-1/2 ${
                    index % 2 === 0 ? 'md:-right-12 md:left-auto' : 'md:-left-12'
                  } top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-surface-card border-2 ${
                    accent === 'emerald' ? 'border-emerald' : accent === 'gold' ? 'border-gold' : 'border-teal'
                  } flex items-center justify-center z-10`}
                >
                  <Icon className={`w-4 h-4 ${accentText[accent]}`} />
                </div>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.25 }}
                  className={`group flex gap-5 items-start bg-surface p-6 md:p-7 rounded-2xl timeline-cut
                              ${accentBorder[accent]} transition-colors duration-300`}
                >
                  <div
                    className={`hidden sm:flex shrink-0 w-14 h-14 rounded-xl items-center justify-center ${accentBg[accent]}/10`}
                  >
                    <Icon className={`w-6 h-6 ${accentText[accent]}`} />
                  </div>
                  <div>
                    <span className={`eyebrow ${accentText[accent]}`}>{item.year}</span>
                    <h3 className="text-lg md:text-xl font-display font-semibold mt-2 text-heading">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-body/60 text-sm md:text-base">{item.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
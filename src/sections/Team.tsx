import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { fadeInUp } from '../lib/motion';
import { TEAM } from '../data/team';
import { CAROUSEL } from '../config/swiper';
import SmartImage from '../components/SmartImage';
import type { TranslationKey } from '../i18n';
import 'swiper/css';
import 'swiper/css/pagination';

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

      <Swiper modules={[Pagination]} {...CAROUSEL} className="pb-14 max-w-6xl mx-auto">
        {TEAM.map((promoter, index) => (
          <SwiperSlide key={index} className="h-auto">
            {/* Pas de déplacement au survol : le Swiper couperait le haut de la carte.
                L'effet passe par le fond, la bordure, l'anneau et le zoom photo. */}
            <div
              className="group h-full rounded-2xl border border-white/10 bg-white/5 p-8 text-center
                         transition-all duration-300 hover:border-emerald/40 hover:bg-white/10"
            >
              <div className="mx-auto mb-5 h-28 w-28 overflow-hidden rounded-full ring-2 ring-gold/50 transition-all duration-300 group-hover:ring-gold">
                <SmartImage src={promoter.image} alt={promoter.name} className="group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-display font-semibold">{promoter.name}</h3>
              <p className="mt-1 font-mono text-sm uppercase tracking-wide text-white/50">{promoter.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}
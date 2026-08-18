import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import { EASE } from '../lib/motion';
import { PROJECTS } from '../data/projects';
import { CAROUSEL } from '../config/swiper';
import SmartImage from '../components/SmartImage';
import type { TranslationKey } from '../i18n';
import 'swiper/css';
import 'swiper/css/pagination';

interface ProjectsCarouselProps {
  t: (key: TranslationKey) => string;
}

export default function ProjectsCarousel({ t }: ProjectsCarouselProps) {
  return (
    <Swiper modules={[Pagination]} {...CAROUSEL} className="pb-14 max-w-6xl mx-auto items-stretch">
      {PROJECTS.map((project, index) => (
        <SwiperSlide key={index} className="h-auto">
          <div className="project-card group">
            <div className="relative h-48 shrink-0 overflow-hidden">
              <SmartImage src={project.image} alt={project.title} className="group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 font-mono text-[10px] tracking-widest uppercase bg-gold text-on-accent px-2.5 py-1 rounded-full">
                {project.cost}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-2 text-xl font-display font-semibold text-heading">
                {project.title}
              </h3>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-body/60">
                {project.description}
              </p>
              <div className="mb-5">
                <div className="h-1.5 overflow-hidden rounded-full bg-edge/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${project.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
                    className="h-full rounded-full bg-emerald"
                  />
                </div>
                <div className="mt-2 flex justify-between">
                  <span className="font-mono text-xs text-body/50">
                    {project.progress}% {t('funded')}
                  </span>
                </div>
              </div>
              <button className="btn-support mt-auto w-full text-sm">
                {t('supportProject')}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

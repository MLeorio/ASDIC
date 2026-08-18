import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { TEAM } from '../data/team';
import { CAROUSEL } from '../config/swiper';
import SmartImage from '../components/SmartImage';
import 'swiper/css';
import 'swiper/css/pagination';

export default function TeamCarousel() {
  return (
    <Swiper modules={[Pagination]} {...CAROUSEL} className="!pb-14 max-w-6xl mx-auto">
      {TEAM.map((promoter, index) => (
        <SwiperSlide key={index} className="h-auto">
          {/* Pas de déplacement au survol : le Swiper couperait le haut de la carte.
              L'effet passe par le fond, la bordure, l'anneau et le zoom photo. */}
          <div
            className="group h-full rounded-2xl bg-white/5 p-8 text-center
                       transition-all duration-300 hover:bg-white/10"
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
  );
}

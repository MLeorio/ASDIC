import type { SwiperOptions } from 'swiper/types';

/**
 * Carousel de l'équipe — pagination à puces, responsive 1/2/3.
 */
export const CAROUSEL: SwiperOptions = {
  spaceBetween: 28,
  slidesPerView: 1,
  pagination: { clickable: true },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
};

/**
 * Carousel des projets — navigation par flèches (prev/next) au lieu des puces.
 * 1 carte sur mobile, 2 sur tablette, 3 sur desktop. Swiper masque
 * automatiquement la flèche gauche au début et la droite à la fin.
 */
export const PROJECT_CAROUSEL: SwiperOptions = {
  spaceBetween: 28,
  slidesPerView: 1,
  speed: 450,
  navigation: {
    prevEl: '.projects-prev',
    nextEl: '.projects-next'
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
};
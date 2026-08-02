import type { SwiperOptions } from 'swiper/types';

/**
 * Shared carousel config — Projects and Team sliders stay
 * perfectly in sync from this one place.
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
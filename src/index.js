import './sass/main.scss';
import Swiper, { EffectFlip, Pagination } from 'swiper';
const swiper = new Swiper('.mySwiper', {
  modules: [Pagination, EffectFlip],
  grabCursor: true,
  effect: 'flip',
  flipEffect: {
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

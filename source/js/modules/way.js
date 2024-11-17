import Swiper from 'swiper';
import {mob, tab, desk, addClassArray, cloneSlides, removeClassArray} from '../utils/util.js';
import {Autoplay} from 'swiper/modules';

const initWay = () => {
  const way = document.querySelector('.way');
  const wrapper = way.querySelector('.way__wrapper');
  const slides = way.querySelectorAll('.way__slide');
  const clones = [];
  let swiper = null;

  cloneSlides(wrapper, slides, clones);

  const initSlider = () => {
    if (tab.matches || desk.matches) {
      if (swiper === null) {
        swiper = new Swiper('.way__slider', {
          modules: [Autoplay],
          direction: 'vertical',
          centeredSlides: true,
          loop: true,
          observer: true,
          slidesPerView: '3',
          watchSlidesProgress: true,
          resizeObserver: true,
          updateOnWindowResize: true,
          spaceBetween: 0,

          // autoplay: {
          //   delay: 3000,
          //   disableOnInteraction: false,
          // },

          breakpoints: {
            768: {
              spaceBetween: 10,
            },
          },
        });
      }
    } else {
      if (swiper !== null) {
        swiper.destroy(true, true);
        swiper = null;
      }
    }
  };

  const breakpointChecker = () => {
    if (tab.matches || desk.matches) {
      removeClassArray(clones, 'month__slide--none');
      initSlider();
    } else {
      addClassArray(clones, 'month__slide--none');
    }
  };

  mob.addListener(breakpointChecker);
  breakpointChecker();
};

export {initWay};

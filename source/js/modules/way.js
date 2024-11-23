import Swiper from 'swiper';
import {mob, addClassArray, cloneSlides, removeClassArray} from '../utils/util.js';
import {Autoplay} from 'swiper/modules';

const initWay = () => {
  const way = document.querySelector('.way');
  const wrapper = way.querySelector('.way__wrapper');
  const slides = way.querySelectorAll('.way__slide');
  const clones = [];
  let swiper = null;

  cloneSlides(wrapper, slides, clones);

  const xxx = () => {
    if (mob.matches) {
      addClassArray(clones, 'way__slide--none');
    } else {
      removeClassArray(clones, 'way__slide--none');
    }
  };

  const initSlider = () => {
    if (!mob.matches) {
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

          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },

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
    if (!mob.matches) {
      removeClassArray(clones, 'way__slide--none');
      initSlider();
    } else {
      addClassArray(clones, 'way__slide--none');
      initSlider();
    }
  };

  mob.addListener(breakpointChecker);
  breakpointChecker();
  window.addEventListener('resize', xxx);
  xxx();
};

export {initWay};

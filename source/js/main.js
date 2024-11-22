// import {initAnimations} from './modules/animation';
import {initIntro} from './modules/intro';
import {initWay} from './modules/way';

window.addEventListener('DOMContentLoaded', () => {
  const startHtml = '';
  const indexHtml = 'index.html';
  // const catalogHtml = 'catalog.html';
  const currentPage = window.location.pathname.split('/').pop();

  if (currentPage === startHtml) {
    try {
      const intro = document.querySelector('.intro');
      if (intro) {
        initIntro();
        initWay();
      }
    } catch (e) {
      return;
    }
  }

  if (currentPage === indexHtml) {
    initIntro();
    initWay();
  }

  // if (currentPage === catalogHtml) {

  // }

  // initAnimations();

  window.addEventListener('load', () => {

  });
});

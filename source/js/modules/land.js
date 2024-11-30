import {addClassArray, removeClassArray} from '../utils/util.js';

const initLand = () => {
  const land = document.querySelector('.land');
  const cont = land.querySelector('.land__cont');
  const open = land.querySelector('.land__open');
  const openText = land.querySelector('.land__open span');
  const close = land.querySelector('.land__close');
  const countries = land.querySelectorAll('.land__item');
  const countriesIsland = land.querySelectorAll('.land__item--island');
  const countriesEurope = land.querySelectorAll('.land__item--europe');
  const countriesAsia = land.querySelectorAll('.land__item--asia');
  const countriesAmerica = land.querySelectorAll('.land__item--america');
  const mainlandBtns = land.querySelectorAll('.land__mainland');
  const islandBtn = land.querySelector('.land__mainland--island input');
  const europeBtn = land.querySelector('.land__mainland--europe input');
  const asiaBtn = land.querySelector('.land__mainland--asia input');
  const americaBtn = land.querySelector('.land__mainland--america input');

  const filterCountries = () => {
    if (islandBtn.checked) {
      addClassArray(countriesIsland, 'is-active');
    } else {
      removeClassArray(countriesIsland, 'is-active');
    }
    if (europeBtn.checked) {
      addClassArray(countriesEurope, 'is-active');
    } else {
      removeClassArray(countriesEurope, 'is-active');
    }
    if (asiaBtn.checked) {
      addClassArray(countriesAsia, 'is-active');
    } else {
      removeClassArray(countriesAsia, 'is-active');
    }
    if (americaBtn.checked) {
      addClassArray(countriesAmerica, 'is-active');
    } else {
      removeClassArray(countriesAmerica, 'is-active');
    }
    if (!islandBtn.checked && !europeBtn.checked && !asiaBtn.checked && !americaBtn.checked) {
      addClassArray(countries, 'is-active');
    }
  };

  const toggleCont = () => {
    cont.classList.toggle('is-active');
    open.classList.toggle('is-active');

    if (cont.classList.contains('is-active')) {
      openText.textContent = 'Свернуть';
    } else {
      openText.textContent = 'Показать все';
    }
  };

  const onOpen = () => {
    toggleCont();
  };

  const onClose = () => {
    toggleCont();
  };

  open.addEventListener('click', onOpen);
  close.addEventListener('click', onClose);
  mainlandBtns.forEach((btn) => {
    btn.addEventListener('click', filterCountries);
  });

  filterCountries();
};

export {initLand};

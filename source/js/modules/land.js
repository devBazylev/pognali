import {addClassArray, removeClassArray, tab} from '../utils/util.js';

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
  const megaItems = land.querySelectorAll('.land__megaitem');
  const landMegalist = land.querySelector('.land__megalist');

  megaItems.forEach((megaItem) => {
    const letter = megaItem.querySelector('.land__letter');
    letter.addEventListener('click', () => {
      const landList = megaItem.querySelector('.land__list');
      megaItems.forEach((elem) => {
        if (elem.classList.contains('is-active')) {
          elem.classList.remove('is-active');
        }
      });
      megaItem.classList.add('is-active');
      if (tab.matches) {
        if (landList.offsetHeight > landMegalist.offsetHeight) {
          const subtraction = landList.offsetHeight - landMegalist.offsetHeight;
          landMegalist.style.padding = `0 0 ${subtraction}px`;
        } else {
          landMegalist.style.padding = 'unset';
        }
      }
    });
  });

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
    megaItems.forEach((megaItem) => {
      if (tab.matches) {
        if (megaItem.classList.contains('is-active')) {
          const landList = megaItem.querySelector('.land__list');
          if (landList.offsetHeight > landMegalist.offsetHeight) {
            const subtraction = landList.offsetHeight - landMegalist.offsetHeight;
            landMegalist.style.padding = `0 0 ${subtraction}px`;
          } else {
            landMegalist.style.padding = 'unset';
          }
        }
      }
    });
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

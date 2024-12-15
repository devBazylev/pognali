import {mob, tab, addClassArray, removeClassArray} from '../utils/util.js';

const initLand = () => {
  const land = document.querySelector('.land');
  const head = land.querySelector('.land__head');
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
  const megalist = land.querySelector('.land__megalist');

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
        if (landList.offsetHeight > megalist.offsetHeight) {
          const subtraction = landList.offsetHeight - megalist.offsetHeight;
          megalist.style.padding = `0 0 ${subtraction}px`;
        } else {
          megalist.style.padding = 'unset';
        }
      }
      if (mob.matches) {
        if (megaItem.classList.contains('is-active')) {
          const listHeight = landList.offsetHeight;
          megalist.style.padding = `0 0 ${listHeight}px`;
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
      const landList = megaItem.querySelector('.land__list');
      if (tab.matches) {
        if (megaItem.classList.contains('is-active')) {
          if (landList.offsetHeight > megalist.offsetHeight) {
            const subtraction = landList.offsetHeight - megalist.offsetHeight;
            megalist.style.padding = `0 0 ${subtraction}px`;
          } else {
            megalist.style.padding = 'unset';
          }
        }
      }
      if (mob.matches) {
        if (megaItem.classList.contains('is-active')) {
          const listHeight = landList.offsetHeight;
          megalist.style.padding = `0 0 ${listHeight}px`;
        }
      }
    });
  };

  if (tab.matches || mob.matches) {
    megaItems[0].classList.add('is-active');
  }

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
  head.addEventListener('click', () => {
    if (mob.matches) {
      head.classList.toggle('is-active');
      open.classList.toggle('is-active');
      cont.classList.toggle('is-active');
    }
  });

  filterCountries();

  const checkMob = () => {
    if (mob.matches) {
      filterCountries();
    }
  };

  const checkTab = () => {
    if (tab.matches) {
      filterCountries();
    }
  };

  mob.addListener(checkMob);
  tab.addListener(checkTab);
};

export {initLand};

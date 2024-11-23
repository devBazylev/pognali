const initIntro = () => {
  const intro = document.querySelector('.intro');
  const items = Array.from(intro.querySelectorAll('.intro__item'));

  const BASE_TIME = 400;
  let newTime = BASE_TIME;
  let i = 2;

  items.forEach((item) => {
    setTimeout(() => {
      item.classList.add('intro__item--scale');
      setTimeout(() => {
        item.classList.remove('intro__item--scale');
        item.classList.add('is-active');
      }, BASE_TIME + 100);
    }, newTime);
    newTime = BASE_TIME * i;
    i++;
  });
};

export {initIntro};

const initIntro = () => {
  const intro = document.querySelector('.intro');
  const items = Array.from(intro.querySelectorAll('.intro__item'));

  let baseTime = 400;
  let newTime = baseTime;
  let i = 2;

  items.forEach((item) => {
    setTimeout(() => {
      item.classList.add('intro__item--scale');
      setTimeout(() => {
        item.classList.remove('intro__item--scale');
        item.classList.add('is-active');
      }, baseTime);
    }, newTime);
    newTime = baseTime * i;
    i++;
  });
};

export {initIntro};

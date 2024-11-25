const initServ = () => {
  const intro = document.querySelector('.intro');
  const serv = document.querySelector('.serv');
  const img = serv.querySelector('.serv__pic');

  const checkScrollRange = () => {
    const heightScrolled = window.scrollY;
    let activePosition = heightScrolled + serv.getBoundingClientRect().top - 200;
    let inactivePosition = heightScrolled + serv.getBoundingClientRect().bottom - 260;

    if (heightScrolled > activePosition && heightScrolled < inactivePosition) {
      let coord = heightScrolled - activePosition;
      intro.style.transform = `translate(0, ${coord}px)`;
      img.style.transform = `translate(0, ${coord}px)`;
    }
  };

  document.addEventListener('scroll', checkScrollRange);
  checkScrollRange();
};

export {initServ};

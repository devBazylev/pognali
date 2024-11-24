const initPry = () => {
  const pry = document.querySelector('.pry');
  const form = pry.querySelector('.pry__form');
  const reg = pry.querySelector('.pry__reg');

  const validateForm = () => {
    form.classList.add('pry__form--validation');
  };

  reg.addEventListener('click', validateForm);
};

export {initPry};

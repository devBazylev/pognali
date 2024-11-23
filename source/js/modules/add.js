const initAdd = () => {
  const add = document.querySelector('.add');
  const btn = add.querySelector('.add__btn');
  const close = add.querySelector('.add__close');
  const modal = add.querySelector('.add__modal');

  const openModal = () => {
    modal.classList.add('is-active');
  };

  const closeModal = () => {
    modal.classList.remove('is-active');
  };

  btn.addEventListener('click', openModal);
  close.addEventListener('click', closeModal);
};

export {initAdd};

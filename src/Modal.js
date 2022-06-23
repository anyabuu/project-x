export function modalShow(name, button) {
  const modalWrapper = document.querySelector('.modal-wrapper');
  const modal = document.querySelector(name);
  const modalCloseBut = document.querySelector(button);
  const modalOpenBut = document.querySelector('.header__shop-button');

  modalOpenBut.addEventListener('click', function () {
    modalWrapper.style.display = 'flex';
    modal.classList.add('active');
  });

  modalCloseBut.addEventListener('click', function () {
    modalWrapper.style.display = 'none';
    modal.classList.remove('active');
  });

  window.onclick = function (event) {
    if (event.target == modalWrapper) {
      modalWrapper.style.display = 'none';
    }
  };
}

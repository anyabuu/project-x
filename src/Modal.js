/**
 *
 * @param {'index'|'address'|'delivery'|'make-pizza'} modalName
 */

export const modalShow = (modalName) => {
  const modalWrapper = document.querySelector('.modal-wrapper');
  const modal = document.querySelector(`[data-type="${modalName}"]`);

  modalWrapper.classList.add('modal-wrapper__active');
  modal.classList.add('active');

  modalWrapper.addEventListener('click', function () {
    const currElement = event.target;
    console.log(currElement);
    if (
      currElement.matches('.modal-wrapper') ||
      currElement.matches('[data-action="close"]')
    ) {
      modalWrapper.classList.remove('modal-wrapper__active');
      modal.classList.remove('active');
    }
  }),
    {
      once: true,
    };
};

/**
 *
 * @param {'index'|'address'|'delivery'|'make-pizza'} modalName
 */

export const modalHide = (modalName) => {
  const modalWrapper = document.querySelector('.modal-wrapper');
  const modal = document.querySelector(`[data-type="${modalName}"]`);

  if (modalName) {
    modalWrapper.classList.remove('modal-wrapper__active');
    modal.classList.remove('active');
    return;
  }
  modalWrapper.classList.remove('modal-wrapper__active');
  [...modalWrapper.children].forEach(function (modal) {
    modal.classList.remove('active');
  });
};

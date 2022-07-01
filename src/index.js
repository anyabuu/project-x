import './scss/styles.scss';

import Glide from '@glidejs/glide';
import { Slider } from './Slider';
import { modalHide, modalShow } from './Modal';

document.addEventListener('DOMContentLoaded', (event) => {
  new Glide('.glide', {
    type: 'carousel',
    animationTimingFunc: 'linear',
    perView: 2,
    gap: 30,

    breakpoints: {
      1200: {
        perView: 2,
      },
      767: {
        perView: 2,
      },
      550: {
        gap: 17,
      },
    },
  }).mount();
});

const menuBtn = document.querySelector('.header__menu-bar');
const menu = document.querySelector('.header__burger');
const logo = document.querySelector('.header__logo-burger');

document.addEventListener('DOMContentLoaded', (event) => {
  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      menu.classList.toggle('active');
      menuBtn.classList.toggle('active');
      logo.classList.toggle('active');
    });
  }
});

document.addEventListener('DOMContentLoaded', (event) => {
  const container = document.querySelector('.slider__container');
  const track = document.querySelector('.basket__add-form');
  const btnPrev = document.querySelector('.basket__prev-button');
  const btnNext = document.querySelector('.basket__next-button');

  if (container && track && btnNext && btnPrev) {
    new Slider({
      count: 3,
      gap: 15,
      wrapper: track,
      containerWidth: container.offsetWidth,
      btnNext,
      btnPrev,
      countToSlide: 1,
      interval: 0,
    });
  }
});

const addToBasketBut = document.querySelectorAll('.catalog__basket-button');

if (addToBasketBut) {
  for (let i = 0; i < addToBasketBut.length; i++) {
    addToBasketBut[i].addEventListener('click', function () {
      modalShow('make-pizza');
    });
  }
}
document
  .querySelector('.modal-pizza-make__button')
  .addEventListener('click', function () {
    modalHide();
  });

const changeAddressButton = document.querySelector(
  '.order__form-fieldset-button-address'
);
const changeAddressPickupButton = document.querySelector(
  '.order__form-fieldset-button-pickup'
);
if (changeAddressButton) {
  changeAddressButton.addEventListener('click', function () {
    modalShow('address');
  });
}
if (changeAddressPickupButton) {
  changeAddressPickupButton.addEventListener('click', function () {
    modalShow('address');
  });
}

document
  .querySelector('.modal-address__button')
  .addEventListener('click', function () {
    modalHide();
  });

const changeDeliveryTimeButton = document.querySelector(
  '.order__form-inside-button-time'
);

if (changeDeliveryTimeButton) {
  changeDeliveryTimeButton.addEventListener('click', function () {
    modalShow('delivery');
  });
}

const modalOpenEnterBut = document.querySelector('.header__enter-link');
const modalOpenEnterBurgerBut = document.querySelector(
  '.header__burger-button'
);

if (modalOpenEnterBut) {
  modalOpenEnterBut.addEventListener('click', function () {
    modalShow('index');
  });
}

if (modalOpenEnterBurgerBut) {
  modalOpenEnterBurgerBut.addEventListener('click', function () {
    modalShow('index');

    menu.classList.remove('active');
    menuBtn.classList.remove('active');
    logo.classList.remove('active');
  });
}

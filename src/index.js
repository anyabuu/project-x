import './scss/styles.scss';

import Glide from '@glidejs/glide';
import translate from '@glidejs/glide/src/components/translate';
import { Slider } from './Slider';
import { modalHide, modalShow, modalShoww } from './Modal';

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

document.addEventListener('DOMContentLoaded', (event) => {
  const menuBtn = document.querySelector('.header__menu-bar');
  const menu = document.querySelector('.header__burger');
  const logo = document.querySelector('.header__logo-burger');

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

const modalOpenBut = document.querySelector('.header__shop-button');

if (modalOpenBut) {
  modalOpenBut.addEventListener('click', function () {
    modalShow('make-pizza');
  });
}

document
  .querySelector('.modal-pizza-make__button')
  .addEventListener('click', function () {
    modalHide();
  });

const modalOpenEnterBut = document.querySelector('.header__enter-link');

if (modalOpenEnterBut) {
  modalOpenEnterBut.addEventListener('click', function () {
    modalShow('index');
  });
}

// modalShow('index');
// modalShow('address');
// modalShow('delivery');
// modalShow('make-pizza');

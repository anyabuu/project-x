import './scss/styles.scss';

import Glide from '@glidejs/glide';

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
  let menuBtn = document.querySelector('.header__menu-bar');
  let menu = document.querySelector('.header__burger');
  let logo = document.querySelector('.header__logo');

  if (document.querySelector('.header__menu-bar')) {
    menuBtn.addEventListener('click', function () {
      menu.classList.toggle('active');
      menuBtn.classList.toggle('active');
      logo.classList.toggle('active');
    });
  }
});

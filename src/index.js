import './scss/styles.scss';

import Glide from '@glidejs/glide';
import translate from '@glidejs/glide/src/components/translate';
import { Slider } from './Slider';

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
  const item = document.querySelector('.basket__add-form-checkbox-wrapper');
  const itemss = document.getElementsByClassName(
    'basket__add-form-checkbox-wrapper'
  );

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

  // track.addEventListener('wheel', function (element) {
  //   let items = this.querySelectorAll('.basket__add-form-checkbox-wrapper');
  //   if (element.wheelDelta > 0) {
  //     this.prepend(items[items.length - 1]);
  //   } else {
  //     this.append(items[0]);
  //   }
  // });
  //
  // track.scrollTop = 1;
  // track.addEventListener('scroll', function (element) {
  //   console.log(this.scrollTop, this.scrollHeight, this.clientHeight);
  //
  //   let items = this.querySelectorAll('.basket__add-form-checkbox-wrapper');
  //
  //   this.scrollTop = items[items.length - 1].clientHeight;
  //   this.prepend(items[items.length - 1]);
  //   // this.scrollTop = 1;
  //   return false;
  // });
  //
  // track.scrollLeft = 1;
  // track.addEventListener('scroll', function (ev) {
  //   let items = this.querySelectorAll('.basket__add-form-checkbox-wrapper');
  //   if (parseInt(this.scrollLeft) == 0) {
  //     this.scrollLeft = items[items.length - 1].clientWidth;
  //     this.prepend(items[items.length - 1]);
  //     this.scrollLeft = 1;
  //   } else if (this.scrollLeft > this.scrollWidth - this.clientWidth - 1) {
  //     this.append(items[0]);
  //   }
  //   return false;
  // });
});

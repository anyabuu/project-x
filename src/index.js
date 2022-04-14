import './scss/styles.scss';

import Glide from '@glidejs/glide';

document.addEventListener('DOMContentLoaded', (event) => {

  new Glide('.glide', {
    type: 'carousel',
    autoplay: 2000,
    animationTimingFunc: 'linear',
    perView: 2,

    breakpoints: {
      767: {
        perView: 1,
      }
    }

  }).mount()
});


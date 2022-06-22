export function Slider({
  count,
  gap,
  wrapper,
  containerWidth,
  btnNext,
  btnPrev,
  interval,
  countToSlide,
}) {
  let elements = [...wrapper.children];
  let width = (containerWidth - gap * (count - 1)) / count;

  let i = 0;

  let items = document.querySelectorAll('.basket__add-form-checkbox-wrapper');

  console.log(wrapper);
  console.log(elements);

  elements.forEach((item) => {
    item.style.width = `${width}px`;
  });

  function slide(quantity) {
    let scrollWidth = quantity * width + gap * quantity;

    wrapper.scrollBy(scrollWidth, 0);
  }

  btnNext.addEventListener('click', function () {
    if (i === elements.length) {
      i = 0;

      wrapper.append(elements[0]);
      slide(countToSlide);
    }
    wrapper.append(items[i]);
    slide(countToSlide);
    i++;
  });

  btnPrev.addEventListener('click', function () {
    if (i === 0 || i > elements.length) {
      i = 0;
      wrapper.prepend(elements[elements.length - 1]);
      slide(-countToSlide);
      i++;
    } else {
      wrapper.prepend(items[elements.length - i]);
      slide(-countToSlide);
    }

    i++;
  });

  if (interval) {
    let intervalId = startInterval();

    wrapper.addEventListener('mouseenter', function () {
      clearInterval(intervalId);
    });
    wrapper.addEventListener('mouseleave', function () {
      intervalId = startInterval();
    });

    function startInterval() {
      return setInterval(function () {
        slide(countToSlide);
      }, interval);
    }
  }

  // wrapper.addEventListener('scroll', function () {
  //   console.log(fds);
  //   this.scrollLeft = elements[elements.length - 1].clientWidth;
  //   this.prepend(elements[elements.length - 1]);
  //
  //   return false;
  // });
}

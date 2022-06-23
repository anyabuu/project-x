export function Slider({
  count,
  gap,
  wrapper,
  containerWidth,
  btnNext,
  btnPrev,
  countToSlide,
  interval,
}) {
  let elements = [...wrapper.children];
  let width = (containerWidth - gap * (count - 1)) / count;

  let i = 0;

  elements.forEach((item) => {
    item.style.width = `${width}px`;
  });

  function slide(quantity) {
    let scrollWidth = quantity * width + gap * quantity;

    wrapper.scrollBy(scrollWidth, 0);
  }

  btnNext.addEventListener('click', function () {
    console.log(i);
    if (i >= elements.length) {
      i = 0;
    }
    console.log(i);

    wrapper.append(elements[i]);
    slide(countToSlide);
    i++;
  });

  btnPrev.addEventListener('click', function () {
    console.log(i);
    if (i === 0 || i === elements.length) {
      i = 0;
    }
    wrapper.prepend(elements[elements.length - i - 1]);
    slide(-countToSlide);
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
      return setInterval(test, interval);
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

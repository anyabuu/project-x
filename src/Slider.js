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

  elements.forEach((item) => {
    item.style.width = `${width}px`;
  });

  function slide(quantity) {
    let scrollWidth = quantity * width + gap * quantity;

    wrapper.scrollBy(scrollWidth, 0);
  }

  btnNext.addEventListener('click', function () {
    slide(countToSlide);
  });

  btnPrev.addEventListener('click', function () {
    slide(-countToSlide);
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
}

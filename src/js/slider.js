$(document).ready(function() {
  $('.js-slider').each(function(index, el) {
    new Swiper(el, {
      loop: false,
      spaceBetween: 16,
      slidesPerView: 1,

      pagination: {
        el: '.js-slider-pagination[data-slider="'+el.dataset.slider+'"]',
        clickable: true,
      },

      navigation: {
        nextEl: '.js-slider-next[data-slider="'+el.dataset.slider+'"]',
        prevEl: '.js-slider-prev[data-slider="'+el.dataset.slider+'"]',
      },
    });
  });
});

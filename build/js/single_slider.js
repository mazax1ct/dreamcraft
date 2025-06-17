$(document).ready(function() {
  $('.js-single-slider').each(function(index, el) {
    new Swiper(el, {
      loop: false,
      spaceBetween: 8,
      slidesPerView: 'auto',
      slidesOffsetBefore: 16,
      slidesOffsetAfter: 16,

      breakpoints: {
        1024: {
          slidesPerView: 1,
          spaceBetween: 16,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
        }
      },

      pagination: {
        el: '.js-single-slider-pagination[data-slider="'+el.dataset.slider+'"]',
        clickable: true,
      },

      navigation: {
        nextEl: '.js-single-slider-next[data-slider="'+el.dataset.slider+'"]',
        prevEl: '.js-single-slider-prev[data-slider="'+el.dataset.slider+'"]',
      },
    });
  });
});

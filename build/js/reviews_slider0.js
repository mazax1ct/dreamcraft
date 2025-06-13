$(document).ready(function() {
  $('.js-reviews-slider').each(function(index, el) {
    new Swiper(el, {
      loop: false,
      spaceBetween: 8,
      slidesPerView: 'auto',
      slidesOffsetBefore: 16,
      slidesOffsetAfter: 16,

      breakpoints: {
        1024: {
          slidesPerView: 2,
          spaceBetween: 16,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
        },
        1900: {
          slidesPerView: 2,
          spaceBetween: 48,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
        },
      },

      pagination: {
        el: '.js-reviews-slider-pagination[data-slider="'+el.dataset.slider+'"]',
        clickable: true,
      },

      navigation: {
        nextEl: '.js-reviews-slider-next[data-slider="'+el.dataset.slider+'"]',
        prevEl: '.js-reviews-slider-prev[data-slider="'+el.dataset.slider+'"]',
      },
    });
  });
});

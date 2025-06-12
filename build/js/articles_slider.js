$(document).ready(function() {
  $('.js-articles-slider').each(function(index, el) {
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
          slidesOffsetBefore: 16,
          slidesOffsetAfter: 16,
        },
        1280: {
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
        el: '.js-articles-slider-pagination[data-slider="'+el.dataset.slider+'"]',
        clickable: true,
      },

      navigation: {
        nextEl: '.js-articles-slider-next[data-slider="'+el.dataset.slider+'"]',
        prevEl: '.js-articles-slider-prev[data-slider="'+el.dataset.slider+'"]',
      },
    });
  });
});

$(document).ready(function() {
  $('.js-tarifs-slider').each(function(index, el) {
    new Swiper(el, {
      loop: false,
      spaceBetween: 8,
      slidesPerView: 'auto',
      slidesOffsetBefore: 16,
      slidesOffsetAfter: 16,

      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 16,
          slidesOffsetBefore: 16,
          slidesOffsetAfter: 16,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 16,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
        },
        1900: {
          slidesPerView: 4,
          spaceBetween: 24,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
        }
      },

      pagination: {
        el: '.js-tarifs-slider-pagination[data-slider="'+el.dataset.slider+'"]',
        clickable: true,
      },

      navigation: {
        nextEl: '.js-tarifs-slider-next[data-slider="'+el.dataset.slider+'"]',
        prevEl: '.js-tarifs-slider-prev[data-slider="'+el.dataset.slider+'"]',
      },
    });
  });
});

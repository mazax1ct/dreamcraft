$(document).ready(function() {
  $('.js-persons-slider').each(function(index, el) {
    new Swiper(el, {
      loop: false,
      spaceBetween: 8,
      slidesPerView: 'auto',
      slidesOffsetBefore: 16,

      breakpoints: {
        1024: {
          slidesPerView: 'auto',
          spaceBetween: 16,
          slidesOffsetBefore: 16
        },
        1280: {
          slidesPerView: 'auto',
          spaceBetween: 16,
          slidesOffsetBefore: 0
        },
        1900: {
          slidesPerView: 'auto',
          spaceBetween: 24,
          slidesOffsetBefore: 0
        },
      },

      pagination: {
        el: '.js-persons-slider-pagination[data-slider="'+el.dataset.slider+'"]',
        clickable: true,
      },

      navigation: {
        nextEl: '.js-persons-slider-next[data-slider="'+el.dataset.slider+'"]',
        prevEl: '.js-persons-slider-prev[data-slider="'+el.dataset.slider+'"]',
      }
    });
  });

  $('.js-persons-slider-2').each(function(index, el) {
    new Swiper(el, {
      loop: false,
      spaceBetween: 8,
      slidesPerView: 'auto',
      slidesOffsetBefore: 16,

      breakpoints: {
        1024: {
          centeredSlides: true,
          slidesPerView: 'auto',
          spaceBetween: 16,
          slidesOffsetBefore: 0
        },
        1900: {
          centeredSlides: true,
          slidesPerView: 'auto',
          spaceBetween: 24,
          slidesOffsetBefore: 0
        },
      },

      pagination: {
        el: '.js-persons-slider-pagination[data-slider="'+el.dataset.slider+'"]',
        clickable: true,
      },

      navigation: {
        nextEl: '.js-persons-slider-next[data-slider="'+el.dataset.slider+'"]',
        prevEl: '.js-persons-slider-prev[data-slider="'+el.dataset.slider+'"]',
      }
    });
  });
});

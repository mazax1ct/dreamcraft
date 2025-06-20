$(document).ready(function() {
  $('.js-num-cards-slider').each(function(index, el) {
    new Swiper(el, {
      loop: false,
      spaceBetween: 8,
      slidesPerView: 'auto',
      slidesOffsetBefore: 16,
      slidesOffsetAfter: 16,

      breakpoints: {
        1280: {
          slidesPerView: 4,
          spaceBetween: 16,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
        }
      },

      pagination: {
        el: '.js-num-cards-slider-pagination[data-slider="'+el.dataset.slider+'"]',
        clickable: true,
      },

      navigation: {
        nextEl: '.js-num-cards-slider-next[data-slider="'+el.dataset.slider+'"]',
        prevEl: '.js-num-cards-slider-prev[data-slider="'+el.dataset.slider+'"]',
      },
    });
  });
});

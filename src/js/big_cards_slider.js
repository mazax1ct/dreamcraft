$(document).ready(function() {
  $('.js-big-cards-slider').each(function(index, el) {
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
        el: '.js-big-cards-slider-pagination[data-slider="'+el.dataset.slider+'"]',
        clickable: true,
      },

      navigation: {
        nextEl: '.js-big-cards-slider-next[data-slider="'+el.dataset.slider+'"]',
        prevEl: '.js-big-cards-slider-prev[data-slider="'+el.dataset.slider+'"]',
      },
    });
  });
});

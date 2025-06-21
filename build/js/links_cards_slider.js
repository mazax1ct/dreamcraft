$(document).ready(function() {
  $('.js-links-cards-slider').each(function(index, el) {
    new Swiper(el, {
      loop: false,
      spaceBetween: 8,
      slidesPerView: 'auto',
      slidesOffsetBefore: 16,
      slidesOffsetAfter: 16,

      breakpoints: {
        1024: {
          spaceBetween: 16,
          slidesOffsetBefore: 16,
          slidesOffsetAfter: 16,
        },
        
        1280: {
          slidesPerView: 6,
          spaceBetween: 16,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0
        }
      },

      pagination: {
        el: '.js-links-cards-slider-pagination[data-slider="'+el.dataset.slider+'"]',
        clickable: true,
      },

      navigation: {
        nextEl: '.js-links-cards-slider-next[data-slider="'+el.dataset.slider+'"]',
        prevEl: '.js-links-cards-slider-prev[data-slider="'+el.dataset.slider+'"]',
      },
    });
  });
});

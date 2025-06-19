$(document).ready(function() {
  if($('body').width() < 768){
    $('.js-partners-slider').each(function(index, el) {
      new Swiper(el, {
        loop: false,
        spaceBetween: 8,
        slidesPerView: 'auto',
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,

        pagination: {
          el: '.js-partners-slider-pagination[data-slider="'+el.dataset.slider+'"]',
          clickable: true,
        },

        navigation: {
          nextEl: '.js-partners-slider-next[data-slider="'+el.dataset.slider+'"]',
          prevEl: '.js-partners-slider-prev[data-slider="'+el.dataset.slider+'"]',
        },
      });
    });
  } else {
    $('.js-partners-slider').each(function(index, el) {
      new Swiper(el, {
        loop: true,
        effect: 'fade',

        navigation: {
          nextEl: '.js-partners-slider-next[data-slider="'+el.dataset.slider+'"]',
          prevEl: '.js-partners-slider-prev[data-slider="'+el.dataset.slider+'"]',
        },
      });
    });
  }
});

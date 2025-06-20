$(document).ready(function() {
  $('.js-popular-blog').each(function(index, el) {
    new Swiper(el, {
      loop: true,
      spaceBetween: 8,
      slidesPerView: 'auto',
      slidesOffsetBefore: 16,
      slidesOffsetAfter: 16,

      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 16,
          slidesOffsetBefore: 16,
          slidesOffsetAfter: 16,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 16,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0
        },
        1900: {
          slidesPerView: 4,
          spaceBetween: 24,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0
        },
      },

      pagination: {
        el: '.js-popular-blog-pagination[data-slider="'+el.dataset.slider+'"]',
        clickable: true,
      },

      navigation: {
        nextEl: '.js-popular-blog-next[data-slider="'+el.dataset.slider+'"]',
        prevEl: '.js-popular-blog-prev[data-slider="'+el.dataset.slider+'"]',
      }
    });
  });
});

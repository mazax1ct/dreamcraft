$(document).ready(function() {
  if($('body').width() < 1024){
    $('.js-big-features-slider').each(function(index, el) {
      new Swiper(el, {
        loop: false,
        spaceBetween: 8,
        slidesPerView: 'auto',
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,

        pagination: {
          el: '.js-big-features-slider-pagination[data-slider="'+el.dataset.slider+'"]',
          clickable: true,
        }
      });
    });
  }
});

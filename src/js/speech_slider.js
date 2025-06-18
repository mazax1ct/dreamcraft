$(document).ready(function() {
  if($('body').width() < 1024){
    $('.js-speech-slider').each(function(index, el) {
      new Swiper(el, {
        loop: false,
        spaceBetween: 8,
        slidesPerView: 'auto',
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,

        pagination: {
          el: '.js-speech-slider-pagination[data-slider="'+el.dataset.slider+'"]',
          clickable: true,
        }
      });
    });
  }
});

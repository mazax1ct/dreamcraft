function changeImage(el) {
  if($('.js-why-image').attr('src') !== el.attr('data-src')){
    $('.js-why-image').css('opacity', 0);
    setTimeout(function() {
      $('.js-why-image').attr('src', el.attr('data-src')).attr('srcset', el.attr('data-srcset'));
    }, 300);
    setTimeout(function() {
      $('.js-why-image').css('opacity', 1);
    }, 300);
  }
}

$(document).on('click', '.js-why-toggler', function() {
  let _this = $(this).closest('.why');
  if(!_this.hasClass('is-active')){
    _this.closest('.why-block').find('.why').removeClass('is-active');
    _this.closest('.why-block').find('.why').find('.why__body').slideUp();
    _this.addClass('is-active');
    _this.find('.why__body').slideDown();
    changeImage(_this);
  } else {
    _this.removeClass('is-active');
    _this.find('.why__body').slideUp();
  }
  return false;
});

$(document).ready(function() {
  if($('body').width() < 1024) {
    $('.js-why-slider').each(function(index, el) {
      new Swiper(el, {
        loop: false,
        spaceBetween: 8,
        slidesPerView: 'auto',
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,

        pagination: {
          el: '.js-why-slider-pagination[data-slider="'+el.dataset.slider+'"]',
          clickable: true,
        }
      });
    });
  }
});

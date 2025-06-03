//отслеживание скролла для шапки
var header = $('.header'),
    toTop = $('.js-to-top'),
    scrollPrev = 0;

var resize_scroll = function(e) {
  var scrolled = $(window).scrollTop();

  if (scrolled > 0) {
		header.addClass('is-scrolled');
    toTop.addClass('is-active');
	} else {
		header.removeClass('is-scrolled');
    toTop.removeClass('is-active');
	}

	scrollPrev = scrolled;
};

$(document).ready(function() {
  //запуск функции навешивания класса на шапку
  resize_scroll();
});

//перезапуск функции навешивания класса на шапку при скролле и ресайзе
$(window).on("scroll", resize_scroll).on("resize", resize_scroll);

//открытие мобильного меню
$(document).on('click', '.js-mobile-menu-opener', function() {
  $('.page').addClass('is-overflow');
  $('.m-menu').fadeIn();
  return false;
});

//закрытие мобильного меню
$(document).on('click', '.js-mobile-menu-closer', function() {
  $('.m-menu').fadeOut(function() {
    $('.page').addClass('is-overflow');
    $('.m-menu__main-title').text('');
    $('.m-menu__title').show();
    $('.js-menu-back').hide();
    $('.m-menu__content').removeClass('is-overflow');
    $('.m-menu__submenu').css('display', '').removeClass('is-last');
  });
  return false;
});

$(document).on('click', '.js-menu-back', function() {
  $('.m-menu__submenu.is-last:last').removeClass('is-last').fadeOut();

  let title = $('.m-menu__submenu.is-last:last').closest('.m-menu__list-item').find('.js-next-lvl-opener:first span').text();
  if(title.length > 0){
    $('.m-menu__main-title').text(title);
  }

  if($('.m-menu__submenu.is-last').length < 1){
    $('.m-menu__main-title').text('');
    $('.m-menu__title').show();
    $('.js-menu-back').hide();
    $('.m-menu__content').removeClass('is-overflow');
  }
  return false;
});

$(document).on('click', '.js-next-lvl-opener', function() {
  let _this = $(this);
  $('.m-menu__title').hide();
  $('.m-menu__header-button--back').css('display', 'flex').attr('data-title', _this.text());
  $('.m-menu__main-title').text(_this.text());
  $('.m-menu__content').addClass('is-overflow');
  _this.closest('.m-menu__list-item').find('.m-menu__submenu:first').fadeIn(function() {
    $(this).addClass('is-last');
  })
  return false;
});

//тогглер меню
$(document).on('click', '.js-menu-toggler', function () {
  if(!$(this).hasClass('is-active')) {
    $(this).addClass('is-active');
    $(this).find('use').attr('xlink:href', 'images/sprite.svg#close_icon');
    $('body').addClass('is-overflow');
  } else {
    $(this).removeClass('is-active');
    $(this).find('use').attr('xlink:href', 'images/sprite.svg#burger_icon');
    $('body').removeClass('is-overflow');
  }
  $('.header').toggleClass('menu-is-open');
  return false;
});

//аккордеон
$(document).on('click', '.accordion__toggler', function () {
  var _this = $(this);
  if(!_this.hasClass('is-active')){
    _this.addClass('is-active');
    _this.next('.accordion__body').slideDown();
  }else{
    _this.next('.accordion__body').slideUp(function() {
      _this.removeClass('is-active');
    });
  }
  return false;
});

//табы
$(document).on('click', '.js-tabs-menu__button', function () {
  $(this).closest('.tabs-container').find('.js-tabs-menu__button').removeClass('is-active');
  $(this).addClass('is-active');
  $(this).closest('.tabs-container').find('.tab').removeClass('is-active');
  $(this).closest('.tabs-container').find('.tab[data-tab="'+ $(this).attr('data-tab') +'"]').addClass('is-active');

  if($(this).closest('.tabs-container').find('.js-licenses-slider').length > 0) {
    $('.js-licenses-slider').slick('setPosition');
  }

  return false;
});

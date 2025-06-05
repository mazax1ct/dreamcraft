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

//возврат на уровень выше в моб меню
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

//уровень ниже в моб меню
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
$(document).on('mouseenter mouseleave', '.js-d-menu-toggler', function () {
  if(!$(this).hasClass('is-active')) {
    $(this).addClass('is-active');
    $('.header').addClass('menu-is-open');
    $('.d-menu').addClass('is-open');
    setTimeout(function() {
      $('.d-menu').addClass('is-visible');
    }, 10);
  } else {
    $(this).removeClass('is-active');
    $('.d-menu').removeClass('is-visible');
    setTimeout(function() {
      $('.header').removeClass('menu-is-open');
      $('.d-menu').removeClass('is-open');
    }, 150);
  }

  return false;
});

//табы в десктопном меню
$(document).on('click', '.js-d-menu-tab', function () {
  $('.js-d-menu-tab').removeClass('is-active');
  $(this).addClass('is-active');
  $('.d-menu__tab').removeClass('is-active');
  $('.d-menu__tab[data-target="'+$(this).attr('data-target')+'"]').addClass('is-active');
  return false;
});

//аккордеон в футере
$(document).on('click', '.js-accordion-toggler', function () {
  var _this = $(this);
  if(!_this.hasClass('is-active')){
    _this.addClass('is-active');
    _this.next('.f-accordion__body').slideDown();
  }else{
    _this.next('.f-accordion__body').slideUp(function() {
      _this.removeClass('is-active');
    });
  }
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

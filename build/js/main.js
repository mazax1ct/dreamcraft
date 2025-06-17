//отслеживание скролла для шапки
var header = $('.header'),
    toTop = $('.js-to-top'),
    scrollPrev = 0;

var resize_scroll = function(e) {
  var scrolled = $(window).scrollTop();

  if (scrolled > 0) {
		header.addClass('is-scrolled');
    toTop.addClass('is-active');
	}

  if (scrolled == 0) {
		header.removeClass('is-scrolled');
    toTop.removeClass('is-active');
	}

  if ( scrolled > 0 && scrolled > scrollPrev ) {
		header.addClass('is-out');
	} else {
		header.removeClass('is-out');
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
    $('.page').removeClass('is-overflow');
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

//тогглер комбобокса
$(document).on('click', '.js-combobox-toggler', function () {
  var combobox = $(this).closest('.combobox__container');

  if(combobox.hasClass('is-open')) {
    combobox.removeClass('is-open')
  } else {
    $('.combobox__container').removeClass('is-open');
    combobox.addClass('is-open')
  }
  return false;
});

//табы
$(document).on('click', '.js-tabs-button', function () {
  $(this).closest('.tabs').find('.js-tabs-button').removeClass('is-active');
  $(this).addClass('is-active');
  $(this).closest('.tabs').find('.tab').removeClass('is-active');
  $(this).closest('.tabs').find('.tab[data-tab="'+ $(this).attr('data-tab') +'"]').addClass('is-active');
  $(this).closest('.tabs').find('.tabs__title').removeClass('is-active');
  $(this).closest('.tabs').find('.tabs__title[data-tab="'+ $(this).attr('data-tab') +'"]').addClass('is-active');

  return false;
});

//транс таблица
$(document).on('click', '.js-trans-table-toggler', function () {
  $(this).closest('.trans-table__toggler-block').toggleClass('is-active');
  $(this).closest('tr').find('td:not(.trans-table__toggler-block)').slideToggle();

  return false;
});

//аккордеон
$(document).on('click', '.js-big-accordion-toggler', function () {
  var _this = $(this);
  if(!_this.hasClass('is-active')){
    _this.closest('.accordion').addClass('is-active');
    _this.addClass('is-active');
    _this.next('.accordion__body').slideDown();
  }else{
    _this.next('.accordion__body').slideUp(function() {
      _this.removeClass('is-active');
      _this.closest('.accordion').removeClass('is-active');
    });
  }
  return false;
});

//кат
$(document).on('click', '.js-cut-toggler', function () {
  let _this = $(this);
  if(!_this.hasClass('is-active')){
    $('.cut[data-cut="'+ $(this).attr('data-cut') +'"]').slideDown();
    _this.find('span').text('Скрыть');
    _this.addClass('is-active');
  }else{
    $('.cut[data-cut="'+ $(this).attr('data-cut') +'"]').slideUp();
    _this.find('span').text('Показать больше');
    _this.removeClass('is-active');
  }

  return false;
});

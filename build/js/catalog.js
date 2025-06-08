$(document).on('click', '.js-filter-opener', function () {
  $('.page').addClass('is-overflow');
  $('.filter').fadeIn();
  return false;
});

$(document).on('click', '.js-filter-closer', function () {
  $('.filter').fadeOut(300, function () {
    $('.page').removeClass('is-overflow');
  });
  return false;
});

//открытие/закрытие ката в секции фильтра
$(document).on('click', '.js-filter-section-cut', function () {
  var oldText = $(this).find('span').text();
  $(this).find('span').text($(this).attr('data-text'));
  $(this).attr('data-text', oldText);
  $(this).toggleClass('is-active');
  $(this).prev('.filter__section-cut').slideToggle();
  return false;
});

$(document).on('click', '.js-catalog-view', function () {
  $('.js-catalog-view').toggleClass('is-active');
  $('.catalog__list').toggleClass('catalog__list--list');
  return false;
});

if($('body').width() > 1024) {
  var options = {
    threshold: 1
  }

  var observer = new IntersectionObserver(callback, options);

  var target = document.querySelector('.results');

  observer.observe(target);

  function callback(entries, observer) {
    if(entries[0].isIntersecting){
      observer.disconnect();
      $('.js-count').each(function () {
          let dur = parseInt($(this).attr('data-duration'));
          $(this).prop('Counter',0).animate({
              Counter: $(this).text()
          }, {
              duration: dur,
              easing: 'linear',
              step: function (now) {
                  $(this).text(Math.ceil(now));
              }
          });
      });
    }
  }
}

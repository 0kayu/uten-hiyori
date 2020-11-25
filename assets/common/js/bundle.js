$(function() {
  var setParallax = function() {
    $('.js-parallax').each(function() {
      var scroll = $(window).scrollTop();
      var position = $(this).offset().top;
      var wh = $(window).height();
      if (scroll > position - wh + 100) {
        $(this).addClass('parallax');
      }
    });
  }
  $(window).on('scroll', function() {
    setParallax();
  });
  $('.js-toggle-menu').click(function() {
    $(window).width() > 1200 || ($('.js-toggle-menu').toggleClass('is-open'), $('.js-toggle-menu').parent().toggleClass('is-open'));
  });
  $('.header-menu-link').click(function() {
    $(window).width() < 1200 && ($('.js-toggle-menu').toggleClass('is-open'), $('.js-toggle-menu').parent().toggleClass('is-open'));
  });
  $('a[href^="#"]').click(function() {
    var href = $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top - ($(window).width() < 737 ? 50 : 80);
    $('html, body').animate({scrollTop:position}, 800, 'swing');
    return false;
  });
  setParallax();
});
$(document).ready(function() {
  var btnToTop = $(".btnToTop");
  var arrow = $(".arrow");
  var navToggleBtn = $(".nav-toggle");
  var responsive_menu = $(".nav");

  // ON SCROLL HIDE "ARROW DOWN" - SHOW BTN "SCROLL TO TOP"
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      btnToTop.fadeIn();
      arrow.fadeOut();
      return false;
    } else {
      btnToTop.fadeOut();
      arrow.fadeIn();
    }
  });

  // NAVBAR HIDE AND SHOW ON CLICK
  navToggleBtn.on("click", function(e) {
    e.preventDefault();
    responsive_menu.slideToggle();
  });

  $(window).resize(function() {
    var obtener_ancho = $(this).width();
    if (obtener_ancho > 865) {
      responsive_menu.removeAttr("style");
    }
  });

  $(".nav__link").on("click", function(e) {
    var obtener_ancho = $(window).width();
    if (obtener_ancho < 865) {
      responsive_menu.slideToggle();
    }
  });

  // GET FULL YEAR SET IN FOOTER
  $(".fullYear").text(new Date().getFullYear());
});
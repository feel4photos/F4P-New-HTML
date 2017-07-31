
(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $(".banner-slider").slick({
        dots: true,
        dotsClass: 'slick-dots',
        autoplay: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        mobileFirst: true,
        focusOnSelect: true
        //adaptiveHeight: true
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space

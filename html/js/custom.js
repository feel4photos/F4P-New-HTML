
var swiper = new Swiper('.swiper1', {
    zoom: true,
    pagination: '.swiper-pagination1',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
});
var swiper2 = new Swiper('.swiper2', {
    //zoom: true,
    pagination: '.swiper-pagination2',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    slidesPerView: 2,
});


(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $(".c-slider").slick({
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

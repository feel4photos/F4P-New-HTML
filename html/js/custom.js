// swiper slider
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
var swiper3 = new Swiper('.swiper3', {
    zoom: true,
    pagination: '.swiper-pagination3',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
});
var swiper4 = new Swiper('.swiper4', {
    zoom: true,
    pagination: '.swiper-pagination4',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
});


// click to scroll down
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });
});

// scroll to top
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('#scroll').fadeIn(1000);
        }else{
            $('#scroll').fadeOut(1000);
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1500);
        return false;
    });
});


// page preloader
$(document).ready(function(){
   /***** Element 1 *****/
        // Initialize Progress and show LoadingOverlay
        var progress1 = new LoadingOverlayProgress();
        $(".o-whole").LoadingOverlay("show", {
            custom  : progress1.Init()
        });
        // Simulate some action:
        var count1  = 0;
        var iid1    = setInterval(function(){
            if (count1 >= 100) {
                clearInterval(iid1);
                delete progress1;
                $(".o-whole").LoadingOverlay("hide");
                return;
            }
            count1++;
            progress1.Update(count1);
        }, 100);
    /*********************/
});


// site preloader
$(document).ready(function(){
    $("#os-phrases > h2").lettering('words').children("span").lettering().children("span").lettering();
});

// site preloader fade out
$(document).ready(function() { // makes sure the whole site is loaded
    $('.o-site-preloader').delay(15000).fadeOut(2000); // will first fade out the loading animation
    $('body').delay(3500).css({'overflow':'visible'});
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

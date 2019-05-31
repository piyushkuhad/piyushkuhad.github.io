$(document).ready(function(){

    var lastposition = 0;
        $(window).scroll(function () {
            var currentPosition = $(window).scrollTop();
            if ( currentPosition > lastposition) {
                $('body').addClass('to-bottom');
            }
            else {
                $('body').removeClass('to-bottom');       
            }
            lastposition = currentPosition;
     });

    //  $(".cm-slider-section .owl-carousel").owlCarousel({
    //     loop: false,
    //     rewind: true,
    //     autoplay: true,
    //     items: 1,
    //     autoplayTimeout: 2000,
    //     animateOut: "fadeOut"
    // });

    $('.cm-carousel').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });

    $(window).scroll(function(){
        if($(document).scrollTop() > 70) {
            $('body').addClass('sticky');
        }
        else{
            $('body').removeClass('sticky');
        }
    });


});
$(document).ready(function(){
    
    $("body").click(function(e) {
        $(this).removeClass("menu-open");
    });

    $(".menu-trigger").click(function(e) {
        e.stopPropagation();
        $("body").toggleClass("menu-open");
        return false
    });

    $(".custom-menu-primary .cm-menu-wrapper").click(function(e) {
        e.stopPropagation();
    });

    $(".tab-panels >  ul > li").click(function() {
        var panelToShow = $(this).attr("rel");
        $(".tab-panels .panel.active").not("#" + panelToShow).removeClass("active");
        $("#" + panelToShow).addClass("active");

        $(this).siblings(".tab-panels > ul > li").removeClass("active");
        $(this).addClass("active");
    });
    
    $('#pagepiling').pagepiling({
        sectionsColor: ['#f2f2f2', '#fff', '#7BAABE', 'whitesmoke'],
        direction: 'vertical',
        verticalCentered: false,
        scrollingSpeed: 700,
        easing: 'swing',
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['section1', 'section2', 'section3', 'section4']
        },
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
        menu: '#myMenu'
    });

    var owl = $(".cm-banner-slider.owl-carousel");
    
    $(".cm-banner-slider.owl-carousel").owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        items: 1,
        autoplaySpeed: 100,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut'
    });

    $(".cm-benefits-slider-inner.owl-carousel").owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        items: 1,
        nav: true,
        autoplaySpeed: 100,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut'
    });
    
    window.onresize = function(){ location.reload(); }

    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
    });

});
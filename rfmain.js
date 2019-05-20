$(document).ready(function(){
    
    //Open-Close Header Contact Modal
    
    $('body').click(function(a){
        $(this).removeClass('side-open');
    });

    $('.cm-header-contact, .cm-cta').click(function(a){
        a.stopPropagation();
        $('body').toggleClass('side-open');
    });

    $('.cm-header-form').click(function(a){
        a.stopPropagation();
    });

    $('.cm-header-form span.cm-close').click(function(){
        $('body').removeClass('side-open');
    });

    //Parallax

    const splitScroll = () => {
        const controller = new ScrollMagic.Controller();
        new ScrollMagic.Scene({
            duration: '200%',
            triggerElement: '.cm-vision-title',
            triggerHook: 0
        })
        .setPin('.cm-vision-title') 
        .addTo(controller);

        const controller2 = new ScrollMagic.Controller();
        new ScrollMagic.Scene({
            duration: '200%',
            triggerElement: '.cm-about-title',
            triggerHook: 0
        })
        .setPin('.cm-about-title') 
        .addTo(controller2);

        const controller3 = new ScrollMagic.Controller();
        new ScrollMagic.Scene({
            duration: '200%',
            triggerElement: '.cm-think-title',
            triggerHook: 0
        })
        .setPin('.cm-think-title') 
        .addTo(controller3);

    }

    //Run Parallax above 992px only
    if ($(window).width() >= 992) { 
        splitScroll();
    }

    $(window).resize(function(){
        if ($(window).width() >= 992) { 
            splitScroll();
        }
    })
    

    //Jump to bookmark text

    $(".scroll").click(function(event){     
        //event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });


    //Mobile menu
    $(".custom-menu-primary ul li.cm-item-has-children > a").after(' <div class="child-trigger"><i></i></div>');
    
    $("body").click(function(e) {
        $(".custom-menu-primary .cm-menu-wrapper").slideUp(250);
        $(this).removeClass("menu-open");
        $(".child-trigger").removeClass("child-open");
        $(".cm-menu-children-wrapper").slideUp(250);
    });
    
    $(".menu-trigger").click(function(e) {
        e.stopPropagation();
        $(this).next(".custom-menu-primary .cm-menu-wrapper").slideToggle(250);
        $("body").toggleClass("menu-open");
        $(".child-trigger").removeClass("child-open");
        $(".cm-menu-children-wrapper").slideUp(250);
        return false
    });

    $(".custom-menu-primary .cm-menu-wrapper").click(function(e) {
        e.stopPropagation();
    });

    $(".child-trigger").click(function() {
        $(this).parent().siblings(".cm-item-has-children").find(".child-trigger").removeClass("child-open");
        $(this).parent().siblings(".cm-item-has-children").find(".cm-menu-children-wrapper").slideUp(250);
        $(this).next(".cm-menu-children-wrapper").slideToggle(250);
        $(this).next(".cm-menu-children-wrapper").children(".cm-item-has-children").find(".cm-menu-children-wrapper").slideUp(250);
        $(this).next(".cm-menu-children-wrapper").children(".cm-item-has-children").find(".child-trigger").removeClass("child-open");
        $(this).toggleClass("child-open");
        return false;
    });     
    

});
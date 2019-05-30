$(document).ready(function(){
    AOS.init();
    let counter = 0;
    const vpView = () => {
        $.fn.visible = function(partial) {
    
            var $t            = $(this),
                $w            = $(window),
                viewTop       = $w.scrollTop(),
                viewBottom    = viewTop + $w.height(),
                _top          = $t.offset().top,
                _bottom       = _top + $t.height(),
                compareTop    = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;
          
          return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
      
        };
        let btnTime;
        let sound = document.getElementById("alexa-sound");
        let playPromise  = sound.play();
        sound.load();
        $(window).scroll(function(event) {
      
            $(".cm-alexa-container img").each(function(i, el) {
              var el = $(el);
              if (el.visible(true)) {
                $('.cm-conv-section').addClass("conv-active"); 
                if(counter===0){
                    sound.play();
                    counter = 1;
                }
                btnTime = setTimeout(function(){ 
                    $('.cm-conv-section .cm-conv-btn').addClass("btn-active"); 
                }, 5500);
                btnTime;
              }
              
            }); 
        });
    }

    // vpView();

    // $(window).resize(function(){
    //     vpView();
    // });
    let btnTime1;
    let sound1 = document.getElementById("alexa-sound");
    $('.test-btn').click(function(){
        $(this).parents('.cm-conv-section').addClass("test-active");
        setTimeout(function(){
            $('.cm-conv-section').addClass("conv-active"); 
            if(counter===0){
                sound1.play();
                counter = 1;
            }
            btnTime1 = setTimeout(function(){ 
                $('.cm-conv-section .cm-conv-btn').addClass("btn-active"); 
            }, 3000);
            btnTime1;
        }, 500);
    });

    var n = 1;
	while(n > 0){
		$(".animation-container").append($(".animation-container").children().first());
		n -= 1;
    }
    
    var backTopBtn = $('#back-to-top');

    backTopBtn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '600');
    });

});
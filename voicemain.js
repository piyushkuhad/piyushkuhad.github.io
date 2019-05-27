$(document).ready(function(){
    AOS.init();

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
        $(window).scroll(function(event) {
      
            $(".cm-alexa-container img").each(function(i, el) {
              var el = $(el);
              if (el.visible(true)) {
                $('.cm-conv-section').addClass("conv-active"); 
                btnTime = setTimeout(function(){ 
                    $('.cm-conv-section .cm-conv-btn').addClass("btn-active"); 
                }, 5500);
                btnTime;
              }
              
            }); 
        });
    }

    vpView();

    $(window).resize(function(){
        vpView();
    });

    var n = 1;
	while(n > 0){
		$(".animation-container").append($(".animation-container").children().first());
		n -= 1;
	}

});
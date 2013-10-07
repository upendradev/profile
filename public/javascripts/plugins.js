// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


(function($){
                    $('.name span').each(
                        
                        function(index){
                                
                                var _this = this,
                                    interval = 1000; 
                                setTimeout(function(){$(_this).animate({'top': '50px'},500)
                                                              .animate({'top': '0'}, 500)
                                                              .animate({'top': '40px'}, 500);}
                                                              , interval * index);
                                               });
            

            $('.prof-picture').css({'left':'-1300px'})
                              .delay(1000)
                              .animate({ 'left': "26px" }, 400)
                              .animate({'top': '-100px'},500);


            $('h2').animate({'border' : '1px'}, 1000);

                               

            }(jQuery));

// Place any jQuery/helper plugins in here.

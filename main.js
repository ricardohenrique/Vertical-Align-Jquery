$(function(){
    // Nav Fixed
    var widthWindow = $(window).width() + 17;
    
    $(window).load(function(){
        alignVertical();
    });

    $(window).resize(function(){
        alignVertical();
    });

    function alignVertical(){
        var container = $('.container-align');
        var altura_margin = ((container_01.height() / 2) - 15); 
        $('.vertical-align').css('margin-top', (altura_margin) + 'px');
    }
});

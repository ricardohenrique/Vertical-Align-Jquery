$(function(){

    // Nav Fixed
    var widthWindow = $(window).width() + 17;
    
    // Align thumbs
    $(window).load(function(){
        centerContentFirst();
        centerContentSecond();
    });

    $(window).resize(function(){
        centerContentFirst();
        centerContentSecond();
    });

    function centerContentFirst(){
        var container = $('.container-align');
        var altura_margin = ((container_01.height() / 2) - 15); 
        $('.vertical-align').css('margin-top', (altura_margin) + 'px');
    }
});

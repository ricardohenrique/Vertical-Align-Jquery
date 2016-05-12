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
        var container_01 = $('.row-01');
        var altura_margin_01 = ((container_01.height() / 2) - 15); 
        $('.vertical-align-row-first').css('margin-top', (altura_margin_01) + 'px');
    }
    function centerContentSecond(){
        var container_02 = $('.row-02');
        var altura_margin_02 = ((container_02.height() / 2) - 15); 
        $('.vertical-align-row-second').css('margin-top', (altura_margin_02) + 'px');
    }
    // xx Align thumbs xx


});

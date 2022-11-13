$(document).ready(function(){

    $('#Up').click(function(){
        $('.Char').animate({bottom: '+=15px'},'fast','easeInQuad');
    });
    $('#Bottom').click(function(){
        $('.Char').animate({bottom: '-=15'},'fast','easeOutQuad')
    });
    $('#Right').click(function(){
        $('.Char').animate({left: '+=15'},'fast','easeOutQuad')
    });
    $('#Left').click(function(){
        $('.Char').animate({left: '-=15'},'fast','easeOutQuad')
    });

});
$(function(){
    var link = $('.m-menu-link');
    var menu = $('.m-menu');
    var close = $('.close-menu');
    var closeByLink = $('.menu-link');
    link.on('click', function(event){
        event.preventDefault();
        menu.toggleClass('m-menu__active');
    });
    close.on('click', function(event){
        event.preventDefault();
        menu.toggleClass('m-menu__active');
    });
    closeByLink.on('click', function(event){
        menu.toggleClass('m-menu__active');
    });
});
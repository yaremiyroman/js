

$(document).ready(function () {

    $('.nav-btn').click(function () {
        $('.overlay-wrapper').addClass('active');
        $('.nav-wrapper').addClass('active');
    });
    $('.close-nav').click(function () {
        $('.overlay-wrapper').removeClass('active');
        $('.nav-wrapper').removeClass('active');
    });
    $('.overlay').click(function () {
        $('.overlay-wrapper').removeClass('active');
        $('.nav-wrapper').removeClass('active');
    });

    $('.tabs').tabs();

});



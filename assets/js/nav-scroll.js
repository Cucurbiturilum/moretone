$(window).scroll(function(){
    $('.navbar').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$( window ).resize(function() {
    if( $( window ).width() >= 768){
        $('.navbar-collapse').removeClass('show');
        $('.navbar-toggler').attr('aria-expanded', false);
    }
});
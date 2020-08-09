$(document).ready(function () {
    $(".card-we-do").owlCarousel({
        responsive: {
            0: {
                items: 1,
                loop: true,
                stagePadding: 70,
            },
            480: {
                items: 2,
                loop: true,
                stagePadding: 50,
            },
            680: {
                items: 3,
                loop: true,
                stagePadding: 60,
            },
            768: {
                items: 2,
                loop: false,
                mouseDrag: false,
                touchDrag: false,
            }
        }
    });
    $('.giving-back-carousel').owlCarousel({
        stagePadding: 100,
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
    });
    $('.testimonials-carousel').owlCarousel({
        navContainer: '#owlCarouselNav',
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
            },
            768:{
                items: 1,
                loop: true,
                stagePadding: 50,
                margin: 20,
                dots: false,
                nav: true,
            },
            992:{
                items: 1,
                loop: true,
                stagePadding: 70,
                margin: 20,
                dots: false,
                nav: true,
            },
            1200: {
                items: 1,
                stagePadding: 120,
                margin: 100,
                loop: true,
                dots: false,
                nav: true,
            }
        }
    })
});
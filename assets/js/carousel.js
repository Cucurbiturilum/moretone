$(document).ready(function () {
    $(".owl-carousel").owlCarousel({

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
            680:{
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
});
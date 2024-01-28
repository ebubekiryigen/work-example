$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    dots:false,
    nav:false,
    responsive: {
        0:{
            items:1,
        },
        600: {
            items:2,
        },
        1000:{
            items:3,
        },
        1170:{
            items:5,
        }
    }
})
// portfoli slider
$('.portfolioSlider').owlCarousel({
    loop:true,
    margin:30,
    dots:false,
    autoplay:true,
    autoplayTimeout: 3000,
    smartSpeed:500,
    nav: true,
    navText: ['<i class="fa-solid fa-arrow-left arrow_lt act"></i>','<i class="fa-solid fa-arrow-right arrow_rt"></i>'],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        },
        1200:{
            items:3,
        }
    }
})
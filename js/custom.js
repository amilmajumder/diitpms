$(function () {

    // Preloader js    
    $(window).on('load', function () {
        $('.preloader').delay(1500).fadeOut(500);

    })

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 80) {
            $('.navbar').addClass('bg');
        } else {
            $('.navbar').removeClass('bg');
        }
        if (scrolling > 300) {
            $('.back-top').fadeIn(500);
        } else {

            $('.back-top').fadeOut(500);
        }
    });


    // back-top
    $('.back-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });

    //counterup js
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //venoboxjs
    $('.venobox').venobox();

    //slider js
    $('.bnr-pic').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        fade: true,
        speed: 2000,
        autoplaySpeed: 2500,
    });
    $('.about-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        speed: 2000,
        autoplaySpeed: 2500,
    });
    $('.consult-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        speed: 2000,
        autoplaySpeed: 2500,
    });
    
    //wow js
    new WOW().init();

    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 90
                }, 1500);
                return false;
            }
        }
    });


});
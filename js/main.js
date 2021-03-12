$(function () {
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/banner/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/banner/arrow-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 841,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.tab').on('click', function (e) {
        e.preventDefault();
        $($(this).siblings()).removeClass('active');
        $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('active');

        $(this).addClass('active');
        $($(this).attr('href')).addClass('active');

        $('.product-slider').slick('setPosition');
    });

    $('.product-item__favorite').on('click', function () {
        $(this).toggleClass('active')
    });
    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/products/black_arrow-prev.svg" alt=""></button>',
        nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/products/black_arrow-next.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 871,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 591,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
    $('.filter-style').styler();

    $('.filter__item-drop, .filter__extra').on('click', function () {
        $(this).toggleClass('active');
        $(this).next().slideToggle('200');
    });

    $('.js-range-slider').ionRangeSlider({
        type: "double",
        min: 100000,
        max: 500000
    });

    $('.catalog__filter-wiev_grid').on('click', function () {
        $(this).addClass('active');
        $('.catalog__filter-wiev_line').removeClass('active');
        $('.product-item__wrapper').removeClass('product-item__wrapper_list');
    });
    $('.catalog__filter-wiev_line').on('click', function () {
        $(this).addClass('active');
        $('.catalog__filter-wiev_grid').removeClass('active');
        $('.product-item__wrapper').addClass('product-item__wrapper_list');
    });

    $(".rate-yo").rateYo({
        ratedFill: "#1C62CD",
        normalFill: "#c4c4c4",
        starWidth: "25px",
        spacing: "7px",
        readOnly: true
    });

    $('.menu__btn').on('click', function(){
        $('.menu-mobile__list').toggleClass('active');
        $('.menu__btn').toggleClass('active')
    });

    $('.footer__top_titledrop').on('click', function(){
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    });

    $('.aside__btn').on('click', function(){
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    });

});
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

//import '~slick-carousel/slick/slick';
import 'slick-carousel';

$(function() {
    $(".js-slider").slick({
        mobileFirst: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    dots: false
                }
            }
        ]
    });
});

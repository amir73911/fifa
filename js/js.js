$(function(){
    $('#slider').royalSlider({
        autoHeight: false,
        arrowsNav: false,
        fadeinLoadedSlide: false,
        controlNavigationSpacing: 0,
        controlNavigation: 'bullets',
        imageScaleMode: 'fill',
        imageAlignCenter: true,
        loop: false,
        loopRewind: false,
        numImagesToPreload: 6,
        keyboardNavEnabled: true,
        autoScaleSlider: true,
        autoScaleSliderWidth: 980,
        autoScaleSliderHeight: 422,
        imgWidth: 980,
        imgHeight: 422
    });

    $('#slider2').royalSlider({
        controlNavigation: 'thumbnails',
        thumbs: {
            orientation: 'vertical'
        },
        transitionType:'fade',
        loop: true,
        arrowsNav: false,
        keyboardNavEnabled: true,
        imageAlignCenter: false,
        imageScaleMode: 'none'

    });

    // оформление топ_меню
    if ($('.top_nav .active').length) {
        $('.top_nav').addClass('have-active');
    };

    // опшены в слайдере2
    $('.slider2_back .options a').click(function(){
        $(this).toggleClass('selected');
        return false;
    });

    $(".carousel").carousel({
        layout: {
            horizontal: true, // set to false for vertical slider
            fixedHeight: true, // set height based on highest slide
            visibleSlides: 5, // how many slides to fit within visible area (0: calculate based on initial width)
            gutter: 14 // spacing between slides
        },
        elements: { // which navigational elements to show
            prevNext: true, // buttons for previous / next slide
            handles: false, // button for each slide showing its index
            counter: false // "Slide x of y"
        }
    });


    $('.carousel-slide, .portfolio .item').BlackAndWhite({
        speed: { //this property could also be just speed: value for both fadeIn and fadeOut
            fadeIn: 100, // 200ms for fadeIn animations
            fadeOut: 300 // 800ms for fadeOut animations
        }
    });

});
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
            orientation: 'vertical',
            paddingBottom: 4,
            appendSpan: true
        },
        transitionType:'fade',
        autoScaleSlider: true,
        autoScaleSliderWidth: 960,
        autoScaleSliderHeight: 600,
        loop: true,
        arrowsNav: false,
        keyboardNavEnabled: true

    });

    // оформление топ_меню
    if ($('.top_nav .active').length) {
        $('.top_nav').addClass('have-active');
    };

    // опшены в слайдере2
    $('.slider2_back .options a').click(function(){
        $(this).toggleClass('selected');
    });

});
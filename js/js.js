$(function(){
    $('#slider').royalSlider({
        autoHeight: false,
        arrowsNav: false,
        fadeinLoadedSlide: false,
        controlNavigationSpacing: 0,
        controlNavigation: 'bullets',
        imageScaleMode: 'fill',
        imageAlignCenter: true,
        loop:true,
        loopRewind:true,
        numImagesToPreload: 6,
        keyboardNavEnabled: true,
        autoScaleSlider: true,
        autoScaleSliderWidth: 980,
        autoScaleSliderHeight: 422,
        imgWidth: 980,
        imgHeight: 422,
        autoPlay: {
            enabled: true,
            pauseOnHover: true
        }
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

    if ($(".carousel").length) $(".carousel").carousel({
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

    $('.all_elements').on('click', '.link',function(e){
        $('.portfolio').slideToggle();
        e.preventDefault();
    });

    if ($(".carousel-slide").length) $('.carousel-slide').BlackAndWhite({
        speed: { //this property could also be just speed: value for both fadeIn and fadeOut
            fadeIn: 100, // 200ms for fadeIn animations
            fadeOut: 300 // 800ms for fadeOut animations
        }
    });

    if ($(".portfolio .item").length) $('.portfolio .item').BlackAndWhite({
        speed: { //this property could also be just speed: value for both fadeIn and fadeOut
            fadeIn: 100, // 200ms for fadeIn animations
            fadeOut: 300 // 800ms for fadeOut animations
        }
    });
    $('.portfolio').hide();

    $('.ico').each(function(){
        $(this).append('<i></i>');
    });

    $('.blog .yellow_back').height(blog_back_height('.blog .left-col', '.blog .center-col'));

    $.datepick.setDefaults($.datepick.regional['ru']);
    $('.calendar').datepick($.extend(
        {changeMonth: false, showOtherMonths: true}, $.datepick.regional['ru']));

});

function blog_back_height(el1, el2) {
    var max = $(el1).height();
    max = $(el2).height() > max ? $(el2).height() : max;
    return max;
}
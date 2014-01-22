$(function(){
    var rsi = $('.slider').royalSlider({
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

        /* size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images */
        imgWidth: 980,
        imgHeight: 422



    }).data('royalSlider');
    $('#slider-next').click(function() {
        rsi.next();
    });
    $('#slider-prev').click(function() {
        rsi.prev();
    });
});
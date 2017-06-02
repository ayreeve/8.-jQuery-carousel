// jslint devel: true

$(document).ready(function () {
    var $carouselList = $('#carousel ul');
    /*
        setInterval(changeSlides, 2000);
    */

    function changeSlides() {
        $carouselList.animate({
            marginLeft: -600
        }, 700, moveFirstSlide);
    }

    function moveFirstSlide() {
        var $firstItem = $carouselList.find('li:first'),
            $lastItem = $carouselList.find('li:last');
        $lastItem.after($firstItem);
        $carouselList.css({
            marginLeft: 0
        });
    }

    function moveLastSlide() {
        var $firstItem = $carouselList.find('li:first'),
            $lastItem = $carouselList.find('li:last');
        $firstItem.before($lastItem);
        $carouselList.css({
            marginLeft: -600
        });
    }

    $('#js-left-button').click(function () {
        $carouselList.animate({
            marginLeft: 0
        }, 700, moveLastSlide);
    });

    $('#js-right-button').click(function () {
        changeSlides();
    });

/*    var $indicators = $('.indicators ion-ios-circle-outline');
    $indicators.each(function (index, element) {

        $('$indicators').click(function () {
            $(this).removeClass('active');
            $(this).addClass('active');
            changeSlides(index);
        });

    });*/

});

// jslint devel: true

$(document).ready(function () {
    var $carouselList = $('#carousel ul');
    setInterval(changeSlides, 3000);

    function changeSlides() {
        $carouselList.animate({
            'marginLeft': -600
        }, 800, moveFirstSlide);
    }

    function moveFirstSlide() {
        var $firstItem = $carouselList.find('li:first'),
            $lastItem = $carouselList.find('li:last');
        $lastItem.after($firstItem);
        $carouselList.css({
            marginLeft: 0
        });
    }

    $('#js-right-button').click(function () {
        changeSlides();
    });

    $('#js-left-button').click(function () {
        $carouselList.animate({
            'marginLeft': 600
        }, 800);
    });
});

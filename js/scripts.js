// jslint devel: true

$(document).ready(function () {
    var $carouselList = $('#carousel ul'),
        $slideWidth = 600;

    function changeSlides() {
        $carouselList.animate({
            marginLeft: -($slideWidth)
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
            marginLeft: -($slideWidth)
        });
    }

    var $interval = setInterval(changeSlides, 2000);

    $('#carousel').mouseenter(function () {
        clearInterval($interval);
    });

    $('#carousel').mouseleave(function () {
        $interval = setInterval(changeSlides, 2000);
    });

    $('#js-left-button').click(function () {
        moveLastSlide();
        $carouselList.animate({
            marginLeft: 0
        }, 700);
    });

    $('#js-right-button').click(function () {
        changeSlides();
    });

});

$(window).resize(function () {
    $slideWidth = $('#carousel').outerWidth();
});

// jslint devel: true

$(document).ready(function () {
    var $carouselList = $('#carousel ul');
    setInterval(changeSlides, 2500);

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
});

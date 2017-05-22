// jslint devel: true

$(document).ready(function () {
    var $carouselList = $('#carousel ul');
    $carouselList.setTimeout(changeSlides, 3000);

    function changeSlides() {
        $carouselList.animate({
            'marginLeft': -400
        }, 500, moveFirstSlide);
    }

    function moveFirstSlide() {
        var firstItem = $carouselList.find('li:first'),
            lastItem = $carouselList.find('li:last');
        lastItem.after(FirstItem);
        carouselList.css({
            marginLeft: 0
        });
    }
});

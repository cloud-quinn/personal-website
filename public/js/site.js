

$(document).ready(function () {
    $(".hd").hide();

    if ($(window).width() < 710) {
        $(".hd").show();
        $(".menu").hide();
    }
    $("#hotdog").click(function () {
        if ($('.menu').is(':visible')) {
            $('.menu').hide();
        }
        else {
            $('.menu').show();
        }
    });
});
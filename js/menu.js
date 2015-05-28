$(function() {
    var offset = $("sidebar-nav").offset();
    var topPadding = 15;

    $(window).scroll(function() {
        if ($(window).scrollTop() > offset.top) {
            $("sidebar-nav").stop().animate({
                marginTop: $(window).scrollTop() - offset.top + topPadding
            });
        } else {
            $("sidebar-nav").stop().animate({
                marginTop: 0
            });
        }
    });
});

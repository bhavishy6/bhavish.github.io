$(document).ready(function(){
    $(window).scroll(function(){
        var window_top = $(window).scrollTop();
        var nav_top = $(".sidebar-nav").scrollTop();
    });

    $(".sidebar-nav a").click(function(env) {
        evn.preventDefault();
        $("html, body").scrollTo(this.hash, this.hash);
    });
});

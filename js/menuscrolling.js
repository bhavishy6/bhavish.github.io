$(document).ready(function(){
    $(window).scroll(function(){
        var window_top = $(window).scrollTop();
        var nav_top = $(".sidebar-nav").scrollTop();
    });

    $(".sidebar-nav li a").click(function(env) {
        env.preventDefault();
        $("html, body").scrollTo(this.hash, this.hash);
    });
});

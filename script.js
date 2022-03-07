$(document).ready(function(){
    $(".nav li").mouseenter(function(){
        $(this).children(".sub").stop().slideDown();
    });
    $(".nav li").mouseleave(function(){
        $(this).children(".sub").stop().slideUp();
    });

    $(".name li").click(function(){
        var list = $(this).index();
        $(".name li").removeClass("on");
        $(".name li").eq(list).addClass("on");
        $(".table div").stop().fadeOut();
        $(".table div").eq(list).stop().fadeIn();
    });

    $(".note p a").click(function(){
        $(".pop").stop().show();
    });

    $(".close").click(function(){
        $(".pop").stop().hide();
    });

    $(".slide ul li").eq(0).siblings().animate({
        left: "1200px"
    });

    var i = 0;
    setInterval(function(){
        if (i < 2) {
            i++;
        } else {
            i = 0;
        }
        $(".slide ul li").eq(i).siblings().animate({
            left: "1200px"
        }, "slow");

        $(".slide ul li").eq(i).animate({
            left: "0px"
        }, "slow");
    }, 2000);
});
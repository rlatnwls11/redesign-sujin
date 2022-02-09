$(document).ready(function(){

    //메인 슬라이드
    $(".main_slider").slick({
        autoplay : true,
        autoplaySpeed : 3000,
        arrows : false,
        pauseOnHover : false,
    });

    //카테고리 열기
    $(".nav_wrap > .category_box").click(function(){
        $(".nav_2_depth_wrap").addClass("active");
        $(".nav_2_depth_wrap > .nav_2_depth > .nav_left_1").addClass("active");
        $(".nav_2_depth_wrap > .nav_2_depth > .close_btn").addClass("active");
    });
    //카테고리 닫기
    $(".nav_2_depth_wrap > .nav_2_depth > .close_btn").click(function(){
        $(".nav_2_depth_wrap").removeClass("active");
        $(".nav_2_depth_wrap > .nav_2_depth > .nav_left_1").removeClass("active");
        $(this).removeClass("active");
        $(".nav_2_depth_wrap > .nav_2_depth > .nav_left_2").removeClass("active");
    })

    //2차 카테고리 열기
    $(".nav_2_depth_wrap > .nav_2_depth > .nav_left_1 > .category_box > ul > li").click(function(){
        var indexNum = $(this).index();
        console.log(indexNum);

        $(".nav_2_depth_wrap > .nav_2_depth > .nav_left_2").addClass("active");
        $(".nav_2_depth_wrap > .nav_2_depth > .nav_left_2 > .content").eq(indexNum).addClass("active");
        $(".nav_2_depth_wrap > .nav_2_depth > .nav_left_2 > .content").eq(indexNum).siblings().removeClass("active");
        $(".nav_2_depth_wrap > .nav_2_depth > .close_btn").css({
            "left": "35%",
        });
    });






//end    
});
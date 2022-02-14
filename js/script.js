$(document).ready(function(){

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
    });

    //2차 카테고리 열기
    $(".nav_2_depth_wrap > .nav_2_depth > .nav_left_1 > .category_box > ul > li").click(function(){
        var indexNum = $(this).index();
        console.log(indexNum);

        $(".nav_2_depth_wrap > .nav_2_depth > .nav_left_2").addClass("active");
        $(".nav_2_depth_wrap > .nav_2_depth > .nav_left_2 > .content").eq(indexNum).addClass("active");
        $(".nav_2_depth_wrap > .nav_2_depth > .nav_left_2 > .content").eq(indexNum).siblings().removeClass("active");
        $(".nav_2_depth_wrap > .nav_2_depth > .close_btn").addClass("active_2");
        $(this).addClass("bold");
        $(this).siblings().removeClass("bold");
    });

     //2차 카테고리 닫기
    $(".nav_2_depth_wrap > .nav_2_depth > .close_btn").click(function(){
        $(".nav_2_depth_wrap").removeClass("active");
        $(".nav_2_depth_wrap > .nav_2_depth > .nav_left_1").removeClass("active");
        $(this).removeClass("active");
        $(".nav_2_depth_wrap > .nav_2_depth > .nav_left_2").removeClass("active");
        $(".nav_2_depth_wrap > .nav_2_depth > .close_btn").removeClass("active_2");
    });


      //메인 슬라이드
    $(".main_slider").slick({
        autoplay : true,
        autoplaySpeed : 3000,
        arrows : false,
        pauseOnHover : false,
        dots : true,
        fade : true,
   });

   $(".main_slider_wrap > .slider_arrow > .left_arrow").click(function(){
       $(".main_slider_wrap > .main_slider").slick("slickPrev");
   });

   $(".main_slider_wrap > .slider_arrow > .right_arrow").click(function(){
    $(".main_slider_wrap > .main_slider").slick("slickNext");
    });

    //section_01 time
    setInterval(function time(){
        var d = new Date();
        var hours = String(24 - d.getHours()).padStart( 2 , "0");
        var min = String(60 - d.getMinutes()).padStart( 2 , "0");
        if((min + '').length == 1){
          min = '0' + min;
        }
        var sec = String(60 - d.getSeconds()).padStart( 2 , "0");
        if((sec + '').length == 1){
              sec = '0' + sec;
        }
        jQuery(".section_01 > .time").html(hours + '시 : ' + min + '분 : ' + sec + '초')
      }, 1000);

      //section_01 슬라이드
      $('.section_01 > .slider_wrap').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows : false,
        dots : false,
      });

      $(".section_01 > .arrow > .left_arrow").click(function(){
          $(".section_01 > .slider_wrap").slick("slickPrev")
      });
      $(".section_01 > .arrow > .right_arrow").click(function(){
          $(".section_01 > .slider_wrap").slick("slickNext")
      });


//end    
});
$(document).ready(function(){

    AOS.init();

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
        $(".nav_2_depth_wrap > .nav_2_depth > .nav_left_1 > .arrow > ul > li").eq(indexNum).addClass("active");
        $(".nav_2_depth_wrap > .nav_2_depth > .nav_left_1 > .arrow > ul > li").eq(indexNum).siblings().removeClass("active");
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
        var hours = String(23 - d.getHours()).padStart( 2 , "0");
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

      //section_01 bar
    //   $(".section_01 > .arrow > .right_arrow").click(function(){
    //         if($(".section_01 > .red_bar").css('width') == "20%"){
    //             $(".section_01 > .red_bar").css({
    //                 'width' : '40%',
    //             });
    //         }else{
    //             $(".section_01 > .red_bar").css({
    //                 'width' : '100%',
    //             });
    //         };
    //   });

    //section02
    $(".section_02 > .nav > ul > li").click(function(){
        //section02 카테고리 바
        $(this).siblings().removeClass("active");
        $(this).addClass("active");

        //section02 content
        var indexNum = $(this).index();

        $(".section_02 > .content_wrap > .content").eq(indexNum).addClass("active")
        $(".section_02 > .content_wrap > .content").eq(indexNum).siblings().removeClass("active")
    });

    //section04 left 슬라이드
    $(".section_04 > .content_left").slick({
        autoplay : true,
        autoplaySpeed : 3000,
        arrows : false,
        pauseOnHover : false,
        dots : false,
        fade : true,
   });

//end    
});
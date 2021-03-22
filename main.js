$(function () {
    $(".menuToggle").click(function() {
        $(this).toggleClass("active");
        $(".header-menu ul").slideToggle(300, function(){
          if($(this).css("display") === "none"){
            $(this).removeAttr("style"); 
          }
        });
        $('.header-menu ul li').on('click', function () {
          $('.header-menu ul').hide(100, function(){
            if ($(this).css('display') === 'none') {
              $(this).removeAttr('style');
              $(".menuToggle").removeClass("active");
            }
          });
        });
      });
    });

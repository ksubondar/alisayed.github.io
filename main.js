$(function () {
    $(".menuToggle").click(function() {
        $(this).toggleClass("active");
        $('.header-menu ul').slideToggle(300, function(){
          if($(this).css('display') === "none"){
            $(this).removeAttr('style');
          }
        });
      });
    });
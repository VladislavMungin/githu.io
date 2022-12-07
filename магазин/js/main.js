
$(function () {
    $(".header__burger").click(function(){
        $('.menu').css({
            'opacity':'2',
            'visibility': 'visible'
          });
          $('.main-left').css({
            'opacity':'0'
          })

     });
     
      $(".menu").click(function(){
        $('.menu').css({
            'opacity':'0',
            'visibility': 'hidden'
          });
          $('.main-left').css({
            'opacity':'1'
          })
     });
     
  });

  $(function () {
    $(".profile").mouseenter(function(){
        $('.window-profile').css({
            'opacity':'2',
            'visibility': 'visible'
          });
     });
     
      $(".profile").mouseleave(function(){
        $('.window-profile').css({
            'opacity':'0',
            'visibility': 'hidden'
          });
          
     });
  });

  $(function () {
    $(".window-profile").mouseenter(function(){
        $('.window-profile').css({
            'opacity':'2',
            'visibility': 'visible'
          });
     });
     
      $(".window-profile").mouseleave(function(){
        $('.window-profile').css({
            'opacity':'0',
            'visibility': 'hidden'
          });
          
     });
  });


    

    

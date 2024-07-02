$(function(){
    $('.comment_wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows:false,
        pauseOnHover:false,
        centerMode:true,
        centerPadding:'0px',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
          ]
      });
      $('#menu').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
    });
    $('#slide').onePageNav({
        currentClass: 'wrep',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
    });
    $('.back-to-top').on('click',function (){
      $('html,body').animate({scrollTop:0},1000);
  });

  $(window).on('scroll',function (){
      var scroll = $(this).scrollTop()

      if(scroll>50){
          $('.back-to-top').fadeIn(500)
      }
      else{
          $('.back-to-top').fadeOut(500)
      }
      if(scroll>100){
          $('.navbar').addClass('sticky-menu')
      }
      else{
          $('.navbar').removeClass('sticky-menu')
      }
  });
})
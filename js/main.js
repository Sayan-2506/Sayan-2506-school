$(function(){

    $('.menu__gamburger').on('click', function(){
        $('.menu-list').toggleClass('active')
      });


    $(window).on('resize', function() {
      if ($(window).width() < 860) {
        $('.menu-list__item-dropdown').on('click', function(){
          $(this).toggleClass('filter__item-drop--active');
          $('.pages__drop-down__for-phone__list').slideToggle(0);
        })
      }
    })

    $( "#prevent-link" ).click(function( event ) {
      event.preventDefault();
      
    });

    $('.food__kind-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        responsive: [
            {
              breakpoint: 920,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 690,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
          ]
    });

    var mixer = mixitup('.governes__inner-box');
    
});
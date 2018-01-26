$(window).on('load', function() {

    $("#looplogoslide").flexisel({
      visibleItems: 5,
      animationSpeed: 1800,
      autoPlay: true,
      autoPlaySpeed: 2500,
      pauseOnHover: true,
      enableResponsiveBreakpoints: true,
      responsiveBreakpoints: { 
        portrait: { 
          changePoint:480,
          visibleItems: 1
        }, 
        landscape: { 
          changePoint:640,
          visibleItems: 2
        },
        tablet: { 
          changePoint:768,
          visibleItems: 3
        }
      }
    });

});
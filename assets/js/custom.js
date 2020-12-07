$(document).ready(function () {
    $(".lines").click(function () {
      $(".header").toggleClass("header-mbl");
      $(".header-inner").toggleClass("header-inner-mbl");
      if ($(".header").hasClass("header-mbl")) {
        $(".lines div").css("background", "#fff");
      } else {
        $(".lines div").css("background", "#c5a552");
      }
      // $("body").toggleClass("fixed-position");
    });
    $(".testimonials-slider").slick({
      arrows: true,
      // autoplay: true,
      // autoplaySpeed: 3000,
    });
    $(".slick-next").addClass('selected')
    $(".slick-prev , .slick-next").click(function() {
      $(this).addClass('selected').siblings().removeClass('selected');
      });
  });
  
  // To stick header //
  $(document).ready( function() {
          
    $(".header_container").css('background','transparent'); //hide your div initially
    var topOfOthDiv = $("#special-section").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv - 200) { //scrolled past the other div?
            $(".header_container").css('background','linear-gradient(rgb(233 214 135), #b4913f)'); //reached the desired point -- show div
            $(".header_container").css('position','fixed');
            $(".header_container").css('width','100%');
            $(".header_container").css('height:','100px');
            // $(".lines div").css('background','#c5a552');
            if(!$('.header').hasClass('header-mbl'))
            $(".lines div").css('background','#c5a552');
        }else {
            $(".header_container").css('background','transparent'); //hide your div initially
            $(".header_container").css('position','static');
            $(".header_container").css('width','100%');
            $(".lines div").css('background','#fff');
        }
    });
  });
  
  // --------////
  // Scroll to top //
  //Get the button:
  mybutton = document.getElementById("myBtn");
  
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  // --------------------//
  
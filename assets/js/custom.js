$(document).ready(function () {
  $(".lines").click(function () {
    $(".header").toggleClass("header-mbl");
    $(".header-inner").toggleClass("header-inner-mbl");
    if ($(".header").hasClass("header-mbl")) {
      $(".lines div").css("background", "#fff");
    } else {
      $(".lines div").css("background", "#fff");
    }
    // $("body").toggleClass("fixed-position");
  });
  $(".testimonials-slider").slick({
    arrows: true,
    // autoplay: true,
    autoplaySpeed: 3000,
  });
  $(".slick-next").addClass("selected");
  $(".slick-prev , .slick-next").click(function () {
    $(this).addClass("selected").siblings().removeClass("selected");
  });
});

// To stick header //
$(document).ready(function () {
  $(".header_container").css("background", "transparent"); //hide your div initially
  var topOfOthDiv = $("#services-section").offset().top;
  $(window).scroll(function () {
    if ($(window).scrollTop() > topOfOthDiv - 100) {
      //scrolled past the other div?
      $(".header_container").css(
        "background",
        "linear-gradient(#B5D6E0, #A4CCD8)"
      ); //reached the desired point -- show div
      $(".header_container").css("position", "fixed");
      $(".header_container").css("width", "100%");
      $(".header_container").css("height:", "100px");
      // $(".header-inner").css('padding-top:','0rem');

      // $(".lines div").css('background','#c5a552');
      if (!$(".header").hasClass("header-mbl"))
        $(".lines div").css("background", "#afd2dc");
    } else {
      $(".header_container").css("background", "transparent"); //hide your div initially
      $(".header_container").css("position", "static");
      $(".header_container").css("width", "100%");
      $(".lines div").css("background", "#fff");
    }
  });
});

// --------////
// Scroll to top //
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

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

// $(document).ready(function () {
// $(".").click(function() {
//   $(this).addClass('active').siblings().removeClass('active');
//   });
// });
//------Validate form --------//
function validateForm() {
  var name = document.forms["myForm"]["name"];
  var email = document.forms["myForm"]["email"]; 
  var business = document.forms["myForm"]["business"];  
  var location = document.forms["myForm"]["location"];  

  if (name.value === "") {
   name.style.background="#ffaeae59";
  }else {
    name.style.background="#fff";
  }
    if (email.value === "") {
   email.style.background="#ffaeae59";
  }else {
    email.style.background="#fff";
  }
  if (business.value === "") {
    business.style.background="#ffaeae59";
   }else {
    business.style.background="#fff";
  }
   if (location.value === "") {
    location.style.background="#ffaeae59";
   }else {
    location.style.background="#fff";
  }
  if (name.value === "" || email.value === "" || business.value === "" || location.value === ""){
  return false;
  } else {
  return true;
  } 
}
//------Validate form --------//
function validateRegForm() {
  var rName = document.forms["regForm"]["rName"];
  var rEmail = document.forms["regForm"]["rEmail"]; 
  var rBusiness = document.forms["regForm"]["rBusiness"];  
  var rLocation = document.forms["regForm"]["rLocation"];  

  if (rName.value === "") {
   rName.style.background="#ffaeae59";
  }else {
    rName.style.background="#fff";
  }
    if (rEmail.value === "") {
   rEmail.style.background="#ffaeae59";
  }else {
    rEmail.style.background="#fff";
  }
  if (rBusiness.value === "") {
    rBusiness.style.background="#ffaeae59";
   }else {
    rBusiness.style.background="#fff";
  }
   if (rLocation.value === "") {
    rLocation.style.background="#ffaeae59";
   }else {
    rLocation.style.background="#fff";
  }
   
  if (rName.value === "" || rEmail.value === "" || rBusiness.value === "" || rLocation.value === ""){
  return false;
  } else {
  return true;

  } 
}
// $(window).scroll(function () {
  
//   if ($(window).scrollTop() > 1000) {
//     $(".x3").removeClass("section-3");
  
//   } else {
//     $(".x3").addClass("section-3");
   
//   }
//   if ($(window).scrollTop() > 1200) {
//     $(".x2").removeClass("section-2");
//     $(".x3").addClass("section-3");
//   } else {
//     $(".x2").addClass("section-2");
   
//   }
//   if ($(window).scrollTop() > 1400) {
//     $(".x1").removeClass("section-1");
//     $(".x2").addClass("section-2");
//   } else {
//     $(".x1").addClass("section-1");
   
//   }
// });

$(window).scroll(function () {
  
  if ($(window).scrollTop() > 1800) {
    $(".x1").removeClass("section-1");
  
  } else {
    // $(".x1").addClass("section-1");
   
  }
  if ($(window).scrollTop() > 2400) {
    $(".x2").removeClass("section-2");
    $(".x1").addClass("section-1");
  } else {
    $(".x2").addClass("section-2");
   
  }
  if ($(window).scrollTop() > 2800) {
    $(".x3").removeClass("section-3");
    $(".x2").addClass("section-2");
  } else {
    $(".x3").addClass("section-3");
   
  }
  if ($(window).scrollTop() > 3200) {
    $(".x4").removeClass("section-4");
    $(".x3").addClass("section-3");
  } else {
    $(".x4").addClass("section-4");
   
  }

});

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:5,
          nav:true,
          loop:false
      }
  }
})
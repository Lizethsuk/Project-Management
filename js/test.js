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
    $(".x1").addClass("section-1");
   
  }
  if ($(window).scrollTop() > 2400) {
    $(".x2").removeClass("section-2");
    $(".x1").addClass("section-1");
  } else {
    $(".x2").addClass("section-2");
   
  }
  if ($(window).scrollTop() > 3000) {
    $(".x3").removeClass("section-3");
    $(".x2").addClass("section-2");
  } else {
    $(".x3").addClass("section-3");
   
  }


});

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})
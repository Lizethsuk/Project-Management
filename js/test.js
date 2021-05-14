$(window).scroll(function () {
  if ($(window).scrollTop() > 200) {
    $(".x4").removeClass("section-4"); 
  } else {
    $(".x4").addClass("section-4");
  }
  if ($(window).scrollTop() > 400) {
    $(".x3").removeClass("section-3");
    $(".x4").addClass("section-4");
  } else {
    $(".x3").addClass("section-3");
   
  }
  if ($(window).scrollTop() > 600) {
    $(".x2").removeClass("section-2");
    $(".x3").addClass("section-3");
  } else {
    $(".x2").addClass("section-2");
   
  }
  if ($(window).scrollTop() > 800) {
    $(".x1").removeClass("section-1");
    $(".x2").addClass("section-2");
  } else {
    $(".x1").addClass("section-1");
   
  }
});
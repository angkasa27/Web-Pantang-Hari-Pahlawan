$(document).ready(() => {
  // scroll function
  $(window).scroll(e => {
    let scroll = $(window).scrollTop();
    const sec1T = $("#sec1").offset().top;
    const sec2T = $("#sec2").offset().top;
    const sec3T = $("#sec3").offset().top;
    const sec4T = $("#sec4").offset().top;

    if (scroll < sec2T) {
      $("#sec1-scroll").addClass("active-sec");
      $("#sec2-scroll, #sec3-scroll, #sec4-scroll").removeClass("active-sec");
    }

    if (scroll >= sec2T && scroll < sec3T) {
      $("#sec2-scroll").addClass("active-sec");
      $("#sec1-scroll, #sec3-scroll, #sec4-scroll").removeClass("active-sec");
    }

    if (scroll >= sec3T - 1 && scroll < sec4T) {
      $("#sec3-scroll").addClass("active-sec");
      $("#sec1-scroll, #sec2-scroll, #sec4-scroll").removeClass("active-sec");
    }

    if (scroll >= sec4T - 1) {
      $("#sec4-scroll").addClass("active-sec");
      $("#sec1-scroll, #sec2-scroll, #sec3-scroll").removeClass("active-sec");
    }
  });
});

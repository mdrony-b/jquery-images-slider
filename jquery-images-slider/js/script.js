$(document).ready(function () {
  $(".right-arrow").on("click", function () {
    let currImg = $(".current");
    let nextImg = currImg.next();
    if (nextImg.length) {
      currImg.removeClass("current").css("z-index", -10);
      nextImg.addClass("current").css("z-index", 10);
    }
  });
  $(".left-arrow").on("click", function () {
    let currImg = $(".current");
    let prevImg = currImg.prev();
    if (prevImg.length) {
      currImg.removeClass("current").css("z-index", -10);
      prevImg.addClass("current").css("z-index", 10);
    }
  });
});

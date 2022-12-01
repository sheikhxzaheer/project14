// sticky nav

const header = document.querySelector("nav");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});



// product popup
$("#popup-image-gallery").on("shown.bs.modal", function () {
  $(".popup-slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".popup-slider-nav"
  });
  $(".popup-slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 4,
    asNavFor: ".popup-slider-for",
    dots: false,
    arrows: false,
    focusOnSelect: true,
    variableWidth: true,
    centerMode: true,
    infinite: false
  });
});
var $status = $(".pagingInfo");
var $slickElement = $(".popup-slider-for");

$slickElement.on(
  "init reInit afterChange",
  function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + "/" + slick.slideCount);
  }
);

var slides = $(".popup-slider-for .slick-track > .slick-slide").length;
$(".popup-slider-for").on(
  "afterChange",
  function (event, slick, currentSlide, nextSlide) {
    var inFocus = $(".popup-slider-for .slick-current").attr(
      "data-slick-index"
    );
    $(".popup-slider-nav .slick-current").removeClass("slick-current");
    $(
      '.popup-slider-nav .slick-slide[data-slick-index="' + inFocus + '"]'
    ).trigger("click");
  }
);


// carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplayTimeout: 1200,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });



  
  



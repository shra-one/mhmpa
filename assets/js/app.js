$(function () {
  AOS.init();

  $(".scroll-down").click(function () {
    $("html, body").animate(
      { scrollTop: $(".section--services").offset().top },
      "fast"
    );
    return false;
  });

 
  $(".js-counter").countUp({
    time: 2000,
    delay: 10,
  });
 
  $('.js-hero-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    variableWidth: false,
    autoplay: false,
    adaptiveHeight: true,
    speed: 900,
    autoplaySpeed: 700,
    prevArrow: '<button class="slide-arrow prev-arrow"><span class="material-icons-outlined">chevron_left</span></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><span class="material-icons-outlined">chevron_right</span></button>'
    });
  AOS.refresh();
function eventFn(){
  var dateHeight=$('.date-container ').outerHeight();
  var calendarHeight=$('.calendar-wrapper ').outerHeight();
 
  $("body").get(0).style.setProperty("--eventHeight", dateHeight+calendarHeight+'px');
}
eventFn();
$(window).resize(function(){
  eventFn();
})
  
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
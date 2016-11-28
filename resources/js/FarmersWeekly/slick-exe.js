$(function () {
  var slickOpts = {
    dots: true,
    arrows: false,
    infinite: true,
    // how long it takes for slides to transition
    speed: 800,
    autoplay: true,
    // time between automatically transitioning slides
    autoplaySpeed: 10000,
  };
  // Init the slick slider
  $('.js-slider').slick(slickOpts);
  var slickEnabled = true;
});

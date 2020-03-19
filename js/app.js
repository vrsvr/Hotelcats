$(function () {


  let header = $("#header");
  let introH = $("#intro").innerHeight(),
  scrollOffset = $(window).scrollTop();
  let nav = $("#nav");
  let navToggle = $("#navToggle");

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    $("nav, a").removeClass("active");
    $this.addClass("active");

    $("#nav_toggle").removeClass("active");

    $("html, body").animate({
      scrollTop: elementOffset - 30
    }, 600)
  });

  $("#nav-toggle").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("nav").toggleClass("active");
  });

  $("[data-collapse]").on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let elementId = $(this).data('collapse');
    $this.toggleClass('active');
  });

  let slider = $("#reviewsSlider");

  slider.slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    arrows: true,
    responsive: [{
    breakpoint:575,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      arrows: false,
      centerPadding: '-30px'
    }
  }]
  });

  let sliderr = $("#roomsSlider");

  sliderr.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    responsive: [
      {
    breakpoint: 575,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      arrows: false
    }
  }]
  });

});

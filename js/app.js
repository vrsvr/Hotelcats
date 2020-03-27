$(() => {
    const navOpen = $('#nav-toggle');
    const mobMenu = $('#mob-menu');
    const mobSidebar = $('#mob-sidebar');
    const mobFilter = $('#mob-filter');
    const close = $('#close');

    navOpen.click(function() {
        navOpen.toggleClass('active');
        mobMenu.toggleClass('active');
        $('body').toggleClass('active');
    });

    mobFilter.click(function() {
        mobSidebar.addClass('active');
    });

    close.click(function() {
        mobSidebar.removeClass('active');
    });

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

    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: true,
        responsive: [{
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                arrows: false,
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
        responsive: [{
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
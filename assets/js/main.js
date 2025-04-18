//===== Section Menu Active

$('#jp-lan-tab button:first-child').on('click', function (event) {
    $('#main-lan-tab button:first-child').tab('show')
})

// Active link switching
$(window).scroll(function () {

    if ($('#main-lan-tab button:first-child').hasClass('active')) {
        scrollLink = $('.page-scroll-en');
    } else {
        scrollLink = $('.page-scroll-jp');
    }

    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {

        var sectionOffset = $(this.hash).offset().top - 73;

        if (sectionOffset <= scrollbarLocation) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
        }
    });
});


///===== Progress Bar

if ($('.progress-line').length) {
    $('.progress-line').appear(function () {
        var el = $(this);
        var percent = el.data('width');
        $(el).css('width', percent + '%');
    }, {
        accY: 0
    });
}

$('.navbar-nav .nav-item .nav-link').on('click', function (event) {
    $('.navbar-collapse').removeClass('show');
    $('.navbar-toggler').addClass('collapsed');
    $('.navbar-toggler').attr('aria-expanded','false');
}) 
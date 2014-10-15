var w = window.innerWidth;

// modified from http://stackoverflow.com/questions/23315031/how-to-create-a-hidden-navbar-with-bootstrap-that-shows-after-you-scroll
(function ($) {
    $(document).ready(function () {
        if (w > 1040){
            // hide .navbar first
            $(".navbar").hide();

            // fade in .navbar
            $(function () {
                $(window).scroll(function () {
                    // set distance user needs to scroll before we fadeIn navbar
                    if ($(this).scrollTop() > 100) {
                        $('.navbar').fadeIn();
                    } else {
                        $('.navbar').fadeOut();
                    }
                });
            });
        }
        else {
            $('#cool-nav').hide();
        }
    });
}(jQuery));
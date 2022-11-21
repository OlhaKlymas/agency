// Owl Carousel
$(function() {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 3,
    margin: 10,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 2000,
    center:true,
  });
});

// button-top
$(document).ready(function () {

    $("#back-top").hide();

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
      
    });

});

//anchors
$(document).ready(function(){
    $(".mini-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
});
      
// cookie
document.cookie = "user=John; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT"

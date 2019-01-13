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
  });
});

$(".next_button").click(function(){
  owl.trigger("next.owl.carousel");
});
 
$(".prev_button").click(function(){
  owl.trigger("prev.owl.carousel");
});
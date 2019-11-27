// Initialize OwlCarousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

// Setup OwlCarousel
$('.owl-carousel').owlCarousel({
  items: 5,
  autoWidth: false,
  center: true,
  loop: true,
  dots: false,
  nav: true,
  navText: ["<i class='fas fa-arrow-circle-left'></i>", 
            "<i class='fas fa-arrow-circle-right'></i>"],
  margin: 10,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});
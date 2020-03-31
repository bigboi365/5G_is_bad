$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

var owl = $('.owl-carousel');
owl.owlCarousel({
  loop: true,
  center: true,
  items: 3,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 8500,
  smartSpeed: 250,
  responsiveRefreshRate: 100,
  responsive: {
    0: {
      items: 1
    },
    700: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});

$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

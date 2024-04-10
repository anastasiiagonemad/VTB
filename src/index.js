import './style/main.css';
import './style/normalize.css';
import './fonts/fonts.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    dots: true,
    mouseGrag: true,
    touchDrag: true,
    responsive: {
      0: {
        items: 1,
      },
      800: {
        items: 6,
      },
      1000: {
        items: 8,
      },
    },
  });
});

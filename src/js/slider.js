'use strict'
document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;

  dots.forEach(function (dot, index) {
    dot.addEventListener('click', function () {
      showSlide(index);
    });
  });

  function showSlide(n) {
    slides.forEach(function (slide) {
      slide.classList.remove('active');
    });

    slides[n].classList.add('active');
    currentSlide = n;
  }

  showSlide(currentSlide);
});

import './style/main.css';
import './style/normalize.css';
import './fonts/fonts.scss';

document.addEventListener('DOMContentLoaded', function () {
  var slides = document.querySelectorAll('.slide');
  var dots = document.querySelectorAll('.dot');
  var currentSlide = 0;

  // Добавляем обработчики событий для кнопок навигации
  dots.forEach(function (dot, index) {
    dot.addEventListener('click', function () {
      showSlide(index);
    });
  });

  function showSlide(n) {
    // Скрываем все слайды
    slides.forEach(function (slide) {
      slide.classList.remove('active');
    });

    // Показываем выбранный слайд и обновляем активную кнопку
    slides[n].classList.add('active');
    currentSlide = n;
  }

  // Показываем первый слайд при загрузке страницы
  showSlide(currentSlide);
});

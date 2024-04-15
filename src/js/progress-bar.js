const progressValues = document.querySelectorAll('#progress');
const progressBgs = document.querySelectorAll('.progress-bar');

progressValues.forEach((pv, index) => {
  pv.addEventListener('input', () => {
    const value = pv.value;
    const percentage = Math.floor((value / pv.max) * 100);
    const color = ['red', 'orange', 'yellow', 'greenyellow', 'green'][
      Math.min(Math.floor(percentage / 20), 4)
    ];
    progressBgs[index].style.backgroundColor = color;
  });
});

// Инициализация цветов для начального состояния
progressValues.forEach((pv, index) => {
  const value = pv.value;
  const percentage = Math.floor((value / pv.max) * 100);
  const color = ['red', 'orange', 'yellow', 'greenyellow', 'green'][
    Math.min(Math.floor(percentage / 20), 4)
  ];
  progressBgs[index].style.backgroundColor = color;
});

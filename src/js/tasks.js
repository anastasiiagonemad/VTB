'use strict'
document.addEventListener('DOMContentLoaded', function () {
  function drawGoals() {
  const container = document.querySelector('.tasks');

  if (localStorage.length) {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);
      // console.log(`Ключ: ${key}, Значение: ${value}`);

      let obj = JSON.parse(value);

      const block = document.createElement('div');
      block.className = 'tasks__item';
      block.innerHTML = `
        <h2>${obj.itemGoalName}</h2>
        <img src='${obj.itemImg}' alt='photo'>
        <p>Прогресс цели: процент из ${obj.itemGoalSum}</p>
      `;

      container.append(block);
      }
    }
  }
  drawGoals();
})

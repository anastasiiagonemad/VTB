'use strict'

import { colorBarInitialize } from './progress-bar';
import { calcProgressValue } from './tasks.js';
import { sumArrItems } from './tasks.js';
import { rightSumFormat1 } from './tasks.js';

document.addEventListener('DOMContentLoaded', function () {
  const itemsContainer = document.querySelector('.start__tasks-container');

  function drawItems() {
    itemsContainer.innerHTML = '';

    if (localStorage.length) {
      for (let i = 0; i < 3; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);

        let obj = JSON.parse(value);

        const block = document.createElement('div');
        block.className = 'start__tasks-item';
        block.innerHTML = `
          <div class="start__tasks-item-title">${obj.itemGoalName}</div>

          <div class="start__tasks-item-progress">
            <p>Прогресс цели</p>

            <div class="progress">
              <progress id="progress" value="${calcProgressValue(sumArrItems(obj.itemPayments), obj.itemGoalSum)}" max="100"></progress>
              <div class="progress-value"></div>
              <div class="progress-bg">
                <div class="progress-bar"></div>
              </div>
            </div>

            <div class="start__tasks-item-progress-left">
              <div>Осталось собрать: </div>
              <div>${obj.itemGoalSum - sumArrItems(obj.itemPayments)} ${rightSumFormat1(obj.itemGoalSum - sumArrItems(obj.itemPayments))}</div>
            </div>
          </div>
        `;

        itemsContainer.append(block);
        colorBarInitialize();
      }
    } else {
      itemsContainer.textContent = "Вы пока что не поставили цели";
    }

  }
  drawItems();
})
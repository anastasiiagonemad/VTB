'use strict';
import details from '../assets/icons/details.svg';
import noimg from '../assets/icons/no-img.svg';
import arrowLeft from '../assets/icons/arrow-left.png';
import screenPic from '../assets/other/pic.png';
import screenPicSmall from '../assets/other/pic-small.png';
import shopIcon from '../assets/icons/shop-1.png';

document.addEventListener('DOMContentLoaded', function () {

  const allTasksContainer = document.querySelector('.tasks');
  const detailsContainer = document.querySelector('.details');

  //-------------------------------------------------------------
  // draw all items on page

  function drawGoals() {
    detailsContainer.innerHTML = '';

    if (localStorage.length) {
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);

        let obj = JSON.parse(value);

        const block = document.createElement('div');
        block.className = 'tasks__item';
        block.innerHTML = `
          <div class="tasks__item-top">
            <h2 class="tasks__item-title">${obj.itemGoalName}</h2>

            <a href="#" class="tasks__item-link" data-obj="${obj.itemGoalName}"><img src="${details}"></a>

          </div>

          <div class="tasks__item-middle">
            <div class="tasks__item-img"><img src='${insertImg(obj.itemImgData)}' alt='photo'></div>
            <div class="tasks__item-summary">
              <div>Конец сбора через:</div>
              <div class="tasks__item-summary-dates">${countDays(obj.itemDateEnd, obj.itemDateStart)}</div>
              <div>Осталось собрать:</div>
              <div class="tasks__item-summary-sum">${obj.itemGoalSum - sumArrItems(obj.itemPayments)} ${rightSumFormat1(obj.itemGoalSum - sumArrItems(obj.itemPayments))}</div>
            </div>
          </div>

          <div class="tasks__item-bottom">
            <div class="tasks__item-report">Прогресс цели: <span class="tasks__item-report-blue">${sumArrItems(obj.itemPayments)} ${rightSumFormat1(obj.itemPayments)} из ${obj.itemGoalSum} ${rightSumFormat2(obj.itemGoalSum)}</span></div>

            <div class="progress tasks__item-progress">
              <progress id="progress" value="${calcProgressValue(sumArrItems(obj.itemPayments), obj.itemGoalSum)}" max="100"></progress>
              <div class="progress-value"></div>
              <div class="progress-bg">
                <div class="progress-bar"></div>
              </div>
            </div>
          </div>
        `;

        allTasksContainer.append(block);
      }
    }

    // draw item details on click
    let linkedData = document.querySelectorAll('.tasks__item-link');

    linkedData.forEach(item => item.addEventListener('click', function(e) {
      e.preventDefault;
      let linkedObj = item.getAttribute('data-obj');
      let obj = JSON.parse(localStorage.getItem(linkedObj));

      drawDetails(obj);
    }));
  }

  //draw items on page load
  drawGoals();

  // function to draw details of an item

  function drawDetails(obj) {
    allTasksContainer.innerHTML = "";

    const block1 = document.createElement('div');
    const block2 = document.createElement('div');
    block1.className = 'task__details';
    block2.className = 'task__details-img';

    block1.innerHTML = `
      <div class="task__details-top-return">
        <img src="${arrowLeft}" alt="arrow-icon">
        <p>Назад</p>
      </div>

      <div class="task__details-top-button">
        <button class="task__details-btn-edit">Редактировать</button>
        <button class="task__details-btn-cancel">Отмена</button>
      </div>

      <div class="task__details-main-top">

        <div class="task__details-title">
          <h2>${obj.itemGoalName}</h2>
        </div>

        <div class="progress-text">
          <p>Прогресс цели</p>
        </div>

        <div class="progress">
          <progress id="progress" value="${calcProgressValue(sumArrItems(obj.itemPayments), obj.itemGoalSum)}" max="100"></progress>
          <div class="progress-value"></div>
          <div class="progress-bg">
            <div class="progress-bar"></div>
          </div>
        </div>

        <div class="task__details-item">
          <p>Сумма которую хотите накопить:</p>
          <p class="task__details-item-value">${obj.itemGoalSum} ${rightSumFormat1(obj.itemGoalSum)} </p>
        </div>

        <div class="task__details-item">
          <p>Приоритет цели:</p>
          <p class="task__details-item-value">${obj.itemPrioryTargetText}</p>
        </div>

        <div class="task__details-item">
          <p>Приоритет цели по времени:</p>
          <p class="task__details-item-value">${obj.itemPrioryTimeText }</p>
        </div>

        <div class="task__details-item">
          <p>Дата начала накопления:</p>
          <p class="task__details-item-value">${obj.itemDateStart}</p>
        </div>

        <div class="task__details-item">
          <p>Дата окончания накопления:</p>
          <p class="task__details-item-value">${obj.itemDateEnd}</p>
        </div>

      </div>

      <div class="task__details-pic">
        <img src='${obj.itemImgData}' alt='photo'>
      </div>

      <div class="task__details-main-bottom">
        <div class="task__details-payment">
          <p>Сумма которую хотите внести сейчас:</p>
          <input type="number" id="sumNow" name="sumNow" placeholder="Введите сумму">
          <button class="task__details-main-btn-submit" type="submit">Пополнить</button>
        </div>

        <div class="task__details-history">
          <p>История операций:</p>
          <div class="task__details-history-item">
          <img src="${shopIcon}">
          <p>${sumArrItems(obj.itemPayments)}</p>
        </div>
      </div>
    `;
    block2.innerHTML = `
      <img class="task__details-img-large" src="${screenPic}">
      <img class="task__details-img-mob" src="${screenPicSmall}">
    `;

    detailsContainer.append(block1);
    detailsContainer.append(block2);

    const returnBtn = document.querySelector('.task__details-top-return');
    returnBtn.addEventListener('click', drawGoals);
  }

  // drawing progress-bars

  const progressValues = document.querySelectorAll('#progress');
  const progressBgs = document.querySelectorAll('.progress-bar');

  // progressValues.forEach((pv, index) => {
  //   pv.addEventListener('input', () => {
  //     const value = pv.value;
  //     const percentage = Math.floor((value / pv.max) * 100);
  //     const color = ['red', 'orange', 'yellow', 'greenyellow', 'green'][
  //       Math.min(Math.floor(percentage / 20), 4)
  //     ];
  //     progressBgs[index].style.backgroundColor = color;
  //   });
  // });

  // colors initialization
  progressValues.forEach((pv, index) => {
    const value = pv.value;
    const percentage = Math.floor((value / pv.max) * 100);
    const color = ['red', 'orange', 'yellow', 'greenyellow', 'green'][
      Math.min(Math.floor(percentage / 20), 4)
    ];
    progressBgs[index].style.backgroundColor = color;
  });

  //--------------------------------------------------------
  // functions for counting days, amounts, correct format of amounts, insert image

  function countDays(date1, date2) {
    let daysLeft = (new Date(date1) - new Date(date2)) / 1000 / 60 / 60 / 24;
    let endNum = daysLeft.toString().slice(-1);
    let text =
      endNum === '1'
        ? 'день'
        : endNum === '2' || endNum === '3' || endNum === '4'
        ? 'дня'
        : 'дней';
    return daysLeft + ' ' + text;
  }

  function sumArrItems(arr) {
    return arr.reduce((accum, curr) => accum + curr);
  }

  function rightSumFormat1(item) {
    let endNum = item.toString().slice(-1);

    let text =
      endNum === '1'
        ? 'рубль'
        : endNum === '2' || endNum === '3' || endNum === '4'
        ? 'рубля'
        : 'рублей';
    return text;
  }

  function rightSumFormat2(item) {
    let endNum = item.toString().slice(-1);

    let text = endNum === '1' ? 'рубль' : 'рублей';
    return text;
  }

  function insertImg(data) {
    return data ? data : noimg;
  }

  function calcProgressValue(payments, goal) {
    return Math.round(payments * 100 / goal);
  }

});

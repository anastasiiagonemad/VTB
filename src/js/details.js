'use strict';
import arrowLeft from '../assets/icons/arrow-left.png';
import screenPic from '../assets/other/pic.png';
import screenPicSmall from '../assets/other/pic-small.png';
import shopIcon from '../assets/icons/shop-1.png';

document.addEventListener('DOMContentLoaded', function () {
  function drawDetails() {
    const container = document.querySelector('.details');

    if (localStorage.length) {
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);

        let obj = JSON.parse(value);

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
                <progress id="progress" value="0" max="100"></progress>
                <div class="progress-value"></div>
                <div class="progress-bg">
                    <div class="progress-bar"></div>
                </div>
            </div>
                
            <div class="task__details-item">
                <p>Сумма которую хотите накопить:</p>
                <p class="task__details-item-value">${obj.itemGoalSum}</p>
            </div>
                
            <div class="task__details-item">
                <p>Приоритет цели:</p>
                <p class="task__details-item-value">${
                  obj.itemPrioryTargetText
                }</p>
            </div>
                
            <div class="task__details-item">
                <p>Приоритет цели по времени:</p>
                <p class="task__details-item-value">${
                  obj.itemPrioryTimeText
                }</p>
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
                <p>+${rightSumFormat1(obj.itemPayments)}</p>
            </div>
        </div> 
        `;
        block2.innerHTML = `<img class="task__details-img-large" src="${screenPic}">
        <img class="task__details-img-mob" src="${screenPicSmall}">
        `;

        container.append(block1);
        container.append(block2);
      }
    }
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

  drawDetails();
});

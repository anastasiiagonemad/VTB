'use strict'
import { refreshLocalStorage } from './localStorage.js';

document.addEventListener('DOMContentLoaded', function () {
  const formNewGoal = document.forms.formNew;
  const goalName = formNewGoal.elements.goalName;
  const goalSum = formNewGoal.elements.goalSum;
  const selectPrioryTarget = formNewGoal.elements.prioryTarget;
  const selectPrioryTime = formNewGoal.elements.prioryTime;
  const dateStart = formNewGoal.elements.dateStart;
  const dateEnd = formNewGoal.elements.dateEnd;
  const sumNow = formNewGoal.elements.sumNow;
  const addImage = formNewGoal.elements.addImage;

  const btnPay = document.querySelector('.new__form-submit');
  btnPay.disabled = true;

  const btnSave = document.querySelector('.new__form-save');
  btnSave.disabled = true;

  const btnClear = document.querySelector('.new__form-cancel');

  //------------------------------------------------------

  //controlling submit
  formNewGoal.addEventListener('change', function () {
    controlSubmit(formNewGoal);
  });

  function controlSubmit(form) {
    let formInputs = Array.from(form.querySelectorAll('._req'));

    let isValid = true;

    formInputs.forEach(input => {
      if (input.value.trim() === '') {
        isValid = false;
      }
    });

    btnSave.disabled = !isValid;
  }

  //------------------------------------------------------

  //listener of saving item data
  btnSave.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(createItem());
    refreshLocalStorage(createItem());
  })

  function createItem() {
    const itemGoalName = goalName.value.trim();
    const itemGoalSum = goalSum.value;

    const prioryTargetInd = selectPrioryTarget.selectedIndex;
    const itemPrioryTargetText = selectPrioryTarget.options[prioryTargetInd].text;

    const prioryTimeInd = selectPrioryTime.selectedIndex;
    const itemPrioryTimeText = selectPrioryTime.options[prioryTimeInd].text;

    const itemDateStart = dateStart.value;
    const itemDateEnd = dateEnd.value;
    const itemSumNow = sumNow.value;
    const itemImg = addImage.value;

    return { itemGoalName, itemGoalSum, itemPrioryTargetText, itemPrioryTimeText, itemDateStart, itemDateEnd, itemSumNow, itemImg };
  }

})
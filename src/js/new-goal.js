'use strict';
import { refreshLocalStorage } from './localStorage.js';

document.addEventListener('DOMContentLoaded', function () {
  // localStorage.clear();

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

  //img preview
  const previewImage = document.querySelector('.new__form-add-preview');

  addImage.addEventListener('change', () => {
    uploadFile(addImage.files[0]);
  });

  function uploadFile(file) {
    if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
      previewImage.textContent = 'Разрешены только изображения';
    }
    let reader = new FileReader();
    reader.onload = function (e) {
      previewImage.innerHTML = `<img src="${e.target.result}" alt="photo">`;
    };
    reader.onerror = function (e) {
      previewImage.textContent = 'Ошибка';
    };
    reader.readAsDataURL(file);
  }

  //------------------------------------------------------

  //controlling submit
  formNewGoal.addEventListener('change', function () {
    controlSubmit(formNewGoal);
  });

  function controlSubmit(form) {
    let formInputs = Array.from(form.querySelectorAll('._req'));

    let isValid = true;

    formInputs.forEach((input) => {
      if (input.value.trim() === '') {
        isValid = false;
      }
    });

    btnSave.disabled = !isValid;
  }

  //------------------------------------------------------

  //listener of saving item data
  btnSave.addEventListener('click', function (e) {
    e.preventDefault();

    refreshLocalStorage(createItem());
  });

  function createItem() {
    const itemGoalName = goalName.value.trim();
    const itemGoalSum = goalSum.value;

    const prioryTargetInd = selectPrioryTarget.selectedIndex;
    const itemPrioryTargetText =
      selectPrioryTarget.options[prioryTargetInd].text;

    const prioryTimeInd = selectPrioryTime.selectedIndex;
    const itemPrioryTimeText = selectPrioryTime.options[prioryTimeInd].text;

    const itemDateStart = dateStart.value;
    const itemDateEnd = dateEnd.value;
    const itemSumNow = sumNow.value;
    const itemImg = addImage.files[0];

    return {
      itemGoalName,
      itemGoalSum,
      itemPrioryTargetText,
      itemPrioryTimeText,
      itemDateStart,
      itemDateEnd,
      itemSumNow,
      itemImg,
    };
  }

});

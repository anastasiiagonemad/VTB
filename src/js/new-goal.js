'use strict';
import { refreshLocalStorage } from './localStorage.js';

document.addEventListener('DOMContentLoaded', function () {
  // localStorage.clear();

  const formNewGoal = document.forms.formNew;
  const goalName = formNewGoal.goalName;
  const goalSum = formNewGoal.goalSum;
  const selectPrioryTarget = formNewGoal.prioryTarget;
  const selectPrioryTime = formNewGoal.prioryTime;
  const dateStart = formNewGoal.dateStart;
  const dateEnd = formNewGoal.dateEnd;
  const sumNow = formNewGoal.sumNow;
  const addImage = formNewGoal.addImage;

  const btnPay = document.querySelector('.new__form-submit');
  btnPay.disabled = true;
  let itemPaymentsArr = [];

  const btnSave = document.querySelector('.new__form-save');
  btnSave.disabled = true;

  const btnClear = document.querySelector('.new__form-cancel');

  const toBePayedContainer = document.querySelector('.toBePayed__sum');
  const payedContainer = document.querySelector('.payedNow__sum');


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
  // date settings

  function setToday(input) {
    const today = new Date();
    const minDate = today.toISOString().split('T')[0];
    input.setAttribute('min', minDate);
  }

  setToday(dateStart);
  setToday(dateEnd);

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
    formNewGoal.reset();
    removePaymentDetails();
  });

  function createItem() {
    const itemGoalName = goalName.value.trim();
    const itemGoalSum = goalSum.value;

    const prioryTargetInd = selectPrioryTarget.selectedIndex;
    const itemPrioryTargetText = selectPrioryTarget.options[prioryTargetInd].text;

    const prioryTimeInd = selectPrioryTime.selectedIndex;
    const itemPrioryTimeText = selectPrioryTime.options[prioryTimeInd].text;

    const itemDateStart = dateStart.value;
    const itemDateEnd = dateEnd.value;

    let itemPayments = itemPaymentsArr;

    const itemImg = addImage.files[0];

    return {
      itemGoalName,
      itemGoalSum,
      itemPrioryTargetText,
      itemPrioryTimeText,
      itemDateStart,
      itemDateEnd,
      itemPayments,
      itemImg,
    };
  }

  //------------------------------------------------------

  //listener of clearing form
  btnClear.addEventListener('click', function(e) {
    e.preventDefault();
    formNewGoal.reset();
    removePaymentDetails();
  })

   //------------------------------------------------------

  //listener of payment
  sumNow.addEventListener('input', function () {
    let isValid = sumNow.value.trim() === '' ? false : true
    btnPay.disabled = !isValid;
  });

  btnPay.addEventListener('click', function(e) {
    e.preventDefault();
    itemPaymentsArr.push(+sumNow.value);
    addPaymentDetails();
  })

  function addPaymentDetails() {
    payedContainer.textContent = null;

    document.querySelector('.toBePayed').classList.add('payed');
    document.querySelector('.payedNow').classList.add('payed');

    payedContainer.textContent = toBePayedContainer.value;
  }

  function removePaymentDetails() {
    payedContainer.textContent = null;

    document.querySelector('.toBePayed').classList.remove('payed');
    document.querySelector('.payedNow').classList.remove('payed');
  }
});

// itemPaymentsArr.reduce((accum, curr) => accum + curr);

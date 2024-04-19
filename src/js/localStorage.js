'use strict'

export function refreshLocalStorage(obj) {
  localStorage.setItem(obj.itemGoalName, JSON.stringify(obj));
}

export function addPaymentToLocalStorage(key) {
  let obj = JSON.parse(localStorage.getItem(key));
  obj.itemPayments.push(+sumNow.value);
  localStorage.setItem(obj.itemGoalName, JSON.stringify(obj));
}

export function getPaymentsArr(key) {
  const obj = JSON.parse(localStorage.getItem(key));
  return obj.itemPayments;
}

localStorage.removeItem('perfectpixel-panel');

localStorage.removeItem('perfectpixel-layers');

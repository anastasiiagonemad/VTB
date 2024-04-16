'use strict'

export function refreshLocalStorage(obj) {
  localStorage.setItem(obj.itemGoalName, JSON.stringify(obj));
}

// export function getStoredGoals() {
//   if (localStorage.length) {
//     for (let i = 0; i < localStorage.length; i++) {
//       let key = localStorage.key(i);
//       let value = localStorage.getItem(key);
//       // console.log(`Ключ: ${key}, Значение: ${value}`);

//       return JSON.parse(value);
//     }
//   }
// }
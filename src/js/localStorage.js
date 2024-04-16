'use strict'

export function refreshLocalStorage(obj) {
  let goalsArr = localStorage.getItem('goalsArr') ? JSON.parse(localStorage.getItem('goalsArr')) : [];
  goalsArr.push(obj);
  localStorage.setItem('goalsArr', JSON.stringify(goalsArr));
}

// let goalsArr = localStorage.getItem('goalsArr') ? JSON.parse(localStorage.getItem('goalsArr')) : [];
// function createBlocks (arr) {
//   if (arr && arr.length !== 0) {
//     arr.forEach(obj => () {
//       тут какая-то вёрстка для создания блока и в неё вставляешь в нужных местах `${obj.itemGoalName}`
//       `${obj.itemGoalSum}` и тд по списку для каждого объекта массива goalsArr, который сохранён в local storage
//     })
//   }
// }
// createBlocks(goalsArr);
'use strict'



export function refreshLocalStorage(obj) {
    let goalsArr = localStorage.getItem('goalsArr') ? JSON.parse(localStorage.getItem('goalsArr')) : [];
    goalsArr.push(obj);
    localStorage.setItem('goalsArr', JSON.stringify(goalsArr));
  }

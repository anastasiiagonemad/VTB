'use strict'

export function refreshLocalStorage(obj) {
  localStorage.setItem(obj.itemGoalName, JSON.stringify(obj));
}

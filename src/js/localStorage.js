'use strict'

export function refreshLocalStorage(obj) {
  localStorage.setItem(obj.itemGoalName, JSON.stringify(obj));
}

localStorage.removeItem('perfectpixel-panel');

localStorage.removeItem('perfectpixel-layers');

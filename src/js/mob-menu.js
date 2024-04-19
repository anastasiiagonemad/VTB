'use strict'
document.addEventListener('DOMContentLoaded', function () {
  const logo = document.querySelector('.logo-img');
  const avatar = document.querySelector('.avatar');
  const body = document.querySelector('.body');

  const handlersMenu = document.querySelector('.sidebar__handlers_mob');
  const assistanceMenu = document.querySelector('.sidebar__assistance_mob');

  logo.addEventListener('click', (e)=>{
    handlersMenu.classList.add('active');
  })

  avatar.addEventListener('click', ()=>{
    assistanceMenu.classList.add('active');
  })

  document.addEventListener('click', (e)=>{
    if (!e.target.closest('.sidebar__handlers_mob') && !e.target.closest('.logo-img')) {
      handlersMenu.classList.remove('active');
    }

    if (!e.target.closest('.sidebar__assistance_mob') && !e.target.closest('.avatar')) {
      assistanceMenu.classList.remove('active');
    }
  })

})
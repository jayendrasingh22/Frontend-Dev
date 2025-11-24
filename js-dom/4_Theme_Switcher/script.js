'use strict';
const buttons = document.querySelectorAll('button[data-theme]');
buttons.forEach(b=> b.addEventListener('click', ()=> {
  const t = b.getAttribute('data-theme');
  document.body.setAttribute('data-theme', t);
}));

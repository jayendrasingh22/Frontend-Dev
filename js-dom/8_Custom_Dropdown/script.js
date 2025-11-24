'use strict';
const ddBtn = document.getElementById('ddBtn');
const options = document.getElementById('options');
const dd = document.getElementById('dd');

ddBtn.addEventListener('click', (e)=> {
  options.style.display = options.style.display === 'none' ? '' : 'none';
});

// capturing phase to close when clicking outside
document.addEventListener('click', (e)=> {
  if (!dd.contains(e.target)) options.style.display='none';
}, true);

options.addEventListener('click', (e)=> {
  const li = e.target.closest('li');
  if (!li) return;
  ddBtn.textContent = li.textContent;
  options.style.display='none';
});

'use strict';
const ta = document.getElementById('ta');
const counter = document.getElementById('counter');
const reset = document.getElementById('reset');
const MAX = 100;

function update(){
  const remain = MAX - ta.value.length;
  counter.textContent = remain + ' characters remaining';
  counter.style.background = '';
  if (remain <= 20 && remain > 0) counter.style.background = 'yellow';
  if (remain === 0) counter.style.background = 'red';
}

ta.addEventListener('keydown', (e) => {
  if (ta.value.length >= MAX && e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
    e.preventDefault();
  }
});

ta.addEventListener('input', update);
reset.addEventListener('click', ()=>{ta.value=''; update();});
update();

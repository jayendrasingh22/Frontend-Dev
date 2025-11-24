'use strict';
const form = document.getElementById('msForm');
const steps = Array.from(document.querySelectorAll('.step'));
let current = 0;
const next = document.getElementById('next');
const back = document.getElementById('back');
const summary = document.getElementById('summary');

function showStep(i){
  steps.forEach((s,idx)=> s.style.display = idx===i ? '' : 'none');
  back.style.display = i===0 ? 'none' : '';
  next.textContent = i===steps.length-1 ? 'Finish' : 'Next';
}
function validateCurrent(){
  const inputs = steps[current].querySelectorAll('input');
  for (const inp of inputs){
    if (!inp.checkValidity()) return false;
    if (inp.name==='email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inp.value)) return false;
    if (inp.name==='password' && inp.value.length < 6) return false;
  }
  return true;
}
next.addEventListener('click', ()=>{
  if (!validateCurrent()){ alert('Please fill valid input'); return; }
  if (current < steps.length-1){ current++; showStep(current); }
  else {
    // show summary
    const data = new FormData(form);
    const obj = Object.fromEntries(data.entries());
    summary.textContent = 'Summary: ' + JSON.stringify(obj);
  }
});
back.addEventListener('click', ()=>{ if (current>0) { current--; showStep(current); }});
showStep(0);

'use strict';
const form = document.getElementById('f');
const msg = document.getElementById('msg');

function validate(formdata){
  const errors = {};
  const name = formdata.get('name') || '';
  const email = formdata.get('email') || '';
  const password = formdata.get('password') || '';
  if (!name.trim()) errors.name = 'Name required';
  if (!email.includes('@')) errors.email = 'Email must contain @';
  if (password.length < 6) errors.password = 'Password must be at least 6 chars';
  return errors;
}

form.addEventListener('input', (e)=>{
  const fd = new FormData(form);
  const errors = validate(fd);
  Array.from(form.querySelectorAll('.err')).forEach(span=>span.textContent='');
  if (errors.name) form.querySelector('input[name="name"]').nextElementSibling.textContent = errors.name;
  if (errors.email) form.querySelector('input[name="email"]').nextElementSibling.textContent = errors.email;
  if (errors.password) form.querySelector('input[name="password"]').nextElementSibling.textContent = errors.password;
  msg.textContent='';
});

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const fd = new FormData(form);
  const errors = validate(fd);
  Array.from(form.querySelectorAll('.err')).forEach(span=>span.textContent='');
  if (Object.keys(errors).length){
    if (errors.name) form.querySelector('input[name="name"]').nextElementSibling.textContent = errors.name;
    if (errors.email) form.querySelector('input[name="email"]').nextElementSibling.textContent = errors.email;
    if (errors.password) form.querySelector('input[name="password"]').nextElementSibling.textContent = errors.password;
    return;
  }
  msg.textContent = 'Form Submitted Successfully';
  form.reset();
});

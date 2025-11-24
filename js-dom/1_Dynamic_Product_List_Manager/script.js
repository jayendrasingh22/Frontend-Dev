'use strict';
// Uses event delegation to handle edit/delete. Clicking outside saves edits.

const input = document.getElementById('productInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('productList');

function createItem(name){
  const li = document.createElement('li');
  li.innerHTML = `<span class="label"></span>
  <div class="btns">
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
  </div>`;
  li.querySelector('.label').textContent = name;
  return li;
}

addBtn.addEventListener('click', () => {
  const val = input.value.trim();
  if (!val) return;
  list.appendChild(createItem(val));
  input.value = '';
});

list.addEventListener('click', (e) => {
  const btn = e.target;
  const li = btn.closest('li');
  if (!li) return;
  if (btn.classList.contains('delete')) {
    li.remove();
  } else if (btn.classList.contains('edit')) {
    enterEditMode(li);
  }
});

// Auto-save when clicking outside an edited item
document.addEventListener('click', (e) => {
  const editing = list.querySelector('.editing');
  if (editing && !editing.contains(e.target)) {
    saveEdit(editing);
  }
});

function enterEditMode(li){
  if (li.classList.contains('editing')) return;
  li.classList.add('editing');
  const label = li.querySelector('.label');
  const current = label.textContent;
  label.innerHTML = `<input value="${current}">`;
  const inputField = label.querySelector('input');
  inputField.focus();
  inputField.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') saveEdit(li);
    if (ev.key === 'Escape') cancelEdit(li, current);
  });
}

function saveEdit(li){
  if (!li) return;
  const inputField = li.querySelector('.label input');
  if (inputField) {
    const newVal = inputField.value.trim() || 'Untitled';
    li.querySelector('.label').textContent = newVal;
  }
  li.classList.remove('editing');
}

function cancelEdit(li, old){
  li.querySelector('.label').textContent = old;
  li.classList.remove('editing');
}

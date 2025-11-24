'use strict';
const search = document.getElementById('search');
const tbl = document.getElementById('tbl').getElementsByTagName('tbody')[0];
const nores = document.getElementById('nores');

search.addEventListener('input', ()=> {
  const q = search.value.trim().toLowerCase();
  let visible = 0;
  Array.from(tbl.rows).forEach(row=>{
    const text = row.textContent.toLowerCase();
    if (text.includes(q)) { row.style.display=''; visible++; } else row.style.display='none';
  });
  nores.style.display = visible ? 'none' : '';
});

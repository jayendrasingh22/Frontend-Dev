'use strict';
const imgs = [
  'https://picsum.photos/id/1015/600/400',
  'https://picsum.photos/id/1016/600/400',
  'https://picsum.photos/id/1018/600/400',
  'https://picsum.photos/id/1020/600/400',
  'https://picsum.photos/id/1024/600/400',
  'https://picsum.photos/id/1027/600/400'
];
const grid = document.getElementById('grid');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.getElementById('closeBtn');

imgs.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  grid.appendChild(img);
  img.addEventListener('click', (e) => {
    modal.style.display = 'flex';
    modalImg.src = src;
    e.stopPropagation();
  });
});

modal.addEventListener('click', ()=> modal.style.display='none');
closeBtn.addEventListener('click', (e)=> { e.stopPropagation(); modal.style.display='none'; });

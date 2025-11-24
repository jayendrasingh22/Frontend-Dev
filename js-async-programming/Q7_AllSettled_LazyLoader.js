'use strict');
// Q7 - Promise.allSettled example with random rejection and timing

function loadProfile(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=> Math.random() < 0.25 ? reject('Profile failed') : resolve('Profile Loaded'), 2000);
  });
}
function loadPosts(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=> Math.random() < 0.25 ? reject('Posts failed') : resolve('Posts Loaded'), 1500);
  });
}
function loadMessages(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=> Math.random() < 0.25 ? reject('Messages failed') : resolve('Messages Loaded'), 1000);
  });
}

(async function(){
  const start = Date.now();
  const results = await Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]);
  const end = Date.now();
  results.forEach((r,i)=>{
    if (r.status === 'fulfilled') console.log('Module', i+1, 'succeeded:', r.value);
    else console.warn('Module', i+1, 'failed:', r.reason);
  });
  console.log('Total time (ms):', end - start);
})();

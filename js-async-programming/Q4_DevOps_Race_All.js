'use strict';
// Q4 - DevOps Delay: Promise.all and Promise.race

function serverA(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if (Math.random() < 0.15) return reject(new Error('Server A failed'));
      resolve('Server A responded in 2s');
    }, 2000);
  });
}

function serverB(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if (Math.random() < 0.15) return reject(new Error('Server B failed'));
      resolve('Server B responded in 3s');
    }, 3000);
  });
}

// Promise.all
Promise.all([serverA(), serverB()])
  .then(results => {
    console.log('Deployment completed for all servers');
    console.log(results);
  })
  .catch(err => console.error('Deployment error (all):', err.message));

// Promise.race
Promise.race([serverA(), serverB()])
  .then(fast => console.log('Fastest response:', fast))
  .catch(err => console.error('Deployment error (race):', err.message));

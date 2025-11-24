'use strict';
// Q1 - Async Coffee Maker (Promises + chaining)
// Each step returns a Promise resolving after 1-2 seconds. Random failure simulated.

function delayRandom(min=1000, max=2000){ return Math.floor(Math.random()*(max-min+1))+min; }

function boilWater(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error('Boiler malfunction'));
      console.log('Boiled water');
      resolve('water');
    }, delayRandom());
  });
}

function brewCoffee(water){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.12) return reject(new Error('Coffee grounds missing'));
      console.log('Brewed coffee using', water);
      resolve('coffee');
    }, delayRandom());
  });
}

function pourCup(coffee){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) return reject(new Error('Cup chipped'));
      console.log('Poured coffee into cup');
      resolve('Coffee ready for the team!');
    }, delayRandom());
  });
}

// Use promise chaining
boilWater()
  .then(w => brewCoffee(w))
  .then(c => pourCup(c))
  .then(msg => console.log(msg))
  .catch(err => console.error('Coffee process failed:', err.message));

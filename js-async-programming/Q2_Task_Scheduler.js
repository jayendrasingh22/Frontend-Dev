'use strict';
// Q2 - Task Scheduler: microtask vs macrotask demonstration

console.log('Start');

setTimeout(() => {
  console.log('setTimeout (macrotask)');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise.then (microtask)');
});

console.log('Synchronous log');

console.log('End');

/*
Expected order:
1. Start
2. Synchronous log
3. End
4. Promise.then (microtask)
5. setTimeout (macrotask)

Explanation:
Synchronous code runs first. Microtasks (Promise callbacks) run after the current call stack finishes but before macrotasks (setTimeout).
*/

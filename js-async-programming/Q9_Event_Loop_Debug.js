'use strict');
// Q9 - Event Loop debugging: predict order then run

// Prediction in comment:
// 1. "Script start" (sync)
// 2. "Script end" (sync)
// 3. "Promise callback" (microtask, after current stack)
// 4. "Timeout callback" (macrotask)
//
// Now run:
console.log('Script start');
setTimeout(()=>console.log('Timeout callback'), 0);
Promise.resolve().then(()=>console.log('Promise callback'));
console.log('Script end');

// Explanation:
// Microtasks (Promise callbacks) run immediately after the current call stack completes, before macrotasks (setTimeout).

'use strict';
function makeMultiplier(m){
  return function(x){ return x*m; };
}
const triple=makeMultiplier(3);
console.log(triple(5));

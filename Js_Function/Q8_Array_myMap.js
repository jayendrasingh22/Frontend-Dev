'use strict';
Array.prototype.myMap=function(callback){
  const out=[];
  for(let i=0;i<this.length;i++){
    out.push(callback(this[i],i,this));
  }
  return out;
};
console.log([1,2,3].myMap(n=>n*2));

"use strict";
const transactions=[{id:1,amount:2000},{id:2,amount:-500},{id:3},null];
let valid=[],invalid=[];
transactions.forEach(t=>{try{if(t===null) throw "Null entry";if(!t.id||t.amount===undefined) throw "Missing data";if(t.amount<0) throw "Negative amount";valid.push(t);}catch(e){invalid.push({t,e});}});
console.log("Valid:",valid,"Invalid:",invalid);
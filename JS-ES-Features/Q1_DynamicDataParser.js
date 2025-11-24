"use strict";
const apiData = ["25","true","false","NaN"," ","100px","3.14",null,undefined];
let validNums=[], invalidNums=[];
apiData.forEach(v=>{let num=Number(v); if(!isNaN(num) && v!=="" && v!=="100px") validNums.push(num); else invalidNums.push(v); console.log({value:v, number:num, boolean:Boolean(v), string:String(v)});});
console.log("Valid:",validNums,"Invalid:",invalidNums);
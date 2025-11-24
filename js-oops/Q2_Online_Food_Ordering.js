'use strict';
const menu={pizza:300,burger:150,pasta:200};
function calculateBill(items){
  try{
    const prices=items.map(i=>{
      if(!(i in menu)) throw new Error('Invalid item: '+i);
      return menu[i];
    });
    const total=prices.reduce((a,b)=>a+b,0);
    console.log('Total:',total);
  }catch(e){
    console.error('Error:',e.message);
  }
}
calculateBill(['pizza','burger']);
calculateBill(['pizza','rice']);

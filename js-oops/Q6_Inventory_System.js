'use strict';
const products=[
 {id:1,name:'Laptop',category:'Electronics',price:50000,stock:3},
 {id:2,name:'Mug',category:'Kitchen',price:200,stock:50},
 {id:3,name:'Phone',category:'Electronics',price:20000,stock:1},
];
function getLowStockProducts(){
 return products.filter(p=>p.stock<5);
}
function sortProductsByPrice(){
 return [...products].sort((a,b)=>a.price-b.price);
}
function calculateTotalInventoryValue(){
 return products.reduce((sum,p)=>sum+p.price*p.stock,0);
}
function groupByCategory(){
 return products.reduce((g,p)=>{
   (g[p.category]=g[p.category]||[]).push(p);
   return g;
 },{});
}
console.log(getLowStockProducts());
console.log(sortProductsByPrice());
console.log(calculateTotalInventoryValue());
console.log(groupByCategory());

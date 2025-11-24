'use strict';
function Product(name,price){ this.name=name; this.price=price; }
Product.prototype.applyDiscount=function(p){
  return +(this.price*(1-p/100)).toFixed(2);
};
const p1=new Product('Laptop',50000);
const p2=new Product('Shoes',2000);
const p3=new Product('Watch',5000);
console.log(p1.applyDiscount(10),p2.applyDiscount(20),p3.applyDiscount(5));

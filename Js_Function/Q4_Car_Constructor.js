'use strict';
function Car(brand, model){
  this.brand=brand; this.model=model;
}
Car.prototype.getDetails=function(){
  console.log(`${this.brand} ${this.model}`);
};
new Car("Honda","City").getDetails();
new Car("BMW","X5").getDetails();

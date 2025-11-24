'use strict';
class User{ constructor(n,r){ this.name=n; this.rating=r; } }
class Driver extends User{ constructor(n,r,v){ super(n,r); this.vehicle=v; } }
class Trip{
  constructor(f,t,d){ this.from=f; this.to=t; this.distance=d; }
  calculateFare(){
    if(this.distance<=0||!this.distance) throw new Error('Invalid distance');
    return this.distance*10;
  }
}
try{
  const t=new Trip('A','B',5);
  console.log('Fare:',t.calculateFare());
}catch(e){ console.error(e.message); }

'use strict';
class MovieTicket{
  constructor(m,s,p){ this.movieName=m; this.seatNo=s; this.price=p; }
}
MovieTicket.prototype.printTicket=function(){
  console.log(this.movieName,this.seatNo,this.price);
};
class OnlineTicket extends MovieTicket{
  constructor(m,s,p,f){ super(m,s,p); this.convenienceFee=f; }
  getTotalAmount(){ return this.price+this.convenienceFee; }
}
const ot=new OnlineTicket('Avatar','A1',300,50);
ot.printTicket();
console.log(ot.getTotalAmount());

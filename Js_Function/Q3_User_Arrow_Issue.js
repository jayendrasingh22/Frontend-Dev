'use strict';
const user={
  name:"John",
  showName: ()=>console.log(this.name) // undefined
};
user.showName();
// fix
const user2={
  name:"John",
  showName(){ console.log(this.name); }
};
user2.showName();

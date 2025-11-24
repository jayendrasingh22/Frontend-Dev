'use strict';
function Person(n){this.name=n;}
Person.prototype.sayHi=function(){console.log("Hi "+this.name);};

function Faculty(n,d){Person.call(this,n); this.dept=d;}
Faculty.prototype=Object.create(Person.prototype);
Faculty.prototype.constructor=Faculty;
Faculty.prototype.showDept=function(){console.log(this.dept);};

function Professor(n,d,sp){Faculty.call(this,n,d); this.specialization=sp;}
Professor.prototype=Object.create(Faculty.prototype);
Professor.prototype.constructor=Professor;
Professor.prototype.showSpec=function(){console.log(this.specialization);};

const p=new Professor("Rina","Tech","AI");
p.sayHi(); p.showDept(); p.showSpec();

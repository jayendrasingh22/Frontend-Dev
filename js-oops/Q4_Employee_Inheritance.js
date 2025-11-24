'use strict';
class Employee{
  constructor(name,dept){ this.name=name; this.department=dept; }
  work(){ console.log(this.name+' works'); }
}
class Manager extends Employee{
  work(){ console.log(this.name+' manages team'); }
}
const e=new Employee('A','Tech');
const m=new Manager('B','HR');
e.work(); m.work();

'use strict';
class Student{
  constructor(name, marks){ this.name=name; this.marks=marks; }
  calculateAverage(){
    const avg=this.marks.reduce((a,b)=>a+b,0)/this.marks.length;
    return avg;
  }
  getGrade(){
    const avg=this.calculateAverage();
    if(avg>=90) return 'A';
    if(avg>=75) return 'B';
    if(avg>=60) return 'C';
    return 'F';
  }
}
const s1=new Student('A',[90,80,70]);
const s2=new Student('B',[95,92,88]);
const s3=new Student('C',[50,60,55]);
console.log(s1.name,s1.calculateAverage(),s1.getGrade());
console.log(s2.name,s2.calculateAverage(),s2.getGrade());
console.log(s3.name,s3.calculateAverage(),s3.getGrade());

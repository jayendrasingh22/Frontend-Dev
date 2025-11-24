'use strict';
// Q6 - Employee Management System (Classes + Methods)
// Employee class with getAnnualSalary and applyBonus, plus total payout calculation.

class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary; // monthly salary
  }

  getAnnualSalary() {
    return +(this.salary * 12).toFixed(2);
  }

  applyBonus(percent) {
    if (typeof percent !== 'number') throw new Error('Percent must be number');
    this.salary = +(this.salary * (1 + percent / 100)).toFixed(2);
  }

  details() {
    return `Emp[#${this.id}] ${this.name} | Dept: ${this.department} | Monthly: ₹${this.salary}`;
  }
}

// Create 5 employees
const employees = [
  new Employee(1, 'Amit', 'Tech', 50000),
  new Employee(2, 'Sara', 'HR', 35000),
  new Employee(3, 'Kiran', 'Finance', 42000),
  new Employee(4, 'Rina', 'Support', 30000),
  new Employee(5, 'Vikram', 'Tech', 65000)
];

// Apply a 5% bonus to those with id 1 and 5
employees[0].applyBonus(5);
employees[4].applyBonus(5);

console.log('\nEmployee annual salaries:');
employees.forEach(e => console.log(`${e.details()} | Annual: ₹${e.getAnnualSalary()}`));

// Total annual payout (sum of annual salaries)
const totalAnnualPayout = employees.reduce((acc, e) => acc + e.getAnnualSalary(), 0);
console.log('\nTotal annual payout: ₹' + totalAnnualPayout.toFixed(2));

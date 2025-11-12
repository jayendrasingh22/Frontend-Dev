// 8. The Employee Bonus Distribution
// -----------------------------------
// This program calculates an employee's annual bonus based on
// performance rating, years of experience, and base salary.

// Step 1: Declare input variables
let baseSalary = 120000;   // in ₹
let rating = 5;            // performance rating (1–5)
let experience = 6;        // years of experience

// Step 2: Determine base bonus percentage based on rating
let bonusPercent = 0;

if (rating === 5) {
  bonusPercent = 20;
} else if (rating === 4) {
  bonusPercent = 15;
} else if (rating === 3) {
  bonusPercent = 10;
} else {
  bonusPercent = 0;
}

// Step 3: Add extra 5% bonus if experience > 5 years
if (experience > 5) {
  bonusPercent += 5;
}

// Step 4: Calculate initial bonus amount
let calculatedBonus = (baseSalary * bonusPercent) / 100;

// Step 5: Cap bonus at ₹25,000 if base salary > ₹1,00,000
let finalBonus;
if (baseSalary > 100000 && calculatedBonus > 25000) {
  finalBonus = 25000;
} else {
  finalBonus = calculatedBonus;
}

// Step 6: Calculate total salary after bonus
let totalSalary = baseSalary + finalBonus;

// Step 7: Display all results neatly
console.log("💼 EMPLOYEE BONUS SUMMARY 💼");
console.log("---------------------------------");
console.log("Base Salary: ₹" + baseSalary);
console.log("Performance Rating: " + rating);
console.log("Years of Experience: " + experience);
console.log("Calculated Bonus (" + bonusPercent + "%): ₹" + calculatedBonus.toFixed(2));
if (finalBonus !== calculatedBonus) {
  console.log("Capped Final Bonus: ₹" + finalBonus.toFixed(2));
} else {
  console.log("Final Bonus: ₹" + finalBonus.toFixed(2));
}
console.log("---------------------------------");
console.log("Total Salary after Bonus: ₹" + totalSalary.toFixed(2));

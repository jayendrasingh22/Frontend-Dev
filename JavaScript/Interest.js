// 2. The Banking Interest Calculator
// ----------------------------------
// This program calculates the final balance in a bank account
// after applying annual compound interest for a given number of years.

// Declare variables for account type, amount, and years
let accountType = "Savings";  // can be "Savings" or "Fixed"
let amount = 120000;          // deposit amount in rupees
let years = 5;                // number of years

// Step 1: Define the base interest rate based on account type
let rate;
if (accountType === "Savings") {
  rate = 4; // 4% for savings account
} else if (accountType === "Fixed") {
  rate = 6.5; // 6.5% for fixed deposit
} else {
  console.log("Invalid account type entered!");
  rate = 0;
}

// Step 2: Add a bonus interest if deposit is more than ₹1,00,000
if (amount > 100000) {
  rate += 1; // 1% extra bonus
}

// Step 3: Calculate total using compound interest formula
// Formula: total = amount * (1 + rate/100) ^ years
let total = amount * Math.pow((1 + rate / 100), years);

// Step 4: Round the result to two decimal places
total = total.toFixed(2);

// Step 5: Print the result to console
console.log("Account Type: " + accountType);
console.log("Initial Amount: ₹" + amount);
console.log("Interest Rate: " + rate + "%");
console.log("Years: " + years);
console.log("Final Balance after " + years + " years: ₹" + total);

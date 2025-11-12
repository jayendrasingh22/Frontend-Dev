// 3. The Cinema Ticketing System
// -------------------------------
// This program calculates the final movie ticket cost based on
// show type, number of tickets, and user category (student/senior).

// Step 1: Declare input variables
let showType = "Evening";  // "Morning" or "Evening"
let numTickets = 4;        // number of tickets booked
let isStudent = false;     // true if student
let age = 65;              // age of the customer

// Step 2: Determine base ticket price
let ticketPrice;
if (showType === "Morning") {
  ticketPrice = 120;
} else if (showType === "Evening") {
  ticketPrice = 180;
} else {
  console.log("Invalid show type entered!");
  ticketPrice = 0;
}

// Step 3: Calculate the base total before discounts
let basePrice = ticketPrice * numTickets;

// Step 4: Determine discount rate
let discount = 0;
if (isStudent) {
  discount = 10; // 10% discount for students
} else if (age > 60) {
  discount = 20; // 20% discount for seniors
}

// Step 5: Apply discount
let discountedTotal = basePrice - (basePrice * (discount / 100));

// Step 6: Add service fee if booking more than 3 tickets
let serviceFee = 0;
if (numTickets > 3) {
  serviceFee = 50; // flat fee for bulk booking
}

// Step 7: Calculate final amount
let finalAmount = discountedTotal + serviceFee;

// Step 8: Display all results in console
console.log("Show Type: " + showType);
console.log("Tickets Booked: " + numTickets);
console.log("Ticket Price: ₹" + ticketPrice);
console.log("Base Price: ₹" + basePrice);
console.log("Discount Applied: " + discount + "%");
console.log("Discounted Total: ₹" + discountedTotal.toFixed(2));
console.log("Service Fee: ₹" + serviceFee);
console.log("Final Amount to Pay: ₹" + finalAmount.toFixed(2));

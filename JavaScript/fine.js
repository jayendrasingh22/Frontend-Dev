// 9. The Library Fine Calculator
// -------------------------------
// This program calculates total library fines for multiple late book returns
// based on the number of delayed days per book.

// Step 1: Array representing delay (in days) for each late book
let delayedBooks = [3, 7, 2, 12, 8]; // Example: 5 books delayed for these many days

// Step 2: Initialize total fine and loop through each delayed book
let totalFine = 0;

for (let i = 0; i < delayedBooks.length; i++) {
  let daysLate = delayedBooks[i];
  let fineForBook = 0;

  // Step 3: Apply fine rate based on delay period
  if (daysLate >= 1 && daysLate <= 5) {
    fineForBook = daysLate * 10;
  } else if (daysLate >= 6 && daysLate <= 10) {
    fineForBook = daysLate * 20;
  } else if (daysLate > 10) {
    fineForBook = daysLate * 50;
  }

  // Step 4: Add to total fine
  totalFine += fineForBook;

  // Print individual book fine
  console.log(`Book ${i + 1}: Delayed ${daysLate} days → Fine ₹${fineForBook}`);
}

// Step 5: Apply ₹200 penalty if user has more than 3 delayed books
let penalty = 0;
if (delayedBooks.length > 3) {
  penalty = 200;
  totalFine += penalty;
}

// Step 6: Display total summary
console.log("---------------------------------");
console.log("📚 LIBRARY FINE SUMMARY 📚");
console.log("---------------------------------");
console.log("Total Books Delayed: " + delayedBooks.length);
console.log("Penalty Applied: ₹" + penalty);
console.log("Total Fine to Pay: ₹" + totalFine);

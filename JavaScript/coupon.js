// 10. The Random Coupon Generator
// --------------------------------
// This program generates a random coupon number between 1 and 100,
// assigns a discount based on the range, and applies a bonus if the number is prime.

// Step 1: Generate a random number between 1 and 100
let couponNumber = Math.floor(Math.random() * 100) + 1;

// Step 2: Determine the discount reward based on the coupon number
let message = "";
if (couponNumber <= 30) {
  message = "🎉 You won a 10% discount!";
} else if (couponNumber <= 60) {
  message = "🎉 You won a 20% discount!";
} else if (couponNumber <= 90) {
  message = "🎉 You won a 30% discount!";
} else {
  message = "🎉 You won a 50% Mega Offer!";
}

// Step 3: Function to check if number is prime
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Step 4: Check for prime bonus
let bonusMessage = "";
if (isPrime(couponNumber)) {
  bonusMessage = "✨ Prime number bonus applied!";
}

// Step 5: Display the full result
console.log("🧾 RANDOM COUPON RESULT 🧾");
console.log("------------------------------");
console.log("Your Coupon Number: " + couponNumber);
console.log(message);
if (bonusMessage !== "") {
  console.log(bonusMessage);
}

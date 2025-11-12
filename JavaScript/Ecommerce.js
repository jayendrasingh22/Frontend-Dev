// ==============================================
// 1. The E-Commerce Delivery Estimator
// ==============================================

// Input variables (can be modified for testing)
let orderAmount = 450;     // Amount of the user's order
let isPremium = false;     // true if user is a premium member
let isRemote = true;       // true if delivery address is remote

// ==============================================
// Step 1: Initialize constants for business logic
// ==============================================
const deliveryFeeStandard = 50;  // Standard delivery charge for small orders
let deliveryFee = 0;             // Default: no delivery fee
let deliveryDays = 3;            // Default delivery time in days

// ==============================================
// Step 2: Determine delivery fee
// ==============================================

// If user is NOT a premium member:
if (!isPremium) {
  // If order amount is below ₹500, apply ₹50 delivery charge
  if (orderAmount < 500) {
    deliveryFee = deliveryFeeStandard;
  } else {
    // Orders ₹500 or above get free delivery
    deliveryFee = 0;
  }
} else {
  // Premium members always have free delivery
  deliveryFee = 0;
}

// ==============================================
// Step 3: Determine delivery time
// ==============================================

// Normally, delivery takes 3 days.
// If the address is remote, add 2 more days.
if (isRemote) {
  deliveryDays += 2;
}

// ==============================================
// Step 4: Calculate total cost
// ==============================================
let totalCost = orderAmount + deliveryFee;

// ==============================================
// Step 5: Display results in console
// ==============================================
console.log("=== E-Commerce Delivery Estimator ===");
console.log("Order Amount: ₹" + orderAmount);
console.log("Premium Member:", isPremium ? "Yes" : "No");
console.log("Remote Address:", isRemote ? "Yes" : "No");
console.log("------------------------------------");
console.log("Delivery Fee: ₹" + deliveryFee);
console.log("Total Cost: ₹" + totalCost);
console.log("Estimated Delivery Time: " + deliveryDays + " days");
console.log("====================================");

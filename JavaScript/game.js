// 6. The Game Reward System
// ---------------------------
// This program calculates the number of coins a player earns
// based on their level, performance score, and mission completion status.

// Step 1: Declare input variables
let level = 15;                 // Player's current level
let performanceScore = 60;      // Performance score (0–100)
let missionsCompleted = true;   // Whether all missions are completed

// Step 2: Calculate base coins using formula
// coins = (level * 50) + (performanceScore * 10)
let coins = (level * 50) + (performanceScore * 10);

// Step 3: Check if all missions are completed
if (missionsCompleted === true) {
  coins *= 2; // Double the coins if all missions completed
}

// Step 4: Assign rank based on total coins
let rank;
if (coins > 1000) {
  rank = "Elite";
} else {
  rank = "Regular";
}

// Step 5: Display all results neatly in console
console.log("🎮 GAME REWARD SUMMARY 🎮");
console.log("-----------------------------");
console.log("Player Level: " + level);
console.log("Performance Score: " + performanceScore);
console.log("Missions Completed: " + (missionsCompleted ? "Yes" : "No"));
console.log("Total Coins Earned: " + coins);
console.log("Player Rank: " + rank);

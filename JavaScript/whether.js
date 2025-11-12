// 5. The Weather Alert System
// ----------------------------
// This program checks if it's safe to hold an outdoor event
// based on temperature, humidity, and wind speed conditions.

// Step 1: Declare input variables
let temperature = 37;  // in °C
let humidity = 75;     // in %
let windSpeed = 20;    // in km/h

// Step 2: Check weather safety conditions
if (temperature > 35 && humidity > 70) {
  console.log("Cancel: Heat Alert.");
} else if (temperature < 10 || windSpeed > 40) {
  console.log("Cancel: Cold/Windy Alert.");
} else {
  console.log("Event Approved.");
}

// Step 3: Give clothing or safety advice based on temperature
if (temperature < 20) {
  console.log("Advice: Wear Jacket.");
} else if (temperature >= 20 && temperature <= 30) {
  console.log("Advice: Comfortable.");
} else if (temperature > 30) {
  console.log("Advice: Stay Hydrated.");
}

// 4. The Marks Analyzer
// ----------------------
// This program analyzes a student's marks across 5 subjects
// and determines their average, percentage, grade, and pass/fail status.

// Step 1: Declare an array to store marks of 5 subjects
let marks = [85, 92, 67, 78, 59];  // Example input (out of 100)

// Step 2: Initialize variables for total marks and fail count
let total = 0;
let failCount = 0;

// Step 3: Use a loop to process each mark
for (let i = 0; i < marks.length; i++) {
  total += marks[i]; // Add marks to total
  if (marks[i] < 40) { // Check for failed subject
    failCount++;
  }
}

// Step 4: Calculate average and percentage
let average = total / marks.length;
let percentage = (total / (marks.length * 100)) * 100;

// Step 5: Determine grade based on average
let grade;
if (average >= 90 && average <= 100) {
  grade = "A+";
} else if (average >= 75 && average <= 89) {
  grade = "A";
} else if (average >= 60 && average <= 74) {
  grade = "B";
} else if (average >= 40 && average <= 59) {
  grade = "C";
} else {
  grade = "Fail";
}

// Step 6: Check for repeat condition (2 or more failed subjects)
let remark;
if (failCount >= 2) {
  remark = "Repeat Year";
} else if (grade === "Fail") {
  remark = "Fail";
} else {
  remark = "Pass";
}

// Step 7: Display all results in console
console.log("Student Marks: ", marks);
console.log("Total Marks: " + total + "/500");
console.log("Average: " + average.toFixed(2));
console.log("Percentage: " + percentage.toFixed(2) + "%");
console.log("Grade: " + grade);
console.log("Failed Subjects: " + failCount);
console.log("Final Remark: " + remark);

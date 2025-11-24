let feedback = "Great product! Fast delivery and amazing sound quality!";
let wordCount = feedback.split(" ").length;
let result = feedback.includes("bad") || feedback.includes("poor") ? "Needs Improvement" : "Positive Feedback";
console.log(`Words: ${wordCount}, ${result}`);
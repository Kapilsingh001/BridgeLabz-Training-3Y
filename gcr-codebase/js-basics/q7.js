
/*
Q7: Customer Feedback Processor
*/

// Store the customer feedback
let feedback = "Great product! Fast delivery and amazing sound quality!";

// Split feedback into words and count them
let words = feedback.split(/\s+/);
let wordCount = words.length;

// Check whether the feedback contains negative words
let hasBad = feedback.toLowerCase().includes("bad");
let hasPoor = feedback.toLowerCase().includes("poor");

// Display the feedback and word count
console.log("Customer Feedback:", feedback);
console.log("Word Count:", wordCount);

// Decide the feedback category
if (hasBad || hasPoor) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}

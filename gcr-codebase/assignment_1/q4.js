
// Q4: Academic Performance Evaluator

// Store marks of five subjects (each out of 100)
let marks = [85, 78, 92, 65, 88];

// Calculate total marks
let totalMarks = 0;

for (let mark of marks) {
    totalMarks += mark;
}

// Calculate average and overall percentage
let average = totalMarks / marks.length;
let percentage = (totalMarks / (marks.length * 100)) * 100;

// Check if any subject has marks below 35
let hasFailed = marks.some(mark => mark < 35);

// Evaluate academic performance using logical operators
let result;

if (hasFailed || percentage < 50) {
    result = "Detained";
} else if (percentage >= 85) {
    result = "Promoted with Distinction";
} else if (percentage >= 50 && percentage < 85) {
    result = "Promoted";
}

// Display the results
console.log("Academic Performance Report");
console.log("---------------------------");
console.log(`Total Marks: ${totalMarks} / ${marks.length * 100}`);
console.log(`Average Marks: ${average.toFixed(2)}`);
console.log(`Overall Percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${result}`);

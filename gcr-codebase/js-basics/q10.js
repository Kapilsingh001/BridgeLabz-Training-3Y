
/*
Q10: Departmental Employee Evaluator
*/

// Create a nested array of departments and performance scores
const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

// Loop through each department
for (let department of departments) {
    // Extract department name and score
    let departmentName = department[0];
    let score = department[1];
    let performance;

    // Evaluate performance using nested if-else conditions
    if (score >= 90) {
        performance = "Excellent";
    } else if (score >= 75) {
        performance = "Good";
    } else if (score >= 60) {
        performance = "Average";
    } else {
        performance = "Needs Improvement";
    }

    // Print the result for each department
    console.log(
        `Department: ${departmentName} | Score: ${score} | Performance: ${performance}`
    );
}

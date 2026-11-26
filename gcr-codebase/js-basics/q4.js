
/*
Q4: Array Performance Analyzer
*/

// Generate an array of 8 random scores between 30 and 100
let scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

// Find the highest and lowest scores
let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

// Calculate the average using reduce()
let totalScore = scores.reduce((sum, score) => sum + score, 0);
let averageScore = totalScore / scores.length;

// Find students who passed (score >= 50)
let passedStudents = scores.filter(score => score >= 50);
let passCount = passedStudents.length;

// Display the full summary
let summary = `
===== Student Performance Report =====
All Scores: ${scores.map(score => score).join(", ")}
Highest Score: ${highestScore}
Lowest Score: ${lowestScore}
Average Score: ${averageScore.toFixed(2)}
Students Passed: ${passCount}
Students Failed: ${scores.length - passCount}
======================================
`;

console.log(summary);

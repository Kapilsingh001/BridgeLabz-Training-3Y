
/*
Q9: Odd-Even Number Analyzer
*/

// Create an array of numbers from 1 to 30
const numbers = [];

for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

// Create a new array to store results
const results = [];

for (let number of numbers) {
    // Check divisibility by both 3 and 5 first
    if (number % 3 === 0 && number % 5 === 0) {
        results.push(`${number}: FizzBuzz`);
    } 
    // Otherwise, check if the number is even
    else if (number % 2 === 0) {
        results.push(`${number}: Even`);
    } 
    // If neither condition matches, the number is odd
    else {
        results.push(`${number}: Odd`);
    }
}

// Display the results
console.log("Odd-Even Number Analysis:");
console.log(results.join("\n"));

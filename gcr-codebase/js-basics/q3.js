
/*
Q3: Math Utility Dashboard
*/

// Declare the number
let x = 16.75;

// Calculate mathematical values
let roundedValue = Math.round(x);
let squareRoot = Math.sqrt(x);
let cube = Math.pow(x, 3);

// Generate a random integer between 10 and 50 (inclusive)
let randomNumber = Math.floor(Math.random() * 41) + 10;

// Display individual results
console.log("Original Number:", x);
console.log("Rounded Value:", roundedValue);
console.log("Square Root:", squareRoot);
console.log("Power (x^3):", cube);
console.log("Random Number (10-50):", randomNumber);

// Display a formatted summary using a template literal
let summary = `
----- Math Utility Dashboard -----
Original Number: ${x}
Rounded Value: ${roundedValue}
Square Root: ${squareRoot.toFixed(2)}
Cube: ${cube}
Random Number: ${randomNumber}
----------------------------------
`;

console.log(summary);


"use strict";

// Q6: Pyramid Pattern Generator

// Get the number of rows from user input
// Default value is 5
const input = ""; // Change this value to test different row counts
const rows = input === "" ? 5 : Number(input);

// Validate the number of rows
if (!Number.isInteger(rows) || rows < 1) {
    console.log("Please enter a valid positive integer.");
} else {

    // Generate the pyramid pattern
    for (let i = 1; i <= rows; i++) {
        let pattern = "";

        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }

        console.log(pattern.trim());
    }
}

// ------------------------------------
// Hoisting experiment: let vs var
// ------------------------------------

// Using let: each loop iteration has its own block-scoped variable
console.log("\nUsing let:");
for (let i = 1; i <= 3; i++) {
    console.log(i);
}

// Using var: the variable is function-scoped
console.log("\nUsing var:");
for (var k = 1; k <= 3; k++) {
    console.log(k);
}

console.log("Final value of k:", k);

// Uncommenting the following line would cause a
// ReferenceError because i is block-scoped.
// console.log(i);

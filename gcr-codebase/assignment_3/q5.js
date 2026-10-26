
"use strict";

// Q5: Hoisting Lab - The Sequence Trap

// Function declarations are hoisted, but let variables
// cannot be accessed before their initialization.

// Declare variables before using them
var score = 50;
let status = "ready";

// Function declaration
function announce() {
    console.log("Game started!");
}

// Function declaration
function startGame() {
    console.log(status);
}

// Display score
console.log(score);

// Call the functions
announce();
startGame();

// ------------------------------------
// Rewrite using arrow functions
// ------------------------------------

const announceArrow = () => {
    console.log("Game started using arrow function!");
};

const startGameArrow = () => {
    console.log(status);
};

// Call arrow functions after initialization
announceArrow();
startGameArrow();

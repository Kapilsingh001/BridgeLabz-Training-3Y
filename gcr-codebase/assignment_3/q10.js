
"use strict";

// Q10: Nested Hoisting and Closures

// ------------------------------------------
// 1. Nested functions and hoisting
// ------------------------------------------

function outer() {
    // Hoisted var is initialized as undefined
    console.log("Outer count before assignment:", count);

    var count = 5;

    console.log("Outer count after assignment:", count);

    function inner() {
        // Inner function accesses outer count
        console.log("Inner count before assignment:", count);

        // This declares a separate local variable
        var count = 10;

        console.log("Inner count after assignment:", count);
    }

    inner();

    // Outer count remains unchanged
    console.log("Outer count after inner():", count);
}

console.log("===== NESTED FUNCTION =====");
outer();


// ------------------------------------------
// 2. Convert inner function to an arrow
// ------------------------------------------

function outerArrowDemo() {
    var count = 5;

    const innerArrow = () => {
        // Arrow function uses the outer count
        console.log("Arrow function count:", count);

        // Uncommenting the next line creates a new
        // local variable that shadows the outer count.
        // var count = 10;
    };

    innerArrow();
}

console.log("\n===== ARROW FUNCTION =====");
outerArrowDemo();


// ------------------------------------------
// 3. Closure demonstration
// ------------------------------------------

function createCounter() {
    let count = 0;

    // Inner function remembers the outer variable
    return function () {
        count++;
        console.log("Closure count:", count);
    };
}

console.log("\n===== CLOSURE =====");

const counter = createCounter();

counter();
counter();
counter();

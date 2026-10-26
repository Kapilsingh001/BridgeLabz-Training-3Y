
// Q8: Strict Mode Showdown

// ------------------------------------------
// 1. WITHOUT STRICT MODE
// ------------------------------------------

console.log("===== WITHOUT STRICT MODE =====");

function demoWithoutStrict(a, b) {
    // Declare the variable to avoid creating an accidental global
    var total = 10;

    console.log("Total:", total);

    // Duplicate parameters are allowed in non-strict mode
    console.log("Parameters:", a, b);
}

demoWithoutStrict(5, 10);


// ------------------------------------------
// 2. STRICT MODE DEMONSTRATION
// ------------------------------------------

console.log("\n===== WITH STRICT MODE =====");

function demoWithStrict() {
    "use strict";

    // Strict mode requires variables to be declared
    let total = 10;

    console.log("Total:", total);

    // Uncomment separately to test strict-mode errors:
    // undeclaredVariable = 20; // ReferenceError
    // delete total;            // SyntaxError
}

demoWithStrict();


// ------------------------------------------
// 3. CORRECT VERSION USING ES6
// ------------------------------------------

console.log("\n===== CORRECT ES6 VERSION =====");

function demoCorrect(firstNumber, secondNumber) {
    "use strict";

    const total = firstNumber + secondNumber;

    console.log("First Number:", firstNumber);
    console.log("Second Number:", secondNumber);
    console.log("Total:", total);
}

demoCorrect(5, 10);

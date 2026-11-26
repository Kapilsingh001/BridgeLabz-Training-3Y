
"use strict";

// Q7: Smart Calculator

// Available operations
const operations = ["add", "divide", "power", "root", "subtract"];

// Input numbers
const num1 = 25;
const num2 = 0;

// Custom error for invalid operations
class InvalidOperationError extends Error {
    constructor(operation) {
        super(`Invalid operation: ${operation}`);
        this.name = "InvalidOperationError";
    }
}

// Custom error for invalid calculations
class CalculationError extends Error {
    constructor(message) {
        super(message);
        this.name = "CalculationError";
    }
}

// Select the operation to perform
const operation = "divide";

// Store the result
let result;

try {
    // Handle operations using switch
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;

        case "subtract":
            result = num1 - num2;
            break;

        case "divide":
            if (num2 === 0) {
                throw new CalculationError("Cannot divide by zero.");
            }
            result = num1 / num2;
            break;

        case "power":
            result = Math.pow(num1, num2);
            break;

        case "root":
            if (num1 < 0) {
                throw new CalculationError(
                    "Cannot calculate the square root of a negative number."
                );
            }
            result = Math.sqrt(num1);
            break;

        default:
            throw new InvalidOperationError(operation);
    }

    // Display the successful calculation
    console.log("===== CALCULATOR SUMMARY =====");
    console.log(`Operation: ${operation}`);
    console.log(`First Number: ${num1}`);
    console.log(`Second Number: ${num2}`);
    console.log(`Result: ${result}`);

} catch (error) {
    // Display a formatted error summary
    console.log("===== CALCULATOR SUMMARY =====");
    console.log(`Operation: ${operation}`);
    console.log(`Error Type: ${error.name}`);
    console.log(`Message: ${error.message}`);
}

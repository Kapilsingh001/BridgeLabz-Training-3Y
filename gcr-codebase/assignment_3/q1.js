
"use strict";

// Q1: Dynamic Data Parser

// Mixed data received from an API
const apiData = [
    "25", "true", "false", "NaN", " ", "100px",
    "3.14", null, undefined
];

// Arrays to store valid numeric values and invalid values
const validNumbers = [];
const invalidValues = [];

// Loop through each value from the API
for (let value of apiData) {

    // Convert each value into Number, Boolean, and String forms
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    // Check whether the numeric conversion is valid
    // Empty strings/spaces are treated as invalid for this assignment
    const isInvalidNumber =
        value === null ||
        value === undefined ||
        (typeof value === "string" && value.trim() === "") ||
        Number.isNaN(numberValue);

    // Store invalid values separately
    if (isInvalidNumber) {
        invalidValues.push({
            originalValue: stringValue,
            numberForm: numberValue,
            booleanForm: booleanValue,
            stringForm: stringValue
        });
    } else {
        // Store valid numeric values
        validNumbers.push({
            originalValue: stringValue,
            numberForm: numberValue,
            booleanForm: booleanValue,
            stringForm: stringValue
        });
    }
}

// Print the valid numeric data
console.log("===== VALID NUMERIC DATA =====");

for (const item of validNumbers) {
    console.log(
        `Original: ${item.originalValue} | ` +
        `Number: ${item.numberForm} | ` +
        `Boolean: ${item.booleanForm} | ` +
        `String: "${item.stringForm}"`
    );
}

// Print the invalid data separately
console.log("\\n===== INVALID DATA =====");

for (const item of invalidValues) {
    console.log(
        `Original: ${item.originalValue} | ` +
        `Number: ${item.numberForm} | ` +
        `Boolean: ${item.booleanForm} | ` +
        `String: "${item.stringForm}"`
    );
}

// Print summary counts
console.log("\\n===== SUMMARY =====");
console.log(`Valid numeric entries: ${validNumbers.length}`);
console.log(`Invalid entries: ${invalidValues.length}`);

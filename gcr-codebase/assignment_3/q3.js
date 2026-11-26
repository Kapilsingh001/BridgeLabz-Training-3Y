"use strict";

// Q3: Transaction Validator

// Given transaction data
const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

// Arrays to store valid and invalid transactions
const valid = [];
const invalid = [];

// Loop through each transaction
for (const transaction of transactions) {
    try {
        // Check for null entries
        if (transaction === null) {
            throw new Error("NULL_ENTRY");
        }

        // Check for missing ID or amount
        if (
            transaction.id === undefined ||
            transaction.amount === undefined
        ) {
            throw new Error("MISSING_DATA");
        }

        // Check whether the amount is a valid number
        if (
            typeof transaction.amount !== "number" ||
            !Number.isFinite(transaction.amount)
        ) {
            throw new Error("INVALID_AMOUNT");
        }

        // Check for negative amounts
        if (transaction.amount < 0) {
            throw new Error("NEGATIVE_AMOUNT");
        }

        // Transaction passed all validation checks
        valid.push(transaction);

        console.log(
            `Transaction ${transaction.id} is valid.`
        );

    } catch (error) {
        // Categorize each failed transaction
        let reason;

        switch (error.message) {
            case "NULL_ENTRY":
                reason = "Null transaction entry";
                break;

            case "MISSING_DATA":
                reason = "Missing transaction ID or amount";
                break;

            case "NEGATIVE_AMOUNT":
                reason = "Negative transaction amount";
                break;

            case "INVALID_AMOUNT":
                reason = "Amount must be a valid number";
                break;

            default:
                reason = "Unknown transaction error";
        }

        // Store the invalid transaction and its error
        invalid.push({
            transaction: transaction,
            reason: reason
        });

        console.log(`Invalid transaction: ${reason}`);
    }
}

// Print the final report
console.log("\n===== TRANSACTION REPORT =====");

console.log("\nValid Transactions:");
for (const transaction of valid) {
    console.log(
        `ID: ${transaction.id} | Amount: Rs. ${transaction.amount}`
    );
}

console.log("\nInvalid Transactions:");
for (const item of invalid) {
    console.log(
        `Reason: ${item.reason} | ` +
        `Data: ${JSON.stringify(item.transaction)}`
    );
}

console.log("\n===== SUMMARY =====");
console.log(`Successful Transactions: ${valid.length}`);
console.log(`Failed Transactions: ${invalid.length}`);
console.log(`Total Transactions: ${transactions.length}`);

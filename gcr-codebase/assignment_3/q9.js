
"use strict";

// Q9: JSON Audit

// Raw JSON data received from an API
const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

// Array to store valid users
const cleanData = [];

// Loop through each entry
for (let i = 0; i < rawData.length; i++) {
    try {
        // Parse the JSON string
        const userData = JSON.parse(rawData[i]);

        // Check for missing required keys
        if (
            userData.user === undefined ||
            userData.age === undefined
        ) {
            throw new Error("Missing required key: user or age");
        }

        // Convert age to a number
        const age = Number(userData.age);

        // Validate age
        if (!Number.isFinite(age) || age < 0) {
            throw new Error("Invalid age value");
        }

        // Store valid users aged 18 or older
        if (age >= 18) {
            cleanData.push({
                user: userData.user,
                age: age
            });
        } else {
            console.log(
                `Line ${i + 1}: User is under 18 and was filtered out.`
            );
        }

    } catch (error) {
        // Log the error and its line number
        console.log(
            `Line ${i + 1}: Error - ${error.message}`
        );
    }
}

// Display the cleaned data
console.log("\n===== CLEAN DATA =====");
console.log(cleanData);

// Display the summary
console.log("\n===== AUDIT SUMMARY =====");
console.log(`Total entries: ${rawData.length}`);
console.log(`Valid users aged 18 or older: ${cleanData.length}`);
console.log(`Failed or filtered entries: ${rawData.length - cleanData.length}`);

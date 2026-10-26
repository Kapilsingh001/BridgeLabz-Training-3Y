
// Q2: Multi-Type Data Summary

// Declare variables of different data types
let userName = "Kapil";               // String
let userAge = 21;                      // Number
let isStudent = true;                 // Boolean
let skills = ["Java", "JavaScript"];  // Array
let userDetails = {                    // Object
    name: "Kapil",
    course: "B.Tech CSE"
};
let middleName = null;                 // Null
let address;                           // Undefined

// Create an array containing labels, values, and types
let dataSummary = [
    {
        label: "User Name",
        value: userName,
        type: typeof userName
    },
    {
        label: "User Age",
        value: userAge,
        type: typeof userAge
    },
    {
        label: "Is Student",
        value: isStudent,
        type: typeof isStudent
    },
    {
        label: "Skills",
        value: skills.join(", "),
        type: Array.isArray(skills) ? "array" : typeof skills
    },
    {
        label: "User Details",
        value: JSON.stringify(userDetails),
        type: typeof userDetails
    },
    {
        label: "Middle Name",
        value: middleName,
        type: "null"
    },
    {
        label: "Address",
        value: address,
        type: typeof address
    }
];

// Print the formatted report using one console.table() statement
console.table(dataSummary);

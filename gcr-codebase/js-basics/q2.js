
/*
Q2: String Manipulation Report
*/

// Store the product name with extra spaces
let productName = "  wireless headphones PRO  ";

// Remove extra spaces and convert to lowercase
let cleanedName = productName.trim().toLowerCase();

// Capitalize the first letter of each word
cleanedName = cleanedName
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Replace "Pro" with "Pro Edition"
cleanedName = cleanedName.replace("Pro", "Pro Edition");

// Display the cleaned product title
console.log("Product Title:", cleanedName);

// Display the length of the cleaned title
console.log("Title Length:", cleanedName.length);

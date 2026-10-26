
// Q6: Progressive Discount System

// Input the total purchase amount
let purchaseAmount = 7500;

// Declare variables for discount
let discountPercentage = 0;
let discountAmount = 0;

// Apply discount based on purchase amount
if (purchaseAmount >= 10000) {
    discountPercentage = 25;
} else if (purchaseAmount >= 5000) {
    discountPercentage = 15;
} else if (purchaseAmount >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

// Calculate the discount amount
discountAmount = purchaseAmount * discountPercentage / 100;

// Calculate the final price after discount
let finalPrice = purchaseAmount - discountAmount;

// Round values using Math.round()
discountAmount = Math.round(discountAmount);
finalPrice = Math.round(finalPrice);

// Display the purchase summary
console.log("Progressive Discount Summary");
console.log("----------------------------");
console.log(`Original Total: Rs. ${purchaseAmount}`);
console.log(`Discount Percentage: ${discountPercentage}%`);
console.log(`Discount Amount: Rs. ${discountAmount}`);
console.log(`Final Price After Discount: Rs. ${finalPrice}`);


/*
Q8: Dynamic Discount Evaluator
*/

// Create an array of product objects
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

// Calculate original cart value using reduce()
const originalTotal = cart.reduce((sum, product) => {
    return sum + product.price;
}, 0);

// Store the total after individual product discounts
let discountedTotal = 0;

// Apply category-based discounts
for (const product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10; // 10% discount
    } else if (product.category === "fashion") {
        discountRate = 0.05; // 5% discount
    }

    // Calculate the price after discount
    const finalPrice = product.price * (1 - discountRate);
    discountedTotal += finalPrice;

    console.log(
        `${product.item}: Original = ₹${product.price}, ` +
        `Discounted = ₹${finalPrice.toFixed(2)}`
    );
}

// Apply an extra 5% discount if discounted cart total exceeds ₹50,000
let finalTotal = discountedTotal;

if (discountedTotal > 50000) {
    finalTotal = discountedTotal * 0.95;
    console.log("Extra 5% cart discount applied.");
}

// Display the summary
console.log("\n===== Cart Summary =====");
console.log("Original Cart Total: ₹" + originalTotal.toFixed(2));
console.log("After Category Discounts: ₹" + discountedTotal.toFixed(2));
console.log("Final Cart Total: ₹" + finalTotal.toFixed(2));

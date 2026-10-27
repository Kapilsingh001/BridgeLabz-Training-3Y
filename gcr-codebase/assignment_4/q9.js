
"use strict";

// Q9: Shopping Cart Total (Classes + RegExp)

// Create a Cart class
class Cart {
    constructor() {
        this.items = [];
    }

    // Add an item to the cart
    addItem(name, price, quantity) {
        this.items.push({
            name: name,
            price: price,
            quantity: quantity
        });
    }

    // Calculate the total price of all items
    getTotal() {
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    }

    // Validate coupon and calculate the final total
    applyCoupon(coupon) {
        // Coupon must be SAVE20 or DISC10
        const couponRegex = /^(SAVE20|DISC10)$/;

        if (!couponRegex.test(coupon)) {
            console.log("Invalid coupon code!");
            return this.getTotal();
        }

        // Select discount percentage
        let discountPercentage;

        if (coupon === "SAVE20") {
            discountPercentage = 20;
        } else {
            discountPercentage = 10;
        }

        // Calculate discount and final price
        const originalTotal = this.getTotal();
        const discountAmount =
            originalTotal * discountPercentage / 100;

        const finalTotal = originalTotal - discountAmount;

        console.log(`Coupon Applied: ${coupon}`);
        console.log(`Discount: ${discountPercentage}%`);
        console.log(`Discount Amount: Rs. ${discountAmount.toFixed(2)}`);
        console.log(`Final Total: Rs. ${finalTotal.toFixed(2)}`);

        return finalTotal;
    }

    // Display cart items
    displayCart() {
        console.log("===== SHOPPING CART =====");

        for (const item of this.items) {
            console.log(
                `${item.name} | Price: Rs. ${item.price} | ` +
                `Quantity: ${item.quantity} | ` +
                `Subtotal: Rs. ${(item.price * item.quantity).toFixed(2)}`
            );
        }

        console.log(`Original Total: Rs. ${this.getTotal().toFixed(2)}`);
    }
}

// Create a shopping cart
const cart = new Cart();

// Add items
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 800, 2);
cart.addItem("Keyboard", 1500, 1);

// Display cart and calculate total
cart.displayCart();

// Apply a coupon
console.log("\n===== COUPON SUMMARY =====");
cart.applyCoupon("SAVE20");

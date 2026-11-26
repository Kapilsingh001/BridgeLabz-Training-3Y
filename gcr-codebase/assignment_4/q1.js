
"use strict";

// Q1: E-Commerce Product Manager (Classes + Objects)

// Create a Product class
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Apply a discount to the product price
    applyDiscount(discountPercentage) {
        this.price -= this.price * discountPercentage / 100;
    }

    // Display formatted product details
    displayDetails() {
        return `ID: ${this.id} | Name: ${this.name} | ` +
            `Price: Rs. ${this.price.toFixed(2)} | ` +
            `Category: ${this.category}`;
    }
}

// Create multiple product objects
const products = [
    new Product(1, "Laptop", 55000, "Electronics"),
    new Product(2, "Headphones", 1500, "Electronics"),
    new Product(3, "Keyboard", 900, "Accessories"),
    new Product(4, "Smartphone", 25000, "Electronics"),
    new Product(5, "Mouse", 700, "Accessories")
];

// Apply a 10% discount to the laptop
products[0].applyDiscount(10);

// Display all products
console.log("===== ALL PRODUCTS =====");

for (const product of products) {
    console.log(product.displayDetails());
}

// Filter and display products with price greater than Rs. 1000
console.log("\n===== PRODUCTS ABOVE Rs. 1000 =====");

const expensiveProducts = products.filter(
    product => product.price > 1000
);

for (const product of expensiveProducts) {
    console.log(product.displayDetails());
}

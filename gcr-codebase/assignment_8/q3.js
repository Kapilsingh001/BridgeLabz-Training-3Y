// Product constructor function
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Prototype method: shared by ALL Product objects (only one copy in memory)
// Returns the new price after applying the discount percentage
Product.prototype.applyDiscount = function (percent) {

    if (percent < 0 || percent > 100) {
        throw new Error("Discount must be between 0 and 100.");
    }

    const discountAmount = (this.price * percent) / 100;
    return this.price - discountAmount;
};


// Display output on webpage and console
function displayOutput(message) {
    console.log(message);
    document.getElementById("output").innerHTML += message + "<br>";
}

// Main function
function runAssignment() {

    document.getElementById("output").innerHTML = "";

    // Creating 3 products
    const laptop = new Product("Laptop", 60000);
    const headphones = new Product("Headphones", 2500);
    const smartwatch = new Product("Smartwatch", 8000);

    // Applying different discounts
    const discounts = [
        { product: laptop, percent: 10 },
        { product: headphones, percent: 25 },
        { product: smartwatch, percent: 15 }
    ];

    discounts.forEach(({ product, percent }) => {
        const newPrice = product.applyDiscount(percent);
        displayOutput(product.name + ": Rs." + product.price +
            " -> " + percent + "% off -> Rs." + newPrice);
    });

    displayOutput("");
    displayOutput("Is applyDiscount shared via prototype? " +
        (laptop.applyDiscount === headphones.applyDiscount));
}

/*
    How abstraction helps simplify operations:

    - The user of a Product only calls product.applyDiscount(percent).
      They do not need to know HOW the discount is calculated
      (percentage math, validation, etc.) - those details are hidden.

    - If the discount logic changes later (e.g. add tax, round off),
      we update it in ONE place (Product.prototype) and every product
      automatically uses the new logic.

    - Because the method lives on the prototype, all products share a
      single function instead of each object having its own copy.
*/

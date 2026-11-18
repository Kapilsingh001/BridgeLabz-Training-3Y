// Inventory with products from multiple categories
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 55000, stock: 4 },
    { id: 2, name: "Smartphone", category: "Electronics", price: 20000, stock: 15 },
    { id: 3, name: "T-Shirt", category: "Clothing", price: 499, stock: 50 },
    { id: 4, name: "Jeans", category: "Clothing", price: 1299, stock: 3 },
    { id: 5, name: "Rice (5kg)", category: "Grocery", price: 350, stock: 8 },
    { id: 6, name: "Olive Oil", category: "Grocery", price: 750, stock: 2 },
    { id: 7, name: "Office Chair", category: "Furniture", price: 6500, stock: 6 }
];

const LOW_STOCK_LIMIT = 5;


// 1. filter(): products whose stock is at or below the limit
function getLowStockProducts(productList, limit = LOW_STOCK_LIMIT) {
    return productList.filter((product) => product.stock <= limit);
}

// 2. sort(): products sorted by price (low to high)
// [...productList] makes a copy so the original array is not changed
function sortProductsByPrice(productList) {
    return [...productList].sort((a, b) => a.price - b.price);
}

// 3. reduce(): total value = sum of (price x stock)
function calculateTotalInventoryValue(productList) {
    return productList.reduce((total, product) => total + product.price * product.stock, 0);
}

// 4. reduce() + object grouping: { category: [product names] }
function groupByCategory(productList) {
    return productList.reduce((groups, product) => {

        // Create an empty array the first time a category appears
        if (!groups[product.category]) {
            groups[product.category] = [];
        }

        groups[product.category].push(product.name);
        return groups;
    }, {});
}


// Display output on webpage and console
function displayOutput(message) {
    console.log(message);
    document.getElementById("output").innerHTML += message + "<br>";
}

// Main function
function runAssignment() {

    document.getElementById("output").innerHTML = "";

    displayOutput("<b>1. Low Stock Products (stock " + LOW_STOCK_LIMIT + " or less):</b>");
    getLowStockProducts(products).forEach((product) => {
        displayOutput("- " + product.name + " (stock: " + product.stock + ")");
    });

    displayOutput("");
    displayOutput("<b>2. Products Sorted by Price:</b>");
    sortProductsByPrice(products).forEach((product) => {
        displayOutput("- " + product.name + ": Rs." + product.price);
    });

    displayOutput("");
    displayOutput("<b>3. Total Inventory Value:</b> Rs." +
        calculateTotalInventoryValue(products).toLocaleString("en-IN"));

    displayOutput("");
    displayOutput("<b>4. Products Grouped by Category:</b>");
    const groupedProducts = groupByCategory(products);
    for (const category in groupedProducts) {
        displayOutput("- " + category + ": " + groupedProducts[category].join(", "));
    }
}

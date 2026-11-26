// Restaurant menu with prices
const menuItems = [
    { name: "Pizza", price: 250 },
    { name: "Burger", price: 120 },
    { name: "Pasta", price: 180 },
    { name: "Cold Coffee", price: 90 },
    { name: "French Fries", price: 80 }
];


// Calculates the bill for the ordered items
function calculateBill(orderItems) {

    if (!Array.isArray(orderItems) || orderItems.length === 0) {
        throw new Error("Order is empty. Please add at least one item.");
    }

    // map(): convert each ordered item name into its price
    const priceList = orderItems.map((itemName) => {

        const menuItem = menuItems.find(
            (item) => item.name.toLowerCase() === itemName.toLowerCase()
        );

        // Throw an error if the item is not on the menu
        if (!menuItem) {
            throw new Error("'" + itemName + "' is not available on the menu.");
        }

        return menuItem.price;
    });

    // reduce(): add all prices to get the total
    const totalAmount = priceList.reduce((total, price) => total + price, 0);

    return { priceList, totalAmount };
}


// Display output on webpage and console
function displayOutput(message) {
    console.log(message);
    document.getElementById("output").innerHTML += message + "<br>";
}

// Places an order and handles errors with try-catch
function placeOrder(orderItems) {

    displayOutput("Order: " + (orderItems.length ? orderItems.join(", ") : "(empty)"));

    try {
        const bill = calculateBill(orderItems);
        displayOutput("Price List: " + bill.priceList.map((price) => "Rs." + price).join(", "));
        displayOutput("Total Bill: Rs." + bill.totalAmount);
    } catch (error) {
        displayOutput("Error: " + error.message);
    }

    displayOutput("");
}

// Main function
function runAssignment() {

    document.getElementById("output").innerHTML = "";

    displayOutput("Menu: " + menuItems.map((item) => item.name + " (Rs." + item.price + ")").join(", "));
    displayOutput("");

    placeOrder(["Pizza", "Burger", "Cold Coffee"]);   // Valid order
    placeOrder(["Pasta", "Noodles"]);                 // Invalid item
    placeOrder([]);                                   // Empty order
}

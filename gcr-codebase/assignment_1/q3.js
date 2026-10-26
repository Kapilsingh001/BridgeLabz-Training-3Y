
// Q3: Monthly Expense Tracker

// Store monthly expenses for five categories
let expenses = [5000, 1500, 6000, 2000, 1000];

// Calculate the total expenses
let total = 0;

for (let expense of expenses) {
    total += expense;
}

// Calculate the average expense
let average = total / expenses.length;

// Add 10% tax to the total using assignment operator
let tax = total * 0.10;
total += tax;

// Display the expense report
console.log("Monthly Expense Report");
console.log("----------------------");
console.log(`Total Expenses: Rs. ${(total - tax).toFixed(2)}`);
console.log(`Average Expense: Rs. ${average.toFixed(2)}`);
console.log(`Tax (10%): Rs. ${tax.toFixed(2)}`);
console.log(`Final Amount After Tax: Rs. ${total.toFixed(2)}`);

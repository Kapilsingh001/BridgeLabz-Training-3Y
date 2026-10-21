
/*
Q1: Scope Conflict Resolver
*/

// Global variable
let bonus = 5000;

// Function to calculate salary
function calculateSalary(isPermanent) {
    // Local variable
    let salary = 40000;

    // Add bonus only if the employee is permanent
    if (isPermanent === true) {
        salary = salary + bonus;
    }

    // Print total salary
    console.log("Permanent employee:", isPermanent);
    console.log("Total salary:", salary);
}

// Demonstrate both cases
calculateSalary(true);
calculateSalary(false);

// Check the global variable outside the function
console.log("Global bonus:", bonus);

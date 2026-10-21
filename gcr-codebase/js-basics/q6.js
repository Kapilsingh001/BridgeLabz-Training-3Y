
/*
Q6: Event-Based Counter Simulation
*/

// Initialize the counter
let count = 0;

// Function to increase the counter
function increment() {
    count++;
    console.log("Count after increment:", count);
}

// Function to decrease the counter
function decrement() {
    count--;
    console.log("Count after decrement:", count);
}

// Nested function to demonstrate scope
function counterDetails() {
    console.log("Current count inside outer function:", count);

    function showCount() {
        // The nested function can access the outer/global count
        console.log("Current count inside nested function:", count);
    }

    showCount();
}

// Simulate click events by calling functions manually
console.log("Initial count:", count);

increment();
increment();
increment();

decrement();

counterDetails();

console.log("Final count:", count);

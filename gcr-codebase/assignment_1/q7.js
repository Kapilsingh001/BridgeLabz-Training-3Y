
// Q7: Smart Guessing Game (Number Range)

// Generate a random secret number between 1 and 50
let secretNumber = Math.floor(Math.random() * 50) + 1;

// Store a test guess
let userGuess = 25;

// Calculate the difference between the guess and secret number
let difference = Math.abs(userGuess - secretNumber);

// Check the user's guess using nested if conditions
if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    if (difference <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high!");
    } else {
        console.log("Too low!");
    }
}

// Display the secret number for testing
console.log(`Secret number: ${secretNumber}`);

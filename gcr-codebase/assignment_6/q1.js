// Returns a random delay between 1000ms and 2000ms
function getRandomDelay() {
    return 1000 + Math.floor(Math.random() * 1000);
}

// Step 1: Boil water
function boilWater() {
    return new Promise((resolve, reject) => {
        displayOutput("Boiling water...");

        setTimeout(() => {
            // Simulate random failure (20% chance)
            if (Math.random() < 0.2) {
                reject("Kettle stopped working while boiling water!");
            } else {
                resolve("Water boiled");
            }
        }, getRandomDelay());
    });
}

// Step 2: Brew coffee
function brewCoffee() {
    return new Promise((resolve, reject) => {
        displayOutput("Brewing coffee...");

        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Ran out of coffee beans!");
            } else {
                resolve("Coffee brewed");
            }
        }, getRandomDelay());
    });
}

// Step 3: Pour into cup
function pourIntoCup() {
    return new Promise((resolve, reject) => {
        displayOutput("Pouring into cup...");

        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Cup slipped and broke!");
            } else {
                resolve("Coffee poured");
            }
        }, getRandomDelay());
    });
}

// Display output on webpage and console
function displayOutput(message) {
    console.log(message);
    document.getElementById("output").innerHTML += message + "<br>";
}

// Main function
function runAssignment() {

    document.getElementById("output").innerHTML = "";

    // Promise chaining: each .then() waits for the previous step to resolve
    boilWater()
        .then((result) => {
            displayOutput(result);
            return brewCoffee();
        })
        .then((result) => {
            displayOutput(result);
            return pourIntoCup();
        })
        .then((result) => {
            displayOutput(result);
            displayOutput("Coffee ready for the team!");
        })
        // If any step rejects, control jumps directly to .catch()
        .catch((error) => {
            displayOutput("Error: " + error);
            displayOutput("Coffee preparation failed. Please try again.");
        });
}

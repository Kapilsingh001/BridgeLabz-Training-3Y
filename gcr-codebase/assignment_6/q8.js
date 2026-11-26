const MAX_ATTEMPTS = 3;

// Simulated order API that fails 50% of the time
function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                reject("Server error");
            } else {
                resolve("Order submitted");
            }
        }, 500);
    });
}

// Tries to submit the order up to MAX_ATTEMPTS times
async function processOrder() {

    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
        try {
            // await pauses the loop until submitOrder() settles
            const result = await submitOrder();
            displayOutput("Attempt " + attempt + ": Success");
            return result;
        } catch (error) {
            displayOutput("Attempt " + attempt + ": Failed");
        }
    }

    // All attempts failed
    throw new Error("Order could not be processed");
}

// Display output on webpage and console
function displayOutput(message) {
    console.log(message);
    document.getElementById("output").innerHTML += message + "<br>";
}

// Main function
async function runAssignment() {

    document.getElementById("output").innerHTML = "";

    displayOutput("Processing order...");

    // Handle the final failure gracefully
    try {
        const result = await processOrder();
        displayOutput(result + " successfully!");
    } catch (error) {
        displayOutput("Error: " + error.message);
    }
}

// Original callback-based function (old code)
function fetchBugs(callback) {
    setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}

// New Promise-based version
function getBugs() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            // Boolean to simulate random API failure
            const isApiFailed = Math.random() < 0.3;

            if (isApiFailed) {
                reject("Bug API failed to respond!");
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
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

    displayOutput("Fetching bugs...");

    getBugs()
        .then((bugs) => {

            // Neatly log bugs in a table (open browser console to see it)
            console.table(bugs);

            displayOutput("Bugs fetched successfully (see console.table in console):");

            bugs.forEach((bug, index) => {
                displayOutput((index + 1) + ". " + bug);
            });
        })
        .catch((error) => {
            displayOutput("Error: " + error);
        });
}

// Function that displays the ending message
function showEndMessage() {
    displayOutput("Welcome to the course!");
}

// Function that accepts name and callback
function greetUser(name, callback) {

    displayOutput("Hello " + name);

    // Calling the callback function
    callback();
}

// Display output on webpage
function displayOutput(message) {
    document.getElementById("output").innerHTML += message + "<br>";
}

// Main function
function runAssignment() {

    document.getElementById("output").innerHTML = "";

    // Passing showEndMessage as callback
    greetUser("Kapil", showEndMessage);
}
// Function that returns another function
function makeMultiplier(multiplier) {

    // Inner function remembers multiplier
    return function(number) {
        return number * multiplier;
    };
}

function displayOutput(message) {
    document.getElementById("output").innerHTML += message + "<br>";
}

function runAssignment() {

    document.getElementById("output").innerHTML = "";

    // Creating multiplier functions
    const triple = makeMultiplier(3);
    const double = makeMultiplier(2);

    displayOutput("Triple of 5: " + triple(5));
    displayOutput("Double of 5: " + double(5));
}
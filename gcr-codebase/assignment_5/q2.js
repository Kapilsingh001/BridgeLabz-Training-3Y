// Function that accepts an array and a callback
function applyOperation(numbers, operation) {

    // Apply callback to every element
    return numbers.map(operation);
}

function displayOutput(message) {
    document.getElementById("output").innerHTML += message + "<br>";
}

function runAssignment() {

    document.getElementById("output").innerHTML = "";

    const numbers = [1, 2, 3, 4];

    // Double each number
    const doubled = applyOperation(numbers, function(num) {
        return num * 2;
    });

    // Square each number
    const squared = applyOperation(numbers, function(num) {
        return num * num;
    });

    displayOutput("Original Array: " + numbers);
    displayOutput("Doubled Array: " + doubled);
    displayOutput("Squared Array: " + squared);
}
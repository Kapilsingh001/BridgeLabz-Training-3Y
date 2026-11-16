// Adding custom myMap method to Array prototype
Array.prototype.myMap = function(callback) {

    const result = [];

    // Loop through the original array
    for (let i = 0; i < this.length; i++) {

        // Apply callback to each element
        if (i in this) {
            result[i] = callback(this[i], i, this);
        }
    }

    return result;
};

function displayOutput(message) {
    document.getElementById("output").innerHTML += message + "<br>";
}

function runAssignment() {

    document.getElementById("output").innerHTML = "";

    const numbers = [1, 2, 3];

    // Using custom myMap method
    const doubledNumbers = numbers.myMap(function(num) {
        return num * 2;
    });

    displayOutput("Original Array: " + numbers);
    displayOutput("New Array: " + doubledNumbers);
}
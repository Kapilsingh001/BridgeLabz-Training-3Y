// Create user object
const user = {
    name: "Kapil",

    // Arrow function
    showName: () => {
        displayOutput("Arrow Function: " + this.name);
    }
};

function displayOutput(message) {
    document.getElementById("output").innerHTML += message + "<br>";
}

function runAssignment() {

    document.getElementById("output").innerHTML = "";

    // Calling arrow function
    user.showName();

    // Fix using normal function
    user.showName = function() {
        displayOutput("Normal Function: " + this.name);
    };

    user.showName();
}
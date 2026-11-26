// Constructor function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Adding method to prototype
Car.prototype.getDetails = function() {
    displayOutput("Brand: " + this.brand);
    displayOutput("Model: " + this.model);
};

function displayOutput(message) {
    document.getElementById("output").innerHTML += message + "<br>";
}

function runAssignment() {

    document.getElementById("output").innerHTML = "";

    // Creating two car objects
    const car1 = new Car("Toyota", "Fortuner");
    const car2 = new Car("Honda", "City");

    // Calling shared prototype method
    car1.getDetails();

    displayOutput("----------------");

    car2.getDetails();

    displayOutput("Same shared method: " +
        (car1.getDetails === car2.getDetails));
}
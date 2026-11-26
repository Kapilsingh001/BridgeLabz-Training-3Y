// Base class for every app user
class User {

    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }

    getProfile() {
        return this.name + " (Rating: " + this.rating + "/5)";
    }
}


// Driver inherits User and adds vehicle details
class Driver extends User {

    constructor(name, rating, vehicleModel, vehicleNumber) {
        super(name, rating);
        this.vehicleModel = vehicleModel;
        this.vehicleNumber = vehicleNumber;
    }

    getProfile() {
        return super.getProfile() + " - " + this.vehicleModel + " [" + this.vehicleNumber + "]";
    }
}


// Trip with locations and distance
class Trip {

    static BASE_FARE = 50;       // Fixed booking charge (Rs.)
    static RATE_PER_KM = 12;     // Charge per kilometre (Rs.)

    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    // Calculates the fare using distance
    calculateFare() {

        if (this.distance === undefined || this.distance === null) {
            throw new Error("Distance is not provided for the trip.");
        }

        if (typeof this.distance !== "number" || isNaN(this.distance)) {
            throw new Error("Distance must be a valid number.");
        }

        if (this.distance < 0) {
            throw new Error("Distance cannot be negative (" + this.distance + " km).");
        }

        return Trip.BASE_FARE + this.distance * Trip.RATE_PER_KM;
    }
}


// Display output on webpage and console
function displayOutput(message) {
    console.log(message);
    document.getElementById("output").innerHTML += message + "<br>";
}

// Main function
function runAssignment() {

    document.getElementById("output").innerHTML = "";

    const rider = new User("Kapil", 4.8);
    const driver = new Driver("Suresh", 4.6, "Maruti Dzire", "PB 10 AB 1234");

    displayOutput("Rider: " + rider.getProfile());
    displayOutput("Driver: " + driver.getProfile());
    displayOutput("");

    const trips = [
        new Trip("Ludhiana", "Chandigarh", 100),   // Valid
        new Trip("Mall", "Airport", -5),           // Negative distance
        new Trip("Home", "Office")                 // Distance not provided
    ];

    trips.forEach((trip) => {

        displayOutput("Trip: " + trip.fromLocation + " -> " + trip.toLocation);

        // try/catch handles the error thrown by calculateFare()
        try {
            const fare = trip.calculateFare();
            displayOutput("Distance: " + trip.distance + " km | Fare: Rs." + fare);
        } catch (error) {
            displayOutput("Error: " + error.message);
        }

        displayOutput("");
    });
}

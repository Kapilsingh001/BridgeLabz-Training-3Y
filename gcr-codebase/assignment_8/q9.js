const ACTIVE_STEPS_LIMIT = 7000;

class FitnessAnalytics {

    constructor(workoutData) {
        this.workoutData = workoutData;
    }

    // Throws an error if there is no data to analyse
    #checkDataset() {
        if (!Array.isArray(this.workoutData) || this.workoutData.length === 0) {
            throw new Error("Dataset is empty. No workout data to analyse.");
        }
    }

    // filter(): users with steps > 7000
    getActiveUsers() {
        this.#checkDataset();
        return this.workoutData.filter((record) => record.steps > ACTIVE_STEPS_LIMIT);
    }

    // reduce(): average calories burned
    getAverageCalories() {
        this.#checkDataset();
        const totalCalories = this.workoutData.reduce((total, record) => total + record.calories, 0);
        return totalCalories / this.workoutData.length;
    }

    // map(): format each record as a readable message
    getUserSummary() {
        this.#checkDataset();
        return this.workoutData.map((record) =>
            "User " + record.user + " walked " + record.steps +
            " steps and burned " + record.calories + " calories."
        );
    }
}


// Display output on webpage and console
function displayOutput(message) {
    console.log(message);
    document.getElementById("output").innerHTML += message + "<br>";
}

// Runs all analytics methods for a dataset with error handling
function runAnalytics(label, workoutData) {

    displayOutput("<b>" + label + "</b>");

    try {
        const analytics = new FitnessAnalytics(workoutData);

        const activeUsers = analytics.getActiveUsers();
        displayOutput("Active Users (steps > " + ACTIVE_STEPS_LIMIT + "): " +
            activeUsers.map((record) => record.user).join(", "));

        displayOutput("Average Calories: " + analytics.getAverageCalories().toFixed(2));

        displayOutput("User Summary:");
        analytics.getUserSummary().forEach((message) => displayOutput("- " + message));

    } catch (error) {
        displayOutput("Error: " + error.message);
    }

    displayOutput("");
}

// Main function
function runAssignment() {

    document.getElementById("output").innerHTML = "";

    const workoutData = [
        { user: "A", steps: 8000, calories: 300 },
        { user: "B", steps: 12000, calories: 500 },
        { user: "C", steps: 4000, calories: 200 }
    ];

    runAnalytics("Given Dataset:", workoutData);

    // Demonstrates the error for an empty dataset
    runAnalytics("Empty Dataset:", []);
}

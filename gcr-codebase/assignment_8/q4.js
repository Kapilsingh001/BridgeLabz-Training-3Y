// Parent class
class Employee {

    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return this.name + " (" + this.department + ") is completing assigned tasks.";
    }
}


// Child class - inherits Employee and OVERRIDES work()
class Manager extends Employee {

    constructor(name, department, teamSize) {
        super(name, department);   // Call parent constructor
        this.teamSize = teamSize;
    }

    // Overridden method
    work() {
        return this.name + " (" + this.department + ") is managing a team of " +
            this.teamSize + " people and reviewing their progress.";
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

    // Array holds both Employee and Manager objects
    const staff = [
        new Employee("Kapil", "Cloud and DevOps"),
        new Manager("Anita", "Engineering", 8),
        new Employee("Rahul", "Testing"),
        new Manager("Vikram", "Sales", 5)
    ];

    // RUNTIME POLYMORPHISM:
    // The same call "person.work()" runs different code depending on
    // the actual object type, decided at runtime (not at compile time).
    staff.forEach((person) => {
        displayOutput("[" + person.constructor.name + "] " + person.work());
    });

    displayOutput("");
    displayOutput("Is Manager an instance of Employee? " + (staff[1] instanceof Employee));
}

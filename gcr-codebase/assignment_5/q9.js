// Parent class
class Person {

    constructor(name) {
        this.name = name;
    }

    // Parent method
    showName() {
        displayOutput("Name: " + this.name);
    }
}


// Child class
class Student extends Person {

    constructor(name, branch) {

        // Calling parent constructor
        super(name);

        this.branch = branch;
    }

    // Child method
    showBranch() {
        displayOutput("Branch: " + this.branch);
    }
}


// Display output
function displayOutput(message) {
    document.getElementById("output").innerHTML += message + "<br>";
}

function runAssignment() {

    document.getElementById("output").innerHTML = "";

    // Creating student object
    const student1 = new Student("Kapil", "Cloud and DevOps");

    // Inherited method
    student1.showName();

    // Child class method
    student1.showBranch();

    displayOutput("Is Student a Person? " +
        (student1 instanceof Person));
}
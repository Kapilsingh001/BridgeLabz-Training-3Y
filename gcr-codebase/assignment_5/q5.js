// Parent constructor
function Person(name) {
    this.name = name;
}

// Parent method
Person.prototype.showName = function() {
    displayOutput("Name: " + this.name);
};

// Child constructor
function Student(name, branch) {

    // Calling parent constructor
    Person.call(this, name);

    this.branch = branch;
}

// Inheriting Person prototype
Student.prototype = Object.create(Person.prototype);

// Correcting constructor reference
Student.prototype.constructor = Student;

// Child method
Student.prototype.showBranch = function() {
    displayOutput("Branch: " + this.branch);
};

function displayOutput(message) {
    document.getElementById("output").innerHTML += message + "<br>";
}

function runAssignment() {

    document.getElementById("output").innerHTML = "";

    const student1 = new Student("Kapil", "Cloud and DevOps");

    // Calling parent method
    student1.showName();

    // Calling child method
    student1.showBranch();

    displayOutput("Is Student a Person? " +
        (student1 instanceof Person));
}
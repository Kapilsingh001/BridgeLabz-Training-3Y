// First level: Person
function Person(name) {
    this.name = name;
}

Person.prototype.showName = function() {
    displayOutput("Person Method: " + this.name);
};


// Second level: Faculty
function Faculty(name, department) {

    Person.call(this, name);

    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function() {
    displayOutput("Faculty Method: " + this.department);
};


// Third level: Professor
function Professor(name, department, subject) {

    Faculty.call(this, name, department);

    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showSubject = function() {
    displayOutput("Professor Method: " + this.subject);
};


// Display output
function displayOutput(message) {
    document.getElementById("output").innerHTML += message + "<br>";
}

function runAssignment() {

    document.getElementById("output").innerHTML = "";

    // Creating Professor object
    const professor1 = new Professor(
        "Dr. Sharma",
        "Computer Science",
        "JavaScript"
    );

    // Accessing methods from all levels
    professor1.showName();
    professor1.showDepartment();
    professor1.showSubject();
}
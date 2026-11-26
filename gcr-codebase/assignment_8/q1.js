// Student class with name and marks array
class Student {

    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    // Calculates average of marks using reduce()
    calculateAverage() {
        if (this.marks.length === 0) {
            return 0;
        }

        const totalMarks = this.marks.reduce((sum, mark) => sum + mark, 0);
        return totalMarks / this.marks.length;
    }

    // Returns grade based on the average
    getGrade() {
        const average = this.calculateAverage();

        if (average >= 85) return "A";
        if (average >= 70) return "B";
        if (average >= 50) return "C";
        return "F";
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

    // Testing the class for 3 students
    const students = [
        new Student("Kapil", [92, 88, 95, 90]),
        new Student("Priya", [75, 68, 80, 72]),
        new Student("Rohan", [40, 35, 52, 45])
    ];

    students.forEach((student) => {
        displayOutput("Name: " + student.name);
        displayOutput("Marks: " + student.marks.join(", "));
        displayOutput("Average: " + student.calculateAverage().toFixed(2));
        displayOutput("Grade: " + student.getGrade());
        displayOutput("");
    });
}

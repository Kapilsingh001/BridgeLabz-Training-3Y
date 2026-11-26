
"use strict";

// Q6: Employee Management System (Classes + Object Methods)

// Create an Employee class
class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    // Calculate annual salary
    getAnnualSalary() {
        return this.salary * 12;
    }

    // Apply a bonus percentage to the monthly salary
    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }
}

// Create 5 employee objects
const employees = [
    new Employee(1, "Amit", "IT", 50000),
    new Employee(2, "Sara", "HR", 40000),
    new Employee(3, "Kiran", "Finance", 60000),
    new Employee(4, "Rahul", "Marketing", 35000),
    new Employee(5, "Priya", "IT", 55000)
];

// Apply a 10% bonus to every employee
for (const employee of employees) {
    employee.applyBonus(10);
}

// Display employee details and annual salaries
console.log("===== EMPLOYEE SALARY REPORT =====");

for (const employee of employees) {
    console.log(`ID: ${employee.id}`);
    console.log(`Name: ${employee.name}`);
    console.log(`Department: ${employee.department}`);
    console.log(`Monthly Salary (with bonus): Rs. ${employee.salary.toFixed(2)}`);
    console.log(`Annual Salary: Rs. ${employee.getAnnualSalary().toFixed(2)}`);
    console.log("----------------------------------");
}

// Calculate the total annual payout using reduce()
const totalAnnualPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(),
    0
);

// Display the company's total annual payout
console.log(
    `Total Annual Company Payout: Rs. ${totalAnnualPayout.toFixed(2)}`
);

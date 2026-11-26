
"use strict";

// Q2: Employee Bonus Calculator

// Given employee data
const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

// Process each employee's details
for (const employee of employees) {
    try {
        // Validate that required properties exist
        if (
            !employee ||
            employee.name === undefined ||
            employee.salary === undefined ||
            employee.years === undefined
        ) {
            throw new Error("Missing employee information.");
        }

        // Convert salary and years into numbers
        const salary = Number(employee.salary);
        const years = Number(employee.years);

        // Validate the converted values
        if (
            employee.salary === "" ||
            employee.years === "" ||
            !Number.isFinite(salary) ||
            !Number.isFinite(years) ||
            salary < 0 ||
            years < 0
        ) {
            throw new Error("Invalid salary or years of service.");
        }

        // Calculate bonus based on years of service
        const bonus = years > 3
            ? salary * 0.10
            : salary * 0.05;

        // Calculate salary including bonus
        const totalSalary = salary + bonus;

        // Print formatted employee details
        console.log(`Employee Name: ${employee.name}`);
        console.log(`Salary: Rs. ${salary.toFixed(2)}`);
        console.log(`Years of Service: ${years}`);
        console.log(`Bonus: Rs. ${bonus.toFixed(2)}`);
        console.log(`Total Salary: Rs. ${totalSalary.toFixed(2)}`);
        console.log("-----------------------------");

    } catch (error) {
        // Handle conversion or missing property errors
        console.log(
            `Error processing employee: ${error.message}`
        );
        console.log("-----------------------------");
    }
}

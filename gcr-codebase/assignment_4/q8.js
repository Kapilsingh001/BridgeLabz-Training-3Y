
"use strict";

// Q8: Dynamic Object Updater

// Create the initial user object
const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

// Select form elements
const userForm = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const userDetails = document.getElementById("userDetails");

// Display the current user details
function displayUser() {
    userDetails.replaceChildren();

    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = `Name: ${user.name}`;

    const emailParagraph = document.createElement("p");
    emailParagraph.textContent = `Email: ${user.email}`;

    const ageParagraph = document.createElement("p");
    ageParagraph.textContent = `Age: ${user.age}`;

    userDetails.append(
        nameParagraph,
        emailParagraph,
        ageParagraph
    );

    console.log("Updated User Object:", { ...user });
}

// Fill the form with the initial values
nameInput.value = user.name;
emailInput.value = user.email;
ageInput.value = user.age;

// Handle form submission
userForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Update the existing object with form values
    user.name = nameInput.value.trim();
    user.email = emailInput.value.trim();
    user.age = Number(ageInput.value);

    // Display the updated object
    displayUser();
});

// Display initial details when the page loads
displayUser();

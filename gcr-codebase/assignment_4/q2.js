
"use strict";

// Q2: Student Form Validator

// Select form elements
const studentForm = document.getElementById("studentForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

const formMessage = document.getElementById("formMessage");

// Regular expressions for validation
const nameRegex = /^[A-Za-z]+$/;
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const phoneRegex = /^\d{10}$/;

// Password must contain an uppercase letter, a number,
// and a special character.
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/;

// Validate a single field
function validateField(input, regex, errorId, errorMessage) {
    const errorElement = document.getElementById(errorId);
    const value = input.value.trim();

    if (regex.test(value)) {
        input.classList.remove("invalid");
        input.classList.add("valid");
        errorElement.textContent = "";
        return true;
    }

    input.classList.remove("valid");
    input.classList.add("invalid");
    errorElement.textContent = errorMessage;
    return false;
}

// Validate the form when submitted
studentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const isNameValid = validateField(
        nameInput,
        nameRegex,
        "nameError",
        "Name must contain only alphabets."
    );

    const isEmailValid = validateField(
        emailInput,
        emailRegex,
        "emailError",
        "Enter a valid email address."
    );

    const isPhoneValid = validateField(
        phoneInput,
        phoneRegex,
        "phoneError",
        "Phone number must contain exactly 10 digits."
    );

    const isPasswordValid = validateField(
        passwordInput,
        passwordRegex,
        "passwordError",
        "Password needs an uppercase letter, a number, and a special character."
    );

    // Display the final validation result
    if (
        isNameValid &&
        isEmailValid &&
        isPhoneValid &&
        isPasswordValid
    ) {
        formMessage.textContent = "Registration successful!";
        formMessage.style.color = "green";
    } else {
        formMessage.textContent = "Please correct the errors above.";
        formMessage.style.color = "red";
    }
});

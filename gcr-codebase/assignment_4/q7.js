
"use strict";

// Q7: Login Form Validation using RegExp

// Select form elements
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const message = document.getElementById("message");

// Regular expressions
const usernameRegex = /^.{5,}$/;

// Password must contain:
// At least 8 characters, one uppercase, one lowercase,
// one digit, and one special character.
const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).{8,}$/;

// Validate the login form on submission
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    let isUsernameValid = true;
    let isPasswordValid = true;

    // Validate username
    if (!usernameRegex.test(username)) {
        usernameInput.classList.remove("valid");
        usernameInput.classList.add("invalid");
        usernameError.textContent =
            "Username must contain at least 5 characters.";
        isUsernameValid = false;
    } else {
        usernameInput.classList.remove("invalid");
        usernameInput.classList.add("valid");
        usernameError.textContent = "";
    }

    // Validate password
    if (!passwordRegex.test(password)) {
        passwordInput.classList.remove("valid");
        passwordInput.classList.add("invalid");

        const errors = [];

        if (password.length < 8) {
            errors.push("at least 8 characters");
        }
        if (!/[A-Z]/.test(password)) {
            errors.push("one uppercase letter");
        }
        if (!/[a-z]/.test(password)) {
            errors.push("one lowercase letter");
        }
        if (!/\d/.test(password)) {
            errors.push("one number");
        }
        if (!/[^A-Za-z0-9\s]/.test(password)) {
            errors.push("one special character");
        }

        passwordError.textContent =
            "Password must contain " + errors.join(", ") + ".";
        isPasswordValid = false;
    } else {
        passwordInput.classList.remove("invalid");
        passwordInput.classList.add("valid");
        passwordError.textContent = "";
    }

    // Display the final validation result
    if (isUsernameValid && isPasswordValid) {
        message.textContent = "Validation successful!";
        message.style.color = "green";
        console.log("Login form validation successful.");
    } else {
        message.textContent = "Please correct the errors above.";
        message.style.color = "red";
        console.log("Login form validation failed.");
    }
});

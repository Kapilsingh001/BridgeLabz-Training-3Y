// DOM references
const registerForm = document.getElementById("registerForm");
const successMessage = document.getElementById("successMessage");

// Each field with its error element and validation rule.
// validate() returns an error message, or "" if the value is valid.
const formFields = [
    {
        input: document.getElementById("nameField"),
        error: document.getElementById("nameError"),
        validate: (value) => value.trim() === "" ? "Name is required." : ""
    },
    {
        input: document.getElementById("emailField"),
        error: document.getElementById("emailError"),
        validate: (value) => {
            if (value.trim() === "") return "Email is required.";
            if (!value.includes("@")) return "Email must contain @.";
            return "";
        }
    },
    {
        input: document.getElementById("passwordField"),
        error: document.getElementById("passwordError"),
        validate: (value) => value.length < 6 ? "Password must be at least 6 characters." : ""
    }
];


// Validates one field and shows/hides its inline error. Returns true if valid.
function validateField(field) {

    const errorMessage = field.validate(field.input.value);

    field.error.textContent = errorMessage;
    field.input.classList.toggle("invalid", errorMessage !== "");

    return errorMessage === "";
}


// On submit: block the default submission and validate all fields
registerForm.addEventListener("submit", (event) => {

    // Stop the browser from submitting the form / reloading the page
    event.preventDefault();

    successMessage.style.display = "none";

    // Validate every field (map runs all, so every error is shown at once)
    const results = formFields.map(validateField);
    const isFormValid = results.every((isValid) => isValid);

    if (isFormValid) {
        successMessage.style.display = "block";
        registerForm.reset();
    }
});


// Live error removal: once a field has an error, re-check it while typing
// so the error disappears automatically as soon as the input is corrected
formFields.forEach((field) => {
    field.input.addEventListener("input", () => {

        successMessage.style.display = "none";

        if (field.error.textContent !== "") {
            validateField(field);
        }
    });
});

$(document).ready(function () {

    const MIN_PASSWORD_LENGTH = 8;
    const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Emails that are already taken (used for the uniqueness check)
    const registeredEmails = [
        "admin@example.com",
        "kapil@example.com",
        "test@example.com",
        "student@example.com",
        "mentor@example.com"
    ];


    function showRegisteredEmails() {
        $("#registeredList").text(registeredEmails.join(", "));
    }


    // 5. Marks a field valid/invalid: border color set with .css() + error text
    function setFieldState($field, $error, errorMessage) {
        if (errorMessage) {
            $field.css("border", "2px solid #dc2626");   // Red border
            $error.text(errorMessage);
            return false;
        }

        $field.css("border", "2px solid #16a34a");       // Green border
        $error.text("");
        return true;
    }


    // 1. Name -> must not be empty
    function validateName() {
        const name = $("#nameField").val().trim();
        const errorMessage = name === "" ? "Name is required." : "";

        return setFieldState($("#nameField"), $("#nameError"), errorMessage);
    }

    // 2. Email -> valid format AND not already registered
    function validateEmail() {
        const email = $("#emailField").val().trim().toLowerCase();
        let errorMessage = "";

        if (email === "") {
            errorMessage = "Email is required.";
        } else if (!EMAIL_PATTERN.test(email)) {
            errorMessage = "Please enter a valid email (e.g. name@example.com).";
        } else if (registeredEmails.includes(email)) {
            errorMessage = "This email is already registered.";
        }

        return setFieldState($("#emailField"), $("#emailError"), errorMessage);
    }

    // 3. Password -> at least 8 characters
    function validatePassword() {
        const password = $("#passwordField").val();
        const errorMessage = password.length < MIN_PASSWORD_LENGTH
            ? "Password must be at least " + MIN_PASSWORD_LENGTH + " characters (currently " + password.length + ")."
            : "";

        return setFieldState($("#passwordField"), $("#passwordError"), errorMessage);
    }


    // Live validation: re-check a field when the user leaves it (blur),
    // and while typing once it has already been marked as invalid
    $("#nameField").on("blur", validateName);
    $("#emailField").on("blur", validateEmail);
    $("#passwordField").on("blur", validatePassword);

    $("#nameField, #emailField, #passwordField").on("input", function () {
        $("#successMessage").hide();

        if ($(this).next(".error").text() !== "") {
            if (this.id === "nameField") validateName();
            if (this.id === "emailField") validateEmail();
            if (this.id === "passwordField") validatePassword();
        }
    });


    // Form submit: validate everything
    $("#registrationForm").on("submit", function (event) {

        // Stop the browser from submitting/reloading the page
        event.preventDefault();

        // Run all three (not short-circuited) so every error shows at once
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (isNameValid && isEmailValid && isPasswordValid) {

            const name = $("#nameField").val().trim();
            const email = $("#emailField").val().trim().toLowerCase();

            // Save the email so registering it again fails the uniqueness check
            registeredEmails.push(email);
            showRegisteredEmails();

            // 4. Success message
            $("#successMessage")
                .text("Registration successful! Welcome, " + name + ".")
                .fadeIn(300);

            resetFields();
        }
    });


    // Clears the inputs, borders and errors
    function resetFields() {
        $("#nameField, #emailField, #passwordField").val("").css("border", "");
        $(".error").text("");
    }

    $("#resetButton").on("click", function (event) {
        event.preventDefault();
        resetFields();
        $("#successMessage").hide();
    });


    showRegisteredEmails();
});

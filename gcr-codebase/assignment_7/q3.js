// DOM references
const steps = document.querySelectorAll(".step");
const stepIndicators = document.querySelectorAll(".step-indicator");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const formArea = document.getElementById("formArea");
const summary = document.getElementById("summary");

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

// Index of the step currently shown (0, 1 or 2)
let currentStep = 0;


// One validator per step. Each returns an error message, or "" if valid.
const validators = [
    () => {
        const name = nameInput.value.trim();
        if (name === "") return "Name is required.";
        if (!/^[A-Za-z ]{2,}$/.test(name)) return "Name must have at least 2 letters (alphabets only).";
        return "";
    },
    () => {
        const email = emailInput.value.trim();
        if (email === "") return "Email is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Please enter a valid email address.";
        return "";
    },
    () => {
        if (passwordInput.value.length < 6) return "Password must be at least 6 characters.";
        return "";
    }
];


// Shows only the current step and updates buttons/progress bar
function showStep(stepIndex) {

    steps.forEach((step, index) => {
        step.classList.toggle("active", index === stepIndex);
    });

    stepIndicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === stepIndex);
        indicator.classList.toggle("done", index < stepIndex);
    });

    backButton.disabled = stepIndex === 0;
    nextButton.textContent = stepIndex === steps.length - 1 ? "Submit" : "Next";

    steps[stepIndex].querySelector("input").focus();
}


// Validates the current step and displays the error (if any)
function isCurrentStepValid() {

    const errorMessage = validators[currentStep]();
    steps[currentStep].querySelector(".error").textContent = errorMessage;

    return errorMessage === "";
}


// Displays the final summary after all steps are completed
function showSummary() {

    formArea.style.display = "none";
    stepIndicators.forEach((indicator) => {
        indicator.classList.remove("active");
        indicator.classList.add("done");
    });

    summary.style.display = "block";
    summary.innerHTML =
        "<h3>Registration Summary</h3>" +
        "<p><b>Name:</b> " + nameInput.value.trim() + "</p>" +
        "<p><b>Email:</b> " + emailInput.value.trim() + "</p>" +
        "<p><b>Password:</b> " + "*".repeat(passwordInput.value.length) + "</p>";
}


// ---------------- Event Listeners ----------------

// Next: only move forward if the current input is valid
nextButton.addEventListener("click", () => {

    if (!isCurrentStepValid()) {
        return;
    }

    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
    } else {
        showSummary();
    }
});

// Back: move to the previous step (no validation needed)
backButton.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
});

// Pressing Enter inside an input acts like clicking Next
formArea.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && event.target.tagName === "INPUT") {
        nextButton.click();
    }
});


showStep(currentStep);

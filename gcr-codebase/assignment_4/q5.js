
"use strict";

// Q5: Movie Ticket Booking (Objects + RegExp)

// Select form elements
const bookingForm = document.getElementById("bookingForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const seatsInput = document.getElementById("seats");
const ticket = document.getElementById("ticket");

// Regular expressions
const nameRegex = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

// Validate a field and display its error
function validateField(input, isValid, errorId, message) {
    const errorElement = document.getElementById(errorId);

    input.classList.remove("valid", "invalid");

    if (isValid) {
        input.classList.add("valid");
        errorElement.textContent = "";
        return true;
    }

    input.classList.add("invalid");
    errorElement.textContent = message;
    return false;
}

// Handle booking form submission
bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Read the input values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const seatsText = seatsInput.value.trim();
    const seats = Number(seatsText);

    // Validate name, email, and seats
    const isNameValid = validateField(
        nameInput,
        nameRegex.test(name),
        "nameError",
        "Name must contain only alphabets."
    );

    const isEmailValid = validateField(
        emailInput,
        emailRegex.test(email),
        "emailError",
        "Please enter a valid email address."
    );

    const isSeatsValid = validateField(
        seatsInput,
        seatsText !== "" &&
            Number.isInteger(seats) &&
            seats >= 1 &&
            seats <= 10,
        "seatsError",
        "Seats must be a whole number from 1 to 10."
    );

    // Clear any previous ticket
    ticket.replaceChildren();

    // Stop if any field is invalid
    if (!isNameValid || !isEmailValid || !isSeatsValid) {
        return;
    }

    // Store valid booking information in an object
    const booking = {
        name: name,
        email: email,
        seats: seats
    };

    // Display the ticket details
    const heading = document.createElement("h3");
    heading.textContent = "Booking Confirmed!";

    const nameDetails = document.createElement("p");
    nameDetails.textContent = `Name: ${booking.name}`;

    const emailDetails = document.createElement("p");
    emailDetails.textContent = `Email: ${booking.email}`;

    const seatsDetails = document.createElement("p");
    seatsDetails.textContent = `Seats Booked: ${booking.seats}`;

    ticket.append(
        heading,
        nameDetails,
        emailDetails,
        seatsDetails
    );

    // Print booking object in the console
    console.log("Booking Details:", booking);
});

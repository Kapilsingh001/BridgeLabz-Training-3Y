
// Q10: Citizen Eligibility Validator

// Declare input variables
let age = 21;
let isCitizen = true;

// Check eligibility using nested if-else conditions
if (isCitizen && age >= 18) {

    // Citizen is 18 or older
    if (age >= 21) {
        console.log("Eligible for all services.");
    } else {
        console.log("Eligible to vote only.");
    }

} else if (!isCitizen && age >= 18) {

    // Person is an adult but not a citizen
    console.log("Only age criteria met.");

} else {

    // Person does not meet the eligibility criteria
    console.log("Not eligible yet.");
}

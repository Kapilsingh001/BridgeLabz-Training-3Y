// Motivational quotes shown by the "Change Greeting" button
const motivationalQuotes = [
    "Believe you can and you're halfway there.",
    "Small progress is still progress.",
    "Code, debug, learn, repeat.",
    "Great things never come from comfort zones.",
    "Every expert was once a beginner."
];

// Index of the next quote to show
let quoteIndex = 0;


// Returns Morning / Afternoon / Evening based on the current hour
function getTimeOfDay() {
    const currentHour = new Date().getHours();

    if (currentHour < 12) return "Morning";
    if (currentHour < 17) return "Afternoon";
    return "Evening";
}

// Builds the personalized greeting text
function buildGreeting() {
    const visitorName = $("#visitorName").val().trim() || "Guest";
    return "Good " + getTimeOfDay() + ", " + visitorName + "!";
}


// $(document).ready() runs once the DOM is fully loaded
$(document).ready(function () {

    // 1. On page load -> show the personalized greeting
    $("#greeting").text(buildGreeting());

    // Update the greeting when the visitor changes their name
    $("#updateNameButton").click(function () {
        $("#greeting").text(buildGreeting());
        $("#quote").text("");
    });

    // 2. "Change Greeting" -> replace the text with a motivational quote
    $("#changeGreetingButton").click(function () {
        $("#greeting").text(motivationalQuotes[quoteIndex]);
        $("#quote").text("Quote " + (quoteIndex + 1) + " of " + motivationalQuotes.length);

        // Move to the next quote, and loop back to the first one at the end
        quoteIndex = (quoteIndex + 1) % motivationalQuotes.length;
    });

    // 3. Toggle the welcome message
    // .toggle() hides the element if visible, shows it if hidden
    $("#toggleWelcomeButton").click(function () {
        $("#welcomeMessage").toggle(300, function () {
            // :visible tells us the state after the animation finishes
            const isVisible = $("#welcomeMessage").is(":visible");
            $("#toggleWelcomeButton").text(isVisible ? "Hide Welcome Message" : "Show Welcome Message");
        });
    });

    // 4. Clicking the greeting shows an alert with its current text
    $("#greeting").click(function () {
        alert("You clicked: " + $(this).text());
    });
});

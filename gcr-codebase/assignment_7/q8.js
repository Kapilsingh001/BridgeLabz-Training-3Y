// DOM references
const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const dropdownOptions = document.getElementById("dropdownOptions");
const selectedText = document.getElementById("selectedText");


// Button shows / hides the options
dropdownButton.addEventListener("click", () => {
    dropdownOptions.classList.toggle("open");
});


// Clicking an option updates the button text (event delegation on <ul>)
dropdownOptions.addEventListener("click", (event) => {

    const clickedOption = event.target.closest("li");
    if (!clickedOption) {
        return;
    }

    dropdownButton.textContent = clickedOption.textContent;
    selectedText.textContent = "Selected: " + clickedOption.textContent;

    // Highlight the selected option
    dropdownOptions.querySelectorAll("li").forEach((option) => {
        option.classList.toggle("selected", option === clickedOption);
    });

    dropdownOptions.classList.remove("open");
});


// CLOSING MECHANISM (capturing phase)
// The third argument "true" registers this listener in the CAPTURING phase.
// A click travels: window -> document -> ... -> target (capturing)
// and then back up: target -> ... -> document (bubbling).
// Because this listener is on document with capture = true, it runs FIRST,
// before any element's own click handler. If the click happened outside
// the dropdown, we close it right away.
document.addEventListener("click", (event) => {

    if (!dropdown.contains(event.target)) {
        dropdownOptions.classList.remove("open");
    }
}, true);

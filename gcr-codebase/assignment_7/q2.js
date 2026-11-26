const MAX_CHARACTERS = 100;
const WARNING_LIMIT = 20;

// DOM references
const messageBox = document.getElementById("messageBox");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");


// Updates the counter text and its color
function updateCounter() {

    const remainingCharacters = MAX_CHARACTERS - messageBox.value.length;

    counter.textContent = remainingCharacters + " characters remaining";

    // Remove old color classes before adding the correct one
    counter.classList.remove("warning", "limit");

    if (remainingCharacters <= 0) {
        counter.classList.add("limit");          // Red
    } else if (remainingCharacters <= WARNING_LIMIT) {
        counter.classList.add("warning");        // Yellow
    }
}


// Block typing once the limit is reached
messageBox.addEventListener("keydown", (event) => {

    const remainingCharacters = MAX_CHARACTERS - messageBox.value.length;

    // Printable keys have a single-character key name (e.g. "a", "1", " ")
    const isTypingKey = event.key.length === 1 || event.key === "Enter";

    // Allow keyboard shortcuts like Ctrl+A / Ctrl+C
    const isShortcut = event.ctrlKey || event.metaKey;

    // If some text is selected, typing replaces it, so it is allowed
    const hasSelection = messageBox.selectionStart !== messageBox.selectionEnd;

    if (remainingCharacters <= 0 && isTypingKey && !isShortcut && !hasSelection) {
        event.preventDefault();   // Stops the character from being added
    }
});


// Update the counter on every change (typing, deleting, pasting)
messageBox.addEventListener("input", () => {

    // Safety net: trim pasted text that goes beyond the limit
    if (messageBox.value.length > MAX_CHARACTERS) {
        messageBox.value = messageBox.value.slice(0, MAX_CHARACTERS);
    }

    updateCounter();
});


// Reset clears the text and the counter
resetButton.addEventListener("click", () => {
    messageBox.value = "";
    updateCounter();
    messageBox.focus();
});


updateCounter();

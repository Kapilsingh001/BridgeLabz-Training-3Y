// Index of the module that will be randomly rejected (0, 1 or 2)
let failingModuleIndex = -1;

// Each loader rejects only if it is the randomly chosen failing module
function loadProfile() {
    return new Promise((resolve, reject) => setTimeout(() => {
        failingModuleIndex === 0 ? reject("Profile failed to load") : resolve("Profile Loaded");
    }, 2000));
}

function loadPosts() {
    return new Promise((resolve, reject) => setTimeout(() => {
        failingModuleIndex === 1 ? reject("Posts failed to load") : resolve("Posts Loaded");
    }, 1500));
}

function loadMessages() {
    return new Promise((resolve, reject) => setTimeout(() => {
        failingModuleIndex === 2 ? reject("Messages failed to load") : resolve("Messages Loaded");
    }, 1000));
}

// Display output on webpage and console
function displayOutput(message) {
    console.log(message);
    document.getElementById("output").innerHTML += message + "<br>";
}

// Main function
async function runAssignment() {

    document.getElementById("output").innerHTML = "";

    // Randomly choose one module to reject
    failingModuleIndex = Math.floor(Math.random() * 3);

    const moduleNames = ["Profile", "Posts", "Messages"];

    displayOutput("Loading dashboard sections...");

    const startTime = Date.now();

    // allSettled waits for ALL promises, whether they resolve or reject
    const results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    const endTime = Date.now();

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            displayOutput("SUCCESS - " + moduleNames[index] + ": " + result.value);
        } else {
            displayOutput("FAILED - " + moduleNames[index] + ": " + result.reason);
        }
    });

    // Total time ~2000ms because all loaders run in parallel
    displayOutput("Total time taken: " + (endTime - startTime) + " ms");
}

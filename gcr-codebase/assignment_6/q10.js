/*
    HOW THIS PIPELINE WORKS WITH THE EVENT LOOP

    - Each step returns a Promise and starts a setTimeout() with a
      random 1-2s delay. The timer runs in the browser's Web API,
      NOT on the call stack, so the page stays responsive.

    - When runPipeline() reaches "await step()", the async function
      is paused and control returns to the Event Loop. The call
      stack becomes free for other work (clicks, rendering, etc.).

    - When the timer finishes, its callback is placed in the
      macrotask queue. The Event Loop runs it, which calls
      resolve() or reject().

    - Resolving the Promise schedules the continuation of
      runPipeline() as a MICROTASK, so the function resumes right
      after the "await" line and moves to the next step.

    - If a step calls reject(), the "await" throws an error, and
      control jumps directly to the catch block, skipping the
      remaining steps.
*/

// Returns a random delay between 1000ms and 2000ms
function getRandomDelay() {
    return 1000 + Math.floor(Math.random() * 1000);
}

// Generic step creator: resolves with a success message or rejects
// with a failure message after a random delay (10% failure chance)
function createStep(successMessage, failureMessage) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.1) {
                reject(failureMessage);
            } else {
                resolve(successMessage);
            }
        }, getRandomDelay());
    });
}

// Delivery steps
function takeOrder() {
    return createStep("Step 1: Order taken", "Could not take the order");
}

function prepare() {
    return createStep("Step 2: Food prepared", "Kitchen could not prepare the food");
}

function pack() {
    return createStep("Step 3: Package ready", "Packing failed");
}

function dispatch() {
    return createStep("Step 4: Out for delivery", "No delivery partner available");
}

function deliver() {
    return createStep("Delivery completed!", "Delivery partner could not reach the address");
}

// Display output on webpage and console
function displayOutput(message) {
    console.log(message);
    document.getElementById("output").innerHTML += message + "<br>";
}

// Runs every step in order using async/await
async function runPipeline() {

    displayOutput("Start Pipeline");

    try {
        // Each await pauses here until that step's Promise settles
        displayOutput(await takeOrder());
        displayOutput(await prepare());
        displayOutput(await pack());
        displayOutput(await dispatch());
        displayOutput(await deliver());
    } catch (error) {
        // Any rejected step lands here
        displayOutput("Reason: " + error);
        displayOutput("Pipeline failed!");
    }
}

// Main function
function runAssignment() {

    document.getElementById("output").innerHTML = "";

    runPipeline();

    // This line runs BEFORE any step finishes, proving that
    // runPipeline() does not block the main thread
    console.log("runPipeline() started - main thread is free");
}

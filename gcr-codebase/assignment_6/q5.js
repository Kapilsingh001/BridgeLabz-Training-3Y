// Display output on webpage and console
function displayOutput(message) {
    console.log(message);
    document.getElementById("output").innerHTML += message + "<br>";
}


// ===================== PART 1: CALLBACK HELL =====================

// Callback-based stage: runs after 1 second, then calls the callback
function runStageWithCallback(stageName, callback) {
    setTimeout(() => {
        displayOutput("[Callback] " + stageName);
        callback();
    }, 1000);
}

// Nested callbacks - each stage is nested inside the previous one
// This "pyramid of doom" is hard to read, debug and maintain
function runPipelineWithCallbacks(onComplete) {
    runStageWithCallback("Design", () => {
        runStageWithCallback("Build", () => {
            runStageWithCallback("Test", () => {
                runStageWithCallback("Deploy", () => {
                    runStageWithCallback("Celebrate", () => {
                        displayOutput("[Callback] Pipeline finished!");
                        onComplete();
                    });
                });
            });
        });
    });
}


// ===================== PART 2: ASYNC / AWAIT =====================

// Promise-based stage: resolves after 1 second
function runStage(stageName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            displayOutput("[Async/Await] " + stageName);
            resolve();
        }, 1000);
    });
}

// Same pipeline written with async/await - flat and readable
async function runPipelineWithAsyncAwait() {
    try {
        await runStage("Design");
        await runStage("Build");
        await runStage("Test");
        await runStage("Deploy");
        await runStage("Celebrate");
        displayOutput("[Async/Await] Pipeline finished!");
    } catch (error) {
        displayOutput("Pipeline error: " + error);
    }
}

/*
    Why async/await improves readability:

    1. Code reads top-to-bottom like synchronous code, instead of
       drifting to the right with every nested callback.
    2. Each step is on its own line, so adding/removing/reordering
       a stage is a one-line change.
    3. Errors are handled in a single try/catch block instead of
       checking errors inside every nested callback.
    4. Values returned by a step can be stored in normal variables
       (const result = await step()) and used by the next step.
*/


// Main function
function runAssignment() {

    document.getElementById("output").innerHTML = "";

    displayOutput("--- Running with nested callbacks ---");

    // Run callback version first, then the async/await version
    runPipelineWithCallbacks(() => {
        displayOutput("<br>--- Running with async/await ---");
        runPipelineWithAsyncAwait();
    });
}

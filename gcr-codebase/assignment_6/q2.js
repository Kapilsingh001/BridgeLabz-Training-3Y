// Display output on webpage and console
function displayOutput(message) {
    console.log(message);
    document.getElementById("output").innerHTML += message + "<br>";
}

// Main function
function runAssignment() {

    document.getElementById("output").innerHTML = "";

    displayOutput("Start");

    // Macrotask: goes to the macrotask (callback) queue
    setTimeout(() => {
        displayOutput("setTimeout callback (macrotask)");
    }, 0);

    // Microtask: goes to the microtask queue
    Promise.resolve().then(() => {
        displayOutput("Promise.then callback (microtask)");
    });

    // Synchronous: runs immediately on the call stack
    displayOutput("Synchronous log");

    displayOutput("End");
}

/*
    Actual Output:
        Start
        Synchronous log
        End
        Promise.then callback (microtask)
        setTimeout callback (macrotask)

    Why do microtasks run before macrotasks?

    1. All synchronous code runs first on the call stack
       ("Start", "Synchronous log", "End").

    2. setTimeout() hands its callback to the browser/Node timer API.
       When the timer finishes, the callback is placed in the
       MACROTASK queue.

    3. Promise.then() places its callback in the MICROTASK queue.

    4. When the call stack becomes empty, the Event Loop ALWAYS
       empties the entire microtask queue first, before picking
       the next macrotask.

    5. Only after all microtasks are finished does the Event Loop
       take one macrotask (the setTimeout callback) and run it.

    So even a setTimeout with 0ms delay runs after a resolved Promise,
    because microtasks have higher priority in the Event Loop.
*/

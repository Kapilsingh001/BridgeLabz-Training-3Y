/*
    PREDICTED OUTPUT (written before running):
        Script start
        Script end
        Promise callback
        Timeout callback

    ACTUAL OUTPUT (after running):
        Script start
        Script end
        Promise callback
        Timeout callback

    Result: Prediction matches the actual output.
*/

// Display output on webpage and console
function displayOutput(message) {
    console.log(message);
    document.getElementById("output").innerHTML += message + "<br>";
}

// Main function
function runAssignment() {

    document.getElementById("output").innerHTML = "";

    displayOutput("Script start");

    setTimeout(() => displayOutput("Timeout callback"), 0);

    Promise.resolve().then(() => displayOutput("Promise callback"));

    displayOutput("Script end");
}

/*
    Why Promises (microtasks) execute before setTimeout (macrotasks):

    1. "Script start" and "Script end" are synchronous, so they run
       immediately on the call stack.

    2. setTimeout(..., 0) does NOT run immediately. Its callback is
       sent to the Web API timer, and then placed in the MACROTASK
       queue (also called the task / callback queue).

    3. Promise.resolve().then(...) places its callback in the
       MICROTASK queue.

    4. Once the call stack is empty, the Event Loop checks the
       microtask queue FIRST and runs every microtask in it
       ("Promise callback").

    5. Only after the microtask queue is completely empty does the
       Event Loop pick the next macrotask ("Timeout callback").

    Therefore a 0ms timeout still waits for all pending Promise
    callbacks to finish.
*/

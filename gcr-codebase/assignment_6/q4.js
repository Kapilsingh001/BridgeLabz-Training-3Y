// Simulates a deployment server that responds after a given delay
function deployToServer(serverName, delay) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            // Simulate random failure (20% chance)
            if (Math.random() < 0.2) {
                reject(serverName + " failed to respond!");
            } else {
                resolve(serverName);
            }
        }, delay);
    });
}

// Display output on webpage and console
function displayOutput(message) {
    console.log(message);
    document.getElementById("output").innerHTML += message + "<br>";
}

// Main function
function runAssignment() {

    document.getElementById("output").innerHTML = "";

    displayOutput("Deploying to Server A (2s) and Server B (3s)...");

    // Both servers start at the same time
    const serverA = deployToServer("Server A", 2000);
    const serverB = deployToServer("Server B", 3000);

    // Promise.race(): settles as soon as the FIRST promise settles
    Promise.race([serverA, serverB])
        .then((fastestServer) => {
            displayOutput("Fastest response: " + fastestServer);
        })
        .catch((error) => {
            displayOutput("Race Error: " + error);
        });

    // Promise.all(): resolves only when ALL promises resolve
    // and rejects immediately if any one fails
    Promise.all([serverA, serverB])
        .then((servers) => {
            displayOutput("Responses received from: " + servers.join(", "));
            displayOutput("Deployment completed for all servers");
        })
        .catch((error) => {
            displayOutput("Deployment Error: " + error);
        });
}

// DOM references
const trackingBox = document.getElementById("trackingBox");
const coordinates = document.getElementById("coordinates");
const clearButton = document.getElementById("clearButton");

// Limit the number of path points so the page doesn't slow down
const MAX_PATH_POINTS = 300;

let redDotCount = 0;


// Converts page coordinates (clientX/clientY) to coordinates inside the box
function getPositionInsideBox(event) {
    const boxRect = trackingBox.getBoundingClientRect();
    return {
        x: Math.round(event.clientX - boxRect.left),
        y: Math.round(event.clientY - boxRect.top)
    };
}

// Draws a small light dot to show the path of the mouse
function drawPathPoint(position) {

    const pathPoint = document.createElement("div");
    pathPoint.className = "path-point";
    pathPoint.style.left = position.x + "px";
    pathPoint.style.top = position.y + "px";
    trackingBox.appendChild(pathPoint);

    // Remove the oldest point once the limit is reached
    const allPoints = trackingBox.querySelectorAll(".path-point");
    if (allPoints.length > MAX_PATH_POINTS) {
        allPoints[0].remove();
    }
}


// Mouse move: show live clientX / clientY and draw the path
trackingBox.addEventListener("mousemove", (event) => {

    const position = getPositionInsideBox(event);

    coordinates.innerHTML =
        "clientX: " + event.clientX + " | clientY: " + event.clientY +
        "<br>Inside box -> X: " + position.x + " | Y: " + position.y +
        "<br>Red dots: " + redDotCount;

    drawPathPoint(position);
});

// Mouse leaves the box
trackingBox.addEventListener("mouseleave", () => {
    coordinates.innerHTML = "Mouse is outside the box<br>Red dots: " + redDotCount;
});

// Double-click: drop a red dot at the exact click position
trackingBox.addEventListener("dblclick", (event) => {

    const position = getPositionInsideBox(event);

    const redDot = document.createElement("div");
    redDot.className = "red-dot";
    redDot.style.left = position.x + "px";
    redDot.style.top = position.y + "px";
    trackingBox.appendChild(redDot);

    redDotCount++;
    console.log("Red dot dropped at clientX: " + event.clientX + ", clientY: " + event.clientY);
});

// Clear all dots and path points
clearButton.addEventListener("click", () => {
    trackingBox.innerHTML = "";
    redDotCount = 0;
    coordinates.textContent = "Move your mouse inside the box";
});

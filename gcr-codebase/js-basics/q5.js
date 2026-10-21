
/*
Q5: Boolean Logic Access System
*/

// Define security conditions
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Check all security conditions
let isSecure =
    isAlarmOn &&
    isDoorLocked &&
    isWindowClosed &&
    isOwnerInside;

// Display the result
if (isSecure) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// Test another situation: alarm is switched off
isAlarmOn = false;

isSecure =
    isAlarmOn &&
    isDoorLocked &&
    isWindowClosed &&
    isOwnerInside;

console.log("After switching off alarm:",
    isSecure ? "Secure" : "Unsafe"
);

// Test another situation: window is open
isAlarmOn = true;
isWindowClosed = false;

isSecure =
    isAlarmOn &&
    isDoorLocked &&
    isWindowClosed &&
    isOwnerInside;

console.log("After opening window:",
    isSecure ? "Secure" : "Unsafe"
);

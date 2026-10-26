
// Q9: Random Math Quiz Generator

// Generate two random numbers between 1 and 20
let number1 = Math.floor(Math.random() * 20) + 1;
let number2 = Math.floor(Math.random() * 20) + 1;

// Generate a random arithmetic operator
let operators = ['+', '-', '*', '/'];
let operator = operators[Math.floor(Math.random() * operators.length)];

// Variable to store the correct answer
let answer;

// Calculate the answer using a switch statement
switch (operator) {
    case '+':
        answer = number1 + number2;
        break;

    case '-':
        answer = number1 - number2;
        break;

    case '*':
        answer = number1 * number2;
        break;

    case '/':
        answer = number1 / number2;
        break;

    default:
        console.log("Invalid operator");
}

// Round division results to two decimal places
if (operator === '/') {
    answer = Number(answer.toFixed(2));
}

// Display the question and correct answer
console.log("Random Math Quiz");
console.log("----------------");
console.log(`Question: ${number1} ${operator} ${number2} = ?`);
console.log(`Correct Answer: ${answer}`);
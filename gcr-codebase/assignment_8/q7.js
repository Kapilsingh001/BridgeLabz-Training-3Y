class BankAccount {

    // Private field: cannot be accessed or changed from outside the class
    #balance = 0;

    constructor(accountHolder, openingBalance = 0) {
        this.accountHolder = accountHolder;
        this.deposit(openingBalance);
    }

    // Adds money to the account
    deposit(amount) {
        if (typeof amount !== "number" || amount < 0) {
            throw new Error("Deposit amount must be a positive number.");
        }
        this.#balance += amount;
    }

    // Removes money from the account
    withdraw(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            throw new Error("Withdrawal amount must be a positive number.");
        }
        if (amount > this.#balance) {
            throw new Error("Insufficient balance. Available: Rs." + this.#balance +
                ", Requested: Rs." + amount);
        }
        this.#balance -= amount;
    }

    // Only way to read the balance from outside
    getBalance() {
        return this.#balance;
    }
}


// Display output on webpage and console
function displayOutput(message) {
    console.log(message);
    document.getElementById("output").innerHTML += message + "<br>";
}

// Runs a bank operation and catches any error it throws
function performTransaction(description, operation, account) {
    try {
        operation();
        displayOutput("SUCCESS: " + description + " | Balance: Rs." + account.getBalance());
    } catch (error) {
        displayOutput("FAILED: " + description + " | " + error.message);
    }
}

// Main function
function runAssignment() {

    document.getElementById("output").innerHTML = "";

    const account = new BankAccount("Kapil", 1000);

    displayOutput("Account Holder: " + account.accountHolder);
    displayOutput("Opening Balance: Rs." + account.getBalance());
    displayOutput("");

    // Valid deposits
    performTransaction("Deposit Rs.500", () => account.deposit(500), account);
    performTransaction("Deposit Rs.2000", () => account.deposit(2000), account);

    // Valid withdrawal
    performTransaction("Withdraw Rs.1500", () => account.withdraw(1500), account);

    // Invalid withdrawals (handled using try/catch)
    performTransaction("Withdraw Rs.10000", () => account.withdraw(10000), account);
    performTransaction("Withdraw Rs.-200", () => account.withdraw(-200), account);

    displayOutput("");

    // Private field cannot be read directly
    displayOutput("account.balance from outside: " + account.balance);
    displayOutput("(#balance is private, so it is only accessible through getBalance())");
}


"use strict";

// Q3: Library Management System (Classes + Objects)

// Create a Book class
class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    // Issue a book if it is available
    issueBook() {
        if (this.isIssued) {
            console.log(`"${this.title}" is already issued.`);
            return false;
        }

        this.isIssued = true;
        console.log(`"${this.title}" has been issued successfully.`);
        return true;
    }

    // Return a book if it has been issued
    returnBook() {
        if (!this.isIssued) {
            console.log(`"${this.title}" is already available.`);
            return false;
        }

        this.isIssued = false;
        console.log(`"${this.title}" has been returned successfully.`);
        return true;
    }

    // Display book details
    displayDetails() {
        const status = this.isIssued ? "Issued" : "Available";

        console.log(
            `Title: ${this.title} | Author: ${this.author} | ` +
            `ISBN: ${this.ISBN} | Status: ${status}`
        );
    }
}

// Create an array of book objects
const books = [
    new Book("The Alchemist", "Paulo Coelho", "ISBN101"),
    new Book("Atomic Habits", "James Clear", "ISBN102"),
    new Book("Wings of Fire", "A.P.J. Abdul Kalam", "ISBN103"),
    new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "ISBN104")
];

// Display all available books
function displayAvailableBooks() {
    console.log("\n===== AVAILABLE BOOKS =====");

    const availableBooks = books.filter(book => !book.isIssued);

    if (availableBooks.length === 0) {
        console.log("No books are currently available.");
        return;
    }

    availableBooks.forEach(book => book.displayDetails());
}

// Issue a book by searching its ISBN
function issueBookByISBN(ISBN) {
    const book = books.find(book => book.ISBN === ISBN);

    if (!book) {
        console.log(`No book found with ISBN: ${ISBN}`);
        return;
    }

    book.issueBook();
}

// Return a book by searching its ISBN
function returnBookByISBN(ISBN) {
    const book = books.find(book => book.ISBN === ISBN);

    if (!book) {
        console.log(`No book found with ISBN: ${ISBN}`);
        return;
    }

    book.returnBook();
}

// Demonstrate the library system
displayAvailableBooks();

issueBookByISBN("ISBN102");

displayAvailableBooks();

returnBookByISBN("ISBN102");

displayAvailableBooks();

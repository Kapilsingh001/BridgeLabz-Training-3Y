// Parent class
class MovieTicket {

    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

// Method added DIRECTLY to MovieTicket.prototype (outside the class body)
MovieTicket.prototype.printTicket = function () {
    let ticketText = "Movie: " + this.movieName +
        " | Seat: " + this.seatNo +
        " | Price: Rs." + this.price;

    // If the object has getTotalAmount (OnlineTicket), show the total too
    if (typeof this.getTotalAmount === "function") {
        ticketText += " | Convenience Fee: Rs." + this.convenienceFee +
            " | Total: Rs." + this.getTotalAmount();
    }

    return ticketText;
};


// Child class - inherits MovieTicket
class OnlineTicket extends MovieTicket {

    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}


// Display output on webpage and console
function displayOutput(message) {
    console.log(message);
    document.getElementById("output").innerHTML += message + "<br>";
}

// Main function
function runAssignment() {

    document.getElementById("output").innerHTML = "";

    const counterTicket = new MovieTicket("Interstellar", "C7", 250);
    const onlineTicket1 = new OnlineTicket("Inception", "F12", 300, 30);
    const onlineTicket2 = new OnlineTicket("Dune", "H4", 350, 40);

    displayOutput("<b>Counter Ticket:</b>");
    displayOutput(counterTicket.printTicket());

    displayOutput("");
    displayOutput("<b>Online Tickets (printTicket called via prototype chain):</b>");
    displayOutput(onlineTicket1.printTicket());
    displayOutput(onlineTicket2.printTicket());

    // Demonstrating the prototype chain
    displayOutput("");
    displayOutput("<b>Prototype Chain Check:</b>");
    displayOutput("onlineTicket1 has its own printTicket? " +
        onlineTicket1.hasOwnProperty("printTicket"));
    displayOutput("OnlineTicket.prototype has printTicket? " +
        OnlineTicket.prototype.hasOwnProperty("printTicket"));
    displayOutput("MovieTicket.prototype has printTicket? " +
        MovieTicket.prototype.hasOwnProperty("printTicket"));
    displayOutput("Object.getPrototypeOf(OnlineTicket.prototype) === MovieTicket.prototype? " +
        (Object.getPrototypeOf(OnlineTicket.prototype) === MovieTicket.prototype));
}

/*
    How the prototype chain works here:

    onlineTicket1.printTicket()
        1. JS looks for printTicket on onlineTicket1 itself  -> not found
        2. Then on OnlineTicket.prototype                    -> not found
        3. Then on MovieTicket.prototype                     -> FOUND, runs it

    Chain: onlineTicket1 -> OnlineTicket.prototype -> MovieTicket.prototype
           -> Object.prototype -> null

    Inside printTicket, "this" still refers to onlineTicket1, so it can
    use the child's own convenienceFee and getTotalAmount().
*/

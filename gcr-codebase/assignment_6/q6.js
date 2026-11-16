const PRODUCTS_API_URL = "https://fakestoreapi.com/products";

// Display output on webpage and console
function displayOutput(message) {
    console.log(message);
    document.getElementById("output").innerHTML += message + "<br>";
}

// Bonus: create a product card using document.createElement()
function createProductCard(product) {

    const card = document.createElement("div");
    card.className = "product-card";

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.title;

    const title = document.createElement("h4");
    title.textContent = product.title;

    const price = document.createElement("p");
    price.className = "price";
    price.textContent = "$" + product.price;

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(price);

    return card;
}

// Fetch products using async/await
async function fetchProducts() {

    const productsContainer = document.getElementById("products");

    try {
        displayOutput("Loading products...");

        const response = await fetch(PRODUCTS_API_URL);

        // fetch() only rejects on network errors, so check HTTP status manually
        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }

        const products = await response.json();

        displayOutput("Loaded " + products.length + " products. Details logged in console.");

        products.forEach((product) => {

            // Log each product's details to the console
            console.log("Product: " + product.title);
            console.log("Price: $" + product.price);
            console.log("Image: " + product.image);
            console.log("");

            // Append product card to the page
            productsContainer.appendChild(createProductCard(product));
        });

    } catch (error) {
        console.error(error);
        document.getElementById("output").innerHTML +=
            '<span class="error">Failed to load products. Please try again.</span><br>';
    }
}

// Main function
function runAssignment() {

    document.getElementById("output").innerHTML = "";
    document.getElementById("products").innerHTML = "";

    fetchProducts();
}

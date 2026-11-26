// DOM references
const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");
const errorMessage = document.getElementById("errorMessage");

// Keeps track of the <li> that is currently being edited (null if none)
let itemBeingEdited = null;


// Creates a new <li> with product name, Edit and Delete buttons
function createProductItem(productName) {

    const listItem = document.createElement("li");

    const nameSpan = document.createElement("span");
    nameSpan.className = "product-name";
    nameSpan.textContent = productName;

    const editButton = document.createElement("button");
    editButton.className = "edit-btn";
    editButton.textContent = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";

    listItem.append(nameSpan, editButton, deleteButton);

    return listItem;
}


// Adds product from the input box to the list
function addProduct() {

    const productName = productInput.value.trim();

    if (productName === "") {
        errorMessage.textContent = "Please enter a product name.";
        return;
    }

    errorMessage.textContent = "";
    productList.appendChild(createProductItem(productName));

    productInput.value = "";
    productInput.focus();
}


// Switches an <li> into edit mode (replaces the text with an input box)
function startEditing(listItem) {

    // If another item is already being edited, save it first
    if (itemBeingEdited && itemBeingEdited !== listItem) {
        saveEdit(itemBeingEdited);
    }

    const nameSpan = listItem.querySelector(".product-name");

    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.className = "edit-input";
    editInput.value = nameSpan.textContent;

    listItem.replaceChild(editInput, nameSpan);
    listItem.classList.add("editing");
    listItem.querySelector(".edit-btn").textContent = "Save";

    editInput.focus();
    itemBeingEdited = listItem;
}


// Saves the edited text and switches the <li> back to normal mode
function saveEdit(listItem) {

    const editInput = listItem.querySelector(".edit-input");
    if (!editInput) {
        return;
    }

    const nameSpan = document.createElement("span");
    nameSpan.className = "product-name";

    // Keep old name if user cleared the input
    nameSpan.textContent = editInput.value.trim() || editInput.defaultValue;

    listItem.replaceChild(nameSpan, editInput);
    listItem.classList.remove("editing");
    listItem.querySelector(".edit-btn").textContent = "Edit";

    itemBeingEdited = null;
}


// ---------------- Event Listeners ----------------

addButton.addEventListener("click", addProduct);

// Pressing Enter in the input box also adds a product
productInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addProduct();
    }
});

// EVENT DELEGATION: one listener on the parent <ul> handles
// Edit/Delete clicks for all current AND future <li> items
productList.addEventListener("click", (event) => {

    const clickedElement = event.target;
    const listItem = clickedElement.closest("li");

    if (clickedElement.classList.contains("delete-btn")) {
        if (listItem === itemBeingEdited) {
            itemBeingEdited = null;
        }
        listItem.remove();
    }
    else if (clickedElement.classList.contains("edit-btn")) {
        if (listItem === itemBeingEdited) {
            saveEdit(listItem);        // Button shows "Save" while editing
        } else {
            startEditing(listItem);
        }
    }
});

// Pressing Enter inside an edit input saves it (also delegated)
productList.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && event.target.classList.contains("edit-input")) {
        saveEdit(event.target.closest("li"));
    }
});

// AUTO-SAVE: clicking anywhere outside the edited item saves it
document.addEventListener("click", (event) => {
    if (itemBeingEdited && !itemBeingEdited.contains(event.target)) {
        saveEdit(itemBeingEdited);
    }
});


// Some starting products
["Laptop", "Headphones", "Keyboard"].forEach((product) => {
    productList.appendChild(createProductItem(product));
});

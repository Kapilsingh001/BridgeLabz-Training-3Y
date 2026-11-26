// DOM references
const gallery = document.getElementById("gallery");
const modalOverlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");


// Opens the modal with a bigger version of the clicked image
function openModal(clickedImage) {
    modalImage.src = clickedImage.getAttribute("data-large");
    modalImage.alt = clickedImage.alt;
    modalCaption.textContent = clickedImage.alt;
    modalOverlay.classList.add("open");
}

// Closes the modal
function closeModal() {
    modalOverlay.classList.remove("open");
    modalImage.src = "";
}


// Event delegation: one listener on the gallery for all 6 images
gallery.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
        openModal(event.target);
    }
});

// Clicking the dark overlay (outside the modal box) closes the modal
modalOverlay.addEventListener("click", () => {
    closeModal();
});

// Clicking INSIDE the modal box: stop the click from bubbling up to
// the overlay, otherwise the overlay listener above would close it
modalContent.addEventListener("click", (event) => {
    event.stopPropagation();
});

// Extra: Escape key also closes the modal
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
});

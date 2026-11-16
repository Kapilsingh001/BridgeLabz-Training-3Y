// DOM references
const searchBox = document.getElementById("searchBox");
const noResultsRow = document.getElementById("noResults");

// All student rows (excluding the "No results found" row)
const studentRows = document.querySelectorAll("#studentTableBody tr:not(#noResults)");


// Filters the table rows based on the search text
function filterTable() {

    // Lowercase both sides so the search is case-insensitive
    const searchText = searchBox.value.trim().toLowerCase();

    let visibleRowCount = 0;

    studentRows.forEach((row) => {

        // textContent of the row contains Name + Branch + CGPA
        const rowText = row.textContent.toLowerCase();
        const isMatch = rowText.includes(searchText);

        row.style.display = isMatch ? "" : "none";

        if (isMatch) {
            visibleRowCount++;
        }
    });

    // Show "No results found" only when nothing matches
    noResultsRow.style.display = visibleRowCount === 0 ? "" : "none";
}


// "input" fires on every change (typing, deleting, pasting)
searchBox.addEventListener("input", filterTable);

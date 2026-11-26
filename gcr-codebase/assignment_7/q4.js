// DOM references
const themeButtons = document.getElementById("themeButtons");
const themeInfo = document.getElementById("themeInfo");


// Applies a theme to <body> using ONLY setAttribute()
function applyTheme(themeName) {

    // Adds the theme class to <body> (replaces any previous theme class)
    document.body.setAttribute("class", "theme-" + themeName);

    // Stores the current theme in a custom data attribute
    document.body.setAttribute("data-theme", themeName);

    showThemeInfo();
}


// Displays the current attribute values (read back using getAttribute)
function showThemeInfo() {
    themeInfo.innerHTML =
        "Current theme: <b>" + document.body.getAttribute("data-theme") + "</b><br>" +
        "&lt;body class=\"" + document.body.getAttribute("class") + "\" " +
        "data-theme=\"" + document.body.getAttribute("data-theme") + "\"&gt;";
}


// One listener on the button container handles all three buttons
themeButtons.addEventListener("click", (event) => {

    const themeName = event.target.getAttribute("data-theme-name");

    if (themeName) {
        applyTheme(themeName);
    }
});


showThemeInfo();

$(document).ready(function () {

    const $courses = $("#courseList li");
    const totalCourses = $courses.length;

    // Save each course's original title so it can be restored after highlighting
    $courses.find(".course-title").each(function () {
        $(this).data("originalTitle", $(this).text());
    });


    // Escapes special regex characters so input like "C++" or "CI/CD" works safely
    function escapeRegex(text) {
        return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }


    // Rebuilds a course title, wrapping matched parts in a <span> styled with .css()
    function highlightTitle($title, searchText) {
        const originalTitle = $title.data("originalTitle");
        $title.empty();

        if (searchText === "") {
            $title.text(originalTitle);
            return;
        }

        // split() with a capturing group keeps the matched parts in the result
        const parts = originalTitle.split(new RegExp("(" + escapeRegex(searchText) + ")", "i"));

        parts.forEach(function (part) {
            if (part.toLowerCase() === searchText.toLowerCase()) {
                // 2. Highlight the matched text using .css()
                $("<span></span>")
                    .text(part)
                    .css({ "background-color": "#fde047", "font-weight": "bold" })
                    .appendTo($title);
            } else {
                $title.append(document.createTextNode(part));
            }
        });
    }


    // Filters the course list based on the search box
    function filterCourses() {
        const searchText = $("#searchInput").val().trim();
        const hideNonMatching = $("#hideNonMatching").is(":checked");
        let matchedCount = 0;

        $courses.each(function () {
            const $course = $(this);
            const $title = $course.find(".course-title");
            const isMatch = $title.data("originalTitle").toLowerCase().includes(searchText.toLowerCase());

            if (isMatch) {
                matchedCount++;
            }

            highlightTitle($title, isMatch ? searchText : "");

            // 3. .toggle(boolean): show if true, hide if false
            // If "hide" is unchecked, every course stays visible but non-matches are dimmed
            $course.toggle(isMatch || !hideNonMatching);
            $course.css("opacity", isMatch ? 1 : 0.4);
        });

        // 4. Show the number of matched courses
        $("#matchCount").text(searchText === ""
            ? "Showing all " + totalCourses + " courses"
            : matchedCount + " of " + totalCourses + " courses match \"" + searchText + "\"");

        $("#noCourses").toggle(matchedCount === 0);
    }


    // 1. .keyup() runs the filter after every key is released
    $("#searchInput").keyup(filterCourses);

    // "search" event covers the small x button inside type="search" inputs
    $("#searchInput").on("search", filterCourses);

    // Re-filter when the hide checkbox changes
    $("#hideNonMatching").change(filterCourses);

    // 5. Clear -> empty the search box and show all courses again
    $("#clearButton").click(function () {
        $("#searchInput").val("").focus();
        filterCourses();
    });

    filterCourses();
});

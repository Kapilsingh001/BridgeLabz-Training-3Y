$(document).ready(function () {

    const DEPARTMENT_COLOR = "#dbeafe";

    // Removes every highlight added by the features below
    function clearHighlights() {
        $(".members li")
            .removeClass("report-highlight random-pick sibling-highlight")
            .css("background-color", "");
    }


    // 1. Click a manager -> highlight all of their direct reports
    $(".manager").click(function () {
        clearHighlights();

        const managerId = $(this).data("manager-id");

        // Attribute selector finds employees whose data-reports-to matches this manager
        const $directReports = $('.employee[data-reports-to="' + managerId + '"]');
        $directReports.addClass("report-highlight");

        $("#statusText").text($(this).find(".emp-name").text() + " has " +
            $directReports.length + " direct reports.");
    });


    // 2. Hover an employee name -> show contact info using .next()
    // .next() selects the element immediately after .emp-name, i.e. the .contact span
    $(".emp-name").hover(
        function () {
            $(this).next(".contact").fadeIn(150);
        },
        function () {
            $(this).next(".contact").fadeOut(150);
        }
    );


    // 3. Click a department name -> color all members using .children()
    // .siblings(".members") gets the <ul>, .children() gets every <li> inside it
    $(".dept-name").click(function () {
        clearHighlights();

        const $members = $(this).siblings(".members").children();
        $members.css("background-color", DEPARTMENT_COLOR);

        $("#statusText").text($(this).text() + " department has " + $members.length + " members.");
    });


    // 4. Pick a random employee -> highlight their sibling employees
    $("#randomEmployeeButton").click(function () {
        clearHighlights();

        const $allEmployees = $(".employee");
        const randomIndex = Math.floor(Math.random() * $allEmployees.length);
        const $randomEmployee = $allEmployees.eq(randomIndex);

        $randomEmployee.addClass("random-pick");

        // .siblings(".employee") = other employees in the same <ul> (not the manager)
        const $siblingEmployees = $randomEmployee.siblings(".employee");
        $siblingEmployees.addClass("sibling-highlight");

        // Make sure the team is visible
        $randomEmployee.parent().slideDown(200);

        $("#statusText").text("Random pick: " + $randomEmployee.find(".emp-name").text() +
            " (" + $siblingEmployees.length + " siblings highlighted)");
    });


    // 5. Collapse / expand a team using .parent() and .find()
    // .parent() = the <section class="department">, .find(".members") = its member list
    $(".toggle-team").click(function () {
        const $button = $(this);
        const $memberList = $button.parent().find(".members");

        $memberList.slideToggle(300, function () {
            $button.text($memberList.is(":visible") ? "Collapse Team" : "Expand Team");
        });
    });


    $("#clearButton").click(function () {
        clearHighlights();
        $("#statusText").text("Highlights cleared.");
    });
});

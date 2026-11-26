$(document).ready(function () {

    const HIGHLIGHT_COLOR = "#fef08a";

    // 1. Click a question -> toggle its answer
    // .next(".answer") selects the answer <div> right after the clicked question
    $(".question").click(function () {
        $(this).next(".answer").stop(true, true).slideToggle(250);
    });

    // 2. Hover -> change the question color (class adds the blue text color)
    $(".question").hover(
        function () {
            $(this).addClass("hovered");
        },
        function () {
            $(this).removeClass("hovered");
        }
    );

    // 3. Double-click a question -> collapse ALL answers
    // (a double-click also fires two single clicks, which toggle the answer
    //  open and closed again - so we simply slide every answer up)
    $(".question").dblclick(function () {
        $(".answer").stop(true, true).slideUp(250);
    });

    // 4. Focus on an answer input -> highlight its parent question
    // .closest() walks UP to the .faq-item, .find() walks DOWN to its .question
    $(".answer input").focus(function () {
        $(this).closest(".faq-item").find(".question").css("background-color", HIGHLIGHT_COLOR);
    });

    // 5. Blur (leave the input) -> reset the question's background
    // Setting a css value to "" removes the inline style, so the CSS file value returns
    $(".answer input").blur(function () {
        $(this).closest(".faq-item").find(".question").css("background-color", "");
    });
});

/*
    jqV1 = jQuery 1.12.4  -> carousel + active widget highlight
    jqV2 = jQuery 3.7.1   -> modal popups + tooltips

    Both were created in q9.html using jQuery.noConflict(true).
    Each version is wrapped in its own function where "$" is a LOCAL
    name for that version, so the two never clash.
*/


// ======================= jQuery VERSION 1 =======================
(function ($) {

    $(function () {   // Same as $(document).ready()

        // 1. Carousel slider rotation
        const SLIDE_INTERVAL = 3000;
        const $slides = $(".slide");
        let currentSlide = 0;
        let slideTimer;

        function showSlide(newIndex) {
            $slides.eq(currentSlide).fadeOut(400);

            // Wrap around at both ends (works for negative numbers too)
            currentSlide = (newIndex + $slides.length) % $slides.length;
            $slides.eq(currentSlide).fadeIn(400);
        }

        function restartTimer() {
            clearInterval(slideTimer);
            slideTimer = setInterval(function () {
                showSlide(currentSlide + 1);
            }, SLIDE_INTERVAL);
        }

        $slides.eq(0).show();
        restartTimer();

        $("#nextSlide").click(function () {
            showSlide(currentSlide + 1);
            restartTimer();
        });

        $("#prevSlide").click(function () {
            showSlide(currentSlide - 1);
            restartTimer();
        });


        // 3. Highlight the active widget (the one last clicked)
        $(".widget").click(function () {
            $(".widget").removeClass("active");
            $(this).addClass("active");

            $("#activeWidgetText").text("Active widget: " + $(this).find("h2").text() +
                " (highlighted by jQuery " + $.fn.jquery + ")");
        });

    });

})(jqV1);


// ======================= jQuery VERSION 2 =======================
(function ($) {

    $(function () {

        // Show which versions are running side by side
        $("#versionInfo").text("Version 1: jQuery " + jqV1.fn.jquery +
            " | Version 2: jQuery " + $.fn.jquery);


        // 2. Modal popups for notifications
        function openModal(message) {
            $("#modalMessage").text(message);
            $("#notificationModal").css("display", "flex").hide().fadeIn(200);
        }

        function closeModal() {
            $("#notificationModal").fadeOut(200);
        }

        $(".notify-btn").on("click", function () {
            openModal($(this).data("message"));
        });

        $("#closeModal").on("click", closeModal);

        // Clicking the dark overlay (but not the box) closes the modal
        $("#notificationModal").on("click", function (event) {
            if (event.target === this) {
                closeModal();
            }
        });


        // 4. Tooltips on hover for every element with a data-tooltip attribute
        const $tooltip = $('<div class="tooltip"></div>').hide().appendTo("body");

        $("[data-tooltip]").on("mouseenter", function () {
            const $element = $(this);
            const position = $element.offset();   // Position relative to the page

            $tooltip
                .text($element.data("tooltip"))
                .css({
                    top: position.top - 34,
                    left: position.left
                })
                .stop(true, true)
                .fadeIn(150);
        });

        $("[data-tooltip]").on("mouseleave", function () {
            $tooltip.stop(true, true).fadeOut(100);
        });

    });

})(jqV2);

$(document).ready(function () {

    const ANIMATION_SPEED = 500;
    const ROTATION_INTERVAL = 5000;   // 5 seconds


    // Returns the banners chosen in the dropdown (one banner or all of them)
    function getTargetBanners() {
        const selectedValue = $("#bannerSelect").val();

        if (selectedValue === "all") {
            return $("#bannerList .banner");
        }

        // Attribute selector picks the banner with the matching data-banner value
        return $('#bannerList .banner[data-banner="' + selectedValue + '"]');
    }


    // ---------------- Manual effects ----------------

    // 1. Hide -> hides the specific banner(s) instantly
    $("#hideButton").click(function () {
        getTargetBanners().hide();
    });

    // 2. Show -> shows hidden banner(s)
    $("#showButton").click(function () {
        getTargetBanners().show();
    });

    // 3. Slide Up / Slide Down / Slide Toggle
    $("#slideUpButton").click(function () {
        getTargetBanners().slideUp(ANIMATION_SPEED);
    });

    $("#slideDownButton").click(function () {
        getTargetBanners().slideDown(ANIMATION_SPEED);
    });

    $("#slideToggleButton").click(function () {
        getTargetBanners().slideToggle(ANIMATION_SPEED);
    });

    // 4. Fade Out / Fade In -> hide/show gradually by changing opacity
    $("#fadeOutButton").click(function () {
        getTargetBanners().fadeOut(ANIMATION_SPEED);
    });

    $("#fadeInButton").click(function () {
        getTargetBanners().fadeIn(ANIMATION_SPEED);
    });


    // ---------------- 5. Auto rotation ----------------

    const $rotatorBanners = $("#rotator .banner");
    let currentBannerIndex = 0;
    let rotationTimer = null;

    function updateRotatorStatus() {
        $("#rotatorStatus").text("Showing banner " + (currentBannerIndex + 1) + " of " + $rotatorBanners.length);
    }

    // Fade out the current banner, then fade in the next one
    function showNextBanner() {
        const $currentBanner = $rotatorBanners.eq(currentBannerIndex);

        currentBannerIndex = (currentBannerIndex + 1) % $rotatorBanners.length;
        const $nextBanner = $rotatorBanners.eq(currentBannerIndex);

        // fadeOut's callback runs after the fade-out animation completes
        $currentBanner.fadeOut(ANIMATION_SPEED, function () {
            $nextBanner.fadeIn(ANIMATION_SPEED);
        });

        updateRotatorStatus();
    }

    function startRotation() {
        rotationTimer = setInterval(showNextBanner, ROTATION_INTERVAL);
        $("#rotationToggleButton").text("Pause Rotation");
    }

    function stopRotation() {
        clearInterval(rotationTimer);
        rotationTimer = null;
        $("#rotationToggleButton").text("Resume Rotation");
    }

    // Show the first banner and start rotating
    $rotatorBanners.eq(0).fadeIn(ANIMATION_SPEED);
    updateRotatorStatus();
    startRotation();

    // Pause / resume button
    $("#rotationToggleButton").click(function () {
        if (rotationTimer) {
            stopRotation();
        } else {
            startRotation();
        }
    });
});

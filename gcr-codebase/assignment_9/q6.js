$(document).ready(function () {

    // Tracks whether notifications are enabled
    let notificationsEnabled = false;


    // 5. Creates a message element and inserts it into the DOM,
    // then fades it out and removes it after a few seconds
    function showMessage(text, type) {
        const $message = $("<div></div>")
            .addClass("message " + type)
            .text(text)
            .hide();

        // prependTo() inserts the new element at the top of #messageArea
        $message.prependTo("#messageArea").fadeIn(200);

        $message.delay(3000).fadeOut(400, function () {
            $(this).remove();
        });
    }


    // Updates the notification status box
    function updateNotificationStatus() {
        $("#notificationStatus")
            .toggleClass("on", notificationsEnabled)
            .toggleClass("off", !notificationsEnabled)
            .text("Notifications are " + (notificationsEnabled ? "ENABLED" : "DISABLED"));
    }


    // 1. Subscribe -> enable notifications
    $("#subscribeButton").on("click", function () {
        if (notificationsEnabled) {
            showMessage("You are already subscribed.", "info");
            return;
        }
        notificationsEnabled = true;
        updateNotificationStatus();
        showMessage("Subscribed successfully! Notifications enabled.", "success");
    });

    // 2. Unsubscribe -> disable notifications
    $("#unsubscribeButton").on("click", function () {
        if (!notificationsEnabled) {
            showMessage("You are already unsubscribed.", "info");
            return;
        }
        notificationsEnabled = false;
        updateNotificationStatus();
        showMessage("Unsubscribed. Notifications disabled.", "error");
    });


    // Click handler for a topic's "Notify Me" button
    function handleNotifyClick() {
        const topicName = $(this).siblings("span").text();

        if (!notificationsEnabled) {
            showMessage("Enable notifications first to get updates on \"" + topicName + "\".", "error");
            return;
        }
        showMessage("You will be notified about \"" + topicName + "\".", "success");
    }

    // Click handler for a topic's "Remove" button
    function handleRemoveClick() {
        const $topicItem = $(this).closest("li");
        const topicName = $topicItem.find("span").text();

        // 4. .off() DETACHES the click handlers from this topic's buttons,
        // so they stop responding immediately (even during the fade-out)
        $topicItem.find("button").off("click");

        $topicItem.fadeOut(300, function () {
            $(this).remove();
        });

        showMessage("Subscription \"" + topicName + "\" removed.", "info");
    }

    // Attaches click events to one topic <li> using .on()
    function attachTopicEvents($topicItem) {
        $topicItem.find(".notify-btn").on("click", handleNotifyClick);
        $topicItem.find(".remove-btn").on("click", handleRemoveClick);
    }

    // Attach events to the 5 starting topics
    $("#topicList li").each(function () {
        attachTopicEvents($(this));
    });


    // 3. Add a new topic dynamically and attach its events with .on()
    function addTopic() {
        const topicName = $("#topicInput").val().trim();

        if (topicName === "") {
            showMessage("Please enter a topic name.", "error");
            return;
        }

        // Prevent duplicate topics (case-insensitive)
        const alreadyExists = $("#topicList span").filter(function () {
            return $(this).text().toLowerCase() === topicName.toLowerCase();
        }).length > 0;

        if (alreadyExists) {
            showMessage("\"" + topicName + "\" is already in your topics.", "error");
            return;
        }

        // Build the new <li> (.text() is used so user input is never treated as HTML)
        const $newTopic = $("<li></li>")
            .append($("<span></span>").text(topicName))
            .append('<button class="notify-btn">Notify Me</button>')
            .append('<button class="remove-btn">Remove</button>');

        attachTopicEvents($newTopic);
        $("#topicList").append($newTopic);

        $("#topicInput").val("").focus();
        showMessage("Topic \"" + topicName + "\" added.", "success");
    }

    $("#addTopicButton").on("click", addTopic);

    // Enter key in the input also adds a topic
    $("#topicInput").on("keyup", function (event) {
        if (event.key === "Enter") {
            addTopic();
        }
    });
});

$(document).ready(function () {

    let newPostNumber = 1;


    // Builds a new <article class="post"> element
    // .text() is used so typed content is never treated as HTML
    function createPost(title, content) {
        return $('<article class="post"></article>')
            .append($("<h3></h3>").text(title))
            .append($("<p></p>").text(content));
    }

    // Reads the title/content inputs (uses defaults if empty)
    function readPostInputs(defaultTitle) {
        const title = $("#postTitle").val().trim() || defaultTitle;
        const content = $("#postContent").val().trim() || "This is a new blog post.";

        $("#postTitle, #postContent").val("");
        return { title, content };
    }

    function updatePostCount() {
        $("#postCount").text($("#postList .post").length);
    }


    // 1. Add New Post -> .append() adds it at the END of the list
    $("#addPostButton").click(function () {
        const post = readPostInputs("New Post " + newPostNumber++);
        const $newPost = createPost(post.title, post.content).hide();

        $("#postList").append($newPost);
        $newPost.fadeIn(300);

        updatePostCount();
        applyKeywordHighlight();
    });


    // 2. Prepend Featured Post -> .prepend() adds it at the TOP of the list
    $("#prependFeaturedButton").click(function () {
        const post = readPostInputs("Featured Post");
        const $featuredPost = createPost(post.title, post.content)
            .addClass("featured")
            .hide();

        $featuredPost.find("h3").before('<span class="tag featured-label">Featured</span>');

        $("#postList").prepend($featuredPost);
        $featuredPost.slideDown(300);

        updatePostCount();
        applyKeywordHighlight();
    });


    // 3. Remove Last Post -> .last() selects the final post, .remove() deletes it
    $("#removeLastButton").click(function () {
        const $lastPost = $("#postList .post").last();

        if ($lastPost.length === 0) {
            alert("There are no posts to remove.");
            return;
        }

        $lastPost.fadeOut(300, function () {
            $(this).remove();
            updatePostCount();
        });
    });


    // Select a post by clicking it (needed for adding tags)
    // Delegated with .on() so posts added later can also be selected
    $("#postList").on("click", ".post", function () {
        $(".post").removeClass("selected");
        $(this).addClass("selected");
    });


    // 4. Add tags using .before() / .after()
    function addTag(position) {
        const tagName = $("#tagInput").val().trim();
        const $selectedPost = $("#postList .post.selected");

        if ($selectedPost.length === 0) {
            alert("Please click a post first to select it.");
            return;
        }
        if (tagName === "") {
            alert("Please enter a tag name.");
            return;
        }

        const $tag = $('<span class="tag"></span>').text("#" + tagName);
        const $title = $selectedPost.find("h3");

        if (position === "before") {
            $title.before($tag);     // Inserts the tag just ABOVE the title
        } else {
            $title.after($tag);      // Inserts the tag just BELOW the title
        }

        $("#tagInput").val("");
    }

    $("#tagBeforeButton").click(function () {
        addTag("before");
    });

    $("#tagAfterButton").click(function () {
        addTag("after");
    });


    // 5. Highlight posts that contain the keyword (title, content or tags)
    function applyKeywordHighlight() {
        const keyword = $("#keywordInput").val().trim().toLowerCase();
        const $posts = $("#postList .post");

        $posts.removeClass("keyword-match");

        if (keyword === "") {
            $("#keywordResult").text("");
            return;
        }

        // .filter() keeps only the posts whose text contains the keyword
        const $matchingPosts = $posts.filter(function () {
            return $(this).text().toLowerCase().includes(keyword);
        });

        $matchingPosts.addClass("keyword-match");
        $("#keywordResult").text($matchingPosts.length + " post(s) contain \"" + keyword + "\"");
    }

    // Highlight updates live while typing
    $("#keywordInput").on("input", applyKeywordHighlight);
});

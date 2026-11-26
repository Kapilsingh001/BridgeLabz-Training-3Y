$(document).ready(function () {

    // 4. ATTRIBUTE SELECTOR: [data-discount] matches only products that
    // have a data-discount attribute, so only they get the discount style
    $(".product[data-discount]").each(function () {
        const discountPercent = $(this).data("discount");

        $(this)
            .addClass("discounted")
            .prepend('<span class="discount-badge">' + discountPercent + '% OFF</span>');
    });

    // Attribute selector with a value: products whose data-stock is exactly "0"
    $('.product[data-stock="0"]')
        .addClass("out-of-stock")
        .find(".price")
        .after(' <span class="stock-label">Out of stock</span>');


    // 1 + 5. Click a product -> highlight it, or alert if it is out of stock
    $(".product").click(function () {

        // .data("stock") reads the data-stock attribute (converted to a number)
        const stock = $(this).data("stock");

        if (stock === 0) {
            alert("Sorry, \"" + $(this).find("h3").text() + "\" is currently out of stock.");
            return;
        }

        // toggleClass adds the class if missing, removes it if present
        $(this).toggleClass("highlight");
    });


    // 2. Hover -> show extra details (first function = mouseenter, second = mouseleave)
    $(".product").hover(
        function () {
            $(this).find(".details").stop(true, true).slideDown(200);
        },
        function () {
            $(this).find(".details").stop(true, true).slideUp(200);
        }
    );


    // 3. Favorite icon -> toggle the "selected" class
    $(".favorite").click(function (event) {

        // Stop the click from reaching the product (no highlight / stock alert)
        event.stopPropagation();

        $(this).toggleClass("selected");

        // Count how many favorites are currently selected
        $("#favoriteCount").text($(".favorite.selected").length);
    });
});

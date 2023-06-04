$('#sort-selector').change(function () {
    let selector = $(this);
    let currentUrl = new URL(window.location);

    let selectedVal = selector.val();
    if (selectedVal != 'reset') {
        let sort = selectedVal.split("_")[0];
        let direction = selectedVal.split("_")[1];

        currentUrl.searchParams.set("sort", sort);
        currentUrl.searchParams.set("direction", direction);

        window.location.replace(currentUrl);
    } else {
        currentUrl.searchParams.delete("sort");
        currentUrl.searchParams.delete("direction");

        window.location.replace(currentUrl);
    }
});

jQuery(document).ready(function ($) {
    let $toTopBtn = $('#toTopBtn');

    // Show/hide the back to top button based on scroll position
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) { // Change 100 to the desired scroll position
            $toTopBtn.removeClass('hidden');
        } else {
            $toTopBtn.addClass('hidden');
        }
    });

    // Click event to scroll to top
    $toTopBtn.click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 'slow');
    });
});
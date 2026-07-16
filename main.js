// Removes spinner when page finishes loading
// ===================================================================
let spinnerWrapper = document.querySelector(".spinner-wrapper");
let html = document.querySelector("html");
window.addEventListener("load", function() {
    // removes spinner
    spinnerWrapper.parentElement.parentElement;
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
    // changes overflow values
    html.style.overflow = "visible";
    html.style.overflowX = "hidden";
});
// ===================================================================

// Experience filter + accordion
// ===================================================================
document.querySelectorAll(".pill").forEach((pill) => {
    pill.addEventListener("click", function() {
        document.querySelectorAll(".pill").forEach((p) => p.classList.remove("pill-active"));
        pill.classList.add("pill-active");
        const filter = pill.dataset.filter;
        document.querySelectorAll(".xp-row").forEach((row) => {
            row.style.display =
                filter === "all" || row.dataset.category === filter ? "" : "none";
        });
    });
});

document.querySelectorAll(".xp-head").forEach((head) => {
    head.addEventListener("click", function() {
        const row = head.closest(".xp-row");
        row.classList.toggle("open");
        head.setAttribute("aria-expanded", row.classList.contains("open"));
    });
});
// ===================================================================

// Nav Bar
// ===================================================================
$(".menu-toggle").click(function() {
    $(".site-nav").toggleClass("site-nav--open", 500);
    $(this).toggleClass("open");
});
// ===================================================================
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

// Experience filter + accordions
// ===================================================================
function applyFilter(filter) {
    document.querySelectorAll(".xp-row").forEach((row) => {
        row.style.display =
            filter === "all" || row.dataset.category === filter ? "" : "none";
    });
}

document.querySelectorAll(".pill").forEach((pill) => {
    pill.addEventListener("click", function() {
        document.querySelectorAll(".pill").forEach((p) => p.classList.remove("pill-active"));
        pill.classList.add("pill-active");
        applyFilter(pill.dataset.filter);
    });
});

applyFilter(document.querySelector(".pill-active").dataset.filter);

function toggleRow(head) {
    const row = head.closest(".xp-row, .pf-row");
    row.classList.toggle("open");
    head.setAttribute("aria-expanded", row.classList.contains("open"));
}

document.querySelectorAll(".xp-head, .pf-head").forEach((head) => {
    head.addEventListener("click", function(event) {
        if (event.target.closest("a")) return; // let project title links navigate
        toggleRow(head);
    });
    if (head.tagName === "BUTTON") return; // buttons already toggle via click on Enter/Space
    head.addEventListener("keydown", function(event) {
        if (event.key !== "Enter" && event.key !== " ") return;
        if (event.target.closest("a")) return;
        event.preventDefault();
        toggleRow(head);
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

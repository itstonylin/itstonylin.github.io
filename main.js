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

// Portfolio
// ===================================================================

filterSelection("all");

function filterSelection(c) {
    let x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}

function addClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

/* Add the active class to the button passed in */
function setThisButtonActive(button) {
    button.classList.add("portfolio-buttons-active");
}

/* select all active buttons, and remove the active class from them */
function resetActiveButton() {
    document.querySelectorAll(".portfolio-buttons-active").forEach((button) => {
        button.classList.remove("portfolio-buttons-active");
    });
}

document.querySelectorAll(".portfolio-buttons").forEach((button) => {
    button.addEventListener("click", function() {
        resetActiveButton();
        setThisButtonActive(button);
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
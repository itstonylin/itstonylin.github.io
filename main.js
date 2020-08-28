// Removes spinner when page finishes loading
// ===================================================================
let spinnerWrapper = document.querySelector(".spinner-wrapper");
let html = document.querySelector("html");
window.addEventListener("load", function () {
    // removes spinner
    spinnerWrapper.parentElement.parentElement;
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
    // changes overflow values
    html.style.overflow = "visible";
    html.style.overflowX = "hidden";
});
// ===================================================================

// Gives the modal functionality
// ===================================================================
document.getElementsByClassName("tablink")[0].click();

function openCity(evt, cityName) {
    let i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].classList.remove("w3-light-grey");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.classList.add("w3-light-grey");
}
// ===================================================================

// Allows the modal to be closed by clicking outside of it
// ===================================================================
// Get the modal
let modal = document.getElementById("id01");
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
// ===================================================================

// Nav Bar
// ===================================================================
$(".menu-toggle").click(function () {
    $(".site-nav").toggleClass("site-nav--open", 500);
    $(this).toggleClass("open");
});

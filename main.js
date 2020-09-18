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

// Gallery
// ===================================================================

filterSelection("all")
function filterSelection(c) {
  let x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    console.log('hi')
  }
}

function addClass(element, name) {
    let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
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

// Add active class to the current button (highlight it)
let btnContainer = document.getElementById("myBtnContainer");
let btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// ===================================================================

// Nav Bar
// ===================================================================
$(".menu-toggle").click(function () {
    $(".site-nav").toggleClass("site-nav--open", 500);
    $(this).toggleClass("open");
});
// ===================================================================


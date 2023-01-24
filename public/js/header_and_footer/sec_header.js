let sec_ham_btn = document.getElementById("sec_ham_btn");
let sec_show = document.getElementById("sec_show");
let close_btn = document.getElementById("close_btn");
sec_ham_btn.addEventListener("click", () => {
  sec_show.classList.remove("hidden1");
});
close_btn.addEventListener("click", () => {
  sec_show.classList.add("hidden1");
});

// var drop_down_service = document.getElementById("drop_down_service");
//on scroll color change section-navbar starts
var sec_nav = document.getElementById("sec_nav");
function changeBg() {
  var scrollValue = window.scrollY;
  if (scrollValue < 10) {
    sec_nav.classList.remove("scrolled");
    // drop_down_service.classList.remove("scrolled");
  } else {
    sec_nav.classList.add("scrolled");
    // drop_down_service.classList.add("scrolled");
  }
}
window.addEventListener("scroll", changeBg);

//on scroll color change section-navbar ends

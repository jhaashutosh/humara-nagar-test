//============================================================ drop down starts====================================
var nav_home = document.getElementById("nav_home");
var nav_services = document.getElementById("nav_services");
var nav_contact = document.getElementById("nav_contact");
var drop_down_service = document.getElementById("drop_down_service");

nav_services.addEventListener("mouseenter", () => {
  drop_down_service.style.display = "block";
});

nav_home.addEventListener("mouseenter", () => {
  drop_down_service.style.display = "none";
});
nav_contact.addEventListener("mouseenter", () => {
  drop_down_service.style.display = "none";
});
drop_down_service.addEventListener("mouseleave", () => {
  drop_down_service.style.display = "none";
});

//============================================================ drop down ends====================================

//on scroll color change navbar starts
var nav = document.getElementById("nav");
nav.classList.add("top_nav_scrolled");
top_nav = document.querySelector(".top_nav_scrolled");
top_nav.style.zIndex = "5";
function changeBg() {
  var scrollValue = window.scrollY;
  if (scrollValue < 10) {
    nav.classList.remove("scrolled");
    // drop_down_service.classList.remove("scrolled");
  } else {
    nav.classList.add("scrolled");
    // drop_down_service.classList.add("scrolled");
  }
}
window.addEventListener("scroll", changeBg);

//on scroll color change navbar ends

// ===================================for sidebar(ham_btn) starts===============================================
let show_sidebar = document.getElementById("show");
let ham_btn = document.getElementById("ham_btn");
ham_btn.addEventListener("click", () => {
  show_sidebar.classList.toggle("hidden1");
});
// ===================================for sidebar(ham_btn) ends===============================================

let service_btn_ham_menu_header = document.querySelector(
  ".service_btn_ham_menu_header"
);
let service_dropdown_menu = document.querySelector(".service_dropdown_menu");
service_btn_ham_menu_header.addEventListener("click", () => {
  service_dropdown_menu.classList.toggle("service_hide");
});

let menu_list_items = Array.from(document.querySelectorAll(".ham_menu li"));

menu_list_items.forEach((element, id) => {
  if (id != 2) {
    element.addEventListener("click", () => {
      service_dropdown_menu.classList.add("service_hide");
    });
  }
});

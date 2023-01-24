// ===========================================================Footer dropdown menu starts===================
const footer_list = Array.from(document.querySelectorAll(".footer_content h3"));
const footer_list_icon = Array.from(
  document.querySelectorAll(".footer_dropdown")
);
const footer_list_ul = Array.from(document.querySelectorAll(".footer_list"));

var show_counter = [0, 0, 0, 0];

footer_list_icon.forEach(function (element, index) {
  footer_list_icon[index].addEventListener("click", () => {
    show_counter[index]++;
    for (let i = 0; i < footer_list_icon.length; i++) {
      footer_list_ul[i].classList.remove("show_footer_list");
      footer_list_icon[i].style.transform = "rotateX(0deg)";
    }
    if ((show_counter[index] + 1) % 2 == 0) {
      footer_list_ul[index].classList.add("show_footer_list");
      footer_list_icon[index].style.transform = "rotateX(180deg)";
      for (let i = 0; i < footer_list_icon.length; i++) {
        if (i != index) {
          show_counter[i] = 0;
        }
      }
    } else {
      footer_list_ul[index].classList.remove("show_footer_list");
      footer_list_icon[index].style.transform = "rotateX(0deg)";
    }
  });
});

footer_list.forEach(function (element, index) {
  footer_list[index].addEventListener("click", () => {
    show_counter[index]++;
    for (let i = 0; i < footer_list.length; i++) {
      footer_list_ul[i].classList.remove("show_footer_list");
      footer_list_icon[i].style.transform = "rotateX(0deg)";
    }
    if ((show_counter[index] + 1) % 2 == 0) {
      footer_list_ul[index].classList.add("show_footer_list");
      footer_list_icon[index].style.transform = "rotateX(180deg)";
      for (let i = 0; i < footer_list.length; i++) {
        if (i != index) {
          show_counter[i] = 0;
        }
      }
    } else {
      footer_list_ul[index].classList.remove("show_footer_list");
      footer_list_icon[index].style.transform = "rotateX(0deg)";
    }
  });
});
// ===========================================================Footer dropdown menu ends===================

var rocket_fly = document.getElementById("rocket_fly");
var count = 0;
rocket_fly.addEventListener("click", fly);
var rocket_click = document.getElementById("rocket_click");
rocket_click.addEventListener("click", fly);

function fly() {
  count++;
  if (count == 1) {
    rocket_fly.classList.remove("open");
    setTimeout(() => {
      rocket_fly.classList.add("open");
    }, 1);
    setTimeout(() => {
      count = 0;
    }, 8000);
  }
}

//This is for changing inactive to active and vise versa
var fav_title = document.getElementById("favicon_title");
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "hamara nagar";
    fav_title.setAttribute(
      "href",
      "../../public/assets/images/coming_soon_images/background_image/logo_internship.png"
    );
  } else {
    document.title = "Inactive";
    fav_title.setAttribute(
      "href",
      "../../public/assets/images/coming_soon_images/background_image/inactive.png"
    );
  }
});

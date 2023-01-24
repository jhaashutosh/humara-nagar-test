var code;
function createCaptcha() {
  //clear the contents of captcha div first
  document.getElementById("captcha").innerHTML = "";
  var charsArray =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
  var lengthOtp = 6;
  var captcha = [];
  for (var i = 0; i < lengthOtp; i++) {
    //below code will not allow Repetition of Characters
    var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
    if (captcha.indexOf(charsArray[index]) == -1)
      captcha.push(charsArray[index]);
    else i--;
  }
  var canv = document.createElement("canvas");
  canv.id = "captcha";
  canv.width = 100;
  canv.height = 50;
  var ctx = canv.getContext("2d");
  ctx.font = "25px Georgia";
  ctx.strokeText(captcha.join(""), 0, 30);
  //storing captcha so that can validate you can save it somewhere else according to your specific requirements
  code = captcha.join("");
  document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
}
function validateCaptcha() {
  if (document.getElementById("cpatchaTextBox").value != code) {
    alert("Invalid Captcha. try Again");
    createCaptcha();
  }
}

let retry_captcha = document.getElementById("retry_captcha");
retry_captcha.addEventListener("click", () => {
  createCaptcha();
});

var sub_categories = Array.from(document.querySelectorAll(".sub_category"));
var categories = Array.from(
  document.querySelectorAll(".dropdown_category_val")
);
var specific_category = document.getElementById(
  "contact_form_dropdown_services"
);
var option_val = [
  "web_development",
  "seo",
  "branding",
  "social_media_management",
  "content_management",
];
for (let j = 1; j < sub_categories.length; j++) {
  sub_categories[j].style.display = "none";
}
specific_category.addEventListener("input", function () {
  for (let i = 0; i < sub_categories.length; i++) {
    if (this.value == option_val[i]) {
      for (let j = 0; j < sub_categories.length; j++) {
        sub_categories[j].style.display = "none";
      }
      sub_categories[i].style.display = "block";
      break;
    }
  }
});

var logi = document.getElementById("btn1");
var sign = document.getElementById("btn2");
var newInp = document.getElementById("add");
var anchor = document.getElementById("anchor");
var para = document.getElementById("para");
var lastBtn = document.getElementById("last-btn");
function signup() {
  sign.style.background =
    "linear-gradient(90deg, rgb(4, 5, 77) 0%,rgba(7, 16, 119, 1) 59%, rgba(50, 129, 226, 1) 100%";
  sign.style.color = "white";
  logi.style.background = "white";
  logi.style.color = "black";
  newInp.innerHTML =
    '<input type="Password" name="" id="New-Password" placeholder="Confirm Password"  />';
  newInp.style.width = "105%";
  newInp.style.paddingLeft = "5%";
  anchor.style.display = "none";
  para.style.display = "none";
  lastBtn.innerHTML = "SignUp";

  event.preventDefault();
}

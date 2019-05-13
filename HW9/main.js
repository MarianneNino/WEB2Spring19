function showNavUl() {
  var x = document.getElementById("myTopnav");
  if (x.className === "display-toggle") {
    x.className += "responsive";
  } else {
    x.className = "display-toggle";
  }
}

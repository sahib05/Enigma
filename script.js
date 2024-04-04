function toggleMenu() {
  var menu = document.getElementById("menu");
  var overlay = document.getElementById("overlay");
  menu.classList.toggle("menu-active");
  overlay.style.display = "block";
}
function toggleMenuOff() {
  var menu = document.getElementById("menu");
  var overlay = document.getElementById("overlay");
  menu.classList.toggle("menu-active");
  overlay.style.display = "none";
}

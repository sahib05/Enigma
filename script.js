function toggleMenu() {
  var menu = document.getElementById("menu");
  var overlay = document.getElementById("overlay");
  var body = document.body;
  menu.classList.toggle("menu-active");
  overlay.style.display = "block";
  body.style.overflow = "hidden";
}
function toggleMenuOff() {
  var menu = document.getElementById("menu");
  var overlay = document.getElementById("overlay");
  var body = document.body;
  menu.classList.toggle("menu-active");
  overlay.style.display = "none";
  body.style.overflow = "auto";
}

function sendEmail() {
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  if (email && subject && message) {
      // For demonstration, we'll just log the data
      console.log('Sending email:', email, subject, message);
      alert('Email sent!');
      // Here you would typically send the data to a server or email service
  } else {
      alert('Please fill all the fields.');
  }
}


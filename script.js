
function showMessage() {
  const message = document.getElementById("message");

  if (message) {
    message.textContent =
      "Welcome to NEET SCRIPT! Start your Biology learning journey.";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("NEET SCRIPT is ready!");

  const links = document.querySelectorAll("nav a");

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      console.log("Navigation:", link.textContent);
    });
  });
});


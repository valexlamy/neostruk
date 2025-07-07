const burger = document.getElementById("burger");
const navbar = document.querySelector(".navbar");

burger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Simple optional alert for submit
/*document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Your message has been submitted!");
});*/

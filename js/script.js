var menuToggle = document.querySelector(".toggle");
var showcase = document.querySelector(".showcase");
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});

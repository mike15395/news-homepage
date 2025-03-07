let mobileMenuIcon = document.querySelector(".mobile-menu-image");
let sidebar = document.querySelector(".sidebar-mobile-menu");
let mobileClose = document.querySelector(".mobile-menu-close");

mobileMenuIcon.addEventListener("click", function () {
  sidebar.style.display = "flex";
});

mobileClose.addEventListener("click", function () {
  sidebar.style.display = "none";
});

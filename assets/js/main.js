document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const navUl = document.querySelector("nav ul");
  const overlay = document.getElementById("overlay");

  // Toggle open and close nav styles on click
  navToggle.addEventListener("click", function () {
    navUl.classList.toggle("show"); // Show/hide the mobile menu
    this.classList.toggle("active"); // Toggle hamburger to X
    overlay.classList.toggle("show"); // Show/hide the overlay
  });

  // Close the navbar and overlay when the overlay is clicked
  overlay.addEventListener("click", function () {
    navUl.classList.remove("show");
    navToggle.classList.remove("active");
    overlay.classList.remove("show");
  });

  // If a link has a dropdown, add submenu toggle.
  document
    .querySelectorAll("nav ul li a:not(:only-child)")
    .forEach(function (el) {
      el.addEventListener("click", function (e) {
        const dropdown = this.nextElementSibling;

        // Toggle the current dropdown
        if (dropdown) {
          dropdown.classList.toggle("show");
        }

        // Close other dropdowns
        document
          .querySelectorAll(".nav-dropdown")
          .forEach(function (otherDropdown) {
            if (otherDropdown !== dropdown) {
              otherDropdown.classList.remove("show");
            }
          });

        e.stopPropagation();
      });
    });

  // Clicking away from dropdown will hide it
  document.documentElement.addEventListener("click", function () {
    document.querySelectorAll(".nav-dropdown").forEach(function (dropdown) {
      dropdown.classList.remove("show");
    });
  });
});

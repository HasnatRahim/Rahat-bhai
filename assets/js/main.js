document.addEventListener('DOMContentLoaded', function () {
  // If a link has a dropdown, add sub menu toggle.
  document.querySelectorAll('nav ul li a:not(:only-child)').forEach(function (el) {
    el.addEventListener('click', function (e) {
      const dropdown = this.nextElementSibling;

      // Toggle the current dropdown with animation
      if (dropdown) {
        dropdown.classList.toggle('show');
      }

      // Close other dropdowns
      document.querySelectorAll('.nav-dropdown').forEach(function (otherDropdown) {
        if (otherDropdown !== dropdown) {
          otherDropdown.classList.remove('show');
        }
      });

      e.stopPropagation();
    });
  });

  // Clicking away from dropdown will hide it
  document.documentElement.addEventListener('click', function () {
    document.querySelectorAll('.nav-dropdown').forEach(function (dropdown) {
      dropdown.classList.remove('show');
    });
  });

  // Toggle open and close nav styles on click
  document.getElementById('nav-toggle').addEventListener('click', function () {
    const navUl = document.querySelector('nav ul');
    if (navUl) {
      navUl.classList.toggle('show');
    }

    // Hamburger to X toggle
    this.classList.toggle('active');
  });
});

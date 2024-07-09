const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector('.navbar-toggler');
const primaryNav = document.querySelector('#navbarNav'); // Use the ID selector to match the target

navToggle.addEventListener('click', () => {
  const isVisible = primaryNav.classList.contains('show'); // Bootstrap adds 'show' class to visible nav
  navToggle.setAttribute('aria-expanded', !isVisible);
  
  // Toggle the 'show' class on the nav
  primaryNav.classList.toggle('show');

  // Optionally, toggle the overlay effect
  primaryHeader.toggleAttribute('data-overlay');
});




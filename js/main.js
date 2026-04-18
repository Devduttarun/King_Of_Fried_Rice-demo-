// MOBILE MENU TOGGLE
// querySelector finds the element with that id or class
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  // addEventListener waits for a 'click' event, then runs the function
  navLinks.classList.toggle('open');
  // classList.toggle adds 'open' if it's not there, removes it if it is
  // This matches the .nav-links.open rule in your CSS
});

// SMOOTH SCROLL
// When any nav link is clicked, scroll smoothly instead of jumping
document.querySelectorAll('a[href^="#"]').forEach(link => {
  // querySelectorAll returns all <a> tags whose href starts with #
  link.addEventListener('click', (e) => {
    e.preventDefault();
    // preventDefault stops the default jump behaviour
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      navLinks.classList.remove('open'); // close mobile menu after clicking
    }
  });
});
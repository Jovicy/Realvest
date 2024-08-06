// Get the navbar toggle button and the navbar links container
const navToggle = document.querySelector('.nav-toggle');
const navLinksContainer = document.querySelector('.nav-links_container');

// Add an event listener to the navbar toggle button
navToggle.addEventListener('click', () => {
  // Toggle the visibility of the navbar links container
  navLinksContainer.classList.toggle('show');
});

// Add an event listener to the window to close the navbar on larger screens
window.addEventListener('resize', () => {
  if (window.innerWidth >= 769) {
    navLinksContainer.classList.remove('show');
  }
});
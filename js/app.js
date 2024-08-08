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

const images = [
  '../img/header-1.jpg',
  '../img/header-2.jpg',
  '../img/header-3.jpg'
];
let currentIndex = 0;

function changeBackgroundImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.querySelector('header').style.backgroundImage = `url(${images[currentIndex]})`;
}

setInterval(changeBackgroundImage, 5000); // Change image every 5 seconds

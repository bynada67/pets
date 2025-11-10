let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

window.addEventListener("scroll", function () {
  const nav = document.querySelector("header");
  nav.classList.toggle("sticky", window.scrollY)});

document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.gallery-container img');
  let currentAudio = null; 

  images.forEach((img, index) => {
    img.addEventListener('click', function() {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; 
      }

      currentAudio = new Audio(`./assets/sound${index + 1}.mp3`);
      currentAudio.play().catch(error => {
        console.error(`Error playing sound for image ${index + 1}:`, error);
        alert(`Sound file for Pet ${index + 1} not found or failed to play. Please ensure sound${index + 1}.mp3 is in the assets folder.`);
      });
    });
  });
});

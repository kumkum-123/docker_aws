// Dark mode toggle
const toggleBtn = document.getElementById('toggle-mode');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Typing effect for title
const text = "Kumkum's Portfolio";
let index = 0;
const speed = 100;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

window.onload = typeEffect;

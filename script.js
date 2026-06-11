const alertBtn = document.getElementById("alertBtn");

alertBtn.addEventListener("click", () => {
  alert("🎉 Welcome to my ApexPlanet Task 1 Project! HTML, CSS and JavaScript are working successfully.");
});

// Typing Effect
const typingText = document.getElementById("typing");
const words = ["Frontend Developer", "Full Stack Learner", "Data Analyst"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex--);
  } else {
    typingText.textContent = currentWord.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentWord.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 60 : 110);
}

typeEffect();

// Counter Animation
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;
    const increment = Math.ceil(target / 80);

    if (current < target) {
      counter.innerText = current + increment;
      setTimeout(updateCounter, 25);
    } else {
      counter.innerText = target + "+";
    }
  };

  updateCounter();
});

// Scroll Reveal
const revealElements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  revealElements.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
});

console.log("ApexPlanet Task 1 loaded successfully 🚀");
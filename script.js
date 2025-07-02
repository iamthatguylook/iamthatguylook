let counter = 0;
const counterElement = document.getElementById("counter");
const loader = document.getElementById("loader");
const mainContent = document.getElementById("main-content");

// 100 steps in 1000ms = 10ms per step
const interval = setInterval(() => {
  if (counter >= 100) {
    clearInterval(interval);

    loader.style.transition = "opacity 0.5s";
    loader.style.opacity = 0;

    setTimeout(() => {
      loader.style.display = "none";
      mainContent.style.display = "block";
    }, 500);
  } else {
    counter++;
    counterElement.textContent = `${counter}%`;
  }
}, 10);  // 100 steps * 10ms = 1000ms = 1 second

function openResume() {
    const url = 'resume.pdf'; // or 'assets/resume.pdf'
    const win = window.open(url, '_blank');
    if (win) {
      win.focus();
    } else {
      alert('Please allow popups for this site to view the resume.');
    }
  }
const section = document.querySelector(".hero-section");

section.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = section.getBoundingClientRect();

    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    section.querySelectorAll(".hero-img").forEach((img, index) => {
      const factor = (index + 1) * 5;
      img.style.transform = `rotate(${(index - 1) * 5}deg) translate(${x * factor}px, ${y * factor}px)`;
    });
});

section.addEventListener("mouseleave", () => {
    document.querySelectorAll(".hero-img").forEach((img, index) => {
      const original = [ -8, 5, -3 ]; // initial rotation values
      img.style.transform = `rotate(${original[index]}deg)`;
    });
  });


  const leftBtn = document.querySelector('.carousel-btn.left');
  const rightBtn = document.querySelector('.carousel-btn.right');
  const track = document.querySelector('.carousel-track');

  leftBtn.addEventListener('click', () => {
    track.scrollBy({ left: -300, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', () => {
    track.scrollBy({ left: 300, behavior: 'smooth' });
  });


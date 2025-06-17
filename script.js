const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");
const video = document.getElementById("modalVideo");

// Modal logic
openBtn.onclick = function () {
  modal.style.display = "flex";
  video.currentTime = 0;
  video.play();
};

closeBtn.onclick = function () {
  modal.style.display = "none";
  video.pause();
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    video.pause();
  }
};

video.addEventListener("click", function (e) {
  e.stopPropagation();
  window.open("https://t.me/Naga78Kh", "_blank");
});

// Only one confetti trigger — continuous rain
(function startConfettiRain() {
  const interval = 200;
  const defaults = {
    origin: { y: 0 },
    angle: 90,
    spread: 120,
    startVelocity: 30,
    gravity: 0.7,
    ticks: 200,
    zIndex: 1,
  };

  setInterval(() => {
    confetti({
      ...defaults,
      particleCount: 5 + Math.floor(Math.random() * 5),
      origin: { x: Math.random(), y: 0 }
    });
  }, interval);
})();
